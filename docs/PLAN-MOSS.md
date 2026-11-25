# C 方案：本地转写（MOSS）+ 本地翻译（Hy-MT3）

> 状态（2026-11-25）：**P0 已完成、P1 已落地（0.11.56）、P2 已接入一键安装**。
> 实测数据见 [P0-MOSS-REPORT.md](P0-MOSS-REPORT.md)；引擎接线见 `src/transcribe.js` 的 `moss` 分支与
> `scripts/moss_server.py`。剩余：P3 打磨（源选择/半成品行/术语表/Windows 实机验证）。

目标：**装完插件不改任何配置就能用**，Windows / macOS、有显卡 / 没显卡都覆盖；两个模型都是中国开源。
云端仍然是默认，本地是「一键切过去」。

---

## 1. 选型与依据

| 环节 | 模型 | 体积 | 许可 | 为什么是它 |
|---|---|---|---|---|
| 听（转写 + 说话人 + 时间戳） | `OpenMOSS-Team/MOSS-Transcribe-Diarize` 0.9B | 1817 MB（单 safetensors） | Apache-2.0 | 一次前向同时出转写、`[S01]` 说话人、起止时间戳；50+ 语种，中英原生；单次可吞 90 分钟；INTERSPEECH 2026 MLC-SLM 14 语种第一 |
| 翻（字幕翻译） | `tencent/Hy-MT3-1.8B` GGUF Q4_K_M | 1348 MB | 混元社区许可（官方已发 GGUF） | 102 语种，误译比 MT2 少 43%，官方给了 GGUF，llama.cpp 直接跑 |

**为什么不一个模型全包**：MOSS 只做「音频 → 文字」，不做翻译；Hy-MT3 只做「文字 → 文字」。
但两者合起来正好是「听 + 翻」的全部，且都是国内团队、都能离线。

**下载源（国内优先）**
- MOSS：ModelScope `openmoss/MOSS-Transcribe-Diarize`（已确认存在，含 remote code，可完全离线加载）
- MT3 GGUF：ModelScope `Tencent-Hunyuan/Hy-MT3-1.8B-GGUF`，HF 同名仓库兜底

---

## 2. 架构

```
音频文件
  └─ ffmpeg 切成 ~5 分钟段（相邻段 10–15 秒重叠）
       └─ Python 进程 scripts/moss_server.py（用时拉起，转完退出）
            ├─ torch 加载 MOSS（cuda → mps → cpu 自动选，bf16）
            ├─ 逐段生成 [start][Sxx]text[end]
            └─ 解析成 segments[{start,end,speaker,text}]
  └─ 说话人全局对齐（复用现有 speaker_server.py 声纹，把段内 S01/S02 映射成全局 id）
  └─ 写字幕 json（复用现有 schema）
       └─ 翻译：llama.cpp + Hy-MT3 GGUF（现有 llama.js，批量 + 官方 prompt）
```

关键点：
- **按需加载、用完释放**（用户明确要求）：一个任务起一个 Python 进程，转写完就退出，内存立刻还回去。
  M4 实测加载只要 **2 秒**，代价可忽略。
- **切 5 分钟段**：P0 实测 RTF 随上下文增长（5 分钟 0.18、12 分钟 0.44、fp32 更差），5 分钟是最佳工作点。
- **说话人跨段对齐**：MOSS 的 `S01/S02` 是段内编号，用现有 `scripts/speaker_server.py`（3dspeaker 声纹）做全局映射，代码已有。
- **不再需要 pyannote**：段内说话人由 MOSS 直接给，pyannote 那套可以退役（3dspeaker 只留作跨段对齐）。

---

## 3. 平台矩阵

| 平台 | torch 轮子 | MOSS 设备 | 翻译 | 新增下载 |
|---|---|---|---|---|
| macOS arm64（M 系列） | PyPI 官方（139 MB，自带 MPS） | `mps` + **bf16**（实测 RTF 0.18） | llama.cpp mac-arm64 + MT3 GGUF | ≈3.4 GB |
| macOS x64（Intel） | PyPI 官方 | `cpu`（实测 RTF 0.89，≈实时，明确提示） | llama.cpp mac-x64 | ≈3.4 GB |
| Windows x64 + NVIDIA | **自动检测 `nvidia-smi` → `--index-url download.pytorch.org/whl/cu128`**（≈2.5 GB） | `cuda:0` + bf16 | llama.cpp win-cpu | ≈5.0 GB |
| Windows x64 无 N 卡 / AMD | PyPI CPU 轮子（≈250 MB） | `cpu`（同上，明确提示） | llama.cpp win-cpu | ≈3.6 GB |
| Linux x64 + NVIDIA | PyPI 的 `torch` 自带 CUDA | `cuda:0` + bf16 | llama.cpp ubuntu-x64 | ≈4.5 GB |
| Linux 无 GPU | PyPI CPU | `cpu` | llama.cpp ubuntu-x64 | ≈3.6 GB |

**翻译：全平台统一 GGUF + llama.cpp**（已定）。`LLAMA_BINARY.assets` 本来就覆盖 6 个平台键（含 darwin-arm64 / darwin-x64），
不需要 MLX。Windows/Linux 的 CUDA 版 llama.cpp 留作后续加速项。

**自动判定规则（用户不用选）**
1. `torch.cuda.is_available()` → `cuda:0` + `bfloat16`（算力 < 8.0 用 `float16`）
2. `torch.backends.mps.is_available()` → `mps` + **`bfloat16`**（实测比 fp32 快 2.2 倍、内存少 4.4 倍）
3. 否则 `cpu` + `float32`，`torch.set_num_threads(max(4, 物理核数-2))`
4. OOM → 降一档（bf16 → fp32，再不行退 cpu），并提示「太慢了，建议切云端」
5. 只有 CPU 且无 MPS/CUDA 时，**默认仍走云端**，本地作为「我知道会慢」的显式选项

**资源占用（按「占用越少越好」调过，实测数据在 P0 报告里）**
- **2 线程**（`OMP_NUM_THREADS=2` + `torch.set_num_threads(2)`）：不但没变慢，比用满所有核还快 20%，
  峰值内存从 874 MB 降到 696 MB；只有 CPU-only 时才用 `min(4, 核数-2)`。
- **进程优先级降到最低**：macOS/Linux `os.nice(10)`，Windows `BELOW_NORMAL_PRIORITY_CLASS`。
- bf16 权重（MPS/CUDA），模型加载后立即 `inference_mode()`。
- **一个任务一个进程，转完就退出**，闲置时内存占用为 0。
- 45 分钟播客：M4 约 6.5 分钟、全程 2 个核、< 700 MB。

**注意**：上游 `resolve_device("auto")` 只认 CUDA/CPU，**不认 MPS**。我们必须显式传设备，不能依赖它的 auto。

---

## 4. 依赖清单（venv 内）

必装（约 120 MB）：
```
transformers>=5.6,<6   # 现有 5.22.2 已满足
safetensors numpy<3 av librosa numba soundfile soxr packaging
fastapi uvicorn python-multipart
```
另装（体积随平台）：
```
torch torchaudio        # macOS 139 MB / Windows CPU 250 MB / Windows CUDA 2.5 GB
```
**不装**：git（官方包 `moss-transcribe-diarize` 用 pip install git+ 需要 git，Windows 上很多人没有 → 我们把它的纯 Python 源码 vendored 进 `scripts/moss_pkg/`，走 `PYTHONPATH`，零额外依赖）。

---

## 5. 代码改动清单

| 文件 | 改动 |
|---|---|
| `scripts/moss_server.py`（新，≈250 行） | 按需启动的转写进程：加载 → 逐段推理 → 输出 → 退出；`--device auto`（cuda→mps→cpu）、`--dtype auto`（cuda/mps→bf16，cpu→fp32）、OOM 降级 |
| `scripts/moss_pkg/`（新，vendored） | 官方 `moss_transcribe_diarize` 的解析与消息构造（Apache-2.0，保留 LICENSE） |
| `src/moss.js`（新，≈200 行） | 进程生命周期（用时拉起、结束退出、取消杀进程树）、请求封装、segments → lines 转换、跨段说话人对齐 |
| `src/transcribe.js` | 新增 engine 分支 `moss`：整段（或长音频切段）→ `moss.js` → 写字幕；进度、取消、断点续传复用现有 job 机制 |
| `src/catalog.js` | 新增 `moss-transcribe-diarize`（asr，engine `moss`，1817 MB，ModelScope/HF 双源）；`hy-mt3-1.8b-q4km` 已在 |
| `src/platform.js` | `recommendEngine()` 增加 `moss` 分支；`llamaAsset` 已覆盖 6 个平台键，mac 也要装了 |
| `src/setup.js` | venv 依赖增加 torch/av/librosa…；Windows 检测 `nvidia-smi` 决定装 CUDA 轮子；磁盘预检；安装日志里说明「CUDA 版约 2.5 GB」 |
| `src/models.js` | `LOCAL_MODEL_PATTERNS` 认 `moss-transcribe*`；模型就绪判定加 `model-*.safetensors` |
| `client/src/SettingsPage.jsx` | 转写方式新增「本地 · MOSS（自带说话人）」；显卡/内存提示；CUDA 开关说明 |
| `test/` | `moss.test.mjs`（假服务：正常/超时/取消/长音频切段/说话人映射）、`setup` 里 CUDA 判定的纯函数测试 |

---

## 6. 分阶段与工期

| 阶段 | 内容 | 工期 | 产出 |
|---|---|---|---|
| **P0 探针** | 下 1.8 GB + torch，跑 3 条真实音频（5 / 30 / 90 分钟），量 tok/s、峰值内存、中文 CER（与 Qwen3-ASR 对比）、MPS 与 CPU 差异 | 1 天 | 一份实测报告 + 是否继续的结论 |
| **P1 引擎** | `moss_server.py` + `src/moss.js` + `transcribe.js` 分支 + 单测 | 3–4 天 | 本地 MOSS 能出带说话人的字幕 |
| **P2 安装** | catalog / setup / platform / venv 依赖 / CUDA 判定 / 磁盘预检 / 双源下载 | 2–3 天 | 新机器一键装完可用 |
| **P3 打磨** | 进度与取消、OOM 降级、>90 分钟切段、热词、Windows CI 冒烟、README/CHANGELOG | 2–3 天 | 可发布 |
| **P4 可选** | token 流式（上游已有 `ProgressStreamer`）→ 半成品行滚动，逼近实时 | 3 天 | 本地实时字幕 |

---

## 7. 风险与对策

| 风险 | 影响 | 对策 |
|---|---|---|
| MPS 上跑不动（自定义模型 + Whisper 编码器） | Mac 只能 CPU，慢 | P0 先测；不行就 Mac 默认 CPU 并把预期写清楚，或 Mac 走云端转写 |
| Windows CUDA 轮子 2.5 GB 下载失败 | 装不上 | 失败自动退 CPU 轮子，功能可用只是慢；安装页显示进度与「改用云端」按钮 |
| 16 GB 内存 fp32 3.6 GB + MT3 同时驻留 | 内存吃紧 | 转写与翻译不同时加载；翻译用 llama.cpp 独立进程，转写结束后再跑 |
| 90 分钟以上超长音频 | 上下文爆 | 切成 ≤40 分钟段，10 秒重叠，按时间戳去重 |
| 上游代码更新（remote code 不兼容） | 加载失败 | 模型目录随包固定版本；`transformers` 锁 `<6`；失败回退云端 |
| 许可 | 不能再分发权重 | 只给下载链接，不在 npm 包里塞权重（现在就是这样） |

---

## 8. 验收标准

1. 全新 Mac（Apple Silicon，16 GB）与全新 Windows（无 GPU）各一台，装完插件 → 设置页点「一键安装」→ 不填任何东西，直接能转写一条中文播客，字幕带说话人。
2. 有 NVIDIA 的 Windows 机器，安装时自动选 CUDA 版，转写速度 ≥ CPU 版的 3 倍。
3. 任何一步失败（网络/显存/内存），界面给出人话原因 + 一键回退云端，不留下坏状态。
4. 全部本地时不发任何网络请求（`HF_HUB_OFFLINE=1` 下能跑）。
5. 45 分钟中文播客：Mac M4 ≤ 30 分钟出全稿，Windows + RTX 4060 ≤ 10 分钟。

---

## 9. 已拍板（2026-11-25）

1. **Mac 翻译统一走 GGUF + llama.cpp**，目前没有 MLX 版 MT3，不做自转。
2. **Windows 默认装 CUDA 版 torch**：安装时自动检测 `nvidia-smi`，有 N 卡就装 cu128 轮子，没有就 CPU 轮子。
3. **模型生命周期：用时加载、用完释放**，不做常驻（M4 实测加载 2 秒，代价可忽略）。
4. **P0 已完成**，实测结论见 [P0-MOSS-REPORT.md](P0-MOSS-REPORT.md)：MPS + bf16 可用（RTF 0.18 @5 分钟）、纯 CPU 太慢（0.89）、切 5 分钟段是最佳工作点。
