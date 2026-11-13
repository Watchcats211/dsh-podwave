import React, { useCallback, useEffect, useState } from 'react'

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
    body: JSON.stringify(body || {}),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || `请求失败（${res.status}）`)
  return data
}

function fmtDuration(seconds) {
  const total = Math.max(0, Math.round(Number(seconds) || 0))
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  if (h) return `${h} 小时 ${m} 分`
  return `${m} 分钟`
}

function fmtDate(value) {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}

export default function XyzPanel({ onPlay, currentId }) {
  const [status, setStatus] = useState(null)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState('')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [cooldown, setCooldown] = useState(0)
  const [advanced, setAdvanced] = useState(false)
  const [token, setToken] = useState('')
  const [deviceId, setDeviceId] = useState('')
  const [subs, setSubs] = useState([])
  const [subsLoading, setSubsLoading] = useState(false)
  const [podcast, setPodcast] = useState(null)
  const [episodes, setEpisodes] = useState([])
  const [moreKey, setMoreKey] = useState(null)
  const [epsLoading, setEpsLoading] = useState(false)
  const [publicUrl, setPublicUrl] = useState('')
  const [publicData, setPublicData] = useState(null)
  const [publicLoading, setPublicLoading] = useState(false)

  const loadSubs = useCallback(async () => {
    setSubsLoading(true)
    try {
      const data = await getJSON(`${API}/xyz/subscriptions`)
      setSubs(data.items || [])
    } catch (err) {
      setError(friendly(err.message))
    } finally {
      setSubsLoading(false)
    }
  }, [])

  function friendly(message) {
    if (!message) return '登录失败'
    if (message.includes('请升级')) return '小宇宙的短信接口要求新版客户端验证，暂时不可用，请改用 refresh token 登录。'
    return message
  }

  async function openWeb() {
    try {
      await postJSON(`${API}/xyz/open-web`, {})
    } catch (err) {
      setError(friendly(err.message))
    }
  }

  useEffect(() => {
    getJSON(`${API}/xyz/status`)
      .then((data) => {
        setStatus(data)
        if (data.loggedIn) loadSubs()
      })
      .catch((err) => setError(friendly(err.message)))
  }, [loadSubs])

  useEffect(() => {
    if (!cooldown) return undefined
    const timer = setInterval(() => setCooldown((value) => Math.max(0, value - 1)), 1000)
    return () => clearInterval(timer)
  }, [cooldown])

  async function sendCode() {
    setError('')
    if (!/^1\d{10}$/.test(phone.trim())) {
      setError('请输入 11 位手机号')
      return
    }
    setBusy('send')
    try {
      const data = await postJSON(`${API}/xyz/auth/send-code`, { phone: phone.trim(), areaCode: '+86' })
      setCooldown(60)
      if (data.devCode) setError(`开发模式验证码：${data.devCode}`)
    } catch (err) {
      setError(friendly(err.message))
    } finally {
      setBusy('')
    }
  }

  async function login() {
    setError('')
    if (!phone.trim() || !code.trim()) {
      setError('请填写手机号和验证码')
      return
    }
    setBusy('login')
    try {
      await postJSON(`${API}/xyz/auth/login`, { phone: phone.trim(), code: code.trim(), areaCode: '+86' })
      const data = await getJSON(`${API}/xyz/status`)
      setStatus(data)
      await loadSubs()
    } catch (err) {
      setError(friendly(err.message))
    } finally {
      setBusy('')
    }
  }

  async function loginWithToken() {
    setError('')
    if (!token.trim()) {
      setError('请粘贴 refresh token 或 access token')
      return
    }
    setBusy('token')
    try {
      await postJSON(`${API}/xyz/auth/token`, { refreshToken: token.trim(), deviceId: deviceId.trim() })
      const data = await getJSON(`${API}/xyz/status`)
      setStatus(data)
      setToken('')
      await loadSubs()
    } catch (err) {
      setError(friendly(err.message))
    } finally {
      setBusy('')
    }
  }

  async function logout() {
    setBusy('logout')
    try {
      await postJSON(`${API}/xyz/auth/logout`, {})
      setStatus({ loggedIn: false })
      setSubs([])
      setPodcast(null)
      setEpisodes([])
    } catch (err) {
      setError(friendly(err.message))
    } finally {
      setBusy('')
    }
  }

  async function openPodcast(item) {
    setPodcast(item)
    setEpisodes([])
    setMoreKey(null)
    setEpsLoading(true)
    setError('')
    try {
      const data = await getJSON(`${API}/xyz/podcast/${encodeURIComponent(item.pid)}/episodes?limit=30`)
      setEpisodes(data.items || [])
      setMoreKey(data.loadMoreKey || null)
    } catch (err) {
      setError(friendly(err.message))
    } finally {
      setEpsLoading(false)
    }
  }

  async function loadMore() {
    if (!podcast || !moreKey || epsLoading) return
    setEpsLoading(true)
    try {
      const params = new URLSearchParams({ limit: '30', loadMoreKey: moreKey })
      const data = await getJSON(`${API}/xyz/podcast/${encodeURIComponent(podcast.pid)}/episodes?${params}`)
      setEpisodes((prev) => [...prev, ...(data.items || [])])
      setMoreKey(data.loadMoreKey || null)
    } catch (err) {
      setError(friendly(err.message))
    } finally {
      setEpsLoading(false)
    }
  }

  async function play(episode) {
    setBusy(`play:${episode.eid}`)
    setError('')
    try {
      await onPlay(episode)
    } catch (err) {
      setError(friendly(err.message))
    } finally {
      setBusy('')
    }
  }

  async function loadPublic() {
    setError('')
    if (!publicUrl.trim()) {
      setError('请粘贴播客链接或 24 位 pid')
      return
    }
    setPublicLoading(true)
    try {
      const data = await getJSON(`${API}/xyz/public/podcast?url=${encodeURIComponent(publicUrl.trim())}`)
      setPublicData(data.podcast)
    } catch (err) {
      setError(friendly(err.message))
    } finally {
      setPublicLoading(false)
    }
  }

  async function playPublic(episode) {
    setBusy(`pplay:${episode.eid}`)
    setError('')
    try {
      await onPlay({ ...episode, public: true })
    } catch (err) {
      setError(friendly(err.message))
    } finally {
      setBusy('')
    }
  }

  if (!status) {
    return <div className="xyz-panel"><p className="xyz-hint">正在读取小宇宙登录状态…</p></div>
  }

  if (!status.loggedIn) {
    return (
      <div className="xyz-panel">
        <div className="xyz-login">
          <h2>连接小宇宙</h2>
          <p className="xyz-notice">
            小宇宙没有开放 API。插件用你账号的 refresh token 读取订阅并在线播放，token 只保存在本机。
            第三方接口有极小概率触发风控，请自行判断是否使用。
          </p>
          <ol className="xyz-steps">
            <li>点下面按钮打开小宇宙网页版，用手机 App 扫码登录。</li>
            <li>按 F12 打开开发者工具，切到 Network 面板，刷新页面。</li>
            <li>点任意一个 web-api.xiaoyuzhoufm.com 的请求，在 Request Headers 里复制 <code>x-jike-refresh-token</code>（拿不到就复制 <code>x-jike-access-token</code>，也能临时用）。</li>
            <li>粘贴到下面，点「连接」。</li>
          </ol>
          <div className="xyz-actions">
            <button className="btn ghost" onClick={openWeb}>打开小宇宙网页</button>
          </div>
          <div className="xyz-advanced">
            <label>
              <span>refresh token 或 access token</span>
              <input value={token} onChange={(event) => setToken(event.target.value)} placeholder="x-jike-refresh-token / x-jike-access-token" />
            </label>
            <label>
              <span>device id（可选，换设备时填）</span>
              <input value={deviceId} onChange={(event) => setDeviceId(event.target.value)} placeholder="x-jike-device-id" />
            </label>
            <button className="btn primary" disabled={busy === 'token'} onClick={loginWithToken}>
              {busy === 'token' ? '验证中…' : '连接'}
            </button>
          </div>
          <button className="xyz-link" onClick={() => setAdvanced((value) => !value)}>
            {advanced ? '收起' : '手机验证码登录（小宇宙可能已限制，成功率低）'}
          </button>
          {advanced ? (
            <>
              <div className="xyz-fields">
                <label>
                  <span>手机号</span>
                  <input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="11 位手机号" inputMode="numeric" />
                </label>
                <button className="btn ghost" disabled={busy === 'send' || cooldown > 0} onClick={sendCode}>
                  {cooldown > 0 ? `${cooldown}s 后重发` : busy === 'send' ? '发送中…' : '发送验证码'}
                </button>
              </div>
              <div className="xyz-fields">
                <label>
                  <span>验证码</span>
                  <input value={code} onChange={(event) => setCode(event.target.value)} placeholder="短信验证码" inputMode="numeric" />
                </label>
                <button className="btn primary" disabled={busy === 'login'} onClick={login}>
                  {busy === 'login' ? '登录中…' : '登录'}
                </button>
              </div>
            </>
          ) : null}
          <div className="xyz-public">
            <h3>不登录也能听：公开播客</h3>
            <p className="xyz-hint">
              粘贴任意小宇宙播客链接，可直接在线播放并下载转写公开单集。
            </p>
            <div className="xyz-fields">
              <label>
                <span>播客链接 / pid</span>
                <input
                  value={publicUrl}
                  onChange={(event) => setPublicUrl(event.target.value)}
                  placeholder="https://www.xiaoyuzhoufm.com/podcast/…"
                />
              </label>
              <button className="btn ghost" disabled={publicLoading} onClick={loadPublic}>
                {publicLoading ? '加载中…' : '浏览'}
              </button>
            </div>
            {publicData ? (
              <div className="xyz-eps">
                <div className="xyz-ep-title">
                  {publicData.title}
                  <span className="xyz-hint"> · {publicData.author}</span>
                </div>
                {publicData.episodes.map((episode) => (
                  <div key={episode.eid} className={`xyz-ep ${currentId === `xyz${episode.eid}` ? 'is-current' : ''}`}>
                    <div className="xyz-ep-main">
                      <div className="xyz-ep-title">{episode.title}</div>
                      <div className="xyz-ep-meta">{fmtDate(episode.pubDate)} · {fmtDuration(episode.duration)}</div>
                    </div>
                    <button className="btn primary" disabled={busy === `pplay:${episode.eid}`} onClick={() => playPublic(episode)}>
                      {busy === `pplay:${episode.eid}` ? '打开中…' : '播放'}
                    </button>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          {error ? <p className="xyz-error">{error}</p> : null}
        </div>
      </div>
    )
  }

  if (podcast) {
    return (
      <div className="xyz-panel">
        <div className="xyz-head">
          <button className="btn ghost" onClick={() => { setPodcast(null); setEpisodes([]) }}>← 返回订阅</button>
          <div className="xyz-podcast-title">{podcast.title}</div>
        </div>
        {epsLoading && episodes.length === 0 ? <p className="xyz-hint">正在加载单集…</p> : null}
        <div className="xyz-eps">
          {episodes.map((episode) => (
            <div key={episode.eid} className={`xyz-ep ${currentId === `xyz${episode.eid}` ? 'is-current' : ''}`}>
              <div className="xyz-ep-main">
                <div className="xyz-ep-title">{episode.title}</div>
                <div className="xyz-ep-meta">{fmtDate(episode.pubDate)} · {fmtDuration(episode.duration)}</div>
              </div>
              <button className="btn primary" disabled={busy === `play:${episode.eid}`} onClick={() => play(episode)}>
                {busy === `play:${episode.eid}` ? '打开中…' : '播放'}
              </button>
            </div>
          ))}
          {!epsLoading && episodes.length === 0 ? <p className="xyz-hint">这个播客暂时没有可播放的单集。</p> : null}
          {moreKey ? (
            <button className="btn ghost xyz-more" disabled={epsLoading} onClick={loadMore}>
              {epsLoading ? '加载中…' : '加载更多'}
            </button>
          ) : null}
        </div>
        {error ? <p className="xyz-error">{error}</p> : null}
      </div>
    )
  }

  return (
    <div className="xyz-panel">
      <div className="xyz-head">
        <div>
          <div className="xyz-podcast-title">小宇宙</div>
          <div className="xyz-hint">{status.profile?.nickname ? `已登录：${status.profile.nickname}` : '已登录'}{status.profile?.avatar ? '' : ''}</div>
        </div>
        <button className="btn ghost" disabled={busy === 'logout'} onClick={logout}>退出登录</button>
      </div>
      {subsLoading ? <p className="xyz-hint">正在加载订阅…</p> : null}
      <div className="xyz-subs">
        {subs.map((item) => (
          <button key={item.pid} className="xyz-sub-card" onClick={() => openPodcast(item)}>
            {item.cover ? <img className="xyz-cover" src={item.cover} alt="" loading="lazy" /> : <div className="xyz-cover xyz-cover-empty" />}
            <div className="xyz-sub-text">
              <div className="xyz-sub-title">{item.title}</div>
              <div className="xyz-sub-meta">{item.author || ''}</div>
            </div>
          </button>
        ))}
      </div>
      {!subsLoading && subs.length === 0 ? <p className="xyz-hint">还没有订阅播客，先去小宇宙 App 订阅几个吧。</p> : null}
      {error ? <p className="xyz-error">{error}</p> : null}
    </div>
  )
}
