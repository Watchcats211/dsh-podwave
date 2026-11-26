// 音频内容指纹与字幕索引：
// 单集 id 按绝对路径哈希，文件被移动、改名、重新拖入都会生成新 id。
// 这里用「文件大小 + 头部 64KB + 尾部 64KB」的 SHA-1 做快速内容指纹（几百 MB 也在 2ms 内完成），
// 并把所有已落盘字幕的元信息索引在 ~/.podwave/transcripts/.index.json，
// 列表打标与字幕读取都能 O(1) 命中，不会因为改路径就丢字幕或重复识别。
import crypto from 'node:crypto'
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import { DATA_DIR } from './state.js'

const SAMPLE_BYTES = 65536
export const TRANSCRIPTS_DIR = path.join(DATA_DIR, 'transcripts')
export const INDEX_PATH = path.join(TRANSCRIPTS_DIR, '.index.json')

export async function audioFingerprint(filePath) {
  if (!filePath) return ''
  let handle = null
  try {
    handle = await fsp.open(filePath, 'r')
    const stat = await handle.stat()
    if (!stat.isFile() || stat.size <= 0) return ''
    const hash = crypto.createHash('sha1')
    hash.update(`${stat.size}:`)
    const headLen = Math.min(SAMPLE_BYTES, stat.size)
    const head = Buffer.allocUnsafe(headLen)
    const { bytesRead: headRead } = await handle.read(head, 0, headLen, 0)
    hash.update(head.subarray(0, headRead))
    if (stat.size > SAMPLE_BYTES) {
      const tailLen = Math.min(SAMPLE_BYTES, stat.size - SAMPLE_BYTES)
      const tail = Buffer.allocUnsafe(tailLen)
      const { bytesRead: tailRead } = await handle.read(tail, 0, tailLen, stat.size - tailLen)
      hash.update(tail.subarray(0, tailRead))
    }
    return hash.digest('hex').slice(0, 16)
  } catch {
    return ''
  } finally {
    await handle?.close().catch(() => {})
  }
}

export function audioFingerprintSync(filePath) {
  if (!filePath) return ''
  let fd = null
  try {
    fd = fs.openSync(filePath, 'r')
    const stat = fs.fstatSync(fd)
    if (!stat.isFile() || stat.size <= 0) return ''
    const hash = crypto.createHash('sha1')
    hash.update(`${stat.size}:`)
    const headLen = Math.min(SAMPLE_BYTES, stat.size)
    const head = Buffer.allocUnsafe(headLen)
    const headRead = fs.readSync(fd, head, 0, headLen, 0)
    hash.update(head.subarray(0, headRead))
    if (stat.size > SAMPLE_BYTES) {
      const tailLen = Math.min(SAMPLE_BYTES, stat.size - SAMPLE_BYTES)
      const tail = Buffer.allocUnsafe(tailLen)
      const tailRead = fs.readSync(fd, tail, 0, tailLen, stat.size - tailLen)
      hash.update(tail.subarray(0, tailRead))
    }
    return hash.digest('hex').slice(0, 16)
  } catch {
    return ''
  } finally {
    if (fd !== null) {
      try { fs.closeSync(fd) } catch { /* ignore */ }
    }
  }
}

function normalizeTitle(value) {
  return String(value || '').replace(/\s+/g, ' ').trim().toLowerCase()
}

function collectTranslationTargets(transcript) {
  const targets = new Set()
  if (transcript?.providers && typeof transcript.providers === 'object') {
    for (const key of Object.keys(transcript.providers)) {
      if (key && key !== '_provider') targets.add(key)
    }
  }
  const lines = Array.isArray(transcript?.lines) ? transcript.lines : []
  for (const line of lines) {
    if (!line?.translations || typeof line.translations !== 'object') continue
    for (const [key, val] of Object.entries(line.translations)) {
      if (key && String(val || '').trim()) targets.add(key)
    }
  }
  return [...targets]
}

export function buildIndexEntry(transcript, fileMtimeMs = 0) {
  const id = String(transcript?.id || '')
  if (!id) return null
  const lines = Array.isArray(transcript?.lines) ? transcript.lines : []
  let hash = String(transcript?.source?.fingerprint || '')
  if (!hash && transcript?.source?.path && fs.existsSync(transcript.source.path)) {
    hash = audioFingerprintSync(transcript.source.path)
  }
  const xyzEid = String(transcript?.source?.xyzEid || (id.startsWith('xyz') && id.length > 3 ? id.slice(3) : ''))
  const translations = collectTranslationTargets(transcript)
  return {
    id,
    hash,
    xyzEid,
    title: String(transcript?.title || ''),
    titleKey: normalizeTitle(transcript?.title),
    duration: Number(transcript?.duration) || 0,
    size: Number(transcript?.source?.size) || 0,
    sourcePath: String(transcript?.source?.path || ''),
    lines: lines.length,
    partial: Boolean(transcript?.partial),
    translations,
    updatedAt: Number(transcript?.updatedAt) || Date.now(),
    fileMtimeMs: Number(fileMtimeMs) || 0,
  }
}

let cachedIndex = null
let cachedDirSig = ''

function readIndexDisk() {
  try {
    const parsed = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8'))
    if (parsed && typeof parsed === 'object' && parsed.entries && typeof parsed.entries === 'object') {
      return { version: 1, entries: { ...parsed.entries } }
    }
  } catch {
    /* 索引不存在或损坏，按需重建 */
  }
  return { version: 1, entries: {} }
}

function writeIndexDisk(index) {
  try {
    fs.mkdirSync(TRANSCRIPTS_DIR, { recursive: true })
    const tmp = `${INDEX_PATH}.tmp`
    fs.writeFileSync(tmp, JSON.stringify(index, null, 2), 'utf8')
    fs.renameSync(tmp, INDEX_PATH)
  } catch {
    /* 索引写失败不影响主流程 */
  }
}

// 扫描目录文件列表 + mtime 生成签名：测试或外部进程增删字幕文件时能立刻发现并增量同步。
export function syncTranscriptIndex() {
  let names = []
  try {
    names = fs.readdirSync(TRANSCRIPTS_DIR).filter((name) => !name.startsWith('.') && name.endsWith('.json'))
  } catch {
    cachedIndex = { version: 1, entries: {} }
    cachedDirSig = 'empty'
    return cachedIndex
  }
  const files = []
  for (const name of names) {
    const id = name.slice(0, -5)
    let mtimeMs = 0
    try {
      mtimeMs = fs.statSync(path.join(TRANSCRIPTS_DIR, name)).mtimeMs
    } catch {
      continue
    }
    files.push({ id, name, mtimeMs })
  }
  const sig = files.map((f) => `${f.id}:${Math.round(f.mtimeMs)}`).sort().join('|')
  if (cachedIndex && cachedDirSig === sig) return cachedIndex

  const index = readIndexDisk()
  const onDisk = new Set(files.map((f) => f.id))
  let dirty = !fs.existsSync(INDEX_PATH)

  // 清掉磁盘上已经删掉的字幕条目
  for (const key of Object.keys(index.entries)) {
    if (!onDisk.has(key)) {
      delete index.entries[key]
      dirty = true
    }
  }

  // 新增或修改过的字幕文件才读 JSON，避免每次列表请求全盘解析
  for (const file of files) {
    const existing = index.entries[file.id]
    if (existing && Math.abs((existing.fileMtimeMs || 0) - file.mtimeMs) < 1) continue
    try {
      const raw = JSON.parse(fs.readFileSync(path.join(TRANSCRIPTS_DIR, file.name), 'utf8'))
      if (!raw || typeof raw !== 'object') continue
      const entry = buildIndexEntry({ ...raw, id: file.id }, file.mtimeMs)
      if (entry) {
        index.entries[file.id] = entry
        dirty = true
      }
    } catch {
      /* 忽略坏 JSON */
    }
  }

  if (dirty) writeIndexDisk(index)
  cachedIndex = index
  cachedDirSig = sig
  return index
}

export function recordTranscriptIndex(transcript, filePath = '') {
  if (!transcript?.id) return
  let mtimeMs = 0
  if (filePath) {
    try { mtimeMs = fs.statSync(filePath).mtimeMs } catch { mtimeMs = 0 }
  }
  const index = readIndexDisk()
  const entry = buildIndexEntry(transcript, mtimeMs)
  if (!entry) return
  index.entries[transcript.id] = entry
  writeIndexDisk(index)
  cachedIndex = null
  cachedDirSig = ''
}

export function removeTranscriptIndex(id) {
  if (!id) return
  const index = readIndexDisk()
  if (index.entries[id]) {
    delete index.entries[id]
    writeIndexDisk(index)
  }
  cachedIndex = null
  cachedDirSig = ''
}

function rankEntries(list) {
  return [...list].sort((a, b) => {
    if (Boolean(a.partial) !== Boolean(b.partial)) return a.partial ? 1 : -1
    if ((b.translations?.length || 0) !== (a.translations?.length || 0)) {
      return (b.translations?.length || 0) - (a.translations?.length || 0)
    }
    if ((b.lines || 0) !== (a.lines || 0)) return (b.lines || 0) - (a.lines || 0)
    return (b.updatedAt || 0) - (a.updatedAt || 0)
  })
}

export function lookupTranscriptEntry({ id = '', hash = '', xyzEid = '', title = '', duration = 0 } = {}) {
  const { entries } = syncTranscriptIndex()
  if (id && entries[id]) return { entry: entries[id], matchBy: 'id' }

  const all = Object.values(entries).filter((entry) => entry && entry.lines > 0)
  if (hash) {
    const byHash = all.filter((entry) => entry.hash && entry.hash === hash)
    if (byHash.length) return { entry: rankEntries(byHash)[0], matchBy: 'fingerprint' }
  }
  if (xyzEid) {
    const byXyz = all.filter((entry) => entry.xyzEid && entry.xyzEid === xyzEid)
    if (byXyz.length) return { entry: rankEntries(byXyz)[0], matchBy: 'xyzEid' }
  }
  const titleKey = normalizeTitle(title)
  const dur = Number(duration) || 0
  if (titleKey && dur > 0) {
    const byMeta = all.filter((entry) => entry.titleKey === titleKey && Math.abs((entry.duration || 0) - dur) <= 2)
    if (byMeta.length) return { entry: rankEntries(byMeta)[0], matchBy: 'meta' }
  }
  return null
}

// 批量给单集列表打标：不读每个大 JSON，只查增量索引，支持路径直配 / 内容指纹 / 小宇宙 eid / 标题+时长。
export function transcriptBadges(episodes = []) {
  const { entries } = syncTranscriptIndex()
  const byHash = new Map()
  const byXyz = new Map()
  const byTitle = new Map()

  for (const entry of Object.values(entries)) {
    if (!entry || entry.lines <= 0) continue
    if (entry.hash) {
      const list = byHash.get(entry.hash) || []
      list.push(entry)
      byHash.set(entry.hash, list)
    }
    if (entry.xyzEid) {
      const list = byXyz.get(entry.xyzEid) || []
      list.push(entry)
      byXyz.set(entry.xyzEid, list)
    }
    if (entry.titleKey && entry.duration > 0) {
      const list = byTitle.get(entry.titleKey) || []
      list.push(entry)
      byTitle.set(entry.titleKey, list)
    }
  }

  const result = new Map()
  for (const episode of episodes) {
    if (!episode?.id) continue
    let matched = entries[episode.id] || null
    if (!matched && episode.fingerprint && byHash.has(episode.fingerprint)) {
      matched = rankEntries(byHash.get(episode.fingerprint))[0]
    }
    const eid = episode.eid || (String(episode.id).startsWith('xyz') ? String(episode.id).slice(3) : '')
    if (!matched && eid && byXyz.has(eid)) {
      matched = rankEntries(byXyz.get(eid))[0]
    }
    if (!matched && episode.title && Number(episode.duration) > 0) {
      const key = normalizeTitle(episode.title)
      const candidates = (byTitle.get(key) || []).filter((e) => Math.abs((e.duration || 0) - Number(episode.duration)) <= 2)
      if (candidates.length) matched = rankEntries(candidates)[0]
    }
    if (matched) {
      result.set(episode.id, {
        hasTranscript: true,
        partial: Boolean(matched.partial),
        hasTranslation: Array.isArray(matched.translations) && matched.translations.length > 0,
        translations: matched.translations || [],
        matchedId: matched.id,
      })
    } else {
      result.set(episode.id, {
        hasTranscript: false,
        partial: false,
        hasTranslation: false,
        translations: [],
        matchedId: null,
      })
    }
  }
  return result
}
