import test from 'node:test'
import assert from 'node:assert/strict'
import { extractPid, extractEpisodeId, isXyzId, eidFromId } from '../src/xyz.js'

test('extractPid accepts raw pid and podcast links', () => {
  assert.equal(extractPid('6013f9f58e2f7ee375cf4216'), '6013f9f58e2f7ee375cf4216')
  assert.equal(extractPid('https://www.xiaoyuzhoufm.com/podcast/6013f9f58e2f7ee375cf4216'), '6013f9f58e2f7ee375cf4216')
  assert.equal(extractPid('https://www.xiaoyuzhoufm.com/podcast/6013f9f58e2f7ee375cf4216?utm=x'), '6013f9f58e2f7ee375cf4216')
  assert.equal(extractPid(''), '')
  assert.equal(extractPid('not a link'), '')
})

test('extractEpisodeId accepts episode links only', () => {
  assert.equal(extractEpisodeId('https://www.xiaoyuzhoufm.com/episode/69b2b5a152cc900b9df1f42d'), '69b2b5a152cc900b9df1f42d')
  assert.equal(extractEpisodeId('https://www.xiaoyuzhoufm.com/episode/69b2b5a152cc900b9df1f42d?utm=x'), '69b2b5a152cc900b9df1f42d')
  assert.equal(extractEpisodeId('69b2b5a152cc900b9df1f42d'), '')
  assert.equal(extractEpisodeId('https://www.xiaoyuzhoufm.com/podcast/6013f9f58e2f7ee375cf4216'), '')
})

test('xyz id helpers round trip', () => {
  const eid = '6aed7b615b7c4709bfe1fe12'
  assert.equal(isXyzId(`xyz${eid}`), true)
  assert.equal(isXyzId('6aed7b615b7c4709bfe1fe12'), false)
  assert.equal(eidFromId(`xyz${eid}`), eid)
})
