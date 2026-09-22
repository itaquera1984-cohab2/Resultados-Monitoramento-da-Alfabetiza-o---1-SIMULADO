import { useMemo, useState } from 'react';
import {
  AlertTriangle,
  BarChart3,
  BookOpenCheck,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Database,
  Download,
  FileCheck2,
  Search,
  School,
  Users,
} from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  FIRST_YEAR_CLASSES,
  FIRST_YEAR_IMPORT_SUMMARY,
  FIRST_YEAR_STUDENTS,
} from '../data_simulado1ano';
import {
  THIRD_YEAR_CLASSES,
  THIRD_YEAR_IMPORT_SUMMARY,
  THIRD_YEAR_STUDENTS,
} from '../data_simulado3ano';
import { IFL_WEIGHTS } from '../simuladoUtils';
import { formatClassName, formatSchoolName } from '../displayFormatters';

const LEVELS = ['N1', 'N2', 'N3', 'N4', 'LI', 'LF'] as const;
const LEVEL_COLORS: Record<(typeof LEVELS)[number], string> = {
  N1: '#dc2626',
  N2: '#f59e0b',
  N3: '#2563eb',
  N4: '#0d9488',
  LI: '#65a30d',
  LF: '#059669',
};

type Tab = 'panorama' | 'escolas' | 'turmas' | 'estudantes' | 'dados';

type SimuladoStudent = {
  id: number;
  numero: number;
  name: string;
  escola: string;
  turma: string;
  s1: 'N1' | 'N2' | 'N3' | 'N4' | 'LI' | 'LF' | 'NÃO AVALIADO';
  s1Details: {
    modo: string;
    palavras: number | null;
    pseudopalavras: number | null;
    texto: number | null;
  };
};

type SimuladoClass = {
  escola: string;
  turma: string;
  sourceFile: string;
  recordCount: number;
};

type ImportSummary = {
  sourcePdfCount: number;
  schoolCount: number;
  classCount: number;
  classesWithResults: number;
  classesWithoutResults: number;
  studentCount: number;
  evaluatedCount: number;
  notEvaluatedCount: number;
};

type Aggregate = {
  key: string;
  escola: string;
  turma?: string;
  turmas: number;
  registros: number;
  avaliados: number;
  naoAvaliados: number;
  ifl: number;
  counts: Record<string, number>;
};

type SchoolClassGroup = {
  escola: string;
  rows: Aggregate[];
  total: Aggregate;
};

type IflBand = {
  label: string;
  alert: string;
  range: string;
  critical: boolean;
  valueClass: string;
  badgeClass: string;
  softClass: string;
  borderClass: string;
  iconClass: string;
};

function getIflBand(ifl: number, gradeNumber: 1 | 3): IflBand {
  if (gradeNumber === 3) {
    if (ifl >= 8) {
      return {
        label: 'Alto IFL',
        alert: 'Desempenho elevado',
        range: 'IFL igual ou superior a 8,00',
        critical: false,
        valueClass: 'text-blue-950',
        badgeClass: 'bg-blue-900 text-white',
        softClass: 'bg-blue-50 text-blue-950',
        borderClass: 'border-blue-300',
        iconClass: 'bg-blue-900',
      };
    }
    if (ifl >= 6) {
      return {
        label: 'IFL consolidado',
        alert: 'Desempenho esperado',
        range: 'IFL entre 6,00 e 7,99',
        critical: false,
        valueClass: 'text-emerald-800',
        badgeClass: 'bg-emerald-700 text-white',
        softClass: 'bg-emerald-50 text-emerald-950',
        borderClass: 'border-emerald-300',
        iconClass: 'bg-emerald-700',
      };
    }
    return {
      label: 'IFL em consolidação',
      alert: 'Atenção pedagógica',
      range: 'IFL abaixo de 6,00',
      critical: false,
      valueClass: 'text-amber-700',
      badgeClass: 'border border-amber-300 bg-amber-100 text-amber-950',
      softClass: 'bg-amber-50 text-amber-950',
      borderClass: 'border-amber-300',
      iconClass: 'bg-amber-600',
    };
  }
  if (ifl >= 5) {
    return {
      label: 'IFL em consolidação',
      alert: 'Resultado em consolidação',
      range: 'IFL igual ou superior a 5,00',
      critical: false,
      valueClass: 'text-emerald-800',
      badgeClass: 'bg-emerald-700 text-white',
      softClass: 'bg-emerald-50 text-emerald-900',
      borderClass: 'border-emerald-300',
      iconClass: 'bg-emerald-700',
    };
  }
  if (ifl >= 3) {
    return {
      label: 'IFL em desenvolvimento',
      alert: 'Atenção pedagógica',
      range: 'IFL entre 3,00 e 4,99',
      critical: false,
      valueClass: 'text-amber-700',
      badgeClass: 'border border-amber-300 bg-amber-100 text-amber-950',
      softClass: 'bg-amber-50 text-amber-950',
      borderClass: 'border-amber-300',
      iconClass: 'bg-amber-600',
    };
  }
  return {
    label: 'IFL crítico',
    alert: 'Alerta crítico',
    range: 'IFL abaixo de 3,00',
    critical: true,
    valueClass: 'text-red-700',
    badgeClass: 'bg-red-600 text-white',
    softClass: 'bg-red-50 text-red-950',
    borderClass: 'border-red-300',
    iconClass: 'bg-red-600',
  };
}

function IflBadge({ ifl, gradeNumber, compact = false }: { ifl: number; gradeNumber: 1 | 3; compact?: boolean }) {
  const band = getIflBand(ifl, gradeNumber);
  return (
    <div className={`flex items-center justify-center ${compact ? 'gap-1.5' : 'gap-2'}`}>
      <span className={`inline-flex items-center gap-1 rounded-lg px-3 py-1 text-xs font-black shadow-sm ${band.badgeClass}`}>
        {band.critical && <AlertTriangle className="h-3.5 w-3.5" />}
        {ifl.toFixed(2)}
      </span>
      <span className={`rounded-full px-2 py-1 text-[10px] font-black uppercase tracking-wide ${band.softClass}`}>
        {band.critical ? band.alert : gradeNumber === 3 && ifl < 6 ? 'Em consolidação • Atenção' : band.label}
      </span>
    </div>
  );
}

function aggregateStudents(students: SimuladoStudent[], byClass = false): Aggregate[] {
  const groups = new Map<string, SimuladoStudent[]>();
  students.forEach((student) => {
    const key = byClass ? `${student.escola}|||${student.turma}` : student.escola;
    const group = groups.get(key) ?? [];
    group.push(student);
    groups.set(key, group);
  });

  return Array.from(groups.entries()).map(([key, group]) => {
    const evaluated = group.filter((student) => student.s1 !== 'NÃO AVALIADO');
    const counts = Object.fromEntries(
      LEVELS.map((level) => [level, evaluated.filter((student) => student.s1 === level).length]),
    );
    const ifl = evaluated.length
      ? evaluated.reduce((sum, student) => sum + (IFL_WEIGHTS[student.s1] ?? 0), 0) / evaluated.length
      : 0;
    return {
      key,
      escola: group[0].escola,
      turma: byClass ? group[0].turma : undefined,
      turmas: new Set(group.map((student) => student.turma)).size,
      registros: group.length,
      avaliados: evaluated.length,
      naoAvaliados: group.length - evaluated.length,
      ifl,
      counts,
    };
  });
}

function percentage(count: number, total: number) {
  return total ? (count / total) * 100 : 0;
}

function downloadCsv(rows: SimuladoStudent[], gradeNumber: 1 | 3) {
  const header = ['Escola', 'Turma', 'Número', 'Estudante', 'Nível', 'Modo', 'Palavras', 'Pseudopalavras', 'Texto'];
  const body = rows.map((student) => [
    student.escola,
    student.turma,
    student.numero,
    student.name,
    student.s1,
    student.s1Details.modo,
    student.s1Details.palavras ?? '',
    student.s1Details.pseudopalavras ?? '',
    student.s1Details.texto ?? '',
  ]);
  const csv = [header, ...body]
    .map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(';'))
    .join('\r\n');
  const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `fluencia-leitora-${gradeNumber}-ano-1-simulado-2026.csv`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function LevelBadge({ level }: { level: string }) {
  if (level === 'NÃO AVALIADO') {
    return <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-black text-slate-500">NÃO AVALIADO</span>;
  }
  return (
    <span
      className="rounded-full px-2.5 py-1 text-[11px] font-black text-white"
      style={{ backgroundColor: LEVEL_COLORS[level as keyof typeof LEVEL_COLORS] ?? '#64748b' }}
    >
      {level}
    </span>
  );
}

function MetricCard({ icon: Icon, label, value, detail, color }: { icon: typeof Users; label: string; value: string; detail: string; color: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-wider text-slate-400">{label}</p>
          <p className="mt-2 text-3xl font-black text-slate-900">{value}</p>
          <p className="mt-1 text-xs font-semibold text-slate-500">{detail}</p>
        </div>
        <div className={`rounded-xl p-3 text-white ${color}`}><Icon className="h-6 w-6" /></div>
      </div>
    </div>
  );
}

function IflMetricCard({ ifl, gradeNumber }: { ifl: number; gradeNumber: 1 | 3 }) {
  const band = getIflBand(ifl, gradeNumber);
  return (
    <div className={`rounded-2xl border-2 bg-white p-5 shadow-sm ${band.borderClass}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-wider text-slate-400">IFL da rede</p>
          <p className={`mt-2 text-3xl font-black ${band.valueClass}`}>{ifl.toFixed(2)}</p>
          <p className={`mt-1 text-xs font-black uppercase ${band.valueClass}`}>{band.alert}</p>
          <p className="mt-1 text-xs font-semibold text-slate-500">{band.label} • 1º Simulado</p>
        </div>
        <div className={`rounded-xl p-3 text-white ${band.iconClass}`}>
          {band.critical ? <AlertTriangle className="h-6 w-6" /> : <BarChart3 className="h-6 w-6" />}
        </div>
      </div>
    </div>
  );
}

function SimuladoGradeDashboard({
  gradeNumber,
  students,
  classesData,
  summary,
  conflictNote,
}: {
  gradeNumber: 1 | 3;
  students: SimuladoStudent[];
  classesData: readonly SimuladoClass[];
  summary: ImportSummary;
  conflictNote?: { escola: string; turma: string; detail: string };
}) {
  const gradeLabel = `${gradeNumber}º`;
  const [activeTab, setActiveTab] = useState<Tab>('panorama');
  const [schoolFilter, setSchoolFilter] = useState('TODAS');
  const [classFilter, setClassFilter] = useState('TODAS');
  const [levelFilter, setLevelFilter] = useState('TODOS');
  const [search, setSearch] = useState('');
  const [collapsedSchools, setCollapsedSchools] = useState<Record<string, boolean>>({});

  const evaluated = useMemo(
    () => students.filter((student) => student.s1 !== 'NÃO AVALIADO'),
    [students],
  );
  const schools = useMemo(
    () => [...new Set(classesData.map((item) => item.escola))].sort((a, b) => a.localeCompare(b, 'pt-BR')),
    [classesData],
  );
  const classes = useMemo(
    () => classesData.filter((item) => schoolFilter === 'TODAS' || item.escola === schoolFilter)
      .map((item) => item.turma)
      .filter((value, index, array) => array.indexOf(value) === index)
      .sort((a, b) => a.localeCompare(b, 'pt-BR')),
    [schoolFilter, classesData],
  );
  const levelData = useMemo(
    () => LEVELS.map((level) => ({
      level,
      count: evaluated.filter((student) => student.s1 === level).length,
      color: LEVEL_COLORS[level],
    })),
    [evaluated],
  );
  const municipalIfl = useMemo(
    () => evaluated.reduce((sum, student) => sum + (IFL_WEIGHTS[student.s1] ?? 0), 0) / evaluated.length,
    [evaluated],
  );
  const consolidatedReaders = useMemo(
    () => evaluated.filter((student) => student.s1 === 'LI' || student.s1 === 'LF').length,
    [evaluated],
  );
  const consolidatedReadersPercentage = percentage(consolidatedReaders, evaluated.length);
  const iflLegendReferences = gradeNumber === 3 ? [8, 6, 5.99] : [5, 3, 2.99];
  const schoolRows = useMemo(
    () => aggregateStudents(students).sort((a, b) => b.ifl - a.ifl || a.escola.localeCompare(b.escola, 'pt-BR')),
    [students],
  );
  const classRows = useMemo(() => {
    const rows = new Map(aggregateStudents(students, true).map((row) => [row.key, row]));
    return classesData.map((item) => rows.get(`${item.escola}|||${item.turma}`) ?? {
      key: `${item.escola}|||${item.turma}`,
      escola: item.escola,
      turma: item.turma,
      turmas: 1,
      registros: 0,
      avaliados: 0,
      naoAvaliados: 0,
      ifl: 0,
      counts: Object.fromEntries(LEVELS.map((level) => [level, 0])),
    }).sort((a, b) => a.escola.localeCompare(b.escola, 'pt-BR') || (a.turma ?? '').localeCompare(b.turma ?? '', 'pt-BR'));
  }, [students, classesData]);
  const schoolClassGroups = useMemo<SchoolClassGroup[]>(() => {
    const grouped = new Map<string, Aggregate[]>();
    classRows.forEach((row) => {
      const rows = grouped.get(row.escola) ?? [];
      rows.push(row);
      grouped.set(row.escola, rows);
    });

    return Array.from(grouped.entries()).map(([escola, rows]) => {
      const avaliados = rows.reduce((sum, row) => sum + row.avaliados, 0);
      const registros = rows.reduce((sum, row) => sum + row.registros, 0);
      const counts = Object.fromEntries(
        LEVELS.map((level) => [level, rows.reduce((sum, row) => sum + row.counts[level], 0)]),
      );
      return {
        escola,
        rows,
        total: {
          key: escola,
          escola,
          turmas: rows.length,
          registros,
          avaliados,
          naoAvaliados: registros - avaliados,
          ifl: avaliados
            ? rows.reduce((sum, row) => sum + (row.ifl * row.avaliados), 0) / avaliados
            : 0,
          counts,
        },
      };
    }).sort((a, b) => a.escola.localeCompare(b.escola, 'pt-BR'));
  }, [classRows]);
  const filteredStudents = useMemo(() => {
    const term = search.trim().toLocaleUpperCase('pt-BR');
    return students.filter((student) =>
      (schoolFilter === 'TODAS' || student.escola === schoolFilter)
      && (classFilter === 'TODAS' || student.turma === classFilter)
      && (levelFilter === 'TODOS' || student.s1 === levelFilter)
      && (!term || student.name.toLocaleUpperCase('pt-BR').includes(term)),
    );
  }, [schoolFilter, classFilter, levelFilter, search, students]);

  const tabs: Array<{ id: Tab; label: string }> = [
    { id: 'panorama', label: 'Visão Geral' },
    { id: 'escolas', label: 'Escolas' },
    { id: 'turmas', label: 'Turmas' },
    { id: 'estudantes', label: 'Estudantes' },
    { id: 'dados', label: 'Sobre os dados' },
  ];

  const renderAggregateTable = (rows: Aggregate[], showClass: boolean) => (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className={`${gradeNumber === 3 ? 'min-w-[1180px]' : 'min-w-[1050px]'} w-full text-left text-sm`}>
        <thead className="bg-slate-900 text-xs uppercase tracking-wide text-white">
          <tr>
            <th className="px-4 py-3">Escola</th>
            {showClass && <th className="px-4 py-3">Turma</th>}
            {!showClass && <th className="px-4 py-3 text-center">Turmas</th>}
            <th className="px-4 py-3 text-center">Avaliados</th>
            {LEVELS.map((level) => <th key={level} className="px-3 py-3 text-center">{level}</th>)}
            {gradeNumber === 3 && <th className="px-4 py-3 text-center">Leitores (LI + LF)</th>}
            <th className="px-4 py-3 text-center">IFL / sinalização</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row) => (
            <tr key={row.key} className="hover:bg-slate-50">
              <td className="px-4 py-3 font-bold text-slate-800">{row.escola}</td>
              {showClass && <td className="px-4 py-3 font-semibold text-slate-600">{row.turma}</td>}
              {!showClass && <td className="px-4 py-3 text-center font-bold text-slate-600">{row.turmas}</td>}
              <td className="px-4 py-3 text-center font-black text-slate-800">{row.avaliados || '—'}</td>
              {LEVELS.map((level) => (
                <td key={level} className="px-3 py-3 text-center font-semibold text-slate-600">
                  {row.avaliados ? `${percentage(row.counts[level], row.avaliados).toFixed(1)}%` : '—'}
                </td>
              ))}
              {gradeNumber === 3 && (
                <td className="px-4 py-3 text-center font-black text-emerald-800">
                  {row.avaliados ? `${percentage(row.counts.LI + row.counts.LF, row.avaliados).toFixed(1)}%` : '—'}
                </td>
              )}
              <td className="px-4 py-3 text-center">
                {row.avaliados ? <IflBadge ifl={row.ifl} gradeNumber={gradeNumber} compact /> : <span className="font-black text-slate-400">—</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderLevelCell = (row: Aggregate, level: (typeof LEVELS)[number]) => (
    <td key={level} className="px-3 py-3.5 text-center font-bold" style={{ color: LEVEL_COLORS[level] }}>
      <div>{row.avaliados ? `${percentage(row.counts[level], row.avaliados).toFixed(1)}%` : '—'}</div>
      {row.avaliados > 0 && <span className="block text-[10px] font-semibold text-slate-400">{row.counts[level]} al.</span>}
    </td>
  );

  const renderSchoolClassCards = () => (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Turmas agrupadas por escola</h2>
          <p className="mt-1 text-sm font-semibold text-slate-500">Resultados exclusivos do 1º Simulado, sem comparação com avaliação de entrada.</p>
        </div>
        <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 p-1">
          <button type="button" onClick={() => setCollapsedSchools({})} className="flex items-center gap-1 rounded-lg bg-white px-3 py-1.5 text-xs font-black text-slate-700 shadow-sm">
            <ChevronDown className="h-3.5 w-3.5 text-blue-700" /> Expandir todas
          </button>
          <button
            type="button"
            onClick={() => setCollapsedSchools(Object.fromEntries(schoolClassGroups.map((group) => [group.escola, true])))}
            className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-600"
          >
            <ChevronUp className="h-3.5 w-3.5" /> Recolher todas
          </button>
        </div>
      </div>

      {schoolClassGroups.map((group) => {
        const isCollapsed = !!collapsedSchools[group.escola];
        const readers = group.total.counts.LI + group.total.counts.LF;
        return (
          <article key={group.escola} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-slate-300">
            <button
              type="button"
              onClick={() => setCollapsedSchools((current) => ({ ...current, [group.escola]: !current[group.escola] }))}
              className="flex w-full flex-col gap-4 border-b border-slate-200 bg-slate-50/90 p-5 text-left transition hover:bg-slate-100/80 md:flex-row md:items-center md:justify-between sm:p-6"
            >
              <div className="flex min-w-0 flex-1 items-center gap-3.5">
                <span className="shrink-0 rounded-2xl border border-blue-200 bg-blue-100 p-3 text-blue-900"><School className="h-5 w-5" /></span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-black tracking-tight text-slate-800 sm:text-lg">{formatSchoolName(group.escola)}</h3>
                    <span className="rounded-md border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[11px] font-black text-blue-900">
                      {group.rows.length} {group.rows.length === 1 ? 'Turma' : 'Turmas'}
                    </span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-400">Turmas:</span>
                    {group.rows.map((row) => <span key={row.key} className="rounded border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-bold text-slate-700">{formatClassName(row.turma ?? '', gradeNumber)}</span>)}
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 items-center justify-between gap-4 border-t border-slate-200/60 pt-2 md:justify-end md:border-0 md:pt-0">
                <div className="text-right"><div className="text-[10px] font-black uppercase text-slate-400">Avaliados</div><div className="text-xs font-black text-slate-700">{group.total.avaliados} alunos</div></div>
                <div className="hidden text-right sm:block"><div className="text-[10px] font-black uppercase text-slate-400">Leitores</div><div className="text-xs font-black text-teal-800">{percentage(readers, group.total.avaliados).toFixed(1)}%</div></div>
                <div className="text-right"><div className="text-[10px] font-black uppercase text-slate-400">IFL geral</div>{group.total.avaliados ? <IflBadge ifl={group.total.ifl} gradeNumber={gradeNumber} compact /> : <span className="font-black text-slate-400">—</span>}</div>
                <span className="rounded-xl border border-slate-200 bg-white p-1.5 text-slate-500">{isCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}</span>
              </div>
            </button>

            {!isCollapsed && (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[1000px] whitespace-nowrap text-left text-sm">
                  <thead className="border-b border-slate-200 bg-slate-100/60 text-[11px] font-black uppercase text-slate-500">
                    <tr>
                      <th className="px-6 py-3.5 text-slate-700">Turma</th><th className="px-3 py-3.5 text-center">Aval.</th><th className="px-3 py-3.5 text-center">% Part.</th>
                      {LEVELS.map((level) => <th key={level} className="px-3 py-3.5 text-center" style={{ color: LEVEL_COLORS[level] }}>{level === 'LI' ? 'Inic.' : level === 'LF' ? 'Fluen.' : level}</th>)}
                      <th className="border-l border-blue-100 bg-blue-50/60 px-5 py-3.5 text-center text-blue-950">IFL</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {group.rows.map((row) => (
                      <tr key={row.key} className="transition hover:bg-slate-50/80">
                        <td className="px-6 py-3.5"><span className="rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-black tracking-wide text-blue-900">{formatClassName(row.turma ?? '', gradeNumber)}</span>{!row.avaliados && <span className="ml-2 rounded border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-700">Sem resultados</span>}</td>
                        <td className="px-3 py-3.5 text-center font-bold text-slate-600">{row.avaliados || '—'}</td>
                        <td className="px-3 py-3.5 text-center"><span className={`inline-flex rounded-lg border px-2.5 py-0.5 text-xs font-black ${percentage(row.avaliados, row.registros) >= 95 ? 'border-emerald-200 bg-emerald-100 text-emerald-800' : percentage(row.avaliados, row.registros) >= 80 ? 'border-amber-200 bg-amber-100 text-amber-800' : 'border-red-200 bg-red-100 text-red-800'}`}>{row.registros ? `${percentage(row.avaliados, row.registros).toFixed(1)}%` : '—'}</span></td>
                        {LEVELS.map((level) => renderLevelCell(row, level))}
                        <td className="border-l border-blue-100 bg-blue-50/40 px-5 py-3.5 text-center">{row.avaliados ? <IflBadge ifl={row.ifl} gradeNumber={gradeNumber} compact /> : <span className="font-black text-slate-400">—</span>}</td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-slate-200 bg-slate-100/80 font-black text-slate-800">
                      <td className="px-6 py-3.5 text-xs uppercase tracking-wide"><span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-blue-700" />Total da escola</span></td>
                      <td className="px-3 py-3.5 text-center">{group.total.avaliados || '—'}</td>
                      <td className="px-3 py-3.5 text-center">{group.total.registros ? `${percentage(group.total.avaliados, group.total.registros).toFixed(1)}%` : '—'}</td>
                      {LEVELS.map((level) => renderLevelCell(group.total, level))}
                      <td className="border-l border-blue-100 bg-blue-100/70 px-5 py-3.5 text-center">{group.total.avaliados ? <IflBadge ifl={group.total.ifl} gradeNumber={gradeNumber} compact /> : '—'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white px-5 py-6 shadow-sm">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <img src="/brasao.png" alt="Brasão de Pindamonhangaba" className="h-16 w-16 object-contain" />
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-700">Rede Municipal de Pindamonhangaba</p>
              <h1 className="text-2xl font-black text-slate-900">Fluência Leitora — {gradeLabel} Ano</h1>
              <p className="text-sm font-semibold text-slate-500">1º Simulado Municipal • 2026</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => downloadCsv(students, gradeNumber)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-black text-white shadow-sm transition hover:bg-blue-800"
          >
            <Download className="h-4 w-4" /> Exportar dados do {gradeLabel} ano
          </button>
        </div>
      </header>

      <nav className="border-b border-slate-200 bg-white px-5">
        <div className="mx-auto flex max-w-[1500px] gap-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-black transition ${activeTab === tab.id ? 'border-blue-700 text-blue-700' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-[1500px] space-y-6 px-5 py-8">
        {activeTab === 'panorama' && (
          <>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4 text-sm font-semibold text-blue-950">
              Este recorte consolida exclusivamente o 1º Simulado. O {gradeLabel} ano não possui avaliação de entrada; por isso, não são calculadas evolução, variação ou taxa de avanço.
            </div>
            <section className={`grid gap-4 sm:grid-cols-2 ${gradeNumber === 3 ? 'xl:grid-cols-5' : 'xl:grid-cols-4'}`}>
              <MetricCard icon={Building2} label="Escolas" value={String(summary.schoolCount)} detail="unidades com relatórios" color="bg-blue-700" />
              <MetricCard icon={School} label="Turmas" value={String(summary.classCount)} detail={`${summary.classesWithResults} com resultados`} color="bg-violet-700" />
              <MetricCard icon={Users} label="Avaliados" value={summary.evaluatedCount.toLocaleString('pt-BR')} detail={`${summary.notEvaluatedCount} registros sem avaliação`} color="bg-emerald-700" />
              {gradeNumber === 3 && <MetricCard icon={BookOpenCheck} label="Leitores (LI + LF)" value={`${consolidatedReadersPercentage.toFixed(1)}%`} detail={`${consolidatedReaders.toLocaleString('pt-BR')} leitores consolidados`} color="bg-teal-700" />}
              <IflMetricCard ifl={municipalIfl} gradeNumber={gradeNumber} />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-lg font-black text-slate-900">Sinalização pedagógica do IFL</h2>
                  <p className="text-sm font-semibold text-slate-500">{gradeNumber === 3 ? 'Régua exclusiva do 3º ano, considerando a expectativa de consolidação entre Leitores Iniciantes e Fluentes.' : 'Régua exclusiva do 1º ano, adequada ao momento inicial do processo de alfabetização.'}</p>
                </div>
                <p className="text-xs font-black uppercase tracking-wide text-slate-400">Sem comparação com Entrada</p>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {iflLegendReferences.map((reference) => {
                  const band = getIflBand(reference, gradeNumber);
                  return (
                    <div key={reference} className={`rounded-xl border p-4 ${band.borderClass} ${band.softClass}`}>
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-black">{band.label}</p>
                        {band.critical && <AlertTriangle className="h-5 w-5 text-red-600" />}
                      </div>
                      <p className="mt-1 text-xs font-bold uppercase tracking-wide">{band.alert}</p>
                      <p className="mt-2 text-xs font-semibold opacity-80">{band.range}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-black text-slate-900">Distribuição por nível</h2>
                <p className="text-sm font-medium text-slate-500">Percentuais calculados sobre os {summary.evaluatedCount.toLocaleString('pt-BR')} estudantes avaliados.</p>
                <div className="mt-5 h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={levelData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="level" />
                      <YAxis allowDecimals={false} />
                      <Tooltip formatter={(value) => [`${Number(value).toLocaleString('pt-BR')} estudantes`, 'Quantidade']} />
                      <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                        {levelData.map((item) => <Cell key={item.level} fill={item.color} />)}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-black text-slate-900">Composição percentual</h2>
                <p className="text-sm font-medium text-slate-500">Leitura da rede no momento do 1º Simulado.</p>
                <div className="mt-5 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={levelData} dataKey="count" nameKey="level" innerRadius={55} outerRadius={95} paddingAngle={2}>
                        {levelData.map((item) => <Cell key={item.level} fill={item.color} />)}
                      </Pie>
                      <Tooltip formatter={(value) => [`${Number(value).toLocaleString('pt-BR')} estudantes`, 'Quantidade']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {levelData.map((item) => (
                    <div key={item.level} className="rounded-xl bg-slate-50 p-3">
                      <div className="flex items-center gap-2 text-xs font-black text-slate-600"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />{item.level}</div>
                      <p className="mt-1 text-lg font-black text-slate-900">{percentage(item.count, evaluated.length).toFixed(1)}%</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === 'escolas' && (
          <section className="space-y-4">
            <div><h2 className="text-2xl font-black">Resultados por escola</h2><p className="text-sm font-semibold text-slate-500">Ordenação inicial pelo IFL do 1º Simulado.</p></div>
            {renderAggregateTable(schoolRows, false)}
          </section>
        )}

        {activeTab === 'turmas' && (
          <section className="space-y-4">
            <div><h2 className="text-2xl font-black">Resultados por turma</h2><p className="text-sm font-semibold text-slate-500">As {summary.classesWithoutResults} turmas com relatório vazio aparecem sem indicadores.</p></div>
            {renderSchoolClassCards()}
          </section>
        )}

        {activeTab === 'estudantes' && (
          <section className="space-y-4">
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:flex-row">
              <label className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar estudante" className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-3 text-sm font-semibold outline-none focus:border-blue-500" />
              </label>
              <select value={schoolFilter} onChange={(event) => { setSchoolFilter(event.target.value); setClassFilter('TODAS'); }} className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-bold">
                <option value="TODAS">Todas as escolas</option>{schools.map((school) => <option key={school}>{school}</option>)}
              </select>
              <select value={classFilter} onChange={(event) => setClassFilter(event.target.value)} className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-bold">
                <option value="TODAS">Todas as turmas</option>{classes.map((turma) => <option key={turma}>{turma}</option>)}
              </select>
              <select value={levelFilter} onChange={(event) => setLevelFilter(event.target.value)} className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-bold">
                <option value="TODOS">Todos os níveis</option>{[...LEVELS, 'NÃO AVALIADO'].map((level) => <option key={level}>{level}</option>)}
              </select>
            </div>
            <p className="text-sm font-bold text-slate-500">{filteredStudents.length.toLocaleString('pt-BR')} registros encontrados</p>
            <div className="max-h-[720px] overflow-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-[1050px] w-full text-left text-sm">
                <thead className="sticky top-0 bg-slate-900 text-xs uppercase text-white"><tr><th className="px-4 py-3">Estudante</th><th className="px-4 py-3">Escola</th><th className="px-4 py-3">Turma</th><th className="px-4 py-3 text-center">Nível</th><th className="px-4 py-3">Modo</th><th className="px-4 py-3 text-center">Palavras</th><th className="px-4 py-3 text-center">Pseudopalavras</th><th className="px-4 py-3 text-center">Texto</th></tr></thead>
                <tbody className="divide-y divide-slate-100">{filteredStudents.map((student) => <tr key={student.id} className="hover:bg-slate-50"><td className="px-4 py-3 font-bold">{student.name}</td><td className="px-4 py-3 text-xs font-semibold text-slate-600">{student.escola}</td><td className="px-4 py-3 font-semibold">{student.turma}</td><td className="px-4 py-3 text-center"><LevelBadge level={student.s1} /></td><td className="px-4 py-3 font-semibold text-slate-600">{student.s1Details.modo}</td><td className="px-4 py-3 text-center">{student.s1Details.palavras ?? '—'}</td><td className="px-4 py-3 text-center">{student.s1Details.pseudopalavras ?? '—'}</td><td className="px-4 py-3 text-center">{student.s1Details.texto ?? '—'}</td></tr>)}</tbody>
              </table>
            </div>
          </section>
        )}

        {activeTab === 'dados' && (
          <section className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3"><Database className="h-6 w-6 text-blue-700" /><h2 className="text-xl font-black">Escopo da base</h2></div>
              <dl className="mt-5 space-y-3 text-sm"><div className="flex justify-between"><dt className="font-semibold text-slate-500">Relatórios PDF</dt><dd className="font-black">{summary.sourcePdfCount}</dd></div><div className="flex justify-between"><dt className="font-semibold text-slate-500">Turmas com resultados</dt><dd className="font-black">{summary.classesWithResults}</dd></div><div className="flex justify-between"><dt className="font-semibold text-slate-500">Turmas sem resultados no relatório</dt><dd className="font-black">{summary.classesWithoutResults}</dd></div><div className="flex justify-between"><dt className="font-semibold text-slate-500">Registros nominais</dt><dd className="font-black">{summary.studentCount.toLocaleString('pt-BR')}</dd></div><div className="flex justify-between"><dt className="font-semibold text-slate-500">Resultados classificados</dt><dd className="font-black">{summary.evaluatedCount.toLocaleString('pt-BR')}</dd></div></dl>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-center gap-3"><AlertTriangle className="h-6 w-6 text-amber-700" /><h2 className="text-xl font-black text-amber-950">Regras de leitura</h2></div>
              <ul className="mt-5 space-y-3 text-sm font-semibold leading-relaxed text-amber-950"><li className="flex gap-2"><FileCheck2 className="mt-0.5 h-4 w-4 shrink-0" />Os percentuais usam apenas estudantes com resultado válido.</li><li className="flex gap-2"><BookOpenCheck className="mt-0.5 h-4 w-4 shrink-0" />A classificação aplica a mesma matriz municipal N1, N2, N3, N4, LI e LF.</li><li className="flex gap-2"><Users className="mt-0.5 h-4 w-4 shrink-0" />Ausência ou atestado explicitamente informados não são classificados como N1.</li><li className="flex gap-2"><BarChart3 className="mt-0.5 h-4 w-4 shrink-0" />Não há avaliação de entrada; portanto, nenhuma evolução é inferida.</li></ul>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-white p-6 shadow-sm lg:col-span-2">
              <div className="flex items-center gap-3"><AlertTriangle className="h-6 w-6 text-rose-700" /><h2 className="text-xl font-black">Pendências registradas na fonte</h2></div>
              <p className="mt-2 text-sm font-semibold text-slate-500">Estes casos foram preservados na auditoria e não receberam preenchimento presumido.</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {classesData.filter((item) => item.recordCount === 0).map((item) => (
                  <div key={item.sourceFile} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-black text-slate-800">{item.escola}</p>
                    <p className="text-sm font-bold text-slate-500">{item.turma} • relatório sem registros</p>
                  </div>
                ))}
                {conflictNote && <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
                  <p className="font-black text-rose-900">{conflictNote.escola}</p>
                  <p className="text-sm font-bold text-rose-700">{conflictNote.turma} • {conflictNote.detail}</p>
                </div>}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export function FirstYearDashboard() {
  return <SimuladoGradeDashboard
    gradeNumber={1}
    students={FIRST_YEAR_STUDENTS}
    classesData={FIRST_YEAR_CLASSES}
    summary={FIRST_YEAR_IMPORT_SUMMARY}
    conflictNote={{
      escola: 'Lauro Vicente de Azevedo',
      turma: '1º Ano A',
      detail: 'uma linha informa “Não leu” e “N3”; aplicada a precedência qualitativa N1.',
    }}
  />;
}

export function ThirdYearDashboard() {
  return <SimuladoGradeDashboard
    gradeNumber={3}
    students={THIRD_YEAR_STUDENTS}
    classesData={THIRD_YEAR_CLASSES}
    summary={THIRD_YEAR_IMPORT_SUMMARY}
  />;
}
