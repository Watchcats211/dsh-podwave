// 实时字幕（系统音频）：把前端切好的一句段 WAV 送去识别 → 翻译 → 攒成一次会话。
//
// 音频采集在前端做（`client/src/lib/audioCapture.js`，WebAudio + 能量 VAD），
// 这里只回答一个问题：「这一段音频说了什么，中文是什么意思」。
//
// 设计取舍：
// - 走云端 ASR（DeepSeek /v1/tools/asr）。本地 MOSS / Qwen3 在一句话的粒度上
//   要 1.5~7 秒才出一句，跟播视频没有意义；云端一句 2~4 秒的音频约 1 秒内返回。
// - 会话只存在内存里。实时字幕是一次性的，关掉就没了；要留就用「保存」落盘。
// - 段与段串行处理（`queueLiveSegment`）。并发跑只会让译文和字幕错位，
//   而前端的策略本来就是「上一段返回了再发下一段」，串行不会拖慢什么。
import fs from 'node:fs'
import path from 'node:path'
import { DATA_DIR } from './state.js'
import { asrApiConfig, buildApiLines, transcribeChunk } from './asr-api.js'
import { needsTranslation, translateItems } from './translate.js'

export const LIVE_DIR = path.join(DATA_DIR, 'live')
const WORK_DIR = path.join(LIVE_DIR, '.work')
// 单段音频上限：VAD 最多切 6 秒，这里留足余量兜住别的调用方。
const MAX_SEGMENT_BYTES = 12 * 1024 * 1024
// 待处理队列最多积压 2 段：网络卡顿时丢弃过时积压，保证实时字幕不会越拖越慢。
const MAX_QUEUED_SEGMENTS = 2

const sessions = new Map()
let counter = 0

function round2(value) {
  return Math.round((Number(value) || 0) * 100) / 100
}

export function liveReady() {
  const config = asrApiConfig()
  return { ready: config.hasKey, hasKey: config.hasKey, base: config.base }
}

export function publicLiveSession(session) {
  if (!session) return null
  return {
    id: session.id,
    target: session.target,
    displayMode: session.displayMode || 'bilingual',
    startedAt: session.startedAt,
    count: session.lines.length,
    closed: session.closed,
    errors: session.errors,
    lastError: session.lastError || null,
    level: Number(session.level) || 0,
    hint: session.hint || '',
    draft: session.draft || '',
  }
}

export function startLiveSession({ target = 'zh', displayMode = 'bilingual' } = {}) {
  counter += 1
  const mode = ['original', 'bilingual', 'translation'].includes(displayMode) ? displayMode : 'bilingual'
  const session = {
    id: `live-${Date.now().toString(36)}-${counter}`,
    target,
    displayMode: mode,
    startedAt: Date.now(),
    lines: [],
    closed: false,
    errors: 0,
    lastError: null,
    index: 0,
    level: 0,
    hint: '',
    draft: '',
    queued: [],
    chain: Promise.resolve(),
  }
  sessions.set(session.id, session)
  // 上一次如果宿主被强杀，.work 里会留几句 WAV；开新会话时顺手清掉。
  // 必须同步删：异步 rm 会和紧接着的第一段写入抢同一个目录，
  // 结果是第一段音频刚写进去就被删掉 → ENOENT → 这次实时字幕一句都出不来。
  try {
    fs.rmSync(WORK_DIR, { recursive: true, force: true })
  } catch {
    /* 目录不存在或删不掉都不影响后面 */
  }
  return session
}

export function getLiveSession(id) {
  return sessions.get(String(id || '')) || null
}

/** 当前还没结束的那次会话（同一时刻只允许一次，避免两路音频抢同一个覆盖层）。 */
export function openLiveSession() {
  for (const session of sessions.values()) if (!session.closed) return session
  return null
}

export function resetLiveSessions() {
  for (const session of sessions.values()) session.closed = true
  sessions.clear()
}

/**
 * 串行排队 + 防积压泄洪：前端/tap 可以不等待上一次结果就继续送，
 * 识别与翻译一次只跑一个保证行序不错；但若上游卡顿导致队列积压超过 2 段，
 * 自动跳过最老的未开始段，确保字幕紧跟当下而不是延迟十几秒。
 */
export function queueLiveSegment(session, buffer, options = {}) {
  const entry = { dropped: false }
  if (!Array.isArray(session.queued)) session.queued = []
  session.queued.push(entry)
  while (session.queued.length > MAX_QUEUED_SEGMENTS + 1) {
    // 索引 0 往往已在执行中，丢弃索引 1（最老的排队段）。
    const victim = session.queued.splice(1, 1)[0]
    if (victim) victim.dropped = true
  }
  const job = session.chain.then(() => {
    const pos = session.queued.indexOf(entry)
    if (pos >= 0) session.queued.splice(pos, 1)
    if (entry.dropped) return { lines: [], count: session.lines.length, text: '', dropped: true }
    return feedLiveSegment(session, buffer, options)
  })
  // 一段失败不能把后面的整条链带死：吞掉异常，但把错误留给调用方的那次 promise。
  session.chain = job.then(
    () => undefined,
    () => undefined,
  )
  return job
}

/**
 * 处理一段音频。
 * @param {object} session startLiveSession() 的返回值
 * @param {Buffer|Uint8Array} buffer WAV 字节
 * @param {{start?:number,end?:number,recognize?:Function,translate?:Function,onOriginal?:Function}} options
 *   start/end 是这段音频在整次会话里的起止秒数（前端按采集起点算好的）；
 *   recognize / translate 可注入，单测用它替掉真实网络调用；
 *   onOriginal 在 ASR 返回后、翻译开始前立刻触发，让界面和悬浮窗零阻塞先出原文。
 */
export async function feedLiveSegment(
  session,
  buffer,
  { start = 0, end = 0, recognize = transcribeChunk, translate = translateItems, onOriginal = null } = {},
) {
  if (!session || session.closed) throw Object.assign(new Error('这次实时字幕已经结束了'), { status: 409 })
  if (!buffer || !buffer.length) return { lines: [], count: session.lines.length, text: '' }
  if (buffer.length > MAX_SEGMENT_BYTES) {
    throw Object.assign(new Error('这段音频太大'), { status: 413 })
  }

  await fs.promises.mkdir(WORK_DIR, { recursive: true })
  session.index += 1
  const file = path.join(WORK_DIR, `${session.id}-${String(session.index).padStart(4, '0')}.wav`)
  await fs.promises.writeFile(file, buffer)
  const before = session.lines.length
  try {
    const result = await recognize(file)
    const text = String(result?.text || '')
      .replace(/\s+/g, ' ')
      .trim()
    if (!text) return { lines: [], count: before, text: '' }

    const from = Number.isFinite(Number(start)) ? Math.max(0, Number(start)) : 0
    const to = Number.isFinite(Number(end)) && Number(end) > from ? Number(end) : from + 0.4
    // 接口只给整段文本，句内时间按字数比例摊 —— 和整集转写用的是同一把尺子。
    const pieces = buildApiLines(text, from, to - from)
    if (!pieces.length) return { lines: [], count: before, text }

    const fresh = pieces.map((piece, index) => ({
      id: before + index + 1,
      start: round2(piece.start),
      end: round2(piece.end),
      text: piece.text,
    }))
    // 先取翻译上下文（不含刚识别出的 fresh），再把 fresh 立刻放进 session.lines 并通知界面展示原文！
    const context = session.lines.slice(-2).map((line) => ({ id: line.id, text: line.text }))
    session.draft = ''
    for (const line of fresh) session.lines.push(line)
    try {
      onOriginal?.(fresh)
    } catch {
      /* 回调异常不影响翻译 */
    }

    // 仅原文模式跳过翻译调用（更省时省费）；其它模式只翻与目标语言不同的行。
    const need = session.displayMode === 'original'
      ? []
      : fresh.filter((line) => needsTranslation(line, session.target))
    let translations = new Map()
    if (need.length) {
      try {
        translations = await translate([...context, ...need], session.target)
        session.lastError = null
      } catch (error) {
        // 翻译挂了也要把原文交出来：实时场景下「有声音没译文」远好过「一片空白」。
        session.errors += 1
        session.lastError = error?.message || String(error)
      }
    }

    for (const line of fresh) {
      const value = translations instanceof Map ? translations.get(line.id) : null
      if (value) line.translations = { [session.target]: value }
    }
    return { lines: fresh, count: session.lines.length, text, lastError: session.lastError }
  } finally {
    fs.promises.rm(file, { force: true }).catch(() => {})
  }
}

function pad2(value) {
  return String(value).padStart(2, '0')
}

function srtTime(seconds) {
  const total = Math.max(0, Number(seconds) || 0)
  const hours = Math.floor(total / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const secs = Math.floor(total % 60)
  const ms = Math.round((total - Math.floor(total)) * 1000)
  return `${pad2(hours)}:${pad2(minutes)}:${pad2(secs)},${String(ms).padStart(3, '0')}`
}

export function liveToSrt(lines, target = '') {
  return (lines || [])
    .map((line, index) => {
      const tr = target ? String(line.translations?.[target] || '').trim() : ''
      const body = tr ? `${line.text}\n${tr}` : line.text
      return `${index + 1}\n${srtTime(line.start)} --> ${srtTime(line.end)}\n${body}\n`
    })
    .join('\n')
}

export function liveToMarkdown(transcript) {
  const when = new Date(transcript.createdAt || Date.now())
  const title = `实时字幕 ${when.getFullYear()}-${pad2(when.getMonth() + 1)}-${pad2(when.getDate())} ${pad2(when.getHours())}:${pad2(when.getMinutes())}`
  const out = [`# ${title}`, '', `> 模型 ${transcript.model} · 共 ${transcript.lines.length} 句`, '']
  for (const line of transcript.lines) {
    const minutes = Math.floor(line.start / 60)
    const seconds = Math.floor(line.start % 60)
    out.push(`**${minutes}:${pad2(seconds)}** ${line.text}`)
    const translation = line.translations?.[transcript.target]
    if (translation) out.push(`　${translation}`)
  }
  return `${out.join('\n')}\n`
}

function buildTranscript(session) {
  return {
    id: session.id,
    title: `实时字幕 ${new Date(session.startedAt).toLocaleString('zh-CN', { hour12: false })}`,
    model: 'deepseek-asr',
    target: session.target,
    source: { kind: 'system-audio' },
    createdAt: session.startedAt,
    lines: session.lines,
  }
}

async function writeLiveFiles(transcript) {
  await fs.promises.mkdir(LIVE_DIR, { recursive: true })
  const base = path.join(LIVE_DIR, transcript.id)
  const files = { json: `${base}.json`, srt: `${base}.srt`, md: `${base}.md` }
  await fs.promises.writeFile(files.json, JSON.stringify({ ...transcript, updatedAt: Date.now() }, null, 2), 'utf8')
  await fs.promises.writeFile(files.srt, liveToSrt(transcript.lines, transcript.target), 'utf8')
  await fs.promises.writeFile(files.md, liveToMarkdown(transcript), 'utf8')
  return { dir: LIVE_DIR, ...files }
}

function safeLiveId(id) {
  const value = String(id || '').trim()
  return /^[A-Za-z0-9_-]+$/.test(value) ? value : ''
}

export async function listLiveHistory() {
  let names = []
  try {
    names = await fs.promises.readdir(LIVE_DIR)
  } catch {
    return []
  }
  const items = []
  for (const name of names) {
    if (!name.endsWith('.json') || name.startsWith('.') || name === 'window-pos.json') continue
    const file = path.join(LIVE_DIR, name)
    try {
      const raw = JSON.parse(await fs.promises.readFile(file, 'utf8'))
      if (!raw || !Array.isArray(raw.lines)) continue
      const info = await fs.promises.stat(file).catch(() => null)
      const lastEnd = raw.lines.length ? Number(raw.lines[raw.lines.length - 1]?.end) || 0 : 0
      items.push({
        id: String(raw.id || name.replace(/\.json$/, '')),
        title: String(raw.title || name.replace(/\.json$/, '')),
        target: String(raw.target || 'zh'),
        createdAt: Number(raw.createdAt) || info?.mtimeMs || 0,
        updatedAt: Number(raw.updatedAt) || info?.mtimeMs || 0,
        durationSec: round2(lastEnd),
        lines: raw.lines.length,
        preview: raw.lines.slice(0, 2).map((l) => l.text).join(' ').slice(0, 120),
      })
    } catch {
      /* 忽略损坏文件 */
    }
  }
  items.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
  return items
}

export async function readLiveHistory(id) {
  const clean = safeLiveId(id)
  if (!clean) return null
  try {
    const raw = JSON.parse(await fs.promises.readFile(path.join(LIVE_DIR, `${clean}.json`), 'utf8'))
    return raw && Array.isArray(raw.lines) ? raw : null
  } catch {
    return null
  }
}

export async function deleteLiveHistory(id) {
  const clean = safeLiveId(id)
  if (!clean) return false
  for (const ext of ['json', 'srt', 'md']) {
    await fs.promises.rm(path.join(LIVE_DIR, `${clean}.${ext}`), { force: true }).catch(() => {})
  }
  return true
}

/**
 * 结束一次会话：等排队中的段跑完，按需要落盘。
 * save 只在「确实有句子」时才写文件，避免留一堆空记录。
 */
export async function stopLiveSession(session, { save = false } = {}) {
  if (!session) throw Object.assign(new Error('没有正在进行的实时字幕'), { status: 404 })
  session.closed = true
  if (Array.isArray(session.queued)) {
    for (const item of session.queued) {
      if (item) item.dropped = true
    }
  }
  await Promise.race([
    session.chain,
    new Promise((resolve) => {
      const timer = setTimeout(resolve, 2500)
      timer.unref?.()
    }),
  ])
  sessions.delete(session.id)
  const transcript = buildTranscript(session)
  let files = null
  if (save && transcript.lines.length) files = await writeLiveFiles(transcript)
  await fs.promises.rm(WORK_DIR, { recursive: true, force: true }).catch(() => {})
  return {
    id: session.id,
    count: transcript.lines.length,
    durationSec: transcript.lines.length ? round2(transcript.lines[transcript.lines.length - 1].end) : 0,
    saved: Boolean(files),
    files,
    lines: transcript.lines,
  }
}
