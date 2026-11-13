// 把任务对象转成一行中文状态。
export function jobLabel(job) {
  if (job.type === 'download') {
    if (job.status === 'done') return '已下载'
    if (job.status === 'error' || job.status === 'interrupted') return job.error || '下载失败'
    return `下载中${job.progress ? ` ${job.progress}%` : ''}`
  }
  const pct = job.progress?.percent
  const chunk = job.chunks?.total ? ` · ${job.chunks.done}/${job.chunks.total} 块` : ''
  if (job.status === 'done') return `完成${job.lineCount ? ` · ${job.lineCount} 行` : ''}${job.language ? ` · ${job.language}` : ''}`
  if (job.status === 'error' || job.status === 'interrupted') return job.error || '失败'
  if (job.status === 'cancelled') return job.error || '已取消'
  if (job.status === 'queued') return '排队中'
  const stage =
    job.stage === 'merging'
      ? '合并字幕'
      : job.stage === 'preparing'
        ? '准备音频'
        : job.stage === 'cancelling'
          ? '正在取消'
          : '转写中'
  return `${stage}${pct != null ? ` ${pct}%` : ''}${chunk}`
}

