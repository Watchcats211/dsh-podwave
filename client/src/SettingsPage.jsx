import React, { useCallback, useEffect, useState } from 'react'
import { useTheme } from './lib/theme.js'
import css from './styles.prefixed.css'

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

export default function SettingsPage() {
  const theme = useTheme()
  const [history, setHistory] = useState([])
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

  const [provider, setProvider] = useState('api')
  const [apiBase, setApiBase] = useState('https://api.deepseek.com')
  const [apiModel, setApiModel] = useState('deepseek-chat')
  const [apiKey, setApiKey] = useState('')

  const [asrModel, setAsrModel] = useState('')
  const [translateModel, setTranslateModel] = useState('')

  const [saving, setSaving] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    try {
      const [historyData, modelsData, trData, uiData, txData, importData, setupData, updateData] = await Promise.all([
        getJSON(`${API}/history`),
        getJSON(`${API}/models`),
        getJSON(`${API}/translate/settings`),
        getJSON(`${API}/ui-settings`),
        getJSON(`${API}/transcribe/settings`),
        getJSON(`${API}/import/settings`),
        getJSON(`${API}/setup`),
        getJSON(`${API}/update`),
      ])
      setSetup(setupData)
      setUpdateInfo(updateData)
      if (setupData?.job?.status === 'running') setSetupBusy(true)
      setImportConfig({ mode: importData.mode || 'copy', orphans: importData.orphans || 0, orphanBytes: importData.orphanBytes || 0 })
      setUiSettings({ showSidebarPanel: uiData?.showSidebarPanel !== false })
      setHotwords((txData.hotwords || []).join(' '))
      setChunkMinutes(txData.chunkMinutes || 15)
      setDiarize(txData.diarize !== false)
      setHistory(historyData.items || [])
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
    getJSON(`${API}/setup/plan?source=${setupSource}`)
      .then((data) => {
        if (!cancelled) setSetupPlan(data)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [setupSource, setup?.job?.status])

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

  const saveApi = async () => {
    setSaving('api')
    setError('')
    try {
      const patch = { provider, apiBase, apiModel }
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

  const asrOptions = allModels.filter((model) => /asr|sensevoice|sherpa/i.test(model.name) && model.ready !== false)
  const translateOptions = allModels.filter((model) => !/asr|sensevoice|sherpa|diarization/i.test(model.name) && model.ready !== false)
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
        hotwords: words,
        chunkMinutes: Math.min(60, Math.max(1, Number(chunkMinutes) || 15)),
        diarize,
      })
      setHotwords((data.hotwords || []).join(' '))
      setChunkMinutes(data.chunkMinutes || 15)
      setDiarize(data.diarize !== false)
      flash('转写设置已保存')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving('')
    }
  }

  const modelOptions = allModels

  return (
    <div className="podwave-root" data-pw-theme={theme} style={{ height: 'auto', overflow: 'visible', background: 'transparent', color: 'inherit' }}>
      <style>{css}</style>
      <div className="podwave-settings">

      <header className="settings-head">
        <h1>播客</h1>
        <p>本地播放、转写、双语字幕与翻译。数据都在 ~/.podwave。</p>
      </header>

      {error ? <div className="banner error" onClick={() => setError('')}>{error}</div> : null}
      {message ? <div className="settings-message">{message}</div> : null}


      <section className="settings-card">
        <h2>环境与模型</h2>
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
      </section>

      <section className="settings-card">
        <h2>历史记录</h2>
        <p className="settings-hint">已经完成转写的单集，共 {history.length} 条。</p>
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
      </section>

      <section className="settings-card">
        <h2>转写</h2>
        <p className="settings-hint">热词用空格或逗号分隔，会作为 --context 传给 MLX 引擎，专有名词更准；Windows / Linux 的 SenseVoice 引擎暂不支持热词。长播客按分钟切块，失败只重跑那一块。</p>
        <div className="settings-fields">
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
          <label className="check-row">
            <input type="checkbox" checked={diarize} onChange={(event) => setDiarize(event.target.checked)} />
            <span>自动识别说话人（本地声纹，分离失败不影响转写）</span>
          </label>
        </div>
        <div className="settings-actions">
          <button className="settings-btn" onClick={saveTranscribe} disabled={saving === 'transcribe'}>
            {saving === 'transcribe' ? '保存中…' : '保存转写设置'}
          </button>
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
        <h2>API 与翻译引擎</h2>
        <p className="settings-hint">字幕翻译可以走 DeepSeek API，也可以用本机模型。</p>
        <div className="settings-fields">
          <label className="field-row">
            <span>翻译引擎</span>
            <select value={provider} onChange={(event) => setProvider(event.target.value)}>
              <option value="api">DeepSeek API</option>
              <option value="local">本地模型</option>
            </select>
          </label>
          <label className="field-row">
            <span>API 地址</span>
            <input value={apiBase} onChange={(event) => setApiBase(event.target.value)} placeholder="https://api.deepseek.com" />
          </label>
          <label className="field-row">
            <span>API 模型</span>
            <input value={apiModel} onChange={(event) => setApiModel(event.target.value)} placeholder="deepseek-chat" />
          </label>
          <label className="field-row">
            <span>API Key</span>
            <input
              type="password"
              value={apiKey}
              onChange={(event) => setApiKey(event.target.value)}
              placeholder={trConfig?.hasApiKey ? `已保存 ${trConfig.apiKeyMasked}（留空不修改）` : 'sk-...'}
            />
          </label>
        </div>
        <div className="settings-actions">
          <button className="settings-btn" onClick={saveApi} disabled={saving === 'api'}>
            {saving === 'api' ? '保存中…' : '保存 API 设置'}
          </button>
          <span className="settings-status">{trConfig?.hasApiKey ? 'API Key 已保存' : '尚未填写 API Key'}</span>
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

      <section className="settings-card">
        <h2>模型</h2>
        <p className="settings-hint">
          模型默认放在 {storage?.defaultDir || '~/.podwave/models'}，可以改成任意目录（比如项目文件夹或外置硬盘），改完会把已有模型一起搬过去。
        </p>
        {storage ? (
          <>
            <div className="model-path">
              <code className="model-path-text" title={storage.dir}>{storage.dir}</code>
              <span className="model-path-size">{storage.custom ? '自定义位置' : '默认位置'} · 共 {fmtBytes(storage.totalBytes)}</span>
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
        <div className="settings-fields">
          <label className="field-row">
            <span>转写模型（ASR）</span>
            <select value={asrModel} onChange={(event) => setAsrModel(event.target.value)}>
              {(asrOptions.length ? asrOptions : modelOptions).map((model) => (
                <option key={model.name} value={model.name}>
                  {model.name}{model.ready ? '' : '（未就绪）'}
                </option>
              ))}
            </select>
            <span className="settings-status">{transcribeInfo?.modelReady ? '就绪' : '未就绪'}</span>
          </label>
          <label className="field-row">
            <span>翻译模型</span>
            <select value={translateModel} onChange={(event) => setTranslateModel(event.target.value)}>
              {(translateOptions.length ? translateOptions : modelOptions).map((model) => (
                <option key={model.name} value={model.name}>
                  {model.name}{model.ready ? '' : '（未就绪）'}
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
