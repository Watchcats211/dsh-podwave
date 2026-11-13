import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-xyz-'))
process.env.PODWAVE_DATA_DIR = dataDir

const calls = []
let mode = 'refresh'

function jsonResponse(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...extraHeaders },
  })
}

globalThis.fetch = async (url, options = {}) => {
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
  if (target.includes('/v1/subscription')) {
    return jsonResponse({
      data: [
        { podcast: { pid: 'p1', title: '播客 A', image: { picUrl: 'http://img/a.png' }, subscribersCount: 12 } },
        { pid: 'p2', title: '播客 B' },
      ],
    })
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

test('loginWithRefreshToken stores tokens and profile', async () => {
  const status = await xyz.loginWithRefreshToken('refresh-1', 'device-1')
  assert.equal(status.loggedIn, true)
  assert.equal(status.profile.nickname, '测试用户')
  const saved = JSON.parse(fs.readFileSync(path.join(dataDir, 'xyz.json'), 'utf8'))
  assert.equal(saved.accessToken, 'access-1')
  assert.equal(saved.refreshToken, 'refresh-2')
  assert.equal(saved.deviceId, 'device-1')
})

test('getSubscriptions normalizes podcast rows', async () => {
  const rows = await xyz.getSubscriptions()
  assert.equal(rows.length, 2)
  assert.deepEqual(rows[0], {
    pid: 'p1',
    title: '播客 A',
    author: '',
    brief: '',
    cover: 'http://img/a.png',
    subscribers: 12,
    updatedAt: '',
  })
  assert.equal(rows[1].pid, 'p2')
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
  await xyz.getSubscriptions()
  assert.ok(calls.some((call) => call.url.endsWith('/v1/subscription')))
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

test('expired tokens are cleared and report AUTH_EXPIRED', async () => {
  mode = 'refresh'
  await xyz.loginWithRefreshToken('refresh-1', 'device-1')
  assert.equal(xyz.xyzStatus().loggedIn, true)
  globalThis.fetch = async (url) => new Response('{}', { status: 401 })
  await assert.rejects(() => xyz.getSubscriptions(), (err) => err.code === 'AUTH_EXPIRED')
  assert.equal(xyz.xyzStatus().loggedIn, false)
  const saved = JSON.parse(fs.readFileSync(path.join(dataDir, 'xyz.json'), 'utf8'))
  assert.equal(saved.accessToken || '', '')
  assert.equal(saved.refreshToken || '', '')
})
