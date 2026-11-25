// 实时字幕的前端音频逻辑：能量 VAD 切句、WAV 编码、挑采集设备。
// 这些都是纯函数/纯类，不依赖浏览器，所以能在 node 里直接测。
import { test } from 'node:test'
import assert from 'node:assert/strict'

import {
  LiveSegmenter,
  encodeWav,
  pickCaptureDevice,
  rms,
  scoreCaptureDevice,
} from '../src/live-audio-core.js'

const RATE = 16000
const FRAME = 160 // 10ms

function frame(amplitude) {
  return new Float32Array(FRAME).fill(amplitude)
}

// 一段「说话」：能量 0.2。一段「静音」：能量 0.0004（远低于阈值，但非零，像底噪）。
const speech = () => frame(0.2)
const hush = () => frame(0.0004)

test('rms: 常数信号的能量就是它的绝对值', () => {
  assert.equal(rms(new Float32Array(100).fill(0.5)), 0.5)
  assert.equal(rms(null), 0)
})

test('pickCaptureDevice: 优先虚拟声卡，别选到麦克风', () => {
  const devices = [
    { kind: 'audioinput', deviceId: 'mic-1', label: 'MacBook Air麦克风' },
    { kind: 'audioinput', deviceId: 'bh', label: 'BlackHole 2ch' },
    { kind: 'audioinput', deviceId: 'default', label: '默认' },
    { kind: 'audiooutput', deviceId: 'spk', label: 'MacBook Air扬声器' },
  ]
  const picked = pickCaptureDevice(devices)
  assert.equal(picked.deviceId, 'bh')
  assert.ok(scoreCaptureDevice(devices[1]) > scoreCaptureDevice(devices[0]))
  // 只有麦克风时也得能用：不能返回 null。
  assert.equal(pickCaptureDevice([devices[0]]).deviceId, 'mic-1')
  assert.equal(pickCaptureDevice([]), null)
})

test('LiveSegmenter: 一段话切成一句，时间轴对得上', () => {
  const segmenter = new LiveSegmenter({ sampleRate: RATE })
  const out = []
  // 先给 200ms 安静，让噪声底收敛
  for (let index = 0; index < 20; index += 1) out.push(...segmenter.push(hush()))
  // 说 500ms
  for (let index = 0; index < 50; index += 1) out.push(...segmenter.push(speech()))
  // 停 700ms（超过 600ms 静音阈值）
  for (let index = 0; index < 70; index += 1) out.push(...segmenter.push(hush()))

  assert.equal(out.length, 1)
  const [piece] = out
  assert.equal(piece.reason, 'silence')
  assert.ok(piece.start <= 0.2, `起点应该带上前置余量，实际 ${piece.start}`)
  assert.ok(piece.seconds >= 0.55 && piece.seconds <= 0.9, `含 200ms 前置余量和 120ms 尾巴后约 0.8s，实际 ${piece.seconds}`)
  assert.ok(piece.samples.length > 0)
  // 送识别的音频包含句尾那段静音（不裁掉，ASR 反倒更稳），所以样本时长 ≥ 句子时长。
  assert.ok(piece.samples.length / RATE >= piece.seconds, '样本覆盖整段句子')
})

test('LiveSegmenter: 太短的响声当噪声丢掉', () => {
  const segmenter = new LiveSegmenter({ sampleRate: RATE })
  const out = []
  for (let index = 0; index < 20; index += 1) out.push(...segmenter.push(hush()))
  for (let index = 0; index < 10; index += 1) out.push(...segmenter.push(speech())) // 100ms
  for (let index = 0; index < 70; index += 1) out.push(...segmenter.push(hush()))
  assert.equal(out.length, 0)

  // 丢掉之后状态要复位，下一句还能正常切
  for (let index = 0; index < 50; index += 1) out.push(...segmenter.push(speech()))
  for (let index = 0; index < 70; index += 1) out.push(...segmenter.push(hush()))
  assert.equal(out.length, 1)
})

test('LiveSegmenter: 连说不存在静音点，到上限硬切', () => {
  const segmenter = new LiveSegmenter({ sampleRate: RATE, maxMs: 3000 })
  const out = []
  for (let index = 0; index < 20; index += 1) out.push(...segmenter.push(hush()))
  for (let index = 0; index < 400; index += 1) out.push(...segmenter.push(speech())) // 4s 不停
  assert.equal(out.length, 1)
  assert.equal(out[0].reason, 'max')
  assert.ok(out[0].seconds >= 2.9 && out[0].seconds <= 3.2, `硬切在 3s 附近，实际 ${out[0].seconds}`)
})

test('LiveSegmenter: flush 交出剩下的半句', () => {
  const segmenter = new LiveSegmenter({ sampleRate: RATE })
  for (let index = 0; index < 20; index += 1) segmenter.push(hush())
  for (let index = 0; index < 30; index += 1) segmenter.push(speech())
  const tail = segmenter.flush()
  assert.equal(tail.length, 1)
  assert.equal(tail[0].reason, 'flush')
  assert.ok(tail[0].seconds > 0.25)
  // 再 flush 一次没有东西了
  assert.deepEqual(segmenter.flush(), [])
})

test('encodeWav: 44 字节头 + 16 位单声道 PCM', () => {
  const samples = new Float32Array(800)
  for (let index = 0; index < samples.length; index += 1) samples[index] = index % 2 ? 1 : -1
  const wav = encodeWav(samples, 16000)
  const view = new DataView(wav.buffer, wav.byteOffset, wav.byteLength)
  const text = (offset, length) => String.fromCharCode(...wav.slice(offset, offset + length))

  assert.equal(text(0, 4), 'RIFF')
  assert.equal(text(8, 4), 'WAVE')
  assert.equal(text(12, 4), 'fmt ')
  assert.equal(view.getUint16(20, true), 1, 'PCM 格式')
  assert.equal(view.getUint16(22, true), 1, '单声道')
  assert.equal(view.getUint32(24, true), 16000, '采样率')
  assert.equal(view.getUint32(28, true), 32000, '字节率')
  assert.equal(view.getUint16(34, true), 16, '位深')
  assert.equal(wav.length, 44 + 800 * 2)
  assert.equal(view.getUint32(40, true), 800 * 2, 'data 段长度')
  assert.equal(view.getInt16(44, true), -32768, '负号先到满量程')
  assert.equal(view.getInt16(46, true), 32767, '正号到满量程')
})
