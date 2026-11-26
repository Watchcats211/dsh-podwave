// Podwave 系统音频采集 helper（macOS 14.2+）：Core Audio process tap → 分块 WAV。
//
// 为什么不走 ScreenCaptureKit：SCK 要「屏幕录制」权限，用户会看到一个比实际需要更吓人的授权，
// 而且宿主（DSH）没声明相关 usage description。process tap 用的是「录制电脑正在播放的声音」
// 这条权限，只需要本 app bundle 的 Info.plist 里写上 NSAudioCaptureUsageDescription。
//
// 为什么把音频写成一个个小 WAV 文件而不是裸 PCM 管道：
// 实测里管道方式经常只拿到不足一秒的数据，而且 helper 被杀时宿主拿不到任何上下文。
// 目录方式出了问题能把 wav 拖出来听，一眼分清「没声音」和「识别坏了」。
//
// 用法：
//   podwave-audio-tap --output-dir <dir> [--chunk-ms 500] [--sample-rate 16000] [--pid <pid>]
// 输出：<起始毫秒>-system.wav（16 位 PCM 单声道），以及 stdout 一行 {"ready":true,...}
import AVFoundation
import AudioToolbox
import CoreAudio
import Foundation

// MARK: - 参数

struct Options {
  var outputDir: String = ""
  var chunkMs: Int = 500
  var sampleRate: Int = 16000
  var pid: pid_t? = nil
  var debug: Bool = false
}

func parseOptions() -> Options {
  var options = Options()
  let args = CommandLine.arguments.dropFirst()
  var index = args.startIndex
  while index < args.endIndex {
    let key = args[index]
    let next = args.index(after: index)
    switch key {
    case "--output-dir":
      if next < args.endIndex { options.outputDir = args[next]; index = args.index(after: next); continue }
    case "--chunk-ms":
      if next < args.endIndex, let value = Int(args[next]) { options.chunkMs = max(100, min(5000, value)) }
      if next < args.endIndex { index = args.index(after: next); continue }
    case "--sample-rate":
      if next < args.endIndex, let value = Int(args[next]) { options.sampleRate = max(8000, min(48000, value)) }
      if next < args.endIndex { index = args.index(after: next); continue }
    case "--debug":
      options.debug = true
      index = args.index(after: index)
      continue
    case "--pid":
      if next < args.endIndex, let value = pid_t(args[next]) { options.pid = value }
      if next < args.endIndex { index = args.index(after: next); continue }
    default:
      break
    }
    index = args.index(after: index)
  }
  return options
}

func fail(_ code: String, _ message: String) -> Never {
  let payload: [String: Any] = ["error": message, "code": code]
  if let data = try? JSONSerialization.data(withJSONObject: payload),
     let text = String(data: data, encoding: .utf8) {
    FileHandle.standardError.write((text + "\n").data(using: .utf8)!)
  }
  exit(1)
}

func emit(_ payload: [String: Any]) {
  guard let data = try? JSONSerialization.data(withJSONObject: payload),
        let text = String(data: data, encoding: .utf8) else { return }
  FileHandle.standardOutput.write((text + "\n").data(using: .utf8)!)
}

// MARK: - PCM 处理

/// 48k/44.1k 立体声 float32 → 目标采样率的单声道 Int16。
/// 音频只要够 ASR 用就行，所以用「盒式平均 + 线性插值」而不是引入重采样库：
/// 48k→16k 正好 3:1，平均三个样点既是降采样也是抗混叠。
final class Resampler {
  private let sourceRate: Double
  private let targetRate: Double
  private let ratio: Double
  private var carry: [Float] = []
  private var carryPosition: Double = 0

  init(sourceRate: Double, targetRate: Double) {
    self.sourceRate = sourceRate
    self.targetRate = targetRate
    self.ratio = sourceRate / targetRate
  }

  func reset() {
    carry.removeAll(keepingCapacity: true)
    carryPosition = 0
  }

  func process(_ mono: [Float]) -> [Int16] {
    guard !mono.isEmpty, sourceRate > 0, targetRate > 0 else { return [] }
    var buffer = carry
    buffer.append(contentsOf: mono)
    var output: [Int16] = []
    var position = carryPosition
    while true {
      let index = Int(position)
      if index + 1 >= buffer.count { break }
      let fraction = Float(position - Double(index))
      let sample = buffer[index] * (1 - fraction) + buffer[index + 1] * fraction
      output.append(clampToInt16(sample))
      position += ratio
    }
    let consumed = min(Int(position), buffer.count)
    carry = Array(buffer[consumed...])
    carryPosition = position - Double(consumed)
    return output
  }

  private func clampToInt16(_ value: Float) -> Int16 {
    let clamped = max(-1, min(1, value))
    return Int16(clamped < 0 ? clamped * 32768 : clamped * 32767)
  }
}

// MARK: - WAV 写盘

final class WavWriter {
  private let directory: URL
  private let chunkFrames: Int
  private let sampleRate: Int
  private var pending: [Int16] = []
  private var totalFrames = 0
  private var chunkIndex = 0

  init(directory: URL, chunkMs: Int, sampleRate: Int) {
    self.directory = directory
    self.sampleRate = sampleRate
    self.chunkFrames = max(800, sampleRate * chunkMs / 1000)
    try? FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
  }

  func append(_ samples: [Int16]) {
    guard !samples.isEmpty else { return }
    pending.append(contentsOf: samples)
    while pending.count >= chunkFrames {
      let slice = Array(pending[0..<chunkFrames])
      pending.removeFirst(chunkFrames)
      write(slice)
    }
  }

  func flush() {
    guard !pending.isEmpty else { return }
    write(pending)
    pending.removeAll()
  }

  private func write(_ frames: [Int16]) {
    let startMs = Int((Double(totalFrames) / Double(sampleRate)) * 1000)
    totalFrames += frames.count
    chunkIndex += 1
    let name = String(format: "%010d-system.wav", startMs)
    let final = directory.appendingPathComponent(name)
    let temporary = directory.appendingPathComponent(".\(name).tmp")

    var data = Data()
    let byteRate = sampleRate * 2
    let dataBytes = frames.count * 2
    func append32(_ value: UInt32) { var v = value.littleEndian; withUnsafeBytes(of: &v) { data.append(contentsOf: $0) } }
    func append16(_ value: UInt16) { var v = value.littleEndian; withUnsafeBytes(of: &v) { data.append(contentsOf: $0) } }
    data.append("RIFF".data(using: .ascii)!)
    append32(UInt32(36 + dataBytes))
    data.append("WAVE".data(using: .ascii)!)
    data.append("fmt ".data(using: .ascii)!)
    append32(16)
    append16(1) // PCM
    append16(1) // 单声道
    append32(UInt32(sampleRate))
    append32(UInt32(byteRate))
    append16(2)
    append16(16)
    data.append("data".data(using: .ascii)!)
    append32(UInt32(dataBytes))
    frames.withUnsafeBufferPointer { pointer in
      guard let base = pointer.baseAddress else { return }
      data.append(Data(bytes: base, count: dataBytes))
    }
    do {
      try data.write(to: temporary)
      try FileManager.default.moveItem(at: temporary, to: final)
    } catch {
      fail("write-failed", "写不了音频分块：\(error.localizedDescription)")
    }
  }
}

// MARK: - 采集

final class CaptureEngine {
  private let options: Options
  private let writer: WavWriter
  private var tap: AudioObjectID = kAudioObjectUnknown
  private var aggregate: AudioObjectID = kAudioObjectUnknown
  private var ioProc: AudioDeviceIOProcID?
  private var resampler: Resampler?
  private var nonInterleaved = false
  private var channels: UInt32 = 2
  private var silentChunks = 0
  private var running = true

  init(options: Options) {
    self.options = options
    self.writer = WavWriter(
      directory: URL(fileURLWithPath: options.outputDir),
      chunkMs: options.chunkMs,
      sampleRate: options.sampleRate
    )
  }

  func complainIfNeeded() {
    // 全局 tap 在 macOS 上必须显式排除自己，否则会把自己写文件时播放的提示音也录进去。
  }

  func start() {
    guard #available(macOS 14.2, *) else {
      fail("unsupported-os", "系统音频采集需要 macOS 14.2 或更高版本")
    }
    let description: CATapDescription
    if let pid = options.pid {
      let process = translate(pid: pid)
      if process == kAudioObjectUnknown {
        fail("pid-not-found", "找不到进程 \(pid) 的音频对象（应用没在出声或已退出）")
      }
      description = CATapDescription(stereoMixdownOfProcesses: [process])
    } else {
      description = CATapDescription(stereoGlobalTapButExcludeProcesses: [])
    }
    description.isPrivate = true
    description.muteBehavior = CATapMuteBehavior.unmuted  // 用户自己还要听得到声音

    let tapStatus = AudioHardwareCreateProcessTap(description, &tap)
    guard tapStatus == noErr, tap != kAudioObjectUnknown else {
      fail("tap-denied", "系统拒绝了音频捕获（状态码 \(tapStatus)）。请在「系统设置 → 隐私与安全性 → 录屏与系统录音」里允许本 helpr")
    }

    var format = AudioStreamBasicDescription()
    var size = UInt32(MemoryLayout<AudioStreamBasicDescription>.size)
    var address = AudioObjectPropertyAddress(
      mSelector: kAudioTapPropertyFormat,
      mScope: kAudioObjectPropertyScopeGlobal,
      mElement: kAudioObjectPropertyElementMain
    )
    guard AudioObjectGetPropertyData(tap, &address, 0, nil, &size, &format) == noErr, format.mSampleRate > 0 else {
      fail("no-format", "拿不到采集格式")
    }
    channels = max(1, format.mChannelsPerFrame)
    nonInterleaved = (format.mFormatFlags & kAudioFormatFlagIsNonInterleaved) != 0
    resampler = Resampler(sourceRate: format.mSampleRate, targetRate: Double(options.sampleRate))

    guard let uid = tapUID() else { fail("no-uid", "拿不到 tap 的 UID") }
    var spec: [String: Any] = [
      kAudioAggregateDeviceNameKey: "Podwave System Audio",
      kAudioAggregateDeviceUIDKey: UUID().uuidString,
      kAudioAggregateDeviceIsPrivateKey: true,
      kAudioAggregateDeviceTapAutoStartKey: true,
      kAudioAggregateDeviceSubDeviceListKey: [Any](),
      kAudioAggregateDeviceTapListKey: [[
        kAudioSubTapUIDKey: uid,
        kAudioSubTapDriftCompensationKey: true,
      ]],
    ]
    // 关键：聚合设备要指定「主设备」。只用 tap、没有主设备的聚合在部分系统上
    // AudioDeviceStart 会返回成功但设备永远不进入 running（实测：running=0，回调一次都不来）。
    // 主设备用当前默认输出设备，它同时也是时钟源。
    if let outputUID = defaultOutputUID() {
      spec[kAudioAggregateDeviceMainSubDeviceKey] = outputUID
      spec[kAudioAggregateDeviceSubDeviceListKey] = [[kAudioSubDeviceUIDKey: outputUID]]
    }
    guard AudioHardwareCreateAggregateDevice(spec as CFDictionary, &aggregate) == noErr else {
      fail("aggregate-failed", "创建聚合设备失败")
    }

    let context = Unmanaged.passUnretained(self).toOpaque()
    guard AudioDeviceCreateIOProcID(aggregate, captureCallback, context, &ioProc) == noErr, let ioProc else {
      fail("ioproc-failed", "挂采集回调失败")
    }
    let startStatus = AudioDeviceStart(aggregate, ioProc)
    guard startStatus == noErr else {
      fail("start-failed", "启动采集失败（状态码 \(startStatus)）")
    }
    if options.debug {
      FileHandle.standardError.write("{\"debug\":\"start-status\",\"status\":\(startStatus)}\n".data(using: .utf8)!)
    }

    // 关上下发的信号：宿主杀进程时要把设备和 tap 清掉，否则会留下一个静音的 tap。
    for signalNumber in [SIGINT, SIGTERM] {
      signal(signalNumber) { _ in
        DispatchQueue.main.async { exit(0) }
      }
    }

    if options.debug {
      var running: UInt32 = 0
      var runningSize = UInt32(MemoryLayout<UInt32>.size)
      var runningAddress = AudioObjectPropertyAddress(
        mSelector: kAudioDevicePropertyDeviceIsRunning,
        mScope: kAudioObjectPropertyScopeGlobal,
        mElement: kAudioObjectPropertyElementMain
      )
      let runningStatus = AudioObjectGetPropertyData(aggregate, &runningAddress, 0, nil, &runningSize, &running)
      FileHandle.standardError.write("{\"debug\":\"started\",\"aggregate\":\(aggregate),\"runningStatus\":\(runningStatus),\"running\":\(running),\"formatFlags\":\(format.mFormatFlags),\"bytesPerFrame\":\(format.mBytesPerFrame),\"framesPerPacket\":\(format.mFramesPerPacket)}\n".data(using: .utf8)!)
    }

    emit([
      "ready": true,
      "sampleRate": format.mSampleRate,
      "channels": channels,
      "chunkMs": options.chunkMs,
      "targetRate": options.sampleRate,
      "pid": options.pid.map { Int($0) } ?? 0,
    ])
  }

  private func defaultOutputUID() -> String? {
    var device = AudioObjectID(kAudioObjectUnknown)
    var size = UInt32(MemoryLayout<AudioObjectID>.size)
    var address = AudioObjectPropertyAddress(
      mSelector: kAudioHardwarePropertyDefaultOutputDevice,
      mScope: kAudioObjectPropertyScopeGlobal,
      mElement: kAudioObjectPropertyElementMain
    )
    guard AudioObjectGetPropertyData(AudioObjectID(kAudioObjectSystemObject), &address, 0, nil, &size, &device) == noErr,
          device != kAudioObjectUnknown else { return nil }
    var uidSize = UInt32(MemoryLayout<CFString?>.size)
    var uidRef: Unmanaged<CFString>?
    var uidAddress = AudioObjectPropertyAddress(
      mSelector: kAudioDevicePropertyDeviceUID,
      mScope: kAudioObjectPropertyScopeGlobal,
      mElement: kAudioObjectPropertyElementMain
    )
    guard AudioObjectGetPropertyData(device, &uidAddress, 0, nil, &uidSize, &uidRef) == noErr,
          let uid = uidRef?.takeRetainedValue() else { return nil }
    return uid as String
  }

  private func tapUID() -> String? {
    var address = AudioObjectPropertyAddress(
      mSelector: kAudioTapPropertyUID,
      mScope: kAudioObjectPropertyScopeGlobal,
      mElement: kAudioObjectPropertyElementMain
    )
    var size = UInt32(MemoryLayout<CFString?>.size)
    var uidRef: Unmanaged<CFString>?
    guard AudioObjectGetPropertyData(tap, &address, 0, nil, &size, &uidRef) == noErr,
          let uid = uidRef?.takeRetainedValue() else { return nil }
    return uid as String
  }

  private func translate(pid: pid_t) -> AudioObjectID {
    var process = kAudioObjectUnknown
    var size = UInt32(MemoryLayout<AudioObjectID>.size)
    var address = AudioObjectPropertyAddress(
      mSelector: kAudioHardwarePropertyTranslatePIDToProcessObject,
      mScope: kAudioObjectPropertyScopeGlobal,
      mElement: kAudioObjectPropertyElementMain
    )
    var pidValue = pid
    for _ in 0..<20 {
      if AudioObjectGetPropertyData(AudioObjectID(kAudioObjectSystemObject), &address, UInt32(MemoryLayout<pid_t>.size), &pidValue, &size, &process) == noErr,
         process != kAudioObjectUnknown {
        return process
      }
      Thread.sleep(forTimeInterval: 0.05)
    }
    return kAudioObjectUnknown
  }

  /// 采集回调：把 float32 多声道混成单声道，重采样，攒够一个分块就写盘。
  var callbackCount = 0

  func handle(input: UnsafePointer<AudioBufferList>) {
    let audioList = UnsafeMutableAudioBufferListPointer(UnsafeMutablePointer(mutating: input))
    callbackCount += 1
    if options.debug && (callbackCount <= 3 || callbackCount % 20 == 0) {
      let sizes = audioList.map { $0.mDataByteSize }.prefix(4).map(String.init).joined(separator: ",")
      FileHandle.standardError.write("{\"debug\":\"io\",\"n\":\(callbackCount),\"buffers\":\(audioList.count),\"bytes\":[\(sizes)],\"nonInterleaved\":\(nonInterleaved),\"channels\":\(channels)}\n".data(using: .utf8)!)
    }
    guard let firstBuffer = audioList.first, firstBuffer.mDataByteSize > 0 else { return }
    let bytesPerFrame = MemoryLayout<Float>.size * (nonInterleaved || audioList.count > 1 ? 1 : Int(channels))
    let frames = UInt32(Int(firstBuffer.mDataByteSize) / max(1, bytesPerFrame))
    guard frames > 0 else { return }
    let list = UnsafeMutableAudioBufferListPointer(UnsafeMutablePointer(mutating: input))
    guard !list.isEmpty, frames > 0 else { return }
    var mono = [Float](repeating: 0, count: Int(frames))
    var any = false

    if nonInterleaved || list.count > 1 {
      // 非交错：每个 buffer 一个声道。
      var channelCount = 0
      for buffer in list {
        guard let data = buffer.mData else { continue }
        let samples = data.assumingMemoryBound(to: Float.self)
        let count = min(Int(frames), Int(buffer.mDataByteSize) / MemoryLayout<Float>.size)
        for index in 0..<count { mono[index] += samples[index] }
        channelCount += 1
      }
      if channelCount > 1 {
        let divisor = Float(channelCount)
        for index in 0..<mono.count { mono[index] /= divisor }
      }
    } else if let buffer = list.first, let data = buffer.mData {
      // 交错：左右声道交替。
      let samples = data.assumingMemoryBound(to: Float.self)
      let count = min(Int(frames) * Int(channels), Int(buffer.mDataByteSize) / MemoryLayout<Float>.size)
      let framesAvailable = count / Int(channels)
      for frame in 0..<framesAvailable {
        var sum: Float = 0
        for channel in 0..<Int(channels) { sum += samples[frame * Int(channels) + channel] }
        mono[frame] = sum / Float(channels)
      }
    }
    for value in mono where abs(value) > 0.002 { any = true; break }
    if any { silentChunks = 0 } else { silentChunks += 1 }
    if silentChunks == 6 {
      // 连续静音可能是权限被拒（tap 建成功但拿不到数据），宿主会把这条提示给用户。
      FileHandle.standardError.write("{\"warning\":\"silence\",\"code\":\"tap-silent\"}\n".data(using: .utf8)!)
    }
    guard let resampler else { return }
    let converted = resampler.process(mono)
    writer.append(converted)
  }

  func stop() {
    guard running else { return }
    running = false
    if aggregate != kAudioObjectUnknown, let ioProc {
      AudioDeviceStop(aggregate, ioProc)
      AudioDeviceDestroyIOProcID(aggregate, ioProc)
    }
    writer.flush()
    if aggregate != kAudioObjectUnknown { AudioHardwareDestroyAggregateDevice(aggregate) }
    if tap != kAudioObjectUnknown { AudioHardwareDestroyProcessTap(tap) }
  }
}

private func captureCallback(
  _ device: AudioObjectID,
  _ now: UnsafePointer<AudioTimeStamp>,
  _ input: UnsafePointer<AudioBufferList>,
  _ inputTime: UnsafePointer<AudioTimeStamp>,
  _ output: UnsafeMutablePointer<AudioBufferList>,
  _ outputTime: UnsafePointer<AudioTimeStamp>,
  _ context: UnsafeMutableRawPointer?
) -> OSStatus {
  guard let context else { return noErr }
  let engine = Unmanaged<CaptureEngine>.fromOpaque(context).takeUnretainedValue()
  engine.handle(input: input)
  return noErr
}

// MARK: - main

let options = parseOptions()
if options.outputDir.isEmpty { fail("missing-args", "必须给 --output-dir") }
let engine = CaptureEngine(options: options)
engine.start()

// 宿主关掉管道（或进程被要求退出）时干净收尾：销毁 tap 和聚合设备，
// 否则系统里会留下一个静音的采集端点，下次可能采集不到声音。
let exitHandler: () -> Void = {
  engine.stop()
  exit(0)
}
for signalNumber in [SIGINT, SIGTERM, SIGHUP] {
  signal(signalNumber) { _ in exit(0) }
}
DispatchQueue.global(qos: .utility).async {
  while readLine() != nil {}
  DispatchQueue.main.async { exitHandler() }
}

// 注意：这里不能用 RunLoop.main.run()。
// 实测在命令行工具里跑 RunLoop.main.run() 时，聚合设备的 IOProc 一次都不会被调用
//（设备却在 running 状态），换成纯 sleep 循环就正常了。别改回去。
while true {
  Thread.sleep(forTimeInterval: 1)
  if options.debug {
    FileHandle.standardError.write("{\"debug\":\"beat\",\"io\":\(engine.callbackCount)}\n".data(using: .utf8)!)
  }
}
