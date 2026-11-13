import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const css = readFileSync(new URL('../client/src/styles.css', import.meta.url), 'utf8')

test('styles.css has no self-referencing custom properties', () => {
  const bad = []
  for (const match of css.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;}]+)/g)) {
    const [, name, value] = match
    if (new RegExp(`var\\(\\s*${name}\\b`).test(value)) bad.push(name)
  }
  assert.deepEqual(bad, [], `self-referencing custom properties break their value: ${bad.join(', ')}`)
})
