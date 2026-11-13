import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

// 单集 id 是文件绝对路径的哈希：文件改名/移动后，旧字幕就成了"孤儿"。
// 这里验证 readTranscript 能按 title + duration 把唯一匹配的孤儿认领回来。
const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-claim-'))
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')
fs.mkdirSync(path.join(home, '.podwave', 'transcripts'), { recursive: true })

const { readTranscript, TRANSCRIPTS_DIR } = await import('../src/transcribe.js')
const { registerProvider } = await import('../src/providers.js')

// 认领失败会记 TTL，所以每个用例用不同的 id + 不同的 title，避免互相污染。
const episodes = new Map()

registerProvider('fake', {
  id: 'fake',
  matches: (id) => episodes.has(id),
  getEpisode: (id) => (episodes.has(id) ? { ...episodes.get(id), source: 'fake' } : null),
  listEpisodes: () => [...episodes.values()],
})

function makeEpisode(id, title, duration) {
  const episode = { id, title, duration, file: `/Users/someone/Downloads/${id}.m4a` }
  episodes.set(id, episode)
  return episode
}

const orphanLines = [
  { id: 1, start: 0, end: 2, text: 'hello', translations: { zh: '你好' } },
  { id: 2, start: 2, end: 4, text: 'world', translations: {} },
]

function writeOrphan(name, overrides = {}) {
  const file = path.join(TRANSCRIPTS_DIR, `${name}.json`)
  fs.writeFileSync(
    file,
    JSON.stringify({
      id: name,
      schemaVersion: 2,
      title: overrides.title || '',
      duration: 0,
      lines: orphanLines,
      providers: { zh: 'local' },
      ...overrides,
    }),
  )
  return file
}

function cleanup() {
  for (const name of fs.readdirSync(TRANSCRIPTS_DIR)) {
    fs.rmSync(path.join(TRANSCRIPTS_DIR, name), { force: true })
  }
}

test('claims an orphan transcript whose title and duration match', async () => {
  cleanup()
  const episode = makeEpisode('claim-a', '英文｜是老美还是老中，“永远的异乡人”', 2730.546439909297)
  const orphanFile = writeOrphan('9bb9477b8839e808', { title: episode.title, duration: episode.duration })
  const claimed = await readTranscript(episode.id)
  assert.ok(claimed, 'should claim the orphan transcript')
  assert.equal(claimed.id, episode.id)
  assert.equal(claimed.claimedFrom, '9bb9477b8839e808')
  assert.equal(claimed.lines.length, 2)
  assert.equal(claimed.providers.zh, 'local')
  assert.equal(claimed.source.path, episode.file)
  // 认领结果写到当前 id，原文件保留作备份
  assert.ok(fs.existsSync(path.join(TRANSCRIPTS_DIR, `${episode.id}.json`)))
  assert.ok(fs.existsSync(orphanFile), 'original orphan file should be kept')
})

test('returns null when no orphan matches the duration', async () => {
  cleanup()
  const episode = makeEpisode('claim-b', 'Su7 赛场参考视频', 14.592)
  writeOrphan('orphan-too-long', { title: episode.title, duration: episode.duration + 300 })
  assert.equal(await readTranscript(episode.id), null)
})

test('refuses to claim when several orphans match', async () => {
  cleanup()
  const episode = makeEpisode('claim-c', '2024年12月N1音频', 2956.3297959183674)
  writeOrphan('orphan-dup-a', { title: episode.title, duration: episode.duration })
  writeOrphan('orphan-dup-b', { title: episode.title, duration: episode.duration })
  assert.equal(await readTranscript(episode.id), null)
})

test('ignores v1 files without lines', async () => {
  cleanup()
  const episode = makeEpisode('claim-d', '没有行的老字幕', 100)
  writeOrphan('orphan-v1', { title: episode.title, duration: episode.duration, schemaVersion: 1, lines: undefined, segments: [] })
  assert.equal(await readTranscript(episode.id), null)
})

test('reading an id that is not in the library stays null', async () => {
  cleanup()
  writeOrphan('orphan-x', { title: 'orphan-x', duration: 10 })
  assert.equal(await readTranscript('unknown-id-00000'), null)
})

test('a claimed transcript is reused directly on the next read', async () => {
  cleanup()
  const episode = makeEpisode('claim-e', '可复用的字幕', 500)
  writeOrphan('orphan-reuse', { title: episode.title, duration: episode.duration })
  const first = await readTranscript(episode.id)
  assert.ok(first)
  // 第二次走的是 ${id}.json 直读，不再扫目录
  const second = await readTranscript(episode.id)
  assert.equal(second.id, episode.id)
  assert.equal(second.claimedFrom, 'orphan-reuse')
})
