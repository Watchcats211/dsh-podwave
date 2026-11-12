#!/usr/bin/env python3
"""sherpa-onnx 离线转写（SenseVoice）。跨平台：Windows / Linux / Intel Mac 通用。

输出 JSON：{ "text": str, "tokens": [{"text", "start", "end"}], "language": str }
"""
import argparse
import json
import re
import sys
import wave

import numpy as np
import sherpa_onnx


def read_wav(path):
    with wave.open(path, "rb") as handle:
        if handle.getnchannels() != 1 or handle.getframerate() != 16000:
            raise ValueError("需要 16kHz 单声道 wav")
        frames = handle.readframes(handle.getnframes())
    return np.frombuffer(frames, dtype=np.int16).astype(np.float32) / 32768.0


def transcribe_file(model_dir, wav, threads=4):
    recognizer = sherpa_onnx.OfflineRecognizer.from_sense_voice(
        model=f"{model_dir}/model.int8.onnx",
        tokens=f"{model_dir}/tokens.txt",
        num_threads=threads,
        use_itn=True,
        language="auto",
        debug=False,
    )
    samples = read_wav(wav)
    stream = recognizer.create_stream()
    stream.accept_waveform(16000, samples)
    recognizer.decode_stream(stream)
    result = stream.result
    text = re.sub(r"<\|[^|]+\|>", "", result.text or "").strip()
    tokens = []
    stamps = list(getattr(result, "timestamps", []) or [])
    for index, token in enumerate(getattr(result, "tokens", []) or []):
        piece = re.sub(r"<\|[^|]+\|>", "", token)
        if not piece.strip():
            continue
        start = float(stamps[index]) if index < len(stamps) else 0.0
        end = float(stamps[index + 1]) if index + 1 < len(stamps) else start + 0.2
        tokens.append({"text": piece, "start": start, "end": end})
    return {"text": text, "tokens": tokens, "language": "auto"}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--wav", required=True)
    parser.add_argument("--model-dir", required=True)
    parser.add_argument("--out", required=True)
    parser.add_argument("--threads", type=int, default=4)
    args = parser.parse_args()
    payload = transcribe_file(args.model_dir, args.wav, args.threads)
    with open(args.out, "w", encoding="utf-8") as handle:
        json.dump(payload, handle, ensure_ascii=False)
    print(json.dumps(payload, ensure_ascii=False))


if __name__ == "__main__":
    try:
        main()
    except Exception as error:  # noqa: BLE001
        print(json.dumps({"error": str(error)}), file=sys.stderr)
        sys.exit(1)
