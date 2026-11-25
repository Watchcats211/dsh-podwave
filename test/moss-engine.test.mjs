import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

// MOSS 引擎接线：不真的加载 1.7 GB 模型，用一个假 python 冒充 moss_server.py，
// 只验证「引擎识别 / 参数拼装 / 输出解析 / 说话人保留 / 失败上报」这几段胶水。
const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-moss-'))
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')

const venv = path.join(home, 'venv')
fs.mkdirSync(path.join(venv, 'bin'), { recursive: true })
const fake = path.join(home, 'fake-moss.mjs')
fs.writeFileSync(
  fake,
  `import fs from 'node:fs'
import path from 'node:path'
const argv = process.argv.slice(2)
const pick = (flag) => { const at = argv.indexOf(flag); return at >= 0 ? argv[at + 1] : '' }
const outDir = pick('--out-dir')
const files = argv.filter((item, index) => !item.startsWith('--') && !String(argv[index - 1] || '').startsWith('--'))
fs.mkdirSync(outDir, { recursive: true })
if (process.env.FAKE_MOSS === 'fail') {
  process.stderr.write('boom: 假装模型加载失败\\n')
  process.exit(3)
}
for (const file of files) {
  const stem = path.basename(file).replace(/\\.[^.]+$/, '')
  fs.writeFileSync(path.join(outDir, stem + '.json'), JSON.stringify({
    engine: 'moss',
    text: '一段。二段。',
    speakers: ['S01', 'S02'],
    segments: [
      { start: 0.4, end: 2.1, speaker: 'S01', text: '第一句话说完了。' },
      { start: 2.4, end: 4.8, speaker: 'S02', text: '第二句话也说完。' },
    ],
  }), 'utf8')
}
process.stdout.write(JSON.stringify({ type: 'done', index: 0 }) + '\\n')
`,
  'utf8',
)
const shim = path.join(venv, 'bin', 'python')
fs.writeFileSync(shim, `#!/bin/sh\nexec "${process.execPath}" "${fake}" "$@"\n`, 'utf8')
fs.chmodSync(shim, 0o755)
process.env.PODWAVE_RUNTIME_VENV = venv

const models = path.join(home, 'models')
fs.mkdirSync(path.join(models, 'moss-transcribe-diarize'), { recursive: true })
fs.writeFileSync(path.join(models, 'moss-transcribe-diarize', 'config.json'), '{}', 'utf8')
fs.mkdirSync(path.join(home, '.podwave'), { recursive: true })
fs.writeFileSync(
  path.join(home, '.podwave', 'config.json'),
  JSON.stringify({
    models: { dir: models, asrModel: 'moss-transcribe-diarize', translateModel: '' },
    transcribe: { provider: 'local', hotwords: [], chunkMinutes: 5, diarize: false, realtime: false },
  }),
  'utf8',
)

const transcribe = await import('../src/transcribe.js')
const { getJob } = await import('../src/jobs.js')

const audio = path.join(home, 'clip.m4a')
fs.writeFileSync(audio, 'not really audio')

function episode(id) {
  return { id, file: audio, title: 'clip', duration: 6 }
}

async function settle(id, timeoutMs = 20000) {
  const started = Date.now()
  for (;;) {
    const job = getJob(`transcribe:${id}`)
    if (job && ['done', 'error', 'cancelled'].includes(job.status)) return job
    if (Date.now() - started > timeoutMs) throw new Error(`任务没有结束：${JSON.stringify(job)}`)
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
}

test('moss model is recognised with its own engine', () => {
  const model = transcribe.currentAsrModel()
  assert.equal(model.engine, 'moss')
  assert.equal(model.ready, true)
  assert.match(transcribe.runtimeInfo().cli, /venv\/bin\/python$/)
})

test('moss output keeps model sentences and speaker labels', async () => {
  process.env.FAKE_MOSS = 'ok'
  const item = episode('mosswork')
  await transcribe.startTranscription(item, { force: true })
  const job = await settle(item.id)
  assert.equal(job.status, 'done', job.error)
  const transcript = await transcribe.readTranscript(item.id)
  assert.ok(transcript && transcript.lines.length === 2, JSON.stringify(transcript?.lines))
  assert.deepEqual(transcript.lines.map((line) => line.text), ['第一句话说完了。', '第二句话也说完。'])
  assert.deepEqual(transcript.lines.map((line) => line.speaker), ['S01', 'S02'])
  // 说话人汇总到 transcript 顶层，前端用它显示「几个人说话」。
  assert.deepEqual(transcript.speakers, ['S01', 'S02'])
  assert.equal(transcript.model, 'moss-transcribe-diarize')
})

test('moss failure surfaces stderr in the job error', async () => {
  process.env.FAKE_MOSS = 'fail'
  const item = episode('mossfail')
  await transcribe.startTranscription(item, { force: true })
  const job = await settle(item.id)
  assert.equal(job.status, 'error')
  assert.match(String(job.error), /退出码 3|boom/)
})
