// 发版前的隐私闸门：把即将发布的内容真的打成一个包，再逐字节扫一遍。
//
// 为什么不用 test/privacy.test.mjs：那个只扫工作区源码，而 npm 打的是什么由
// package.json 的 files 决定 —— __pycache__ 曾经就是这样混进 30 个版本的。
// 唯一可信的检查对象是打包产物本身。
//
// 用法：
//   node scripts/privacy-scan.mjs          # 打包并扫描，干净则 exit 0
//   node scripts/privacy-scan.mjs --keep   # 保留临时目录，方便人工复核
import { execFile } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { promisify } from 'node:util'

const run = promisify(execFile)
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')

// 绝对不该进包的东西：编译产物、模型权重、虚拟环境、本机运行时。
const FORBIDDEN_PATHS = [
  { test: /(^|\/)__pycache__(\/|$)/, why: 'Python 编译缓存，会把编译时的绝对路径写进去' },
  { test: /\.pyc$/, why: 'Python 字节码，内嵌编译时的绝对路径' },
  { test: /(^|\/)models?(\/|$)/, why: '模型权重（GB 级）' },
  { test: /\.(gguf|onnx|safetensors|mlmodelc?)(\/|$)/, why: '模型权重文件' },
  { test: /(^|\/)(runtime|\.venv|venv)(\/|$)/, why: '本机运行时/虚拟环境' },
  { test: /(^|\/)transcripts?(\/|$)/, why: '用户字幕与音频记录' },
  { test: /(^|\/)\.env(\.|$)/, why: '本地环境变量' },
  { test: /\.(m4a|mp3|wav|mp4|mov)$/, why: '音频/视频文件' },
]

// 内容里绝对不能出现的：家目录、用户名、凭证。
const home = os.homedir()
const user = path.basename(home)
const SECRETS = [
  { needle: home, why: `家目录绝对路径 ${home}` },
  { needle: `/Users/${user}`, why: 'macOS 家目录路径' },
  { needle: `/home/${user}`, why: 'Linux 家目录路径' },
  { needle: `C:\\Users\\${user}`, why: 'Windows 家目录路径' },
  { needle: 'PRIVATE KEY', why: '私钥' },
  { pattern: /gh[pousr]_[A-Za-z0-9]{20,}/, why: 'GitHub token' },
  // 只认真正的 key 形态：界面上用来遮罩的占位符 "sk-..." 不算。
  { pattern: /sk-[A-Za-z0-9]{20,}/, why: 'API key' },
  { needle: 'npmrc-old-only', why: '本机 npm 凭证文件路径' },
]

// 允许出现用户名本身（比如作者字段、示例代码），只拦路径形态。
const ALLOW_USERNAME_ALONE = true

const TEXT_SKIP = /\.(png|jpg|jpeg|webp|gif|ico|woff2?|ttf|zip|tgz)$/i

async function main() {
  const keep = process.argv.includes('--keep')
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-privacy-'))
  const { stdout } = await run('npm', ['pack', '--json', '--pack-destination', tmp], {
    cwd: ROOT,
    maxBuffer: 32 * 1024 * 1024,
  })
  // npm pack 会先在 stdout 打构建日志，真正的 JSON 从第一个 [ 开始
  const json = stdout.slice(stdout.indexOf('['))
  const [info] = JSON.parse(json)
  const tarball = path.join(tmp, info.filename)

  const extractDir = path.join(tmp, 'unpacked')
  fs.mkdirSync(extractDir)
  await run('tar', ['-xzf', tarball, '-C', extractDir])
  const pkgDir = path.join(extractDir, 'package')

  const problems = []
  const warnings = []

  const walk = (dir, rel = '') => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, entry.name)
      const next = rel ? `${rel}/${entry.name}` : entry.name
      if (entry.isDirectory()) {
        walk(abs, next)
        continue
      }
      for (const rule of FORBIDDEN_PATHS) {
        if (rule.test.test(next)) problems.push(`${next} —— ${rule.why}`)
      }
      if (TEXT_SKIP.test(next)) continue
      const bytes = fs.readFileSync(abs)
      const text = TEXT_SKIP.test(next) ? '' : bytes.toString('utf8')
      for (const secret of SECRETS) {
        if (secret.pattern) {
          if (secret.pattern.test(text)) problems.push(`${next} 含 ${secret.why}`)
          continue
        }
        if (!bytes.includes(Buffer.from(secret.needle, 'utf8'))) continue
        if (ALLOW_USERNAME_ALONE && secret.needle === user) continue
        problems.push(`${next} 含 ${secret.why}`)
      }
      if (bytes.includes(Buffer.from(`\\Users\\${user}`, 'utf8')) || bytes.includes(Buffer.from(`${user}\\Deepseek-Harness`, 'utf8'))) {
        problems.push(`${next} 含本机项目路径`)
      }
      // npm 开头的 token 名只警告：文档里可能出现 npm_config_* 这类合法写法
      if (bytes.includes(Buffer.from('npm_', 'utf8')) && /npm_[A-Za-z0-9]{20,}/.test(bytes.toString('utf8'))) {
        warnings.push(`${next} 里出现了疑似 npm token 的字符串`)
      }
    }
  }
  walk(pkgDir)

  const files = info.files.map((item) => item.path)
  const biggest = [...info.files].sort((a, b) => b.size - a.size)[0]

  console.log(`包：${info.filename}`)
  console.log(`版本：${JSON.parse(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf8')).version}`)
  console.log(`文件：${files.length} 个，压缩后 ${(info.size / 1024).toFixed(0)} KB，解压后 ${(info.unpackedSize / 1024).toFixed(0)} KB`)
  console.log(`最大单文件：${biggest.path} ${(biggest.size / 1024).toFixed(0)} KB`)
  for (const warning of warnings) console.log(`⚠️  ${warning}`)
  if (problems.length) {
    console.log('')
    for (const problem of problems) console.log(`❌ ${problem}`)
    console.log(`\n隐私检查未通过：${problems.length} 处问题，不要发布。`)
  } else {
    console.log('\n✅ 隐私检查通过：包里没有家目录路径、凭证、模型权重或编译缓存。')
  }

  if (!keep) fs.rmSync(tmp, { recursive: true, force: true })
  else console.log(`临时目录保留在 ${tmp}`)
  process.exit(problems.length ? 1 : 0)
}

main().catch((error) => {
  console.error('隐私检查自身出错：', error.message)
  process.exit(2)
})
