import { test } from 'node:test'
import assert from 'node:assert/strict'

import { childDirs, crumbsFor, itemsInDir, normalizeRel } from '../client/src/lib/tree.js'

// 单集带的是相对根文件夹的 rel 路径，前端靠这几个纯函数把目录树拼出来。
const items = [
  { id: 'a', rel: '' },
  { id: 'b', rel: 'sub' },
  { id: 'c', rel: 'sub/deep' },
  { id: 'd', rel: '' },
  { id: 'e', rel: 'Sub2' },
]

test('normalizeRel 统一分隔符并去掉首尾斜杠', () => {
  assert.equal(normalizeRel(''), '')
  assert.equal(normalizeRel(undefined), '')
  assert.equal(normalizeRel('/sub/'), 'sub')
  assert.equal(normalizeRel('sub\\deep\\'), 'sub/deep')
})

test('根目录只列出直接子文件夹，并按名字排序', () => {
  const dirs = childDirs(items, '')
  assert.deepEqual(
    dirs.map((dir) => [dir.rel, dir.count]),
    [
      ['sub', 2],
      ['Sub2', 1],
    ],
  )
})

test('进到子目录后只看到它下面的子文件夹', () => {
  assert.deepEqual(
    childDirs(items, 'sub').map((dir) => dir.rel),
    ['sub/deep'],
  )
  // 更深一层就没有子文件夹了，全部音频都在这一层
  assert.deepEqual(childDirs(items, 'sub/deep'), [])
})

test('当前目录只显示直接放在这里的单集，不会把子目录的混进来', () => {
  assert.deepEqual(itemsInDir(items, '').map((item) => item.id), ['a', 'd'])
  assert.deepEqual(itemsInDir(items, 'sub').map((item) => item.id), ['b'])
  assert.deepEqual(itemsInDir(items, 'sub/deep').map((item) => item.id), ['c'])
})

test('面包屑从根文件夹逐层拆开，第一段 rel 为空', () => {
  assert.deepEqual(crumbsFor('下载', ''), [{ rel: '', label: '下载' }])
  assert.deepEqual(crumbsFor('下载', 'sub/deep'), [
    { rel: '', label: '下载' },
    { rel: 'sub', label: 'sub' },
    { rel: 'sub/deep', label: 'deep' },
  ])
})
