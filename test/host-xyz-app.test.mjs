// host 路由冒烟：小宇宙「从本机 App 读取登录态」这条链路。
// 用假 HOME 造 plist + mock fetch，不触网。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import http from 'node:http'
import os from 'node:os'
import path from 'node:path'

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-host-app-'))
const dataDir = path.join(home, '.podwave')
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = dataDir

const plistDir = path.join(home, 'Library', 'Group Containers', 'group.app.podcast.cosmos', 'Library', 'Preferences')
fs.mkdirSync(plistDir, { recursive: true })
const plistFile = path.join(plistDir, 'group.app.podcast.cosmos.plist')
fs.writeFileSync(
  plistFile,
  `<?xml version="1.0" encoding="UTF-8"?>
<plist version="1.0">
<dict>
  <key>default-apiAccessToken</key>
  <string>access-from-app</string>
  <key>default-apiRefreshToken</key>
  <string>refresh-from-app</string>
  <key>app.podcast.cosmos.deviceId</key>
  <string>dev-app-1</string>
</dict>
</plist>
`,
)

const originalFetch = globalThis.fetch
globalThis.fetch = async (url, init) => {
  const target = String(url)
  if (target.includes('app_auth_tokens.refresh')) {
    return new Response('{}', {
      status: 200,
      headers: { 'x-jike-access-token': 'access-renewed', 'x-jike-refresh-token': 'refresh-renewed' },
    })
  }
  if (target.includes('/v1/profile/get')) {
    return new Response(JSON.stringify({ data: { nickname: '本机用户', uid: 'u1' } }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    })
  }
  return originalFetch(url, init)
}

test('host: xyz local-app status and one-click connect', async () => {
  const effects = []
  let handler = null
  const ctx = {
    get: (name) => (name === 'connection' ? { requestRejection: () => null } : undefined),
    effect: (fn) => {
      const dispose = fn()
      if (typeof dispose === 'function') effects.push(dispose)
      return dispose
    },
    webServer: { register: (config) => { handler = config.handler; return () => {} } },
  }
  const server = http.createServer((req, res) => handler(req, res))
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  const base = `http://127.0.0.1:${server.address().port}`

  try {
    const host = (await import('../src/host.js')).default
    host.apply(ctx)

    const info = await (await fetch(`${base}/podwave/api/xyz/local-app`)).json()

    if (process.platform !== 'darwin') {
      // 小宇宙 App 只有 macOS 版：其它平台上该接口必须如实回报「不可用」，
      // 而不是假装成功或直接 500。plist 解析逻辑由 test/xyz-app.test.mjs 跨平台覆盖。
      assert.equal(info.available, false)
      assert.match(info.reason, /macOS/)

      const res = await fetch(`${base}/podwave/api/xyz/auth/from-app`, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'sec-fetch-site': 'same-origin' },
        body: '{}',
      })
      assert.equal(res.status, 400, '没有小宇宙 App 的平台，一键连接应返回 400 而不是假装成功')
      const failed = await res.json()
      assert.match(String(failed.error), /macOS/)
      return
    }

    assert.equal(info.available, true, '应能发现本机小宇宙登录数据')
    assert.ok(info.deviceId)

    const connected = await (await fetch(`${base}/podwave/api/xyz/auth/from-app`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'sec-fetch-site': 'same-origin' },
      body: '{}',
    })).json()
    assert.equal(connected.loggedIn, true)
    assert.equal(connected.profile.nickname, '本机用户')

    const status = await (await fetch(`${base}/podwave/api/xyz/status`)).json()
    assert.equal(status.loggedIn, true)

    // 找不到 plist 时（没装/没登录）必须给 400 + 可读原因，而不是 500
    fs.renameSync(plistFile, `${plistFile}.bak`)
    try {
      const missing = await fetch(`${base}/podwave/api/xyz/auth/from-app`, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'sec-fetch-site': 'same-origin' },
        body: '{}',
      })
      assert.equal(missing.status, 400, '没有登录数据时应返回 400')
      assert.match(String((await missing.json()).error), /没有找到小宇宙/)
    } finally {
      fs.renameSync(`${plistFile}.bak`, plistFile)
    }
  } finally {
    globalThis.fetch = originalFetch
    await new Promise((resolve) => server.close(resolve))
    const { closeState } = await import('../src/state.js')
    await closeState().catch(() => {})
    for (const dispose of effects.reverse()) {
      try { dispose() } catch { /* ignore */ }
    }
    fs.rmSync(home, { recursive: true, force: true })
  }
})
