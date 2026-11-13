// CI 专用：在真实 runner 上下载 llama.cpp 资产、解压并确认 llama-server 能启动。
// 覆盖 Windows 上最容易出问题的两步：zip 解压与二进制依赖。
import { spawnSync } from 'node:child_process'
import { readdirSync } from 'node:fs'
import path from 'node:path'
import { DATA_DIR } from '../../src/state.js'
import { llamaAsset } from '../../src/catalog.js'
import { detectPlatform } from '../../src/platform.js'
import { downloadArtifact } from '../../src/downloader.js'

const platform = detectPlatform()
const asset = llamaAsset(platform)
if (!asset) {
  console.log('该平台没有预编译 llama.cpp，跳过')
  process.exit(0)
}

const artifact = {
  id: 'llama-ci',
  dir: path.join('_ci', 'llama'),
  source: { type: 'github-assets', assets: [{ url: asset.url, file: asset.name, extract: true }] },
}
const result = await downloadArtifact(artifact, { sourceId: 'cn' })
console.log('已下载', result.files.map((file) => file.path).join(', '), result.bytes, '字节')

function findBinary(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      const nested = findBinary(full)
      if (nested) return nested
    } else if (entry.name === (process.platform === 'win32' ? 'llama-server.exe' : 'llama-server')) {
      return full
    }
  }
  return null
}

const root = path.join(DATA_DIR, 'models', '_ci', 'llama')
const binary = findBinary(root)
if (!binary) throw new Error(`解压后没有找到 llama-server：${root}`)

const run = spawnSync(binary, ['--version'], { encoding: 'utf8', timeout: 30000 })
const output = `${run.stdout || ''}${run.stderr || ''}`.trim()
if (run.status !== 0) throw new Error(`llama-server 启动失败（exit ${run.status}）：${output.slice(0, 400)}`)
console.log('llama-server 可启动：', output.split('\n')[0])
