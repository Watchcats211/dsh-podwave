// 实时字幕的 host 侧：一句一段的 WAV 进来 → 识别 → 翻译 → 攒成会话 → 按需落盘。
// 这里用假的上游（本地 http 服务）跑完整链路，不打真实计费接口。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import http from 'node:http'
import os from 'node:os'
import path from 'node:path'

import { encodeWav } from '../src/live-audio-core.js'

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-host-live-'))
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')
process.env.PODWAVE_MODELS_NO_PROJECT = '1'

const DATA_DIR = process.env.PODWAVE_DATA_DIR
const CONFIG = path.join(DATA_DIR, 'config.json')

function readBody(req) {
  return new Promise((resolve) => {
    const chunks = []
    req.on('data', (chunk) => chunks.push(chunk))
    req.on('end', () => resolve(Buffer.concat(chunks)))
  })
}

// 假上游：一个端点冒充 DeepSeek 语音识别，一个冒充翻译的 chat/completions。
function fakeUpstream() {
  return http.createServer(async (req, res) => {
    const raw = await readBody(req)
    if (req.url.startsWith('/v1/tools/asr')) {
      // 请求是 multipart/form-data，WAV 的 RIFF 头在正文里，确认真的带了音频再给文本
      const hasWav = raw.includes(Buffer.from('RIFF'))
      res.setHeader('content-type', 'application/json')
      res.end(JSON.stringify({ text: hasWav ? 'こんにちは。今日はいい天気です。' : '', duration_ms: 3000 }))
      return
    }
    if (req.url.startsWith('/chat/completions')) {
      const payload = JSON.parse(raw.toString('utf8') || '{}')
      const user = payload.messages?.find((message) => message.role === 'user')?.content || ''
      const count = String(user)
        .split('\n')
        .filter((line) => /^\d+\./.test(line.trim())).length
      const lines = Array.from({ length: count }, (_, index) => `${index + 1}. 译文${index + 1}`)
      res.setHeader('content-type', 'application/json')
      res.end(JSON.stringify({ choices: [{ message: { content: lines.join('\n') } }] }))
      return
    }
    res.statusCode = 404
    res.end()
  })
}

function writeConfig(upstreamBase, { key = 'test-key' } = {}) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(
    CONFIG,
    JSON.stringify({
      api: { base: upstreamBase, key, model: 'test-model' },
      // providerPinned：不然 loadConfig 会把 api 自动改回 dsh（0.11.53 的老配置迁移）
      translate: { provider: 'api', providerPinned: true, target: 'zh' },
    }),
    'utf8',
  )
}

test('host: 实时字幕能识别、翻译、落盘，缺 key 时明确拒绝', async () => {
  const upstream = fakeUpstream()
  await new Promise((resolve) => upstream.listen(0, '127.0.0.1', resolve))
  const upstreamBase = `http://127.0.0.1:${upstream.address().port}`

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
  let handler = null
  const server = http.createServer((req, res) => handler(req, res))
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  const base = `http://127.0.0.1:${server.address().port}`
  const api = (name) => `${base}/podwave/api/${name}`

  try {
    writeConfig(upstreamBase)
    const host = (await import('../src/host.js')).default
    host.apply(ctx)

    // 1. 初始状态：有 key 就能用，没有会话
    let status = await (await fetch(api('live'))).json()
    assert.equal(status.ready, true)
    assert.equal(status.hasKey, true)
    assert.equal(status.session, null)

    // 2. 开始一次会话
    const started = await (await fetch(api('live/start'), { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{}' })).json()
    assert.ok(started.session?.id, '拿到会话 id')
    const sessionId = started.session.id
    assert.equal(started.session.count, 0)

    // 3. 送第一段：识别出两句英文，两句都翻了中文
    const wav = encodeWav(new Float32Array(1600).fill(0.2), 16000)
    const first = await (
      await fetch(`${api('live/segment')}?session=${encodeURIComponent(sessionId)}&start=0&end=3`, {
        method: 'POST',
        headers: { 'content-type': 'audio/wav' },
        body: wav,
      })
    ).json()
    assert.equal(first.lines.length, 2, '按句号切成两句')
    assert.deepEqual(first.lines.map((line) => line.text), ['こんにちは。', '今日はいい天気です。'])
    assert.deepEqual(first.lines.map((line) => line.id), [1, 2])
    assert.equal(first.lines[0].translations.zh, '译文1')
    assert.equal(first.lines[1].translations.zh, '译文2')
    assert.equal(first.count, 2)
    // 时间轴落在这一段的范围内，且后一句比前一句晚
    assert.ok(first.lines[0].start >= 0 && first.lines[0].end <= 3.01)
    assert.ok(first.lines[1].start >= first.lines[0].end - 0.05)

    // 4. 第二段：编号接着往后数，不会从 1 重来
    const second = await (
      await fetch(`${api('live/segment')}?session=${encodeURIComponent(sessionId)}&start=3&end=6`, {
        method: 'POST',
        headers: { 'content-type': 'audio/wav' },
        body: wav,
      })
    ).json()
    assert.deepEqual(second.lines.map((line) => line.id), [3, 4])
    assert.equal(second.lines[0].translations.zh, '译文3')
    assert.equal(second.count, 4)

    // 5. 设备偏好能存能读
    const savedSetting = await (
      await fetch(api('live/settings'), {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ deviceId: 'bh-id', deviceLabel: 'BlackHole 2ch', saveOnStop: false }),
      })
    ).json()
    assert.equal(savedSetting.deviceId, 'bh-id')
    assert.equal(savedSetting.saveOnStop, false)
    status = await (await fetch(api('live'))).json()
    assert.equal(status.deviceLabel, 'BlackHole 2ch')
    assert.equal(status.session.count, 4, '读状态不会动会话')

    // 6. 结束并保存
    const stopped = await (
      await fetch(api('live/stop'), {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ session: sessionId, save: true }),
      })
    ).json()
    assert.equal(stopped.saved, true)
    assert.equal(stopped.count, 4)
    assert.equal(stopped.lines.length, 4)
    const liveDir = path.join(DATA_DIR, 'live')
    assert.equal(path.dirname(stopped.files.srt), liveDir)
    for (const file of [stopped.files.json, stopped.files.srt, stopped.files.md]) {
      assert.ok(fs.existsSync(file), `${file} 应该存在`)
    }
    const srt = fs.readFileSync(stopped.files.srt, 'utf8')
    assert.match(srt, /こんにちは。/)
    assert.match(srt, /--> /)
    const md = fs.readFileSync(stopped.files.md, 'utf8')
    assert.match(md, /译文1/, 'Markdown 里带译文')
    const json = JSON.parse(fs.readFileSync(stopped.files.json, 'utf8'))
    assert.equal(json.lines.length, 4)
    assert.equal(json.target, 'zh')

    // 7. 结束后会话就没了；再送音频是 409
    status = await (await fetch(api('live'))).json()
    assert.equal(status.session, null)
    const late = await fetch(`${api('live/segment')}?start=6&end=9`, { method: 'POST', body: wav })
    assert.equal(late.status, 409)

    // 8. 没有 key 时明确告诉用户去填，而不是静默失败
    writeConfig(upstreamBase, { key: '' })
    status = await (await fetch(api('live'))).json()
    assert.equal(status.ready, false)
    const denied = await fetch(api('live/start'), { method: 'POST', body: '{}' })
    assert.equal(denied.status, 400)
    assert.match((await denied.json()).error, /API key/)
  } finally {
    await new Promise((resolve) => server.close(resolve))
    await new Promise((resolve) => upstream.close(resolve))
  }
})
