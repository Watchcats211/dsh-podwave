import { test } from 'node:test'
import assert from 'node:assert/strict'

process.env.PODWAVE_UPDATE_REGISTRY = 'https://registry.example.test'

test('compareVersions orders by semver core', async () => {
  const { compareVersions } = await import('../src/update.js')
  assert.equal(compareVersions('0.11.10', '0.11.9'), 1)
  assert.equal(compareVersions('0.11.9', '0.11.9'), 0)
  assert.equal(compareVersions('1.0.0', '0.99.99'), 1)
  assert.equal(compareVersions('v0.12.0', '0.11.9'), 1)
  assert.equal(compareVersions('0.11.9-beta.1', '0.11.9'), 0)
})

test('checkUpdate compares registry latest with current version', async () => {
  const original = globalThis.fetch
  let calls = 0
  globalThis.fetch = async (url) => {
    calls += 1
    assert.ok(String(url).startsWith('https://registry.example.test/dsh-podwave/latest'))
    return new Response(JSON.stringify({ version: '99.0.0' }), { status: 200, headers: { 'content-type': 'application/json' } })
  }
  try {
    const { checkUpdate, resetUpdateCache, currentVersion } = await import('../src/update.js')
    resetUpdateCache()
    const result = await checkUpdate({ force: true })
    assert.equal(result.current, currentVersion())
    assert.equal(result.latest, '99.0.0')
    assert.equal(result.updateAvailable, true)
    assert.equal(calls, 1)
    const cached = await checkUpdate()
    assert.equal(cached.latest, '99.0.0')
    assert.equal(calls, 1, '一小时内应命中缓存')
  } finally {
    globalThis.fetch = original
  }
})

test('checkUpdate falls back gracefully when registry is unreachable', async () => {
  const original = globalThis.fetch
  globalThis.fetch = async () => { throw new Error('offline') }
  try {
    const { checkUpdate, resetUpdateCache } = await import('../src/update.js')
    resetUpdateCache()
    const result = await checkUpdate({ force: true })
    assert.equal(result.updateAvailable, false)
    assert.match(result.error, /offline/)
  } finally {
    globalThis.fetch = original
  }
})
