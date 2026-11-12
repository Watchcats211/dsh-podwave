#!/usr/bin/env python3
"""本地字幕翻译：读取 JSON 任务，用 MLX 模型逐批翻译，结果以 JSON 写到 stdout。"""
import json
import re
import sys

from mlx_lm import generate, load


def main() -> int:
    with open(sys.argv[1], "r", encoding="utf-8") as handle:
        config = json.load(handle)

    model, tokenizer = load(config["model_dir"])
    target = config["target"]
    language = "Simplified Chinese" if target == "zh" else "English"
    items = config["items"]
    results = {}

    batch_size = 15
    for start in range(0, len(items), batch_size):
        batch = items[start:start + batch_size]
        numbered = "\n".join(f"{index + 1}. {item['text']}" for index, item in enumerate(batch))
        messages = [
            {
                "role": "system",
                "content": (
                    "You are a professional subtitle translator. Translate each numbered line into "
                    f"{language}. Preserve proper names, numbers and terminology. Output only the translated "
                    "numbered lines in the same order, one per line, in the format '1. translation'. "
                    "Do not add explanations."
                ),
            },
            {"role": "user", "content": numbered},
        ]
        prompt = tokenizer.apply_chat_template(
            messages, add_generation_prompt=True, enable_thinking=False, tokenize=False
        )
        output = generate(model, tokenizer, prompt=prompt, max_tokens=1024, verbose=False)
        parsed = {}
        for line in output.splitlines():
            match = re.match(r"^\s*(\d+)[.、)]\s*(.+?)\s*$", line)
            if match:
                index = int(match.group(1))
                if 1 <= index <= len(batch) and index not in parsed:
                    parsed[index] = match.group(2)
        if not parsed:
            lines = [line.strip() for line in output.splitlines() if line.strip()]
            if len(lines) == len(batch):
                parsed = {index: line for index, line in enumerate(lines, 1)}
        for index, item in enumerate(batch, 1):
            results[str(item["id"])] = parsed.get(index, "")

    json.dump(results, sys.stdout, ensure_ascii=False)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
