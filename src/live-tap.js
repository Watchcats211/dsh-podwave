// 系统音频采集（macOS）：编译/安装 tap helper，扫它写出的 WAV 分块，喂进现有实时字幕管线。
//
// 和浏览器采集的区别只在一头一尾：
//   头：声音从 helper 来（不需要 BlackHole），不再需要 getUserMedia；
//   尾：切句用同一套 LiveSegmenter，识别/翻译/落盘/置顶窗全部复用 live-caption.js。
//
// 协议（沿用 dsh-interpret 验证过的做法）：helper 每 500ms 往目录里写一个 16k 单声道 WAV，
// 宿主每 250ms 扫一次，文件大小稳定且 mtime 超过 200ms 才算写完。
import fs from 'node:fs'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { DATA_DIR } from './state.js'
import { isMac } from './platform.js'
import { LiveSegmenter, encodeWav } from './live-audio-core.js'
import { decodeWav, rmsOf } from './wav.js'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE = path.join(ROOT, 'scripts', 'podwave_audio_tap.swift')
const PLIST = path.join(ROOT, 'scripts', 'audio-tap-Info.plist')
const BIN_DIR = path.join(DATA_DIR, 'bin')
const APP_DIR = path.join(BIN_DIR, 'PodwaveAudioTap.app')
const EXECUTABLE = path.join(APP_DIR, 'Contents', 'MacOS', 'podwave-audio-tap')
const CHUNK_MS = 500

let child = null
let poller = null
let building = null
let lastError = ''
let level = 0
let lastSoundAt = 0
let silentSince = 0
let everSound = false
let startedAt = 0
let hint = ''
let scratchDir = ''

export function tapBinary() {
  // 测试可以指向假 helper：PODWAVE_AUDIO_TAP_BIN=/path/to/fake
  const override = String(process.env.PODWAVE_AUDIO_TAP_BIN || '').trim()
  return override || EXECUTABLE
}

export function tapSupport() {
  if (!isMac) return { supported: false, reason: '系统音频采集目前只支持 macOS 14.2+' }
  if (process.env.PODWAVE_AUDIO_TAP_BIN) return { supported: true, reason: '', installed: true, executable: tapBinary() }
  return {
    supported: true,
    reason: '',
    installed: fs.existsSync(EXECUTABLE),
    executable: EXECUTABLE,
    // 二进制存在但没编译过（首次使用）：前端可以显示「首次使用需要编译，约 10 秒」。
    needsBuild: !fs.existsSync(EXECUTABLE) && fs.existsSync(SOURCE),
  }
}

function needsBuild() {
  if (process.env.PODWAVE_AUDIO_TAP_BIN) return false
  try {
    return fs.statSync(EXECUTABLE).mtimeMs < fs.statSync(SOURCE).mtimeMs
  } catch {
    return true
  }
}

/** 编译 helper 到固定路径（升级不换路径，避免每次都要重新授权）。 */
export async function ensureTapBuilt() {
  if (!isMac) throw new Error('系统音频采集只支持 macOS')
  if (process.env.PODWAVE_AUDIO_TAP_BIN) return tapBinary()
  if (!needsBuild()) return EXECUTABLE
  if (building) return building
  building = (async () => {
    fs.mkdirSync(path.join(APP_DIR, 'Contents', 'MacOS'), { recursive: true })
    fs.mkdirSync(path.join(APP_DIR, 'Contents', 'Resources'), { recursive: true })
    fs.copyFileSync(PLIST, path.join(APP_DIR, 'Contents', 'Info.plist'))
    const temp = `${EXECUTABLE}.tmp-${process.pid}`
    await new Promise((resolve, reject) => {
      const job = spawn('xcrun', ['swiftc', '-O', '-o', temp, SOURCE, '-framework', 'CoreAudio', '-framework', 'AudioToolbox', '-framework', 'AVFoundation'], {
        stdio: ['ignore', 'ignore', 'pipe'],
      })
      let stderr = ''
      job.stderr.on('data', (chunk) => {
        stderr = (stderr + chunk.toString()).slice(-2000)
      })
      job.on('error', () => reject(new Error('找不到 xcrun/swiftc：请安装 Xcode 命令行工具（xcode-select --install）')))
      job.on('close', (code) => {
        if (code === 0) resolve()
        else reject(new Error(`编译系统音频 helper 失败（退出码 ${code}）：${stderr.split('\n').slice(-3).join(' ')}`))
      })
    })
    fs.renameSync(temp, EXECUTABLE)
    fs.chmodSync(EXECUTABLE, 0o755)
    return EXECUTABLE
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

function readStableWav(file) {
  try {
    const info = fs.statSync(file)
    if (info.size < 44) return null
    if (Date.now() - info.mtimeMs < 200) return null
    return { buffer: fs.readFileSync(file), size: info.size }
  } catch {
    return null
  }
}

/**
 * 开始采集。段回调给出的是「一句一句」的 WAV（和浏览器路径同构），
 * 所以上层（live-caption.js）完全不需要知道声音是从哪来的。
 */
export async function startTap({ onSegment, onLevel, onHint, chunkMs = CHUNK_MS } = {}) {
  if (!isMac) throw Object.assign(new Error('系统音频采集只支持 macOS 14.2+'), { status: 400 })
  if (child) return { ok: true, reused: true }

  await ensureTapBuilt()
  scratchDir = path.join(DATA_DIR, 'live', '.tap')
  fs.rmSync(scratchDir, { recursive: true, force: true })
  fs.mkdirSync(scratchDir, { recursive: true })

  const executable = tapBinary()
  const args = ['--output-dir', scratchDir, '--chunk-ms', String(Math.max(200, Math.min(2000, chunkMs)))]
  const pid = Number(process.env.PODWAVE_AUDIO_TAP_PID || 0)
  if (pid > 0) args.push('--pid', String(pid))

  child = spawn(executable, args, { stdio: ['pipe', 'pipe', 'pipe'] })
  const current = child
  let stderr = ''
  let spawnError = null
  current.on('error', (error) => {
    spawnError = error
    lastError = `采集进程启动失败：${error.message}`
    if (child === current) child = null
    if (poller) clearInterval(poller)
    poller = null
  })
  current.on('exit', (code) => {
    if (child === current) child = null
    if (poller) clearInterval(poller)
    poller = null
    if (code && code !== 0) lastError = `采集进程退出（code=${code}）：${stderr.split('\n').slice(-2).join(' ')}`
  })
  current.stdout.on('data', () => {})
  current.stderr.on('data', (chunk) => {
    stderr = (stderr + chunk.toString()).slice(-2000)
    try {
      const line = String(chunk)
        .split('\n')
        .filter((item) => item.trim().startsWith('{'))
        .pop()
      if (!line) return
      const event = JSON.parse(line)
      if (event.warning === 'silence') {
        hint = '没收到声音：可能没有授权「录制电脑声音」，或者系统静音'
        onHint?.(hint)
      }
    } catch {
      /* 非 JSON 日志忽略 */
    }
  })

  const segmenter = new LiveSegmenter({ sampleRate: 16000 })
  const seen = new Map()
  lastSoundAt = Date.now()
  silentSince = 0
  everSound = false
  startedAt = Date.now()
  level = 0
  hint = ''

  const scan = () => {
    let files = []
    try {
      files = fs.readdirSync(scratchDir).filter((name) => name.endsWith('-system.wav'))
    } catch {
      return
    }
    for (const name of files.sort()) {
      const file = path.join(scratchDir, name)
      const stable = readStableWav(file)
      if (!stable) continue
      if (seen.get(name) === stable.size) continue
      seen.set(name, stable.size)
      let decoded
      try {
        decoded = decodeWav(stable.buffer)
      } catch {
        continue
      }
      fs.rm(file, { force: true }, () => {})
      const amplitude = rmsOf(decoded.samples)
      level = amplitude
      onLevel?.(amplitude)
      // 有声音就把静音计时清零；连续 6 秒没声音给一次提示（tap 建成功但没数据也会这样）。
      if (amplitude > 0.002) {
        lastSoundAt = Date.now()
        silentSince = 0
        everSound = true
        if (hint) {
          hint = ''
          onHint?.('')
        }
      } else if (!silentSince) {
        silentSince = Date.now()
      }
      // 只有「从头到尾一声都没有」才值得提示。出过声音之后安静下来是正常的（没人说话）。
      if (!everSound && startedAt && Date.now() - startedAt > 7000 && !hint) {
        hint = '没有收到任何声音。检查系统是否静音，以及「系统设置 → 隐私与安全性 → 录屏与系统录音」里是否允许了 Podwave（第一次用会弹授权）'
        onHint?.(hint)
      }
      for (const piece of segmenter.push(decoded.samples)) {
        if (hint) {
          hint = ''
          onHint?.('')
        }
        onSegment?.({
          wav: encodeWav(piece.samples, 16000),
          start: piece.start,
          end: piece.end,
          seconds: piece.seconds,
        })
      }
    }
  }

  poller = setInterval(scan, 250)
  // spawn 失败是异步事件：等一拍再决定要不要报错，别把「没有 helper」当成功。
  await new Promise((resolve) => setTimeout(resolve, 250))
  if (spawnError) throw new Error(lastError)
  return { ok: true, executable, dir: scratchDir }
}

export function stopTap() {
  if (poller) clearInterval(poller)
  poller = null
  if (!child) return false
  try {
    child.stdin?.end()
    child.kill('SIGTERM')
  } catch {
    /* ignore */
  }
  child = null
  if (scratchDir) {
    try {
      fs.rmSync(scratchDir, { recursive: true, force: true })
    } catch {
      /* ignore */
    }
  }
  return true
}

export function tapState() {
  return {
    running: Boolean(child),
    level,
    hint,
    lastError,
    executable: tapBinary(),
    chunkMs: CHUNK_MS,
  }
}
