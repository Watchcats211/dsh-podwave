// Podwave 的独立字幕窗（macOS）：一块浮在所有应用之上的小窗，同时也是这次监听的全部 UI。
//
// 交互：
//   - 点「实时字幕」只出现这一个框，页面上不再有第二块字幕；
//   - 直接拖动窗口任意边缘或右下角把手即可改变宽/高度，拖动中间区域可移动位置（双击右下角恢复自适应高度）；
//   - 平时只有字幕，鼠标移上去右上角浮出「⚙ 设置」和「✕ 停止」，右下角浮出微弱缩放把手；
//   - 点 ⚙ 展开紧凑两行设置栏：第一行切换「原文 / 双语 / 译文」与「停止时保存」，第二行调底板不透明度 / 字号 / 宽度；
//   - 不透明度只作用于底板，文字永远纯白不透明。
//
// 协议（每行一个 JSON）：
//   stdin  ← {"text","translation","draft","previous","previousTranslation","status","hint",
//             "fontSize","opacity","width","height","displayMode","saveOnStop"}
//   stdout → {"event":"style","opacity":0.6,"fontSize":20,"width":780,"height":180}
//            / {"event":"displayMode","value":"bilingual"}
//            / {"event":"saveOnStop","value":true}
//            / {"event":"stop"} / {"ready":true}
import AppKit
import Foundation

struct Payload: Decodable {
  var action: String?
  var text: String?
  var translation: String?
  var draft: String?
  var previous: String?
  var previousTranslation: String?
  var status: String?
  var hint: String?
  var fontSize: Double?
  var opacity: Double?
  var width: Double?
  var height: Double?
  var displayMode: String?
  var saveOnStop: Bool?
}

func send(_ payload: [String: Any]) {
  guard let data = try? JSONSerialization.data(withJSONObject: payload),
        let text = String(data: data, encoding: .utf8) else { return }
  FileHandle.standardOutput.write((text + "\n").data(using: .utf8)!)
}

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

enum DragMode {
  case none
  case move
  case resize(left: Bool, right: Bool, top: Bool, bottom: Bool)
}

final class CaptionPanel: NSPanel {
  override var canBecomeKey: Bool { true }
  override var canBecomeMain: Bool { false }
}

final class FirstMouseButton: NSButton {
  override func acceptsFirstMouse(for event: NSEvent?) -> Bool { true }
}

final class FirstMouseSegmentedControl: NSSegmentedControl {
  override func acceptsFirstMouse(for event: NSEvent?) -> Bool { true }
}

final class FirstMouseSlider: NSSlider {
  override func acceptsFirstMouse(for event: NSEvent?) -> Bool { true }
}

final class PassThroughLabel: NSTextField {
  override func hitTest(_ point: NSPoint) -> NSView? { nil }
}

final class PanelView: NSView {
  var panelAlpha: CGFloat = 0.78 { didSet { needsDisplay = true } }
  var showGrip: Bool = false { didSet { needsDisplay = true } }
  var controlsRect: NSRect = .zero
  var onHover: ((Bool) -> Void)?
  var onResize: ((NSRect, Bool) -> Void)?
  var onResetHeight: (() -> Void)?

  private var dragMode: DragMode = .none
  private var dragStartMouse: NSPoint = .zero
  private var dragStartFrame: NSRect = .zero
  private let edgeMargin: CGFloat = 9
  private let cornerMargin: CGFloat = 18

  override func acceptsFirstMouse(for event: NSEvent?) -> Bool { true }

  override func updateTrackingAreas() {
    super.updateTrackingAreas()
    for area in trackingAreas { removeTrackingArea(area) }
    addTrackingArea(NSTrackingArea(
      rect: .zero,
      options: [.mouseEnteredAndExited, .mouseMoved, .activeAlways, .inVisibleRect],
      owner: self,
      userInfo: nil
    ))
  }

  override func mouseEntered(with event: NSEvent) {
    onHover?(true)
    updateCursor(for: convert(event.locationInWindow, from: nil))
  }

  override func mouseExited(with event: NSEvent) {
    onHover?(false)
    NSCursor.arrow.set()
  }

  override func mouseMoved(with event: NSEvent) {
    updateCursor(for: convert(event.locationInWindow, from: nil))
  }

  private func hitTestMode(_ point: NSPoint) -> DragMode {
    if !controlsRect.isEmpty && controlsRect.insetBy(dx: -6, dy: -6).contains(point) {
      return .none
    }
    let w = bounds.width
    let h = bounds.height
    // 右下角扩大命中区域，方便直接抓角落拖拽改大小
    if point.x >= w - cornerMargin && point.y <= cornerMargin {
      return .resize(left: false, right: true, top: false, bottom: true)
    }
    if point.x <= cornerMargin && point.y <= cornerMargin {
      return .resize(left: true, right: false, top: false, bottom: true)
    }
    if point.x <= cornerMargin && point.y >= h - cornerMargin {
      return .resize(left: true, right: false, top: true, bottom: false)
    }
    let left = point.x <= edgeMargin
    let right = point.x >= w - edgeMargin
    let bottom = point.y <= edgeMargin
    let top = point.y >= h - edgeMargin
    if left || right || top || bottom {
      return .resize(left: left, right: right, top: top, bottom: bottom)
    }
    return .move
  }

  private func updateCursor(for point: NSPoint) {
    switch hitTestMode(point) {
    case .resize(let left, let right, let top, let bottom):
      if (left || right) && (top || bottom) {
        NSCursor.crosshair.set()
      } else if left || right {
        NSCursor.resizeLeftRight.set()
      } else {
        NSCursor.resizeUpDown.set()
      }
    default:
      NSCursor.arrow.set()
    }
  }

  override func mouseDown(with event: NSEvent) {
    guard let window else { return }
    let local = convert(event.locationInWindow, from: nil)
    // 双击右下角缩放把手：恢复自适应高度
    if event.clickCount == 2 && local.x >= bounds.width - cornerMargin && local.y <= cornerMargin {
      onResetHeight?()
      return
    }
    dragMode = hitTestMode(local)
    if case .none = dragMode { return }
    dragStartMouse = NSEvent.mouseLocation
    dragStartFrame = window.frame
  }

  override func mouseDragged(with event: NSEvent) {
    guard let window else { return }
    let current = NSEvent.mouseLocation
    let dx = current.x - dragStartMouse.x
    let dy = current.y - dragStartMouse.y

    switch dragMode {
    case .none:
      return
    case .move:
      let nextOrigin = NSPoint(x: dragStartFrame.origin.x + dx, y: dragStartFrame.origin.y + dy)
      window.setFrameOrigin(nextOrigin)
    case .resize(let left, let right, let top, let bottom):
      let minW: CGFloat = 380
      let maxW: CGFloat = 1600
      let minH: CGFloat = 88
      let maxH: CGFloat = 600
      var frame = dragStartFrame

      if right {
        frame.size.width = max(minW, min(maxW, dragStartFrame.width + dx))
      } else if left {
        let nextW = max(minW, min(maxW, dragStartFrame.width - dx))
        frame.origin.x = dragStartFrame.maxX - nextW
        frame.size.width = nextW
      }

      if top {
        frame.size.height = max(minH, min(maxH, dragStartFrame.height + dy))
      } else if bottom {
        let nextH = max(minH, min(maxH, dragStartFrame.height - dy))
        frame.origin.y = dragStartFrame.maxY - nextH
        frame.size.height = nextH
      }
      onResize?(frame, top || bottom)
    }
  }

  override func mouseUp(with event: NSEvent) {
    guard let window else { return }
    switch dragMode {
    case .resize(_, _, let top, let bottom):
      onResize?(window.frame, top || bottom)
    default:
      break
    }
    dragMode = .none
    updateCursor(for: convert(event.locationInWindow, from: nil))
  }

  override func draw(_ dirtyRect: NSRect) {
    let path = NSBezierPath(roundedRect: bounds.insetBy(dx: 0.5, dy: 0.5), xRadius: 14, yRadius: 14)
    NSColor(calibratedWhite: 0.03, alpha: panelAlpha).setFill()
    path.fill()
    NSColor(calibratedWhite: 1, alpha: min(0.22, 0.07 + panelAlpha * 0.12)).setStroke()
    path.lineWidth = 1
    path.stroke()

    // 悬停或展开设置栏时，在右下角画出 3 条微弱斜线提示「此处可拖动缩放」
    if showGrip {
      let grip = NSBezierPath()
      grip.lineWidth = 1.2
      NSColor(calibratedWhite: 1, alpha: 0.36).setStroke()
      let w = bounds.width
      for offset in [CGFloat(5), CGFloat(9), CGFloat(13)] {
        grip.move(to: NSPoint(x: w - offset - 3, y: 4))
        grip.line(to: NSPoint(x: w - 4, y: offset + 3))
      }
      grip.stroke()
    }
  }
}

final class Controller: NSObject, NSWindowDelegate {
  private var panelWidth: CGFloat = 780
  private var manualHeight: CGFloat? = nil
  private var panelAlpha: CGFloat = 0.78
  private var fontSize: CGFloat = 18
  private var saveOnStop: Bool = true
  private var displayMode: String = "bilingual" // original | bilingual | translation
  private var hovering = false
  private var drawerOpen = false
  private let drawerHeight: CGFloat = 86

  private var window: NSPanel!
  private var panel: PanelView!
  private var label: PassThroughLabel!
  private var controls: NSView!
  private var settingsButton: NSButton!
  private var stopButton: NSButton!
  private var drawer: NSView!
  private var divider: NSView!
  private var modeControl: NSSegmentedControl!
  private var opacitySlider: NSSlider!
  private var opacityVal: NSTextField!
  private var sizeSlider: NSSlider!
  private var sizeVal: NSTextField!
  private var widthSlider: NSSlider!
  private var widthVal: NSTextField!
  private var saveCheckbox: NSButton!
  private var state = Payload()
  private var saveTimer: Timer?
  private var styleEmitTimer: Timer?
  private var termSource: DispatchSourceSignal?

  func start() {
    let visible = NSScreen.main?.visibleFrame ?? NSRect(x: 0, y: 0, width: 1440, height: 900)
    let saved = loadPosition()
    let origin = clampOrigin(saved ?? NSPoint(x: visible.midX - panelWidth / 2, y: visible.minY + 120), width: panelWidth, height: 120)

    let captionPanel = CaptionPanel(
      contentRect: NSRect(x: origin.x, y: origin.y, width: panelWidth, height: 120),
      styleMask: [.borderless, .nonactivatingPanel],
      backing: .buffered,
      defer: false
    )
    captionPanel.isFloatingPanel = true
    captionPanel.becomesKeyOnlyIfNeeded = true
    captionPanel.hidesOnDeactivate = false
    window = captionPanel
    window.isOpaque = false
    window.backgroundColor = .clear
    window.hasShadow = true
    window.level = .statusBar
    window.collectionBehavior = [.canJoinAllSpaces, .stationary, .fullScreenAuxiliary, .ignoresCycle]
    window.isMovableByWindowBackground = false
    window.delegate = self

    panel = PanelView(frame: NSRect(x: 0, y: 0, width: panelWidth, height: 120))
    panel.autoresizingMask = [.width, .height]
    panel.panelAlpha = panelAlpha
    window.contentView = panel

    label = PassThroughLabel(frame: .zero)
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
    settingsButton = makeIconButton("gearshape.fill", tooltip: "字幕显示与外观设置", action: #selector(toggleDrawer))
    stopButton = makeIconButton("xmark", tooltip: "停止实时字幕", action: #selector(requestStop))
    controls.addSubview(settingsButton)
    controls.addSubview(stopButton)
    controls.alphaValue = 0.55

    buildDrawer()

    apply(Payload(text: "", status: "idle", hint: "准备好了，播放声音就会出字幕"))
    try? String(ProcessInfo.processInfo.processIdentifier).write(to: pidFile(), atomically: true, encoding: .utf8)
    window.orderFrontRegardless()
    FileHandle.standardOutput.write("{\"ready\":true}\n".data(using: .utf8)!)

    panel.onHover = { [weak self] inside in
      guard let self else { return }
      self.hovering = inside
      self.updateControlsVisibility(animated: true)
    }

    panel.onResize = { [weak self] nextFrame, changedHeight in
      guard let self else { return }
      self.panelWidth = nextFrame.width
      if changedHeight {
        let extra = self.drawerOpen ? self.drawerHeight : 0
        self.manualHeight = max(88, nextFrame.height - extra)
      }
      self.window.setFrame(nextFrame, display: true, animate: false)
      self.syncDrawerControls()
      self.relayoutInsideCurrentFrame()
      self.scheduleStyleEmit()
    }

    panel.onResetHeight = { [weak self] in
      guard let self else { return }
      self.manualHeight = nil
      self.relayoutText()
      self.scheduleStyleEmit()
    }

    signal(SIGTERM, SIG_IGN)
    let sigterm = DispatchSource.makeSignalSource(signal: SIGTERM, queue: .main)
    sigterm.setEventHandler { NSApp.terminate(nil) }
    sigterm.resume()
    termSource = sigterm

    DispatchQueue.global(qos: .userInitiated).async {
      while let line = readLine(strippingNewline: true) {
        guard let data = line.data(using: .utf8),
              let payload = try? JSONDecoder().decode(Payload.self, from: data) else { continue }
        DispatchQueue.main.async { self.apply(payload) }
      }
      DispatchQueue.main.async { NSApp.terminate(nil) }
    }
  }

  private func makeSmallLabel(_ text: String, alpha: CGFloat = 0.72) -> NSTextField {
    let field = NSTextField(labelWithString: text)
    field.font = NSFont.systemFont(ofSize: 11, weight: .regular)
    field.textColor = NSColor(calibratedWhite: 1, alpha: alpha)
    field.drawsBackground = false
    field.isBordered = false
    return field
  }

  private func makeSlider(min: Double, max: Double, value: Double, action: Selector) -> NSSlider {
    let slider = FirstMouseSlider(value: value, minValue: min, maxValue: max, target: self, action: action)
    slider.controlSize = .mini
    slider.isContinuous = true
    return slider
  }

  private func buildDrawer() {
    drawer = NSView(frame: .zero)
    drawer.isHidden = true
    panel.addSubview(drawer)

    divider = NSView(frame: .zero)
    divider.wantsLayer = true
    divider.layer?.backgroundColor = NSColor(calibratedWhite: 1, alpha: 0.14).cgColor
    drawer.addSubview(divider)

    // 第一行：显示内容（仅原文 / 原文+译文 / 仅译文） + 停止时保存
    let modeLbl = makeSmallLabel("显示")
    modeLbl.tag = 100
    modeControl = FirstMouseSegmentedControl(labels: ["仅原文", "原文 + 译文", "仅译文"], trackingMode: .selectOne, target: self, action: #selector(onModeChange))
    modeControl.controlSize = .small
    modeControl.segmentStyle = .rounded
    modeControl.selectedSegment = modeIndex(displayMode)

    saveCheckbox = FirstMouseButton(checkboxWithTitle: "停止时保存", target: self, action: #selector(onSaveToggle))
    saveCheckbox.controlSize = .small
    saveCheckbox.state = saveOnStop ? .on : .off
    saveCheckbox.attributedTitle = NSAttributedString(
      string: "停止时保存",
      attributes: [.font: NSFont.systemFont(ofSize: 11), .foregroundColor: NSColor(calibratedWhite: 1, alpha: 0.85)]
    )

    // 第二行：底板 / 字号 / 宽度滑块
    let opacityLbl = makeSmallLabel("底板")
    opacityLbl.tag = 101
    opacitySlider = makeSlider(min: 0.15, max: 1.0, value: Double(panelAlpha), action: #selector(onOpacitySlider))
    opacityVal = makeSmallLabel("\(Int(round(panelAlpha * 100)))%", alpha: 0.9)

    let sizeLbl = makeSmallLabel("字号")
    sizeLbl.tag = 102
    sizeSlider = makeSlider(min: 12, max: 42, value: Double(fontSize), action: #selector(onSizeSlider))
    sizeVal = makeSmallLabel("\(Int(round(fontSize)))", alpha: 0.9)

    let widthLbl = makeSmallLabel("宽度")
    widthLbl.tag = 103
    widthSlider = makeSlider(min: 380, max: 1400, value: Double(panelWidth), action: #selector(onWidthSlider))
    widthVal = makeSmallLabel("\(Int(round(panelWidth)))", alpha: 0.9)

    for view in [modeLbl, modeControl, saveCheckbox, opacityLbl, opacitySlider, opacityVal, sizeLbl, sizeSlider, sizeVal, widthLbl, widthSlider, widthVal] as [NSView] {
      drawer.addSubview(view)
    }
  }

  private func modeIndex(_ mode: String) -> Int {
    switch mode {
    case "original": return 0
    case "translation": return 2
    default: return 1
    }
  }

  private func modeFromIndex(_ idx: Int) -> String {
    switch idx {
    case 0: return "original"
    case 2: return "translation"
    default: return "bilingual"
    }
  }

  private func layoutDrawer() {
    guard drawerOpen else { return }
    drawer.frame = NSRect(x: 16, y: 8, width: panelWidth - 32, height: drawerHeight - 8)
    let w = drawer.bounds.width
    divider.frame = NSRect(x: 0, y: drawer.bounds.height - 1, width: w, height: 1)

    // 第一行（靠上）
    let topRowY: CGFloat = 44
    let saveW: CGFloat = 86
    drawer.viewWithTag(100)?.frame = NSRect(x: 0, y: topRowY + 2, width: 30, height: 16)
    let segW = min(228, max(150, w - saveW - 44))
    modeControl.frame = NSRect(x: 32, y: topRowY, width: segW, height: 22)
    saveCheckbox.frame = NSRect(x: w - saveW, y: topRowY + 2, width: saveW, height: 18)

    // 第二行（靠下）
    let botRowY: CGFloat = 10
    let slot = max(90, w / 3.0)
    func placeGroup(tag: Int, slider: NSSlider, val: NSTextField, index: CGFloat) {
      let x = index * slot
      drawer.viewWithTag(tag)?.frame = NSRect(x: x, y: botRowY + 2, width: 28, height: 16)
      let sliderW = max(36, slot - 72)
      slider.frame = NSRect(x: x + 28, y: botRowY + 1, width: sliderW, height: 18)
      val.frame = NSRect(x: x + 28 + sliderW + 4, y: botRowY + 2, width: 34, height: 16)
    }
    placeGroup(tag: 101, slider: opacitySlider, val: opacityVal, index: 0)
    placeGroup(tag: 102, slider: sizeSlider, val: sizeVal, index: 1)
    placeGroup(tag: 103, slider: widthSlider, val: widthVal, index: 2)
  }

  private func syncDrawerControls() {
    modeControl.selectedSegment = modeIndex(displayMode)
    opacitySlider.doubleValue = Double(panelAlpha)
    opacityVal.stringValue = "\(Int(round(panelAlpha * 100)))%"
    sizeSlider.doubleValue = Double(fontSize)
    sizeVal.stringValue = "\(Int(round(fontSize)))"
    widthSlider.doubleValue = Double(max(380, min(1400, panelWidth)))
    widthVal.stringValue = "\(Int(round(panelWidth)))"
    saveCheckbox.state = saveOnStop ? .on : .off
  }

  private func makeIconButton(_ symbol: String, tooltip: String, action: Selector) -> NSButton {
    let image = NSImage(systemSymbolName: symbol, accessibilityDescription: tooltip)
    let button = FirstMouseButton(image: image ?? NSImage(), target: self, action: action)
    button.frame = NSRect(x: 0, y: 0, width: 24, height: 24)
    button.isBordered = false
    button.bezelStyle = .inline
    button.toolTip = tooltip
    button.contentTintColor = NSColor(calibratedWhite: 1, alpha: 0.72)
    button.image?.isTemplate = true
    return button
  }

  func showControlsForDemo() {
    hovering = true
    updateControlsVisibility(animated: false)
  }

  @objc private func toggleDrawer() {
    drawerOpen.toggle()
    drawer.isHidden = !drawerOpen
    settingsButton.contentTintColor = NSColor(calibratedWhite: 1, alpha: drawerOpen ? 0.98 : 0.62)
    syncDrawerControls()
    updateControlsVisibility(animated: true)
    layoutWindow()
  }

  @objc private func onModeChange() {
    displayMode = modeFromIndex(modeControl.selectedSegment)
    send(["event": "displayMode", "value": displayMode])
    relayoutText()
  }

  @objc private func onOpacitySlider() {
    panelAlpha = CGFloat(max(0.15, min(1.0, opacitySlider.doubleValue)))
    panel.panelAlpha = panelAlpha
    opacityVal.stringValue = "\(Int(round(panelAlpha * 100)))%"
    scheduleStyleEmit()
  }

  @objc private func onSizeSlider() {
    fontSize = CGFloat(round(max(12, min(42, sizeSlider.doubleValue))))
    sizeVal.stringValue = "\(Int(fontSize))"
    relayoutText()
    scheduleStyleEmit()
  }

  @objc private func onWidthSlider() {
    let next = CGFloat(round(max(380, min(1400, widthSlider.doubleValue))))
    let center = window.frame.midX
    panelWidth = next
    widthVal.stringValue = "\(Int(panelWidth))"
    window.setFrame(NSRect(x: center - panelWidth / 2, y: window.frame.minY, width: panelWidth, height: window.frame.height), display: true)
    relayoutText()
    scheduleStyleEmit()
  }

  @objc private func onSaveToggle() {
    saveOnStop = saveCheckbox.state == .on
    send(["event": "saveOnStop", "value": saveOnStop])
  }

  private func scheduleStyleEmit() {
    styleEmitTimer?.invalidate()
    styleEmitTimer = Timer.scheduledTimer(withTimeInterval: 0.18, repeats: false) { [weak self] _ in
      guard let self else { return }
      send([
        "event": "style",
        "opacity": Double(round(self.panelAlpha * 100) / 100),
        "fontSize": Int(round(self.fontSize)),
        "width": Int(round(self.panelWidth)),
        "height": self.manualHeight != nil ? Int(round(self.manualHeight!)) : 0,
      ])
    }
  }

  @objc private func requestStop() {
    send(["event": "stop"])
    window.orderOut(nil)
    DispatchQueue.main.asyncAfter(deadline: .now() + 0.25) {
      NSApp.terminate(nil)
    }
  }

  // MARK: - 鼠标悬停

  private func updateControlsVisibility(animated: Bool) {
    let show = hovering || drawerOpen
    panel.showGrip = show
    let target: CGFloat = show ? 1.0 : 0.55
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
    if let value = payload.opacity, value >= 0.15, value <= 1 {
      panelAlpha = CGFloat(value)
      panel.panelAlpha = panelAlpha
    }
    if let value = payload.width, value >= 380, value <= 1600 {
      let center = window.frame.midX
      panelWidth = CGFloat(value)
      window.setFrame(NSRect(x: center - panelWidth / 2, y: window.frame.minY, width: panelWidth, height: window.frame.height), display: true)
    }
    if let value = payload.height {
      manualHeight = value >= 88 ? CGFloat(min(600, value)) : nil
    }
    if let value = payload.fontSize, value >= 12, value <= 64 {
      fontSize = CGFloat(value)
    }
    if let mode = payload.displayMode, ["original", "bilingual", "translation"].contains(mode) {
      displayMode = mode
    }
    if let value = payload.saveOnStop {
      saveOnStop = value
    }
    if payload.text != nil || payload.translation != nil || payload.status != nil || payload.hint != nil {
      if let t = payload.text { state.text = t }
      if let tr = payload.translation { state.translation = tr }
      if let st = payload.status { state.status = st }
      if let h = payload.hint { state.hint = h }
    }
    if let d = payload.draft { state.draft = d }
    if payload.previous != nil { state.previous = payload.previous }
    if payload.previousTranslation != nil { state.previousTranslation = payload.previousTranslation }

    syncDrawerControls()
    relayoutText()
  }

  private func relayoutInsideCurrentFrame() {
    let total = window.frame.height
    let extra = drawerOpen ? drawerHeight : 0
    let textWidth = max(200, panelWidth - 40)
    let availableTextH = max(52, total - 36 - extra)
    let attributed = buildAttributed()
    label.attributedStringValue = attributed
    label.frame = NSRect(x: 18, y: 18 + extra, width: textWidth, height: availableTextH)
    let controlsFrame = NSRect(x: panelWidth - 68, y: total - 34, width: 54, height: 24)
    controls.frame = controlsFrame
    panel.controlsRect = controlsFrame
    settingsButton.frame = NSRect(x: 0, y: 0, width: 24, height: 24)
    stopButton.frame = NSRect(x: 30, y: 0, width: 24, height: 24)
    layoutDrawer()
  }

  private func relayoutText() {
    let textWidth = max(200, panelWidth - 40)
    let attributed = buildAttributed()
    label.attributedStringValue = attributed
    let height = max(56, attributed.boundingRect(
      with: NSSize(width: textWidth, height: .greatestFiniteMagnitude),
      options: [.usesLineFragmentOrigin, .usesFontLeading]
    ).height)
    label.frame = NSRect(x: 18, y: 18, width: textWidth, height: height)
    layoutWindow()
  }

  private func clampOrigin(_ origin: NSPoint, width: CGFloat, height: CGFloat) -> NSPoint {
    let screens = NSScreen.screens
    let targetScreen = screens.first { $0.visibleFrame.intersects(NSRect(x: origin.x, y: origin.y, width: width, height: height)) }
      ?? NSScreen.main
    let frame = targetScreen?.visibleFrame ?? NSRect(x: 0, y: 0, width: 1440, height: 900)
    let x = max(frame.minX + 8, min(origin.x, frame.maxX - width - 8))
    let y = max(frame.minY + 8, min(origin.y, frame.maxY - height - 8))
    return NSPoint(x: x, y: y)
  }

  /// 窗口高度 = max(文字所需高度, 用户手动拖出的最小高度) + 内边距 (+ 展开的设置栏)。
  private func layoutWindow() {
    let textWidth = max(200, panelWidth - 40)
    let measuredTextH = max(56, label.attributedStringValue.boundingRect(
      with: NSSize(width: textWidth, height: .greatestFiniteMagnitude),
      options: [.usesLineFragmentOrigin, .usesFontLeading]
    ).height)
    let extra = drawerOpen ? drawerHeight : 0
    let autoBodyH = measuredTextH + 36
    let bodyH = max(autoBodyH, manualHeight ?? 0)
    let total = bodyH + extra
    let top = window.frame.maxY
    let clamped = clampOrigin(NSPoint(x: window.frame.minX, y: top - total), width: panelWidth, height: total)
    let frame = NSRect(x: clamped.x, y: clamped.y, width: panelWidth, height: total)
    window.setFrame(frame, display: true, animate: false)

    // 文字贴顶排布在正文区域里（用户拉高框体后从上方自然向下展开）
    let textAreaH = bodyH - 36
    label.frame = NSRect(x: 18, y: 18 + extra, width: textWidth, height: textAreaH)
    let controlsFrame = NSRect(x: panelWidth - 68, y: total - 34, width: 54, height: 24)
    controls.frame = controlsFrame
    panel.controlsRect = controlsFrame
    settingsButton.frame = NSRect(x: 0, y: 0, width: 24, height: 24)
    stopButton.frame = NSRect(x: 30, y: 0, width: 24, height: 24)
    layoutDrawer()
  }

  private func buildAttributed() -> NSAttributedString {
    let result = NSMutableAttributedString()
    let dim = NSColor(calibratedWhite: 0.86, alpha: 0.92)
    let draftColor = NSColor(calibratedWhite: 0.95, alpha: 0.72)
    let prevColor = NSColor(calibratedWhite: 0.9, alpha: 0.5)
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
    let draft = (state.draft ?? "").trimmingCharacters(in: .whitespacesAndNewlines)
    let previous = (state.previous ?? "").trimmingCharacters(in: .whitespacesAndNewlines)
    let previousTranslation = (state.previousTranslation ?? "").trimmingCharacters(in: .whitespacesAndNewlines)
    let hint = (state.hint ?? "").trimmingCharacters(in: .whitespacesAndNewlines)

    if text.isEmpty && translation.isEmpty && draft.isEmpty {
      append(hint.isEmpty ? "等着听…" : hint, font: small, color: dim, spaceAfter: 0)
      return result
    }

    if text.isEmpty && translation.isEmpty {
      append(draft + " …", font: main, color: draftColor, spaceAfter: 0)
      return result
    }

    switch displayMode {
    case "original":
      append(text, font: main, color: bright, spaceAfter: 0)
      if !draft.isEmpty && draft != text {
        append("\n" + draft + " …", font: small, color: draftColor, spaceAfter: 0)
      } else if !previous.isEmpty {
        append("\n" + previous, font: tiny, color: prevColor, spaceAfter: 0)
      }
    case "translation":
      // 仅译文：有译文优先大字显示译文；若译文尚在路上或本句已是目标语言，平滑回退显示原文避免黑屏。
      let primary = !translation.isEmpty ? translation : text
      append(primary, font: main, color: bright, spaceAfter: 0)
      let prevLine = !previousTranslation.isEmpty ? previousTranslation : previous
      if !draft.isEmpty && draft != text {
        append("\n" + draft + " …", font: small, color: draftColor, spaceAfter: 0)
      } else if !prevLine.isEmpty {
        append("\n" + prevLine, font: tiny, color: prevColor, spaceAfter: 0)
      }
    default: // bilingual
      append(text, font: main, color: bright, spaceAfter: 0)
      if !translation.isEmpty {
        append("\n" + translation, font: small, color: dim, spaceAfter: 0)
      }
      if !draft.isEmpty && draft != text {
        append("\n" + draft + " …", font: small, color: draftColor, spaceAfter: 0)
      } else if !previous.isEmpty {
        append("\n" + previous, font: tiny, color: prevColor, spaceAfter: 0)
      }
    }
    if !hint.isEmpty {
      append("\n" + hint, font: tiny, color: prevColor, spaceAfter: 0)
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
    if ProcessInfo.processInfo.environment["PODWAVE_CAPTION_DEMO"] == "1" {
      DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
        self.controller.showControlsForDemo()
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
