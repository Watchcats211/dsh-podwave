// 采集「系统正在播放的声音」（或麦克风），切成一句一句往前端送。
//
// 采集靠虚拟声卡：macOS 用 BlackHole，Windows 用 VB-Cable / 立体声混音。
// 这些设备在浏览器里就是一个普通的音频输入设备，所以不需要任何原生插件 ——
// 用户在系统里建一个「多输出设备」把声音同时送到扬声器和虚拟声卡即可。
//
// 切句在 src/live-audio-core.js 里做（纯逻辑，能单测）；这里只负责把浏览器
// 的音频帧喂进去，并把切好的句子编码成 WAV 交出去。
import {
  LIVE_SAMPLE_RATE,
  LiveSegmenter,
  encodeWav,
  pickCaptureDevice,
  rms,
} from '../../../src/live-audio-core.js'

// AudioWorklet 必须是一个独立的模块文件；插件没法往宿主里塞静态资源，
// 所以用 Blob URL 现造一个。只在采集期间存在，停掉就回收。
const WORKLET_SOURCE = `
class PodwaveTap extends AudioWorkletProcessor {
  process(inputs) {
    const input = inputs[0]
    const channel = input && input[0]
    if (channel && channel.length) this.port.postMessage(channel.slice(0))
    return true
  }
}
registerProcessor('podwave-tap', PodwaveTap)
`

/** 列出所有音频输入设备（没授权时 label 是空的，只有 deviceId）。 */
export async function listInputDevices() {
  const devices = await navigator.mediaDevices.enumerateDevices()
  return devices.filter((device) => device.kind === 'audioinput')
}

export { pickCaptureDevice }

/**
 * 开始采集。
 * @returns {Promise<{label:string, sampleRate:number, stop:()=>Promise<void>}>}
 */
export async function startLiveCapture({
  deviceId = '',
  onSegment,
  onLevel,
  segmenterOptions = {},
} = {}) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Error('这个环境拿不到音频输入接口')

  let stream
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        ...(deviceId ? { deviceId: { exact: deviceId } } : {}),
        channelCount: 1,
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false,
      },
      video: false,
    })
  } catch (error) {
    // 设备被拔掉/换过名字时 exact 会报 OverconstrainedError，退回系统默认设备再试一次。
    if (error?.name === 'OverconstrainedError' && deviceId) {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    } else {
      throw new Error(explainCaptureError(error))
    }
  }

  let context
  try {
    context = new AudioContext({ sampleRate: LIVE_SAMPLE_RATE })
  } catch {
    context = new AudioContext()
  }
  // 有的环境按 48k 开（不认 16k 请求）：那就按实际采样率切句和编码，
  // ASR 接口自己会重采样，不需要我们再写一份重采样器。
  const sampleRate = context.sampleRate || LIVE_SAMPLE_RATE
  const segmenter = new LiveSegmenter({ ...segmenterOptions, sampleRate })

  const emit = (piece) => {
    onSegment?.({
      wav: encodeWav(piece.samples, sampleRate),
      start: piece.start,
      end: piece.end,
      seconds: piece.seconds,
      reason: piece.reason,
    })
  }

  const handleFrame = (frame) => {
    if (!frame) return
    onLevel?.(rms(frame))
    for (const piece of segmenter.push(frame)) emit(piece)
  }

  const source = context.createMediaStreamSource(stream)
  let node
  try {
    const url = URL.createObjectURL(new Blob([WORKLET_SOURCE], { type: 'application/javascript' }))
    await context.audioWorklet.addModule(url)
    URL.revokeObjectURL(url)
    node = new AudioWorkletNode(context, 'podwave-tap', {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCount: 1,
      channelCountMode: 'explicit',
    })
    node.port.onmessage = (event) => handleFrame(event.data)
  } catch {
    // 没有 AudioWorklet 的环境退回 ScriptProcessorNode（已废弃但能用，2048 帧约 128ms）。
    node = context.createScriptProcessor(2048, 1, 1)
    node.onaudioprocess = (event) => handleFrame(new Float32Array(event.inputBuffer.getChannelData(0)))
  }

  // 必须接到 destination 才会被调度：用一个 0 音量的 gain 收尾，不会真的出声。
  const sink = context.createGain()
  sink.gain.value = 0
  source.connect(node)
  node.connect(sink)
  sink.connect(context.destination)
  await context.resume().catch(() => {})

  return {
    label: stream.getAudioTracks()[0]?.label || '',
    sampleRate,
    async stop() {
      // 先把最后半句交出去，否则用户点停止时正在说的那句就丢了。
      try {
        for (const piece of segmenter.flush()) emit(piece)
      } catch {
        /* ignore */
      }
      try {
        if (node.port) node.port.onmessage = null
        node.onaudioprocess = null
      } catch {
        /* ignore */
      }
      for (const target of [source, node, sink]) {
        try {
          target.disconnect()
        } catch {
          /* ignore */
        }
      }
      for (const track of stream.getTracks()) track.stop()
      await context.close().catch(() => {})
    },
  }
}

function explainCaptureError(error) {
  const name = String(error?.name || '')
  if (name === 'NotAllowedError' || name === 'SecurityError') {
    return '没有音频权限。在系统里允许 DSH 使用麦克风/音频输入之后再试'
  }
  if (name === 'NotFoundError' || name === 'DevicesNotFoundError') {
    return '找不到这个音频设备。先装虚拟声卡（macOS 用 BlackHole），再回来选它'
  }
  if (name === 'NotReadableError') {
    return '这个设备被别的程序占用了，换一个输入设备试试'
  }
  return error?.message || '打不开音频设备'
}
