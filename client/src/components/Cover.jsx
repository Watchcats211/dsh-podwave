const API = '/podwave/api'
import React from 'react'
import { initialOf } from '../lib/format.js'

export default function Cover({ item, size = 44, className = '' }) {
  const style = { width: size, height: size }
  if (item && item.hasCover) {
    // 带上封面文件的修改时间：换了封面之后 URL 变了，浏览器不会拿一天前的缓存顶上来。
    const version = item.coverAt ? `?v=${item.coverAt}` : ''
    return (
      <img
        className={`cover ${className}`}
        style={style}
        src={`${API}/episodes/${item.id}/cover${version}`}
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

