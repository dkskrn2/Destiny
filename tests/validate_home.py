from pathlib import Path


html = Path("index.html").read_text(encoding="utf-8")

required_strings = [
    "무료 사주 보기",
    "샘플 해석 보기",
    "오늘 운세",
    "이용 방법",
    "샘플 결과 미리보기",
    "신뢰 기준",
]

for value in required_strings:
    assert value in html, f"missing required content: {value}"
