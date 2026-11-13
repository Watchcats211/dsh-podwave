#!/usr/bin/env python3
"""离线说话人分离：sherpa-onnx（pyannote segmentation + 3D-Speaker embedding）。

输入音频文件，输出 JSON：{"segments":[{"start":..,"end":..,"speaker":N}],"numSpeakers":N,"duration":..}
"""
import argparse
import json
import os
import subprocess
import sys
import tempfile
import wave

import numpy as np


def convert(ffmpeg, audio, out):
    subprocess.run(
        [ffmpeg, '-hide_banner', '-loglevel', 'error', '-y', '-i', audio, '-ac', '1', '-ar', '16000', '-f', 'wav', out],
        check=True,
    )


def read_wav(path):
    with wave.open(path, 'rb') as handle:
        rate = handle.getframerate()
        channels = handle.getnchannels()
        width = handle.getsampwidth()
        frames = handle.readframes(handle.getnframes())
    if width != 2:
        raise RuntimeError(f'只支持 16-bit PCM，收到 {width * 8}-bit')
    data = np.frombuffer(frames, dtype=np.int16).astype(np.float32) / 32768.0
    if channels > 1:
        data = data.reshape(-1, channels).mean(axis=1)
    return rate, data


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--audio', required=True)
    parser.add_argument('--seg-model', required=True)
    parser.add_argument('--emb-model', required=True)
    parser.add_argument('--threshold', type=float, default=0.6)
    parser.add_argument('--num-speakers', type=int, default=-1)
    # 默认走 PATH 上的 ffmpeg。之前写死 /opt/homebrew/bin/ffmpeg，
    # 在 Windows 上是 [WinError 2] 系统找不到指定的文件。
    parser.add_argument('--ffmpeg', default=os.environ.get('PODWAVE_FFMPEG') or 'ffmpeg')
    args = parser.parse_args()

    import sherpa_onnx as so

    config = so.OfflineSpeakerDiarizationConfig(
        segmentation=so.OfflineSpeakerSegmentationModelConfig(
            pyannote=so.OfflineSpeakerSegmentationPyannoteModelConfig(model=args.seg_model)
        ),
        embedding=so.SpeakerEmbeddingExtractorConfig(model=args.emb_model),
        clustering=so.FastClusteringConfig(num_clusters=args.num_speakers, threshold=args.threshold),
        min_duration_on=0.3,
        min_duration_off=0.5,
    )
    diarizer = so.OfflineSpeakerDiarization(config)

    with tempfile.TemporaryDirectory(prefix='podwave-diarize-') as tmp:
        wav = os.path.join(tmp, 'audio.wav')
        convert(args.ffmpeg, args.audio, wav)
        rate, samples = read_wav(wav)
        result = diarizer.process(samples)
        segments = [
            {'start': round(float(seg.start), 3), 'end': round(float(seg.end), 3), 'speaker': int(seg.speaker)}
            for seg in result.sort_by_start_time()
        ]
    speakers = {seg['speaker'] for seg in segments}
    print(json.dumps({'segments': segments, 'numSpeakers': len(speakers), 'duration': round(len(samples) / rate, 3)}, ensure_ascii=False))


if __name__ == '__main__':
    try:
        main()
    except Exception as error:  # noqa: BLE001
        print(json.dumps({'error': str(error)}, ensure_ascii=False), file=sys.stderr)
        sys.exit(1)
