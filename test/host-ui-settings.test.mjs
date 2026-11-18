// 悬浮字幕 / 字幕字号的设置在 host 侧的读写：前端拖动条一改就 PUT 上来，
// 需要保证取值范围被夹住、清空位置能回到默认、坏数据不会写进去。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import http from 'node:http'
import os from 'node:os'
import path from 'node:path'

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-host-ui-'))
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')
process.env.PODWAVE_MODELS_NO_PROJECT = '1'

test('host: ui 设置里能存字幕字号和悬浮字幕的位置', async () => {
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
  const put = (body) => fetch(`${base}/podwave/api/ui-settings`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })

  try {
    const host = (await import('../src/host.js')).default
    host.apply(ctx)

    const initial = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(initial.subtitleSize, 15, '默认字号 15px')
    assert.equal(initial.captionOpen, false, '悬浮字幕默认关')
    assert.equal(initial.captionX, null)
    assert.equal(initial.captionY, null)
    assert.equal(initial.captionW, null, '悬浮字幕默认宽度自适应')
    assert.equal(initial.captionH, null, '悬浮字幕默认高度自适应')
    assert.equal(initial.transcriptW, null, '字幕面板默认宽度')
    assert.equal(initial.transcriptH, null, '字幕面板默认高度')
    assert.equal(initial.episodeLeftW, null, '详情页封面栏默认宽度')
    assert.equal(initial.historyOpen, false, '历史记录默认收起')

    assert.equal((await put({ subtitleSize: 22 })).status, 200)
    let body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.subtitleSize, 22)

    // 超出范围要夹住，不能把面板撑爆或缩到看不见。
    await put({ subtitleSize: 999 })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.subtitleSize, 42)
    await put({ subtitleSize: 1 })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.subtitleSize, 12)
    // 小数四舍五入
    await put({ subtitleSize: 17.6 })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.subtitleSize, 18)

    // 开关 + 位置
    await put({ captionOpen: true, captionX: 120, captionY: 240 })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.captionOpen, true)
    assert.equal(body.captionX, 120)
    assert.equal(body.captionY, 240)

    // 拖回默认位置：传 null
    await put({ captionX: null, captionY: null })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.captionX, null)
    assert.equal(body.captionY, null)
    assert.equal(body.captionOpen, true, '位置回默认不该顺手关掉悬浮字幕')

    // 悬浮字幕的宽高：拖右下角改，松手写盘；超范围夹住，传 null 回到自适应
    await put({ captionW: 900, captionH: 360 })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.captionW, 900)
    assert.equal(body.captionH, 360)
    await put({ captionW: 9999 })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.captionW, 1600, '宽度上限 1600')
    assert.equal(body.captionH, 360, '只改宽度不该动高度')
    await put({ captionW: 10, captionH: 5 })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.captionW, 240, '宽度下限 240')
    assert.equal(body.captionH, 92, '高度下限 92')
    await put({ captionW: 777.6 })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.captionW, 778, '小数四舍五入')
    await put({ captionW: null, captionH: null })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.captionW, null, '清空宽度回到自适应')
    assert.equal(body.captionH, null, '清空高度回到自适应')

    // 字幕面板的宽高：拖左下角改，松手写盘；超范围夹住，传 null 回到默认
    await put({ transcriptW: 720, transcriptH: 520 })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.transcriptW, 720)
    assert.equal(body.transcriptH, 520)
    await put({ transcriptW: 9999, transcriptH: 1 })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.transcriptW, 1600, '面板宽度上限 1600')
    assert.equal(body.transcriptH, 200, '面板高度下限 200')
    await put({ transcriptW: null, transcriptH: null })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.transcriptW, null, '清空宽度回到默认')
    assert.equal(body.transcriptH, null, '清空高度回到默认')

    // 详情页左栏（封面）宽度：拖中间的分隔线改，松手写盘；超范围夹住，传 null 回到 240
    await put({ episodeLeftW: 320 })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.episodeLeftW, 320)
    await put({ episodeLeftW: 9999 })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.episodeLeftW, 460, '封面栏宽度上限 460')
    await put({ episodeLeftW: 10 })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.episodeLeftW, 140, '封面栏宽度下限 140')
    await put({ episodeLeftW: null })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.episodeLeftW, null, '清空封面栏宽度回到默认')

    // 设置页「历史记录」卡片的展开状态也要能存、能读回来
    await put({ historyOpen: true })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.historyOpen, true)
    assert.equal(body.subtitleSize, 18, '展开历史记录不该影响字号')
    await put({ historyOpen: false })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.historyOpen, false)

    // 空 patch 要报错，而不是静默成功
    assert.equal((await put({})).status, 400)

    // 老的侧栏设置没被这次改动弄坏
    await put({ sidebarCollapsed: true })
    body = await (await fetch(`${base}/podwave/api/ui-settings`)).json()
    assert.equal(body.sidebarCollapsed, true)
    assert.equal(body.subtitleSize, 18, '改侧栏不该把字号重置')
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
