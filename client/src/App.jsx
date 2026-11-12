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
  return text ? text.charAt(0).toUpperCase() : '·'
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
    default:
      return null
  }
}

function AddFolderDialog({ onSubmit, onClose }) {
  const [value, setValue] = useState('')
  const [busy, setBusy] = useState(false)
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
        <p className="dialog-hint">Podwave 只读取这个文件夹里的音频文件，不会移动、上传或修改它们。</p>
        <input
          ref={inputRef}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="~/Music/播客 或 /Users/你/Downloads/节目"
          spellCheck={false}
        />
        {error ? <div className="dialog-error">{error}</div> : null}
        <div className="dialog-actions">
          <button type="button" className="btn ghost" onClick={onClose}>取消</button>
          <button type="submit" className="btn primary" disabled={busy || !value.trim()}>
            {busy ? '读取中…' : '添加'}
          </button>
        </div>
      </form>
    </div>
  )
}

function TranscriptPanel({ transcript, status, elapsed, error, position, onSeek, onClose, onStart, target, translations, job, onChangeTarget, onOpenSettings }) {
  const bodyRef = useRef(null)
  const activeIndex = transcript?.segments?.findIndex((seg) => position >= seg.start && position < seg.end) ?? -1

  useEffect(() => {
    if (activeIndex < 0 || !bodyRef.current) return
    const row = bodyRef.current.querySelector(`[data-seg="${activeIndex}"]`)
    row?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex])

  const running = status === 'queued' || status === 'running'

  return (
    <section className="transcript-panel">
      <header className="transcript-head">
        <h3>字幕</h3>
        {transcript ? (
          <span className="transcript-meta">
            {transcript.language || '未知语言'} · {transcript.segments.length} 行
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
              <a className="mini-link" href={`${API}/episodes/${transcript.id}/transcript/export?format=srt`} download>SRT</a>
              <a className="mini-link" href={`${API}/episodes/${transcript.id}/transcript/export?format=md`} download>Markdown</a>
            </>
          ) : null}
          <button className="transcript-close" onClick={onClose} title="收起">×</button>
        </div>
      </header>
      <div className="transcript-body" ref={bodyRef}>
        {job?.status === 'running' ? <div className="tr-running">翻译中…</div> : null}
        {job?.status === 'error' ? <div className="tr-running err">{job.error}</div> : null}
        {transcript ? (
          transcript.segments.map((seg, index) => (
            <button
              key={seg.id}
              data-seg={index}
              className={`seg-row ${index === activeIndex ? 'active' : ''}`}
              onClick={() => onSeek(seg.start)}
            >
              <span className="seg-time">{fmtTime(seg.start)}</span>
              <span className="seg-text">
                {seg.text}
                {translations?.[seg.id] ? <span className="seg-trans">{translations[seg.id]}</span> : null}
              </span>
            </button>
          ))
        ) : running ? (
          <div className="transcript-status">
            正在转写… 已用 {Math.round((elapsed || 0) / 1000)} 秒
            <br />
            长播客需要几分钟，先放着听也行，完成后会自动出现在这里。
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
    const existing = transcript?.translations?.[value]
    if (existing && Object.keys(existing).length) {
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
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark"><Icon name="wave" size={20} /></span>
          <span className="brand-name">Podwave</span>
          <span className="brand-version">0.2</span>
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

        {error ? (
          <div className="banner error" onClick={() => setError('')}>
            {error} <span className="banner-dismiss">知道了</span>
          </div>
        ) : null}

        {view === 'all' && !query && continueList.length > 0 ? (
          <section className="continue">
            <h2>接着听</h2>
            <div className="continue-row">
              {continueList.map((item) => {
                const pct = progressPct(item)
                return (
                  <button key={item.id} className={`continue-card ${current?.id === item.id ? 'is-current' : ''}`} onClick={() => selectEpisode(item, true)}>
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
                    className={`row ${active ? 'is-current' : ''} ${isFinished(item) ? 'is-finished' : ''}`}
                    onClick={() => selectEpisode(item, true)}
                  >
                    <span className="col-index row-index">
                      {active && playing ? <span className="playing-bars"><i /><i /><i /></span> : index + 1}
                    </span>
                    <span className="row-main">
                      <Cover item={item} size={40} />
                      <span className="row-text">
                        <span className="row-title">{item.title}</span>
                        <span className="row-meta">{item.artist}{item.album ? ` · ${item.album}` : ''} · {fmtDate(item.mtime)}</span>
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
      </main>

      {subsOpen && current ? (
        <TranscriptPanel
          transcript={transcript}
          status={txStatus}
          elapsed={txElapsed}
          error={txError}
          position={position}
          onSeek={seekTo}
          onClose={() => setSubsOpen(false)}
          onStart={startTranscript}
          target={trTarget}
          translations={transcript?.translations?.[trTarget] || null}
          job={trJob}
          onChangeTarget={changeTarget}
          onOpenSettings={() => setTrSettingsOpen(true)}
        />
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

      {addOpen ? <AddFolderDialog onClose={() => setAddOpen(false)} onSubmit={addFolder} /> : null}
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
