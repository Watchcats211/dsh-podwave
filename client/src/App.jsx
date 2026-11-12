import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const API = '/podwave/api'

const SPEEDS = [0.75, 1, 1.25, 1.5, 1.75, 2]

async function getJSON(url) {
  const res = await fetch(url)
  if (!res.ok) {
    const payload = await res.json().catch(() => ({}))
    throw new Error(payload.error || res.statusText)
  }
  return res.json()
}

async function sendJSON(url, method, body) {
  const res = await fetch(url, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) {
    const payload = await res.json().catch(() => ({}))
    throw new Error(payload.error || res.statusText)
  }
  return res.json()
}

function fmtTime(value) {
  if (!Number.isFinite(value) || value < 0) return '0:00'
  const total = Math.floor(value)
  const hours = Math.floor(total / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const seconds = total % 60
  if (hours > 0) return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

function fmtDuration(value) {
  if (!value) return '—'
  const hours = Math.floor(value / 3600)
  const minutes = Math.round((value % 3600) / 60)
  if (hours > 0) return `${hours} 小时 ${minutes} 分`
  return `${Math.max(1, minutes)} 分钟`
}

function fmtDate(ms) {
  if (!ms) return ''
  const date = new Date(ms)
  const diff = Date.now() - ms
  if (diff < 60 * 1000) return '刚刚'
  if (diff < 60 * 60 * 1000) return `${Math.floor(diff / 60000)} 分钟前`
  if (diff < 24 * 60 * 60 * 1000) return `${Math.floor(diff / 3600000)} 小时前`
  if (diff < 7 * 24 * 60 * 60 * 1000) return `${Math.floor(diff / 86400000)} 天前`
  return `${date.getMonth() + 1} 月 ${date.getDate()} 日`
}

function initialOf(title) {
  const text = String(title || '').trim()
  const match = text.match(/[A-Za-z\u3400-\u9fff]/)
  return match ? match[0].toUpperCase() : '♫'
}

function shortPath(folder) {
  const parts = String(folder).split('/').filter(Boolean)
  if (parts.length <= 2) return `/${parts.join('/')}`
  return `${parts.slice(-2).join('/')}`
}

function Cover({ item, size = 44, className = '' }) {
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

function jobLabel(job) {
  const pct = job.progress?.percent
  const chunk = job.chunks?.total ? ` · ${job.chunks.done}/${job.chunks.total} 块` : ''
  if (job.status === 'done') return `完成${job.lineCount ? ` · ${job.lineCount} 行` : ''}${job.language ? ` · ${job.language}` : ''}`
  if (job.status === 'error' || job.status === 'interrupted') return job.error || '失败'
  if (job.status === 'cancelled') return job.error || '已取消'
  if (job.status === 'queued') return '排队中'
  const stage =
    job.stage === 'merging'
      ? '合并字幕'
      : job.stage === 'preparing'
        ? '准备音频'
        : job.stage === 'cancelling'
          ? '正在取消'
          : '转写中'
  return `${stage}${pct != null ? ` ${pct}%` : ''}${chunk}`
}

function Icon({ name, size = 18 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'play':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z" />
        </svg>
      )
    case 'pause':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <rect x="7" y="5" width="3.4" height="14" rx="1" />
          <rect x="13.6" y="5" width="3.4" height="14" rx="1" />
        </svg>
      )
    case 'prev':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z" />
          <path d="M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z" />
        </svg>
      )
    case 'next':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z" />
          <path d="M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z" />
        </svg>
      )
    case 'plus':
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      )
    case 'search':
      return (
        <svg {...common}>
          <circle cx="10.5" cy="10.5" r="6" />
          <path d="m15 15 4 4" />
        </svg>
      )
    case 'folder':
      return (
        <svg {...common}>
          <path d="M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z" />
        </svg>
      )
    case 'volume':
      return (
        <svg {...common}>
          <path d="M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z" fill="currentColor" stroke="none" />
          <path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />
        </svg>
      )
    case 'mute':
      return (
        <svg {...common}>
          <path d="M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z" fill="currentColor" stroke="none" />
          <path d="m16 9.5 5 5M21 9.5l-5 5" />
        </svg>
      )
    case 'tasks':
      return (
        <svg {...common}>
          <path d="M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12" />
        </svg>
      )
    case 'check':
      return (
        <svg {...common}>
          <path d="m5 12.5 4.5 4.5L19 7" />
        </svg>
      )
    case 'wave':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <rect x="4" y="10" width="2" height="4" rx="1" />
          <rect x="8" y="7" width="2" height="10" rx="1" />
          <rect x="12" y="4" width="2" height="16" rx="1" />
          <rect x="16" y="8" width="2" height="8" rx="1" />
          <rect x="20" y="11" width="2" height="2" rx="1" />
        </svg>
      )
    case 'chevron-left':
      return (
        <svg {...common}>
          <path d="m14.5 6-6 6 6 6" />
        </svg>
      )
    case 'chevron-right':
      return (
        <svg {...common}>
          <path d="m9.5 6 6 6-6 6" />
        </svg>
      )
    default:
      return null
  }
}

function AddFolderDialog({ onSubmit, onPick, onClose }) {
  const [value, setValue] = useState('')
  const [busy, setBusy] = useState(false)
  const [busyPick, setBusyPick] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

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
        onClose()
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setBusyPick(false)
    }
  }

  const submit = async (event) => {
    event.preventDefault()
    if (!value.trim() || busy) return
    setBusy(true)
    setError('')
    try {
      await onSubmit(value.trim())
      onClose()
    } catch (err) {
      setError(err.message)
      setBusy(false)
    }
  }

  return (
    <div className="overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <form className="dialog" onSubmit={submit}>
        <h2>添加文件夹</h2>
        <p className="dialog-hint">
          Podwave 只读取音频文件，不会移动或修改它们。也可以直接把音频文件拖进面板。
        </p>
        <div className="dialog-actions">
          <button type="button" className="btn ghost" onClick={onClose}>取消</button>
          <button type="button" className="btn primary" onClick={pick} disabled={busyPick} autoFocus>
            {busyPick ? '打开选择器…' : '选择文件夹…'}
          </button>
        </div>
        <div className="path-row">
          <input
            ref={inputRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="或手动输入路径，例如 ~/Music/播客"
            spellCheck={false}
          />
          <button type="submit" className="btn ghost" disabled={busy || !value.trim()}>
            {busy ? '读取中…' : '添加'}
          </button>
        </div>
        {error ? <div className="dialog-error">{error}</div> : null}
      </form>
    </div>
  )
}

function TranscriptPanel({ transcript, status, progress, stage, chunks, queued, elapsed, error, position, onSeek, onClose, onStart, onCancel, target, job, onChangeTarget, onOpenSettings, inline = false, editingId = null, draft = '', onDraftChange, onEditLine, onSaveLine, onCancelEdit, onSplitLine, onMergeLine, onUndo, onValidate, issues = [] }) {
  const bodyRef = useRef(null)
  const editRef = useRef(null)
  const activeIndex = transcript?.lines?.findIndex((line) => position >= line.start && position < line.end) ?? -1

  useEffect(() => {
    if (activeIndex < 0 || !bodyRef.current) return
    const row = bodyRef.current.querySelector(`[data-seg="${activeIndex}"]`)
    row?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex])

  const running = status === 'queued' || status === 'running'

  return (
    <section className={`transcript-panel ${inline ? 'inline' : ''}`}>
      <header className="transcript-head">
        <h3>字幕</h3>
        {transcript ? (
          <span className="transcript-meta">
            {transcript.language || '未知语言'} · {transcript.lines.length} 行
            {transcript.speakers?.length ? ` · ${transcript.speakers.length} 位说话人` : ''}
          </span>
        ) : null}
        <div className="transcript-actions">
          <select className="tr-select" value={target} onChange={(event) => onChangeTarget(event.target.value)} title="字幕对照">
            <option value="">对照</option>
            <option value="zh">中文对照</option>
            <option value="en">English</option>
          </select>
          <button className="mini-link" onClick={onOpenSettings}>设置</button>
          {transcript ? (
            <>
              <button className="mini-link" onClick={onUndo} title="撤销上一步编辑">撤销</button>
              <button className="mini-link" onClick={onValidate} title="导出前检查字幕">校验</button>
              <a className="mini-link" href={`${API}/episodes/${transcript.id}/transcript/export?format=srt`} download>SRT</a>
              <a className="mini-link" href={`${API}/episodes/${transcript.id}/transcript/export?format=md`} download>Markdown</a>
            </>
          ) : null}
          {inline ? null : <button className="transcript-close" onClick={onClose} title="收起">×</button>}
        </div>
      </header>
      <div className="transcript-body" ref={bodyRef}>
        {transcript && issues?.length ? (
          <div className="tr-issues">
            {issues.slice(0, 5).map((issue) => <div key={issue}>· {issue}</div>)}
            {issues.length > 5 ? <div>…共 {issues.length} 条</div> : null}
          </div>
        ) : null}
        {job?.status === 'running' ? <div className="tr-running">翻译中…</div> : null}
        {job?.status === 'error' ? <div className="tr-running err">{job.error}</div> : null}
        {transcript ? (
          transcript.lines.map((line, index) => (
            <div
              key={line.id}
              data-seg={index}
              className={`seg-row ${index === activeIndex ? 'active' : ''} ${editingId === line.id ? 'is-editing' : ''}`}
              onClick={() => onSeek(line.start)}
            >
              <span className="seg-time">{fmtTime(line.start)}</span>
              {editingId === line.id ? (
                <span className="seg-edit" onClick={(event) => event.stopPropagation()}>
                  <textarea
                    ref={editRef}
                    value={draft}
                    rows={Math.min(4, Math.max(2, Math.ceil((draft.length || 1) / 40)))}
                    onChange={(event) => onDraftChange(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) onSaveLine(line.id)
                      if (event.key === 'Escape') onCancelEdit()
                    }}
                  />
                  <span className="seg-edit-actions">
                    <button className="seg-tool" onClick={() => onSaveLine(line.id)}>保存</button>
                    <button className="seg-tool" onClick={() => onSplitLine(line.id, editRef.current?.selectionStart ?? Math.floor(draft.length / 2))}>拆分</button>
                    <button className="seg-tool" onClick={onCancelEdit}>取消</button>
                  </span>
                </span>
              ) : (
                <>
                  {line.speaker != null ? (
                    <span className={`seg-speaker spk-${line.speaker % 5}`}>{transcript.speakers?.[line.speaker]?.label || `说话人 ${line.speaker + 1}`}</span>
                  ) : null}
                  <span className="seg-text">
                    {line.text}
                    {line.translations?.[target] ? <span className="seg-trans">{line.translations[target]}</span> : null}
                  </span>
                  <span className="seg-tools">
                    <button className="seg-tool" title="编辑这一行" onClick={(event) => { event.stopPropagation(); onEditLine(line) }}>✎</button>
                    {index < transcript.lines.length - 1 ? (
                      <button className="seg-tool" title="与下一行合并" onClick={(event) => { event.stopPropagation(); onMergeLine(line.id) }}>⇣</button>
                    ) : null}
                  </span>
                </>
              )}
            </div>
          ))
        ) : running ? (
          <div className="transcript-status">
            {status === 'queued' ? '排队中…' : stage === 'merging' ? '正在合并字幕…' : stage === 'preparing' ? '正在准备音频…' : '正在转写…'}
            {progress?.percent != null ? ` ${progress.percent}%` : ''}
            {chunks?.total ? ` · 第 ${Math.min(chunks.done + 1, chunks.total)}/${chunks.total} 块` : ''}
            {' · 已用 ' + Math.round((elapsed || 0) / 1000) + ' 秒'}
            {progress?.percent != null ? <span className="tx-progress"><span style={{ width: `${progress.percent}%` }} /></span> : null}
            <br />
            <span className="tx-hint">长播客会自动切块转写；关掉面板也会继续跑，可在「任务」里看进度。</span>
            <br />
            {onCancel ? <button className="btn ghost" style={{ marginTop: 10 }} onClick={onCancel}>取消转写</button> : null}
          </div>
        ) : error ? (
          <div className="transcript-status">
            <span className="err">{error}</span>
            <br />
            <button className="btn ghost" style={{ marginTop: 10 }} onClick={onStart}>重试</button>
          </div>
        ) : (
          <div className="transcript-status">
            还没有转写这一集。
            <br />
            <button className="btn primary" style={{ marginTop: 10 }} onClick={onStart}>开始转写</button>
          </div>
        )}
      </div>
    </section>
  )
}

function TranslateSettingsDialog({ config, onClose, onSave }) {
  const [provider, setProvider] = useState(config?.provider || 'api')
  const [apiKey, setApiKey] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const submit = async (event) => {
    event.preventDefault()
    setBusy(true)
    setError('')
    try {
      await onSave({ provider, apiKey: apiKey || undefined })
    } catch (err) {
      setError(err.message)
      setBusy(false)
    }
  }

  return (
    <div className="overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <form className="dialog" onSubmit={submit}>
        <h2>翻译设置</h2>
        <p className="dialog-hint">
          目标语言在字幕面板里选。API 走 DeepSeek，本地模型是 {config?.localModel || 'Qwen3-8B-4bit'}。
        </p>
        <label className="field">
          <span>翻译引擎</span>
          <select value={provider} onChange={(event) => setProvider(event.target.value)}>
            <option value="api">DeepSeek API</option>
            <option value="local">本地模型</option>
          </select>
        </label>
        {provider === 'api' ? (
          <label className="field">
            <span>API Key</span>
            <input
              type="password"
              value={apiKey}
              onChange={(event) => setApiKey(event.target.value)}
              placeholder={config?.apiKeyMasked || 'sk-...'}
              spellCheck={false}
            />
          </label>
        ) : (
          <p className="dialog-hint">
            {config?.localReady ? '本地模型已就绪。' : '本地模型还在下载或未安装，完成后可用。'}
          </p>
        )}
        {error ? <div className="dialog-error">{error}</div> : null}
        <div className="dialog-actions">
          <button type="button" className="btn ghost" onClick={onClose}>取消</button>
          <button type="submit" className="btn primary" disabled={busy}>保存</button>
        </div>
      </form>
    </div>
  )
}

export default function App() {
  const [items, setItems] = useState([])
  const [folders, setFolders] = useState([])
  const [progress, setProgress] = useState({})
  const [scan, setScan] = useState({ running: false })
  const [settings, setSettings] = useState({ rate: 1, volume: 0.9, lastEpisodeId: null })
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('recent')
  const [view, setView] = useState('all')
  const [detailId, setDetailId] = useState(null)
  const [current, setCurrent] = useState(null)
  const [playing, setPlaying] = useState(false)
  const [position, setPosition] = useState(0)
  const [duration, setDuration] = useState(0)
  const [loading, setLoading] = useState(true)
  const [addOpen, setAddOpen] = useState(false)
  const [error, setError] = useState('')
  const [toast, setToast] = useState('')
  const [transcript, setTranscript] = useState(null)
  const [txStatus, setTxStatus] = useState('none')
  const [txElapsed, setTxElapsed] = useState(0)
  const [txError, setTxError] = useState('')
  const [subsOpen, setSubsOpen] = useState(false)
  const [trConfig, setTrConfig] = useState(null)
  const [trTarget, setTrTarget] = useState('')
  const [trJob, setTrJob] = useState({ status: 'none' })
  const [trSettingsOpen, setTrSettingsOpen] = useState(false)
  const [navCollapsed, setNavCollapsed] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [txInfo, setTxInfo] = useState(null)
  const [jobsOpen, setJobsOpen] = useState(false)
  const [jobs, setJobs] = useState([])
  const [batchMode, setBatchMode] = useState(false)
  const [selected, setSelected] = useState([])
  const [editingLineId, setEditingLineId] = useState(null)
  const [draftText, setDraftText] = useState('')
  const [txIssues, setTxIssues] = useState([])

  const audioRef = useRef(null)
  const currentRef = useRef(null)
  const durationRef = useRef(0)
  const settingsRef = useRef(settings)
  const pendingSeekRef = useRef(0)
  const lastSaveRef = useRef(0)
  const toastedRef = useRef(0)
  const restoredRef = useRef(false)

  useEffect(() => { settingsRef.current = settings }, [settings])
  useEffect(() => { currentRef.current = current }, [current])
  useEffect(() => { durationRef.current = duration }, [duration])

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const cfg = await getJSON(`${API}/ui-settings`)
        if (!cancelled && cfg) setNavCollapsed(Boolean(cfg.sidebarCollapsed))
      } catch {
        /* 旧版本没有这个接口时保持默认展开 */
      }
    })()
    return () => { cancelled = true }
  }, [])

  const toggleNav = useCallback(() => {
    setNavCollapsed((prev) => {
      const next = !prev
      fetch(`${API}/ui-settings`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ sidebarCollapsed: next }),
      }).catch(() => {})
      return next
    })
  }, [])

  const flash = useCallback((message) => {
    setToast(message)
    window.clearTimeout(toastedRef.current)
    toastedRef.current = window.setTimeout(() => setToast(''), 2600)
  }, [])

  const loadLibrary = useCallback(async () => {
    const data = await getJSON(`${API}/episodes`)
    setItems(data.items || [])
    setFolders(data.folders || [])
    setProgress(data.progress || {})
    setScan(data.scan || { running: false })
    return data
  }, [])

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const state = await getJSON(`${API}/state`)
        if (cancelled) return
        setSettings(state.settings)
        setFolders(state.folders || [])
        const data = await loadLibrary()
        if (cancelled) return
        const lastId = state.settings?.lastEpisodeId
        const last = lastId ? (data.items || []).find((item) => item.id === lastId) : null
        if (last) {
          setCurrent(last)
          setDuration(last.duration || 0)
          const saved = data.progress?.[last.id]?.position || 0
          pendingSeekRef.current = saved > 5 ? saved : 0
          setPosition(pendingSeekRef.current)
          const audio = audioRef.current
          if (audio) {
            audio.src = `${API}/episodes/${last.id}/audio`
            audio.load()
            audio.playbackRate = state.settings?.rate || 1
            audio.volume = state.settings?.volume ?? 0.9
          }
        }
        setLoading(false)
        restoredRef.current = true
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      }
    })()
    return () => { cancelled = true }
  }, [loadLibrary])

  useEffect(() => {
    if (!scan.running) return
    const timer = setInterval(() => { loadLibrary().catch(() => {}) }, 1500)
    return () => clearInterval(timer)
  }, [scan.running, loadLibrary])

  useEffect(() => {
    let cancelled = false
    setTranscript(null)
    setTxError('')
    setTxElapsed(0)
    if (!current?.id) {
      setTxStatus('none')
      return () => { cancelled = true }
    }
    ;(async () => {
      try {
        const state = await getJSON(`${API}/episodes/${current.id}/transcript`)
        if (cancelled) return
        setTxStatus(state.status)
        setTxInfo(state.status === 'queued' || state.status === 'running' ? state : null)
        if (state.status === 'done' && state.transcript) {
          setTranscript(state.transcript)
        } else if (state.status === 'queued' || state.status === 'running') {
          setTxElapsed(state.elapsedMs || 0)
        } else if (state.status === 'error') {
          setTxError(state.error || '转写失败')
        }
      } catch (err) {
        if (!cancelled) setTxError(err.message)
      }
    })()
    return () => { cancelled = true }
  }, [current?.id])

  useEffect(() => {
    getJSON(`${API}/translate/settings`).then(setTrConfig).catch(() => {})
  }, [])

  useEffect(() => {
    if (txStatus !== 'queued' && txStatus !== 'running') return
    let cancelled = false
    const timer = setInterval(async () => {
      const id = currentRef.current?.id
      if (!id) return
      try {
        const state = await getJSON(`${API}/episodes/${id}/transcript`)
        if (cancelled) return
        setTxStatus(state.status)
        setTxInfo(state.status === 'queued' || state.status === 'running' ? state : null)
        setTxElapsed(state.elapsedMs || 0)
        if (state.status === 'done' && state.transcript) {
          setTranscript(state.transcript)
          setSubsOpen(true)
          flash('转写完成')
        } else if (state.status === 'error') {
          setTxError(state.error || '转写失败')
        }
      } catch {
        /* 轮询失败时继续等下一次 */
      }
    }, 2000)
    return () => { cancelled = true; clearInterval(timer) }
  }, [txStatus, flash])

  useEffect(() => {
    if (trJob.status !== 'running') return
    let cancelled = false
    const timer = setInterval(async () => {
      const id = currentRef.current?.id
      if (!id) return
      try {
        const state = await getJSON(`${API}/episodes/${id}/translate?target=${trTarget}`)
        if (cancelled) return
        setTrJob(state)
        if (state.status === 'done') {
          const fresh = await getJSON(`${API}/episodes/${id}/transcript`)
          if (!cancelled && fresh.transcript) setTranscript(fresh.transcript)
          flash('翻译完成')
        }
      } catch {
        /* 忽略轮询错误 */
      }
    }, 2000)
    return () => { cancelled = true; clearInterval(timer) }
  }, [trJob.status, trTarget, flash])

  useEffect(() => {
    let cancelled = false
    const refresh = async () => {
      try {
        const data = await getJSON(`${API}/jobs`)
        if (!cancelled) setJobs(data.items || [])
      } catch {
        /* 忽略轮询错误 */
      }
    }
    refresh()
    const timer = setInterval(refresh, 2500)
    return () => { cancelled = true; clearInterval(timer) }
  }, [])

  const saveProgress = useCallback((id, pos, dur, immediate = false) => {
    if (!id) return
    const now = Date.now()
    if (!immediate && now - lastSaveRef.current < 4000) return
    lastSaveRef.current = now
    sendJSON(`${API}/progress/${id}`, 'PUT', { position: pos, duration: dur }).catch(() => {})
    setProgress((prev) => ({ ...prev, [id]: { position: pos, duration: dur, updatedAt: now } }))
  }, [])

  const patchSettings = useCallback((patch) => {
    setSettings((prev) => ({ ...prev, ...patch }))
    sendJSON(`${API}/settings`, 'PATCH', patch).catch(() => {})
  }, [])

  const startTranscript = useCallback(async () => {
    if (!currentRef.current) return
    setTxError('')
    setSubsOpen(true)
    try {
      const res = await sendJSON(`${API}/episodes/${currentRef.current.id}/transcribe`, 'POST', {})
      setTxStatus(res.status || 'queued')
    } catch (err) {
      setTxError(err.message)
    }
  }, [])

  const toggleSubs = useCallback(() => {
    if (transcript) {
      setSubsOpen((value) => !value)
      return
    }
    if (txStatus === 'queued' || txStatus === 'running') {
      setSubsOpen(true)
      return
    }
    startTranscript()
  }, [transcript, txStatus, startTranscript])

  const cancelTranscript = useCallback(async () => {
    if (!currentRef.current) return
    try {
      await sendJSON(`${API}/episodes/${currentRef.current.id}/transcribe/cancel`, 'POST', {})
      flash('正在取消转写…')
    } catch (err) {
      setTxError(err.message)
    }
  }, [flash])

  const jobAction = useCallback(async (job, action) => {
    try {
      if (action === 'cancel') await sendJSON(`${API}/episodes/${job.episodeId}/transcribe/cancel`, 'POST', {})
      else if (action === 'retry') await sendJSON(`${API}/episodes/${job.episodeId}/transcribe`, 'POST', { resume: true })
      else if (action === 'clear') await sendJSON(`${API}/jobs`, 'DELETE', { key: job.key })
    } catch {
      /* 刷新列表即可看到最新状态 */
    }
    const data = await getJSON(`${API}/jobs`).catch(() => ({ items: [] }))
    setJobs(data.items || [])
  }, [])

  const submitBatch = useCallback(async (ids) => {
    const unique = [...new Set(ids)]
    if (!unique.length) return
    try {
      const res = await sendJSON(`${API}/transcribe/batch`, 'POST', { ids: unique })
      flash(`已排队 ${res.queued} 集${res.skipped ? `，跳过 ${res.skipped} 集` : ''}${res.errors?.length ? `，失败 ${res.errors.length} 集` : ''}`)
      setSelected([])
      setBatchMode(false)
    } catch (err) {
      flash(err.message)
    }
  }, [flash])

  const toggleSelected = useCallback((id) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]))
  }, [])

  const transcriptMutate = useCallback(async (path, method, body) => {
    try {
      const data = await sendJSON(`${API}${path}`, method, body || {})
      if (data?.transcript) setTranscript(data.transcript)
      return data
    } catch (err) {
      flash(err.message)
      return null
    }
  }, [flash])

  const editLine = useCallback((line) => {
    setEditingLineId(line.id)
    setDraftText(line.text)
    setTxIssues([])
  }, [])

  const saveLine = useCallback(async (lineId) => {
    if (!transcript) return
    const data = await transcriptMutate(`/episodes/${transcript.id}/transcript/lines/${lineId ?? editingLineId}`, 'PUT', { text: draftText })
    if (data) {
      setEditingLineId(null)
      flash('这一行已保存')
    }
  }, [transcript, editingLineId, draftText, transcriptMutate, flash])

  const splitLine = useCallback(async (lineId, offset) => {
    if (!transcript) return
    const data = await transcriptMutate(`/episodes/${transcript.id}/transcript/lines/${lineId ?? editingLineId}/split`, 'POST', { offset })
    if (data) {
      setEditingLineId(null)
      flash('已拆成两行')
    }
  }, [transcript, editingLineId, transcriptMutate, flash])

  const mergeLine = useCallback(async (lineId) => {
    if (!transcript) return
    const data = await transcriptMutate(`/episodes/${transcript.id}/transcript/lines/${lineId}/merge`, 'POST', {})
    if (data) flash('已与下一行合并')
  }, [transcript, transcriptMutate, flash])

  const undoTranscript = useCallback(async () => {
    if (!transcript) return
    const data = await transcriptMutate(`/episodes/${transcript.id}/transcript/undo`, 'POST', {})
    if (data) flash('已撤销上一步')
  }, [transcript, transcriptMutate, flash])

  const validateTx = useCallback(async () => {
    if (!transcript) return
    try {
      const data = await getJSON(`${API}/episodes/${transcript.id}/transcript/validate`)
      setTxIssues(data.issues || [])
      flash(data.ok ? '字幕校验通过' : `发现 ${(data.issues || []).length} 个问题`)
    } catch (err) {
      flash(err.message)
    }
  }, [transcript, flash])

  const refreshTranscript = useCallback(async () => {
    const id = currentRef.current?.id
    if (!id) return
    const fresh = await getJSON(`${API}/episodes/${id}/transcript`)
    if (fresh.transcript) setTranscript(fresh.transcript)
  }, [])

  const startTranslate = useCallback(async (target) => {
    if (!currentRef.current?.id) return
    setTrJob({ status: 'running' })
    try {
      const res = await sendJSON(`${API}/episodes/${currentRef.current.id}/translate`, 'POST', { target })
      setTrJob(res)
      if (res.status === 'done') {
        await refreshTranscript()
        flash('翻译完成')
      }
    } catch (err) {
      setTrJob({ status: 'error', error: err.message })
    }
  }, [refreshTranscript, flash])

  const changeTarget = useCallback(async (value) => {
    setTrTarget(value)
    if (!value) return
    const existing = transcript?.lines?.some((line) => line.translations?.[value])
    if (existing) {
      setTrJob({ status: 'done' })
      await refreshTranscript()
      return
    }
    await startTranslate(value)
  }, [transcript, startTranslate, refreshTranscript])

  const ordered = useMemo(() => {
    const list = [...items]
    if (sort === 'title') list.sort((a, b) => a.title.localeCompare(b.title, 'zh-Hans-CN'))
    else if (sort === 'duration') list.sort((a, b) => (b.duration || 0) - (a.duration || 0))
    else list.sort((a, b) => b.mtime - a.mtime)
    return list
  }, [items, sort])

  const visible = useMemo(() => {
    const text = query.trim().toLowerCase()
    return ordered.filter((item) => {
      if (text && !`${item.title} ${item.artist} ${item.album}`.toLowerCase().includes(text)) return false
      const saved = progress[item.id]
      const pos = saved?.position || 0
      const total = item.duration || 0
      const ratio = total ? pos / total : 0
      if (view === 'inprogress') return pos > 5 && ratio < 0.97
      if (view === 'finished') return ratio >= 0.97
      return true
    })
  }, [ordered, query, view, progress])

  const activeJobs = useMemo(() => jobs.filter((job) => job.status === 'queued' || job.status === 'running'), [jobs])
  const unTranscribed = useMemo(() => visible.filter((item) => !item.hasTranscript), [visible])

  const continueList = useMemo(() => {
    return items
      .filter((item) => {
        const saved = progress[item.id]
        if (!saved || !saved.position || saved.position < 5) return false
        return item.duration ? saved.position / item.duration < 0.97 : true
      })
      .sort((a, b) => (progress[b.id]?.updatedAt || 0) - (progress[a.id]?.updatedAt || 0))
      .slice(0, 4)
  }, [items, progress])

  const totalSeconds = useMemo(() => items.reduce((sum, item) => sum + (item.duration || 0), 0), [items])
  const totalHours = Math.round((totalSeconds / 3600) * 10) / 10

  const viewTitle = view === 'inprogress' ? '继续收听' : view === 'finished' ? '已播完' : '全部单集'
  const detailItem = detailId ? (items.find((item) => item.id === detailId) || (current?.id === detailId ? current : null)) : null
  const subline = loading
    ? '正在读取媒体库…'
    : scan.running
      ? '正在扫描文件夹…'
      : `${visible.length} 集 · 共 ${totalHours} 小时 · ${folders.length} 个文件夹`

  const currentIndex = useMemo(() => {
    if (!current) return -1
    return ordered.findIndex((item) => item.id === current.id)
  }, [ordered, current])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (!currentRef.current) {
      const first = visible[0] || ordered[0]
      if (first) selectEpisode(first, true)
      return
    }
    if (audio.paused) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }, [visible, ordered])

  const selectEpisode = useCallback((item, autoplay = true) => {
    const audio = audioRef.current
    if (!audio || !item) return
    if (currentRef.current && currentRef.current.id === item.id) {
      if (autoplay) togglePlay()
      return
    }
    if (currentRef.current && !audio.ended && audio.currentTime > 1) {
      saveProgress(currentRef.current.id, audio.currentTime, audio.duration || durationRef.current, true)
    }
    currentRef.current = item
    setCurrent(item)
    setDetailId((prev) => (prev ? item.id : prev))
    setDuration(item.duration || 0)
    const saved = progress[item.id]?.position || 0
    const resume = saved > 5 && (!item.duration || saved < item.duration - 10) ? saved : 0
    pendingSeekRef.current = resume
    setPosition(resume)
    audio.src = `${API}/episodes/${item.id}/audio`
    audio.load()
    audio.playbackRate = settingsRef.current.rate || 1
    audio.volume = settingsRef.current.volume ?? 0.9
    if (autoplay) audio.play().catch(() => {})
    patchSettings({ lastEpisodeId: item.id })
  }, [progress, saveProgress, patchSettings, togglePlay])

  const openEpisode = useCallback((item, autoplay = true) => {
    if (!item) return
    selectEpisode(item, autoplay)
    setDetailId(item.id)
  }, [selectEpisode])

  const seekTo = useCallback((value) => {
    const audio = audioRef.current
    if (!audio || !currentRef.current) return
    const target = Math.max(0, Math.min(value, audio.duration || value))
    audio.currentTime = target
    setPosition(target)
    saveProgress(currentRef.current.id, target, audio.duration || durationRef.current, true)
  }, [saveProgress])

  const skip = useCallback((delta) => {
    const audio = audioRef.current
    if (!audio || !currentRef.current) return
    const next = Math.max(0, Math.min((audio.currentTime || 0) + delta, (audio.duration || durationRef.current || 0) - 1))
    audio.currentTime = next
    setPosition(next)
  }, [])

  const stepEpisode = useCallback((direction) => {
    if (!ordered.length) return
    const index = currentRef.current ? ordered.findIndex((item) => item.id === currentRef.current.id) : -1
    const nextIndex = (index + direction + ordered.length) % ordered.length
    selectEpisode(ordered[nextIndex], true)
  }, [ordered, selectEpisode])

  const cycleRate = useCallback(() => {
    const index = SPEEDS.indexOf(settingsRef.current.rate)
    const next = SPEEDS[(index + 1) % SPEEDS.length]
    const audio = audioRef.current
    if (audio) audio.playbackRate = next
    patchSettings({ rate: next })
  }, [patchSettings])

  const changeVolume = useCallback((value) => {
    const volume = Math.max(0, Math.min(1, value))
    const audio = audioRef.current
    if (audio) audio.volume = volume
    patchSettings({ volume })
  }, [patchSettings])

  const toggleMute = useCallback(() => {
    const audio = audioRef.current
    const volume = settingsRef.current.volume > 0 ? 0 : 0.9
    if (audio) audio.volume = volume
    patchSettings({ volume })
  }, [patchSettings])

  const onTimeUpdate = () => {
    const audio = audioRef.current
    if (!audio || !currentRef.current) return
    setPosition(audio.currentTime)
    saveProgress(currentRef.current.id, audio.currentTime, audio.duration || durationRef.current)
  }

  const onLoadedMetadata = () => {
    const audio = audioRef.current
    const item = currentRef.current
    if (!audio || !item) return
    const total = Number.isFinite(audio.duration) ? audio.duration : item.duration || 0
    setDuration(total)
    const seekToValue = pendingSeekRef.current
    pendingSeekRef.current = 0
    if (seekToValue > 0 && seekToValue < total - 1) {
      audio.currentTime = seekToValue
      setPosition(seekToValue)
    }
  }

  const onEnded = () => {
    const audio = audioRef.current
    if (currentRef.current) {
      saveProgress(currentRef.current.id, audio?.duration || durationRef.current || 0, audio?.duration || durationRef.current || 0, true)
    }
    stepEpisode(1)
  }

  const addFolder = async (folderPath) => {
    await sendJSON(`${API}/folders`, 'POST', { path: folderPath })
    await loadLibrary()
    flash('已添加文件夹，正在扫描')
  }

  const pickFolder = async () => {
    const res = await fetch(`${API}/pick-folder`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{}' })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) throw new Error(data.error || '打开系统选择器失败')
    return data
  }

  const onDragOver = (event) => {
    if (![...(event.dataTransfer?.types || [])].includes('Files')) return
    event.preventDefault()
    if (!dragging) setDragging(true)
  }

  const onDragLeave = (event) => {
    if (event.currentTarget.contains(event.relatedTarget)) return
    setDragging(false)
  }

  const onDrop = async (event) => {
    event.preventDefault()
    setDragging(false)
    const dataTransfer = event.dataTransfer
    const files = [...(dataTransfer?.files || [])]
    const paths = files.map((file) => file.path).filter((item) => typeof item === 'string' && item)
    const uriPaths = String(dataTransfer?.getData('text/uri-list') || '')
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line.startsWith('file://'))
      .map((line) => decodeURIComponent(line.replace(/^file:\/\//, '')))
    const direct = [...new Set([...paths, ...uriPaths])]
    if (direct.length) {
      try {
        const result = await sendJSON(`${API}/import/paths`, 'POST', { paths: direct })
        await loadLibrary()
        flash(result.added ? `已添加 ${result.added} 个文件夹` : '这些文件夹已经在媒体库里了')
      } catch (err) {
        setError(err.message)
      }
      return
    }
    const audioFiles = files.filter((file) => file.size > 0)
    if (!audioFiles.length) {
      flash('拖进来的是文件夹，请用「选择文件夹」')
      return
    }
    const batch = `drop-${Date.now()}`
    let folder = ''
    let ok = 0
    for (const file of audioFiles) {
      try {
        const res = await fetch(`${API}/import/upload?name=${encodeURIComponent(file.name)}&batch=${batch}`, { method: 'POST', body: file })
        const data = await res.json()
        if (res.ok) {
          folder = data.folder || folder
          ok += 1
        }
      } catch {
        /* 单个文件失败不影响其它文件 */
      }
    }
    if (folder) {
      try {
        await sendJSON(`${API}/folders`, 'POST', { path: folder })
      } catch {
        /* 同一天的重复导入会返回 409 */
      }
    }
    await loadLibrary()
    flash(ok ? `已导入 ${ok} 个音频` : '导入失败，请重试')
  }

  const removeFolder = async (folderPath) => {
    if (!window.confirm(`从媒体库移除这个文件夹？\n${folderPath}\n\n不会删除你的文件。`)) return
    try {
      await sendJSON(`${API}/folders`, 'DELETE', { path: folderPath })
      await loadLibrary()
      flash('已移除文件夹')
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    const onKey = (event) => {
      const tag = event.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
      if (event.metaKey || event.ctrlKey || event.altKey) return
      if (event.code === 'Space') { event.preventDefault(); togglePlay() }
      else if (event.key === 'ArrowRight') { event.preventDefault(); skip(15) }
      else if (event.key === 'ArrowLeft') { event.preventDefault(); skip(-15) }
      else if (event.key === 'ArrowUp') { event.preventDefault(); changeVolume(settingsRef.current.volume + 0.05) }
      else if (event.key === 'ArrowDown') { event.preventDefault(); changeVolume(settingsRef.current.volume - 0.05) }
      else if (event.key === '/') { event.preventDefault(); document.querySelector('.search input')?.focus() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [togglePlay, skip, changeVolume])

  const isFinished = (item) => {
    const saved = progress[item.id]
    if (!saved || !item.duration) return false
    return saved.position / item.duration >= 0.97
  }

  const progressPct = (item) => {
    const saved = progress[item.id]
    if (!saved || !item.duration) return 0
    return Math.min(100, Math.max(0, (saved.position / item.duration) * 100))
  }

  return (
    <div
      className={`shell ${navCollapsed ? 'nav-collapsed' : ''}`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {dragging ? (
        <div className="drop-hint">
          <span>松开以添加音频</span>
          <span>文件夹请用「选择文件夹」</span>
        </div>
      ) : null}
      {navCollapsed ? (
        <button className="nav-reopen" title="展开侧边栏" onClick={toggleNav}>
          <Icon name="chevron-right" size={16} />
        </button>
      ) : null}
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark"><Icon name="wave" size={20} /></span>
          <span className="brand-name">Podwave</span>
          <span className="brand-version">0.6</span>
          <button className="icon-btn brand-collapse" title="收起侧边栏" onClick={toggleNav}>
            <Icon name="chevron-left" size={16} />
          </button>
        </div>

        <nav className="nav">
          {[
            ['all', '全部单集', items.length],
            ['inprogress', '继续收听', continueList.length],
            ['finished', '已播完', items.filter(isFinished).length],
          ].map(([key, label, count]) => (
            <button key={key} className={`nav-item ${view === key ? 'active' : ''}`} onClick={() => setView(key)}>
              <span>{label}</span>
              <span className="nav-count">{count || ''}</span>
            </button>
          ))}
        </nav>

        <div className="side-section">
          <div className="side-head">
            <span>文件夹</span>
            <button className="icon-btn" title="添加文件夹" onClick={() => setAddOpen(true)}>
              <Icon name="plus" size={16} />
            </button>
          </div>
          {folders.length === 0 ? (
            <p className="side-empty">还没有文件夹。<br />添加一个播客所在目录开始。</p>
          ) : (
            <ul className="folder-list">
              {folders.map((folder) => (
                <li key={folder} title={folder}>
                  <Icon name="folder" size={16} />
                  <span className="folder-name">{shortPath(folder)}</span>
                  <button className="folder-remove" title="移除" onClick={() => removeFolder(folder)}>×</button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="side-foot">
          <strong>本地播放</strong>
          <span>音频只从你的硬盘读取，不会上传。</span>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <h1>{viewTitle}</h1>
            <p className="subline">{subline}</p>
          </div>
          <div className="tools">
            <button className={`tool-btn ${jobsOpen ? 'is-on' : ''}`} onClick={() => setJobsOpen((value) => !value)} title="转写任务">
              <Icon name="tasks" size={16} />
              <span>任务{activeJobs.length ? ` ${activeJobs.length}` : ''}</span>
            </button>
            <button className={`tool-btn ${batchMode ? 'is-on' : ''}`} onClick={() => { setBatchMode((value) => !value); setSelected([]) }} title="批量选择">
              <Icon name="check" size={16} />
              <span>选择</span>
            </button>
            <label className="search">
              <Icon name="search" size={16} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索单集或节目" />
            </label>
            <select className="sort" value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="recent">最近添加</option>
              <option value="title">标题</option>
              <option value="duration">时长</option>
            </select>
          </div>
        </header>

        {batchMode ? (
          <div className="batch-bar">
            <span>已选 {selected.length} 集</span>
            <button className="btn ghost" onClick={() => setSelected(visible.map((item) => item.id))}>全选当前</button>
            <button className="btn ghost" disabled={!unTranscribed.length} onClick={() => submitBatch(unTranscribed.map((item) => item.id))}>
              转写未转写的 {unTranscribed.length} 集
            </button>
            <button className="btn primary" disabled={!selected.length} onClick={() => submitBatch(selected)}>转写选中</button>
            <button className="btn ghost" onClick={() => { setSelected([]); setBatchMode(false) }}>取消</button>
          </div>
        ) : null}

        {error ? (
          <div className="banner error" onClick={() => setError('')}>
            {error} <span className="banner-dismiss">知道了</span>
          </div>
        ) : null}

        {detailItem ? (
          <>
            <div className="detail-top">
              <button className="back-link" onClick={() => setDetailId(null)}>← 全部单集</button>
              <span className="detail-count">{detailItem.artist}{detailItem.album ? ` · ${detailItem.album}` : ''}</span>
            </div>
            <div className="episode-view">
              <div className="episode-left">
                <div className="episode-cover"><Cover item={detailItem} size={288} /></div>
                <h2 className="episode-title">{detailItem.title}</h2>
                <p className="episode-sub">{detailItem.artist}{detailItem.album ? ` · ${detailItem.album}` : ''}</p>
                <p className="episode-path" title={detailItem.file}>{detailItem.location || detailItem.file}</p>
                <p className="episode-stats">{fmtDuration(detailItem.duration)} · {fmtDate(detailItem.mtime)} · 已听 {Math.round(progressPct(detailItem))}%</p>
                <div className="episode-actions">
                  <button className="btn primary" onClick={togglePlay}>{playing && current?.id === detailItem.id ? '暂停' : '播放'}</button>
                  {txStatus === 'queued' || txStatus === 'running' ? (
                    <button className="btn ghost" onClick={cancelTranscript}>取消转写</button>
                  ) : (
                    <button className="btn ghost" onClick={startTranscript}>
                      {transcript ? '重新转写' : '转写字幕'}
                    </button>
                  )}
                </div>
              </div>
              <div className="episode-right">
                <TranscriptPanel
                  inline
                  transcript={transcript}
                  status={txStatus}
                  progress={txInfo?.progress}
                  stage={txInfo?.stage}
                  chunks={txInfo?.chunks}
                  queued={txInfo?.queued}
                  elapsed={txElapsed}
                  editingId={editingLineId}
                  draft={draftText}
                  onDraftChange={setDraftText}
                  onEditLine={editLine}
                  onSaveLine={saveLine}
                  onCancelEdit={() => setEditingLineId(null)}
                  onSplitLine={splitLine}
                  onMergeLine={mergeLine}
                  onUndo={undoTranscript}
                  onValidate={validateTx}
                  issues={txIssues}
                  onCancel={cancelTranscript}
                  error={txError}
                  position={position}
                  onSeek={seekTo}
                  onClose={() => setDetailId(null)}
                  onStart={startTranscript}
                  target={trTarget}
                  job={trJob}
                  onChangeTarget={changeTarget}
                  onOpenSettings={() => setTrSettingsOpen(true)}
                />
              </div>
            </div>
          </>
        ) : (
          <>
        {view === 'all' && !query && continueList.length > 0 ? (
          <section className="continue">
            <h2>接着听</h2>
            <div className="continue-row">
              {continueList.map((item) => {
                const pct = progressPct(item)
                return (
                  <button key={item.id} className={`continue-card ${current?.id === item.id ? 'is-current' : ''}`} onClick={() => openEpisode(item, true)}>
                    <Cover item={item} size={64} />
                    <div className="continue-text">
                      <div className="continue-title">{item.title}</div>
                      <div className="continue-meta">{item.artist}</div>
                      <div className="mini-track"><div style={{ width: `${pct}%` }} /></div>
                    </div>
                  </button>
                )
              })}
            </div>
          </section>
        ) : null}

        <section className="list-section">
          <div className="list-head">
            <span className="col-index">#</span>
            <span>单集</span>
            <span className="col-duration">时长</span>
            <span className="col-progress">进度</span>
          </div>

          {loading ? (
            <div className="empty">正在读取…</div>
          ) : visible.length === 0 ? (
            <div className="empty">
              <p>{items.length === 0 ? '媒体库还是空的' : '没有符合条件的单集'}</p>
              <p className="empty-hint">{items.length === 0 ? '添加一个存放播客音频的文件夹，Podwave 会自动列出所有单集。' : '换个关键词或切回全部单集。'}</p>
              {items.length === 0 ? <button className="btn primary" onClick={() => setAddOpen(true)}>添加文件夹</button> : null}
            </div>
          ) : (
            <div className="episode-list">
              {visible.map((item, index) => {
                const pct = progressPct(item)
                const active = current?.id === item.id
                return (
                  <button
                    key={item.id}
                    className={`row ${active ? 'is-current' : ''} ${isFinished(item) ? 'is-finished' : ''} ${batchMode && selected.includes(item.id) ? 'is-selected' : ''}`}
                    onClick={() => (batchMode ? toggleSelected(item.id) : openEpisode(item, true))}
                  >
                    <span className="col-index row-index">
                      {batchMode ? (
                        selected.includes(item.id) ? <span className="row-check"><Icon name="check" size={14} /></span> : null
                      ) : active && playing ? <span className="playing-bars"><i /><i /><i /></span> : index + 1}
                    </span>
                    <span className="row-main">
                      <Cover item={item} size={40} />
                      <span className="row-text">
                        <span className="row-title">{item.title}</span>
                        <span className="row-meta">
                          {item.artist}{item.album ? ` · ${item.album}` : ''} · {fmtDate(item.mtime)}
                          {item.hasTranscript ? <span className="row-badge">字幕</span> : null}
                        </span>
                      </span>
                    </span>
                    <span className="col-duration row-duration">{fmtDuration(item.duration)}</span>
                    <span className="col-progress row-progress">
                      {isFinished(item) ? <span className="finished-mark"><Icon name="check" size={14} /> 已播完</span> : pct > 0 ? <span className="mini-track"><span style={{ width: `${pct}%` }} /></span> : null}
                    </span>
                  </button>
                )
              })}
            </div>
          )}
        </section>
          </>
        )}
      </main>

      {subsOpen && current && !detailItem ? (
        <TranscriptPanel
          transcript={transcript}
          status={txStatus}
          progress={txInfo?.progress}
          stage={txInfo?.stage}
          chunks={txInfo?.chunks}
          queued={txInfo?.queued}
          elapsed={txElapsed}
          editingId={editingLineId}
          draft={draftText}
          onDraftChange={setDraftText}
          onEditLine={editLine}
          onSaveLine={saveLine}
          onCancelEdit={() => setEditingLineId(null)}
          onSplitLine={splitLine}
          onMergeLine={mergeLine}
          onUndo={undoTranscript}
          onValidate={validateTx}
          issues={txIssues}
          onCancel={cancelTranscript}
          error={txError}
          position={position}
          onSeek={seekTo}
          onClose={() => setSubsOpen(false)}
          onStart={startTranscript}
          target={trTarget}
          job={trJob}
          onChangeTarget={changeTarget}
          onOpenSettings={() => setTrSettingsOpen(true)}
        />
      ) : null}

      {jobsOpen ? (
        <section className="jobs-panel">
          <header className="jobs-head">
            <h3>转写任务</h3>
            <button className="mini-link" onClick={() => setJobsOpen(false)}>关闭</button>
          </header>
          <div className="jobs-body">
            {jobs.length === 0 ? (
              <p className="jobs-empty">还没有任务。点「转写字幕」，或在下面批量转写未转写的单集。</p>
            ) : (
              jobs.map((job) => (
                <div key={job.key} className={`job-row job-${job.status}`}>
                  <div className="job-main">
                    <span className="job-title">{job.episodeTitle || job.episodeId}</span>
                    <span className="job-meta">{jobLabel(job)}</span>
                    {job.status === 'running' && job.progress?.percent != null ? (
                      <span className="job-bar"><span style={{ width: `${job.progress.percent}%` }} /></span>
                    ) : null}
                  </div>
                  <div className="job-actions">
                    {job.status === 'queued' || job.status === 'running' ? <button className="mini-link" onClick={() => jobAction(job, 'cancel')}>取消</button> : null}
                    {job.status === 'error' || job.status === 'interrupted' || job.status === 'cancelled' ? <button className="mini-link" onClick={() => jobAction(job, 'retry')}>重试</button> : null}
                    {['done', 'error', 'cancelled', 'interrupted'].includes(job.status) ? <button className="mini-link" onClick={() => jobAction(job, 'clear')}>清除</button> : null}
                  </div>
                </div>
              ))
            )}
          </div>
          <footer className="jobs-foot">
            <button className="btn primary" disabled={!unTranscribed.length} onClick={() => submitBatch(unTranscribed.map((item) => item.id))}>
              转写当前视图未转写的 {unTranscribed.length} 集
            </button>
            <button className="btn ghost" disabled={!selected.length} onClick={() => submitBatch(selected)}>转写已选 {selected.length} 集</button>
          </footer>
        </section>
      ) : null}

      <footer className="player">
        <div className="seek-wrap">
          <div className="seek-track">
            <div className="seek-fill" style={{ width: `${duration ? Math.min(100, Math.max(0, (position / duration) * 100)) : 0}%` }} />
          </div>
          <input
            className="seek"
            type="range"
            min={0}
            max={duration || 0}
            step={0.05}
            value={Math.min(position, duration || 0)}
            onChange={(event) => seekTo(Number(event.target.value))}
            aria-label="播放进度"
          />
        </div>
        <div className="player-body">
          <div className="now">
            {current ? (
              <>
                <Cover item={current} size={48} />
                <div className="now-text">
                  <div className="now-title" title={current.title}>{current.title}</div>
                  <div className="now-artist">{current.artist}</div>
                </div>
              </>
            ) : (
              <div className="now-empty">选择一集开始播放</div>
            )}
          </div>

          <div className="transport">
            <button className="icon-btn" title="上一集" onClick={() => stepEpisode(-1)}><Icon name="prev" /></button>
            <button className="skip-btn" title="后退 15 秒" onClick={() => skip(-15)}>−15</button>
            <button className="play-btn" onClick={togglePlay} disabled={!current && visible.length === 0} title="播放/暂停 (空格)">
              <Icon name={playing ? 'pause' : 'play'} size={20} />
            </button>
            <button className="skip-btn" title="前进 15 秒" onClick={() => skip(15)}>+15</button>
            <button className="icon-btn" title="下一集" onClick={() => stepEpisode(1)}><Icon name="next" /></button>
          </div>

          <div className="player-right">
            <button
              className={`subs-btn ${subsOpen ? 'active' : ''}`}
              onClick={toggleSubs}
              disabled={!current}
              title="字幕与转写"
            >
              <Icon name="wave" size={15} />
              <span>{transcript ? '字幕' : txStatus === 'queued' || txStatus === 'running' ? '转写中' : '转写'}</span>
            </button>
            <span className="time">{fmtTime(position)} / {fmtTime(duration)}</span>
            <button className="rate-btn" onClick={cycleRate} title="播放速度">{settings.rate}×</button>
            <button className="icon-btn" onClick={toggleMute} title="静音">
              <Icon name={settings.volume > 0 ? 'volume' : 'mute'} />
            </button>
            <input
              className="volume"
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={settings.volume}
              onChange={(event) => changeVolume(Number(event.target.value))}
              aria-label="音量"
            />
          </div>
        </div>
      </footer>

      {addOpen ? <AddFolderDialog onClose={() => setAddOpen(false)} onSubmit={addFolder} onPick={pickFolder} /> : null}
      {trSettingsOpen ? (
        <TranslateSettingsDialog
          config={trConfig}
          onClose={() => setTrSettingsOpen(false)}
          onSave={async (patch) => {
            const config = await sendJSON(`${API}/translate/settings`, 'PUT', patch)
            setTrConfig(config)
            setTrSettingsOpen(false)
            flash('翻译设置已保存')
          }}
        />
      ) : null}
      {toast ? <div className="toast">{toast}</div> : null}

      <audio
        ref={audioRef}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => {
          setPlaying(false)
          const audio = audioRef.current
          if (currentRef.current && audio && audio.currentTime > 0 && !audio.ended) {
            saveProgress(currentRef.current.id, audio.currentTime, audio.duration || durationRef.current, true)
          }
        }}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
        onError={() => { setPlaying(false); flash('这个文件无法播放') }}
      />
    </div>
  )
}
