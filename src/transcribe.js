// 转写任务管理：调用 MLX Qwen3-ASR CLI，把结果落到 ~/.podwave/transcripts/<id>.json。
// 一次只跑一个任务，其余排队，避免在 16GB 内存的机器上同时加载多个模型。
// 长音频按 chunkMinutes 切块（ffmpeg），逐块转写后合并时间戳；块结果留在 .work/<id> 里，取消/崩溃后可续跑。
// transcript 使用 v2 结构：lines[]（行级时间戳 + 每行译文）和 providers{}（每个目标语言的翻译来源）。
import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { copyFile, mkdir, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { DATA_DIR } from './state.js'
import { loadModelConfig, modelDir } from './models.js'
import { ffmpegPath, ffprobePath, killTree, venvBin, venvPython } from './platform.js'
import { getSection } from './config.js'
import { artifactByDir } from './catalog.js'
import { assignSpeakers, diarizeInfo, runDiarization } from './diarize.js'
import { flushJobs, getJob, getJobFresh, jobKey, removeJob, upsertJob } from './jobs.js'

export const TRANSCRIPTS_DIR = path.join(DATA_DIR, 'transcripts')
const WORK_DIR = path.join(TRANSCRIPTS_DIR, '.work')
// Windows 的虚拟环境是 .venv\Scripts\mlx-qwen3-asr.exe，不是 .venv/bin/。
// 用 venvBin() 拼平台路径，否则 Windows 上永远判定「运行环境未安装」。
const CLI = venvBin('mlx-qwen3-asr')
const SHERPA_SCRIPT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'scripts', 'asr_sherpa_batch.py')
const FFMPEG = process.env.PODWAVE_FFMPEG || ffmpegPath() || 'ffmpeg'
const FFPROBE = process.env.PODWAVE_FFPROBE || ffprobePath() || 'ffprobe'

// 估算进度用：转写速度约 3.2x 实时（含每次启动加载模型的固定开销）。
const SPEED = 3.2

const queue = [] // { episode, force, resume }
let active = null // { key, episodeId }
let activeChild = null
const cancelRequested = new Set()

// 宿主热重载后，新模块实例拿不到旧实例的 activeChild，取消就杀不掉那个进程。
// 所以把当前工作进程的 pid 也写进 job，取消时先按内存找，找不到再按 pid 兜底。
// Windows 上 SIGTERM 等于硬杀，交给 killTree 用 taskkill /T 连子孙一起收。
function stopChildByPid(pid) {
  return killTree(pid)
}

function transcriptPath(id) {
  return path.join(TRANSCRIPTS_DIR, `${id}.json`)
}

function round2(value) {
  return Math.round((Number(value) || 0) * 100) / 100
}

export function currentAsrModel() {
  const name = loadModelConfig().asrModel
  const dir = modelDir(name)
  // 不能靠模型名正则猜引擎：换个名字（比如 Windows 的 sensevoice-small-int8 之外的写法）
  // 就会掉进 MLX 分支，然后去查只有 macOS 才有的 CLI，永远 installed:false。
  // 以 catalog 元数据为准，查不到时再退回正则兜底。
  const artifact = artifactByDir(name, 'asr')
  const engine = artifact ? (artifact.engine === 'onnx' ? 'sherpa' : 'mlx') : /sensevoice|sherpa/i.test(name) ? 'sherpa' : 'mlx'
  const ready =
    engine === 'sherpa'
      ? fs.existsSync(path.join(dir, 'model.int8.onnx'))
      : fs.existsSync(path.join(dir, 'model.safetensors'))
  return { name, dir, ready, engine }
}

export function transcribeConfig() {
  const section = getSection('transcribe') || {}
  const hotwords = Array.isArray(section.hotwords) ? section.hotwords.map((word) => String(word || '').trim()).filter(Boolean) : []
  const raw = Number(section.chunkMinutes)
  const chunkMinutes = Math.max(1, Math.min(60, Number.isFinite(raw) && raw > 0 ? raw : 15))
  return { hotwords, chunkMinutes, diarize: section.diarize !== false }
}

export function runtimeInfo() {
  const model = currentAsrModel()
  const config = transcribeConfig()
  const sherpa = model.engine === 'sherpa'
  // sherpa 走 venv 里的 python 跑脚本；MLX 走 venv 里的命令行工具。
  // 两者都必须在 Windows 的 Scripts\ 下找，否则 installed 永远 false。
  const cliPath = sherpa ? venvPython() : CLI
  const installed = sherpa ? fs.existsSync(SHERPA_SCRIPT) && fs.existsSync(cliPath) : fs.existsSync(cliPath)
  return {
    engine: model.engine,
    installed,
    modelReady: model.ready,
    model: model.dir,
    modelName: model.name,
    cli: cliPath,
    hotwords: config.hotwords,
    chunkMinutes: config.chunkMinutes,
    diarize: config.diarize,
    diarization: diarizeInfo(),
  }
}

function jobId(episodeId) {
  return jobKey({ type: 'transcribe', episodeId })
}

// 把老格式（segments + translations[target][id]）升级成 v2（lines + line.translations[target]）。
// 已经是 v2 的原样返回；无法识别返回 null。
export function normalizeTranscript(raw, fallbackId = '') {
  if (!raw || typeof raw !== 'object') return null
  if (raw.schemaVersion === 2 && Array.isArray(raw.lines)) return raw

  const segments = Array.isArray(raw.segments) ? raw.segments : Array.isArray(raw.lines) ? raw.lines : []
  const translations = raw.translations && typeof raw.translations === 'object' ? raw.translations : {}
  const providers = {}
  for (const [target, mapping] of Object.entries(translations)) {
    if (target === '_provider' || !mapping || typeof mapping !== 'object') continue
    if (typeof mapping._provider === 'string' && mapping._provider) providers[target] = mapping._provider
  }

  const lines = []
  for (const [index, seg] of segments.entries()) {
    const text = String(seg?.text || '').trim()
    if (!text) continue
    const oldId = Number.isFinite(Number(seg?.id)) ? Number(seg.id) : index + 1
    const lineTranslations = {}
    for (const [target, mapping] of Object.entries(translations)) {
      if (target === '_provider' || !mapping || typeof mapping !== 'object') continue
      const value = mapping[String(oldId)] ?? mapping[oldId]
      if (value) lineTranslations[target] = String(value)
    }
    lines.push({
      id: lines.length + 1,
      start: round2(seg.start),
      end: round2(seg.end),
      text,
      speaker: seg.speaker ?? null,
      translations: lineTranslations,
    })
  }

  const id = String(raw.id || fallbackId || '')
  return {
    schemaVersion: 2,
    id,
    title: String(raw.title || ''),
    createdAt: Number(raw.createdAt) || Date.now(),
    updatedAt: Date.now(),
    model: String(raw.model || ''),
    language: String(raw.language || ''),
    duration: Number(raw.duration) || round2(lines[lines.length - 1]?.end || 0),
    text: String(raw.text || lines.map((line) => line.text).join(' ')),
    source: raw.source && typeof raw.source === 'object' ? raw.source : null,
    lines,
    providers,
    speakers: Array.isArray(raw.speakers) ? raw.speakers : [],
    migratedFrom: Number(raw.schemaVersion) || 1,
  }
}

async function saveTranscript(transcript) {
  await mkdir(TRANSCRIPTS_DIR, { recursive: true })
  const target = transcriptPath(transcript.id)
  const tmp = `${target}.tmp`
  await writeFile(tmp, JSON.stringify({ ...transcript, schemaVersion: 2, updatedAt: Date.now() }, null, 2), 'utf8')
  await rename(tmp, target)
}

export { saveTranscript }

// 单集 id 由文件绝对路径哈希而来，文件被改名/移动/换盘后历史字幕会变成"孤儿"：
// 文件还在 transcripts/ 里，但按新路径算出的 id 找不到它。这里按内容特征把孤儿认领回来。
const claimMisses = new Map() // id → 失败时间，带 TTL，避免媒体库还没扫描完时被永久判死
const CLAIM_RETRY_MS = 60_000

function normalizeTitle(value) {
  return String(value || '').replace(/\s+/g, ' ').trim().toLowerCase()
}

async function claimOrphanTranscript(id) {
  const lastMiss = claimMisses.get(id)
  if (lastMiss && Date.now() - lastMiss < CLAIM_RETRY_MS) return null
  let episode = null
  try {
    const { findEpisode } = await import('./providers.js')
    episode = findEpisode(id)
  } catch {
    return null
  }
  const title = normalizeTitle(episode?.title)
  const duration = Number(episode?.duration) || 0
  // 媒体库还没扫到这个单集时不要记失败，等下次扫描后再试。
  if (!title || !duration) return null

  let names = []
  try {
    names = await readdir(TRANSCRIPTS_DIR)
  } catch {
    claimMisses.set(id, Date.now())
    return null
  }

  const matches = []
  for (const name of names) {
    if (!name.endsWith('.json') || name === `${id}.json`) continue
    const file = path.join(TRANSCRIPTS_DIR, name)
    let raw
    try {
      raw = JSON.parse(await readFile(file, 'utf8'))
    } catch {
      continue
    }
    if (!Array.isArray(raw?.lines) || !raw.lines.length) continue
    if (normalizeTitle(raw.title) !== title) continue
    if (Math.abs((Number(raw.duration) || 0) - duration) > 2) continue
    matches.push({ file, raw })
  }

  // 只有唯一候选才认领，避免把另一个同名同长的单集字幕错挂过来。
  if (matches.length !== 1) {
    if (matches.length > 1) {
      console.warn(`[dsh-podwave] 字幕认领放弃：${title} 有 ${matches.length} 个候选字幕`)
    }
    claimMisses.set(id, Date.now())
    return null
  }

  const [{ file, raw }] = matches
  const claimed = normalizeTranscript(
    {
      ...raw,
      id,
      schemaVersion: 2,
      source: episode?.file
        ? { path: episode.file, size: episode.size || null, mtime: episode.mtime || null }
        : raw.source || null,
      claimedFrom: raw.id || path.basename(file, '.json'),
    },
    id,
  )
  if (!claimed) {
    claimMisses.set(id, Date.now())
    return null
  }
  try {
    await saveTranscript(claimed)
  } catch {
    claimMisses.set(id, Date.now())
    return null
  }
  console.warn(`[dsh-podwave] 字幕认领：${path.basename(file)} → ${id}.json（${title}）`)
  return claimed
}

export async function readTranscript(id) {
  let raw
  try {
    raw = JSON.parse(await readFile(transcriptPath(id), 'utf8'))
  } catch {
    return claimOrphanTranscript(id)
  }
  const normalized = normalizeTranscript(raw, id)
  if (normalized && raw.schemaVersion !== 2) {
    try {
      await saveTranscript(normalized)
    } catch {
      /* 写回失败不阻塞读取 */
    }
  }
  return normalized
}

// 启动时把目录里所有老 transcript 迁成 v2，并留一份 <id>.json.v1.bak。
export async function migrateAllTranscripts() {
  let names = []
  try {
    names = await readdir(TRANSCRIPTS_DIR)
  } catch {
    return { migrated: 0 }
  }
  let migrated = 0
  for (const name of names) {
    if (!name.endsWith('.json') || name.startsWith('.')) continue
    const file = path.join(TRANSCRIPTS_DIR, name)
    let raw
    try {
      raw = JSON.parse(await readFile(file, 'utf8'))
    } catch {
      continue
    }
    if (raw?.schemaVersion === 2) continue
    const normalized = normalizeTranscript(raw, name.replace(/\.json$/, ''))
    if (!normalized) continue
    const backup = `${file}.v1.bak`
    try {
      if (!fs.existsSync(backup)) await copyFile(file, backup)
    } catch {
      /* ignore */
    }
    try {
      await saveTranscript(normalized)
      migrated += 1
    } catch {
      /* ignore */
    }
  }
  return { migrated }
}

export async function deleteTranscript(id) {
  const job = getJob(jobId(id))
  if (job && (job.status === 'queued' || job.status === 'running')) return false
  try {
    await rm(transcriptPath(id), { force: true })
  } catch {
    /* ignore */
  }
  await rm(path.join(WORK_DIR, id), { recursive: true, force: true }).catch(() => {})
  removeJob(jobId(id))
  return true
}

function pump() {
  if (active || !queue.length) return
  const item = queue.shift()
  active = { key: jobId(item.episode.id), episodeId: item.episode.id }
  runJob(item)
}

function waitChild(child) {
  return new Promise((resolve, reject) => {
    child.on('error', reject)
    child.on('close', resolve)
  })
}

function runCapture(command, args) {
  return new Promise((resolve) => {
    let output = ''
    let child
    try {
      child = spawn(command, args, { stdio: ['ignore', 'ignore', 'pipe'] })
    } catch {
      resolve('')
      return
    }
    child.stderr.on('data', (chunk) => {
      output += chunk.toString('utf8')
    })
    child.on('error', () => resolve(''))
    child.on('close', () => resolve(output))
  })
}

function runProcess(command, args) {
  return new Promise((resolve) => {
    let child
    try {
      child = spawn(command, args, { stdio: 'ignore' })
    } catch {
      resolve(-1)
      return
    }
    child.on('error', () => resolve(-1))
    child.on('close', (code) => resolve(code))
  })
}

async function probeDuration(file) {
  return new Promise((resolve) => {
    let child
    try {
      child = spawn(FFPROBE, ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=nw=1:nk=1', file], {
        stdio: ['ignore', 'pipe', 'ignore'],
      })
    } catch {
      resolve(0)
      return
    }
    let out = ''
    child.stdout.on('data', (chunk) => {
      out += chunk.toString()
    })
    child.on('error', () => resolve(0))
    child.on('close', () => resolve(Number(out.trim()) || 0))
  })
}

// 用 ffmpeg 把长音频切成若干块；先尝试不重编码（-c copy），失败再转 AAC。
async function detectSilenceMidpoints(file) {
  const output = await runCapture(FFMPEG, [
    '-hide_banner',
    '-nostats',
    '-i', file,
    '-af', 'silencedetect=noise=-30dB:d=0.45',
    '-f', 'null',
    '-',
  ])
  const starts = []
  const mids = []
  for (const line of output.split(/\r?\n/)) {
    const start = /silence_start: (-?[\d.]+)/.exec(line)
    if (start) starts.push(Number(start[1]))
    const end = /silence_end: ([\d.]+)/.exec(line)
    if (end && starts.length) {
      const from = starts.pop()
      const to = Number(end[1])
      if (to > from) mids.push((from + to) / 2)
    }
  }
  return mids
}

function planCuts(duration, chunkSeconds, silences) {
  const cuts = [0]
  let target = chunkSeconds
  while (target < duration - 20) {
    const floor = cuts[cuts.length - 1] + Math.min(chunkSeconds * 0.5, 30)
    const window = chunkSeconds * 0.45
    const candidates = silences.filter((time) => time > floor && time < duration - 8 && Math.abs(time - target) <= window)
    const pick = candidates.sort((a, b) => Math.abs(a - target) - Math.abs(b - target))[0]
    cuts.push(round2(pick ?? target))
    target = (pick ?? target) + chunkSeconds
  }
  cuts.push(round2(duration))
  return cuts.filter((value, index, list) => index === 0 || value > list[index - 1] + 5)
}

async function splitAudioAt(file, dir, cuts, shouldCancel) {
  await mkdir(dir, { recursive: true })
  const sherpa = currentAsrModel().engine === 'sherpa'
  const parts = []
  for (let index = 0; index < cuts.length - 1; index += 1) {
    if (shouldCancel && shouldCancel()) throw new Error('用户取消了转写')
    const start = cuts[index]
    const end = cuts[index + 1]
    const ext = sherpa ? 'wav' : 'm4a'
    const out = path.join(dir, `chunk-${String(index).padStart(3, '0')}.${ext}`)
    const code = sherpa
      ? await runProcess(FFMPEG, ['-hide_banner', '-loglevel', 'error', '-y', '-i', file, '-ss', String(start), '-to', String(end), '-ar', '16000', '-ac', '1', '-c:a', 'pcm_s16le', out])
      : await runProcess(FFMPEG, ['-hide_banner', '-loglevel', 'error', '-y', '-i', file, '-ss', String(start), '-to', String(end), '-vn', '-c:a', 'aac', '-b:a', '96k', out])
    if (code !== 0) throw new Error('音频切分失败（ffmpeg）')
    const actual = (await probeDuration(out)) || end - start
    parts.push({ index, start: round2(start), end: round2(start + actual), file: out, duration: round2(actual) })
  }
  return parts
}

async function splitAudio(file, dir, chunkSeconds) {
  await mkdir(dir, { recursive: true })
  const sherpa = currentAsrModel().engine === 'sherpa'
  const ext = sherpa ? 'wav' : 'm4a'
  const pattern = path.join(dir, `chunk-%03d.${ext}`)
  const base = ['-hide_banner', '-loglevel', 'error', '-y', '-i', file, '-f', 'segment', '-segment_time', String(chunkSeconds), '-reset_timestamps', '1']
  let code
  if (sherpa) {
    code = await runProcess(FFMPEG, [...base, '-ar', '16000', '-ac', '1', '-c:a', 'pcm_s16le', pattern])
  } else {
    code = await runProcess(FFMPEG, [...base, '-c', 'copy', pattern])
    if (code !== 0) code = await runProcess(FFMPEG, [...base, '-c:a', 'aac', '-b:a', '96k', pattern])
  }
  if (code !== 0) throw new Error('音频切分失败（ffmpeg）')
  const names = (await readdir(dir)).filter((name) => new RegExp(`\\.${ext}$`, 'i').test(name)).sort()
  if (!names.length) throw new Error('音频切分后没有生成文件')
  const parts = []
  let start = 0
  for (const [index, name] of names.entries()) {
    const full = path.join(dir, name)
    const duration = (await probeDuration(full)) || chunkSeconds
    parts.push({ index, start: round2(start), end: round2(start + duration), file: full, duration: round2(duration) })
    start += duration
  }
  return parts
}

// 生成或复用切块计划；计划存 .work/<id>/meta.json，块结果在 .work/<id>/results/<index>.json。
async function ensurePlan(episode, workDir, shouldCancel) {
  const { chunkMinutes } = transcribeConfig()
  const chunkSeconds = Math.round(chunkMinutes * 60)
  const duration = Number(episode.duration) || (await probeDuration(episode.file)) || 0
  if (!duration) throw new Error('无法读取音频时长（ffprobe）')
  const metaPath = path.join(workDir, 'meta.json')
  let meta = null
  try {
    meta = JSON.parse(await readFile(metaPath, 'utf8'))
  } catch {
    meta = null
  }
  const canReuse =
    meta &&
    meta.chunkSeconds === chunkSeconds &&
    Math.abs(Number(meta.duration) - duration) < 2 &&
    Array.isArray(meta.parts) &&
    meta.parts.length > 0 &&
    meta.parts.every((part) => fs.existsSync(part.file))
  if (canReuse) return meta
  if (shouldCancel && shouldCancel()) throw new Error('用户取消了转写')

  await rm(path.join(workDir, 'parts'), { recursive: true, force: true })
  await rm(path.join(workDir, 'results'), { recursive: true, force: true })
  const single = currentAsrModel().engine !== 'sherpa' && duration <= chunkSeconds * 1.2
  let parts
  if (single) {
    parts = [{ index: 0, start: 0, end: round2(duration), file: episode.file, duration: round2(duration) }]
  } else {
    const silences = await detectSilenceMidpoints(episode.file).catch(() => [])
    if (shouldCancel && shouldCancel()) throw new Error('用户取消了转写')
    const cuts = planCuts(duration, chunkSeconds, silences)
    parts = cuts.length > 2
      ? await splitAudioAt(episode.file, path.join(workDir, 'parts'), cuts, shouldCancel)
      : await splitAudio(episode.file, path.join(workDir, 'parts'), chunkSeconds)
  }
  const plan = { duration: round2(duration), chunkSeconds, chunked: !single, parts }
  await writeFile(metaPath, JSON.stringify(plan, null, 2), 'utf8')
  return plan
}

function resultPath(resultsDir, index) {
  return path.join(resultsDir, `${String(index).padStart(3, '0')}.json`)
}

function hasResult(resultsDir, index) {
  return fs.existsSync(resultPath(resultsDir, index))
}

function progressOf(plan, doneSeconds, currentSeconds) {
  const total = Number(plan?.duration) || 0
  const raw = total ? ((doneSeconds + Math.max(0, currentSeconds)) / total) * 100 : 0
  const percent = Math.min(99.5, Math.round(raw * 10) / 10)
  return { done: round2(doneSeconds), total: round2(total), percent, unit: 'seconds' }
}

function buildArgs(file, outDir) {
  const { hotwords } = transcribeConfig()
  const args = [
    file,
    '--model', currentAsrModel().dir,
    '--output-dir', outDir,
    '--output-format', 'json',
    '--timestamps',
    '--no-progress',
    '--quiet',
  ]
  if (hotwords.length) args.push('--context', hotwords.join(' '))
  return args
}

async function readPartOutput(dir) {
  const names = (await readdir(dir)).filter((name) => name.toLowerCase().endsWith('.json'))
  if (!names.length) throw new Error('转写没有产生 JSON 输出')
  return JSON.parse(await readFile(path.join(dir, names[0]), 'utf8'))
}

function wordsOf(raw) {
  const list = Array.isArray(raw.segments) ? raw.segments : Array.isArray(raw.tokens) ? raw.tokens : []
  return list
    .map((seg) => ({
      start: Number(seg.start) || 0,
      end: Number(seg.end) || 0,
      text: String(seg.text || '').trim(),
    }))
    .filter((seg) => seg.text)
}


function buildBatchArgs(files, outDir) {
  const model = currentAsrModel()
  const { hotwords } = transcribeConfig()
  if (model.engine === 'sherpa') {
    const args = [SHERPA_SCRIPT, ...files, '--model-dir', model.dir, '--out-dir', outDir, '--threads', '4']
    if (hotwords.length) args.push('--hotwords', hotwords.join(' '))
    return args
  }
  const args = [
    ...files,
    '--model', currentAsrModel().dir,
    '--output-dir', outDir,
    '--output-format', 'json',
    '--timestamps',
    '--no-progress',
    '--quiet',
  ]
  if (hotwords.length) args.push('--context', hotwords.join(' '))
  return args
}

function countResults(resultsDir, plan) {
  let count = 0
  let seconds = 0
  let partial = 0
  for (const part of plan.parts) {
    if (!hasResult(resultsDir, part.index)) {
      if (part.index === -1) partial += 1
      continue
    }
    count += 1
    seconds += part.duration
  }
  return { count, seconds }
}

function mergedFromResults(plan, resultsDir) {
  const lines = []
  let language = ''
  const texts = []
  for (const part of [...plan.parts].sort((a, b) => a.index - b.index)) {
    if (!hasResult(resultsDir, part.index)) continue
    let data
    try {
      data = JSON.parse(fs.readFileSync(resultPath(resultsDir, part.index), 'utf8'))
    } catch {
      continue
    }
    if (!language && data.language) language = data.language
    if (data.text) texts.push(data.text)
    for (const line of data.lines || []) {
      const text = String(line.text || '').trim()
      if (!text) continue
      lines.push({
        id: lines.length + 1,
        start: round2(Number(line.start) + part.start),
        end: round2(Number(line.end) + part.start),
        text,
        speaker: null,
        translations: {},
      })
    }
  }
  return { lines, language, texts }
}

function buildPreview(episode, plan, merged) {
  return {
    schemaVersion: 2,
    id: episode.id,
    title: episode.title || '',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    model: currentAsrModel().name,
    language: merged.language,
    duration: plan.duration,
    text: merged.texts.join(' '),
    source: { path: episode.file },
    lines: merged.lines,
    providers: {},
    speakers: [],
    partial: true,
  }
}

async function runJob(item) {
  const { episode, force } = item
  const key = jobId(episode.id)
  const work = path.join(WORK_DIR, episode.id)
  const target = transcriptPath(episode.id)
  const backup = `${target}.previous`
  let plan = null
  let backedUp = false
  let partialWritten = false
  try {
    upsertJob({
      key,
      type: 'transcribe',
      episodeId: episode.id,
      episodeTitle: episode.title || '',
      status: 'running',
      stage: 'preparing',
      startedAt: Date.now(),
      finishedAt: null,
      error: null,
      progress: { done: 0, total: 0, percent: 0, unit: 'seconds' },
      chunks: { total: 0, done: 0, current: null },
    })
    if (force) await rm(work, { recursive: true, force: true })
    await mkdir(work, { recursive: true })
    plan = await ensurePlan(episode, work, () => cancelRequested.has(key))
    const resultsDir = path.join(work, 'results')
    const cliDir = path.join(work, 'cli')
    await mkdir(resultsDir, { recursive: true })
    await mkdir(cliDir, { recursive: true })

    // 重转时先备份旧字幕，失败/取消可以还原，不让半成品覆盖已有结果。
    if (fs.existsSync(target)) {
      await copyFile(target, backup).catch(() => {})
      backedUp = fs.existsSync(backup)
    }

    // CLI 一次处理所有缺失的块：只加载一次模型；每完成一块就落一个 JSON。
    const ingest = async () => {
      let fresh = 0
      for (const part of plan.parts) {
        if (hasResult(resultsDir, part.index)) continue
        const base = path.basename(part.file).replace(/\.[^.]+$/, '')
        let raw
        try {
          raw = JSON.parse(await readFile(path.join(cliDir, `${base}.json`), 'utf8'))
        } catch {
          continue
        }
        const lines = buildSegments(raw, wordsOf(raw))
        await writeFile(
          resultPath(resultsDir, part.index),
          JSON.stringify({ index: part.index, start: part.start, lines, language: raw.language || '', text: raw.text || '' }),
          'utf8',
        )
        fresh += 1
      }
      return fresh
    }

    await ingest()
    const missing = plan.parts.filter((part) => !hasResult(resultsDir, part.index))
    let child = null
    let stderrTail = ''
    let lastIngestAt = Date.now()
    if (missing.length) {
      const model = currentAsrModel()
      const command = model.engine === 'sherpa' ? venvPython() : CLI
      child = spawn(command, buildBatchArgs(missing.map((part) => part.file), cliDir), {
        env: { ...process.env, HF_HUB_OFFLINE: '1', TOKENIZERS_PARALLELISM: 'false' },
        stdio: ['ignore', 'ignore', 'pipe'],
      })
      activeChild = child
      upsertJob({ key, pid: child.pid || null })
      child.stderr.on('data', (chunk) => {
        stderrTail = (stderrTail + chunk.toString()).slice(-4000)
      })
    }

    let lastLineCount = 0
    const tick = async () => {
      const fresh = await ingest()
      const counts = countResults(resultsDir, plan)
      if (fresh > 0) {
        const merged = mergedFromResults(plan, resultsDir)
        if (merged.lines.length) {
          await saveTranscript(buildPreview(episode, plan, merged)).catch(() => {})
          partialWritten = true
          lastLineCount = merged.lines.length
        }
        lastIngestAt = Date.now()
      }
      // 取消可能来自另一个模块实例（宿主热重载后旧实例还在跑这个任务），
      // 它只能写磁盘；这里每轮读一次磁盘，看到取消意图就转成内存里的取消请求。
      if (!cancelRequested.has(key)) {
        const disk = getJobFresh(key)
        if (disk && (disk.status === 'cancelled' || disk.stage === 'cancelling')) cancelRequested.add(key)
      }
      const cancelled = cancelRequested.has(key)
      if (cancelled) {
        // 已取消就别再写 progress 把磁盘上的 cancelling 覆盖回转写中。
        if (child) killTree(child.pid)
        return
      }
      const current = plan.parts.find((part) => !hasResult(resultsDir, part.index)) || null
      const eta = current ? Math.min(current.duration * 0.96, Math.max(0, (Date.now() - lastIngestAt) / 1000) * SPEED) : 0
      upsertJob({
        key,
        stage: 'transcribing',
        chunks: { total: plan.parts.length, done: counts.count, current: current ? current.index + 1 : null },
        progress: progressOf(plan, counts.seconds, eta),
        lineCount: lastLineCount,
      })
    }

    const ticker = setInterval(() => {
      tick().catch(() => {})
    }, 1000)
    let code = 0
    if (child) code = await waitChild(child)
    clearInterval(ticker)
    activeChild = null
    await ingest()
    const counts = countResults(resultsDir, plan)

    // 子进程刚退出时，ticker 可能还来不及把磁盘上的取消意图转成内存标记，
    // 所以这里再读一次磁盘，避免「已经取消了」被当成进程异常退出。
    if (!cancelRequested.has(key)) {
      const disk = getJobFresh(key)
      if (disk && (disk.status === 'cancelled' || disk.stage === 'cancelling')) cancelRequested.add(key)
    }
    if (cancelRequested.has(key)) {
      cancelRequested.delete(key)
      if (backedUp) await copyFile(backup, target).catch(() => {})
      else if (partialWritten) await rm(target, { force: true }).catch(() => {})
      upsertJob({ key, status: 'cancelled', stage: 'cancelled', finishedAt: Date.now(), error: '用户取消了转写', pid: null })
      return
    }
    if (code !== 0) {
      if (code === null) {
        // 进程被信号杀掉（宿主重启、插件重载、手动 kill）。分块结果都留着，可以续跑。
        throw new Error('转写进程被中断，已完成的分块保留，可以点重试继续')
      }
      const detail = stderrTail
        .trim()
        .split('\n')
        .filter((line) => line && !/MallocStackLogging|malloc stack logging/.test(line))
        .slice(-6)
        .join('\n')
      throw new Error(`转写进程退出码 ${code}${detail ? `\n${detail}` : ''}`)
    }
    if (counts.count < plan.parts.length) throw new Error('部分音频块没有转写结果')

    upsertJob({ key, stage: 'merging' })
    const merged = mergedFromResults(plan, resultsDir)
    let speakers = []
    if (transcribeConfig().diarize && diarizeInfo().modelsReady) {
      const prevPercent = getJob(key)?.progress?.percent || 0
      upsertJob({ key, stage: 'diarizing', progress: { done: 0, total: 0, percent: Math.max(prevPercent, 96), unit: 'seconds' } })
      try {
        const result = await runDiarization(episode.file)
        speakers = assignSpeakers(merged.lines, result.segments || [])
      } catch {
        speakers = []
      }
    }

    let source = null
    try {
      const info = fs.statSync(episode.file)
      source = { path: episode.file, size: info.size, mtime: info.mtimeMs }
    } catch {
      source = { path: episode.file }
    }

    const transcript = {
      schemaVersion: 2,
      id: episode.id,
      title: episode.title,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      model: currentAsrModel().name,
      language: merged.language,
      duration: plan.duration || episode.duration || merged.lines[merged.lines.length - 1]?.end || 0,
      text: merged.texts.join(' '),
      source,
      lines: merged.lines,
      providers: {},
      speakers,
    }
    await saveTranscript(transcript)
    await rm(backup, { force: true }).catch(() => {})
    upsertJob({
      key,
      status: 'done',
      stage: 'done',
      finishedAt: Date.now(),
      lineCount: merged.lines.length,
      language: merged.language,
      speakers: speakers.length,
      error: null,
      progress: { ...progressOf(plan, plan.duration, 0), percent: 100, done: plan.duration, total: plan.duration },
      chunks: { total: plan.parts.length, done: plan.parts.length, current: null },
    })
    await rm(work, { recursive: true, force: true })
  } catch (error) {
    if (backedUp) await copyFile(backup, target).catch(() => {})
    else if (partialWritten) await rm(target, { force: true }).catch(() => {})
    // 宿主热重载后，取消可能由新模块实例写进磁盘；本实例内存里的 cancelRequested 是空的。
    // 所以收尾必须以磁盘上的真实状态为准，否则「已取消」会被覆写成「进程退出码 -15」。
    const disk = getJobFresh(key)
    const cancelledOnDisk = disk?.status === 'cancelled' || disk?.stage === 'cancelling'
    if (cancelRequested.has(key) || cancelledOnDisk) {
      cancelRequested.delete(key)
      upsertJob({ key, status: 'cancelled', stage: 'cancelled', finishedAt: Date.now(), error: '用户取消了转写', pid: null })
    } else {
      upsertJob({
        key,
        status: 'error',
        stage: 'error',
        finishedAt: Date.now(),
        error: error.message || String(error),
      })
    }
  } finally {
    cancelRequested.delete(key)
    active = null
    activeChild = null
    upsertJob({ key, pid: null, orphan: false })
    flushJobs()
    pump()
  }
}

const CJK_RE = /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/

function joinTokens(tokens) {
  let output = ''
  for (const token of tokens) {
    if (!output) {
      output = token
      continue
    }
    const previous = output.slice(-1)
    const next = token.slice(0, 1)
    output += CJK_RE.test(previous) && CJK_RE.test(next) ? token : ` ${token}`
  }
  return output
}

// 模型给出的是词级片段（中文甚至按字），这里拼成一行行适合做字幕的句子。
function groupWords(words) {
  const lines = []
  let current = null
  const flush = () => {
    if (!current) return
    const text = joinTokens(current.tokens).trim()
    if (text) lines.push({ start: current.start, end: current.end, text })
    current = null
  }
  for (const word of words) {
    const text = String(word.text || '').trim()
    if (!text) continue
    const start = Number(word.start) || 0
    const end = Number(word.end) || start
    if (!current) {
      current = { start, end, tokens: [text] }
    } else if (start - current.end > 1.2) {
      flush()
      current = { start, end, tokens: [text] }
    } else {
      current.end = end
      current.tokens.push(text)
    }
    const joined = joinTokens(current.tokens)
    const elapsed = current.end - current.start
    if (
      /[。！？!?…]$/.test(joined) ||
      (/[，,;；:：]$/.test(joined) && joined.length > 42) ||
      joined.length >= 90 ||
      elapsed >= 15
    ) {
      flush()
    }
  }
  flush()
  return lines.map((line, index) => ({
    id: index + 1,
    start: round2(line.start),
    end: round2(line.end),
    text: line.text,
  }))
}

function normalizeWord(text) {
  return String(text || '').toLowerCase().replace(/[^\p{L}\p{N}]/gu, '')
}

const CJK_CHAR = /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/
const PUNCT_CHAR = /[。！？!?…，,;；:：、.]/

function tokenizeChunk(text) {
  const tokens = []
  let buffer = ''
  const push = (type, value) => tokens.push({ type, text: value })
  for (const char of String(text || '')) {
    if (CJK_CHAR.test(char)) {
      if (buffer) {
        push('word', buffer)
        buffer = ''
      }
      push('word', char)
    } else if (/\s/.test(char)) {
      if (buffer) {
        push('word', buffer)
        buffer = ''
      }
    } else if (PUNCT_CHAR.test(char)) {
      if (buffer) {
        push('word', buffer)
        buffer = ''
      }
      push('punct', char)
    } else {
      buffer += char
    }
  }
  if (buffer) push('word', buffer)
  return tokens
}

// 模型给出的词级片段没有标点；chunk 的 text 有标点。两者对齐后就能得到带标点的字幕行。
function buildSegments(raw, words) {
  const chunks = Array.isArray(raw.chunks) ? raw.chunks.filter((chunk) => chunk && chunk.text) : []
  if (!chunks.length) return groupWords(words)

  const lines = []
  let current = null
  const flush = () => {
    if (!current) return
    const text = current.text.trim()
    if (text) lines.push({ start: current.start, end: current.end, text })
    current = null
  }
  const appendWord = (text, start, end) => {
    if (!current) {
      current = { start, end, text }
      return
    }
    if (start - current.end > 1.2) {
      flush()
      current = { start, end, text }
      return
    }
    const previous = current.text.slice(-1)
    const next = text.slice(0, 1)
    current.text += CJK_CHAR.test(previous) && CJK_CHAR.test(next) ? text : ` ${text}`
    current.end = end
  }

  for (const chunk of chunks) {
    const chunkStart = Number(chunk.start) || 0
    const chunkEnd = Number(chunk.end) || chunkStart
    const chunkWords = words.filter((word) => word.start >= chunkStart - 0.06 && word.start < chunkEnd + 0.06)
    let cursor = 0
    for (const token of tokenizeChunk(chunk.text)) {
      if (token.type === 'punct') {
        if (!current) continue
        current.text += token.text
        if (/[。！？!?…]/.test(token.text)) flush()
        continue
      }
      const target = normalizeWord(token.text)
      let matched = null
      for (let index = cursor; index < Math.min(chunkWords.length, cursor + 3); index += 1) {
        const candidate = normalizeWord(chunkWords[index]?.text)
        if (candidate === target || (target && candidate.startsWith(target))) {
          matched = chunkWords[index]
          cursor = index + 1
          break
        }
      }
      if (!matched && chunkWords[cursor]) {
        matched = chunkWords[cursor]
        cursor += 1
      }
      appendWord(token.text, matched ? matched.start : chunkStart, matched ? matched.end : chunkEnd)
      if (current && /[，,；;]$/.test(current.text) && current.text.length >= 48) flush()
      if (current && (current.text.length >= 90 || current.end - current.start >= 15)) flush()
    }
    if (current && /[。！？!?…]$/.test(current.text) && current.text.length > 2) flush()
  }
  flush()

  return lines
    .filter((line) => line.text.trim() && line.end - line.start >= 0.2)
    .map((line, index) => ({
      id: index + 1,
      start: round2(line.start),
      end: round2(line.end),
      text: line.text.trim(),
    }))
}

export async function startTranscription(episode, { force = false, resume = false } = {}) {
  const info = runtimeInfo()
  if (!info.installed) throw Object.assign(new Error('转写运行环境未安装（~/.podwave/runtime）'), { status: 503 })
  if (!info.modelReady) throw Object.assign(new Error('转写模型未下载（~/.podwave/models）'), { status: 503 })

  const key = jobId(episode.id)
  const currentJob = getJob(key)
  if (currentJob && (currentJob.status === 'queued' || currentJob.status === 'running')) {
    return { status: currentJob.status }
  }

  const existing = await readTranscript(episode.id)
  if (existing && !force && !resume) return { status: 'done', lines: existing.lines.length }

  const resumeWork = Boolean(resume) && fs.existsSync(path.join(WORK_DIR, episode.id, 'results'))
  upsertJob({
    key,
    type: 'transcribe',
    episodeId: episode.id,
    episodeTitle: episode.title || '',
    status: 'queued',
    stage: 'queued',
    queuedAt: Date.now(),
    startedAt: null,
    finishedAt: null,
    error: null,
    progress: { done: 0, total: 0, percent: 0, unit: 'seconds' },
    chunks: { total: 0, done: 0, current: null },
  })
  queue.push({ episode, force: Boolean(force) || !resumeWork, resume: resumeWork })
  pump()
  return { status: 'queued' }
}

export async function enqueueBatch(episodes) {
  const result = { queued: 0, skipped: 0, errors: [] }
  for (const episode of episodes) {
    try {
      const state = await startTranscription(episode, {})
      if (state.status === 'queued') result.queued += 1
      else result.skipped += 1
    } catch (error) {
      result.errors.push({ id: episode.id, error: error.message || String(error) })
    }
  }
  return result
}

export function cancelTranscription(id) {
  const key = jobId(id)
  const job = getJob(key)
  if (!job) return { status: 'none' }
  if (job.status === 'done' || job.status === 'error' || job.status === 'cancelled') {
    return { status: job.status }
  }
  const index = queue.findIndex((item) => item.episode.id === id)
  if (index >= 0) {
    queue.splice(index, 1)
    cancelRequested.delete(key)
    upsertJob({ key, status: 'cancelled', stage: 'cancelled', finishedAt: Date.now(), error: '用户取消了排队中的转写' })
    flushJobs()
    return { status: 'cancelled' }
  }
  cancelRequested.add(key)
  const inMemory = active && active.key === key && activeChild
  const pid = inMemory ? activeChild.pid : job.pid
  if (stopChildByPid(pid)) {
    // 保留 cancelRequested：runJob 的 catch 看到它才会把任务标成「已取消」，
    // 否则进程被信号杀掉会被当成普通失败写成 error。
    upsertJob({ key, stage: 'cancelling' })
    return { status: 'cancelling' }
  }
  // 进程已经不在了（宿主重启过、或者进程自己退了），任务状态同样要收尾，
  // 不能把 running/interrupted 留在磁盘上让界面一直转。
  cancelRequested.delete(key)
  upsertJob({ key, status: 'cancelled', stage: 'cancelled', finishedAt: Date.now(), error: '用户取消了转写', pid: null })
  flushJobs()
  return { status: 'cancelled' }
}

export async function getTranscriptionState(id) {
  const job = getJob(jobId(id))
  const transcript = await readTranscript(id)
  const base = job ? job.startedAt || job.queuedAt || job.updatedAt || Date.now() : 0
  const elapsedMs = job ? (job.finishedAt || Date.now()) - base : 0
  if (job && (job.status === 'queued' || job.status === 'running')) {
    const position = queue.findIndex((item) => item.episode.id === id)
    return {
      status: job.status,
      stage: job.stage,
      progress: job.progress || null,
      chunks: job.chunks || null,
      queued: position >= 0 ? position + 1 : 0,
      elapsedMs,
      transcript: transcript && transcript.partial ? transcript : null,
      episodeTitle: job.episodeTitle || '',
    }
  }
  // 旧字幕还在时优先显示旧字幕：一次失败的重转不应该把已有结果藏起来。
  if (transcript) return { status: 'done', transcript, job: job || null, elapsedMs }
  if (job && (job.status === 'interrupted' || job.status === 'error' || job.status === 'cancelled')) {
    return {
      status: 'error',
      error: job.error || (job.status === 'cancelled' ? '已取消' : '任务已中断'),
      stage: job.stage,
      progress: job.progress || null,
      chunks: job.chunks || null,
      elapsedMs,
    }
  }
  return { status: 'none' }
}

function srtTime(seconds) {
  const total = Math.max(0, Number(seconds) || 0)
  const hours = Math.floor(total / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const secs = Math.floor(total % 60)
  const ms = Math.round((total - Math.floor(total)) * 1000)
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')},${String(ms).padStart(3, '0')}`
}

function joinText(left, right) {
  if (!left) return right
  if (!right) return left
  return /[A-Za-z0-9]$/.test(left) && /^[A-Za-z0-9]/.test(right) ? `${left} ${right}` : `${left}${right}`
}

function renumberLines(lines) {
  return lines.map((line, index) => ({ ...line, id: index + 1 }))
}

function refreshText(transcript) {
  transcript.text = transcript.lines.map((line) => line.text).join(' ')
  return transcript
}

// P2：字幕行编辑。改文本会作废该行旧译文（时间戳单独改不影响译文）。
export async function editTranscriptLine(id, lineId, patch = {}) {
  const transcript = await readTranscript(id)
  if (!transcript) return null
  const line = transcript.lines.find((item) => String(item.id) === String(lineId))
  if (!line) throw new Error('找不到这一行')
  let changedText = false
  if (typeof patch.text === 'string') {
    const text = patch.text.replace(/\s+/g, ' ').trim()
    if (!text) throw new Error('字幕文本不能为空')
    if (text !== line.text) {
      line.text = text
      line.translations = {}
      changedText = true
    }
  }
  if (Number.isFinite(Number(patch.start))) line.start = round2(Math.max(0, Number(patch.start)))
  if (Number.isFinite(Number(patch.end))) line.end = round2(Math.max(line.start + 0.05, Number(patch.end)))
  if (changedText && transcript.providers) {
    // 译文整体失效时保留 provider 记录，方便再翻
  }
  transcript.lines = renumberLines(transcript.lines)
  refreshText(transcript)
  await saveTranscript(transcript)
  return transcript
}

export async function splitTranscriptLine(id, lineId, offset) {
  const transcript = await readTranscript(id)
  if (!transcript) return null
  const index = transcript.lines.findIndex((item) => String(item.id) === String(lineId))
  if (index < 0) throw new Error('找不到这一行')
  const line = transcript.lines[index]
  const chars = Array.from(line.text)
  let at = Number.isFinite(Number(offset)) ? Math.round(Number(offset)) : Math.floor(chars.length / 2)
  at = Math.min(chars.length - 1, Math.max(1, at))
  const left = chars.slice(0, at).join('').trim()
  const right = chars.slice(at).join('').trim()
  if (!left || !right) throw new Error('拆分位置前后都需要有文字')
  const ratio = at / chars.length
  const splitAt = round2(line.start + (line.end - line.start) * ratio)
  const first = { ...line, text: left, end: splitAt, translations: {} }
  const second = { ...line, text: right, start: splitAt, translations: {} }
  transcript.lines.splice(index, 1, first, second)
  transcript.lines = renumberLines(transcript.lines)
  refreshText(transcript)
  await saveTranscript(transcript)
  return transcript
}

export async function mergeTranscriptLine(id, lineId) {
  const transcript = await readTranscript(id)
  if (!transcript) return null
  const index = transcript.lines.findIndex((item) => String(item.id) === String(lineId))
  if (index < 0) throw new Error('找不到这一行')
  if (index >= transcript.lines.length - 1) throw new Error('已经是最后一行')
  const first = transcript.lines[index]
  const second = transcript.lines[index + 1]
  const translations = {}
  for (const target of new Set([...Object.keys(first.translations || {}), ...Object.keys(second.translations || {})])) {
    const left = first.translations?.[target]
    const right = second.translations?.[target]
    if (left && right) translations[target] = joinText(left, right)
    else if (left || right) translations[target] = left || right
  }
  const merged = {
    ...first,
    end: second.end,
    text: joinText(first.text, second.text),
    translations,
    speaker: first.speaker && first.speaker === second.speaker ? first.speaker : first.speaker || second.speaker || null,
  }
  transcript.lines.splice(index, 2, merged)
  transcript.lines = renumberLines(transcript.lines)
  refreshText(transcript)
  await saveTranscript(transcript)
  return transcript
}

export async function validateTranscript(id) {
  const transcript = await readTranscript(id)
  if (!transcript) return { ok: false, issues: ['还没有转写'] }
  const issues = []
  transcript.lines.forEach((line, index) => {
    if (!String(line.text || '').trim()) issues.push(`第 ${index + 1} 行没有文字`)
    if (!(line.end > line.start)) issues.push(`第 ${index + 1} 行时间戳无效`)
    if (index > 0 && line.start < transcript.lines[index - 1].end - 0.05) {
      issues.push(`第 ${index} 行与第 ${index + 1} 行时间重叠`)
    }
  })
  return { ok: issues.length === 0, issues }
}

export function toSRT(transcript) {
  return transcript.lines
    .map((line, index) => `${index + 1}\n${srtTime(line.start)} --> ${srtTime(line.end)}\n${line.text}\n`)
    .join('\n')
}

export function toMarkdown(transcript) {
  const lines = [`# ${transcript.title || transcript.id}`, '', `> 模型 ${transcript.model}${transcript.language ? ` · 语言 ${transcript.language}` : ''}`, '']
  for (const line of transcript.lines) {
    const minutes = Math.floor(line.start / 60)
    const seconds = Math.floor(line.start % 60)
    lines.push(`**${minutes}:${String(seconds).padStart(2, '0')}** ${line.text}`)
  }
  return `${lines.join('\n')}\n`
}

export async function diarizeTranscript(episode) {
  const transcript = await readTranscript(episode.id)
  if (!transcript) throw new Error('还没有转写，先转写再识别说话人')
  const info = diarizeInfo()
  if (!info.installed || !info.modelsReady) throw new Error('说话人分离模型还没准备好')
  const key = jobKey({ type: 'diarize', episodeId: episode.id })
  upsertJob({
    key,
    type: 'diarize',
    episodeId: episode.id,
    episodeTitle: episode.title || '',
    status: 'running',
    stage: 'diarizing',
    startedAt: Date.now(),
    finishedAt: null,
    error: null,
  })
  try {
    const result = await runDiarization(episode.file)
    const speakers = assignSpeakers(transcript.lines, result.segments || [])
    transcript.speakers = speakers
    transcript.updatedAt = Date.now()
    await saveTranscript(transcript)
    upsertJob({ key, status: 'done', stage: 'done', finishedAt: Date.now(), speakers: speakers.length, error: null })
    return transcript
  } catch (error) {
    upsertJob({ key, status: 'error', stage: 'error', finishedAt: Date.now(), error: error.message || String(error) })
    throw error
  }
}

export function stopAll() {
  if (activeChild) killTree(activeChild.pid)
  // 插件被禁用或热重载时走到这里：把正在跑的任务在磁盘上收尾成「已停止」，
  // 不然新实例读到的是一条永远 running 的僵尸任务，界面上点取消也没有对象。
  if (active?.key && active?.episodeId) {
    const disk = getJobFresh(active.key)
    if (disk && (disk.status === 'queued' || disk.status === 'running')) {
      upsertJob({
        key: active.key,
        status: 'cancelled',
        stage: 'cancelled',
        finishedAt: Date.now(),
        error: '转写已停止（插件重新加载），已完成的分块保留，可以重试续跑',
        pid: null,
        orphan: false,
      })
    }
  }
  cancelRequested.clear()
  queue.length = 0
  flushJobs()
}
