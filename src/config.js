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
  ui: {
    showSidebarPanel: true,
    sidebarCollapsed: false,
    // 字幕字号（px）：字幕面板和悬浮字幕共用这一个设置，用拖动条调。
    subtitleSize: 15,
    // 悬浮字幕：是否开启、停留在屏幕上的位置（null = 用默认的右下角）。
    captionOpen: false,
    captionX: null,
    captionY: null,
    // 悬浮字幕的宽高（px，null = 跟随内容自适应）。大屏上默认那点宽太小，可以拖着右下角改。
    captionW: null,
    captionH: null,
    // 字幕面板的宽高（px，null = 用默认的宽度/高度）。拖左下角改大小，双击把手恢复默认。
    transcriptW: null,
    transcriptH: null,
    // 详情页左边那条（封面 + 简介）的宽度，null = 默认 240px。拖中间的分隔线改，封面跟着缩放。
    episodeLeftW: null,
    // 设置页「历史记录」卡片是否展开：默认收起，点标题栏展开。
    historyOpen: false,
    // 「环境与模型」「模型」两张诊断卡也默认收起：走云端时它们本来就不该占版面。
    envOpen: false,
    modelsOpen: false,
  },
  // DeepSeek API 的地址 / 密钥 / 对话模型：转写和翻译共用这一份，用户只填一次。
  // 老版本把这三项存在 translate 段里，读到时由 migrateApiSection() 挪过来。
  api: {
    base: 'https://api.deepseek.com',
    key: '',
    model: 'deepseek-chat',
  },
  // 默认用 DeepSeek Harness 自己的模型（插件不另存密钥/地址/模型名），
  // 想离线时在设置页切到 local，或用 api 走自定义中转。
  // providerPinned：用户亲手选过引擎，就别再被下面的老配置迁移覆盖。
  translate: {
    provider: 'dsh',
    providerPinned: false,
    target: 'zh',
  },
  // 默认模型绝不能写死 MLX：那套模型 platform 是 darwin-arm64，Windows 装不了。
  // dir 为空表示用默认目录（<数据目录>/models）；用户改过则存绝对路径。
  get models() {
    return { dir: '', ...cachedDefaultModels() }
  },
  // 转写默认走云端 API：装好插件、填一个 DeepSeek key 就能用，不用先下载 2.4G 模型。
  // 想省钱可以在设置里切成本地模型（provider: 'local'，需要先一键安装运行时和模型）。
  // 密钥与地址统一在 api 段，转写这里只管「用哪个引擎」。
  transcribe: {
    provider: 'api',
    hotwords: [],
    chunkMinutes: 1,
    diarize: true,
    // 边播边出字幕：播放某集时自动用小段滚动转写，字幕/译文/说话人跟着播放进度出现。
    realtime: true,
  },
  import: { mode: 'copy' },
  // 实时字幕（听系统声音，比如 YouTube、直播、会议）。音频在前端采集，这里只记偏好：
  // deviceId/deviceLabel 是上次用的输入设备（BlackHole 这类虚拟声卡会作为输入设备出现），
  // saveOnStop 记「结束时要不要留一份字幕」，用户可以随时在悬浮窗里改。
  live: {
    deviceId: '',
    deviceLabel: '',
    saveOnStop: true,
  },
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

// 老配置（0.11.28 及以前）把 API 地址/密钥/对话模型存在 translate 段里，
// 转写要再填一次。这里在读到时把它们搬进 api 段并落盘一次，之后只认 api 段。
function migrateApiSection(stored, merged) {
  if (!stored || stored.api) return false
  const legacy = stored.translate || {}
  const base = String(legacy.apiBase || '').trim()
  const model = String(legacy.apiModel || '').trim()
  const apiKey = String(legacy.apiKey || '').trim()
  if (!base && !model && !apiKey) return false
  if (base) merged.api.base = base
  if (model) merged.api.model = model
  if (apiKey) merged.api.key = apiKey
  return true
}

export function loadConfig() {
  const key = statKey()
  if (cache && cacheKey === key) return clone(cache)
  const stored = key === 'missing' ? null : readJson(CONFIG_PATH)
  cache = stored ? merge(clone(CONFIG_DEFAULTS), stored) : migrateLegacy()
  // 0.11.53 起翻译默认跟随 DSH 的模型。老配置里写死的 provider: 'api'（多半还配着已经
  // 下线的 deepseek-chat）自动改成 dsh；用户亲手选过引擎的（providerPinned）不动。
  if (cache.translate?.provider === 'api' && !cache.translate.providerPinned) {
    cache.translate.provider = 'dsh'
    try {
      writeConfig(cache)
    } catch {}
  }
  if (migrateApiSection(stored, cache)) {
    // 迁移只做一次：写回失败也不影响本次读取，下次再试。
    try {
      writeConfig(cache)
    } catch {}
  }
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
