from __future__ import annotations

import argparse
import hashlib
import json
import re
import unicodedata
from collections import Counter
from pathlib import Path
from typing import Any

import pdfplumber


VALID_MODES = {
    "nao leu": "Não leu",
    "soletrou": "Soletrou",
    "silabou": "Silabou",
    "leu": "Leu",
}


def normalize(value: str) -> str:
    value = unicodedata.normalize("NFKD", value)
    value = "".join(char for char in value if not unicodedata.combining(char))
    return re.sub(r"\s+", " ", value).strip().lower()


def clean_cell(value: str | None) -> str:
    return re.sub(r"\s+", " ", value or "").strip()


def parse_integer(value: str | None) -> int | None:
    cleaned = clean_cell(value)
    if not re.fullmatch(r"\d+", cleaned):
        return None
    return int(cleaned)


def classify(mode: str, palavras: int, pseudopalavras: int, texto: int) -> str:
    normalized_mode = normalize(mode)
    if normalized_mode == "nao leu":
        return "N1"
    if normalized_mode == "soletrou":
        return "N2"
    if normalized_mode == "silabou":
        return "N3"
    if palavras >= 50 and pseudopalavras >= 30 and texto >= 60:
        return "LF"
    if palavras <= 10 and pseudopalavras <= 10 and texto <= 10:
        return "N4"
    return "LI"


def explicit_level(value: str | None) -> str | None:
    normalized = normalize(clean_cell(value))
    match = re.search(r"\b(n[1-4]|li|lf)\b", normalized)
    return match.group(1).upper() if match else None


def is_explicitly_not_evaluated(row: list[str | None]) -> bool:
    trailing_text = normalize(" ".join(clean_cell(value) for value in row[3:]))
    markers = ("ausente", "atestado", "nao realizou o simulado")
    return any(marker in trailing_text for marker in markers)


def parse_filename(path: Path, grade: int) -> tuple[str, str]:
    match = re.fullmatch(
        r"(.+?) EM - ENSINO FUNDAMENTAL DE 9 ANOS - (.+)\.pdf",
        path.name,
        flags=re.IGNORECASE,
    )
    if not match:
        raise ValueError(f"Nome de arquivo fora do padrão: {path.name}")
    school = clean_cell(match.group(1))
    turma = clean_cell(match.group(2)).replace("°", "º").upper()
    turma = re.sub(rf"^{grade}º\s+([A-Z])$", rf"{grade}º ANO \1", turma)
    if not (turma.startswith(f"{grade}º ANO ") or turma.startswith("MULTISSERIADA")):
        raise ValueError(f"Turma fora do {grade}º ano: {path.name}")
    return school, turma


def extract_pdf(path: Path, grade: int, source_root: Path) -> tuple[list[dict[str, Any]], list[str]]:
    school, turma = parse_filename(path, grade)
    rows: list[dict[str, Any]] = []
    anomalies: list[str] = []

    with pdfplumber.open(path) as pdf:
        for page_number, page in enumerate(pdf.pages, start=1):
            for table in page.extract_tables():
                for row in table:
                    if not row or len(row) < 6:
                        continue
                    numero = parse_integer(row[0])
                    mode_key = normalize(clean_cell(row[2]))
                    if numero is None or mode_key not in VALID_MODES:
                        continue
                    name = clean_cell(row[1]).upper()
                    values = [parse_integer(row[index]) for index in (3, 4, 5)]
                    if not name:
                        anomalies.append(
                            f"{path.name} página {page_number}: linha inválida {row[:6]!r}"
                        )
                        continue
                    mode = VALID_MODES[mode_key]
                    if is_explicitly_not_evaluated(row):
                        level = "NÃO AVALIADO"
                        palavras = pseudopalavras = texto = None
                    elif all(value is not None for value in values):
                        palavras, pseudopalavras, texto = (int(value) for value in values)
                        level = classify(mode, palavras, pseudopalavras, texto)
                    elif mode in ("Não leu", "Soletrou", "Silabou"):
                        qualitative_levels = {"Não leu": "N1", "Soletrou": "N2", "Silabou": "N3"}
                        level = qualitative_levels[mode]
                        palavras = pseudopalavras = texto = None
                        supplied_level = explicit_level(row[3])
                        if supplied_level and supplied_level != level:
                            anomalies.append(
                                f"{path.name} página {page_number}: modo {mode!r} conflita com "
                                f"nível informado {supplied_level!r} para {name}; aplicada a precedência qualitativa"
                            )
                    else:
                        anomalies.append(
                            f"{path.name} página {page_number}: medidas ausentes {row[:6]!r}"
                        )
                        continue
                    rows.append(
                        {
                            "numero": numero,
                            "name": name,
                            "escola": school,
                            "turma": turma,
                            "s1": level,
                            "s1Details": {
                                "modo": mode,
                                "palavras": palavras,
                                "pseudopalavras": pseudopalavras,
                                "texto": texto,
                            },
                            "sourceFile": path.relative_to(source_root).as_posix(),
                            "sourcePage": page_number,
                        }
                    )

    if not rows:
        anomalies.append(f"{path.name}: nenhum registro encontrado")
    duplicate_numbers = [
        number for number, count in Counter(row["numero"] for row in rows).items() if count > 1
    ]
    if duplicate_numbers:
        anomalies.append(f"{path.name}: números repetidos {duplicate_numbers}")
    return rows, anomalies


def write_typescript(
    path: Path,
    students: list[dict[str, Any]],
    summary: dict[str, Any],
    classes: list[dict[str, Any]],
    grade: int,
) -> None:
    data_json = json.dumps(students, ensure_ascii=False, indent=2)
    summary_json = json.dumps(summary, ensure_ascii=False, indent=2)
    classes_json = json.dumps(classes, ensure_ascii=False, indent=2)
    word = "FIRST" if grade == 1 else "THIRD"
    interface = "FirstYearStudent" if grade == 1 else "ThirdYearStudent"
    content = f'''// Generated from the official {grade}º ano - 1º Simulado de Fluência Leitora reports.
// Do not edit manually; run scripts/import_first_year_pdfs.py --grade {grade}.

export interface {interface} {{
  id: number;
  numero: number;
  name: string;
  escola: string;
  turma: string;
  s1: "N1" | "N2" | "N3" | "N4" | "LI" | "LF" | "NÃO AVALIADO";
  s1Details: {{
    modo: string;
    palavras: number | null;
    pseudopalavras: number | null;
    texto: number | null;
  }};
  sourceFile: string;
  sourcePage: number;
}}

export const {word}_YEAR_IMPORT_SUMMARY = {summary_json} as const;

export const {word}_YEAR_CLASSES = {classes_json} as const;

export const {word}_YEAR_STUDENTS: {interface}[] = {data_json};
'''
    path.write_text(content, encoding="utf-8", newline="\n")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--audit", type=Path, required=True)
    parser.add_argument("--grade", type=int, choices=(1, 3), default=1)
    args = parser.parse_args()

    pdfs = sorted(args.source.rglob("*.pdf"), key=lambda path: path.name.casefold())
    if not pdfs:
        raise SystemExit(f"Nenhum PDF encontrado em {args.source}")

    students: list[dict[str, Any]] = []
    anomalies: list[str] = []
    source_hashes: dict[str, str] = {}
    per_file: list[dict[str, Any]] = []

    for pdf in pdfs:
        relative_name = pdf.relative_to(args.source).as_posix()
        extracted, pdf_anomalies = extract_pdf(pdf, args.grade, args.source)
        source_hashes[relative_name] = hashlib.sha256(pdf.read_bytes()).hexdigest()
        per_file.append({"file": relative_name, "records": len(extracted)})
        students.extend(extracted)
        anomalies.extend(pdf_anomalies)

    students.sort(key=lambda row: (normalize(row["escola"]), row["turma"], row["numero"], row["name"]))
    for index, student in enumerate(students, start=1):
        student["id"] = index

    levels = Counter(student["s1"] for student in students)
    modes = Counter(student["s1Details"]["modo"] for student in students)
    schools = sorted({student["escola"] for student in students}, key=normalize)
    source_classes = [
        {
            "escola": parse_filename(pdf, args.grade)[0],
            "turma": parse_filename(pdf, args.grade)[1],
            "sourceFile": pdf.relative_to(args.source).as_posix(),
            "recordCount": next(
                item["records"]
                for item in per_file
                if item["file"] == pdf.relative_to(args.source).as_posix()
            ),
        }
        for pdf in pdfs
    ]
    classes_with_results = {(student["escola"], student["turma"]) for student in students}
    summary = {
        "sourcePdfCount": len(pdfs),
        "schoolCount": len(schools),
        "classCount": len(source_classes),
        "classesWithResults": len(classes_with_results),
        "classesWithoutResults": len(source_classes) - len(classes_with_results),
        "studentCount": len(students),
        "evaluatedCount": sum(student["s1"] != "NÃO AVALIADO" for student in students),
        "notEvaluatedCount": levels.get("NÃO AVALIADO", 0),
        "levels": {level: levels.get(level, 0) for level in ("N1", "N2", "N3", "N4", "LI", "LF")},
        "modes": {mode: modes.get(mode, 0) for mode in ("Não leu", "Soletrou", "Silabou", "Leu")},
    }
    audit = {
        "summary": summary,
        "anomalies": anomalies,
        "files": per_file,
        "sourceSha256": source_hashes,
    }

    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.audit.parent.mkdir(parents=True, exist_ok=True)
    write_typescript(args.output, students, summary, source_classes, args.grade)
    args.audit.write_text(json.dumps(audit, ensure_ascii=False, indent=2), encoding="utf-8", newline="\n")
    print(json.dumps(summary, ensure_ascii=False, indent=2))
    print(f"anomalies={len(anomalies)}")


if __name__ == "__main__":
    main()
