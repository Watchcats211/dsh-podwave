#!/usr/bin/env python3
"""常驻本地 SenseVoice 瞬时草稿服务（NDJSON over stdin/stdout）。

用于实时字幕在说话过程中提供 <0.8s 滚字草稿（约 40-80ms/次推理），
整句停顿后仍由云端高精度 ASR + 翻译定稿替换。

协议：
  启动完成输出：{"ready": true}
  输入一行 JSON：{"id": 1, "pcm16_b64": "<base64 Int16 16k mono>"}
  输出一行 JSON：{"id": 1, "text": "..."}
  退出指令：{"cmd": "quit"} 或关闭 stdin。
"""
import argparse
import base64
import json
import re
import sys

import numpy as np
import sherpa_onnx


def emit(payload: dict) -> None:
    sys.stdout.write(json.dumps(payload, ensure_ascii=False) + "\n")
    sys.stdout.flush()


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--model-dir", required=True)
    parser.add_argument("--threads", type=int, default=2)
    args = parser.parse_args()

    import os
    int8_path = os.path.join(args.model_dir, "model.int8.onnx")
    fp32_path = os.path.join(args.model_dir, "model.onnx")
    model_path = int8_path if os.path.exists(int8_path) else fp32_path
    recognizer = sherpa_onnx.OfflineRecognizer.from_sense_voice(
        model=model_path,
        tokens=os.path.join(args.model_dir, "tokens.txt"),
        num_threads=args.threads,
        use_itn=True,
        language="auto",
        debug=False,
    )
    emit({"ready": True})

    for raw in sys.stdin:
        raw = raw.strip()
        if not raw:
            continue
        req_id = None
        try:
            req = json.loads(raw)
            if req.get("cmd") == "quit":
                break
            req_id = req.get("id")
            b64 = req.get("pcm16_b64") or ""
            pcm = base64.b64decode(b64)
            if len(pcm) < 320:
                emit({"id": req_id, "text": ""})
                continue
            samples = np.frombuffer(pcm, dtype=np.int16).astype(np.float32) / 32768.0
            stream = recognizer.create_stream()
            stream.accept_waveform(16000, samples)
            recognizer.decode_stream(stream)
            text = re.sub(r"<\|[^|]+\|>", "", stream.result.text or "").strip()
            emit({"id": req_id, "text": text})
        except Exception as exc:
            emit({"id": req_id, "error": str(exc)})
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
