const API = '/podwave/api'
import React, { useEffect, useRef } from 'react'
import Icon from './Icon.jsx'
import { fmtTime } from '../lib/format.js'

export default function TranscriptPanel({ transcript, status, progress, stage, chunks, queued, elapsed, error, position, onSeek, onClose, onStart, onCancel, target, job, onChangeTarget, onOpenSettings, inline = false, editingId = null, draft = '', onDraftChange, onEditLine, onSaveLine, onCancelEdit, onSplitLine, onMergeLine, onUndo, onValidate, issues = [] }) {
  const bodyRef = useRef(null)
  const editRef = useRef(null)
  const activeIndex = transcript?.lines?.findIndex((line) => position >= line.start && position < line.end) ?? -1

  useEffect(() => {
    if (activeIndex < 0 || !bodyRef.current) return
    const row = bodyRef.current.querySelector(`[data-seg="${activeIndex}"]`)
    row?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex])

  const running = status === 'queued' || status === 'running'

  return (
    <section className={`transcript-panel ${inline ? 'inline' : ''}`}>
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
          <button className="mini-link" onClick={onOpenSettings}>设置</button>
          {transcript ? (
            <>
              <button className="mini-link" onClick={onUndo} title="撤销上一步编辑">撤销</button>
              <button className="mini-link" onClick={onValidate} title="导出前检查字幕">校验</button>
              <a className="mini-link" href={`${API}/episodes/${transcript.id}/transcript/export?format=srt`} download>SRT</a>
              <a className="mini-link" href={`${API}/episodes/${transcript.id}/transcript/export?format=md`} download>Markdown</a>
            </>
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
        {job?.status === 'running' ? <div className="tr-running">翻译中…</div> : null}
        {job?.status === 'error' ? <div className="tr-running err">{job.error}</div> : null}
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
    </section>
  )
}

