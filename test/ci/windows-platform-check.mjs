// 真机（CI 的 windows-latest）校验：默认模型与「安装检查」必须按真实平台判断。
// 单元测试里用的是伪造的 platform 对象；这里跑的是 detectPlatform() 的真实结果，
// 能抓到「只有真在 Windows 上才会暴露」的问题（Issue #1 的 #1/#2/#3）。
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-wincheck-'))
process.env.HOME = home
process.env.USERPROFILE = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')
fs.mkdirSync(process.env.PODWAVE_DATA_DIR, { recursive: true })

// 这个脚本是给 CI 的 windows-latest 专用的：它要验证的是「真实 Windows 上」的判定。
// 在 macOS/Linux 上跑没有意义（默认模型本来就不同），直接跳过。
if (process.platform !== 'win32') {
  console.log(`跳过：这是 Windows 专用校验（当前 ${process.platform}）`)
  process.exit(0)
}

const { detectPlatform, recommendEngine } = await import('../../src/platform.js')
const { expectedModels, artifactByDir } = await import('../../src/catalog.js')
const { CONFIG_DEFAULTS } = await import('../../src/config.js')
const { verify } = await import('../../src/setup.js')

const platform = detectPlatform()
const engine = recommendEngine(platform)
const expected = expectedModels(platform, engine)

console.log(`平台：${platform.osLabel} ${platform.arch} · 引擎：${engine.id}`)
console.log(`期望模型：${expected.asrModel} / ${expected.translateModel}`)
console.log(`默认模型：${CONFIG_DEFAULTS.models.asrModel} / ${CONFIG_DEFAULTS.models.translateModel}`)

// 1. 默认配置必须是本平台真能装的模型
assert.equal(
  CONFIG_DEFAULTS.models.asrModel,
  expected.asrModel,
  `默认转写模型应为 ${expected.asrModel}，实际 ${CONFIG_DEFAULTS.models.asrModel}`,
)
assert.equal(
  CONFIG_DEFAULTS.models.translateModel,
  expected.translateModel,
  `默认翻译模型应为 ${expected.translateModel}，实际 ${CONFIG_DEFAULTS.models.translateModel}`,
)

// 2. Windows 上绝不能默认 MLX 模型（platform 只有 darwin-arm64）
if (process.platform === 'win32') {
  for (const name of [CONFIG_DEFAULTS.models.asrModel, CONFIG_DEFAULTS.models.translateModel]) {
    const artifact = artifactByDir(name)
    assert.ok(artifact, `默认模型 ${name} 必须能在 catalog 里找到`)
    assert.notEqual(artifact.engine, 'mlx', `Windows 上默认模型不能是 MLX：${name}`)
    assert.ok(!artifact.platforms || artifact.platforms.includes('*'), `${name} 必须在当前平台可安装`)
  }
  // 引擎判定必须认出来这是 ONNX/SenseVoice，而不是落进 MLX 分支
  assert.equal(artifactByDir(expected.asrModel, 'asr').engine, 'onnx')
}

// 3. verify() 比对的是「本平台应有的模型」，不是只判非空
const configFile = path.join(process.env.PODWAVE_DATA_DIR, 'config.json')
fs.writeFileSync(
  configFile,
  JSON.stringify({ schemaVersion: 1, models: { asrModel: 'qwen3-asr-1.7b-8bit', translateModel: 'hy-mt2-1.8b-4bit' } }, null, 2),
)
const wrong = await verify()
const wrongCheck = wrong.checks.find((item) => item.id === 'config')
assert.ok(wrongCheck, 'verify() 必须包含 config 检查')
assert.equal(wrongCheck.ok, false, '配置成 Mac 专用模型时必须报失败')
console.log(`配置错误时的提示：${wrongCheck.detail}`)

// 4. 写对之后这一项必须通过
fs.writeFileSync(
  configFile,
  JSON.stringify({ schemaVersion: 1, models: { asrModel: expected.asrModel, translateModel: expected.translateModel } }, null, 2),
)
const right = await verify()
const rightCheck = right.checks.find((item) => item.id === 'config')
assert.equal(rightCheck.ok, true, `配置正确时该项应通过，实际：${rightCheck.detail}`)

console.log('Windows 平台默认模型与安装检查校验通过')
