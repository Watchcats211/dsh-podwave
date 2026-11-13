import { getEpisode, getEpisodes, getCoverPath } from '../library.js'

export const LocalProvider = {
  id: 'local',
  matches(id) {
    return Boolean(id && !String(id).startsWith('xyz'))
  },
  getEpisode(id) {
    const ep = getEpisode(id)
    return ep ? { ...ep, source: 'local' } : null
  },
  listEpisodes() {
    return getEpisodes().map((ep) => ({ ...ep, source: 'local' }))
  },
  getCoverPath(id) {
    return getCoverPath(id)
  },
}
