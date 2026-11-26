// 添加与管理文件夹系统的后端接口测试：常用目录自动探测 + 手动路径实时预览 + 重叠检查。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import http from 'node:http'
import os from 'node:os'
import path from 'node:path'

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-folders-'))
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')
process.env.PODWAVE_MODELS_NO_PROJECT = '1'

const downloadsDir = path.join(home, 'Downloads')
const podcastsDir = path.join(home, 'Music', 'Podcasts')
const nestedChild = path.join(podcastsDir, 'show-a')
fs.mkdirSync(downloadsDir, { recursive: true })
fs.mkdirSync(nestedChild, { recursive: true })
fs.writeFileSync(path.join(downloadsDir, 'ep1.mp3'), 'dummy')
fs.writeFileSync(path.join(downloadsDir, 'ep2.m4a'), 'dummy')
fs.writeFileSync(path.join(nestedChild, 'ep3.mp3'), 'dummy')

test('host: folders suggestions & preview endpoints detect local directories and overlap', async () => {
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

    // 1. suggestions 应发现 ~/Downloads (2) 与 ~/Music/Podcasts (1)
    const sugRes = await fetch(`${base}/podwave/api/folders/suggestions`)
    assert.equal(sugRes.status, 200)
    const sugBody = await sugRes.json()
    const dl = sugBody.suggestions.find((s) => s.label === '下载')
    const pod = sugBody.suggestions.find((s) => s.label === 'Music / Podcasts')
    assert.ok(dl && dl.audioCount === 2 && dl.alreadyAdded === false)
    assert.ok(pod && pod.audioCount === 1 && pod.alreadyAdded === false)

    // 2. preview 有效路径返回 audioCount，无效路径返回 ok: false
    const okPreview = await (await fetch(`${base}/podwave/api/folders/preview`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ path: '~/Downloads' }),
    })).json()
    assert.equal(okPreview.ok, true)
    assert.equal(okPreview.audioCount, 2)

    const missingPreview = await (await fetch(`${base}/podwave/api/folders/preview`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ path: '~/NonExistentDirXYZ' }),
    })).json()
    assert.equal(missingPreview.ok, false)

    // 3. 添加 ~/Music/Podcasts 后，suggestions 应标为 alreadyAdded，preview 子目录应报 overlap
    const addRes = await fetch(`${base}/podwave/api/folders`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ path: '~/Music/Podcasts' }),
    })
    assert.equal(addRes.status, 200)

    const sugAfter = await (await fetch(`${base}/podwave/api/folders/suggestions`)).json()
    const podAfter = sugAfter.suggestions.find((s) => s.label === 'Music / Podcasts')
    assert.equal(podAfter.alreadyAdded, true)
    assert.equal(sugAfter.folders.length, 1)

    const childPreview = await (await fetch(`${base}/podwave/api/folders/preview`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ path: '~/Music/Podcasts/show-a' }),
    })).json()
    assert.equal(childPreview.ok, false)
    assert.match(childPreview.error, /重叠/)
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
