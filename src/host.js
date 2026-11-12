// dsh-podwave host 半片：在 DSH 的 webServer 上挂 /podwave/api/*。
// 数据仍然放在 ~/.podwave，和独立版 Podwave 共用媒体库与进度。
import fs from 'node:fs'
import { copyFile, mkdir, realpath, rm, stat } from 'node:fs/promises'
import path from 'node:path'
import { createReadStream, createWriteStream } from 'node:fs'
import { execFile } from 'node:child_process'
import { pipeline } from 'node:stream/promises'
import { DATA_DIR } from './state.js'
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
import { listJobs, removeJob } from './jobs.js'
import { getSection, updateSection } from './config.js'
import { diarizeInfo } from './diarize.js'
import { getTranslationState, publicConfig, saveConfig, startTranslation } from './translate.js'
import { listModels, loadModelConfig, saveModelConfig } from './models.js'

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

function boot() {
  if (!booted) {
    booted = (async () => {
      await initState()
      await migrateAllTranscripts().catch((error) => console.error('[dsh-podwave] transcript migration failed:', error.message))
      if (getState().folders.length) {
        scanLibrary().catch((error) => console.error('[dsh-podwave] initial scan failed:', error.message))
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

function safeName(name) {
  return String(name || 'audio')
    .replace(/[\\/\u0000-\u001f]/g, '_')
    .replace(/^\.+/, '_')
    .slice(0, 180) || 'audio'
}

function pickFolderDialog() {
  const preset = process.env.PODWAVE_PICK_FOLDER
  if (preset) return Promise.resolve({ path: preset })
  return new Promise((resolve) => {
    const script = 'POSIX path of (choose folder with prompt "选择存放播客的文件夹")'
    execFile('osascript', ['-e', script], { timeout: 180000 }, (error, stdout) => {
      if (error) {
        const message = String(error.stderr || error.message || '')
        if (/canceled|cancelled|-128/i.test(message)) return resolve({ canceled: true })
        return resolve({ error: `打开系统选择器失败：${message.trim().slice(0, 240)}` })
      }
      const picked = stdout.trim()
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

async function route(ctx, req, res) {
  const url = new URL(req.url || '/', 'http://local')
  const routePath = url.pathname.replace(/^\/podwave\/?/, '')
  const method = req.method || 'GET'

  if ((method === 'GET' || method === 'HEAD') && routePath === 'api/health') {
    return json(res, 200, { ok: true, app: 'podwave', version: '0.9.1', transcribe: runtimeInfo(), diarize: diarizeInfo(), translate: publicConfig() })
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
      items: getEpisodes()
        .filter((episode) => !hidden.has(episode.id))
        .map((episode) => ({ ...episode, hasTranscript: withTranscript.has(episode.id), favorite: favorites.has(episode.id) })),
      folders: state.folders,
      progress: state.progress,
      scan: getScanState(),
    })
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
    updateState({ hidden: [...hidden] })
    return json(res, 200, { id, hidden: true })
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
      scanLibrary().catch((error) => console.error('[dsh-podwave] scan failed:', error.message))
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
      scanLibrary().catch((error) => console.error('[dsh-podwave] scan failed:', error.message))
      return json(res, 200, { folders: next })
    }
    return json(res, 405, { error: '不支持的方法' })
  }

  const coverMatch = /^api\/episodes\/([^/]+)\/cover$/.exec(routePath)
  if (coverMatch && (method === 'GET' || method === 'HEAD')) {
    const episode = getEpisode(decodeURIComponent(coverMatch[1]))
    const cover = episode ? getCoverPath(episode.id) : null
    if (!cover) return json(res, 404, { error: '没有封面' })
    res.setHeader('cache-control', 'public, max-age=86400')
    return sendFile(req, res, cover, 'public, max-age=86400')
  }

  const audioMatch = /^api\/episodes\/([^/]+)\/audio$/.exec(routePath)
  if (audioMatch && (method === 'GET' || method === 'HEAD')) {
    const episode = getEpisode(decodeURIComponent(audioMatch[1]))
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
    if (!getEpisode(id)) return json(res, 404, { error: '单集不存在' })
    if (method === 'GET') return json(res, 200, await getTranscriptionState(id))
    if (method === 'DELETE') {
      const ok = await deleteTranscript(id)
      return ok ? json(res, 200, { ok: true }) : json(res, 409, { error: '正在转写，完成后再试' })
    }
  }

  const transcribeMatch = /^api\/episodes\/([^/]+)\/transcribe$/.exec(routePath)
  if (transcribeMatch && method === 'POST') {
    const episode = getEpisode(decodeURIComponent(transcribeMatch[1]))
    if (!episode) return json(res, 404, { error: '单集不存在' })
    const body = await readJson(req)
    const result = await startTranscription(episode, { force: Boolean(body?.force), resume: Boolean(body?.resume) })
    return json(res, 200, result)
  }

  const diarizeMatch = /^api\/episodes\/([^/]+)\/diarize$/.exec(routePath)
  if (diarizeMatch && method === 'POST') {
    const episode = getEpisode(decodeURIComponent(diarizeMatch[1]))
    if (!episode) return json(res, 404, { error: '单集不存在' })
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
    if (!getEpisode(id)) return json(res, 404, { error: '单集不存在' })
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
    if (!getEpisode(id)) return json(res, 404, { error: '单集不存在' })
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
    if (!getEpisode(id)) return json(res, 404, { error: '单集不存在' })
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
    if (!getEpisode(id)) return json(res, 404, { error: '单集不存在' })
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
    if (!getEpisode(id)) return json(res, 404, { error: '单集不存在' })
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
      const episode = getEpisode(id)
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
    if (!getEpisode(id)) return json(res, 404, { error: '单集不存在' })
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
    const episode = getEpisode(decodeURIComponent(progressMatch[1]))
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
