// 多来源下载器：Hugging Face / hf-mirror / ModelScope / GitHub / gh-proxy。
// 支持断点续传（.part + Range）、跳过大文件已完成的情况、逐文件进度回调。
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import { spawn } from 'node:child_process'
import crypto from 'node:crypto'
import { Readable } from 'node:stream'
import { pipeline } from 'node:stream/promises'

const UA = 'dsh-podwave-setup/1.0'

function timeout(ms) {
  return AbortSignal.timeout(ms)
}

export async function probe(url, ms = 8000) {
  const started = Date.now()
  try {
    const res = await fetch(url, {
      headers: { 'user-agent': UA, range: 'bytes=0-0' },
      redirect: 'follow',
      signal: timeout(ms),
    })
    const ok = res.ok || res.status === 206 || res.status === 416
    await res.body?.cancel().catch(() => {})
    return { ok, status: res.status, ms: Date.now() - started }
  } catch (error) {
    return { ok: false, status: 0, ms: Date.now() - started, error: String(error.message || error) }
  }
}

export async function listHfRepo(repo, base, { include, skip } = {}) {
  const url = `${base}/api/models/${repo}/tree/main?recursive=true`
  const res = await fetch(url, { headers: { 'user-agent': UA }, redirect: 'follow', signal: timeout(20000) })
  if (!res.ok) throw new Error(`读取文件列表失败（${base} ${res.status}）`)
  const entries = await res.json()
  return entries
    .filter((entry) => entry.type === 'file')
    .filter((entry) => (include ? include.includes(entry.path) : true))
    .filter((entry) => (skip ? !skip.some((re) => re.test(entry.path)) : true))
    .map((entry) => ({ path: entry.path, size: entry.size || 0, sha256: entry.lfs?.oid || '' }))
}

export async function directHfFiles(repo, base, { include, files, skip } = {}) {
  const wanted = include || files
  if (!wanted || !wanted.length) throw new Error('该资源没有配置固定文件清单，无法在镜像上直接下载')
  const result = []
  for (const file of wanted) {
    if (skip && skip.some((re) => re.test(file))) continue
    const encoded = file.split('/').map(encodeURIComponent).join('/')
    const url = `${base}/${repo}/resolve/main/${encoded}`
    let size = 0
    try {
      const res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: timeout(20000) })
      size = Number(res.headers.get('content-length') || 0)
      if (!res.ok) continue
    } catch {
      // 允许大小未知，下载时再统计
    }
    result.push({ path: file, size })
  }
  if (!result.length) throw new Error('镜像上没有找到清单里的文件')
  return result
}

export async function listMsRepo(repo) {
  const url = `https://modelscope.cn/api/v1/models/${repo}/repo/files?Revision=master&Recursive=true`
  const res = await fetch(url, { headers: { 'user-agent': UA }, redirect: 'follow', signal: timeout(20000) })
  if (!res.ok) throw new Error(`ModelScope 文件列表失败（${res.status}）`)
  const data = await res.json()
  const files = data?.Data?.Files || []
  return files
    .filter((file) => file.Type !== 'tree' && file.Size > 0)
    .map((file) => ({ path: file.Path, size: file.Size || 0 }))
}

export function isSafeArchivePath(name) {
  const value = String(name || '').replace(/\\/g, '/')
  if (!value || value.startsWith('/')) return false
  if (/^[a-zA-Z]:/.test(value)) return false
  return !value.split('/').some((part) => part === '..')
}

function runCapture(cmd, args) {
  return new Promise((resolve) => {
    let output = ''
    const child = spawn(cmd, args, { stdio: ['ignore', 'pipe', 'ignore'] })
    child.stdout.on('data', (chunk) => {
      output += chunk.toString('utf8')
    })
    child.on('error', () => resolve(null))
    child.on('exit', (code) => resolve(code === 0 ? output : null))
  })
}

// 非 zip 压缩包（.tar.bz2 / .tar.gz / .tar.xz）的条目列表。
// GNU tar（Git for Windows、MSYS、Cygwin 会把它的目录排到 PATH 前面）会把 C:/... 当成
// host:path 远程语法，直接 `tar -tf C:/...` 会报 "Cannot connect to C: resolve failed"。
// 所以这里也要多候选，否则安全检查会被静默跳过。
async function listArchiveEntries(file) {
  const lower = file.toLowerCase()
  if (lower.endsWith('.zip')) {
    const candidates = [
      ['unzip', ['-Z1', file]],
      ['tar', ['-tf', file]],
      ['python3', ['-c', 'import zipfile,sys;print("\n".join(zipfile.ZipFile(sys.argv[1]).namelist()))', file]],
    ]
    for (const [cmd, args] of candidates) {
      const output = await runCapture(cmd, args)
      if (output) return output.split(/\r?\n/).filter(Boolean)
    }
    return null
  }
  for (const [cmd, args] of tarListAttempts(file)) {
    const output = await runCapture(cmd, args)
    if (output) return output.split(/\r?\n/).filter(Boolean)
  }
  return null
}

function systemTar() {
  if (process.platform !== 'win32') return null
  const root = process.env.SystemRoot || process.env.windir || 'C:\\Windows'
  return path.join(root, 'System32', 'tar.exe')
}

// 解压/列目录的候选命令。顺序有意义：
// 1. 裸 tar：bsdtar（Windows 自带、macOS 自带）与 GNU tar 都能跑相对路径。
// 2. --force-local：只有 GNU tar 认，用来救「绝对路径被当成远程主机」的情况。
//    bsdtar 会明确拒绝这个选项，所以必须放在裸 tar 之后、失败后才轮到。
// 3. Windows 自带的 System32\tar.exe：显式绕开 PATH 上被 Git-Bash 顶掉的 GNU tar。
// 4. python -m tarfile：最后兜底，不依赖任何外部 tar。
function tarAttempts(file, destDir) {
  const list = [['tar', ['-xf', file, '-C', destDir]]]
  list.push(['tar', ['--force-local', '-xf', file, '-C', destDir]])
  const sysTar = systemTar()
  if (sysTar) list.push([sysTar, ['-xf', file, '-C', destDir]])
  list.push(['python', ['-m', 'tarfile', '-e', file, destDir]])
  list.push(['python3', ['-m', 'tarfile', '-e', file, destDir]])
  return list
}

function tarListAttempts(file) {
  const list = [['tar', ['-tf', file]]]
  list.push(['tar', ['--force-local', '-tf', file]])
  const sysTar = systemTar()
  if (sysTar) list.push([sysTar, ['-tf', file]])
  list.push(['python', ['-c', 'import sys,tarfile;print("\n".join(tarfile.open(sys.argv[1]).getnames()))', file]])
  list.push(['python3', ['-c', 'import sys,tarfile;print("\n".join(tarfile.open(sys.argv[1]).getnames()))', file]])
  return list
}

async function sha256File(file) {
  const hash = crypto.createHash('sha256')
  await pipeline(fs.createReadStream(file), hash)
  return hash.digest('hex')
}

const digestCache = new Map()

async function githubDigest(url) {
  try {
    const match = /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/releases\/download\/([^/]+)\/(.+)$/.exec(url)
    if (!match) return ''
    const [, owner, repo, tag, assetName] = match
    const key = `${owner}/${repo}@${tag}#${assetName}`
    if (digestCache.has(key)) return digestCache.get(key)
    const api =
      tag === 'latest'
        ? `https://api.github.com/repos/${owner}/${repo}/releases/latest`
        : `https://api.github.com/repos/${owner}/${repo}/releases/tags/${tag}`
    const res = await fetch(api, {
      headers: { 'user-agent': UA, accept: 'application/vnd.github+json' },
      signal: timeout(15000),
    })
    if (!res.ok) {
      digestCache.set(key, '')
      return ''
    }
    const data = await res.json()
    const asset = (data.assets || []).find((item) => item.name === decodeURIComponent(assetName))
    const digest = asset?.digest ? String(asset.digest).replace(/^sha256:/, '') : ''
    digestCache.set(key, digest)
    return digest
  } catch {
    return ''
  }
}

async function downloadOne(url, dest, { expected = 0, sha256 = '', onProgress, signal } = {}) {
  await fsp.mkdir(path.dirname(dest), { recursive: true })
  try {
    const stat = await fsp.stat(dest)
    if (expected && stat.size === expected) {
      if (sha256) {
        const actual = await sha256File(dest)
        if (actual.toLowerCase() === String(sha256).toLowerCase()) return { bytes: stat.size, skipped: true }
        await fsp.rm(dest, { force: true })
      } else {
        return { bytes: stat.size, skipped: true }
      }
    }
    if (expected && stat.size > expected) await fsp.rm(dest, { force: true })
  } catch {
    // 文件不存在
  }
  const part = `${dest}.part`
  let offset = 0
  try {
    offset = (await fsp.stat(part)).size
  } catch {
    offset = 0
  }
  const headers = { 'user-agent': UA }
  if (offset > 0) headers.range = `bytes=${offset}-`
  const res = await fetch(url, { headers, redirect: 'follow', signal: signal || timeout(600000) })
  if (res.status === 416) {
    await fsp.rename(part, dest)
    return { bytes: offset, skipped: false }
  }
  if (!res.ok) throw new Error(`下载失败 ${res.status}：${url}`)
  const write = fs.createWriteStream(part, { flags: offset > 0 ? 'a' : 'w' })
  let received = 0
  const source = Readable.fromWeb(res.body)
  source.on('data', (chunk) => {
    received += chunk.length
    onProgress?.({ delta: chunk.length, bytes: offset + received, expected })
  })
  await pipeline(source, write)
  const stat = await fsp.stat(part)
  if (expected && stat.size !== expected) throw new Error(`文件大小不符（期望 ${expected}，实际 ${stat.size}）`)
  if (sha256) {
    const actual = await sha256File(part)
    if (actual.toLowerCase() !== String(sha256).toLowerCase()) {
      await fsp.rm(part, { force: true })
      throw new Error('文件校验失败（sha256 不匹配），已丢弃下载内容')
    }
  }
  await fsp.rename(part, dest)
  return { bytes: stat.size, skipped: false }
}

export async function pickSource(sources, probeUrlFor) {
  const checks = sources.map(async (source) => {
    const url = probeUrlFor(source)
    const result = url ? await probe(url) : { ok: false, ms: 99999 }
    return { source, ...result }
  })
  const results = await Promise.all(checks)
  const ok = results.filter((item) => item.ok).sort((a, b) => a.ms - b.ms)
  if (!ok.length) throw new Error('所有下载来源都不可用，请检查网络')
  return ok[0].source
}

function sourceProbeUrl(source, artifact) {
  if (source.id === 'ms') {
    return `https://modelscope.cn/api/v1/models/${source.ms}/repo/files?Revision=master&Recursive=false`
  }
  if (source.id === 'cn' && artifact.source.type === 'github-assets') {
    return `https://gh-proxy.com/${artifact.source.assets[0].url}`
  }
  if (artifact.source.type === 'hf-repo') {
    return `${source.base}/api/models/${artifact.source.repo}`
  }
  if (artifact.source.type === 'hf-file') {
    return `${source.base}/${artifact.source.repo}/resolve/main/${artifact.source.file}`
  }
  if (artifact.source.type === 'github-assets') {
    return artifact.source.assets[0].url
  }
  return null
}

export async function downloadArtifact(artifact, { sourceId = 'auto', onProgress, signal } = {}) {
  const { sourcesFor } = await import('./catalog.js')
  const sources = sourcesFor(artifact.source)
  if (!sources.length) throw new Error('该资源没有配置下载来源')
  let source = sources[0]
  if (sourceId === 'intl' || sourceId === 'cn' || sourceId === 'ms') {
    source = sources.find((item) => item.id === sourceId) || sources[0]
  } else {
    source = await pickSource(sources, (item) => sourceProbeUrl(item, artifact))
  }
  const { modelsDir } = await import('./models.js')
  const destDir = path.join(modelsDir(), artifact.dir)
  const result = { source: source.id, sourceLabel: source.label, files: [], bytes: 0 }

  if (artifact.source.type === 'github-assets') {
    for (const asset of artifact.source.assets) {
      const url = source.id === 'cn' ? `https://gh-proxy.com/${asset.url}` : asset.url
      const dest = path.join(destDir, asset.file)
      const before = result.bytes
      const sha256 = await githubDigest(asset.url)
      const { bytes } = await downloadOne(url, dest, { sha256, onProgress, signal })
      result.bytes += bytes
      result.files.push({ path: asset.file, bytes })
      if (asset.extract) await extractArchive(dest, destDir)
      onProgress?.({ file: asset.file, delta: 0, bytes: result.bytes, expected: result.bytes })
      void before
    }
    return result
  }

  let files
  if (source.id === 'ms' && artifact.source.type === 'hf-file') {
    files = [{ path: artifact.source.file, size: artifact.approxBytes || 0 }]
  } else if (source.id === 'ms') {
    const all = await listMsRepo(source.ms)
    const wanted = artifact.source.include
    files = wanted ? all.filter((file) => wanted.includes(file.path)) : all.filter((file) => !isJunk(file.path))
  } else if (artifact.source.type === 'hf-repo') {
    const known = artifact.source.include || artifact.source.files
    if (source.id === 'cn' && known) {
      files = await directHfFiles(artifact.source.repo, source.base, {
        include: artifact.source.include,
        files: artifact.source.files,
        skip: artifact.source.skip,
      })
    } else {
      files = await listHfRepo(artifact.source.repo, source.base, {
        include: artifact.source.include,
        skip: artifact.source.skip,
      }).catch(async (error) => {
        if (!known) throw error
        return directHfFiles(artifact.source.repo, source.base, {
          include: artifact.source.include,
          files: artifact.source.files,
          skip: artifact.source.skip,
        })
      })
    }
  } else {
    files = [{ path: artifact.source.file, size: artifact.approxBytes || 0 }]
  }
  if (!files.length) throw new Error('这个下载源没有找到所需的文件，请换一条线路')
  const total = files.reduce((sum, file) => sum + file.size, 0)
  let done = 0
  for (const file of files) {
    const encoded = file.path.split('/').map(encodeURIComponent).join('/')
    const url =
      source.id === 'ms'
        ? `https://modelscope.cn/models/${source.ms}/resolve/master/${encoded}`
        : `${source.base}/${artifact.source.repo}/resolve/main/${encoded}`
    const dest = path.join(destDir, file.path)
    const { bytes } = await downloadOne(url, dest, {
      expected: file.size,
      sha256: file.sha256 || '',
      signal,
      onProgress: (event) => {
        done += event.delta
        onProgress?.({ file: file.path, delta: event.delta, bytes: done, expected: total })
      },
    })
    result.files.push({ path: file.path, bytes })
    result.bytes += bytes
  }
  return result
}

function isJunk(p) {
  return /^\.gitattributes$|^README|^LICENSE|^imgs\/|^train\/|\.md$/i.test(p)
}

function runExtract(cmd, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { stdio: 'ignore' })
    child.on('error', reject)
    child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} 解压失败（${code}）`))))
  })
}

export async function extractArchive(file, destDir) {
  const entries = await listArchiveEntries(file)
  if (entries && entries.length) {
    const unsafe = entries.find((entry) => !isSafeArchivePath(entry))
    if (unsafe) throw new Error(`压缩包包含不安全路径：${unsafe}`)
  }
  const lower = file.toLowerCase()
  const attempts = []
  if (lower.endsWith('.zip')) {
    attempts.push(['unzip', ['-q', '-o', file, '-d', destDir]])
    attempts.push(['tar', ['-xf', file, '-C', destDir]])
    attempts.push(['powershell.exe', ['-NoProfile', '-Command', `Expand-Archive -LiteralPath '${file}' -DestinationPath '${destDir}' -Force`]])
    attempts.push(['python3', ['-m', 'zipfile', '-e', file, destDir]])
    attempts.push(['python', ['-m', 'zipfile', '-e', file, destDir]])
  } else {
    // 之前这里只有一次裸 tar：只要 PATH 上的 tar 是 GNU tar（Git for Windows / MSYS / Cygwin
    // 都会排到前面），Windows 的 C:/ 绝对路径就会被当成 host:path，报
    // "tar: Cannot connect to C: resolve failed"（exit 128）。而这发生在安装最后一步
    // （说话人分离模型），前面 1.6 GB 都下完了，整次安装却被判失败。
    attempts.push(...tarAttempts(file, destDir))
  }
  let lastError = null
  for (const [cmd, args] of attempts) {
    try {
      await runExtract(cmd, args)
      return
    } catch (error) {
      lastError = error
    }
  }
  throw lastError || new Error('解压失败')
}

async function dataDir() {
  const { DATA_DIR } = await import('./state.js')
  return DATA_DIR
}
