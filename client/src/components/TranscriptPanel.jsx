const API = '/podwave/api'
import React, { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import PopMenu, { MenuAction, MenuDownload } from './PopMenu.jsx'
import SubtitleSize from './SubtitleSize.jsx'
import { fmtTime } from '../lib/format.js'

export default function TranscriptPanel({ transcript, status, progress, stage, chunks, queued, elapsed, error, position, onSeek, onClose, onStart, onCancel, target, job, onChangeTarget, onTranslate, onRetranslate = null, onRetranslateLine = null, onOpenSettings, inline = false, editingId = null, draft = '', onDraftChange, onEditLine, onSaveLine, onCancelEdit, onSplitLine, onMergeLine, onValidate, onResegment, issues = [], fontSize = 15, onFontSize = null, width = null, height = null, onResize = null }) {
  const bodyRef = useRef(null)
  const editRef = useRef(null)
  const panelRef = useRef(null)
  const resizeRef = useRef(null)
  const [copied, setCopied] = useState(false)
  const activeIndex = transcript?.lines?.findIndex((line) => position >= line.start && position < line.end) ?? -1

  useEffect(() => {
    if (activeIndex < 0 || !bodyRef.current) return
    const row = bodyRef.current.querySelector(`[data-seg="${activeIndex}"]`)
    row?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex])

  // 拖动改大小：浮动面板拖左下角（向左变宽、向上变高），内嵌面板拖底边（只改高）。
  const sizeAt = (event) => {
    const start = resizeRef.current
    if (!start) return null
    const dx = event.clientX - start.startX
    const dy = event.clientY - start.startY
    const maxW = Math.max(320, window.innerWidth - 60)
    const maxH = Math.max(220, window.innerHeight - (inline ? 160 : 140))
    if (inline) return { width: null, height: Math.round(Math.min(maxH, Math.max(240, start.height + dy))) }
    return {
      width: Math.round(Math.min(maxW, Math.max(320, start.width - dx))),
      height: Math.round(Math.min(maxH, Math.max(200, start.height - dy))),
    }
  }

  const onResizeDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return
    const box = panelRef.current
    if (!box || !onResize) return
    event.preventDefault()
    const rect = box.getBoundingClientRect()
    resizeRef.current = { startX: event.clientX, startY: event.clientY, width: rect.width, height: rect.height }
    event.currentTarget.setPointerCapture?.(event.pointerId)
  }

  const onResizeMove = (event) => {
    if (!resizeRef.current) return
    const next = sizeAt(event)
    if (next) onResize(next.width, next.height, false)
  }

  const onResizeUp = (event) => {
    if (!resizeRef.current) return
    const next = sizeAt(event)
    resizeRef.current = null
    event.currentTarget.releasePointerCapture?.(event.pointerId)
    if (next) onResize(next.width, next.height, true)
  }

  const running = status === 'queued' || status === 'running'
  // 翻译按钮放进工具栏：字幕几百行，谁都不想滚回顶部去找「开始翻译」。
  const translating = job?.status === 'running' || job?.status === 'queued'
  const missingLines = job?.missing ?? 0
  const translateLabel = translating
    ? `翻译中${job?.progress?.total ? ` ${job.progress.done || 0}/${job.progress.total}` : ''}`
    : job?.status === 'partial' ? '续翻' : job?.status === 'error' ? '重试翻译' : '翻译'

  // 复制整份字幕：每行「时间 原文」，有译文就缩进一行放下面，粘到笔记里能直接看。
  const copyAll = async () => {
    const lines = transcript?.lines || []
    const text = lines
      .map((line) => {
        const stamp = fmtTime(line.start)
        const translated = target ? line.translations?.[target] : ''
        return translated ? `${stamp} ${line.text}\n${' '.repeat(stamp.length + 1)}${translated}` : `${stamp} ${line.text}`
      })
      .join('\n')
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        const box = document.createElement('textarea')
        box.value = text
        box.style.position = 'fixed'
        box.style.opacity = '0'
        document.body.appendChild(box)
        box.select()
        document.execCommand('copy')
        document.body.removeChild(box)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section
      ref={panelRef}
      className={`transcript-panel ${inline ? 'inline' : ''} ${height ? 'is-sized' : ''}`}
      style={{
        '--sub-size': `${fontSize}px`,
        width: !inline && width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
        maxHeight: height ? 'none' : undefined,
      }}
    >
      <header className="transcript-head">
        <h3>字幕</h3>
        {transcript ? (
          <span className="transcript-meta">
            {transcript.language || '未知语言'} · {transcript.lines.length} 行
            {transcript.speakers?.length ? ` · ${transcript.speakers.length} 位说话人` : ''}
          </span>
        ) : null}
        <div className="transcript-actions">
          <select className="tr-select" value={target} onChange={(event) => onChangeTarget(event.target.value)} title="字幕对照">
            <option value="">对照</option>
            <option value="zh">中文对照</option>
            <option value="en">English</option>
          </select>
          {onFontSize ? (
            <PopMenu className="tr-fs" trigger="Aa" title={`字幕字号 ${fontSize}px`} align="end">
              {() => (
                <span className="pop-fs">
                  <SubtitleSize value={fontSize} onChange={onFontSize} />
                </span>
              )}
            </PopMenu>
          ) : null}
          {transcript && target && onTranslate ? (
            translating ? (
              <span className="mini-link tr-translate is-busy" title="正在翻译字幕">{translateLabel}</span>
            ) : missingLines > 0 ? (
              <button
                className="mini-link tr-translate is-primary"
                onClick={onTranslate}
                title={`还有 ${missingLines} 行没有译文，点这里翻译`}
              >
                {translateLabel}
              </button>
            ) : null
          ) : null}
          <PopMenu className="tr-more" trigger="⋯" title="更多">
            {({ close }) => (
              <>
                {transcript ? (
                  <MenuAction hint="查空行与时间轴" onSelect={() => { close(); onValidate() }}>校验字幕</MenuAction>
                ) : null}
                {transcript && onResegment ? (
                  <MenuAction hint="碎片行拼回整句" onSelect={() => { close(); onResegment() }}>整理断句</MenuAction>
                ) : null}
                {transcript && target && onRetranslate ? (
                  <MenuAction hint="整篇覆盖重翻，会问一句" onSelect={() => { close(); onRetranslate() }}>重新翻译</MenuAction>
                ) : null}
                <MenuAction hint="转写与翻译" onSelect={() => { close(); onOpenSettings() }}>设置</MenuAction>
              </>
            )}
          </PopMenu>
          {transcript ? (
            <PopMenu className="tr-export" trigger="导出" title="导出字幕">
              {({ close }) => (
                <>
                  <MenuDownload hint="带时间轴，剪辑软件用" href={`${API}/episodes/${transcript.id}/transcript/export?format=srt`} onSelect={close}>
                    字幕文件 .srt
                  </MenuDownload>
                  <MenuDownload hint="带时间戳的文稿" href={`${API}/episodes/${transcript.id}/transcript/export?format=md`} onSelect={close}>
                    文稿 .md
                  </MenuDownload>
                  <MenuAction hint="纯文本，连译文一起" onSelect={copyAll}>{copied ? '已复制' : '复制全文'}</MenuAction>
                </>
              )}
            </PopMenu>
          ) : null}
          {inline ? null : <button className="transcript-close" onClick={onClose} title="收起">×</button>}
        </div>
      </header>
      <div className="transcript-body" ref={bodyRef}>
        {transcript && running ? (
          <div className="tr-strip">
            <span>
              {status === 'queued' ? '排队中…' : stage === 'preparing' ? '正在准备音频…' : stage === 'downloading' ? '正在下载音频…' : stage === 'diarizing' ? '正在分离说话人…' : '正在转写…'}
              {progress?.percent != null ? ` ${progress.percent}%` : ''}
              {chunks?.total ? ` · 第 ${Math.min((chunks.done || 0) + 1, chunks.total)}/${chunks.total} 块` : ''}
              {` · 已出 ${transcript.lines.length} 行`}
            </span>
            {onCancel ? <button className="seg-tool" onClick={onCancel}>取消</button> : null}
          </div>
        ) : null}
        {transcript && issues?.length ? (
          <div className="tr-issues">
            {issues.slice(0, 5).map((issue) => <div key={issue}>· {issue}</div>)}
            {issues.length > 5 ? <div>…共 {issues.length} 条</div> : null}
          </div>
        ) : null}
        {job?.status === 'running' || job?.status === 'queued' ? (
          <div className="tr-running">
            翻译中…{job.progress?.total ? ` ${job.progress.done || 0}/${job.progress.total}` : ''}
          </div>
        ) : null}
        {job?.status === 'error' ? (
          <div className="tr-running err">
            {job.error}
            待翻 {job.missing ?? 0} 行，点工具栏的「重试翻译」再试一次
          </div>
        ) : null}
        {job?.status === 'partial' ? (
          <div className="tr-running">
            已翻 {job.translated ?? 0}/{job.total ?? 0} 行，还缺 {job.missing ?? 0} 行 —— 点工具栏的「续翻」接着翻
          </div>
        ) : null}
        {job?.status === 'none' && target && transcript && (job.missing ?? 0) > 0 ? (
          <div className="tr-running">
            还没有译文（共 {job.missing} 行待翻）—— 点工具栏的「翻译」开始
          </div>
        ) : null}
        {transcript ? (
          transcript.lines.map((line, index) => (
            <div
              key={line.id}
              data-seg={index}
              className={`seg-row ${index === activeIndex ? 'active' : ''} ${editingId === line.id ? 'is-editing' : ''}`}
              role="button"
              tabIndex={0}
              title={`跳转到 ${fmtTime(line.start)}`}
              onClick={() => onSeek(line.start)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  onSeek(line.start)
                }
              }}
            >
              <span className="seg-time">{fmtTime(line.start)}</span>
              {editingId === line.id ? (
                <span className="seg-edit" onClick={(event) => event.stopPropagation()}>
                  <textarea
                    ref={editRef}
                    value={draft}
                    rows={Math.min(4, Math.max(2, Math.ceil((draft.length || 1) / 40)))}
                    onChange={(event) => onDraftChange(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) onSaveLine(line.id)
                      if (event.key === 'Escape') onCancelEdit()
                    }}
                  />
                  <span className="seg-edit-actions">
                    <button className="seg-tool" onClick={() => onSaveLine(line.id)}>保存</button>
                    <button className="seg-tool" onClick={() => onSplitLine(line.id, editRef.current?.selectionStart ?? Math.floor(draft.length / 2))}>拆分</button>
                    {target && onRetranslateLine ? (
                      <button className="seg-tool" title="只重翻这一行的译文" onClick={() => onRetranslateLine(line)}>重翻</button>
                    ) : null}
                    <button className="seg-tool" onClick={onCancelEdit}>取消</button>
                  </span>
                </span>
              ) : (
                <>
                  {line.speaker != null ? (
                    <span className={`seg-speaker spk-${line.speaker % 5}`}>{transcript.speakers?.[line.speaker]?.label || `说话人 ${line.speaker + 1}`}</span>
                  ) : null}
                  <span className="seg-text">
                    {line.text}
                    {line.translations?.[target] ? <span className="seg-trans">{line.translations[target]}</span> : null}
                  </span>
                  <span className="seg-tools">
                    <button className="seg-tool" title="编辑这一行" onClick={(event) => { event.stopPropagation(); onEditLine(line) }}>✎</button>
                    {index < transcript.lines.length - 1 ? (
                      <button className="seg-tool" title="与下一行合并" onClick={(event) => { event.stopPropagation(); onMergeLine(line.id) }}>⇣</button>
                    ) : null}
                  </span>
                </>
              )}
            </div>
          ))
        ) : running ? (
          <div className="transcript-status">
            {status === 'queued' ? '排队中…' : stage === 'merging' ? '正在合并字幕…' : stage === 'preparing' ? '正在准备音频…' : stage === 'downloading' ? '正在下载音频…' : '正在转写…'}
            {progress?.percent != null ? ` ${progress.percent}%` : ''}
            {chunks?.total ? ` · 第 ${Math.min(chunks.done + 1, chunks.total)}/${chunks.total} 块` : ''}
            {' · 已用 ' + Math.round((elapsed || 0) / 1000) + ' 秒'}
            {progress?.percent != null ? <span className="tx-progress"><span style={{ width: `${progress.percent}%` }} /></span> : null}
            <br />
            <span className="tx-hint">长播客会自动切块转写；关掉面板也会继续跑，可在「任务」里看进度。</span>
            <br />
            {onCancel ? <button className="btn ghost" style={{ marginTop: 10 }} onClick={onCancel}>取消转写</button> : null}
          </div>
        ) : error ? (
          <div className="transcript-status">
            <span className="err">{error}</span>
            <br />
            <button className="btn ghost" style={{ marginTop: 10 }} onClick={onStart}>重试</button>
          </div>
        ) : (
          <div className="transcript-status">
            还没有转写这一集。
            <br />
            <button className="btn primary" style={{ marginTop: 10 }} onClick={onStart}>开始转写</button>
          </div>
        )}
      </div>
      {onResize ? (
        <>
          {inline ? null : (
            <>
              {/* 边缘也能拖：鼠标放上去才出现高亮线，靠猜把手的人也能发现。 */}
              <span
                className="transcript-grip is-left"
                onPointerDown={onResizeDown}
                onPointerMove={onResizeMove}
                onPointerUp={onResizeUp}
                onPointerCancel={onResizeUp}
                title="拖动调整宽度"
              />
              <span
                className="transcript-grip is-top"
                onPointerDown={onResizeDown}
                onPointerMove={onResizeMove}
                onPointerUp={onResizeUp}
                onPointerCancel={onResizeUp}
                title="拖动调整高度"
              />
            </>
          )}
          <span
            className={`transcript-resize ${inline ? 'is-inline' : ''}`}
            onPointerDown={onResizeDown}
            onPointerMove={onResizeMove}
            onPointerUp={onResizeUp}
            onPointerCancel={onResizeUp}
            onDoubleClick={() => onResize(null, null, true)}
            title={inline ? '拖动调整高度（双击恢复默认）' : '拖动调整大小（双击恢复默认）'}
          />
        </>
      ) : null}
    </section>
  )
}

