// 模型目录与选择：模型放在 ~/.podwave/models/<name>，选择存统一配置的 models 分节。
import fs from 'node:fs'
import path from 'node:path'
import { DATA_DIR } from './state.js'
import { getSection, updateSection } from './config.js'

export const MODELS_DIR = path.join(DATA_DIR, 'models')

export function loadModelConfig() {
  return getSection('models')
}

export function saveModelConfig(patch) {
  return updateSection('models', patch)
}

export function modelDir(name) {
  return path.join(MODELS_DIR, String(name || ''))
}

export function modelReady(name) {
  try {
    const dir = modelDir(name)
    if (!fs.existsSync(dir)) return false
    if (fs.existsSync(path.join(dir, 'model.safetensors'))) return true
    if (fs.existsSync(path.join(dir, 'model.int8.onnx'))) return true
    return fs.readdirSync(dir).some((file) => file.endsWith('.gguf'))
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
