# Windows 验收清单（0.10.3）

在 Windows 10/11 的 DSH 里安装 `dsh-podwave` 后，按顺序做一遍。任何一步失败，把设置页「环境与模型」里的「复制诊断信息」内容发回来。

## 1. 安装与扫描

- [ ] 打开 设置 → 播客 → 「环境与模型」。
- [ ] 平台一行显示 `Windows · x64 · 内存 · cpu`，推荐引擎为 `ONNX ASR + llama.cpp`。
- [ ] 组件列表里 ffmpeg、Python、ASR、翻译、说话人模型都显示缺失或就绪状态。
- [ ] 预计下载体积约为 **1.6 GB**（ffmpeg 202MB + llama.cpp 25MB + SenseVoice 239MB + Hy-MT2 1.1GB）。

## 2. 一键安装

- [ ] 线路选「自动」，点「一键安装」。
- [ ] 进度依次经过：下载 uv → 创建 Python 环境 → 安装 sherpa-onnx → 下载 llama.cpp → 下载 ffmpeg → 下载模型。
- [ ] 结束后摘要显示每项文件与 MB，总字节与预计一致（误差 <5%）。
- [ ] `%USERPROFILE%\.podwave\runtime\ffmpeg` 下能找到 `ffmpeg.exe`；`runtime\llama` 下能找到 `llama-server.exe`。

## 3. 转写

- [ ] 拖一个 mp3/m4a 进面板（或「添加文件夹」→ 选择文件夹）。
- [ ] 详情页点「转写字幕」，12 秒内应出现第一行；进度显示块数与已用秒数。
- [ ] 完成后行有开始/结束时间，导出 SRT 用记事本打开时间格式正常。
- [ ] 说话人开关打开时，行前有彩色「说话人 N」标签。

## 4. 翻译

- [ ] 设置 → 播客 → API 与翻译引擎 → 本地模型，确认选中 `hy-mt2-1.8b-q4km`。
- [ ] 字幕面板把对照语言切到「English」，应出现英文译文；首次会等 llama-server 启动 10–30 秒。
- [ ] 再次切换语言或重复翻译不报错。

## 5. 诊断

- [ ] 点「复制诊断信息」，粘贴到文本文件，应包含 `platform`、`engine`、`paths`、`components`、`setup`。
- [ ] `paths.ffmpeg`、`paths.python`、`paths.llama` 都不是 `null`。

## 已知限制

- Windows 上 Hy-MT2 只有 GGUF 版本；1.25bit 是腾讯自定义量化，主线 llama.cpp 不支持，安装器不会推荐。
- SenseVoice 的中文识别弱于 macOS 上的 Qwen3-ASR；追求质量可以后续接云端 ASR。
- 说话人分离模型在 Windows 上通过 sherpa-onnx 运行，首次加载约 2–5 秒。
