// 安装中心：扫描本机、推荐模型、下载环境与模型，并把结果写进任务记录。
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { DATA_DIR } from './state.js'
import { getSection, updateSection } from './config.js'
import { getJob, upsertJob } from './jobs.js'
import { CATALOG, LLAMA_BINARY, SOURCE_LABELS, artifactFor, llamaAsset, sourcesFor } from './catalog.js'
import { downloadArtifact } from './downloader.js'
import { detectPlatform, findExecutable, ffmpegPath, ffprobePath, recommendEngine, venvDir, venvPython, isWindows } from './platform.js'

const RUNTIME_DIR = path.join(DATA_DIR, 'runtime')
const SETUP_PATH = path.join(DATA_DIR, 'setup.json')
const UV_VERSION = '0.11.5'
const JOB_KEY = 'setup'

let current = null

export function setupJob() {
  const stored = getJob('setup')
  if (stored) return { ...stored, running: Boolean(current?.running) }
  return current ? { status: 'running', running: true, stage: '检查环境' } : null
}

export function cancelSetup() {
  if (!current) return false
  current.cancelled = true
  current.child?.kill('SIGTERM')
  return true
}

function readSetup() {
  try {
    return JSON.parse(fs.readFileSync(SETUP_PATH, 'utf8'))
  } catch {
    return {}
  }
}

function writeSetup(patch) {
  const next = { ...readSetup(), ...patch, updatedAt: Date.now() }
  fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(SETUP_PATH, JSON.stringify(next, null, 2), { mode: 0o600 })
  return next
}

function venvSitePackages() {
  const dir = venvDir()
  if (isWindows) return path.join(dir, 'Lib', 'site-packages')
  try {
    const lib = path.join(dir, 'lib')
    const versions = fs.readdirSync(lib).filter((name) => name.startsWith('python'))
    if (versions.length) return path.join(lib, versions[0], 'site-packages')
  } catch {
    // fall through
  }
  return path.join(dir, 'lib', 'site-packages')
}

export function pythonModule(moduleName) {
  return fs.existsSync(path.join(venvSitePackages(), moduleName))
}

function findUv() {
  return process.env.PODWAVE_UV || findExecutable('uv', [path.join(os.homedir(), '.local', 'bin'), path.join(os.homedir(), '.cargo', 'bin'), path.join(RUNTIME_DIR, 'bin')])
}

function uvTarget(platform) {
  if (platform.os === 'darwin') return platform.arch === 'arm64' ? 'aarch64-apple-darwin' : 'x86_64-apple-darwin'
  if (platform.os === 'win32') return platform.arch === 'arm64' ? 'aarch64-pc-windows-msvc' : 'x86_64-pc-windows-msvc'
  return platform.arch === 'arm64' ? 'aarch64-unknown-linux-gnu' : 'x86_64-unknown-linux-gnu'
}

async function ensureUv(platform, source, onProgress) {
  const existing = findUv()
  if (existing) return existing
  const target = uvTarget(platform)
  const asset = `uv-${target}.tar.gz`
  const url = `https://github.com/astral-sh/uv/releases/download/${UV_VERSION}/${asset}`
  const cnUrl = `https://gh-proxy.com/${url}`
  const dest = path.join(RUNTIME_DIR, 'bin')
  await fsp.mkdir(dest, { recursive: true })
  const archive = path.join(dest, asset)
  const chosen = source === 'cn' ? cnUrl : source === 'intl' ? url : url
  try {
    await downloadArtifact(
      {
        id: 'uv',
        dir: '../runtime/bin',
        source: { type: 'github-assets', assets: [{ url: chosen, file: asset }] },
        approxBytes: 15_000_000,
      },
      { sourceId: 'intl', onProgress, signal: current?.signal },
    )
    // downloadArtifact 把文件放到了 models/../runtime/bin 下，这里直接解压到 runtime/bin。
    const binDir = path.join(RUNTIME_DIR, 'bin')
    await fsp.mkdir(binDir, { recursive: true })
    const archivePath = path.join(binDir, asset)
    if (fs.existsSync(archivePath)) {
      const { extractArchive } = await import('./downloader.js')
      await extractArchive(archivePath, binDir)
      await fsp.rm(archivePath, { force: true })
    }
  } catch {
    // 下载失败时回退到 PATH 上的 uv（可能由用户自己安装）
  }
  const found = findUv()
  if (!found) throw new Error('uv 安装失败，请手动安装 uv 后重试（https://docs.astral.sh/uv/）')
  return found
}

function run(cmd, args, { cwd, env, onLine } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { cwd, env: { ...process.env, ...env }, stdio: ['ignore', 'pipe', 'pipe'] })
    if (current) current.child = child
    let out = ''
    const handle = (chunk) => {
      const text = chunk.toString()
      out += text
      onLine?.(text)
    }
    child.stdout.on('data', handle)
    child.stderr.on('data', handle)
    child.on('error', reject)
    child.on('exit', (code) => {
      if (current) current.child = null
      if (code === 0) resolve(out)
      else reject(new Error(`${path.basename(cmd)} 退出码 ${code}：${out.slice(-400)}`))
    })
  })
}

export function runtimeReady(platform) {
  const py = venvPython()
  const needsMlx = platform.mlxCapable
  return (
    fs.existsSync(py) &&
    pythonModule('sherpa_onnx') &&
    (!needsMlx || (pythonModule('mlx_qwen3_asr') && pythonModule('mlx_lm')))
  )
}

export function llamaBinary(platform) {
  if (process.env.PODWAVE_LLAMA && fs.existsSync(process.env.PODWAVE_LLAMA)) return process.env.PODWAVE_LLAMA
  const direct = findExecutable('llama-cli')
  if (direct) return direct
  const root = path.join(RUNTIME_DIR, 'llama')
  const name = isWindows ? 'llama-cli.exe' : 'llama-cli'
  const stack = [root]
  while (stack.length) {
    const dir = stack.pop()
    let entries = []
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true })
    } catch {
      continue
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) stack.push(full)
      else if (entry.name === name) return full
    }
  }
  return null
}

export function modelState(artifact) {
  const dir = path.join(DATA_DIR, 'models', artifact.dir)
  if (artifact.kind === 'diarization') {
    const seg = path.join(dir, 'sherpa-onnx-pyannote-segmentation-3-0', 'model.onnx')
    const emb = path.join(dir, '3dspeaker_speech_campplus_sv_zh_en_16k-common_advanced.onnx')
    return { ready: fs.existsSync(seg) && fs.existsSync(emb), dir }
  }
  if (artifact.file) {
    return { ready: fs.existsSync(path.join(dir, artifact.file)), dir }
  }
  const safetensors = path.join(dir, 'model.safetensors')
  const onnx = path.join(dir, 'model.int8.onnx')
  return { ready: fs.existsSync(safetensors) || fs.existsSync(onnx), dir }
}

export function scan() {
  const platform = detectPlatform()
  const engine = recommendEngine(platform)
  const artifacts = artifactFor(platform, engine)
  const pythonOk = fs.existsSync(venvPython())
  const runtimeOk = runtimeReady(platform)
  const llama = engine.id === 'mlx' ? null : llamaBinary(platform)
  const components = []
  const push = (item) => components.push(item)

  push({
    id: 'ffmpeg',
    kind: 'tool',
    label: 'ffmpeg / ffprobe',
    required: true,
    ready: Boolean(ffmpegPath() && ffprobePath()),
    detail: ffmpegPath() || '未找到（播放不受影响，转写与切块需要）',
    bytes: 0,
  })
  push({
    id: 'runtime',
    kind: 'runtime',
    label: platform.mlxCapable ? 'Python 运行时（sherpa-onnx + MLX）' : 'Python 运行时（sherpa-onnx）',
    required: true,
    ready: runtimeOk,
    detail: pythonOk ? venvPython() : '未安装',
    bytes: 0,
  })
  for (const artifact of [artifacts.asr, artifacts.translate, artifacts.diarization]) {
    const state = modelState(artifact)
    push({
      id: artifact.kind,
      kind: 'model',
      label: artifact.label,
      required: artifact.kind !== 'diarization',
      ready: state.ready,
      detail: state.ready ? state.dir : artifact.note,
      bytes: artifact.approxBytes || 0,
      artifactId: artifact.id,
    })
  }
  if (engine.id !== 'mlx') {
    const asset = llamaAsset(platform)
    push({
      id: 'llama',
      kind: 'engine',
      label: 'llama.cpp 运行时',
      required: true,
      ready: Boolean(llama),
      detail: llama || (asset ? `${asset.name}（安装时下载）` : '该平台暂无预编译包'),
      bytes: 0,
    })
  }
  const missing = components.filter((item) => !item.ready && item.required)
  const downloadBytes = components.filter((item) => item.kind === 'model' && !item.ready).reduce((sum, item) => sum + item.bytes, 0)
  const disk = platform.freeDiskGB
  return {
    platform,
    engine,
    sourceLabels: SOURCE_LABELS,
    components,
    missing: missing.map((item) => item.id),
    recommendedDownloads: components
      .filter((item) => item.kind === 'model')
      .map((item) => ({ id: item.id, label: item.label, bytes: item.bytes, ready: item.ready })),
    downloadBytes,
    diskWarning: disk != null && downloadBytes > 0 && disk * 2 ** 30 < downloadBytes * 1.25 + 1.5 * 2 ** 30,
    setup: readSetup(),
  }
}

function updateJob(patch) {
  const job = upsertJob({
    key: JOB_KEY,
    type: 'setup',
    label: '安装环境与模型',
    status: 'running',
    updatedAt: Date.now(),
    ...patch,
  })
  return job
}

export async function install({ source = 'auto' } = {}) {
  if (current?.running) throw new Error('安装已在进行中')
  current = { running: true, cancelled: false, startedAt: Date.now(), child: null, signal: null }
  const platform = detectPlatform()
  const engine = recommendEngine(platform)
  const artifacts = artifactFor(platform, engine)
  const targets = [artifacts.asr, artifacts.translate, artifacts.diarization].filter((artifact) => !modelState(artifact).ready)
  const totalBytes = targets.reduce((sum, artifact) => sum + (artifact.approxBytes || 0), 0)
  let doneBytes = 0
  const summary = []
  updateJob({ status: 'running', stage: '检查环境', progress: 0, bytes: 0, expected: totalBytes, summary: [] })
  const report = (extra) => {
    const progress = totalBytes ? Math.min(99, Math.round((doneBytes / totalBytes) * 100)) : 0
    updateJob({ status: 'running', ...extra, progress, bytes: doneBytes, expected: totalBytes, summary })
  }

  try {
    // 1. Python 运行时
    if (!runtimeReady(platform)) {
      report({ stage: '安装 uv 与 Python 运行时' })
      const uv = await ensureUv(platform, source, () => {})
      const venv = venvDir()
      if (!fs.existsSync(venvPython())) {
        await run(uv, ['venv', '--python', '3.12', venv])
      }
      const index = source === 'cn' ? 'https://pypi.tuna.tsinghua.edu.cn/simple' : undefined
      const args = ['pip', 'install', '--python', venvPython(), 'sherpa-onnx']
      if (engine.id === 'mlx') args.push('mlx-qwen3-asr', 'mlx-lm')
      if (index) args.push('--index-url', index)
      report({ stage: '安装 Python 依赖（sherpa-onnx' + (engine.id === 'mlx' ? '、mlx' : '') + '）' })
      try {
        await run(uv, args)
      } catch (error) {
        if (index) await run(uv, args.filter((part) => part !== '--index-url' && part !== index))
        else throw error
      }
      summary.push({ id: 'runtime', label: 'Python 运行时 + 依赖', bytes: 0 })
    }

    // 2. llama.cpp 运行时
    if (engine.id !== 'mlx' && !llamaBinary(platform)) {
      const asset = llamaAsset(platform)
      if (!asset) throw new Error('当前平台没有 llama.cpp 预编译包')
      report({ stage: '下载 llama.cpp 运行时' })
      await downloadArtifact(
        {
          id: 'llama-cpp',
          dir: '../runtime/llama-download',
          approxBytes: 40_000_000,
          source: { type: 'github-assets', assets: [{ url: asset.url, file: asset.name }] },
        },
        { sourceId: source, signal: current.signal, onProgress: () => {} },
      )
      const { extractArchive } = await import('./downloader.js')
      const archive = path.join(DATA_DIR, 'models', '..', 'runtime', 'llama-download', asset.name)
      const target = path.join(RUNTIME_DIR, 'llama')
      await fsp.mkdir(target, { recursive: true })
      if (fs.existsSync(archive)) await extractArchive(archive, target)
      summary.push({ id: 'llama', label: 'llama.cpp 运行时', bytes: 40_000_000 })
    }

    // 3. 模型
    for (const artifact of targets) {
      if (current.cancelled) throw new Error('用户取消了安装')
      report({ stage: `下载 ${artifact.label}` })
      const result = await downloadArtifact(artifact, {
        sourceId: source,
        signal: current.signal,
        onProgress: (event) => {
          doneBytes += event.delta || 0
          report({ stage: `下载 ${artifact.label}` })
        },
      })
      doneBytes = Math.max(doneBytes, summary.reduce((sum, item) => sum + item.bytes, 0) + result.bytes)
      summary.push({ id: artifact.id, label: artifact.label, bytes: result.bytes, source: result.sourceLabel })
    }

    // 4. 写配置
    updateSection('models', { asrModel: artifacts.asr.dir, translateModel: artifacts.translate.dir })
    writeSetup({ engine: engine.id, source, installedAt: Date.now(), lastSummary: summary })
    const job = updateJob({ status: 'done', stage: '完成', progress: 100, bytes: doneBytes, expected: totalBytes || doneBytes, summary })
    current.running = false
    return job
  } catch (error) {
    current.running = false
    const job = updateJob({
      status: 'error',
      stage: '失败',
      error: String(error.message || error),
      summary,
    })
    return job
  }
}

export { CATALOG, LLAMA_BINARY, sourcesFor }
