import React, { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import { fmtTime } from '../lib/format.js'

// 实时字幕的悬浮窗：听系统正在播放的声音，把「这句话」和中文逐句滚出来。
//
// 和「悬浮字幕」（CaptionOverlay）不是一回事：那个跟着播客播放进度走，
// 这个跟播放器无关，听的是系统输出（YouTube、直播、会议都能用）。
export default function LiveCaptionOverlay({
  lines = [],
  status = 'listening',
  error = '',
  device = '',
  count = 0,
  elapsed = 0,
  fontSize = 15,
  onStop,
  onSave,
  onClose,
}) {
  const bodyRef = useRef(null)
  const boxRef = useRef(null)
  const dragRef = useRef(null)
  // 没拖动时贴底居中（样式里定）；拖动过一次就改 left/top，并记住这一次的位置。
  const [pos, setPos] = useState(null)

  const visible = lines.slice(-6)

  // 新的一句出来就滚到底：读字幕的人不该自己去追滚动条。
  useEffect(() => {
    const box = bodyRef.current
    if (box) box.scrollTop = box.scrollHeight
  }, [lines.length])

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

  const asking = status === 'asking'

  return (
    <div
      ref={boxRef}
      className="live-caption"
      style={pos ? { left: pos.x, top: pos.y, bottom: 'auto', transform: 'none' } : undefined}
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
        <button className="icon-btn live-caption-close" title={asking ? '关掉' : '停止并关闭'} onClick={asking ? onClose : onStop}>
          <Icon name="close" size={14} />
        </button>
      </div>

      <div className="live-caption-body" ref={bodyRef}>
        {visible.length ? (
          visible.map((line) => {
            const translation = line.translations?.zh || line.translations?.en || ''
            return (
              <div key={line.id} className="live-line">
                <p className="live-line-text" style={{ fontSize }}>
                  {line.text}
                </p>
                {translation ? (
                  <p className="live-line-tr" style={{ fontSize: Math.round(fontSize * 0.84) }}>
                    {translation}
                  </p>
                ) : null}
              </div>
            )
          })
        ) : (
          <p className="live-caption-empty">
            {status === 'starting' ? '正在打开音频设备…' : '等着听…'}
            {status === 'listening' ? ' 播放任何声音，字幕会一句一句出现。' : ''}
          </p>
        )}
      </div>

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
            <span className="live-caption-tip">识别走 DeepSeek 云端，约 ¥0.4/小时</span>
            <button className="btn ghost" onClick={onStop} disabled={status === 'saving'}>
              停止
            </button>
          </>
        )}
      </div>
    </div>
  )
}
