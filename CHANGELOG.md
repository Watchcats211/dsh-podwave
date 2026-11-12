# Changelog

## 0.10.1 — 2026-11-12

Windows 安装链路补齐：ffmpeg、选择器与解压回退。

- **ffmpeg 自动安装**：Windows / Linux 缺少 ffmpeg 时，安装中心会下载 BtbN 静态构建（Windows 约 202 MB，Linux 约 157 MB）并解压到 `~/.podwave/runtime/ffmpeg`；macOS 仍优先使用 Homebrew，不重复下载。
- **平台路径**：转写与说话人分离不再写死 `/opt/homebrew/bin/ffmpeg`，统一用平台探测（环境变量 → PATH → 插件 runtime 目录）；Windows 虚拟环境走 `Scripts\python.exe`。
- **文件夹选择器**：macOS 用 osascript，Windows 用 PowerShell 的 FolderBrowserDialog，Linux 用 zenity；取消与找不到选择器都有明确提示。
- **解压回退**：zip 依次尝试 `unzip` → Windows `tar` → PowerShell `Expand-Archive` → Python `zipfile`，避免 Windows 上没有 unzip 时安装失败。
- **测试**：新增平台与资产测试（win32/darwin/linux 的 llama.cpp 与 ffmpeg 资产、虚拟环境路径），共 17 个用例。
- Windows 真机验证仍待进行；当前 macOS 安装与转写链路回归通过。

## 0.10.0 — 2026-11-12

环境与模型安装中心：换电脑或换系统时，先扫描再一键装。

- **本机扫描**：设置页新增「环境与模型」卡片，显示系统、架构、内存、GPU、ffmpeg、Python 运行时、llama.cpp 与各模型的就绪状态，并给出推荐引擎与预计下载体积。
- **自动选型**：Apple Silicon 用 MLX（Qwen3-ASR-1.7B-8bit + Hy-MT2-1.8B-4bit）；Windows / Linux / Intel Mac 用 sherpa-onnx（SenseVoiceSmall）+ llama.cpp（Hy-MT2-1.8B-Q4_K_M）。
- **双源下载**：国际（Hugging Face / GitHub）与国内（hf-mirror / gh-proxy / ModelScope）两条线路，可自动测速或手动指定；下载支持断点续传。
- **一键安装**：自动准备 uv + Python 虚拟环境、sherpa-onnx（MLX 平台加 mlx-qwen3-asr / mlx-lm）、llama.cpp 预编译包与缺失模型，完成后列出每项下载内容与体积。
- **跨平台引擎**：新增 SenseVoice 转写与 llama.cpp 翻译适配；ffmpeg、虚拟环境路径、文件夹选择器按平台探测（macOS 用 osascript，Windows 用 PowerShell）。
- **说明**：Hy-MT2 1.25bit 是自定义量化，主线 llama.cpp 加载失败，因此非 MLX 平台默认 Q4_K_M（约 1.1 GB）。
- 已知限制：Windows / Linux 尚未在真机验证；安装进度与引擎切换先以 macOS 实测为准。

## 0.9.1 — 2026-11-12

本地翻译换成小模型 Hy-MT2-1.8B，旧的 8B 已删除。

- **本地翻译模型**：默认从 Qwen3-8B-4bit（4.3 GB）改为腾讯混元 Hy-MT2-1.8B-4bit（974 MB，Apache-2.0，33 语）；磁盘上的旧模型已删除。
- **速度**：4 行英文实测 3.0 秒（含加载），单行约 0.2 秒；15 行一批的编号提示词保持不变。
- **模型选择**：设置页只列出真正就绪的模型，未下载完或目录里没有权重的条目不再出现在下拉框。
- **配置**：默认 `models.translateModel` 同步改为 `hy-mt2-1.8b-4bit`，已有配置会被保留并可直接切换。

## 0.9.0 — 2026-11-12

实时字幕预览：转写过程中按块出字，不用等整集。

- **分块转写改为单进程顺序处理**：所有音频块交给同一个 CLI 进程，模型只加载一次；每完成一块就合并进字幕草稿，面板顶部显示「已出 N 行」。
- **默认 1 分钟一块**：M4 Air 实测 5.5 分钟音频约 12 秒出第一批行，之后每 15–20 秒追加一批；可在设置里调到 10–20 分钟换取更少切块。
- **运行中的进度条**：百分比、第 n/total 块、已出行数、取消按钮；说话人分离阶段显示「正在分离说话人…」。
- **增量字幕可交互**：转写中打开详情页就能滚动、点击跳转、导出（导出的是当前已出的行）；刷新或重开面板会接着显示。
- **旧字幕保护**：重转期间旧字幕备份为 `<id>.json.previous`，取消或失败自动还原。
- 修复：拆分后的 Cover / TranscriptPanel 缺少 API 常量，详情页（有封面或有字幕时）会白屏。
- 修复：同一集已有任务在跑时再点转写，错误返回「已完成」；现在优先返回运行状态。

## 0.8.0 — 2026-11-12

P6：工程化（拆分前端、单元测试、发布脚本、CI）。

- **前端拆分**：Icon / Cover / TranscriptPanel 拆到 `client/src/components/`，格式化与任务文案拆到 `client/src/lib/`；App.jsx 从 1466 行降到约 1340 行。
- **单元测试**：`npm test`（node:test）覆盖格式化、旧字幕迁移与 SRT/Markdown 导出、配置迁移与持久化、episodeId 与音频扩展名，共 12 个用例。
- **发布脚本**：`node scripts/release.mjs <version>` 自动改版本号（package.json / host health / 界面 brand）、跑测试与构建、打包 tgz、提交、打 tag、推送并创建 GitHub Release（说明取自 CHANGELOG）。
- **CI**：GitHub Actions 增加 test job（npm ci + npm test），与 build job 并行。

## 0.7.0 — 2026-11-12

P4：媒体库管理（收藏、筛选、移除索引、导入策略、重复检测、清理）。

- **收藏**：列表每行右侧 ★，点一下收藏/取消；筛选条新增「收藏」。
- **筛选**：全部 / 未听 / 有字幕 / 收藏；和左侧「全部单集 / 继续收听 / 已播完」叠加生效。
- **移除索引**：单集详情页「从播放器移除」或批量栏「移除选中」——只从媒体库隐藏该集，不动源文件。
- **导入策略**：设置 → 播客 → 导入与清理，可选「复制到 imports/」（默认，拖拽与路径导入都复制）或「原地引用」（只引用文件所在目录）。
- **重复检测**：路径导入时按真实路径、文件名 + 大小去重，重复项跳过并在返回的 `skipped` 里标注。
- **孤儿清理**：删掉导入文件夹后，`imports/` 下不再被引用的批次可在设置页一键清理（显示批次与占用体积）。
- 新接口：`PUT /api/episodes/:id/favorite`、`DELETE /api/episodes/:id`（仅隐藏索引）、`GET/PUT /api/import/settings`、`GET/DELETE /api/imports/orphans`；`health` 版本 0.7.0。
- 新截图：`docs/screenshot-library.png`。

## 0.6.0 — 2026-11-12

P3：说话人分离（自动识别 + 彩色标签）。

- 新增本地说话人分离：sherpa-onnx（pyannote segmentation + 3D-Speaker 声纹），完全离线，不需要 HF token。
- 转写完成后自动把说话人分配到字幕行（按时间重叠投票），同一说话人颜色一致；字幕头部显示「N 位说话人」。
- 设置 → 播客 → 转写新增「自动识别说话人」开关；分离失败不影响转写结果。
- 新接口：`POST /api/episodes/:id/diarize`（对已有字幕补跑说话人）；`transcribe/settings` 支持 `diarize`；`health` 版本 0.6.0 返回 diarize 就绪状态。
- 运行时新增依赖 `sherpa-onnx`；模型放 `~/.podwave/models/diarization/`（约 34MB，下载命令见 README）。
- 新截图：`docs/screenshot-speakers.png`。

## 0.5.0 — 2026-11-12

P2：字幕编辑（改文本、拆分/合并、撤销、导出前校验）。

- 行内编辑：字幕面板每一行悬停出现 ✎，点开就地改文本；⌘/Ctrl+Enter 保存、Esc 取消。改过文本的行会清空旧译文，避免译文和原文对不上。
- 拆分与合并：编辑时按光标位置「拆分」成两行（时间戳按字符比例分配）；行尾 ⇣ 与下一行合并（英文之间自动补空格，译文一起合并）。
- 撤销：字幕面板右上「撤销」，每个单集保留最近 20 步修改（服务端内存栈，重启后清空）。
- 校验：导出前「校验」检查空行、无效时间戳、行间时间重叠；面板顶部列出问题。
- 新接口：`PUT /api/episodes/:id/transcript/lines/:lineId`、`POST .../lines/:lineId/split`、`POST .../lines/:lineId/merge`、`POST .../transcript/undo`、`GET .../transcript/validate`；`health` 版本 0.5.0。
- 新截图：`docs/screenshot-editing.png`。

## 0.4.0 — 2026-11-12

P1：转写体验（任务面板、进度、取消/续跑、批量、热词）。

- 新增任务面板：队列、阶段（准备 / 转写 / 合并）、百分比、分块进度与耗时；支持取消、重试、清除；2.5 秒自动刷新。
- 进度与分块：长音频按 `chunkMinutes`（默认 15 分钟）用 ffmpeg 切块，逐块转写后合并时间戳；块级结果落盘。
- 取消与续跑：详情页或任务面板可取消；再次启动时从已完成块继续，失败只重跑当前块。
- 批量转写：列表页「选择」进入多选，批量排队；已有字幕的单集自动跳过。
- 热词：设置 → 播客 → 转写，热词表会作为 `--context` 传给模型；分块时长可调（1–60 分钟）。
- 新接口：`POST /api/episodes/:id/transcribe/cancel`、`POST /api/transcribe/batch`、`GET/PUT /api/transcribe/settings`、`DELETE /api/jobs`；`health` 版本 0.4.0。

## 0.3.0 — 2026-11-12

P0：把配置、任务、字幕数据收成一套骨架（详见 [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)）。

- 新增统一配置 `~/.podwave/config.json`（`ui` / `translate` / `models` / `transcribe` 四个分节）；首次启动自动把旧的 `ui.json`、`translate.json`、`models.json` 迁入并改名为 `*.bak`。
- 新增 `~/.podwave/jobs.json`：转写、翻译任务落盘；进程重启后未完成的任务标为 `interrupted`（“进程重启，任务已中断”），不再静默丢失。
- transcript 升级为 v2：`lines[]`（行级时间戳 + 每行译文 `line.translations`）与 `providers{}`（每个目标语言的翻译来源）；旧格式首次读取/启动时自动迁移，原文件保留为 `<id>.json.v1.bak`。
- 字幕面板改为按行渲染译文；设置页历史列表改为按行数/已翻译行显示。
- 新增 `GET /api/jobs`，供后续任务面板使用。
- `health` 版本号改为 0.3.0。

## 0.2.9 — 2026-11-12

- 「添加文件夹」支持系统文件夹选择器（macOS 原生对话框）；保留手动输入路径。
- 支持把音频文件直接拖进面板：读取路径（可用时）或上传到 `~/.podwave/imports/` 后自动加入媒体库。

## 0.2.8 — 2026-11-12

- 播客自己的左侧栏可收起 / 展开，并记住状态；窄面板自动隐藏侧栏，详情页改为上下堆叠。

## 0.2.7 — 2026-11-12

- 设置页配色对齐 DSH 内置设置（透明背景、细分隔线、中性色），去掉琥珀强调。

## 0.2.6 — 2026-11-12

- 设置页「界面」分组：可以开关主界面侧栏的「播客」入口。

## 0.2.5 — 2026-11-12

- 新增设置页（`settings.section`）：历史记录、DeepSeek API 配置、ASR / 翻译模型选择。

## 0.2.4 — 2026-11-12

- 单集详情页：点播客行进入，左侧大封面，右侧并排字幕。

## 0.2.3 — 2026-11-12

- 转写（Qwen3-ASR-1.7B-8bit，MLX）、双语字幕、SRT / Markdown 导出。
- 字幕翻译支持 DeepSeek API 与本地 Qwen3-8B-4bit。

## 0.2.0–0.2.2 — 2026-11-12

- 转写任务、字幕面板、翻译设置的迭代版本。

## 0.1.0 — 2026-11-12

- 首个版本：DSH 插件形态的本地播客播放器（媒体库、播放进度、续播）。
