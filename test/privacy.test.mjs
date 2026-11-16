import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// 发布物会同时进 npm 包和公开仓库，任何一次截图失误都会永久留在 git 历史和 npm 版本里。
// 这些用例守三件事：
//   1. 源码/文档里不出现具体的本机家目录（用户名、/Users/<name>、/home/<name>）
//   2. 文档引用的每张图都真实存在（引用断了会在详情页显示破图）
//   3. docs/ 下不留没人引用的截图（没人引用的图最容易带着隐私一直躺着）
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const TEXT_EXTENSIONS = ['.md', '.json', '.yml', '.yaml', '.js', '.jsx', '.mjs', '.py', '.svg']
const SKIP_DIRECTORIES = new Set(['node_modules', 'dist', '.git', 'models', '__pycache__'])

// 示例路径只要明显是占位（tom / someone / example），就不算泄露。
const PLACEHOLDER_NAMES = new Set(['tom', 'someone', 'you', 'user', 'me', 'name', 'username', 'example'])

function walk(directory, files = []) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (SKIP_DIRECTORIES.has(entry.name)) continue
    const target = path.join(directory, entry.name)
    if (entry.isDirectory()) walk(target, files)
    else if (TEXT_EXTENSIONS.includes(path.extname(entry.name).toLowerCase())) files.push(target)
  }
  return files
}

test('no source or document carries a concrete local home directory', () => {
  const offenders = []
  // 不锚定词边界：真实泄露长这样 —— `file:/Users/<name>/...`，冒号紧贴着。
  const pattern = /((?:\/Users|\/home)\/([A-Za-z0-9._-]+)|[A-Za-z]:\\Users\\([A-Za-z0-9._-]+))/g
  for (const file of walk(root)) {
    const relative = path.relative(root, file)
    const lines = readFileSync(file, 'utf8').split('\n')
    lines.forEach((line, index) => {
      for (const match of line.matchAll(pattern)) {
        const name = String(match[2] || match[3] || '').toLowerCase()
        if (PLACEHOLDER_NAMES.has(name)) continue
        offenders.push(`${relative}:${index + 1} → ${match[0].trim()}`)
      }
    })
  }
  assert.deepEqual(offenders, [], `发现具体本机路径，发布前必须改成占位：\n${offenders.join('\n')}`)
})

test('every image referenced by shipped documents exists', () => {
  const documents = ['README.md', 'CHANGELOG.md', 'docs/DETAIL.md', 'docs/DETAIL.zh.md']
  for (const document of documents) {
    const file = path.join(root, document)
    if (!existsSync(file)) continue
    const markdown = readFileSync(file, 'utf8')
    for (const match of markdown.matchAll(/!\[[^\]]*\]\(([^)\s]+)\)/g)) {
      const target = path.resolve(path.dirname(file), match[1])
      const relative = path.relative(root, target)
      assert.ok(!relative.startsWith('..'), `${document} 的图片 ${match[1]} 跑出了仓库根`)
      assert.ok(existsSync(target), `${document} 引用的图片 ${match[1]} 不存在`)
    }
  }
})

test('every screenshot in docs is referenced by a document', () => {
  const documents = ['README.md', 'CHANGELOG.md', 'docs/DETAIL.md', 'docs/DETAIL.zh.md', 'screenshots.json']
  const text = documents
    .filter((document) => existsSync(path.join(root, document)))
    .map((document) => readFileSync(path.join(root, document), 'utf8'))
    .join('\n')
  const orphans = readdirSync(path.join(root, 'docs'))
    .filter((name) => name.toLowerCase().endsWith('.png'))
    .filter((name) => !text.includes(name))
  assert.deepEqual(orphans, [], `docs/ 下有没人引用的截图（容易被遗忘的隐私来源）：${orphans.join(', ')}`)
})

test('screenshots.json only lists screenshots that exist', () => {
  const manifest = JSON.parse(readFileSync(path.join(root, 'screenshots.json'), 'utf8'))
  for (const entry of manifest) {
    assert.ok(existsSync(path.join(root, entry)), `screenshots.json 里的 ${entry} 不存在`)
  }
})

test('screenshots that ship in the package are real PNG files', () => {
  const pkg = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'))
  const screenshots = pkg.files.filter((entry) => entry.endsWith('.png'))
  for (const entry of screenshots) {
    const file = path.join(root, entry)
    assert.ok(existsSync(file), `package.json 的 files 列了不存在的 ${entry}`)
    const signature = readFileSync(file).subarray(0, 8)
    assert.equal(
      signature.toString('hex'),
      '89504e470d0a1a0a',
      `${entry} 后缀是 .png 但内容不是 PNG（曾经把 JPEG 改名成 .png 混进来过）`,
    )
    assert.ok(statSync(file).size > 0, `${entry} 是空文件`)
  }
})
