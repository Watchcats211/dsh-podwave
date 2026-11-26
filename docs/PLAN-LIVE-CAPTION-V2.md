# 实时字幕 v2 方案（免虚拟声卡 / 低延迟 / 术语感知）

> 状态：方案待批。目标版本 0.12.x。
> 参考对象（只看思路，不搬代码）：
> - `jinchezuo/dsh-interpret`（MIT）—— 系统音频 helper、两段式识别、术语三件套、SSE + 事件日志
> - `Oreo0614/dsh-realtime-subtitles`（MIT）—— WASAPI 环回、草稿/定稿双模型、鼠标穿透悬浮层
> - `SweelLong/SubtitleOverlay`（MIT 式）—— 产品形态与外观参数
>
> 三条硬结论都是从它们**踩过的坑**里来的，不是猜的（见 §2）。

---

## 1. 现状与差距

今天实时字幕的链路：

```
getUserMedia(BlackHole) → AudioWorklet → 能量 VAD 切句 → WAV → 宿主
   → DeepSeek /v1/tools/asr（整句） → 翻译 → 原生置顶窗（macOS）
```

已经有的（不动）：原生置顶字幕窗（不透明度/字号/宽度/拖动记忆/不抢焦点）、音量电平条与静音提示、
云端识别 + 现有翻译通道、保存为 srt/md/json。

四个真实差距：

| 差距 | 表现 | 后果 |
|---|---|---|
| **必须装虚拟声卡** | 用户要先去「音频 MIDI 设置」建多输出设备 | 最大的流失点，`~/.podwave/live/.work` 从未出现过就是证据 |
| **延迟 2~4 秒** | 一句说完才开始识别 | 看视频时字幕总是慢半拍 |
| **说话人/术语不稳** | 专业词（eigenvalue、Hermitian）被识别成 `egenvolu` | 翻译跟着错 |
| **崩溃即丢** | 会话只在内存里 | 宿主重启后本次字幕消失 |

---

## 2. 三条来自实测的结论（决定了整个架构）

### 2.1 采集必须走「带自己 Info.plist 的 helper」，而不是 DSH 里的网页接口

- dsh-interpret 的 spike 记录：「应用主窗口只放行 audio 权限，`getDisplayMedia` 被拒」——与我们读 DSH 源码的结论一致。
- 它把采集做成 `DSHASRRecordingHelper.app`，二进制实测链的是 `CoreAudio + AudioToolbox`，
  导入 `_AudioHardwareCreateProcessTap` / `_AudioHardwareCreateAggregateDevice`（**Core Audio tap，不是 ScreenCaptureKit**），
  Info.plist 里只有 `NSAudioCaptureUsageDescription`（+ 麦克风），`LSMinimumSystemVersion 13.5`，**adhoc 签名**、无 Team ID。
- 含义：**权限（TCC）记在 helper 这个 app 上**，DSH 不需要任何声明；用户看到的授权文案是
  「录制电脑正在播放的声音」，不是「录制整个屏幕」。

### 2.2 输出用「分块 WAV 写目录」，不要用 stdout 裸 PCM

dsh-interpret 实测原话：

> 直接 `--pcm-stdout` 只得到不足 1 秒的数据，不稳定；改用分块 WAV 目录监听。

我们原计划就是管道推 PCM —— 直接否掉。

### 2.3 helper 必须装在固定路径

它的文档写明：「首次从插件内新路径运行 helper 需要重新授权一次」。
所以 helper 与字幕窗二进制都落在 `<数据目录>/bin/`，**升级不换路径**，避免每个版本弹一次权限。

---

## 3. 目标架构

```
                    ┌──────────────── 采集层（三选一，自动降级） ────────────────┐
                    │ ① macOS: PodwaveAudioTap.app（Swift, Core Audio tap）      │
系统/应用声音 ──────▶│ ② Windows: PodwaveAudioTap.exe（C# WASAPI loopback）      │
                    │ ③ 兜底: getUserMedia（BlackHole / VB-Cable / 麦克风）      │
                    └───────────────────────────┬──────────────────────────────┘
                                                │ 每 500ms 一个 16k 单声道 WAV 写进目录
                                                ▼
                    宿主轮询目录 → 解码 PCM → VAD（Silero，缺失回落能量阈值）
                                                │
                          ┌─────────────────────┴─────────────────────┐
                          ▼ 草稿通道（可选）                          ▼ 定稿通道
              sherpa-onnx-node 流式 zipformer（<1s）        现有：云端 DeepSeek ASR / 本地 MOSS
              灰色临时行，整句结束即丢弃                     整句识别 + 时间轴
                          └─────────────────────┬─────────────────────┘
                                                ▼
                                 术语表（Glossary）→ 纠正 → 拼进翻译 prompt
                                                ▼
                                  现有 translateItems（DSH 模型 / API / Hy-MT3）
                                                ▼
                     原生置顶窗（已有）+ 鼠标穿透开关 + 会话状态机与事件日志
```

### 3.1 采集协议（新增）

helper 参数（与别人保持一致，便于对比排错）：

```
--mode audio-capture --output-dir <dir> --chunk-ms 500
--sample-rate 16000 --bits-per-sample 16 --channels 1
[--pid <目标进程>]      # 只听某个 app，缺省为全局混音
```

输出文件名：`<起始毫秒>-system.wav`，写完即关闭（原子写入用 `.tmp` 再 rename）。
宿主每 250ms 扫一次目录：文件大小稳定且 mtime 超过 200ms 才读，读完即删。

> 为什么不用管道：helper 崩溃/被系统杀时，管道场景下宿主拿不到任何错误上下文；
> 目录场景里能看到「最后一个文件停在哪」，直接把 wav 拖出来听就知道是静音还是识别问题。

### 3.2 VAD

- 首选 `sherpa-onnx-node` 的 Silero VAD，参数抄 dsh-interpret 的实测值：
  `threshold 0.5 / minSpeech 250ms / silenceMs 300ms / maxSegmentMs 12000 / preRollMs 500`
- 该依赖作为 **optionalDependency**：装不上（少见）或平台无预编译包时，自动退回现有能量 VAD。
- 模型 `silero_vad.onnx`（约 2 MB）随安装下载到 `<数据目录>/models/vad/`，
  **不进 npm 包**（隐私闸门也会拦模型权重）。

### 3.3 两段式识别（延迟 vs 质量的取舍）

| 通道 | 实现 | 延迟 | 成本 | 用途 |
|---|---|---|---|---|
| 草稿 | sherpa 流式 zipformer（中英 int8，198 MB，可选下载） | <1s | 免费 | 灰色临时行，说完即被定稿替换 |
| 定稿 | 现有云端 ASR（默认）或本地 MOSS | 2~4s | ¥0.4/小时 | 真正的字幕行，带时间轴、进历史 |

草稿通道不可用时自动退化成「每 2 秒把累积音频送一次云端做预览」——**默认关闭**，因为它按次计费，
要在设置里明确打开（文案写清「预览会产生额外识别费用」）。

### 3.4 术语表

照 dsh-interpret 的三件套结构，但只做我们需要的部分：

1. `Glossary`：用户可维护的「源词 → 译法」表（JSON，存在 `<数据目录>/glossary.json`），
   命中的源词按长度倒序，优先匹配长词。
2. `correct(text)`：对识别结果做近似纠正（编辑距离 ≤2，且发音/词形相近），只改术语，不动其它词。
3. prompt 注入：翻译时把命中的术语（源词 + 期望译法）拼进系统提示，一并发给
   `translateItems`。「说错但翻对」比「识别对但翻错」更容易救。

### 3.5 会话状态机 + 事件日志

```
idle → listening → stopping → completed → idle
```

- `events.jsonl` 逐事件落盘（每句原文/译文/时间戳/来源），`transcript.json` 存终稿。
- 宿主重启/崩溃后，`listening` 中的会话标记为 `interrupted`，已出的字幕仍可读、可导出。
- 顺带把 `startup.log` 加上：插件加载时写一行版本 + 时间 + 平台。
  **动机**：今天查「侧栏入口消失」时，接口未鉴权统一返回 401，根本判断不了插件是否加载。

### 3.6 字幕窗（已有，补两项）

- macOS 原生窗已实现（置顶/不透明底板/字号/宽度/拖动记忆/不抢焦点）；
- **补鼠标穿透开关**（`ignoresMouseEvents`）：看视频时字幕不该挡点击；
- Windows 侧本期**不做**独立窗，仍用页面内控制面板 + 系统级方案留到后续版本。

---

## 4. 平台矩阵

| 平台 | 采集 | 草稿识别 | 定稿识别 | 字幕窗 |
|---|---|---|---|---|
| macOS 13.5+ | tap helper（本方案新增） | sherpa 流式（可选） | 云端 / MOSS | 原生窗（已有） |
| macOS < 13.5 | BlackHole / 麦克风（已有） | — | 云端 / MOSS | 原生窗 |
| Windows 10/11 | WASAPI helper（P2） / VB-Cable（已有） | sherpa 流式（可选） | 云端 / MOSS | 页面内（本期） |
| Linux | 麦克风（已有） | — | 云端 / MOSS | 页面内 |

---

## 5. 分阶段与验收

| 阶段 | 内容 | 工期 | 验收（可观测） |
|---|---|---|---|
| **P0 探针** | 用 150 行 Swift 写 `podwave-audio-tap`，跑起来播一段 B站/音乐，确认能拿到非静音 WAV | 0.5 天 | 目录里出现 16k WAV，`ffprobe` 显示 500ms、有波形；授权弹窗只出现一次 |
| **P1 接入** | helper 安装/编译到 `<数据目录>/bin`、宿主轮询、自动降级到 BlackHole、设置页「采集方式」 | 1.5 天 | 不装 BlackHole 也能出字幕；拔掉 helper 自动回落且提示原因 |
| **P2 Windows** | C# WASAPI 环回 helper（安装时用系统自带 `csc.exe` 编译，零 NuGet 依赖） | 1.5 天 | Win 上不装 VB-Cable 能出字幕 |
| **P3 VAD** | sherpa-onnx-node + Silero（可选依赖），能量 VAD 作兜底 | 1 天 | 放音乐时不切句、说话时切句正确；依赖缺失时行为不变 |
| **P4 草稿行** | sherpa 流式 zipformer（可选下载）+ 灰色临时行 + 定稿替换 | 1.5 天 | 端到端延迟从 2~4 秒降到 <1.5 秒（同一条视频对比） |
| **P5 术语表** | Glossary + 纠正 + prompt 注入 + 设置页编辑 | 1 天 | 造 10 个术语，识别错读能被纠正、译文用对术语 |
| **P6 打磨** | 状态机/事件日志/startup.log/穿透开关 | 1 天 | 宿主重启后会话可读；鼠标能点穿字幕 |

合计约 8 个工作日，每阶段独立可发版，不阻塞。

---

## 6. 风险与对策

| 风险 | 概率 | 对策 |
|---|---|---|
| tap 在 DSH 环境下被拒（TCC 归属异常） | 低（已有插件验证） | P0 先跑；失败就保留 BlackHole 并按平台提示 |
| helper 升级后重新弹权限 | 中 | 固定安装路径；源码未变不重编译；文档写明「授权一次即可」 |
| `sherpa-onnx-node` 装不上（原生模块） | 中 | optionalDependency + 运行时探测，缺了就退能量 VAD，功能不残 |
| Windows `csc.exe` 不存在/编译失败 | 中 | 失败提示「用 VB-Cable 或麦克风」，不阻断 |
| 流式模型 198 MB 下载量大 | 中 | 只在用户显式开启「低延迟预览」时下载，可随时删除 |
| 预览通道烧钱（用户开了云端预览） | 低 | 默认关闭；打开时明确标注按次计费 |
| 多应用选择带来权限复杂度 | 低 | 本期只做「全局混音 + 可选 pid」，UI 先给一个下拉 |

---

## 7. 代码改动清单

| 文件 | 改动 |
|---|---|
| `scripts/podwave_audio_tap.swift`（新） | Core Audio tap，写分块 WAV；参数见 §3.1 |
| `scripts/PodwaveAudioTap.app/Contents/Info.plist`（新） | `CFBundleIdentifier` / `NSAudioCaptureUsageDescription` / `LSMinimumSystemVersion 13.5` |
| `src/audio-tap.js`（新） | 编译/安装 helper 到 `<数据目录>/bin`、spawn、轮询目录、解码 WAV、错误分类（无权限/被杀/静音） |
| `src/silero-vad.js`（新，可选依赖） | sherpa-onnx-node 的 VAD 封装，接口与现有 `LiveSegmenter` 对齐 |
| `src/streaming-asr.js`（新，可选） | 流式草稿行；模型下载与删除 |
| `src/glossary.js`（新） | 术语表存取、命中、近似纠正 |
| `src/live-caption.js` | 接入采集源选择、状态机、`events.jsonl`、`startup.log`、术语 |
| `src/host.js` | 新路由：`/live/source`、`/live/glossary`；`/live/window` 加穿透开关 |
| `client/src/components/LiveCaptionOverlay.jsx` | 采集方式下拉、草稿行渲染、穿透开关、术语入口 |
| `client/src/SettingsPage.jsx` | 「实时字幕」卡片加：采集方式/延迟预览/术语表 |
| `scripts/caption_window.swift` | 加 `ignoresMouseEvents` 切换 |
| `test/` | 分块协议、降级路径、术语纠正、状态机的单测（不依赖真实 helper） |

---

## 8. 明确不做

- 不做「选任意 app 单独采集」的完整 UI（本期只给全局混音 + 高级用户可填 pid）。
- 不做 Windows 独立置顶窗（页面内控制面板够用，等有人要再说）。
- 不做本地大模型流的实时同传（MOSS 一句 1.5~7 秒，实时没意义）。
- 不引入 Apple Speech / Apple Translation（绑定 macOS 26 + 语言包，跨平台没了）。
- 不搬运 dsh-interpret 的 Apache-2.0 helper 二进制；Swift/C# helper 自己写。
