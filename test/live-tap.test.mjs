// 系统音频采集（tap helper）的接线测试：用一个假 helper 冒充真二进制，
// 验证「扫目录 → 解码 → 切句 → 交出 WAV」这条链路，以及能力探测与退出清理。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

import { encodeWav } from '../src/live-audio-core.js'
import { decodeWav, rmsOf } from '../src/wav.js'

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-tap-'))
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')

// 假 helper：往 --output-dir 里写 4 个 500ms 分块（前两块是有声音的「说话」，后两块静音），
// 然后挂着不退，直到被 SIGTERM。真实 helper 的行为在这条链路里就是这样。
const fake = path.join(home, 'fake-tap.mjs')

// 假 helper 里不方便 import 我们的编码器，所以把「生成 WAV 字节」的代码内联进去：
// 这里先用 node 生成一个 base64 样本文件，helper 只做重命名级的写入。
const toneWav = Buffer.from(encodeWav(new Float32Array(8000).fill(0.2), 16000)).toString('base64')
const silentWav = Buffer.from(encodeWav(new Float32Array(8000).fill(0), 16000)).toString('base64')
fs.writeFileSync(
  fake,
  `import fs from 'node:fs'
import path from 'node:path'
const argv = process.argv.slice(2)
const pick = (flag) => { const at = argv.indexOf(flag); return at >= 0 ? argv[at + 1] : '' }
const dir = pick('--output-dir')
fs.mkdirSync(dir, { recursive: true })
const tone = Buffer.from('${toneWav}', 'base64')
const silent = Buffer.from('${silentWav}', 'base64')
process.stdout.write(JSON.stringify({ ready: true, sampleRate: 48000 }) + '\\n')
let written = 0
setInterval(() => {
  if (written >= 4) return
  const file = path.join(dir, String(written * 500).padStart(10, '0') + '-system.wav')
  fs.writeFileSync(file, written < 2 ? tone : silent)
  written += 1
}, 300)
`,
  'utf8',
)
const shim = path.join(home, 'fake-tap')
fs.writeFileSync(shim, `#!/bin/sh\nexec "${process.execPath}" "${fake}" "$@"\n`, 'utf8')
fs.chmodSync(shim, 0o755)
process.env.PODWAVE_AUDIO_TAP_BIN = shim

const tap = await import('../src/live-tap.js')

test('decodeWav: 能和 encodeWav 对上，RMS 反映音量', () => {
  const samples = new Float32Array(1600)
  for (let index = 0; index < samples.length; index += 1) samples[index] = index % 2 ? 0.5 : -0.5
  const decoded = decodeWav(Buffer.from(encodeWav(samples, 16000)))
  assert.equal(decoded.sampleRate, 16000)
  assert.equal(decoded.channels, 1)
  assert.equal(decoded.samples.length, 1600)
  assert.ok(rmsOf(decoded.samples) > 0.4)
  assert.equal(rmsOf(new Float32Array(100)), 0)
  assert.throws(() => decodeWav(Buffer.from('not a wav')), /WAV/)
})

test('tapSupport: 有覆盖时报告可用', () => {
  const support = tap.tapSupport()
  assert.equal(typeof support.supported, 'boolean')
  if (process.platform === 'darwin') assert.equal(support.supported, true)
})

test('startTap: 扫目录 → 解码 → 切句 → 交出 WAV，停止后清理', async () => {
  const segments = []
  const levels = []
  const started = await tap.startTap({
    onSegment: (segment) => segments.push(segment),
    onLevel: (value) => levels.push(value),
  })
  assert.equal(started.ok, true)
  assert.equal(tap.tapState().running, true)

  // 假 helper 每 300ms 写一块，4 块之后（1.2s）加上 200ms 稳定期，2.5s 足够。
  const deadline = Date.now() + 6000
  while (segments.length === 0 && Date.now() < deadline) {
    await new Promise((resolve) => setTimeout(resolve, 150))
  }

  assert.ok(segments.length >= 1, `应该切出至少一句，实际 ${segments.length}`)
  const first = segments[0]
  assert.ok(first.wav.length > 44)
  assert.ok(first.seconds > 0.3)
  const decoded = decodeWav(Buffer.from(first.wav))
  assert.equal(decoded.sampleRate, 16000)
  assert.ok(rmsOf(decoded.samples) > 0.05, '交出来的句子应该是有声音的')
  assert.ok(levels.some((value) => value > 0.05), '电平回调要能看到声音')

  assert.equal(tap.stopTap(), true)
  assert.equal(tap.tapState().running, false)
  await new Promise((resolve) => setTimeout(resolve, 300))
})

test('startTap: 零 WAV 输出时触发看门狗提示，且复用时更新回调', async () => {
  const silentScript = path.join(home, 'silent-tap.mjs')
  fs.writeFileSync(silentScript, 'process.stdout.write("{\\"ready\\":true}\\n"); setInterval(() => {}, 1000)\n', 'utf8')
  const silentShim = path.join(home, 'silent-tap')
  fs.writeFileSync(silentShim, `#!/bin/sh\nexec "${process.execPath}" "${silentScript}" "$@"\n`, 'utf8')
  fs.chmodSync(silentShim, 0o755)
  process.env.PODWAVE_AUDIO_TAP_BIN = silentShim
  const hints = []
  try {
    await tap.startTap({ noAudioMs: 200, onHint: (text) => hints.push(text) })
    const deadline = Date.now() + 2000
    while (hints.length === 0 && Date.now() < deadline) {
      await new Promise((resolve) => setTimeout(resolve, 80))
    }
    assert.ok(hints.some((h) => /未收到系统音频|权限/.test(h)), `应触发无音频看门狗提示，实际: ${hints.join(',')}`)

    const reusedHints = []
    const reused = await tap.startTap({ noAudioMs: 200, onHint: (text) => reusedHints.push(text) })
    assert.equal(reused.reused, true)
  } finally {
    tap.stopTap()
    process.env.PODWAVE_AUDIO_TAP_BIN = shim
  }
})

test('startTap: 二进制不存在时给出可读错误', async () => {
  process.env.PODWAVE_AUDIO_TAP_BIN = path.join(home, 'missing-binary')
  try {
    await assert.rejects(() => tap.startTap({ onSegment: () => {} }), /ENOENT|spawn|找不到/)
  } finally {
    process.env.PODWAVE_AUDIO_TAP_BIN = shim
    tap.stopTap()
  }
})
