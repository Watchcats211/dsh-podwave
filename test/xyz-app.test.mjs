import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

// 用一个假的 HOME，把「小宇宙 App 的 plist」造出来，验证读取登录态这条链路。
const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-xyz-app-'))
const dataDir = path.join(home, '.podwave')
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = dataDir

const plistDir = path.join(home, 'Library', 'Group Containers', 'group.app.podcast.cosmos', 'Library', 'Preferences')
fs.mkdirSync(plistDir, { recursive: true })
const plistPath = path.join(plistDir, 'group.app.podcast.cosmos.plist')

function writePlist({ access = '', refresh = '', device = '' }) {
  const entries = [
    access ? `<key>default-apiAccessToken</key>\n  <string>${access}</string>` : '',
    refresh ? `<key>default-apiRefreshToken</key>\n  <string>${refresh}</string>` : '',
    device ? `<key>app.podcast.cosmos.deviceId</key>\n  <string>${device}</string>` : '',
  ].filter(Boolean).join('\n  ')
  fs.writeFileSync(plistPath, `<?xml version="1.0" encoding="UTF-8"?>\n<plist version="1.0">\n<dict>\n  ${entries}\n</dict>\n</plist>\n`)
}

let refreshOk = true
const calls = []

globalThis.fetch = async (url, options = {}) => {
  const target = String(url)
  const headers = options.headers || {}
  calls.push({ url: target, method: options.method || 'GET', headers })
  if (target.includes('app_auth_tokens.refresh')) {
    if (!refreshOk) return new Response('{}', { status: 401 })
    // 小宇宙要求 refresh 时同时带 refresh token 和 access token
    if (!headers['x-jike-refresh-token']) return new Response('{}', { status: 401 })
    return new Response('{}', {
      status: 200,
      headers: { 'x-jike-access-token': 'fresh-access', 'x-jike-refresh-token': 'fresh-refresh' },
    })
  }
  if (target.includes('/v1/profile/get')) {
    if (headers['x-jike-access-token'] === 'access-ok' || headers['x-jike-access-token'] === 'fresh-access') {
      return new Response(JSON.stringify({ data: { nickname: '本机用户', uid: 'u1' } }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      })
    }
    return new Response('{}', { status: 401 })
  }
  return new Response('not found', { status: 404 })
}

const xyz = await import('../src/xyz.js')

// 这些用例验证的是「小宇宙 App 登录态导入」的逻辑本身，与宿主平台无关：
// 显式传 platform='darwin' + 假 HOME，这样 Linux / Windows 的 CI 也能跑到，
// 而不是只能在 macOS 上人工点一遍。
const appOpts = { platform: 'darwin', home }

test('localAppStatus on non-macOS says the app is macOS-only', () => {
  // 小宇宙桌面版只有 macOS 版；其它平台要如实说「不支持」，而不是报「没有登录」误导用户。
  const state = xyz.localAppStatus({ platform: 'win32', home })
  assert.equal(state.available, false)
  assert.match(state.reason, /仅支持 macOS/)
})

test('loginFromLocalApp on non-macOS rejects instead of pretending', async () => {
  await assert.rejects(() => xyz.loginFromLocalApp({ platform: 'linux', home }), /仅支持 macOS/)
})

test('localAppStatus reports missing plist clearly', () => {
  fs.rmSync(plistPath, { force: true })
  const state = xyz.localAppStatus(appOpts)
  assert.equal(state.available, false)
  assert.match(state.reason, /小宇宙/)
})

test('localAppStatus reports logged-out app', () => {
  writePlist({ device: 'dev-1' })
  const state = xyz.localAppStatus(appOpts)
  assert.equal(state.available, false)
  assert.match(state.reason, /还没有登录/)
})

test('loginFromLocalApp imports tokens, refreshes and loads profile', async () => {
  writePlist({ access: 'access-ok', refresh: 'refresh-ok', device: 'dev-1' })
  const status = await xyz.loginFromLocalApp(appOpts)
  assert.equal(status.loggedIn, true)
  assert.equal(status.profile.nickname, '本机用户')
  assert.equal(status.deviceId, 'dev-1')
  const saved = JSON.parse(fs.readFileSync(path.join(dataDir, 'xyz.json'), 'utf8'))
  assert.equal(saved.accessToken, 'fresh-access', '刷新后应保存新 access token')
  assert.equal(saved.refreshToken, 'fresh-refresh', '轮换后的 refresh token 也要保存')
  // refresh 请求必须同时带两个头，否则小宇宙会 401
  const refreshCall = calls.find((call) => call.url.includes('app_auth_tokens.refresh'))
  assert.equal(refreshCall.headers['x-jike-refresh-token'], 'refresh-ok')
  assert.equal(refreshCall.headers['x-jike-access-token'], 'access-ok')
})

test('loginFromLocalApp falls back to access token when refresh fails', async () => {
  xyz.logout()
  refreshOk = false
  writePlist({ access: 'access-ok', refresh: 'refresh-ok', device: 'dev-1' })
  const status = await xyz.loginFromLocalApp(appOpts)
  assert.equal(status.loggedIn, true)
  assert.equal(status.profile.nickname, '本机用户')
})

test('loginFromLocalApp rejects when app login expired', async () => {
  xyz.logout()
  refreshOk = false
  writePlist({ access: 'stale-access', refresh: 'stale-refresh', device: 'dev-1' })
  await assert.rejects(() => xyz.loginFromLocalApp(appOpts), /登录已失效/)
  assert.equal(xyz.xyzStatus().loggedIn, false)
})
