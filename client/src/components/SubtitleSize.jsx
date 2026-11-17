import React from 'react'

// 字幕字号拖动条：字幕面板和悬浮字幕共用同一个值。
export default function SubtitleSize({ value, onChange, compact = false }) {
  const size = Number.isFinite(Number(value)) ? Number(value) : 15
  return (
    <label className={`sub-size ${compact ? 'compact' : ''}`} title="调整字幕字号（面板和悬浮字幕共用）">
      <span className="sub-size-label">字号</span>
      <input
        type="range"
        min="12"
        max="42"
        step="1"
        value={size}
        aria-label="字幕字号"
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <span className="sub-size-value">{size}</span>
    </label>
  )
}
