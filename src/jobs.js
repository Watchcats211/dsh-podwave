// 任务持久化：~/.podwave/jobs.json。
// 进程重启后，未完成（queued/running）的任务会标成 interrupted，UI 可以提示重试。
import fs from 'node:fs'
import path from 'node:path'
import { DATA_DIR } from './state.js'

const JOBS_PATH = path.join(DATA_DIR, 'jobs.json')
const MAX_JOBS = 80
const jobs = new Map()
let saveTimer = null

export function jobKey({ type, episodeId, target }) {
  return `${type}:${episodeId}${target ? `:${target}` : ''}`
}

function flush() {
  try {
    const list = [...jobs.values()]
      .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
      .slice(0, MAX_JOBS)
    fs.mkdirSync(DATA_DIR, { recursive: true })
    const tmp = `${JOBS_PATH}.tmp`
    fs.writeFileSync(tmp, JSON.stringify({ schemaVersion: 1, jobs: list }, null, 2), { mode: 0o600 })
    fs.renameSync(tmp, JOBS_PATH)
  } catch {
    /* ignore */
  }
}

function schedule() {
  if (saveTimer) return
  saveTimer = setTimeout(() => {
    saveTimer = null
    flush()
  }, 300)
  if (typeof saveTimer.unref === 'function') saveTimer.unref()
}

function isAlive(pid) {
  const target = Number(pid)
  if (!Number.isInteger(target) || target <= 1) return false
  try {
    process.kill(target, 0)
    return true
  } catch {
    return false
  }
}

function load() {
  let changed = false
  try {
    const data = JSON.parse(fs.readFileSync(JOBS_PATH, 'utf8'))
    for (const job of data.jobs || []) {
      if (!job || !job.key) continue
      jobs.set(job.key, job)
    }
  } catch {
    /* ignore */
  }
  for (const job of jobs.values()) {
    if (job.status === 'queued' || job.status === 'running') {
      // 宿主热重载（disable/enable 插件）时，旧的转写子进程可能还在跑。
      // 只要它活着就保持 running，否则界面会显示「已中断」而取消按钮点不动。
      if (job.pid && isAlive(job.pid)) {
        job.orphan = true
        job.updatedAt = Date.now()
        changed = true
        continue
      }
      job.status = 'interrupted'
      job.error = '进程重启，任务已中断'
      job.pid = null
      job.updatedAt = Date.now()
      changed = true
    }
  }
  if (changed) flush()
}

export function upsertJob(input) {
  const key = input.key || jobKey(input)
  const previous = jobs.get(key) || {}
  const job = { ...previous, ...input, key, updatedAt: Date.now() }
  jobs.set(key, job)
  schedule()
  return job
}

export function getJob(key) {
  return jobs.get(key) || null
}

// 宿主热重载后会有两份模块实例共享同一个 jobs.json：
// 取消可能由新实例写入磁盘，而仍在跑 runJob 的旧实例内存里还是 running。
// 收尾时必须看磁盘上的真实状态，避免旧实例把「已取消」覆写成「进程退出码 -15」。
export function getJobFresh(key) {
  try {
    const data = JSON.parse(fs.readFileSync(JOBS_PATH, 'utf8'))
    const found = (data.jobs || []).find((job) => job && job.key === key)
    if (found) return found
  } catch {
    /* 读不到就用内存里的 */
  }
  return jobs.get(key) || null
}

export function listJobs() {
  return [...jobs.values()].sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
}

export function removeJob(key) {
  if (jobs.delete(key)) schedule()
}

export function flushJobs() {
  flush()
}

load()
