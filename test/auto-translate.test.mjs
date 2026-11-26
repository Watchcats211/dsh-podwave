// DSH 分批翻译与错位降批重试 + 单行重翻（数字/字符串 id）+ 导出含说话人/双语 + 说话人标签归一化测试。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-autotr-'))
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')
process.env.PODWAVE_MODELS_NO_PROJECT = '1'

const { setDshContext, translateWithDsh, translateLine, saveConfig } = await import('../src/translate.js')
const { saveTranscript, readTranscript, toSRT, toMarkdown, formatSpeakerLabel } = await import('../src/transcribe.js')
const { resolveSpeaker, stripHtml } = await import('../client/src/lib/speaker.js')

function fakeDshContext(replyFn) {
  return {
    get: (name) => {
      if (name === 'agentDefaultModel') return { currentSelection: () => ({ provider: 'deepseek', model: 'deepseek-reasoner' }) }
      if (name === 'llm') {
        return {
          prepareCall: async () => ({
            config: {},
            stream: async function* ({ messages }) {
              const prompt = messages[0]?.content?.[0]?.text || ''
              const text = replyFn(prompt)
              yield { type: 'text-delta', text }
              yield { type: 'finish', reason: { kind: 'stop' } }
            },
          }),
        }
      }
      return undefined
    },
  }
}

test('translateWithDsh batches 25 items into 2 calls and invokes onBatch per batch', async () => {
  const calls = []
  setDshContext(fakeDshContext((prompt) => {
    const lines = prompt.split('\n').filter((line) => /^\d+\.\s/.test(line))
    calls.push(lines.length)
    return lines.map((_, idx) => `${idx + 1}. 译${idx + 1}`).join('\n')
  }))

  const items = Array.from({ length: 25 }, (_, i) => ({ id: i + 1, text: `Sentence ${i + 1}` }))
  const batchSizes = []
  const result = await translateWithDsh(items, 'zh', {
    onBatch: async (batchMap) => { batchSizes.push(batchMap.size) },
  })
  assert.deepEqual(calls, [20, 5], '25 行应拆成 20 + 5 两批')
  assert.deepEqual(batchSizes, [20, 5], '每批都应触发 onBatch 增量保存')
  assert.equal(result.size, 25)
  assert.equal(result.get(1), '译1')
  assert.equal(result.get(25), '译5')
})

test('translateWithDsh splits batch recursively when model merges lines', async () => {
  let attempts = 0
  setDshContext(fakeDshContext((prompt) => {
    attempts += 1
    const lines = prompt.split('\n').filter((line) => /^\d+\.\s/.test(line))
    // 4 行时故意只回 2 行，触发对半拆批
    if (lines.length >= 4) return '1. 合并了\n2. 缺行了'
    return lines.map((line, idx) => `${idx + 1}. OK-${line.replace(/^\d+\.\s*/, '')}`).join('\n')
  }))

  const items = [
    { id: 10, text: 'A' },
    { id: 11, text: 'B' },
    { id: 12, text: 'C' },
    { id: 13, text: 'D' },
  ]
  const result = await translateWithDsh(items, 'zh')
  assert.ok(attempts >= 3, '错位时应降批重试')
  assert.equal(result.get(10), 'OK-A')
  assert.equal(result.get(13), 'OK-D')
})

test('translateLine accepts string lineId when transcript line.id is numeric', async () => {
  saveConfig({ provider: 'dsh' })
  setDshContext(fakeDshContext(() => '1. 重翻后的中文'))

  await saveTranscript({
    id: 'reline-1',
    title: 'Single Line Test',
    duration: 10,
    model: 'deepseek-asr',
    language: 'en',
    text: 'First Second',
    source: null,
    lines: [
      { id: 1, start: 0, end: 3, text: 'First', speaker: null, translations: { zh: '旧一' } },
      { id: 2, start: 3, end: 6, text: 'Second', speaker: null, translations: { zh: '旧二' } },
    ],
    providers: { zh: 'dsh' },
    speakers: [],
  })

  // host.js 传进来的是 String(body.lineId)，以前 === 比对 2 === "2" 必然 404！
  const res = await translateLine('reline-1', '2', { target: 'zh', provider: 'dsh' })
  assert.equal(res.translation, '重翻后的中文')
  const updated = await readTranscript('reline-1')
  assert.equal(updated.lines[0].translations.zh, '旧一')
  assert.equal(updated.lines[1].translations.zh, '重翻后的中文')
})

test('toSRT and toMarkdown include speakers and bilingual translations, and resolveSpeaker handles MOSS S01', () => {
  const transcript = {
    id: 'exp-1',
    title: '双语导出测试',
    model: 'moss-transcribe-diarize',
    language: 'en',
    speakers: ['S01', 'S02'],
    providers: { zh: 'dsh' },
    lines: [
      { id: 1, start: 0, end: 2.5, text: 'Hello everyone.', speaker: 'S01', translations: { zh: '大家好。' } },
      { id: 2, start: 2.6, end: 5.0, text: 'Welcome back.', speaker: 'S02', translations: { zh: '欢迎回来。' } },
    ],
  }

  assert.equal(formatSpeakerLabel('S01', transcript.speakers), '说话人 1')
  assert.equal(formatSpeakerLabel(0, [{ id: 0, label: '主持人' }]), '主持人')

  const srt = toSRT(transcript)
  assert.match(srt, /\[说话人 1\] Hello everyone\.\n大家好。/)
  assert.match(srt, /\[说话人 2\] Welcome back\.\n欢迎回来。/)

  const srtOrigOnly = toSRT(transcript, { target: 'none', includeSpeakers: false })
  assert.match(srtOrigOnly, /\nHello everyone\.\n/)
  assert.doesNotMatch(srtOrigOnly, /大家好/)

  const md = toMarkdown(transcript)
  assert.match(md, /\*\*0:00\*\* \[说话人 1\] Hello everyone\./)
  assert.match(md, /大家好。/)

  // 前端说话人归一化绝不产出 NaN 或 S011
  assert.deepEqual(resolveSpeaker('S01', ['S01', 'S02']), { index: 0, label: '说话人 1' })
  assert.deepEqual(resolveSpeaker('S02', ['S01', 'S02']), { index: 1, label: '说话人 2' })
  assert.deepEqual(resolveSpeaker(0, [{ id: 0, label: '说话人 1' }]), { index: 0, label: '说话人 1' })
  assert.equal(resolveSpeaker(null), null)

  // HTML shownotes 清洗
  assert.equal(stripHtml('<p>Hello&nbsp;world!<br/>Line 2 &amp; more</p>'), 'Hello world!\nLine 2 & more')
})
