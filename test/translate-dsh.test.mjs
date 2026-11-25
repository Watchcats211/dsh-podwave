// 翻译走 DSH 自己的模型：不读插件里的 apiKey，模型从 agentDefaultModel 拿。
import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-dsh-'))
process.env.HOME = tmp
process.env.PODWAVE_DATA_DIR = path.join(tmp, '.podwave')
process.env.PODWAVE_MODELS_NO_PROJECT = '1'

const translate = await import('../src/translate.js')

function fakeContext({ provider = 'dsh-opencode-go', model = 'deepseek-v4.1-flash', chunks = [], calls = [] } = {}) {
  const ctx = {
    get(name) {
      if (name === 'agentDefaultModel') {
        return { currentSelection: () => (provider && model ? { provider, model } : null) }
      }
      if (name === 'llm') {
        return {
          async prepareCall(config) {
            calls.push(config)
            return {
              config,
              async *stream(options) {
                calls.push(options)
                for (const text of chunks) yield { type: 'text-delta', text }
                yield { type: 'finish', reason: { kind: 'stop' } }
              },
            }
          },
        }
      }
      return undefined
    },
  }
  return ctx
}

const items = [
  { id: 'a', text: 'Hello there.' },
  { id: 'b', text: 'Good morning.' },
]

test('dshSelection reads the model currently chosen in DSH', () => {
  translate.setDshContext(fakeContext())
  const selection = translate.dshSelection()
  assert.equal(selection.provider, 'dsh-opencode-go')
  assert.equal(selection.model, 'deepseek-v4.1-flash')
  assert.match(selection.label, /dsh-opencode-go/)
})

test('dshSelection returns null when DSH has no model selected', () => {
  translate.setDshContext(fakeContext({ provider: '', model: '' }))
  assert.equal(translate.dshSelection(), null)
})

test('translateWithDsh parses numbered output into a line map', async () => {
  const calls = []
  translate.setDshContext(fakeContext({ chunks: ['1. 你好。\n', '2. 早上好。'], calls }))
  const mapping = await translate.translateWithDsh(items, 'zh')
  assert.equal(mapping.get('a'), '你好。')
  assert.equal(mapping.get('b'), '早上好。')
  // 请求里必须带 sessionId（opencode-go 缺它会 400）与编号模板
  const options = calls.find((entry) => entry && entry.messages)
  assert.equal(options.sessionId, 'dsh-podwave-translate')
  assert.match(options.messages[0].content[0].text, /逐条翻译为中文/)
})

test('translateWithDsh fails loudly when DSH has no usable model', async () => {
  translate.setDshContext(fakeContext({ provider: '', model: '' }))
  await assert.rejects(() => translate.translateWithDsh(items, 'zh'), /没有可用的 DSH 模型/)
})

test('translateWithDsh surfaces provider failures', async () => {
  translate.setDshContext({
    get(name) {
      if (name === 'agentDefaultModel') return { currentSelection: () => ({ provider: 'p', model: 'm' }) }
      if (name === 'llm') {
        return {
          async prepareCall(config) {
            return {
              config,
              async *stream() {
                yield { type: 'finish', reason: { kind: 'error', failure: { message: '余额不足' } } }
              },
            }
          },
        }
      }
      return undefined
    },
  })
  await assert.rejects(() => translate.translateWithDsh(items, 'zh'), /余额不足/)
})

test('publicConfig reports the DSH model without exposing a key', () => {
  translate.setDshContext(fakeContext())
  const config = translate.publicConfig()
  assert.equal(config.dshReady, true)
  assert.equal(config.dshModel, 'deepseek-v4.1-flash')
  assert.equal(config.hasApiKey, false)
})
