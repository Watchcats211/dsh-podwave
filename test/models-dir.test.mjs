import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

// 模型目录可配置：默认在家目录，用户可以改到任意目录并把已有模型搬过去。
// 这里验证「默认位置 / 换位置 / 迁移 / 拒绝不合法路径 / 删除」这几条，
// 避免以后再有人把目录写死回某个常量。
const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-models-'))
const dataDir = path.join(home, '.podwave')
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = dataDir

const models = await import('../src/models.js')

function makeModel(root, name, files = { 'model.safetensors': 1024 }) {
  const dir = path.join(root, name)
  fs.mkdirSync(dir, { recursive: true })
  for (const [file, bytes] of Object.entries(files)) {
    const target = path.join(dir, file)
    fs.mkdirSync(path.dirname(target), { recursive: true })
    fs.writeFileSync(target, Buffer.alloc(bytes, 1))
  }
  return dir
}

const defaultRoot = path.join(dataDir, 'models')

test('defaults to <data>/models and is not marked custom', () => {
  const summary = models.modelsSummary()
  assert.equal(summary.dir, defaultRoot)
  assert.equal(summary.custom, false)
  assert.equal(summary.totalBytes, 0)
})

test('switching directory creates it and is reported as custom', () => {
  const next = path.join(home, 'ProjectPodwaveModels')
  const result = models.setModelsDir(next, { move: false })
  assert.equal(result.dir, next)
  assert.equal(result.custom, true)
  assert.ok(fs.existsSync(next))
  assert.equal(models.modelsDir(), next)
  // 换回默认，后续用例从干净状态开始
  models.setModelsDir('', { move: false })
  assert.equal(models.modelsDir(), defaultRoot)
})

test('migrating moves existing model directories to the new root', () => {
  makeModel(defaultRoot, 'qwen3-asr-1.7b-8bit', { 'model.safetensors': 2048 })
  makeModel(defaultRoot, 'hy-mt2-1.8b-4bit', { 'model.safetensors': 512 })
  const next = path.join(home, 'moved-models')
  const result = models.setModelsDir(next)
  assert.deepEqual(result.moved.sort(), ['hy-mt2-1.8b-4bit', 'qwen3-asr-1.7b-8bit'])
  assert.ok(fs.existsSync(path.join(next, 'qwen3-asr-1.7b-8bit', 'model.safetensors')))
  assert.ok(fs.existsSync(path.join(next, 'hy-mt2-1.8b-4bit', 'model.safetensors')))
  // 旧位置不该留下模型目录
  assert.equal(fs.existsSync(path.join(defaultRoot, 'qwen3-asr-1.7b-8bit')), false)
  assert.ok(result.totalBytes >= 2560)
})

test('listing reports size, purpose and in-use flag', () => {
  const items = models.listModels()
  const asr = items.find((item) => item.name === 'qwen3-asr-1.7b-8bit')
  assert.ok(asr)
  assert.equal(asr.kind, 'asr')
  assert.equal(asr.kindLabel, '转写')
  assert.equal(asr.bytes, 2048)
  assert.equal(asr.inUse, true)
  const translate = items.find((item) => item.name === 'hy-mt2-1.8b-4bit')
  assert.equal(translate.inUse, true)
})

test('rejects relative paths and nested directories', () => {
  assert.throws(() => models.setModelsDir('models/podwave', { move: false }), /绝对路径/)
  const current = models.modelsDir()
  assert.throws(() => models.setModelsDir(path.join(current, 'inner'), { move: false }), /子目录/)
  assert.throws(() => models.setModelsDir(path.dirname(current), { move: false }), /包含/)
})

test('refuses to delete the model in use but deletes unused ones', () => {
  const root = models.modelsDir()
  makeModel(root, 'hy-mt2-1.8b-q4km', { 'model.gguf': 256 })
  assert.throws(() => models.removeModel('qwen3-asr-1.7b-8bit'), /正在使用中/)
  const summary = models.removeModel('hy-mt2-1.8b-q4km')
  assert.equal(fs.existsSync(path.join(root, 'hy-mt2-1.8b-q4km')), false)
  assert.equal(summary.items.some((item) => item.name === 'hy-mt2-1.8b-q4km'), false)
  assert.throws(() => models.removeModel('../etc'), /不合法/)
})

test('a broken dir value in config falls back to the default root', async () => {
  const { updateSection } = await import('../src/config.js')
  updateSection('models', { dir: 'not-absolute' })
  assert.equal(models.modelsDir(), defaultRoot)
  updateSection('models', { dir: '' })
})
