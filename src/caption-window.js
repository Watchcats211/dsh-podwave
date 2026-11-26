// 独立字幕窗（macOS）：编译并拉起 scripts/caption_window.swift，往它的 stdin 写 JSON 行。
//
// 为什么要有这个：实时字幕的用途是「看别的应用的时候也有字幕」，而插件界面跑在 DSH 的
// 渲染进程里，网页浮层永远盖不到别的应用上。原生小窗能置顶（.statusBar 层级）、
// 不抢焦点、所有 Space 都可见，这才是「全局小框」。
//
// 二进制在首次使用时编译到 <数据目录>/bin/podwave-caption（约 9 秒），
// 源码改了就重新编译；非 macOS 直接返回不支持，前端退回内置浮层。
import fs from 'node:fs'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { DATA_DIR } from './state.js'
import { isMac } from './platform.js'

const SOURCE = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'scripts', 'caption_window.swift')
const BIN_DIR = path.join(DATA_DIR, 'bin')
const BINARY = path.join(BIN_DIR, 'podwave-caption')

let child = null
let building = null
let lastError = ''
let lastFrame = null
let eventHandler = null

/** 窗口里的操作（拖滑块 / 点停止）通过 stdout 回给宿主，在这里注册处理函数。 */
export function onCaptionWindowEvent(handler) {
  eventHandler = typeof handler === 'function' ? handler : null
}

export function captionWindowSupport() {
  return { supported: isMac, reason: isMac ? '' : '独立字幕窗目前只支持 macOS（其它平台用内置浮层）' }
}

function needsBuild() {
  try {
    const sourceAt = fs.statSync(SOURCE).mtimeMs
    const binaryAt = fs.statSync(BINARY).mtimeMs
    return binaryAt < sourceAt
  } catch {
    return true
  }
}

async function ensureBuilt() {
  if (!isMac) throw new Error('独立字幕窗目前只支持 macOS')
  if (!fs.existsSync(SOURCE)) throw new Error('缺少 caption_window.swift（安装包不完整）')
  if (!needsBuild()) return BINARY
  if (building) return building
  building = (async () => {
    fs.mkdirSync(BIN_DIR, { recursive: true })
    const tmp = `${BINARY}.tmp-${process.pid}`
    await new Promise((resolve, reject) => {
      const job = spawn('xcrun', ['swiftc', '-O', '-parse-as-library', '-o', tmp, SOURCE, '-framework', 'Cocoa'], {
        stdio: ['ignore', 'pipe', 'pipe'],
      })
      let stderr = ''
      job.stdout.on('data', () => {})
      job.stderr.on('data', (chunk) => {
        stderr = (stderr + chunk.toString()).slice(-2000)
      })
      job.on('error', (error) => reject(new Error(`找不到 swiftc：${error.message}`)))
      job.on('close', (code) => {
        if (code === 0) resolve()
        else reject(new Error(`编译字幕窗失败（退出码 ${code}）：${stderr.split('\n').slice(-3).join(' ')}`))
      })
    })
    fs.renameSync(tmp, BINARY)
    fs.chmodSync(BINARY, 0o755)
    return BINARY
  })()
  try {
    return await building
  } catch (error) {
    lastError = error.message || String(error)
    throw error
  } finally {
    building = null
  }
}

/** 打开（或复用）独立字幕窗。首次调用会编译，约 9 秒。 */
/** 上一次的窗口进程如果还在（插件重载、宿主崩溃），先杀掉——否则会出现两个框。 */
function killStrayWindow() {
  let killed = false
  try {
    const file = path.join(DATA_DIR, 'live', 'window.pid')
    if (!fs.existsSync(file)) return false
    const pid = Number(fs.readFileSync(file, 'utf8').trim())
    if (Number.isInteger(pid) && pid > 1 && pid !== process.pid) {
      try {
        process.kill(pid, 'SIGTERM')
        killed = true
      } catch {
        /* 已经没了 */
      }
    }
    try {
      fs.rmSync(file, { force: true })
    } catch {
      /* ignore */
    }
  } catch {
    /* pid 文件坏了不影响开窗 */
  }
  return killed
}

export async function openCaptionWindow() {
  const support = captionWindowSupport()
  if (!support.supported) return { ok: false, error: support.reason }
  if (child && child.exitCode === null) return { ok: true, reused: true }
  killStrayWindow()
  try {
    await ensureBuilt()
  } catch (error) {
    return { ok: false, error: error.message }
  }
  child = spawn(BINARY, [], { stdio: ['pipe', 'pipe', 'pipe'] })
  const current = child
  current.stdout.on('data', (chunk) => {
    for (const line of chunk.toString().split('\n')) {
      const trimmed = line.trim()
      if (!trimmed.startsWith('{')) continue
      let payload = null
      try {
        payload = JSON.parse(trimmed)
      } catch {
        continue
      }
      if (payload.ready) {
        lastFrame = Date.now()
        continue
      }
      if (payload.event && eventHandler) {
        try {
          eventHandler(payload)
        } catch {
          /* 事件处理失败不影响窗口 */
        }
      }
    }
  })
  current.stderr.on('data', () => {})
  const forget = () => {
    if (child === current) child = null
  }
  current.on('exit', forget)
  current.on('error', (error) => {
    lastError = error.message || String(error)
    forget()
  })
  // 窗口创建要一两百毫秒，给一条占位，避免空白一闪。
  pushCaption({ text: '', status: 'idle', hint: '准备好了，播放声音就会出字幕' })
  return { ok: true }
}

/** 往窗口推一行状态；窗口没开时静默忽略（前端会退回内置浮层）。 */
export function pushCaption(payload) {
  if (!child || child.exitCode !== null || !child.stdin?.writable) return false
  try {
    child.stdin.write(`${JSON.stringify(payload)}\n`)
    return true
  } catch {
    return false
  }
}

export function closeCaptionWindow() {
  const current = child
  child = null
  if (!current) return killStrayWindow()
  try {
    try {
      if (current.exitCode === null && current.stdin?.writable) {
        current.stdin.write(`${JSON.stringify({ action: 'close' })}\n`)
        current.stdin.end()
      }
    } catch {
      /* ignore */
    }
    setTimeout(() => {
      try {
        if (current.exitCode === null) current.kill('SIGTERM')
      } catch {
        /* ignore */
      }
    }, 400).unref?.()
  } catch {
    /* ignore */
  }
  killStrayWindow()
  return true
}

export function captionWindowState() {
  return {
    ...captionWindowSupport(),
    open: Boolean(child && child.exitCode === null),
    building: Boolean(building),
    lastError,
    builtAt: lastFrame,
  }
}
