import React from 'react';
import { isBolsaFamiliaStudent } from '../bolsaFamiliaStudents';
import { isNeeStudent } from '../neeStudents';

type StudentIdentity = { name: string; escola: string; turma: string };

export function StudentBadges({ student }: { student: StudentIdentity }) {
  const bolsaFamilia = isBolsaFamiliaStudent(student);
  const nee = isNeeStudent(student);

  if (!bolsaFamilia && !nee) return null;

  return (
    <span className="mr-1.5 inline-flex shrink-0 items-center gap-1 align-middle" aria-label={[bolsaFamilia && 'Beneficiário do Bolsa Família', nee && 'Necessidades Educacionais Especiais'].filter(Boolean).join('; ')}>
      {bolsaFamilia && (
        <span
          className="inline-flex items-center rounded border border-amber-300 bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold leading-none text-amber-800"
          title="BF — Estudante beneficiário do Bolsa Família."
        >
          BF
        </span>
      )}
      {nee && (
        <span
          className="inline-flex items-center rounded border border-violet-300 bg-violet-50 px-1.5 py-0.5 text-[10px] font-bold leading-none text-violet-800"
          title="NEE — Necessidades Educacionais Especiais. Identificação informada pela rede."
        >
          NEE
        </span>
      )}
    </span>
  );
}
