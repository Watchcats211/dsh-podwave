// 说话人分离：sherpa-onnx（pyannote segmentation + 3D-Speaker embedding），模型在 ~/.podwave/models/diarization。
import fs from 'node:fs'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { DATA_DIR } from './state.js'

const SCRIPT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'scripts', 'diarize.py')
const PYTHON = path.join(DATA_DIR, 'runtime', '.venv', 'bin', 'python')
export const DIARIZATION_DIR = path.join(DATA_DIR, 'models', 'diarization')
export const SEG_MODEL = path.join(DIARIZATION_DIR, 'sherpa-onnx-pyannote-segmentation-3-0', 'model.onnx')
export const EMB_MODEL = path.join(DIARIZATION_DIR, '3dspeaker_speech_campplus_sv_zh_en_16k-common_advanced.onnx')

export function diarizeInfo() {
  return {
    installed: fs.existsSync(PYTHON) && fs.existsSync(SCRIPT),
    modelsReady: fs.existsSync(SEG_MODEL) && fs.existsSync(EMB_MODEL),
    segModel: SEG_MODEL,
    embModel: EMB_MODEL,
  }
}

export function runDiarization(audioPath, { threshold = 0.6, numSpeakers = -1 } = {}) {
  return new Promise((resolve, reject) => {
    const args = [
      SCRIPT,
      '--audio', audioPath,
      '--seg-model', SEG_MODEL,
      '--emb-model', EMB_MODEL,
      '--threshold', String(threshold),
    ]
    if (Number(numSpeakers) > 0) args.push('--num-speakers', String(numSpeakers))
    const child = spawn(PYTHON, args, {
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, PYTHONUNBUFFERED: '1', PODWAVE_FFMPEG: process.env.PODWAVE_FFMPEG || '/opt/homebrew/bin/ffmpeg' },
    })
    let stdout = ''
    let stderr = ''
    child.stdout.on('data', (chunk) => { stdout += chunk })
    child.stderr.on('data', (chunk) => { stderr += chunk })
    child.on('error', reject)
    child.on('close', (code) => {
      if (code !== 0) {
        const detail = stderr.trim().split('\n').slice(-3).join(' ')
        reject(new Error(`说话人分离失败（退出码 ${code}）${detail ? `：${detail}` : ''}`))
        return
      }
      try {
        resolve(JSON.parse(stdout.trim().split('\n').pop()))
      } catch {
        reject(new Error('说话人分离输出解析失败'))
      }
    })
  })
}

// 把 diarization 段按最大重叠分配到字幕行；返回 [{id,label}]（id 是重排后的 0..n-1）。
export function assignSpeakers(lines, segments) {
  const mapping = new Map()
  for (const segment of segments) {
    const key = Number(segment.speaker)
    if (!mapping.has(key)) mapping.set(key, mapping.size)
  }
  const speakers = [...mapping.entries()].map(([, index]) => ({ id: index, label: `说话人 ${index + 1}` }))
  for (const line of lines) {
    const overlap = new Map()
    for (const segment of segments) {
      const value = Math.min(line.end, Number(segment.end)) - Math.max(line.start, Number(segment.start))
      if (value > 0) {
        const key = Number(segment.speaker)
        overlap.set(key, (overlap.get(key) || 0) + value)
      }
    }
    let best = null
    let bestValue = 0
    for (const [key, value] of overlap) {
      if (value > bestValue) {
        best = key
        bestValue = value
      }
    }
    const threshold = Math.min(0.25, Math.max(0, (line.end - line.start) * 0.25))
    line.speaker = best !== null && bestValue >= threshold ? mapping.get(best) : null
  }
  return speakers
}
