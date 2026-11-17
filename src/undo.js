// 字幕撤销栈：每次会改动字幕的操作之前，把整份字幕拍一份快照存到磁盘。
// 落盘是重点 —— 原来只存在内存里，关掉插件就全没了，用户根本感觉不到这个功能存在。
// 快照按集分文件，最多留 MAX_STEPS 步、总体积不超过 MAX_BYTES，超了从最老的开始扔。
//
// 内存里同时留一份副本（cache）：这样「拍完立刻就能列出来」，不用等异步落盘。
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import { DATA_DIR } from './state.js'

const UNDO_DIR = path.join(DATA_DIR, 'transcripts', '.undo')
const MAX_STEPS = 12
const MAX_BYTES = 6 * 1024 * 1024
const MAX_AGE_MS = 30 * 24 * 3600 * 1000

const cache = new Map()

// 单集 id 形如 sha1 前 16 位或 `xyz<eid>`，都只含字母数字下划线短横。
// 这里不做「清洗」而是「校验」：带路径分隔符的 id 一律不认，免得被拼出奇怪路径。
function safeId(id) {
  const text = String(id || '')
  return /^[A-Za-z0-9_-]+$/.test(text) ? text : ''
}

function undoFile(id) {
  const name = safeId(id)
  return name ? path.join(UNDO_DIR, `${name}.json`) : ''
}

function snapshotOf(transcript) {
  return {
    lines: JSON.parse(JSON.stringify(transcript?.lines || [])),
    providers: { ...(transcript?.providers || {}) },
    text: String(transcript?.text || ''),
    language: String(transcript?.language || ''),
  }
}

function readFromDisk(id) {
  const file = undoFile(id)
  if (!file) return []
  try {
    const raw = JSON.parse(fs.readFileSync(file, 'utf8'))
    const steps = Array.isArray(raw?.steps) ? raw.steps : []
    const now = Date.now()
    return steps.filter((step) => step && Array.isArray(step.lines) && now - Number(step.at || 0) < MAX_AGE_MS)
  } catch {
    return []
  }
}

function loadSteps(id) {
  const key = safeId(id)
  if (!key) return []
  if (cache.has(key)) return cache.get(key)
  const steps = readFromDisk(key)
  cache.set(key, steps)
  return steps
}

function persist(id, steps) {
  const key = safeId(id)
  const file = undoFile(key)
  if (!key || !file) return
  cache.set(key, steps)
  try {
    if (!steps.length) {
      fs.rmSync(file, { force: true })
      return
    }
    fs.mkdirSync(UNDO_DIR, { recursive: true })
    const temp = `${file}.tmp`
    fs.writeFileSync(temp, JSON.stringify({ version: 1, steps }), 'utf8')
    fs.renameSync(temp, file)
  } catch {
    // 落盘失败不影响本次会话里的撤销
  }
}

function stepBytes(step) {
  try {
    return Buffer.byteLength(JSON.stringify(step), 'utf8')
  } catch {
    return 0
  }
}

/**
 * 在改动之前拍快照。action 是给人看的动作名（改行 / 拆分 / 合并 / 整理断句 / 翻译 …）。
 * 返回压入后的步数。
 */
export function pushUndo(id, transcript, action = '修改') {
  if (!id || !transcript || !safeId(id)) return 0
  const steps = [...loadSteps(id)]
  steps.push({
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    at: Date.now(),
    action: String(action || '修改').slice(0, 24),
    ...snapshotOf(transcript),
  })
  while (steps.length > MAX_STEPS) steps.shift()
  let total = steps.reduce((sum, step) => sum + stepBytes(step), 0)
  while (steps.length > 1 && total > MAX_BYTES) {
    total -= stepBytes(steps[0])
    steps.shift()
  }
  persist(id, steps)
  return steps.length
}

/** 给前端看的列表：不带 lines，只带能显示的信息；最新的排最前。 */
export function listUndo(id) {
  return loadSteps(id)
    .map((step) => ({
      id: step.id,
      at: step.at,
      action: step.action,
      lineCount: Array.isArray(step.lines) ? step.lines.length : 0,
    }))
    .reverse()
}

/**
 * 回到某一步之前。stepId 省略时退一步。
 * 语义：栈里每条都是「做这个动作之前」的样子，回到第 index 条就把那条及其之后的都丢掉。
 */
export function takeUndo(id, stepId = '') {
  const steps = loadSteps(id)
  if (!steps.length) return null
  let index = steps.length - 1
  if (stepId) {
    const found = steps.findIndex((step) => step.id === stepId)
    if (found < 0) return null
    index = found
  }
  const target = steps[index]
  const kept = steps.slice(0, index)
  persist(id, kept)
  return {
    action: target.action,
    lines: target.lines,
    providers: target.providers || {},
    text: target.text || '',
    language: target.language || '',
    remaining: kept.length,
  }
}

export async function clearUndo(id) {
  const key = safeId(id)
  const file = undoFile(key)
  if (!key || !file) return
  cache.delete(key)
  try {
    await fsp.rm(file, { force: true })
  } catch {
    // 删不掉不影响主流程
  }
}

/** 启动时清一遍太久没动的快照，别让 .undo 慢慢变成垃圾场。 */
export async function pruneUndo() {
  try {
    const names = await fsp.readdir(UNDO_DIR)
    const now = Date.now()
    for (const name of names) {
      if (!name.endsWith('.json')) continue
      const file = path.join(UNDO_DIR, name)
      try {
        const info = await fsp.stat(file)
        if (now - info.mtimeMs > MAX_AGE_MS) {
          await fsp.rm(file, { force: true })
          cache.delete(name.slice(0, -'.json'.length))
        }
      } catch {
        // 单个文件异常就跳过
      }
    }
  } catch {
    // 目录还不存在，正常
  }
}

export const UNDO_STEPS = MAX_STEPS
export const UNDO_DIR_PATH = UNDO_DIR
