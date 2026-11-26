// 前端关键防回归检查 + 打包清单完整性校验。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8')

test('SettingsPage has no modelOptions TDZ crash and no __saved literal value bug', () => {
  const src = read('client/src/SettingsPage.jsx')
  assert.doesNotMatch(src, /const asrChoices = .*modelOptions/, '不得在声明前引用 modelOptions')
  assert.doesNotMatch(src, /value="__saved"/, '不得用 __saved 作为下拉值')
  assert.match(src, /\$\{API\}\/preset|api\/preset/, '应包含一键方案切换接口')
  assert.match(src, /DeepSeek Key/, 'API Key 输入框应常驻可见')
  assert.match(src, /高级设置/, '低频技术项应折叠进高级设置')
})

test('App.jsx removes legacy TranslateSettingsDialog, guards realtime auto-transcribe, and resets subDir', () => {
  const src = read('client/src/App.jsx')
  assert.doesNotMatch(src, /TranslateSettingsDialog/, '不应保留过时的翻译弹窗')
  assert.doesNotMatch(src, /Qwen3-8B-4bit/, '不应残留过时模型文案')
  assert.match(src, /txLoadedId !== current\.id/, '边播边出字幕必须等待既有字幕加载完成')
  assert.match(src, /setSubDir\(''\)/, '切换侧栏文件夹时应重置 subDir')
  assert.match(src, /liveTapMode\)\s*return\s*undefined/, 'tap 模式下静音看门狗不得误报 BlackHole')
})

test('Player bar toggles transcript panel directly without duplicate floating caption menu', () => {
  const src = read('client/src/App.jsx')
  assert.doesNotMatch(src, /悬浮字幕窗/, '播放条不应再出现与实时字幕重复的悬浮字幕窗菜单项')
  assert.doesNotMatch(src, /<CaptionOverlay/, '不应再渲染重复的网页内悬浮字幕窗')
  assert.match(src, /if \(subsOpen\) \{\s*setSubsOpen\(false\)/, '转写中点击字幕按钮也必须能正常关掉字幕面板')
})

test('Theme mode switcher, SettingsPage appearance cards, and AddFolderModal are wired', () => {
  const themeSrc = read('client/src/lib/theme.js')
  assert.match(themeSrc, /'system'.*'light'.*'dark'|VALID_MODES/, 'theme.js 应支持 system / light / dark 三态')
  assert.match(themeSrc, /useThemeControl/, 'theme.js 应导出 useThemeControl')

  const settingsSrc = read('client/src/SettingsPage.jsx')
  assert.match(settingsSrc, /外观模式/, '设置页应包含明/暗/跟随系统外观切换卡片')

  const modalSrc = read('client/src/components/AddFolderModal.jsx')
  assert.match(modalSrc, /<dialog[\s\S]*closedby="any"/, 'AddFolderModal 应使用原生 dialog + closedby="any"')
  assert.match(modalSrc, /folders\/suggestions/, 'AddFolderModal 应探测本机常用目录')
  assert.match(modalSrc, /folders\/preview/, 'AddFolderModal 应支持手动路径实时校验')
})

test('package.json ships moss_pkg and persistent Python helper scripts exist', () => {
  const pkg = JSON.parse(read('package.json'))
  assert.ok(pkg.files.includes('scripts/moss_pkg/*.py'), 'package.json 必须包含 scripts/moss_pkg/*.py')
  assert.ok(fs.existsSync(path.join(ROOT, 'scripts', 'translate_server.py')), '常驻翻译脚本应存在')
  assert.ok(fs.existsSync(path.join(ROOT, 'scripts', 'live_draft_server.py')), '瞬时草稿脚本应存在')
})
