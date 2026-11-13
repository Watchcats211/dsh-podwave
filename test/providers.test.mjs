// 统一节目适配器：来源识别与兜底逻辑。
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('provider registry routes ids to explicit providers and falls back to local', async () => {
  const { providers, registerProvider, getProviderById, listAllEpisodes } = await import('../src/providers.js')
  assert.equal(getProviderById('xyzabc123').id, 'xyz')
  assert.equal(getProviderById('deadbeefdeadbeef').id, 'local')

  // 模拟以后新增的来源：显式适配器应优先于 local 兜底。
  registerProvider('rss', {
    id: 'rss',
    matches: (id) => String(id).startsWith('rss-'),
    getEpisode: () => null,
    listEpisodes: () => [],
  })
  assert.equal(getProviderById('rss-1').id, 'rss')
  assert.equal(getProviderById('whatever').id, 'local')
  assert.ok(Array.isArray(listAllEpisodes()))

  providers.delete('rss')
})
