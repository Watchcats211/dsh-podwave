// host 路由冒烟：用假 ctx 拉起真实 HTTP handler，验证小宇宙公开链路在宿主路由层可用。
// 不依赖网络：xiaoyuzhoufm.com 的页面由 mock fetch 提供。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import http from 'node:http'
import os from 'node:os'
import path from 'node:path'

const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-host-'))
process.env.PODWAVE_DATA_DIR = dataDir

const podcast = {
  pid: '6013f9f58e2f7ee375cf4216',
  title: '测试播客',
  author: '作者',
  brief: '简介',
  image: { picUrl: 'https://img.example/x.jpg' },
  episodeCount: 2,
  episodes: [
    { eid: 'ep1', title: '第一集', duration: 222, shownotes: '第一集的单集介绍', image: { picUrl: 'https://img.example/e1.jpg' }, enclosure: { url: 'https://media.xyzcdn.net/a.m4a' }, payType: 'FREE' },
    { eid: 'ep2', title: '付费集', duration: 300, isPrivateMedia: true, payType: 'PAY_EPISODE' },
  ],
}

const episodePage = {
  eid: '6aed7b615b7c4709bfe1fe12',
  pid: podcast.pid,
  title: '第一集',
  duration: 222,
  pubDate: '2026-03-13T00:00:00.000Z',
  shownotes: '第一集的单集介绍',
  image: { picUrl: 'https://img.example/e1.jpg' },
  enclosure: { url: 'https://media.xyzcdn.net/a.m4a' },
  payType: 'FREE',
  podcast: { pid: podcast.pid, title: podcast.title, author: podcast.author, image: podcast.image, episodeCount: 2 },
}

function fixtureHtml(which = 'podcast') {
  const pageProps = which === 'episode' ? { episode: episodePage } : { podcast }
  const next = JSON.stringify({ props: { pageProps } })
  return `<!doctype html><html><body><script id="__NEXT_DATA__" type="application/json">${next}</script></body></html>`
}

test('host: xyz public routes serve podcast, play and status', async () => {
  const originalFetch = globalThis.fetch
  globalThis.fetch = async (url, init) => {
    if (String(url).includes('xiaoyuzhoufm.com/podcast/')) {
      return new Response(fixtureHtml('podcast'), { status: 200, headers: { 'content-type': 'text/html' } })
    }
    if (String(url).includes('xiaoyuzhoufm.com/episode/')) {
      return new Response(fixtureHtml('episode'), { status: 200, headers: { 'content-type': 'text/html' } })
    }
    return originalFetch(url, init)
  }

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
    assert.equal(typeof handler, 'function')

    const health = await (await fetch(`${base}/podwave/api/health`)).json()
    assert.equal(health.ok, true)
    assert.ok(health.version)

    const status = await (await fetch(`${base}/podwave/api/xyz/status`)).json()
    assert.equal(status.loggedIn, false)

    const podBody = await (await fetch(`${base}/podwave/api/xyz/public/podcast?url=6013f9f58e2f7ee375cf4216`)).json()
    const pod = podBody.podcast || podBody
    assert.equal(pod.title, '测试播客')
    assert.equal(pod.episodes.length, 2)
    assert.equal(pod.episodes[0].eid, 'ep1')
    assert.equal(pod.episodes[0].audioUrl, 'https://media.xyzcdn.net/a.m4a')

    const epBody = await (await fetch(`${base}/podwave/api/xyz/public/episode?url=${encodeURIComponent('https://www.xiaoyuzhoufm.com/episode/6aed7b615b7c4709bfe1fe12')}`)).json()
    assert.equal(epBody.episode.title, '第一集')
    assert.equal(epBody.podcast.pid, podcast.pid)

    const played = await (await fetch(`${base}/podwave/api/xyz/public/play`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'sec-fetch-site': 'same-origin' },
      body: JSON.stringify({ pid: '6013f9f58e2f7ee375cf4216', eid: 'ep1' }),
    })).json()
    assert.equal(played.item.id, 'xyzep1')
    assert.equal(played.item.source, 'xyz')
    assert.equal(played.item.shownotes, '第一集的单集介绍')

    const episodes = await (await fetch(`${base}/podwave/api/episodes`)).json()
    const remote = episodes.items.find((item) => item.id === 'xyzep1')
    assert.ok(remote, '播放过的公开单集应出现在媒体列表')

    const badUrl = await fetch(`${base}/podwave/api/xyz/open-web`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'sec-fetch-site': 'same-origin' },
      body: JSON.stringify({ url: 'https://evil.example/phish' }),
    })
    assert.equal(badUrl.status, 400, '非小宇宙链接应被拒绝')

    const denied = await fetch(`${base}/podwave/api/xyz/public/play`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'sec-fetch-site': 'cross-site' },
      body: JSON.stringify({ pid: '6013f9f58e2f7ee375cf4216', eid: 'ep1' }),
    })
    assert.equal(denied.status, 403, '跨站写请求应被拒绝')
  } finally {
    globalThis.fetch = originalFetch
    await new Promise((resolve) => server.close(resolve))
    for (const dispose of effects.reverse()) {
      try { dispose() } catch { /* ignore */ }
    }
    fs.rmSync(dataDir, { recursive: true, force: true })
  }
})
