// 内容指纹自动认领 + 列表打标 + 移除单集保留字幕 + 一键配置方案接口测试。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import http from 'node:http'
import os from 'node:os'
import path from 'node:path'

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-fp-'))
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')
process.env.PODWAVE_MODELS_NO_PROJECT = '1'

const { audioFingerprint, transcriptBadges } = await import('../src/fingerprint.js')
const { readTranscript, saveTranscript, TRANSCRIPTS_DIR } = await import('../src/transcribe.js')
const { registerProvider } = await import('../src/providers.js')

const episodes = new Map()
registerProvider('fp-fake', {
  id: 'fp-fake',
  matches: (id) => episodes.has(id),
  getEpisode: (id) => (episodes.has(id) ? { ...episodes.get(id), source: 'fp-fake' } : null),
  listEpisodes: () => [...episodes.values()],
})

test('audioFingerprint matches identical content across rename/move and distinguishes different bytes', async () => {
  const dir = path.join(home, 'audio')
  fs.mkdirSync(dir, { recursive: true })
  const buf = Buffer.alloc(160_000, 0x41)
  buf.write('PODWAVE_HEAD', 0)
  buf.write('PODWAVE_TAIL', buf.length - 16)
  const fileA = path.join(dir, 'ep-old.m4a')
  const fileB = path.join(dir, 'renamed-copy.m4a')
  const fileC = path.join(dir, 'different.m4a')
  fs.writeFileSync(fileA, buf)
  fs.writeFileSync(fileB, buf)
  const diff = Buffer.from(buf)
  diff[diff.length - 4] = 0x5a
  fs.writeFileSync(fileC, diff)

  const hashA = await audioFingerprint(fileA)
  const hashB = await audioFingerprint(fileB)
  const hashC = await audioFingerprint(fileC)
  assert.equal(hashA.length, 16)
  assert.equal(hashA, hashB, '相同音频内容改名后指纹一致')
  assert.notEqual(hashA, hashC, '尾部字节不同指纹必须不同')
})

test('readTranscript claims transcript by fingerprint even when filename and title both changed', async () => {
  const dir = path.join(home, 'move-test')
  fs.mkdirSync(dir, { recursive: true })
  const payload = Buffer.alloc(90_000, 0x22)
  payload.write('UNIQUE_EP_1', 100)
  const oldPath = path.join(dir, 'old-name.m4a')
  const newPath = path.join(dir, 'completely-new-name.m4a')
  fs.writeFileSync(oldPath, payload)

  const oldId = 'fp-old-1'
  await saveTranscript({
    id: oldId,
    title: '旧标题',
    duration: 120,
    model: 'deepseek-asr',
    language: 'en',
    text: 'Hello podcast',
    source: { path: oldPath, size: payload.length },
    lines: [{ id: 1, start: 0, end: 2, text: 'Hello podcast', speaker: null, translations: { zh: '你好播客' } }],
    providers: { zh: 'dsh' },
    speakers: [],
  })

  // 模拟用户把音频移动到新路径并改名
  fs.renameSync(oldPath, newPath)
  const fp = await audioFingerprint(newPath)
  const newId = 'fp-new-1'
  episodes.set(newId, { id: newId, title: '全新标题', duration: 120, file: newPath, size: payload.length, fingerprint: fp })

  // 1) 列表打标直接命中，无需先打开单集
  const badges = transcriptBadges([episodes.get(newId)])
  assert.equal(badges.get(newId).hasTranscript, true)
  assert.equal(badges.get(newId).hasTranslation, true)
  assert.deepEqual(badges.get(newId).translations, ['zh'])

  // 2) readTranscript 按指纹认领回来，原文件因旧音频已不存在而挪到 .claimed/
  const claimed = await readTranscript(newId)
  assert.ok(claimed)
  assert.equal(claimed.id, newId)
  assert.equal(claimed.claimedFrom, oldId)
  assert.equal(claimed.lines[0].translations.zh, '你好播客')
  assert.ok(fs.existsSync(path.join(TRANSCRIPTS_DIR, `${newId}.json`)))
  assert.ok(fs.existsSync(path.join(TRANSCRIPTS_DIR, '.claimed', `${oldId}.json`)))
})

test('copying audio keeps original transcript intact while sharing it with the new copy', async () => {
  const dir = path.join(home, 'copy-test')
  fs.mkdirSync(dir, { recursive: true })
  const payload = Buffer.alloc(70_000, 0x33)
  payload.write('COPY_EP_2', 50)
  const origPath = path.join(dir, 'orig.m4a')
  const copyPath = path.join(dir, 'copy.m4a')
  fs.writeFileSync(origPath, payload)
  fs.writeFileSync(copyPath, payload)

  const origId = 'fp-orig-2'
  await saveTranscript({
    id: origId,
    title: '原版',
    duration: 60,
    model: 'deepseek-asr',
    language: 'en',
    text: 'Keep both',
    source: { path: origPath, size: payload.length },
    lines: [{ id: 1, start: 0, end: 2, text: 'Keep both', speaker: null, translations: {} }],
    providers: {},
    speakers: [],
  })

  const copyId = 'fp-copy-2'
  const fp = await audioFingerprint(copyPath)
  episodes.set(copyId, { id: copyId, title: '副本', duration: 60, file: copyPath, size: payload.length, fingerprint: fp })
  const claimed = await readTranscript(copyId)
  assert.ok(claimed)
  assert.equal(claimed.id, copyId)
  // 原文件仍在磁盘上，旧字幕不能被挪走！
  assert.ok(fs.existsSync(path.join(TRANSCRIPTS_DIR, `${origId}.json`)), '原字幕应保留')
})

test('host DELETE /api/episodes/:id preserves transcript by default and POST /api/preset switches atomically', async () => {
  const effects = []
  let handler = null
  const ctx = {
    get: (name) => (name === 'connection' ? { requestRejection: () => null } : undefined),
    effect: (fn) => {
      const d = fn()
      if (typeof d === 'function') effects.push(d)
      return d
    },
    webServer: {
      register: (cfg) => {
        handler = cfg.handler
        return () => {}
      },
    },
  }
  const server = http.createServer((req, res) => handler(req, res))
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  const base = `http://127.0.0.1:${server.address().port}/podwave/api`

  try {
    const host = (await import('../src/host.js')).default
    host.apply(ctx)

    // 先写一条字幕
    const epId = 'preserve-ep-1'
    await saveTranscript({
      id: epId,
      title: '保留我',
      duration: 30,
      model: 'deepseek-asr',
      language: 'zh',
      text: '不要删掉字幕',
      source: null,
      lines: [{ id: 1, start: 0, end: 2, text: '不要删掉字幕', speaker: null, translations: {} }],
      providers: {},
      speakers: [],
    })

    // 默认 DELETE 不应删掉字幕
    const delRes = await (await fetch(`${base}/episodes/${epId}`, { method: 'DELETE' })).json()
    assert.equal(delRes.hidden, true)
    assert.equal(delRes.purged, false)
    assert.ok(fs.existsSync(path.join(TRANSCRIPTS_DIR, `${epId}.json`)), '默认移除单集必须保留字幕')

    // 显式 ?purge=1 才删字幕
    const purgeRes = await (await fetch(`${base}/episodes/${epId}?purge=1`, { method: 'DELETE' })).json()
    assert.equal(purgeRes.purged, true)
    assert.ok(!fs.existsSync(path.join(TRANSCRIPTS_DIR, `${epId}.json`)), 'purge=1 才删除字幕')

    // POST /api/preset 原子切换三套方案
    for (const [preset, asr, tr] of [
      ['cloud', 'api', 'dsh'],
      ['offline', 'local', 'local'],
      ['hybrid', 'local', 'dsh'],
    ]) {
      const res = await (await fetch(`${base}/preset`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ preset }),
      })).json()
      assert.equal(res.preset, preset)
      assert.equal(res.transcribe.provider, asr)
      assert.equal(res.translate.provider, tr)
      assert.equal(res.translate.autoAfterTranscribe, true)
    }

    // /api/setup 应返回 version 字段，staleHost 才能生效
    const setupRes = await (await fetch(`${base}/setup`)).json()
    assert.ok(typeof setupRes.version === 'string' && setupRes.version.length > 0)
  } finally {
    await new Promise((resolve) => server.close(resolve))
    for (const dispose of effects) {
      try { dispose() } catch { /* ignore */ }
    }
  }
})
