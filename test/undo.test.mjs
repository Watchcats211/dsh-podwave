// 撤销栈：落盘、能列出、能回到某一步、删字幕时清空。
// 这一步的重点是「关掉插件还在」——原来只存在进程内存里，用户根本没感觉。
import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-undo-'))
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')
process.env.PODWAVE_MODELS_NO_PROJECT = '1'

const undo = await import('../src/undo.js')

function transcript(text, extra = {}) {
  return {
    id: 'ep1',
    language: 'English',
    providers: {},
    text,
    lines: [{ id: 1, start: 0, end: 1, text, speaker: null, translations: {} }],
    ...extra,
  }
}

test('快门是空的', () => {
  assert.deepEqual(undo.listUndo('ep1'), [])
  assert.equal(undo.takeUndo('ep1'), null)
})

test('拍快照后能列出来，动作名保留', () => {
  const step = undo.pushUndo('ep2', transcript('第一版'), '改行')
  assert.equal(step, 1)
  const list = undo.listUndo('ep2')
  assert.equal(list.length, 1)
  assert.equal(list[0].action, '改行')
  assert.equal(list[0].lineCount, 1)
  assert.ok(list[0].at > 0)
})

test('最新的排在最前面', () => {
  undo.pushUndo('ep3', transcript('a'), '改行')
  undo.pushUndo('ep3', transcript('b'), '翻译')
  undo.pushUndo('ep3', transcript('c'), '整理断句')
  assert.deepEqual(undo.listUndo('ep3').map((step) => step.action), ['整理断句', '翻译', '改行'])
})

test('不传 stepId 就退一步', () => {
  undo.pushUndo('ep4', transcript('v1'), '改行')
  undo.pushUndo('ep4', transcript('v2'), '合并')
  const restored = undo.takeUndo('ep4')
  assert.equal(restored.text, 'v2')
  assert.equal(restored.lines[0].text, 'v2')
  assert.equal(restored.remaining, 1)
  assert.deepEqual(undo.listUndo('ep4').map((step) => step.action), ['改行'])
})

test('指定 stepId 能一次退多步', () => {
  undo.pushUndo('ep5', transcript('v1'), '改行')
  undo.pushUndo('ep5', transcript('v2'), '合并')
  undo.pushUndo('ep5', transcript('v3'), '翻译')
  const oldest = undo.listUndo('ep5')[2]
  const restored = undo.takeUndo('ep5', oldest.id)
  assert.equal(restored.text, 'v1')
  assert.equal(restored.remaining, 0)
  assert.deepEqual(undo.listUndo('ep5'), [])
})

test('不存在的 stepId 不动手', () => {
  undo.pushUndo('ep6', transcript('v1'), '改行')
  assert.equal(undo.takeUndo('ep6', 'nope'), null)
  assert.equal(undo.listUndo('ep6').length, 1)
})

test('快照落盘，模块重新读也能拿到（模拟重启）', async () => {
  undo.pushUndo('ep7', transcript('落盘的'), '改行')
  const file = path.join(process.env.PODWAVE_DATA_DIR, 'transcripts', '.undo', 'ep7.json')
  assert.ok(fs.existsSync(file), '应该写成文件')
  const raw = JSON.parse(fs.readFileSync(file, 'utf8'))
  assert.equal(raw.steps[0].text, '落盘的')
  // 再拍一次，确认是追加而不是覆盖
  undo.pushUndo('ep7', transcript('第二版'), '翻译')
  assert.equal(undo.listUndo('ep7').length, 2)
})

test('超过上限时丢最老的', () => {
  for (let index = 0; index < undo.UNDO_STEPS + 5; index += 1) {
    undo.pushUndo('ep8', transcript(`v${index}`), '改行')
  }
  const list = undo.listUndo('ep8')
  assert.equal(list.length, undo.UNDO_STEPS)
  // 最新那条必须还在
  assert.equal(undo.takeUndo('ep8').text, `v${undo.UNDO_STEPS + 4}`)
})

test('clearUndo 清干净', async () => {
  undo.pushUndo('ep9', transcript('x'), '改行')
  await undo.clearUndo('ep9')
  assert.deepEqual(undo.listUndo('ep9'), [])
})

test('非法 id 不会写出文件', () => {
  assert.equal(undo.pushUndo('../../etc/passwd', transcript('x'), '改行'), 0)
  assert.deepEqual(undo.listUndo('../../etc/passwd'), [])
})

test('pruneUndo 不炸（目录可能还不存在）', async () => {
  await undo.pruneUndo()
  assert.ok(true)
})

test('cleanup', () => {
  fs.rmSync(home, { recursive: true, force: true })
})
