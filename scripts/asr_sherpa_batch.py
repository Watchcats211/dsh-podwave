#!/usr/bin/env python3
"""批量 SenseVoice 转写：一次加载模型，顺序处理多个 wav，每完成一个写一个 JSON。
输出文件名与 MLX CLI 保持一致（与输入 wav 同名、扩展名换成 .json），便于复用 ingest 逻辑。
"""
import argparse
import json
import os
import sys

from asr_sherpa import transcribe_file


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("files", nargs="+")
    parser.add_argument("--model-dir", required=True)
    parser.add_argument("--out-dir", required=True)
    parser.add_argument("--threads", type=int, default=4)
    parser.add_argument("--hotwords", default="")
    args = parser.parse_args()
    if args.hotwords.strip():
        print("note: SenseVoice 模型不支持热词，已忽略 --hotwords", file=sys.stderr)
    os.makedirs(args.out_dir, exist_ok=True)
    for wav in args.files:
        base = os.path.splitext(os.path.basename(wav))[0]
        out = os.path.join(args.out_dir, base + ".json")
        if os.path.exists(out):
            continue
        payload = transcribe_file(args.model_dir, wav, args.threads)
        with open(out, "w", encoding="utf-8") as handle:
            json.dump(payload, handle, ensure_ascii=False)
        print(f"done {base}", flush=True)


if __name__ == "__main__":
    try:
        main()
    except Exception as error:  # noqa: BLE001
        print(json.dumps({"error": str(error)}), file=sys.stderr)
        sys.exit(1)
