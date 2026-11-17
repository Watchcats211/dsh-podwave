import React, { useCallback, useEffect, useRef } from 'react'
import Icon from './Icon.jsx'
import SubtitleSize from './SubtitleSize.jsx'
import { fmtTime } from '../lib/format.js'

// 悬浮字幕：一个可以拖来拖去的小窗，跟着播放进度显示当前这一句。
// 位置记在 ui 设置里，下次打开还在原处；位置上不设限，只保证不整块跑出屏幕。
export default function CaptionOverlay({ line, target, fontSize, onFontSize, x, y, width, height, onMove, onResize, onClose, onSeek, speakerLabel, status }) {
  const boxRef = useRef(null)
  const dragRef = useRef(null)
  const resizeRef = useRef(null)

  const clamp = useCallback((nextX, nextY) => {
    const box = boxRef.current
    const width = box?.offsetWidth || 420
    const height = box?.offsetHeight || 120
    const maxX = Math.max(8, window.innerWidth - width - 8)
    const maxY = Math.max(8, window.innerHeight - height - 8)
    return {
      x: Math.min(maxX, Math.max(8, nextX)),
      y: Math.min(maxY, Math.max(8, nextY)),
    }
  }, [])

  const onPointerDown = useCallback((event) => {
    if (event.button !== undefined && event.button !== 0) return
    const box = boxRef.current
    if (!box) return
    const rect = box.getBoundingClientRect()
    dragRef.current = { dx: event.clientX - rect.left, dy: event.clientY - rect.top }
    event.currentTarget.setPointerCapture?.(event.pointerId)
  }, [])

  const onPointerMove = useCallback((event) => {
    const drag = dragRef.current
    if (!drag) return
    const next = clamp(event.clientX - drag.dx, event.clientY - drag.dy)
    onMove(next.x, next.y, false)
  }, [clamp, onMove])

  const onPointerUp = useCallback((event) => {
    const drag = dragRef.current
    if (!drag) return
    dragRef.current = null
    event.currentTarget.releasePointerCapture?.(event.pointerId)
    const next = clamp(event.clientX - drag.dx, event.clientY - drag.dy)
    onMove(next.x, next.y, true)
  }, [clamp, onMove])

  // 右下角拖拽改大小：只改宽高，字号还是用上面那个滑块调。
  const onResizeDown = useCallback((event) => {
    if (event.button !== undefined && event.button !== 0) return
    event.stopPropagation()
    const box = boxRef.current
    if (!box) return
    const rect = box.getBoundingClientRect()
    resizeRef.current = { startX: event.clientX, startY: event.clientY, width: rect.width, height: rect.height }
    event.currentTarget.setPointerCapture?.(event.pointerId)
  }, [])

  const sizeAt = useCallback((event) => {
    const start = resizeRef.current
    if (!start) return null
    // 已经拖到某个位置时，放大不能把右边/下边顶出屏幕。
    const maxW = Math.max(240, window.innerWidth - (x == null ? 16 : x + 8))
    const maxH = Math.max(92, window.innerHeight - (y == null ? 16 : y + 8))
    return {
      width: Math.round(Math.min(maxW, Math.max(240, start.width + (event.clientX - start.startX)))),
      height: Math.round(Math.min(maxH, Math.max(92, start.height + (event.clientY - start.startY)))),
    }
  }, [x, y])

  const onResizeMove = useCallback((event) => {
    if (!resizeRef.current) return
    event.stopPropagation()
    const next = sizeAt(event)
    if (next) onResize(next.width, next.height, false)
  }, [onResize, sizeAt])

  const onResizeUp = useCallback((event) => {
    if (!resizeRef.current) return
    event.stopPropagation()
    const next = sizeAt(event)
    resizeRef.current = null
    event.currentTarget.releasePointerCapture?.(event.pointerId)
    if (next) onResize(next.width, next.height, true)
  }, [onResize, sizeAt])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const translation = line && target ? line.translations?.[target] : ''
  const running = status === 'queued' || status === 'running'

  return (
    <div
      ref={boxRef}
      className={`caption-overlay ${height ? 'is-sized' : ''}`}
      style={{
        left: x ?? undefined,
        top: y ?? undefined,
        right: x == null ? undefined : 'auto',
        bottom: y == null ? undefined : 'auto',
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
        '--sub-size': `${fontSize || 15}px`,
      }}
    >
      <div
        className="caption-head"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        title="拖动可以换位置"
      >
        <Icon name="wave" size={13} />
        <span className="caption-title">实时字幕</span>
        <SubtitleSize value={fontSize} onChange={onFontSize} compact />
        <button className="caption-close" onClick={onClose} title="关闭（Esc）">×</button>
      </div>
      <div
        className={`caption-body ${line ? '' : 'empty'}`}
        onClick={() => (line ? onSeek(line.start) : null)}
        role={line ? 'button' : undefined}
        tabIndex={line ? 0 : undefined}
        onKeyDown={(event) => {
          if (line && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault()
            onSeek(line.start)
          }
        }}
        title={line ? `跳到 ${fmtTime(line.start)}` : undefined}
      >
        {line ? (
          <>
            {speakerLabel ? <span className="caption-speaker">{speakerLabel}</span> : null}
            <div className="caption-text">{line.text}</div>
            {translation ? <div className="caption-trans">{translation}</div> : null}
          </>
        ) : (
          <div className="caption-hint">{running ? '正在识别，马上就出字幕…' : '播放到有字幕的位置就会显示这一句'}</div>
        )}
      </div>
      {/* 右下角把手：拖动改大小；双击回到默认大小。 */}
      <span
        className="caption-resize"
        onPointerDown={onResizeDown}
        onPointerMove={onResizeMove}
        onPointerUp={onResizeUp}
        onPointerCancel={onResizeUp}
        onDoubleClick={() => onResize(null, null, true)}
        title="拖动调整大小（双击恢复默认）"
      />
    </div>
  )
}
