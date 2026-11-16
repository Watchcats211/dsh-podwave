// 媒体库的目录树：单集只带相对于「根文件夹」的 rel 路径（'' 就是根目录本身），
// 这里据此算出当前目录下有哪些子文件夹，以及面包屑要怎么排。
// 单独抽出来是为了能在 node 里直接测（组件本身要跑 React 才测得了）。

export function normalizeRel(rel) {
  return String(rel || '')
    .replace(/\\/g, '/')
    .replace(/^\/+|\/+$/g, '')
}

// 列出 currentRel 这一层里出现过的直接子文件夹，按名称排序，并统计每个文件夹下的音频数量（含更深层）。
export function childDirs(items, currentRel) {
  const current = normalizeRel(currentRel)
  const prefix = current ? `${current}/` : ''
  const map = new Map()
  for (const item of items) {
    const rel = normalizeRel(item?.rel)
    if (!rel) continue
    if (prefix && !rel.startsWith(prefix)) continue
    const rest = rel.slice(prefix.length)
    const seg = rest.split('/')[0]
    if (!seg) continue
    const path = prefix ? `${prefix}${seg}` : seg
    const entry = map.get(path) || { rel: path, name: seg, count: 0 }
    entry.count += 1
    map.set(path, entry)
  }
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name, 'zh-Hans-CN'))
}

// 面包屑：第一段永远是根文件夹（rel 为 ''），后面按当前目录逐层拆开。
export function crumbsFor(rootLabel, currentRel) {
  const list = [{ rel: '', label: rootLabel }]
  const current = normalizeRel(currentRel)
  if (!current) return list
  let cursor = ''
  for (const seg of current.split('/').filter(Boolean)) {
    cursor = cursor ? `${cursor}/${seg}` : seg
    list.push({ rel: cursor, label: seg })
  }
  return list
}

// 当前目录这一层直接放着的单集（不含子目录里的）。
export function itemsInDir(items, currentRel) {
  const current = normalizeRel(currentRel)
  return items.filter((item) => normalizeRel(item?.rel) === current)
}
