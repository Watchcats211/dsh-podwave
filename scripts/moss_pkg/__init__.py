"""Vendored helpers from MOSS-Transcribe-Diarize (Apache-2.0).

只保留两件事：怎么把音频喂给模型（inference_utils），怎么把模型输出
`[起始时间][S01]正文[结束时间]` 解析成片段（transcript_parser）。
模型本体的远程代码随权重一起下载，不在这里重复。

来源：https://github.com/OpenMOSS/MOSS-Transcribe-Diarize  （commit 79c675f）
许可：见同目录 LICENSE-MOSS-Transcribe-Diarize
"""

from .transcript_parser import TranscriptParseError, TranscriptSegment, parse_transcript

__all__ = ['TranscriptParseError', 'TranscriptSegment', 'parse_transcript']
