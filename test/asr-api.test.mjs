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

const { API_CHUNK_SECONDS, REALTIME_CHUNK_SECONDS, asrApiConfig, asrProvider, buildApiLines, transcribeChunk } = await import('../src/asr-api.js')
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

test('云端切片取 100 秒，离接口 120 秒上限留足余量', () => {
  assert.equal(API_CHUNK_SECONDS, 100)
  // 块越大，句子被块边界切开的概率越低；但必须给重采样/补帧留下的余量。
  assert.ok(API_CHUNK_SECONDS < 120)
  assert.ok(120 - API_CHUNK_SECONDS >= 15)
})

test('实时跟播用 12 秒小块，比整段转写的 100 秒短得多', () => {
  assert.equal(REALTIME_CHUNK_SECONDS, 12)
  // 块越小字幕越跟手，代价是边界重复开销；12 秒 = 延迟 3~5 秒与成本上浮 15%~30% 的折中。
  assert.ok(REALTIME_CHUNK_SECONDS < API_CHUNK_SECONDS)
  assert.ok(API_CHUNK_SECONDS / REALTIME_CHUNK_SECONDS >= 4)
})

test('没有 key 时明确报错，而不是静默失败', async () => {
  updateSection('api', { key: '' })
  const config = asrApiConfig()
  assert.equal(config.hasKey, false)
  await assert.rejects(() => transcribeChunk('/tmp/whatever.wav'), /API key/)
})

test('转写和翻译读同一份 key —— 用户只填一次', async () => {
  updateSection('api', { key: 'sk-shared' })
  assert.equal(asrApiConfig().key, 'sk-shared')
  const translate = await import('../src/translate.js')
  assert.equal(translate.loadConfig().apiKey, 'sk-shared')
  assert.equal(translate.publicConfig().hasApiKey, true)
})

test('API 地址去掉结尾斜杠，拼出正确的接口路径', () => {
  updateSection('api', { base: 'https://api.deepseek.com///' })
  assert.equal(asrApiConfig().url, 'https://api.deepseek.com/v1/tools/asr')
})

test('老配置里存在 translate 段的密钥时会自动迁移到 api 段', async () => {
  const file = path.join(process.env.PODWAVE_DATA_DIR, 'config.json')
  // 模拟 0.11.28 及以前写下的配置：只有 translate.apiKey / apiBase / apiModel。
  const legacy = {
    translate: { provider: 'api', target: 'zh', apiKey: 'sk-legacy', apiBase: 'https://api.deepseek.com', apiModel: 'deepseek-chat' },
  }
  fs.writeFileSync(file, JSON.stringify(legacy, null, 2))
  const { loadConfig } = await import('../src/config.js')
  const config = loadConfig()
  assert.equal(config.api.key, 'sk-legacy')
  assert.equal(config.api.base, 'https://api.deepseek.com')
  // 迁移要落盘，否则下次读文件又回到老样子。
  const persisted = JSON.parse(fs.readFileSync(file, 'utf8'))
  assert.equal(persisted.api.key, 'sk-legacy')
  assert.equal(asrApiConfig().key, 'sk-legacy')
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

test('句末标点后面的右引号不会被甩到下一行', () => {
  const lines = buildApiLines('他说：「これはテストです。」それから帰った。', 0, 6)
  assert.equal(lines.length, 2)
  assert.ok(lines[0].text.endsWith('。」'))
  assert.ok(lines[1].text.endsWith('。'))
})

test('短句里的逗号不当作断点，避免「はい、」这种碎片行', () => {
  const lines = buildApiLines('はい、そうです。', 0, 2)
  assert.equal(lines.length, 1)
  assert.equal(lines[0].text, 'はい、そうです。')
})

test('短句保持一行，不会因为一个逗号就被劈开', () => {
  const lines = buildApiLines('今日は東京に行く予定がありますので、早めに起きなければなりません。', 0, 6)
  assert.equal(lines.length, 1)
})

test('超过 30 字还在继续的句子，在逗号处断开', () => {
  const long = '今日は東京に行く予定があるので早めに起きなければならないと思っているのですが、まだ荷物をまとめていなくて困っています。'
  const lines = buildApiLines(long, 0, 12)
  assert.ok(lines.length >= 2)
  assert.ok(lines.every((line) => line.text.length <= 48))
})

test('切点吸附到静音：块边界落在停顿处，而不是硬切在话中间', async () => {
  const { planCuts } = await import('../src/transcribe.js')
  const cuts = planCuts(300, 100, [95, 198, 289])
  assert.deepEqual(cuts, [0, 95, 198, 300])
})

test('块边界把句子切开时，合并阶段会把两半接回去', async () => {
  const { stitchAcrossParts } = await import('../src/transcribe.js')
  const tail = { start: 96, end: 100, text: '明日' }
  const head = { start: 100, end: 103, text: 'は東京に行く予定です。' }
  const joined = stitchAcrossParts(tail, head)
  assert.equal(joined.text, '明日は東京に行く予定です。')
  assert.equal(joined.end, 103)
})

test('两句话本来都完整，就不硬接在一起', async () => {
  const { stitchAcrossParts } = await import('../src/transcribe.js')
  const prev = { start: 96, end: 100, text: '今日はいい天気ですね。' }
  const next = { start: 100.1, end: 103, text: 'それではまた後で会いましょう。' }
  assert.equal(stitchAcrossParts(prev, next), null)
})

test('极短块也给每行留出可读的最小时长', () => {
  const lines = buildApiLines('嗯。好。', 0, 0.4)
  assert.equal(lines.length, 2)
  for (const line of lines) assert.ok(line.end - line.start >= 0.3)
})
