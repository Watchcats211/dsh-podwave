// 多来源下载器：Hugging Face / hf-mirror / ModelScope / GitHub / gh-proxy。
// 支持断点续传（.part + Range）、跳过大文件已完成的情况、逐文件进度回调。
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import { spawn } from 'node:child_process'
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
    .map((entry) => ({ path: entry.path, size: entry.size || 0 }))
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

async function downloadOne(url, dest, { expected = 0, onProgress, signal } = {}) {
  await fsp.mkdir(path.dirname(dest), { recursive: true })
  try {
    const stat = await fsp.stat(dest)
    if (expected && stat.size === expected) return { bytes: stat.size, skipped: true }
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
  const destDir = path.join(await dataDir(), 'models', artifact.dir)
  const result = { source: source.id, sourceLabel: source.label, files: [], bytes: 0 }

  if (artifact.source.type === 'github-assets') {
    for (const asset of artifact.source.assets) {
      const url = source.id === 'cn' ? `https://gh-proxy.com/${asset.url}` : asset.url
      const dest = path.join(destDir, asset.file)
      const before = result.bytes
      const { bytes } = await downloadOne(url, dest, { onProgress, signal })
      result.bytes += bytes
      result.files.push({ path: asset.file, bytes })
      if (asset.extract) await extractArchive(dest, destDir)
      onProgress?.({ file: asset.file, delta: 0, bytes: result.bytes, expected: result.bytes })
      void before
    }
    return result
  }

  let files
  if (source.id === 'ms') {
    const all = await listMsRepo(source.ms)
    const wanted = artifact.source.include
    files = wanted ? all.filter((file) => wanted.includes(file.path)) : all.filter((file) => !isJunk(file.path))
  } else if (artifact.source.type === 'hf-repo') {
    files = await listHfRepo(artifact.source.repo, source.base, {
      include: artifact.source.include,
      skip: artifact.source.skip,
    })
  } else {
    files = [{ path: artifact.source.file, size: artifact.approxBytes || 0 }]
  }
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
  const lower = file.toLowerCase()
  const attempts = []
  if (lower.endsWith('.zip')) {
    attempts.push(['unzip', ['-q', '-o', file, '-d', destDir]])
    attempts.push(['tar', ['-xf', file, '-C', destDir]])
    attempts.push(['powershell.exe', ['-NoProfile', '-Command', `Expand-Archive -LiteralPath '${file}' -DestinationPath '${destDir}' -Force`]])
    attempts.push(['python3', ['-m', 'zipfile', '-e', file, destDir]])
  } else {
    attempts.push(['tar', ['-xf', file, '-C', destDir]])
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
