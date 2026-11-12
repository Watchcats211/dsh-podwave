import React from 'react'
import css from './styles.prefixed.css'
import App from './App.jsx'
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
  return (
    <div className="podwave-root">
      <style>{css}</style>
      <App />
    </div>
  )
}

function apply(ctx) {
  ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: 'podwave' }, PodwavePage))
  ctx.slots.inject('sidebar.panellist', () =>
    ctx.slots.register(
      { name: 'sidebar.panellist', id: 'podwave', order: 8, label: () => '播客' },
      PodcastIcon,
    ),
  )
  ctx.slots.inject('settings.section', () =>
    ctx.slots.register(
      { name: 'settings.section', id: 'podwave', order: 40, label: () => '播客' },
      SettingsPage,
    ),
  )
}

export const inject = ['slots']
export { apply }
