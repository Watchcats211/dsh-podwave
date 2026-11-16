// 识别完之后的再断句：把碎片行拼回整句，别让翻译拿到半句话。
import assert from 'node:assert/strict'
import test from 'node:test'

const { resegmentLines, splitSentences } = await import('../src/segment.js')

const line = (start, end, text, speaker = null) => ({ start, end, text, speaker })

test('splitSentences keeps decimals and abbreviations in one piece', () => {
  assert.deepEqual(splitSentences('Mr. Smith won 3.5 stars. U.S. team left.'), [
    'Mr. Smith won 3.5 stars.',
    'U.S. team left.',
  ])
})

test('splitSentences keeps a closing quote with its sentence', () => {
  assert.deepEqual(splitSentences('He said "go." Then he left.'), ['He said "go."', 'Then he left.'])
})

test('splitSentences does not break a run of ellipsis dots', () => {
  assert.deepEqual(splitSentences('等一下……我想想。'), ['等一下……', '我想想。'])
})

test('fragments without a terminator are stitched into one sentence', () => {
  const lines = resegmentLines([
    line(0, 1, 'I think one of the biggest'),
    line(1, 2.4, 'giveaways of my personality'),
    line(2.4, 3, 'is subtlety.'),
    line(3.2, 4, 'Next sentence here.'),
  ])
  assert.equal(lines.length, 2)
  assert.equal(lines[0].text, 'I think one of the biggest giveaways of my personality is subtlety.')
  assert.equal(lines[0].start, 0)
  assert.equal(lines[0].end, 3)
  assert.equal(lines[1].text, 'Next sentence here.')
})

test('two complete sentences never get glued together', () => {
  const lines = resegmentLines([line(0, 1, '这是一个测试。'), line(1, 2, '第二句在这里。')])
  assert.equal(lines.length, 2)
  assert.deepEqual(lines.map((item) => item.text), ['这是一个测试。', '第二句在这里。'])
})

test('a long pause counts as a sentence boundary when there is no punctuation', () => {
  const lines = resegmentLines([line(0, 1, 'we were talking about'), line(3, 4, 'something else entirely')])
  assert.equal(lines.length, 2)
})

test('CJK fragments are joined without extra spaces', () => {
  const lines = resegmentLines([line(0, 1, '明日は'), line(1, 2.5, '東京に行く予定です。')])
  assert.equal(lines.length, 1)
  assert.equal(lines[0].text, '明日は東京に行く予定です。')
})

test('one line holding two sentences is split and timed by length', () => {
  const lines = resegmentLines([line(10, 14, '这是一句。这是另一句更长的。')])
  assert.equal(lines.length, 2)
  assert.equal(lines[0].start, 10)
  assert.ok(lines[0].end > lines[0].start)
  assert.ok(lines[1].end <= 14.001)
  assert.ok(lines[1].end >= 13.99)
})

test('a very long unpunctuated stream is cut at maxDuration', () => {
  const lines = resegmentLines([line(0, 40, 'word '.repeat(80).trim())], { maxDuration: 8 })
  assert.ok(lines.length >= 2)
  for (const item of lines) assert.ok(item.end - item.start <= 40.01)
})

test('different speakers are never merged into one line', () => {
  const lines = resegmentLines([line(0, 1, 'hello there', 1), line(1, 2, 'general kenobi', 2)])
  assert.equal(lines.length, 2)
  assert.deepEqual(lines.map((item) => item.speaker), [1, 2])
})

test('resegmentation renumbers ids and drops empty lines', () => {
  const lines = resegmentLines([line(0, 1, '   '), line(1, 2, 'only line.')])
  assert.equal(lines.length, 1)
  assert.equal(lines[0].id, 1)
  assert.deepEqual(lines[0].translations, {})
})
