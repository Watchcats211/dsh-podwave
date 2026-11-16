// 发布版的模型默认位置由 host 从 DSH 的 workspaceRegistry 里学：
// 挑「最近更新」的工作区当当前工作区，其余工作区留在候选里，
// 这样切工作区时已下载的模型不会突然「消失」。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'podwave-host-workspace-'))
process.env.HOME = home
process.env.PODWAVE_DATA_DIR = path.join(home, '.podwave')
process.env.PODWAVE_UPDATE_REGISTRY = 'http://127.0.0.1:9'

const models = await import('../src/models.js')

function publishedStart() {
  // 一份「没有 .git、也没有 file: 依赖」的安装目录 = 发布版的样子
  const dir = path.join(home, 'published', 'node_modules', 'dsh-podwave', 'src')
  fs.mkdirSync(dir, { recursive: true })
  return dir
}

function fakeCtx(workspaces) {
  return {
    get: (name) => {
      if (name === 'connection') return { requestRejection: () => null }
      if (name === 'workspaceRegistry') return { list: () => workspaces }
      return undefined
    },
    effect: (fn) => {
      const dispose = fn()
      return dispose
    },
    webServer: {
      register: () => () => {},
    },
  }
}

test('host learns the current workspace from workspaceRegistry', async () => {
  const older = path.join(home, 'ws-older')
  const newer = path.join(home, 'ws-newer')
  fs.mkdirSync(older, { recursive: true })
  fs.mkdirSync(newer, { recursive: true })

  const host = (await import('../src/host.js')).default
  host.apply(
    fakeCtx([
      { path: older, updatedAt: '2026-08-01T00:00:00.000Z', createdAt: '2026-07-01T00:00:00.000Z' },
      { path: newer, updatedAt: '2026-11-16T00:00:00.000Z', createdAt: '2026-10-01T00:00:00.000Z' },
    ]),
  )

  assert.equal(models.getWorkspaceRoot(), newer)
  // 两个工作区都在候选里：当前第一，旧的后备
  assert.deepEqual(models.knownWorkspaceRoots(), [newer, older])
  assert.equal(models.defaultModelsDir(publishedStart()), path.join(newer, 'models'))

  // 旧工作区里已经有模型时，切过去也能接着用
  fs.mkdirSync(path.join(older, 'models', 'qwen3-asr-1.7b-8bit'), { recursive: true })
  fs.writeFileSync(path.join(older, 'models', 'qwen3-asr-1.7b-8bit', 'model.safetensors'), 'x')
  assert.equal(models.defaultModelsDir(publishedStart()), path.join(older, 'models'))

  models.setWorkspaceRoot('')
})
