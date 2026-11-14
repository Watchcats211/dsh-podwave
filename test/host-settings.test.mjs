// 设置页冒烟：它一打开就会并发拉这 8 个接口，任何一个 500 都会让整页停留在
// 「正在扫描本机…」并把模型显示成「未就绪」。v0.11.10 加 /api/update 路由时漏了
// import，导致设置页对所有人都是空的——这里逐个断言，保证不再复发。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import http from 'node:http'
import os from 'node:os'
import path from 'node:path'

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-host-settings-'))
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')
process.env.PODWAVE_UPDATE_REGISTRY = 'http://127.0.0.1:9'

const ENDPOINTS = [
  '/podwave/api/history',
  '/podwave/api/models',
  '/podwave/api/translate/settings',
  '/podwave/api/ui-settings',
  '/podwave/api/transcribe/settings',
  '/podwave/api/import/settings',
  '/podwave/api/setup',
  '/podwave/api/update',
]

test('host: every endpoint the settings page loads returns 200', async () => {
  const effects = []
  let handler = null
  const ctx = {
    get: (name) => (name === 'connection' ? { requestRejection: () => null } : undefined),
    effect: (fn) => {
      const dispose = fn()
      if (typeof dispose === 'function') effects.push(dispose)
      return dispose
    },
    webServer: {
      register: (config) => {
        handler = config.handler
        return () => {}
      },
    },
  }
  const server = http.createServer((req, res) => handler(req, res))
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  const base = `http://127.0.0.1:${server.address().port}`

  try {
    const host = (await import('../src/host.js')).default
    host.apply(ctx)

    for (const route of ENDPOINTS) {
      const res = await fetch(`${base}${route}`)
      const text = await res.text()
      assert.equal(res.status, 200, `${route} 应返回 200，实际 ${res.status}：${text.slice(0, 200)}`)
      assert.doesNotMatch(text, /is not defined/, `${route} 不应抛出未定义变量：${text.slice(0, 200)}`)
      JSON.parse(text)
    }

    // 模型接口必须带上「装在哪」的信息，设置页靠它显示路径和体积。
    const models = await (await fetch(`${base}/podwave/api/models`)).json()
    assert.ok(models.storage, '缺少 storage')
    assert.equal(typeof models.storage.dir, 'string')
    assert.ok(models.storage.dir.length > 0)
    assert.equal(models.storage.dir, path.join(process.env.PODWAVE_DATA_DIR, 'models'))
    assert.equal(models.storage.custom, false)
    assert.ok(Array.isArray(models.storage.items))
    assert.ok(Array.isArray(models.models))

    // 目录接口：默认位置、切换、再切回来
    const initial = await (await fetch(`${base}/podwave/api/models/dir`)).json()
    assert.equal(initial.storage.dir, models.storage.dir)

    const target = path.join(home, 'project-models')
    const switched = await fetch(`${base}/podwave/api/models/dir`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ dir: target, move: false }),
    })
    assert.equal(switched.status, 200)
    const switchedBody = await switched.json()
    assert.equal(switchedBody.dir, target)
    assert.equal(switchedBody.custom, true)
    assert.ok(fs.existsSync(target))

    const bad = await fetch(`${base}/podwave/api/models/dir`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ dir: 'relative/models', move: false }),
    })
    assert.equal(bad.status, 400, '相对路径必须被拒绝')
    assert.match(String((await bad.json()).error), /绝对路径/)

    await fetch(`${base}/podwave/api/models/dir`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ dir: '', move: false }),
    })
    const restored = await (await fetch(`${base}/podwave/api/models`)).json()
    assert.equal(restored.storage.custom, false)
  } finally {
    await new Promise((resolve) => server.close(resolve))
    for (const dispose of effects) {
      try {
        dispose()
      } catch {
        /* ignore */
      }
    }
  }
})
