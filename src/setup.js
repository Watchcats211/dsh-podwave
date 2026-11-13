// 安装中心：扫描本机、推荐模型、下载环境与模型，并把结果写进任务记录。
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { execFile, spawn } from 'node:child_process'
import { DATA_DIR } from './state.js'
import { getSection, updateSection } from './config.js'
import { getJob, upsertJob } from './jobs.js'
import { CATALOG, FFMPEG_BINARY, LLAMA_BINARY, SOURCE_LABELS, artifactFor, expectedModels, ffmpegAsset, llamaAsset, sourcesFor } from './catalog.js'
import { downloadArtifact, extractArchive } from './downloader.js'
import { detectPlatform, findExecutable, ffmpegPath, ffprobePath, killTree, recommendEngine, venvDir, venvPython, isWindows, isMac } from './platform.js'

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
  // Windows 上 SIGTERM 等于硬杀，uv/Python 拉起的子进程会变孤儿；killTree 处理平台差异。
  killTree(current.child?.pid)
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

export function uvAssetName(platform) {
  const target = uvTarget(platform)
  return platform.os === 'win32' ? `uv-${target}.zip` : `uv-${target}.tar.gz`
}

function uvTarget(platform) {
  if (platform.os === 'darwin') return platform.arch === 'arm64' ? 'aarch64-apple-darwin' : 'x86_64-apple-darwin'
  if (platform.os === 'win32') return platform.arch === 'arm64' ? 'aarch64-pc-windows-msvc' : 'x86_64-pc-windows-msvc'
  return platform.arch === 'arm64' ? 'aarch64-unknown-linux-gnu' : 'x86_64-unknown-linux-gnu'
}

async function ensureUv(platform, source, onProgress) {
  const existing = findUv()
  if (existing) return existing
  const asset = uvAssetName(platform)
  const url = `https://github.com/astral-sh/uv/releases/download/${UV_VERSION}/${asset}`
  const urls = source === 'cn' ? [`https://gh-proxy.com/${url}`] : source === 'intl' ? [url] : [url, `https://gh-proxy.com/${url}`]
  const binDir = path.join(RUNTIME_DIR, 'bin')
  await fsp.mkdir(binDir, { recursive: true })
  const { extractArchive } = await import('./downloader.js')
  for (const chosen of urls) {
    try {
      await downloadArtifact(
        {
          id: 'uv',
          dir: '../runtime/bin',
          source: { type: 'github-assets', assets: [{ url: chosen, file: asset }] },
          approxBytes: 30_000_000,
        },
        { sourceId: 'intl', onProgress, signal: current?.signal },
      )
      const archivePath = path.join(binDir, asset)
      if (fs.existsSync(archivePath)) {
        await extractArchive(archivePath, binDir)
        await fsp.rm(archivePath, { force: true })
      }
      if (findUv()) break
    } catch {
      // 换下一条线路
    }
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

function runCapture(cmd, args, timeout = 15000) {
  return new Promise((resolve) => {
    execFile(cmd, args, { timeout, windowsHide: true }, (error, stdout, stderr) => {
      const output = String(stdout || '').trim() || String(stderr || '').trim()
      resolve({
        ok: !error,
        detail: output ? output.split('\n')[0].slice(0, 180) : String(error?.message || '').slice(0, 180),
      })
    })
  })
}

export async function verify() {
  const platform = detectPlatform()
  const engine = recommendEngine(platform)
  const artifacts = artifactFor(platform, engine)
  const checks = []

  const ffmpeg = ffmpegPath()
  checks.push({ id: 'ffmpeg', label: 'ffmpeg 已找到', ok: Boolean(ffmpeg), detail: ffmpeg || '未找到' })
  if (ffmpeg) {
    const result = await runCapture(ffmpeg, ['-version'])
    checks.push({ id: 'ffmpeg-run', label: 'ffmpeg 可执行', ok: result.ok, detail: result.detail })
  }
  const ffprobe = ffprobePath()
  checks.push({ id: 'ffprobe', label: 'ffprobe 已找到', ok: Boolean(ffprobe), detail: ffprobe || '未找到' })
  if (ffprobe) {
    const result = await runCapture(ffprobe, ['-version'])
    checks.push({ id: 'ffprobe-run', label: 'ffprobe 可执行', ok: result.ok, detail: result.detail })
  }

  const python = venvPython()
  if (fs.existsSync(python)) {
    checks.push({ id: 'python', label: 'Python 环境存在', ok: true, detail: python })
    const result = await runCapture(python, ['-c', 'import sherpa_onnx, numpy; print("sherpa-onnx", getattr(sherpa_onnx, "__version__", "?"))'])
    checks.push({ id: 'python-sherpa', label: 'sherpa-onnx 可导入', ok: result.ok, detail: result.detail })
    if (platform.mlxCapable) {
      const mlx = await runCapture(python, ['-c', 'import mlx_qwen3_asr, mlx_lm; print("mlx ok")'])
      checks.push({ id: 'python-mlx', label: 'MLX 组件可导入', ok: mlx.ok, detail: mlx.detail })
    }
  } else {
    checks.push({ id: 'python', label: 'Python 环境存在', ok: false, detail: '虚拟环境不存在，请先安装' })
  }

  if (engine.id !== 'mlx') {
    const cli = llamaBinary(platform)
    const server = cli ? path.join(path.dirname(cli), isWindows ? 'llama-server.exe' : 'llama-server') : null
    checks.push({ id: 'llama', label: 'llama.cpp 已找到', ok: Boolean(server && fs.existsSync(server)), detail: server || '未找到' })
    if (server && fs.existsSync(server)) {
      const result = await runCapture(server, ['--version'])
      checks.push({ id: 'llama-run', label: 'llama-server 可执行', ok: result.ok, detail: result.detail })
    }
  }

  for (const artifact of [artifacts.asr, artifacts.translate, artifacts.diarization]) {
    const state = modelState(artifact)
    checks.push({
      id: `model-${artifact.id}`,
      label: `模型就绪：${artifact.label}`,
      ok: state.ready,
      detail: state.ready ? state.dir : artifact.note || '未下载',
    })
  }

  // 只判「非空」等于没判：Mac 专用模型名、甚至是瞎编的名字都会亮绿，
  // 用户看到「检查通过」却在转写时报「运行环境未安装」。这里比对本平台应有的模型。
  const config = getSection('models')
  const expected = expectedModels(platform, engine)
  const problems = []
  if (config.asrModel !== expected.asrModel) {
    problems.push(`转写模型应为 ${expected.asrModel}，当前 ${config.asrModel || '未设置'}`)
  }
  if (config.translateModel !== expected.translateModel) {
    problems.push(`翻译模型应为 ${expected.translateModel}，当前 ${config.translateModel || '未设置'}`)
  }
  checks.push({
    id: 'config',
    label: '模型配置与当前平台匹配',
    ok: problems.length === 0,
    detail: problems.length ? problems.join('；') : `${config.asrModel} / ${config.translateModel}`,
  })

  return {
    ok: checks.every((check) => check.ok),
    checkedAt: new Date().toISOString(),
    platform,
    engine,
    checks,
  }
}

export function plan({ source = 'auto', platform = detectPlatform() } = {}) {
  const engine = recommendEngine(platform)
  const artifacts = artifactFor(platform, engine)
  const items = []
  const ffAsset = !ffmpegPath() ? ffmpegAsset(platform) : null
  if (ffAsset) {
    items.push({
      id: 'ffmpeg',
      label: 'ffmpeg / ffprobe',
      kind: 'tool',
      bytes: ffAsset.bytes,
      sources: ['GitHub', 'gh-proxy.com'],
    })
  }
  if (!runtimeReady(platform)) {
    items.push({
      id: 'runtime',
      label: 'Python 运行时 + 依赖（uv / PyPI）',
      kind: 'runtime',
      bytes: 80_000_000,
      sources: ['PyPI 官方', '清华镜像'],
      note: '按 60–100 MB 估算，实际以 pip 下载为准',
    })
  }
  if (engine.id !== 'mlx' && !llamaBinary(platform)) {
    const asset = llamaAsset(platform)
    items.push({
      id: 'llama',
      label: 'llama.cpp 运行时',
      kind: 'engine',
      bytes: 25_000_000,
      sources: ['GitHub', 'gh-proxy.com'],
    })
    void asset
  }
  for (const artifact of [artifacts.asr, artifacts.translate, artifacts.diarization]) {
    if (modelState(artifact).ready) continue
    items.push({
      id: artifact.id,
      label: artifact.label,
      kind: 'model',
      bytes: artifact.approxBytes || 0,
      sources: sourcesFor(artifact.source).map((item) => item.label),
      note: artifact.note,
    })
  }
  const totalBytes = items.reduce((sum, item) => sum + (item.bytes || 0), 0)
  return {
    platform,
    engine,
    source,
    items,
    totalBytes,
    note: engine.id === 'mlx' ? 'Apple Silicon 使用 MLX 模型；Windows / Linux 使用 ONNX + GGUF。' : 'Windows / Linux 使用 ONNX ASR + llama.cpp GGUF。',
  }
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

  const ffAsset = ffmpegAsset(platform)
  push({
    id: 'ffmpeg',
    kind: 'tool',
    label: 'ffmpeg / ffprobe',
    required: true,
    ready: Boolean(ffmpegPath() && ffprobePath()),
    detail: ffmpegPath() || (ffAsset ? '未找到，将下载静态构建' : isMac && findExecutable('brew') ? '未找到，一键安装将通过 Homebrew 安装' : '未找到；macOS 请先 brew install ffmpeg'),
    bytes: ffAsset?.bytes || 0,
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
  const ffAssetPending = !ffmpegPath() ? ffmpegAsset(platform) : null
  const totalBytes =
    targets.reduce((sum, artifact) => sum + (artifact.approxBytes || 0), 0) + (ffAssetPending?.bytes || 0)
  let doneBytes = 0
  const summary = []
  updateJob({ status: 'running', stage: '检查环境', progress: 0, bytes: 0, expected: totalBytes, summary: [] })
  const report = (extra) => {
    const progress = totalBytes ? Math.min(99, Math.round((doneBytes / totalBytes) * 100)) : 0
    updateJob({ status: 'running', ...extra, progress, bytes: doneBytes, expected: totalBytes, summary })
  }

  try {
    // 0. ffmpeg（Windows / Linux 直接下载静态构建；macOS 优先用系统/Homebrew）
    if (!ffmpegPath()) {
      const ffAsset = ffmpegAsset(platform)
      if (isMac) {
        const brew = findExecutable('brew')
        if (!brew) throw new Error('没有找到 ffmpeg，也没有 Homebrew；请安装 Homebrew 或把 ffmpeg/ffprobe 放进 PATH')
        report({ stage: '通过 Homebrew 安装 ffmpeg' })
        await run(brew, ['install', 'ffmpeg'])
        if (!ffmpegPath()) throw new Error('Homebrew 安装后仍未找到 ffmpeg，请检查 brew 输出')
        summary.push({ id: 'ffmpeg', label: 'ffmpeg / ffprobe（Homebrew）', bytes: 0 })
        doneBytes += 0
        report({ stage: '检查环境' })
      } else if (!ffAsset) {
        throw new Error('没有找到 ffmpeg：请安装 ffmpeg 或把它放进 PATH')
      } else {
      report({ stage: '下载 ffmpeg' })
      await downloadArtifact(
        {
          id: 'ffmpeg',
          dir: '../runtime/ffmpeg-download',
          approxBytes: ffAsset.bytes,
          source: { type: 'github-assets', assets: [{ url: ffAsset.url, file: ffAsset.file }] },
        },
        { sourceId: source, signal: current.signal, onProgress: () => {} },
      )
      const archive = path.join(RUNTIME_DIR, 'ffmpeg-download', ffAsset.file)
      const target = path.join(RUNTIME_DIR, 'ffmpeg')
      await fsp.mkdir(target, { recursive: true })
      if (fs.existsSync(archive)) await extractArchive(archive, target)
      doneBytes += ffAsset.bytes
      summary.push({ id: 'ffmpeg', label: 'ffmpeg / ffprobe', bytes: ffAsset.bytes })
      }
    }

    // 1. Python 运行时
    if (!runtimeReady(platform)) {
      report({ stage: '安装 uv 与 Python 运行时' })
      const uv = await ensureUv(platform, source, () => {})
      const venv = venvDir()
      if (!fs.existsSync(venvPython())) {
        await run(uv, ['venv', '--python', '3.12', venv])
      }
      const index = source === 'cn' ? 'https://pypi.tuna.tsinghua.edu.cn/simple' : undefined
      const args = ['pip', 'install', '--python', venvPython(), 'sherpa-onnx', 'numpy']
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
    // 说话人分离是可选组件：它失败不该把已经下完的 1.6 GB 判定成整次安装失败。
    // 之前任何一个 tar 解压失败都会让整个 install 走到 catch，用户看到「安装失败」。
    const optionalFailures = []
    for (const artifact of targets) {
      if (current.cancelled) throw new Error('用户取消了安装')
      const optional = artifact.kind === 'diarization'
      report({ stage: `下载 ${artifact.label}` })
      try {
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
      } catch (error) {
        if (current.cancelled) throw new Error('用户取消了安装')
        if (!optional) throw error
        const message = String(error?.message || error)
        optionalFailures.push({ id: artifact.id, label: artifact.label, error: message })
        summary.push({ id: artifact.id, label: artifact.label, bytes: 0, optional: true, skipped: true, error: message })
        report({ stage: `跳过可选组件：${artifact.label}（${message}）` })
      }
    }

    // 4. 写配置
    updateSection('models', { asrModel: artifacts.asr.dir, translateModel: artifacts.translate.dir })
    writeSetup({ engine: engine.id, source, installedAt: Date.now(), lastSummary: summary })
    const warning = optionalFailures.length
      ? `可选组件失败，已跳过：${optionalFailures.map((item) => `${item.label}（${item.error}）`).join('；')}。核心转写与翻译已就绪，可以正常使用。`
      : null
    const job = updateJob({
      status: 'done',
      stage: warning ? '完成（部分可选组件已跳过）' : '完成',
      progress: 100,
      bytes: doneBytes,
      expected: totalBytes || doneBytes,
      summary,
      error: null,
      warning,
      optionalFailures,
    })
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
