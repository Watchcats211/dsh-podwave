// 翻译回归测试：只跑 mock fetch，绝不请求真实（计费）API。
// 覆盖：分批落盘、失败保留已翻行、缺号检测、状态区分 none/partial/done/error、不重复开任务。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-translate-'))
process.env.PODWAVE_DATA_DIR = dataDir
process.env.HOME = dataDir

const { translateWithApi, startTranslation, getTranslationState } = await import('../src/translate.js')
const { saveTranscript, readTranscript } = await import('../src/transcribe.js')
const { updateSection } = await import('../src/config.js')

function makeTranscript(id, texts) {
  return {
    schemaVersion: 2,
    id,
    title: id,
    language: 'English',
    duration: texts.length,
    text: texts.join(' '),
    lines: texts.map((text, index) => ({
      id: index + 1,
      start: index,
      end: index + 1,
      text,
      speaker: null,
      translations: {},
    })),
    providers: {},
    speakers: [],
  }
}

function numbered(lines, transform = (text) => `译：${text}`) {
  return lines.map((text, index) => `${index + 1}. ${transform(text)}`).join('\n')
}

function apiReply(content) {
  return new Response(JSON.stringify({ choices: [{ message: { content } }] }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  })
}

const config = { apiBase: 'https://api.example.test', apiKey: 'test-key', apiModel: 'test-model' }

test('translateWithApi 分批保存：每个批次都会调用 onBatch', async () => {
  const originalFetch = globalThis.fetch
  const batches = []
  globalThis.fetch = async (url, init) => {
    const body = JSON.parse(init.body)
    const prompt = body.messages.at(-1).content
    const lines = prompt.split('\n').map((line) => line.replace(/^\d+\.\s*/, ''))
    return apiReply(numbered(lines))
  }
  try {
    const items = Array.from({ length: 45 }, (_, index) => ({ id: index + 1, text: `line ${index + 1}` }))
    const result = await translateWithApi(items, 'zh', config, {
      onBatch: (parsed, batch) => { batches.push(batch.length) },
    })
    assert.deepEqual(batches, [20, 20, 5], '45 行应按 20/20/5 分三批落盘')
    assert.equal(result.size, 45)
    assert.equal(result.get(1), '译：line 1')
  } finally {
    globalThis.fetch = originalFetch
  }
})

test('translateWithApi 中途失败时，已保存的批次仍然保留', async () => {
  const originalFetch = globalThis.fetch
  let call = 0
  const saved = new Map()
  globalThis.fetch = async (url, init) => {
    call += 1
    if (call === 2) return new Response('quota exceeded', { status: 400 })
    const prompt = JSON.parse(init.body).messages.at(-1).content
    const lines = prompt.split('\n').map((line) => line.replace(/^\d+\.\s*/, ''))
    return apiReply(numbered(lines))
  }
  try {
    const items = Array.from({ length: 40 }, (_, index) => ({ id: index + 1, text: `line ${index + 1}` }))
    await assert.rejects(
      () => translateWithApi(items, 'zh', config, {
        onBatch: (parsed, batch) => {
          batch.forEach((line, index) => {
            const text = parsed.get(index + 1)
            if (text) saved.set(line.id, text)
          })
        },
      }),
      /翻译 API 400：quota exceeded/,
    )
    assert.equal(saved.size, 20, '第一批 20 行必须已经落盘，不能被后续失败丢弃')
  } finally {
    globalThis.fetch = originalFetch
  }
})

test('translateWithApi 缺号会报不完整，并带 incomplete 计数', async () => {
  const originalFetch = globalThis.fetch
  globalThis.fetch = async () => {
    // 故意只返回第 1 行，缺第 2、3 行
    return apiReply('1. 只有第一行')
  }
  try {
    const items = [
      { id: 1, text: 'one' },
      { id: 2, text: 'two' },
      { id: 3, text: 'three' },
    ]
    await assert.rejects(
      () => translateWithApi(items, 'zh', config, { onBatch: () => {} }),
      (error) => {
        assert.match(error.message, /API 返回不完整：2 行/)
        assert.equal(error.incomplete, 2)
        return true
      },
    )
  } finally {
    globalThis.fetch = originalFetch
  }
})

test('translateWithApi 返回格式异常时给出明确错误', async () => {
  const originalFetch = globalThis.fetch
  globalThis.fetch = async () => new Response(JSON.stringify({ choices: [] }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  })
  try {
    await assert.rejects(
      () => translateWithApi([{ id: 1, text: 'one' }], 'zh', config, { onBatch: () => {} }),
      /翻译 API 返回格式不正确/,
    )
  } finally {
    globalThis.fetch = originalFetch
  }
})

test('getTranslationState 区分 none / partial / done 并统计待翻行', async () => {
  const id = 'state-episode'
  await saveTranscript(makeTranscript(id, ['hello', 'world', 'again']))

  const none = await getTranslationState(id, 'zh')
  assert.equal(none.status, 'none')
  assert.equal(none.missing, 3)
  assert.equal(none.total, 3)

  const partial = makeTranscript(id, ['hello', 'world', 'again'])
  partial.lines[0].translations.zh = '你好'
  partial.providers.zh = 'api'
  await saveTranscript(partial)

  const state = await getTranslationState(id, 'zh')
  assert.equal(state.status, 'partial')
  assert.equal(state.translated, 1)
  assert.equal(state.missing, 2)
  assert.equal(state.provider, 'api')

  const done = makeTranscript(id, ['hello', 'world', 'again'])
  done.lines.forEach((line, index) => { line.translations.zh = `译文${index}` })
  done.providers.zh = 'api'
  await saveTranscript(done)

  const finished = await getTranslationState(id, 'zh')
  assert.equal(finished.status, 'done')
  assert.equal(finished.missing, 0)
})

test('getTranslationState 保留失败任务的报错与进度', async () => {
  const id = 'state-error'
  const texts = Array.from({ length: 25 }, (_, index) => `line ${index + 1}`)
  await saveTranscript(makeTranscript(id, texts))
  updateSection('translate', { ...config, provider: 'api' })

  const originalFetch = globalThis.fetch
  let call = 0
  globalThis.fetch = async (url, init) => {
    call += 1
    if (call > 1) return new Response('rate limited', { status: 400 })
    const prompt = JSON.parse(init.body).messages.at(-1).content
    const lines = prompt.split('\n').map((line) => line.replace(/^\d+\.\s*/, ''))
    return apiReply(numbered(lines))
  }
  try {
    await startTranslation(id, { target: 'zh', provider: 'api', config })
    // 等后台任务跑完：轮询到状态不再是 running
    let state = await getTranslationState(id, 'zh')
    for (let attempt = 0; attempt < 120 && state.status === 'running'; attempt += 1) {
      await new Promise((resolve) => setTimeout(resolve, 100))
      state = await getTranslationState(id, 'zh')
    }
    assert.equal(state.status, 'error', '失败后状态应为 error')
    assert.match(state.error, /翻译 API 400：rate limited/)
    assert.equal(state.progress.done, 20, '第一批 20 行要留在进度里')
  } finally {
    globalThis.fetch = originalFetch
  }

  const stored = await readTranscript(id)
  assert.ok(stored.lines.some((line) => line.translations.zh), '失败前的译文必须已落盘')
})

test('startTranslation 在全部翻完后标记 done 且不重复开任务', async () => {
  const id = 'state-done'
  await saveTranscript(makeTranscript(id, ['one', 'two']))
  updateSection('translate', { ...config, provider: 'api' })

  const originalFetch = globalThis.fetch
  globalThis.fetch = async (url, init) => {
    const prompt = JSON.parse(init.body).messages.at(-1).content
    const lines = prompt.split('\n').map((line) => line.replace(/^\d+\.\s*/, ''))
    return apiReply(numbered(lines))
  }
  try {
    await startTranslation(id, { target: 'zh', provider: 'api' })
    let state = await getTranslationState(id, 'zh')
    for (let attempt = 0; attempt < 120 && state.status === 'running'; attempt += 1) {
      await new Promise((resolve) => setTimeout(resolve, 100))
      state = await getTranslationState(id, 'zh')
    }
    assert.equal(state.status, 'done')
    assert.equal(state.missing, 0)

    // 再点一次：没有待翻行，应直接返回 done，且不再发请求
    globalThis.fetch = async () => { throw new Error('不应该再请求 API') }
    const again = await startTranslation(id, { target: 'zh', provider: 'api' })
    assert.equal(again.status, 'done')
  } finally {
    globalThis.fetch = originalFetch
  }
})
