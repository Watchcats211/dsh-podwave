// Podwave 的独立字幕窗（macOS）：一块浮在所有应用之上的小窗，同时也是这次监听的全部 UI。
//
// 交互（这就是产品决定）：
//   - 点「实时字幕」只出现这一个框，页面上不再有第二块字幕；
//   - 平时它只有字幕，**鼠标移上去**右上角才浮出「设置」和「停止」两个小按钮；
//   - 点设置在同一块框里展开三根滑块（不透明度 / 字号 / 宽度）和「停止时保存」开关，再点收起；
//   - 不透明度只作用于底板，文字永远纯白不透明。
//
// 协议（每行一个 JSON）：
//   stdin  ← {"text","translation","previous","previousTranslation","status","hint",
//             "fontSize","opacity","width","saveOnStop"}
//   stdout → {"event":"style","opacity":0.6} / {"event":"stop"} / {"event":"saveOnStop","value":true}
//            / {"ready":true}
// stdin 关闭（宿主退出）时窗口自己关掉，不留孤儿进程。
import AppKit
import Foundation

struct Payload: Decodable {
  var action: String?
  var text: String?
  var translation: String?
  var previous: String?
  var previousTranslation: String?
  var status: String?
  var hint: String?
  var fontSize: Double?
  var opacity: Double?
  var width: Double?
  var saveOnStop: Bool?
}

func send(_ payload: [String: Any]) {
  guard let data = try? JSONSerialization.data(withJSONObject: payload),
        let text = String(data: data, encoding: .utf8) else { return }
  FileHandle.standardOutput.write((text + "\n").data(using: .utf8)!)
}

/// 宿主用它来清掉上一次残留的窗口进程（插件重载后旧进程可能还挂在屏幕上）。
func pidFile() -> URL {
  let base = FileManager.default.homeDirectoryForCurrentUser.appendingPathComponent(".podwave/live")
  try? FileManager.default.createDirectory(at: base, withIntermediateDirectories: true)
  return base.appendingPathComponent("window.pid")
}

func positionFile() -> URL {
  let base = FileManager.default.homeDirectoryForCurrentUser.appendingPathComponent(".podwave/live")
  try? FileManager.default.createDirectory(at: base, withIntermediateDirectories: true)
  return base.appendingPathComponent("window-pos.json")
}

final class PanelView: NSView {
  // 只改底板的不透明度：文字走独立的 attributed string，永远是全不透明的白色。
  var panelAlpha: CGFloat = 0.78 { didSet { needsDisplay = true } }
  // 悬停回调：平时不显示按钮，鼠标移进来才浮出「设置 / 停止」。
  var onHover: ((Bool) -> Void)?

  override func updateTrackingAreas() {
    super.updateTrackingAreas()
    for area in trackingAreas { removeTrackingArea(area) }
    addTrackingArea(NSTrackingArea(rect: .zero, options: [.mouseEnteredAndExited, .activeAlways, .inVisibleRect], owner: self, userInfo: nil))
  }

  override func mouseEntered(with event: NSEvent) { onHover?(true) }
  override func mouseExited(with event: NSEvent) { onHover?(false) }

  override func draw(_ dirtyRect: NSRect) {
    let path = NSBezierPath(roundedRect: bounds.insetBy(dx: 0.5, dy: 0.5), xRadius: 14, yRadius: 14)
    NSColor(calibratedWhite: 0.03, alpha: panelAlpha).setFill()
    path.fill()
    NSColor(calibratedWhite: 1, alpha: min(0.18, 0.06 + panelAlpha * 0.12)).setStroke()
    path.lineWidth = 1
    path.stroke()
  }
}

final class Controller: NSObject, NSWindowDelegate {
  private var panelWidth: CGFloat = 780
  private var panelAlpha: CGFloat = 0.78
  private var fontSize: CGFloat = 20
  private var hovering = false

  private var window: NSWindow!
  private var panel: PanelView!
  private var label: NSTextField!
  private var controls: NSView!
  private var stopButton: NSButton!
  private var state = Payload()
  private var saveTimer: Timer?

  func start() {
    let visible = NSScreen.main?.visibleFrame ?? NSRect(x: 0, y: 0, width: 1440, height: 900)
    let saved = loadPosition()
    let origin = saved ?? NSPoint(x: visible.midX - panelWidth / 2, y: visible.minY + 120)

    window = NSWindow(
      contentRect: NSRect(x: origin.x, y: origin.y, width: panelWidth, height: 120),
      styleMask: [.borderless],
      backing: .buffered,
      defer: false
    )
    window.isOpaque = false
    window.backgroundColor = .clear
    window.hasShadow = true
    window.level = .statusBar
    window.collectionBehavior = [.canJoinAllSpaces, .stationary, .fullScreenAuxiliary, .ignoresCycle]
    window.isMovableByWindowBackground = true
    window.delegate = self

    panel = PanelView(frame: NSRect(x: 0, y: 0, width: panelWidth, height: 120))
    panel.autoresizingMask = [.width, .height]
    panel.panelAlpha = panelAlpha
    window.contentView = panel

    label = NSTextField(frame: .zero)
    label.isEditable = false
    label.isBordered = false
    label.drawsBackground = false
    label.isSelectable = false
    label.lineBreakMode = .byWordWrapping
    label.maximumNumberOfLines = 0
    label.cell?.wraps = true
    label.cell?.isScrollable = false
    panel.addSubview(label)

    controls = NSView(frame: .zero)
    panel.addSubview(controls)
    stopButton = makeIconButton("xmark", action: #selector(requestStop))
    controls.addSubview(stopButton)
    controls.alphaValue = 0 // 平时隐藏，鼠标移上来才出现

    apply(Payload(text: "", status: "idle", hint: "正在准备字幕…"))
    try? String(ProcessInfo.processInfo.processIdentifier).write(to: pidFile(), atomically: true, encoding: .utf8)
    window.orderFrontRegardless()
    FileHandle.standardOutput.write("{\"ready\":true}\n".data(using: .utf8)!)

    // 鼠标进出由 PanelView 的 tracking area 回调，拼到这里。
    panel.onHover = { [weak self] inside in
      guard let self else { return }
      self.hovering = inside
      self.updateControlsVisibility(animated: true)
    }

    DispatchQueue.global(qos: .userInitiated).async {
      while let line = readLine(strippingNewline: true) {
        guard let data = line.data(using: .utf8),
              let payload = try? JSONDecoder().decode(Payload.self, from: data) else { continue }
        DispatchQueue.main.async { self.apply(payload) }
      }
      DispatchQueue.main.async { NSApp.terminate(nil) }
    }
  }

  /// 用系统符号画按钮：比字符「⚙」在各种字号下都稳，也不会被字体带偏。
  private func makeIconButton(_ symbol: String, action: Selector) -> NSButton {
    let image = NSImage(systemSymbolName: symbol, accessibilityDescription: nil)
    let button = NSButton(image: image ?? NSImage(), target: self, action: action)
    button.frame = NSRect(x: 0, y: 0, width: 20, height: 20)
    button.isBordered = false
    button.bezelStyle = .inline
    button.contentTintColor = NSColor(calibratedWhite: 1, alpha: 0.55)
    button.image?.isTemplate = true
    return button
  }

  /// 只给截图用：把悬停态强制显示出来。
  @objc private func showControlsForDemo() {
    hovering = true
    updateControlsVisibility(animated: false)
  }

  @objc private func requestStop() {
    send(["event": "stop"])
  }

  // MARK: - 鼠标悬停

  private func updateControlsVisibility(animated: Bool) {
    let show = hovering
    let target: CGFloat = show ? 1 : 0
    guard animated else {
      controls.alphaValue = target
      return
    }
    NSAnimationContext.runAnimationGroup { context in
      context.duration = 0.14
      controls.animator().alphaValue = target
    }
  }

  // MARK: - 数据更新

  private func apply(_ payload: Payload) {
    if payload.action == "close" { NSApp.terminate(nil); return }
    if let value = payload.opacity, value >= 0.05, value <= 1 {
      panelAlpha = CGFloat(value)
      panel.panelAlpha = panelAlpha
    }
    if let value = payload.width, value >= 380, value <= 1600 {
      let center = window.frame.midX
      panelWidth = CGFloat(value)
      window.setFrame(NSRect(x: center - panelWidth / 2, y: window.frame.minY, width: panelWidth, height: window.frame.height), display: true)
    }
    if let value = payload.fontSize, value > 6, value < 64 {
      fontSize = CGFloat(value)
    }
    if payload.text != nil || payload.translation != nil || payload.status != nil || payload.hint != nil {
      state.text = payload.text
      state.translation = payload.translation
      state.status = payload.status ?? state.status
      state.hint = payload.hint
    }
    if payload.previous != nil { state.previous = payload.previous }
    if payload.previousTranslation != nil { state.previousTranslation = payload.previousTranslation }

    relayoutText()
  }

  private func relayoutText() {
    let textWidth = panelWidth - 36
    let attributed = buildAttributed()
    label.attributedStringValue = attributed
    let height = max(56, attributed.boundingRect(
      with: NSSize(width: textWidth, height: .greatestFiniteMagnitude),
      options: [.usesLineFragmentOrigin, .usesFontLeading]
    ).height)
    label.frame = NSRect(x: 18, y: 18, width: textWidth, height: height)
    layoutWindow()
  }

  /// 窗口高度 = 文字 + 内边距。上边缘固定，需要时整体上移避免出屏。
  private func layoutWindow() {
    let textWidth = panelWidth - 36
    let textHeight = max(56, label.attributedStringValue.boundingRect(
      with: NSSize(width: textWidth, height: .greatestFiniteMagnitude),
      options: [.usesLineFragmentOrigin, .usesFontLeading]
    ).height)
    let total = textHeight + 36
    let screen = NSScreen.main?.visibleFrame ?? NSRect(x: 0, y: 0, width: 1440, height: 900)
    let top = window.frame.maxY
    var y = top - total
    if y < screen.minY + 8 { y = screen.minY + 8 }
    let frame = NSRect(x: window.frame.minX, y: y, width: panelWidth, height: total)
    window.setFrame(frame, display: true, animate: false)

    label.frame = NSRect(x: 18, y: 18, width: textWidth, height: textHeight)
    // 悬停按钮：右上角，只有一个 ✕
    controls.frame = NSRect(x: panelWidth - 32, y: total - 28, width: 20, height: 20)
    stopButton.frame = NSRect(x: 0, y: 0, width: 20, height: 20)
  }

  private func buildAttributed() -> NSAttributedString {
    let result = NSMutableAttributedString()
    let dim = NSColor(calibratedWhite: 0.86, alpha: 0.92)
    let bright = NSColor.white
    let main = NSFont.systemFont(ofSize: fontSize, weight: .medium)
    let small = NSFont.systemFont(ofSize: max(11, fontSize * 0.8), weight: .regular)
    let tiny = NSFont.systemFont(ofSize: max(10, fontSize * 0.68), weight: .regular)

    func append(_ text: String, font: NSFont, color: NSColor, spaceAfter: CGFloat) {
      guard !text.isEmpty else { return }
      let style = NSMutableParagraphStyle()
      style.lineSpacing = max(2, fontSize * 0.16)
      style.paragraphSpacing = spaceAfter
      result.append(NSAttributedString(string: text, attributes: [.font: font, .foregroundColor: color, .paragraphStyle: style]))
    }

    let text = (state.text ?? "").trimmingCharacters(in: .whitespacesAndNewlines)
    let translation = (state.translation ?? "").trimmingCharacters(in: .whitespacesAndNewlines)
    let previous = (state.previous ?? "").trimmingCharacters(in: .whitespacesAndNewlines)
    let hint = (state.hint ?? "").trimmingCharacters(in: .whitespacesAndNewlines)

    if text.isEmpty {
      append(hint.isEmpty ? "等着听…" : hint, font: small, color: dim, spaceAfter: 0)
    } else {
      append(text, font: main, color: bright, spaceAfter: 0)
      if !translation.isEmpty { append("\n" + translation, font: small, color: dim, spaceAfter: 0) }
      if !previous.isEmpty {
        append("\n" + previous, font: tiny, color: NSColor(calibratedWhite: 0.9, alpha: 0.5), spaceAfter: 0)
      }
    }
    return result
  }

  func windowDidMove(_ notification: Notification) {
    saveTimer?.invalidate()
    saveTimer = Timer.scheduledTimer(withTimeInterval: 0.4, repeats: false) { [weak self] _ in
      guard let self else { return }
      let payload: [String: Double] = ["x": self.window.frame.origin.x, "y": self.window.frame.origin.y]
      if let data = try? JSONSerialization.data(withJSONObject: payload) { try? data.write(to: positionFile()) }
    }
  }

  private func loadPosition() -> NSPoint? {
    guard let data = try? Data(contentsOf: positionFile()),
          let object = try? JSONSerialization.jsonObject(with: data) as? [String: Double],
          let x = object["x"], let y = object["y"] else { return nil }
    return NSPoint(x: x, y: y)
  }
}

final class AppDelegate: NSObject, NSApplicationDelegate {
  let controller = Controller()

  func applicationWillTerminate(_ notification: Notification) {
    try? FileManager.default.removeItem(at: pidFile())
  }
  func applicationDidFinishLaunching(_ notification: Notification) {
    NSApp.setActivationPolicy(.accessory)
    controller.start()
    // 截图/演示用：强制把悬停按钮显示出来。
    if ProcessInfo.processInfo.environment["PODWAVE_CAPTION_DEMO"] == "1" {
      DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
        self.controller.perform(Selector(("showControlsForDemo")))
      }
    }
  }
}

@main
struct CaptionWindow {
  static func main() {
    let app = NSApplication.shared
    let delegate = AppDelegate()
    app.delegate = delegate
    app.run()
  }
}
