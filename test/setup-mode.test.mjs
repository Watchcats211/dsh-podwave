// 安装分档：basic 只要 ffmpeg（配云端 API 用），local 才装运行时和本地模型。
import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-setup-mode-'))
process.env.HOME = home
process.env.USERPROFILE = home
const dataDir = path.join(home, '.podwave')
process.env.PODWAVE_DATA_DIR = dataDir
fs.mkdirSync(dataDir, { recursive: true })

const { plan } = await import('../src/setup.js')
const { updateSection } = await import('../src/config.js')

// 把模型目录指到一个空目录：否则本机已装好的模型会让 plan 跳过下载项，断言就变成看环境脸色。
updateSection('models', { dir: path.join(home, 'models-empty') })

test('basic 模式只装 ffmpeg，不带运行时和模型', () => {
  const basic = plan({ mode: 'basic' })
  assert.equal(basic.mode, 'basic')
  const kinds = basic.items.map((item) => item.kind)
  assert.ok(!kinds.includes('runtime'), `basic 不该要求 python 运行时：${JSON.stringify(basic.items)}`)
  assert.ok(!kinds.includes('model'), `basic 不该下载模型：${JSON.stringify(basic.items)}`)
})

test('local 模式才列运行时和模型', () => {
  const local = plan({ mode: 'local' })
  assert.equal(local.mode, 'local')
  const kinds = local.items.map((item) => item.kind)
  // 干净的临时 HOME 里两种都没有，所以这两类一定出现在计划里。
  assert.ok(kinds.includes('runtime'), `local 至少要列 python 运行时：${JSON.stringify(local.items)}`)
  assert.ok(kinds.includes('model'), `local 应列出模型下载项：${JSON.stringify(local.items)}`)
  assert.ok(local.totalBytes > plan({ mode: 'basic' }).totalBytes, '本地档的总字节数应该更大')
})

test('不传 mode 时默认 basic —— 新用户不该被 2.4 GB 模型拦住', () => {
  assert.equal(plan().mode, 'basic')
})
