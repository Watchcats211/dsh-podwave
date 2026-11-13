# dsh-podwave 架构

## 插件形态

dsh-podwave 是一个 DSH 插件，分两片：

- **host 半片** `src/host.js`：在 DSH 的 `ctx.webServer` 上注册 `/podwave` 前缀路由；负责媒体库扫描、音频 Range 流、转写/翻译任务、配置读写。
- **client 半片** `client/src/plugin.jsx` → `dist/client.js`：通过 `ctx.slots.register` 往 DSH 注入主界面（`main`、`sidebar.panellist`）和设置页（`settings.section`）。

构建：`node build.mjs` 用 esbuild 打包 React 组件，用 PostCSS 把 CSS 选择器统一加上 `.podwave-root` 前缀，最后包成 `window.__ModuleLoader__.load({ id: 'dsh-podwave', factory })`。

## 分层

```
UI（App.jsx / SettingsPage.jsx）
  ↓ /podwave/api/*
host.js（路由 + 鉴权 + 扫描触发）
  ↓
transcribe.js   translate.js   diarize.js
  ↓                 ↓              ↓
jobs.js（任务落盘）  config.js（统一配置）
  ↓
library.js（媒体库）  state.js（播放进度/文件夹）
  ↓
~/.podwave/*
```

## 节目适配器（providers）

所有节目来源统一走 `src/providers.js`：

- `providers/local.js`：本地音频库（`library.js`）。
- `providers/xyz.js`：小宇宙单集（`xyz.js`），已下载音频会自动挂上本地 `file`。
- `getProviderById(id)` 先让显式适配器匹配，`local` 只做兜底；`findEpisode(id)` 跨适配器查找，`listAllEpisodes()` 合并列表。
- 新增平台（RSS、喜马拉雅等）：在 `src/providers/` 加一个文件，注册进 `providers.js` 即可，宿主路由无需改动。

## 数据文件（~/.podwave）

| 文件 | 作用 |
| --- | --- |
| `state.json` | 媒体库文件夹、每集播放进度、播放器设置（倍速/音量/上次播放） |
| `config.json` | 统一配置：`ui`（侧栏开关/收起）、`translate`（API 与目标语言）、`models`（已选 ASR / 翻译模型）、`transcribe`（热词） |
| `jobs.json` | 转写/翻译任务记录（最多 80 条，重启时未完成标 `interrupted`） |
| `transcripts/<id>.json` | 字幕 v2（见下）；旧格式迁移后原文件保留 `<id>.json.v1.bak` |
| `imports/<batch>/` | 拖拽上传进来的音频 |
| `models/<name>/` | 本地模型目录（ASR、翻译） |
| `runtime/.venv/` | MLX 运行环境（uv 创建的 Python 虚拟环境） |

旧的 `ui.json` / `translate.json` / `models.json` 会在首次启动时迁入 `config.json` 并改名为 `*.bak`。

## 媒体库状态

- `state.json` 里 `favorites: [episodeId]`、`hidden: [episodeId]`；`hidden` 只影响列表，不会删除源文件。
- 导入策略与孤儿清理的配置在 `config.json` 的 `import.mode`（`copy` / `reference`）。

## transcript v2

```json
{
  "schemaVersion": 2,
  "id": "episode-id",
  "title": "标题",
  "createdAt": 1760000000000,
  "updatedAt": 1760000000000,
  "model": "qwen3-asr-1.7b-8bit",
  "language": "Chinese",
  "duration": 42.5,
  "text": "全文",
  "source": { "path": "/abs/path.m4a", "size": 123, "mtime": 1760000000000 },
  "lines": [
    { "id": 1, "start": 0, "end": 2.96, "text": "第一行", "speaker": null, "translations": { "en": "First line" } }
  ],
  "providers": { "en": "local" },
  "speakers": []
}
```

- 行级时间戳来自模型 chunk 与词级时间戳对齐；标点取自 chunk 文本。
- 译文按行存放，`providers` 记录本集每个目标语言用的翻译来源（`api` / `local`）。
- `speaker` 由说话人分离（sherpa-onnx）填充，从 0 开始；`speakers` 是标签表（如 `[{"id":0,"label":"说话人 1"}]`），分离失败时为空。
- 旧格式（`segments` + `translations[target][id]`）会在读取或启动迁移时自动升级。

## job

```json
{
  "key": "transcribe:<episodeId>",
  "type": "transcribe | translate",
  "status": "queued | running | done | error | interrupted",
  "episodeId": "...",
  "target": "en",
  "progress": { "done": 3, "total": 12 },
  "error": null,
  "startedAt": 1760000000000,
  "finishedAt": 1760000000000
}
```

`jobs.js` 在启动时把遗留的 `queued` / `running` 任务改为 `interrupted`，避免 UI 永远停在“进行中”。

## HTTP API（/podwave/api）

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/health` | 版本、转写运行时、翻译配置、说话人分离状态 |
| GET | `/state` | 文件夹、播放进度、设置 |
| GET | `/episodes` | 媒体库条目（含 `hasTranscript` / `favorite`，过滤 `hidden`） |
| POST | `/scan` | 重新扫描 |
| POST/DELETE | `/folders` | 添加/移除文件夹 |
| POST | `/pick-folder` | 系统文件夹选择器 |
| POST | `/import/upload` | 拖拽上传音频 |
| POST | `/import/paths` | 按路径导入（拖拽可得路径时） |
| GET | `/episodes/:id/audio` | Range 音频流 |
| GET | `/episodes/:id/cover` | 封面 |
| PUT | `/progress/:id` · PATCH `/settings` | 播放进度 / 播放器设置 |
| GET/DELETE/POST | `/episodes/:id/transcript` · `/transcribe` | 读取/删除/开始转写 |
| POST | `/episodes/:id/transcribe/cancel` | 取消正在进行的转写 |
| POST | `/transcribe/batch` | 批量转写（{ids}） |
| GET/PUT | `/transcribe/settings` | 热词、分块时长、是否自动识别说话人 |
| POST | `/episodes/:id/diarize` | 对已有字幕补跑说话人分离 |
| PUT/POST | `/episodes/:id/transcript/lines/:lineId` 及 `/split` `/merge` `/undo` `/validate` | 字幕行编辑 |
| GET/DELETE/POST/GET | `/episodes/:id/translate` · `/translate/settings` | 翻译与配置 |
| GET | `/episodes/:id/transcript/export?format=srt\|md` | 导出字幕 |
| GET/PUT | `/models` | 模型列表 / 选择 |
| GET | `/history` | 已完成的转写/翻译 |
| GET | `/jobs` | 任务记录 |
| GET/PUT | `/ui-settings` | 侧栏入口与收起状态 |
| PUT | `/episodes/:id/favorite` | 收藏 / 取消收藏 |
| DELETE | `/episodes/:id` | 仅从索引隐藏（不动源文件） |
| GET/PUT | `/import/settings` | 导入策略（copy / reference）与孤儿统计 |
| GET/DELETE | `/imports/orphans` | 列出 / 清理未引用的 imports 批次 |

## 发布流程

1. `npm run build` 生成 `dist/client.js`。
2. 更新 `package.json`、`CHANGELOG.md`、README。
3. `npm pack` 产物校验后 `git commit` → `git tag vX.Y.Z` → `gh release create vX.Y.Z dsh-podwave-X.Y.Z.tgz`。
4. 桌面端：`plugin_manager` remove + install `file:/Users/tangwenxuan/Deepseek-Harness/dsh-podwave`（或刷新 DSH）。
