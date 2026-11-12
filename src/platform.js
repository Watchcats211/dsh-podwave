// 平台检测：操作系统、芯片、内存、磁盘、可用工具与模型推荐。
// 目标是把「这台机器能装什么、缺什么」变成一份可展示、可执行的清单。
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

export const isWindows = process.platform === 'win32'
export const isMac = process.platform === 'darwin'
export const isLinux = process.platform === 'linux'

export function totalMemGB() {
  return Math.round((os.totalmem() / 2 ** 30) * 10) / 10
}

export function freeDiskGB(dir = os.homedir()) {
  try {
    const stat = fs.statfsSync(dir)
    return Math.round(((stat.bavail * stat.bsize) / 2 ** 30) * 10) / 10
  } catch {
    return null
  }
}

export function isAppleSilicon() {
  return isMac && process.arch === 'arm64'
}

// 在 PATH 与常见安装位置里找一个可执行文件。
export function findExecutable(names, extraPaths = []) {
  const list = Array.isArray(names) ? names : [names]
  const exts = isWindows ? (process.env.PATHEXT || '.EXE;.CMD;.BAT').split(';') : ['']
  const dirs = [
    ...(process.env.PATH || '').split(path.delimiter).filter(Boolean),
    ...extraPaths,
  ]
  for (const name of list) {
    if (path.isAbsolute(name)) {
      if (fs.existsSync(name)) return name
      continue
    }
    for (const dir of dirs) {
      for (const ext of exts) {
        const candidate = path.join(dir, name + (isWindows && !name.toLowerCase().endsWith(ext.toLowerCase()) ? ext : ''))
        try {
          if (fs.existsSync(candidate)) return candidate
        } catch {
          // 忽略不可读的 PATH 项
        }
      }
    }
  }
  return null
}

export function hasCommand(name) {
  return Boolean(findExecutable(name))
}

const FFMPEG_EXTRA = isMac
  ? ['/opt/homebrew/bin', '/usr/local/bin']
  : isWindows
    ? ['C:\\ffmpeg\\bin', 'C:\\Program Files\\ffmpeg\\bin', path.join(os.homedir(), 'ffmpeg', 'bin')]
    : ['/usr/bin', '/usr/local/bin', '/snap/bin']

export function ffmpegPath() {
  return process.env.PODWAVE_FFMPEG || findExecutable('ffmpeg', FFMPEG_EXTRA)
}

export function ffprobePath() {
  return process.env.PODWAVE_FFPROBE || findExecutable('ffprobe', FFMPEG_EXTRA)
}

export function venvDir() {
  return path.join(os.homedir(), '.podwave', 'runtime', '.venv')
}

export function venvPython(dir = venvDir()) {
  return isWindows ? path.join(dir, 'Scripts', 'python.exe') : path.join(dir, 'bin', 'python')
}

export function venvBin(name, dir = venvDir()) {
  const ext = isWindows ? '.exe' : ''
  return isWindows ? path.join(dir, 'Scripts', name + ext) : path.join(dir, 'bin', name + ext)
}

export function detectGpu() {
  if (isAppleSilicon()) return 'metal'
  try {
    execFileSync(isWindows ? 'where' : 'which', ['nvidia-smi'], { stdio: 'ignore' })
    return 'cuda'
  } catch {
    return 'cpu'
  }
}

export function detectPlatform() {
  const gpu = detectGpu()
  return {
    os: process.platform,
    osLabel: isMac ? 'macOS' : isWindows ? 'Windows' : 'Linux',
    arch: process.arch,
    isMac,
    isWindows,
    isLinux,
    appleSilicon: isAppleSilicon(),
    gpu,
    memoryGB: totalMemGB(),
    freeDiskGB: freeDiskGB(),
    mlxCapable: isAppleSilicon(),
    cuda: gpu === 'cuda',
    node: process.version,
  }
}

// 推荐组合：Mac Apple Silicon 走 MLX；其它平台走 ONNX ASR + llama.cpp GGUF。
export function recommendEngine(platform) {
  if (platform.mlxCapable) {
    return {
      id: 'mlx',
      label: 'MLX（Apple Silicon）',
      asr: 'qwen3-asr-1.7b-8bit',
      translate: 'hy-mt2-1.8b-4bit-mlx',
      note: '本机是 Apple Silicon：转写用 Qwen3-ASR-1.7B-8bit，翻译用 Hy-MT2-1.8B-4bit（MLX）。',
    }
  }
  const mem = platform.memoryGB
  const translate = mem >= 24 ? 'hy-mt2-1.8b-q4km' : mem >= 12 ? 'hy-mt2-1.8b-2bit' : 'hy-mt2-1.8b-1.25bit'
  return {
    id: 'onnx-llama',
    label: `${platform.osLabel} · ONNX + llama.cpp`,
    asr: 'sensevoice-int8',
    translate,
    note: `本机是 ${platform.osLabel}（${platform.arch}）：转写用 SenseVoice Small（int8），翻译用 Hy-MT2-1.8B GGUF；按 ${mem} GB 内存推荐 ${translate}。`,
  }
}
