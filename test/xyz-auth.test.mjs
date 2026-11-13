import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-xyz-'))
process.env.PODWAVE_DATA_DIR = dataDir

const calls = []
let mode = 'refresh'
// true = 用下面的 mock；'always401' = 所有请求都 401；false = 走真实 fetch（不用于本文件）。
let mockFetch = true

function jsonResponse(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...extraHeaders },
  })
}

async function mock(url, options = {}) {
  const target = String(url)
  calls.push({ url: target, method: options.method || 'GET' })
  if (target.includes('app_auth_tokens.refresh')) {
    if (mode === 'access') return new Response('{}', { status: 401 })
    return new Response('{}', {
      status: 200,
      headers: { 'x-jike-access-token': 'access-1', 'x-jike-refresh-token': 'refresh-2' },
    })
  }
  if (target.includes('/v1/profile/get')) {
    const headers = options.headers || {}
    const token = headers['x-jike-access-token']
    if (mode === 'access' && token !== 'access-token-1') return new Response('{}', { status: 401 })
    return jsonResponse({ data: { nickname: '测试用户' } })
  }
  if (target.includes('/v1/subscription/list')) {
    if (mode === 'reject') return new Response('{}', { status: 401 })
    const body = options.body ? JSON.parse(options.body) : {}
    assert.equal(body.sortBy, 'subscribedAt')
    if (body.loadMoreKey?.skip === 2) {
      return jsonResponse({ data: [{ pid: 'p3', title: '播客 C' }] })
    }
    return jsonResponse({
      data: [
        { pid: 'p1', title: '播客 A', image: { picUrl: 'http://img/a.png' }, subscriptionCount: 12 },
        { pid: 'p2', title: '播客 B' },
      ],
      loadMoreKey: { skip: 2 },
    })
  }
  if (target.includes('/v1/episode/get')) {
    assert.equal(options.method || 'GET', 'GET')
    return jsonResponse({ data: { eid: 'e1', pid: 'p1', title: '第 1 集', duration: 120, enclosure: { url: 'http://cdn/a.m4a' }, podcast: { title: '播客 A' } } })
  }
  if (target.includes('/v1/episode/list')) {
    return jsonResponse({
      data: [
        {
          eid: 'e1',
          pid: 'p1',
          title: '第 1 集',
          duration: 120,
          pubDate: '2026-01-01T00:00:00.000Z',
          enclosure: { url: 'http://cdn/a.m4a' },
          podcast: { title: '播客 A' },
        },
      ],
      loadMoreKey: 'next-key',
    })
  }
  return new Response('not found', { status: 404 })
}

const xyz = await import('../src/xyz.js')

// 统一入口：需要模拟「所有请求 401」时由 mockFetch 分支处理。
globalThis.fetch = async (url, options = {}) => {
  if (mockFetch === 'always401') return new Response('{}', { status: 401 })
  return mock(url, options)
}

test('loginWithRefreshToken stores tokens and profile', async () => {
  const status = await xyz.loginWithRefreshToken('refresh-1', 'device-1')
  assert.equal(status.loggedIn, true)
  assert.equal(status.profile.nickname, '测试用户')
  const saved = JSON.parse(fs.readFileSync(path.join(dataDir, 'xyz.json'), 'utf8'))
  assert.equal(saved.accessToken, 'access-1')
  assert.equal(saved.refreshToken, 'refresh-2')
  assert.equal(saved.deviceId, 'device-1')
})

test('getSubscriptions normalizes podcast rows across pages', async () => {
  const rows = await xyz.getSubscriptions({ refresh: true })
  assert.equal(rows.length, 3, '应把 loadMoreKey 指向的下一页也取回来')
  assert.deepEqual(rows[0], {
    pid: 'p1',
    title: '播客 A',
    author: '',
    brief: '',
    cover: 'http://img/a.png',
    subscribers: 12,
    episodeCount: 0,
    updatedAt: '',
  })
  assert.equal(rows[1].pid, 'p2')
  assert.equal(rows[2].pid, 'p3')
})

test('getEpisode uses GET /v1/episode/get with eid query', async () => {
  const ep = await xyz.getEpisode('e1')
  assert.equal(ep.eid, 'e1')
  assert.equal(ep.audioUrl, 'http://cdn/a.m4a')
  assert.equal(ep.title, '第 1 集')
})

test('getPodcastEpisodes maps episode fields and loadMoreKey', async () => {
  const data = await xyz.getPodcastEpisodes('p1', { limit: 10 })
  assert.equal(data.loadMoreKey, 'next-key')
  assert.equal(data.items.length, 1)
  assert.equal(data.items[0].eid, 'e1')
  assert.equal(data.items[0].title, '第 1 集')
  assert.equal(data.items[0].audioUrl, 'http://cdn/a.m4a')
  assert.equal(data.items[0].podcastTitle, '播客 A')
})

test('authenticated requests include access token header', async () => {
  calls.length = 0
  await xyz.getSubscriptions({ refresh: true })
  assert.ok(calls.some((call) => call.url.endsWith('/v1/subscription/list')))
})

test('login falls back to access token when refresh fails', async () => {
  xyz.logout()
  mode = 'access'
  const status = await xyz.loginWithRefreshToken('access-token-1', 'device-2')
  assert.equal(status.loggedIn, true)
  assert.equal(status.profile.nickname, '测试用户')
  const saved = JSON.parse(fs.readFileSync(path.join(dataDir, 'xyz.json'), 'utf8'))
  assert.equal(saved.accessToken, 'access-token-1')
  assert.equal(saved.refreshToken, '')
  assert.equal(saved.deviceId, 'device-2')
})

test('normalizeTokenInput accepts raw tokens, header lines, JSON and bearer prefixes', () => {
  assert.equal(xyz.normalizeTokenInput('  abc123  '), 'abc123')
  assert.equal(xyz.normalizeTokenInput('x-jike-refresh-token: abc123'), 'abc123')
  assert.equal(xyz.normalizeTokenInput('x-jike-access-token=abc123'), 'abc123')
  assert.equal(xyz.normalizeTokenInput('Bearer abc123'), 'abc123')
  assert.equal(xyz.normalizeTokenInput(JSON.stringify({ 'x-jike-refresh-token': 'abc123' })), 'abc123')
  assert.equal(xyz.normalizeTokenInput('{"headers":{"x-jike-access-token":"abc123"}}'), 'abc123')
  assert.equal(xyz.normalizeTokenInput(''), '')
})

test('getSubscriptions caches results and refresh bypasses cache', async () => {
  mode = 'refresh'
  await xyz.loginWithRefreshToken('refresh-1', 'device-1')
  calls.length = 0
  const subCalls = () => calls.filter((call) => call.url.includes('/v1/subscription/list')).length
  const first = await xyz.getSubscriptions({ refresh: true })
  assert.equal(first.length, 3)
  assert.equal(subCalls(), 2, '两页订阅')
  const second = await xyz.getSubscriptions()
  assert.equal(second.length, 3)
  assert.equal(subCalls(), 2, '10 分钟内应命中缓存')
  await xyz.getSubscriptions({ refresh: true })
  assert.equal(subCalls(), 4)
})

test('expired tokens are cleared and report AUTH_EXPIRED', async () => {
  mode = 'refresh'
  mockFetch = true
  await xyz.loginWithRefreshToken('refresh-1', 'device-1')
  assert.equal(xyz.xyzStatus().loggedIn, true)
  mockFetch = 'always401'
  await assert.rejects(() => xyz.getSubscriptions({ refresh: true }), (err) => err.code === 'AUTH_EXPIRED')
  assert.equal(xyz.xyzStatus().loggedIn, false)
  const saved = JSON.parse(fs.readFileSync(path.join(dataDir, 'xyz.json'), 'utf8'))
  assert.equal(saved.accessToken || '', '')
  assert.equal(saved.refreshToken || '', '')
})

test('a transient 401 keeps the login instead of wiping tokens', async () => {
  mockFetch = true
  mode = 'refresh'
  xyz.logout()
  await xyz.loginWithRefreshToken('refresh-1', 'device-1')
  // refresh 仍然成功，但业务接口返回 401：说明只是这次请求被拒，不该清空登录态。
  mode = 'reject'
  await assert.rejects(() => xyz.getSubscriptions({ refresh: true }), (err) => err.code === 'AUTH_REJECTED')
  assert.equal(xyz.xyzStatus().loggedIn, true, '瞬时 401 不应该把登录态清掉')
  const saved = JSON.parse(fs.readFileSync(path.join(dataDir, 'xyz.json'), 'utf8'))
  assert.ok(saved.accessToken, 'access token 应该保留')
  assert.ok(saved.refreshToken, 'refresh token 应该保留')
  mode = 'refresh'
})
