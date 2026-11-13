// 版本检查：读取 npm registry 上的 latest，与当前 package.json 版本对比。
// 只在设置页按需检查，缓存 1 小时；离线或网络失败时返回 error，不阻塞界面。
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const REGISTRY = process.env.PODWAVE_UPDATE_REGISTRY || 'https://registry.npmjs.org'
const CACHE_TTL = 60 * 60 * 1000
const PKG_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'package.json')

let cache = null

export function currentVersion() {
  try {
    return JSON.parse(fs.readFileSync(PKG_PATH, 'utf8')).version || '0.0.0'
  } catch {
    return '0.0.0'
  }
}

export function compareVersions(left, right) {
  const parse = (value) => String(value || '')
    .replace(/^v/i, '')
    .split('-')[0]
    .split('.')
    .map((part) => Number.parseInt(part, 10) || 0)
  const a = parse(left)
  const b = parse(right)
  for (let i = 0; i < 3; i += 1) {
    if ((a[i] || 0) !== (b[i] || 0)) return (a[i] || 0) > (b[i] || 0) ? 1 : -1
  }
  return 0
}

export async function checkUpdate({ force = false } = {}) {
  const current = currentVersion()
  if (!force && cache && Date.now() - cache.checkedAt < CACHE_TTL) {
    return { ...cache, current }
  }
  try {
    const res = await fetch(`${REGISTRY}/dsh-podwave/latest`, {
      headers: { accept: 'application/json' },
      signal: AbortSignal.timeout(6000),
    })
    if (!res.ok) throw new Error(`registry ${res.status}`)
    const data = await res.json()
    const latest = String(data.version || '')
    const result = {
      current,
      latest,
      updateAvailable: Boolean(latest) && compareVersions(latest, current) > 0,
      checkedAt: Date.now(),
    }
    cache = result
    return result
  } catch (error) {
    return { current, latest: '', updateAvailable: false, checkedAt: Date.now(), error: String(error.message || error) }
  }
}

export function resetUpdateCache() {
  cache = null
}
