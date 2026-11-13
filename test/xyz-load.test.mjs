import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

// 这个文件单独占一个进程：只验证「模块一加载就能读到磁盘登录态」，
// 不能靠调用 loadXyz() 补状态——真实事故就发生在没调用它的调用方身上。
const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-xyz-load-'))
process.env.PODWAVE_DATA_DIR = dataDir
process.env.HOME = dataDir

const cfgPath = path.join(dataDir, 'xyz.json')
fs.writeFileSync(
  cfgPath,
  JSON.stringify({
    accessToken: 'disk-access',
    refreshToken: 'disk-refresh',
    deviceId: 'device-1',
    profile: { nickname: '磁盘上的账号' },
  }),
  { mode: 0o600 },
)

// 每个用例自己声明「业务接口要回什么」，避免用例之间互相污染。
let businessQueue = []
let refreshStatus = 200
const calls = []

globalThis.fetch = async (url, init) => {
  calls.push({ url: String(url), headers: init?.headers || {} })
  if (String(url).includes('app_auth_tokens.refresh')) {
    if (refreshStatus !== 200) return new Response('server error', { status: refreshStatus })
    return new Response('{}', {
      status: 200,
      headers: { 'x-jike-access-token': 'fresh-access', 'x-jike-refresh-token': 'fresh-refresh' },
    })
  }
  const status = businessQueue.length > 1 ? businessQueue.shift() : businessQueue[0] ?? 200
  if (status !== 200) return new Response('denied', { status })
  return new Response(JSON.stringify({ data: [] }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  })
}

function reset({ business = [200], refresh = 200 } = {}) {
  businessQueue = [...business]
  refreshStatus = refresh
  calls.length = 0
}

const xyz = await import('../src/xyz.js')

test('module load picks up the saved login without loadXyz()', () => {
  const status = xyz.xyzStatus()
  assert.equal(status.loggedIn, true)
  assert.equal(status.profile?.nickname, '磁盘上的账号')
  assert.equal(status.deviceId, 'device-1')
})

test('a 401 on a freshly imported module refreshes instead of wiping tokens', async () => {
  reset({ business: [401, 200] })
  const list = await xyz.getSubscriptions({ refresh: true })
  assert.deepEqual(list, [])
  const refreshCall = calls.find((c) => c.url.includes('app_auth_tokens.refresh'))
  assert.ok(refreshCall, '应该先尝试刷新 token')
  assert.equal(refreshCall.headers['x-jike-refresh-token'], 'disk-refresh')
  assert.equal(refreshCall.headers['x-jike-access-token'], 'disk-access')
  const saved = JSON.parse(fs.readFileSync(cfgPath, 'utf8'))
  assert.equal(saved.accessToken, 'fresh-access')
  assert.equal(saved.refreshToken, 'fresh-refresh')
})

test('a refresh outage keeps the tokens and reports a retryable error', async () => {
  // 刷新接口 500（服务端抖动）不算「登录过期」：不能清 token。
  reset({ business: [401], refresh: 500 })
  await assert.rejects(
    () => xyz.getSubscriptions({ refresh: true }),
    (err) => err.code === 'AUTH_REJECTED' && err.retryable === true,
  )
  const saved = JSON.parse(fs.readFileSync(cfgPath, 'utf8'))
  assert.equal(saved.accessToken, 'fresh-access', 'access token 应该保留')
  assert.equal(saved.refreshToken, 'fresh-refresh', 'refresh token 应该保留')
  assert.equal(xyz.xyzStatus().loggedIn, true)
})

test('only a rejected refresh clears the saved tokens', async () => {
  // 刷新接口明确 401：这才算真过期。
  reset({ business: [401], refresh: 401 })
  await assert.rejects(
    () => xyz.getSubscriptions({ refresh: true }),
    (err) => err.code === 'AUTH_EXPIRED',
  )
  const saved = JSON.parse(fs.readFileSync(cfgPath, 'utf8'))
  assert.equal(saved.accessToken, '')
  assert.equal(saved.refreshToken, '')
  assert.equal(xyz.xyzStatus().loggedIn, false)
})
