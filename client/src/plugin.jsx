import React from 'react'
import css from './styles.prefixed.css'
import App from './App.jsx'
import { useTheme } from './lib/theme.js'
import SettingsPage from './SettingsPage.jsx'

function PodcastIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="6" width="1.8" height="4" rx="0.9" fill="currentColor" opacity="0.5" />
      <rect x="4.4" y="3.6" width="1.8" height="8.8" rx="0.9" fill="currentColor" opacity="0.75" />
      <rect x="7.3" y="1.6" width="1.8" height="12.8" rx="0.9" fill="currentColor" />
      <rect x="10.2" y="4.4" width="1.8" height="7.2" rx="0.9" fill="currentColor" opacity="0.75" />
      <rect x="13.1" y="6.6" width="1.8" height="2.8" rx="0.9" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

function PodwavePage() {
  const theme = useTheme()
  return (
    <div className="podwave-root" data-pw-theme={theme}>
      <style>{css}</style>
      <App />
    </div>
  )
}

function apply(ctx) {
  ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: 'podwave' }, PodwavePage))
  ctx.slots.inject('settings.section', () =>
    ctx.slots.register(
      { name: 'settings.section', id: 'podwave', order: 40, label: () => '播客' },
      SettingsPage,
    ),
  )

  let navEntry = null
  const STYLE_ID = 'podwave-hide-nav'
  const applyNavCss = (hide) => {
    if (typeof document === 'undefined') return
    let style = document.getElementById(STYLE_ID)
    if (hide && !style) {
      style = document.createElement('style')
      style.id = STYLE_ID
      style.textContent = 'button[aria-label="播客"]{display:none!important}'
      document.head.appendChild(style)
    } else if (!hide && style) {
      style.remove()
    }
  }
  const syncNav = (show) => {
    applyNavCss(!show)
    if (show && !navEntry) {
      navEntry = ctx.slots.register(
        { name: 'sidebar.panellist', id: 'podwave', order: 8, label: () => '播客' },
        PodcastIcon,
      )
    } else if (!show && navEntry) {
      const entry = navEntry
      navEntry = null
      try {
        if (typeof entry?.dispose === 'function') entry.dispose()
        else if (typeof entry === 'function') entry()
        else if (typeof entry?.dispose === 'undefined' && typeof entry?.unregister === 'function') entry.unregister()
      } catch {
        /* 老版本不提供注销句柄，忽略 */
      }
    }
  }

  fetch('/podwave/api/ui-settings')
    .then((res) => (res.ok ? res.json() : null))
    .then((config) => syncNav(config?.showSidebarPanel !== false))
    .catch(() => syncNav(true))

  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener('podwave:ui-settings', (event) => {
      syncNav(event?.detail?.showSidebarPanel !== false)
    })
  }
}

export const inject = ['slots']
export { apply }
