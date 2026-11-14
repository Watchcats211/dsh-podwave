// 模型目录与选择：默认放 ~/.podwave/models/<name>，也可以在设置里改到任意目录
// （比如项目文件夹或外置硬盘），改完能把已有模型原样搬过去。
//
// 为什么不把目录写死：模型有 5 GB 量级，用户往往不想让它占家目录；
// 但也绝不能硬编码到「插件自己的目录」——桌面端装的是拷贝，升级会整个替换掉。
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { DATA_DIR } from './state.js'
import { getSection, updateSection } from './config.js'
import { CATALOG } from './catalog.js'

export const DEFAULT_MODELS_DIR = path.join(DATA_DIR, 'models')

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
  return DEFAULT_MODELS_DIR
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
    return fs.readdirSync(dir).some((file) => file.endsWith('.gguf') || file.endsWith('.onnx'))
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
function artifactMeta() {
  const map = new Map()
  for (const artifact of Object.values(CATALOG)) {
    if (artifact?.dir && !artifact.dir.includes('..')) map.set(artifact.dir, { kind: artifact.kind, label: artifact.label })
  }
  return map
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
      const info = meta.get(name)
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

export function modelsSummary() {
  const items = listModels()
  const totalBytes = items.reduce((sum, item) => sum + item.bytes, 0)
  return { dir: modelsDir(), defaultDir: DEFAULT_MODELS_DIR, custom: modelsDir() !== DEFAULT_MODELS_DIR, totalBytes, items }
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
  const next = raw ? expandPath(raw) : DEFAULT_MODELS_DIR
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

  updateSection('models', { dir: next === DEFAULT_MODELS_DIR ? '' : next })
  return { ...modelsSummary(), moved, skipped }
}
