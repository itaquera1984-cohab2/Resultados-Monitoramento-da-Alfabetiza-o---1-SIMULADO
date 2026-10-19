import React, { useMemo, useState } from 'react';
import { AlertTriangle, ArrowRight, BookOpen, CheckCircle2, Download, Info, Scale, School, Users } from 'lucide-react';
import { DADOS_TURMAS_CAED } from '../dadosTurmasCaed';
import { THIRD_YEAR_STUDENTS } from '../data_simulado3ano';
import { calculateVulnerability } from '../vulnerabilityStats';
import { formatSchoolName } from '../displayFormatters';
import { NEE_STUDENTS, isNeeStudent } from '../neeStudents';
import { SPECIAL_EDUCATION_REPORT_STUDENTS } from '../specialEducationStudents';

type Transition = '2-3' | '3-4' | '4-5';

type ClassSnapshot = {
  school: string;
  className: string;
  students: number;
  evaluated: number;
  vulnerable: number | null;
  nee: number;
  critical: number;
  readers: number;
  ifl: number;
};

type SchoolPlan = {
  school: string;
  current: ClassSnapshot[];
  totalStudents: number;
  totalEvaluated: number;
  totalVulnerable: number | null;
  totalNee: number;
  totalCritical: number;
  totalReaders: number;
  targetClasses: Array<{
    name: string;
    students: number;
    vulnerable: number | null;
    nee: number;
    critical: number;
    readers: number;
  }>;
  sizeGap: number;
  vulnerabilityGap: number | null;
  criticalGap: number;
  iflGap: number;
  requiresAdditionalClasses: number;
  priority: 'Alta' | 'Média' | 'Baixa';
  reasons: string[];
};

const levelWeight: Record<string, number> = { N1: 0, N2: 1, N3: 2.5, N4: 4, LI: 6, LF: 10 };

const normalizeSchool = (value: string) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toUpperCase()
  .replace(/\b(ESCOLA MUNICIPAL|ESCOLA MUN|E M|PROFESSORA|PROFESSOR|PROFA|PROF|DOUTOR|DR|PADRE|PE)\b/g, ' ')
  .replace(/[^A-Z0-9]+/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const targetName = (grade: number, index: number) => `${grade}º ANO ${String.fromCharCode(65 + index)}`;

const distribute = (total: number, buckets: number) =>
  Array.from({ length: buckets }, (_, index) => Math.floor(total / buckets) + (index < total % buckets ? 1 : 0));

const percentage = (value: number, total: number) => total > 0 ? (value / total) * 100 : 0;

const normalizeClass = (value: string) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toUpperCase()
  .replace(/\bANO\b/g, '')
  .replace(/[^A-Z0-9]+/g, '');

const secondYearNeeRecords = (() => {
  const records = [
    ...NEE_STUDENTS.map((item) => ({ ...item, grade: 2 })),
    ...SPECIAL_EDUCATION_REPORT_STUDENTS.filter((item) => item.grade === 2),
  ];
  const unique = new Map<string, typeof records[number]>();
  records.forEach((item) => unique.set(
    `${normalizeSchool(item.name)}__${normalizeSchool(item.escola)}__${normalizeClass(item.turma)}`,
    item,
  ));
  return [...unique.values()];
})();

const countSecondYearNee = (school: string, className: string) => {
  const schoolKey = normalizeSchool(school);
  const classKey = normalizeClass(className);
  return secondYearNeeRecords.filter((item) => {
    const itemSchool = normalizeSchool(item.escola);
    return normalizeClass(item.turma) === classKey &&
      (itemSchool === schoolKey || itemSchool.includes(schoolKey) || schoolKey.includes(itemSchool));
  }).length;
};

const buildPlans = (snapshots: ClassSnapshot[], targetGrade: number): SchoolPlan[] => {
  const grouped = new Map<string, ClassSnapshot[]>();
  snapshots.forEach((item) => {
    const key = normalizeSchool(item.school);
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key)!.push(item);
  });

  return [...grouped.values()]
    .filter((classes) => classes.length >= 2)
    .map((current) => {
      const currentClassCount = current.length;
      const totalStudents = current.reduce((sum, item) => sum + item.students, 0);
      const totalEvaluated = current.reduce((sum, item) => sum + item.evaluated, 0);
      const hasVulnerability = current.every((item) => item.vulnerable !== null);
      const totalVulnerable = hasVulnerability
        ? current.reduce((sum, item) => sum + (item.vulnerable ?? 0), 0)
        : null;
      const totalNee = current.reduce((sum, item) => sum + item.nee, 0);
      const requiredClassCount = Math.max(currentClassCount, Math.ceil(totalNee / 3));
      const requiresAdditionalClasses = requiredClassCount - currentClassCount;
      const totalCritical = current.reduce((sum, item) => sum + item.critical, 0);
      const totalReaders = current.reduce((sum, item) => sum + item.readers, 0);
      const sizes = current.map((item) => item.students);
      const criticalRates = current.map((item) => percentage(item.critical, item.evaluated));
      const ifls = current.map((item) => item.ifl);
      const vulnerabilityRates = hasVulnerability
        ? current.map((item) => percentage(item.vulnerable ?? 0, item.students))
        : [];
      const sizeGap = Math.max(...sizes) - Math.min(...sizes);
      const criticalGap = Math.max(...criticalRates) - Math.min(...criticalRates);
      const iflGap = Math.max(...ifls) - Math.min(...ifls);
      const vulnerabilityGap = hasVulnerability
        ? Math.max(...vulnerabilityRates) - Math.min(...vulnerabilityRates)
        : null;

      const reasons: string[] = [];
      if (vulnerabilityGap !== null && vulnerabilityGap >= 10) reasons.push(`Bolsa Família: diferença de ${vulnerabilityGap.toFixed(1)} p.p.`);
      if (criticalGap >= 10) reasons.push(`N1/N2: diferença de ${criticalGap.toFixed(1)} p.p.`);
      if (iflGap >= 1) reasons.push(`IFL: amplitude de ${iflGap.toFixed(2)} pontos`);
      if (sizeGap >= 4) reasons.push(`Tamanho: diferença de ${sizeGap} estudantes`);
      if (requiresAdditionalClasses > 0) reasons.unshift(`Limite NEE/HD/DEF exige ${requiredClassCount} turmas (${requiresAdditionalClasses} adicional${requiresAdditionalClasses > 1 ? 'is' : ''})`);
      const score = (vulnerabilityGap ?? 0) / 10 + criticalGap / 10 + iflGap + sizeGap / 4;
      const priority: SchoolPlan['priority'] = requiresAdditionalClasses > 0 || score >= 5 ? 'Alta' : score >= 2.5 ? 'Média' : 'Baixa';

      const sizesTarget = distribute(totalStudents, requiredClassCount);
      const vulnerableTarget = totalVulnerable === null ? null : distribute(totalVulnerable, requiredClassCount);
      const neeTarget = distribute(totalNee, requiredClassCount);
      const criticalTarget = distribute(totalCritical, requiredClassCount);
      const readersTarget = distribute(totalReaders, requiredClassCount);
      const targetClasses = sizesTarget.map((students, index) => ({
        name: targetName(targetGrade, index),
        students,
        vulnerable: vulnerableTarget?.[index] ?? null,
        nee: neeTarget[index],
        critical: criticalTarget[index],
        readers: readersTarget[index],
      }));

      return {
        school: formatSchoolName(current[0].school),
        current: [...current].sort((a, b) => a.className.localeCompare(b.className, 'pt-BR', { numeric: true })),
        totalStudents,
        totalEvaluated,
        totalVulnerable,
        totalNee,
        totalCritical,
        totalReaders,
        targetClasses,
        sizeGap,
        vulnerabilityGap,
        criticalGap,
        iflGap,
        requiresAdditionalClasses,
        priority,
        reasons: reasons.length ? reasons : ['Turmas já próximas do equilíbrio esperado.'],
      };
    })
    .sort((a, b) => {
      const rank = { Alta: 0, Média: 1, Baixa: 2 };
      return rank[a.priority] - rank[b.priority] || a.school.localeCompare(b.school, 'pt-BR');
    });
};

const secondYearSnapshots: ClassSnapshot[] = DADOS_TURMAS_CAED.map((item) => {
  const vulnerability = calculateVulnerability(item.escola, item.turma, item.prev);
  return {
    school: item.escola,
    className: item.turma,
    students: item.prev,
    evaluated: item.aval,
    vulnerable: vulnerability.count,
    nee: countSecondYearNee(item.escola, item.turma),
    critical: Math.round(((item.n1 + item.n2) * item.aval) / 100),
    readers: Math.round(((item.inic + item.fluen) * item.aval) / 100),
    ifl: item.ifl,
  };
});

const thirdYearSnapshots: ClassSnapshot[] = (() => {
  const groups = new Map<string, typeof THIRD_YEAR_STUDENTS>();
  THIRD_YEAR_STUDENTS.forEach((student) => {
    const key = `${student.escola}__${student.turma}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(student);
  });
  return [...groups.values()].map((students) => {
    const evaluated = students.filter((item) => item.s1 !== 'NÃO AVALIADO');
    const score = evaluated.reduce((sum, item) => sum + (levelWeight[item.s1] ?? 0), 0);
    return {
      school: students[0].escola,
      className: students[0].turma,
      students: students.length,
      evaluated: evaluated.length,
      vulnerable: null,
      nee: students.filter((item) => isNeeStudent(item)).length,
      critical: evaluated.filter((item) => item.s1 === 'N1' || item.s1 === 'N2').length,
      readers: evaluated.filter((item) => item.s1 === 'LI' || item.s1 === 'LF').length,
      ifl: evaluated.length ? score / evaluated.length : 0,
    };
  });
})();

const TransitionButton = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button onClick={onClick} className={`rounded-xl border px-4 py-3 text-left transition ${active ? 'border-blue-600 bg-blue-600 text-white shadow-md' : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300'}`}>
    {children}
  </button>
);

export function ClassMap2027() {
  const [transition, setTransition] = useState<Transition>('2-3');
  const [priority, setPriority] = useState<'Todas' | 'Alta' | 'Média' | 'Baixa'>('Todas');
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);

  const plans = useMemo(() => {
    if (transition === '4-5') return [];
    return buildPlans(transition === '2-3' ? secondYearSnapshots : thirdYearSnapshots, transition === '2-3' ? 3 : 4);
  }, [transition]);

  const filtered = plans.filter((plan) =>
    (priority === 'Todas' || plan.priority === priority) &&
    normalizeSchool(plan.school).includes(normalizeSchool(query)),
  );

  const highPriority = plans.filter((plan) => plan.priority === 'Alta').length;
  const coveredStudents = plans.reduce((sum, plan) => sum + plan.totalStudents, 0);
  const nextGrade = transition === '2-3' ? '3º ano' : transition === '3-4' ? '4º ano' : '5º ano';

  const exportCsv = () => {
    const rows = [['Escola', 'Prioridade', 'Turma 2027', 'Estudantes', 'BF alvo', 'NEE/HD/DEF alvo', 'N1/N2 alvo', 'Leitores alvo']];
    filtered.forEach((plan) => plan.targetClasses.forEach((item) => rows.push([
      plan.school,
      plan.priority,
      item.name,
      String(item.students),
      item.vulnerable === null ? 'Base pendente' : String(item.vulnerable),
      String(item.nee),
      String(item.critical),
      String(item.readers),
    ])));
    const content = rows.map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(';')).join('\n');
    const blob = new Blob([`\uFEFF${content}`], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `mapa-turmas-2027-${transition}.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="space-y-6">
      <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 p-7 text-white shadow-xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider"><Scale className="h-4 w-4" /> Planejamento preliminar</div>
            <h2 className="text-3xl font-black">Mapa de Turmas 2027</h2>
            <p className="mt-2 text-sm leading-relaxed text-blue-100">Diretriz de recomposição para reduzir concentrações desiguais de vulnerabilidade e defasagem pedagógica entre turmas da mesma escola. O mapa apresenta metas de composição; a definição nominal deve ser validada pela unidade escolar.</p>
          </div>
          <button onClick={exportCsv} disabled={!filtered.length} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-black text-blue-900 shadow disabled:cursor-not-allowed disabled:opacity-40"><Download className="h-4 w-4" /> Exportar proposta</button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <TransitionButton active={transition === '2-3'} onClick={() => setTransition('2-3')}><strong className="block">2º → 3º ano</strong><span className="text-xs opacity-80">Leitura + Bolsa Família</span></TransitionButton>
        <TransitionButton active={transition === '3-4'} onClick={() => setTransition('3-4')}><strong className="block">3º → 4º ano</strong><span className="text-xs opacity-80">Leitura; BF pendente</span></TransitionButton>
        <TransitionButton active={transition === '4-5'} onClick={() => setTransition('4-5')}><strong className="block">4º → 5º ano</strong><span className="text-xs opacity-80">Aguardando base do 4º ano</span></TransitionButton>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
        <div className="flex gap-3"><Info className="mt-0.5 h-5 w-5 shrink-0" /><div><strong>Regra obrigatória de composição.</strong> Nenhuma turma projetada pode receber mais de 3 estudantes identificados como NEE, HD ou DEF. O modelo abre uma turma-alvo adicional quando o quantitativo existente não comporta esse limite. Também equilibra matrícula, BF, N1/N2 e leitores. Matemática ainda não está integrada ao cálculo atual.</div></div>
      </div>

      {transition !== '4-5' ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[['Escolas analisadas', plans.length, School], ['Estudantes cobertos', coveredStudents, Users], ['Prioridade alta', highPriority, AlertTriangle], ['Destino em 2027', nextGrade, BookOpen]].map(([label, value, Icon]: any) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><Icon className="mb-3 h-5 w-5 text-blue-600" /><div className="text-2xl font-black text-slate-900">{value}</div><div className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</div></div>
            ))}
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:flex-row md:items-center">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar escola" className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-200" />
            <select value={priority} onChange={(event) => setPriority(event.target.value as any)} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700"><option>Todas</option><option>Alta</option><option>Média</option><option>Baixa</option></select>
          </div>

          <div className="space-y-4">
            {filtered.map((plan) => {
              const open = expanded === plan.school;
              const priorityClass = plan.priority === 'Alta' ? 'bg-rose-100 text-rose-700' : plan.priority === 'Média' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700';
              return (
                <article key={plan.school} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <button onClick={() => setExpanded(open ? null : plan.school)} className="flex w-full flex-col gap-4 p-5 text-left lg:flex-row lg:items-center lg:justify-between">
                    <div><div className="mb-2 flex flex-wrap items-center gap-2"><span className={`rounded-full px-2.5 py-1 text-xs font-black ${priorityClass}`}>Prioridade {plan.priority.toLowerCase()}</span><span className="text-xs font-bold text-slate-500">{plan.current.length} turmas atuais</span></div><h3 className="font-black text-slate-900">{plan.school}</h3><p className="mt-1 text-xs text-slate-500">{plan.reasons.join(' • ')}</p></div>
                    <div className="flex items-center gap-5 text-sm"><div><strong className="block text-slate-900">{plan.totalStudents}</strong><span className="text-xs text-slate-500">estudantes</span></div><div><strong className="block text-slate-900">{plan.totalVulnerable ?? '—'}</strong><span className="text-xs text-slate-500">BF</span></div><div><strong className="block text-violet-700">{plan.totalNee}</strong><span className="text-xs text-slate-500">NEE/HD/DEF</span></div><ArrowRight className={`h-5 w-5 text-blue-600 transition ${open ? 'rotate-90' : ''}`} /></div>
                  </button>
                  {open && (
                    <div className="border-t border-slate-200 bg-slate-50 p-5">
                      <div className="grid gap-5 xl:grid-cols-[1fr_auto_1fr] xl:items-start">
                        <div><h4 className="mb-3 text-xs font-black uppercase tracking-wider text-slate-500">Composição atual</h4><div className="space-y-2">{plan.current.map((item) => <div key={item.className} className="grid grid-cols-5 gap-2 rounded-xl bg-white p-3 text-xs shadow-sm"><strong className="col-span-5 text-slate-900 sm:col-span-1">{item.className}</strong><span>{item.students} alunos</span><span>{item.vulnerable === null ? 'BF —' : `${item.vulnerable} BF`}</span><span className={item.nee > 3 ? 'font-black text-rose-700' : 'text-violet-700'}>{item.nee} NEE/HD/DEF</span><span>{percentage(item.critical, item.evaluated).toFixed(0)}% N1/N2</span></div>)}</div></div>
                        <div className="hidden rounded-full bg-blue-100 p-3 text-blue-700 xl:block"><Scale className="h-5 w-5" /></div>
                        <div><h4 className="mb-3 text-xs font-black uppercase tracking-wider text-blue-700">Meta equilibrada para 2027</h4><div className="space-y-2">{plan.targetClasses.map((item) => <div key={item.name} className="grid grid-cols-5 gap-2 rounded-xl border border-blue-100 bg-blue-50 p-3 text-xs"><strong className="col-span-5 text-blue-950 sm:col-span-1">{item.name}</strong><span>{item.students} alunos</span><span>{item.vulnerable === null ? 'BF pendente' : `${item.vulnerable} BF`}</span><span className="font-black text-violet-700">{item.nee} NEE/HD/DEF</span><span>{item.critical} N1/N2</span></div>)}</div></div>
                      </div>
                      <div className="mt-5 flex gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs text-emerald-900"><CheckCircle2 className="h-4 w-4 shrink-0" /><span><strong>Diretriz:</strong> distribuir os perfis alternadamente entre as turmas-alvo, respeitando o teto absoluto de 3 NEE/HD/DEF e mantendo diferença máxima de 1 estudante nos demais indicadores sempre que possível.</span></div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center"><AlertTriangle className="mx-auto mb-3 h-8 w-8 text-amber-500" /><h3 className="text-lg font-black text-slate-900">Base do 4º ano ainda não disponível</h3><p className="mx-auto mt-2 max-w-2xl text-sm text-slate-500">A transição para o 5º ano permanece no escopo municipal, mas a proposta só deve ser gerada após incorporar matrícula, leitura, matemática e Bolsa Família das turmas atuais de 4º ano.</p></div>
      )}
    </section>
  );
}
