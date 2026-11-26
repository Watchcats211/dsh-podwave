#!/usr/bin/env python3
"""常驻本地 MLX 翻译服务（NDJSON over stdin/stdout）。

把 1GB+ 的混元/Qwen MLX 翻译模型常驻在内存中，避免实时字幕或整集分批翻译时
每句话冷启动一次 Python + 重新加载权重（原本每句 5-7 秒，常驻后约 0.2-0.5 秒）。

协议：
  启动完成输出一行：{"ready": true}
  输入一行 JSON：  {"id": 1, "target": "zh", "items": [{"id": "1", "text": "Hello"}]}
  输出一行 JSON：  {"id": 1, "results": {"1": "你好"}}
  或失败输出：     {"id": 1, "error": "..."}
  退出指令：       {"cmd": "quit"} 或关闭 stdin。
"""
import argparse
import json
import re
import sys

from mlx_lm import generate, load

BATCH_SIZE = 15
MAX_TOKENS = 1024


def parse_numbered(output: str, count: int) -> dict:
    parsed = {}
    for line in output.splitlines():
        match = re.match(r"^\s*(\d+)[.、)]\s*(.+?)\s*$", line)
        if not match:
            continue
        index = int(match.group(1))
        if 1 <= index <= count and index not in parsed:
            parsed[index] = match.group(2)
    if not parsed:
        lines = [line.strip() for line in output.splitlines() if line.strip()]
        if len(lines) == count:
            parsed = {index: line for index, line in enumerate(lines, 1)}
        elif count == 1 and lines:
            parsed = {1: " ".join(lines)}
    return parsed


def translate_batch(batch: list, model, tokenizer, language: str) -> dict:
    numbered = "\n".join(f"{index + 1}. {item['text']}" for index, item in enumerate(batch))
    messages = [
        {
            "role": "user",
            "content": (
                f"将以下 {len(batch)} 条编号字幕逐条翻译为{language}，"
                f"注意只需要输出翻译后的结果，不要额外解释，保持原有编号与顺序：\n\n{numbered}"
            ),
        },
    ]
    prompt = tokenizer.apply_chat_template(
        messages, add_generation_prompt=True, enable_thinking=False, tokenize=False
    )
    output = generate(model, tokenizer, prompt=prompt, max_tokens=MAX_TOKENS, verbose=False)
    parsed = parse_numbered(output, len(batch))
    if len(parsed) == len(batch):
        return parsed
    if len(batch) > 1:
        mid = (len(batch) + 1) // 2
        merged = translate_batch(batch[:mid], model, tokenizer, language)
        for index, text in translate_batch(batch[mid:], model, tokenizer, language).items():
            merged[index + mid] = text
        return merged
    return parsed


def emit(payload: dict) -> None:
    sys.stdout.write(json.dumps(payload, ensure_ascii=False) + "\n")
    sys.stdout.flush()


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--model-dir", required=True)
    args = parser.parse_args()

    model, tokenizer = load(args.model_dir)
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
            target = req.get("target") or "zh"
            language = "中文" if target == "zh" else "英语"
            items = req.get("items") or []
            results = {}
            for start in range(0, len(items), BATCH_SIZE):
                batch = items[start:start + BATCH_SIZE]
                parsed = translate_batch(batch, model, tokenizer, language)
                for index, item in enumerate(batch, 1):
                    results[str(item["id"])] = parsed.get(index, "")
            emit({"id": req_id, "results": results})
        except Exception as exc:
            emit({"id": req_id, "error": str(exc)})
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
