import React, { useCallback, useEffect, useState } from 'react'
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

function fmtDate(ms) {
  if (!ms) return ''
  const date = new Date(ms)
  const pad = (n) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`
}

export default function SettingsPage() {
  const [history, setHistory] = useState([])
  const [models, setModels] = useState([])
  const [modelConfig, setModelConfig] = useState({ asrModel: '', translateModel: '' })
  const [transcribeInfo, setTranscribeInfo] = useState(null)
  const [trConfig, setTrConfig] = useState(null)

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
      const [historyData, modelsData, trData] = await Promise.all([
        getJSON(`${API}/history`),
        getJSON(`${API}/models`),
        getJSON(`${API}/translate/settings`),
      ])
      setHistory(historyData.items || [])
      setModels(modelsData.models || [])
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

  const flash = (text) => {
    setMessage(text)
    window.setTimeout(() => setMessage(''), 2400)
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

  const allModels = models.length ? models : [
    { name: modelConfig.asrModel || 'qwen3-asr-1.7b-8bit', ready: transcribeInfo?.modelReady },
    { name: modelConfig.translateModel || 'qwen3-8b-4bit', ready: trConfig?.localReady },
  ]
  const asrOptions = allModels.filter((model) => /asr/i.test(model.name))
  const translateOptions = allModels.filter((model) => !/asr/i.test(model.name))
  const modelOptions = allModels

  return (
    <div className="podwave-root" style={{ height: 'auto', overflow: 'visible' }}>
      <style>{css}</style>
      <div className="podwave-settings">

      <header className="settings-head">
        <h1>播客</h1>
        <p>本地播放、转写、双语字幕与翻译。数据都在 ~/.podwave。</p>
      </header>

      {error ? <div className="banner error" onClick={() => setError('')}>{error}</div> : null}
      {message ? <div className="settings-message">{message}</div> : null}

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
                    {item.language || '未知语言'} · {item.segments} 行
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
          <button className="btn primary" onClick={saveApi} disabled={saving === 'api'}>
            {saving === 'api' ? '保存中…' : '保存 API 设置'}
          </button>
          <span className="settings-status">{trConfig?.hasApiKey ? 'API Key 已保存' : '尚未填写 API Key'}</span>
        </div>
      </section>

      <section className="settings-card">
        <h2>模型</h2>
        <p className="settings-hint">模型放在 ~/.podwave/models/ 下，每个目录需要有 model.safetensors。</p>
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
          <button className="btn primary" onClick={saveModels} disabled={saving === 'models'}>
            {saving === 'models' ? '保存中…' : '保存模型选择'}
          </button>
        </div>
      </section>
      </div>
    </div>
  )
}
