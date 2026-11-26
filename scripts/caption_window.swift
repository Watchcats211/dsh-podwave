// Podwave 的独立字幕窗（macOS）：一块浮在所有应用之上的小窗，只干一件事——
// 从 stdin 读 JSON 行，把「原文 + 译文」画出来。
//
// 为什么不用 Electron 的 BrowserWindow：插件跑在 DSH 的渲染进程里，拿不到主进程的
// 建窗能力；而原生窗口还能做到「不抢焦点、所有 Space 可见、全屏应用上也可见」。
//
// 协议（每行一个 JSON）：
//   {"text": "...", "translation": "...", "previous": "...", "previousTranslation": "...",
//    "status": "listening|idle|error", "fontSize": 18, "hint": "..."}
//   {"action": "close"}
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
}

func positionFile() -> URL {
  let base = FileManager.default.homeDirectoryForCurrentUser.appendingPathComponent(".podwave/live")
  try? FileManager.default.createDirectory(at: base, withIntermediateDirectories: true)
  return base.appendingPathComponent("window-pos.json")
}

final class PanelView: NSView {
  // 只改底板的不透明度：文字走独立的 attributed string，永远是全不透明的白色。
  // 低不透明度适合盖在亮色视频上（能透出画面），文字仍然清晰。
  var panelAlpha: CGFloat = 0.78 {
    didSet { needsDisplay = true }
  }

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
  private let padding: CGFloat = 18
  private var window: NSWindow!
  private var label: NSTextField!
  private var closeButton: NSButton!
  private var fontSize: CGFloat = 18
  private var state = Payload()
  private var saveTimer: Timer?

  func start() {
    let visible = NSScreen.main?.visibleFrame ?? NSRect(x: 0, y: 0, width: 1440, height: 900)
    let saved = loadPosition()
    let origin = saved ?? NSPoint(x: visible.midX - panelWidth / 2, y: visible.minY + 110)

    window = NSWindow(
      contentRect: NSRect(x: origin.x, y: origin.y, width: panelWidth, height: 120),
      styleMask: [.borderless],
      backing: .buffered,
      defer: false
    )
    window.isOpaque = false
    window.backgroundColor = .clear
    window.hasShadow = true
    // .statusBar 一层：普通窗口盖不住它，但也不会盖住系统弹窗和菜单。
    window.level = .statusBar
    window.collectionBehavior = [.canJoinAllSpaces, .stationary, .fullScreenAuxiliary, .ignoresCycle]
    window.isMovableByWindowBackground = true
    window.delegate = self

    let panel = PanelView(frame: NSRect(x: 0, y: 0, width: panelWidth, height: 120))
    panel.autoresizingMask = [.width, .height]
    panel.panelAlpha = panelAlpha
    window.contentView = panel

    label = NSTextField(frame: NSRect(x: padding, y: padding, width: panelWidth - padding * 2, height: 60))
    label.isEditable = false
    label.isBordered = false
    label.drawsBackground = false
    label.isSelectable = false
    label.lineBreakMode = .byWordWrapping
    label.maximumNumberOfLines = 0
    label.cell?.wraps = true
    label.cell?.isScrollable = false
    panel.addSubview(label)

    closeButton = NSButton(frame: NSRect(x: panelWidth - 26, y: 0, width: 18, height: 18))
    closeButton.title = "×"
    closeButton.isBordered = false
    closeButton.font = NSFont.systemFont(ofSize: 14, weight: .medium)
    closeButton.contentTintColor = NSColor(calibratedWhite: 1, alpha: 0.45)
    closeButton.target = self
    closeButton.action = #selector(quit)
    panel.addSubview(closeButton)

    // 先给个占位，避免空白窗闪一下。
    apply(Payload(text: "正在准备字幕…", status: "idle", fontSize: 18))
    window.orderFrontRegardless()
    NSApp.activate(ignoringOtherApps: false)
    FileHandle.standardOutput.write("{\"ready\":true}\n".data(using: .utf8)!)
    if ProcessInfo.processInfo.environment["PODWAVE_CAPTION_DEBUG"] == "1" {
      let info = "{\"debug\":true,\"frame\":\"\(window.frame)\",\"visible\":\(window.isVisible),\"level\":\(window.level.rawValue),\"screen\":\"\(NSScreen.main?.frame ?? .zero)\"}\n"
      FileHandle.standardOutput.write(info.data(using: .utf8)!)
    }

    DispatchQueue.global(qos: .userInitiated).async {
      while let line = readLine(strippingNewline: true) {
        guard let data = line.data(using: .utf8),
              let payload = try? JSONDecoder().decode(Payload.self, from: data) else { continue }
        DispatchQueue.main.async { self.apply(payload) }
      }
      // 宿主关掉了管道：跟着退出，别留一个幽灵窗口。
      DispatchQueue.main.async { NSApp.terminate(nil) }
    }
  }

  @objc private func quit() {
    NSApp.terminate(nil)
  }

  private func apply(_ payload: Payload) {
    if payload.action == "close" {
      NSApp.terminate(nil)
      return
    }
    if let size = payload.fontSize, size > 6, size < 64 { fontSize = CGFloat(size) }
    if let value = payload.opacity, value >= 0.05, value <= 1 { panelAlpha = CGFloat(value) }
    if let value = payload.width, value >= 380, value <= 1600 {
      // 宽度变了要保持水平中心不动，否则拖好的位置会跳。
      let center = window.frame.midX
      panelWidth = CGFloat(value)
      window.setFrame(NSRect(x: center - panelWidth / 2, y: window.frame.minY, width: panelWidth, height: window.frame.height), display: true)
    }
    // 只更新传进来的字段，方便「只改字号」「只改状态」这类局部更新。
    if payload.text != nil || payload.translation != nil || payload.status != nil || payload.hint != nil {
      state.text = payload.text
      state.translation = payload.translation
      state.status = payload.status ?? state.status
      state.hint = payload.hint
    }
    if payload.previous != nil { state.previous = payload.previous }
    if payload.previousTranslation != nil { state.previousTranslation = payload.previousTranslation }
    if payload.fontSize != nil { state.fontSize = payload.fontSize }

    (window.contentView as? PanelView)?.panelAlpha = panelAlpha
    let attributed = buildAttributed()
    label.attributedStringValue = attributed
    closeButton.contentTintColor = NSColor(calibratedWhite: 1, alpha: 0.0)

    // 高度跟着内容走，底边固定（往上长），这样它不会把屏幕底部的 Dock 顶掉。
    let textWidth = panelWidth - padding * 2
    let height = max(64, attributed.boundingRect(
      with: NSSize(width: textWidth, height: .greatestFiniteMagnitude),
      options: [.usesLineFragmentOrigin, .usesFontLeading]
    ).height)
    let bottom = window.frame.minY
    let total = height + padding * 2
    label.frame = NSRect(x: padding, y: padding, width: textWidth, height: height)
    closeButton.frame = NSRect(x: panelWidth - 24, y: total - 22, width: 16, height: 16)
    window.setFrame(NSRect(x: window.frame.minX, y: bottom, width: panelWidth, height: total), display: true, animate: false)
  }

  private func buildAttributed() -> NSAttributedString {
    let result = NSMutableAttributedString()
    // 文字一律全不透明：底板可以调淡，字不能跟着淡。
    let dim = NSColor(calibratedWhite: 0.86, alpha: 0.92)
    let bright = NSColor.white
    let main = NSFont.systemFont(ofSize: fontSize, weight: .medium)
    let small = NSFont.systemFont(ofSize: max(11, fontSize * 0.84), weight: .regular)
    let tiny = NSFont.systemFont(ofSize: max(10, fontSize * 0.72), weight: .regular)

    func append(_ text: String, font: NSFont, color: NSColor, spaceAfter: CGFloat) {
      guard !text.isEmpty else { return }
      let style = NSMutableParagraphStyle()
      style.lineSpacing = max(2, fontSize * 0.18)
      style.paragraphSpacing = spaceAfter
      result.append(NSAttributedString(string: text, attributes: [
        .font: font, .foregroundColor: color, .paragraphStyle: style,
      ]))
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
        append("\n" + previous, font: tiny, color: NSColor(calibratedWhite: 0.9, alpha: 0.62), spaceAfter: 0)
      }
    }
    return result
  }

  // 移动后记一下位置：下次打开还在原处。拖动很频繁，用 400ms 防抖。
  func windowDidMove(_ notification: Notification) {
    saveTimer?.invalidate()
    saveTimer = Timer.scheduledTimer(withTimeInterval: 0.4, repeats: false) { [weak self] _ in
      guard let self else { return }
      let point = self.window.frame.origin
      let payload: [String: Double] = ["x": point.x, "y": point.y]
      if let data = try? JSONSerialization.data(withJSONObject: payload) {
        try? data.write(to: positionFile())
      }
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
  func applicationDidFinishLaunching(_ notification: Notification) {
    NSApp.setActivationPolicy(.accessory)
    controller.start()
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
