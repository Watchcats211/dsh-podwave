// 换封面的接口：上传要能落盘、换格式要清掉旧图、坏字节要拒绝、删掉要回到默认。
// 顺带确认 hasCover / coverAt 会跟着封面文件走（不然列表还是首字母占位）。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import http from 'node:http'
import os from 'node:os'
import path from 'node:path'

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-host-cover-'))
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')
process.env.PODWAVE_MODELS_NO_PROJECT = '1'

// 先铺好媒体库：state.json 里登记一个文件夹，扫描时才会把测试音频收进来。
const audioDir = path.join(home, 'audio')
fs.mkdirSync(audioDir, { recursive: true })
fs.writeFileSync(path.join(audioDir, 'cover-test.m4a'), Buffer.alloc(128, 7))
fs.mkdirSync(process.env.PODWAVE_DATA_DIR, { recursive: true })
fs.writeFileSync(
  path.join(process.env.PODWAVE_DATA_DIR, 'state.json'),
  JSON.stringify({ folders: [audioDir] }),
)

// 最小的合法文件头：只为了过 magic bytes 校验，不需要真能解码。
const JPEG = Buffer.concat([Buffer.from([0xff, 0xd8, 0xff, 0xe0]), Buffer.alloc(64, 1)])
const PNG = Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), Buffer.alloc(64, 2)])

test('host: 能换封面、换格式会清掉旧图、删除回到默认', async () => {
  let handler = null
  const effects = []
  const ctx = {
    get: (name) => (name === 'connection' ? { requestRejection: () => null } : undefined),
    effect: (fn) => {
      const dispose = fn()
      if (typeof dispose === 'function') effects.push(dispose)
      return dispose
    },
    webServer: {
      register: (config) => {
        handler = config.handler
        return () => {}
      },
    },
  }
  const server = http.createServer((req, res) => handler(req, res))
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  const base = `http://127.0.0.1:${server.address().port}`

  try {
    const host = (await import('../src/host.js')).default
    host.apply(ctx)
    const library = await import('../src/library.js')
    const { initState } = await import('../src/state.js')
    await initState()
    await library.scanLibrary()
    const episodes = library.getEpisodes()
    assert.equal(episodes.length, 1, '只扫到测试单集')
    const episode = episodes[0]
    assert.equal(episode.hasCover, false, '一开始没有封面')
    assert.equal(episode.coverAt, 0)

    const upload = (body) => fetch(`${base}/podwave/api/episodes/${episode.id}/cover`, {
      method: 'POST',
      headers: { 'content-type': 'image/jpeg' },
      body,
    })

    const first = await upload(JPEG)
    assert.equal(first.status, 200)
    const firstBody = await first.json()
    assert.equal(firstBody.hasCover, true)
    const coversDir = path.join(process.env.PODWAVE_DATA_DIR, 'covers')
    assert.ok(fs.existsSync(path.join(coversDir, `${episode.id}.jpg`)), 'jpg 落盘了')
    // 不重新扫描也要立刻反映到列表上（换完封面刷新一下就有效果）。
    const patched = library.getEpisode(episode.id)
    assert.equal(patched.hasCover, true, '内存里的那一条也跟着更新了')
    assert.ok(patched.coverAt > 0)

    const fetched = await fetch(`${base}/podwave/api/episodes/${episode.id}/cover`)
    assert.equal(fetched.status, 200, '上传之后能取到图')
    const bytes = Buffer.from(await fetched.arrayBuffer())
    assert.equal(bytes[0], 0xff, '取回来的就是上传的字节')

    // 换成 png：旧 jpg 必须清掉，否则 getCoverPath 会先命中 jpg。
    const second = await upload(PNG)
    assert.equal(second.status, 200)
    assert.equal((await second.json()).ext, 'png')
    assert.ok(!fs.existsSync(path.join(coversDir, `${episode.id}.jpg`)), '旧 jpg 被删了')
    assert.ok(fs.existsSync(path.join(coversDir, `${episode.id}.png`)), 'png 落盘了')

    // 元数据要跟着变：重新扫一遍之后 hasCover/coverAt 都要跟上。
    await library.scanLibrary()
    const refreshed = library.getEpisode(episode.id)
    assert.equal(refreshed.hasCover, true)
    assert.ok(refreshed.coverAt > 0, 'coverAt 有值，前端可以拿它拼版本号')

    const bad = await upload(Buffer.from('definitely not an image at all'))
    assert.equal(bad.status, 400)
    assert.match((await bad.json()).error, /JPG|PNG|WebP/)

    const huge = await upload(Buffer.concat([JPEG, Buffer.alloc(8 * 1024 * 1024 + 16, 0)]))
    assert.equal(huge.status, 413, '超过 8 MB 直接拒绝')

    const missing = await fetch(`${base}/podwave/api/episodes/nosuchfile00/cover`, {
      method: 'POST',
      headers: { 'content-type': 'image/jpeg' },
      body: JPEG,
    })
    assert.equal(missing.status, 404, '不存在的单集不给写')

    const removed = await fetch(`${base}/podwave/api/episodes/${episode.id}/cover`, { method: 'DELETE' })
    assert.equal(removed.status, 200)
    const removedBody = await removed.json()
    assert.deepEqual(removedBody.removed, ['png'])
    assert.ok(!fs.existsSync(path.join(coversDir, `${episode.id}.png`)), '删干净了')

    await library.scanLibrary()
    const afterReset = library.getEpisode(episode.id)
    assert.equal(afterReset.hasCover, false, '删掉之后回到没封面的状态')
  } finally {
    await new Promise((resolve) => server.close(resolve))
    for (const dispose of effects) {
      try {
        dispose()
      } catch {
        /* ignore */
      }
    }
  }
})
