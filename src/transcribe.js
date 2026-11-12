// 转写任务管理：调用 MLX Qwen3-ASR CLI，把结果落到 ~/.podwave/transcripts/<id>.json。
// 一次只跑一个任务，其余排队，避免在 16GB 内存的机器上同时加载多个模型。
import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { mkdir, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises'
import { DATA_DIR } from './state.js'
import { loadModelConfig, modelDir } from './models.js'

export const TRANSCRIPTS_DIR = path.join(DATA_DIR, 'transcripts')
const WORK_DIR = path.join(TRANSCRIPTS_DIR, '.work')
const RUNTIME_DIR = path.join(DATA_DIR, 'runtime')
const CLI = path.join(RUNTIME_DIR, '.venv', 'bin', 'mlx-qwen3-asr')

const jobs = new Map() // episodeId -> job
const queue = []
let active = null
let activeChild = null

function transcriptPath(id) {
  return path.join(TRANSCRIPTS_DIR, `${id}.json`)
}

export function currentAsrModel() {
  const name = loadModelConfig().asrModel
  const dir = modelDir(name)
  return { name, dir, ready: fs.existsSync(path.join(dir, 'model.safetensors')) }
}

export function runtimeInfo() {
  const model = currentAsrModel()
  return {
    installed: fs.existsSync(CLI),
    modelReady: model.ready,
    model: model.dir,
    modelName: model.name,
    cli: CLI,
  }
}

export async function readTranscript(id) {
  try {
    return JSON.parse(await readFile(transcriptPath(id), 'utf8'))
  } catch {
    return null
  }
}

export async function deleteTranscript(id) {
  const job = jobs.get(id)
  if (job && (job.status === 'queued' || job.status === 'running')) return false
  try {
    await rm(transcriptPath(id), { force: true })
  } catch {
    /* ignore */
  }
  jobs.delete(id)
  return true
}

function pump() {
  if (active || !queue.length) return
  const item = queue.shift()
  active = item
  runJob(item)
}

async function runJob({ episode, job }) {
  job.status = 'running'
  job.startedAt = Date.now()
  const work = path.join(WORK_DIR, episode.id)
  try {
    await rm(work, { recursive: true, force: true })
    await mkdir(work, { recursive: true })
    const args = [
      episode.file,
      '--model', currentAsrModel().dir,
      '--output-dir', work,
      '--output-format', 'json',
      '--timestamps',
      '--no-progress',
      '--quiet',
    ]
    const child = spawn(CLI, args, {
      env: { ...process.env, HF_HUB_OFFLINE: '1', TOKENIZERS_PARALLELISM: 'false' },
      stdio: ['ignore', 'ignore', 'pipe'],
    })
    activeChild = child
    let stderrTail = ''
    child.stderr.on('data', (chunk) => {
      stderrTail = (stderrTail + chunk.toString()).slice(-4000)
    })
    const code = await new Promise((resolve, reject) => {
      child.on('error', reject)
      child.on('close', resolve)
    })
    activeChild = null
    if (code !== 0) {
      const detail = stderrTail.trim().split('\n').slice(-6).join('\n')
      throw new Error(`转写进程退出码 ${code}${detail ? `\n${detail}` : ''}`)
    }

    const files = (await readdir(work)).filter((file) => file.toLowerCase().endsWith('.json'))
    if (!files.length) throw new Error('转写没有产生 JSON 输出')
    const raw = JSON.parse(await readFile(path.join(work, files[0]), 'utf8'))
    const words = Array.isArray(raw.segments)
      ? raw.segments
          .map((seg) => ({
            start: Number(seg.start) || 0,
            end: Number(seg.end) || 0,
            text: String(seg.text || '').trim(),
          }))
          .filter((seg) => seg.text)
      : []
    const segments = buildSegments(raw, words)

    const transcript = {
      id: episode.id,
      title: episode.title,
      createdAt: Date.now(),
      model: 'Qwen3-ASR-1.7B-8bit',
      language: raw.language || '',
      duration: episode.duration || segments[segments.length - 1]?.end || 0,
      text: raw.text || segments.map((seg) => seg.text).join(' '),
      segments,
    }

    await mkdir(TRANSCRIPTS_DIR, { recursive: true })
    const target = transcriptPath(episode.id)
    const tmp = `${target}.tmp`
    await writeFile(tmp, JSON.stringify(transcript, null, 2), 'utf8')
    await rename(tmp, target)

    job.status = 'done'
    job.finishedAt = Date.now()
    job.segmentCount = segments.length
  } catch (error) {
    job.status = 'error'
    job.finishedAt = Date.now()
    job.error = error.message || String(error)
  } finally {
    active = null
    activeChild = null
    rm(work, { recursive: true, force: true }).catch(() => {})
    pump()
  }
}

const CJK_RE = /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/

function joinTokens(tokens) {
  let output = ''
  for (const token of tokens) {
    if (!output) {
      output = token
      continue
    }
    const previous = output.slice(-1)
    const next = token.slice(0, 1)
    output += CJK_RE.test(previous) && CJK_RE.test(next) ? token : ` ${token}`
  }
  return output
}

// 模型给出的是词级片段（中文甚至按字），这里拼成一行行适合做字幕的句子。
function groupWords(words) {
  const lines = []
  let current = null
  const flush = () => {
    if (!current) return
    const text = joinTokens(current.tokens).trim()
    if (text) lines.push({ start: current.start, end: current.end, text })
    current = null
  }
  for (const word of words) {
    const text = String(word.text || '').trim()
    if (!text) continue
    const start = Number(word.start) || 0
    const end = Number(word.end) || start
    if (!current) {
      current = { start, end, tokens: [text] }
    } else if (start - current.end > 1.2) {
      flush()
      current = { start, end, tokens: [text] }
    } else {
      current.end = end
      current.tokens.push(text)
    }
    const joined = joinTokens(current.tokens)
    const elapsed = current.end - current.start
    if (
      /[。！？!?…]$/.test(joined) ||
      (/[，,;；:：]$/.test(joined) && joined.length > 28) ||
      joined.length >= 60 ||
      elapsed >= 12
    ) {
      flush()
    }
  }
  flush()
  return lines.map((line, index) => ({
    id: index + 1,
    start: Math.round(line.start * 100) / 100,
    end: Math.round(line.end * 100) / 100,
    text: line.text,
  }))
}

function normalizeWord(text) {
  return String(text || '').toLowerCase().replace(/[^\p{L}\p{N}]/gu, '')
}

const CJK_CHAR = /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/
const PUNCT_CHAR = /[。！？!?…，,;；:：、.]/

function tokenizeChunk(text) {
  const tokens = []
  let buffer = ''
  const push = (type, value) => tokens.push({ type, text: value })
  for (const char of String(text || '')) {
    if (CJK_CHAR.test(char)) {
      if (buffer) { push('word', buffer); buffer = '' }
      push('word', char)
    } else if (/\s/.test(char)) {
      if (buffer) { push('word', buffer); buffer = '' }
    } else if (PUNCT_CHAR.test(char)) {
      if (buffer) { push('word', buffer); buffer = '' }
      push('punct', char)
    } else {
      buffer += char
    }
  }
  if (buffer) push('word', buffer)
  return tokens
}

// 模型给出的词级片段没有标点；chunk 的 text 有标点。两者对齐后就能得到带标点的字幕行。
function buildSegments(raw, words) {
  const chunks = Array.isArray(raw.chunks) ? raw.chunks.filter((chunk) => chunk && chunk.text) : []
  if (!chunks.length) return groupWords(words)

  const lines = []
  let current = null
  const flush = () => {
    if (!current) return
    const text = current.text.trim()
    if (text) lines.push({ start: current.start, end: current.end, text })
    current = null
  }
  const appendWord = (text, start, end) => {
    if (!current) {
      current = { start, end, text }
      return
    }
    if (start - current.end > 1.2) {
      flush()
      current = { start, end, text }
      return
    }
    const previous = current.text.slice(-1)
    const next = text.slice(0, 1)
    current.text += CJK_CHAR.test(previous) && CJK_CHAR.test(next) ? text : ` ${text}`
    current.end = end
  }

  for (const chunk of chunks) {
    const chunkStart = Number(chunk.start) || 0
    const chunkEnd = Number(chunk.end) || chunkStart
    const chunkWords = words.filter((word) => word.start >= chunkStart - 0.06 && word.start < chunkEnd + 0.06)
    let cursor = 0
    for (const token of tokenizeChunk(chunk.text)) {
      if (token.type === 'punct') {
        if (!current) continue
        current.text += token.text
        if (/[。！？!?…]/.test(token.text)) flush()
        continue
      }
      const target = normalizeWord(token.text)
      let matched = null
      for (let index = cursor; index < Math.min(chunkWords.length, cursor + 3); index += 1) {
        const candidate = normalizeWord(chunkWords[index]?.text)
        if (candidate === target || (target && candidate.startsWith(target))) {
          matched = chunkWords[index]
          cursor = index + 1
          break
        }
      }
      if (!matched && chunkWords[cursor]) {
        matched = chunkWords[cursor]
        cursor += 1
      }
      appendWord(token.text, matched ? matched.start : chunkStart, matched ? matched.end : chunkEnd)
      if (current && (current.text.length >= 60 || current.end - current.start >= 12)) flush()
    }
    flush()
  }
  flush()

  return lines.map((line, index) => ({
    id: index + 1,
    start: Math.round(line.start * 100) / 100,
    end: Math.round(line.end * 100) / 100,
    text: line.text.trim(),
  }))
}

export async function startTranscription(episode, { force = false } = {}) {
  const info = runtimeInfo()
  if (!info.installed) throw Object.assign(new Error('转写运行环境未安装（~/.podwave/runtime）'), { status: 503 })
  if (!info.modelReady) throw Object.assign(new Error('转写模型未下载（~/.podwave/models）'), { status: 503 })

  const existing = await readTranscript(episode.id)
  if (existing && !force) return { status: 'done', segments: existing.segments.length }

  const current = jobs.get(episode.id)
  if (current && (current.status === 'queued' || current.status === 'running')) {
    return { status: current.status }
  }

  const job = { status: 'queued', queuedAt: Date.now(), startedAt: null, finishedAt: null, error: null }
  jobs.set(episode.id, job)
  queue.push({ episode, job })
  pump()
  return { status: 'queued' }
}

export async function getTranscriptionState(id) {
  const job = jobs.get(id)
  if (job) {
    const base = job.startedAt || job.queuedAt || Date.now()
    const elapsedMs = (job.finishedAt || Date.now()) - base
    if (job.status === 'queued' || job.status === 'running') {
      return { status: job.status, elapsedMs }
    }
    if (job.status === 'error') {
      return { status: 'error', error: job.error, elapsedMs }
    }
  }
  const transcript = await readTranscript(id)
  if (transcript) return { status: 'done', transcript }
  return { status: 'none' }
}

function srtTime(seconds) {
  const total = Math.max(0, Number(seconds) || 0)
  const hours = Math.floor(total / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const secs = Math.floor(total % 60)
  const ms = Math.round((total - Math.floor(total)) * 1000)
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')},${String(ms).padStart(3, '0')}`
}

export function toSRT(transcript) {
  return transcript.segments
    .map((seg, index) => `${index + 1}\n${srtTime(seg.start)} --> ${srtTime(seg.end)}\n${seg.text}\n`)
    .join('\n')
}

export function toMarkdown(transcript) {
  const lines = [`# ${transcript.title || transcript.id}`, '', `> 模型 ${transcript.model}${transcript.language ? ` · 语言 ${transcript.language}` : ''}`, '']
  for (const seg of transcript.segments) {
    const minutes = Math.floor(seg.start / 60)
    const seconds = Math.floor(seg.start % 60)
    lines.push(`**${minutes}:${String(seconds).padStart(2, '0')}** ${seg.text}`)
  }
  return `${lines.join('\n')}\n`
}

export function stopAll() {
  if (activeChild) {
    try {
      activeChild.kill('SIGTERM')
    } catch {
      /* ignore */
    }
  }
}
