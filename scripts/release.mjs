#!/usr/bin/env node
// 发布脚本：node scripts/release.mjs 0.8.0
// 只做一条链路：改版本号 → 跑测试 → 构建 → 打包 → 提交 → 打 tag → 推送 → 建 Release。
// Release 说明取自 CHANGELOG.md 里对应的 "## <version> — <date>" 小节。
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const version = process.argv[2]
if (!version || !/^\d+\.\d+\.\d+(-[\w.]+)?$/.test(version)) {
  console.error('用法: node scripts/release.mjs <version>，例如 0.8.0')
  process.exit(1)
}
const [major, minor] = version.split('.')
const tag = `v${version}`

function run(command) {
  console.log(`\n$ ${command}`)
  execSync(command, { cwd: root, stdio: 'inherit' })
}
function read(rel) {
  return fs.readFileSync(path.join(root, rel), 'utf8')
}
function write(rel, content) {
  fs.writeFileSync(path.join(root, rel), content)
}

// 1. CHANGELOG 小节
const changelog = read('CHANGELOG.md')
const heading = new RegExp(`^## ${version.replace(/\./g, '\\.')} — .+$`, 'm')
if (!heading.test(changelog)) {
  console.error(`CHANGELOG.md 里没有 ${version} 的小节（## ${version} — YYYY-MM-DD）`)
  process.exit(1)
}
const start = changelog.search(heading)
const rest = changelog.slice(start)
const end = rest.indexOf('\n## ', 1)
const notes = rest.slice(0, end === -1 ? undefined : end).trim()
const lines = notes.split('\n')
const headingText = lines[0].replace(/^##\s*/, '')
const descLine = lines.slice(1).map((line) => line.trim()).find(Boolean) || headingText
const title = `${tag} ${descLine.replace(/^[-*]\s*/, '').replace(/\*\*/g, '').slice(0, 90)}`

// 2. 版本号：package.json / host health / 客户端 brand
write('package.json', read('package.json').replace(/"version": "[^"]+"/, `"version": "${version}"`))
let host = read('src/host.js')
if (!/version: '\d+\.\d+\.\d+'/.test(host)) throw new Error('host.js 里找不到 version 字面量')
host = host.replace(/version: '\d+\.\d+\.\d+'/, `version: '${version}'`)
write('src/host.js', host)
let app = read('client/src/App.jsx')
if (!/<span className="brand-version">[\d.]+<\/span>/.test(app)) throw new Error('App.jsx 里找不到 brand-version')
app = app.replace(/<span className="brand-version">[\d.]+<\/span>/, `<span className="brand-version">${major}.${minor}</span>`)
write('client/src/App.jsx', app)

// 3. 测试 + 构建
run('npm test')
run('npm run build')

// 4. 打包（产物只用于 Release 附件，不提交）
const packDir = fs.mkdtempSync('/tmp/podwave-release-')
run(`npm pack --pack-destination "${packDir}"`)
const tgz = path.join(packDir, `dsh-podwave-${version}.tgz`)
if (!fs.existsSync(tgz)) throw new Error(`没有找到打包产物 ${tgz}`)

// 5. 提交、打 tag、推送
run('git add -A')
run(`git commit -m "v${version}: ${title.replace(/"/g, "'")}"`)
run(`git tag -f ${tag}`)
run('git push')
run(`git push -f origin ${tag}`)

// 6. Release
const notesFile = path.join(packDir, 'notes.md')
fs.writeFileSync(notesFile, notes)
run(`gh release create ${tag} "${tgz}" --title "${title.replace(/"/g, "'")}" --notes-file "${notesFile}"`)
console.log(`\n完成：https://github.com/Watchcats211/dsh-podwave/releases/tag/${tag}`)
