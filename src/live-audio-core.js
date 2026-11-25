// 实时字幕的前端音频逻辑：能量 VAD 切句、WAV 编码、挑采集设备。
//
// 这个文件是纯 JS，不碰 DOM 也不碰 Node —— 客户端打包时直接 import 它，
// `node --test` 也能原样 import 来测。凡是跟浏览器打交道的（getUserMedia、
// AudioWorklet）都留在 client/src/lib/audioCapture.js 里。

export const LIVE_SAMPLE_RATE = 16000
// 静音多久算一句结束。600ms 是「说话人换气」和「句子中间停顿」的分界：
// 再短会把一句话切成两半，再长字幕就明显跟不上。
export const LIVE_SILENCE_MS = 600
// 单句上限。演讲式连说不停时没有静音点，必须硬切，否则等不到字幕。
export const LIVE_MAX_MS = 12000
// 太短的「有声」多半是键盘声、椅子响，丢掉不送识别（省钱也省噪声字幕）。
export const LIVE_MIN_MS = 400
// 切句时往前多带一点，避免把第一个声母吃掉。
export const LIVE_PREROLL_MS = 300
// 句尾保留的余量：ASR 对尾部被切断很敏感，留 120ms 收尾。
const LIVE_TAIL_SECONDS = 0.12

export function rms(frame) {
  if (!frame || !frame.length) return 0
  let sum = 0
  for (let index = 0; index < frame.length; index += 1) sum += frame[index] * frame[index]
  return Math.sqrt(sum / frame.length)
}

function round3(value) {
  return Math.round((Number(value) || 0) * 1000) / 1000
}

// BlackHole / VB-Cable / Soundflower / 立体声混音 这类虚拟声卡的常见叫法。
// 默认必须优先选它们：选成麦克风只会录到屋子里的人说话，而不是视频的声音。
const VIRTUAL_HINTS = /blackhole|loopback|vb-?audio|vb-?cable|stereo ?mix|立体声混音|soundflower|virtual|existential|parrot|oray/i
const MIC_HINTS = /microphone|麦克风|mic\b/i

export function scoreCaptureDevice(device) {
  const label = String(device?.label || '')
  const id = String(device?.deviceId || '')
  let score = 0
  if (VIRTUAL_HINTS.test(label)) score += 100
  if (MIC_HINTS.test(label)) score -= 10
  // 还没授权时 label 是空的（只剩 deviceId），这种排最后但仍然可选。
  if (!label) score -= 5
  if (id === 'default' || id === 'communications') score -= 30
  return score
}

/** 从 enumerateDevices() 的结果里挑一个最像「系统声音」的输入设备。 */
export function pickCaptureDevice(devices) {
  const list = (devices || []).filter((device) => device && device.kind === 'audioinput' && device.deviceId)
  if (!list.length) return null
  return [...list].sort((a, b) => scoreCaptureDevice(b) - scoreCaptureDevice(a))[0]
}

/**
 * 把连续音频切成「一句一段」。
 *
 * 用法：每来一帧 16k 单声道 Float32 就 push()，返回数组里是切好的句子：
 * `{ samples, start, end, seconds, reason }`，start/end 是相对于开始采集的秒数。
 */
export class LiveSegmenter {
  constructor({
    sampleRate = LIVE_SAMPLE_RATE,
    silenceMs = LIVE_SILENCE_MS,
    maxMs = LIVE_MAX_MS,
    minMs = LIVE_MIN_MS,
    prerollMs = LIVE_PREROLL_MS,
  } = {}) {
    this.sampleRate = sampleRate
    this.silenceMs = silenceMs
    this.maxMs = maxMs
    this.minMs = minMs
    this.prerollMs = prerollMs
    this.total = 0 // 已经收进来的样本总数（绝对位置）
    this.noise = null // 噪声底，只在「没在说话」时更新
    this.inSpeech = false
    this.preroll = [] // 未说话时滚动的余量
    this.segment = [] // 当前这句的音频块
    this.segmentStart = 0
    this.silence = 0 // 连续静音样本数
    this.lastVoiced = 0 // 最后一个有声样本的绝对位置
    this.firstVoiced = 0 // 第一个有声样本的绝对位置（判「是不是太短」用它，不含前置余量）
  }

  /** 动态阈值：噪声底 × 2.5，夹在 0.005~0.05 之间（约 -46dB ~ -26dB）。 */
  get threshold() {
    const floor = this.noise === null ? 0.005 : this.noise
    return Math.max(0.005, Math.min(0.05, floor * 2.5))
  }

  get seconds() {
    return this.total / this.sampleRate
  }

  push(frame) {
    const out = []
    if (!frame || !frame.length) return out
    const at = this.total
    this.total += frame.length
    const level = rms(frame)
    if (this.noise === null) this.noise = level
    const voiced = level >= this.threshold

    if (!this.inSpeech) {
      if (!voiced) {
        this.noise = this.noise * 0.9 + level * 0.1
        this.preroll.push({ at, data: frame })
        this.trimPreroll()
        return out
      }
      // 开一句：把刚才滚着的余量一起带上，别把第一个字吃掉。
      this.segment = this.preroll.slice()
      this.segmentStart = this.segment.length ? this.segment[0].at : at
      this.preroll = []
      this.segment.push({ at, data: frame })
      this.inSpeech = true
      this.silence = 0
      this.firstVoiced = at
      this.lastVoiced = this.total
      return out
    }

    this.segment.push({ at, data: frame })
    if (voiced) {
      this.silence = 0
      this.lastVoiced = this.total
    } else {
      this.silence += frame.length
    }

    const elapsedMs = ((this.total - this.segmentStart) / this.sampleRate) * 1000
    const silenceMs = (this.silence / this.sampleRate) * 1000
    if (silenceMs >= this.silenceMs) {
      const piece = this.cut('silence')
      if (piece) out.push(piece)
      return out
    }
    if (elapsedMs >= this.maxMs) {
      const piece = this.cut('max')
      if (piece) out.push(piece)
    }
    return out
  }

  /** 停止采集时把剩下的半句交出来。 */
  flush() {
    if (!this.inSpeech) return []
    const piece = this.cut('flush')
    return piece ? [piece] : []
  }

  cut(reason) {
    const start = this.segmentStart / this.sampleRate
    const voiced = (this.lastVoiced - this.segmentStart) / this.sampleRate
    const captured = this.segment.reduce((sum, chunk) => sum + chunk.data.length, 0)
    const samples = new Float32Array(captured)
    let offset = 0
    for (const chunk of this.segment) {
      samples.set(chunk.data, offset)
      offset += chunk.data.length
    }
    const end = Math.max(start + 0.2, start + Math.min(voiced + LIVE_TAIL_SECONDS, captured / this.sampleRate))
    // 判断「太短」只算真正有声的那段：前置余量是静音，算进来会把 100ms 的杂音撑成 400ms。
    const voicedMs = ((this.lastVoiced - this.firstVoiced) / this.sampleRate) * 1000
    this.inSpeech = false
    this.segment = []
    this.silence = 0
    // 一口气的声音不到下限：当噪声丢掉（但也别把整段采集卡死，状态已经复位了）。
    if (reason === 'silence' && voicedMs < this.minMs) return null
    return { samples, start: round3(start), end: round3(end), seconds: round3(end - start), reason }
  }

  trimPreroll() {
    const keep = Math.round((this.prerollMs / 1000) * this.sampleRate)
    let count = 0
    for (let index = this.preroll.length - 1; index >= 0; index -= 1) {
      count += this.preroll[index].data.length
      if (count > keep) {
        this.preroll = this.preroll.slice(index)
        return
      }
    }
  }
}

/**
 * Float32 单声道样本 → 16 位 PCM WAV 字节。
 * DeepSeek 的 /v1/tools/asr 收 WAV/Ogg，这里自己拼头，省一个转码步骤（也就不用装 ffmpeg）。
 */
export function encodeWav(samples, sampleRate = LIVE_SAMPLE_RATE) {
  const data = samples instanceof Float32Array ? samples : Float32Array.from(samples || [])
  const bytes = new ArrayBuffer(44 + data.length * 2)
  const view = new DataView(bytes)
  const ascii = (offset, text) => {
    for (let index = 0; index < text.length; index += 1) view.setUint8(offset + index, text.charCodeAt(index))
  }
  ascii(0, 'RIFF')
  view.setUint32(4, 36 + data.length * 2, true)
  ascii(8, 'WAVE')
  ascii(12, 'fmt ')
  view.setUint32(16, 16, true)
  view.setUint16(20, 1, true) // PCM
  view.setUint16(22, 1, true) // 单声道
  view.setUint32(24, sampleRate, true)
  view.setUint32(28, sampleRate * 2, true)
  view.setUint16(32, 2, true)
  view.setUint16(34, 16, true)
  ascii(36, 'data')
  view.setUint32(40, data.length * 2, true)
  let offset = 44
  for (let index = 0; index < data.length; index += 1) {
    const clamped = Math.max(-1, Math.min(1, data[index]))
    view.setInt16(offset, clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff, true)
    offset += 2
  }
  return new Uint8Array(bytes)
}
