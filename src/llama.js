// llama.cpp 翻译后端：Windows / Linux / Intel Mac 上使用 GGUF 模型。
// 通过 llama-server 的 OpenAI 兼容接口翻译编号行；服务按需启动、空闲后自动退出。
import fs from 'node:fs'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { DATA_DIR } from './state.js'
import { getSection } from './config.js'
import { llamaBinary } from './setup.js'
import { CATALOG } from './catalog.js'
import { modelsDir } from './models.js'
import { detectPlatform, isWindows, killTree } from './platform.js'

// 混元官方要求用语言全称（中文写中文名、英文写英文名）。
const TARGET_NAMES = { zh: '中文', en: '英语' }
const IDLE_MS = 90_000

let server = null
let startPromise = null

export function llamaServerPath() {
  if (process.env.PODWAVE_LLAMA_SERVER && fs.existsSync(process.env.PODWAVE_LLAMA_SERVER)) {
    return process.env.PODWAVE_LLAMA_SERVER
  }
  const cli = llamaBinary(detectPlatform())
  if (!cli) return null
  const candidate = path.join(path.dirname(cli), isWindows ? 'llama-server.exe' : 'llama-server')
  return fs.existsSync(candidate) ? candidate : null
}

function modelFileFor(name) {
  const dir = path.join(modelsDir(), name)
  if (!fs.existsSync(dir)) return null
  const file = fs.readdirSync(dir).find((entry) => entry.endsWith('.gguf'))
  return file ? path.join(dir, file) : null
}

export function llamaInfo() {
  const config = getSection('models')
  const name = config.translateModel || 'hy-mt2-1.8b-q4km'
  const modelFile = modelFileFor(name)
  return {
    ready: Boolean(llamaServerPath() && modelFile),
    bin: llamaServerPath(),
    modelFile,
    name,
    running: Boolean(server && !server.child.killed),
    port: server?.port || null,
  }
}

async function waitHealthy(port, child, timeoutMs = 90_000) {
  const started = Date.now()
  while (Date.now() - started < timeoutMs) {
    if (child.exitCode !== null) throw new Error('llama-server 启动失败')
    try {
      const res = await fetch(`http://127.0.0.1:${port}/health`)
      if (res.ok) return
    } catch {
      // 还没起来
    }
    await new Promise((resolve) => setTimeout(resolve, 400))
  }
  throw new Error('llama-server 启动超时')
}

export async function ensureLlamaServer() {
  const info = llamaInfo()
  if (!info.ready) throw new Error('llama.cpp 或 GGUF 模型未就绪，请先在设置里完成安装')
  if (server && !server.child.killed && server.modelFile === info.modelFile) {
    server.lastUsed = Date.now()
    return server.port
  }
  if (startPromise) return startPromise
  startPromise = (async () => {
    stopLlamaServer()
    const port = 47821 + Math.floor(Math.random() * 200)
    const child = spawn(
      info.bin,
      ['-m', info.modelFile, '--host', '127.0.0.1', '--port', String(port), '-c', '4096', '--temp', '0'],
      { stdio: ['ignore', 'ignore', 'ignore'] },
    )
    child.on('exit', () => {
      if (server?.child === child) server = null
    })
    server = { child, port, modelFile: info.modelFile, lastUsed: Date.now() }
    await waitHealthy(port, child)
    return port
  })().finally(() => {
    startPromise = null
  })
  return startPromise
}

export function stopLlamaServer() {
  if (!server) return
  // Windows 上 SIGTERM 等于 TerminateProcess，llama-server 的临时文件不会清理；
  // killTree 在 Windows 走 taskkill /T，其它平台仍是优雅 SIGTERM。
  killTree(server.child.pid)
  server = null
}

function touch() {
  if (server) server.lastUsed = Date.now()
}

const idleTimer = setInterval(() => {
  if (server && Date.now() - server.lastUsed > IDLE_MS) stopLlamaServer()
}, 15_000)
idleTimer.unref?.()

// 混元 Hy-MT 系列（MT2 / MT3）官方推荐的就是「将以下文本翻译为X，注意只需要输出翻译后的结果，
// 不要额外解释」这一句中英指令，而且模型没有默认 system prompt。所以这里不发 system 消息，
// 把编号与顺序的要求并进同一句人话里——官方模板 + 最少改动，实测比自拟的英文 system+user 两段式更稳。
function buildUserPrompt(items, target) {
  const numbered = items.map((item, index) => `${index + 1}. ${item.text}`).join('\n')
  const language = TARGET_NAMES[target] || target
  return [
    `将以下 ${items.length} 条编号字幕逐条翻译为${language}，注意只需要输出翻译后的结果，不要额外解释，保持原有编号与顺序：`,
    '',
    numbered,
  ].join('\n')
}

export async function translateWithLlama(items, target) {
  const port = await ensureLlamaServer()
  const body = {
    model: 'local',
    temperature: 0,
    max_tokens: Math.min(2048, items.length * 80 + 200),
    messages: [{ role: 'user', content: buildUserPrompt(items, target) }],
  }
  const res = await fetch(`http://127.0.0.1:${port}/v1/chat/completions`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`llama-server 返回 ${res.status}：${text.slice(0, 200)}`)
  }
  const data = await res.json()
  touch()
  const content = data.choices?.[0]?.message?.content || ''
  const parsed = parseNumbered(content, items.length)
  if (!parsed.length) throw new Error('llama-server 没有返回可解析的译文')
  return parsed
}

function parseNumbered(text, expected) {
  const results = []
  for (const line of String(text).split('\n')) {
    const match = line.match(/^\s*(\d+)[.、)]\s*(.+?)\s*$/)
    if (match) results.push({ index: Number(match[1]) - 1, text: match[2] })
  }
  if (results.length >= expected) return results.slice(0, expected)
  if (results.length) return results
  const lines = String(text)
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !/^[<|]/.test(line))
  return lines.slice(0, expected).map((line, index) => ({ index, text: line }))
}
