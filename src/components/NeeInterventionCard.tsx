import React from 'react';
import { getNeeInterventionStats } from '../neeStudents';

export function NeeInterventionCard({ students }: { students: Parameters<typeof getNeeInterventionStats>[0] }) {
  const stats = getNeeInterventionStats(students);
  return (
    <section aria-label="Alunos NEE em intervenção prioritária" className="rounded-3xl border-2 border-violet-200 bg-violet-50 p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div>
          <h2 className="text-sm font-black uppercase tracking-wide text-violet-900">NEE entre os alunos dos níveis 1 e 2</h2>
          <p className="mt-1 text-sm text-violet-800">Rede • 1º Simulado de Fluência Leitora</p>
          <p className="mt-3 text-sm font-bold text-violet-900">{stats.nee} de {stats.total} alunos em N1/N2 têm identificação NEE na lista fornecida.</p>
          <p className="mt-1 text-xs text-violet-800">NEE no Nível 1: {stats.n1} • NEE no Nível 2: {stats.n2}</p>
        </div>
        <div className="shrink-0 rounded-2xl bg-white px-7 py-4 text-center shadow-sm">
          <div className="text-4xl font-black text-violet-800">{stats.total ? `${stats.percentage.toLocaleString('pt-BR', { maximumFractionDigits: 1, minimumFractionDigits: 1 })}%` : '—'}</div>
          <div className="mt-1 text-xs font-bold text-violet-700">dos alunos em N1 + N2</div>
        </div>
      </div>
      <p className="mt-4 border-t border-violet-200 pt-3 text-xs text-violet-800">NEE = Necessidades Educacionais Especiais. Considera apenas os cadastros conferidos com a lista; registros pendentes de conferência não entram na contagem NEE.</p>
    </section>
  );
}
