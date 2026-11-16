// 识别完之后的「再断句」。
//
// 语音识别出来的分段是按模型自己的声学块来的：本地引擎尤其碎，常常一行只有两三个词，
// 一句话被劈成好几行，行尾还没有标点。翻译是按行送进模型的，碎片行会带来两个问题：
//   1. 小模型看到一堆不成句的短行，会自作主张把几行并成一行，编号一乱译文就整体错位；
//   2. 一行半句话翻出来的东西读着别扭，播放器里也没法当字幕用。
//
// 所以识别完成后先做一遍整理：
//   · 先把每行按句末标点拆成「句」；
//   · 再把相邻的碎片按「上一句没说完 + 行间几乎没停顿」拼回整句；
//   · 时间轴按字数比例在原来的起止时间之间重新分摊。
// 没有任何标点的音频靠停顿兜底：行间隔超过 maxPause 就当作句子边界。
const STRONG_END = /[。．！？!?…‼⁇]/
const CLOSER = /[」』）)】》〉”’"'\]]/
const SEMI = /[；;]/
// 英文里的句号要当心小数点和缩写：「3.5」「Mr.」「U.S.」都不是句末。
const ABBREV = /(?:\b(?:mr|mrs|ms|dr|st|jr|sr|prof|vs|etc|approx|dept|est|fig|vol|no)|\b[a-z])\.$/i

const DEFAULTS = {
  // 一句话最多拼多长（字符数）。宁可长一点也不要把句子劈成两半——劈开了翻译就更难。
  maxChars: 168,
  // 一句话最长占用多少秒。太长了播放器跟读会累，超过就断开。
  maxDuration: 16,
  // 两行之间超过这个间隔（秒）就当成句子边界，不再往一起拼。
  maxPause: 0.6,
}

function round2(value) {
  return Math.round((Number(value) || 0) * 100) / 100
}

/**
 * 只按标点拆句，不做长度限制（长度限制在合并那一步做）。
 * 句末标点后面的右引号/右括号跟在同一句里；连续的省略号当作一个整体。
 */
export function splitSentences(text) {
  const chars = Array.from(String(text || ''))
  const parts = []
  let buffer = ''
  const flush = () => {
    const piece = buffer.trim()
    if (piece) parts.push(piece)
    buffer = ''
  }
  for (let index = 0; index < chars.length; index += 1) {
    const char = chars[index]
    const next = chars[index + 1] || ''
    const prev = chars[index - 1] || ''
    buffer += char
    if (CLOSER.test(char)) {
      // 右引号/右括号跟着上一句一起收尾。
      if (STRONG_END.test(prev) || prev === '.') flush()
      continue
    }
    if (STRONG_END.test(char)) {
      if (next === char) continue
      if (CLOSER.test(next)) continue
      flush()
      continue
    }
    if (char === '.') {
      // 只有「后面是空白或到结尾」的点才可能是句末；小数、网址里的点不收。
      if (next && !/\s/.test(next)) continue
      if (ABBREV.test(buffer.trimEnd())) continue
      flush()
    }
  }
  flush()
  return parts
}

function sliceText(text, maxChars) {
  const pieces = []
  let rest = String(text || '')
  while (rest.length > maxChars) {
    const window = rest.slice(0, maxChars)
    let cut = maxChars
    const space = window.lastIndexOf(' ')
    if (space >= maxChars * 0.6) {
      cut = space + 1
    } else {
      const punct = Math.max(window.lastIndexOf('，'), window.lastIndexOf('、'), window.lastIndexOf(','), window.lastIndexOf('；'))
      if (punct >= maxChars * 0.5) cut = punct + 1
    }
    pieces.push(rest.slice(0, cut))
    rest = rest.slice(cut)
  }
  if (rest) pieces.push(rest)
  return pieces.map((piece) => piece.trim()).filter(Boolean)
}

// 一「句」如果长到超过时长/字数上限（比如整段没有标点），就在句子内部再切，时间按字数分摊。
function explodeUnit(unit, config) {
  const text = String(unit.text || '').trim()
  if (!text) return []
  const span = Math.max(Number(unit.end) - Number(unit.start), 0.2)
  if (text.length <= config.maxChars && span <= config.maxDuration) return [{ ...unit, text }]
  const ratio = Math.min(1, config.maxDuration / span)
  const budget = Math.max(12, Math.floor(text.length * ratio))
  const pieces = sliceText(text, Math.min(config.maxChars, budget))
  if (pieces.length <= 1) return [{ ...unit, text }]
  const total = pieces.reduce((sum, piece) => sum + piece.length, 0) || 1
  let cursor = Number(unit.start) || 0
  return pieces.map((piece, index) => {
    const start = round2(cursor)
    cursor += (piece.length / total) * span
    const isLast = index === pieces.length - 1
    const end = round2(isLast ? Number(unit.end) : Math.max(cursor, start + 0.2))
    return { start, end: Math.max(end, round2(start + 0.2)), text: piece, speaker: unit.speaker ?? null }
  })
}

function endsSentence(text) {
  const trimmed = String(text || '').trimEnd()
  if (!trimmed) return true
  const last = trimmed[trimmed.length - 1]
  if (CLOSER.test(last)) {
    const prev = trimmed[trimmed.length - 2] || ''
    return STRONG_END.test(prev) || prev === '.'
  }
  if (STRONG_END.test(last) || SEMI.test(last)) return true
  if (last === '.') return !ABBREV.test(trimmed)
  return false
}

function joinText(left, right) {
  const a = String(left || '')
  const b = String(right || '')
  if (!a) return b
  if (!b) return a
  // 两个拉丁词之间补一个空格，中文/日文直接拼。
  return /[A-Za-z0-9,.;:!?)]$/.test(a) && /^[A-Za-z0-9('"]/.test(b) ? `${a} ${b}` : a + b
}

function canMerge(prev, next, config) {
  if (endsSentence(prev.text)) return false
  const gap = Number(next.start) - Number(prev.end)
  if (!(gap >= -0.3 && gap <= config.maxPause)) return false
  if (Number(prev.end) - Number(prev.start) >= config.maxDuration) return false
  if (String(prev.text).length + String(next.text).length > config.maxChars) return false
  // 说话人分离的结果不能混成一行。
  if (prev.speaker != null && next.speaker != null && prev.speaker !== next.speaker) return false
  return true
}

/**
 * 把识别出来的碎片行整理成整句。
 * @param {Array<{start: number, end: number, text: string, speaker?: number|null}>} lines
 * @returns {Array<{id: number, start: number, end: number, text: string, speaker: number|null, translations: {}}>}
 */
export function resegmentLines(lines, options = {}) {
  const config = { ...DEFAULTS, ...(options || {}) }
  const units = []
  for (const line of Array.isArray(lines) ? lines : []) {
    const text = String(line?.text || '').trim()
    if (!text) continue
    const start = Number(line.start) || 0
    const rawEnd = Number(line.end)
    const end = Number.isFinite(rawEnd) && rawEnd > start ? rawEnd : start + 0.4
    const parts = splitSentences(text)
    if (!parts.length) continue
    const total = parts.reduce((sum, part) => sum + part.length, 0) || 1
    const span = Math.max(end - start, 0.2)
    let cursor = start
    parts.forEach((part, index) => {
      const share = (part.length / total) * span
      const unitStart = round2(cursor)
      cursor += share
      const isLast = index === parts.length - 1
      const unitEnd = round2(isLast ? end : Math.max(cursor, unitStart + 0.2))
      units.push(
        ...explodeUnit(
          {
            start: unitStart,
            end: Math.max(unitEnd, round2(unitStart + 0.2)),
            text: part,
            speaker: line.speaker ?? null,
          },
          config,
        ),
      )
    })
  }

  const merged = []
  for (const unit of units) {
    const prev = merged[merged.length - 1]
    if (prev && canMerge(prev, unit, config)) {
      prev.text = joinText(prev.text, unit.text)
      prev.end = unit.end
      if (prev.speaker == null) prev.speaker = unit.speaker ?? null
      continue
    }
    merged.push({ ...unit })
  }

  return merged.map((line, index) => ({
    id: index + 1,
    start: round2(line.start),
    end: round2(line.end),
    text: line.text,
    speaker: line.speaker ?? null,
    translations: {},
  }))
}
