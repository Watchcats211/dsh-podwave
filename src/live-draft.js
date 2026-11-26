// 实时字幕本地瞬时草稿（SenseVoice 常驻推理）：
// 若本机已安装 sensevoice-small-int8 和 Python 运行时，则在说话过程中每 ~550ms
// 给出一次本地滚字草稿（单次约 50ms），让字幕在开口后 <0.8s 即开始滚动，
// 停顿后由云端高精度 ASR + 翻译定稿替换。未安装时自动静默降级，零报错。
import fs from 'node:fs'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { venvPython } from './platform.js'
import { modelDir } from './models.js'

const SCRIPT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'scripts', 'live_draft_server.py')
const MODEL_NAME = 'sensevoice-small-int8'

let worker = null
let inFlight = false
let failedOnce = false

export function draftSupport() {
  const dir = modelDir(MODEL_NAME)
  const python = venvPython()
  const hasModel = fs.existsSync(path.join(dir, 'model.int8.onnx')) || fs.existsSync(path.join(dir, 'model.onnx'))
  const modelReady = hasModel && fs.existsSync(path.join(dir, 'tokens.txt'))
  const available = !failedOnce && modelReady && fs.existsSync(python) && fs.existsSync(SCRIPT)
  return { available, modelDir: dir, modelName: MODEL_NAME }
}

function ensureWorker() {
  const info = draftSupport()
  if (!info.available) return null
  if (worker && !worker.dead) return worker
  const child = spawn(venvPython(), [SCRIPT, '--model-dir', info.modelDir, '--threads', '2'], {
    env: { ...process.env, PYTHONUNBUFFERED: '1' },
    stdio: ['pipe', 'pipe', 'pipe'],
  })
  const state = {
    child,
    dead: false,
    ready: false,
    buf: '',
    seq: 0,
    pending: new Map(),
    readyPromise: null,
  }
  let resolveReady
  let rejectReady
  state.readyPromise = new Promise((resolve, reject) => {
    resolveReady = resolve
    rejectReady = reject
  })

  child.stdout.on('data', (chunk) => {
    state.buf += chunk.toString('utf8')
    for (;;) {
      const idx = state.buf.indexOf('\n')
      if (idx < 0) break
      const line = state.buf.slice(0, idx).trim()
      state.buf = state.buf.slice(idx + 1)
      if (!line) continue
      let msg
      try {
        msg = JSON.parse(line)
      } catch {
        continue
      }
      if (msg.ready) {
        state.ready = true
        resolveReady()
        continue
      }
      const waiter = state.pending.get(msg.id)
      if (!waiter) continue
      state.pending.delete(msg.id)
      if (msg.error) waiter.resolve('')
      else waiter.resolve(String(msg.text || '').trim())
    }
  })
  child.stderr.on('data', () => {})
  const cleanup = () => {
    if (state.dead) return
    state.dead = true
    if (worker === state) worker = null
    if (!state.ready) {
      failedOnce = true
      rejectReady(new Error('draft worker exited'))
    }
    for (const [, waiter] of state.pending) waiter.resolve('')
    state.pending.clear()
  }
  child.on('error', cleanup)
  child.on('close', cleanup)
  worker = state
  return state
}

function float32ToPcm16Base64(samples) {
  const buf = Buffer.allocUnsafe(samples.length * 2)
  for (let i = 0; i < samples.length; i += 1) {
    const v = Math.max(-1, Math.min(1, samples[i]))
    buf.writeInt16LE(v < 0 ? Math.round(v * 0x8000) : Math.round(v * 0x7fff), i * 2)
  }
  return buf.toString('base64')
}

export function warmDraftWorker() {
  const state = ensureWorker()
  if (state) state.readyPromise.catch(() => {})
}

export async function recognizeDraft(samples) {
  if (!samples || samples.length < 3200 || inFlight) return ''
  const state = ensureWorker()
  if (!state) return ''
  inFlight = true
  try {
    await state.readyPromise
    if (state.dead) return ''
    const id = ++state.seq
    const payload = { id, pcm16_b64: float32ToPcm16Base64(samples) }
    return await new Promise((resolve) => {
      const timer = setTimeout(() => {
        state.pending.delete(id)
        resolve('')
      }, 2500)
      timer.unref?.()
      state.pending.set(id, {
        resolve: (text) => {
          clearTimeout(timer)
          resolve(text)
        },
      })
      try {
        state.child.stdin.write(`${JSON.stringify(payload)}\n`)
      } catch {
        clearTimeout(timer)
        state.pending.delete(id)
        resolve('')
      }
    })
  } catch {
    return ''
  } finally {
    inFlight = false
  }
}

export function stopDraftWorker() {
  const state = worker
  worker = null
  inFlight = false
  if (!state) return
  state.dead = true
  for (const [, waiter] of state.pending) waiter.resolve('')
  state.pending.clear()
  try {
    state.child.stdin?.write('{"cmd":"quit"}\n')
    state.child.stdin?.end()
  } catch {
    /* ignore */
  }
  try {
    state.child.kill('SIGTERM')
  } catch {
    /* ignore */
  }
}
