import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Icon from './components/Icon.jsx'
import Cover from './components/Cover.jsx'
import TranscriptPanel from './components/TranscriptPanel.jsx'
import CaptionOverlay from './components/CaptionOverlay.jsx'
import LiveCaptionOverlay from './components/LiveCaptionOverlay.jsx'
import { listInputDevices, pickCaptureDevice, startLiveCapture } from './lib/audioCapture.js'
import PopMenu, { MenuAction } from './components/PopMenu.jsx'
import XyzPanel from './components/XyzPanel.jsx'
import { fmtTime, fmtDuration, fmtDate, initialOf, shortPath } from './lib/format.js'
import { childDirs as buildChildDirs, crumbsFor } from './lib/tree.js'
import { jobLabel } from './lib/jobLabel.js'

const API = '/podwave/api'

const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]

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

// 用户选中一张图之后先在浏览器里压到 1200px 的 JPEG：
// 手机拍的原图动辄 5 MB，传上去当封面没必要，解码一次也要等。
async function coverBlob(file, longest = 1200) {
  const bitmap = await createImageBitmap(file)
  const scale = Math.min(1, longest / Math.max(bitmap.width, bitmap.height))
  const width = Math.max(1, Math.round(bitmap.width * scale))
  const height = Math.max(1, Math.round(bitmap.height * scale))
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d')
  // 透明 PNG 直接转 JPEG 会变黑，先铺一层面板底色。
  context.fillStyle = '#16161a'
  context.fillRect(0, 0, width, height)
  context.drawImage(bitmap, 0, 0, width, height)
  if (typeof bitmap.close === 'function') bitmap.close()
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.9))
  if (!blob) throw new Error('这张图读不出来，换一张试试')
  return blob
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
  const [rateOpen, setRateOpen] = useState(false)
  const [notesOpen, setNotesOpen] = useState(false)
  const [sleepMinutes, setSleepMinutes] = useState(0)
  const [sleepAt, setSleepAt] = useState(0)
  const [sleepRemaining, setSleepRemaining] = useState(0)
  const [sleepOpen, setSleepOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [hits, setHits] = useState([])
  const [sort, setSort] = useState('recent')
  const [view, setView] = useState('all')
  const [folderView, setFolderView] = useState('')
  // folderView 是「添加进来的根文件夹」，subDir 是点进去的子目录（绝对路径）。
  const [subDir, setSubDir] = useState('')
  const [filter, setFilter] = useState('all')

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
  const [txSettings, setTxSettings] = useState(null)
  const realtimeTried = useRef(new Set())
  // 字幕字号（面板 + 悬浮字幕共用）与悬浮字幕的开关/位置，都存在 ui 设置里。
  const [subtitleSize, setSubtitleSize] = useState(15)
  const [captionOpen, setCaptionOpen] = useState(false)
  const [captionPos, setCaptionPos] = useState({ x: null, y: null })
  const [captionSize, setCaptionSize] = useState({ width: null, height: null })
  // 字幕面板自己的大小（null = 用样式里的默认值）。
  const [panelSize, setPanelSize] = useState({ width: null, height: null })
  // 详情页左栏宽度（封面 + 简介那一栏），null = 默认 240px。
  const [leftWidth, setLeftWidth] = useState(null)
  const coverInputRef = useRef(null)
  const [coverBusy, setCoverBusy] = useState(false)
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
  // 实时字幕（听系统声音）：idle → starting → listening → asking（问要不要保存）→ saving
  const [liveStatus, setLiveStatus] = useState('idle')
  const [liveLines, setLiveLines] = useState([])
  const [liveError, setLiveError] = useState('')
  const [liveDevice, setLiveDevice] = useState('')
  const [liveStartedAt, setLiveStartedAt] = useState(0)
  const [liveNow, setLiveNow] = useState(0)
  // 输入电平（0~1 RMS）：用来判断「到底有没有声音进来」，静音是这条链路最常见的失败原因。
  const [liveLevel, setLiveLevel] = useState(0)
  const [liveHint, setLiveHint] = useState('')
  // 独立置顶窗（macOS 原生小窗）是否开着：开着就把字幕画到屏幕上，页面里只留控制条。
  const [liveNative, setLiveNative] = useState(false)
  // 采集来源：tap = 系统音频 helper（不用 BlackHole）；false = 浏览器 getUserMedia。
  const [liveTapMode, setLiveTapMode] = useState(false)
  const [liveTapInfo, setLiveTapInfo] = useState(null)
  // 独立窗开着的时候不在页面里再画一块字幕；停止时按这个偏好直接存/丢，不再弹「保存吗」。
  const [liveSaveOnStop, setLiveSaveOnStop] = useState(true)
  // 独立窗外观：不透明度（只作用于底板）、字号、宽度。都存在 config 的 live 段里。
  const [liveOpacity, setLiveOpacity] = useState(0.78)
  const [liveStyleSize, setLiveStyleSize] = useState(18)
  const [liveWidth, setLiveWidth] = useState(780)

  const audioRef = useRef(null)
  const mediaBaseRef = useRef('')
  const seekRef = useRef(null)
  const currentRef = useRef(null)
  const transcriptRef = useRef(null)
  const durationRef = useRef(0)
  const settingsRef = useRef(settings)
  const pendingSeekRef = useRef(0)
  const lastTickRef = useRef(0)
  const lastSaveRef = useRef(0)
  const toastedRef = useRef(0)
  const restoredRef = useRef(false)
  const seekDraggingRef = useRef(false)
  // 实时字幕的采集句柄、待发队列、会话 id；放 ref 里是因为音频回调里读不到最新 state。
  const liveCaptureRef = useRef(null)
  const liveQueueRef = useRef([])
  const liveSendingRef = useRef(false)
  const liveSessionRef = useRef('')
  const liveLinesRef = useRef([])
  const liveLevelRef = useRef(0)
  // 最近一次「听到声音」的时刻：静音超过 6 秒就提示用户去检查系统输出。
  const liveLastSoundRef = useRef(0)
  const liveLastLineRef = useRef(0)
  const liveSaveOnStopRef = useRef(true)
  const liveStyleTimerRef = useRef(0)

  useEffect(() => { setNotesOpen(false) }, [detailId])
  useEffect(() => { settingsRef.current = settings }, [settings])
  useEffect(() => { currentRef.current = current }, [current])
  useEffect(() => { transcriptRef.current = transcript }, [transcript])
  useEffect(() => { durationRef.current = duration }, [duration])

  useEffect(() => {
    let cancelled = false
    getJSON(`${API}/transcribe/settings`)
      .then((data) => { if (!cancelled) setTxSettings(data || null) })
      .catch(() => {})
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const cfg = await getJSON(`${API}/ui-settings`)
        if (!cancelled && cfg) {
          setNavCollapsed(Boolean(cfg.sidebarCollapsed))
          if (Number.isFinite(Number(cfg.subtitleSize))) setSubtitleSize(Number(cfg.subtitleSize))
          if (typeof cfg.captionOpen === 'boolean') setCaptionOpen(cfg.captionOpen)
          setCaptionPos({ x: Number.isFinite(Number(cfg.captionX)) ? Number(cfg.captionX) : null, y: Number.isFinite(Number(cfg.captionY)) ? Number(cfg.captionY) : null })
          setCaptionSize({
            width: Number.isFinite(Number(cfg.captionW)) && cfg.captionW !== null ? Number(cfg.captionW) : null,
            height: Number.isFinite(Number(cfg.captionH)) && cfg.captionH !== null ? Number(cfg.captionH) : null,
          })
          setPanelSize({
            width: Number.isFinite(Number(cfg.transcriptW)) && cfg.transcriptW !== null ? Number(cfg.transcriptW) : null,
            height: Number.isFinite(Number(cfg.transcriptH)) && cfg.transcriptH !== null ? Number(cfg.transcriptH) : null,
          })
          if (Number.isFinite(Number(cfg.episodeLeftW)) && cfg.episodeLeftW !== null) setLeftWidth(Number(cfg.episodeLeftW))
        }
      } catch {
        /* 旧版本没有这个接口时保持默认展开 */
      }
    })()
    return () => { cancelled = true }
  }, [])

  const saveUi = useCallback((patch) => {
    fetch(`${API}/ui-settings`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(patch),
    }).catch(() => {})
  }, [])

  const changeSubtitleSize = useCallback((value) => {
    const next = Math.max(12, Math.min(42, Math.round(Number(value) || 15)))
    setSubtitleSize(next)
    saveUi({ subtitleSize: next })
  }, [saveUi])

  const moveCaption = useCallback((x, y, commit) => {
    setCaptionPos({ x, y })
    if (commit) saveUi({ captionX: x, captionY: y })
  }, [saveUi])

  // 拖右下角改大小：null = 回到自适应；松手时才写盘。
  const resizeCaption = useCallback((width, height, commit) => {
    const next = { width: width ?? null, height: height ?? null }
    setCaptionSize(next)
    if (commit) saveUi({ captionW: next.width, captionH: next.height })
  }, [saveUi])

  // 拖字幕面板改大小：null = 回到默认；松手时才写盘。
  const resizeTranscript = useCallback((width, height, commit) => {
    const next = { width: width ?? null, height: height ?? null }
    setPanelSize(next)
    if (commit) saveUi({ transcriptW: next.width, transcriptH: next.height })
  }, [saveUi])

  // 拖详情页中间那条分隔线：改左栏宽度（封面跟着缩），松手才写盘。
  const splitRef = useRef(null)
  const leftRef = useRef(null)
  const widthAtSplit = (event) => {
    const start = splitRef.current
    if (!start) return null
    return Math.round(Math.min(460, Math.max(140, start.width + (event.clientX - start.startX))))
  }
  const onSplitDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return
    const holder = leftRef.current
    if (!holder) return
    event.preventDefault()
    splitRef.current = { startX: event.clientX, width: holder.getBoundingClientRect().width }
    event.currentTarget.setPointerCapture?.(event.pointerId)
  }
  const onSplitMove = (event) => {
    const next = widthAtSplit(event)
    if (next == null) return
    setLeftWidth(next)
  }
  const onSplitUp = (event) => {
    if (!splitRef.current) return
    const next = widthAtSplit(event)
    splitRef.current = null
    event.currentTarget.releasePointerCapture?.(event.pointerId)
    if (next == null) return
    setLeftWidth(next)
    saveUi({ episodeLeftW: next })
  }
  const resetSplit = () => {
    setLeftWidth(null)
    saveUi({ episodeLeftW: null })
  }

  // —— 封面 ——
  const pickCover = () => coverInputRef.current?.click()

  const changeCover = async (file) => {
    if (!file || !detailId) return
    setCoverBusy(true)
    try {
      const blob = await coverBlob(file)
      const res = await fetch(`${API}/episodes/${encodeURIComponent(detailId)}/cover`, {
        method: 'POST',
        headers: { 'content-type': 'image/jpeg' },
        body: blob,
      })
      if (!res.ok) {
        const payload = await res.json().catch(() => ({}))
        throw new Error(payload.error || '换封面失败')
      }
      // 重新拉一遍媒体库：hasCover / coverAt 变了，列表和播放条也要跟着换。
      await loadLibrary()
      flash('封面已更新')
    } catch (error) {
      flash(String(error.message || error))
    } finally {
      setCoverBusy(false)
    }
  }

  const resetCover = async () => {
    if (!detailId) return
    setCoverBusy(true)
    try {
      const res = await fetch(`${API}/episodes/${encodeURIComponent(detailId)}/cover`, { method: 'DELETE' })
      if (!res.ok) {
        const payload = await res.json().catch(() => ({}))
        throw new Error(payload.error || '恢复默认封面失败')
      }
      await loadLibrary()
      flash('已恢复默认封面')
    } catch (error) {
      flash(String(error.message || error))
    } finally {
      setCoverBusy(false)
    }
  }

  const toggleCaption = useCallback(() => {
    setCaptionOpen((prev) => {
      const next = !prev
      saveUi({ captionOpen: next })
      return next
    })
  }, [saveUi])

  const closeCaption = useCallback(() => {
    setCaptionOpen(false)
    saveUi({ captionOpen: false })
  }, [saveUi])

  const captionLine = useMemo(() => {
    const lines = transcript?.lines
    if (!lines?.length) return null
    return lines.find((line) => position >= line.start && position < line.end) || null
  }, [transcript, position])

  const captionSpeaker = captionLine && captionLine.speaker != null
    ? (transcript?.speakers?.[captionLine.speaker]?.label || `说话人 ${captionLine.speaker + 1}`)
    : ''

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

  // 计时：Listening 时每秒刷新一次，悬浮窗上显示「听了多久」。
  useEffect(() => {
    if (liveStatus !== 'listening' && liveStatus !== 'asking') return undefined
    setLiveNow(Date.now())
    const timer = window.setInterval(() => setLiveNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [liveStatus])

  // 电平条单独跑快一点，才有「有声音进来」的即时反馈。
  useEffect(() => {
    if (liveStatus !== 'listening') return undefined
    const timer = window.setInterval(() => setLiveLevel(liveLevelRef.current), 200)
    return () => window.clearInterval(timer)
  }, [liveStatus])

  // 静音看门狗：开了实时字幕却一直没声音，是「系统输出没走虚拟声卡」的典型表现。
  // 不解释清楚的话，用户只会看到「一直在等着听」。
  useEffect(() => {
    if (liveStatus !== 'listening') return undefined
    const timer = window.setInterval(() => {
      const silent = Date.now() - (liveLastSoundRef.current || 0)
      if (silent > 6000 && liveLinesRef.current.length === 0) {
        setLiveHint('没收到声音。系统输出要选「多输出设备」（扬声器 + BlackHole 2ch），只选扬声器的话插件听不到')
      } else if (silent < 1500) {
        setLiveHint('')
      }
    }, 1200)
    return () => window.clearInterval(timer)
  }, [liveStatus])

  // 往「独立置顶窗」推一屏内容；窗口没开时宿主会静默忽略。
  const pushLiveWindow = useCallback((payload) => {
    fetch(`${API}/live/window`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action: 'update', payload }),
    }).catch(() => {})
  }, [])

  // 一段一段串行发给宿主：乱序到达会让字幕和译文错位，而且识别本身也吃不消并发。
  const pumpLive = useCallback(async () => {
    if (liveSendingRef.current) return
    liveSendingRef.current = true
    try {
      while (liveQueueRef.current.length) {
        const segment = liveQueueRef.current.shift()
        const session = liveSessionRef.current
        if (!session) break
        try {
          const res = await fetch(
            `${API}/live/segment?session=${encodeURIComponent(session)}&start=${segment.start}&end=${segment.end}`,
            { method: 'POST', headers: { 'content-type': 'audio/wav' }, body: segment.wav },
          )
          const data = await res.json().catch(() => ({}))
          if (!res.ok) throw new Error(data.error || res.statusText)
          if (data.lines?.length) {
            liveLinesRef.current = [...liveLinesRef.current, ...data.lines]
            setLiveLines(liveLinesRef.current)
            // 独立窗只显示「最新一句 + 上一句」，够读又不挡视线。
            const all = liveLinesRef.current
            const last = all[all.length - 1]
            const prev = all[all.length - 2]
            pushLiveWindow({
              text: last?.text || '',
              translation: last?.translations?.zh || last?.translations?.en || '',
              previous: prev?.text || '',
              previousTranslation: prev?.translations?.zh || prev?.translations?.en || '',
              status: 'listening',
              hint: '',
            })
          }
          setLiveError(data.lastError || '')
        } catch (err) {
          setLiveError(err.message || String(err))
        }
      }
    } finally {
      liveSendingRef.current = false
    }
  }, [pushLiveWindow])

  // 拖滑块时立刻生效（推给原生窗），松手后再防抖存一次盘。
  const changeLiveStyle = useCallback((patch) => {
    if (Number.isFinite(Number(patch.opacity))) setLiveOpacity(Number(patch.opacity))
    if (Number.isFinite(Number(patch.fontSize))) setLiveStyleSize(Number(patch.fontSize))
    if (Number.isFinite(Number(patch.width))) setLiveWidth(Number(patch.width))
    pushLiveWindow(patch)
    window.clearTimeout(liveStyleTimerRef.current)
    liveStyleTimerRef.current = window.setTimeout(() => {
      sendJSON(`${API}/live/settings`, 'PUT', patch).catch(() => {})
    }, 600)
  }, [pushLiveWindow])

  const finishLive = useCallback(async (save) => {
    setLiveStatus('saving')
    const session = liveSessionRef.current
    liveSessionRef.current = ''
    try {
      const result = await sendJSON(`${API}/live/stop`, 'POST', { session, save: Boolean(save) })
      if (result.saved) flash(`字幕已保存：${result.files.md}`)
      else flash('实时字幕已结束')
    } catch (err) {
      flash(`结束实时字幕失败：${err.message || err}`)
    } finally {
      // 独立字幕窗跟着这次监听一起收起（宿主的窗口进程也会因为管道关闭而退出）。
      fetch(`${API}/live/window`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ action: 'close' }),
      }).catch(() => {})
      setLiveNative(false)
      setLiveTapMode(false)
      liveLastLineRef.current = 0
      liveQueueRef.current = []
      liveLinesRef.current = []
      setLiveStatus('idle')
      setLiveLines([])
      setLiveError('')
      setLiveDevice('')
      setLiveStartedAt(0)
    }
  }, [flash])

  const stopLive = useCallback(async () => {
    if (liveTapMode) {
      // 系统音频模式：先让宿主停掉采集（keep=true 保住会话），再把最后几句取回来，
      // 这样「停止 → 问保存」之间不会丢句子。
      try {
        await sendJSON(`${API}/live/tap`, 'POST', { action: 'stop', keep: true })
      } catch {
        /* 采集可能已经自己退了 */
      }
      try {
        const data = await getJSON(`${API}/live/lines?since=${liveLastLineRef.current}`)
        if (Array.isArray(data?.lines) && data.lines.length) {
          liveLinesRef.current = [...liveLinesRef.current, ...data.lines]
          setLiveLines(liveLinesRef.current)
          liveLastLineRef.current = liveLinesRef.current[liveLinesRef.current.length - 1]?.id || liveLastLineRef.current
        }
      } catch {
        /* ignore */
      }
      if (liveLinesRef.current.length) {
        // 有独立小窗时不在页面里弹「保存吗」——那会是第二个框。按设置直接存或丢。
        await finishLive(liveSaveOnStop)
      } else {
        await finishLive(false)
      }
      return
    }
    const capture = liveCaptureRef.current
    liveCaptureRef.current = null
    if (capture) await capture.stop().catch(() => {})
    // capture.stop() 会把最后半句推给队列，等它发完再决定「要不要保存」。
    const deadline = Date.now() + 5000
    while ((liveQueueRef.current.length || liveSendingRef.current) && Date.now() < deadline) {
      await new Promise((resolve) => setTimeout(resolve, 150))
    }
    if (liveLinesRef.current.length && !liveNative) setLiveStatus('asking')
    else await finishLive(liveLinesRef.current.length ? liveSaveOnStop : false)
  }, [finishLive, liveNative, liveSaveOnStop, liveTapMode])

  // 系统音频模式下，字幕是宿主生成的：每 600ms 取一次增量，喂给面板和（必要的）浮层。
  useEffect(() => {
    if (!liveTapMode || liveStatus !== 'listening') return undefined
    let cancelled = false
    const timer = window.setInterval(async () => {
      try {
        const data = await getJSON(`${API}/live/lines?since=${liveLastLineRef.current}`)
        if (cancelled) return
        if (Array.isArray(data?.lines) && data.lines.length) {
          liveLinesRef.current = [...liveLinesRef.current, ...data.lines]
          setLiveLines(liveLinesRef.current)
          liveLastLineRef.current = liveLinesRef.current[liveLinesRef.current.length - 1]?.id || liveLastLineRef.current
        }
        if (Number.isFinite(Number(data?.level))) {
          liveLevelRef.current = Number(data.level)
          if (Number(data.level) > 0.004) liveLastSoundRef.current = Date.now()
        }
        if (typeof data?.hint === 'string' && data.hint !== liveHint) setLiveHint(data.hint)
        if (data?.alive === false) {
          // 会话已经在宿主那边结束了（多半是用户在字幕框里点了 ✕）。这边跟着复位。
          liveLastLineRef.current = 0
          liveLinesRef.current = []
          setLiveLines([])
          setLiveNative(false)
          setLiveTapMode(false)
          setLiveStatus('idle')
          setLiveDevice('')
          setLiveStartedAt(0)
          setLiveHint('')
        }
      } catch {
        /* 宿主重启时拉取会失败，下一轮自动恢复 */
      }
    }, 600)
    return () => {
      cancelled = true
      window.clearInterval(timer)
    }
  }, [liveTapMode, liveStatus, liveHint])

  // 打开独立置顶窗（两条采集路径共用）。打不开就留在页面浮层里，并说明原因。
  const openNativeWindow = useCallback(async (info = {}) => {
    try {
      const opacity = Number.isFinite(Number(info.opacity)) ? Number(info.opacity) : 0.78
      const size = Number.isFinite(Number(info.fontSize)) ? Number(info.fontSize) : 18
      const width = Number.isFinite(Number(info.width)) ? Number(info.width) : 780
      setLiveOpacity(opacity)
      setLiveStyleSize(size)
      setLiveWidth(width)
      const opened = await sendJSON(`${API}/live/window`, 'POST', { action: 'open' })
      if (opened?.ok) {
        setLiveNative(true)
        pushLiveWindow({
          text: '',
          status: 'listening',
          hint: '听着呢，播放声音就会出字幕',
          opacity,
          fontSize: size,
          width,
          saveOnStop: liveSaveOnStopRef.current,
        })
        return true
      }
      setLiveNative(false)
      if (opened?.error) flash(`独立字幕窗没打开，字幕显示在卡片里：${opened.error}`)
    } catch {
      setLiveNative(false)
    }
    return false
  }, [flash, pushLiveWindow])

  const startLive = useCallback(async () => {
    if (liveStatus === 'starting' || liveStatus === 'listening') return
    setLiveError('')
    setLiveLines([])
    liveLinesRef.current = []
    setLiveStatus('starting')
    try {
      const info = await getJSON(`${API}/live`)
      setLiveSaveOnStop(info.saveOnStop !== false)
      liveSaveOnStopRef.current = info.saveOnStop !== false
      if (!info.ready) {
        throw new Error('还没有填 DeepSeek API key。设置 →「翻译」里填一个，转写和实时字幕都能用')
      }
      // 记住的上次设备优先；没有就挑一个最像「系统声音」的（BlackHole / VB-Cable 之类）。
      let deviceId = info.deviceId || ''
      let label = info.deviceLabel || ''
      if (!deviceId) {
        // 读不到设备列表不算致命（有些环境没有 enumerateDevices）：照样让系统给默认输入设备。
        const devices = await listInputDevices().catch(() => [])
        const picked = pickCaptureDevice(devices)
        if (picked) {
          deviceId = picked.deviceId
          label = picked.label || ''
        }
      }
      // 采集方式：能用系统音频就用（不需要装 BlackHole），起不来再退回浏览器采集。
      const wantTap = info.tap?.supported !== false && info.source !== 'browser'
      if (wantTap) {
        try {
          const tapped = await sendJSON(`${API}/live/tap`, 'POST', { target: info.target || 'zh', chunkMs: 500 })
          if (tapped?.ok) {
            setLiveTapInfo(tapped)
            setLiveTapMode(true)
            liveSessionRef.current = tapped.session?.id || ''
            setLiveDevice('系统音频')
            setLiveStartedAt(Date.now())
            setLiveStatus('listening')
            liveLastSoundRef.current = Date.now()
            await openNativeWindow(info)
            return
          }
          flash(`系统音频没起来，改用虚拟声卡：${tapped?.error || '未知原因'}`)
        } catch (error) {
          flash(`系统音频没起来，改用虚拟声卡：${error.message || error}`)
        }
      }
      setLiveTapMode(false)

      const started = await sendJSON(`${API}/live/start`, 'POST', { target: info.target || 'zh' })
      if (!started?.session?.id) throw new Error('宿主没给出会话 id')
      liveSessionRef.current = started.session.id
      const capture = await startLiveCapture({
        deviceId,
        onLevel: (value) => {
          liveLevelRef.current = value
          if (value > 0.004) liveLastSoundRef.current = Date.now()
        },
        onSegment: (segment) => {
          // 识别跟不上时最多排 9 段（约 40 秒），再多就丢最老的 —— 积压越久字幕越没意义。
          if (liveQueueRef.current.length > 8) liveQueueRef.current.shift()
          liveQueueRef.current.push(segment)
          pumpLive()
        },
      })
      liveCaptureRef.current = capture
      setLiveDevice(capture.label || label || '系统声音')
      setLiveStartedAt(Date.now())
      setLiveStatus('listening')
      liveLastSoundRef.current = Date.now()
      await openNativeWindow(info)
      if (deviceId && (deviceId !== info.deviceId || (capture.label || label) !== info.deviceLabel)) {
        sendJSON(`${API}/live/settings`, 'PUT', { deviceId, deviceLabel: capture.label || label }).catch(() => {})
      }
    } catch (err) {
      // 会话已经建好但采集失败：把宿主那边的空会话收掉，不然它会一直占着「当前会话」。
      if (liveSessionRef.current) {
        sendJSON(`${API}/live/stop`, 'POST', { session: liveSessionRef.current, save: false }).catch(() => {})
      }
      liveSessionRef.current = ''
      liveCaptureRef.current = null
      setLiveStatus('idle')
      const message = err.message || String(err)
      setLiveError(message)
      flash(`实时字幕没起来：${message}`)
    }
  }, [flash, liveStatus, pumpLive, pushLiveWindow, subtitleSize])

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
        const health = await getJSON(`${API}/health`).catch(() => ({}))
        if (health.mediaBase) mediaBaseRef.current = health.mediaBase
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
            audio.src = mediaBaseRef.current
              ? `${mediaBaseRef.current}/episodes/${last.id}/audio`
              : `${API}/episodes/${last.id}/audio`
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
          if (state.transcript) setTranscript(state.transcript)
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

  // 切换单集或对照语言时，从后端读取持久状态：报错、已翻/待翻行数都要能在刷新页面后恢复。
  useEffect(() => {
    let cancelled = false
    const id = current?.id
    if (!id || !trTarget) {
      setTrJob({ status: 'none' })
      return () => { cancelled = true }
    }
    ;(async () => {
      try {
        const state = await getJSON(`${API}/episodes/${id}/translate?target=${trTarget}`)
        if (!cancelled) setTrJob(state)
      } catch {
        if (!cancelled) setTrJob({ status: 'none' })
      }
    })()
    return () => { cancelled = true }
  }, [current?.id, trTarget])

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
        if ((state.status === 'queued' || state.status === 'running') && state.transcript) {
          setTranscript(state.transcript)
        } else if (state.status === 'done' && state.transcript) {
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

  // 轮询只读后端状态：翻译按批落盘，这里把增量译文同步到列表。
  useEffect(() => {
    if (trJob.status !== 'running' && trJob.status !== 'queued') return
    let cancelled = false
    const sync = async (id) => {
      const state = await getJSON(`${API}/episodes/${id}/translate?target=${trTarget}`)
      if (cancelled) return
      setTrJob(state)
      if (state.status === 'done') flash('翻译完成')
      try {
        const fresh = await getJSON(`${API}/episodes/${id}/transcript`)
        if (!cancelled && fresh.transcript) setTranscript(fresh.transcript)
      } catch {
        /* 字幕读不到就先不刷新，等下一次 */
      }
    }
    const timer = setInterval(() => {
      const id = currentRef.current?.id
      if (!id) return
      sync(id).catch(() => { /* 忽略轮询错误，等下一次 */ })
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
    const timer = setInterval(refresh, jobsOpen ? 2500 : 20000)
    return () => { cancelled = true; clearInterval(timer) }
  }, [jobsOpen])

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

  // 边播边出字幕：开始播放时如果这集还没有完整字幕、也没在转写，就自动起一个实时任务。
  // 只对云端 API 生效（本地模型是整段批量跑的，不适合边播边算）。
  useEffect(() => {
    if (!playing || !current) return
    if (txSettings?.realtime === false || txSettings?.provider === 'local') return
    if (transcript && !transcript.partial) return
    if (txStatus === 'queued' || txStatus === 'running') return
    const id = current.id
    if (realtimeTried.current.has(id)) return
    realtimeTried.current.add(id)
    sendJSON(`${API}/episodes/${id}/transcribe`, 'POST', { realtime: true })
      .then((res) => {
        if (res?.status === 'queued') setTxStatus('queued')
      })
      .catch(() => { /* 没 key 之类的原因起不来就静默放弃，用户手动点转写时会给提示 */ })
  }, [playing, current, transcript, txStatus, txSettings])

  const startTranscript = useCallback(async () => {
    const episode = currentRef.current
    if (!episode) return
    setTxError('')
    setSubsOpen(true)
    // 这个按钮在「已经有字幕」时是「重新转写」：必须显式带 force，
    // 否则后端只会回一句「已完成」，点了像没反应。
    const existing = transcriptRef.current
    const redo = Boolean(existing) && !existing.partial
    if (redo) {
      const lines = Array.isArray(existing.lines) ? existing.lines.length : 0
      const cloud = (txSettings?.provider || 'api') === 'api'
      const ask = [
        `重新转写这一集？现有字幕（${lines} 行）会被覆盖。`,
        '',
        cloud ? '走云端转写，会重新计费一次。' : '走本地模型，不联网、不花钱，但会占 CPU/GPU。',
      ].join('\n')
      if (!window.confirm(ask)) return
    }
    try {
      const res = await sendJSON(`${API}/episodes/${episode.id}/transcribe`, 'POST', redo ? { force: true } : {})
      setTxStatus(res.status || 'queued')
      if (redo) flash('重新转写已开始')
    } catch (err) {
      setTxError(err.message)
    }
  }, [flash, txSettings])

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
      if (action === 'cancel') {
        const res = await sendJSON(`${API}/episodes/${job.episodeId}/transcribe/cancel`, 'POST', {})
        if (res?.status === 'none') flash('这个任务已经不在队列里了')
        else flash(res?.status === 'cancelling' ? '正在取消转写…' : '已取消转写')
      } else if (action === 'retry') await sendJSON(`${API}/episodes/${job.episodeId}/transcribe`, 'POST', { resume: true })
      else if (action === 'clear') await sendJSON(`${API}/jobs`, 'DELETE', { key: job.key })
    } catch (err) {
      flash(`操作失败：${err.message}`)
    }
    const data = await getJSON(`${API}/jobs`).catch(() => ({ items: [] }))
    setJobs(data.items || [])
  }, [flash])

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

  const resegmentTx = useCallback(async () => {
    if (!transcript) return
    const data = await transcriptMutate(`/episodes/${transcript.id}/transcript/resegment`, 'POST', {})
    if (!data) return
    if (data.cleared) {
      setTrJob({ status: 'none', missing: data.after })
      flash(`断句已整理：${data.before} 行 → ${data.after} 行，旧译文已备份，需要重新翻译`)
    } else {
      flash(`断句已整理：${data.before} 行 → ${data.after} 行`)
    }
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

  // 显式动作：只有用户点「翻译 / 续翻 / 重新翻译」才会发起（可能计费的）请求。
  // force = true 时连已有译文一起重翻（整篇重翻）。
  const runTranslate = useCallback(async (force = false) => {
    const id = currentRef.current?.id
    const target = trTarget
    if (!id || !target) return
    if (trJob.status === 'running' || trJob.status === 'queued') return
    setTrJob({ status: 'running' })
    try {
      const res = await sendJSON(`${API}/episodes/${id}/translate`, 'POST', { target, force })
      setTrJob(res)
      if (res.status === 'done') {
        await refreshTranscript()
        flash(force ? '重新翻译完成' : '翻译完成')
      }
    } catch (err) {
      // 保留上一次的行数统计，别让「没有 API key」这类错误把待翻行数抹成 0。
      setTrJob((prev) => ({ ...prev, status: 'error', error: err.message }))
    }
  }, [trTarget, trJob.status, refreshTranscript, flash])
  const startTranslate = useCallback(() => runTranslate(false), [runTranslate])

  // 整篇重翻：会覆盖现有译文，先问一句（可能计费）。
  const retranslateAll = useCallback(() => {
    const label = trTarget === 'en' ? 'English' : '中文'
    if (!window.confirm(`重新翻译整篇？\n\n现有的 ${label} 译文会被全部覆盖重翻一遍，按整篇计费。\n（只想改某一行，就点那一行的 ✎，里面有「重翻」。）`)) return
    runTranslate(true)
  }, [runTranslate, trTarget])

  // 单行重翻：只重翻这一行，成本可以忽略。
  const retranslateLine = useCallback(async (line) => {
    const id = currentRef.current?.id
    if (!id || !trTarget || !line?.id) return
    try {
      await sendJSON(`${API}/episodes/${id}/translate/line`, 'POST', { lineId: line.id, target: trTarget })
      await refreshTranscript()
      flash('这一行已重翻')
    } catch (err) {
      flash(err.message || '重翻失败')
    }
  }, [trTarget, refreshTranscript, flash])

  // 切换对照语言只换显示目标并读取后端持久状态，绝不自动触发翻译。
  const changeTarget = useCallback((value) => {
    setTrTarget(value || '')
  }, [])

  const openEpisodeWeb = async () => {
    if (!detailItem?.eid) return
    try {
      await fetch(`${API}/xyz/open-web`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ url: `https://www.xiaoyuzhoufm.com/episode/${detailItem.eid}` }),
      })
    } catch {
      flash('无法打开浏览器')
    }
  }

  const toggleFavorite = (item) => {
    const favorite = !item.favorite
    setItems((list) => list.map((entry) => (entry.id === item.id ? { ...entry, favorite } : entry)))
    sendJSON(`${API}/episodes/${item.id}/favorite`, 'PUT', { favorite }).catch((error) => flash(error.message))
  }

  const removeEpisodes = async (ids) => {
    if (!ids.length) return
    if (!window.confirm(`从播放器移除 ${ids.length} 集？只删索引，不会动源文件。`)) return
    for (const id of ids) {
      try {
        await fetch(`${API}/episodes/${id}`, { method: 'DELETE' })
      } catch {
        /* ignore */
      }
    }
    setItems((list) => list.filter((entry) => !ids.includes(entry.id)))
    setSelected([])
    if (ids.includes(detailId)) setDetailId(null)
    flash(`已移除 ${ids.length} 集，源文件未动`)
  }

  const ordered = useMemo(() => {
    const list = [...items]
    if (sort === 'title') list.sort((a, b) => a.title.localeCompare(b.title, 'zh-Hans-CN'))
    else if (sort === 'duration') list.sort((a, b) => (b.duration || 0) - (a.duration || 0))
    else list.sort((a, b) => b.mtime - a.mtime)
    return list
  }, [items, sort])

  // 选中根文件夹后逐层往下钻：subDir 是当前目录相对根文件夹的路径（'' 就是根目录本身），
  // 服务端已经算好每个单集的 rel，前端不用再拼绝对路径，Windows 上也不会踩分隔符的坑。
  const currentRel = folderView ? subDir : ''
  const dirItems = useMemo(
    () => (folderView ? items.filter((item) => item.root === folderView) : []),
    [items, folderView],
  )
  const childDirs = useMemo(
    () => (folderView ? buildChildDirs(dirItems, currentRel) : []),
    [dirItems, folderView, currentRel],
  )

  const visible = useMemo(() => {
    const text = query.trim().toLowerCase()
    return ordered.filter((item) => {
      // 选中某个文件夹时只看这个文件夹里的内容（小宇宙等远端条目不归任何本地文件夹）。
      if (folderView && item.root !== folderView) return false
      if (folderView) {
        // 只看当前这一层：子目录里的内容要点进去才出现，避免所有目录的音频混在一起。
        if ((item.rel || '') !== currentRel) return false
      }
      if (text && !`${item.title} ${item.artist} ${item.album}`.toLowerCase().includes(text)) return false
      const saved = progress[item.id]
      const pos = saved?.position || 0
      const total = item.duration || 0
      const ratio = total ? pos / total : 0
      if (view === 'inprogress') return pos > 5 && ratio < 0.97
      if (view === 'finished') return ratio >= 0.97
      if (filter === 'unheard') return pos <= 5
      if (filter === 'transcribed') return Boolean(item.hasTranscript)
      if (filter === 'favorites') return Boolean(item.favorite)
      return true
    })
  }, [ordered, query, view, filter, progress, folderView, currentRel])

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

  // 面包屑：根文件夹 → 逐层子目录，点任意一段跳回去。
  const crumbs = useMemo(
    () => (folderView ? crumbsFor(shortPath(folderView), currentRel) : []),
    [folderView, currentRel],
  )

  const viewTitle = folderView
    ? crumbs.length > 1 ? crumbs[crumbs.length - 1].label : shortPath(folderView)
    : view === 'inprogress' ? '继续收听' : view === 'finished' ? '已播完' : view === 'xyz' ? '小宇宙' : '全部单集'
  const detailItem = detailId ? (items.find((item) => item.id === detailId) || (current?.id === detailId ? current : null)) : null
  const subline = loading
    ? '正在读取媒体库…'
    : scan.running
      ? '正在扫描文件夹…'
      : folderView
        ? `${visible.length} 集${childDirs.length ? ` · ${childDirs.length} 个子文件夹` : ''} · 只看这一层`
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
    if (item.source === 'xyz') {
      audio.src = mediaBaseRef.current
        ? `${mediaBaseRef.current}/xyz/${item.id.slice(3)}/audio`
        : `${API}/episodes/${item.id}/audio`
    } else {
      audio.src = mediaBaseRef.current
        ? `${mediaBaseRef.current}/episodes/${item.id}/audio`
        : `${API}/episodes/${item.id}/audio`
    }
    audio.load()
    audio.playbackRate = settingsRef.current.rate || 1
    audio.volume = settingsRef.current.volume ?? 0.9
    if (autoplay) audio.play().catch(() => {})
    patchSettings({ lastEpisodeId: item.id })
  }, [progress, saveProgress, patchSettings, togglePlay])

  const playXyz = useCallback(async (episode) => {
    const endpoint = episode.public ? `${API}/xyz/public/play` : `${API}/xyz/episodes/${encodeURIComponent(episode.eid)}/play`
    const payload = episode.public ? { pid: episode.pid, eid: episode.eid } : {}
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) throw new Error(data.error || '打开单集失败')
    await loadLibrary()
    selectEpisode(data.item, true)
  }, [loadLibrary, selectEpisode])

  useEffect(() => {
    const text = query.trim()
    if (text.length < 2) {
      setHits([])
      return undefined
    }
    const timer = window.setTimeout(() => {
      getJSON(`${API}/search?q=${encodeURIComponent(text)}`)
        .then((data) => setHits(Array.isArray(data.items) ? data.items : []))
        .catch(() => setHits([]))
    }, 250)
    return () => window.clearTimeout(timer)
  }, [query])

  const openEpisode = useCallback((item, autoplay = true) => {
    if (!item) return
    selectEpisode(item, autoplay)
    setDetailId(item.id)
  }, [selectEpisode])

  const seekTo = useCallback((value) => {
    const audio = audioRef.current
    if (!audio || !currentRef.current) return
    const raw = Number(value)
    if (!Number.isFinite(raw)) return
    const fallback = Number(durationRef.current) || 0
    const total = Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : fallback
    const target = Math.max(0, total > 0 ? Math.min(raw, total) : raw)
    try {
      audio.currentTime = target
    } catch {
      // 元数据还没就绪时赋值可能抛错，等 loadedmetadata 后再恢复
      pendingSeekRef.current = target
      return
    }
    setPosition(target)
    saveProgress(currentRef.current.id, target, total || fallback, true)
  }, [saveProgress])

  const jumpToHit = useCallback((hit) => {
    const item = items.find((entry) => entry.id === hit.episodeId)
    if (!item) return
    if (currentRef.current?.id === hit.episodeId) {
      seekTo(hit.start)
      setDetailId(item.id)
      return
    }
    pendingSeekRef.current = hit.start
    openEpisode(item, false)
  }, [items, openEpisode, seekTo])

  const seekRatio = useCallback((event) => {
    const el = seekRef.current
    if (!el) return null
    const rect = el.getBoundingClientRect()
    if (!rect.width) return null
    return Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width))
  }, [])

  const seekAtEvent = useCallback((event) => {
    const ratio = seekRatio(event)
    const total = Number.isFinite(durationRef.current) && durationRef.current > 0
      ? durationRef.current
      : (Number.isFinite(audioRef.current?.duration) ? audioRef.current.duration : 0)
    if (ratio == null || !total) return
    seekTo(ratio * total)
  }, [seekRatio, seekTo])

  const onSeekPointerDown = useCallback((event) => {
    event.preventDefault()
    seekDraggingRef.current = true
    try { event.currentTarget.setPointerCapture(event.pointerId) } catch {}
    seekAtEvent(event)
  }, [seekAtEvent])

  const onSeekPointerMove = useCallback((event) => {
    if (!seekDraggingRef.current) return
    seekAtEvent(event)
  }, [seekAtEvent])

  const onSeekPointerUp = useCallback((event) => {
    seekDraggingRef.current = false
    try { event.currentTarget.releasePointerCapture(event.pointerId) } catch {}
  }, [])

  const onSeekKeyDown = useCallback((event) => {
    const audio = audioRef.current
    if (!audio) return
    const step = event.shiftKey ? 30 : 5
    if (event.key === 'ArrowLeft') { event.preventDefault(); seekTo((audio.currentTime || 0) - step) }
    if (event.key === 'ArrowRight') { event.preventDefault(); seekTo((audio.currentTime || 0) + step) }
    if (event.key === 'Home') { event.preventDefault(); seekTo(0) }
    if (event.key === 'End') { event.preventDefault(); seekTo(Number.isFinite(audio.duration) ? audio.duration : 0) }
  }, [seekTo])

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

  const pickRate = useCallback((next) => {
    const audio = audioRef.current
    if (audio) audio.playbackRate = next
    patchSettings({ rate: next })
    setRateOpen(false)
  }, [patchSettings])

  useEffect(() => {
    if (!rateOpen) return
    const close = (event) => {
      if (event.type === 'keydown' && event.key !== 'Escape') return
      if (event.type === 'pointerdown' && event.target.closest?.('.rate-wrap')) return
      setRateOpen(false)
    }
    document.addEventListener('pointerdown', close)
    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('pointerdown', close)
      document.removeEventListener('keydown', close)
    }
  }, [rateOpen])

  useEffect(() => {
    if (!sleepAt) return undefined
    const tick = () => {
      const remain = Math.max(0, Math.round((sleepAt - Date.now()) / 1000))
      setSleepRemaining(remain)
      if (remain <= 0) {
        const audio = audioRef.current
        if (audio && !audio.paused) audio.pause()
        setSleepAt(0)
        setSleepMinutes(0)
        flash('睡眠定时结束，已暂停')
      }
    }
    tick()
    const timer = window.setInterval(tick, 1000)
    return () => window.clearInterval(timer)
  }, [sleepAt, flash])

  useEffect(() => {
    if (!sleepOpen) return undefined
    const close = (event) => {
      if (event.type === 'keydown' && event.key !== 'Escape') return
      if (event.type === 'pointerdown' && event.target.closest?.('.sleep-wrap')) return
      setSleepOpen(false)
    }
    document.addEventListener('pointerdown', close)
    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('pointerdown', close)
      document.removeEventListener('keydown', close)
    }
  }, [sleepOpen])

  const pickSleep = useCallback((value) => {
    setSleepOpen(false)
    if (value === 'off') {
      setSleepAt(0)
      setSleepMinutes(0)
      setSleepRemaining(0)
      return
    }
    if (value === 'end') {
      setSleepAt(0)
      setSleepMinutes(-1)
      setSleepRemaining(0)
      flash('本集播完自动暂停')
      return
    }
    setSleepMinutes(value)
    setSleepAt(Date.now() + value * 60000)
    flash(`将在 ${value} 分钟后暂停`)
  }, [flash])

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
    const now = performance.now()
    if (now - (lastTickRef.current || 0) < 400) return
    lastTickRef.current = now
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
    if (sleepMinutes === -1) {
      setSleepMinutes(0)
      setSleepAt(0)
      setSleepRemaining(0)
      flash('本集结束，已暂停')
      return
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
      setFolderView((prev) => (prev === folderPath ? '' : prev))
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
        <div className="nav-rail">
          <button className="nav-reopen" title="展开侧边栏" onClick={toggleNav}>
            <Icon name="chevron-right" size={16} />
          </button>
        </div>
      ) : null}
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark"><Icon name="wave" size={20} /></span>
          <span className="brand-name">Podwave</span>
          <span className="brand-version">0.11</span>
          <button className="icon-btn brand-collapse" title="收起侧边栏" onClick={toggleNav}>
            <Icon name="chevron-left" size={16} />
          </button>
        </div>

        <nav className="nav">
          {[
            ['all', '全部单集', items.length],
            ['inprogress', '继续收听', continueList.length],
            ['finished', '已播完', items.filter(isFinished).length],
            ['xyz', '小宇宙', ''],
          ].map(([key, label, count]) => (
            <button
              key={key}
              className={`nav-item ${view === key && !folderView ? 'active' : ''}`}
              onClick={() => {
                setFolderView('')
                setView(key)
              }}
            >
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
                <li
                  key={folder}
                  title={folder}
                  className={folderView === folder ? 'is-active' : ''}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    setView('all')
                    setFilter('all')
                    setQuery('')
                    setFolderView((prev) => (prev === folder ? '' : folder))
                  }}
                  onKeyDown={(event) => {
                    if (event.key !== 'Enter' && event.key !== ' ') return
                    event.preventDefault()
                    setView('all')
                    setFilter('all')
                    setQuery('')
                    setFolderView((prev) => (prev === folder ? '' : folder))
                  }}
                >
                  <Icon name="folder" size={16} />
                  <span className="folder-name">{shortPath(folder)}</span>
                  <button
                    className="folder-remove"
                    title="移除"
                    onClick={(event) => {
                      event.stopPropagation()
                      removeFolder(folder)
                    }}
                  >×</button>
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
            <button
              className={`tool-btn ${liveStatus !== 'idle' ? 'is-on' : ''}`}
              onClick={() => {
                if (liveStatus === 'idle') startLive()
                else if (liveStatus === 'listening') stopLive()
              }}
              title="实时字幕：听系统正在播放的声音（YouTube、直播、会议都能用）"
            >
              <Icon name="wave" size={16} />
              <span>实时字幕</span>
            </button>
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
            <PopMenu
              className="batch-transcribe"
              buttonClassName="btn primary"
              title="批量转写"
              placement="down"
              disabled={!unTranscribed.length && !selected.length}
              trigger="转写"
            >
              {({ close }) => (
                <>
                  <MenuAction
                    hint={`${unTranscribed.length} 集`}
                    disabled={!unTranscribed.length}
                    onSelect={() => { close(); submitBatch(unTranscribed.map((item) => item.id)) }}
                  >
                    转写未转写的
                  </MenuAction>
                  <MenuAction
                    hint={`${selected.length} 集`}
                    disabled={!selected.length}
                    onSelect={() => { close(); submitBatch(selected) }}
                  >
                    转写选中的
                  </MenuAction>
                </>
              )}
            </PopMenu>
            <button className="btn ghost danger" disabled={!selected.length} onClick={() => removeEpisodes(selected)}>移除选中</button>
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
            <div className="episode-view" style={leftWidth ? { '--episode-left-w': `${leftWidth}px` } : undefined}>
              <div className="episode-left" ref={leftRef}>
                <div className="episode-cover">
                  <button
                    className="cover-swap"
                    onClick={pickCover}
                    disabled={coverBusy}
                    title="点击更换封面"
                    aria-label="更换封面"
                  >
                    <Cover item={detailItem} size={288} />
                    <span className="cover-swap-hint">{coverBusy ? '上传中…' : '换封面'}</span>
                  </button>
                  <input
                    ref={coverInputRef}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(event) => {
                      const file = event.target.files?.[0]
                      event.target.value = ''
                      changeCover(file)
                    }}
                  />
                </div>
                <h2 className="episode-title">{detailItem.title}</h2>
                <p className="episode-sub">{detailItem.artist}{detailItem.album ? ` · ${detailItem.album}` : ''}</p>
                <p className="episode-path" title={detailItem.file}>{detailItem.location || detailItem.file}</p>
                <p className="episode-stats">{fmtDuration(detailItem.duration)} · {fmtDate(detailItem.mtime)} · 已听 {Math.round(progressPct(detailItem))}%</p>
                {detailItem.shownotes ? (
                  <div className={`episode-notes ${notesOpen ? 'is-open' : ''}`}>
                    <button className="notes-head" onClick={() => setNotesOpen((prev) => !prev)}>
                      单集介绍 {notesOpen ? '收起' : '展开'}
                    </button>
                    <p className="notes-body">{detailItem.shownotes}</p>
                  </div>
                ) : null}
                <div className="episode-actions">
                  <button className="btn primary" onClick={togglePlay}>{playing && current?.id === detailItem.id ? '暂停' : '播放'}</button>
                  {txStatus === 'queued' || txStatus === 'running' ? (
                    <button className="btn ghost" onClick={cancelTranscript}>取消转写</button>
                  ) : (
                    <button className="btn ghost" onClick={startTranscript}>
                      {detailItem.source === 'xyz' ? (transcript ? '重新下载并转写' : '下载并转写') : transcript ? '重新转写' : '转写字幕'}
                    </button>
                  )}
                  <PopMenu
                    className="detail-more"
                    buttonClassName="btn ghost"
                    title="更多操作"
                    placement="down"
                    trigger="更多"
                  >
                    {({ close }) => (
                      <>
                        {detailItem.source === 'xyz' ? (
                          <MenuAction onSelect={() => { close(); openEpisodeWeb() }}>在浏览器打开</MenuAction>
                        ) : null}
                        {detailItem.hasCover ? (
                          <MenuAction hint="换回音频自带的图" onSelect={() => { close(); resetCover() }}>恢复默认封面</MenuAction>
                        ) : null}
                        <MenuAction danger onSelect={() => { close(); removeEpisodes([detailItem.id]) }}>从播放器移除</MenuAction>
                      </>
                    )}
                  </PopMenu>
                </div>
              </div>
              <div className="episode-right">
                {/* 分隔条挂在字幕这一栏里：高度跟面板走，不会在面板下面多出一截悬空的线。 */}
                <span
                  className="episode-split"
                  onPointerDown={onSplitDown}
                  onPointerMove={onSplitMove}
                  onPointerUp={onSplitUp}
                  onPointerCancel={onSplitUp}
                  onDoubleClick={resetSplit}
                  title="左右拖动调整封面栏宽度（双击恢复默认）"
                />
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
                  onValidate={validateTx}
                  onResegment={resegmentTx}
                  issues={txIssues}
                  onCancel={cancelTranscript}
                  error={txError}
                  position={position}
                  fontSize={subtitleSize}
                  onFontSize={changeSubtitleSize}
                  width={panelSize.width}
                  height={panelSize.height}
                  onResize={resizeTranscript}
                  onSeek={seekTo}
                  onClose={() => setDetailId(null)}
                  onStart={startTranscript}
                  target={trTarget}
                  job={trJob}
                  onChangeTarget={changeTarget}
                  onTranslate={startTranslate}
                  onRetranslate={retranslateAll}
                  onRetranslateLine={retranslateLine}
                  onOpenSettings={() => setTrSettingsOpen(true)}
                />
              </div>
            </div>
          </>
        ) : view === 'xyz' ? (
          <XyzPanel onPlay={playXyz} currentId={current?.id} />
        ) : (
          <>
        <div className="filter-chips">
          {[
            ['all', '全部'],
            ['unheard', '未听'],
            ['transcribed', '有字幕'],
            ['favorites', '收藏'],
          ].map(([key, label]) => (
            <button key={key} className={`chip ${filter === key ? 'is-on' : ''}`} onClick={() => setFilter(key)}>
              {label}
            </button>
          ))}
        </div>
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

        {query.trim().length >= 2 && hits.length > 0 ? (
          <section className="search-hits">
            <div className="list-head">
              <span>字幕匹配</span>
              <span className="col-duration">{hits.length}</span>
            </div>
            {hits.map((hit) => (
              <button key={`${hit.episodeId}-${hit.lineId}`} className="hit-row" onClick={() => jumpToHit(hit)}>
                <span className="hit-time">{fmtTime(hit.start)}</span>
                <span className="hit-text">{hit.text}</span>
                <span className="hit-title">{hit.title}</span>
              </button>
            ))}
          </section>
        ) : null}

        {folderView ? (
          <nav className="crumbs" aria-label="目录">
            {crumbs.map((crumb, index) => (
              <span key={crumb.rel || 'root'} className="crumb-item">
                {index > 0 ? <span className="crumb-sep">/</span> : <Icon name="folder" size={14} />}
                <button
                  className={`crumb ${index === crumbs.length - 1 ? 'is-current' : ''}`}
                  onClick={() => setSubDir(crumb.rel)}
                  disabled={index === crumbs.length - 1}
                >
                  {crumb.label}
                </button>
              </span>
            ))}
          </nav>
        ) : null}

        <section className="list-section">
          <div className="list-head">
            <span className="col-index">#</span>
            <span>单集</span>
            <span className="col-duration">时长</span>
            <span className="col-progress">进度</span>
          </div>

          {!loading && folderView && childDirs.length > 0 && !query ? (
            <div className="folder-rows">
              {childDirs.map((dir) => (
                <button key={dir.rel} className="row folder-row" onClick={() => setSubDir(dir.rel)} title={dir.name}>
                  <span className="col-index row-index"><Icon name="folder" size={16} /></span>
                  <span className="row-main">
                    <span className="row-text">
                      <span className="row-title">{dir.name}</span>
                      <span className="row-meta">{dir.count} 个音频 · 点进去只看这个文件夹</span>
                    </span>
                  </span>
                  <span className="col-duration row-duration">›</span>
                </button>
              ))}
            </div>
          ) : null}

          {loading ? (
            <div className="empty">正在读取…</div>
          ) : visible.length === 0 && !(folderView && childDirs.length > 0 && !query) ? (
            <div className="empty">
              <p>{items.length === 0 ? '媒体库还是空的' : '没有符合条件的单集'}</p>
              <p className="empty-hint">
                {items.length === 0
                  ? '添加一个存放播客音频的文件夹，Podwave 会自动列出所有单集。'
                  : folderView
                    ? `这个文件夹里没有直接放在这里的音频${childDirs.length ? '，点上面的子文件夹进去看看' : '。'}`

                    : '换个关键词或切回全部单集。'}
              </p>
              {items.length === 0 ? <button className="btn primary" onClick={() => setAddOpen(true)}>添加文件夹</button> : null}
              {items.length > 0 && folderView ? <button className="btn" onClick={() => setFolderView('')}>清除文件夹筛选</button> : null}
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
                    <span
                      className={`row-star ${item.favorite ? 'is-on' : ''}`}
                      role="button"
                      title={item.favorite ? '取消收藏' : '收藏'}
                      onClick={(event) => {
                        event.stopPropagation()
                        toggleFavorite(item)
                      }}
                    >
                      ★
                    </span>
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
          onValidate={validateTx}
          onResegment={resegmentTx}
          issues={txIssues}
          onCancel={cancelTranscript}
          error={txError}
          position={position}
          fontSize={subtitleSize}
          onFontSize={changeSubtitleSize}
          width={panelSize.width}
          height={panelSize.height}
          onResize={resizeTranscript}
          onSeek={seekTo}
          onClose={() => setSubsOpen(false)}
          onStart={startTranscript}
          target={trTarget}
          job={trJob}
          onChangeTarget={changeTarget}
          onTranslate={startTranslate}
          onRetranslate={retranslateAll}
          onRetranslateLine={retranslateLine}
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
                    {['queued', 'running', 'interrupted'].includes(job.status) ? <button className="mini-link" onClick={() => jobAction(job, 'cancel')}>取消</button> : null}
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
        <div
          className="seek-wrap"
          ref={seekRef}
          role="slider"
          tabIndex={0}
          aria-label="播放进度"
          aria-valuemin={0}
          aria-valuemax={Math.round(duration || 0)}
          aria-valuenow={Math.round(position || 0)}
          aria-valuetext={`${fmtTime(position)} / ${fmtTime(duration)}`}
          onPointerDown={onSeekPointerDown}
          onPointerMove={onSeekPointerMove}
          onPointerUp={onSeekPointerUp}
          onPointerCancel={onSeekPointerUp}
          onKeyDown={onSeekKeyDown}
        >
          <div className="seek-track">
            <div className="seek-fill" style={{ width: `${duration ? Math.min(100, Math.max(0, (position / duration) * 100)) : 0}%` }} />
          </div>
          <div className="seek-thumb" style={{ left: `${duration ? Math.min(100, Math.max(0, (position / duration) * 100)) : 0}%` }} />
        </div>
        <div className="player-body">
          <div className="now">
            {current ? (
              <button className="now-open" onClick={() => setDetailId(current.id)} aria-label="打开当前单集详情" title="打开详情">
                <Cover item={current} size={48} />
                <div className="now-text">
                  <div className="now-title" title={current.title}>{current.title}</div>
                  <div className="now-artist">{current.artist}</div>
                </div>
              </button>
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
            <PopMenu
              className={`player-subs ${subsOpen || captionOpen ? 'is-active' : ''}`}
              buttonClassName={`subs-btn ${subsOpen || captionOpen ? 'active' : ''}`}
              placement="up"
              disabled={!current}
              title="字幕"
              trigger={(
                <>
                  <Icon name="wave" size={15} />
                  <span>{transcript ? '字幕' : txStatus === 'queued' || txStatus === 'running' ? '转写中' : '转写'}</span>
                </>
              )}
            >
              {({ close }) => (
                <>
                  <MenuAction
                    checked={subsOpen}
                    hint={transcript ? `${transcript.lines.length} 行` : '还没转写'}
                    onSelect={() => { close(); toggleSubs() }}
                  >
                    字幕面板
                  </MenuAction>
                  <MenuAction
                    checked={captionOpen}
                    hint="浮在屏幕上"
                    onSelect={() => { close(); toggleCaption() }}
                  >
                    悬浮字幕窗
                  </MenuAction>
                </>
              )}
            </PopMenu>
            <span className="time">{fmtTime(position)} / {fmtTime(duration)}</span>
            <span className="rate-wrap">
              <button
                className="rate-btn"
                onClick={() => setRateOpen((value) => !value)}
                title="播放速度"
                aria-haspopup="menu"
                aria-expanded={rateOpen}
              >
                {settings.rate}×
              </button>
              {rateOpen ? (
                <span className="rate-menu" role="menu">
                  {SPEEDS.map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      role="menuitemradio"
                      aria-checked={rate === settings.rate}
                      className={rate === settings.rate ? 'is-on' : ''}
                      onClick={() => pickRate(rate)}
                    >
                      {rate}×
                    </button>
                  ))}
                </span>
              ) : null}
            </span>
            <span className="sleep-wrap">
              <button
                className={`rate-btn sleep-btn ${sleepAt ? 'active' : ''}`}
                onClick={() => setSleepOpen((value) => !value)}
                title="睡眠定时"
                aria-haspopup="menu"
                aria-expanded={sleepOpen}
              >
                <Icon name="moon" size={14} />
                {sleepAt ? <span className="sleep-left">{fmtTime(sleepRemaining)}</span> : null}
              </button>
              {sleepOpen ? (
                <span className="sleep-menu" role="menu">
                  <button type="button" role="menuitemradio" aria-checked={!sleepAt && sleepMinutes !== -1} className={!sleepAt && sleepMinutes !== -1 ? 'is-on' : ''} onClick={() => pickSleep('off')}>关闭</button>
                  {[15, 30, 45, 60].map((minutes) => (
                    <button key={minutes} type="button" role="menuitemradio" aria-checked={sleepMinutes === minutes} className={sleepMinutes === minutes ? 'is-on' : ''} onClick={() => pickSleep(minutes)}>{minutes} 分钟</button>
                  ))}
                  <button type="button" role="menuitemradio" aria-checked={sleepMinutes === -1} className={sleepMinutes === -1 ? 'is-on' : ''} onClick={() => pickSleep('end')}>本集结束</button>
                </span>
              ) : null}
            </span>
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

      {captionOpen ? (
        <CaptionOverlay
          line={captionLine}
          speakerLabel={captionSpeaker}
          target={trTarget}
          status={txStatus}
          fontSize={subtitleSize}
          onFontSize={changeSubtitleSize}
          x={captionPos.x}
          y={captionPos.y}
          width={captionSize.width}
          height={captionSize.height}
          onMove={moveCaption}
          onResize={resizeCaption}
          onClose={closeCaption}
          onSeek={seekTo}
        />
      ) : null}

      {liveStatus !== 'idle' && !liveNative ? (
        <LiveCaptionOverlay
          lines={liveLines}
          status={liveStatus}
          error={liveError}
          device={liveDevice}
          count={liveLines.length}
          elapsed={liveStartedAt ? Math.max(0, Math.round((liveNow - liveStartedAt) / 1000)) : 0}
          fontSize={subtitleSize}
          native={liveNative}
          level={liveLevel}
          hint={liveHint}
          opacity={liveOpacity}
          styleSize={liveStyleSize}
          width={liveWidth}
          onStyle={changeLiveStyle}
          onStop={stopLive}
          onSave={finishLive}
          onClose={() => finishLive(false)}
        />
      ) : null}

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
