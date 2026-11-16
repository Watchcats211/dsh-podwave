// CI 脚本与文档里一旦写死模型目录，改默认位置时 CI 会静默失效：
// 2026-11-16 的 windows-runtime 就是这么挂的（默认位置改成项目 models/ 后，
// workflow 里还指着 ~/.podwave/models，模型下载到了新地方、sherpa 去找老地方）。
//
// 这条测试不跑 CI 本身，只钉住「源码与 CI 脚本里不得出现写死的模型目录」。
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === 'models' || entry.name === '.git') continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, out)
    else if (/\.(mjs|js|yml|yaml)$/.test(entry.name)) out.push(full)
  }
  return out
}

// 允许出现的位置：models.js 自己（定义默认位置的地方）、本测试自身。
const ALLOWED = new Set([path.join(root, 'src', 'models.js'), fileURLToPath(import.meta.url)])

// 允许的写法：
//   - 注释（// # *）里的历史说明
//   - 界面文案里明确标注「原有的」旧位置（这是给用户看的历史提示，不是路径来源）
const LEGITIMATE = [/原有的\s*~\/\.podwave\/models/]

test('no source or CI script hardcodes the legacy models directory', () => {
  const offenders = []
  for (const file of walk(root)) {
    if (ALLOWED.has(file)) continue
    // dist/ 是构建产物，由 client/src 决定，不重复检查（压缩后整行匹配没有意义）
    if (path.relative(root, file).startsWith(`dist${path.sep}`)) continue
    const text = readFileSync(file, 'utf8')
    const relative = path.relative(root, file)
    // 数据目录下的 models/ 必须经 modelsDir() 取，不能自己拼
    if (/path\.join\(\s*DATA_DIR\s*,\s*['"]models['"]/.test(text)) {
      offenders.push(`${relative}: path.join(DATA_DIR, 'models')`)
    }
    // CI 里直接指 $env:USERPROFILE\.podwave\models
    if (/\$env:USERPROFILE[\\/.]*\.podwave[\\/]models/.test(text)) {
      offenders.push(`${relative}: $env:USERPROFILE\\.podwave\\models`)
    }
    const lines = text.split('\n')
    for (const [index, line] of lines.entries()) {
      if (!line.includes('~/.podwave/models')) continue
      const trimmed = line.trim()
      if (trimmed.startsWith('//') || trimmed.startsWith('#') || trimmed.startsWith('*')) continue
      if (LEGITIMATE.some((pattern) => pattern.test(line))) continue
      offenders.push(`${relative}:${index + 1}: ${trimmed.slice(0, 80)}`)
    }
  }
  assert.deepEqual(offenders, [], `这些位置写死了模型目录，改默认位置后会失效：\n${offenders.join('\n')}`)
})

test('the CI workflow asks models.js for the model path instead of guessing it', () => {
  const workflow = readFileSync(path.join(root, '.github', 'workflows', 'build.yml'), 'utf8')
  // windows-runtime 里跑 sherpa 那一步必须经 models.js 拿路径
  assert.match(workflow, /modelsDir\s*\(\)/, 'workflow 必须通过 models.js 的 modelsDir() 拿模型目录')
  assert.match(workflow, /--model-dir\s+"\$modelDir"/, 'sherpa 的 --model-dir 必须用变量，不能写死')
})

test('the CI download and llama scripts resolve the directory through models.js', () => {
  // downloader.downloadArtifact 内部已经用 modelsDir()；这里钉住 llama-check 不再自己拼
  const llama = readFileSync(path.join(root, 'test', 'ci', 'llama-check.mjs'), 'utf8')
  assert.match(llama, /import\s*\{\s*modelsDir\s*\}\s*from\s*'\.\.\/\.\.\/src\/models\.js'/, 'llama-check 必须从 models.js 导入 modelsDir')
  assert.match(llama, /path\.join\(modelsDir\(\),\s*'_ci',\s*'llama'\)/, 'llama-check 的根目录必须经 modelsDir()')
  assert.ok(!/DATA_DIR/.test(llama), 'llama-check 不该再直接用 DATA_DIR 拼模型路径')
})

test('runtime error messages do not promise a fixed model directory', () => {
  const transcribe = readFileSync(path.join(root, 'src', 'transcribe.js'), 'utf8')
  assert.ok(
    !/转写模型未下载（~\/\.podwave\/models）/.test(transcribe),
    '错误提示不该写死 ~/.podwave/models——默认位置已经可配',
  )
})
