import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useThemeControl } from './lib/theme.js'
import css from './styles.prefixed.css'
import { CLIENT_VERSION } from './lib/version.js'

const API = '/podwave/api'

async function getJSON(url) {
  const res = await fetch(url)
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || `请求失败 ${res.status}`)
  return data
}

async function sendJSON(url, method, body) {
  const res = await fetch(url, {
    method,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body ?? {}),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || `请求失败 ${res.status}`)
  return data
}

function fmtDuration(value) {
  const total = Math.max(0, Math.round(Number(value) || 0))
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  if (h > 0) return `${h} 小时 ${m} 分`
  return `${m} 分钟`
}

function fmtBytes(value) {
  const bytes = Number(value) || 0
  if (!bytes) return '0 B'
  if (bytes < 1024 ** 2) return `${Math.round(bytes / 1024)} KB`
  if (bytes < 1024 ** 3) return `${(bytes / 1024 ** 2).toFixed(1)} MB`
  return `${(bytes / 1024 ** 3).toFixed(1)} GB`
}

function fmtDate(ms) {
  if (!ms) return ''
  const date = new Date(ms)
  const pad = (n) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`
}

function storageHint(storage) {
  const dir = storage?.projectDir
  if (!dir) return '模型默认放在数据目录里'
  if (storage?.projectKind === 'workspace') return `模型默认放在当前工作区的 models/（${dir}）`
  return `模型默认放在插件目录（${dir}）`
}

function projectButtonLabel(storage) {
  return storage?.projectKind === 'workspace' ? '用工作区文件夹' : '用项目文件夹'
}

function modelsPathLabel(storage) {
  if (storage?.custom) return '自定义位置'
  if (storage?.projectDir && storage.dir === storage.projectDir) {
    return storage.projectKind === 'workspace' ? '工作区文件夹' : '项目文件夹'
  }
  if (storage?.legacyDir && storage.dir === storage.legacyDir) return '原有的 ~/.podwave/models'
  return '默认位置'
}

const PRESETS = [
  {
    id: 'cloud',
    title: '省心云端',
    tag: '推荐',
    desc: '免下载大模型，填一次 API Key 即用；翻译跟随 DSH 当前模型。',
  },
  {
    id: 'offline',
    title: '完全离线免费',
    tag: '零费用',
    desc: '音频与字幕不出本机，使用本地语音识别与本地翻译模型。',
  },
  {
    id: 'hybrid',
    title: '省钱混合',
    tag: '均衡',
    desc: '本地免费转写 + DSH 当前模型高质量翻译。',
  },
]

export default function SettingsPage() {
  const { theme, mode: themeMode, systemTheme, setMode: setThemeMode } = useThemeControl()

  // 核心配置状态
  const [asrProviderUi, setAsrProviderUi] = useState('api')
  const [provider, setProvider] = useState('dsh')
  const [trTarget, setTrTarget] = useState('zh')
  const [autoAfterTranscribe, setAutoAfterTranscribe] = useState(true)
  const [autoShowTranslation, setAutoShowTranslation] = useState(true)
  const [realtime, setRealtime] = useState(true)
  const [presetBusy, setPresetBusy] = useState('')

  // API 与模型列表
  const [trConfig, setTrConfig] = useState(null)
  const [apiBase, setApiBase] = useState('https://api.deepseek.com')
  const [apiModel, setApiModel] = useState('deepseek-chat')
  const [apiKey, setApiKey] = useState('')
  const [apiModels, setApiModels] = useState([])
  const [modelListBusy, setModelListBusy] = useState(false)
  const [modelListNote, setModelListNote] = useState('')
  const [manualModel, setManualModel] = useState(false)

  // 实时字幕
  const [liveDeviceId, setLiveDeviceId] = useState('')
  const [liveDevices, setLiveDevices] = useState([])
  const [liveSaveOnStop, setLiveSaveOnStop] = useState(true)
  const [liveDisplayMode, setLiveDisplayMode] = useState('bilingual')
  const [liveSource, setLiveSource] = useState('auto')
  const [liveTapOk, setLiveTapOk] = useState(true)
  const [liveDraftReady, setLiveDraftReady] = useState(false)
  const [liveOpacity, setLiveOpacity] = useState(0.78)
  const [liveStyleSize, setLiveStyleSize] = useState(18)
  const [liveWidth, setLiveWidth] = useState(780)
  const [liveNote, setLiveNote] = useState('')
  const liveStyleTimer = useRef(0)

  // 高级设置（默认折叠）
  const [advancedOpen, setAdvancedOpen] = useState(false)
  const [hotwords, setHotwords] = useState('')
  const [chunkMinutes, setChunkMinutes] = useState(15)
  const [diarize, setDiarize] = useState(true)
  const [models, setModels] = useState([])
  const [storage, setStorage] = useState(null)
  const [dirDraft, setDirDraft] = useState('')
  const [moving, setMoving] = useState(false)
  const [modelConfig, setModelConfig] = useState({ asrModel: '', translateModel: '' })
  const [asrModel, setAsrModel] = useState('')
  const [translateModel, setTranslateModel] = useState('')
  const [transcribeInfo, setTranscribeInfo] = useState(null)
  const [uiSettings, setUiSettings] = useState({ showSidebarPanel: true })
  const [importConfig, setImportConfig] = useState({ mode: 'copy', orphans: 0, orphanBytes: 0 })
  const [history, setHistory] = useState([])
  const [historyDir, setHistoryDir] = useState('')
  const [historyBytes, setHistoryBytes] = useState(0)
  const [liveHistoryCount, setLiveHistoryCount] = useState(0)

  // 环境安装与版本
  const [setup, setSetup] = useState(null)
  const [setupPlan, setSetupPlan] = useState(null)
  const [verifyResult, setVerifyResult] = useState(null)
  const [verifyBusy, setVerifyBusy] = useState(false)
  const [setupSource, setSetupSource] = useState('auto')
  const [setupBusy, setSetupBusy] = useState(false)
  const [updateInfo, setUpdateInfo] = useState(null)
  const [updateBusy, setUpdateBusy] = useState(false)

  // 全局提示
  const [saving, setSaving] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const messageTimer = useRef(0)

  const flash = useCallback((text) => {
    setMessage(text)
    window.clearTimeout(messageTimer.current)
    messageTimer.current = window.setTimeout(() => setMessage(''), 2400)
  }, [])

  const loadLiveDevices = useCallback(async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices()
      const inputs = devices.filter((device) => device.kind === 'audioinput')
      setLiveDevices(inputs)
      return inputs
    } catch {
      return []
    }
  }, [])

  const load = useCallback(async () => {
    try {
      const [historyData, liveHistData, modelsData, trData, uiData, txData, importData, setupData, updateData, liveData] = await Promise.all([
        getJSON(`${API}/history`),
        getJSON(`${API}/live/history`).catch(() => ({ items: [] })),
        getJSON(`${API}/models`),
        getJSON(`${API}/translate/settings`),
        getJSON(`${API}/ui-settings`),
        getJSON(`${API}/transcribe/settings`),
        getJSON(`${API}/import/settings`),
        getJSON(`${API}/setup`),
        getJSON(`${API}/update`),
        getJSON(`${API}/live`),
      ])
      setSetup(setupData)
      setUpdateInfo(updateData)
      if (setupData?.job?.status === 'running') setSetupBusy(true)
      setImportConfig({ mode: importData.mode || 'copy', orphans: importData.orphans || 0, orphanBytes: importData.orphanBytes || 0 })
      setUiSettings({ showSidebarPanel: uiData?.showSidebarPanel !== false })
      setAutoShowTranslation(uiData?.autoShowTranslation !== false)
      setAdvancedOpen(uiData?.advancedOpen === true)

      setHotwords((txData.hotwords || []).join(' '))
      setChunkMinutes(txData.chunkMinutes || 15)
      setDiarize(txData.diarize !== false)
      setAsrProviderUi(txData.provider || 'api')
      setRealtime(txData.realtime !== false)

      setLiveDeviceId(liveData?.deviceId || '')
      setLiveSaveOnStop(liveData?.saveOnStop !== false)
      setLiveDisplayMode(['original', 'bilingual', 'translation'].includes(liveData?.displayMode) ? liveData.displayMode : 'bilingual')
      setLiveSource(liveData?.source || 'auto')
      setLiveTapOk(liveData?.tap?.supported !== false)
      setLiveDraftReady(Boolean(liveData?.draft?.available))
      if (Number.isFinite(Number(liveData?.opacity))) setLiveOpacity(Number(liveData.opacity))
      if (Number.isFinite(Number(liveData?.fontSize))) setLiveStyleSize(Number(liveData.fontSize))
      if (Number.isFinite(Number(liveData?.width))) setLiveWidth(Number(liveData.width))
      loadLiveDevices()

      setHistory(historyData.items || [])
      setHistoryDir(historyData.dir || '')
      setHistoryBytes(Number(historyData.bytes) || 0)
      setLiveHistoryCount(Array.isArray(liveHistData?.items) ? liveHistData.items.length : 0)

      setModels(modelsData.models || [])
      setStorage(modelsData.storage || null)
      setDirDraft(modelsData.storage?.dir || '')
      setModelConfig(modelsData.config || { asrModel: '', translateModel: '' })
      setTranscribeInfo(modelsData.transcribe || null)
      setAsrModel(modelsData.config?.asrModel || '')
      setTranslateModel(modelsData.config?.translateModel || '')

      setTrConfig(trData)
      setProvider(trData.provider || 'dsh')
      setTrTarget(trData.target === 'en' ? 'en' : 'zh')
      setAutoAfterTranscribe(trData.autoAfterTranscribe !== false)
      setApiBase(trData.apiBase || 'https://api.deepseek.com')
      setApiModel(trData.apiModel || 'deepseek-chat')
      setApiKey('')
      setError('')

      if (trData.provider === 'api') {
        sendJSON(`${API}/translate/models`, 'POST', { base: trData.apiBase, key: undefined })
          .then((data) => {
            const list = Array.isArray(data?.models) ? data.models : []
            setApiModels(list)
            setModelListNote(list.length ? `已发现 ${list.length} 个模型` : '')
          })
          .catch(() => {})
      }
    } catch (err) {
      setError(err.message)
    }
  }, [loadLiveDevices])

  useEffect(() => {
    load()
  }, [load])

  useEffect(() => {
    let cancelled = false
    const wantLocal = asrProviderUi === 'local' || provider === 'local'
    getJSON(`${API}/setup/plan?source=${setupSource}&mode=${wantLocal ? 'local' : 'basic'}`)
      .then((data) => { if (!cancelled) setSetupPlan(data) })
      .catch(() => {})
    return () => { cancelled = true }
  }, [setupSource, asrProviderUi, provider, setup?.job?.status])

  useEffect(() => {
    if (!setupBusy && setup?.job?.status !== 'running') return undefined
    const timer = window.setInterval(async () => {
      try {
        const data = await getJSON(`${API}/setup`)
        setSetup(data)
        if (data.job?.status !== 'running') {
          setSetupBusy(false)
          load()
        }
      } catch {
        /* 轮询失败不打断界面 */
      }
    }, 2500)
    return () => window.clearInterval(timer)
  }, [setupBusy, setup?.job?.status, load])

  // —— 一键方案切换（零保存按钮）——
  const activePreset =
    asrProviderUi === 'api' && provider === 'dsh'
      ? 'cloud'
      : asrProviderUi === 'local' && provider === 'local'
        ? 'offline'
        : asrProviderUi === 'local' && provider === 'dsh'
          ? 'hybrid'
          : 'custom'

  const selectPreset = async (presetId) => {
    if (presetBusy) return
    setPresetBusy(presetId)
    setError('')
    try {
      const data = await sendJSON(`${API}/preset`, 'POST', { preset: presetId })
      if (data.transcribe) {
        setAsrProviderUi(data.transcribe.provider || 'api')
        if (data.transcribe.runtime) setTranscribeInfo(data.transcribe.runtime)
      }
      if (data.translate) {
        setTrConfig(data.translate)
        setProvider(data.translate.provider || 'dsh')
        setAutoAfterTranscribe(data.translate.autoAfterTranscribe !== false)
      }
      if (data.models) {
        setModelConfig(data.models.config || { asrModel: '', translateModel: '' })
        setAsrModel(data.models.config?.asrModel || '')
        setTranslateModel(data.models.config?.translateModel || '')
        setModels(data.models.models || [])
        setStorage(data.models.storage || null)
      }
      const label = PRESETS.find((p) => p.id === presetId)?.title || presetId
      flash(`已切换到「${label}」`)
    } catch (err) {
      setError(err.message)
    } finally {
      setPresetBusy('')
    }
  }

  // —— 自动保存辅助函数 ——
  const patchTranscribe = async (patch, notice = '已自动保存') => {
    setError('')
    try {
      const data = await sendJSON(`${API}/transcribe/settings`, 'PUT', patch)
      if (data.provider) setAsrProviderUi(data.provider)
      if (typeof data.realtime === 'boolean') setRealtime(data.realtime)
      if (typeof data.diarize === 'boolean') setDiarize(data.diarize)
      if (Number.isFinite(Number(data.chunkMinutes))) setChunkMinutes(Number(data.chunkMinutes))
      if (Array.isArray(data.hotwords)) setHotwords(data.hotwords.join(' '))
      if (data.runtime) setTranscribeInfo(data.runtime)
      if (notice) flash(notice)
    } catch (err) {
      setError(err.message)
    }
  }

  const patchTranslate = async (patch, notice = '已自动保存') => {
    setError('')
    try {
      const data = await sendJSON(`${API}/translate/settings`, 'PUT', patch)
      setTrConfig(data)
      setProvider(data.provider || 'dsh')
      setTrTarget(data.target === 'en' ? 'en' : 'zh')
      setAutoAfterTranscribe(data.autoAfterTranscribe !== false)
      if (data.apiBase) setApiBase(data.apiBase)
      if (data.apiModel) setApiModel(data.apiModel)
      if (notice) flash(notice)
      return data
    } catch (err) {
      setError(err.message)
      return null
    }
  }

  const patchUi = async (patch, notice = '') => {
    try {
      const data = await sendJSON(`${API}/ui-settings`, 'PUT', patch)
      if (typeof data?.showSidebarPanel === 'boolean') setUiSettings({ showSidebarPanel: data.showSidebarPanel })
      if (typeof data?.autoShowTranslation === 'boolean') setAutoShowTranslation(data.autoShowTranslation)
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('podwave:ui-settings', { detail: data }))
      }
      if (notice) flash(notice)
    } catch (err) {
      setError(err.message)
    }
  }

  const patchLive = async (patch, notice = '已自动保存') => {
    setError('')
    try {
      const data = await sendJSON(`${API}/live/settings`, 'PUT', patch)
      if (typeof data.saveOnStop === 'boolean') setLiveSaveOnStop(data.saveOnStop)
      if (['original', 'bilingual', 'translation'].includes(data.displayMode)) setLiveDisplayMode(data.displayMode)
      if (data.source) setLiveSource(data.source)
      if (typeof data.deviceId === 'string') setLiveDeviceId(data.deviceId)
      if (notice) flash(notice)
    } catch (err) {
      setError(err.message)
    }
  }

  const commitApiKey = async () => {
    const trimmed = apiKey.trim()
    if (!trimmed) return
    setSaving('key')
    const saved = await patchTranslate({ apiKey: trimmed }, 'API Key 已保存')
    setSaving('')
    if (saved) {
      setApiKey('')
      // 刷新 transcribeInfo 中的 api.hasKey 状态
      getJSON(`${API}/transcribe/settings`).then((d) => { if (d?.runtime) setTranscribeInfo(d.runtime) }).catch(() => {})
    }
  }

  const commitApiGateway = async (nextBase = apiBase, nextModel = apiModel) => {
    const base = String(nextBase || '').trim()
    const model = String(nextModel || '').trim()
    const patch = {}
    if (base) patch.apiBase = base
    if (model && model !== '__saved') patch.apiModel = model
    if (!Object.keys(patch).length) return
    await patchTranslate(patch, '网关设置已保存')
  }

  const commitHotwords = async () => {
    const words = hotwords.split(/[\s,，、]+/).map((w) => w.trim()).filter(Boolean).slice(0, 500)
    await patchTranscribe({ hotwords: words }, '热词已保存')
  }

  const saveModelChoice = async (patch) => {
    setError('')
    try {
      const data = await sendJSON(`${API}/models`, 'PUT', patch)
      setModelConfig(data.config)
      setAsrModel(data.config?.asrModel || '')
      setTranslateModel(data.config?.translateModel || '')
      setModels(data.models || [])
      setTranscribeInfo(data.transcribe || null)
      if (data.translate) setTrConfig(data.translate)
      flash('模型已切换')
    } catch (err) {
      setError(err.message)
    }
  }

  const changeLiveStyle = (patch) => {
    if (Number.isFinite(Number(patch.opacity))) setLiveOpacity(Number(patch.opacity))
    if (Number.isFinite(Number(patch.fontSize))) setLiveStyleSize(Number(patch.fontSize))
    if (Number.isFinite(Number(patch.width))) setLiveWidth(Number(patch.width))
    window.clearTimeout(liveStyleTimer.current)
    liveStyleTimer.current = window.setTimeout(() => {
      sendJSON(`${API}/live/settings`, 'PUT', patch).catch((err) => setError(err.message))
    }, 300)
  }

  const probeLiveDevices = async () => {
    setLiveNote('正在请求音频设备权限…')
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      for (const track of stream.getTracks()) track.stop()
    } catch (err) {
      setLiveNote(`无法读取音频设备：${err.message || err}`)
      return
    }
    const inputs = await loadLiveDevices()
    setLiveNote(inputs.length ? `找到 ${inputs.length} 个音频输入设备` : '未发现音频输入设备')
  }

  const startSetup = async (mode = 'basic') => {
    setError('')
    setSetupBusy(true)
    try {
      await sendJSON(`${API}/setup/install`, 'POST', { source: setupSource, mode })
      const data = await getJSON(`${API}/setup`)
      setSetup(data)
      flash(mode === 'local' ? '开始下载离线运行环境与模型…' : '开始安装基础组件…')
    } catch (err) {
      setSetupBusy(false)
      setError(err.message)
    }
  }

  const cancelSetupJob = async () => {
    try {
      await sendJSON(`${API}/setup/cancel`, 'POST', {})
      flash('已请求取消安装')
    } catch (err) {
      setError(err.message)
    }
  }

  const runVerify = async () => {
    setVerifyBusy(true)
    try {
      const data = await getJSON(`${API}/setup/verify`)
      setVerifyResult(data)
      flash(data.ok ? '环境检查全部通过' : '部分检查项未通过')
    } catch (err) {
      flash(err.message || '检查失败')
    } finally {
      setVerifyBusy(false)
    }
  }

  const copyDiagnose = async () => {
    try {
      const data = await getJSON(`${API}/setup/diagnose`)
      const text = JSON.stringify(data, null, 2)
      try {
        await navigator.clipboard.writeText(text)
      } catch {
        const area = document.createElement('textarea')
        area.value = text
        area.style.position = 'fixed'
        area.style.opacity = '0'
        document.body.appendChild(area)
        area.select()
        document.execCommand('copy')
        area.remove()
      }
      flash('诊断信息已复制')
    } catch (err) {
      flash(err.message || '复制失败')
    }
  }

  const refreshApiModels = async () => {
    setModelListBusy(true)
    setModelListNote('')
    try {
      const data = await sendJSON(`${API}/translate/models`, 'POST', {
        base: apiBase,
        key: apiKey.trim() || undefined,
      })
      const list = Array.isArray(data?.models) ? data.models : []
      setApiModels(list)
      setModelListNote(list.length ? `已发现 ${list.length} 个模型` : '该地址未返回模型列表，可手动输入')
    } catch (err) {
      setModelListNote(err.message || '获取模型列表失败')
    } finally {
      setModelListBusy(false)
    }
  }

  const changeModelsDir = async (dir, move = true) => {
    setMoving(true)
    setError('')
    try {
      const data = await sendJSON(`${API}/models/dir`, 'POST', { dir, move })
      setStorage(data.storage || null)
      setModels(data.models || [])
      setDirDraft(data.storage?.dir || '')
      const movedCount = (data.moved || []).length
      flash(movedCount ? `已迁移 ${movedCount} 个模型` : '模型目录已更新')
    } catch (err) {
      setError(err.message)
    } finally {
      setMoving(false)
    }
  }

  const deleteModel = async (name) => {
    setSaving(`model:${name}`)
    setError('')
    try {
      const data = await sendJSON(`${API}/models/remove`, 'POST', { name })
      setStorage(data || null)
      setModels(data.models || [])
      flash(`已删除 ${name}`)
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving('')
    }
  }

  const saveImport = async (mode) => {
    setError('')
    try {
      const data = await sendJSON(`${API}/import/settings`, 'PUT', { mode })
      setImportConfig((prev) => ({ ...prev, mode: data.mode }))
      flash('导入方式已保存')
    } catch (err) {
      setError(err.message)
    }
  }

  const cleanupImports = async () => {
    if (!importConfig.orphans) return
    if (!window.confirm(`清理 ${importConfig.orphans} 个未引用的导入副本？不会影响源文件。`)) return
    setSaving('imports')
    try {
      const data = await sendJSON(`${API}/imports/orphans`, 'DELETE', {})
      setImportConfig((prev) => ({ ...prev, orphans: 0, orphanBytes: 0 }))
      flash(`已清理 ${data.removed || 0} 个副本`)
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving('')
    }
  }

  const checkUpdates = async () => {
    setUpdateBusy(true)
    try {
      setUpdateInfo(await getJSON(`${API}/update?force=1`))
    } catch {
      flash('检查更新失败，请稍后再试')
    } finally {
      setUpdateBusy(false)
    }
  }

  const toggleAdvanced = () => {
    const next = !advancedOpen
    setAdvancedOpen(next)
    sendJSON(`${API}/ui-settings`, 'PUT', { advancedOpen: next }).catch(() => {})
  }

  // 安全构造模型选项（绝无 TDZ 引用错误）
  const allModels = models.length
    ? models
    : [
        { name: modelConfig.asrModel || 'moss-transcribe-diarize', kind: 'asr', ready: Boolean(transcribeInfo?.modelReady) },
        { name: modelConfig.translateModel || 'hy-mt3-1.8b-4bit', kind: 'translate', ready: Boolean(trConfig?.localReady) },
      ]
  const kindOf = (model) =>
    model.kind || (/asr|sensevoice|sherpa|moss/i.test(model.name) ? 'asr' : /^hy-mt/i.test(model.name) ? 'translate' : '')
  const asrOptions = allModels.filter((model) => kindOf(model) === 'asr' && model.ready !== false)
  const translateOptions = allModels.filter((model) => kindOf(model) === 'translate' && model.ready !== false)
  const withCurrent = (options, current) => {
    if (!current || options.some((model) => model.name === current)) return options
    const known = allModels.find((model) => model.name === current)
    return [{ name: current, ready: known ? known.ready !== false : false, kind: known?.kind || '', missing: true }, ...options]
  }
  const asrChoices = withCurrent(asrOptions.length ? asrOptions : allModels, asrModel)
  const translateChoices = withCurrent(translateOptions.length ? translateOptions : allModels, translateModel)

  const localAsrReady = Boolean(transcribeInfo?.installed && transcribeInfo?.modelReady)
  const localTranslateReady = Boolean(trConfig?.localReady)
  const needsLocalInstall =
    (asrProviderUi === 'local' && !localAsrReady) || (provider === 'local' && !localTranslateReady)
  const hasKey = Boolean(trConfig?.hasApiKey || transcribeInfo?.api?.hasKey)
  const staleHost = Boolean(CLIENT_VERSION && setup?.version && setup.version !== CLIENT_VERSION)
  const setupRunning = Boolean(setupBusy || setup?.job?.status === 'running')

  return (
    <div className="podwave-root podwave-settings-host" data-pw-theme={theme} style={{ height: 'auto', overflow: 'visible' }}>
      <style>{css}</style>
      <div className="podwave-settings">
        <header className="settings-head">
          <h1>播客</h1>
          <p>所有修改自动保存，立即生效。</p>
        </header>

        {staleHost ? (
          <div className="settings-stale">
            插件已更新到 v{CLIENT_VERSION}，当前运行的后台仍是 v{setup.version}。
            <strong>重启 DSH</strong> 后所有新优化将完全生效。
          </div>
        ) : null}
        {error ? <div className="banner error" onClick={() => setError('')}>{error}</div> : null}
        {message ? <div className="settings-message">{message}</div> : null}

        {/* 0. 外观模式：明 / 暗 / 跟随系统 */}
        <section className="settings-card">
          <h2>外观模式</h2>
          <p className="settings-hint">切换浅色、深色或自动跟随系统外观，主界面与设置页实时同步。</p>
          <div className="theme-cards" role="group" aria-label="外观模式">
            <button
              type="button"
              className={`theme-card ${themeMode === 'light' ? 'is-active' : ''}`}
              aria-pressed={themeMode === 'light'}
              onClick={() => { setThemeMode('light'); flash('已切换到浅色模式') }}
            >
              <div className="theme-swatch" aria-hidden="true">
                <div className="sw-light-l" />
                <div className="sw-light-r">
                  <div className="sw-bar is-a" />
                  <div className="sw-bar is-b" />
                  <div className="sw-bar is-c" />
                </div>
              </div>
              <div className="theme-card-txt">
                <strong>浅色模式</strong>
                <span>拉丝暖灰面板，日间高清晰</span>
              </div>
            </button>

            <button
              type="button"
              className={`theme-card ${themeMode === 'dark' ? 'is-active' : ''}`}
              aria-pressed={themeMode === 'dark'}
              onClick={() => { setThemeMode('dark'); flash('已切换到深色模式') }}
            >
              <div className="theme-swatch" aria-hidden="true">
                <div className="sw-dark-l" />
                <div className="sw-dark-r">
                  <div className="sw-bar is-a-dark" />
                  <div className="sw-bar is-b-dark" />
                  <div className="sw-bar is-c-dark" />
                </div>
              </div>
              <div className="theme-card-txt">
                <strong>深色模式</strong>
                <span>阳极石墨暗面，夜间低眩光</span>
              </div>
            </button>

            <button
              type="button"
              className={`theme-card ${themeMode === 'system' ? 'is-active' : ''}`}
              aria-pressed={themeMode === 'system'}
              onClick={() => { setThemeMode('system'); flash('已切换为跟随系统') }}
            >
              <div className="theme-swatch sw-sys" aria-hidden="true">
                <div className="sw-light-r">
                  <div className="sw-bar is-a" />
                  <div className="sw-bar is-b" />
                </div>
                <div className="sw-dark-r">
                  <div className="sw-bar is-a-dark" />
                  <div className="sw-bar is-b-dark" />
                </div>
              </div>
              <div className="theme-card-txt">
                <strong>跟随系统</strong>
                <span>当前系统为{systemTheme === 'dark' ? '深色' : '浅色'}</span>
              </div>
            </button>
          </div>
        </section>

        {/* 1. 一键配置：使用方式 */}
        <section className="settings-card">
          <h2>使用方式（一键配置）</h2>
          <p className="settings-hint">选一种最顺手的方式，转写和翻译会自动配合好。</p>
          <div className="preset-grid">
            {PRESETS.map((preset) => {
              const selected = activePreset === preset.id
              return (
                <button
                  key={preset.id}
                  type="button"
                  className={`preset-card ${selected ? 'is-active' : ''}`}
                  disabled={Boolean(presetBusy)}
                  onClick={() => selectPreset(preset.id)}
                >
                  <div className="preset-head">
                    <span className="preset-title">{preset.title}</span>
                    <span className={`preset-tag ${selected ? 'is-active' : ''}`}>{selected ? '当前' : preset.tag}</span>
                  </div>
                  <p className="preset-desc">{preset.desc}</p>
                </button>
              )
            })}
          </div>

          <div className="preset-summary">
            <span>
              转写：{asrProviderUi === 'local'
                ? (localAsrReady ? `本地 ${transcribeInfo?.modelName || '模型'}（已就绪）` : '本地模型未就绪')
                : (hasKey ? 'DeepSeek 云端（已就绪）' : 'DeepSeek 云端（待填 Key）')}
            </span>
            <span>·</span>
            <span>
              翻译：{provider === 'dsh'
                ? (trConfig?.dshReady ? `DSH（${trConfig.dshLabel}）` : 'DSH 当前模型')
                : provider === 'local'
                  ? (localTranslateReady ? `本地 ${trConfig?.localModel || '模型'}（已就绪）` : '本地翻译未就绪')
                  : `自定义 API（${apiModel}）`}
            </span>
          </div>

          {needsLocalInstall ? (
            <div className="settings-actions">
              <button className="settings-btn" disabled={setupRunning} onClick={() => startSetup('local')}>
                {setupRunning ? '正在安装离线能力…' : '一键安装离线能力'}
              </button>
              {setupRunning ? (
                <button className="settings-btn ghost" onClick={cancelSetupJob}>取消</button>
              ) : (
                <span className="settings-status">
                  {setupPlan?.totalBytes ? `约需下载 ${fmtBytes(setupPlan.totalBytes)}` : '安装 Python 运行环境与推荐本地模型'}
                </span>
              )}
            </div>
          ) : null}

          {setup?.job && (setupRunning || setup.job.error) ? (
            <div className="setup-job">
              <div className="setup-job-line">
                <span>{setup.job.stage || setup.job.status}</span>
                <span>{setup.job.progress || 0}% · {fmtBytes(setup.job.bytes)} / {fmtBytes(setup.job.expected)}</span>
              </div>
              <div className="setup-progress"><span style={{ width: `${setup.job.progress || 0}%` }} /></div>
              {setup.job.error ? <p className="settings-empty">失败：{setup.job.error}</p> : null}
            </div>
          ) : null}

          {/* DeepSeek API Key 始终常驻可见：云端转写与实时字幕都需要它 */}
          <div className="settings-fields" style={{ marginTop: 14 }}>
            <label className="field-row">
              <span>DeepSeek Key</span>
              <input
                type="password"
                value={apiKey}
                onChange={(event) => setApiKey(event.target.value)}
                onBlur={commitApiKey}
                onKeyDown={(event) => { if (event.key === 'Enter') { event.preventDefault(); commitApiKey() } }}
                placeholder={hasKey ? `已保存 ${trConfig?.apiKeyMasked || 'sk-****'}（输入新 Key 回车覆盖）` : 'sk-...（云端转写与实时字幕共用）'}
                spellCheck={false}
              />
              {apiKey.trim() ? (
                <button type="button" className="settings-btn is-mini" disabled={saving === 'key'} onClick={commitApiKey}>
                  {saving === 'key' ? '保存中…' : '保存'}
                </button>
              ) : (
                <span className="settings-status">{hasKey ? '已配置' : '未填写'}</span>
              )}
            </label>
          </div>
        </section>

        {/* 2. 字幕与翻译习惯 */}
        <section className="settings-card">
          <h2>字幕与翻译</h2>
          <div className="settings-fields">
            <label className="field-row">
              <span>翻译目标语言</span>
              <select
                value={trTarget}
                onChange={(event) => {
                  const next = event.target.value === 'en' ? 'en' : 'zh'
                  setTrTarget(next)
                  patchTranslate({ target: next }, '目标语言已更新')
                  patchUi({ translateTarget: next })
                }}
              >
                <option value="zh">中文（外语自动译成中文）</option>
                <option value="en">English（中文自动译成英文）</option>
              </select>
            </label>
            <label className="check-row">
              <input
                type="checkbox"
                checked={autoAfterTranscribe}
                onChange={(event) => {
                  const next = event.target.checked
                  setAutoAfterTranscribe(next)
                  patchTranslate({ autoAfterTranscribe: next })
                }}
              />
              <span>外语播客转写完自动翻译（中文播客自动跳过，不用再手动点翻译）</span>
            </label>
            <label className="check-row">
              <input
                type="checkbox"
                checked={autoShowTranslation}
                onChange={(event) => {
                  const next = event.target.checked
                  setAutoShowTranslation(next)
                  patchUi({ autoShowTranslation: next }, '已自动保存')
                }}
              />
              <span>打开已有译文的单集时默认展示双语字幕</span>
            </label>
            <label className="check-row">
              <input
                type="checkbox"
                checked={realtime}
                onChange={(event) => {
                  const next = event.target.checked
                  setRealtime(next)
                  patchTranscribe({ realtime: next })
                }}
              />
              <span>边播边出字幕（云端转写模式下，播放时按进度滚动识别）</span>
            </label>
          </div>
        </section>

        {/* 3. 实时字幕（听电脑声音） */}
        <section className="settings-card">
          <h2>实时字幕（听电脑声音）</h2>
          <p className="settings-hint">
            {liveTapOk
              ? 'macOS 14.2+ 直接监听系统声音，无需虚拟声卡。字幕框可直接拖边缘或右下角改大小（双击右下角恢复自动高度），悬停点 ⚙ 可随时切显示内容。'
              : '听电脑正在播放的视频、直播或会议，需要配合虚拟声卡（可在下方高级设置中选设备）。'}
          </p>
          <div className="preset-summary" style={{ marginBottom: 12 }}>
            <span>采集：{liveTapOk ? '系统音频直采（已支持）' : '虚拟声卡 / 麦克风'}</span>
            <span>·</span>
            <span>瞬时滚字草稿：{liveDraftReady ? '已启用（本地 SenseVoice）' : '未安装 SenseVoice，使用云端直出'}</span>
          </div>
          <div className="settings-fields">
            <label className="field-row">
              <span>显示内容</span>
              <select
                value={liveDisplayMode}
                onChange={(event) => {
                  const next = event.target.value
                  setLiveDisplayMode(next)
                  patchLive({ displayMode: next }, '字幕显示模式已更新')
                }}
              >
                <option value="bilingual">原文 + 译文（双语）</option>
                <option value="original">仅显示原文（更快，不调用翻译）</option>
                <option value="translation">仅显示译文（无译文时平滑显示原文）</option>
              </select>
            </label>
            <label className="field-row">
              <span>底板不透明度</span>
              <input
                type="range"
                min="15"
                max="100"
                step="1"
                value={Math.round(liveOpacity * 100)}
                onChange={(event) => changeLiveStyle({ opacity: Number(event.target.value) / 100 })}
              />
              <span className="settings-status">{Math.round(liveOpacity * 100)}%</span>
            </label>
            <label className="field-row">
              <span>字号</span>
              <input
                type="range"
                min="12"
                max="42"
                step="1"
                value={liveStyleSize}
                onChange={(event) => changeLiveStyle({ fontSize: Number(event.target.value) })}
              />
              <span className="settings-status">{liveStyleSize}px</span>
            </label>
            <label className="field-row">
              <span>窗口宽度</span>
              <input
                type="range"
                min="380"
                max="1200"
                step="10"
                value={liveWidth}
                onChange={(event) => changeLiveStyle({ width: Number(event.target.value) })}
              />
              <span className="settings-status">{liveWidth}px</span>
            </label>
            <label className="check-row">
              <input
                type="checkbox"
                checked={liveSaveOnStop}
                onChange={(event) => {
                  const next = event.target.checked
                  setLiveSaveOnStop(next)
                  patchLive({ saveOnStop: next })
                }}
              />
              <span>停止实时字幕时自动保存记录（可在播客左侧「实时记录」回看与导出）</span>
            </label>
          </div>
        </section>

        {/* 4. 高级设置（默认折叠） */}
        <section className={`settings-card collapsible ${advancedOpen ? 'is-open' : ''}`}>
          <button
            type="button"
            className="card-head"
            onClick={toggleAdvanced}
            aria-expanded={advancedOpen}
            title={advancedOpen ? '收起高级设置' : '展开高级设置'}
          >
            <h2>高级设置</h2>
            <span className="card-badge">
              模型 · 网关 · 热词 · 设备 · 诊断
            </span>
            <span className="card-caret" aria-hidden="true">▾</span>
          </button>

          {advancedOpen ? (
            <div className="advanced-body">
              {/* 4.1 翻译引擎与自定义 API 网关 */}
              <div className="adv-group">
                <h3>翻译引擎与自定义网关</h3>
                <div className="settings-fields">
                  <label className="field-row">
                    <span>翻译引擎</span>
                    <select
                      value={provider}
                      onChange={(event) => patchTranslate({ provider: event.target.value })}
                    >
                      <option value="dsh">DSH 当前模型</option>
                      <option value="local">本地离线模型</option>
                      <option value="api">自定义 OpenAI 兼容 API</option>
                    </select>
                  </label>
                  <label className="field-row">
                    <span>API 地址</span>
                    <input
                      value={apiBase}
                      onChange={(event) => setApiBase(event.target.value)}
                      onBlur={() => commitApiGateway(apiBase, apiModel)}
                      placeholder="https://api.deepseek.com"
                      spellCheck={false}
                    />
                  </label>
                  <div className="field-row">
                    <span>对话模型</span>
                    {manualModel || !apiModels.length ? (
                      <input
                        value={apiModel}
                        onChange={(event) => setApiModel(event.target.value)}
                        onBlur={() => commitApiGateway(apiBase, apiModel)}
                        placeholder="deepseek-chat"
                        spellCheck={false}
                      />
                    ) : (
                      <select
                        value={apiModels.includes(apiModel) ? apiModel : apiModel}
                        onChange={(event) => {
                          const next = event.target.value
                          setApiModel(next)
                          commitApiGateway(apiBase, next)
                        }}
                      >
                        {!apiModels.includes(apiModel) && apiModel ? (
                          <option value={apiModel}>{apiModel}（当前已保存）</option>
                        ) : null}
                        {apiModels.map((name) => (
                          <option key={name} value={name}>{name}</option>
                        ))}
                      </select>
                    )}
                    <button type="button" className="settings-btn is-mini" onClick={refreshApiModels} disabled={modelListBusy}>
                      {modelListBusy ? '读取中…' : '读列表'}
                    </button>
                    {apiModels.length ? (
                      <button type="button" className="settings-btn is-mini ghost" onClick={() => setManualModel((v) => !v)}>
                        {manualModel ? '选列表' : '手填'}
                      </button>
                    ) : null}
                  </div>
                  {modelListNote ? <p className="settings-status">{modelListNote}</p> : null}
                </div>
              </div>

              {/* 4.2 转写细节 */}
              <div className="adv-group">
                <h3>转写细节</h3>
                <div className="settings-fields">
                  <label className="field-row">
                    <span>专有热词</span>
                    <input
                      value={hotwords}
                      onChange={(event) => setHotwords(event.target.value)}
                      onBlur={commitHotwords}
                      onKeyDown={(event) => { if (event.key === 'Enter') { event.preventDefault(); commitHotwords() } }}
                      placeholder="空格分隔，例如：DeepSeek 播客 硅谷"
                    />
                  </label>
                  <label className="field-row">
                    <span>本地分块（分）</span>
                    <input
                      type="number"
                      min="1"
                      max="60"
                      value={chunkMinutes}
                      onChange={(event) => setChunkMinutes(event.target.value)}
                      onBlur={() => patchTranscribe({ chunkMinutes: Math.min(60, Math.max(1, Number(chunkMinutes) || 15)) })}
                    />
                    <span className="settings-status">仅本地模型生效</span>
                  </label>
                  <label className="check-row">
                    <input
                      type="checkbox"
                      checked={diarize}
                      onChange={(event) => {
                        const next = event.target.checked
                        setDiarize(next)
                        patchTranscribe({ diarize: next })
                      }}
                    />
                    <span>自动识别说话人（MOSS 自带；其它引擎需本地声纹模型）</span>
                  </label>
                </div>
              </div>

              {/* 4.3 本地模型与目录 */}
              <div className="adv-group">
                <h3>本地模型与存储位置</h3>
                {transcribeInfo?.modelProblem ? <p className="settings-stale">{transcribeInfo.modelProblem}</p> : null}
                <div className="settings-fields">
                  <label className="field-row">
                    <span>本地转写模型</span>
                    <select
                      value={asrModel}
                      onChange={(event) => {
                        const next = event.target.value
                        setAsrModel(next)
                        saveModelChoice({ asrModel: next })
                      }}
                    >
                      {asrChoices.map((model) => (
                        <option key={model.name} value={model.name}>
                          {model.name}{model.missing ? '（不可用）' : model.ready ? '' : '（未就绪）'}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="field-row">
                    <span>本地翻译模型</span>
                    <select
                      value={translateModel}
                      onChange={(event) => {
                        const next = event.target.value
                        setTranslateModel(next)
                        saveModelChoice({ translateModel: next })
                      }}
                    >
                      {translateChoices.map((model) => (
                        <option key={model.name} value={model.name}>
                          {model.name}{model.missing ? '（不可用）' : model.ready ? '' : '（未就绪）'}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                {storage ? (
                  <>
                    <div className="model-path" style={{ marginTop: 10 }}>
                      <code className="model-path-text" title={storage.dir}>{storage.dir}</code>
                      <span className="model-path-size">{modelsPathLabel(storage)} · 共 {fmtBytes(storage.totalBytes)}</span>
                    </div>
                    <p className="settings-hint">{storageHint(storage)}</p>
                    <div className="settings-fields">
                      <label className="field-row">
                        <span>更改存放位置</span>
                        <input
                          value={dirDraft}
                          onChange={(event) => setDirDraft(event.target.value)}
                          placeholder="~/Models/podwave"
                          spellCheck={false}
                        />
                        <button
                          type="button"
                          className="settings-btn is-mini"
                          disabled={moving || dirDraft.trim() === storage.dir}
                          onClick={() => changeModelsDir(dirDraft, true)}
                        >
                          {moving ? '迁移中…' : '迁移'}
                        </button>
                      </label>
                    </div>
                    <div className="settings-actions">
                      <button type="button" className="settings-btn ghost" onClick={() => sendJSON(`${API}/models/open`, 'POST', {}).catch(() => {})}>
                        打开模型文件夹
                      </button>
                      {storage.projectDir && storage.dir !== storage.projectDir ? (
                        <button type="button" className="settings-btn ghost" disabled={moving} onClick={() => changeModelsDir(storage.projectDir, true)}>
                          {projectButtonLabel(storage)}
                        </button>
                      ) : null}
                      {storage.custom ? (
                        <button type="button" className="settings-btn ghost" disabled={moving} onClick={() => changeModelsDir('', true)}>
                          恢复默认位置
                        </button>
                      ) : null}
                    </div>
                    {models.length ? (
                      <ul className="model-list">
                        {models.map((model) => (
                          <li key={model.name} className="model-row">
                            <div className="model-main">
                              <span className="model-name">{model.name}</span>
                              <span className="model-meta">
                                {model.kindLabel} · {fmtBytes(model.bytes)}
                                {model.inUse ? ' · 使用中' : ''}
                                {model.ready ? '' : ' · 未就绪'}
                              </span>
                            </div>
                            <button
                              type="button"
                              className="settings-btn ghost model-remove"
                              disabled={model.inUse || saving === `model:${model.name}`}
                              onClick={() => deleteModel(model.name)}
                            >
                              {saving === `model:${model.name}` ? '删除中…' : '删除'}
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : null}
              </div>

              {/* 4.4 实时字幕音频采集设备 */}
              <div className="adv-group">
                <h3>实时字幕音频源</h3>
                <div className="settings-fields">
                  <label className="field-row">
                    <span>采集方式</span>
                    <select
                      value={liveSource}
                      onChange={(event) => {
                        const next = event.target.value
                        setLiveSource(next)
                        patchLive({ source: next })
                      }}
                    >
                      <option value="auto">自动（优先系统音频）</option>
                      <option value="tap">仅系统音频（macOS 14.2+）</option>
                      <option value="browser">虚拟声卡 / 麦克风（BlackHole / VB-Cable）</option>
                    </select>
                  </label>
                  <label className="field-row">
                    <span>虚拟声卡设备</span>
                    <select
                      value={liveDeviceId}
                      onChange={(event) => {
                        const next = event.target.value
                        const label = liveDevices.find((d) => d.deviceId === next)?.label || ''
                        setLiveDeviceId(next)
                        patchLive({ deviceId: next, deviceLabel: label })
                      }}
                    >
                      <option value="">自动选择（优先虚拟声卡）</option>
                      {liveDevices.map((device, index) => (
                        <option key={device.deviceId || index} value={device.deviceId}>
                          {device.label || `音频输入 ${index + 1}`}
                        </option>
                      ))}
                    </select>
                    <button type="button" className="settings-btn is-mini" onClick={probeLiveDevices}>检测设备</button>
                  </label>
                  {liveNote ? <p className="settings-status">{liveNote}</p> : null}
                </div>
              </div>

              {/* 4.5 环境检查与安装 */}
              <div className="adv-group">
                <h3>环境检查与依赖安装</h3>
                {setup ? (
                  <>
                    <p className="setup-platform">
                      {setup.platform?.osLabel} · {setup.platform?.arch} · {setup.platform?.memoryGB}GB 内存 · {setup.platform?.gpu} · 推荐：{setup.engine?.label}
                    </p>
                    <ul className="setup-components">
                      {(setup.components || []).map((item) => (
                        <li key={item.id} className={item.ready ? 'setup-component ready' : 'setup-component'}>
                          <span className="setup-dot" />
                          <span className="setup-component-label">{item.label}</span>
                          <span className="setup-component-detail">{item.detail}</span>
                          {!item.ready && item.bytes ? <span className="setup-component-size">{fmtBytes(item.bytes)}</span> : null}
                        </li>
                      ))}
                    </ul>
                    <div className="settings-fields">
                      <label className="field-row">
                        <span>下载线路</span>
                        <select value={setupSource} onChange={(event) => setSetupSource(event.target.value)}>
                          <option value="auto">自动测速</option>
                          <option value="intl">国际（Hugging Face / GitHub）</option>
                          <option value="cn">国内镜像（hf-mirror / ModelScope）</option>
                        </select>
                      </label>
                    </div>
                    <div className="settings-actions">
                      <button type="button" className="settings-btn" disabled={setupRunning} onClick={() => startSetup('local')}>
                        {setupRunning ? '安装中…' : '安装/补齐离线模型'}
                      </button>
                      <button type="button" className="settings-btn ghost" disabled={verifyBusy} onClick={runVerify}>
                        {verifyBusy ? '检查中…' : '检查安装'}
                      </button>
                      <button type="button" className="settings-btn ghost" onClick={copyDiagnose}>复制诊断信息</button>
                    </div>
                    {verifyResult ? (
                      <ul className="setup-components" style={{ marginTop: 10 }}>
                        {verifyResult.checks.map((check) => (
                          <li key={check.id} className={check.ok ? 'setup-component ready' : 'setup-component'}>
                            <span className="setup-dot" />
                            <span className="setup-component-label">{check.label}</span>
                            <span className="setup-component-detail">{check.detail}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : (
                  <p className="settings-empty">正在扫描本机环境…</p>
                )}
              </div>

              {/* 4.6 导入与数据记录 */}
              <div className="adv-group">
                <h3>导入策略与字幕记录</h3>
                <div className="settings-fields">
                  <label className="check-row">
                    <input type="radio" name="import-mode" checked={importConfig.mode === 'copy'} onChange={() => saveImport('copy')} />
                    <span>拖入音频时复制到 ~/.podwave/imports/（删源文件也不影响）</span>
                  </label>
                  <label className="check-row">
                    <input type="radio" name="import-mode" checked={importConfig.mode === 'reference'} onChange={() => saveImport('reference')} />
                    <span>原地引用（不复制文件）</span>
                  </label>
                </div>
                <div className="settings-actions">
                  <button type="button" className="settings-btn ghost" onClick={cleanupImports} disabled={saving === 'imports' || !importConfig.orphans}>
                    {importConfig.orphans ? `清理 ${importConfig.orphans} 个导入副本（${(importConfig.orphanBytes / 1048576).toFixed(1)} MB）` : '无未引用副本'}
                  </button>
                  <button type="button" className="settings-btn ghost" onClick={() => sendJSON(`${API}/history/open`, 'POST', {}).catch(() => {})} disabled={!historyDir}>
                    打开字幕文件夹（{history.length} 集 · {fmtBytes(historyBytes)}）
                  </button>
                  {liveHistoryCount > 0 ? <span className="settings-status">含 {liveHistoryCount} 条实时字幕</span> : null}
                </div>
                {history.length > 0 ? (
                  <ul className="history-list" style={{ marginTop: 10 }}>
                    {history.slice(0, 8).map((item) => (
                      <li key={item.id} className="history-row">
                        <div className="history-main">
                          <span className="history-title">{item.title}</span>
                          <span className="history-meta">
                            {item.duration ? `${fmtDuration(item.duration)} · ` : ''}
                            {item.lines} 行
                            {item.translations?.length ? ` · 已译 ${item.translations.join('/')}` : ''}
                          </span>
                        </div>
                        <span className="history-date">{fmtDate(item.completedAt)}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              {/* 4.7 界面与版本 */}
              <div className="adv-group">
                <h3>界面与版本</h3>
                <div className="settings-fields">
                  <label className="check-row">
                    <input
                      type="checkbox"
                      checked={uiSettings.showSidebarPanel}
                      onChange={(event) => {
                        const next = event.target.checked
                        setUiSettings({ showSidebarPanel: next })
                        patchUi({ showSidebarPanel: next }, '界面设置已更新')
                      }}
                    />
                    <span>在 DSH 侧边栏显示「播客」入口</span>
                  </label>
                </div>
                <div className="settings-actions">
                  <button type="button" className="settings-btn ghost" onClick={checkUpdates} disabled={updateBusy}>
                    {updateBusy ? '检查中…' : '检查更新'}
                  </button>
                  <span className="settings-status">
                    当前 v{updateInfo?.current || CLIENT_VERSION}
                    {updateInfo?.updateAvailable && updateInfo?.latest ? ` · 新版本 v${updateInfo.latest} 可用` : updateInfo?.latest ? ' · 已是最新' : ''}
                  </span>
                </div>
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </div>
  )
}
