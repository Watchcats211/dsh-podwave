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
      job.status = 'interrupted'
      job.error = '进程重启，任务已中断'
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
