import React, { useEffect, useRef, useState } from 'react'

// 一个很小的弹出菜单：点触发器展开，点面板外面或按 Esc 收起。
// children 是函数，拿到 close 之后自己决定渲染什么（下载链接、按钮都行）。
// placement='up' 用于屏幕底部（播放条），菜单向上弹，不然会掉出视口。
export default function PopMenu({
  trigger,
  title,
  align = 'end',
  placement = 'down',
  className = '',
  buttonClassName = '',
  disabled = false,
  children,
}) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const onPointerDown = (event) => {
      if (!wrapRef.current?.contains(event.target)) setOpen(false)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (disabled && open) setOpen(false)
  }, [disabled, open])

  const panelClass = ['pop-panel', align === 'start' ? 'is-start' : '', placement === 'up' ? 'is-up' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <span className={`pop-wrap ${className}`} ref={wrapRef}>
      <button
        type="button"
        className={buttonClassName || 'pop-btn'}
        onClick={() => setOpen((value) => !value)}
        title={title}
        disabled={disabled}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {trigger}
      </button>
      {open ? (
        <span className={panelClass} role="menu">
          {children({ close: () => setOpen(false) })}
        </span>
      ) : null}
    </span>
  )
}

// 菜单里的普通动作项；checked 用于开关型条目（前面带勾）
export function MenuAction({ children, hint, checked = false, danger = false, disabled = false, onSelect }) {
  const itemClass = ['pop-item', checked ? 'is-on' : '', danger ? 'is-danger' : ''].filter(Boolean).join(' ')
  return (
    <button
      type="button"
      className={itemClass}
      role={checked ? 'menuitemcheckbox' : 'menuitem'}
      aria-checked={checked || undefined}
      disabled={disabled}
      onClick={onSelect}
    >
      <span>{children}</span>
      {hint ? <span className="pop-hint">{hint}</span> : null}
    </button>
  )
}

// 菜单里的下载项（导出用）；onSelect 用来在点完顺手关掉菜单
export function MenuDownload({ children, hint, href, onSelect }) {
  return (
    <a className="pop-item" role="menuitem" href={href} download onClick={onSelect}>
      <span>{children}</span>
      {hint ? <span className="pop-hint">{hint}</span> : null}
    </a>
  )
}
