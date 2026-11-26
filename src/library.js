import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import os from 'node:os'
import crypto from 'node:crypto'
import { parseFile } from 'music-metadata'
import { COVERS_DIR, getState } from './state.js'
import { audioFingerprint } from './fingerprint.js'

export const AUDIO_EXTENSIONS = new Set([
  '.mp3', '.m4a', '.m4b', '.aac', '.wav', '.flac', '.ogg', '.oga', '.opus', '.weba', '.webm', '.wma',
])

const SCAN_DEPTH = 6
const PARSE_CONCURRENCY = 6

let episodes = []
const byId = new Map()
const metaCache = new Map()
let scanPromise = null
let scanState = { running: false, startedAt: null, finishedAt: null, error: null }

// Windows 用户经常直接粘资源管理器地址栏里的 %USERPROFILE%\Music、%HOMEPATH%，
// 之前只认 ~ 和 ~/，这类路径会原样返回然后扫描失败。顺带支持 ~\ 与 %NAME%。
export function expandHome(input) {
  let value = String(input || '').trim()
  if (!value) return ''
  value = value.replace(/%([^%\\/]+)%/g, (whole, name) => {
    const resolved = process.env[name] || process.env[name.toUpperCase()] || process.env[name.toLowerCase()]
    return resolved || whole
  })
  if (value === '~') return os.homedir()
  if (value.startsWith('~/') || value.startsWith('~\\')) return path.join(os.homedir(), value.slice(2))
  return path.resolve(value)
}

export function episodeId(filePath) {
  return crypto.createHash('sha1').update(filePath).digest('hex').slice(0, 16)
}

function isInside(parent, child) {
  const rel = path.relative(parent, child)
  return rel !== '' && !rel.startsWith('..') && !path.isAbsolute(rel)
}

async function walk(dir, depth, files, root, realRoot = root) {
  let entries
  try {
    entries = await fsp.readdir(dir, { withFileTypes: true })
  } catch {
    return
  }
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (depth < SCAN_DEPTH) await walk(full, depth + 1, files, root, realRoot)
    } else if (entry.isFile() && AUDIO_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      // 记下这个文件属于哪个「添加进来的根文件夹」，前端才能按目录逐层浏览。
      files.push({ file: full, root, realRoot })
    }
  }
}

async function readEpisode(file, root, realRoot = root) {
  const stat = await fsp.stat(file)
  const id = episodeId(file)
  const cacheKey = `${stat.mtimeMs}:${stat.size}`
  const cached = metaCache.get(id)
  if (cached && cached.key === cacheKey) {
    return { ...cached.data, size: stat.size, mtime: stat.mtimeMs }
  }

  let title = path.basename(file, path.extname(file))
  let artist = path.basename(path.dirname(file))
  let album = ''
  let duration = null
  let hasCover = false

  try {
    const parsed = await parseFile(file, { duration: true, skipCovers: false })
    const common = parsed.common || {}
    if (common.title) title = common.title
    if (common.artist) artist = common.artist
    else if (common.albumartist) artist = common.albumartist
    if (common.album) album = common.album
    if (parsed.format && parsed.format.duration) duration = parsed.format.duration

    const picture = common.picture && common.picture[0]
    if (picture && picture.data) {
      const ext = /png/i.test(picture.format || '') ? 'png' : 'jpg'
      const coverPath = path.join(COVERS_DIR, `${id}.${ext}`)
      try {
        await fsp.access(coverPath)
      } catch {
        await fsp.writeFile(coverPath, picture.data)
      }
      hasCover = true
    }
  } catch {
    // Damaged or unsupported tags: fall back to the file name.
  }

  // covers 目录里已经有图（用户自己换的）也算数，不然列表会一直显示首字母占位。
  let coverAt = 0
  const coverFile = getCoverPath(id)
  if (coverFile) {
    hasCover = true
    try {
      coverAt = fs.statSync(coverFile).mtimeMs
    } catch {
      coverAt = 0
    }
  }

  const fingerprint = await audioFingerprint(file)

  const data = {
    id,
    title,
    artist,
    album,
    duration,
    hasCover,
    // 封面文件的修改时间，前端拼在 URL 上，换过封面就不会被浏览器缓存挡住。
    coverAt,
    folder: path.dirname(file),
    root,
    // 相对根文件夹的路径（'' 表示就在根目录里），前端靠它逐层浏览目录树。
    rel: path.relative(realRoot || root || '', path.dirname(file)).split(path.sep).join('/'),
    file,
    fingerprint,
  }
  metaCache.set(id, { key: cacheKey, data })
  return { ...data, size: stat.size, mtime: stat.mtimeMs }
}

async function doScan() {
  const folders = getState().folders
  scanState = { running: true, startedAt: Date.now(), finishedAt: null, error: null }

  const files = []
  for (const folder of folders) {
    try {
      const stat = await fsp.stat(folder)
      if (!stat.isDirectory()) continue
    } catch {
      continue
    }
    let realRoot = folder
    try {
      realRoot = await fsp.realpath(folder)
    } catch {
      realRoot = folder
    }
    await walk(folder, 0, files, folder, realRoot)
  }

  const unique = []
  const seen = new Set()
  for (const entry of files) {
    let real = entry.file
    try {
      real = await fsp.realpath(entry.file)
    } catch {
      /* keep the original path */
    }
    if (seen.has(real)) continue
    seen.add(real)
    unique.push({ file: real, root: entry.root, realRoot: entry.realRoot })
  }

  const items = []
  let cursor = 0
  async function worker() {
    while (cursor < unique.length) {
      const entry = unique[cursor]
      cursor += 1
      try {
        items.push(await readEpisode(entry.file, entry.root, entry.realRoot))
      } catch {
        /* skip unreadable files */
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(PARSE_CONCURRENCY, unique.length || 1) }, worker))

  items.sort((a, b) => b.mtime - a.mtime)
  episodes = items
  byId.clear()
  for (const episode of episodes) byId.set(episode.id, episode)

  scanState = { running: false, startedAt: scanState.startedAt, finishedAt: Date.now(), error: null }
  return episodes
}

export function scanLibrary() {
  if (scanPromise) return scanPromise
  scanPromise = doScan()
    .catch((error) => {
      scanState = { running: false, startedAt: scanState.startedAt, finishedAt: Date.now(), error: error.message }
      throw error
    })
    .finally(() => {
      scanPromise = null
    })
  return scanPromise
}

export function isScanning() {
  return Boolean(scanPromise)
}

export function getScanState() {
  return scanState
}

export function getEpisode(id) {
  return byId.get(id) || null
}

export function getEpisodePaths() {
  return episodes.map(({ id, file, size }) => ({ id, file, size }))
}

export function getEpisodes() {
  return episodes.map(({ file, ...rest }) => ({
    ...rest,
    // folder/root 是绝对路径，前端靠它们做逐层目录浏览；location 只是给人看的短路径。
    location: (rest.folder || '').split(path.sep).slice(-2).join('/'),
  }))
}

export function getCoverPath(id) {
  for (const ext of ['jpg', 'png', 'webp']) {
    const candidate = path.join(COVERS_DIR, `${id}.${ext}`)
    if (fs.existsSync(candidate)) return candidate
  }
  return null
}

// 换过封面之后要让下一次扫描重新读这个单集的元数据，否则列表里还是旧的 hasCover/coverAt。
export function forgetEpisode(id) {
  metaCache.delete(id)
}

// 换封面是即时操作：先把还在内存里的那一条改掉，接口返回后界面就能立刻看到新图，
// 不用等下一次整库扫描。
export function setEpisodeCover(id, { hasCover, coverAt = 0 } = {}) {
  const entry = byId.get(id)
  if (!entry) return null
  entry.hasCover = Boolean(hasCover)
  entry.coverAt = Number(coverAt) || 0
  const cached = metaCache.get(id)
  if (cached && cached.data) {
    cached.data.hasCover = entry.hasCover
    cached.data.coverAt = entry.coverAt
  }
  return entry
}

export async function addFolder(rawPath) {
  const expanded = expandHome(rawPath)
  if (!expanded) {
    const error = new Error('文件夹路径不能为空')
    error.status = 400
    throw error
  }
  let real
  try {
    const stat = await fsp.stat(expanded)
    if (!stat.isDirectory()) {
      const error = new Error('不是一个文件夹')
      error.status = 400
      throw error
    }
    real = await fsp.realpath(expanded)
  } catch (err) {
    if (err.status) throw err
    const error = new Error('文件夹不存在或不可读')
    error.status = 400
    throw error
  }

  const folders = getState().folders
  if (folders.includes(real)) return real
  const duplicate = folders.find((entry) => isInside(entry, real) || isInside(real, entry))
  if (duplicate) {
    const error = new Error(`与已添加的文件夹重叠：${duplicate}`)
    error.status = 409
    throw error
  }
  return real
}

export function forgetEpisodesUnder(folder) {
  const removed = new Set()
  for (const episode of episodes) {
    if (episode.file === folder || isInside(folder, episode.file)) removed.add(episode.id)
  }
  return removed
}

// 仅用于前端展示：把家目录前缀折叠成 ~，不暴露硬编码路径。
export function displayPath(absPath) {
  const value = String(absPath || '')
  if (!value) return ''
  const rawHome = os.homedir()
  let realHome = rawHome
  try {
    if (rawHome) realHome = fs.realpathSync(rawHome)
  } catch {
    realHome = rawHome
  }
  for (const home of [realHome, rawHome]) {
    if (!home) continue
    if (value === home) return '~'
    const sep = home.endsWith(path.sep) ? home : `${home}${path.sep}`
    if (value.startsWith(sep)) {
      return `~/${value.slice(sep.length).split(path.sep).join('/')}`
    }
  }
  return value
}

export async function quickCountAudio(dirPath, { maxDepth = 2, maxCount = 500 } = {}) {
  let count = 0
  let truncated = false
  const walkCount = async (dir, depth) => {
    if (count >= maxCount) {
      truncated = true
      return
    }
    let entries
    try {
      entries = await fsp.readdir(dir, { withFileTypes: true })
    } catch {
      return
    }
    for (const entry of entries) {
      if (count >= maxCount) {
        truncated = true
        return
      }
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        if (depth < maxDepth) await walkCount(full, depth + 1)
      } else if (entry.isFile() && AUDIO_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
        count += 1
      }
    }
  }
  await walkCount(dirPath, 0)
  return { count, truncated }
}

export async function inspectFolderCandidate(rawPath) {
  const expanded = expandHome(rawPath)
  if (!expanded) return { ok: false, error: '请输入文件夹路径' }
  let real
  try {
    const stat = await fsp.stat(expanded)
    if (!stat.isDirectory()) return { ok: false, error: '不是一个文件夹' }
    real = await fsp.realpath(expanded)
  } catch {
    return { ok: false, error: '文件夹不存在或不可读' }
  }

  const folders = getState().folders || []
  const alreadyAdded = folders.includes(real)
  const overlap = alreadyAdded
    ? null
    : folders.find((entry) => entry !== real && (isInside(entry, real) || isInside(real, entry)))
  const { count, truncated } = await quickCountAudio(real, { maxDepth: 3, maxCount: 999 })
  return {
    ok: !overlap,
    path: real,
    displayPath: displayPath(real),
    name: path.basename(real) || real,
    audioCount: count,
    truncated,
    alreadyAdded,
    overlap: overlap ? displayPath(overlap) : null,
    error: overlap ? `与已添加的文件夹重叠：${displayPath(overlap)}` : '',
  }
}

export async function suggestFolders() {
  const home = os.homedir()
  if (!home) return []
  const candidates = [
    { path: path.join(home, 'Music', 'Podcasts'), label: 'Music / Podcasts' },
    { path: path.join(home, 'Podcasts'), label: 'Podcasts' },
    { path: path.join(home, 'Downloads'), label: '下载' },
    { path: path.join(home, 'Music'), label: '音乐' },
    { path: path.join(home, 'Documents'), label: '文稿' },
    { path: path.join(home, 'Desktop'), label: '桌面' },
  ]
  const folders = getState().folders || []
  const seen = new Set()
  const results = []
  for (const cand of candidates) {
    let real
    try {
      const stat = await fsp.stat(cand.path)
      if (!stat.isDirectory()) continue
      real = await fsp.realpath(cand.path)
    } catch {
      continue
    }
    if (seen.has(real)) continue
    seen.add(real)
    const alreadyAdded = folders.includes(real)
    const overlap = alreadyAdded
      ? null
      : folders.find((entry) => entry !== real && (isInside(entry, real) || isInside(real, entry)))
    const { count, truncated } = await quickCountAudio(real, { maxDepth: 2, maxCount: 300 })
    results.push({
      path: real,
      displayPath: displayPath(real),
      label: cand.label,
      name: path.basename(real) || cand.label,
      audioCount: count,
      truncated,
      alreadyAdded,
      overlap: overlap ? displayPath(overlap) : null,
    })
  }
  results.sort((a, b) => {
    const aHas = a.alreadyAdded || a.audioCount > 0 ? 1 : 0
    const bHas = b.alreadyAdded || b.audioCount > 0 ? 1 : 0
    if (aHas !== bHas) return bHas - aHas
    return b.audioCount - a.audioCount
  })
  return results
}
