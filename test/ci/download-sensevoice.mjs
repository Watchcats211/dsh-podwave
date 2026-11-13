// CI 专用：在真实 runner 上用插件自己的下载器拉取 SenseVoice 模型。
// 默认走国内线路（hf-mirror），确保 Windows 上的 cn 路径也被覆盖。
import { CATALOG } from '../../src/catalog.js'
import { downloadArtifact } from '../../src/downloader.js'

const artifact = CATALOG['sensevoice-int8']
if (!artifact) throw new Error('catalog 里缺少 sensevoice-int8')
console.log(artifact.label, '约', Math.round(artifact.approxBytes / 1e6), 'MB')
const result = await downloadArtifact(artifact, { sourceId: process.env.PODWAVE_SOURCE || 'cn' })
console.log('来源：', result.source, '字节：', result.bytes, '文件：', result.files.map((f) => f.path).join(', '))
