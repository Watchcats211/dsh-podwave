// 字幕翻译：支持 DeepSeek API 与本地 MLX 模型（Qwen3-8B-4bit）。
// v2 transcript 下，译文存在 line.translations[target]，来源记在 transcript.providers[target]。
import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { mkdir, rm, writeFile } from 'node:fs/promises'
import { DATA_DIR } from './state.js'
import { readTranscript, saveTranscript } from './transcribe.js'
import { loadModelConfig, modelDir } from './models.js'
import { translateWithLlama } from './llama.js'
import { getSection, updateSection } from './config.js'
import { getJob, jobKey, upsertJob } from './jobs.js'

const PYTHON = path.join(DATA_DIR, 'runtime', '.venv', 'bin', 'python')
const SCRIPT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'scripts', 'translate_local.py')

export function loadConfig() {
  return getSection('translate')
}

export function saveConfig(patch) {
  return updateSection('translate', patch)
}

export function currentLocalModel() {
  const name = loadModelConfig().translateModel
  const dir = modelDir(name)
  const gguf = fs.existsSync(dir) ? fs.readdirSync(dir).find((file) => file.endsWith('.gguf')) : null
  const mlx = fs.existsSync(path.join(dir, 'model.safetensors'))
  return { name, dir, ready: Boolean(mlx || gguf), engine: mlx ? 'mlx' : gguf ? 'llama' : 'none' }
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

// 只翻与目标语言不同的行：目标中文翻英文行，目标英文翻中文行。
function needsTranslation(line, target) {
  const ratio = cjkRatio(line.text)
  return target === 'zh' ? ratio < 0.35 : ratio > 0.15
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

async function fetchWithRetry(url, init, { attempts = 3, timeoutMs = 120000 } = {}) {
  let lastError = null
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, { ...init, signal: AbortSignal.timeout(timeoutMs) })
      if (response.status === 429 || response.status >= 500) {
        lastError = new Error(`翻译 API ${response.status}`)
        if (attempt < attempts) {
          await new Promise((resolve) => setTimeout(resolve, attempt * 1500))
          continue
        }
        const detail = await response.text().catch(() => '')
        throw new Error(`翻译 API ${response.status}：${detail.slice(0, 200)}`)
      }
      return response
    } catch (error) {
      lastError = error
      const retryable = error?.name === 'TimeoutError' || /fetch failed|network|ECONN|ETIMEDOUT/i.test(String(error?.message || error))
      if (retryable && attempt < attempts) {
        await new Promise((resolve) => setTimeout(resolve, attempt * 1500))
        continue
      }
      throw error
    }
  }
  throw lastError
}

async function translateWithApi(items, target, config) {
  const language = target === 'zh' ? 'Simplified Chinese' : 'English'
  const system = `You are a professional subtitle translator. Translate each numbered line into ${language}. Preserve proper names, numbers and terminology. Output only numbered lines in the format "1. translation".`
  const result = new Map()
  const batchSize = 20
  for (let start = 0; start < items.length; start += batchSize) {
    const batch = items.slice(start, start + batchSize)
    const content = batch.map((line, index) => `${index + 1}. ${line.text}`).join('\n')
    const response = await fetchWithRetry(`${config.apiBase.replace(/\/+$/, '')}/chat/completions`, {
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
      const text = parsed.get(index + 1)
      if (text) result.set(line.id, text)
    })
  }
  return result
}

async function translateWithLocal(items, target) {
  const model = currentLocalModel()
  if (model.engine === 'llama') {
    const parsed = await translateWithLlama(items, target)
    const result = new Map()
    for (const entry of parsed) {
      const line = items[entry.index]
      if (line && entry.text) result.set(line.id, entry.text)
    }
    return result
  }
  const work = path.join(DATA_DIR, 'transcripts', '.work')
  await mkdir(work, { recursive: true })
  const input = path.join(work, `translate-${Date.now()}.json`)
  await writeFile(
    input,
    JSON.stringify({
      model_dir: currentLocalModel().dir,
      target,
      items: items.map((line) => ({ id: line.id, text: line.text })),
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
    const result = new Map()
    for (const line of items) {
      const text = String(parsed[line.id] || '')
      if (text) result.set(line.id, text)
    }
    return result
  } finally {
    rm(input, { force: true }).catch(() => {})
  }
}

function translationKey(episodeId, target) {
  return jobKey({ type: 'translate', episodeId, target })
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

  const key = translationKey(episodeId, target)
  const current = getJob(key)
  if (current && (current.status === 'queued' || current.status === 'running')) return { status: current.status }

  const pending = transcript.lines.filter((line) => needsTranslation(line, target) && !line.translations?.[target])
  if (!pending.length) {
    const existing = transcript.lines.filter((line) => line.translations?.[target]).length
    return { status: 'done', translated: existing }
  }

  upsertJob({ key, type: 'translate', episodeId, target, status: 'running', startedAt: Date.now(), progress: { done: 0, total: pending.length }, error: null })

  ;(async () => {
    try {
      const items = pending.map((line) => ({ id: line.id, text: line.text }))
      const mapping = useProvider === 'api'
        ? await translateWithApi(items, target, config)
        : await translateWithLocal(items, target)

      const fresh = await readTranscript(episodeId)
      if (!fresh) throw new Error('转写记录不见了')
      let done = 0
      for (const line of fresh.lines) {
        const text = mapping.get(line.id)
        if (text) {
          line.translations = { ...(line.translations || {}), [target]: text }
          done += 1
        }
      }
      fresh.providers = { ...(fresh.providers || {}), [target]: useProvider }
      await saveTranscript(fresh)
      upsertJob({ key, status: 'done', finishedAt: Date.now(), progress: { done: mapping.size, total: pending.length }, error: null })
    } catch (error) {
      upsertJob({ key, status: 'error', finishedAt: Date.now(), error: error.message || String(error) })
    }
  })()

  return { status: 'running', total: pending.length }
}

export async function getTranslationState(episodeId, target = 'zh') {
  const transcript = await readTranscript(episodeId)
  const key = translationKey(episodeId, target)
  const job = getJob(key)
  if (job && (job.status === 'queued' || job.status === 'running')) {
    return { status: job.status, progress: job.progress || { done: 0, total: 0 } }
  }
  if (job && (job.status === 'error' || job.status === 'interrupted')) {
    return { status: 'error', error: job.error || '任务已中断' }
  }
  if (!transcript) return { status: 'none' }
  const translated = transcript.lines.filter((line) => line.translations?.[target]).length
  const eligible = transcript.lines.filter((line) => needsTranslation(line, target)).length
  if (translated > 0) return { status: 'done', translated, total: eligible, provider: transcript.providers?.[target] || null }
  return { status: 'none', translated: 0, total: eligible }
}
