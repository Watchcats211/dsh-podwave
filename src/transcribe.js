// 转写任务管理：调用 MLX Qwen3-ASR CLI，把结果落到 ~/.podwave/transcripts/<id>.json。
// 一次只跑一个任务，其余排队，避免在 16GB 内存的机器上同时加载多个模型。
// 长音频按 chunkMinutes 切块（ffmpeg），逐块转写后合并时间戳；块结果留在 .work/<id> 里，取消/崩溃后可续跑。
// transcript 使用 v2 结构：lines[]（行级时间戳 + 每行译文）和 providers{}（每个目标语言的翻译来源）。
import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { copyFile, mkdir, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { DATA_DIR, getState } from './state.js'
import { loadModelConfig, localModelMeta, modelDir } from './models.js'
import { ffmpegPath, ffprobePath, killTree, venvBin, venvPython } from './platform.js'
import { getSection } from './config.js'
import { API_CHUNK_SECONDS, REALTIME_CHUNK_SECONDS, asrApiConfig, asrProvider, buildApiLines, transcribeChunk } from './asr-api.js'
import { artifactByDir } from './catalog.js'
import { assignSpeakers, diarizeInfo, runDiarization } from './diarize.js'
import { resegmentLines } from './segment.js'
import { closeLiveSpeakers, createLiveSpeakers } from './live-speaker.js'
import { loadConfig as loadTranslateConfig, needsTranslation, translateWithApi } from './translate.js'
import { flushJobs, getJob, getJobFresh, jobKey, removeJob, upsertJob } from './jobs.js'

export const TRANSCRIPTS_DIR = path.join(DATA_DIR, 'transcripts')
const WORK_DIR = path.join(TRANSCRIPTS_DIR, '.work')
// Windows 的虚拟环境是 .venv\Scripts\mlx-qwen3-asr.exe，不是 .venv/bin/。
// 用 venvBin() 拼平台路径，否则 Windows 上永远判定「运行环境未安装」。
const CLI = venvBin('mlx-qwen3-asr')
const SHERPA_SCRIPT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'scripts', 'asr_sherpa_batch.py')
const MOSS_SCRIPT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'scripts', 'moss_server.py')
// MOSS 单次能吞 90 分钟，但段太长会拖慢首行出字、也更容易 OOM；5 分钟一段（P0 实测最优）。
const MOSS_CHUNK_SECONDS = 300
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
  const engine = artifact
    ? artifact.engine === 'moss' ? 'moss' : artifact.engine === 'onnx' ? 'sherpa' : 'mlx'
    : /moss-transcribe/i.test(name) ? 'moss' : /sensevoice|sherpa/i.test(name) ? 'sherpa' : 'mlx'
  const ready =
    engine === 'sherpa'
      ? fs.existsSync(path.join(dir, 'model.int8.onnx'))
      : engine === 'moss'
        // MOSS 是 transformers 权重 + 远程代码，config.json 在就说明目录下全了。
        ? fs.existsSync(path.join(dir, 'config.json'))
        : fs.existsSync(path.join(dir, 'model.safetensors'))
  // 选成「翻译模型」也能通过上面的存在性检查（它确实有 model.safetensors），
  // 然后在 mlx-qwen3-asr 里吐一屏 missing keys —— 用户只看到「转写失败」。
  // 这里提前判死，并给出能照着做的说法。
  const kind = artifact ? artifact.kind : localModelMeta(name)?.kind || ''
  const problem = kind && kind !== 'asr' ? modelKindProblem(name, kind) : ''
  return { name, dir, ready: ready && !problem, engine, problem, kind }
}

const MODEL_KIND_LABELS = { translate: '翻译', diarization: '说话人分离', asr: '转写' }

function modelKindProblem(name, kind) {
  const label = MODEL_KIND_LABELS[kind] || '别的用途'
  return `「${name}」是${label}模型，不能用来转写。请到「设置 → 播客 → 转写」把转写模型换成真正的语音识别模型（例如 moss-transcribe-diarize / qwen3-asr），或者直接把转写方式切回云端 API。`
}

export function transcribeConfig() {
  const section = getSection('transcribe') || {}
  const hotwords = Array.isArray(section.hotwords) ? section.hotwords.map((word) => String(word || '').trim()).filter(Boolean) : []
  const raw = Number(section.chunkMinutes)
  const chunkMinutes = Math.max(1, Math.min(60, Number.isFinite(raw) && raw > 0 ? raw : 15))
  return { provider: asrProvider(), hotwords, chunkMinutes, diarize: section.diarize !== false }
}

// 云端接口只吃 16 位 PCM WAV；本地 sherpa 也吃 wav，MLX 吃 m4a。
function wantWav() {
  const engine = currentAsrModel().engine
  return asrProvider() === 'api' || engine === 'sherpa' || engine === 'moss'
}

export function runtimeInfo() {
  const model = currentAsrModel()
  const config = transcribeConfig()
  const api = asrApiConfig()
  const sherpa = model.engine === 'sherpa'
  const moss = model.engine === 'moss'
  // sherpa / moss 走 venv 里的 python 跑脚本；MLX 走 venv 里的命令行工具。
  // 两者都必须在 Windows 的 Scripts\ 下找，否则 installed 永远 false。
  const cliPath = sherpa || moss ? venvPython() : CLI
  const installed = sherpa
    ? fs.existsSync(SHERPA_SCRIPT) && fs.existsSync(cliPath)
    : moss
      ? fs.existsSync(MOSS_SCRIPT) && fs.existsSync(cliPath)
      : fs.existsSync(cliPath)
  return {
    provider: config.provider,
    // 当前这条路到底能不能开跑：云端看有没有 key，本地看运行时 + 模型。
    ready: config.provider === 'api' ? api.hasKey : installed && model.ready,
    engine: model.engine,
    installed,
    modelReady: model.ready,
    // 模型选错用途时（拿翻译模型来转写）说清原因，前端和 startTranscription 都用它。
    modelProblem: model.problem || '',
    model: model.dir,
    modelName: model.name,
    cli: cliPath,
    api: { base: api.base, url: api.url, hasKey: api.hasKey },
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
    let mtimeMs = 0
    try {
      mtimeMs = fs.statSync(file).mtimeMs
    } catch {
      mtimeMs = 0
    }
    matches.push({ file, raw, mtimeMs })
  }

  if (!matches.length) {
    claimMisses.set(id, Date.now())
    return null
  }

  // 多个候选时按可信度挑一个，而不是直接放弃 —— 放弃会让用户看到「字幕没了」。
  // 优先级：音频路径完全一致 > 文件大小一致 > 行数更多 > 更新的文件。
  const score = (match) => {
    const sourcePath = String(match.raw?.source?.path || '')
    const sourceSize = Number(match.raw?.source?.size || 0)
    let value = 0
    if (episode?.file && sourcePath === episode.file) value += 1000
    if (episode?.size && sourceSize && sourceSize === Number(episode.size)) value += 100
    value += Math.min(99, (match.raw?.lines?.length || 0) / 100)
    return value
  }
  matches.sort((a, b) => score(b) - score(a) || (b.mtimeMs || 0) - (a.mtimeMs || 0))

  const [{ file, raw }] = matches
  if (matches.length > 1) {
    console.warn(`[dsh-podwave] 字幕认领：${title} 有 ${matches.length} 个候选，按音频路径/大小取最可能的一个`)
  }
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
  // 旧的那份已经复制成新 id 了，留着只会在下次认领时变成第二个候选；挪进备份目录，不直接删。
  const backupDir = path.join(TRANSCRIPTS_DIR, '.claimed')
  try {
    await mkdir(backupDir, { recursive: true })
    await rename(file, path.join(backupDir, path.basename(file)))
  } catch {
    /* 挪不动就算了，不影响读取 */
  }
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
// 分块缓存（.work/<id>/parts、results）在转写成功后会被清掉，
// 但取消/失败/老版本留下的会一直堆着 —— 几百兆就是这么来的。启动时扫一遍。
export async function sweepWorkDirs({ maxAgeMs = 7 * 24 * 60 * 60 * 1000 } = {}) {
  let entries = []
  try {
    entries = await readdir(WORK_DIR, { withFileTypes: true })
  } catch {
    return { removed: 0 }
  }
  let removed = 0
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const dir = path.join(WORK_DIR, entry.name)
    // 已经有完整字幕的目录，缓存没有保留价值，直接清。
    let hasTranscript = false
    try {
      await fs.promises.access(transcriptPath(entry.name))
      hasTranscript = true
    } catch {
      hasTranscript = false
    }
    let stale = false
    if (!hasTranscript) {
      try {
        const stat = fs.statSync(dir)
        const age = Date.now() - stat.mtimeMs
        // 一个结果都没产出的目录，一天以上就是纯粹的垃圾（早就没得续）；
        // 有结果的留满 7 天，给「续转」留余地。
        let resultCount = 0
        try {
          resultCount = (await readdir(path.join(dir, 'results'))).length
        } catch {
          resultCount = 0
        }
        stale = resultCount === 0 ? age > 24 * 60 * 60 * 1000 : age > maxAgeMs
      } catch {
        stale = false
      }
    }
    if (!hasTranscript && !stale) continue
    try {
      await rm(dir, { recursive: true, force: true })
      removed += 1
    } catch {
      /* 删不掉就下次再说 */
    }
  }
  if (removed) console.log(`[dsh-podwave] 清理了 ${removed} 个过期的分块缓存目录`)
  return { removed }
}

export async function migrateAllTranscripts() {
  let names = []
  try {
    names = await readdir(TRANSCRIPTS_DIR)
  } catch {
    return { migrated: 0 }
  }
  let migrated = 0
  const claimed = new Set()
  const raws = new Map()
  for (const name of names) {
    if (!name.endsWith('.json') || name.startsWith('.')) continue
    try {
      const parsed = JSON.parse(await readFile(path.join(TRANSCRIPTS_DIR, name), 'utf8'))
      raws.set(name, parsed)
      if (parsed?.claimedFrom) claimed.add(String(parsed.claimedFrom))
    } catch {
      /* 坏文件交给下面的迁移分支忽略 */
    }
  }
  // 旧逻辑认领完不删原件，同一集会留下「孤儿 + 认领后」两份，用户看到重复条目。
  // 这里把已经被别人认领走的孤儿挪进 .claimed/ 留档（不删）。
  for (const [name, parsed] of raws) {
    const id = name.replace(/\.json$/, '')
    if (!claimed.has(id)) continue
    const backupDir = path.join(TRANSCRIPTS_DIR, '.claimed')
    try {
      await mkdir(backupDir, { recursive: true })
      await rename(path.join(TRANSCRIPTS_DIR, name), path.join(backupDir, name))
      migrated += 1
    } catch {
      /* ignore */
    }
    raws.delete(name)
  }

  for (const name of raws.keys()) {
    if (!name.endsWith('.json') || name.startsWith('.')) continue
    const file = path.join(TRANSCRIPTS_DIR, name)
    const raw = raws.get(name)
    if (!raw || raw?.schemaVersion === 2) continue
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
  if (item.provider === 'api') runApiJob(item)
  else runJob(item)
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

export function planCuts(duration, chunkSeconds, silences) {
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
  const wav = wantWav()
  const parts = []
  for (let index = 0; index < cuts.length - 1; index += 1) {
    if (shouldCancel && shouldCancel()) throw new Error('用户取消了转写')
    const start = cuts[index]
    const end = cuts[index + 1]
    const ext = wav ? 'wav' : 'm4a'
    const out = path.join(dir, `chunk-${String(index).padStart(3, '0')}.${ext}`)
    const code = wav
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
  const wav = wantWav()
  const ext = wav ? 'wav' : 'm4a'
  const pattern = path.join(dir, `chunk-%03d.${ext}`)
  const base = ['-hide_banner', '-loglevel', 'error', '-y', '-i', file, '-f', 'segment', '-segment_time', String(chunkSeconds), '-reset_timestamps', '1']
  let code
  if (wav) {
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
async function ensurePlan(episode, workDir, shouldCancel, provider = asrProvider(), chunkSecondsOverride) {
  const api = provider === 'api'
  const { chunkMinutes } = transcribeConfig()
  // 云端接口硬限制单次 120 秒：整段转写用 100 秒的大块，实时跟播用 12 秒的小块。
  // 本地引擎沿用设置里的 chunkMinutes。
  const chunkSeconds = chunkSecondsOverride || (api ? API_CHUNK_SECONDS : Math.round(chunkMinutes * 60))
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
  const single = !api && currentAsrModel().engine !== 'sherpa' && duration <= chunkSeconds * 1.2
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

// MOSS 自己就给「句子 + 起止 + 说话人」，别再过 groupWords（那会按 1.2 秒间隙重新切句并丢掉 speaker）。
function mossLines(segments) {
  const lines = []
  for (const seg of Array.isArray(segments) ? segments : []) {
    const text = String(seg?.text || '').trim()
    if (!text) continue
    const start = round2(seg.start)
    const rawEnd = Number(seg.end)
    const end = Number.isFinite(rawEnd) && rawEnd > start ? round2(rawEnd) : round2(start + 2)
    lines.push({ start, end, text, speaker: seg.speaker ? String(seg.speaker) : null })
  }
  return lines
    .sort((a, b) => a.start - b.start)
    .map((line, index) => ({ id: index + 1, ...line }))
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
  if (model.engine === 'moss') {
    const args = [
      MOSS_SCRIPT, ...files,
      '--model', model.dir,
      '--out-dir', outDir,
      '--device', 'auto',
      '--dtype', 'auto',
      '--threads', '2',
    ]
    if (hotwords.length) args.push('--hotwords', hotwords.join('，'))
    return args
  }
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

// 切点即使吸附到静音，块边界仍可能落在句子中间；云端接口还会给被截断的片段补个句号。
// 所以合并时把「上一块最后一行」和「下一块第一行」按时间连续性接回去。
const TERMINAL_END = /[。！？!?…][」』）)】》”’"]?$/

export function stitchAcrossParts(prev, next) {
  const gap = Number(next.start) - Number(prev.end)
  if (!(gap >= -0.25 && gap <= 0.45)) return null
  const left = String(prev.text || '')
  const right = String(next.text || '')
  if (!left || !right) return null
  // 上一行没有句末标点，或者短得像半句（「明日。」），就认定它被切断了。
  const suspicious = !TERMINAL_END.test(left) || left.replace(/\s/g, '').length <= 6
  if (!suspicious) return null
  const joiner = /[A-Za-z0-9]$/.test(left) && /^[A-Za-z0-9]/.test(right) ? ' ' : ''
  const text = `${left}${joiner}${right}`
  if (text.length > 120) return null
  return { text, end: Number(next.end) }
}

function mergedFromResults(plan, resultsDir) {
  const groups = []
  let language = ''
  const texts = []
  let moss = false
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
    if (data.engine === 'moss') moss = true
    const group = []
    for (const line of data.lines || []) {
      const text = String(line.text || '').trim()
      if (!text) continue
      const speaker = line.speaker ? String(line.speaker) : ''
      group.push({
        start: round2(Number(line.start) + part.start),
        end: round2(Number(line.end) + part.start),
        text,
        ...(speaker ? { speaker } : {}),
      })
    }
    if (group.length) groups.push(group)
  }

  const joined = []
  for (const group of groups) {
    // MOSS 的句子边界是模型自己给的，跨段拼接会把两句话并成一句、说话人也一起丢。
    if (!moss && joined.length && group.length) {
      const stitched = stitchAcrossParts(joined[joined.length - 1], group[0])
      if (stitched) {
        joined[joined.length - 1] = { ...joined[joined.length - 1], text: stitched.text, end: stitched.end }
        group.shift()
      }
    }
    joined.push(...group)
  }

  // 识别出来的分段是按模型自己的声学块来的，本地引擎经常两三词一行、句尾还没标点。
  // 先整理成整句再落盘：翻译按行送模型，碎片行会让小模型自己合并、译文整体错位。
  if (moss) {
    const lines = joined
      .filter((line) => line.text && line.end - line.start >= 0.2)
      .map((line, index) => ({
        id: index + 1,
        start: round2(line.start),
        end: round2(line.end),
        text: line.text,
        speaker: line.speaker || null,
      }))
    return { lines, language, texts }
  }
  const lines = resegmentLines(joined)
  return { lines, language, texts }
}

// 实时跟播：每完成一块就把这一块的行立刻翻译出来，用户不用等整段转完。
const LIVE_TARGET = 'zh'

async function translateLiveLines(lines, cache) {
  const config = loadTranslateConfig()
  if (!config.apiKey) return 0
  const batch = []
  const seen = new Set()
  for (const line of lines) {
    const text = String(line.text || '').trim()
    if (!text || cache.has(text) || seen.has(text)) continue
    if (!needsTranslation(line, LIVE_TARGET)) continue
    seen.add(text)
    batch.push({ id: text, text })
  }
  if (!batch.length) return 0
  const result = await translateWithApi(batch, LIVE_TARGET, config)
  for (const [key, value] of result) cache.set(key, value)
  return result.size
}

// 译文按「原文」缓存：断句重排会让行号变，但同一句原文的译文可以复用。
function applyLiveTranslations(lines, cache) {
  if (!cache.size) return
  for (const line of lines) {
    const text = String(line.text || '').trim()
    const hit = cache.get(text)
    if (hit) line.translations = { ...(line.translations || {}), [LIVE_TARGET]: hit }
  }
}

function playbackPosition(episodeId) {
  try {
    const position = Number(getState().progress?.[episodeId]?.position)
    return Number.isFinite(position) && position > 0 ? position : 0
  } catch {
    return 0
  }
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
    plan = await ensurePlan(
      episode,
      work,
      () => cancelRequested.has(key),
      undefined,
      currentAsrModel().engine === 'moss' ? MOSS_CHUNK_SECONDS : undefined,
    )
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
        const moss = raw.engine === 'moss'
        const lines = moss ? mossLines(raw.segments) : buildSegments(raw, wordsOf(raw))
        await writeFile(
          resultPath(resultsDir, part.index),
          JSON.stringify({
            index: part.index,
            start: part.start,
            engine: moss ? 'moss' : undefined,
            lines,
            language: raw.language || '',
            text: raw.text || '',
          }),
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
      const scripted = model.engine === 'sherpa' || model.engine === 'moss'
      const command = scripted ? venvPython() : CLI
      // MOSS 用 transformers 的 load_audio 解码，需要能在 PATH 里找到 ffmpeg；
      // 插件自带的 ffmpeg 不一定在 PATH 上，这里显式补进第一个位置。
      const ffmpegDir = path.dirname(FFMPEG)
      const pathEnv = ffmpegDir && ffmpegDir !== '.' ? `${ffmpegDir}${path.delimiter}${process.env.PATH || ''}` : process.env.PATH
      child = spawn(command, buildBatchArgs(missing.map((part) => part.file), cliDir), {
        env: { ...process.env, PATH: pathEnv, HF_HUB_OFFLINE: '1', TOKENIZERS_PARALLELISM: 'false' },
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
    // MOSS 已经在同一遍里给出说话人了，不要再跑一次声纹模型（那是整条链路最慢的一步）。
    // MOSS 的说话人就在行里，声纹模型那一步直接跳过，把标签汇总到 transcript.speakers 即可。
    const inlineSpeakers = [...new Set(merged.lines.map((line) => line.speaker).filter(Boolean))]
    if (inlineSpeakers.length) speakers = inlineSpeakers
    if (transcribeConfig().diarize && diarizeInfo().modelsReady && !merged.lines.some((line) => line.speaker)) {
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

// 云端转写：把音频切成 30 秒小块并发打到 DeepSeek ASR，再把每块文本按字数摊进块内时间。
// 和本地引擎共用 ensurePlan / mergedFromResults / 字幕落盘，差别只在「谁来识别」。
// 并发 4：接口允许 50 并发，但一次任务打太多容易被同一账号的其它请求挤，4 条既快又不冒进。
const API_CONCURRENCY = 4

function apiTranscript(episode, plan, merged, speakers, source) {
  return {
    schemaVersion: 2,
    id: episode.id,
    title: episode.title,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    model: 'deepseek-asr',
    language: merged.language,
    duration: plan.duration || episode.duration || merged.lines[merged.lines.length - 1]?.end || 0,
    text: merged.texts.join(' '),
    source,
    lines: merged.lines,
    providers: {},
    speakers,
  }
}

async function runApiJob(item) {
  const { episode, force } = item
  const realtime = Boolean(item.realtime)
  const key = jobId(episode.id)
  // 实时跟播和整段转写的块号不通用，缓存目录必须分开，否则续跑会读到别的切法。
  const work = path.join(WORK_DIR, realtime ? `${episode.id}-rt` : episode.id)
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
    plan = await ensurePlan(episode, work, () => cancelRequested.has(key), 'api', realtime ? REALTIME_CHUNK_SECONDS : undefined)
    const resultsDir = path.join(work, 'results')
    await mkdir(resultsDir, { recursive: true })

    if (fs.existsSync(target)) {
      await copyFile(target, backup).catch(() => {})
      backedUp = fs.existsSync(backup)
    }

    // 续跑：已经落地的块直接跳过，只补缺的。
    const pending = plan.parts.filter((part) => !hasResult(resultsDir, part.index))
    let doneCount = plan.parts.length - pending.length
    let doneSeconds = plan.parts
      .filter((part) => hasResult(resultsDir, part.index))
      .reduce((sum, part) => sum + part.duration, 0)
    let cursor = 0
    let lastPreview = doneCount
    // 实时模式：在线说话人 + 译文缓存，都随任务结束丢弃。
    const taken = new Array(pending.length).fill(false)
    const liveTranslations = new Map()
    const live = realtime ? await createLiveSpeakers().catch(() => null) : null

    // 4 个 worker 会同时完成，预览必须串行落盘，否则两个 writeFile 交错会把 JSON 写坏。
    let publishChain = Promise.resolve()
    const publishLivePreview = () => {
      publishChain = publishChain.then(() => doPublishLivePreview()).catch(() => {})
      return publishChain
    }

    const doPublishLivePreview = async () => {
      lastPreview = doneCount
      const preview = mergedFromResults(plan, resultsDir)
      if (!preview.lines.length) return
      if (live) await live.labelLines(preview.lines, plan.parts).catch(() => {})
      await translateLiveLines(preview.lines, liveTranslations).catch(() => {})
      applyLiveTranslations(preview.lines, liveTranslations)
      const built = buildPreview(episode, plan, preview)
      built.model = 'deepseek-asr'
      if (liveTranslations.size) built.providers = { [LIVE_TARGET]: 'api' }
      if (live) built.speakers = live.speakers()
      await saveTranscript(built).catch(() => {})
      partialWritten = true
    }

    upsertJob({
      key,
      stage: 'transcribing',
      chunks: { total: plan.parts.length, done: doneCount, current: pending[0] ? pending[0].index + 1 : null },
    })

    const takePart = () => {
      if (!realtime) {
        const part = pending[cursor]
        cursor += 1
        return part
      }
      // 实时：挑离播放头最近的一块，用户听到哪儿，字幕就跟到哪儿。
      const position = playbackPosition(episode.id)
      let bestIndex = -1
      let bestScore = Number.POSITIVE_INFINITY
      for (let index = 0; index < pending.length; index += 1) {
        if (taken[index]) continue
        const score = Math.abs(pending[index].start - position)
        if (score < bestScore) {
          bestScore = score
          bestIndex = index
        }
      }
      if (bestIndex < 0) return undefined
      taken[bestIndex] = true
      return pending[bestIndex]
    }

    const worker = async () => {
      for (;;) {
        if (cancelRequested.has(key)) return
        const part = takePart()
        if (!part) return
        // 取消意图可能来自另一个模块实例（只写磁盘），所以这里轮询而不是只认内存标记。
        const controller = new AbortController()
        const watcher = setInterval(() => {
          if (cancelRequested.has(key)) controller.abort()
        }, 400)
        try {
          const { text } = await transcribeChunk(part.file, asrApiConfig(), { signal: controller.signal })
          // 存的是「块内相对时间」：mergedFromResults 会把 part.start 加回去。
          const lines = buildApiLines(text, 0, part.duration)
          await writeFile(
            resultPath(resultsDir, part.index),
            JSON.stringify({ index: part.index, start: part.start, lines, language: '', text }),
            'utf8',
          )
        } finally {
          clearInterval(watcher)
        }
        doneCount += 1
        doneSeconds += part.duration
        upsertJob({
          key,
          stage: 'transcribing',
          chunks: { total: plan.parts.length, done: doneCount, current: part.index + 1 },
          progress: progressOf(plan, doneSeconds, 0),
        })
        // 实时：每块都发一次，字幕才跟得上；批量：每完成五分之一写一次预览。
        const step = Math.max(1, Math.round(plan.parts.length / 5))
        if (realtime) {
          await publishLivePreview().catch(() => {})
        } else if (doneCount - lastPreview >= step) {
          lastPreview = doneCount
          const preview = mergedFromResults(plan, resultsDir)
          if (preview.lines.length) {
            const built = buildPreview(episode, plan, preview)
            built.model = 'deepseek-asr'
            await saveTranscript(built).catch(() => {})
            partialWritten = true
          }
        }
      }
    }

    await Promise.all(Array.from({ length: Math.min(API_CONCURRENCY, pending.length) }, () => worker()))
    if (cancelRequested.has(key)) throw new Error('用户取消了转写')
    const counts = countResults(resultsDir, plan)
    if (counts.count < plan.parts.length) throw new Error('部分音频块没有识别结果')

    upsertJob({ key, stage: 'merging' })
    const merged = mergedFromResults(plan, resultsDir)
    let speakers = []
    // 实时期间攒下的译文要带进最终字幕；整段说话人分离不可用时，保留在线标签。
    if (realtime) {
      applyLiveTranslations(merged.lines, liveTranslations)
      if (live) speakers = live.speakers()
    }
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

    const final = apiTranscript(episode, plan, merged, speakers, source)
    if (realtime && liveTranslations.size) final.providers = { [LIVE_TARGET]: 'api' }
    await saveTranscript(final)
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
    else if (partialWritten && !realtime) await rm(target, { force: true }).catch(() => {})
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
    // 声纹服务是常驻进程，任务结束就关掉，否则会一直挂在后台。
    if (realtime) closeLiveSpeakers()
    upsertJob({ key, pid: null, orphan: false })
    flushJobs()
    pump()
  }
}

// realtime=true：边播边转（12 秒小块、按播放头挑块、每块立刻出字幕/译文/说话人）。
// 只有云端 API 支持这种走法；本地引擎是整段 batch 的，忽略 realtime 走普通流程。
export async function startTranscription(episode, { force = false, resume = false, realtime = false } = {}) {
  const info = runtimeInfo()
  // 云端只要一把 key：不装 python 运行时、不下 2.4G 模型也能转写，这就是「装好就能用」。
  // 本地才检查运行时和模型，缺了就让用户去设置里一键装。
  if (info.provider === 'api') {
    if (!info.api.hasKey) {
      throw Object.assign(
        new Error('还没有填 DeepSeek API key。去「设置 → 播客 → 转写」填一个，或者切换成本地模型（免费但需要先下载模型）'),
        { status: 400 },
      )
    }
  } else {
    if (!info.installed) throw Object.assign(new Error('转写运行环境未安装（~/.podwave/runtime），在设置里点「一键安装本地模型」'), { status: 503 })
    // 选错模型用途（拿翻译模型来转写）要说清是哪个模型、怎么改，别让用户去猜一屏 missing keys。
    if (info.modelProblem) throw Object.assign(new Error(info.modelProblem), { status: 409 })
    if (!info.modelReady) throw Object.assign(new Error('转写模型未下载，请在设置里安装或检查模型目录'), { status: 503 })
  }

  const key = jobId(episode.id)
  const currentJob = getJob(key)
  if (currentJob && (currentJob.status === 'queued' || currentJob.status === 'running')) {
    return { status: currentJob.status }
  }

  const useRealtime = Boolean(realtime) && info.provider === 'api'
  const workRoot = useRealtime ? path.join(WORK_DIR, `${episode.id}-rt`) : path.join(WORK_DIR, episode.id)

  const existing = await readTranscript(episode.id)
  // 实时跟播可能只跑了一半（partial），下次播放要接着补，不能因为「已经有字幕」就当成完成。
  const halfDone = useRealtime && existing && existing.partial
  if (existing && !force && !resume && !halfDone) return { status: 'done', lines: existing.lines.length }

  const resumeWork = Boolean(resume || (useRealtime && halfDone)) && fs.existsSync(path.join(workRoot, 'results'))
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
  queue.push({ episode, provider: info.provider, realtime: useRealtime, force: Boolean(force) || !resumeWork, resume: resumeWork })
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

export async function resegmentTranscript(id) {
  const transcript = await readTranscript(id)
  if (!transcript) return null
  const before = transcript.lines.length
  const lines = resegmentLines(transcript.lines)
  if (!lines.length) throw new Error('没有可以整理的字幕行')
  const hasTranslations = transcript.lines.some((line) => line.translations && Object.keys(line.translations).length)
  // 断句一改，逐行译文就对不上了：旧译文先留一份备份，不直接丢。
  if (hasTranslations) {
    transcript.legacyTranslations = transcript.lines.map((line) => ({
      id: line.id,
      start: line.start,
      end: line.end,
      text: line.text,
      translations: line.translations || {},
    }))
  }
  transcript.lines = lines
  transcript.providers = {}
  refreshText(transcript)
  await saveTranscript(transcript)
  return { transcript, before, after: lines.length, cleared: hasTranslations }
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
