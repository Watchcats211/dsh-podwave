// Windows 兼容性回归测试（Issue #1）。
// 这些用例全部在「本机」上跑，但断言的是跨平台行为：
// 平台相关逻辑都通过显式传入的 platform 对象驱动，所以 macOS 上也能验证 Windows 分支。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, existsSync, chmodSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import os from 'node:os'
import path from 'node:path'

const home = mkdtempSync(path.join(os.tmpdir(), 'podwave-win-'))
process.env.HOME = home
process.env.USERPROFILE = home
const dataDir = path.join(home, '.podwave')
process.env.PODWAVE_DATA_DIR = dataDir
mkdirSync(dataDir, { recursive: true })

const { recommendEngine } = await import('../src/platform.js')
const { expectedModels, artifactByDir, CATALOG } = await import('../src/catalog.js')
const { CONFIG_DEFAULTS, loadConfig, getSection, updateSection } = await import('../src/config.js')
const { expandHome } = await import('../src/library.js')

// 一个典型的 Windows 机器：x64 + CUDA + 32 GB 内存。
const winPlatform = {
  os: 'win32',
  osLabel: 'Windows',
  arch: 'x64',
  isMac: false,
  isWindows: true,
  isLinux: false,
  appleSilicon: false,
  gpu: 'cuda',
  memoryGB: 32,
  mlxCapable: false,
  cuda: true,
}

test('Windows 平台推荐 ONNX + llama.cpp，绝不落到 MLX 分支', () => {
  const engine = recommendEngine(winPlatform)
  assert.equal(engine.id, 'onnx-llama')
  assert.equal(engine.asr, 'sensevoice-int8')
  assert.match(engine.translate, /^hy-mt2-1\.8b-/)
  // MLX 组件一个都不能出现在推荐里
  for (const key of [engine.asr, engine.translate]) {
    assert.notEqual(CATALOG[key].engine, 'mlx', `${key} 不该是 MLX 引擎`)
    assert.ok(CATALOG[key].platforms.includes('*'), `${key} 应该在 Windows 可用`)
  }
})

test('expectedModels 给出当前平台真正能装的模型目录名', () => {
  const engine = recommendEngine(winPlatform)
  const models = expectedModels(winPlatform, engine)
  assert.equal(models.asrModel, 'sensevoice-small-int8')
  assert.equal(models.asrEngine, 'onnx')
  assert.notEqual(models.asrModel, 'qwen3-asr-1.7b-8bit')
  assert.ok(!models.translateModel.includes('mlx'), '翻译模型不该是 MLX 目录')
})

test('Apple Silicon 仍然推荐 MLX（回归保护：别把 Mac 也改坏）', () => {
  const macPlatform = { ...winPlatform, os: 'darwin', osLabel: 'macOS', arch: 'arm64', isMac: true, isWindows: false, appleSilicon: true, mlxCapable: true, gpu: 'metal' }
  const engine = recommendEngine(macPlatform)
  assert.equal(engine.id, 'mlx')
  assert.equal(engine.asr, 'qwen3-asr-1.7b-8bit')
})

test('artifactByDir 按目录名反查引擎，不靠正则猜', () => {
  assert.equal(artifactByDir('sensevoice-small-int8', 'asr').engine, 'onnx')
  assert.equal(artifactByDir('qwen3-asr-1.7b-8bit', 'asr').engine, 'mlx')
  assert.equal(artifactByDir('hy-mt2-1.8b-q4km', 'translate').engine, 'llama')
  // 用 catalog key 也能查到（兼容旧配置里写 id 的情况）
  assert.equal(artifactByDir('sensevoice-int8', 'asr').engine, 'onnx')
  // 未知名字返回 null，调用方才知道该退回兜底逻辑
  assert.equal(artifactByDir('totally-bogus-model', 'asr'), null)
  assert.equal(artifactByDir('', 'asr'), null)
})

test('默认配置里的模型必须是本平台能装的，不能写死 MLX', () => {
  const models = CONFIG_DEFAULTS.models
  assert.ok(models.asrModel, '默认必须给出转写模型')
  assert.ok(models.translateModel, '默认必须给出翻译模型')
  const artifact = artifactByDir(models.asrModel, 'asr')
  assert.ok(artifact, `默认转写模型 ${models.asrModel} 必须能在 catalog 里找到`)
  // 本机是 macOS arm64 时允许 MLX，否则必须是非 MLX 的通用模型。
  if (process.platform !== 'darwin' || process.arch !== 'arm64') {
    assert.notEqual(artifact.engine, 'mlx', `${process.platform}-${process.arch} 不该默认 MLX 模型`)
  }
  // 关键：这些值要能在 catalog 里对应到该平台的目录，而不是硬编码字符串
  assert.equal(models.asrModel, artifact.dir)
})

test('另一个进程改了 config.json，本进程不会用旧快照覆盖它', () => {
  // 1. 本进程先加载，把一份快照塞进内存缓存
  const first = loadConfig()
  assert.ok(first.models.asrModel)

  // 2. 模拟「安装进程」在另一个进程里写盘（这里直接改文件，效果等价）
  const configFile = path.join(dataDir, 'config.json')
  const stored = JSON.parse(readFileSync(configFile, 'utf8'))
  stored.models = { asrModel: 'sensevoice-small-int8', translateModel: 'hy-mt2-1.8b-q4km' }
  // 加一个字段让文件大小/mtime 明确变化，避免同毫秒写入被指纹判定成「没变」
  stored.__externalWrite = 'installer'
  writeFileSync(configFile, JSON.stringify(stored, null, 2))

  // 3. 本进程再读：必须看到外部写入的值（缓存已失效）
  assert.equal(getSection('models').asrModel, 'sensevoice-small-int8')
  assert.equal(getSection('models').translateModel, 'hy-mt2-1.8b-q4km')

  // 4. 本进程保存一个无关 section：不能把模型回滚成旧值
  updateSection('ui', { sidebarCollapsed: true })
  const after = JSON.parse(readFileSync(configFile, 'utf8'))
  assert.equal(after.models.asrModel, 'sensevoice-small-int8', '保存 UI 设置不能覆盖安装器写入的模型')
  assert.equal(after.models.translateModel, 'hy-mt2-1.8b-q4km')
  assert.equal(after.ui.sidebarCollapsed, true)
})

test('expandHome 支持 Windows 环境变量与反斜杠', () => {
  process.env.PODWAVE_TEST_DIR = 'D:\\Media\\Podcasts'
  const withSuffix = expandHome('%PODWAVE_TEST_DIR%\\2024')
  // 环境变量必须被替换掉（path.resolve 在 POSIX 上会给它加 cwd 前缀，这里只关心替换本身）
  assert.ok(!withSuffix.includes('%PODWAVE_TEST_DIR%'), '环境变量没被展开')
  assert.ok(withSuffix.includes('D:\\Media\\Podcasts'), `展开结果里应保留变量值，实际：${withSuffix}`)
  if (process.platform === 'win32') {
    assert.equal(withSuffix, path.join('D:\\Media\\Podcasts', '2024'))
    assert.equal(expandHome('%PODWAVE_TEST_DIR%'), 'D:\\Media\\Podcasts')
  }
  // 未定义的环境变量原样保留，不要吞掉用户输入（path.resolve 会给它加 cwd 前缀，看子串即可）
  assert.ok(expandHome('%PODWAVE_NOT_DEFINED%\\x').includes('%PODWAVE_NOT_DEFINED%'))
  // 老行为仍然有效
  assert.equal(expandHome('~'), os.homedir())
  assert.equal(expandHome(path.join('~', 'Music')), path.join(os.homedir(), 'Music'))
})

test('venv 路径按平台拼 bin/ 或 Scripts/', async () => {
  const { venvBin, venvPython } = await import('../src/platform.js')
  const dir = path.join(home, 'fake-venv')
  const bin = venvBin('mlx-qwen3-asr', dir)
  const python = venvPython(dir)
  if (process.platform === 'win32') {
    assert.ok(bin.endsWith('mlx-qwen3-asr.exe'))
    assert.ok(bin.includes('Scripts'))
    assert.ok(python.endsWith('python.exe'))
  } else {
    assert.ok(bin.endsWith(path.join('bin', 'mlx-qwen3-asr')))
    assert.equal(path.basename(python), 'python')
  }
})

test('非 zip 压缩包在 PATH 上的 tar 坏掉时仍能解压（GNU tar 绝对路径陷阱）', async () => {
  const { extractArchive } = await import('../src/downloader.js')
  const work = mkdtempSync(path.join(os.tmpdir(), 'podwave-tar-'))
  const src = path.join(work, 'src')
  mkdirSync(src, { recursive: true })
  writeFileSync(path.join(src, 'hello.txt'), 'podwave')

  // 用系统 tar 打一个 .tar.gz（打包本身不受 PATH 影响，直接给绝对路径）
  const archive = path.join(work, 'sample.tar.gz')
  const systemTar = process.platform === 'win32'
    ? path.join(process.env.SystemRoot || 'C:\\Windows', 'System32', 'tar.exe')
    : 'tar'
  execFileSync(systemTar, ['-czf', archive, '-C', src, 'hello.txt'])

  // 模拟 Git-Bash / MSYS 把 GNU tar 排到 PATH 首位：它会把 C:/... 当远程主机。
  // 造一个必定失败 exit 128 的假冒 tar。
  const fakeBin = path.join(work, 'fakebin')
  mkdirSync(fakeBin, { recursive: true })
  const fakeTar = path.join(fakeBin, process.platform === 'win32' ? 'tar.bat' : 'tar')
  if (process.platform === 'win32') {
    writeFileSync(fakeTar, '@echo off\r\necho tar: Cannot connect to C: resolve failed 1>&2\r\nexit /b 128\r\n')
  } else {
    writeFileSync(fakeTar, '#!/bin/sh\necho "tar: Cannot connect to C: resolve failed" >&2\nexit 128\n')
    chmodSync(fakeTar, 0o755)
  }

  const out = path.join(work, 'out')
  mkdirSync(out, { recursive: true })
  const savedPath = process.env.PATH
  process.env.PATH = `${fakeBin}${path.delimiter}${savedPath}`
  try {
    await extractArchive(archive, out)
  } finally {
    process.env.PATH = savedPath
  }
  assert.ok(existsSync(path.join(out, 'hello.txt')), '应该靠后续候选成功解压，而不是直接失败')
  assert.equal(readFileSync(path.join(out, 'hello.txt'), 'utf8'), 'podwave')
})

test('verify() 的模型配置检查会比对本平台应有的模型，而不是只判非空', async () => {
  const { verify } = await import('../src/setup.js')
  const configFile = path.join(dataDir, 'config.json')
  const stored = JSON.parse(readFileSync(configFile, 'utf8'))

  // 塞一个本平台肯定不对的模型名（Mac 专用 / 纯瞎编）
  stored.models = { asrModel: 'totally-bogus-model', translateModel: 'also-bogus' }
  writeFileSync(configFile, JSON.stringify(stored, null, 2))

  const report = await verify()
  const check = report.checks.find((item) => item.id === 'config')
  assert.ok(check, 'verify 必须包含模型配置检查')
  assert.equal(check.ok, false, '配置与平台不符时必须报失败，不能再亮绿')
  assert.ok(/应为/.test(check.detail), `detail 要写清差异，实际是：${check.detail}`)
  assert.ok(check.detail.includes('totally-bogus-model'), 'detail 要包含当前值，方便用户排查')
})
