// 实时字幕低延迟特性验证：
// 1. 原文零阻塞先上屏（onOriginal 在 translate 完成之前即被触发）
// 2. 队列积压泄洪（上游慢时跳过过时积压段，避免雪球延迟）
// 3. LiveSegmenter.peekSamples 能在说话进行中返回瞬时草稿音频
// 4. 实时字幕历史记录列表/读取/删除
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-livespeed-'))
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')
process.env.PODWAVE_MODELS_NO_PROJECT = '1'

const { LiveSegmenter, encodeWav } = await import('../src/live-audio-core.js')
const {
  startLiveSession,
  feedLiveSegment,
  queueLiveSegment,
  stopLiveSession,
  listLiveHistory,
  readLiveHistory,
  deleteLiveHistory,
} = await import('../src/live-caption.js')

const wav = Buffer.from(encodeWav(new Float32Array(1600).fill(0.2), 16000))

test('feedLiveSegment fires onOriginal immediately before slow translation finishes', async () => {
  const session = startLiveSession({ target: 'zh' })
  const events = []
  let releaseTranslate
  const translateGate = new Promise((resolve) => { releaseTranslate = resolve })

  const promise = feedLiveSegment(session, wav, {
    start: 0,
    end: 2,
    recognize: async () => {
      events.push('asr-done')
      return { text: 'Breaking news today.' }
    },
    onOriginal: (fresh) => {
      events.push(`original:${fresh[0].text}`)
    },
    translate: async (items) => {
      events.push('translate-start')
      await translateGate
      events.push('translate-done')
      return new Map(items.map((item) => [item.id, '今日突发新闻。']))
    },
  })

  // 等到 translate 开始（此时还没放行 translateGate）
  for (let i = 0; i < 40 && !events.includes('translate-start'); i += 1) {
    await new Promise((r) => setTimeout(r, 10))
  }
  assert.ok(events.includes('original:Breaking news today.'), '原文必须在翻译完成前就通知界面')
  assert.ok(!events.includes('translate-done'), '此时翻译尚未完成')
  assert.equal(session.lines.length, 1, '原文已经挂进 session.lines')
  assert.equal(session.lines[0].text, 'Breaking news today.')

  releaseTranslate()
  const result = await promise
  assert.equal(result.lines[0].translations.zh, '今日突发新闻。')
  await stopLiveSession(session, { save: false })
})

test('queueLiveSegment sheds stale queued segments when backlog piles up', async () => {
  const session = startLiveSession({ target: 'zh' })
  const seen = []
  const slowRecognize = (tag) => async () => {
    await new Promise((r) => setTimeout(r, 50))
    seen.push(tag)
    return { text: `Line ${tag}` }
  }
  const fastTranslate = async (items) => new Map(items.map((item) => [item.id, `译 ${item.text}`]))

  // 连续塞 5 段：第 1 段在跑，最多保 2 段排队，中间过时的会被丢弃
  const jobs = [1, 2, 3, 4, 5].map((n) =>
    queueLiveSegment(session, wav, { start: n, end: n + 1, recognize: slowRecognize(n), translate: fastTranslate }),
  )
  const results = await Promise.all(jobs)
  const droppedCount = results.filter((r) => r?.dropped).length
  assert.ok(droppedCount >= 1, '积压超过 2 段时应丢弃过时的排队段')
  assert.ok(seen.includes(5), '最新的一段必须保留并处理')
  await stopLiveSession(session, { save: false })
})

test('LiveSegmenter.peekSamples returns in-flight audio while speaking', () => {
  const seg = new LiveSegmenter({ sampleRate: 16000 })
  const hush = new Float32Array(160).fill(0.0004)
  const speech = new Float32Array(160).fill(0.2)
  for (let i = 0; i < 20; i += 1) seg.push(hush)
  assert.equal(seg.peekSamples(), null, '没说话时没有草稿音频')
  for (let i = 0; i < 50; i += 1) seg.push(speech) // 500ms 说话中，尚未停顿切句
  const preview = seg.peekSamples(6)
  assert.ok(preview instanceof Float32Array && preview.length >= 8000, '说话超过 350ms 应能取出滚字预览音频')
})

test('saved live captions can be listed, read, and deleted via live history helpers', async () => {
  const session = startLiveSession({ target: 'zh' })
  await feedLiveSegment(session, wav, {
    start: 0,
    end: 2,
    recognize: async () => ({ text: 'Hello live history.' }),
    translate: async (items) => new Map(items.map((item) => [item.id, '你好实时历史。'])),
  })
  const stopped = await stopLiveSession(session, { save: true })
  assert.equal(stopped.saved, true)

  const list = await listLiveHistory()
  assert.ok(list.some((item) => item.id === stopped.id))
  const detail = await readLiveHistory(stopped.id)
  assert.equal(detail.lines.length, 1)
  assert.equal(detail.lines[0].translations.zh, '你好实时历史。')

  assert.equal(await deleteLiveHistory(stopped.id), true)
  assert.equal(await readLiveHistory(stopped.id), null)
})

test('displayMode original skips translation while bilingual and translation invoke translate', async () => {
  let translateCalls = 0
  const sessionOrig = startLiveSession({ target: 'zh', displayMode: 'original' })
  const resOrig = await feedLiveSegment(sessionOrig, wav, {
    start: 0,
    end: 2,
    recognize: async () => ({ text: 'Only original text.' }),
    translate: async (items) => {
      translateCalls += 1
      return new Map(items.map((item) => [item.id, '不应被调用']))
    },
  })
  assert.equal(translateCalls, 0, '仅原文模式不得调用翻译')
  assert.equal(resOrig.lines[0].text, 'Only original text.')
  assert.equal(resOrig.lines[0].translations, undefined)
  await stopLiveSession(sessionOrig, { save: false })

  const sessionTr = startLiveSession({ target: 'zh', displayMode: 'translation' })
  const resTr = await feedLiveSegment(sessionTr, wav, {
    start: 0,
    end: 2,
    recognize: async () => ({ text: 'Translate this sentence.' }),
    translate: async (items) => {
      translateCalls += 1
      return new Map(items.map((item) => [item.id, '翻译这一句。']))
    },
  })
  assert.equal(translateCalls, 1, '仅译文模式应正常翻译')
  assert.equal(resTr.lines[0].translations.zh, '翻译这一句。')
  await stopLiveSession(sessionTr, { save: false })
})
