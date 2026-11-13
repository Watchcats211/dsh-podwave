import { useEffect, useState } from 'react'

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
  for (const element of [document.body, document.documentElement]) {
    if (!element) continue
    const value = getComputedStyle(element).backgroundColor
    const lum = luminance(value)
    if (lum !== null) return lum
  }
  return null
}

export function readTheme() {
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
  return 'dark'
}

// 跟随 DSH 外观：直接采样页面背景亮度，主题切换时通过 MutationObserver 重新采样。
export function useTheme() {
  const [theme, setTheme] = useState(readTheme)
  useEffect(() => {
    const update = () => setTheme(readTheme())
    update()
    const observer = new MutationObserver(update)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'style', 'data-theme'] })
    if (document.body) {
      observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'style', 'data-theme'] })
    }
    const media = window.matchMedia('(prefers-color-scheme: light)')
    media.addEventListener?.('change', update)
    return () => {
      observer.disconnect()
      media.removeEventListener?.('change', update)
    }
  }, [])
  return theme
}
