import {
  isXyzId,
  eidFromId,
  getXyzItem,
  getXyzItems,
  hasXyzAudio,
  xyzLocalPath,
  proxyStream,
  proxyCover,
} from '../xyz.js'

function enrichXyzItem(item) {
  if (!item) return null
  const eid = item.eid || eidFromId(item.id)
  const localFile = hasXyzAudio(eid) ? xyzLocalPath(eid) : null
  return {
    ...item,
    source: 'xyz',
    ...(localFile ? { file: localFile } : {}),
  }
}

export const XyzProvider = {
  id: 'xyz',
  matches(id) {
    return isXyzId(id)
  },
  getEpisode(id) {
    return enrichXyzItem(getXyzItem(id))
  },
  listEpisodes() {
    return getXyzItems().map(enrichXyzItem).filter(Boolean)
  },
  streamAudio(id, req, res) {
    return proxyStream(id, req, res)
  },
  streamCover(id, req, res) {
    return proxyCover(id, req, res)
  },
}
