import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

// 前端要按「根文件夹 → 子目录」逐层浏览，所以 getEpisodes() 必须把绝对路径的
// folder（音频所在目录）和 root（添加进来的根文件夹）一起给出去。
const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-library-folders-'))
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')

const root = path.join(home, 'Podcasts')
fs.mkdirSync(path.join(root, 'sub', 'deep'), { recursive: true })
fs.writeFileSync(path.join(root, 'top.mp3'), Buffer.alloc(64))
fs.writeFileSync(path.join(root, 'sub', 'mid.mp3'), Buffer.alloc(64))
fs.writeFileSync(path.join(root, 'sub', 'deep', 'last.mp3'), Buffer.alloc(64))
// 无关目录（不在 state.folders 里）不该被扫进来。
fs.mkdirSync(path.join(home, 'Elsewhere'), { recursive: true })
fs.writeFileSync(path.join(home, 'Elsewhere', 'nope.mp3'), Buffer.alloc(64))

fs.mkdirSync(path.join(home, '.podwave'), { recursive: true })
fs.writeFileSync(path.join(home, '.podwave', 'state.json'), JSON.stringify({ folders: [root] }))

const { scanLibrary, getEpisodes } = await import('../src/library.js')
const { initState } = await import('../src/state.js')

test('getEpisodes exposes absolute folder and root for drilled-down browsing', async () => {
  await initState()
  await scanLibrary()
  const items = getEpisodes()
  assert.equal(items.length, 3, '只扫根文件夹下的 3 个音频')

  // 扫描时会对路径做 realpath（macOS 上 /var 会变成 /private/var）。
  const realRoot = fs.realpathSync(root)
  const byTitle = new Map(items.map((item) => [item.title, item]))
  assert.equal(byTitle.get('top').folder, realRoot)
  assert.equal(byTitle.get('mid').folder, path.join(realRoot, 'sub'))
  assert.equal(byTitle.get('last').folder, path.join(realRoot, 'sub', 'deep'))

  // root 保留「用户添加时的原始路径」，前端用它和侧边栏的文件夹值对齐；
  // folder 是 realpath 之后的绝对路径；rel 是相对根文件夹的目录（前端靠它建目录树）。
  assert.equal(byTitle.get('top').rel, '')
  assert.equal(byTitle.get('mid').rel, 'sub')
  assert.equal(byTitle.get('last').rel, 'sub/deep')

  for (const item of items) {
    assert.equal(item.root, root, '每个单集都要记住自己属于哪个根文件夹')
    assert.ok(path.isAbsolute(item.folder), 'folder 应该是绝对路径')
    // location 只是给人看的短路径，保持原样。
    assert.ok(!item.location.includes(home), 'location 不该泄露完整路径')
  }
  assert.ok(!byTitle.has('nope'), '没有添加的目录不参与扫描')
})
