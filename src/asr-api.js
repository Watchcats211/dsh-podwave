// 云端转写：DeepSeek 语音识别接口（2026-11-13 随「全家桶」开放）。
//
// POST {base}/v1/tools/asr，multipart/form-data 上传一整段音频，返回整段文本。
// 官方硬限制：单次 ≤120 秒、≤8 MiB、16 位 PCM WAV 或 Ogg Opus；语种自动识别；
// 不支持流式；响应只有整段 text，**没有词级/句级时间戳**，所以时间轴要靠自己切块 + 按字数分配。
//
// 这里只放「调一次接口」和「把一整段文本变成带时间的行」两件事，
// 切片、并发、落盘、合并都留在 transcribe.js 里，和本地引擎复用同一套流程。
import fs from 'node:fs'
import { getSection } from './config.js'

export const API_ASR_PATH = '/v1/tools/asr'
// 官方要求 ≤120 秒。留 20 秒余量：切片是按容器时间戳切的，
// 有些音频的重采样/补帧会多出零点几秒，卡在 120 上迟早翻车。
// 块越大，句子被块边界切开的概率越低（切点还会吸附到静音处，见 transcribe.js 的 planCuts）。
export const API_CHUNK_SECONDS = 100
// 实时跟播模式（边播边出字幕）用小段滚动：块越小，字幕越跟手，代价是块边界的
// 重复开销（识别成本大约上浮 15%~30%）。12 秒在「延迟 3~5 秒」和成本之间折中。
export const REALTIME_CHUNK_SECONDS = 12
export const API_MAX_SECONDS = 100
export const API_MAX_BYTES = 8 * 1024 * 1024
const REQUEST_TIMEOUT_MS = 180000
const MAX_ATTEMPTS = 4

const SENTENCE_END = /[。！？!?…]/
const CLAUSE_END = /[，,；;、]/
// 紧跟句末标点的右引号/右括号要留在同一行，不然会出现「他说：」+「」」这种断裂。
const CLOSER = /[」』）)】》”’"]/
// 一条字幕的长度上限（字符数）。有词边界的语言可以长一点，中日文没有空格，短一些。
const HARD_LIMIT = 84
const CJK_HARD_LIMIT = 48
// 逗号/顿号只有攒到这么长才算断点：短句里的逗号断开反而更难读。
// 中日文一行 30 字左右最好读，超过 48 字就必须断。
const SOFT_MIN = 30

function round2(value) {
  return Math.round((Number(value) || 0) * 100) / 100
}

/**
 * 转写走哪条路：`'api'`（默认，开箱即用）还是 `'local'`（本地模型，省钱但费机器）。
 * 只有明确写了 `local` 才走本地，其它一律按云端处理，避免老配置突然掉回「没装模型」的死胡同。
 */
export function asrProvider() {
  const section = getSection('transcribe') || {}
  return String(section.provider || '').toLowerCase() === 'local' ? 'local' : 'api'
}

/**
 * 云端转写用到的端点与密钥。apiKey 留空时自动复用翻译那把 DeepSeek key ——
 * 用户填一次就能同时用转写和翻译，不用记两次。
 */
export function asrApiConfig() {
  const api = getSection('api') || {}
  const translate = getSection('translate') || {}
  const base = String(api.base || translate.apiBase || 'https://api.deepseek.com')
    .trim()
    .replace(/\/+$/, '')
  const key = String(api.key || translate.apiKey || '').trim()
  return { base, url: `${base}${API_ASR_PATH}`, key, hasKey: Boolean(key) }
}

function describeFailure(status, payload) {
  const message = String(payload?.error?.message || payload?.message || '').trim()
  if (status === 401 || status === 403) {
    return 'DeepSeek API key 无效或没有语音识别权限，请到设置里检查'
  }
  if (status === 402) return 'DeepSeek 账户余额不足，请充值后再转写'
  if (status === 413) return '音频块太大，超过接口限制'
  if (status === 429) return '请求太频繁被限流，稍后会自动重试'
  if (message) return `语音识别失败：${message}`
  return `语音识别失败（HTTP ${status}）`
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * 把一段音频发给 DeepSeek ASR。
 * @returns {Promise<{text: string, durationMs: number}>}
 */
export async function transcribeChunk(file, config = asrApiConfig(), { signal } = {}) {
  if (!config.hasKey) {
    throw Object.assign(new Error('还没有填 DeepSeek API key，去设置里填一个就能用云端转写'), { status: 400 })
  }
  const bytes = await fs.promises.readFile(file)
  if (!bytes.length) throw new Error('音频块是空的')
  if (bytes.length > API_MAX_BYTES) {
    throw new Error(`音频块 ${(bytes.length / 1024 / 1024).toFixed(1)} MB，超过接口的 8 MB 上限`)
  }

  let lastError = null
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    const form = new FormData()
    form.append('file', new Blob([bytes], { type: 'audio/wav' }), 'chunk.wav')
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
    const onAbort = () => controller.abort()
    if (signal) signal.addEventListener('abort', onAbort, { once: true })
    try {
      const response = await fetch(config.url, {
        method: 'POST',
        headers: { authorization: `Bearer ${config.key}` },
        body: form,
        signal: controller.signal,
      })
      const raw = await response.text()
      let payload = null
      try {
        payload = raw ? JSON.parse(raw) : null
      } catch {
        payload = null
      }
      if (!response.ok) {
        const error = Object.assign(new Error(describeFailure(response.status, payload)), { status: response.status })
        // 4xx 里只有 429 值得重试，其余（key 错、余额空、参数错）重试也没用。
        if (response.status !== 429 && response.status < 500) throw error
        lastError = error
      } else {
        return {
          text: String(payload?.text || ''),
          durationMs: Number(payload?.duration_ms) || 0,
        }
      }
    } catch (error) {
      if (error?.name === 'AbortError') {
        if (signal?.aborted) throw new Error('用户取消了转写')
        lastError = Object.assign(new Error('语音识别超时，稍后会自动重试'), { status: 504 })
      } else if (error?.status && error.status !== 429 && error.status < 500) {
        throw error
      } else {
        lastError = error
      }
    } finally {
      clearTimeout(timer)
      if (signal) signal.removeEventListener('abort', onAbort)
    }
    if (signal?.aborted) throw new Error('用户取消了转写')
    if (attempt < MAX_ATTEMPTS) await sleep(600 * attempt)
  }
  throw lastError || new Error('语音识别失败')
}

/**
 * 把一整段识别文本切成字幕句：句末标点断句；逗号只在够长时才断；
 * 超长且没有标点（日语、中文常见）就退到最近的空格/标点处断，实在没有才硬断。
 */
export function splitApiSentences(text) {
  const chars = Array.from(String(text || ''))
  const pieces = []
  let buffer = ''
  const flush = () => {
    const piece = buffer.trim()
    if (piece) pieces.push(piece)
    buffer = ''
  }
  for (let index = 0; index < chars.length; index += 1) {
    const char = chars[index]
    buffer += char
    const next = chars[index + 1] || ''
    // 句末标点：后面还跟着右引号/右括号时先不断，等它们进来再断。
    if (SENTENCE_END.test(char)) {
      if (CLOSER.test(next)) continue
      flush()
      continue
    }
    if (CLOSER.test(char) && SENTENCE_END.test(chars[index - 1] || '')) {
      flush()
      continue
    }
    const length = buffer.trim().length
    if (CLAUSE_END.test(char) && length >= SOFT_MIN) {
      flush()
      continue
    }
    if (length >= (/\s/.test(buffer) ? HARD_LIMIT : CJK_HARD_LIMIT)) {
      const cut = lastBreakIndex(buffer)
      if (cut > SOFT_MIN) {
        const head = buffer.slice(0, cut).trim()
        if (head) pieces.push(head)
        buffer = buffer.slice(cut)
      } else {
        flush()
      }
    }
  }
  flush()
  return pieces
}

// 在超长且没有标点的片段里挑一个断点：优先空格（英法等有词边界），其次标点。
function lastBreakIndex(text) {
  for (let index = text.length - 1; index > 0; index -= 1) {
    if (/[\s，,；;、]/.test(text[index])) return index + 1
  }
  return -1
}

/**
 * 把一整段识别文本切成字幕行，并在 [start, start+duration) 之间按字数比例分配时间。
 * 接口不给时间戳，这个分配是估算：块内误差可以接受，
 * 比起「一行 30 秒」那种粗粒度，按句读切分读起来舒服得多。
 */
export function buildApiLines(text, start, duration) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim()
  if (!clean) return []
  const pieces = splitApiSentences(clean)
  if (!pieces.length) return []

  const totalChars = pieces.reduce((sum, piece) => sum + piece.length, 0) || 1
  const span = Math.max(Number(duration) || 0, pieces.length * 0.4)
  const lines = []
  let cursor = 0
  for (const [index, piece] of pieces.entries()) {
    const length = (piece.length / totalChars) * span
    const lineStart = round2(start + cursor)
    cursor += length
    const isLast = index === pieces.length - 1
    const lineEnd = round2(start + (isLast ? span : cursor))
    lines.push({
      id: index + 1,
      start: lineStart,
      // 单字符行（「好。」）也至少给 0.3 秒，不然播放器高亮会一闪而过。
      end: Math.max(lineEnd, round2(lineStart + 0.3)),
      text: piece,
    })
  }
  return lines
}
