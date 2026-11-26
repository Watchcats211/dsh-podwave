import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import { shortPath } from '../lib/format.js'

const API = '/podwave/api'

async function getJSON(url) {
  const res = await fetch(url)
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || `请求失败（${res.status}）`)
  return data
}

async function postJSON(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body ?? {}),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || `请求失败（${res.status}）`)
  return data
}

export default function AddFolderModal({
  folders = [],
  items = [],
  onSubmit,
  onPick,
  onRemoveFolder,
  onRescan,
  onDropFiles,
  onClose,
}) {
  const dialogRef = useRef(null)
  const inputRef = useRef(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose
  const [value, setValue] = useState('')
  const [busy, setBusy] = useState(false)
  const [busyPick, setBusyPick] = useState(false)
  const [busyRescan, setBusyRescan] = useState(false)
  const [busySuggestion, setBusySuggestion] = useState('')
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [mountedFolders, setMountedFolders] = useState([])
  const [loadingSuggest, setLoadingSuggest] = useState(true)
  const [preview, setPreview] = useState(null)
  const [previewLoading, setPreviewLoading] = useState(false)

  const localCounts = useMemo(() => {
    const map = new Map()
    for (const item of items) {
      if (!item?.root) continue
      map.set(item.root, (map.get(item.root) || 0) + 1)
    }
    return map
  }, [items])

  const loadSuggestions = useCallback(async () => {
    setLoadingSuggest(true)
    try {
      const data = await getJSON(`${API}/folders/suggestions`)
      setSuggestions(Array.isArray(data?.suggestions) ? data.suggestions : [])
      setMountedFolders(Array.isArray(data?.folders) ? data.folders : [])
    } catch {
      setSuggestions([])
    } finally {
      setLoadingSuggest(false)
    }
  }, [])

  useEffect(() => {
    loadSuggestions()
  }, [loadSuggestions, folders.length])

  // 打开原生 <dialog closedby="any"> 顶层模态框，并为不支持 closedby 的浏览器补充外部点击轻闭。
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return undefined
    if (!dialog.open) dialog.showModal?.()
    const handleClose = () => {
      dialog.returnValue = ''
      onCloseRef.current?.()
    }
    dialog.addEventListener('close', handleClose)

    let cleanupFallback = null
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const outside = (e) => {
        const r = dialog.getBoundingClientRect()
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom
      }
      let pressedOutside = false
      const onDown = (e) => { pressedOutside = outside(e) }
      const onUp = (e) => { if (pressedOutside && outside(e)) dialog.close() }
      dialog.addEventListener('pointerdown', onDown)
      dialog.addEventListener('pointerup', onUp)
      cleanupFallback = () => {
        dialog.removeEventListener('pointerdown', onDown)
        dialog.removeEventListener('pointerup', onUp)
      }
    }

    return () => {
      dialog.removeEventListener('close', handleClose)
      cleanupFallback?.()
      if (dialog.open) dialog.close()
    }
  }, [])

  // 手动输入路径的防抖实时探测
  useEffect(() => {
    const trimmed = value.trim()
    if (!trimmed) {
      setPreview(null)
      setPreviewLoading(false)
      return undefined
    }
    let cancelled = false
    setPreviewLoading(true)
    const timer = window.setTimeout(async () => {
      try {
        const result = await postJSON(`${API}/folders/preview`, { path: trimmed })
        if (!cancelled) setPreview(result)
      } catch (err) {
        if (!cancelled) setPreview({ ok: false, error: err.message })
      } finally {
        if (!cancelled) setPreviewLoading(false)
      }
    }, 250)
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [value])

  const handleClose = () => {
    const dialog = dialogRef.current
    if (dialog?.open) dialog.close()
    else onClose?.()
  }

  const pick = async () => {
    if (busyPick) return
    setBusyPick(true)
    setError('')
    try {
      const result = await onPick()
      if (result?.canceled) return
      if (result?.error) throw new Error(result.error)
      if (result?.path) {
        await onSubmit(result.path)
        await loadSuggestions()
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setBusyPick(false)
    }
  }

  const toggleSuggestion = async (sug) => {
    if (busySuggestion) return
    setError('')
    setBusySuggestion(sug.path)
    try {
      if (sug.alreadyAdded) {
        await onRemoveFolder?.(sug.path, { skipConfirm: true })
      } else {
        if (sug.overlap) {
          throw new Error(`与已挂载目录重叠：${sug.overlap}`)
        }
        await onSubmit(sug.path)
      }
      await loadSuggestions()
    } catch (err) {
      setError(err.message)
    } finally {
      setBusySuggestion('')
    }
  }

  const submitManual = async (event) => {
    event.preventDefault()
    const trimmed = value.trim()
    if (!trimmed || busy) return
    setBusy(true)
    setError('')
    try {
      await onSubmit(trimmed)
      setValue('')
      setPreview(null)
      await loadSuggestions()
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  const triggerRescan = async () => {
    if (!onRescan || busyRescan) return
    setBusyRescan(true)
    try {
      await onRescan()
      await loadSuggestions()
    } catch (err) {
      setError(err.message)
    } finally {
      setBusyRescan(false)
    }
  }

  const onZoneDrop = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    setDragOver(false)
    if (!onDropFiles) return
    try {
      await onDropFiles(event.dataTransfer)
      await loadSuggestions()
    } catch (err) {
      setError(err.message)
    }
  }

  const displayFolders = mountedFolders.length
    ? mountedFolders
    : folders.map((f) => ({
        path: f,
        displayPath: f,
        name: shortPath(f),
        count: localCounts.get(f) || 0,
      }))

  return (
    <dialog
      ref={dialogRef}
      className="folder-dialog"
      closedby="any"
      aria-labelledby="pw-folder-dialog-title"
    >
      <div className="dlg-head">
        <div className="dlg-head-title">
          <span className="dlg-head-dot" aria-hidden="true" />
          <h1 id="pw-folder-dialog-title">添加与管理播客文件夹</h1>
        </div>
        <button
          type="button"
          className="dlg-close"
          onClick={handleClose}
          aria-label="关闭弹窗"
          title="关闭 (Esc)"
        >
          <Icon name="close" size={16} />
        </button>
      </div>

      <div className="dlg-body">
        {/* 1. 系统选择器 + 拖放区 */}
        <div
          className={`drop-zone ${dragOver ? 'is-over' : ''}`}
          onDragOver={(e) => {
            if ([...(e.dataTransfer?.types || [])].includes('Files')) {
              e.preventDefault()
              e.stopPropagation()
              if (!dragOver) setDragOver(true)
            }
          }}
          onDragLeave={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setDragOver(false)
          }}
          onDrop={onZoneDrop}
        >
          <div className="drop-left">
            <div className="drop-icon" aria-hidden="true">
              <Icon name="folder-plus" size={22} />
            </div>
            <div>
              <strong>{dragOver ? '松开以添加目录或音频' : '从系统选择器浏览文件夹'}</strong>
              <span>或直接把本地文件夹 / 音频拖到这里，自动监测新增单集</span>
            </div>
          </div>
          <button
            type="button"
            className="btn primary"
            onClick={pick}
            disabled={busyPick}
            autoFocus
          >
            {busyPick ? '打开中…' : '选择文件夹'}
          </button>
        </div>

        {/* 2. 本机常用目录（点击一键挂载） */}
        <div>
          <div className="dlg-sec-head">
            <span className="dlg-sec-label">本机常用目录（点击一键挂载 / 取消）</span>
            {loadingSuggest ? <span className="dlg-sec-meta">探测中…</span> : null}
          </div>
          {suggestions.length ? (
            <div className="suggest-grid">
              {suggestions.map((sug) => {
                const isBusy = busySuggestion === sug.path
                const badgeText = isBusy
                  ? '处理中…'
                  : sug.alreadyAdded
                    ? `已挂载${sug.audioCount ? ` · ${sug.audioCount}${sug.truncated ? '+' : ''}` : ''}`
                    : sug.overlap
                      ? '路径重叠'
                      : sug.audioCount > 0
                        ? `发现 ${sug.audioCount}${sug.truncated ? '+' : ''} 音频`
                        : '点击挂载'
                return (
                  <button
                    key={sug.path}
                    type="button"
                    className={`suggest-item ${sug.alreadyAdded ? 'is-added' : ''} ${sug.overlap ? 'is-overlap' : ''}`}
                    disabled={Boolean(busySuggestion) || Boolean(sug.overlap)}
                    onClick={() => toggleSuggestion(sug)}
                    title={sug.overlap ? `与已挂载目录重叠：${sug.overlap}` : sug.path}
                  >
                    <span className="suggest-info">
                      <span className="suggest-name">{sug.label}</span>
                      <span className="suggest-path">{sug.displayPath}</span>
                    </span>
                    <span className="suggest-badge">{badgeText}</span>
                  </button>
                )
              })}
            </div>
          ) : !loadingSuggest ? (
            <p className="dlg-muted">未探测到常见本地目录，请使用上方「选择文件夹」或下方手动输入路径。</p>
          ) : null}
        </div>

        {/* 3. 已挂载目录管理 */}
        {displayFolders.length > 0 ? (
          <div>
            <div className="dlg-sec-head">
              <span className="dlg-sec-label">已挂载目录（{displayFolders.length}）</span>
              {onRescan ? (
                <button
                  type="button"
                  className="dlg-rescan-btn"
                  onClick={triggerRescan}
                  disabled={busyRescan}
                >
                  <Icon name="refresh" size={13} />
                  <span>{busyRescan ? '扫描中…' : '重新扫描全部'}</span>
                </button>
              ) : null}
            </div>
            <ul className="mounted-list">
              {displayFolders.map((item) => (
                <li key={item.path} className="mounted-row" title={item.path}>
                  <span className="slot-dot" aria-hidden="true" />
                  <span className="mounted-info">
                    <span className="mounted-name">{item.name}</span>
                    <span className="mounted-path">{item.displayPath}</span>
                  </span>
                  <span className="mounted-count">{item.count} 集</span>
                  <button
                    type="button"
                    className="mounted-del"
                    onClick={async () => {
                      await onRemoveFolder?.(item.path)
                      await loadSuggestions()
                    }}
                    title="从媒体库移除该文件夹（不删除本地文件）"
                  >
                    移除
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* 4. 手动路径挂载与实时检测 */}
        <form onSubmit={submitManual}>
          <div className="dlg-sec-head">
            <span className="dlg-sec-label">手动路径挂载与实时检测</span>
          </div>
          <div className="path-row">
            <input
              ref={inputRef}
              value={value}
              onChange={(event) => {
                setValue(event.target.value)
                setError('')
              }}
              placeholder="输入或粘贴文件夹路径，例如 ~/Music/Podcasts"
              spellCheck={false}
              aria-label="文件夹路径"
            />
            <button
              type="submit"
              className="btn primary"
              disabled={busy || !value.trim() || (preview && preview.ok === false)}
            >
              {busy ? '挂载中…' : '挂载目录'}
            </button>
          </div>
          {previewLoading && value.trim() ? (
            <div className="preview-strip is-pending">正在检查目录路径与音频数量…</div>
          ) : preview && value.trim() ? (
            preview.ok ? (
              <div className="preview-strip is-ok">
                <span>
                  {preview.alreadyAdded
                    ? `该目录已在媒体库中：${preview.displayPath}（约 ${preview.audioCount}${preview.truncated ? '+' : ''} 个音频）`
                    : `目录有效：检测到 ${preview.audioCount}${preview.truncated ? '+' : ''} 个音频文件，可直接挂载`}
                </span>
                <span className="preview-code">READY</span>
              </div>
            ) : (
              <div className="preview-strip is-err">
                <span>{preview.error || '无法读取该目录'}</span>
                <span className="preview-code">ERR</span>
              </div>
            )
          ) : null}
        </form>

        {error ? <div className="dialog-error">{error}</div> : null}
      </div>

      <div className="dlg-foot">
        <span>Podwave 仅读取音频元数据，绝不移动、改名或上传原始文件</span>
        <button type="button" className="btn ghost" onClick={handleClose}>
          完成
        </button>
      </div>
    </dialog>
  )
}
