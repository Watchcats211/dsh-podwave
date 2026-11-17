#!/usr/bin/env node
// 发布脚本：node scripts/release.mjs 0.8.0
// 一条链路走完：改版本号 → 跑测试 → 构建 → 打包 → 隐私闸门 → 提交 → 打 tag → 推送
//              → GitHub Release（附 tgz）→ npm publish → 等 registry 生效。
// Release 说明取自 CHANGELOG.md 里对应的 "## <version> — <date>" 小节。
//
// 隐私闸门（scripts/privacy-scan.mjs）扫的是真实打包产物：有家目录路径、凭证、
// 模型权重或 Python 字节码就直接中止，绝不发布。
// npm 用一个不绕 2FA 的普通 token 发布不了（EOTP），所以发布单独走
// ~/.npmrc-publish（bypass token）。这个 token 不能做 unpublish/deprecate，
// 只能发布，正好够用。
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
// host.js 里有 api/setup 和 api/health 两处 version，漏掉一处就会出现「设置页显示一个版本、
// 接口报另一个版本」的鬼现象，所以必须全局替换。
const hostVersions = host.match(/version: '\d+\.\d+\.\d+'/g) || []
if (!hostVersions.length) throw new Error('host.js 里找不到 version 字面量')
host = host.replace(/version: '\d+\.\d+\.\d+'/g, `version: '${version}'`)
write('src/host.js', host)
console.log(`host.js 里替换了 ${hostVersions.length} 处版本号`)
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

// 5. 版本一致性校验：三处必须都等于这次要发的版本
const pkgVersion = JSON.parse(read('package.json')).version
const hostAfter = read('src/host.js')
const badHost = (hostAfter.match(/version: '(\d+\.\d+\.\d+)'/g) || []).filter((item) => item !== `version: '${version}'`)
if (pkgVersion !== version) throw new Error(`package.json 版本是 ${pkgVersion}，不是 ${version}`)
if (badHost.length) throw new Error(`host.js 里还有别的版本号：${badHost.join(', ')}`)
if (!new RegExp(`^## ${version.replace(/\./g, '\\.')} — `, 'm').test(read('CHANGELOG.md'))) {
  throw new Error(`CHANGELOG.md 顶部没有 ${version} 的小节`)
}
console.log(`版本号校验通过：package.json / host.js 两处 / CHANGELOG 都是 ${version}`)

// 6. 隐私闸门：扫真实打包产物，不干净就别发
run('node scripts/privacy-scan.mjs')

// 7. 提交、打 tag、推送
run('git add -A')
const description = title.replace(/^v\S+\s+/, '').replace(/"/g, "'")
run(`git commit -m "v${version}: ${description}"`)
run(`git tag -f ${tag}`)
run('git push')
run(`git push -f origin ${tag}`)

// 6. Release
const notesFile = path.join(packDir, 'notes.md')
fs.writeFileSync(notesFile, notes)
run(`gh release create ${tag} "${tgz}" --title "${title.replace(/"/g, "'")}" --notes-file "${notesFile}"`)

// 8. npm publish（走 bypass token；普通 token 会 EOTP）
const npmrc = path.join(process.env.HOME || '', '.npmrc-publish')
if (!fs.existsSync(npmrc)) {
  console.error(`\n缺少 ${npmrc}（bypass token），npm 还没发。补上文件后单独跑：`)
  console.error(`  npm_config_userconfig=${npmrc} npm publish`)
  console.log(`GitHub 已完成：https://github.com/Watchcats211/dsh-podwave/releases/tag/${tag}`)
  process.exit(1)
}
run(`npm_config_userconfig="${npmrc}" npm publish`)

// 9. 等 registry 真正生效（实测 publish 成功到能查到最新版有 1-5 分钟延迟）
console.log('\n等 registry 生效…')
const { execFileSync } = await import('node:child_process')
let live = ''
for (let attempt = 0; attempt < 20; attempt += 1) {
  await new Promise((resolve) => setTimeout(resolve, 15000))
  live = execFileSync('npm', ['view', 'dsh-podwave', 'version'], { encoding: 'utf8', cwd: root }).trim()
  console.log(`  第 ${attempt + 1} 次：registry 上是 ${live}`)
  if (live === version) break
}
if (live !== version) {
  console.error(`\n发布了但 registry 还停在 ${live}，过几分钟再查：npm view dsh-podwave version`)
  process.exit(1)
}

console.log(`\n全部完成
  GitHub：https://github.com/Watchcats211/dsh-podwave/releases/tag/${tag}
  npm：   https://www.npmjs.com/package/dsh-podwave/v/${version}
  dsh market：被动同步，对方的 nightly（UTC 02:23）之后才会更新版本号`)
