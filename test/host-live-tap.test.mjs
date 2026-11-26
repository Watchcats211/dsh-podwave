// 系统音频采集的 HTTP 接口：用假 helper + 假上游 ASR 跑完整链路，
// 验证「开始采集 → 轮询取行 → 停止（保留会话）→ 结束并保存」这套前端要用的接口。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import http from 'node:http'
import os from 'node:os'
import path from 'node:path'

import { encodeWav } from '../src/live-audio-core.js'

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-tap-http-'))
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')
const DATA_DIR = process.env.PODWAVE_DATA_DIR

// 假 helper：写 4 个 500ms 分块（前两块有声音，后两块静音），然后挂着等 SIGTERM。
const tone = Buffer.from(encodeWav(new Float32Array(8000).fill(0.2), 16000)).toString('base64')
const silent = Buffer.from(encodeWav(new Float32Array(8000).fill(0), 16000)).toString('base64')
const fakeScript = path.join(home, 'fake-tap.mjs')
fs.writeFileSync(
  fakeScript,
  `import fs from 'node:fs'
import path from 'node:path'
const argv = process.argv.slice(2)
const pick = (flag) => { const at = argv.indexOf(flag); return at >= 0 ? argv[at + 1] : '' }
const dir = pick('--output-dir')
fs.mkdirSync(dir, { recursive: true })
const tone = Buffer.from('${tone}', 'base64')
const silent = Buffer.from('${silent}', 'base64')
let written = 0
setInterval(() => {
  if (written >= 4) return
  fs.writeFileSync(path.join(dir, String(written * 500).padStart(10, '0') + '-system.wav'), written < 2 ? tone : silent)
  written += 1
}, 300)
`,
  'utf8',
)
const shim = path.join(home, 'fake-tap')
fs.writeFileSync(shim, `#!/bin/sh\nexec "${process.execPath}" "${fakeScript}" "$@"\n`, 'utf8')
fs.chmodSync(shim, 0o755)
process.env.PODWAVE_AUDIO_TAP_BIN = shim

function fakeUpstream() {
  return http.createServer(async (req, res) => {
    const chunks = []
    for await (const chunk of req) chunks.push(chunk)
    if (req.url.startsWith('/v1/tools/asr')) {
      res.setHeader('content-type', 'application/json')
      res.end(JSON.stringify({ text: '系统音频的测试句子。', duration_ms: 1200 }))
      return
    }
    if (req.url.startsWith('/chat/completions')) {
      res.setHeader('content-type', 'application/json')
      res.end(JSON.stringify({ choices: [{ message: { content: '1. 系统音频的测试句子。' } }] }))
      return
    }
    res.statusCode = 404
    res.end()
  })
}

test('host: 系统音频采集接口（开始 → 轮询 → 停止 → 保存）', async () => {
  const upstream = fakeUpstream()
  await new Promise((resolve) => upstream.listen(0, '127.0.0.1', resolve))
  const upstreamBase = `http://127.0.0.1:${upstream.address().port}`
  fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(
    path.join(DATA_DIR, 'config.json'),
    JSON.stringify({
      api: { base: upstreamBase, key: 'test-key', model: 'test-model' },
      translate: { provider: 'api', providerPinned: true, target: 'zh' },
    }),
    'utf8',
  )

  let handler = null
  const ctx = {
    get: (name) => (name === 'connection' ? { requestRejection: () => null } : undefined),
    effect: (fn) => {
      const dispose = fn()
      return typeof dispose === 'function' ? dispose : () => {}
    },
    webServer: {
      register: (config) => {
        handler = config.handler
        return () => {}
      },
    },
  }
  const server = http.createServer((req, res) => handler(req, res))
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  const base = `http://127.0.0.1:${server.address().port}`
  const api = (name) => `${base}/podwave/api/${name}`

  try {
    const host = (await import('../src/host.js')).default
    host.apply(ctx)

    // 能力探测：这台机器（darwin）支持系统音频
    const info = await (await fetch(api('live'))).json()
    assert.equal(info.source, 'auto')
    assert.equal(typeof info.tap?.supported, 'boolean')

    const started = await (
      await fetch(api('live/tap'), { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{}' })
    ).json()
    assert.equal(started.ok, true)
    assert.ok(started.session?.id, '应该给出会话 id')

    // 轮询：假 helper 2 块有声音 → VAD 切一句 → 假 ASR 出文本
    let line = null
    let sawWindowOpen = false
    const deadline = Date.now() + 12000
    while (!line && Date.now() < deadline) {
      await new Promise((resolve) => setTimeout(resolve, 400))
      const poll = await (await fetch(api('live/lines?since=0'))).json()
      if (typeof poll.windowOpen === 'boolean') sawWindowOpen = true
      if (Array.isArray(poll.lines) && poll.lines.length) line = poll.lines[0]
    }
    assert.equal(sawWindowOpen, true, '/live/lines 应返回 windowOpen 状态')
    assert.ok(line, '应该能从 /live/lines 取到字幕行')
    assert.match(line.text, /测试句子/)
    assert.ok(line.end > line.start)

    // 停止但保留会话（前端要拿它去问「保存吗」）
    const kept = await (
      await fetch(api('live/tap'), {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ action: 'stop', keep: true }),
      })
    ).json()
    assert.equal(kept.kept, true)
    assert.ok(kept.session?.count >= 1, '停止采集后会话还在，行数也保留')

    // 真正结束并保存
    const stopped = await (
      await fetch(api('live/stop'), {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ session: started.session.id, save: true }),
      })
    ).json()
    assert.equal(stopped.saved, true)
    assert.ok(fs.existsSync(stopped.files.srt))

    // 无会话时再调用 live/stop 也应安全幂等返回 200（用于兜底关窗停采集）
    const extraStop = await fetch(api('live/stop'), {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: '{}',
    })
    assert.equal(extraStop.status, 200)
  } finally {
    await new Promise((resolve) => server.close(resolve))
    await new Promise((resolve) => upstream.close(resolve))
  }
})
