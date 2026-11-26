import React, { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import { fmtTime } from '../lib/format.js'

const MODES = [
  ['original', '仅原文'],
  ['bilingual', '原文 + 译文'],
  ['translation', '仅译文'],
]

// 实时字幕内置浮层（非 macOS 或原生字幕窗未开启时的降级方案）：
// 支持拖动标题栏挪位置、拖动右下角改大小、随时切换仅原文 / 原文+译文 / 仅译文。
export default function LiveCaptionOverlay({
  lines = [],
  draft = '',
  displayMode = 'bilingual',
  onDisplayMode,
  status = 'listening',
  error = '',
  device = '',
  count = 0,
  elapsed = 0,
  fontSize = 15,
  level = 0,
  hint = '',
  onStop,
  onSave,
  onClose,
}) {
  const bodyRef = useRef(null)
  const boxRef = useRef(null)
  const dragRef = useRef(null)
  const resizeRef = useRef(null)
  const [pos, setPos] = useState(null)
  const [size, setSize] = useState(null)

  const visible = lines.slice(-6)

  useEffect(() => {
    const box = bodyRef.current
    if (box) box.scrollTop = box.scrollHeight
  }, [lines.length, draft, displayMode])

  const clamp = (x, y) => {
    const box = boxRef.current
    const width = box?.offsetWidth || 520
    const height = box?.offsetHeight || 160
    return {
      x: Math.min(Math.max(8, x), Math.max(8, window.innerWidth - width - 8)),
      y: Math.min(Math.max(8, y), Math.max(8, window.innerHeight - height - 8)),
    }
  }

  const onPointerDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return
    if (event.target instanceof Element && event.target.closest('button, input, select, a, [role="button"]')) return
    const box = boxRef.current
    if (!box) return
    const rect = box.getBoundingClientRect()
    dragRef.current = { dx: event.clientX - rect.left, dy: event.clientY - rect.top }
    event.currentTarget.setPointerCapture?.(event.pointerId)
  }

  const onPointerMove = (event) => {
    const drag = dragRef.current
    if (!drag) return
    setPos(clamp(event.clientX - drag.dx, event.clientY - drag.dy))
  }

  const onPointerUp = (event) => {
    if (!dragRef.current) return
    dragRef.current = null
    event.currentTarget.releasePointerCapture?.(event.pointerId)
  }

  const onResizeDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return
    event.stopPropagation()
    const box = boxRef.current
    if (!box) return
    const rect = box.getBoundingClientRect()
    resizeRef.current = { startX: event.clientX, startY: event.clientY, width: rect.width, height: rect.height }
    event.currentTarget.setPointerCapture?.(event.pointerId)
  }

  const onResizeMove = (event) => {
    const start = resizeRef.current
    if (!start) return
    event.stopPropagation()
    const width = Math.round(Math.min(window.innerWidth - 24, Math.max(360, start.width + (event.clientX - start.startX))))
    const height = Math.round(Math.min(window.innerHeight - 24, Math.max(140, start.height + (event.clientY - start.startY))))
    setSize({ width, height })
  }

  const onResizeUp = (event) => {
    if (!resizeRef.current) return
    event.stopPropagation()
    resizeRef.current = null
    event.currentTarget.releasePointerCapture?.(event.pointerId)
  }

  const asking = status === 'asking'

  return (
    <div
      ref={boxRef}
      className="live-caption"
      style={{
        ...(pos ? { left: pos.x, top: pos.y, bottom: 'auto', transform: 'none' } : {}),
        ...(size ? { width: `${size.width}px`, height: `${size.height}px`, maxHeight: 'none' } : {}),
      }}
    >
      <div
        className="live-caption-head"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        title="拖动标题栏可以挪位置"
      >
        <span className="live-caption-dot" data-live={status === 'listening' ? 'on' : 'off'} aria-hidden="true" />
        <span className="live-caption-title">实时字幕</span>
        <span className="live-caption-meta">
          {status === 'starting' ? '正在打开设备…' : null}
          {status === 'listening' ? `${device || '系统声音'} · ${count} 句 · ${fmtTime(elapsed)}` : null}
          {status === 'saving' ? '正在保存…' : null}
          {asking ? `已停止 · 共 ${count} 句` : null}
        </span>
        <button
          type="button"
          className="icon-btn live-caption-close"
          title={asking ? '关掉' : '停止并关闭'}
          onPointerDown={(event) => event.stopPropagation()}
          onClick={asking ? onClose : onStop}
        >
          <Icon name="close" size={14} />
        </button>
      </div>

      <div className={`live-meter ${level > 0.004 ? 'is-live' : ''}`} title="输入电平（说话时会跳）">
        <span style={{ width: `${Math.min(100, Math.max(2, level * 400))}%` }} />
      </div>

      <div className="live-caption-body" ref={bodyRef}>
        {visible.length || draft ? (
          <>
            {visible.map((line) => {
              const translation = line.translations?.zh || line.translations?.en || ''
              const showOriginal = displayMode !== 'translation' || !translation
              const showTranslation = displayMode !== 'original' && Boolean(translation)
              const primaryText = displayMode === 'translation' && translation ? translation : line.text
              return (
                <div key={line.id} className="live-line">
                  <p className="live-line-text" style={{ fontSize }}>
                    {primaryText}
                  </p>
                  {showOriginal && showTranslation ? (
                    <p className="live-line-tr" style={{ fontSize: Math.round(fontSize * 0.84) }}>
                      {translation}
                    </p>
                  ) : null}
                </div>
              )
            })}
            {draft ? (
              <div className="live-line is-draft">
                <p className="live-line-text" style={{ fontSize, opacity: 0.72 }}>
                  {draft} …
                </p>
              </div>
            ) : null}
          </>
        ) : (
          <p className="live-caption-empty">
            {status === 'starting' ? '正在打开音频设备…' : '等着听…'}
            {status === 'listening' ? ' 播放任何声音，字幕会一句一句出现。' : ''}
          </p>
        )}
      </div>

      {hint && !error ? <p className="live-caption-note">{hint}</p> : null}
      {error ? <p className="live-caption-error">{error}</p> : null}

      <div className="live-caption-foot">
        {asking ? (
          <>
            <span className="live-caption-ask">保存这次字幕？</span>
            <button className="btn ghost" onClick={() => onSave(false)}>
              不用
            </button>
            <button className="btn primary" onClick={() => onSave(true)}>
              保存
            </button>
          </>
        ) : (
          <>
            <span className="live-mode-switch" role="group" aria-label="显示内容">
              {MODES.map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  className={displayMode === id ? 'is-on' : ''}
                  onClick={() => onDisplayMode?.(id)}
                >
                  {label}
                </button>
              ))}
            </span>
            <button className="btn ghost" onClick={onStop} disabled={status === 'saving'}>
              停止
            </button>
          </>
        )}
      </div>

      <span
        className="caption-resize"
        onPointerDown={onResizeDown}
        onPointerMove={onResizeMove}
        onPointerUp={onResizeUp}
        onPointerCancel={onResizeUp}
        onDoubleClick={() => setSize(null)}
        title="拖动调整大小（双击恢复默认）"
      />
    </div>
  )
}
