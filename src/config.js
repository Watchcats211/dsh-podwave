// 统一配置：~/.podwave/config.json（schemaVersion 1）。
// 首次启动时把旧的 ui.json / translate.json / models.json 迁入，并把旧文件改名为 *.bak。
import fs from 'node:fs'
import path from 'node:path'
import { DATA_DIR } from './state.js'

export const CONFIG_PATH = path.join(DATA_DIR, 'config.json')

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
  models: { asrModel: 'qwen3-asr-1.7b-8bit', translateModel: 'hy-mt2-1.8b-4bit' },
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

export function loadConfig() {
  if (!cache) {
    const stored = readJson(CONFIG_PATH)
    cache = stored ? merge(clone(CONFIG_DEFAULTS), stored) : migrateLegacy()
  }
  return clone(cache)
}

export function saveConfig(patch) {
  const next = merge(loadConfig(), patch)
  cache = next
  writeConfig(next)
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
