// 说话人标签归一化 + 富文本清洗工具（前端复用）。
// 兼容数值索引（diarize.js: 0, 1, ...）与字符串标签（MOSS: "S01", "S02"）。

export function resolveSpeaker(speaker, speakers = []) {
  if (speaker === null || speaker === undefined || speaker === '') return null
  if (typeof speaker === 'number' && Number.isFinite(speaker)) {
    const idx = Math.max(0, Math.floor(speaker))
    const entry = Array.isArray(speakers) ? speakers[idx] || speakers.find((item) => item && item.id === idx) : null
    const label = entry && typeof entry === 'object' && entry.label ? entry.label : `说话人 ${idx + 1}`
    return { index: idx, label }
  }
  const str = String(speaker).trim()
  if (!str) return null
  if (Array.isArray(speakers)) {
    const objIdx = speakers.findIndex(
      (item) => item && typeof item === 'object' && (String(item.id) === str || String(item.raw) === str),
    )
    if (objIdx >= 0) {
      const entry = speakers[objIdx]
      return { index: Number.isFinite(Number(entry.id)) ? Number(entry.id) : objIdx, label: entry.label || `说话人 ${objIdx + 1}` }
    }
  }
  const mossMatch = /^S0*(\d+)$/i.exec(str)
  if (mossMatch) {
    const num = Math.max(1, Number(mossMatch[1]))
    return { index: num - 1, label: `说话人 ${num}` }
  }
  if (/^\d+$/.test(str)) {
    const idx = Number(str)
    return { index: idx, label: `说话人 ${idx + 1}` }
  }
  const arrIdx = Array.isArray(speakers) ? speakers.indexOf(str) : -1
  return { index: arrIdx >= 0 ? arrIdx : Math.abs(str.charCodeAt(0)) % 5, label: str }
}

// 清洗小宇宙等平台返回的 HTML shownotes，避免页面里直接裸露 <p> / <br> / &nbsp;。
export function stripHtml(raw) {
  const input = String(raw || '')
  if (!input) return ''
  return input
    .replace(/<\s*br\s*\/?>/gi, '\n')
    .replace(/<\/\s*(p|div|li|h[1-6]|blockquote)\s*>/gi, '\n')
    .replace(/<\s*li[^>]*>/gi, '• ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&#x27;/gi, "'")
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}
