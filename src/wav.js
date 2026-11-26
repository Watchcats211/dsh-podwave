// 最小 WAV 解码：只认 16 位 PCM（helper 写出来的就是这种）。
// 放单独文件是为了两边都能用：宿主读 helper 的分块，单测也直接 import。
export function decodeWav(buffer) {
  const bytes = Buffer.isBuffer(buffer) ? buffer : Buffer.from(buffer)
  if (bytes.length < 44 || bytes.toString('ascii', 0, 4) !== 'RIFF' || bytes.toString('ascii', 8, 12) !== 'WAVE') {
    throw new Error('不是 WAV 文件')
  }
  let offset = 12
  let format = null
  while (offset + 8 <= bytes.length) {
    const id = bytes.toString('ascii', offset, offset + 4)
    const size = bytes.readUInt32LE(offset + 4)
    const body = offset + 8
    if (id === 'fmt ') {
      format = {
        channels: bytes.readUInt16LE(body + 2),
        sampleRate: bytes.readUInt32LE(body + 4),
        bitsPerSample: bytes.readUInt16LE(body + 14),
        audioFormat: bytes.readUInt16LE(body),
      }
    } else if (id === 'data') {
      if (!format) throw new Error('WAV 缺少 fmt 段')
      if (format.audioFormat !== 1 || format.bitsPerSample !== 16) {
        throw new Error(`只支持 16 位 PCM，收到 format=${format.audioFormat} bits=${format.bitsPerSample}`)
      }
      const channels = Math.max(1, format.channels)
      const usable = Math.min(size, bytes.length - body)
      const frames = Math.floor(usable / 2 / channels)
      const samples = new Float32Array(frames)
      for (let index = 0; index < frames; index += 1) {
        let sum = 0
        for (let channel = 0; channel < channels; channel += 1) {
          sum += bytes.readInt16LE(body + (index * channels + channel) * 2) / 32768
        }
        samples[index] = sum / channels
      }
      return { sampleRate: format.sampleRate, channels, samples }
    }
    offset = body + size + (size % 2)
  }
  throw new Error('WAV 里没有 data 段')
}

/** RMS，用来判断这一块到底有没有声音（全零说明 tap 没拿到数据）。 */
export function rmsOf(samples) {
  if (!samples || !samples.length) return 0
  let sum = 0
  for (let index = 0; index < samples.length; index += 1) sum += samples[index] * samples[index]
  return Math.sqrt(sum / samples.length)
}
