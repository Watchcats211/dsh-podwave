import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync } from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const home = mkdtempSync(path.join(os.tmpdir(), 'podwave-library-'))
process.env.HOME = home
if (process.platform === 'win32') process.env.USERPROFILE = home
const { AUDIO_EXTENSIONS, episodeId, expandHome } = await import('../src/library.js')

test('episodeId is a stable 16 hex sha1 prefix', () => {
  assert.equal(episodeId('a'), '86f7e437faa5a7fc')
  assert.equal(episodeId('a'), episodeId('a'))
  assert.match(episodeId('/tmp/x.mp3'), /^[0-9a-f]{16}$/)
})

test('audio extensions include common containers', () => {
  for (const ext of ['.mp3', '.m4a', '.wav', '.flac', '.ogg', '.opus']) assert.ok(AUDIO_EXTENSIONS.has(ext))
})

test('expandHome expands ~', () => {
  assert.equal(expandHome('~/Music'), path.join(home, 'Music'))
  assert.equal(expandHome('/abs'), path.resolve('/abs'))
})
