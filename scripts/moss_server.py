#!/usr/bin/env python3
"""MOSS 转写服务：一次任务一个进程，转完就退出（模型与内存全部归还）。

用法：
    moss_server.py --model <模型目录> --out-dir <输出目录> [选项] <音频1> [音频2 ...]

每个输入文件产出一个同名 .json：
    { "engine": "moss", "text": ..., "segments": [{start,end,speaker,text}], ... }
stdout 每完成一段打印一行 NDJSON 进度，供宿主读取。

设计取舍（实测见 docs/P0-MOSS-REPORT.md）：
- bf16 是 MPS/CUDA 上的唯一合理精度（fp32 慢 2.2 倍、内存 4.4 倍）；
- 线程压到 2 反而更快（默认线程数会和 MPS 算子抢核），并让机器保持流畅；
- 进程优先级降到最低，用户干别的时不抢资源；
- 不常驻：加载约 2 秒，任务结束立刻退出。
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import time
from pathlib import Path

HERE = Path(__file__).resolve().parent


def _lower_priority() -> None:
    try:
        if os.name == 'posix':
            os.nice(10)
        else:  # Windows：BELOW_NORMAL_PRIORITY_CLASS
            import ctypes

            handle = ctypes.windll.kernel32.GetCurrentProcess()
            ctypes.windll.kernel32.SetPriorityClass(handle, 0x00004000)
    except Exception:  # 降优先级失败不影响功能
        pass


def _pick_device(requested: str):
    import torch

    if requested != 'auto':
        return requested
    if torch.cuda.is_available():
        return 'cuda:0'
    mps = getattr(torch.backends, 'mps', None)
    if mps is not None and mps.is_available():
        return 'mps'
    return 'cpu'


def _pick_dtype(requested: str, device: str):
    if requested != 'auto':
        return requested
    return 'fp32' if device == 'cpu' else 'bf16'


def main() -> int:
    ap = argparse.ArgumentParser(description='MOSS-Transcribe-Diarize 批量转写')
    ap.add_argument('--model', required=True)
    ap.add_argument('--out-dir', required=True)
    ap.add_argument('--device', default='auto', help='auto / cpu / mps / cuda:0')
    ap.add_argument('--dtype', default='auto', help='auto / bf16 / fp16 / fp32')
    ap.add_argument('--threads', type=int, default=2)
    ap.add_argument('--max-new-tokens', type=int, default=4096)
    ap.add_argument('--hotwords', default='', help='热词，逗号分隔')
    ap.add_argument('files', nargs='+')
    args = ap.parse_args()

    # 线程数和优先级必须在 import torch 之前定下来，否则 OMP 已经初始化。
    threads = max(1, int(args.threads))
    for name in ('OMP_NUM_THREADS', 'MKL_NUM_THREADS', 'OPENBLAS_NUM_THREADS', 'NUMEXPR_NUM_THREADS'):
        os.environ.setdefault(name, str(threads))
    os.environ.setdefault('TOKENIZERS_PARALLELISM', 'false')
    os.environ.setdefault('HF_HUB_OFFLINE', '1')
    _lower_priority()
    sys.path.insert(0, str(HERE))

    import torch  # noqa: E402

    from moss_pkg.inference_utils import (  # noqa: E402
        DEFAULT_PROMPT,
        build_transcription_messages,
        dtype_from_name,
        generate_transcription,
        resolve_device,
    )
    from moss_pkg.transcript_parser import parse_transcript  # noqa: E402

    torch.set_num_threads(threads)

    device = resolve_device(_pick_device(args.device))
    dtype = dtype_from_name(_pick_dtype(args.dtype, str(device)))
    started = time.time()

    from transformers import AutoModelForCausalLM, AutoProcessor

    processor = AutoProcessor.from_pretrained(args.model, trust_remote_code=True)
    model = AutoModelForCausalLM.from_pretrained(
        args.model,
        trust_remote_code=True,
        dtype='auto',
        attn_implementation='sdpa',
    )
    if next(model.parameters()).dtype != dtype:
        model = model.to(dtype)
    model = model.to(device).eval()
    load_seconds = round(time.time() - started, 2)

    out_dir = Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    prompt = DEFAULT_PROMPT
    if args.hotwords.strip():
        prompt = f'{DEFAULT_PROMPT}热词提示：{args.hotwords.strip()}'

    def emit(payload: dict) -> None:
        sys.stdout.write(json.dumps(payload, ensure_ascii=False) + '\n')
        sys.stdout.flush()

    failures = 0
    for index, raw_path in enumerate(args.files):
        source = Path(raw_path)
        entry: dict = {
            'engine': 'moss',
            'file': str(source),
            'index': index,
            'device': str(device),
            'dtype': args.dtype,
        }
        file_started = time.time()
        try:
            messages = build_transcription_messages(str(source), prompt)
            result = generate_transcription(
                model,
                processor,
                messages,
                max_new_tokens=args.max_new_tokens,
                device=device,
                dtype=dtype,
                token_callback=lambda count: emit({'type': 'tokens', 'index': index, 'tokens': count}),
            )
            segments = []
            speakers = set()
            for seg in parse_transcript(result['text']):
                text = (seg.text or '').strip()
                if not text:
                    continue
                segments.append({
                    'start': round(float(seg.start or 0), 2),
                    'end': round(float(seg.end or 0), 2),
                    'speaker': seg.speaker or '',
                    'text': text,
                })
                if seg.speaker:
                    speakers.add(seg.speaker)
            entry.update({
                'text': result['text'],
                'segments': segments,
                'speakers': sorted(speakers),
                'generatedTokens': result['generated_tokens'],
                'promptTokens': result['prompt_len'],
                'elapsedSec': round(time.time() - file_started, 1),
                'loadSeconds': load_seconds,
            })
        except Exception as error:  # noqa: BLE001 —— 单文件失败不该拖垮整批
            failures += 1
            entry.update({'error': f'{type(error).__name__}: {error}'})
        target = out_dir / f'{source.stem}.json'
        target.write_text(json.dumps(entry, ensure_ascii=False), encoding='utf-8')
        emit({'type': 'done', 'index': index, 'file': str(source), 'error': entry.get('error')})

    return 1 if failures and failures == len(args.files) else 0


if __name__ == '__main__':
    raise SystemExit(main())
