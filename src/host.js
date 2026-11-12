// dsh-podwave host 半片：在 DSH 的 webServer 上挂 /podwave/api/*。
// 数据仍然放在 ~/.podwave，和独立版 Podwave 共用媒体库与进度。
import fs from 'node:fs'
import { stat } from 'node:fs/promises'
import path from 'node:path'
import { createReadStream } from 'node:fs'
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

export const name = 'dsh-podwave'

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

async function route(ctx, req, res) {
  const url = new URL(req.url || '/', 'http://local')
  const routePath = url.pathname.replace(/^\/podwave\/?/, '')
  const method = req.method || 'GET'

  if ((method === 'GET' || method === 'HEAD') && routePath === 'api/health') {
    return json(res, 200, { ok: true, app: 'podwave', version: '0.1.0' })
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
  },
}
