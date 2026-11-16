import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// DSH 从「导出的资源」里读插件展示信息，读不到不报错、直接退回兜底：
//   - <pkg>/locale/en.json 存在才扫同目录其它 locale，读 meta.title / meta.description
//   - <pkg>/icon 导出，或 package.json 的 icon 字段（后者优先）
//   - 详情文档取 locale 里的 meta.detail，没有就退回 README
// 所以这几处必须写进 exports 和 files，否则本地开发正常、装成 npm 包就全丢。
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pkg = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'))

const MAX_ICON_BYTES = 256 * 1024
const ICON_TYPES = ['.svg', '.png', '.jpg', '.jpeg', '.webp']

test('package.json exports the resources DSH reads plugin metadata from', () => {
  assert.equal(pkg.exports['./locale/*.json'], './locale/*.json', 'locale/*.json 没导出，DSH 会静默拿不到标题和描述')
  assert.equal(pkg.exports['./package.json'], './package.json', 'package.json 没导出，DSH 读不到 manifest 兜底文案')
})

test('package.json files ships locales, icon and detail documents', () => {
  // files 是白名单。少一项，本地目录安装看不出问题（链接的是 checkout），npm 包就缺文件。
  for (const entry of ['locale', 'icon.svg', 'docs/DETAIL.md', 'docs/DETAIL.zh.md', 'CHANGELOG.md']) {
    assert.ok(pkg.files.includes(entry), `files 里缺少 ${entry}，打包后会丢`)
  }
})

test('every locale carries a title, a description and an existing detail document', () => {
  const locales = ['en', 'zh']
  for (const language of locales) {
    const file = path.join(root, 'locale', `${language}.json`)
    assert.ok(existsSync(file), `缺少 locale/${language}.json`)
    const meta = JSON.parse(readFileSync(file, 'utf8')).meta
    assert.equal(typeof meta?.title, 'string', `locale/${language}.json 缺 meta.title`)
    assert.ok(meta.title.trim() !== '', `locale/${language}.json 的 meta.title 不能为空`)
    assert.equal(typeof meta?.description, 'string', `locale/${language}.json 缺 meta.description`)
    assert.ok(meta.description.trim() !== '', `locale/${language}.json 的 meta.description 不能为空`)
    assert.equal(typeof meta?.detail, 'string', `locale/${language}.json 缺 meta.detail`)
    assert.ok(!meta.detail.startsWith('/'), 'meta.detail 必须是包内相对路径')
    assert.ok(existsSync(path.join(root, meta.detail)), `meta.detail 指向的 ${meta.detail} 不存在`)
  }
})

test('the detail documents only reference images that ship in the package', () => {
  const docs = ['docs/DETAIL.md', 'docs/DETAIL.zh.md']
  for (const doc of docs) {
    const markdown = readFileSync(path.join(root, doc), 'utf8')
    for (const match of markdown.matchAll(/!\[[^\]]*\]\(([^)\s]+)\)/g)) {
      const target = path.resolve(path.dirname(path.join(root, doc)), match[1])
      const relative = path.relative(root, target)
      assert.ok(!relative.startsWith('..'), `${doc} 的图片 ${match[1]} 跑出了包根`)
      assert.ok(existsSync(target), `${doc} 引用的图片 ${match[1]} 不存在`)
    }
  }
})

test('the icon is a package-local image DSH accepts', () => {
  assert.equal(typeof pkg.icon, 'string', 'package.json 缺 icon 字段')
  assert.ok(!path.isAbsolute(pkg.icon), 'icon 必须是相对路径')
  assert.ok(!/^[A-Za-z][A-Za-z\d+.-]*:/.test(pkg.icon), 'icon 不能是 URL')
  const iconPath = path.resolve(root, pkg.icon)
  assert.ok(!path.relative(root, iconPath).startsWith('..'), 'icon 不能跑出包根')
  assert.ok(existsSync(iconPath), `icon 文件 ${pkg.icon} 不存在`)
  assert.ok(ICON_TYPES.includes(path.extname(iconPath).toLowerCase()), 'icon 必须是 SVG / PNG / JPEG / WebP')
  const bytes = statSync(iconPath).size
  assert.ok(bytes <= MAX_ICON_BYTES, `icon ${bytes} 字节超过 256 KiB 上限`)
  assert.ok(pkg.files.some((entry) => entry === pkg.icon.replace(/^\.\//, '')), 'icon 不在 files 里，打包后会丢')
})

test('README images resolve inside the package', () => {
  const markdown = readFileSync(path.join(root, 'README.md'), 'utf8')
  for (const match of markdown.matchAll(/!\[[^\]]*\]\(([^)\s]+)\)/g)) {
    const target = path.resolve(root, match[1])
    assert.ok(!path.relative(root, target).startsWith('..'), `README 的图片 ${match[1]} 跑出了包根`)
    assert.ok(existsSync(target), `README 引用的图片 ${match[1]} 不存在`)
    const shipped = pkg.files.some((entry) => {
      if (entry === match[1]) return true
      if (entry.endsWith('/') || !entry.includes('.')) return match[1].startsWith(`${entry}/`)
      return false
    })
    assert.ok(shipped, `README 引用的 ${match[1]} 没在 files 里，装成 npm 包后详情页图片会断`)
  }
})
