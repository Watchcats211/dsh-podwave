// 小宇宙（Xiaoyuzhou FM）接入：登录、订阅、单集、音频代理。
// 私有接口逆向自公开客户端，仅用于用户本人账号的收听与本地转写；接口可能随时变化。
import fs from 'node:fs'
import { createWriteStream } from 'node:fs'
import { mkdir, rename, rm } from 'node:fs/promises'
import path from 'node:path'
import { DATA_DIR } from './state.js'

const CONFIG_PATH = path.join(DATA_DIR, 'xyz.json')
const ITEMS_PATH = path.join(DATA_DIR, 'xyz-items.json')
const BASE = 'https://api.xiaoyuzhoufm.com'
const TIMEOUT = 20000
const BROWSER_UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'

let config = { accessToken: '', refreshToken: '', deviceId: '', profile: null }
let items = new Map()
let refreshing = null
let lastRefreshAuthFailed = false
const SUBS_CACHE_TTL = 10 * 60 * 1000
let subsCache = null
let subsCachedAt = 0

export function loadXyz() {
  try { config = { ...config, ...JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8')) } } catch { /* 未登录 */ }
  try {
    const raw = JSON.parse(fs.readFileSync(ITEMS_PATH, 'utf8'))
    items = new Map((raw.items || []).map((item) => [item.id, item]))
  } catch { items = new Map() }
}

function saveConfig() {
  fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), { mode: 0o600 })
}

function saveItems() {
  fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(ITEMS_PATH, JSON.stringify({ items: [...items.values()].slice(-200) }, null, 2))
}

function appHeaders(extra = {}) {
  return {
    'user-agent': 'Xiaoyuzhou/2.99.1(android 28)',
    applicationid: 'app.podcast.cosmos',
    'app-version': '2.99.1',
    'app-buildno': '1362',
    os: 'android',
    'os-version': '28',
    manufacturer: 'Xiaomi',
    model: 'MI 6',
    resolution: '1080x1920',
    market: 'xiaomi',
    webviewversion: '138.0.7204.179',
    'app-permissions': '100100',
    wificonnected: 'false',
    timezone: 'Asia/Shanghai',
    'local-time': new Date().toISOString().replace('Z', '+0800'),
    'sentry-trace': '00000000000000000000000000000000-0000000000000000-0',
    'content-type': 'application/json;charset=utf-8',
    'accept-encoding': 'gzip',
    ...(config.deviceId ? { 'x-jike-device-id': config.deviceId } : {}),
    ...(config.accessToken ? { 'x-jike-access-token': config.accessToken } : {}),
    ...extra,
  }
}

async function rawRequest(pathname, { method = 'POST', body, headers = {}, auth = true, base = BASE } = {}) {
  const merged = auth ? appHeaders(headers) : { 'content-type': 'application/json;charset=utf-8', 'user-agent': 'Xiaoyuzhou/2.99.1(android 28)', ...headers }
  const res = await fetch(base + pathname, {
    method,
    headers: merged,
    body: body === undefined ? undefined : JSON.stringify(body),
    signal: AbortSignal.timeout(TIMEOUT),
  })
  return res
}

async function request(pathname, { method = 'POST', body, auth = true } = {}) {
  let res = await rawRequest(pathname, { method, body, auth })
  if (res.status === 401 && auth) {
    let ok = false
    if (config.refreshToken) {
      lastRefreshAuthFailed = false
      ok = await refreshToken()
      if (ok) res = await rawRequest(pathname, { method, body, auth })
    }
    if (!ok && res.status === 401) {
      const definitive = lastRefreshAuthFailed || !config.refreshToken
      if (definitive) {
        config.accessToken = ''
        if (lastRefreshAuthFailed) config.refreshToken = ''
        config.profile = null
        saveConfig()
        const expired = new Error('登录已失效，请重新粘贴 token')
        expired.status = 401
        expired.code = 'AUTH_EXPIRED'
        throw expired
      }
    }
  }
  const text = await res.text()
  let data = null
  try { data = text ? JSON.parse(text) : null } catch { /* 非 JSON */ }
  if (!res.ok) {
    const message = data?.toast || data?.message || data?.error || `HTTP ${res.status}`
    const error = new Error(message)
    error.status = res.status
    throw error
  }
  return data
}

export async function refreshToken() {
  if (!config.refreshToken) return false
  if (refreshing) return refreshing
  refreshing = (async () => {
    try {
      const res = await fetch(`${BASE}/app_auth_tokens.refresh`, {
        method: 'POST',
        headers: appHeaders(),
        signal: AbortSignal.timeout(TIMEOUT),
      })
      const access = res.headers.get('x-jike-access-token')
      const refresh = res.headers.get('x-jike-refresh-token')
      if (res.ok && access) {
        config.accessToken = access
        if (refresh) config.refreshToken = refresh
        saveConfig()
        return true
      }
      if (res.status === 401 || res.status === 403) lastRefreshAuthFailed = true
      return false
    } catch {
      return false
    } finally {
      refreshing = null
    }
  })()
  return refreshing
}

export function xyzStatus() {
  loadXyz()
  return {
    loggedIn: Boolean(config.refreshToken || config.accessToken),
    profile: config.profile,
    deviceId: config.deviceId || '',
    subscriptionsUpdatedAt: subsCachedAt ? new Date(subsCachedAt).toISOString() : null,
  }
}

export async function sendCode(phone, areaCode = '+86') {
  const data = await request('/v1/auth/sendCode', { body: { mobilePhoneNumber: phone, areaCode }, auth: false })
  return data
}

export async function loginWithSms(phone, code, areaCode = '+86') {
  const res = await rawRequest('/v1/auth/loginOrSignUpWithSMS', { body: { areaCode, verifyCode: code, mobilePhoneNumber: phone }, auth: false })
  const text = await res.text()
  let data = null
  try { data = JSON.parse(text) } catch { data = null }
  if (!res.ok) {
    const message = data?.toast || data?.message || `登录失败（HTTP ${res.status}）`
    throw new Error(message)
  }
  const access = res.headers.get('x-jike-access-token')
  const refresh = res.headers.get('x-jike-refresh-token')
  const device = res.headers.get('x-jike-device-id')
  if (!access) throw new Error('登录响应里没有 token，接口可能已变化')
  config = {
    accessToken: access,
    refreshToken: refresh || config.refreshToken,
    deviceId: device || config.deviceId,
    profile: data?.data?.user || data?.user || null,
  }
  saveConfig()
  try { await ensureProfile() } catch { /* 忽略 */ }
  return xyzStatus()
}

export function normalizeTokenInput(raw) {
  const text = String(raw || '').trim()
  if (!text) return ''
  if (text.startsWith('{') || text.startsWith('[')) {
    try {
      const parsed = JSON.parse(text)
      const keys = ['x-jike-refresh-token', 'refreshToken', 'refresh_token', 'x-jike-access-token', 'accessToken', 'access_token', 'token']
      for (const key of keys) {
        const value = parsed?.[key] ?? parsed?.headers?.[key]
        if (typeof value === 'string' && value.trim()) return value.trim()
      }
    } catch {
      /* not JSON, fall through */
    }
  }
  const headerMatch = /x-jike-(?:refresh|access)-token\s*[:=]\s*["']?([^\s,;"'}]+)/i.exec(text)
  if (headerMatch) return headerMatch[1]
  let value = text.replace(/^bearer\s+/i, '')
  const lines = value.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
  if (lines.length) value = lines[lines.length - 1]
  return value.replace(/^["']|["']$/g, '').replace(/[;,]+$/, '')
}

export async function loginWithRefreshToken(refreshTokenValue, deviceId = '') {
  const value = normalizeTokenInput(refreshTokenValue)
  if (!value) throw new Error('请粘贴 refresh token 或 access token')
  config.refreshToken = value
  config.deviceId = String(deviceId || '').trim()
  config.accessToken = ''
  const ok = await refreshToken()
  if (!ok) {
    // 有些用户只能拿到 access token；拿它直接试一次 profile，成功也能临时使用。
    config.refreshToken = ''
    config.accessToken = value
    try {
      await ensureProfile()
      saveConfig()
      return xyzStatus()
    } catch {
      config.accessToken = ''
      saveConfig()
      throw new Error('token 无效或已过期，请重新获取（refresh token 或 access token 都可以）')
    }
  }
  saveConfig()
  await ensureProfile()
  return xyzStatus()
}

export async function ensureProfile() {
  const data = await request('/v1/profile/get', { method: 'GET' })
  config.profile = data?.data || data || null
  saveConfig()
  return config.profile
}

export function logout() {
  config = { accessToken: '', refreshToken: '', deviceId: '', profile: null }
  saveConfig()
  return xyzStatus()
}

export async function getSubscriptions({ refresh = false } = {}) {
  if (!refresh && subsCache && Date.now() - subsCachedAt < SUBS_CACHE_TTL) return subsCache
  const data = await request('/v1/subscription', { body: { limit: 200 } })
  const rows = data?.data || []
  const items = rows
    .map((row) => row.podcast || row)
    .filter((pod) => pod && pod.pid)
    .map((pod) => ({
      pid: pod.pid,
      title: pod.title,
      author: pod.author || '',
      brief: pod.brief || '',
      cover: pod.image?.picUrl || pod.image?.smallPicUrl || '',
      subscribers: pod.subscribersCount || 0,
      updatedAt: pod.latestEpisodePubDate || pod.updatedAt || '',
    }))
  subsCache = items
  subsCachedAt = Date.now()
  return items
}

export function subscriptionsCachedAt() {
  return subsCachedAt
}

export async function getPodcastEpisodes(pid, { limit = 30, loadMoreKey = null } = {}) {
  const body = { pid, limit, order: 'desc' }
  if (loadMoreKey) body.loadMoreKey = loadMoreKey
  const data = await request('/v1/episode/list', { body })
  const rows = data?.data || []
  return {
    items: rows.map((ep) => mapEpisode(ep)),
    loadMoreKey: data?.loadMoreKey || null,
  }
}

export async function getEpisode(eid) {
  const data = await request('/v1/episode/get', { body: { eid } })
  return mapEpisode(data?.data || data)
}

function mapEpisode(ep) {
  if (!ep) return null
  const podcast = ep.podcast || {}
  return {
    eid: ep.eid,
    pid: ep.pid || podcast.pid || '',
    title: ep.title || '',
    podcastTitle: podcast.title || ep.podcastTitle || '',
    duration: Number(ep.duration || 0),
    pubDate: ep.pubDate || '',
    cover: podcast.image?.picUrl || podcast.image?.smallPicUrl || '',
    shownotes: ep.shownotes || ep.description || '',
    isPrivate: Boolean(ep.isPrivateMedia),
    audioUrl: ep.enclosure?.url || ep.media?.source?.url || '',
    payType: ep.payType || '',
  }
}

const PUBLIC_CACHE = new Map() // pid -> { fetchedAt, data }
const PUBLIC_TTL = 10 * 60 * 1000

export function extractPid(input) {
  const value = String(input || '').trim()
  if (/^[0-9a-f]{24}$/i.test(value)) return value
  const match = value.match(/xiaoyuzhoufm\.com\/podcast\/([0-9a-f]{24})/i)
  return match ? match[1] : ''
}

function parseNextData(html) {
  const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/)
  if (!match) return null
  try {
    return JSON.parse(match[1])
  } catch {
    return null
  }
}

function mapPublicEpisode(ep, pid, podcastTitle) {
  return {
    eid: ep.eid,
    pid,
    title: ep.title || '未命名单集',
    duration: ep.duration || 0,
    pubDate: ep.pubDate || '',
    cover: ep.image?.picUrl || '',
    podcastTitle,
    audioUrl: ep.enclosure?.url || ep.media?.source?.url || '',
    isPrivate: Boolean(ep.isPrivateMedia) || (ep.payType && ep.payType !== 'FREE'),
    payType: ep.payType || '',
    shownotes: ep.shownotes || '',
  }
}

export async function getPublicPodcast(input) {
  const pid = extractPid(input)
  if (!pid) throw new Error('请输入播客链接（xiaoyuzhoufm.com/podcast/…）或 24 位 pid')
  const cached = PUBLIC_CACHE.get(pid)
  if (cached && Date.now() - cached.fetchedAt < PUBLIC_TTL) return cached.data
  const res = await fetch(`https://www.xiaoyuzhoufm.com/podcast/${pid}`, {
    headers: { 'user-agent': BROWSER_UA, 'accept-language': 'zh-CN,zh;q=0.9' },
    signal: AbortSignal.timeout(20000),
  })
  if (!res.ok) throw new Error(`获取播客页面失败（${res.status}）`)
  const nextData = parseNextData(await res.text())
  const podcast = nextData?.props?.pageProps?.podcast
  if (!podcast) throw new Error('页面里没有找到播客数据，可能链接不对')
  const data = {
    pid: podcast.pid,
    title: podcast.title || '未命名播客',
    author: podcast.author || '',
    brief: podcast.brief || '',
    cover: podcast.image?.picUrl || '',
    episodeCount: podcast.episodeCount || 0,
    episodes: (podcast.episodes || []).map((ep) => mapPublicEpisode(ep, podcast.pid, podcast.title)),
  }
  PUBLIC_CACHE.set(pid, { fetchedAt: Date.now(), data })
  return data
}

export function playPublicEpisode(pid, eid) {
  const cached = PUBLIC_CACHE.get(String(pid))
  const episode = cached?.data?.episodes?.find((item) => item.eid === eid)
  if (!episode) throw new Error('请先加载播客单集')
  if (episode.isPrivate) throw new Error('付费单集暂不支持在线播放')
  if (!episode.audioUrl) throw new Error('该单集没有公开音频（可能是付费内容）')
  const id = xyzId(eid)
  const item = {
    id,
    eid,
    pid: String(pid),
    source: 'xyz',
    title: episode.title,
    artist: cached.data.title,
    album: cached.data.title,
    duration: episode.duration,
    mtime: episode.pubDate ? Date.parse(episode.pubDate) : Date.now(),
    addedAt: Date.now(),
    hasCover: Boolean(episode.cover),
    location: '小宇宙',
    remote: true,
    public: true,
    audioUrl: episode.audioUrl,
    cover: episode.cover,
  }
  items.set(id, item)
  saveItems()
  return item
}

function xyzId(eid) {
  return `xyz${eid}`
}

export function isXyzId(id) {
  return String(id || '').startsWith('xyz') && String(id).length > 3
}

export function eidFromId(id) {
  return String(id).slice(3)
}

export async function resolveAudioUrl(eid) {
  const item = items.get(xyzId(eid))
  if (item?.audioUrl) return item.audioUrl
  const ep = await getEpisode(eid)
  if (!ep) throw new Error('单集不存在')
  if (ep.audioUrl) return ep.audioUrl
  if (ep.isPrivate) {
    const data = await request('/v1/private-media/get', { body: { eid } })
    const url = data?.data?.url || data?.url
    if (url) return url
  }
  throw new Error('没有可用的音频地址（可能是付费单集）')
}

export async function playEpisode(eid) {
  const ep = await getEpisode(eid)
  if (!ep) throw new Error('单集不存在')
  const id = xyzId(eid)
  const item = {
    id,
    eid,
    source: 'xyz',
    title: ep.title,
    artist: ep.podcastTitle,
    album: ep.podcastTitle,
    duration: ep.duration,
    mtime: ep.pubDate ? Date.parse(ep.pubDate) : Date.now(),
    addedAt: Date.now(),
    hasCover: Boolean(ep.cover),
    location: '小宇宙',
    remote: true,
  }
  items.set(id, item)
  saveItems()
  return item
}

export function getXyzItems() {
  return [...items.values()]
}

export function getXyzItem(id) {
  return items.get(id) || null
}

export function removeXyzItem(id) {
  items.delete(id)
  saveItems()
}

export async function proxyStream(id, req, res) {
  const eid = eidFromId(id)
  const url = await resolveAudioUrl(eid)
  const headers = {}
  if (req.headers.range) headers.range = req.headers.range
  const upstream = await fetch(url, { headers: { 'user-agent': BROWSER_UA, ...headers }, signal: AbortSignal.timeout(120000) })
  const pass = {}
  for (const key of ['content-type', 'content-length', 'content-range', 'accept-ranges', 'last-modified', 'etag']) {
    const value = upstream.headers.get(key)
    if (value) pass[key] = value
  }
  if (!pass['content-type']) pass['content-type'] = 'audio/mp4'
  pass['cache-control'] = 'private, max-age=3600'
  res.writeHead(upstream.status, pass)
  if (!upstream.body) { res.end(); return }
  const reader = upstream.body.getReader()
  try {
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      if (!res.write(Buffer.from(value))) await new Promise((resolve) => res.once('drain', resolve))
    }
  } finally {
    res.end()
  }
}

export async function proxyCover(id, req, res) {
  const item = items.get(id)
  if (!item) { res.writeHead(404); res.end(); return }
  let cover = item.cover || ''
  if (!cover) {
    const ep = await getEpisode(item.eid)
    cover = ep?.cover
  }
  if (!cover) { res.writeHead(404); res.end(); return }
  const upstream = await fetch(cover, { signal: AbortSignal.timeout(30000) })
  if (!upstream.ok) { res.writeHead(upstream.status); res.end(); return }
  res.writeHead(200, {
    'content-type': upstream.headers.get('content-type') || 'image/jpeg',
    'cache-control': 'private, max-age=86400',
  })
  res.end(Buffer.from(await upstream.arrayBuffer()))
}

export const XYZ_MEDIA_DIR = path.join(DATA_DIR, 'xyz-media')

export function xyzLocalPath(eid) {
  return path.join(XYZ_MEDIA_DIR, `${eid}.m4a`)
}

export function hasXyzAudio(eid) {
  try {
    return fs.statSync(xyzLocalPath(eid)).size > 0
  } catch {
    return false
  }
}

export async function downloadUrlToFile(url, dest, onProgress, { headers = {} } = {}) {
  const res = await fetch(url, { headers: { 'user-agent': BROWSER_UA, ...headers }, signal: AbortSignal.timeout(30 * 60 * 1000) })
  if (!res.ok) throw new Error(`下载音频失败（${res.status}）`)
  const total = Number(res.headers.get('content-length') || 0)
  await mkdir(path.dirname(dest), { recursive: true })
  const tmp = `${dest}.part`
  const file = createWriteStream(tmp)
  const reader = res.body.getReader()
  let received = 0
  try {
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      received += value.byteLength
      if (!file.write(Buffer.from(value))) await new Promise((resolve) => file.once('drain', resolve))
      if (typeof onProgress === 'function') {
        onProgress(total ? Math.min(99, Math.round((received / total) * 100)) : null, received, total)
      }
    }
  } finally {
    file.end()
  }
  await new Promise((resolve, reject) => file.on('finish', resolve).on('error', reject))
  if (total && received !== total) {
    await rm(tmp, { force: true })
    throw new Error('下载不完整，请重试')
  }
  await rename(tmp, dest)
  return dest
}

export async function ensureEpisodeAudio(eid, { onProgress } = {}) {
  const dest = xyzLocalPath(eid)
  if (hasXyzAudio(eid)) return dest
  const url = await resolveAudioUrl(eid)
  return downloadUrlToFile(url, dest, onProgress)
}
