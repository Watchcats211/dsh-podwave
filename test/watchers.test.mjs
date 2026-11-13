import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

test('folder watchers start for existing folders and stop cleanly', async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-watch-'))
  const lib = path.join(tmp, 'library')
  fs.mkdirSync(lib)
  process.env.PODWAVE_DATA_DIR = path.join(tmp, 'data')

  const state = await import('../src/state.js')
  await state.initState()
  state.addFolderState(lib)

  const host = await import('../src/host.js')
  host.refreshWatchers()
  assert.equal(host.watcherStatus().watchers, 1)
  assert.equal(host.watcherStatus().polling, false)

  host.closeWatchers()
  assert.equal(host.watcherStatus().watchers, 0)
  assert.equal(host.watcherStatus().polling, false)
})
