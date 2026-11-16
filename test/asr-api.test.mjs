// 云端转写的纯逻辑测试：不真的发请求，只验配置解析和时间分配。
// 真实接口调用靠 test/ci 之外的人工验证（会花钱，不放进 CI）。
import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-asr-api-'))
process.env.HOME = tmp
process.env.PODWAVE_DATA_DIR = path.join(tmp, '.podwave')
fs.mkdirSync(process.env.PODWAVE_DATA_DIR, { recursive: true })

const { API_CHUNK_SECONDS, asrApiConfig, asrProvider, buildApiLines, transcribeChunk } = await import('../src/asr-api.js')
const { updateSection } = await import('../src/config.js')
const { transcribeConfig } = await import('../src/transcribe.js')

test('默认走云端 API，只有明确写 local 才切本地', () => {
  updateSection('transcribe', { provider: '' })
  assert.equal(asrProvider(), 'api')
  updateSection('transcribe', { provider: 'local' })
  assert.equal(asrProvider(), 'local')
  assert.equal(transcribeConfig().provider, 'local')
  updateSection('transcribe', { provider: 'api' })
  assert.equal(asrProvider(), 'api')
})

test('云端切片固定 30 秒，远低于接口 120 秒上限', () => {
  assert.equal(API_CHUNK_SECONDS, 30)
  assert.ok(API_CHUNK_SECONDS * 1.5 < 120)
})

test('没有 key 时明确报错，而不是静默失败', async () => {
  updateSection('transcribe', { apiKey: '' })
  updateSection('translate', { apiKey: '' })
  const config = asrApiConfig()
  assert.equal(config.hasKey, false)
  await assert.rejects(() => transcribeChunk('/tmp/whatever.wav'), /API key/)
})

test('转写自己的 key 为空时复用翻译那把', () => {
  updateSection('translate', { apiKey: 'sk-translate' })
  updateSection('transcribe', { apiKey: '' })
  const reused = asrApiConfig()
  assert.equal(reused.key, 'sk-translate')
  assert.equal(reused.reusedKey, true)
})

test('转写单独填了 key 就用自己的', () => {
  updateSection('translate', { apiKey: 'sk-translate' })
  updateSection('transcribe', { apiKey: 'sk-transcribe' })
  const own = asrApiConfig()
  assert.equal(own.key, 'sk-transcribe')
  assert.equal(own.reusedKey, false)
})

test('API 地址去掉结尾斜杠，拼出正确的接口路径', () => {
  updateSection('transcribe', { apiBase: 'https://api.deepseek.com///' })
  assert.equal(asrApiConfig().url, 'https://api.deepseek.com/v1/tools/asr')
})

test('空文本切出 0 行', () => {
  assert.deepEqual(buildApiLines('', 0, 10), [])
  assert.deepEqual(buildApiLines('   ', 5, 10), [])
})

test('按标点切句，并在块时间范围内按字数分配', () => {
  const lines = buildApiLines('这是一个测试，用来验证语音识别接口是否正常工作。今天天气不错，适合出门散步。', 10, 8.473)
  assert.equal(lines.length, 2)
  assert.equal(lines[0].start, 10)
  assert.equal(lines[0].text, '这是一个测试，用来验证语音识别接口是否正常工作。')
  assert.equal(lines[1].text, '今天天气不错，适合出门散步。')
  // 最后一行必须正好收在块末尾，否则字幕会和下一块脱节。
  assert.equal(lines[1].end, 18.47)
  // 时间单调递增且不越界。
  assert.ok(lines[1].start >= lines[0].end)
  assert.ok(lines[0].end <= lines[1].end)
  // 长句分到的时间更多。
  assert.ok(lines[0].end - lines[0].start > lines[1].end - lines[1].start)
})

test('没有标点的长串也会被切成多行，不会一行写满整块', () => {
  const long = '啊'.repeat(200)
  const lines = buildApiLines(long, 0, 30)
  assert.ok(lines.length >= 4)
  for (const line of lines) assert.ok(line.text.length <= 60)
  assert.equal(lines[lines.length - 1].end, 30)
})

test('极短块也给每行留出可读的最小时长', () => {
  const lines = buildApiLines('嗯。好。', 0, 0.4)
  assert.equal(lines.length, 2)
  for (const line of lines) assert.ok(line.end - line.start >= 0.3)
})
