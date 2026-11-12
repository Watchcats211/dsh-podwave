// dsh-podwave host 半片：在 DSH 的 webServer 上挂 /podwave/api/*。
// 数据仍然放在 ~/.podwave，和独立版 Podwave 共用媒体库与进度。
import fs from 'node:fs'
import { mkdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { createReadStream, createWriteStream } from 'node:fs'
import { execFile } from 'node:child_process'
import { pipeline } from 'node:stream/promises'
import { DATA_DIR } from './state.js'
import {
  addFolderState,
  getState,
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
  getEpisodes,
  getScanState,
  scanLibrary,
} from './library.js'
import {
  deleteTranscript,
  getTranscriptionState,
  readTranscript,
  runtimeInfo,
  startTranscription,
  TRANSCRIPTS_DIR,
  stopAll,
  toMarkdown,
  toSRT,
} from './transcribe.js'
import { getTranslationState, publicConfig, saveConfig, startTranslation } from './translate.js'
import { listModels, loadModelConfig, saveModelConfig } from './models.js'

export const name = 'dsh-podwave'

const IMPORTS_DIR = path.join(DATA_DIR, 'imports')
const UI_CONFIG = path.join(DATA_DIR, 'ui.json')
const UI_DEFAULTS = { showSidebarPanel: true, sidebarCollapsed: false }

function loadUiSettings() {
  try {
    return { ...UI_DEFAULTS, ...JSON.parse(fs.readFileSync(UI_CONFIG, 'utf8')) }
  } catch {
    return { ...UI_DEFAULTS }
  }
}

function saveUiSettings(patch) {
  const next = { ...loadUiSettings(), ...patch }
  fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(UI_CONFIG, JSON.stringify(next, null, 2))
  return next
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
    return json(res, 200, { ok: true, app: 'podwave', version: '0.2.9', transcribe: runtimeInfo(), translate: publicConfig() })
  }
  if (method === 'GET' && routePath === 'api/state') {
    const state = getState()
    return json(res, 200, { folders: state.folders, settings: state.settings })
  }
  if (method === 'GET' && routePath === 'api/episodes') {
    const state = getState()
    return json(res, 200, {
      items: getEpisodes(),
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
    let added = 0
    for (const input of inputs) {
      const target = expandHome(String(input || ''))
      if (!target) continue
      let info
      try {
        info = await stat(target)
      } catch {
        continue
      }
      const dir = info.isDirectory() ? target : path.dirname(target)
      try {
        await addFolderByPath(dir)
        added++
      } catch (error) {
        if (error.status !== 409) throw error
      }
    }
    return json(res, 200, { added, folders: getState().folders })
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
    const result = await startTranscription(episode, { force: Boolean(body?.force) })
    return json(res, 200, result)
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
        segments: Array.isArray(transcript.segments) ? transcript.segments.length : 0,
        translations: Object.keys(transcript.translations || {}).filter((key) => key !== '_provider'),
        provider: transcript.translations?._provider || null,
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
              json(res, error.status || 500, { error: error.message || '服务器错误' })
            }
          },
        }),
      'dsh-podwave: /podwave routes',
    )
    ctx.effect(() => () => stopAll(), 'dsh-podwave: stop transcription workers')
  },
}
