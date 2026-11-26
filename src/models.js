// 模型目录与选择：默认放在「项目文件夹」里，也可以在设置里改到任意目录
// （比如外置硬盘），改完能把已有模型原样搬过去。
//
// 「项目文件夹」分两种情况：
// - 开发工作树 / file: 安装 → 插件自己的仓库目录下的 models/
// - 发布版（npm 安装）→ 用户当前工作区下的 models/
// 两者都由 modelsDirCandidates() 解析，绝不硬编码：模型有 5 GB 量级，
// 但也不能塞进 node_modules——桌面端装的是拷贝，升级会整个替换掉。
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { DATA_DIR } from './state.js'
import { getSection, updateSection } from './config.js'
import { CATALOG } from './catalog.js'

// 老位置（家目录）——新装用户不再默认用它，但仍然作为「历史目录」参与解析，
// 保证已经下过模型的人不会被悄悄搬家。
export const LEGACY_MODELS_DIR = path.join(DATA_DIR, 'models')
export const DEFAULT_MODELS_DIR = LEGACY_MODELS_DIR

// 插件包根目录（这个文件在 src/ 下）。
function pluginRoot() {
  try {
    return path.dirname(path.dirname(fileURLToPath(import.meta.url)))
  } catch {
    return ''
  }
}

// 往上找第一个含 .git 的目录：说明这份代码是「开发用的工作树」。
// npm 装进 node_modules 的是拷贝，没有 .git，因此不会被误判。
export function projectRoot(start = pluginRoot()) {
  let dir = start
  for (let i = 0; i < 40 && dir; i += 1) {
    try {
      if (fs.existsSync(path.join(dir, '.git'))) return dir
    } catch {
      /* 读不到就当没有 */
    }
    const parent = path.dirname(dir)
    if (parent === dir) break
    dir = parent
  }
  return ''
}

// 项目里的模型目录：模型跟着项目走，又不会在 npm 升级时被 node_modules 覆盖掉。
export function projectModelsDir(start) {
  const root = projectRoot(start)
  return root ? path.join(root, 'models') : ''
}

// 从本地路径安装（profile 里写的是 file:/path/to/dsh-podwave）时，
// 那个路径就是用户的项目文件夹——模型默认放进去，符合「装在项目里」的预期。
function declaredInstallRoot(start = pluginRoot()) {
  let dir = start
  for (let i = 0; i < 4 && dir; i += 1) {
    const parent = path.dirname(dir)
    if (parent === dir) break
    dir = parent
    const pkgPath = path.join(dir, 'package.json')
    let pkg
    try {
      pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
    } catch {
      continue
    }
    const spec = pkg?.dependencies?.['dsh-podwave'] || pkg?.devDependencies?.['dsh-podwave'] || ''
    if (!String(spec).startsWith('file:')) continue
    const target = String(spec).slice('file:'.length)
    const resolved = path.isAbsolute(target) ? target : path.resolve(dir, target)
    try {
      if (fs.existsSync(resolved)) return projectRoot(resolved) || resolved
    } catch {
      /* 路径失效就当没配置 */
    }
  }
  return ''
}

export function installModelsDir(start) {
  const root = declaredInstallRoot(start)
  return root ? path.join(root, 'models') : ''
}

function hasModels(dir) {
  try {
    return fs.readdirSync(dir, { withFileTypes: true }).some((entry) => entry.isDirectory())
  } catch {
    return false
  }
}

// 发布版（npm 安装）没有源码工作树，认不出「项目文件夹」，
// 所以由 host 每次请求前把「当前工作区」灌进来，模型就落在 <工作区>/models。
// 这里只存提示值，models.js 本身不依赖 DSH 的任何 service。
let workspaceRoot = ''
// 其他已知工作区：切走再切回来时，模型不至于「凭空消失」。
let otherWorkspaces = []

function absoluteRoot(dir) {
  const next = String(dir || '').trim()
  return next && path.isAbsolute(next) ? next : ''
}

function uniqueRoots(list) {
  const seen = new Set()
  const out = []
  for (const item of list) {
    const dir = absoluteRoot(item)
    if (!dir || seen.has(dir)) continue
    seen.add(dir)
    out.push(dir)
  }
  return out
}

// 当前工作区 + 其他已知工作区，当前的那个永远排第一。
export function setWorkspaceRoots(list) {
  const roots = uniqueRoots(Array.isArray(list) ? list : [])
  workspaceRoot = roots[0] || ''
  otherWorkspaces = roots.slice(1)
  return workspaceRoot
}

export function setWorkspaceRoot(dir) {
  const next = absoluteRoot(dir)
  if (!next) {
    workspaceRoot = ''
    otherWorkspaces = []
    return ''
  }
  // 换到已知工作区时，别把原来那个忘了。
  const rest = [workspaceRoot, ...otherWorkspaces].filter((item) => item && item !== next)
  return setWorkspaceRoots([next, ...rest])
}

export function getWorkspaceRoot() {
  return workspaceRoot
}

export function knownWorkspaceRoots() {
  return workspaceRoot ? [workspaceRoot, ...otherWorkspaces] : [...otherWorkspaces]
}

// 工作区里的模型目录：发布版的默认位置。
export function workspaceModelsDir() {
  return workspaceRoot ? path.join(workspaceRoot, 'models') : ''
}

// 默认下载位置的候选，按优先级排列：
// 1. 开发工作树 / file: 安装 → 插件仓库自己的 models/
// 2. 发布版 → 当前工作区下的 models/
// 3. 其他已知工作区 → 切工作区时接着用旧模型，而不是重下一遍
// 设置页把它第一个当成「项目文件夹」，一键切过去。
export function modelsDirCandidates(start) {
  // 测试/便携场景可以关掉「项目内默认」，让默认位置稳定落到数据目录。
  if (process.env.PODWAVE_MODELS_NO_PROJECT === '1') return []
  const list = []
  const project = projectModelsDir(start) || installModelsDir(start)
  if (project) list.push({ kind: 'project', dir: project })
  for (const root of knownWorkspaceRoots()) {
    const dir = path.join(root, 'models')
    if (!project || dir !== project) list.push({ kind: 'workspace', dir })
  }
  return list
}

// 默认下载位置：
// 1. 候选目录里已经有模型 → 用它（装了就用，不来回横跳）
// 2. 都没有、但老位置（~/.podwave/models）有模型 → 沿用，不搬家（避免升级后突然要重下 5 GB）
// 3. 全新安装 → 候选第一名（项目文件夹）；连候选都没有才回落老位置
export function defaultModelsDir(start) {
  const candidates = modelsDirCandidates(start)
  for (const candidate of candidates) {
    if (hasModels(candidate.dir)) return candidate.dir
  }
  if (hasModels(LEGACY_MODELS_DIR)) return LEGACY_MODELS_DIR
  if (candidates.length) return candidates[0].dir
  return LEGACY_MODELS_DIR
}

// 把 ~ / ~/x / %VAR% 解析成绝对路径；空串返回 ''。只接受绝对路径或 ~ 开头。
export function expandPath(input) {
  let value = String(input || '').trim()
  if (!value) return ''
  value = value.replace(/%([^%\\/]+)%/g, (whole, name) => {
    const resolved = process.env[name] || process.env[name.toUpperCase()] || process.env[name.toLowerCase()]
    return resolved || whole
  })
  if (value === '~') return os.homedir()
  if (value.startsWith('~/') || value.startsWith('~\\')) return path.join(os.homedir(), value.slice(2))
  if (!path.isAbsolute(value)) throw new Error('请填写绝对路径，例如 ~/Models/podwave 或 /Volumes/SSD/models')
  return path.normalize(value)
}

export function loadModelConfig() {
  return getSection('models')
}

export function saveModelConfig(patch) {
  return updateSection('models', patch)
}

// 当前生效的模型根目录（用户改过就用用户的，否则用默认）。
export function modelsDir() {
  try {
    const custom = expandPath(loadModelConfig()?.dir)
    if (custom) return custom
  } catch {
    /* 配置里写了非法路径时退回默认，不能让整个插件起不来 */
  }
  return defaultModelsDir()
}

export function modelDir(name) {
  return path.join(modelsDir(), String(name || ''))
}

export function modelReady(name) {
  try {
    const dir = modelDir(name)
    if (!fs.existsSync(dir)) return false
    if (fs.existsSync(path.join(dir, 'model.safetensors'))) return true
    if (fs.existsSync(path.join(dir, 'model.int8.onnx'))) return true
    // 说话人分离模型（pyannote + 3D-Speaker）就是裸 onnx 文件，
    // 只认 safetensors/int8/gguf 会让它永远显示「未就绪」。
    // 分片权重（MOSS 是 model-00000-of-00001.safetensors）和裸 onnx 都要认。
    return fs
      .readdirSync(dir)
      .some((file) => file.endsWith('.gguf') || file.endsWith('.onnx') || file.endsWith('.safetensors'))
  } catch {
    return false
  }
}

// 目录体积：模型目录文件数很少（几十个），直接递归统计即可。
export function dirBytes(dir) {
  let total = 0
  const stack = [dir]
  while (stack.length) {
    const current = stack.pop()
    let entries
    try {
      entries = fs.readdirSync(current, { withFileTypes: true })
    } catch {
      continue
    }
    for (const entry of entries) {
      const full = path.join(current, entry.name)
      if (entry.isDirectory()) {
        stack.push(full)
      } else if (entry.isFile()) {
        try {
          total += fs.statSync(full).size
        } catch {
          /* 跳过读不到的项 */
        }
      }
    }
  }
  return total
}

// 目录名 → { kind, label }，用于在设置页说清「这个是干什么用的」。
// 自己转出来的模型（比如用 mlx_lm 把 Hy-MT3 转成 4bit）不在 CATALOG 里，
// 但同样应该被认成「翻译模型」，否则设置页里会显示成「其它」。
const LOCAL_MODEL_PATTERNS = [
  { re: /^hy-mt[\d.]*-[\d.]+b-(4bit|8bit|mlx|gguf)/i, kind: 'translate', label: (name) => `混元 ${name}` },
  { re: /^qwen3-asr/i, kind: 'asr', label: (name) => `Qwen3-ASR ${name}` },
  { re: /^sensevoice/i, kind: 'asr', label: (name) => `SenseVoice ${name}` },
  { re: /^moss-transcribe/i, kind: 'asr', label: (name) => `MOSS ${name}` },
]

function artifactMeta() {
  const map = new Map()
  for (const artifact of Object.values(CATALOG)) {
    if (artifact?.dir && !artifact.dir.includes('..')) map.set(artifact.dir, { kind: artifact.kind, label: artifact.label })
  }
  return map
}

/** 按目录名认本地模型（catalog 里没有自己转的模型时用它），返回 { kind, label } 或 null。 */
export function localModelMeta(name) {
  for (const pattern of LOCAL_MODEL_PATTERNS) {
    if (pattern.re.test(name)) return { kind: pattern.kind, label: pattern.label(name) }
  }
  return null
}

const KIND_LABELS = { asr: '转写', translate: '翻译', diarization: '说话人分离' }

export function listModels() {
  const root = modelsDir()
  let names = []
  try {
    names = fs
      .readdirSync(root, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
  } catch {
    names = []
  }
  const config = loadModelConfig()
  const meta = artifactMeta()
  return names
    .map((name) => {
      const info = meta.get(name) || localModelMeta(name)
      const kind = info?.kind || ''
      const inUse = name === config.asrModel || name === config.translateModel || kind === 'diarization'
      return {
        name,
        ready: modelReady(name),
        bytes: dirBytes(modelDir(name)),
        kind,
        kindLabel: KIND_LABELS[kind] || '其它',
        label: info?.label || name,
        inUse,
      }
    })
    .sort((a, b) => b.bytes - a.bytes || a.name.localeCompare(b.name))
}

export function modelsSummary(start) {
  const items = listModels()
  const totalBytes = items.reduce((sum, item) => sum + item.bytes, 0)
  const fallback = defaultModelsDir(start)
  // 「项目文件夹」候选：开发/file: 安装是插件仓库，发布版是当前工作区。
  // 设置页拿第一个当一键入口，第二个用来提示「发布版会落在工作区」。
  const candidates = modelsDirCandidates(start)
  const project = candidates[0]?.dir || ''
  const workspace = candidates.find((candidate) => candidate.kind === 'workspace')?.dir || workspaceModelsDir()
  const dir = modelsDir()
  return {
    dir,
    defaultDir: fallback,
    projectDir: project,
    projectKind: candidates[0]?.kind || '',
    workspaceDir: workspace,
    legacyDir: LEGACY_MODELS_DIR,
    custom: dir !== fallback,
    totalBytes,
    items,
  }
}

export function removeModel(name) {
  const target = String(name || '').trim()
  if (!target) throw new Error('缺少模型名')
  if (target.includes('/') || target.includes('\\') || target === '.' || target === '..') throw new Error('模型名不合法')
  const item = listModels().find((model) => model.name === target)
  if (!item) throw new Error(`没有找到模型目录：${target}`)
  if (item.inUse) throw new Error(`${item.label} 正在使用中，先在设置里换掉再删除`)
  fs.rmSync(modelDir(target), { recursive: true, force: true })
  return modelsSummary()
}

// 迁移状态：跨卷复制很慢，前端轮询这个看进度。
let moveState = null

export function modelsMoveState() {
  return moveState
}

function moveOne(from, to, onBytes) {
  try {
    fs.renameSync(from, to)
    onBytes(dirBytes(to))
    return 'moved'
  } catch (error) {
    if (error?.code !== 'EXDEV' && error?.code !== 'EPERM') throw error
  }
  // 跨卷：只能真复制，逐文件累计进度。
  const stack = [[from, to]]
  let bytes = 0
  while (stack.length) {
    const [src, dest] = stack.pop()
    fs.mkdirSync(dest, { recursive: true })
    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
      const s = path.join(src, entry.name)
      const d = path.join(dest, entry.name)
      if (entry.isDirectory()) {
        stack.push([s, d])
      } else if (entry.isFile()) {
        fs.copyFileSync(s, d)
        bytes += fs.statSync(d).size
        onBytes(bytes)
      }
    }
  }
  fs.rmSync(from, { recursive: true, force: true })
  return 'copied'
}

// 改模型目录。move=true 时把已有模型搬过去（同卷 rename 秒完成，跨卷复制）。
export function setModelsDir(input, { move = true } = {}) {
  const raw = String(input || '').trim()
  const next = raw ? expandPath(raw) : defaultModelsDir()
  const current = modelsDir()
  if (next === current) return { ...modelsSummary(), moved: [], skipped: [] }

  if (next.startsWith(current + path.sep) || current.startsWith(next + path.sep)) {
    throw new Error('新目录不能是当前模型目录的子目录，也不能反过来包含它')
  }

  fs.mkdirSync(next, { recursive: true })
  try {
    fs.accessSync(next, fs.constants.W_OK)
  } catch {
    throw new Error(`这个目录不可写：${next}`)
  }

  const moved = []
  const skipped = []
  moveState = { running: Boolean(move), doneBytes: 0, totalBytes: 0, current: '' }
  if (move) {
    let entries = []
    try {
      const root = modelsDir()
      const total = dirBytes(root)
      moveState.totalBytes = total
      entries = fs
        .readdirSync(root, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
      let done = 0
      for (const name of entries) {
        moveState.current = name
        const from = path.join(root, name)
        const to = path.join(next, name)
        if (fs.existsSync(to)) {
          skipped.push(name)
          done += dirBytes(from)
          moveState.doneBytes = done
          continue
        }
        const before = done
        moveOne(from, to, (bytes) => {
          moveState.doneBytes = before + bytes
        })
        done = moveState.doneBytes
        moved.push(name)
      }
      // 原目录空了就删掉，避免留下空壳
      try {
        if (!fs.readdirSync(root).length) fs.rmdirSync(root)
      } catch {
        /* ignore */
      }
    } catch (error) {
      moveState = null
      throw new Error(`迁移失败：${error.message}`)
    }
  }
  moveState = null

  updateSection('models', { dir: next === defaultModelsDir() ? '' : next })
  return { ...modelsSummary(), moved, skipped }
}
