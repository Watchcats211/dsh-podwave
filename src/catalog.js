// 可安装模型与运行时目录：体积、来源（国际 / 国内镜像 / ModelScope）。
// 所有下载都由 setup.js 读取这里的元数据，UI 直接展示给用户。
export const LLAMA_TAG = 'b12317'

const skipPatterns = [/^\.gitattributes$/, /^README/, /^LICENSE/, /^imgs\//, /^train\//, /\.md$/i, /\.png$/i, /\.jpg$/i]

export const CATALOG = {
  'qwen3-asr-1.7b-8bit': {
    id: 'qwen3-asr-1.7b-8bit',
    label: 'Qwen3-ASR-1.7B-8bit',
    kind: 'asr',
    engine: 'mlx',
    platforms: ['darwin-arm64'],
    dir: 'qwen3-asr-1.7b-8bit',
    approxBytes: 2_466_000_000,
    note: '中英混说、22 种中文方言，Apple Silicon 上质量最好。',
    source: {
      type: 'hf-repo',
      repo: 'mlx-community/Qwen3-ASR-1.7B-8bit',
      skip: skipPatterns,
      files: [
        'chat_template.json',
        'config.json',
        'generation_config.json',
        'merges.txt',
        'model.safetensors',
        'model.safetensors.index.json',
        'preprocessor_config.json',
        'tokenizer_config.json',
        'vocab.json',
      ],
    },
  },
  'sensevoice-int8': {
    id: 'sensevoice-int8',
    label: 'SenseVoice Small（int8）',
    kind: 'asr',
    engine: 'onnx',
    platforms: ['*'],
    dir: 'sensevoice-small-int8',
    approxBytes: 239_500_000,
    note: 'Windows / Linux / Intel Mac 使用；中文、英文、粤语、日韩，速度快。',
    source: {
      type: 'hf-repo',
      repo: 'csukuangfj/sherpa-onnx-sense-voice-zh-en-ja-ko-yue-2024-07-17',
      include: ['model.int8.onnx', 'tokens.txt'],
    },
  },
  'hy-mt2-1.8b-4bit-mlx': {
    id: 'hy-mt2-1.8b-4bit-mlx',
    label: 'Hy-MT2-1.8B-4bit（MLX）',
    kind: 'translate',
    engine: 'mlx',
    platforms: ['darwin-arm64'],
    dir: 'hy-mt2-1.8b-4bit',
    approxBytes: 961_100_000,
    note: '最轻的 Hy 翻译模型，33 种语言；Mac 上约 0.2 秒一行。',
    source: {
      type: 'hf-repo',
      repo: 'mlx-community/Hy-MT2-1.8B-4bit',
      skip: skipPatterns,
      files: [
        'chat_template.jinja',
        'config.json',
        'generation_config.json',
        'mlx_manifest.json',
        'model.safetensors',
        'model.safetensors.index.json',
        'tokenizer.json',
        'tokenizer_config.json',
      ],
    },
  },
  'hy-mt2-1.8b-1.25bit': {
    id: 'hy-mt2-1.8b-1.25bit',
    label: 'Hy-MT2-1.8B-1.25-bit（GGUF）',
    kind: 'translate',
    engine: 'llama',
    platforms: ['*'],
    dir: 'hy-mt2-1.8b-1.25bit',
    file: 'Hy-MT2-1.8B-1.25Bit.gguf',
    approxBytes: 461_860_800,
    note: '最小的 Hy 模型（约 440 MB），适合 8–16 GB 内存的 Windows / Linux。',
    source: {
      type: 'hf-file',
      repo: 'tencent/Hy-MT2-1.8B-1.25Bit-GGUF',
      file: 'Hy-MT2-1.8B-1.25Bit.gguf',
      ms: 'Tencent-Hunyuan/Hy-MT2-1.8B-1.25Bit-GGUF',
    },
  },
  'hy-mt2-1.8b-2bit': {
    id: 'hy-mt2-1.8b-2bit',
    label: 'Hy-MT2-1.8B-2-bit（GGUF）',
    kind: 'translate',
    engine: 'llama',
    platforms: ['*'],
    dir: 'hy-mt2-1.8b-2bit',
    file: 'Hy-MT2-1.8B-2Bit.gguf',
    approxBytes: 600_534_880,
    note: '平衡档：比 1.25-bit 稳，约 570 MB。',
    source: {
      type: 'hf-file',
      repo: 'tencent/Hy-MT2-1.8B-2Bit-GGUF',
      file: 'Hy-MT2-1.8B-2Bit.gguf',
      ms: 'Tencent-Hunyuan/Hy-MT2-1.8B-2Bit-GGUF',
    },
  },
  'hy-mt2-1.8b-q4km': {
    id: 'hy-mt2-1.8b-q4km',
    label: 'Hy-MT2-1.8B-Q4_K_M（GGUF）',
    kind: 'translate',
    engine: 'llama',
    platforms: ['*'],
    dir: 'hy-mt2-1.8b-q4km',
    file: 'Hy-MT2-1.8B-Q4_K_M.gguf',
    approxBytes: 1_133_080_448,
    note: '质量最好，约 1.1 GB；适合 24 GB 以上内存。',
    source: {
      type: 'hf-file',
      repo: 'tencent/Hy-MT2-1.8B-GGUF',
      file: 'Hy-MT2-1.8B-Q4_K_M.gguf',
      ms: 'Tencent-Hunyuan/Hy-MT2-1.8B-GGUF',
    },
  },
  'diarization': {
    id: 'diarization',
    label: '说话人分离模型（pyannote + 3D-Speaker）',
    kind: 'diarization',
    engine: 'onnx',
    platforms: ['*'],
    dir: 'diarization',
    approxBytes: 33_600_000,
    note: '约 34 MB，本地离线，不上传音频。',
    source: {
      type: 'github-assets',
      assets: [
        {
          url: 'https://github.com/k2-fsa/sherpa-onnx/releases/download/speaker-segmentation-models/sherpa-onnx-pyannote-segmentation-3-0.tar.bz2',
          file: 'sherpa-onnx-pyannote-segmentation-3-0.tar.bz2',
          extract: true,
        },
        {
          url: 'https://github.com/k2-fsa/sherpa-onnx/releases/download/speaker-recongition-models/3dspeaker_speech_campplus_sv_zh_en_16k-common_advanced.onnx',
          file: '3dspeaker_speech_campplus_sv_zh_en_16k-common_advanced.onnx',
        },
      ],
    },
  },
}

export const FFMPEG_BINARY = {
  id: 'ffmpeg',
  label: 'ffmpeg / ffprobe',
  kind: 'tool',
  dir: '../runtime/ffmpeg-download',
  note: '切块、时长探测与说话人分离需要；Windows / Linux 可自动下载，macOS 优先用 Homebrew。',
  assets: {
    'win32-x64': {
      file: 'ffmpeg-master-latest-win64-gpl.zip',
      bytes: 201_918_539,
      url: 'https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip',
    },
    'linux-x64': {
      file: 'ffmpeg-master-latest-linux64-gpl.tar.xz',
      bytes: 157_285_360,
      url: 'https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-linux64-gpl.tar.xz',
    },
    'linux-arm64': {
      file: 'ffmpeg-master-latest-linuxarm64-gpl.tar.xz',
      bytes: 92_000_000,
      url: 'https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-linuxarm64-gpl.tar.xz',
    },
  },
}

export function ffmpegAsset(platform) {
  return FFMPEG_BINARY.assets[platformKey(platform)] || null
}

export const LLAMA_BINARY = {
  id: 'llama-cpp',
  label: 'llama.cpp 运行时',
  kind: 'engine',
  dir: 'runtime/llama',
  note: 'Windows / Linux 上跑 GGUF 翻译模型；约 20–40 MB。',
  assets: {
    'darwin-arm64': `llama-${LLAMA_TAG}-bin-macos-arm64.tar.gz`,
    'darwin-x64': `llama-${LLAMA_TAG}-bin-macos-x64.tar.gz`,
    'win32-x64': `llama-${LLAMA_TAG}-bin-win-cpu-x64.zip`,
    'win32-arm64': `llama-${LLAMA_TAG}-bin-win-cpu-arm64.zip`,
    'linux-x64': `llama-${LLAMA_TAG}-bin-ubuntu-x64.tar.gz`,
    'linux-arm64': `llama-${LLAMA_TAG}-bin-ubuntu-arm64.tar.gz`,
  },
  base: `https://github.com/ggml-org/llama.cpp/releases/download/${LLAMA_TAG}`,
}

export const SOURCE_LABELS = {
  auto: '自动选择（先测速）',
  intl: '国际线路（Hugging Face / GitHub）',
  cn: '国内线路（hf-mirror / gh-proxy / ModelScope）',
}

export function platformKey(platform) {
  return `${platform.os}-${platform.arch}`
}

export function artifactFor(platform, engine) {
  return {
    asr: CATALOG[engine.asr],
    translate: CATALOG[engine.translate],
    diarization: CATALOG.diarization,
  }
}

// 配置里存的是目录名（artifact.dir），不是 catalog 的 key。
// 靠正则猜「这是不是 SenseVoice」在换模型后必错，所以按元数据反查。
export function artifactByDir(dir, kind) {
  if (!dir) return null
  const name = String(dir)
  for (const artifact of Object.values(CATALOG)) {
    if (kind && artifact.kind !== kind) continue
    if (artifact.dir === name || artifact.id === name) return artifact
  }
  return null
}

// 当前平台「应该用哪个模型/引擎」——配置默认值、安装检查、运行时判定都以它为准。
export function expectedModels(platform, engine) {
  const artifacts = artifactFor(platform, engine)
  return {
    asrModel: artifacts.asr.dir,
    translateModel: artifacts.translate.dir,
    asrEngine: artifacts.asr.engine,
    translateEngine: artifacts.translate.engine,
  }
}

export function llamaAsset(platform) {
  const name = LLAMA_BINARY.assets[platformKey(platform)]
  if (!name) return null
  return { name, url: `${LLAMA_BINARY.base}/${name}` }
}

// 返回某个资源的候选来源（id / label / base）。
export function sourcesFor(source) {
  if (source.type === 'hf-repo' || source.type === 'hf-file') {
    const list = [
      { id: 'intl', label: 'Hugging Face', base: 'https://huggingface.co' },
      { id: 'cn', label: 'hf-mirror.com', base: 'https://hf-mirror.com' },
    ]
    if (source.ms) list.push({ id: 'ms', label: 'ModelScope（魔搭）', base: 'https://modelscope.cn', ms: source.ms })
    return list
  }
  if (source.type === 'github-assets') {
    return [
      { id: 'intl', label: 'GitHub', base: 'https://github.com' },
      { id: 'cn', label: 'gh-proxy.com', base: 'https://gh-proxy.com' },
    ]
  }
  return []
}
