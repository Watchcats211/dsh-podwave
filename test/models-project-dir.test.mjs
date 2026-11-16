import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

// 模型默认下载位置要「跟着项目走」：
// 1) 插件跑在 git 工作树里（开发）→ 项目下的 models/
// 2) 插件从本地路径安装（profile 里写 file:/path/to/dsh-podwave）→ 那个项目下的 models/
// 3) 家目录里已经有模型 → 继续沿用，不悄悄搬家
// 4) 以上都不成立（npm 安装）→ 家目录
const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-project-models-'))
const dataDir = path.join(home, '.podwave')
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = dataDir

const models = await import('../src/models.js')

function touchFile(file) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, 'x')
}

function makeProject(dir, { git = true } = {}) {
  fs.mkdirSync(path.join(dir, 'src'), { recursive: true })
  if (git) fs.mkdirSync(path.join(dir, '.git'))
  fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify({ name: 'dsh-podwave', version: '0.0.0' }))
  return path.join(dir, 'src')
}

test('projectRoot walks up to the directory holding .git', () => {
  const project = path.join(home, 'proj-a')
  const start = makeProject(project)
  assert.equal(models.projectRoot(start), project)
  assert.equal(models.projectModelsDir(start), path.join(project, 'models'))
})

test('projectRoot returns empty when no git root is found', () => {
  const plain = path.join(home, 'plain-a')
  fs.mkdirSync(plain, { recursive: true })
  assert.equal(models.projectRoot(plain), '')
  assert.equal(models.projectModelsDir(plain), '')
})

test('a file: install makes the plugin project the default models location', () => {
  const project = path.join(home, 'proj-b')
  const start = makeProject(project)
  // profile 目录：把包装进 node_modules 并写 file: 依赖
  const profile = path.join(home, 'profile-b')
  fs.mkdirSync(path.join(profile, 'node_modules', 'dsh-podwave'), { recursive: true })
  fs.writeFileSync(
    path.join(profile, 'package.json'),
    JSON.stringify({ name: 'dsh-profile', dependencies: { 'dsh-podwave': `file:${project}` } }),
  )
  const installedStart = path.join(profile, 'node_modules', 'dsh-podwave', 'src')
  fs.mkdirSync(installedStart, { recursive: true })
  // 安装目录本身没有 .git，只能靠 profile 的 file: 依赖认出来
  assert.equal(models.projectRoot(installedStart), '')
  assert.equal(models.installModelsDir(installedStart), path.join(project, 'models'))
})

test('an npm install keeps the home directory default', () => {
  const profile = path.join(home, 'profile-c')
  fs.mkdirSync(path.join(profile, 'node_modules', 'dsh-podwave', 'src'), { recursive: true })
  fs.writeFileSync(
    path.join(profile, 'package.json'),
    JSON.stringify({ name: 'dsh-profile', dependencies: { 'dsh-podwave': '0.11.22' } }),
  )
  const start = path.join(profile, 'node_modules', 'dsh-podwave', 'src')
  assert.equal(models.installModelsDir(start), '')
})

test('existing models in the legacy location are adopted instead of abandoned', () => {
  const project = path.join(home, 'proj-d')
  const start = makeProject(project)
  // 家目录里已经有模型，项目里还没有 → 沿用家目录，不让用户重下 5 GB
  touchFile(path.join(dataDir, 'models', 'qwen3-asr-1.7b-8bit', 'model.safetensors'))
  assert.equal(models.defaultModelsDir(start), path.join(dataDir, 'models'))

  // 项目里一旦有了模型，就切到项目目录
  touchFile(path.join(project, 'models', 'sensevoice-small-int8', 'model.int8.onnx'))
  assert.equal(models.defaultModelsDir(start), path.join(project, 'models'))
})

test('an explicit configured directory always wins', async () => {
  const { updateSection } = await import('../src/config.js')
  const custom = path.join(home, 'custom-models')
  updateSection('models', { dir: custom })
  assert.equal(models.modelsDir(), custom)
  const summary = models.modelsSummary()
  assert.equal(summary.custom, true)
  updateSection('models', { dir: '' })
})
