#!/usr/bin/env python3
"""本地字幕翻译：读取 JSON 任务，用 MLX 模型逐批翻译，结果以 JSON 写到 stdout。

小模型遇到很短的句子会自作主张把几行并成一行，编号就整体后移，
下游按编号取译文时就会整批错位。所以这里校验「读回来的行数 == 送进去的行数」，
对不上就降批重试（对半 → 最后一行一行翻），保证一行对一行。
"""
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
    return parsed


def translate_batch(batch: list, model, tokenizer, language: str) -> dict:
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


def main() -> int:
    with open(sys.argv[1], "r", encoding="utf-8") as handle:
        config = json.load(handle)

    model, tokenizer = load(config["model_dir"])
    target = config["target"]
    language = "Simplified Chinese" if target == "zh" else "English"
    items = config["items"]
    results = {}

    for start in range(0, len(items), BATCH_SIZE):
        batch = items[start:start + BATCH_SIZE]
        parsed = translate_batch(batch, model, tokenizer, language)
        for index, item in enumerate(batch, 1):
            results[str(item["id"])] = parsed.get(index, "")

    json.dump(results, sys.stdout, ensure_ascii=False)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
