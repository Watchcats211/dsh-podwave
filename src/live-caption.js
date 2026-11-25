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

const LIVE_DIR = path.join(DATA_DIR, 'live')
const WORK_DIR = path.join(LIVE_DIR, '.work')
// 单段音频上限：VAD 最多切 12 秒，这里留足余量兜住别的调用方。
const MAX_SEGMENT_BYTES = 12 * 1024 * 1024

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
    startedAt: session.startedAt,
    count: session.lines.length,
    closed: session.closed,
    errors: session.errors,
    lastError: session.lastError || null,
  }
}

export function startLiveSession({ target = 'zh' } = {}) {
  counter += 1
  const session = {
    id: `live-${Date.now().toString(36)}-${counter}`,
    target,
    startedAt: Date.now(),
    lines: [],
    closed: false,
    errors: 0,
    lastError: null,
    index: 0,
    chain: Promise.resolve(),
  }
  sessions.set(session.id, session)
  // 上一次如果宿主被强杀，.work 里会留几句 WAV；开新会话时顺手清掉（此时还没有任何写入）。
  fs.promises.rm(WORK_DIR, { recursive: true, force: true }).catch(() => {})
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
 * 串行排队：前端可以不等待上一次结果就继续发（网络抖动时更稳），
 * 但识别与翻译仍然一次只跑一个，保证行序和编号不会错。
 */
export function queueLiveSegment(session, buffer, options = {}) {
  const job = session.chain.then(() => feedLiveSegment(session, buffer, options))
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
 * @param {{start?:number,end?:number,recognize?:Function,translate?:Function}} options
 *   start/end 是这段音频在整次会话里的起止秒数（前端按采集起点算好的）；
 *   recognize / translate 可注入，单测用它替掉真实网络调用。
 */
export async function feedLiveSegment(
  session,
  buffer,
  { start = 0, end = 0, recognize = transcribeChunk, translate = translateItems } = {},
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

    // 已经说中文的时候不再花一次钱；要翻的才进模型。
    const need = fresh.filter((line) => needsTranslation(line, session.target))
    let translations = new Map()
    if (need.length) {
      // 带上前两句当上下文（代词、简称常常跨句），结果只取新句。
      const context = session.lines.slice(-2).map((line) => ({ id: line.id, text: line.text }))
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
      session.lines.push(line)
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

export function liveToSrt(lines) {
  return (lines || [])
    .map((line, index) => `${index + 1}\n${srtTime(line.start)} --> ${srtTime(line.end)}\n${line.text}\n`)
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
  await fs.promises.writeFile(files.srt, liveToSrt(transcript.lines), 'utf8')
  await fs.promises.writeFile(files.md, liveToMarkdown(transcript), 'utf8')
  return { dir: LIVE_DIR, ...files }
}

/**
 * 结束一次会话：等排队中的段跑完，按需要落盘。
 * save 只在「确实有句子」时才写文件，避免留一堆空记录。
 */
export async function stopLiveSession(session, { save = false } = {}) {
  if (!session) throw Object.assign(new Error('没有正在进行的实时字幕'), { status: 404 })
  await session.chain
  session.closed = true
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
