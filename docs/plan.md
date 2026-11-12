# dsh-podwave 项目管理逻辑与修改计划

日期：2026-11-12 · 当前版本 0.2.9

## 一、这个项目的逻辑，先讲成一句话

**本地播客文件 → 媒体库（引用文件夹 / 拖拽导入）→ 单集播放与进度 → 转写任务 → 字幕与双语对照 → 导出；设置页管模型、API 与界面。**

四层结构：

| 层 | 在哪 | 干什么 |
| --- | --- | --- |
| 数据层 | `~/.podwave/` | `state.json`（文件夹/进度/播放设置）、`models.json`、`translate.json`、`ui.json`、`transcripts/<id>.json`、`covers/`、`imports/`、`models/`、`runtime/` |
| 服务层 | `src/host.js` + `library/state/transcribe/translate/models` | `/podwave/api/*`：媒体库扫描、音频 Range 流、进度、转写队列、翻译任务、历史、设置 |
| 展示层 | `client/src/` | 侧栏主页面（列表/详情/播放器/字幕面板/对话框）、设置页（settings.section） |
| 宿主集成 | `cordis.patch.yml` + `plugin.jsx` | `webServer.register`、slots：`main` / `sidebar.panellist` / `settings.section`；鉴权走 `connection.requestRejection` |

三个核心对象（这也是"说不清"的来源——它们混在一起）：

- **Folder / Episode**：文件夹是引用路径；单集由文件派生，`id = sha1(path)` 前 16 位。
- **Job / Transcript**：转写与翻译是内存里的任务；结果是 `transcripts/<id>.json`，译文又塞回同一个 JSON。
- **Config**：四个独立 JSON，没有统一版本。

## 二、为什么现在"说不清"：5 个具体原因

1. **配置四散**：`state.json`、`models.json`、`translate.json`、`ui.json` 各写各的，没有 schema 与迁移。
2. **任务状态只在内存**：`jobs` Map 重启即丢，UI 可能出现「一直转写中」或状态回退。
3. **数据双轨**：选择文件夹是「引用」，拖拽导入是「复制」到 `imports/`；两种来源在 UI 上长得一样，删除语义也不清楚。
4. **转写与译文混在一个 JSON**：没有 schema 版本，加字段/迁移靠运气。
5. **前端与发布都是手工**：`App.jsx` 1297 行、`styles.css` 1104 行；仓库根还堆着 9 个已 tracked 的 `dsh-podwave-*.tgz`，发布靠 `npm pack` + `gh release` 手敲。

## 三、改造清单（按依赖排序，一次性做完）

### P0 立骨架（不改 UI）

目标：数据与工程有单一事实来源。

1. **统一配置** `~/.podwave/config.json`：`{ schemaVersion, ui, translate, models, transcribe }`；旧 4 个文件自动迁移（幂等，迁移前 `.bak`），API key 仍 0600。
2. **Transcript schema v2**：`{ schemaVersion, episodeId, source:{path,size,mtime}, model, language, createdAt, lines:[{start,end,text,speaker?,translations:{}}], speakers:[] }`；启动时升级旧格式。
3. **任务持久化** `~/.podwave/jobs.json`：queued / running / done / error、进度、错误、更新时间；启动时把可疑 running 标成 interrupted。
4. **仓库整理**：`git rm --cached` 9 个 tgz（只保留在 Release）；确认 `.gitignore`；新增 `CHANGELOG.md`、`docs/ARCHITECTURE.md`；README 补架构图。

验收：旧数据零丢失自动迁移；重启后任务状态正确；仓库无 tgz；CHANGELOG 覆盖 0.1.0 至今。

### P1 转写体验

1. **任务面板**：队列、状态/进度/耗时、取消、重试、失败原因。
2. **进度**：加载模型 / 转写 / 对齐三个阶段 + 按音频时长估算百分比。
3. **批量转写**：当前文件夹、多选。
4. **分块转写（长播客）**：按 10–20 分钟切块（ffmpeg），逐块转写后合并时间戳；失败只重跑该块；1 小时播客可续跑。
5. **热词**：设置里维护术语表，传 `--context`；与翻译术语表共用。

验收：1 小时音频可转写、可取消、可续跑；失败块单独重试；进度可见。

### P2 字幕与翻译体验

1. **字幕行内编辑**（原文 + 译文），保存后导出以编辑版为准。
2. **单行重翻**；整集重翻需确认。
3. **术语表**：转写热词 + 翻译强制译法两张表。
4. **导出增强**：双语 SRT、带时间码 Markdown、（可选）ASS。
5. **历史页增强**：打开、删除、重新导出、清空译文缓存。

验收：编辑后导出正确；术语表两处生效；历史页可管理。

### P3 说话人分离（最大不确定项）

1. 运行时优先 **sherpa-onnx**（免 HF token），pyannote 作为备选；模型约 100MB。
2. 字幕行按重叠最大者对齐 speaker；speaker 可重命名（「说话人 1」→ 名字）。
3. 设置开关；关闭时不跑分离。

验收：2 人对谈样本能区分；改名后导出保留标签；开关生效。

### P4 媒体库管理

1. **导入策略设置**：引用 / 复制（拖拽默认复制，选择器默认引用）。
2. **重复检测**：同路径 / inode / 同名同大小；提示跳过。
3. **孤儿清理**：`imports/` 下未被引用的批次可清理；删除单集只删索引不动源文件（文案明确）。
4. **筛选与批量**：全部/未听/在听/已听/已转写/有字幕 + 收藏；多选批量删除/转写。
5. 播放增强（可选）：书签、A-B 循环。

### P5 长播客实时化与订阅（可选）

- **跟播预转写**：播放时优先转写当前段，边播边出字幕（分块 + 任务优先级）。
- **RSS / 在线订阅**：当前明确不做，除非你确认需要。

### P6 工程化（贯穿全程）

- 拆分 `App.jsx` 为 components + hooks（useLibrary / usePlayer / useJobs / useConfig）。
- 测试：`node:test` 覆盖 state、迁移、字幕分行、导出；ego 脚本做 UI 冒烟（播放、转写、翻译、设置、收起侧栏）。
- 发布脚本 `scripts/release.mjs`：bump → build → pack → tag → `gh release`；CI 增加 test job。
- 每版更新 CHANGELOG 与 README 截图。

## 四、执行顺序

一次性做完，按依赖推进；每一步都保持可验证，中途不必须拆 Release：

```
P0 立骨架 → P1 转写体验 → P2 字幕编辑 → P3 说话人分离 → P4 媒体库管理 → P6 工程化收尾
                                     ↘ P5 跟播/RSS（视讨论再定）
```

全部完成后统一发版（版本号到时再定，可以直接发 0.3.0 或按里程碑打 tag）。

## 五、需要你拍板

1. **执行顺序**：按上面 P0→P4 推进，同意吗？
2. **导入默认**：引用还是复制？建议默认引用文件夹，拖拽文件才复制。
3. **RSS / 在线订阅**：做不做？建议暂不做。
4. **P5 跟播预转写**：这轮做还是留到下一轮？建议留到下一轮。

## 六、下一步

你确认清单后，我就从 P0 开始，按顺序一路做完 P0–P4 + P6，中间每完成一块做一次自测并在对话里汇报。
