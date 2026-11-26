import { useCallback, useEffect, useState } from 'react'

export const THEME_STORAGE_KEY = 'podwave:themeMode'
const VALID_MODES = new Set(['system', 'light', 'dark'])

function normalizeMode(value) {
  return VALID_MODES.has(value) ? value : 'system'
}

export function readStoredThemeMode() {
  try {
    const raw = window.localStorage?.getItem(THEME_STORAGE_KEY)
    return raw ? normalizeMode(raw) : 'system'
  } catch {
    return 'system'
  }
}

function writeStoredThemeMode(mode) {
  try {
    if (!window.localStorage) return
    if (mode === 'system') window.localStorage.removeItem(THEME_STORAGE_KEY)
    else window.localStorage.setItem(THEME_STORAGE_KEY, mode)
  } catch {
    /* localStorage 被禁用时不阻断外观切换 */
  }
}

function luminance(color) {
  const match = String(color || '').match(/rgba?\(([^)]+)\)/)
  if (!match) return null
  const parts = match[1].split(',').map((value) => Number.parseFloat(value))
  if (parts.length < 3) return null
  if (parts.length > 3 && parts[3] === 0) return null
  const channel = (value) => {
    const v = value / 255
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * channel(parts[0]) + 0.7152 * channel(parts[1]) + 0.0722 * channel(parts[2])
}

function sampleBackground() {
  if (typeof document === 'undefined') return null
  for (const element of [document.body, document.documentElement]) {
    if (!element) continue
    const value = getComputedStyle(element).backgroundColor
    const lum = luminance(value)
    if (lum !== null) return lum
  }
  return null
}

// 探测当前 DSH / 宿主系统是浅色还是深色
export function readTheme() {
  if (typeof document === 'undefined') return 'dark'
  const lum = sampleBackground()
  if (lum !== null) return lum > 0.5 ? 'light' : 'dark'
  const text = [
    document.documentElement.className,
    document.documentElement.dataset.theme,
    document.body?.className,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
  if (/\blight\b/.test(text)) return 'light'
  if (/\bdark\b/.test(text)) return 'dark'
  return window.matchMedia?.('(prefers-color-scheme: light)')?.matches ? 'light' : 'dark'
}

export function setThemeModeGlobal(nextMode, { persistRemote = true } = {}) {
  const mode = normalizeMode(nextMode)
  writeStoredThemeMode(mode)
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('podwave:theme-mode', { detail: { mode } }))
  }
  if (persistRemote && typeof fetch === 'function') {
    fetch('/podwave/api/ui-settings', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ themeMode: mode }),
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('podwave:ui-settings', { detail: data }))
        }
      })
      .catch(() => {})
  }
  return mode
}

// 提供完整外观控制：{ theme: 'light'|'dark', mode: 'system'|'light'|'dark', systemTheme: 'light'|'dark', setMode }
export function useThemeControl() {
  const [systemTheme, setSystemTheme] = useState(readTheme)
  const [mode, setModeState] = useState(readStoredThemeMode)

  useEffect(() => {
    const updateSystem = () => setSystemTheme(readTheme())
    updateSystem()
    const observer = new MutationObserver(updateSystem)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'style', 'data-theme'] })
    if (document.body) {
      observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'style', 'data-theme'] })
    }
    const mediaLight = window.matchMedia?.('(prefers-color-scheme: light)')
    const mediaDark = window.matchMedia?.('(prefers-color-scheme: dark)')
    mediaLight?.addEventListener?.('change', updateSystem)
    mediaDark?.addEventListener?.('change', updateSystem)

    const onCustom = (event) => {
      const next = event?.detail?.mode
      if (VALID_MODES.has(next)) setModeState(next)
    }
    const onUiSettings = (event) => {
      const next = event?.detail?.themeMode
      if (VALID_MODES.has(next)) {
        writeStoredThemeMode(next)
        setModeState(next)
      }
    }
    const onStorage = (event) => {
      if (event.key === THEME_STORAGE_KEY) setModeState(readStoredThemeMode())
    }
    window.addEventListener('podwave:theme-mode', onCustom)
    window.addEventListener('podwave:ui-settings', onUiSettings)
    window.addEventListener('storage', onStorage)

    let cancelled = false
    fetch('/podwave/api/ui-settings')
      .then((res) => (res.ok ? res.json() : null))
      .then((cfg) => {
        if (cancelled || !cfg) return
        if (VALID_MODES.has(cfg.themeMode)) {
          writeStoredThemeMode(cfg.themeMode)
          setModeState(cfg.themeMode)
        }
      })
      .catch(() => {})

    return () => {
      cancelled = true
      observer.disconnect()
      mediaLight?.removeEventListener?.('change', updateSystem)
      mediaDark?.removeEventListener?.('change', updateSystem)
      window.removeEventListener('podwave:theme-mode', onCustom)
      window.removeEventListener('podwave:ui-settings', onUiSettings)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  const setMode = useCallback((nextMode) => {
    const normalized = setThemeModeGlobal(nextMode)
    setModeState(normalized)
  }, [])

  const theme = mode === 'system' ? systemTheme : mode
  return { theme, mode, systemTheme, setMode }
}

// 兼容旧调用点：直接返回当前解析后的 'light' | 'dark'
export function useTheme() {
  return useThemeControl().theme
}
