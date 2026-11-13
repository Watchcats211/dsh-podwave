// dsh-podwave host 半片：在 DSH 的 webServer 上挂 /podwave/api/*。
// 数据仍然放在 ~/.podwave，和独立版 Podwave 共用媒体库与进度。
import fs from 'node:fs'
import http from 'node:http'
import crypto from 'node:crypto'
import { copyFile, mkdir, readdir, realpath, rm, stat } from 'node:fs/promises'
import path from 'node:path'
import { createReadStream, createWriteStream } from 'node:fs'
import { execFile } from 'node:child_process'
import { pipeline } from 'node:stream/promises'
import { DATA_DIR, COVERS_DIR } from './state.js'
import {
  addFolderState,
  getState,
  updateState,
  initState,
  removeFolderState,
  removeProgressFor,
  setProgress,
  setSettings,
} from './state.js'
import {
  loadXyz,
  xyzStatus,
  sendCode,
  loginWithSms,
  loginWithRefreshToken,
  logout,
  getSubscriptions,
  getPodcastEpisodes,
  playEpisode,
  getPublicPodcast,
  getPublicEpisode,
  playPublicEpisode,
  getXyzItems,
  isXyzId,
  proxyStream,
  proxyCover,
  getXyzItem,
  ensureEpisodeAudio,
} from './xyz.js'
import {
  addFolder,
  expandHome,
  forgetEpisodesUnder,
  getCoverPath,
  getEpisode,
  getEpisodePaths,
  getEpisodes,
  getScanState,
  scanLibrary,
} from './library.js'
import {
  deleteTranscript,
  getTranscriptionState,
  migrateAllTranscripts,
  readTranscript,
  runtimeInfo,
  startTranscription,
  TRANSCRIPTS_DIR,
  stopAll,
  toMarkdown,
  toSRT,
  cancelTranscription,
  diarizeTranscript,
  editTranscriptLine,
  enqueueBatch,
  mergeTranscriptLine,
  saveTranscript,
  splitTranscriptLine,
  validateTranscript,
} from './transcribe.js'
import { isLinux, isMac, isWindows } from './platform.js'
import { listJobs, removeJob, upsertJob, getJob } from './jobs.js'
import { scan as scanSetup, plan as planSetup, install as installSetup, cancelSetup, setupJob, llamaBinary, verify as verifySetup } from './setup.js'
import { getSection, updateSection } from './config.js'
import { diarizeInfo } from './diarize.js'
import { getTranslationState, publicConfig, saveConfig, startTranslation } from './translate.js'
import { listModels, loadModelConfig, saveModelConfig } from './models.js'
import { findEpisode, getProviderById, listAllEpisodes } from './providers.js'

export const name = 'dsh-podwave'

const IMPORTS_DIR = path.join(DATA_DIR, 'imports')

function importOrphans() {
  let entries = []
  try {
    entries = fs.readdirSync(IMPORTS_DIR, { withFileTypes: true }).filter((entry) => entry.isDirectory())
  } catch {
    return { batches: [], bytes: 0 }
  }
  const referenced = new Set(getState().folders || [])
  const batches = []
  let bytes = 0
  for (const entry of entries) {
    const dir = path.join(IMPORTS_DIR, entry.name)
    if (referenced.has(dir)) continue
    let size = 0
    const walk = (target) => {
      let info
      try {
        info = fs.statSync(target)
      } catch {
        return
      }
      if (info.isDirectory()) {
        for (const name of fs.readdirSync(target)) walk(path.join(target, name))
      } else {
        size += info.size
      }
    }
    walk(dir)
    bytes += size
    batches.push({ name: entry.name, path: dir, bytes: size })
  }
  return { batches, bytes }
}

// P2：撤销栈（每集最多 20 步，进程内保存）。
const undoStacks = new Map()

function pushUndo(id, transcript) {
  const stack = undoStacks.get(id) || []
  stack.push(JSON.parse(JSON.stringify(transcript.lines || [])))
  if (stack.length > 20) stack.shift()
  undoStacks.set(id, stack)
}


function loadUiSettings() {
  return getSection('ui')
}

function saveUiSettings(patch) {
  return updateSection('ui', patch)
}

const MIME = {
  '.mp3': 'audio/mpeg',
  '.m4a': 'audio/mp4',
  '.m4b': 'audio/mp4',
  '.aac': 'audio/aac',
  '.wav': 'audio/wav',
  '.flac': 'audio/flac',
  '.ogg': 'audio/ogg',
  '.oga': 'audio/ogg',
  '.opus': 'audio/ogg',
  '.weba': 'audio/webm',
  '.webm': 'audio/webm',
  '.wma': 'audio/x-ms-wma',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
}

let booted = null

// ── 文件夹监听：fs.watch 优先，2 秒防抖；不可用时退回 60 秒轮询 ──
const watchers = new Map()
let rescanTimer = null
let watchPollTimer = null

function scheduleRescan() {
  if (rescanTimer) clearTimeout(rescanTimer)
  rescanTimer = setTimeout(() => {
    rescanTimer = null
    scanLibrary().catch((error) => console.error('[dsh-podwave] watch scan failed:', error.message))
  }, 2000)
  if (rescanTimer.unref) rescanTimer.unref()
}

export function refreshWatchers() {
  for (const watcher of watchers.values()) {
    try { watcher.close() } catch { /* ignore */ }
  }
  watchers.clear()
  for (const folder of getState().folders) {
    try {
      const watcher = fs.watch(folder, { recursive: true }, () => scheduleRescan())
      watcher.on('error', () => {})
      watchers.set(folder, watcher)
    } catch { /* fs.watch 在部分平台或网络盘不可用 */ }
  }
  if (watchers.size === 0 && !watchPollTimer) {
    watchPollTimer = setInterval(() => { scanLibrary().catch(() => {}) }, 60000)
    if (watchPollTimer.unref) watchPollTimer.unref()
  } else if (watchers.size > 0 && watchPollTimer) {
    clearInterval(watchPollTimer)
    watchPollTimer = null
  }
}

export function watcherStatus() {
  return { watchers: watchers.size, polling: Boolean(watchPollTimer), rescanPending: Boolean(rescanTimer) }
}

export function closeWatchers() {
  for (const watcher of watchers.values()) {
    try { watcher.close() } catch { /* ignore */ }
  }
  watchers.clear()
  if (watchPollTimer) { clearInterval(watchPollTimer); watchPollTimer = null }
  if (rescanTimer) { clearTimeout(rescanTimer); rescanTimer = null }
}

function boot() {
  if (!booted) {
    booted = (async () => {
      await initState()
    loadXyz()
      await migrateAllTranscripts().catch((error) => console.error('[dsh-podwave] transcript migration failed:', error.message))
      if (getState().folders.length) {
        scanLibrary()
          .then(() => refreshWatchers())
          .catch((error) => console.error('[dsh-podwave] initial scan failed:', error.message))
      }
    })().catch((error) => {
      booted = null
      throw error
    })
  }
  return booted
}

function json(res, status, body) {
  res.statusCode = status
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('cache-control', 'no-store')
  res.end(JSON.stringify(body))
}

async function readJson(req) {
  const chunks = []
  let size = 0
  for await (const chunk of req) {
    size += chunk.length
    if (size > 1024 * 1024) throw Object.assign(new Error('内容太大'), { status: 413 })
    chunks.push(chunk)
  }
  const raw = Buffer.concat(chunks)
  if (!raw.length) return {}
  try {
    return JSON.parse(raw.toString('utf8'))
  } catch {
    throw Object.assign(new Error('请求不是有效的 JSON'), { status: 400 })
  }
}

function requestRejection(ctx, req) {
  const connection = ctx.get('connection')
  if (typeof connection?.requestRejection !== 'function') return 403
  return connection.requestRejection({ headers: req.headers })
}

async function sendFile(req, res, file, cacheControl = 'private, max-age=3600') {
  let info
  try {
    info = await stat(file)
  } catch {
    return json(res, 404, { error: '文件不存在' })
  }
  const type = MIME[path.extname(file).toLowerCase()] || 'application/octet-stream'
  res.setHeader('content-type', type)
  res.setHeader('accept-ranges', 'bytes')
  res.setHeader('cache-control', cacheControl)
  res.setHeader('x-content-type-options', 'nosniff')

  const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || '')
  if (range && (range[1] || range[2])) {
    const start = range[1] ? Number(range[1]) : Math.max(0, info.size - Number(range[2]))
    const end = range[1] && range[2] ? Math.min(Number(range[2]), info.size - 1) : info.size - 1
    if (start >= info.size || start > end) {
      res.statusCode = 416
      res.setHeader('content-range', `bytes */${info.size}`)
      return res.end()
    }
    res.statusCode = 206
    res.setHeader('content-range', `bytes ${start}-${end}/${info.size}`)
    res.setHeader('content-length', end - start + 1)
    return createReadStream(file, { start, end }).pipe(res)
  }

  res.statusCode = 200
  res.setHeader('content-length', info.size)
  if (req.method === 'HEAD') return res.end()
  return createReadStream(file).pipe(res)
}

// 桌面端页面是 dsh-app:// 自定义 scheme，媒体经它代理时可能拿不到 Range，
// 导致 audio.currentTime 赋值被忽略（拖了回起点）。这里另起一个只监听回环的
// 小 HTTP 服务专门提供音频/封面，路径带随机密钥，浏览器可用 Range 正常拖动。
let mediaBase = ''
let mediaServer = null
let mediaReadyResolve = null
const mediaReady = new Promise((resolve) => {
  mediaReadyResolve = resolve
})

function startMediaServer() {
  const secret = crypto.randomBytes(16).toString('hex')
  mediaServer = http.createServer(async (req, res) => {
    try {
      const prefix = `/m/${secret}/`
      const url = new URL(req.url || '/', 'http://127.0.0.1')
      if (!url.pathname.startsWith(prefix)) {
        res.statusCode = 404
        return res.end()
      }
      res.setHeader('access-control-allow-origin', '*')
      const rest = url.pathname.slice(prefix.length)
      const xyzMatch = /^xyz\/([^/]+)\/(audio|cover)$/.exec(rest)
      if (xyzMatch) {
        const xyzId = 'xyz' + decodeURIComponent(xyzMatch[1])
        return xyzMatch[2] === 'cover' ? proxyCover(xyzId, req, res) : proxyStream(xyzId, req, res)
      }
      const match = /^episodes\/([^/]+)\/(audio|cover)$/.exec(rest)
      if (!match) {
        res.statusCode = 404
        return res.end()
      }
      const targetId = decodeURIComponent(match[1])
      const provider = getProviderById(targetId)
      if (provider.id === 'xyz') {
        return match[2] === 'cover'
          ? provider.streamCover(targetId, req, res)
          : provider.streamAudio(targetId, req, res)
      }
      const episode = findEpisode(targetId)
      if (!episode) {
        res.statusCode = 404
        return res.end()
      }
      if (match[2] === 'cover') {
        const cover = getCoverPath(episode.id)
        if (!cover) {
          res.statusCode = 404
          return res.end()
        }
        return sendFile(req, res, cover, 'public, max-age=86400')
      }
      if (!episode.file) {
        res.statusCode = 404
        return res.end()
      }
      return sendFile(req, res, episode.file, 'no-store')
    } catch (error) {
      res.statusCode = 500
      res.end()
    }
  })
  mediaServer.on('error', (error) => console.error('[podwave-media]', error.message))
  mediaServer.listen(0, '127.0.0.1', () => {
    const { port } = mediaServer.address()
    mediaBase = `http://127.0.0.1:${port}/m/${secret}`
    mediaReadyResolve()
  })
  mediaServer.unref()
  return mediaServer
}

function safeName(name) {
  return String(name || 'audio')
    .replace(/[\\/\u0000-\u001f]/g, '_')
    .replace(/^\.+/, '_')
    .slice(0, 180) || 'audio'
}

function pickFolderDialog() {
  const preset = process.env.PODWAVE_PICK_FOLDER
  if (preset) return Promise.resolve({ path: preset })
  let command
  let args
  if (isMac) {
    command = 'osascript'
    args = ['-e', 'POSIX path of (choose folder with prompt "选择存放播客的文件夹")']
  } else if (isWindows) {
    command = 'powershell.exe'
    args = [
      '-NoProfile',
      '-STA',
      '-Command',
      [
        '[Console]::OutputEncoding = [System.Text.Encoding]::UTF8',
        'Add-Type -AssemblyName System.Windows.Forms',
        '$dialog = New-Object System.Windows.Forms.FolderBrowserDialog',
        "$dialog.Description = '选择存放播客的文件夹'",
        "if ($dialog.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) { Write-Output $dialog.SelectedPath }",
      ].join('; '),
    ]
  } else if (isLinux) {
    command = 'zenity'
    args = ['--file-selection', '--directory', '--title=选择存放播客的文件夹']
  } else {
    return Promise.resolve({ error: '当前系统没有可用的文件夹选择器，请手动输入路径' })
  }
  return new Promise((resolve) => {
    execFile(command, args, { timeout: 180000 }, (error, stdout) => {
      if (error) {
        const message = String(error.stderr || error.message || '')
        if (/canceled|cancelled|-128|exit code 1/i.test(message)) return resolve({ canceled: true })
        if (error.code === 'ENOENT') return resolve({ error: '找不到系统选择器，请手动输入路径' })
        return resolve({ error: `打开系统选择器失败：${message.trim().slice(0, 240)}` })
      }
      const picked = String(stdout || '').trim()
      resolve(picked ? { path: picked } : { canceled: true })
    })
  })
}

async function addFolderByPath(rawPath) {
  const folder = await addFolder(rawPath)
  addFolderState(folder)
  scanLibrary().catch((error) => console.error('[dsh-podwave] scan failed:', error.message))
  return folder
}

async function startXyzDownloadAndTranscribe(id) {
  const item = getXyzItem(id)
  if (!item) throw new Error('单集不存在')
  const key = `download:${id}`
  upsertJob({ key, type: 'download', episodeId: id, status: 'running', stage: 'downloading', progress: 0, startedAt: Date.now() })
  try {
    const file = await ensureEpisodeAudio(item.eid, {
      onProgress: (progress) => upsertJob({ key, progress: progress ?? 0 }),
    })
    if (getJob(key)?.status === 'cancelled') return
    upsertJob({ key, stage: 'transcribing', progress: 99 })
    await startTranscription({ id, file, title: item.title, duration: item.duration }, { force: true })
    upsertJob({ key, status: 'done', stage: 'done', progress: 100 })
  } catch (error) {
    upsertJob({ key, status: 'error', error: error.message })
  }
}

async function route(ctx, req, res) {
  const url = new URL(req.url || '/', 'http://local')
  const routePath = url.pathname.replace(/^\/podwave\/?/, '')
  const method = req.method || 'GET'

  if (routePath === 'api/setup') {
    return json(res, 200, { ...scanSetup(), job: setupJob() })
  }
  if (routePath === 'api/setup/plan' && method === 'GET') {
    const source = url.searchParams.get('source') || 'auto'
    return json(res, 200, planSetup({ source }))
  }

  if (routePath === 'api/setup/verify' && method === 'GET') {
    return json(res, 200, await verifySetup())
  }

  if (routePath === 'api/setup/diagnose' && method === 'GET') {
    const { detectPlatform, recommendEngine, ffmpegPath, venvPython } = await import('./platform.js')
    const platform = detectPlatform()
    let components = null
    try {
      components = (await scanSetup()).components
    } catch (error) {
      components = [{ id: 'scan', label: 'scan', ready: false, detail: String(error.message || error) }]
    }
    return json(res, 200, {
      ok: true,
      generatedAt: new Date().toISOString(),
      version: '0.11.14',
      platform,
      engine: recommendEngine(platform),
      paths: {
        data: DATA_DIR,
        ffmpeg: ffmpegPath(),
        python: venvPython(),
        llama: llamaBinary(platform),
      },
      components,
      setup: setupJob(),
    })
  }

  if (routePath === 'api/setup/install' && method === 'POST') {
    const body = await readJson(req)
    if (setupJob()?.running) return json(res, 409, { error: '安装已在进行中' })
    installSetup({ source: body?.source || 'auto' }).catch(() => {})
    return json(res, 200, { started: true })
  }
  if (routePath === 'api/setup/cancel' && method === 'POST') {
    return json(res, 200, { cancelled: cancelSetup() })
  }
  if (method === 'GET' && routePath === 'api/update') {
    const url = new URL(req.url || '/', 'http://127.0.0.1')
    return json(res, 200, await checkUpdate({ force: url.searchParams.get('force') === '1' }))
  }
  if ((method === 'GET' || method === 'HEAD') && routePath === 'api/health') {
    await mediaReady
    return json(res, 200, { ok: true, app: 'podwave', version: '0.11.14', mediaBase, transcribe: runtimeInfo(), diarize: diarizeInfo(), translate: publicConfig() })
  }
  if (method === 'GET' && routePath === 'api/state') {
    const state = getState()
    return json(res, 200, { folders: state.folders, settings: state.settings })
  }
  if (method === 'GET' && routePath === 'api/episodes') {
    const state = getState()
    let transcriptIds = []
    try {
      transcriptIds = fs.readdirSync(TRANSCRIPTS_DIR).filter((file) => file.endsWith('.json')).map((file) => file.replace(/\.json$/, ''))
    } catch {
      transcriptIds = []
    }
    const withTranscript = new Set(transcriptIds)
    const favorites = new Set(state.favorites || [])
    const hidden = new Set(state.hidden || [])
    return json(res, 200, {
      items: listAllEpisodes()
        .filter((episode) => !hidden.has(episode.id))
        .map((episode) => ({
          ...episode,
          hasTranscript: withTranscript.has(episode.id),
          favorite: favorites.has(episode.id),
        }))
        .sort((a, b) => (b.mtime || 0) - (a.mtime || 0)),
      folders: state.folders,
      progress: state.progress,
      scan: getScanState(),
    })
  }
  if (method === 'GET' && routePath === 'api/xyz/status') {
    return json(res, 200, xyzStatus())
  }
  if (method === 'POST' && routePath === 'api/xyz/open-web') {
    let url = 'https://www.xiaoyuzhoufm.com'
    const body = await readJson(req)
    if (body?.url) {
      let parsed
      try {
        parsed = new URL(String(body.url))
      } catch {
        return json(res, 400, { error: '链接格式不对' })
      }
      if (parsed.protocol !== 'https:' || !['www.xiaoyuzhoufm.com', 'xiaoyuzhoufm.com'].includes(parsed.hostname)) {
        return json(res, 400, { error: '只支持打开小宇宙链接' })
      }
      url = parsed.toString()
    }
    const command = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'cmd' : 'xdg-open'
    const args = process.platform === 'win32' ? ['/c', 'start', '', url] : [url]
    try {
      const { spawn } = await import('node:child_process')
      spawn(command, args, { detached: true, stdio: 'ignore' }).unref()
    } catch {
      return json(res, 500, { error: '无法打开浏览器' })
    }
    return json(res, 200, { ok: true })
  }
  if (method === 'POST' && routePath === 'api/xyz/auth/send-code') {
    const body = await readJson(req)
    if (!body?.phone) return json(res, 400, { error: '缺少手机号' })
    return json(res, 200, await sendCode(String(body.phone).trim(), body.areaCode || '+86'))
  }
  if (method === 'POST' && routePath === 'api/xyz/auth/login') {
    const body = await readJson(req)
    if (!body?.phone || !body?.code) return json(res, 400, { error: '缺少手机号或验证码' })
    return json(res, 200, await loginWithSms(String(body.phone).trim(), String(body.code).trim(), body.areaCode || '+86'))
  }
  if (method === 'POST' && routePath === 'api/xyz/auth/token') {
    const body = await readJson(req)
    if (!body?.refreshToken) return json(res, 400, { error: '缺少 refresh token' })
    return json(res, 200, await loginWithRefreshToken(body.refreshToken, body.deviceId || ''))
  }
  if (method === 'POST' && routePath === 'api/xyz/auth/logout') {
    return json(res, 200, logout())
  }
  if (method === 'GET' && routePath === 'api/xyz/subscriptions') {
    const url = new URL(req.url || '/', 'http://127.0.0.1')
    const refresh = url.searchParams.get('refresh') === '1'
    return json(res, 200, { items: await getSubscriptions({ refresh }) })
  }
  const xyzEpisodesMatch = /^api\/xyz\/podcast\/([^/]+)\/episodes$/.exec(routePath)
  if (xyzEpisodesMatch && method === 'GET') {
    const url = new URL(req.url || '/', 'http://127.0.0.1')
    const limit = Number(url.searchParams.get('limit') || 30)
    const loadMoreKeyRaw = url.searchParams.get('loadMoreKey')
    let loadMoreKey = null
    if (loadMoreKeyRaw) { try { loadMoreKey = JSON.parse(loadMoreKeyRaw) } catch { loadMoreKey = null } }
    return json(res, 200, await getPodcastEpisodes(decodeURIComponent(xyzEpisodesMatch[1]), { limit, loadMoreKey }))
  }
  const xyzPlayMatch = /^api\/xyz\/episodes\/([^/]+)\/play$/.exec(routePath)
  if (xyzPlayMatch && method === 'POST') {
    return json(res, 200, { item: await playEpisode(decodeURIComponent(xyzPlayMatch[1])) })
  }
  if (method === 'GET' && routePath === 'api/xyz/public/podcast') {
    const url = new URL(req.url || '/', 'http://127.0.0.1')
    const data = await getPublicPodcast(url.searchParams.get('url') || url.searchParams.get('pid') || '')
    return json(res, 200, { podcast: data })
  }
  if (method === 'GET' && routePath === 'api/xyz/public/episode') {
    const url = new URL(req.url || '/', 'http://127.0.0.1')
    const data = await getPublicEpisode(url.searchParams.get('url') || '')
    return json(res, 200, data)
  }
  if (method === 'POST' && routePath === 'api/xyz/public/play') {
    const body = await readJson(req)
    return json(res, 200, { item: playPublicEpisode(body?.pid, body?.eid) })
  }
  if (method === 'POST' && routePath === 'api/scan') {
    scanLibrary().catch((error) => console.error('[dsh-podwave] scan failed:', error.message))
    return json(res, 200, { scan: getScanState() })
  }

  if (routePath === 'api/pick-folder') {
    if (method !== 'POST') return json(res, 405, { error: 'Method not allowed' })
    const result = await pickFolderDialog()
    if (result.error) return json(res, 500, { error: result.error })
    return json(res, 200, result)
  }

  if (routePath === 'api/import/upload') {
    if (method !== 'POST') return json(res, 405, { error: 'Method not allowed' })
    const name = safeName(url.searchParams.get('name'))
    const batch = safeName(url.searchParams.get('batch')) || `drop-${Date.now()}`
    const dir = path.join(IMPORTS_DIR, batch)
    await mkdir(dir, { recursive: true })
    let file = path.join(dir, name)
    let counter = 1
    while (fs.existsSync(file)) file = path.join(dir, `${counter++}-${name}`)
    await pipeline(req, createWriteStream(file))
    const size = (await stat(file)).size
    return json(res, 200, { folder: dir, file, size })
  }

  if (routePath === 'api/import/paths') {
    if (method !== 'POST') return json(res, 405, { error: 'Method not allowed' })
    const body = await readJson(req)
    const inputs = Array.isArray(body?.paths) ? body.paths : []
    const mode = (getSection('import') || {}).mode === 'reference' ? 'reference' : 'copy'
    const library = getEpisodePaths()
    const existing = new Map(library.map((episode) => [episode.file, episode.id]))
    const signatures = new Set(library.map((episode) => `${path.basename(episode.file)}:${episode.size || 0}`))
    const skipped = []
    let added = 0
    let copied = 0
    for (const input of inputs) {
      const target = expandHome(String(input || ''))
      if (!target) continue
      let info
      try {
        info = await stat(target)
      } catch {
        skipped.push({ path: target, reason: 'not-found' })
        continue
      }
      try {
        if (info.isDirectory()) {
          await addFolderByPath(target)
          added++
          continue
        }
        const resolved = await realpath(target).catch(() => target)
        if (existing.has(resolved) || signatures.has(`${path.basename(target)}:${info.size || 0}`)) {
          skipped.push({ path: target, reason: 'duplicate' })
          continue
        }
        signatures.add(`${path.basename(target)}:${info.size || 0}`)
        if (mode === 'reference') {
          await addFolderByPath(path.dirname(target))
          added++
        } else {
          const batch = `drop-${Date.now()}-${copied}`
          const dir = path.join(IMPORTS_DIR, batch)
          await mkdir(dir, { recursive: true })
          await copyFile(target, path.join(dir, path.basename(target)))
          await addFolderByPath(dir)
          copied++
        }
      } catch (error) {
        if (error.status !== 409) skipped.push({ path: target, reason: error.message })
      }
    }
    return json(res, 200, { added: added + copied, copied, skipped, mode, folders: getState().folders })
  }

  const favoriteMatch = /^api\/episodes\/([^/]+)\/favorite$/.exec(routePath)
  if (favoriteMatch) {
    if (method !== 'PUT') return json(res, 405, { error: 'Method not allowed' })
    const id = decodeURIComponent(favoriteMatch[1])
    const body = await readJson(req)
    const favorite = Boolean(body?.favorite)
    const favorites = new Set(getState().favorites || [])
    if (favorite) favorites.add(id)
    else favorites.delete(id)
    updateState({ favorites: [...favorites] })
    return json(res, 200, { id, favorite })
  }

  const hideMatch = /^api\/episodes\/([^/]+)$/.exec(routePath)
  if (hideMatch) {
    if (method !== 'DELETE') return json(res, 405, { error: 'Method not allowed' })
    const id = decodeURIComponent(hideMatch[1])
    const hidden = new Set(getState().hidden || [])
    hidden.add(id)
    await deleteTranscript(id).catch(() => {})
    for (const ext of ['jpg', 'png']) await rm(path.join(COVERS_DIR, `${id}.${ext}`), { force: true }).catch(() => {})
    const favorites = new Set(getState().favorites || [])
    favorites.delete(id)
    const progress = { ...(getState().progress || {}) }
    delete progress[id]
    updateState({ hidden: [...hidden], favorites: [...favorites], progress })
    return json(res, 200, { id, hidden: true, purged: true })
  }

  if (routePath === 'api/search' && method === 'GET') {
    const query = String(new URL(req.url, 'http://127.0.0.1').searchParams.get('q') || '').trim()
    if (query.length < 2) return json(res, 200, { items: [], total: 0 })
    const needle = query.toLowerCase()
    const titles = new Map(listAllEpisodes().map((episode) => [episode.id, episode]))
    const items = []
    const names = await readdir(TRANSCRIPTS_DIR).catch(() => [])
    for (const name of names) {
      if (!name.endsWith('.json') || items.length >= 80) continue
      const id = name.slice(0, -5)
      const transcript = await readTranscript(id).catch(() => null)
      if (!transcript) continue
      for (const line of transcript.lines || []) {
        if (items.length >= 80) break
        if (!String(line.text || '').toLowerCase().includes(needle)) continue
        const episode = titles.get(id)
        items.push({
          episodeId: id,
          lineId: line.id,
          start: line.start,
          end: line.end,
          text: line.text,
          title: episode?.title || transcript.title || '',
          episodeTitle: episode?.title || transcript.title || '',
        })
      }
    }
    return json(res, 200, { items, total: items.length })
  }

  if (routePath === 'api/import/settings') {
    if (method === 'GET') {
      const config = getSection('import') || {}
      const { batches, bytes } = importOrphans()
      return json(res, 200, { mode: config.mode === 'reference' ? 'reference' : 'copy', orphans: batches.length, orphanBytes: bytes })
    }
    if (method === 'PUT') {
      const body = await readJson(req)
      const mode = body?.mode === 'reference' ? 'reference' : 'copy'
      const next = updateSection('import', { mode })
      return json(res, 200, { mode: next.mode })
    }
    return json(res, 405, { error: 'Method not allowed' })
  }

  if (routePath === 'api/imports/orphans') {
    if (method === 'GET') return json(res, 200, importOrphans())
    if (method === 'DELETE') {
      const { batches } = importOrphans()
      for (const batch of batches) await rm(batch.path, { recursive: true, force: true }).catch(() => {})
      return json(res, 200, { removed: batches.length })
    }
    return json(res, 405, { error: 'Method not allowed' })
  }

  if (routePath === 'api/folders') {
    if (method === 'POST') {
      const body = await readJson(req)
      const folder = await addFolder(body?.path)
      addFolderState(folder)
      scanLibrary()
        .then(() => refreshWatchers())
        .catch((error) => console.error('[dsh-podwave] scan failed:', error.message))
      return json(res, 200, { folder, folders: getState().folders })
    }
    if (method === 'DELETE') {
      const body = await readJson(req)
      const input = body?.path || url.searchParams.get('path')
      const target = expandHome(input)
      if (!target) return json(res, 400, { error: '缺少文件夹路径' })
      const folders = getState().folders
      const next = folders.filter((folder) => folder !== target)
      if (next.length === folders.length) return json(res, 404, { error: '文件夹不在列表中' })
      const removed = forgetEpisodesUnder(target)
      removeProgressFor((id) => removed.has(id))
      removeFolderState(target)
      scanLibrary()
        .then(() => refreshWatchers())
        .catch((error) => console.error('[dsh-podwave] scan failed:', error.message))
      return json(res, 200, { folders: next })
    }
    return json(res, 405, { error: '不支持的方法' })
  }

  const coverMatch = /^api\/episodes\/([^/]+)\/cover$/.exec(routePath)
  if (coverMatch && (method === 'GET' || method === 'HEAD')) {
    const coverId = decodeURIComponent(coverMatch[1])
    const provider = getProviderById(coverId)
    if (provider.id === 'xyz') return provider.streamCover(coverId, req, res)
    const episode = findEpisode(coverId)
    const cover = episode ? provider.getCoverPath(episode.id) : null
    if (!cover) return json(res, 404, { error: '没有封面' })
    res.setHeader('cache-control', 'public, max-age=86400')
    return sendFile(req, res, cover, 'public, max-age=86400')
  }

  const audioMatch = /^api\/episodes\/([^/]+)\/audio$/.exec(routePath)
  if (audioMatch && (method === 'GET' || method === 'HEAD')) {
    const audioId = decodeURIComponent(audioMatch[1])
    const provider = getProviderById(audioId)
    if (provider.id === 'xyz') return provider.streamAudio(audioId, req, res)
    const episode = findEpisode(audioId)
    if (!episode) return json(res, 404, { error: '单集不存在' })
    try {
      await stat(episode.file)
    } catch {
      return json(res, 410, { error: '文件已不存在' })
    }
    return sendFile(req, res, episode.file, 'no-store')
  }

  const transcriptMatch = /^api\/episodes\/([^/]+)\/transcript$/.exec(routePath)
  if (transcriptMatch) {
    const id = decodeURIComponent(transcriptMatch[1])
    if (!findEpisode(id) && !isXyzId(id)) return json(res, 404, { error: '单集不存在' })
    if (method === 'GET') {
      const state = await getTranscriptionState(id)
      if (isXyzId(id) && (state.status === 'none' || state.status === 'error')) {
        const dl = getJob(`download:${id}`)
        if (dl && (dl.status === 'queued' || dl.status === 'running')) {
          return json(res, 200, { status: 'queued', stage: 'downloading', progress: dl.progress || 0, elapsedMs: 0 })
        }
        if (dl && dl.status === 'error') return json(res, 200, { status: 'error', error: dl.error || '下载失败' })
      }
      return json(res, 200, state)
    }
    if (method === 'DELETE') {
      const ok = await deleteTranscript(id)
      return ok ? json(res, 200, { ok: true }) : json(res, 409, { error: '正在转写，完成后再试' })
    }
  }

  const transcribeMatch = /^api\/episodes\/([^/]+)\/transcribe$/.exec(routePath)
  if (transcribeMatch && method === 'POST') {
    const transcribeId = decodeURIComponent(transcribeMatch[1])
    let episode = getEpisode(transcribeId)
    if (!episode && isXyzId(transcribeId)) {
      const current = await getTranscriptionState(transcribeId)
      if (current.status === 'queued' || current.status === 'running') return json(res, 200, current)
      const dl = getJob(`download:${transcribeId}`)
      if (dl && dl.status === 'running') return json(res, 200, { status: 'queued', stage: 'downloading', progress: dl.progress || 0 })
      startXyzDownloadAndTranscribe(transcribeId).catch(() => {})
      return json(res, 200, { status: 'queued', stage: 'downloading', progress: 0 })
    }
    if (!episode) return json(res, 404, { error: '单集不存在' })
    const body = await readJson(req)
    const result = await startTranscription(episode, { force: Boolean(body?.force), resume: Boolean(body?.resume) })
    return json(res, 200, result)
  }

  const diarizeMatch = /^api\/episodes\/([^/]+)\/diarize$/.exec(routePath)
  if (diarizeMatch && method === 'POST') {
    const episode = findEpisode(decodeURIComponent(diarizeMatch[1]))
    if (!episode || !episode.file) return json(res, 404, { error: '单集不存在或音频尚未下载到本地' })
    try {
      const transcript = await diarizeTranscript(episode)
      return json(res, 200, { transcript })
    } catch (error) {
      return json(res, 400, { error: error.message })
    }
  }

  const transcribeCancelMatch = /^api\/episodes\/([^/]+)\/transcribe\/cancel$/.exec(routePath)
  if (transcribeCancelMatch && method === 'POST') {
    const id = decodeURIComponent(transcribeCancelMatch[1])
    if (!findEpisode(id) && !isXyzId(id)) return json(res, 404, { error: '单集不存在' })
    const downloadKey = `download:${id}`
    const downloadJob = getJob(downloadKey)
    if (downloadJob && (downloadJob.status === 'queued' || downloadJob.status === 'running')) {
      upsertJob({ key: downloadKey, status: 'cancelled', stage: 'cancelled', error: '用户取消了下载', finishedAt: Date.now() })
    }
    return json(res, 200, cancelTranscription(id))
  }

  if (routePath === 'api/transcribe/batch' && method === 'POST') {
    const body = await readJson(req)
    const ids = Array.isArray(body?.ids) ? body.ids.map((id) => String(id)) : []
    const episodes = ids.map((id) => getEpisode(id)).filter(Boolean)
    if (!episodes.length) return json(res, 400, { error: '没有可转写的单集' })
    const result = await enqueueBatch(episodes)
    return json(res, 200, result)
  }

  if (routePath === 'api/transcribe/settings') {
    if (method === 'GET') return json(res, 200, { ...getSection('transcribe'), runtime: runtimeInfo() })
    if (method === 'PUT') {
      const body = await readJson(req)
      const patch = {}
      if (Array.isArray(body?.hotwords)) patch.hotwords = body.hotwords.map((word) => String(word || '').trim()).filter(Boolean).slice(0, 500)
      if (Number.isFinite(Number(body?.chunkMinutes))) patch.chunkMinutes = Math.max(1, Math.min(60, Number(body.chunkMinutes)))
      if (typeof body?.diarize === 'boolean') patch.diarize = body.diarize
      if (!Object.keys(patch).length) return json(res, 400, { error: '没有可保存的设置' })
      return json(res, 200, { ...updateSection('transcribe', patch), runtime: runtimeInfo() })
    }
  }

  const lineMatch = /^api\/episodes\/([^/]+)\/transcript\/lines\/([^/]+)$/.exec(routePath)
  if (lineMatch && method === 'PUT') {
    const id = decodeURIComponent(lineMatch[1])
    if (!findEpisode(id) && !isXyzId(id)) return json(res, 404, { error: '单集不存在' })
    const before = await readTranscript(id)
    if (!before) return json(res, 404, { error: '还没有转写' })
    const body = await readJson(req)
    try {
      pushUndo(id, before)
      const transcript = await editTranscriptLine(id, decodeURIComponent(lineMatch[2]), body || {})
      return json(res, 200, { transcript })
    } catch (error) {
      return json(res, 400, { error: error.message })
    }
  }

  const splitMatch = /^api\/episodes\/([^/]+)\/transcript\/lines\/([^/]+)\/split$/.exec(routePath)
  if (splitMatch && method === 'POST') {
    const id = decodeURIComponent(splitMatch[1])
    if (!findEpisode(id) && !isXyzId(id)) return json(res, 404, { error: '单集不存在' })
    const before = await readTranscript(id)
    if (!before) return json(res, 404, { error: '还没有转写' })
    const body = await readJson(req)
    try {
      pushUndo(id, before)
      const transcript = await splitTranscriptLine(id, decodeURIComponent(splitMatch[2]), Number(body?.offset))
      return json(res, 200, { transcript })
    } catch (error) {
      return json(res, 400, { error: error.message })
    }
  }

  const mergeMatch = /^api\/episodes\/([^/]+)\/transcript\/lines\/([^/]+)\/merge$/.exec(routePath)
  if (mergeMatch && method === 'POST') {
    const id = decodeURIComponent(mergeMatch[1])
    if (!findEpisode(id) && !isXyzId(id)) return json(res, 404, { error: '单集不存在' })
    const before = await readTranscript(id)
    if (!before) return json(res, 404, { error: '还没有转写' })
    try {
      pushUndo(id, before)
      const transcript = await mergeTranscriptLine(id, decodeURIComponent(mergeMatch[2]))
      return json(res, 200, { transcript })
    } catch (error) {
      return json(res, 400, { error: error.message })
    }
  }

  const undoMatch = /^api\/episodes\/([^/]+)\/transcript\/undo$/.exec(routePath)
  if (undoMatch && method === 'POST') {
    const id = decodeURIComponent(undoMatch[1])
    if (!findEpisode(id) && !isXyzId(id)) return json(res, 404, { error: '单集不存在' })
    const transcript = await readTranscript(id)
    if (!transcript) return json(res, 404, { error: '还没有转写' })
    const stack = undoStacks.get(id) || []
    if (!stack.length) return json(res, 409, { error: '没有可以撤销的修改' })
    transcript.lines = stack.pop()
    transcript.text = transcript.lines.map((line) => line.text).join(' ')
    await saveTranscript(transcript)
    return json(res, 200, { transcript })
  }

  const validateMatch = /^api\/episodes\/([^/]+)\/transcript\/validate$/.exec(routePath)
  if (validateMatch && method === 'GET') {
    return json(res, 200, await validateTranscript(decodeURIComponent(validateMatch[1])))
  }

  const transcriptExportMatch = /^api\/episodes\/([^/]+)\/transcript\/export$/.exec(routePath)
  if (transcriptExportMatch && method === 'GET') {
    const id = decodeURIComponent(transcriptExportMatch[1])
    const transcript = await readTranscript(id)
    if (!transcript) return json(res, 404, { error: '还没有转写' })
    const format = (url.searchParams.get('format') || 'srt').toLowerCase()
    const markdown = format === 'md' || format === 'markdown'
    res.statusCode = 200
    res.setHeader('content-type', 'text/plain; charset=utf-8')
    res.setHeader('content-disposition', `attachment; filename="podwave-${id}.${markdown ? 'md' : 'srt'}"`)
    res.setHeader('cache-control', 'no-store')
    return res.end(markdown ? toMarkdown(transcript) : toSRT(transcript))
  }

  if (routePath === 'api/models') {
    if (method === 'GET') return json(res, 200, { config: loadModelConfig(), models: listModels(), transcribe: runtimeInfo(), translate: publicConfig() })
    if (method === 'PUT') {
      const body = await readJson(req)
      const available = new Set(listModels().filter((model) => model.ready).map((model) => model.name))
      const patch = {}
      if (typeof body?.asrModel === 'string' && available.has(body.asrModel)) patch.asrModel = body.asrModel
      if (typeof body?.translateModel === 'string' && available.has(body.translateModel)) patch.translateModel = body.translateModel
      if (!Object.keys(patch).length) return json(res, 400, { error: '没有可用的模型' })
      const config = saveModelConfig(patch)
      return json(res, 200, { config, models: listModels(), transcribe: runtimeInfo(), translate: publicConfig() })
    }
  }

  if (routePath === 'api/jobs') {
    if (method === 'GET') return json(res, 200, { items: listJobs() })
    if (method === 'DELETE') {
      const body = await readJson(req)
      if (body?.key) removeJob(String(body.key))
      return json(res, 200, { items: listJobs() })
    }
  }

  if (method === 'GET' && routePath === 'api/history') {
    const items = []
    let files = []
    try {
      files = fs.readdirSync(TRANSCRIPTS_DIR).filter((file) => file.endsWith('.json'))
    } catch {
      files = []
    }
    for (const file of files) {
      const id = file.replace(/\.json$/, '')
      const transcript = await readTranscript(id)
      if (!transcript) continue
      const episode = findEpisode(id)
      let completedAt = null
      try {
        completedAt = (await stat(path.join(TRANSCRIPTS_DIR, file))).mtimeMs
      } catch {
        completedAt = null
      }
      items.push({
        id,
        title: episode?.title || transcript.title || id,
        artist: episode?.artist || '',
        duration: episode?.duration || null,
        language: transcript.language || null,
        lines: Array.isArray(transcript.lines) ? transcript.lines.length : 0,
        translations: Object.keys(transcript.providers || {}),
        translated: Array.isArray(transcript.lines)
          ? transcript.lines.filter((line) => Object.keys(line.translations || {}).length).length
          : 0,
        provider: Object.values(transcript.providers || {})[0] || null,
        completedAt,
      })
    }
    items.sort((a, b) => (b.completedAt || 0) - (a.completedAt || 0))
    return json(res, 200, { items })
  }

  if (routePath === 'api/ui-settings') {
    if (method === 'GET') return json(res, 200, loadUiSettings())
    if (method === 'PUT') {
      const body = await readJson(req)
      const patch = {}
      if (typeof body?.showSidebarPanel === 'boolean') patch.showSidebarPanel = body.showSidebarPanel
      if (typeof body?.sidebarCollapsed === 'boolean') patch.sidebarCollapsed = body.sidebarCollapsed
      if (!Object.keys(patch).length) return json(res, 400, { error: '没有可保存的设置' })
      return json(res, 200, saveUiSettings(patch))
    }
  }

  if (routePath === 'api/translate/settings') {
    if (method === 'GET') return json(res, 200, publicConfig())
    if (method === 'PUT') {
      const body = await readJson(req)
      const patch = {}
      if (body?.provider === 'api' || body?.provider === 'local') patch.provider = body.provider
      if (body?.target === 'zh' || body?.target === 'en') patch.target = body.target
      if (typeof body?.apiKey === 'string') patch.apiKey = body.apiKey.trim()
      if (typeof body?.apiBase === 'string' && body.apiBase.trim()) patch.apiBase = body.apiBase.trim()
      if (typeof body?.apiModel === 'string' && body.apiModel.trim()) patch.apiModel = body.apiModel.trim()
      saveConfig(patch)
      return json(res, 200, publicConfig())
    }
  }

  const translateMatch = /^api\/episodes\/([^/]+)\/translate$/.exec(routePath)
  if (translateMatch) {
    const id = decodeURIComponent(translateMatch[1])
    if (!findEpisode(id) && !isXyzId(id)) return json(res, 404, { error: '单集不存在' })
    if (method === 'GET') {
      const target = url.searchParams.get('target') === 'en' ? 'en' : 'zh'
      return json(res, 200, await getTranslationState(id, target))
    }
    if (method === 'POST') {
      const body = await readJson(req)
      const target = body?.target === 'en' ? 'en' : 'zh'
      const provider = body?.provider === 'local' ? 'local' : body?.provider === 'api' ? 'api' : undefined
      return json(res, 200, await startTranslation(id, { target, provider }))
    }
  }

  const progressMatch = /^api\/progress\/([^/]+)$/.exec(routePath)
  if (progressMatch && method === 'PUT') {
    const episode = findEpisode(decodeURIComponent(progressMatch[1]))
    if (!episode) return json(res, 404, { error: '单集不存在' })
    const body = await readJson(req)
    const position = Number(body?.position)
    const duration = Number(body?.duration) || episode.duration || 0
    if (!Number.isFinite(position) || position < 0) return json(res, 400, { error: '位置无效' })
    setProgress(episode.id, Math.round(position * 10) / 10, duration)
    return json(res, 200, { ok: true })
  }

  if (routePath === 'api/settings' && method === 'PATCH') {
    const body = await readJson(req)
    const patch = {}
    if (Number.isFinite(Number(body?.rate))) patch.rate = Math.min(3, Math.max(0.5, Number(body.rate)))
    if (Number.isFinite(Number(body?.volume))) patch.volume = Math.min(1, Math.max(0, Number(body.volume)))
    if (typeof body?.lastEpisodeId === 'string' || body?.lastEpisodeId === null) patch.lastEpisodeId = body.lastEpisodeId
    setSettings(patch)
    return json(res, 200, { settings: getState().settings })
  }

  return json(res, 404, { error: '接口不存在' })
}

export default {
  inject: ['webServer', 'connection'],
  apply(ctx) {
    const ready = boot()
    startMediaServer()
    ctx.effect(() => () => {
      closeWatchers()
      try {
        mediaServer?.close()
      } catch {
        /* ignore */
      }
    }, 'dsh-podwave: media server')
    ctx.effect(
      () =>
        ctx.webServer.register({
          kind: 'prefix',
          path: '/podwave',
          handler: async (req, res) => {
            try {
              const rejection = requestRejection(ctx, req)
              if (rejection) {
                json(res, rejection, { error: '未授权' })
                return
              }
              await ready
              if (req.method && req.method !== 'GET' && req.method !== 'HEAD') {
                const site = req.headers['sec-fetch-site']
                if (site && site !== 'same-origin' && site !== 'none') {
                  json(res, 403, { error: '拒绝跨站请求' })
                  return
                }
              }
              await route(ctx, req, res)
            } catch (error) {
              if (res.headersSent) {
                res.end()
                return
              }
              console.error('[podwave-error]', error && error.stack ? error.stack : error)
              json(res, error.status || 500, { error: error.message || '服务器错误' })
            }
          },
        }),
      'dsh-podwave: /podwave routes',
    )
    ctx.effect(() => () => stopAll(), 'dsh-podwave: stop transcription workers')
  },
}
