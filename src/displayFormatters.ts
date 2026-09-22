export function formatSchoolName(name: string): string {
  const formatted = name
    .replace(/\bESCOLA\s+MUNICIPAL\b/gi, 'EM')
    .replace(/\bESCOLA\s+MUN\.?\b/gi, 'EM')
    .replace(/\bE\.\s*M\./gi, 'EM')
    .replace(/\s{2,}/g, ' ')
    .trim();

  return /^EM\b/i.test(formatted) ? formatted : `EM ${formatted}`;
}

export function formatClassName(name: string, gradeNumber: 1 | 2 | 3): string {
  const normalized = name.replace(/°/g, 'º').replace(/\s+/g, ' ').trim().toUpperCase();
  const singleClass = normalized.match(/^([A-Z])$/);
  if (singleClass) return `${gradeNumber}º ANO ${singleClass[1]}`;

  const gradeAndClass = normalized.match(/^(\d)º\s+(?!ANO\b)(.+)$/);
  if (gradeAndClass) return `${gradeAndClass[1]}º ANO ${gradeAndClass[2]}`;

  return normalized;
}
