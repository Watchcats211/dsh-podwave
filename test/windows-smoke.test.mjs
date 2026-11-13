// Windows 冒烟：在真实的 windows-latest CI runner 上验证平台检测、推荐引擎与安装计划。
// 其他平台会跳过；它的价值是把「只在 Windows 会走到的路径」也纳入持续验证。
import { test } from 'node:test'
import assert from 'node:assert/strict'

const onWindows = process.platform === 'win32'

test('windows: platform detection and engine recommendation', { skip: !onWindows }, async () => {
  const { detectPlatform, recommendEngine, venvPython } = await import('../src/platform.js')
  const platform = detectPlatform()
  assert.equal(platform.os, 'win32')
  assert.equal(platform.isWindows, true)
  const engine = recommendEngine(platform)
  assert.equal(engine.id, 'onnx-llama')
  assert.equal(engine.asr, 'sensevoice-int8')
  assert.ok(['hy-mt2-1.8b-2bit', 'hy-mt2-1.8b-q4km'].includes(engine.translate))
  assert.match(venvPython(), /Scripts[\\/]python\.exe$/i)
})

test('windows: scan and plan never suggest 1.25bit and stay portable', { skip: !onWindows }, async () => {
  const { scan, plan } = await import('../src/setup.js')
  const scanned = scan()
  assert.equal(scanned.platform.os, 'win32')
  assert.ok(Array.isArray(scanned.components) && scanned.components.length > 0)
  for (const component of scanned.components) {
    assert.ok(component.id, '组件必须有 id')
    assert.equal(typeof component.ready, 'boolean', `${component.id} 的 ready 必须是布尔`)
  }

  const planned = plan({ source: 'auto' })
  assert.ok(Array.isArray(planned.items) && planned.items.length > 0, '全新 runner 应该有需要安装的项目')
  assert.ok(planned.totalBytes > 0, '预计下载总量应大于 0')
  for (const item of planned.items) {
    assert.ok(item.bytes > 0, `${item.id} 应有预计体积`)
    assert.ok(!String(item.label).includes('1.25bit'), '不应推荐主线 llama.cpp 不支持的 1.25bit')
  }
  assert.ok(!planned.items.some((item) => item.id === 'hy-mt2-1.8b-1.25bit'))
  assert.ok(!JSON.stringify(planned).includes('/opt/homebrew'), '计划里不应出现 macOS 专用路径')
})

test('windows: xiaoyuzhou helpers stay portable', { skip: !onWindows }, async () => {
  const xyz = await import('../src/xyz.js')
  assert.equal(xyz.extractPid('https://www.xiaoyuzhoufm.com/podcast/6013f9f58e2f7ee375cf4216'), '6013f9f58e2f7ee375cf4216')
  assert.equal(xyz.isXyzId('xyzabc123'), true)
  assert.equal(xyz.eidFromId('xyzabc123'), 'abc123')
  assert.equal(typeof xyz.xyzStatus().loggedIn, 'boolean')
})
