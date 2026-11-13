import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawn } from 'node:child_process'

// 宿主热重载（disable/enable 插件）会重新加载模块，新实例的 activeChild 是空的。
// 此时「取消」必须还能按 job.pid 杀掉旧实例启动的转写进程，
// 否则任务会一直 running、界面上点取消毫无反应。
const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-cancel-'))
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')

const { cancelTranscription } = await import('../src/transcribe.js')
const { getJob, upsertJob, flushJobs } = await import('../src/jobs.js')

function sleeper() {
  return spawn(process.execPath, ['-e', 'setInterval(() => {}, 1000)'], { stdio: 'ignore' })
}

function alive(pid) {
  try {
    process.kill(pid, 0)
    return true
  } catch {
    return false
  }
}

async function waitDead(pid, timeoutMs = 6000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    if (!alive(pid)) return true
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
  return !alive(pid)
}

test('cancel kills the worker recorded on the job even without in-memory state', async () => {
  const child = sleeper()
  const id = 'orphan-worker'
  upsertJob({ key: `transcribe:${id}`, type: 'transcribe', episodeId: id, status: 'running', stage: 'transcribing', pid: child.pid })

  const result = cancelTranscription(id)
  assert.equal(result.status, 'cancelling')
  assert.ok(await waitDead(child.pid), 'worker process should be gone')
  assert.equal(getJob(`transcribe:${id}`).stage, 'cancelling')
})

test('cancel closes a running job whose worker already exited', () => {
  const id = 'dead-worker'
  upsertJob({ key: `transcribe:${id}`, type: 'transcribe', episodeId: id, status: 'running', stage: 'transcribing', pid: 999999 })

  const result = cancelTranscription(id)
  assert.equal(result.status, 'cancelled')
  const job = getJob(`transcribe:${id}`)
  assert.equal(job.status, 'cancelled')
  assert.equal(job.pid, null)
})

test('cancel closes an interrupted job that never came back', () => {
  const id = 'interrupted-job'
  upsertJob({ key: `transcribe:${id}`, type: 'transcribe', episodeId: id, status: 'interrupted', stage: 'transcribing', pid: null })

  assert.equal(cancelTranscription(id).status, 'cancelled')
  assert.equal(getJob(`transcribe:${id}`).status, 'cancelled')
})

test('cancel on a finished job reports its status without touching it', () => {
  const id = 'finished-job'
  upsertJob({ key: `transcribe:${id}`, type: 'transcribe', episodeId: id, status: 'done', stage: 'done', pid: null })
  assert.equal(cancelTranscription(id).status, 'done')
  assert.equal(getJob(`transcribe:${id}`).status, 'done')
})

test('cancel on an unknown episode reports none', () => {
  assert.equal(cancelTranscription('never-existed').status, 'none')
})

test('a running job with a live pid survives a module reload', async () => {
  const child = sleeper()
  const id = 'reload-survivor'
  upsertJob({ key: `transcribe:${id}`, type: 'transcribe', episodeId: id, status: 'running', stage: 'transcribing', pid: child.pid })
  try {
    // flushJobs 落盘后再重新加载 jobs.js，模拟宿主热重载读磁盘的那一步。
    flushJobs()
    const reloaded = await import(`../src/jobs.js?reload=${Date.now()}`)
    const job = reloaded.getJob(`transcribe:${id}`) || reloaded.listJobs().find((item) => item.episodeId === id)
    assert.ok(job, 'job should be reloaded from disk')
    assert.equal(job.status, 'running')
    assert.equal(job.orphan, true)
  } finally {
    child.kill('SIGKILL')
  }
})
