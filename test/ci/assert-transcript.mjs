// CI 专用：校验 sherpa 输出的 JSON 至少包含一段可读文本与时间戳。
import { readFileSync } from 'node:fs'

const data = JSON.parse(readFileSync('out/test-speech.json', 'utf8'))
const text = String(data.text || '').trim()
if (text.length < 8) throw new Error(`转写文本太短：${JSON.stringify(text)}`)
if (!Array.isArray(data.tokens) || data.tokens.length === 0) throw new Error('没有 token 时间戳')
console.log('识别结果：', text)
console.log('token 数：', data.tokens.length)
