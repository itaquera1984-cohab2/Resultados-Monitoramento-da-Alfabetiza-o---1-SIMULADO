import React from 'react';
import { isNeeStudent } from '../neeStudents';

export function NeeBadge({ student }: { student: { name: string; escola: string; turma: string } }) {
  if (!isNeeStudent(student)) return null;
  return (
    <span
      className="inline-flex shrink-0 items-center rounded border border-violet-300 bg-violet-50 px-1.5 py-0.5 text-[10px] font-bold leading-none text-violet-800 align-middle mr-1.5"
      title="NEE — Necessidades Educacionais Especiais. Identificação informada pela rede."
      aria-label="NEE: Necessidades Educacionais Especiais"
    >
      NEE
    </span>
  );
}
