// 实时说话人：常驻声纹服务 + 在线聚类。
//
// 整段说话人分离（diarize.js）要等全部音频转完才跑，实时跟播用不了。
// 这里的做法是「边播边猜」：每行字幕出来就取那一小段音频算一个声纹向量，
// 和已知说话人的质心比余弦相似度，够像就归入，不像就新建一个。
// 播完以后 transcribe.js 还会用整段 diarize 再校正一遍。
//
// 声纹模型和 diarize 用的是同一份 3D-Speaker embedding 模型（本地模型目录里已有）。
import fs from 'node:fs'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { venvPython } from './platform.js'
import { diarizationPaths } from './diarize.js'

const SCRIPT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'scripts', 'speaker_server.py')
const READY_TIMEOUT_MS = 20000
const REQUEST_TIMEOUT_MS = 12000
// 同一个人在相邻片段上的余弦相似度一般 0.75 以上，不同人通常低于 0.5。
// 取 0.72 宁可多认出一个人，也别把两个人并成一个（后面还有整段校正兜底）。
const MATCH_THRESHOLD = 0.72
const MAX_SPEAKERS = 12

export function liveSpeakerInfo() {
  const python = venvPython()
  const { embModel } = diarizationPaths()
  return {
    available: fs.existsSync(python) && fs.existsSync(SCRIPT) && fs.existsSync(embModel),
    python,
    script: SCRIPT,
    embModel,
  }
}

function normalize(vector) {
  let sum = 0
  for (const value of vector) sum += value * value
  const length = Math.sqrt(sum) || 1
  return vector.map((value) => value / length)
}

function cosine(left, right) {
  let sum = 0
  for (let index = 0; index < left.length; index += 1) sum += left[index] * right[index]
  return sum
}

// 常驻进程：模型加载一次要一两秒，每行都起进程肯定来不及。
class SpeakerServer {
  constructor(child) {
    this.child = child
    this.pending = new Map()
    this.nextId = 0
    this.buffer = ''
    this.closed = false
  }

  static async start(info) {
    const child = spawn(info.python, [SCRIPT, '--model', info.embModel], {
      stdio: ['pipe', 'pipe', 'pipe'],
      env: { ...process.env, PYTHONUNBUFFERED: '1' },
    })
    const server = new SpeakerServer(child)
    const ready = new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('声纹服务启动超时')), READY_TIMEOUT_MS)
      const onExit = () => { clearTimeout(timer); reject(new Error('声纹服务没能启动')) }
      child.once('exit', onExit)
      server.readyResolve = (value) => { clearTimeout(timer); child.off('exit', onExit); resolve(value) }
      server.readyReject = (error) => { clearTimeout(timer); child.off('exit', onExit); reject(error) }
    })
    server.wire()
    await ready
    return server
  }

  wire() {
    this.child.stdout.on('data', (chunk) => {
      this.buffer += chunk.toString()
      let index = this.buffer.indexOf('\n')
      while (index >= 0) {
        const line = this.buffer.slice(0, index).trim()
        this.buffer = this.buffer.slice(index + 1)
        if (line) this.handle(line)
        index = this.buffer.indexOf('\n')
      }
    })
    this.child.stderr.on('data', () => { /* 服务端日志忽略，出错会从 stdout 回来 */ })
    this.child.on('exit', () => {
      this.closed = true
      for (const [, entry] of this.pending) entry.reject(new Error('声纹服务已退出'))
      this.pending.clear()
      if (this.readyReject) this.readyReject(new Error('声纹服务已退出'))
    })
  }

  handle(line) {
    let payload
    try {
      payload = JSON.parse(line)
    } catch {
      return
    }
    if (payload.ready) {
      this.readyResolve?.(true)
      return
    }
    if (payload.error && payload.id === undefined) {
      this.readyReject?.(new Error(payload.error))
      return
    }
    const entry = this.pending.get(payload.id)
    if (!entry) return
    this.pending.delete(payload.id)
    clearTimeout(entry.timer)
    if (payload.error) entry.reject(new Error(payload.error))
    else entry.resolve(payload.embedding || null)
  }

  request(audio, start, end) {
    if (this.closed) return Promise.reject(new Error('声纹服务已退出'))
    const id = (this.nextId += 1)
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id)
        reject(new Error('声纹计算超时'))
      }, REQUEST_TIMEOUT_MS)
      this.pending.set(id, { resolve, reject, timer })
      this.child.stdin.write(`${JSON.stringify({ id, audio, start, end })}\n`)
    })
  }

  close() {
    this.closed = true
    try { this.child.stdin.end() } catch { /* 已经关了 */ }
    try { this.child.kill() } catch { /* 已经退了 */ }
  }
}

// 多个转写任务共用一个常驻进程（同一个 profile 只有一个用户）。
let sharedServer = null

async function ensureServer() {
  const info = liveSpeakerInfo()
  if (!info.available) return null
  if (!sharedServer || sharedServer.closed) sharedServer = await SpeakerServer.start(info)
  return sharedServer
}

async function sharedEmbed(audio, start, end) {
  const server = await ensureServer()
  if (!server) return null
  return server.request(audio, start, end)
}

export function closeLiveSpeakers() {
  if (sharedServer) {
    sharedServer.close()
    sharedServer = null
  }
}

export function partForTime(parts, time) {
  for (const part of parts) {
    if (time >= part.start - 0.001 && time < part.end) return part
  }
  return parts[parts.length - 1] || null
}

export class OnlineSpeakers {
  constructor(embed) {
    this.embed = embed
    this.centroids = []
    this.counts = []
    this.cache = new Map()
  }

  assign(vector) {
    const unit = normalize(vector)
    let best = -1
    let bestScore = -Infinity
    for (let index = 0; index < this.centroids.length; index += 1) {
      const score = cosine(unit, this.centroids[index])
      if (score > bestScore) {
        bestScore = score
        best = index
      }
    }
    if (best >= 0 && bestScore >= MATCH_THRESHOLD) {
      const count = this.counts[best] + 1
      const merged = this.centroids[best].map((value, index) => (value * this.counts[best] + unit[index]) / count)
      this.centroids[best] = normalize(merged)
      this.counts[best] = count
      return best
    }
    if (this.centroids.length >= MAX_SPEAKERS) return best >= 0 ? best : null
    this.centroids.push(unit)
    this.counts.push(1)
    return this.centroids.length - 1
  }

  speakers() {
    return this.centroids.map((_, index) => ({ id: index, label: `说话人 ${index + 1}` }))
  }

  // 给还没有 speaker 的行打实时标签。已有的不覆盖（可能来自整段校正）。
  async labelLines(lines, parts) {
    for (const line of lines) {
      if (line.speaker !== null && line.speaker !== undefined) continue
      const key = `${Math.round(line.start * 100)}|${line.text}`
      let index = this.cache.get(key)
      if (index === undefined) {
        const part = partForTime(parts, line.start)
        if (!part) continue
        const start = Math.max(0, line.start - part.start)
        const end = Math.min(part.duration, line.end - part.start)
        if (end - start < 0.4) continue
        let vector = null
        try {
          vector = await this.embed(part.file, start, end)
        } catch {
          vector = null
        }
        if (!vector) continue
        index = this.assign(vector)
        if (index === null) continue
        this.cache.set(key, index)
      }
      line.speaker = index
    }
  }
}

// 拿不到本地声纹服务（没装 python 运行时/模型）就返回 null，实时只做转写和翻译。
export async function createLiveSpeakers() {
  try {
    const server = await ensureServer()
    if (!server) return null
    return new OnlineSpeakers(sharedEmbed)
  } catch {
    return null
  }
}
