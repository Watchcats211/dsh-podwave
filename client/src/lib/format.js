// 时间、时长、日期与标题的格式化工具。
export function fmtTime(value) {
  if (!Number.isFinite(value) || value < 0) return '0:00'
  const total = Math.floor(value)
  const hours = Math.floor(total / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const seconds = total % 60
  if (hours > 0) return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

export function fmtDuration(value) {
  if (!value) return '—'
  const hours = Math.floor(value / 3600)
  const minutes = Math.round((value % 3600) / 60)
  if (hours > 0) return `${hours} 小时 ${minutes} 分`
  return `${Math.max(1, minutes)} 分钟`
}

export function fmtDate(ms) {
  if (!ms) return ''
  const date = new Date(ms)
  const diff = Date.now() - ms
  if (diff < 60 * 1000) return '刚刚'
  if (diff < 60 * 60 * 1000) return `${Math.floor(diff / 60000)} 分钟前`
  if (diff < 24 * 60 * 60 * 1000) return `${Math.floor(diff / 3600000)} 小时前`
  if (diff < 7 * 24 * 60 * 60 * 1000) return `${Math.floor(diff / 86400000)} 天前`
  return `${date.getMonth() + 1} 月 ${date.getDate()} 日`
}

export function initialOf(title) {
  const text = String(title || '').trim()
  const match = text.match(/[A-Za-z\u3400-\u9fff]/)
  return match ? match[0].toUpperCase() : '♫'
}

export function shortPath(folder) {
  const parts = String(folder).split('/').filter(Boolean)
  if (parts.length <= 2) return `/${parts.join('/')}`
  return `${parts.slice(-2).join('/')}`
}

