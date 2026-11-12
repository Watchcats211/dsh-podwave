const API = '/podwave/api'
import React from 'react'
import { initialOf } from '../lib/format.js'

export default function Cover({ item, size = 44, className = '' }) {
  const style = { width: size, height: size }
  if (item && item.hasCover) {
    return (
      <img
        className={`cover ${className}`}
        style={style}
        src={`${API}/episodes/${item.id}/cover`}
        alt=""
        loading="lazy"
        draggable={false}
      />
    )
  }
  return (
    <div className={`cover cover-fallback ${className}`} style={style} aria-hidden>
      {initialOf(item && item.title)}
    </div>
  )
}

