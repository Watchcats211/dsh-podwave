import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync } from 'node:fs'
import os from 'node:os'
import path from 'node:path'

process.env.HOME = mkdtempSync(path.join(os.tmpdir(), 'podwave-transcript-'))
const { normalizeTranscript, toSRT, toMarkdown } = await import('../src/transcribe.js')

const legacy = {
  id: 'abc',
  language: 'Chinese',
  segments: [
    { id: 1, text: '你好', start: 0, end: 1.234 },
    { id: 2, text: '世界', start: 1.5, end: 2.999 },
  ],
  translations: { en: { 1: 'Hello', 2: 'World', _provider: 'local' } },
}

test('normalizeTranscript migrates v1 to v2', () => {
  const t = normalizeTranscript(legacy, 'fallback')
  assert.equal(t.schemaVersion, 2)
  assert.equal(t.id, 'abc')
  assert.equal(t.lines.length, 2)
  assert.deepEqual(t.lines[0], { id: 1, start: 0, end: 1.23, text: '你好', speaker: null, translations: { en: 'Hello' } })
  assert.equal(t.providers.en, 'local')
  assert.equal(t.text, '你好 世界')
  assert.equal(t.migratedFrom, 1)
})

test('normalizeTranscript keeps v2 as-is and handles empty input', () => {
  const v2 = { schemaVersion: 2, id: 'x', lines: [] }
  assert.equal(normalizeTranscript(v2), v2)
  assert.equal(normalizeTranscript(null), null)
})

test('toSRT renders timestamps and text', () => {
  const srt = toSRT(normalizeTranscript(legacy))
  assert.match(srt, /^1\r?\n00:00:00,000 --> 00:00:01,230\r?\n你好/)
  assert.match(srt, /2\r?\n00:00:01,500 --> 00:00:03,000\r?\n世界/)
})

test('toMarkdown renders a transcript body', () => {
  const md = toMarkdown(normalizeTranscript(legacy))
  assert.match(md, /你好/)
  assert.match(md, /世界/)
})
