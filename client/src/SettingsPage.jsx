import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useTheme } from './lib/theme.js'
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

// 「项目文件夹」在发布版里指的是当前工作区，文案要说清是哪一个，
// 免得用户以为模型会塞进 node_modules。
function storageHint(storage) {
  const dir = storage?.projectDir
  if (!dir) return '模型默认放在数据目录里'
  if (storage?.projectKind === 'workspace') return `模型默认下载到当前工作区的 models/（${dir}）`
  return `模型默认下载到插件项目文件夹（${dir}）`
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

export default function SettingsPage() {
  const theme = useTheme()
  const [history, setHistory] = useState([])
  const [historyDir, setHistoryDir] = useState('')
  const [historyBytes, setHistoryBytes] = useState(0)
  const [historyOpen, setHistoryOpen] = useState(false)
  const [envOpen, setEnvOpen] = useState(false)
  const [modelsOpen, setModelsOpen] = useState(false)
  const [models, setModels] = useState([])
  const [storage, setStorage] = useState(null)
  const [dirDraft, setDirDraft] = useState('')
  const [moving, setMoving] = useState(false)
  const [modelConfig, setModelConfig] = useState({ asrModel: '', translateModel: '' })
  const [transcribeInfo, setTranscribeInfo] = useState(null)
  const [trConfig, setTrConfig] = useState(null)
  const [uiSettings, setUiSettings] = useState({ showSidebarPanel: true })
  const [importConfig, setImportConfig] = useState({ mode: 'copy', orphans: 0, orphanBytes: 0 })
  const [setup, setSetup] = useState(null)
  const [setupPlan, setSetupPlan] = useState(null)
  const [verifyResult, setVerifyResult] = useState(null)
  const [verifyBusy, setVerifyBusy] = useState(false)
  const [setupSource, setSetupSource] = useState('auto')
  const [setupBusy, setSetupBusy] = useState(false)
  const [updateInfo, setUpdateInfo] = useState(null)
  const [updateBusy, setUpdateBusy] = useState(false)
  const [hotwords, setHotwords] = useState('')
  const [chunkMinutes, setChunkMinutes] = useState(15)
  const [diarize, setDiarize] = useState(true)
  // 转写走云端还是本地。密钥不在这儿配：转写和翻译共用下面那张 DeepSeek API 卡片里的 key。
  const [asrProviderUi, setAsrProviderUi] = useState('api')
  const [realtime, setRealtime] = useState(true)

  // 实时字幕（听系统声音）：设备偏好在宿主里存，这里只做选择与检测。
  const [liveDeviceId, setLiveDeviceId] = useState('')
  const [liveDevices, setLiveDevices] = useState([])
  const [liveSaveOnStop, setLiveSaveOnStop] = useState(true)
  const [liveSource, setLiveSource] = useState('auto')
  const [liveTapOk, setLiveTapOk] = useState(true)
  // 字幕框外观：这三项只影响「屏幕上那块框」，拖动即时生效（不需要先保存）。
  const [liveOpacity, setLiveOpacity] = useState(0.78)
  const [liveStyleSize, setLiveStyleSize] = useState(18)
  const [liveWidth, setLiveWidth] = useState(780)
  const liveStyleTimer = useRef(0)
  const [liveNote, setLiveNote] = useState('')

  const [provider, setProvider] = useState('api')
  const [apiBase, setApiBase] = useState('https://api.deepseek.com')
  const [apiModel, setApiModel] = useState('deepseek-chat')
  const [apiKey, setApiKey] = useState('')
  // 这个 API 地址下能调用的模型列表（GET /models），空数组表示还没取到。
  const [apiModels, setApiModels] = useState([])
  const [modelListBusy, setModelListBusy] = useState(false)
  const [modelListNote, setModelListNote] = useState('')
  const [manualModel, setManualModel] = useState(false)

  const [asrModel, setAsrModel] = useState('')
  const [translateModel, setTranslateModel] = useState('')

  const [saving, setSaving] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    try {
      const [historyData, modelsData, trData, uiData, txData, importData, setupData, updateData, liveData] = await Promise.all([
        getJSON(`${API}/history`),
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
      setHotwords((txData.hotwords || []).join(' '))
      setChunkMinutes(txData.chunkMinutes || 15)
      setDiarize(txData.diarize !== false)
      setAsrProviderUi(txData.provider || 'api')
      setRealtime(txData.realtime !== false)
      setLiveDeviceId(liveData?.deviceId || '')
      setLiveSaveOnStop(liveData?.saveOnStop !== false)
      setLiveSource(liveData?.source || 'auto')
      if (Number.isFinite(Number(liveData?.opacity))) setLiveOpacity(Number(liveData.opacity))
      if (Number.isFinite(Number(liveData?.fontSize))) setLiveStyleSize(Number(liveData.fontSize))
      if (Number.isFinite(Number(liveData?.width))) setLiveWidth(Number(liveData.width))
      setLiveTapOk(liveData?.tap?.supported !== false)
      if (!liveData?.ready) setLiveNote('还没有 DeepSeek API key，实时字幕要先用云端识别')
      loadLiveDevices().then((inputs) => {
        if (inputs.length && !inputs.some((device) => device.label)) {
          setLiveNote('设备名还是空的，点「检测设备」授权一次就能看到名字')
        }
      })
      setHistory(historyData.items || [])
      setHistoryDir(historyData.dir || '')
      setHistoryBytes(Number(historyData.bytes) || 0)
      setHistoryOpen(uiData?.historyOpen === true)
      setEnvOpen(uiData?.envOpen === true)
      setModelsOpen(uiData?.modelsOpen === true)
      setModels(modelsData.models || [])
      setStorage(modelsData.storage || null)
      setDirDraft(modelsData.storage?.dir || '')
      setModelConfig(modelsData.config || { asrModel: '', translateModel: '' })
      setTranscribeInfo(modelsData.transcribe || null)
      setAsrModel(modelsData.config?.asrModel || '')
      setTranslateModel(modelsData.config?.translateModel || '')
      setTrConfig(trData)
      setProvider(trData.provider || 'api')
      setApiBase(trData.apiBase || 'https://api.deepseek.com')
      setApiModel(trData.apiModel || 'deepseek-chat')
      // 打开设置页就顺手问一次有哪些模型，省得用户先点刷新。
      sendJSON(`${API}/translate/models`, 'POST', { base: trData.apiBase, key: undefined })
        .then((data) => {
          const list = Array.isArray(data?.models) ? data.models : []
          setApiModels(list)
          setModelListNote(list.length ? `这个地址下有 ${list.length} 个模型` : '')
        })
        .catch(() => {})
      setApiKey('')
      setError('')
    } catch (err) {
      setError(err.message)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  useEffect(() => {
    let cancelled = false
    getJSON(`${API}/setup/plan?source=${setupSource}&mode=${asrProviderUi === 'local' ? 'local' : 'basic'}`)
      .then((data) => {
        if (!cancelled) setSetupPlan(data)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [setupSource, asrProviderUi, setup?.job?.status])

  useEffect(() => {
    if (!setupBusy && setup?.job?.status !== 'running') return
    const timer = window.setInterval(async () => {
      try {
        const data = await getJSON(`${API}/setup`)
        setSetup(data)
        if (data.job?.status !== 'running') setSetupBusy(false)
      } catch {
        // 安装中轮询失败不打断界面
      }
    }, 2500)
    return () => window.clearInterval(timer)
  }, [setupBusy, setup?.job?.status])

  const startSetup = async () => {
    setError('')
    setSetupBusy(true)
    try {
      await sendJSON(`${API}/setup/install`, 'POST', { source: setupSource })
      const data = await getJSON(`${API}/setup`)
      setSetup(data)
      flash('开始安装')
    } catch (err) {
      setSetupBusy(false)
      setError(err.message)
    }
  }

  // 历史记录卡片默认收起，展开状态记在 ui 设置里，下次进来还是上次那样。
  // 存到服务端只是「记住」，存不上（比如插件升级后宿主进程还没重启、老接口不认这个字段）
  // 也不能让界面点不动 —— 先按本地状态切，写失败就静默放弃。
  const toggleHistory = () => {
    const next = !historyOpen
    setHistoryOpen(next)
    sendJSON(`${API}/ui-settings`, 'PUT', { historyOpen: next }).catch(() => {})
  }

  // 环境与模型、模型两张诊断卡同理：云端模式下默认收起，别一进设置页就是一屏检查项。
  const toggleCard = (key, value, setValue) => {
    const next = !value
    setValue(next)
    sendJSON(`${API}/ui-settings`, 'PUT', { [key]: next }).catch(() => {})
  }

  // 收起的卡片要在标题行一眼说清状态：环境还差几项、本地模型占多大。
  const setupMissing = Array.isArray(setup?.missing) ? setup.missing.length : 0
  const envBadge = !setup ? '正在扫描…' : setupMissing ? `${setupMissing} 项待安装` : '全部就绪'
  const modelsBadge = storage ? `${storage.items?.length || 0} 个 · ${fmtBytes(storage.totalBytes)}` : ''

  // 本地模型是「按需装」：只有用户主动切到本地、或点这个按钮，才去下 python 运行时和 2.4 GB 模型。
  const openHistoryDir = async () => {
    try {
      await sendJSON(`${API}/history/open`, 'POST', {})
    } catch (err) {
      setError(err.message)
    }
  }

  const startLocalInstall = async () => {
    setError('')
    setSetupBusy(true)
    try {
      await sendJSON(`${API}/setup/install`, 'POST', { source: setupSource, mode: 'local' })
      const data = await getJSON(`${API}/setup`)
      setSetup(data)
      flash('开始下载本地模型')
    } catch (err) {
      setSetupBusy(false)
      setError(err.message)
    }
  }

  const cancelSetupJob = async () => {
    try {
      await sendJSON(`${API}/setup/cancel`, 'POST', {})
      flash('已请求取消')
    } catch (err) {
      setError(err.message)
    }
  }

  const flash = (text) => {
    setMessage(text)
    window.setTimeout(() => setMessage(''), 2400)
  }
  const runVerify = async () => {
    setVerifyBusy(true)
    try {
      const data = await getJSON(`${API}/setup/verify`)
      setVerifyResult(data)
      flash(data.ok ? '安装检查通过' : '有检查项未通过，见下方列表')
    } catch (error) {
      flash(error.message || '检查失败')
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
      flash('诊断信息已复制，可直接粘贴给我')
    } catch (error) {
      flash(error.message || '复制失败')
    }
  }

  const refreshApiModels = async ({ silent = false } = {}) => {
    if (!silent) setModelListBusy(true)
    if (!silent) setModelListNote('')
    try {
      const data = await sendJSON(`${API}/translate/models`, 'POST', {
        base: apiBase,
        key: apiKey.trim() || undefined,
      })
      const list = Array.isArray(data?.models) ? data.models : []
      setApiModels(list)
      if (!silent) setModelListNote(list.length ? `这个地址下有 ${list.length} 个模型` : '这个地址没有返回可用模型')
      return list
    } catch (error) {
      if (!silent) setModelListNote(error.message || '列表获取失败')
      return []
    } finally {
      if (!silent) setModelListBusy(false)
    }
  }

  // 翻译引擎选了就存，不用再点一次保存。
  const changeProvider = async (next) => {
    const before = provider
    setProvider(next)
    try {
      const data = await sendJSON(`${API}/translate/settings`, 'PUT', { provider: next })
      setTrConfig(data)
    } catch (err) {
      setProvider(before)
      setError(err.message)
    }
  }

  const saveApi = async () => {
    setSaving('api')
    setError('')
    try {
      const patch = { apiBase, apiModel }
      if (provider === 'api') patch.provider = 'api'
      if (apiKey.trim()) patch.apiKey = apiKey.trim()
      const next = await sendJSON(`${API}/translate/settings`, 'PUT', patch)
      setTrConfig(next)
      setApiKey('')
      flash('API 设置已保存')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving('')
    }
  }

  const saveModels = async () => {
    setSaving('models')
    setError('')
    try {
      const data = await sendJSON(`${API}/models`, 'PUT', { asrModel, translateModel })
      setModelConfig(data.config)
      setModels(data.models || [])
      setTranscribeInfo(data.transcribe || null)
      flash('模型选择已保存')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving('')
    }
  }

  const openModelsDir = async () => {
    try {
      await sendJSON(`${API}/models/open`, 'POST', {})
    } catch (err) {
      setError(err.message)
    }
  }

  // 换目录：同卷 rename 秒完成，跨卷会真复制，所以按钮期间显示「迁移中」。
  const changeModelsDir = async (dir, move = true) => {
    setMoving(true)
    setError('')
    try {
      const data = await sendJSON(`${API}/models/dir`, 'POST', { dir, move })
      setStorage(data.storage || null)
      setModels(data.models || [])
      setDirDraft(data.storage?.dir || '')
      const movedCount = (data.moved || []).length
      const skippedCount = (data.skipped || []).length
      if (movedCount || skippedCount) {
        flash(`已迁移 ${movedCount} 个模型${skippedCount ? `，${skippedCount} 个因目标已存在跳过` : ''}`)
      } else {
        flash('模型目录已更新')
      }
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

  const allModels = models.length ? models : [
    { name: modelConfig.asrModel || 'qwen3-asr-1.7b-8bit', ready: transcribeInfo?.modelReady },
    { name: modelConfig.translateModel || 'hy-mt2-1.8b-4bit', ready: trConfig?.localReady },
  ]
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

  // 没授权时 enumerateDevices 只给 deviceId，label 是空的；所以要过一次流才能看到设备名。
  const loadLiveDevices = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices()
      const inputs = devices.filter((device) => device.kind === 'audioinput')
      setLiveDevices(inputs)
      return inputs
    } catch {
      return []
    }
  }

  const probeLiveDevices = async () => {
    setLiveNote('正在要一次音频权限…')
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      for (const track of stream.getTracks()) track.stop()
    } catch (err) {
      setLiveNote(`读不到音频设备：${err.message || err}`)
      return
    }
    const inputs = await loadLiveDevices()
    setLiveNote(inputs.length ? `找到 ${inputs.length} 个音频输入，选虚拟声卡（BlackHole / VB-Cable）` : '没找到音频输入设备')
  }

  const changeLiveStyle = (patch) => {
    if (Number.isFinite(Number(patch.opacity))) setLiveOpacity(Number(patch.opacity))
    if (Number.isFinite(Number(patch.fontSize))) setLiveStyleSize(Number(patch.fontSize))
    if (Number.isFinite(Number(patch.width))) setLiveWidth(Number(patch.width))
    window.clearTimeout(liveStyleTimer.current)
    liveStyleTimer.current = window.setTimeout(() => {
      sendJSON(`${API}/live/settings`, 'PUT', patch).catch((error) => setError(error.message))
    }, 400)
  }

  const saveLive = async () => {
    setSaving('live')
    setError('')
    try {
      const label = liveDevices.find((device) => device.deviceId === liveDeviceId)?.label || ''
      const data = await sendJSON(`${API}/live/settings`, 'PUT', {
        deviceId: liveDeviceId,
        deviceLabel: label,
        saveOnStop: liveSaveOnStop,
        source: liveSource,
      })
      setLiveDeviceId(data.deviceId || '')
      setLiveSaveOnStop(data.saveOnStop !== false)
      setLiveSource(data.source || 'auto')
      flash('实时字幕设置已保存')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving('')
    }
  }

  // 以下拉框里的模型种类为准（服务端的 kind），不要用名字正则猜：
  // MOSS 的目录名不带 asr/sensevoice，早先就被漏在转写列表外，用户只能选到翻译模型。
  const kindOf = (model) =>
    model.kind || (/asr|sensevoice|sherpa|moss/i.test(model.name) ? 'asr' : /^hy-mt/i.test(model.name) ? 'translate' : '')
  const asrOptions = allModels.filter((model) => kindOf(model) === 'asr' && model.ready !== false)
  const translateOptions = allModels.filter((model) => kindOf(model) === 'translate' && model.ready !== false)
  // 当前存的值可能压根不在候选里（比如之前误存成翻译模型）：补一条，别让下拉框显示成别的模型。
  const withCurrent = (options, current) => {
    if (!current || options.some((model) => model.name === current)) return options
    const known = allModels.find((model) => model.name === current)
    return [{ name: current, ready: known ? known.ready !== false : false, kind: known?.kind || '', missing: true }, ...options]
  }
  const asrChoices = withCurrent(asrOptions.length ? asrOptions : modelOptions, asrModel)
  const translateChoices = withCurrent(translateOptions.length ? translateOptions : modelOptions, translateModel)
  const saveUi = async () => {
    setSaving('ui')
    setError('')
    try {
      const data = await sendJSON(`${API}/ui-settings`, 'PUT', { showSidebarPanel: uiSettings.showSidebarPanel })
      setUiSettings({ showSidebarPanel: data.showSidebarPanel !== false })
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('podwave:ui-settings', { detail: data }))
      }
      flash('界面设置已保存')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving('')
    }
  }

  const saveImport = async (mode) => {
    setSaving('import')
    setError('')
    try {
      const data = await sendJSON(`${API}/import/settings`, 'PUT', { mode })
      setImportConfig((prev) => ({ ...prev, mode: data.mode }))
      flash('导入方式已保存')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving('')
    }
  }

  const cleanupImports = async () => {
    if (!importConfig.orphans) return
    if (!window.confirm(`清理 ${importConfig.orphans} 个未引用的导入批次？只删 imports/ 下的副本。`)) return
    setSaving('imports')
    setError('')
    try {
      const data = await sendJSON(`${API}/imports/orphans`, 'DELETE', {})
      setImportConfig((prev) => ({ ...prev, orphans: 0, orphanBytes: 0 }))
      flash(`已清理 ${data.removed || 0} 个批次`)
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving('')
    }
  }

  const saveTranscribe = async () => {
    setSaving('transcribe')
    setError('')
    try {
      const words = hotwords
        .split(/[\s,，、]+/)
        .map((word) => word.trim())
        .filter(Boolean)
        .slice(0, 500)
      const data = await sendJSON(`${API}/transcribe/settings`, 'PUT', {
        provider: asrProviderUi,
        hotwords: words,
        chunkMinutes: Math.min(60, Math.max(1, Number(chunkMinutes) || 15)),
        diarize,
        realtime,
      })
      setHotwords((data.hotwords || []).join(' '))
      setChunkMinutes(data.chunkMinutes || 15)
      setDiarize(data.diarize !== false)
      setAsrProviderUi(data.provider || 'api')
      if (data.runtime) setTranscribeInfo(data.runtime)
      flash('转写设置已保存')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving('')
    }
  }

  const modelOptions = allModels
  // 磁盘上的插件版本 vs 正在跑的宿主版本：不一致就是「改了文件但没重启」，
  // 表现是某些新按钮点了没反应，先在这里说清楚。
  const staleHost = Boolean(CLIENT_VERSION && setup?.version && setup.version !== CLIENT_VERSION)

  return (
    <div className="podwave-root" data-pw-theme={theme} style={{ height: 'auto', overflow: 'visible', background: 'transparent', color: 'inherit' }}>
      <style>{css}</style>
      <div className="podwave-settings">

      <header className="settings-head">
        <h1>播客</h1>
        <p>本地播放、转写、双语字幕与翻译。数据都在 ~/.podwave。</p>
      </header>

      {staleHost ? (
        <div className="settings-stale">
          插件已经更新到 {CLIENT_VERSION}，但正在运行的宿主还是 {setup.version}。
          <strong>重启 DSH</strong> 之后新功能才会全部生效（现在能看到的界面是新的，后台接口还是旧的）。
        </div>
      ) : null}
      {error ? <div className="banner error" onClick={() => setError('')}>{error}</div> : null}
      {message ? <div className="settings-message">{message}</div> : null}


      <section className={`settings-card collapsible ${envOpen ? 'is-open' : ''}`}>
        <button
          type="button"
          className="card-head"
          onClick={() => toggleCard('envOpen', envOpen, setEnvOpen)}
          aria-expanded={envOpen}
          title={envOpen ? '收起' : '展开'}
        >
          <h2>环境与模型</h2>
          <span className="card-badge">{envBadge}</span>
          <span className="card-caret" aria-hidden="true">▾</span>
        </button>
        {envOpen ? (
        <>
        <p className="settings-hint">换电脑或换系统时，先扫描本机缺什么；模型下载支持国际与国内两条线路，安装完会列出下载内容与体积。</p>
        {setup ? (
          <>
            <p className="setup-platform">
              {setup.platform?.osLabel} · {setup.platform?.arch} · {setup.platform?.memoryGB}GB 内存 · {setup.platform?.gpu} · 推荐：{setup.engine?.label}
            </p>
            <div className="settings-actions">
              <button className="settings-btn ghost" onClick={copyDiagnose}>复制诊断信息</button>
              <button className="settings-btn ghost" disabled={verifyBusy} onClick={runVerify}>
                {verifyBusy ? '检查中…' : '检查安装'}
              </button>
            </div>
            {verifyResult ? (
              <ul className="setup-components">
                {verifyResult.checks.map((check) => (
                  <li key={check.id} className={check.ok ? 'setup-component ready' : 'setup-component'}>
                    <span className="setup-dot" />
                    <span className="setup-component-label">{check.label}</span>
                    <span className="setup-component-detail">{check.detail}</span>
                  </li>
                ))}
              </ul>
            ) : null}
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
                  <option value="cn">国内（hf-mirror / gh-proxy / ModelScope）</option>
                </select>
              </label>
            </div>
            {setupPlan?.items?.length ? (
              <details className="setup-plan" open>
                <summary>将下载 {fmtBytes(setupPlan.totalBytes)} · {setupPlan.items.length} 项</summary>
                <ul>
                  {setupPlan.items.map((item) => (
                    <li key={item.id}>
                      <span>{item.label}</span>
                      <span>{item.bytes ? fmtBytes(item.bytes) : item.note || '按实际下载'}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <p className="settings-hint">所有组件已就绪，无需下载。</p>
            )}
            <div className="settings-actions">
              <button className="settings-btn" disabled={setupBusy || setup.job?.status === 'running'} onClick={startSetup}>
                {setupBusy || setup.job?.status === 'running' ? '安装中…' : '一键安装'}
              </button>
              {setup.job?.status === 'running' ? (
                <button className="settings-btn ghost" onClick={cancelSetupJob}>取消</button>
              ) : null}
            </div>
            {setup.job ? (
              <div className="setup-job">
                <div className="setup-job-line">
                  <span>{setup.job.stage || setup.job.status}</span>
                  <span>{setup.job.progress || 0}% · {fmtBytes(setup.job.bytes)} / {fmtBytes(setup.job.expected)}</span>
                </div>
                <div className="setup-progress"><span style={{ width: `${setup.job.progress || 0}%` }} /></div>
                {setup.job.error ? <p className="settings-empty">失败：{setup.job.error}</p> : null}
                {setup.job.warning ? <p className="settings-hint setup-warning">{setup.job.warning}</p> : null}
                {setup.job.status === 'done' && (!setup.job.summary || !setup.job.summary.length) ? (
                  <p className="settings-empty">所有组件已就绪，没有需要下载的内容。</p>
                ) : null}
                {setup.job.status === 'done' && setup.job.modelsDir ? (
                  <p className="settings-hint setup-warning">模型已装在 {setup.job.modelsDir}</p>
                ) : null}
                {Array.isArray(setup.job.summary) && setup.job.summary.length ? (
                  <ul className="setup-summary">
                    {setup.job.summary.map((item) => (
                      <li key={item.id}>
                        {item.label} · {item.skipped ? '已跳过（可选组件）' : fmtBytes(item.bytes)}
                        {item.source ? ` · ${item.source}` : ''}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : null}
          </>
        ) : (
          <p className="settings-empty">正在扫描本机…</p>
        )}
        </>
        ) : null}
      </section>

      <section className="settings-card">
        <h2>实时字幕（系统声音）</h2>
        <p className="settings-hint">
          听电脑正在播放的声音（YouTube、直播、会议），一句一句滚出中文，跟播客的进度无关。
          先在系统里建一个「多输出设备」，把声音同时送到扬声器和虚拟声卡：macOS 用 BlackHole，
          Windows 用 VB-Cable 或「立体声混音」。识别走 DeepSeek 云端，约 ¥0.4/小时。
        </p>
        <div className="settings-fields">
          <label className="field-row">
            <span>采集方式</span>
            <select value={liveSource} onChange={(event) => setLiveSource(event.target.value)}>
              <option value="auto">自动（优先系统音频，不需要虚拟声卡）</option>
              <option value="tap">只看系统音频（macOS 14.2+）</option>
              <option value="browser">虚拟声卡 / 麦克风（BlackHole）</option>
            </select>
          </label>
          {liveTapOk ? null : (
            <p className="settings-hint">这台机器不支持系统音频采集（需要 macOS 14.2+），只能用虚拟声卡或麦克风。</p>
          )}
          <label className="field-row">
            <span>输入设备</span>
            <select value={liveDeviceId} onChange={(event) => setLiveDeviceId(event.target.value)}>
              <option value="">自动选（优先虚拟声卡）</option>
              {liveDevices.map((device, index) => (
                <option key={device.deviceId || index} value={device.deviceId}>
                  {device.label || `音频输入 ${index + 1}`}
                </option>
              ))}
            </select>
          </label>
          <label className="check-row">
            <input type="checkbox" checked={liveSaveOnStop} onChange={(event) => setLiveSaveOnStop(event.target.checked)} />
            <span>停止时问我要不要把这次字幕存下来</span>
          </label>
        </div>
        <div className="settings-fields" style={{ marginTop: 10 }}>
          <label className="field-row">
            <span>框的不透明度</span>
            <input
              type="range"
              min="15"
              max="100"
              step="1"
              value={Math.round(liveOpacity * 100)}
              onChange={(event) => changeLiveStyle({ opacity: Number(event.target.value) / 100 })}
              style={{ flex: '1 1 auto', maxWidth: 320 }}
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
              style={{ flex: '1 1 auto', maxWidth: 320 }}
            />
            <span className="settings-status">{liveStyleSize}</span>
          </label>
          <label className="field-row">
            <span>框的宽度</span>
            <input
              type="range"
              min="380"
              max="1200"
              step="10"
              value={liveWidth}
              onChange={(event) => changeLiveStyle({ width: Number(event.target.value) })}
              style={{ flex: '1 1 auto', maxWidth: 320 }}
            />
            <span className="settings-status">{liveWidth}</span>
          </label>
          <p className="settings-hint" style={{ margin: 0 }}>
            只影响屏幕上那块字幕框，拖动即时生效；文字始终不透明，只有底板会变通透。
          </p>
        </div>
        <div className="settings-actions">
          <button className="settings-btn" onClick={probeLiveDevices}>
            检测设备
          </button>
          <button className="settings-btn primary" onClick={saveLive} disabled={saving === 'live'}>
            {saving === 'live' ? '保存中…' : '保存'}
          </button>
          <span className="settings-status">{liveNote || (liveDevices.length ? `${liveDevices.length} 个音频输入` : '点「检测设备」读取设备名')}</span>
        </div>
      </section>

      <section className={`settings-card history-card ${historyOpen ? 'is-open' : ''}`}>
        <button
          type="button"
          className="card-head"
          onClick={() => toggleHistory()}
          aria-expanded={historyOpen}
          title={historyOpen ? '收起' : '展开'}
        >
          <h2>历史记录</h2>
          <span className="card-badge">
            共 {history.length} 条{historyBytes ? ` · ${fmtBytes(historyBytes)}` : ''}
          </span>
          <span className="card-caret" aria-hidden="true">▾</span>
        </button>
        {historyOpen ? (
        <>
        <p className="settings-hint">
          已经完成转写的单集，共 {history.length} 条。字幕和译文都存在本机，关掉插件、重装插件都还在。
        </p>
        {history.length ? (
          <ul className="history-list">
            {history.map((item) => (
              <li key={item.id} className="history-row">
                <div className="history-main">
                  <span className="history-title">{item.title}</span>
                  <span className="history-meta">
                    {item.artist ? `${item.artist} · ` : ''}
                    {item.duration ? `${fmtDuration(item.duration)} · ` : ''}
                    {item.language || '未知语言'} · {item.lines} 行
                    {item.translations?.length ? ` · 已翻 ${item.translations.join(' / ')}` : ''}
                  </span>
                </div>
                <span className="history-date">{fmtDate(item.completedAt)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="settings-empty">还没有完成过转写。在「播客」面板里打开一集，点「转写字幕」。</p>
        )}
        <div className="settings-actions">
          <button className="settings-btn" onClick={openHistoryDir} disabled={!historyDir}>
            打开字幕文件夹
          </button>
          <span className="settings-status">
            {historyDir ? `${historyDir}${historyBytes ? ` · ${fmtBytes(historyBytes)}` : ''}` : ''}
          </span>
        </div>
        </>
        ) : null}
      </section>

      <section className="settings-card">
        <h2>转写</h2>
        <p className="settings-hint">
          云端 API 装好就能用，按识别时长付费（DeepSeek 语音识别约 ¥0.4/小时，一集 1 小时的播客几毛钱）；本地模型免费，但要先下载约 2.4 GB，并且用你自己的电脑算。
        </p>
        <div className="settings-fields">
          <label className="field-row">
            <span>转写方式</span>
            <select value={asrProviderUi} onChange={(event) => setAsrProviderUi(event.target.value)}>
              <option value="api">云端 API（DeepSeek，按量付费）</option>
              <option value="local">本地模型（免费，需下载）</option>
            </select>
          </label>
          {asrProviderUi === 'api' ? (
            <p className="settings-status">
              {transcribeInfo?.api?.hasKey
                ? '用「翻译」卡片里那把 API key，已经在用了，可以直接转写'
                : '还没有 API key —— 去下面「翻译」卡片填一次，转写就能用'}
            </p>
          ) : (
            <p className="settings-status">
              {transcribeInfo?.installed && transcribeInfo?.modelReady
                ? `本地运行时和模型已就绪（${transcribeInfo.modelName || '本地模型'}），转写不花钱`
                : '本地运行时或模型还没装好，点下面「一键安装本地模型」'}
            </p>
          )}
          <label className="field-row">
            <span>热词</span>
            <input
              value={hotwords}
              onChange={(event) => setHotwords(event.target.value)}
              placeholder="例如：DeepSeek Harness 播客 硅谷"
            />
          </label>
          <label className="field-row">
            <span>分块时长（分钟）</span>
            <input
              type="number"
              min="1"
              max="60"
              value={chunkMinutes}
              onChange={(event) => setChunkMinutes(event.target.value)}
            />
          </label>
          <p className="settings-status">分块时长只对本地模型生效；云端整段转写用 100 秒一块，实时跟播用 12 秒一块（接口单次上限 120 秒）。</p>
          <label className="check-row">
            <input type="checkbox" checked={realtime} onChange={(event) => setRealtime(event.target.checked)} />
            <span>边播边出字幕（云端 API，播放时按 12 秒小块滚动识别，字幕/译文/说话人跟着播放进度出现）</span>
          </label>
          <label className="check-row">
            <input type="checkbox" checked={diarize} onChange={(event) => setDiarize(event.target.checked)} />
            <span>自动识别说话人（需要本地声纹模型，分离失败不影响转写）</span>
          </label>
        </div>
        <div className="settings-actions">
          <button className="settings-btn" onClick={saveTranscribe} disabled={saving === 'transcribe'}>
            {saving === 'transcribe' ? '保存中…' : '保存转写设置'}
          </button>
          {asrProviderUi === 'local' && !(transcribeInfo?.installed && transcribeInfo?.modelReady) ? (
            <button className="settings-btn" onClick={startLocalInstall} disabled={setupBusy}>
              {setupBusy ? '安装中…' : '一键安装本地模型'}
            </button>
          ) : null}
          <span className="settings-status">热词最多 500 个</span>
        </div>
      
      </section>

      <section className="settings-card">
        <h2>导入与清理</h2>
        <p className="settings-hint">拖拽音频默认复制到 ~/.podwave/imports/；选择文件夹是原地引用。清理只删没有文件夹引用的副本，不碰原始文件。</p>
        <div className="settings-fields">
          <label className="check-row">
            <input type="radio" name="import-mode" checked={importConfig.mode === 'copy'} onChange={() => saveImport('copy')} />
            <span>复制到 imports/（推荐，删除源文件也不影响播放）</span>
          </label>
          <label className="check-row">
            <input type="radio" name="import-mode" checked={importConfig.mode === 'reference'} onChange={() => saveImport('reference')} />
            <span>原地引用（不复制，直接引用文件所在目录）</span>
          </label>
        </div>
        <div className="settings-actions">
          <button className="settings-btn" onClick={cleanupImports} disabled={saving === 'imports' || !importConfig.orphans}>
            {importConfig.orphans ? `清理 ${importConfig.orphans} 个未引用批次（${(importConfig.orphanBytes / 1048576).toFixed(1)} MB）` : '没有可清理的导入副本'}
          </button>
        </div></section>

      <section className="settings-card">
        <h2>翻译</h2>
        <p className="settings-hint">
          默认用 DSH 里正在用的那个模型翻译，不用在这里再填一遍密钥和模型名。想离线就切成本地模型。
        </p>
        <div className="settings-fields">
          <label className="field-row">
            <span>翻译用</span>
            <select value={provider} onChange={(event) => changeProvider(event.target.value)}>
              <option value="dsh">DSH 当前模型</option>
              <option value="local">本地模型（离线）</option>
              <option value="api">自定义 API</option>
            </select>
          </label>
          {provider === 'dsh' && (
            <div className="field-row">
              <span>当前模型</span>
              <span className="settings-status">
                {trConfig?.dshReady ? trConfig.dshLabel : 'DSH 里还没有选模型'}
              </span>
            </div>
          )}
          {provider === 'local' && (
            <div className="field-row">
              <span>本地模型</span>
              <span className="settings-status">
                {trConfig?.localReady ? `${trConfig.localModel}（已就绪）` : '还没下载本地翻译模型'}
              </span>
            </div>
          )}
          {(provider === 'api' || asrProviderUi === 'api') && (
            <>
              <label className="field-row">
                <span>API 地址</span>
                <input value={apiBase} onChange={(event) => setApiBase(event.target.value)} placeholder="https://api.deepseek.com" />
              </label>
              <div className="field-row">
                <span>API 模型</span>
                {manualModel || !apiModels.length ? (
                  <input value={apiModel} onChange={(event) => setApiModel(event.target.value)} placeholder="deepseek-chat" />
                ) : (
                  <select
                    value={apiModels.includes(apiModel) ? apiModel : apiModel ? '__saved' : ''}
                    onChange={(event) => setApiModel(event.target.value)}
                  >
                    {!apiModels.includes(apiModel) && apiModel && <option value="__saved">{apiModel}（当前，列表里没有）</option>}
                    {apiModels.map((name) => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                  </select>
                )}
                <button
                  type="button"
                  className="settings-btn is-mini"
                  onClick={() => refreshApiModels()}
                  disabled={modelListBusy}
                >
                  {modelListBusy ? '读取中…' : '读取模型列表'}
                </button>
              </div>
              <label className="field-row">
                <span>API Key</span>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(event) => setApiKey(event.target.value)}
                  placeholder={trConfig?.hasApiKey ? `已保存 ${trConfig.apiKeyMasked}（留空不修改）` : 'sk-...'}
                />
              </label>
            </>
          )}
        </div>
        <div className="settings-actions">
          {(provider === 'api' || asrProviderUi === 'api') && (
            <button className="settings-btn" onClick={saveApi} disabled={saving === 'api'}>
              {saving === 'api' ? '保存中…' : '保存 API 设置'}
            </button>
          )}
          <span className="settings-status">
            {provider === 'dsh' ? '跟随 DSH 的模型选择，换模型在 DSH 设置里改' : provider === 'local' ? '不联网、不花钱' : '走自定义地址与密钥'}
          </span>
        </div>
      </section>

      <section className="settings-card">
        <h2>界面</h2>
        <p className="settings-hint">控制播客入口在 DSH 主界面的显示方式。</p>
        <label className="check-row">
          <input
            type="checkbox"
            checked={uiSettings.showSidebarPanel}
            onChange={(event) => setUiSettings({ showSidebarPanel: event.target.checked })}
          />
          <span>在主界面侧边栏显示「播客」入口</span>
        </label>
        <div className="settings-actions">
          <button className="settings-btn" onClick={saveUi} disabled={saving === 'ui'}>
            {saving === 'ui' ? '保存中…' : '保存界面设置'}
          </button>
          <span className="settings-status">保存后立即生效</span>
        </div>
      </section>

      <section className={`settings-card collapsible ${modelsOpen ? 'is-open' : ''}`}>
        <button
          type="button"
          className="card-head"
          onClick={() => toggleCard('modelsOpen', modelsOpen, setModelsOpen)}
          aria-expanded={modelsOpen}
          title={modelsOpen ? '收起' : '展开'}
        >
          <h2>模型</h2>
          <span className="card-badge">{modelsBadge}</span>
          <span className="card-caret" aria-hidden="true">▾</span>
        </button>
        {modelsOpen ? (
        <>
        <p className="settings-hint">
          {storageHint(storage)}，可以改成任意目录（比如外置硬盘），改完会把已有模型一起搬过去。
        </p>
        {storage ? (
          <>
            <div className="model-path">
              <code className="model-path-text" title={storage.dir}>{storage.dir}</code>
              <span className="model-path-size">{modelsPathLabel(storage)} · 共 {fmtBytes(storage.totalBytes)}</span>
            </div>
            <div className="settings-fields">
              <label className="field-row">
                <span>模型存放位置</span>
                <input
                  value={dirDraft}
                  onChange={(event) => setDirDraft(event.target.value)}
                  placeholder="~/Models/podwave"
                  spellCheck={false}
                />
              </label>
            </div>
            <div className="settings-actions">
              <button className="settings-btn" disabled={moving || dirDraft.trim() === storage.dir} onClick={() => changeModelsDir(dirDraft, true)}>
                {moving ? '迁移中…' : '迁移到新位置'}
              </button>
              <button className="settings-btn ghost" onClick={openModelsDir}>在文件管理器中打开</button>
              {storage.projectDir && storage.dir !== storage.projectDir ? (
                <button className="settings-btn ghost" disabled={moving} onClick={() => changeModelsDir(storage.projectDir, true)}>
                  {projectButtonLabel(storage)}
                </button>
              ) : null}
              {storage.custom ? (
                <button className="settings-btn ghost" disabled={moving} onClick={() => changeModelsDir('', true)}>
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
                      className="settings-btn ghost model-remove"
                      disabled={model.inUse || saving === `model:${model.name}`}
                      title={model.inUse ? '正在使用的模型不能删除' : `删除 ${model.name}`}
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
        {transcribeInfo?.modelProblem ? <p className="settings-stale">{transcribeInfo.modelProblem}</p> : null}
        <div className="settings-fields">
          <label className="field-row">
            <span>转写模型（ASR）</span>
            <select value={asrModel} onChange={(event) => setAsrModel(event.target.value)}>
              {asrChoices.map((model) => (
                <option key={model.name} value={model.name}>
                  {model.name}
                  {model.missing ? '（当前，不是转写模型）' : model.ready ? '' : '（未就绪）'}
                </option>
              ))}
            </select>
            <span className={`settings-status ${transcribeInfo?.modelProblem ? 'is-warn' : ''}`}>
              {transcribeInfo?.modelProblem ? '不能用' : transcribeInfo?.modelReady ? '就绪' : '未就绪'}
            </span>
          </label>
          <label className="field-row">
            <span>翻译模型</span>
            <select value={translateModel} onChange={(event) => setTranslateModel(event.target.value)}>
              {translateChoices.map((model) => (
                <option key={model.name} value={model.name}>
                  {model.name}
                  {model.missing ? '（当前，不是翻译模型）' : model.ready ? '' : '（未就绪）'}
                </option>
              ))}
            </select>
            <span className="settings-status">{trConfig?.localReady ? '就绪' : '未就绪'}</span>
          </label>
        </div>
        <div className="settings-actions">
          <button className="settings-btn" onClick={saveModels} disabled={saving === 'models'}>
            {saving === 'models' ? '保存中…' : '保存模型选择'}
          </button>
        </div>
        </>
        ) : null}
      </section>

      <section className="settings-card">
        <h2>版本与更新</h2>
        <p className="settings-hint">插件从 npm 检查新版本；更新方式：DSH → 插件市场更新，或重新安装插件包。</p>
        <div className="settings-fields">
          <div className="field-row">
            <span>当前版本</span>
            <span className="settings-status">{updateInfo?.current ? `v${updateInfo.current}` : '—'}</span>
          </div>
          <div className="field-row">
            <span>最新版本</span>
            <span className="settings-status">{updateInfo?.latest ? `v${updateInfo.latest}` : updateInfo?.error ? '暂时无法检查' : '—'}</span>
          </div>
        </div>
        <p className="settings-hint">
          {updateInfo?.updateAvailable
            ? '有新版本可用：在 DSH 插件市场更新，或让助手重新安装插件包。'
            : updateInfo?.error
              ? `离线或网络受限时不影响使用（${updateInfo.error}）。`
              : updateInfo?.latest
                ? updateInfo?.current && updateInfo?.latest && updateInfo.current !== updateInfo.latest && updateInfo.updateAvailable === false
                  ? '本地版本比市场上的更新（还没发布）。'
                  : '已是最新版本。'
                : ''}
        </p>
        <div className="settings-actions">
          <button className="settings-btn" onClick={checkUpdates} disabled={updateBusy}>
            {updateBusy ? '检查中…' : '检查更新'}
          </button>
          {updateInfo?.checkedAt ? (
            <span className="settings-status">上次检查：{new Date(updateInfo.checkedAt).toLocaleString()}</span>
          ) : null}
        </div>
      </section>
      </div>
    </div>
  )
}
