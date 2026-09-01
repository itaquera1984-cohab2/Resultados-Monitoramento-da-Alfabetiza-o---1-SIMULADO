/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  School, 
  Award, 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  Users, 
  BookOpen, 
  CheckCircle, 
  CheckCircle2,
  Sparkles,
  ChevronDown, 
  ChevronUp, 
  Lightbulb, 
  Calendar,
  Layers,
  GraduationCap,
  Activity,
  FileSpreadsheet
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  Line, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { 
  SchoolSimuladoSummary, 
  StudentRecord,
  getSchoolSimuladoStats,
  getMunicipalSimuladoStats
} from '../simuladoUtils';
import { calculateEvolutionDelta, formatSchoolName } from '../constants';

const getEvolutionBadge = (start?: string, end?: string) => {
  return calculateEvolutionDelta(start, end);
};

export const formatSchoolShortName = (name: string): string => {
  if (!name) return "";
  let formatted = formatSchoolName(name).trim();
  
  // Standardize prefix to E.M.
  formatted = formatted.replace(/^(ESCOLA MUNICIPAL|ESCOLA MUN|EMEI|EMEF|EM)\s+/gi, "E.M. ");
  
  // Standardize honorific titles
  formatted = formatted.replace(/\bPROFESSORA\b/gi, "PROFª");
  formatted = formatted.replace(/\bPROFA\b/gi, "PROFª");
  formatted = formatted.replace(/\bPROFESSOR\b/gi, "PROF.");
  formatted = formatted.replace(/\bPROF\b/gi, "PROF.");
  formatted = formatted.replace(/\bDOUTOR\b/gi, "DR.");
  formatted = formatted.replace(/\bPADRE\b/gi, "PE.");
  
  // Ensure "E.M." prefix exists
  if (!/^E\.M\./i.test(formatted)) {
    formatted = `E.M. ${formatted}`;
  }
  
  // Clean up double spaces or redundant tokens
  formatted = formatted.replace(/\s+/g, " ").replace(/E\.M\.\s*E\.M\./gi, "E.M.");
  
  return formatted;
};

interface SchoolReportViewProps {
  schoolsData: any[];
  selectedSchoolName: string;
  onSelectSchool: (name: string) => void;
  studentsData: StudentRecord[];
  schoolSimuladoStatsMap: Map<string, SchoolSimuladoSummary>;
  municipalSimuladoStats: ReturnType<typeof getMunicipalSimuladoStats>;
  currentMunicipality: any;
}

export const SchoolReportView: React.FC<SchoolReportViewProps> = ({
  schoolsData,
  selectedSchoolName,
  onSelectSchool,
  studentsData,
  schoolSimuladoStatsMap,
  municipalSimuladoStats,
  currentMunicipality
}) => {
  // Ensure selected school is valid
  const activeSchoolName = selectedSchoolName || schoolsData[0]?.name || '';
  
  // State for turma filter inside the school report if needed, defaults to TODAS
  const [selectedTurma, setSelectedTurma] = useState<string>("TODAS");
  
  // State for class card expansion in block 4 (default expanded = true)
  const [isClassCardExpanded, setIsClassCardExpanded] = useState<boolean>(true);

  // Get current school raw caed data
  const caedSchool = useMemo(() => {
    return schoolsData.find(s => s.name === activeSchoolName) || schoolsData[0] || {};
  }, [schoolsData, activeSchoolName]);

  // Get current school simulado stats
  const simStats: SchoolSimuladoSummary | undefined = useMemo(() => {
    return schoolSimuladoStatsMap.get(activeSchoolName);
  }, [schoolSimuladoStatsMap, activeSchoolName]);

  // Students of current school
  const schoolStudents = useMemo(() => {
    return studentsData.filter(s => s.escola === activeSchoolName);
  }, [studentsData, activeSchoolName]);

  // Turmas list for selector and breakdown
  const turmasList = useMemo(() => {
    if (simStats && simStats.turmas.length > 0) {
      return simStats.turmas;
    }
    return [];
  }, [simStats]);

  // Available turmas names
  const availableTurmas = useMemo(() => {
    const set = new Set<string>();
    schoolStudents.forEach(s => {
      if (s.turma) set.add(s.turma);
    });
    return ["TODAS", ...Array.from(set).sort()];
  }, [schoolStudents]);

  // Evolution calculations (Donut and 6 KPI Cards)
  const evolutionSummary = useMemo(() => {
    const studentsToAnalyze = selectedTurma === "TODAS" 
      ? schoolStudents 
      : schoolStudents.filter(s => s.turma === selectedTurma);

    const total = studentsToAnalyze.length;
    let excepcional = 0;
    let expressivo = 0;
    let pontual = 0;
    let estavel = 0;
    let atencao = 0;
    let naoAvaliado = 0;

    studentsToAnalyze.forEach(s => {
      const badge = getEvolutionBadge(s.entrada, s.s1);
      if (badge.tier === "excepcional") excepcional++;
      else if (badge.tier === "expressivo") expressivo++;
      else if (badge.tier === "pontual") pontual++;
      else if (badge.tier === "estavel") estavel++;
      else if (badge.tier === "atencao") atencao++;
      else naoAvaliado++;
    });

    const avaliados = total - naoAvaliado;
    const avancaram = excepcional + expressivo + pontual;
    const taxaAvanco = avaliados > 0 ? ((avancaram / avaliados) * 100).toFixed(1) : "0.0";

    const chartData = [
      { name: "Avanço Excepcional (≥ +3)", shortName: "Excepcional", value: excepcional, color: "#2563eb", tier: "EXCEPCIONAL" },
      { name: "Avanço Expressivo (+2)", shortName: "Expressivo", value: expressivo, color: "#059669", tier: "EXPRESSIVO" },
      { name: "Avanço Pontual (+1)", shortName: "Pontual", value: pontual, color: "#f59e0b", tier: "PONTUAL" },
      { name: "Estável (0)", shortName: "Estável", value: estavel, color: "#64748b", tier: "ESTAVEL" },
      { name: "Em Atenção (Δ < 0)", shortName: "Atenção", value: atencao, color: "#e11d48", tier: "ATENCAO" },
      { name: "Não Avaliado", shortName: "Não Avaliado", value: naoAvaliado, color: "#cbd5e1", tier: "NAO_AVALIADO" }
    ];

    const kpis = [
      {
        id: "EXCEPCIONAL",
        label: "Avanço Excepcional",
        sublabel: "Saltou +3 ou mais níveis",
        delta: "Δ ≥ +3",
        count: excepcional,
        perc: total > 0 ? ((excepcional / total) * 100).toFixed(1) : "0.0",
        badgeBg: "bg-blue-600 text-white",
        cardBorder: "border-blue-200 bg-blue-50/50",
        textColor: "text-blue-700"
      },
      {
        id: "EXPRESSIVO",
        label: "Avanço Expressivo",
        sublabel: "Saltou +2 níveis CAEd",
        delta: "Δ = +2",
        count: expressivo,
        perc: total > 0 ? ((expressivo / total) * 100).toFixed(1) : "0.0",
        badgeBg: "bg-emerald-600 text-white",
        cardBorder: "border-emerald-200 bg-emerald-50/50",
        textColor: "text-emerald-700"
      },
      {
        id: "PONTUAL",
        label: "Avanço Pontual",
        sublabel: "Saltou +1 nível CAEd",
        delta: "Δ = +1",
        count: pontual,
        perc: total > 0 ? ((pontual / total) * 100).toFixed(1) : "0.0",
        badgeBg: "bg-amber-500 text-white",
        cardBorder: "border-amber-200 bg-amber-50/50",
        textColor: "text-amber-700"
      },
      {
        id: "ESTAVEL",
        label: "Estável",
        sublabel: "Manteve o mesmo nível",
        delta: "Δ = 0",
        count: estavel,
        perc: total > 0 ? ((estavel / total) * 100).toFixed(1) : "0.0",
        badgeBg: "bg-slate-500 text-white",
        cardBorder: "border-slate-200 bg-slate-50/70",
        textColor: "text-slate-700"
      },
      {
        id: "ATENCAO",
        label: "Em Atenção",
        sublabel: "Regressão ou recuo",
        delta: "Δ < 0",
        count: atencao,
        perc: total > 0 ? ((atencao / total) * 100).toFixed(1) : "0.0",
        badgeBg: "bg-rose-600 text-white",
        cardBorder: "border-rose-200 bg-rose-50/50",
        textColor: "text-rose-700"
      },
      {
        id: "NAO_AVALIADO",
        label: "Não Avaliado",
        sublabel: "Ausente no 1º Simulado",
        delta: "---",
        count: naoAvaliado,
        perc: total > 0 ? ((naoAvaliado / total) * 100).toFixed(1) : "0.0",
        badgeBg: "bg-slate-300 text-slate-700",
        cardBorder: "border-slate-200 bg-slate-50/40",
        textColor: "text-slate-600"
      }
    ];

    return {
      total,
      avaliados,
      avancaram,
      taxaAvanco,
      excepcional,
      expressivo,
      pontual,
      estavel,
      atencao,
      naoAvaliado,
      chartData,
      kpis
    };
  }, [schoolStudents, selectedTurma]);

  // Triple Performance Chart Data
  const tripleChartData = useMemo(() => {
    const sSim = simStats;
    const sCaed = caedSchool;
    const mMun = municipalSimuladoStats;

    return [
      { 
        name: "Nível 1", 
        simulado: sSim ? Number(sSim.n1GeralPerc.toFixed(1)) : 0, 
        caed: sCaed ? Number(Number(sCaed.n1 || 0).toFixed(1)) : 0, 
        municipal: mMun ? Number(mMun.n1Perc.toFixed(1)) : 0 
      },
      { 
        name: "Nível 2", 
        simulado: sSim ? Number(sSim.n2GeralPerc.toFixed(1)) : 0, 
        caed: sCaed ? Number(Number(sCaed.n2 || 0).toFixed(1)) : 0, 
        municipal: mMun ? Number(mMun.n2Perc.toFixed(1)) : 0 
      },
      { 
        name: "Nível 3", 
        simulado: sSim ? Number(sSim.n3GeralPerc.toFixed(1)) : 0, 
        caed: sCaed ? Number(Number(sCaed.n3 || 0).toFixed(1)) : 0, 
        municipal: mMun ? Number(mMun.n3Perc.toFixed(1)) : 0 
      },
      { 
        name: "Nível 4", 
        simulado: sSim ? Number(sSim.n4GeralPerc.toFixed(1)) : 0, 
        caed: sCaed ? Number(Number(sCaed.n4 || 0).toFixed(1)) : 0, 
        municipal: mMun ? Number(mMun.n4Perc.toFixed(1)) : 0 
      },
      { 
        name: "Leitor Iniciante", 
        simulado: sSim ? Number(sSim.inicianteGeralPerc.toFixed(1)) : 0, 
        caed: sCaed ? Number(Number(sCaed.iniciante || 0).toFixed(1)) : 0, 
        municipal: mMun ? Number(mMun.iniciantePerc.toFixed(1)) : 0 
      },
      { 
        name: "Leitor Fluente", 
        simulado: sSim ? Number(sSim.fluenteGeralPerc.toFixed(1)) : 0, 
        caed: sCaed ? Number(Number(sCaed.fluente || 0).toFixed(1)) : 0, 
        municipal: mMun ? Number(mMun.fluentePerc.toFixed(1)) : 0 
      },
    ];
  }, [simStats, caedSchool, municipalSimuladoStats]);

  // Derived values for Block 1 Hero Card
  const entradaOfficialIFL = simStats?.schoolEntradaOfficialIFL ?? (parseFloat(caedSchool?.ifl) || 0);
  const iflS1Geral = simStats?.iflS1Geral ?? 0;
  const iflS1Formatted = simStats?.iflS1GeralFormatted ?? '0.00';
  const deltaGeral = simStats?.deltaGeral ?? (iflS1Geral - entradaOfficialIFL);
  const deltaGeralFormatted = simStats?.deltaGeralFormatted ?? ((deltaGeral >= 0 ? "+" : "") + deltaGeral.toFixed(2));
  const isPositiveDelta = deltaGeral > 0;
  const isNeutralDelta = deltaGeral === 0;

  const totalAvaliados = simStats?.totalAvaliados ?? caedSchool?.avaliados ?? 0;
  const totalMatriculados = simStats?.totalMatriculados ?? caedSchool?.previstos ?? 0;
  const participacaoPerc = simStats?.participacaoGeralPerc ?? (totalMatriculados > 0 ? (totalAvaliados / totalMatriculados) * 100 : 0);
  const taxaAvancoReal = simStats?.taxaAvancoGeralPerc.toFixed(1) ?? evolutionSummary.taxaAvanco;
  const fluenciaTotalPerc = simStats?.leitoresGeralPerc.toFixed(1) ?? ((caedSchool?.iniciante || 0) + (caedSchool?.fluente || 0)).toFixed(1);

  return (
    <div className="w-full flex flex-col gap-8 pb-12">
      
      {/* 1. SELETOR E FILTRO DO RELATÓRIO (HEADER DA ABA) */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/90 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
        
        {/* Left: School Selector with live reactivity */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1 min-w-0 w-full lg:w-auto">
          <div className="p-3 bg-blue-900 text-white rounded-2xl shadow-sm shrink-0">
            <School className="w-6 h-6" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <label htmlFor="school-report-select" className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                Selecione a Unidade Escolar (37 Escolas)
              </label>
              <span className="bg-blue-100 text-blue-900 text-[10px] font-black px-2 py-0.2 rounded-md">
                Auditoria Oficial
              </span>
            </div>
            
            <div className="relative">
              <select
                id="school-report-select"
                value={activeSchoolName}
                onChange={(e) => {
                  onSelectSchool(e.target.value);
                  setSelectedTurma("TODAS");
                }}
                className="w-full font-black text-slate-900 text-base sm:text-xl bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 uppercase tracking-tight cursor-pointer shadow-2xs hover:border-slate-300 transition-all appearance-none pr-10"
              >
                {schoolsData.map((school: any) => (
                  <option key={school.name} value={school.name}>
                    {school.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Badges & Cycle Metadata */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full lg:w-auto justify-start lg:justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100">
          <div className="flex items-center gap-2 bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700">
            <Calendar className="w-4 h-4 text-slate-500" />
            <span>Edição: <strong className="text-slate-900">2026</strong></span>
          </div>

          <div className="flex items-center gap-2 bg-blue-50 px-3.5 py-2 rounded-xl border border-blue-200 text-xs font-bold text-blue-900">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Ciclo: <strong className="text-blue-950">Entrada CAED ➔ 1º Simulado</strong></span>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 text-xs font-bold text-emerald-900">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Auditado: <strong className="text-emerald-950">100% Concluído</strong></span>
          </div>
        </div>

      </div>

      {/* BLOCO 1: PAINEL OFICIAL DE EVOLUÇÃO (HERO CARD ESCURO) */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-700/60 relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Header */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-700/60">
          <div className="flex items-start gap-3.5">
            <div className="p-3.5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-md ring-1 ring-white/20 shrink-0">
              <Award className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-0.5 rounded-full">
                  Painel Oficial de Evolução 2026
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3 py-0.5 rounded-full">
                  ENTRADA CAED ➔ 1º SIMULADO
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                {activeSchoolName}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                Auditoria de proficiência leitora e evolução comparativa individual da unidade escolar
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-800/80 px-4 py-2 rounded-2xl border border-slate-700">
            <span>Rede Municipal: <strong>Pindamonhangaba • SP</strong></span>
          </div>
        </div>

        {/* 3 Canonical Metric Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 my-6 items-stretch">
          
          {/* Card 1.1: Linha de Base (Entrada CAED) */}
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/70 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  1. Linha de Base
                </span>
                <span className="text-[10px] font-bold bg-slate-700 text-slate-300 px-2 py-0.5 rounded-md">
                  CAEd Oficial
                </span>
              </div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-tight">
                Avaliação de Entrada
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  {entradaOfficialIFL.toFixed(2)}
                </span>
                <span className="text-xs text-slate-400 font-bold uppercase">IFL Escola</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span>Nota de Referência</span>
              <span className="text-slate-300 font-bold">Diagnóstica Inicial</span>
            </div>
          </div>

          {/* Card 1.2: Variação Real Delta */}
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-800/80 backdrop-blur-sm rounded-2xl p-5 border border-indigo-500/30 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none">
              <Sparkles className="w-20 h-20 text-indigo-400" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-indigo-300">
                  2. Variação Real (Δ)
                </span>
                <div className={`flex items-center gap-1 text-[11px] font-black px-2.5 py-0.5 rounded-full ${
                  isPositiveDelta 
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : isNeutralDelta
                    ? "bg-slate-600/40 text-slate-300 border border-slate-500/40"
                    : "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                }`}>
                  {isPositiveDelta ? <TrendingUp className="w-3.5 h-3.5" /> : isNeutralDelta ? <Minus className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                  <span>{deltaGeralFormatted} IFL</span>
                </div>
              </div>
              <div className="text-xs font-bold text-indigo-200 uppercase tracking-tight">
                Crescimento da Escola
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className={`text-4xl md:text-5xl font-black tracking-tight ${
                  isPositiveDelta ? "text-emerald-400" : isNeutralDelta ? "text-slate-300" : "text-rose-400"
                }`}>
                  {deltaGeralFormatted}
                </span>
                <span className="text-xs text-indigo-200 font-bold uppercase">Pontos IFL</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-indigo-700/40 flex items-center justify-between text-[11px]">
              <span className="text-indigo-300 font-semibold">Taxa de Avanço Real:</span>
              <span className="text-emerald-400 font-black">{taxaAvancoReal}% dos alunos</span>
            </div>
          </div>

          {/* Card 1.3: Resultado Atual 1º Simulado */}
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-800/80 backdrop-blur-sm rounded-2xl p-5 border border-blue-500/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-blue-300">
                  3. Resultado Atual
                </span>
                <span className="text-[10px] font-black bg-blue-500/30 text-blue-200 border border-blue-400/30 px-2 py-0.5 rounded-md">
                  1º Simulado 2026
                </span>
              </div>
              <div className="text-xs font-bold text-blue-200 uppercase tracking-tight">
                IFL Média Geral da Escola
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-black text-blue-400 tracking-tight">
                  {iflS1Formatted}
                </span>
                <span className="text-xs text-blue-200 font-bold uppercase">IFL S1</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-700/40 flex items-center justify-between text-[11px]">
              <span className="text-slate-300 font-semibold">Taxa de Fluência Total:</span>
              <span className="text-blue-300 font-black">{fluenciaTotalPerc}% (LI + LF)</span>
            </div>
          </div>

        </div>

        {/* Block 1 Footer: Sample info, turmas breakdown and audit stamp */}
        <div className="relative z-10 bg-slate-950/80 rounded-2xl p-4 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400 shrink-0" />
              <span>
                Amostragem: <strong className="text-white">{totalAvaliados}</strong> de <strong className="text-white">{totalMatriculados}</strong> matriculados ({participacaoPerc.toFixed(1)}% participação)
              </span>
            </div>
            <div className="hidden lg:block text-slate-600">•</div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Composição Turma a Turma: {turmasList.length > 0 ? (
                  turmasList.map((t, idx) => (
                    <span key={t.turma} className="inline-flex items-center gap-1 font-bold text-slate-200 ml-1">
                      <span className="text-blue-300">{t.turma}</span>
                      <span className="text-slate-400 text-[10px]">({t.avaliados} al. • IFL {t.iflS1Formatted})</span>
                      {idx < turmasList.length - 1 && <span className="text-slate-600">,</span>}
                    </span>
                  ))
                ) : (
                  <span className="text-slate-400">Turmas consolidadas</span>
                )}
              </span>
            </div>
          </div>

          <div className="text-[11px] font-bold text-slate-400 shrink-0 border-t md:border-t-0 pt-2 md:pt-0 border-slate-800">
            Carimbo de Auditoria: <span className="text-slate-200">SME Pindamonhangaba 2026</span>
          </div>
        </div>

      </div>

      {/* BLOCO 2: PERFIL DE PERFORMANCE TRIPLO (GRÁFICO DE LINHAS/ÁREA) */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl sm:text-2xl font-black text-slate-800">
                Perfil de Performance: {activeSchoolName}
              </h3>
              <span className="text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-900 border border-blue-200 px-2.5 py-1 rounded-lg">
                PERFIL TRIPLO
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-500 mt-1">
              Curvas comparativas: 1º Simulado da Escola (Área Verde) • Entrada CAED (Pontilhado Âmbar) • Média da Rede Municipal (Tracejado Cinza)
            </p>
          </div>
        </div>

        <div className="h-[420px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={tripleChartData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
              <defs>
                <linearGradient id="colorSimuladoSchoolReport" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#047857" stopOpacity={0.35}/>
                  <stop offset="90%" stopColor="#047857" stopOpacity={0.05}/>
                  <stop offset="100%" stopColor="#047857" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 13, fill: '#64748b', fontWeight: 700 }} 
                dy={12} 
              />
              <YAxis 
                domain={[0, 100]} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 13, fill: '#94a3b8', fontWeight: 600 }} 
                tickFormatter={(v) => `${v}%`} 
              />
              <Tooltip 
                formatter={(value: any, name: any) => [`${value}%`, name]}
                contentStyle={{ 
                  borderRadius: '16px', 
                  border: '1px solid #e2e8f0', 
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)', 
                  padding: '16px',
                  fontWeight: 700
                }} 
              />
              <Legend verticalAlign="top" align="right" height={50} wrapperStyle={{ paddingBottom: '16px' }} />

              {/* Curva 3: Média da Rede Municipal (dashed #94A3B8) */}
              <Line 
                type="monotone" 
                dataKey="municipal" 
                name="Média da Rede Municipal" 
                stroke="#94A3B8" 
                strokeWidth={2} 
                strokeDasharray="5 5" 
                dot={false}
                activeDot={{ r: 5 }}
              />

              {/* Curva 2: Entrada CAED: Escola (dotted/amber #EA580C with round markers) */}
              <Line 
                type="monotone" 
                dataKey="caed" 
                name={`Entrada CAED: ${activeSchoolName}`} 
                stroke="#EA580C" 
                strokeWidth={2} 
                strokeDasharray="4 4" 
                dot={{ r: 4.5, fill: '#EA580C', stroke: '#fff', strokeWidth: 1.5 }}
                activeDot={{ r: 7 }}
              />

              {/* Curva 1: 1º Simulado: Escola (solid #047857 with smooth gradient area) */}
              <Area 
                type="monotone" 
                dataKey="simulado" 
                name={`1º Simulado: ${activeSchoolName}`} 
                stroke="#047857" 
                strokeWidth={3.5} 
                fillOpacity={1} 
                fill="url(#colorSimuladoSchoolReport)"
                dot={{ r: 6, fill: '#047857', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 8 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* BLOCO 3: LINHA CONSOLIDADA DA ESCOLA (TABELA DE DESEMPENHO) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight">
                Linha Consolidada da Escola (Tabela de Desempenho)
              </h3>
              <span className="text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-900 border border-blue-200 px-2.5 py-0.5 rounded-lg">
                Consolidado 1º Simulado
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">
              Resultados consolidados de participação, distribuição percentual de proficiência por nível e IFL
            </p>
          </div>
        </div>

        <div className="w-full overflow-x-auto lg:overflow-x-visible">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead className="bg-slate-100/90 text-slate-600 font-black uppercase text-[10px] sm:text-[11px] border-b border-slate-200 select-none">
              <tr>
                <th className="px-3 sm:px-4 py-3.5 text-slate-800 text-left min-w-[140px] sm:min-w-[180px] max-w-[240px]">ESCOLA</th>
                <th className="px-1.5 sm:px-2 py-3.5 text-center">PREV.</th>
                <th className="px-1.5 sm:px-2 py-3.5 text-center">AVAL.</th>
                <th className="px-1.5 sm:px-2 py-3.5 text-center">% PART.</th>
                <th className="px-1.5 sm:px-2 py-3.5 text-center" style={{ color: '#D32F2F' }}>N1</th>
                <th className="px-1.5 sm:px-2 py-3.5 text-center" style={{ color: '#E53935' }}>N2</th>
                <th className="px-1.5 sm:px-2 py-3.5 text-center" style={{ color: '#FB8C00' }}>N3</th>
                <th className="px-1.5 sm:px-2 py-3.5 text-center" style={{ color: '#FFA000' }}>N4</th>
                <th className="px-1.5 sm:px-2 py-3.5 text-center" style={{ color: '#2E7D32' }}>INIC.</th>
                <th className="px-1.5 sm:px-2 py-3.5 text-center" style={{ color: '#00695C' }}>FLUEN.</th>
                <th className="px-2 sm:px-3 py-3.5 text-center text-slate-600">ENTRADA</th>
                <th className="px-2 sm:px-3 py-3.5 text-center bg-blue-50 text-blue-900 font-black border-x border-blue-100">1º SIMULADO</th>
                <th className="px-2 sm:px-3 py-3.5 text-center font-black">Δ EVOL.</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-slate-50 transition-colors">
                {/* ESCOLA */}
                <td className="px-3 sm:px-4 py-3.5 font-black text-slate-900 text-xs sm:text-sm align-middle min-w-[140px] sm:min-w-[180px] max-w-[240px]">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-1" />
                    <span className="break-words leading-snug whitespace-normal uppercase font-black tracking-tight text-slate-900">
                      {formatSchoolShortName(activeSchoolName)}
                    </span>
                  </div>
                </td>

                {/* PREV. */}
                <td className="px-1.5 sm:px-2 py-3.5 text-center font-bold text-slate-600 align-middle">
                  {totalMatriculados}
                </td>

                {/* AVAL. */}
                <td className="px-1.5 sm:px-2 py-3.5 text-center font-bold text-slate-800 align-middle">
                  {totalAvaliados}
                </td>

                {/* % PART. */}
                <td className="px-1.5 sm:px-2 py-3.5 text-center align-middle">
                  <span className={`text-[11px] sm:text-xs inline-flex font-black px-2 py-0.5 rounded-md ${
                    participacaoPerc >= 95 
                      ? 'text-emerald-800 bg-emerald-100 border border-emerald-200' 
                      : participacaoPerc >= 80 
                        ? 'text-amber-800 bg-amber-100 border border-amber-200' 
                        : 'text-red-800 bg-red-100 border border-red-200'
                  }`}>
                    {participacaoPerc.toFixed(1)}%
                  </span>
                </td>

                {/* N1 */}
                <td className="px-1.5 sm:px-2 py-3.5 text-center font-bold align-middle" style={{ color: '#D32F2F' }}>
                  {simStats ? simStats.n1GeralPerc.toFixed(1) : (caedSchool?.n1 || 0).toFixed(1)}%
                </td>

                {/* N2 */}
                <td className="px-1.5 sm:px-2 py-3.5 text-center font-bold align-middle" style={{ color: '#E53935' }}>
                  {simStats ? simStats.n2GeralPerc.toFixed(1) : (caedSchool?.n2 || 0).toFixed(1)}%
                </td>

                {/* N3 */}
                <td className="px-1.5 sm:px-2 py-3.5 text-center font-bold align-middle" style={{ color: '#FB8C00' }}>
                  {simStats ? simStats.n3GeralPerc.toFixed(1) : (caedSchool?.n3 || 0).toFixed(1)}%
                </td>

                {/* N4 */}
                <td className="px-1.5 sm:px-2 py-3.5 text-center font-bold align-middle" style={{ color: '#FFA000' }}>
                  {simStats ? simStats.n4GeralPerc.toFixed(1) : (caedSchool?.n4 || 0).toFixed(1)}%
                </td>

                {/* INIC. */}
                <td className="px-1.5 sm:px-2 py-3.5 text-center font-bold align-middle" style={{ color: '#2E7D32' }}>
                  {simStats ? simStats.inicianteGeralPerc.toFixed(1) : (caedSchool?.iniciante || 0).toFixed(1)}%
                </td>

                {/* FLUEN. */}
                <td className="px-1.5 sm:px-2 py-3.5 text-center font-bold align-middle" style={{ color: '#00695C' }}>
                  {simStats ? simStats.fluenteGeralPerc.toFixed(1) : (caedSchool?.fluente || 0).toFixed(1)}%
                </td>

                {/* ENTRADA (CAED) */}
                <td className="px-2 sm:px-3 py-3.5 text-center font-bold text-slate-600 align-middle">
                  {entradaOfficialIFL.toFixed(2)}
                </td>

                {/* IFL 1º SIMULADO */}
                <td className="px-2 sm:px-3 py-3.5 text-center bg-blue-50/70 border-x border-blue-100 align-middle">
                  <span className={`inline-block px-2.5 py-0.5 rounded-lg text-xs sm:text-sm font-black shadow-xs ${
                    iflS1Geral >= 6.0 
                      ? 'bg-blue-600 text-white' 
                      : iflS1Geral >= 4.0 
                        ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                        : 'bg-red-500 text-white'
                  }`}>
                    {iflS1Formatted}
                  </span>
                </td>

                {/* Δ EVOLUÇÃO */}
                <td className="px-2 sm:px-3 py-3.5 text-center align-middle">
                  <span className={`inline-flex items-center gap-0.5 font-black px-2.5 py-0.5 rounded-lg text-xs ${
                    isPositiveDelta ? 'bg-emerald-100 text-emerald-800' : isNeutralDelta ? 'bg-slate-100 text-slate-700' : 'bg-red-100 text-red-800'
                  }`}>
                    {deltaGeralFormatted}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* BLOCO 4: DETALHAMENTO DE TURMAS (CARD RETRÁTIL EXPANDIDO) */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200/90 overflow-hidden">
        {/* Card Header */}
        <div 
          onClick={() => setIsClassCardExpanded(!isClassCardExpanded)}
          className="p-5 sm:p-6 bg-slate-50/90 hover:bg-slate-100/80 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 select-none cursor-pointer transition-colors"
        >
          {/* Left: School Identity */}
          <div className="flex items-center gap-3.5 flex-1 min-w-0">
            <div className="p-3 bg-blue-100 text-blue-900 border border-blue-200/80 rounded-2xl shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-black text-slate-800 text-base sm:text-lg tracking-tight truncate">
                  Detalhamento de Turmas: {activeSchoolName}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-900 border border-blue-200">
                  {turmasList.length} Turma{turmasList.length !== 1 ? 's' : ''} Auditada{turmasList.length !== 1 ? 's' : ''}
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-500 mt-0.5">
                Desempenho individualizado por sala de aula • 1º Simulado Municipal 2026
              </p>
            </div>
          </div>

          {/* Right: Summary Metrics Pills */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Avaliados */}
            <div className="text-right">
              <div className="text-[10px] font-black uppercase text-slate-400">Avaliados</div>
              <div className="text-xs font-black text-slate-800">
                {totalAvaliados} de {totalMatriculados}
              </div>
            </div>

            {/* % Participação */}
            <div className="text-right">
              <div className="text-[10px] font-black uppercase text-slate-400">Participação</div>
              <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-black ${
                participacaoPerc >= 95 
                  ? 'bg-emerald-100 text-emerald-900' 
                  : participacaoPerc >= 80 
                    ? 'bg-amber-100 text-amber-900' 
                    : 'bg-red-100 text-red-900'
              }`}>
                {participacaoPerc.toFixed(1)}%
              </span>
            </div>

            {/* Leitores */}
            <div className="text-right hidden sm:block">
              <div className="text-[10px] font-black uppercase text-slate-400">Leitores (LI+LF)</div>
              <div className="text-xs font-black text-teal-800">
                {fluenciaTotalPerc}%
              </div>
            </div>

            {/* IFL Badge */}
            <div className="text-right">
              <div className="text-[10px] font-black uppercase text-slate-400">IFL Geral</div>
              <span className={`inline-block px-3 py-0.5 rounded-lg text-sm font-black shadow-2xs ${
                iflS1Geral >= 6.0 
                  ? 'bg-blue-900 text-white' 
                  : iflS1Geral >= 4.0 
                    ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                    : 'bg-red-500 text-white'
              }`}>
                {iflS1Formatted}
              </span>
            </div>

            {/* Chevron Toggle Button */}
            <div className="p-1.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-800 transition-colors ml-1">
              {isClassCardExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </div>
          </div>
        </div>

        {/* Expanded Turmas Table for this School */}
        {isClassCardExpanded && (
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-300">
            <table className="w-full text-left text-sm whitespace-nowrap min-w-[950px]">
              <thead className="bg-slate-100/70 text-slate-500 font-black uppercase text-[11px] border-b border-slate-200 select-none">
                <tr>
                  <th className="px-6 py-3.5 text-slate-700">TURMA</th>
                  <th className="px-3 py-3.5 text-center">AVAL.</th>
                  <th className="px-3 py-3.5 text-center">% PART.</th>
                  <th className="px-3 py-3.5 text-center" style={{ color: '#D32F2F' }}>N1</th>
                  <th className="px-3 py-3.5 text-center" style={{ color: '#E53935' }}>N2</th>
                  <th className="px-3 py-3.5 text-center" style={{ color: '#FB8C00' }}>N3</th>
                  <th className="px-3 py-3.5 text-center" style={{ color: '#FFA000' }}>N4</th>
                  <th className="px-3 py-3.5 text-center" style={{ color: '#2E7D32' }}>INIC.</th>
                  <th className="px-3 py-3.5 text-center" style={{ color: '#00695C' }}>FLUEN.</th>
                  <th className="px-5 py-3.5 text-center bg-blue-50/60 border-l border-blue-100 text-blue-950 font-black">IFL</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {turmasList.map((t) => {
                  const tIFL = t.iflS1;

                  return (
                    <tr key={t.turma} className="hover:bg-slate-50/80 transition-all">
                      {/* TURMA */}
                      <td className="px-6 py-3.5">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 border border-blue-200/80 text-xs font-black tracking-wide shadow-2xs">
                            {t.turma}
                          </span>
                        </div>
                      </td>

                      {/* AVAL. */}
                      <td className="px-3 py-3.5 text-center font-bold text-slate-600">
                        {t.avaliados}
                      </td>

                      {/* % PART. */}
                      <td className="px-3 py-3.5 text-center">
                        <div className={`text-xs inline-flex font-black px-2.5 py-0.5 rounded-lg ${
                          t.participacaoPerc >= 95 
                            ? 'text-emerald-800 bg-emerald-100 border border-emerald-200' 
                            : t.participacaoPerc >= 80 
                              ? 'text-amber-800 bg-amber-100 border border-amber-200' 
                              : 'text-red-800 bg-red-100 border border-red-200'
                        }`}>
                          {t.participacaoPerc.toFixed(1)}%
                        </div>
                      </td>

                      {/* N1 */}
                      <td className="px-3 py-3.5 text-center font-bold" style={{ color: '#D32F2F' }}>
                        <div>{t.n1Perc.toFixed(1)}%</div>
                        <span className="text-[10px] text-slate-400 font-semibold block">{t.n1Count} al.</span>
                      </td>

                      {/* N2 */}
                      <td className="px-3 py-3.5 text-center font-bold" style={{ color: '#E53935' }}>
                        <div>{t.n2Perc.toFixed(1)}%</div>
                        <span className="text-[10px] text-slate-400 font-semibold block">{t.n2Count} al.</span>
                      </td>

                      {/* N3 */}
                      <td className="px-3 py-3.5 text-center font-bold" style={{ color: '#FB8C00' }}>
                        <div>{t.n3Perc.toFixed(1)}%</div>
                        <span className="text-[10px] text-slate-400 font-semibold block">{t.n3Count} al.</span>
                      </td>

                      {/* N4 */}
                      <td className="px-3 py-3.5 text-center font-bold" style={{ color: '#FFA000' }}>
                        <div>{t.n4Perc.toFixed(1)}%</div>
                        <span className="text-[10px] text-slate-400 font-semibold block">{t.n4Count} al.</span>
                      </td>

                      {/* INIC. */}
                      <td className="px-3 py-3.5 text-center font-bold" style={{ color: '#2E7D32' }}>
                        <div>{t.iniciantePerc.toFixed(1)}%</div>
                        <span className="text-[10px] text-slate-400 font-semibold block">{t.inicianteCount} al.</span>
                      </td>

                      {/* FLUEN. */}
                      <td className="px-3 py-3.5 text-center font-bold" style={{ color: '#00695C' }}>
                        <div>{t.fluentePerc.toFixed(1)}%</div>
                        <span className="text-[10px] text-slate-400 font-semibold block">{t.fluenteCount} al.</span>
                      </td>

                      {/* IFL */}
                      <td className="px-5 py-3.5 text-center bg-blue-50/40 border-l border-blue-100">
                        <span className={`inline-block px-3 py-0.5 rounded-lg text-xs font-black shadow-2xs ${
                          tIFL >= 6.0 
                            ? 'bg-blue-900 text-white' 
                            : tIFL >= 4.0 
                              ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                              : 'bg-red-500 text-white'
                        }`}>
                          {t.iflS1Formatted}
                        </span>
                      </td>
                    </tr>
                  );
                })}

                {/* School Consolidation Summary Row */}
                <tr className="bg-slate-100/90 font-black border-t-2 border-slate-200 text-slate-800">
                  {/* LABEL */}
                  <td className="px-6 py-3.5 font-black text-slate-800 text-xs uppercase tracking-wide">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-700" />
                      <span>TOTAL DA ESCOLA</span>
                    </div>
                  </td>

                  {/* AVAL. */}
                  <td className="px-3 py-3.5 text-center font-black text-slate-800">
                    {totalAvaliados}
                  </td>

                  {/* % PART. */}
                  <td className="px-3 py-3.5 text-center">
                    <div className="text-xs inline-flex font-black px-2.5 py-0.5 rounded-lg text-emerald-800 bg-emerald-100 border border-emerald-200">
                      {participacaoPerc.toFixed(1)}%
                    </div>
                  </td>

                  {/* N1 */}
                  <td className="px-3 py-3.5 text-center font-black" style={{ color: '#D32F2F' }}>
                    {simStats ? simStats.n1GeralPerc.toFixed(1) : (caedSchool?.n1 || 0).toFixed(1)}%
                  </td>

                  {/* N2 */}
                  <td className="px-3 py-3.5 text-center font-black" style={{ color: '#E53935' }}>
                    {simStats ? simStats.n2GeralPerc.toFixed(1) : (caedSchool?.n2 || 0).toFixed(1)}%
                  </td>

                  {/* N3 */}
                  <td className="px-3 py-3.5 text-center font-black" style={{ color: '#FB8C00' }}>
                    {simStats ? simStats.n3GeralPerc.toFixed(1) : (caedSchool?.n3 || 0).toFixed(1)}%
                  </td>

                  {/* N4 */}
                  <td className="px-3 py-3.5 text-center font-black" style={{ color: '#FFA000' }}>
                    {simStats ? simStats.n4GeralPerc.toFixed(1) : (caedSchool?.n4 || 0).toFixed(1)}%
                  </td>

                  {/* INIC. */}
                  <td className="px-3 py-3.5 text-center font-black" style={{ color: '#2E7D32' }}>
                    {simStats ? simStats.inicianteGeralPerc.toFixed(1) : (caedSchool?.iniciante || 0).toFixed(1)}%
                  </td>

                  {/* FLUEN. */}
                  <td className="px-3 py-3.5 text-center font-black" style={{ color: '#00695C' }}>
                    {simStats ? simStats.fluenteGeralPerc.toFixed(1) : (caedSchool?.fluente || 0).toFixed(1)}%
                  </td>

                  {/* IFL */}
                  <td className="px-5 py-3.5 text-center bg-blue-100/60 border-l border-blue-200">
                    <span className={`inline-block px-3 py-0.5 rounded-lg text-xs font-black shadow-2xs ${
                      iflS1Geral >= 6.0 
                        ? 'bg-blue-900 text-white' 
                        : iflS1Geral >= 4.0 
                          ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                          : 'bg-red-500 text-white'
                    }`}>
                      {iflS1Formatted}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* BLOCO 5: DISTRIBUIÇÃO E QUADRO DE DESEMPENHO/METAS (Δ DE NÍVEIS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column (lg:col-span-4): Donut Chart */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-slate-200/90 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div>
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">
                  DISTRIBUIÇÃO DA 1ª EVOLUÇÃO
                </h3>
                <p className="text-[11px] font-bold text-slate-400">
                  {selectedTurma === "TODAS" ? "Média da Escola" : selectedTurma} • {evolutionSummary.avaliados} de {evolutionSummary.total} alunos avaliados
                </p>
              </div>
              <span className="text-[10px] font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                Δ Níveis
              </span>
            </div>

            <div className="relative h-[220px] w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={evolutionSummary.chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={58}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {evolutionSummary.chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: any, name: any) => [`${value} estudantes (${((Number(value) / (evolutionSummary.total || 1)) * 100).toFixed(1)}%)`, name]}
                    contentStyle={{ borderRadius: '12px', fontWeight: 'bold', fontSize: '11px', border: '1px solid #e2e8f0' }}
                  />
                </PieChart>
              </ResponsiveContainer>

              {/* Center metric */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                <span className="text-2xl font-black text-slate-800 tracking-tight leading-none">
                  {evolutionSummary.taxaAvanco}%
                </span>
                <span className="text-[10px] font-black uppercase text-slate-400 mt-1">
                  Avançaram
                </span>
                <span className="text-[9px] font-bold text-emerald-600">
                  ({evolutionSummary.avancaram}/{evolutionSummary.avaliados})
                </span>
              </div>
            </div>
          </div>

          {/* Bottom legend with the 3 advance tiers */}
          <div className="mt-2 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-1 text-[10px] font-bold text-slate-600">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
              <span>Excepcional (≥+3): <strong>{evolutionSummary.excepcional}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
              <span>Expressivo (+2): <strong>{evolutionSummary.expressivo}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
              <span>Pontual (+1): <strong>{evolutionSummary.pontual}</strong></span>
            </div>
          </div>
        </div>

        {/* Right Column (lg:col-span-8): Quadro de Metas e Trajetórias */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 shadow-sm border border-slate-200/90 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div>
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">
                  Quadro de Desempenho e Metas (Δ de Níveis)
                </h3>
                <p className="text-[11px] font-bold text-slate-400">
                  Metas de progressão leitora dos estudantes entre a Avaliação Diagnóstica e o 1º Simulado
                </p>
              </div>
              <div className="text-xs font-bold text-slate-500">
                {activeSchoolName}
              </div>
            </div>

            {/* 6 KPI Cards in 3x2 Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {evolutionSummary.kpis.map((kpi) => {
                return (
                  <div
                    key={kpi.id}
                    className={`p-3.5 rounded-2xl border transition-all select-none ${kpi.cardBorder}`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md ${kpi.badgeBg}`}>
                        {kpi.delta}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400">
                        {kpi.perc}%
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-xs font-black text-slate-800 leading-tight">
                        {kpi.label}
                      </span>
                      <span className={`text-xl font-black ${kpi.textColor}`}>
                        {kpi.count}
                      </span>
                    </div>
                    <p className="text-[10px] font-semibold text-slate-500 mt-1 line-clamp-1">
                      {kpi.sublabel}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Explanatory footer rule */}
          <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs text-slate-600 font-bold">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
              <span><strong>Regra Paramétrica:</strong> Δ = Rank Simulado 1 - Rank Entrada CAEd (Escala: N1 ➔ N2 ➔ N3 ➔ N4 ➔ LI ➔ LF)</span>
            </div>
            <span className="text-[11px] text-slate-400 font-black shrink-0 hidden md:inline">Pindamonhangaba 2026</span>
          </div>
        </div>

      </div>

    </div>
  );
};
