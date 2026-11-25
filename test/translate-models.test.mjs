// 「列出这个 API 地址下有哪些模型」的回归测试：用本地 http server 冒充 OpenAI 兼容网关，
// 绝不请求真实（计费）接口。覆盖：正常列表、/v1/models 回退、401 报错、缺地址。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import http from 'node:http'
import os from 'node:os'
import path from 'node:path'

const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-models-'))
process.env.PODWAVE_DATA_DIR = dataDir
process.env.HOME = dataDir

const { listApiModels } = await import('../src/translate.js')
const { updateSection } = await import('../src/config.js')

function serve(handler) {
  return new Promise((resolve) => {
    const server = http.createServer(handler)
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }))
  })
}

test('listApiModels 返回去重并排序后的模型名', async () => {
  const { server, port } = await serve((req, res) => {
    if (req.url === '/models') {
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify({ data: [{ id: 'deepseek-reasoner' }, { id: 'deepseek-chat' }, { id: 'deepseek-chat' }] }))
      return
    }
    res.writeHead(404).end()
  })
  try {
    updateSection('api', { base: `http://127.0.0.1:${port}`, key: 'sk-test', model: 'deepseek-chat' })
    const result = await listApiModels()
    assert.deepEqual(result.models, ['deepseek-chat', 'deepseek-reasoner'])
    assert.equal(result.current, 'deepseek-chat')
    assert.equal(result.base, `http://127.0.0.1:${port}`)
  } finally {
    server.close()
  }
})

test('根地址没有 /models 时回退到 /v1/models', async () => {
  const seen = []
  const { server, port } = await serve((req, res) => {
    seen.push(req.url)
    if (req.url === '/v1/models') {
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify({ data: [{ id: 'qwen3:8b' }] }))
      return
    }
    res.writeHead(404).end('not found')
  })
  try {
    const result = await listApiModels({ base: `http://127.0.0.1:${port}`, key: '' })
    assert.deepEqual(result.models, ['qwen3:8b'])
    assert.deepEqual(seen, ['/models', '/v1/models'])
  } finally {
    server.close()
  }
})

test('401 直接报错，不吞成空列表', async () => {
  const { server, port } = await serve((req, res) => {
    res.writeHead(401, { 'content-type': 'application/json' }).end('{"error":"bad key"}')
  })
  try {
    await assert.rejects(
      () => listApiModels({ base: `http://127.0.0.1:${port}`, key: 'sk-bad' }),
      /列模型失败 401/,
    )
  } finally {
    server.close()
  }
})

test('缺 API 地址时给 400 提示', async () => {
  updateSection('api', { base: '', key: '' })
  await assert.rejects(() => listApiModels({ base: '', key: 'x' }), /还没有填 API 地址/)
})
