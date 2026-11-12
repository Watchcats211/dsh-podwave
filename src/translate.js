// 字幕翻译：支持 DeepSeek API 与本地 MLX 模型（Qwen3-8B-4bit）。
// 只翻译与目标语言不同的行：中文目标翻英文行，英文目标翻中文行；结果写回 transcript。
import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises'
import { DATA_DIR } from './state.js'
import { readTranscript } from './transcribe.js'
import { loadModelConfig, modelDir } from './models.js'

const TRANSCRIPTS_DIR = path.join(DATA_DIR, 'transcripts')
const CONFIG_PATH = path.join(DATA_DIR, 'translate.json')
const PYTHON = path.join(DATA_DIR, 'runtime', '.venv', 'bin', 'python')
const SCRIPT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'scripts', 'translate_local.py')

const DEFAULTS = {
  provider: 'api',
  target: 'zh',
  apiBase: 'https://api.deepseek.com',
  apiModel: 'deepseek-chat',
  apiKey: '',
}

const jobs = new Map() // `${episodeId}:${target}` -> job

export function loadConfig() {
  try {
    return { ...DEFAULTS, ...JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8')) }
  } catch {
    return { ...DEFAULTS }
  }
}

export function saveConfig(patch) {
  const next = { ...loadConfig(), ...patch }
  fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(next, null, 2), { mode: 0o600 })
  return next
}

export function currentLocalModel() {
  const name = loadModelConfig().translateModel
  const dir = modelDir(name)
  return { name, dir, ready: fs.existsSync(path.join(dir, 'model.safetensors')) }
}

export function publicConfig() {
  const config = loadConfig()
  const local = currentLocalModel()
  return {
    provider: config.provider,
    target: config.target,
    apiBase: config.apiBase,
    apiModel: config.apiModel,
    apiKeyMasked: config.apiKey ? `${config.apiKey.slice(0, 3)}****${config.apiKey.slice(-4)}` : '',
    hasApiKey: Boolean(config.apiKey),
    localModel: local.name,
    localReady: local.ready,
  }
}

function cjkRatio(text) {
  const chars = Array.from(String(text || ''))
  if (!chars.length) return 0
  const cjk = chars.filter((char) => /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/.test(char)).length
  return cjk / chars.length
}

function selectLines(segments, target) {
  return segments.filter((segment) => {
    const ratio = cjkRatio(segment.text)
    return target === 'zh' ? ratio < 0.35 : ratio > 0.15
  })
}

function parseNumbered(text, count) {
  const result = new Map()
  for (const line of String(text || '').split('\n')) {
    const match = /^\s*(\d+)[.、)]\s*(.+?)\s*$/.exec(line)
    if (!match) continue
    const index = Number(match[1])
    if (index >= 1 && index <= count) result.set(index, match[2])
  }
  return result
}

async function translateWithApi(lines, target, config) {
  const language = target === 'zh' ? 'Simplified Chinese' : 'English'
  const system = `You are a professional subtitle translator. Translate each numbered line into ${language}. Preserve proper names, numbers and terminology. Output only numbered lines in the format "1. translation".`
  const result = {}
  const batchSize = 20
  for (let start = 0; start < lines.length; start += batchSize) {
    const batch = lines.slice(start, start + batchSize)
    const content = batch.map((line, index) => `${index + 1}. ${line.text}`).join('\n')
    const response = await fetch(`${config.apiBase.replace(/\/+$/, '')}/chat/completions`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${config.apiKey}`,
      },
      body: JSON.stringify({
        model: config.apiModel,
        temperature: 0.2,
        messages: [
          { role: 'system', content: system },
          { role: 'user', content },
        ],
      }),
    })
    if (!response.ok) {
      const detail = await response.text().catch(() => '')
      throw new Error(`翻译 API ${response.status}：${detail.slice(0, 200)}`)
    }
    const data = await response.json()
    const parsed = parseNumbered(data.choices?.[0]?.message?.content, batch.length)
    batch.forEach((line, index) => {
      result[line.id] = parsed.get(index + 1) || ''
    })
  }
  return result
}

async function translateWithLocal(lines, target) {
  const work = path.join(TRANSCRIPTS_DIR, '.work')
  await mkdir(work, { recursive: true })
  const input = path.join(work, `translate-${Date.now()}.json`)
  await writeFile(
    input,
    JSON.stringify({
      model_dir: currentLocalModel().dir,
      target,
      items: lines.map((line) => ({ id: line.id, text: line.text })),
    }),
    'utf8',
  )
  try {
    const child = spawn(PYTHON, [SCRIPT, input], {
      env: { ...process.env, HF_HUB_OFFLINE: '1', TOKENIZERS_PARALLELISM: 'false' },
      stdio: ['ignore', 'pipe', 'pipe'],
    })
    let stdout = ''
    let stderr = ''
    child.stdout.on('data', (chunk) => { stdout += chunk.toString() })
    child.stderr.on('data', (chunk) => { stderr = (stderr + chunk.toString()).slice(-4000) })
    const code = await new Promise((resolve, reject) => {
      child.on('error', reject)
      child.on('close', resolve)
    })
    if (code !== 0) throw new Error(`本地翻译退出码 ${code}${stderr ? `\n${stderr.split('\n').slice(-4).join('\n')}` : ''}`)
    const parsed = JSON.parse(stdout)
    const result = {}
    for (const line of lines) result[line.id] = String(parsed[line.id] || '')
    return result
  } finally {
    rm(input, { force: true }).catch(() => {})
  }
}

async function writeTranscript(transcript) {
  const target = path.join(TRANSCRIPTS_DIR, `${transcript.id}.json`)
  const tmp = `${target}.tmp`
  await writeFile(tmp, JSON.stringify(transcript, null, 2), 'utf8')
  await rename(tmp, target)
}

export async function startTranslation(episodeId, { target = 'zh', provider } = {}) {
  const config = loadConfig()
  const useProvider = provider || config.provider
  const transcript = await readTranscript(episodeId)
  if (!transcript) throw Object.assign(new Error('先转写这一集'), { status: 409 })
  if (useProvider === 'api' && !config.apiKey) throw Object.assign(new Error('还没有填 DeepSeek API key'), { status: 400 })
  if (useProvider === 'local' && !currentLocalModel().ready) {
    throw Object.assign(new Error('本地翻译模型还没下载好'), { status: 503 })
  }

  const key = `${episodeId}:${target}`
  const current = jobs.get(key)
  if (current && (current.status === 'queued' || current.status === 'running')) return { status: current.status }
  if (transcript.translations?.[target] && Object.keys(transcript.translations[target]).length) {
    return { status: 'done' }
  }

  const job = { status: 'running', startedAt: Date.now(), error: null, done: 0, total: 0 }
  jobs.set(key, job)

  ;(async () => {
    try {
      const lines = selectLines(transcript.segments, target)
      job.total = lines.length
      if (!lines.length) {
        transcript.translations = { ...(transcript.translations || {}), [target]: {} }
        await writeTranscript(transcript)
        job.status = 'done'
        job.finishedAt = Date.now()
        return
      }
      const mapping = useProvider === 'api'
        ? await translateWithApi(lines, target, config)
        : await translateWithLocal(lines, target)
      job.done = lines.length
      transcript.translations = { ...(transcript.translations || {}), [target]: mapping }
      transcript.translations[target]['_provider'] = useProvider
      await writeTranscript(transcript)
      job.status = 'done'
      job.finishedAt = Date.now()
    } catch (error) {
      job.status = 'error'
      job.error = error.message || String(error)
      job.finishedAt = Date.now()
    }
  })()

  return { status: 'running' }
}

export async function getTranslationState(episodeId, target = 'zh') {
  const transcript = await readTranscript(episodeId)
  const job = jobs.get(`${episodeId}:${target}`)
  if (job && (job.status === 'running' || job.status === 'queued')) {
    return { status: job.status, done: job.done, total: job.total }
  }
  if (job && job.status === 'error') return { status: 'error', error: job.error }
  if (transcript?.translations?.[target] && Object.keys(transcript.translations[target]).length) {
    return { status: 'done', translations: transcript.translations[target] }
  }
  return { status: 'none' }
}
