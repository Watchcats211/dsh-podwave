// 模型目录与选择：模型放在 ~/.podwave/models/<name>，选择存 ~/.podwave/models.json。
import fs from 'node:fs'
import path from 'node:path'
import { DATA_DIR } from './state.js'

export const MODELS_DIR = path.join(DATA_DIR, 'models')
const CONFIG_PATH = path.join(DATA_DIR, 'models.json')

const DEFAULTS = {
  asrModel: 'qwen3-asr-1.7b-8bit',
  translateModel: 'qwen3-8b-4bit',
}

export function loadModelConfig() {
  try {
    return { ...DEFAULTS, ...JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8')) }
  } catch {
    return { ...DEFAULTS }
  }
}

export function saveModelConfig(patch) {
  const next = { ...loadModelConfig(), ...patch }
  fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(next, null, 2), { mode: 0o600 })
  return next
}

export function modelDir(name) {
  return path.join(MODELS_DIR, String(name || ''))
}

export function modelReady(name) {
  try {
    return fs.existsSync(path.join(modelDir(name), 'model.safetensors'))
  } catch {
    return false
  }
}

export function listModels() {
  let names = []
  try {
    names = fs
      .readdirSync(MODELS_DIR, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
  } catch {
    names = []
  }
  return names
    .map((name) => ({ name, ready: modelReady(name) }))
    .sort((a, b) => a.name.localeCompare(b.name))
}
