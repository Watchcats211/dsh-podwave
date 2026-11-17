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
import { venvPython } from './platform.js'
import { artifactByDir } from './catalog.js'

// Windows 的虚拟环境是 .venv\Scripts\python.exe，不是 .venv/bin/python。
const PYTHON = venvPython()
const SCRIPT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'scripts', 'translate_local.py')

// API 地址/密钥/对话模型统一放在 config.api，转写和翻译共用，用户只填一次。
// 这里把 api 段叠加到 translate 段上，下游代码照旧读 config.apiBase / apiModel / apiKey。
export function loadConfig() {
  const translate = getSection('translate') || {}
  const api = getSection('api') || {}
  return {
    ...translate,
    apiBase: api.base || translate.apiBase || 'https://api.deepseek.com',
    apiModel: api.model || translate.apiModel || 'deepseek-chat',
    apiKey: api.key || translate.apiKey || '',
  }
}

export function saveConfig(patch) {
  const rest = { ...patch }
  const api = {}
  if (typeof rest.apiBase === 'string') {
    api.base = rest.apiBase.trim() || 'https://api.deepseek.com'
    delete rest.apiBase
  }
  if (typeof rest.apiModel === 'string') {
    api.model = rest.apiModel.trim() || 'deepseek-chat'
    delete rest.apiModel
  }
  if (typeof rest.apiKey === 'string') {
    api.key = rest.apiKey.trim()
    delete rest.apiKey
  }
  if (Object.keys(api).length) {
    updateSection('api', api)
    // 老版本插件仍从 translate 段读这三项，顺手镜像一份，降级回去也不会丢 key。
    const mirror = {}
    if (api.base !== undefined) mirror.apiBase = api.base
    if (api.model !== undefined) mirror.apiModel = api.model
    if (api.key !== undefined) mirror.apiKey = api.key
    updateSection('translate', mirror)
  }
  if (Object.keys(rest).length) updateSection('translate', rest)
  return loadConfig()
}

export function currentLocalModel() {
  const name = loadModelConfig().translateModel
  const dir = modelDir(name)
  const gguf = fs.existsSync(dir) ? fs.readdirSync(dir).find((file) => file.endsWith('.gguf')) : null
  const mlx = fs.existsSync(path.join(dir, 'model.safetensors'))
  // 同样以 catalog 元数据为准，别靠文件存在与否猜引擎（MLX 与 llama 目录都可能有两种文件）。
  const artifact = artifactByDir(name, 'translate')
  const engine = artifact ? (artifact.engine === 'mlx' ? 'mlx' : 'llama') : mlx ? 'mlx' : gguf ? 'llama' : 'none'
  return { name, dir, ready: Boolean(mlx || gguf), engine }
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

const KANA_RE = /[\u3040-\u30ff\u31f0-\u31ff\uff66-\uff9f]/
const HANGUL_RE = /[\u1100-\u11ff\u3130-\u318f\uac00-\ud7af]/
const HAN_RE = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/
// 拉丁字母 + 常见带音标的拉丁字母（法/德/西/葡…）+ 希腊/西里尔，都算「非汉字」。
const LATIN_RE = /[A-Za-z\u00c0-\u024f\u0370-\u03ff\u0400-\u04ff]/

export function scriptCounts(text) {
  const counts = { han: 0, kana: 0, hangul: 0, latin: 0 }
  for (const char of Array.from(String(text || ''))) {
    if (KANA_RE.test(char)) counts.kana += 1
    else if (HANGUL_RE.test(char)) counts.hangul += 1
    else if (HAN_RE.test(char)) counts.han += 1
    else if (LATIN_RE.test(char)) counts.latin += 1
  }
  return counts
}

function looksChinese(text) {
  const { han, kana, hangul, latin } = scriptCounts(text)
  if (!han || kana || hangul) return false
  return han >= latin
}

function looksEnglish(text) {
  const { han, kana, hangul, latin } = scriptCounts(text)
  if (!latin) return false
  return latin >= han + kana + hangul
}

/**
 * 只翻与目标语言不同的行。
 *
 * 以前按「CJK 字符占比」判断，假名和谚文都被算进 CJK：日语行占比接近 1，
 * 就被当成「已经是中文 → 不用翻」，日语/韩语视频一行译文都生不出来。
 * 现在按文字体系判断：有假名或谚文一定不是中文，纯汉字才算中文。
 */
export function needsTranslation(line, target) {
  const text = String(line?.text || '')
  const { han, kana, hangul, latin } = scriptCounts(text)
  if (!han && !kana && !hangul && !latin) return false // 纯数字/标点不用翻
  if (target === 'zh') {
    if (kana || hangul) return true
    return !looksChinese(text)
  }
  if (target === 'en') {
    if (han || kana || hangul) return true
    return !looksEnglish(text)
  }
  return true
}

export function parseNumbered(text, count) {
  const result = new Map()
  for (const line of String(text || '').split('\n')) {
    const match = /^\s*(\d+)[.、)]\s*(.+?)\s*$/.exec(line)
    if (!match) continue
    const index = Number(match[1])
    if (index >= 1 && index <= count) result.set(index, match[2])
  }
  return result
}

// API 对超长或不完整输出不能假装成功：只保存已确认的行，并明确指出哪些行需要重试。
export function missingNumberedItems(batch, parsed) {
  const missing = []
  batch.forEach((line, index) => {
    if (!String(parsed.get(index + 1) || '').trim()) missing.push(line)
  })
  return missing
}

async function fetchWithRetry(url, init, { attempts = 3, timeoutMs = 120000 } = {}) {
  let lastError = null
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, { ...init, signal: AbortSignal.timeout(timeoutMs) })
      if (response.status === 429 || response.status >= 500) {
        const detail = await response.text().catch(() => '')
        lastError = new Error(`翻译 API ${response.status}：${detail.slice(0, 200)}`)
        if (attempt < attempts) {
          await new Promise((resolve) => setTimeout(resolve, attempt * 1500))
          continue
        }
        throw lastError
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

async function requestApiBatch(batch, system, config) {
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
  const data = await response.json().catch(() => null)
  if (!data || !Array.isArray(data.choices) || typeof data.choices[0]?.message?.content !== 'string') {
    throw new Error(data?.error?.message ? `翻译 API：${String(data.error.message).slice(0, 200)}` : '翻译 API 返回格式不正确：没有字幕内容')
  }
  const parsed = parseNumbered(data.choices[0].message.content, batch.length)
  if (parsed.size === batch.length) return parsed
  // 行数对不上说明模型把几行并成一行（短行尤其常见），编号会整体后移。
  // 降批重试，直到一行对一行；单行不可能再错位。
  if (batch.length > 1) {
    const mid = Math.ceil(batch.length / 2)
    const merged = new Map()
    for (const [index, text] of await requestApiBatch(batch.slice(0, mid), system, config)) merged.set(index, text)
    for (const [index, text] of await requestApiBatch(batch.slice(mid), system, config)) merged.set(index + mid, text)
    return merged
  }
  const single = String(parsed.get(1) || '').trim()
  return single ? new Map([[1, single]]) : new Map()
}

export async function translateWithApi(items, target, config, { onBatch, shouldContinue = () => true } = {}) {
  const language = target === 'zh' ? 'Simplified Chinese' : 'English'
  const system = `You are a professional subtitle translator. Translate each numbered line into ${language}. Preserve proper names, numbers and terminology. Output only numbered lines in the format "1. translation".`
  const result = new Map()
  const batchSize = 20
  let incomplete = 0
  for (let start = 0; start < items.length; start += batchSize) {
    if (!shouldContinue()) throw new Error('翻译已取消')
    const batch = items.slice(start, start + batchSize)
    const parsed = await requestApiBatch(batch, system, config)
    const missing = missingNumberedItems(batch, parsed)
    incomplete += missing.length
    batch.forEach((line, index) => {
      const text = parsed.get(index + 1)
      if (text) result.set(line.id, text)
    })
    // 先落盘当前批，后续 API 失败时不会把前面成功的译文一起丢掉。
    await onBatch?.(parsed, batch)
  }
  if (incomplete) {
    const error = new Error(`API 返回不完整：${incomplete} 行缺少编号译文；已保存其它行，可重试缺失部分`)
    error.incomplete = incomplete
    throw error
  }
  return result
}

// llama-server 也会把短行并起来，编号一错就整批错位；行数对不上就降批重试。
async function translateWithLlamaAligned(items, target) {
  const parsed = await translateWithLlama(items, target)
  if (parsed.length === items.length) return parsed
  if (items.length <= 1) return parsed.slice(0, 1)
  const mid = Math.ceil(items.length / 2)
  const left = await translateWithLlamaAligned(items.slice(0, mid), target)
  const right = await translateWithLlamaAligned(items.slice(mid), target)
  return [...left, ...right.map((entry) => ({ index: entry.index + mid, text: entry.text }))]
}

async function translateWithLocal(items, target) {
  const model = currentLocalModel()
  if (model.engine === 'llama') {
    const parsed = await translateWithLlamaAligned(items, target)
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

// 哪些行需要翻译：默认只挑还没有译文的；force 时把已有的也一起挑出来重翻。
export function pendingTranslationLines(lines, target, { force = false } = {}) {
  return (lines || []).filter((line) => needsTranslation(line, target) && (force || !line.translations?.[target]))
}

export async function startTranslation(episodeId, { target = 'zh', provider, force = false } = {}) {
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
  // 已有任务在跑时不重复开一个（避免重复计费），直接把当前状态回给调用方。
  if (current && (current.status === 'queued' || current.status === 'running')) {
    return getTranslationState(episodeId, target)
  }

  const pending = pendingTranslationLines(transcript.lines, target, { force })
  const eligible = transcript.lines.filter((line) => needsTranslation(line, target)).length
  if (!pending.length) {
    const existing = transcript.lines.filter((line) => line.translations?.[target]).length
    upsertJob({ key, type: 'translate', episodeId, target, provider: useProvider, status: 'done', finishedAt: Date.now(), progress: { done: existing, total: eligible }, error: null })
    return getTranslationState(episodeId, target)
  }

  upsertJob({ key, type: 'translate', episodeId, target, provider: useProvider, status: 'running', startedAt: Date.now(), finishedAt: null, progress: { done: 0, total: pending.length }, error: null })

  ;(async () => {
    let saved = 0
    const saveBatch = async (mapping) => {
      if (!mapping.size) return
      const fresh = await readTranscript(episodeId)
      if (!fresh) throw new Error('转写记录不见了')
      let batchDone = 0
      for (const line of fresh.lines) {
        const text = mapping.get(line.id)
        if (text) {
          line.translations = { ...(line.translations || {}), [target]: text }
          batchDone += 1
        }
      }
      fresh.providers = { ...(fresh.providers || {}), [target]: useProvider }
      await saveTranscript(fresh)
      saved += batchDone
      upsertJob({ key, progress: { done: saved, total: pending.length } })
    }
    try {
      const items = pending.map((line) => ({ id: line.id, text: line.text }))
      const mapping = useProvider === 'api'
        ? await translateWithApi(items, target, config, {
            onBatch: async (parsed, batch) => {
              const translated = new Map()
              batch.forEach((line, index) => {
                const text = parsed.get(index + 1)
                if (text) translated.set(line.id, text)
              })
              await saveBatch(translated)
            },
          })
        : await translateWithLocal(items, target)
      if (useProvider !== 'api') await saveBatch(mapping)
      upsertJob({ key, status: 'done', finishedAt: Date.now(), progress: { done: saved, total: pending.length }, error: null })
    } catch (error) {
      const message = error.message || String(error)
      console.error(`[dsh-podwave] translation failed (${episodeId}, ${target}, ${useProvider}, ${saved}/${pending.length} saved): ${message}`)
      upsertJob({ key, status: 'error', finishedAt: Date.now(), progress: { done: saved, total: pending.length }, error: message })
    }
  })()

  return getTranslationState(episodeId, target)
}

// 单行重翻：某一行翻得不对时，只重翻这一行（一次调用，成本可忽略），不动别的行。
export async function translateLine(episodeId, lineId, { target = 'zh', provider } = {}) {
  const config = loadConfig()
  const useProvider = provider || config.provider
  const transcript = await readTranscript(episodeId)
  if (!transcript) throw Object.assign(new Error('先转写这一集'), { status: 409 })
  const line = transcript.lines.find((item) => item.id === lineId)
  if (!line) throw Object.assign(new Error('找不到这一行'), { status: 404 })
  if (useProvider === 'api' && !config.apiKey) throw Object.assign(new Error('还没有填 DeepSeek API key'), { status: 400 })
  if (useProvider === 'local' && !currentLocalModel().ready) {
    throw Object.assign(new Error('本地翻译模型还没下载好'), { status: 503 })
  }
  const items = [{ id: line.id, text: line.text }]
  const mapping = useProvider === 'api' ? await translateWithApi(items, target, config) : await translateWithLocal(items, target)
  const text = mapping?.get?.(line.id)
  if (!text) throw Object.assign(new Error('这一行没有拿到译文，可以稍后再试'), { status: 502 })
  // 重新读一遍再写，避免把翻译期间用户手动编辑的内容盖掉。
  const fresh = await readTranscript(episodeId)
  const target2 = fresh?.lines?.find((item) => item.id === lineId)
  if (!target2) throw Object.assign(new Error('这一行已经不在字幕里了'), { status: 409 })
  target2.translations = { ...(target2.translations || {}), [target]: text }
  fresh.providers = { ...(fresh.providers || {}), [target]: useProvider }
  await saveTranscript(fresh)
  return { line: target2, translation: text, provider: useProvider }
}

// 后端以 transcript 为准统计「已翻/待翻」，并保留持久 job 的错误与进度。
// status: none（未开始）/ running|queued / error（含已落盘进度）/ partial（部分完成）/ done。
export async function getTranslationState(episodeId, target = 'zh') {
  const transcript = await readTranscript(episodeId)
  const key = translationKey(episodeId, target)
  const job = getJob(key)
  const lines = transcript?.lines || []
  const eligible = lines.filter((line) => needsTranslation(line, target)).length
  const translated = lines.filter((line) => needsTranslation(line, target) && line.translations?.[target]).length
  const missing = Math.max(0, eligible - translated)
  const progress = job?.progress || { done: 0, total: 0 }
  const base = { translated, total: eligible, missing, provider: transcript?.providers?.[target] || null, progress }

  if (job && (job.status === 'queued' || job.status === 'running')) {
    return { ...base, status: job.status }
  }
  // 字幕是落盘结果的唯一事实来源：全部翻完时，清掉可能残留的旧错误/中断标记。
  if (lines.length && !missing) return { ...base, status: 'done' }
  if (job && (job.status === 'error' || job.status === 'interrupted')) {
    return { ...base, status: 'error', error: job.error || '任务已中断' }
  }
  if (!transcript) return { ...base, status: 'none' }
  return { ...base, status: translated > 0 ? 'partial' : 'none' }
}
