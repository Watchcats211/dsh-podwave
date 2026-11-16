// 实时说话人聚类：不依赖 python / 模型，用假的 embed 函数验证聚类与打标逻辑。
import test from 'node:test'
import assert from 'node:assert/strict'
import os from 'node:os'
import fs from 'node:fs'
import path from 'node:path'

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-live-speaker-'))
process.env.HOME = tmp
process.env.PODWAVE_DATA_DIR = path.join(tmp, '.podwave')

const live = await import('../src/live-speaker.js')

// 两把「声音」：单位向量，彼此夹角大；同一把声音加一点噪声后仍应合并。
const VOICE_A = [1, 0, 0, 0]
const VOICE_B = [0, 1, 0, 0]
const noisy = (vector, amount) => vector.map((value, index) => value + (index % 2 === 0 ? amount : -amount))

test('同一个声音的不同片段会合并成同一个说话人', () => {
  const speakers = new live.OnlineSpeakers(async () => null)
  const first = speakers.assign(VOICE_A)
  const second = speakers.assign(noisy(VOICE_A, 0.1))
  const third = speakers.assign(noisy(VOICE_A, -0.1))
  assert.equal(first, 0)
  assert.equal(second, 0)
  assert.equal(third, 0)
  assert.equal(speakers.speakers().length, 1)
})

test('差别很大的声音会分成两个说话人', () => {
  const speakers = new live.OnlineSpeakers(async () => null)
  assert.equal(speakers.assign(VOICE_A), 0)
  assert.equal(speakers.assign(VOICE_B), 1)
  assert.deepEqual(speakers.speakers(), [
    { id: 0, label: '说话人 1' },
    { id: 1, label: '说话人 2' },
  ])
})

test('零向量不会崩，按余弦定位到已有说话人', () => {
  const speakers = new live.OnlineSpeakers(async () => null)
  speakers.assign(VOICE_A)
  const index = speakers.assign([0, 0, 0, 0])
  assert.ok(index === 0 || index === 1)
})

test('说话人数量有上限，超过后归到最接近的那个', () => {
  const speakers = new live.OnlineSpeakers(async () => null)
  for (let i = 0; i < 20; i += 1) {
    const vector = Array.from({ length: 20 }, (_, index) => (index === i ? 1 : 0))
    const index = speakers.assign(vector)
    assert.ok(index !== null)
  }
  assert.ok(speakers.speakers().length <= 12)
})

test('labelLines 会调用 embed 并给没有说话人的行打标，已有的不覆盖', async () => {
  const calls = []
  const speakers = new live.OnlineSpeakers(async (file, start, end) => {
    calls.push({ file, start, end })
    // start/end 是块内相对时间，所以按块文件名区分两把声音。
    return file.endsWith('part-0.wav') ? VOICE_A : VOICE_B
  })
  const parts = [
    { index: 0, start: 0, end: 12, duration: 12, file: '/tmp/part-0.wav' },
    { index: 1, start: 12, end: 24, duration: 12, file: '/tmp/part-1.wav' },
  ]
  const lines = [
    { start: 1, end: 4, text: '第一句', speaker: null },
    { start: 5, end: 8, text: '第二句', speaker: 7 },
    { start: 14, end: 20, text: '第三句', speaker: undefined },
    { start: 12.2, end: 12.3, text: '太短', speaker: null },
  ]
  await speakers.labelLines(lines, parts)
  assert.equal(lines[0].speaker, 0)
  assert.equal(lines[1].speaker, 7, '已有说话人不应该被覆盖')
  assert.equal(lines[2].speaker, 1)
  assert.equal(lines[3].speaker, null, '片段短于 0.4 秒时跳过')
  assert.equal(calls.length, 2)
  assert.deepEqual(calls[0], { file: '/tmp/part-0.wav', start: 1, end: 4 })
  assert.deepEqual(calls[1], { file: '/tmp/part-1.wav', start: 2, end: 8 })
})

test('embed 失败的行保持没说话人，不抛错', async () => {
  const speakers = new live.OnlineSpeakers(async () => {
    throw new Error('boom')
  })
  const lines = [{ start: 1, end: 4, text: '一句话', speaker: null }]
  await speakers.labelLines(lines, [{ index: 0, start: 0, end: 12, duration: 12, file: '/tmp/p.wav' }])
  assert.equal(lines[0].speaker, null)
})

test('partForTime 找到覆盖该时间的块，越界时退回最后一块', () => {
  const parts = [
    { index: 0, start: 0, end: 12 },
    { index: 1, start: 12, end: 24 },
  ]
  assert.equal(live.partForTime(parts, 0).index, 0)
  assert.equal(live.partForTime(parts, 11.99).index, 0)
  assert.equal(live.partForTime(parts, 12).index, 1)
  assert.equal(live.partForTime(parts, 999).index, 1)
  assert.equal(live.partForTime([], 1), null)
})

test('没装本地运行时的时候 createLiveSpeakers 返回 null，实时退化成只转写和翻译', async () => {
  const speakers = await live.createLiveSpeakers()
  assert.equal(speakers, null)
})
