import test from 'node:test'
import assert from 'node:assert/strict'
import { ffmpegAsset, llamaAsset, platformKey } from '../src/catalog.js'
import { ffmpegPath, venvBin, venvPython } from '../src/platform.js'

test('platformKey 覆盖三大平台', () => {
  assert.equal(platformKey({ os: 'win32', arch: 'x64' }), 'win32-x64')
  assert.equal(platformKey({ os: 'darwin', arch: 'arm64' }), 'darwin-arm64')
  assert.equal(platformKey({ os: 'linux', arch: 'x64' }), 'linux-x64')
})

test('Windows 有 llama.cpp 与 ffmpeg 资产', () => {
  const llama = llamaAsset({ os: 'win32', arch: 'x64' })
  const ffmpeg = ffmpegAsset({ os: 'win32', arch: 'x64' })
  assert.ok(llama && llama.name.endsWith('.zip'))
  assert.ok(ffmpeg && ffmpeg.file.endsWith('.zip'))
  assert.ok(ffmpeg.bytes > 150_000_000)
})

test('缺少资产的平台返回 null', () => {
  assert.equal(ffmpegAsset({ os: 'darwin', arch: 'arm64' }), null)
})

test('虚拟环境路径按平台布局', () => {
  const dir = '/tmp/podwave-venv'
  if (process.platform === 'win32') {
    assert.ok(venvPython(dir).endsWith('Scripts\\python.exe') || venvPython(dir).endsWith('Scripts/python.exe'))
    assert.ok(venvBin('python', dir).endsWith('python.exe'))
  } else {
    assert.ok(venvPython(dir).endsWith('/bin/python'))
    assert.ok(venvBin('python', dir).endsWith('/bin/python'))
  }
})

test('ffmpeg 能被探测到或明确为空', () => {
  const found = ffmpegPath()
  assert.ok(found === null || typeof found === 'string')
})
