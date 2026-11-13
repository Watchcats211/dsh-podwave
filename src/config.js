// 统一配置：~/.podwave/config.json（schemaVersion 1）。
// 首次启动时把旧的 ui.json / translate.json / models.json 迁入，并把旧文件改名为 *.bak。
//
// 两条容易踩的坑，都在这里兜住：
// 1. 默认模型必须按平台算，不能写死 MLX——那套模型只有 Apple Silicon 能装。
// 2. 缓存不能盲信。宿主进程常驻，而「一键安装」是另一个进程写盘；如果保存时拿内存里的
//    旧快照整份写回，安装结果就被吞掉了。所以每次保存都先比对磁盘是否被别人改过。
import fs from 'node:fs'
import path from 'node:path'
import { DATA_DIR } from './state.js'
import { detectPlatform, recommendEngine } from './platform.js'
import { expectedModels } from './catalog.js'

export const CONFIG_PATH = path.join(DATA_DIR, 'config.json')

function defaultModels() {
  const platform = detectPlatform()
  const engine = recommendEngine(platform)
  const models = expectedModels(platform, engine)
  return { asrModel: models.asrModel, translateModel: models.translateModel }
}

// detectPlatform() 会去探测 GPU（可能 spawn 子进程），不能放在模块顶层每次求值。
// 用惰性 getter + 缓存：既保证「默认模型按平台算」，又不会拖慢 import。
let defaultsCache = null
function cachedDefaultModels() {
  if (!defaultsCache) defaultsCache = defaultModels()
  return defaultsCache
}

export const CONFIG_DEFAULTS = {
  schemaVersion: 1,
  ui: { showSidebarPanel: true, sidebarCollapsed: false },
  translate: {
    provider: 'api',
    target: 'zh',
    apiBase: 'https://api.deepseek.com',
    apiModel: 'deepseek-chat',
    apiKey: '',
  },
  // 默认模型绝不能写死 MLX：那套模型 platform 是 darwin-arm64，Windows 装不了。
  get models() {
    return { ...cachedDefaultModels() }
  },
  transcribe: { hotwords: [], chunkMinutes: 1, diarize: true },
  import: { mode: 'copy' },
}

const LEGACY_FILES = [
  ['ui', 'ui.json'],
  ['translate', 'translate.json'],
  ['models', 'models.json'],
]

function clone(value) {
  return JSON.parse(JSON.stringify(value))
}

function merge(base, patch) {
  if (Array.isArray(base) || Array.isArray(patch) || typeof base !== 'object' || base === null || typeof patch !== 'object' || patch === null) {
    return patch === undefined ? base : patch
  }
  const next = { ...base }
  for (const [key, value] of Object.entries(patch)) next[key] = merge(base[key], value)
  return next
}

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'))
  } catch {
    return null
  }
}

// 磁盘指纹：别的进程改过 config.json 时，缓存必须失效。
function statKey() {
  try {
    const stat = fs.statSync(CONFIG_PATH)
    return `${stat.mtimeMs}:${stat.size}`
  } catch {
    return 'missing'
  }
}

function writeConfig(config) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
  const tmp = `${CONFIG_PATH}.tmp`
  fs.writeFileSync(tmp, JSON.stringify(config, null, 2), { mode: 0o600 })
  fs.renameSync(tmp, CONFIG_PATH)
}

function migrateLegacy() {
  const config = clone(CONFIG_DEFAULTS)
  for (const [section, name] of LEGACY_FILES) {
    const file = path.join(DATA_DIR, name)
    const data = readJson(file)
    if (data && typeof data === 'object') {
      config[section] = merge(config[section], data)
      try {
        fs.renameSync(file, `${file}.bak`)
      } catch {
        /* ignore */
      }
    }
  }
  writeConfig(config)
  return config
}

let cache = null
let cacheKey = null

export function loadConfig() {
  const key = statKey()
  if (cache && cacheKey === key) return clone(cache)
  const stored = key === 'missing' ? null : readJson(CONFIG_PATH)
  cache = stored ? merge(clone(CONFIG_DEFAULTS), stored) : migrateLegacy()
  cacheKey = statKey()
  return clone(cache)
}

export function saveConfig(patch) {
  // 先 loadConfig()：它会比对磁盘指纹，把别的进程（比如安装器）刚写进去的模型名读进来，
  // 再和这次 patch 合并，避免用旧快照覆盖安装结果。
  const next = merge(loadConfig(), patch)
  cache = next
  writeConfig(next)
  cacheKey = statKey()
  return clone(next)
}

export function getSection(name) {
  return loadConfig()[name]
}

export function updateSection(name, patch) {
  return saveConfig({ [name]: patch })[name]
}

export function configFile() {
  return CONFIG_PATH
}

// 测试与诊断用：当前平台推荐的模型组合。
export function platformDefaults() {
  const platform = detectPlatform()
  const engine = recommendEngine(platform)
  const models = expectedModels(platform, engine)
  return { platform: { os: platform.os, arch: platform.arch, osLabel: platform.osLabel }, engine: engine.id, models }
}
