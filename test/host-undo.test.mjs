// 撤销改动的 HTTP 接口：能列出历史、能回到某一步、删字幕时清空。
// 真机经历过的问题是「点了没反应」——所以这里重点测 GET 列表和按 stepId 回退。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import http from 'node:http'
import os from 'node:os'
import path from 'node:path'

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-host-undo-'))
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')
process.env.PODWAVE_MODELS_NO_PROJECT = '1'

// 用 xyz 前缀的 id：这类单集不需要出现在本地媒体库里也能通过路由校验。
const ID = 'xyzabcdef0123456789'

function transcriptFile() {
  return path.join(process.env.PODWAVE_DATA_DIR, 'transcripts', `${ID}.json`)
}

function writeTranscript(lines) {
  fs.mkdirSync(path.dirname(transcriptFile()), { recursive: true })
  fs.writeFileSync(transcriptFile(), JSON.stringify({
    schemaVersion: 2,
    id: ID,
    title: '测试集',
    language: 'English',
    text: lines.map((line) => line.text).join(' '),
    providers: {},
    lines,
  }), 'utf8')
}

test('host: 撤销接口能列历史、能回到某一步', async () => {
  const effects = []
  let handler = null
  const ctx = {
    get: (name) => (name === 'connection' ? { requestRejection: () => null } : undefined),
    effect: (fn) => {
      const dispose = fn()
      if (typeof dispose === 'function') effects.push(dispose)
      return dispose
    },
    webServer: {
      register: (config) => {
        handler = config.handler
        return () => {}
      },
    },
  }
  const server = http.createServer((req, res) => handler(req, res))
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  const base = `http://127.0.0.1:${server.address().port}`

  try {
    const host = (await import('../src/host.js')).default
    host.apply(ctx)

    writeTranscript([{ id: 1, start: 0, end: 1, text: '原始第一行', speaker: null, translations: {} }])

    // 先改一行，应该自动拍一份快照
    const edited = await fetch(`${base}/podwave/api/episodes/${ID}/transcript/lines/1`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text: '改过的第一行' }),
    })
    assert.equal(edited.status, 200)
    assert.equal((await edited.json()).transcript.lines[0].text, '改过的第一行')

    const listed = await (await fetch(`${base}/podwave/api/episodes/${ID}/transcript/undo`)).json()
    assert.equal(listed.steps.length, 1, '应该有一条可撤销的历史')
    assert.equal(listed.steps[0].action, '改行')
    assert.equal(listed.steps[0].lineCount, 1)

    const undone = await fetch(`${base}/podwave/api/episodes/${ID}/transcript/undo`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({}),
    })
    assert.equal(undone.status, 200)
    const body = await undone.json()
    assert.equal(body.action, '改行')
    assert.equal(body.transcript.lines[0].text, '原始第一行', '应该退回改动之前')
    assert.equal(body.remaining, 0)
    assert.deepEqual(body.steps, [], '退完之后历史空了')

    // 再点一次：应该 409 而不是静默成功
    const again = await fetch(`${base}/podwave/api/episodes/${ID}/transcript/undo`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({}),
    })
    assert.equal(again.status, 409)

    // 按 stepId 回退：改两次，退回到最早那步
    await fetch(`${base}/podwave/api/episodes/${ID}/transcript/lines/1`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text: '第二次改的' }),
    })
    await fetch(`${base}/podwave/api/episodes/${ID}/transcript/lines/1`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text: '第三次改的' }),
    })
    const steps = (await (await fetch(`${base}/podwave/api/episodes/${ID}/transcript/undo`)).json()).steps
    assert.equal(steps.length, 2)
    const oldest = steps[steps.length - 1]
    const jump = await fetch(`${base}/podwave/api/episodes/${ID}/transcript/undo`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ stepId: oldest.id }),
    })
    assert.equal(jump.status, 200)
    const jumped = await jump.json()
    assert.equal(jumped.transcript.lines[0].text, '原始第一行')
    assert.deepEqual(jumped.steps, [])
  } finally {
    for (const dispose of effects) dispose()
    await new Promise((resolve) => server.close(resolve))
    fs.rmSync(home, { recursive: true, force: true })
  }
})
