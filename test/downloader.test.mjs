import assert from 'node:assert/strict'
import test from 'node:test'
import { isSafeArchivePath } from '../src/downloader.js'

test('isSafeArchivePath accepts normal nested names', () => {
  assert.equal(isSafeArchivePath('model.onnx'), true)
  assert.equal(isSafeArchivePath('sub/dir/file.txt'), true)
  assert.equal(isSafeArchivePath('dir/../file.txt'), false)
})

test('isSafeArchivePath rejects traversal and absolute paths', () => {
  assert.equal(isSafeArchivePath('../evil.sh'), false)
  assert.equal(isSafeArchivePath('/etc/passwd'), false)
  assert.equal(isSafeArchivePath('C:/Windows/system32'), false)
  assert.equal(isSafeArchivePath('a\\..\\b'), false)
})
