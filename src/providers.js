/**
 * Podwave 统一数据结构定义与适配器注册中心
 */
import { LocalProvider } from './providers/local.js'
import { XyzProvider } from './providers/xyz.js'

export const providers = new Map()

export function registerProvider(source, provider) {
  providers.set(source, provider)
}

export function getProvider(episodeOrSource) {
  const source =
    typeof episodeOrSource === 'string'
      ? episodeOrSource
      : episodeOrSource?.source || 'local'
  return providers.get(source) || LocalProvider
}

export function getProviderById(id) {
  // 先让显式适配器匹配，local 只作为兜底：这样以后新增 RSS/喜马拉雅等来源时，
  // 不会被“什么 id 都认领”的本地适配器抢先匹配。
  const list = [...providers.values()]
  const fallback = list.find((provider) => provider.id === 'local') || LocalProvider
  for (const provider of list) {
    if (provider !== fallback && typeof provider.matches === 'function' && provider.matches(id)) {
      return provider
    }
  }
  return fallback
}

export function findEpisode(id) {
  if (!id) return null
  const primary = getProviderById(id)
  const found = primary.getEpisode(id)
  if (found) return found
  for (const provider of providers.values()) {
    if (provider === primary) continue
    const item = provider.getEpisode(id)
    if (item) return item
  }
  return null
}

export function listAllEpisodes() {
  const result = []
  for (const provider of providers.values()) {
    if (typeof provider.listEpisodes === 'function') {
      result.push(...provider.listEpisodes())
    }
  }
  return result
}

// 默认注册内置适配器（先匹配前缀明确的 xyz，再回退到 local）
registerProvider('xyz', XyzProvider)
registerProvider('local', LocalProvider)

export { LocalProvider, XyzProvider }
