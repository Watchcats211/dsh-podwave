// 真机（CI 的 windows-latest）校验：非 zip 压缩包能解开（Issue #1 的 #5）。
// 单元测试里伪造 PATH 让 tar 失败；这里在真 Windows 上验证默认候选就能成功，
// 并且安全路径检查仍然生效。
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

if (process.platform !== 'win32') {
  console.log(`跳过：这是 Windows 专用校验（当前 ${process.platform}）`)
  process.exit(0)
}

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-arc-'))
process.env.HOME = home
process.env.USERPROFILE = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')
fs.mkdirSync(process.env.PODWAVE_DATA_DIR, { recursive: true })

const { extractArchive, isSafeArchivePath } = await import('../../src/downloader.js')

const work = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-arc-src-'))
const src = path.join(work, 'src')
fs.mkdirSync(src, { recursive: true })
fs.writeFileSync(path.join(src, 'model.onnx'), 'fake-onnx-bytes')

// 用 Windows 自带的 bsdtar 打包，再交给插件自己的 extractArchive 解压。
// 这一步能真正抓到「绝对路径 C:/... 被 GNU tar 当成远程主机」这类 Windows 专属问题。
const archive = path.join(work, 'sample.tar.bz2')
const systemTar = path.join(process.env.SystemRoot || 'C:\\Windows', 'System32', 'tar.exe')
execFileSync(systemTar, ['-cjf', archive, '-C', src, 'model.onnx'])

const out = path.join(work, 'out')
fs.mkdirSync(out, { recursive: true })
await extractArchive(archive, out)

const extracted = path.join(out, 'model.onnx')
assert.ok(fs.existsSync(extracted), 'tar.bz2 必须能解出 model.onnx')
assert.equal(fs.readFileSync(extracted, 'utf8'), 'fake-onnx-bytes')

// 安全路径检查必须仍然生效（别为了兜底把 zip-slip 防护丢掉了）
assert.equal(isSafeArchivePath('a/b.txt'), true)
assert.equal(isSafeArchivePath('../escape.txt'), false)
assert.equal(isSafeArchivePath('C:/Windows/x.txt'), false)
assert.equal(isSafeArchivePath('/abs.txt'), false)

console.log('Windows 压缩包解压与路径安全检查校验通过')
