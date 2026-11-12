import { test } from 'node:test'
import assert from 'node:assert/strict'
import { fmtTime, fmtDuration, initialOf, shortPath } from '../client/src/lib/format.js'

test('fmtTime', () => {
  assert.equal(fmtTime(0), '0:00')
  assert.equal(fmtTime(65), '1:05')
  assert.equal(fmtTime(3725), '1:02:05')
  assert.equal(fmtTime(undefined), '0:00')
})

test('fmtDuration', () => {
  assert.equal(fmtDuration(0), '—')
  assert.equal(fmtDuration(30), '1 分钟')
  assert.equal(fmtDuration(1800), '30 分钟')
  assert.equal(fmtDuration(7200), '2 小时 0 分')
})

test('initialOf and shortPath', () => {
  assert.equal(initialOf('夜航 12'), '夜')
  assert.equal(initialOf('episode 3'), 'E')
  assert.equal(initialOf(''), '♫')
  assert.equal(shortPath('/Users/tom/Music/podcasts'), 'Music/podcasts')
})
