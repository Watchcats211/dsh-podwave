#!/usr/bin/env python3
"""常驻说话人声纹服务：给每行字幕算一个声纹向量，供在线聚类用。

模型加载一次要一两秒，而实时跟播时每 12 秒就会来好几行，
所以这里做成常驻进程：父进程按行写 JSON 请求，这里按行回 JSON。

请求：{"id": 1, "audio": "/path/part.wav", "start": 1.23, "end": 4.56}
响应：{"id": 1, "embedding": [...]}  或  {"id": 1, "error": "..."}

start/end 是「相对该音频文件」的秒数；音频必须是 16kHz 单声道 16bit PCM WAV
（transcribe.js 切出来的块就是这个格式，所以不用重新解码，直接用 numpy 切片）。
"""
import json
import os
import sys
import wave

import numpy as np

SAMPLE_RATE = 16000
MIN_SECONDS = 0.35  # 太短的片段算不出稳定声纹，直接让调用方回退
MIN_SAMPLES = int(SAMPLE_RATE * MIN_SECONDS)


def read_samples(path):
    with wave.open(path, 'rb') as handle:
        rate = handle.getframerate()
        channels = handle.getnchannels()
        width = handle.getsampwidth()
        frames = handle.readframes(handle.getnframes())
    if width != 2:
        raise RuntimeError(f'只支持 16-bit PCM，收到 {width * 8}-bit')
    if rate != SAMPLE_RATE:
        raise RuntimeError(f'只支持 {SAMPLE_RATE}Hz，收到 {rate}Hz')
    data = np.frombuffer(frames, dtype=np.int16).astype(np.float32) / 32768.0
    if channels > 1:
        data = data.reshape(-1, channels).mean(axis=1)
    return data


class Server:
    def __init__(self, model):
        import sherpa_onnx

        config = sherpa_onnx.SpeakerEmbeddingExtractorConfig(model=model, num_threads=1)
        self.extractor = sherpa_onnx.SpeakerEmbeddingExtractor(config)
        self.cached_path = None
        self.cached = None

    def samples(self, path):
        if self.cached_path != path or self.cached is None:
            self.cached = read_samples(path)
            self.cached_path = path
        return self.cached

    def embed(self, path, start, end):
        data = self.samples(path)
        begin = max(0, int(round(float(start) * SAMPLE_RATE)))
        finish = min(len(data), int(round(float(end) * SAMPLE_RATE)))
        if finish - begin < MIN_SAMPLES:
            return None
        chunk = data[begin:finish]
        stream = self.extractor.create_stream()
        stream.accept_waveform(SAMPLE_RATE, chunk)
        stream.input_finished()
        if not self.extractor.is_ready(stream):
            return None
        return [float(value) for value in self.extractor.compute(stream)]


def main():
    model = None
    args = sys.argv[1:]
    for index, item in enumerate(args):
        if item == '--model' and index + 1 < len(args):
            model = args[index + 1]
    if not model or not os.path.exists(model):
        print(json.dumps({'error': f'找不到声纹模型：{model}'}), flush=True)
        return 2

    try:
        server = Server(model)
    except Exception as error:  # noqa: BLE001 - 起不来就明确告诉父进程
        print(json.dumps({'error': f'声纹模型加载失败：{error}'}), flush=True)
        return 2

    # 模型加载完先打个招呼，父进程据此认为「服务就绪」。
    print(json.dumps({'ready': True, 'dim': int(server.extractor.dim)}), flush=True)

    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue
        try:
            request = json.loads(line)
        except Exception:  # noqa: BLE001 - 坏行直接跳过，不要拖垮常驻进程
            continue
        request_id = request.get('id')
        try:
            embedding = server.embed(
                request.get('audio', ''),
                request.get('start', 0),
                request.get('end', 0),
            )
            if embedding is None:
                print(json.dumps({'id': request_id, 'embedding': None}), flush=True)
            else:
                print(json.dumps({'id': request_id, 'embedding': embedding}), flush=True)
        except Exception as error:  # noqa: BLE001 - 单次失败不影响后续请求
            print(json.dumps({'id': request_id, 'error': str(error)}), flush=True)


if __name__ == '__main__':
    sys.exit(main())
