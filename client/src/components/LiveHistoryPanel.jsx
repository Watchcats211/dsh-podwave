import React, { useCallback, useEffect, useState } from 'react'
import { fmtTime, fmtDuration, fmtDate } from '../lib/format.js'

const API = '/podwave/api'

async function getJSON(url) {
  const res = await fetch(url)
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || `请求失败 ${res.status}`)
  return data
}

export default function LiveHistoryPanel({ items = [], onRefresh, onFlash }) {
  const [activeId, setActiveId] = useState('')
  const [detail, setDetail] = useState(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const openItem = useCallback(async (id) => {
    setActiveId(id)
    setLoading(true)
    try {
      const data = await getJSON(`${API}/live/history/${encodeURIComponent(id)}`)
      setDetail(data.item || null)
    } catch (err) {
      onFlash?.(err.message || '读取失败')
      setDetail(null)
    } finally {
      setLoading(false)
    }
  }, [onFlash])

  useEffect(() => {
    if (activeId && !items.some((item) => item.id === activeId)) {
      setActiveId('')
      setDetail(null)
    }
  }, [items, activeId])

  const removeItem = async (id) => {
    if (!window.confirm('删除这条实时字幕记录？会同时删除对应的 JSON / SRT / MD 文件。')) return
    try {
      const res = await fetch(`${API}/live/history/${encodeURIComponent(id)}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('删除失败')
      if (activeId === id) {
        setActiveId('')
        setDetail(null)
      }
      await onRefresh?.()
      onFlash?.('已删除实时字幕记录')
    } catch (err) {
      onFlash?.(err.message || '删除失败')
    }
  }

  const copyDetail = async () => {
    if (!detail?.lines?.length) return
    const target = detail.target || 'zh'
    const text = detail.lines
      .map((line) => {
        const stamp = fmtTime(line.start)
        const tr = line.translations?.[target] || line.translations?.zh || line.translations?.en || ''
        return tr ? `${stamp} ${line.text}\n${' '.repeat(stamp.length + 1)}${tr}` : `${stamp} ${line.text}`
      })
      .join('\n')
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      onFlash?.('复制失败')
    }
  }

  if (detail) {
    const target = detail.target || 'zh'
    return (
      <section className="live-history-detail">
        <div className="detail-top">
          <button className="back-link" onClick={() => { setActiveId(''); setDetail(null) }}>← 返回实时记录</button>
          <div className="live-history-actions">
            <a className="btn ghost" href={`${API}/live/history/${encodeURIComponent(detail.id)}/export?format=srt`}>导出 .srt</a>
            <a className="btn ghost" href={`${API}/live/history/${encodeURIComponent(detail.id)}/export?format=md`}>导出 .md</a>
            <button className="btn ghost" onClick={copyDetail}>{copied ? '已复制' : '复制全文'}</button>
            <button className="btn ghost danger" onClick={() => removeItem(detail.id)}>删除</button>
          </div>
        </div>
        <h2 className="live-history-title">{detail.title}</h2>
        <p className="live-history-sub">
          共 {detail.lines?.length || 0} 句 · {fmtDate(detail.createdAt)}
        </p>
        <div className="live-history-lines">
          {(detail.lines || []).map((line) => {
            const tr = line.translations?.[target] || line.translations?.zh || line.translations?.en || ''
            return (
              <div key={line.id} className="live-history-line">
                <span className="seg-time">{fmtTime(line.start)}</span>
                <span className="seg-text">
                  {line.text}
                  {tr ? <span className="seg-trans">{tr}</span> : null}
                </span>
              </div>
            )
          })}
        </div>
      </section>
    )
  }

  return (
    <section className="live-history-panel">
      {loading ? <div className="empty">正在读取记录…</div> : null}
      {!loading && items.length === 0 ? (
        <div className="empty">
          <p>还没有保存的实时字幕记录</p>
          <p className="empty-hint">
            点右上角「实时字幕」听电脑正在播放的声音；开启「停止时自动保存」后，每次结束都会留在这里，方便回看和导出。
          </p>
        </div>
      ) : null}
      {!loading && items.length > 0 ? (
        <div className="live-history-list">
          {items.map((item) => (
            <div key={item.id} className="live-history-card" role="button" tabIndex={0} onClick={() => openItem(item.id)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openItem(item.id) } }}>
              <div className="live-history-card-main">
                <div className="live-history-card-title">{item.title}</div>
                <div className="live-history-card-meta">
                  {fmtDate(item.createdAt)} · {item.lines} 句{item.durationSec ? ` · ${fmtDuration(item.durationSec)}` : ''}
                </div>
                {item.preview ? <div className="live-history-card-preview">{item.preview}</div> : null}
              </div>
              <div className="live-history-card-ops" onClick={(e) => e.stopPropagation()}>
                <a className="mini-link" href={`${API}/live/history/${encodeURIComponent(item.id)}/export?format=md`}>导出 MD</a>
                <button className="mini-link" onClick={() => removeItem(item.id)}>删除</button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  )
}
