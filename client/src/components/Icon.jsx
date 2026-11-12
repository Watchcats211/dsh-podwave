import React from 'react'

export default function Icon({ name, size = 18 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'play':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M8 5.5c0-.8.9-1.3 1.6-.9l9 5.9c.6.4.6 1.4 0 1.8l-9 5.9c-.7.4-1.6-.1-1.6-.9V5.5Z" />
        </svg>
      )
    case 'pause':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <rect x="7" y="5" width="3.4" height="14" rx="1" />
          <rect x="13.6" y="5" width="3.4" height="14" rx="1" />
        </svg>
      )
    case 'prev':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M7 5.5a1 1 0 0 1 2 0v13a1 1 0 0 1-2 0v-13Z" />
          <path d="M18.4 6c.6-.4 1.6.1 1.6.9v10.2c0 .8-1 1.3-1.6.9l-7.6-5.1a1.1 1.1 0 0 1 0-1.8L18.4 6Z" />
        </svg>
      )
    case 'next':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M17 5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-13Z" />
          <path d="M5.6 6c-.6-.4-1.6.1-1.6.9v10.2c0 .8 1 1.3 1.6.9l7.6-5.1a1.1 1.1 0 0 0 0-1.8L5.6 6Z" />
        </svg>
      )
    case 'plus':
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      )
    case 'search':
      return (
        <svg {...common}>
          <circle cx="10.5" cy="10.5" r="6" />
          <path d="m15 15 4 4" />
        </svg>
      )
    case 'folder':
      return (
        <svg {...common}>
          <path d="M3.5 7.5c0-1 .8-1.8 1.8-1.8h4l2 2h7.4c1 0 1.8.8 1.8 1.8v7.7c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8V7.5Z" />
        </svg>
      )
    case 'volume':
      return (
        <svg {...common}>
          <path d="M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z" fill="currentColor" stroke="none" />
          <path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />
        </svg>
      )
    case 'mute':
      return (
        <svg {...common}>
          <path d="M4 9.5h3.2L12 6v12L7.2 14.5H4v-5Z" fill="currentColor" stroke="none" />
          <path d="m16 9.5 5 5M21 9.5l-5 5" />
        </svg>
      )
    case 'tasks':
      return (
        <svg {...common}>
          <path d="M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12" />
        </svg>
      )
    case 'check':
      return (
        <svg {...common}>
          <path d="m5 12.5 4.5 4.5L19 7" />
        </svg>
      )
    case 'wave':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <rect x="4" y="10" width="2" height="4" rx="1" />
          <rect x="8" y="7" width="2" height="10" rx="1" />
          <rect x="12" y="4" width="2" height="16" rx="1" />
          <rect x="16" y="8" width="2" height="8" rx="1" />
          <rect x="20" y="11" width="2" height="2" rx="1" />
        </svg>
      )
    case 'chevron-left':
      return (
        <svg {...common}>
          <path d="m14.5 6-6 6 6 6" />
        </svg>
      )
    case 'chevron-right':
      return (
        <svg {...common}>
          <path d="m9.5 6 6 6-6 6" />
        </svg>
      )
    default:
      return null
  }
}
