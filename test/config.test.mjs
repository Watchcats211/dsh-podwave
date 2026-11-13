import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const home = mkdtempSync(path.join(os.tmpdir(), 'podwave-config-'))
process.env.HOME = home
const dataDir = path.join(home, '.podwave')
process.env.PODWAVE_DATA_DIR = dataDir
mkdirSync(dataDir, { recursive: true })
writeFileSync(path.join(dataDir, 'ui.json'), JSON.stringify({ sidebarCollapsed: true }))
writeFileSync(path.join(dataDir, 'models.json'), JSON.stringify({ asrModel: 'custom-asr' }))

const { CONFIG_DEFAULTS, loadConfig, getSection, updateSection } = await import('../src/config.js')

test('loadConfig migrates legacy files and backs them up', () => {
  const config = loadConfig()
  assert.equal(config.schemaVersion, 1)
  assert.equal(config.ui.sidebarCollapsed, true)
  assert.equal(config.models.asrModel, 'custom-asr')
  assert.equal(config.translate.provider, CONFIG_DEFAULTS.translate.provider)
  assert.ok(existsSync(path.join(dataDir, 'config.json')))
  assert.ok(existsSync(path.join(dataDir, 'ui.json.bak')))
  assert.ok(existsSync(path.join(dataDir, 'models.json.bak')))
})

test('updateSection persists a merged section', () => {
  const next = updateSection('translate', { target: 'en' })
  assert.equal(next.target, 'en')
  assert.equal(getSection('translate').apiModel, CONFIG_DEFAULTS.translate.apiModel)
  const stored = JSON.parse(readFileSync(path.join(dataDir, 'config.json'), 'utf8'))
  assert.equal(stored.translate.target, 'en')
  assert.equal(stored.ui.sidebarCollapsed, true)
})
