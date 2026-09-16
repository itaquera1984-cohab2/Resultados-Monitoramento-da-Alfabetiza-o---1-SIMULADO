/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  AlertTriangle, 
  ShieldAlert, 
  AlertCircle, 
  TrendingUp, 
  Award, 
  Search, 
  Filter, 
  Download, 
  School, 
  Users, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  ArrowUpRight, 
  ChevronRight, 
  ChevronLeft, 
  ChevronDown,
  BookOpen, 
  FileSpreadsheet, 
  Activity,
  Lightbulb,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowUpDown,
  Printer,
  Zap,
  Target
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Legend, 
  Cell 
} from 'recharts';
import { StudentRecord, SchoolSimuladoSummary } from '../simuladoUtils';
import { NeeBadge } from './NeeBadge';
import { NeeInterventionCard } from './NeeInterventionCard';
import { getNeeInterventionStats, isNeeStudent } from '../neeStudents';

export interface SchoolBaseData {
  name: string;
  avaliados: number;
  previstos: number;
  participacao: number;
  ifl: string;
  n1: number;
  n2: number;
  n3: number;
  n4: number;
  iniciante: number;
  fluente: number;
  leitores: number;
}

export type IntervencaoModo = 'urgente' | 'simulado1' | 'caed' | 'nominal';

export interface IntervencaoPrioritariaTabProps {
  schoolsData: SchoolBaseData[];
  schoolSimuladoStatsMap: Map<string, SchoolSimuladoSummary>;
  studentsData: StudentRecord[];
  onNavigateToSchool?: (schoolName: string) => void;
  onNavigateToEvolucao?: (schoolName: string) => void;
}

const LEVEL_WEIGHTS: Record<string, number> = {
  'N1': 0,
  'N2': 1,
  'N3': 2,
  'N4': 3,
  'LI': 4,
  'LF': 5
};

export function formatSchoolShortName(rawName: string): string {
  if (!rawName) return '';
  let clean = rawName.trim();
  clean = clean.replace(/^(ESCOLA MUNICIPAL|ESC\. MUNICIPAL|ESC\. MUN\.|EM|E\.M)\b\.?\s*/i, '');
  clean = clean.replace(/^PROFESSORA\s+/i, 'PROFª ');
  clean = clean.replace(/^PROFESSOR\s+/i, 'PROF. ');
  clean = clean.replace(/^DOUTOR\s+/i, 'DR. ');
  clean = clean.replace(/^DOUTORA\s+/i, 'DRª ');
  clean = clean.replace(/^PADRE\s+/i, 'PE. ');
  return `E.M. ${clean}`;
}

export function calculateInterventionEvolution(student: { entrada?: string; s1?: string }) {
  const caedLevel = student.entrada || 'N1';
  const simuladoLevel = student.s1 || 'NÃO AVALIADO';

  if (simuladoLevel === 'NÃO AVALIADO' || !student.s1) {
    return {
      label: 'Não Avaliado no Simulado',
      tag: 'neutral',
      diff: 0,
      diffLabel: '—',
      color: 'text-slate-500',
      bg: 'bg-slate-100 border-slate-200 text-slate-700',
      badgeColor: 'bg-slate-500 text-white',
      borderLeft: 'border-l-slate-400',
      icon: Clock
    };
  }

  const wCaed = LEVEL_WEIGHTS[caedLevel] ?? 0;
  const wSim = LEVEL_WEIGHTS[simuladoLevel] ?? 0;
  const diff = wSim - wCaed;
  const diffLabel = diff > 0 ? `+${diff}` : `${diff}`;

  if (diff <= 0) {
    return {
      label: 'Sem Avanço / Crítico',
      tag: 'danger',
      diff,
      diffLabel,
      color: 'text-rose-700',
      bg: 'bg-rose-50 border-rose-200 text-rose-800',
      badgeColor: 'bg-rose-600 text-white',
      borderLeft: 'border-l-rose-600',
      icon: AlertCircle
    };
  } else if (diff === 1) {
    return {
      label: 'Avanço Pontual (+1 nível)',
      tag: 'warning',
      diff,
      diffLabel,
      color: 'text-amber-700',
      bg: 'bg-amber-50 border-amber-200 text-amber-800',
      badgeColor: 'bg-amber-500 text-white',
      borderLeft: 'border-l-amber-500',
      icon: ArrowUpRight
    };
  } else if (diff >= 2 && wSim <= 3) {
    return {
      label: `Avanço Expressivo (+${diff} níveis)`,
      tag: 'info',
      diff,
      diffLabel,
      color: 'text-blue-700',
      bg: 'bg-blue-50 border-blue-200 text-blue-800',
      badgeColor: 'bg-blue-600 text-white',
      borderLeft: 'border-l-blue-600',
      icon: TrendingUp
    };
  } else if (wSim >= 4) {
    const isFluente = simuladoLevel === 'LF';
    return {
      label: isFluente ? 'Avanço Excepcional (Fluência Plena)' : 'Avanço Excepcional (Atingiu Leitura)',
      tag: 'success',
      diff,
      diffLabel,
      color: 'text-emerald-700',
      bg: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      badgeColor: 'bg-emerald-600 text-white',
      borderLeft: 'border-l-emerald-600',
      icon: Award
    };
  }

  return {
    label: 'Avanço Expressivo',
    tag: 'info',
    diff,
    diffLabel,
    color: 'text-blue-700',
    bg: 'bg-blue-50 border-blue-200 text-blue-800',
    badgeColor: 'bg-blue-600 text-white',
    borderLeft: 'border-l-blue-600',
    icon: TrendingUp
  };
}

export function IntervencaoPrioritariaTab({
  schoolsData,
  schoolSimuladoStatsMap,
  studentsData,
  onNavigateToSchool,
  onNavigateToEvolucao
}: IntervencaoPrioritariaTabProps) {
  // Mode selection: default to 'urgente'
  const [modo, setModo] = useState<IntervencaoModo>('urgente');

  // Filters for Urgent Personal Intervention
  const [urgentLevelFilter, setUrgentLevelFilter] = useState<'TODOS' | 'N1' | 'N2'>('TODOS');
  const [urgentSchoolFilter, setUrgentSchoolFilter] = useState<string>('TODAS');
  const [urgentTurmaFilter, setUrgentTurmaFilter] = useState<string>('TODAS');
  const [urgentSearch, setUrgentSearch] = useState<string>('');
  const [urgentViewLayout, setUrgentViewLayout] = useState<'grouped' | 'table'>('grouped');
  const [collapsedSchools, setCollapsedSchools] = useState<Record<string, boolean>>({});

  // Filters for Micro/Nominal Tracking (Coorte Entrada)
  const [selectedEscola, setSelectedEscola] = useState<string>('TODAS');
  const [selectedTurma, setSelectedTurma] = useState<string>('TODAS');
  const [selectedStatus, setSelectedStatus] = useState<string>('TODOS');
  const [selectedEntradaLevel, setSelectedEntradaLevel] = useState<'TODOS' | 'N1' | 'N2'>('TODOS');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 20;

  // Sorting for Macro Ranking
  const [sortKey, setSortKey] = useState<'ivc' | 'n1' | 'n2' | 'avaliados' | 'name'>('ivc');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Macro Ranking Computation
  const macroRankingData = useMemo(() => {
    return schoolsData.map(s => {
      const sim = schoolSimuladoStatsMap.get(s.name);
      
      let avaliados = 0;
      let previstos = s.previstos || 0;
      let n1Perc = 0;
      let n2Perc = 0;
      let n1Count = 0;
      let n2Count = 0;
      let iflVal = '0.00';

      if (modo === 'caed') {
        avaliados = s.avaliados;
        n1Perc = s.n1;
        n2Perc = s.n2;
        n1Count = Math.round((s.n1 / 100) * avaliados);
        n2Count = Math.round((s.n2 / 100) * avaliados);
        iflVal = s.ifl;
      } else {
        // Simulado 1, Urgente or Nominal Mode baseline
        avaliados = sim ? sim.totalAvaliados : s.avaliados;
        previstos = sim ? sim.totalMatriculados : s.previstos;
        n1Perc = sim ? sim.n1GeralPerc : s.n1;
        n2Perc = sim ? sim.n2GeralPerc : s.n2;
        n1Count = sim ? sim.n1GeralCount : Math.round((s.n1 / 100) * avaliados);
        n2Count = sim ? sim.n2GeralCount : Math.round((s.n2 / 100) * avaliados);
        iflVal = sim ? sim.iflS1GeralFormatted : s.ifl;
      }

      const ivcPerc = avaliados > 0 ? Number((((n1Count + n2Count) / avaliados) * 100).toFixed(1)) : 0;
      const ivcAlunos = n1Count + n2Count;

      // Status de Risco
      let riskStatus = '🟢 Regular';
      let riskTag = 'success';
      let riskBadge = 'bg-emerald-100 text-emerald-800 border-emerald-200';

      if (ivcPerc >= 25) {
        riskStatus = '🔴 Intervenção Imediata';
        riskTag = 'danger';
        riskBadge = 'bg-red-100 text-red-900 border-red-200 font-black animate-pulse';
      } else if (ivcPerc >= 15) {
        riskStatus = '🟠 Atenção Alta';
        riskTag = 'high';
        riskBadge = 'bg-orange-100 text-orange-900 border-orange-200 font-bold';
      } else if (ivcPerc >= 8) {
        riskStatus = '🟡 Acompanhamento';
        riskTag = 'warning';
        riskBadge = 'bg-amber-100 text-amber-900 border-amber-200';
      }

      return {
        name: s.name,
        avaliados,
        previstos,
        participacao: previstos > 0 ? Number(((avaliados / previstos) * 100).toFixed(1)) : 100,
        n1Perc,
        n1Count,
        n2Perc,
        n2Count,
        ivcPerc,
        ivcAlunos,
        iflVal,
        riskStatus,
        riskTag,
        riskBadge,
        sim
      };
    });
  }, [schoolsData, schoolSimuladoStatsMap, modo]);

  // Sorted Macro Ranking
  const sortedMacroRanking = useMemo(() => {
    return [...macroRankingData].sort((a, b) => {
      let vA = 0;
      let vB = 0;
      if (sortKey === 'ivc') {
        vA = a.ivcPerc;
        vB = b.ivcPerc;
      } else if (sortKey === 'n1') {
        vA = a.n1Perc;
        vB = b.n1Perc;
      } else if (sortKey === 'n2') {
        vA = a.n2Perc;
        vB = b.n2Perc;
      } else if (sortKey === 'avaliados') {
        vA = a.avaliados;
        vB = b.avaliados;
      } else if (sortKey === 'name') {
        return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
      return sortOrder === 'asc' ? vA - vB : vB - vA;
    });
  }, [macroRankingData, sortKey, sortOrder]);

  // =========================================================================
  // URGENT INTERVENTION COHORT (Students in N1 or N2 in 1º Simulado)
  // =========================================================================
  const urgentStudentsList = useMemo(() => {
    return studentsData
      .filter(s => s.s1 === 'N1' || s.s1 === 'N2')
      .map(s => {
        const evo = calculateInterventionEvolution(s);
        return {
          ...s,
          evolution: evo
        };
      });
  }, [studentsData]);

  // Available Filter Options for Urgent Intervention
  const urgentAvailableSchools = useMemo(() => {
    const list = Array.from(new Set(urgentStudentsList.map(s => s.escola))).sort();
    return list;
  }, [urgentStudentsList]);

  const urgentAvailableTurmas = useMemo(() => {
    let filtered = urgentStudentsList;
    if (urgentSchoolFilter !== 'TODAS') {
      filtered = filtered.filter(s => s.escola === urgentSchoolFilter);
    }
    return Array.from(new Set(filtered.map(s => s.turma))).sort();
  }, [urgentStudentsList, urgentSchoolFilter]);

  // Filtered Urgent Students
  const filteredUrgentStudents = useMemo(() => {
    return urgentStudentsList.filter(s => {
      // Level Filter
      if (urgentLevelFilter !== 'TODOS' && s.s1 !== urgentLevelFilter) return false;
      // School Filter
      if (urgentSchoolFilter !== 'TODAS' && s.escola !== urgentSchoolFilter) return false;
      // Turma Filter
      if (urgentTurmaFilter !== 'TODAS' && s.turma !== urgentTurmaFilter) return false;
      // Search Query
      if (urgentSearch.trim()) {
        const q = urgentSearch.toLowerCase().trim();
        const matchesName = s.name.toLowerCase().includes(q);
        const matchesEscola = s.escola.toLowerCase().includes(q);
        const matchesTurma = s.turma.toLowerCase().includes(q);
        const matchesId = String(s.id || '').includes(q);
        if (!matchesName && !matchesEscola && !matchesTurma && !matchesId) return false;
      }
      return true;
    });
  }, [urgentStudentsList, urgentLevelFilter, urgentSchoolFilter, urgentTurmaFilter, urgentSearch]);

  // Grouped by School
  const neeFilteredStats = useMemo(() => getNeeInterventionStats(filteredUrgentStudents), [filteredUrgentStudents]);

  const urgentGroupedBySchool = useMemo(() => {
    const map = new Map<string, typeof filteredUrgentStudents>();
    
    filteredUrgentStudents.forEach(s => {
      if (!map.has(s.escola)) {
        map.set(s.escola, []);
      }
      map.get(s.escola)!.push(s);
    });

    const groups = Array.from(map.entries()).map(([escola, alunos]) => {
      const n1Count = alunos.filter(a => a.s1 === 'N1').length;
      const n2Count = alunos.filter(a => a.s1 === 'N2').length;
      return {
        escola,
        formattedEscola: formatSchoolShortName(escola),
        alunos: alunos.sort((a, b) => a.turma.localeCompare(b.turma) || a.name.localeCompare(b.name)),
        totalAlunos: alunos.length,
        neeStats: getNeeInterventionStats(alunos),
        n1Count,
        n2Count
      };
    });

    // Sort schools with most urgent students first
    return groups.sort((a, b) => b.totalAlunos - a.totalAlunos || a.escola.localeCompare(b.escola));
  }, [filteredUrgentStudents]);

  // Toggle Collapse of a School Card
  const toggleSchoolCollapse = (escola: string) => {
    setCollapsedSchools(prev => ({
      ...prev,
      [escola]: !prev[escola]
    }));
  };

  const expandAllSchools = () => {
    setCollapsedSchools({});
  };

  const collapseAllSchools = () => {
    const collapsed: Record<string, boolean> = {};
    urgentGroupedBySchool.forEach(g => {
      collapsed[g.escola] = true;
    });
    setCollapsedSchools(collapsed);
  };

  // Nominal Cohort (N1 and N2 at Entrada CAED)
  const nominalCohort = useMemo(() => {
    return studentsData
      .filter(s => s.entrada === 'N1' || s.entrada === 'N2')
      .map(s => {
        const evo = calculateInterventionEvolution(s);
        return {
          ...s,
          evolution: evo
        };
      });
  }, [studentsData]);

  // Available Filter Options for Nominal View
  const availableSchools = useMemo(() => {
    const list = Array.from(new Set(nominalCohort.map(s => s.escola))).sort();
    return list;
  }, [nominalCohort]);

  const availableTurmas = useMemo(() => {
    let filtered = nominalCohort;
    if (selectedEscola !== 'TODAS') {
      filtered = filtered.filter(s => s.escola === selectedEscola);
    }
    return Array.from(new Set(filtered.map(s => s.turma))).sort();
  }, [nominalCohort, selectedEscola]);

  // Filtered Nominal Cohort
  const filteredNominalStudents = useMemo(() => {
    return nominalCohort.filter(s => {
      // Escola filter
      if (selectedEscola !== 'TODAS' && s.escola !== selectedEscola) return false;
      // Turma filter
      if (selectedTurma !== 'TODAS' && s.turma !== selectedTurma) return false;
      // Entrada Level filter
      if (selectedEntradaLevel !== 'TODOS' && s.entrada !== selectedEntradaLevel) return false;
      // Status filter
      if (selectedStatus !== 'TODOS' && s.evolution.tag !== selectedStatus) return false;
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = s.name.toLowerCase().includes(q);
        const matchesEscola = s.escola.toLowerCase().includes(q);
        const matchesTurma = s.turma.toLowerCase().includes(q);
        const matchesId = String(s.id || '').includes(q);
        if (!matchesName && !matchesEscola && !matchesTurma && !matchesId) return false;
      }
      return true;
    });
  }, [nominalCohort, selectedEscola, selectedTurma, selectedEntradaLevel, selectedStatus, searchQuery]);

  // Pagination for Nominal View
  const totalPages = Math.max(1, Math.ceil(filteredNominalStudents.length / pageSize));
  const paginatedStudents = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredNominalStudents.slice(start, start + pageSize);
  }, [filteredNominalStudents, currentPage, pageSize]);

  // Macro Network Statistics
  const macroStats = useMemo(() => {
    const totalAvaliados = macroRankingData.reduce((acc, s) => acc + s.avaliados, 0);
    const totalN1 = macroRankingData.reduce((acc, s) => acc + s.n1Count, 0);
    const totalN2 = macroRankingData.reduce((acc, s) => acc + s.n2Count, 0);
    const totalIVC = totalN1 + totalN2;
    const ivcPercRede = totalAvaliados > 0 ? Number(((totalIVC / totalAvaliados) * 100).toFixed(1)) : 0;
    
    const criticasCount = macroRankingData.filter(s => s.ivcPerc >= 25).length;
    const atencaoCount = macroRankingData.filter(s => s.ivcPerc >= 15 && s.ivcPerc < 25).length;
    const acompanhamentoCount = macroRankingData.filter(s => s.ivcPerc >= 8 && s.ivcPerc < 15).length;
    const regularCount = macroRankingData.filter(s => s.ivcPerc < 8).length;

    // Longitudinal Cohort Metrics (Entrada N1/N2 reavaliados no 1º Simulado)
    const cohortTotal = nominalCohort.length;
    const cohortAvaliados = nominalCohort.filter(s => s.s1 && s.s1 !== 'NÃO AVALIADO').length;
    const cohortSuperaram = nominalCohort.filter(s => s.s1 && s.s1 !== 'N1' && s.s1 !== 'N2' && s.s1 !== 'NÃO AVALIADO').length;
    const taxaSuperacaoPerc = cohortAvaliados > 0 ? Number(((cohortSuperaram / cohortAvaliados) * 100).toFixed(1)) : 0;

    const semAvancoCount = nominalCohort.filter(s => s.evolution.tag === 'danger').length;
    const pontualCount = nominalCohort.filter(s => s.evolution.tag === 'warning').length;
    const expressivoCount = nominalCohort.filter(s => s.evolution.tag === 'info').length;
    const excepcionalCount = nominalCohort.filter(s => s.evolution.tag === 'success').length;
    const naoAvaliadoCount = nominalCohort.filter(s => s.evolution.tag === 'neutral').length;

    // Urgent 1º Simulado Stats
    const totalUrgentS1 = urgentStudentsList.length;
    const totalN1_S1 = urgentStudentsList.filter(s => s.s1 === 'N1').length;
    const totalN2_S1 = urgentStudentsList.filter(s => s.s1 === 'N2').length;
    const totalEscolasComUrgentes = new Set(urgentStudentsList.map(s => s.escola)).size;

    return {
      totalAvaliados,
      totalN1,
      totalN2,
      totalIVC,
      ivcPercRede,
      criticasCount,
      atencaoCount,
      acompanhamentoCount,
      regularCount,
      cohortTotal,
      cohortAvaliados,
      cohortSuperaram,
      taxaSuperacaoPerc,
      semAvancoCount,
      pontualCount,
      expressivoCount,
      excepcionalCount,
      naoAvaliadoCount,
      totalUrgentS1,
      totalN1_S1,
      totalN2_S1,
      totalEscolasComUrgentes
    };
  }, [macroRankingData, nominalCohort, urgentStudentsList]);

  // Export Urgent Intervention List to CSV
  const handleExportUrgentCSV = () => {
    const headers = [
      'ID',
      'Nome Completo do Aluno',
      'Identificacao NEE',
      'Unidade Escolar',
      'Turma',
      'Nivel 1º Simulado',
      'Entrada CAED',
      'Modo de Leitura',
      'Palavras Lidas',
      'Pseudopalavras Lidas',
      'Palavras Texto',
      'Diretriz de Intervencao Urgente'
    ];

    const rows = filteredUrgentStudents.map(s => {
      const modoDesc = s.s1Details?.modo || (s.s1 === 'N1' ? 'Não leu' : 'Soletrou');
      const palavras = s.s1Details?.palavras ?? 0;
      const pseudo = s.s1Details?.pseudopalavras ?? 0;
      const texto = s.s1Details?.texto ?? 0;
      const diretriz = s.s1 === 'N1'
        ? 'Aceleração fonológica intensiva (consciência fonêmica diária, rimas, aliterações e sons das letras)'
        : 'Reforço de decodificação silábica simples e formação de vocábulos curtos com sondagem semanal';

      return [
        s.id,
        `"${s.name}"`,
        isNeeStudent(s) ? 'NEE' : '',
        `"${s.escola}"`,
        `"${s.turma}"`,
        s.s1,
        s.entrada || 'N/A',
        `"${modoDesc}"`,
        palavras,
        pseudo,
        texto,
        `"${diretriz}"`
      ];
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `intervencao_personalizada_urgente_n1_n2_1simulado_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export Nominal Cohort to CSV
  const handleExportNominalCSV = () => {
    const headers = [
      'ID',
      'Estudante',
      'Identificacao NEE',
      'Unidade Escolar',
      'Turma',
      'Entrada CAED',
      '1º Simulado',
      'Variacao Nivel',
      'Classificacao Trajetoria',
      'Status Tag'
    ];

    const rows = filteredNominalStudents.map(s => [
      s.id,
      `"${s.name}"`,
      isNeeStudent(s) ? 'NEE' : '',
      `"${s.escola}"`,
      `"${s.turma}"`,
      s.entrada || 'N/A',
      s.s1 || 'NÃO AVALIADO',
      s.evolution.diffLabel,
      `"${s.evolution.label}"`,
      s.evolution.tag
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `rastreamento_intervencao_pinda_${modo}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export Macro Ranking to CSV
  const handleExportMacroCSV = () => {
    const headers = [
      'Posicao',
      'Unidade Escolar',
      'Avaliados',
      'Previstos',
      'Participacao (%)',
      'N1 Perc (%)',
      'N1 Alunos',
      'N2 Perc (%)',
      'N2 Alunos',
      'IVC Total (%)',
      'Total Alunos Criticos (N1+N2)',
      'Status de Risco'
    ];

    const rows = sortedMacroRanking.map((s, idx) => [
      idx + 1,
      `"${s.name}"`,
      s.avaliados,
      s.previstos,
      s.participacao,
      s.n1Perc,
      s.n1Count,
      s.n2Perc,
      s.n2Count,
      s.ivcPerc,
      s.ivcAlunos,
      `"${s.riskStatus}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `ranking_ivc_escolas_pinda_${modo}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Top 8 Critical Schools Chart Data
  const topCriticalChartData = useMemo(() => {
    return [...macroRankingData]
      .sort((a, b) => b.ivcPerc - a.ivcPerc)
      .slice(0, 8)
      .map(s => ({
        name: s.name.replace('E.M. PROFª ', '').replace('E.M. PROF. ', '').replace('E.M. ', '').slice(0, 18),
        fullName: s.name,
        n1: s.n1Perc,
        n2: s.n2Perc,
        ivc: s.ivcPerc,
        avaliados: s.avaliados,
        alunosCriticos: s.ivcAlunos
      }));
  }, [macroRankingData]);

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-rose-950 to-red-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-rose-800/40">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <AlertTriangle className="w-80 h-80 text-rose-400" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/20 text-rose-300 rounded-full text-xs font-black uppercase tracking-wider mb-4 border border-rose-500/30">
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              Supervisão Pedagógica & Gestão Emergencial
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase">
              Módulo de Intervenção Prioritária
            </h1>
            <p className="text-rose-200 text-sm sm:text-base font-medium mt-2 leading-relaxed">
              Acesso nominal completo aos estudantes em <strong>Nível 1 (Não Leitor)</strong> e <strong>Nível 2 (Silábico / Soletração)</strong> no 1º Simulado, 
              organizados por unidade escolar para direcionamento cirúrgico de recomposição de aprendizagem.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                if (modo === 'urgente') handleExportUrgentCSV();
                else if (modo === 'nominal') handleExportNominalCSV();
                else handleExportMacroCSV();
              }}
              className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 border border-white/20 active:scale-95 shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4 text-rose-300" />
              {modo === 'urgente' ? 'Exportar Lista Nominal (CSV)' : 'Exportar CSV'}
            </button>
          </div>
        </div>

        {/* Mode Selector Tabs */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
          <span className="text-xs font-black uppercase tracking-widest text-rose-300/80 mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" /> Selecionar Visão:
          </span>

          {/* Destaque Principal: Intervenção Personalizada Urgente */}
          <button
            onClick={() => { setModo('urgente'); }}
            className={`px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer relative ${
              modo === 'urgente'
                ? 'bg-rose-500 text-white shadow-xl scale-[1.03] border-2 border-rose-300 font-black ring-2 ring-rose-400/50'
                : 'bg-rose-500/20 hover:bg-rose-500/40 text-rose-200 border border-rose-400/40'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-300 animate-bounce" />
            <span>Intervenção Personalizada Urgente</span>
            <span className="ml-1 px-2 py-0.5 bg-black/40 text-rose-200 rounded-full text-[10px] font-black border border-white/20">
              {macroStats.totalUrgentS1} Alunos
            </span>
          </button>
          
          <button
            onClick={() => { setModo('simulado1'); setCurrentPage(1); }}
            className={`px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              modo === 'simulado1'
                ? 'bg-white text-rose-950 shadow-lg scale-[1.02] border border-white'
                : 'bg-white/10 hover:bg-white/20 text-white/90 border border-white/10'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            Ranking IVC (1º Simulado)
          </button>

          <button
            onClick={() => { setModo('caed'); setCurrentPage(1); }}
            className={`px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              modo === 'caed'
                ? 'bg-white text-rose-950 shadow-lg scale-[1.02] border border-white'
                : 'bg-white/10 hover:bg-white/20 text-white/90 border border-white/10'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-amber-400" />
            Ranking IVC (Entrada CAED)
          </button>

          <button
            onClick={() => { setModo('nominal'); setCurrentPage(1); }}
            className={`px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              modo === 'nominal'
                ? 'bg-white text-rose-950 shadow-lg scale-[1.02] border border-white font-black'
                : 'bg-white/10 hover:bg-white/20 text-white/90 border border-white/10'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            Rastreamento Longitudinal (Coorte Entrada)
          </button>
        </div>
      </div>

      {/* KPI Cards Summary */}
      <NeeInterventionCard students={urgentStudentsList} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* KPI 1: Alunos em N1 e N2 no 1º Simulado */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between border-l-8 border-l-rose-600">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider">
              Casos Urgentes (1º Simulado)
            </span>
            <div className="p-2 bg-rose-50 text-rose-600 rounded-xl">
              <Zap className="w-5 h-5" />
            </div>
          </div>
          <div className="my-3">
            <div className="text-3xl font-black text-slate-900 tracking-tight">
              {macroStats.totalUrgentS1} <span className="text-sm font-bold text-rose-600">alunos</span>
            </div>
            <p className="text-xs font-bold text-slate-600 mt-1">
              Classificados em N1 ou N2 no 1º Simulado
            </p>
          </div>
          <div className="text-[10px] font-bold text-slate-500 flex items-center justify-between border-t pt-2.5">
            <span className="text-red-600 font-black">N1 (Não Leu): {macroStats.totalN1_S1}</span>
            <span>•</span>
            <span className="text-orange-600 font-black">N2 (Soletrou): {macroStats.totalN2_S1}</span>
          </div>
        </div>

        {/* KPI 2: Escolas com Casos Urgentes */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between border-l-8 border-l-red-500">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider">
              Unidades Escolares Afetadas
            </span>
            <div className="p-2 bg-red-50 text-red-600 rounded-xl">
              <School className="w-5 h-5" />
            </div>
          </div>
          <div className="my-3">
            <div className="text-3xl font-black text-red-600 tracking-tight">
              {macroStats.totalEscolasComUrgentes} <span className="text-sm font-bold text-slate-400">/ {schoolsData.length} escolas</span>
            </div>
            <p className="text-xs font-bold text-slate-500 mt-1">
              Possuem alunos nos níveis críticos de leitura
            </p>
          </div>
          <div className="text-[10px] font-bold text-slate-400 flex items-center justify-between border-t pt-2.5">
            <span className="text-emerald-700 font-bold">{schoolsData.length - macroStats.totalEscolasComUrgentes} sem alunos N1/N2</span>
          </div>
        </div>

        {/* KPI 3: IVC Médio da Rede */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between border-l-8 border-l-amber-500">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider">
              IVC Geral da Rede (1º Simulado)
            </span>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>
          <div className="my-3">
            <div className="text-3xl font-black text-slate-900 tracking-tight">
              {macroStats.ivcPercRede}%
            </div>
            <p className="text-xs font-bold text-amber-700 mt-1">
              {macroStats.totalIVC} estudantes no grupo vulnerável
            </p>
          </div>
          <div className="text-[10px] font-bold text-slate-400 flex items-center justify-between border-t pt-2.5">
            <span>IFL Médio: {macroRankingData[0]?.iflVal ? 'Rede Monitorada' : '—'}</span>
          </div>
        </div>

        {/* KPI 4: Taxa de Superação da Coorte */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between border-l-8 border-l-emerald-600">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider">
              Superação da Entrada CAED
            </span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="my-3">
            <div className="text-3xl font-black text-emerald-700 tracking-tight">
              {macroStats.taxaSuperacaoPerc}%
            </div>
            <p className="text-xs font-bold text-slate-600 mt-1">
              {macroStats.cohortSuperaram} alunos superaram N1/N2 da entrada
            </p>
          </div>
          <div className="text-[10px] font-bold text-slate-400 flex items-center justify-between border-t pt-2.5">
            <span className="text-emerald-700 font-bold">{macroStats.excepcionalCount} atingiram Leitura</span>
            <span className="text-rose-600 font-bold">{macroStats.semAvancoCount} estagnados</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODO 1: INTERVENÇÃO PERSONALIZADA URGENTE (LISTA NOMINAL POR ESCOLA) */}
      {/* ========================================================================= */}
      {modo === 'urgente' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Controls and Filter Bar */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-rose-50 text-rose-600 rounded-xl">
                    <Zap className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">
                      Intervenção Personalizada Urgente — Alunos Níveis 1 e 2
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-0.5">
                      Identificação nominal detalhada por Unidade Escolar no 1º Simulado da Fluência Leitora
                    </p>
                  </div>
                </div>
              </div>

              {/* View Layout Switcher & Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex bg-slate-100 p-1 rounded-2xl border border-slate-200">
                  <button
                    onClick={() => setUrgentViewLayout('grouped')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                      urgentViewLayout === 'grouped'
                        ? 'bg-white text-rose-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Agrupado por Escola
                  </button>
                  <button
                    onClick={() => setUrgentViewLayout('table')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                      urgentViewLayout === 'table'
                        ? 'bg-white text-rose-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Tabela Unificada Geral
                  </button>
                </div>

                {urgentViewLayout === 'grouped' && (
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={expandAllSchools}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      Expandir Todas
                    </button>
                    <button
                      onClick={collapseAllSchools}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      Recolher Todas
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Filter Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider mr-1">
                Filtro por Nível:
              </span>
              <button
                onClick={() => setUrgentLevelFilter('TODOS')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                  urgentLevelFilter === 'TODOS'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                Todos ({urgentStudentsList.length})
              </button>
              <button
                onClick={() => setUrgentLevelFilter('N1')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer border flex items-center gap-1.5 ${
                  urgentLevelFilter === 'N1'
                    ? 'bg-red-600 text-white border-red-600 shadow-sm'
                    : 'bg-red-50 hover:bg-red-100 text-red-700 border-red-200'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-400" />
                Nível 1 — Não Leu ({macroStats.totalN1_S1})
              </button>
              <button
                onClick={() => setUrgentLevelFilter('N2')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer border flex items-center gap-1.5 ${
                  urgentLevelFilter === 'N2'
                    ? 'bg-orange-600 text-white border-orange-600 shadow-sm'
                    : 'bg-orange-50 hover:bg-orange-100 text-orange-700 border-orange-200'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                Nível 2 — Soletrou ({macroStats.totalN2_S1})
              </button>
            </div>

            {/* Filter Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {/* Escola Filter */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  Filtrar Unidade Escolar:
                </label>
                <select
                  value={urgentSchoolFilter}
                  onChange={(e) => {
                    setUrgentSchoolFilter(e.target.value);
                    setUrgentTurmaFilter('TODAS');
                  }}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer"
                >
                  <option value="TODAS">TODAS AS UNIDADES ({urgentAvailableSchools.length} com casos)</option>
                  {urgentAvailableSchools.map(s => {
                    const count = urgentStudentsList.filter(st => st.escola === s).length;
                    return (
                      <option key={s} value={s}>
                        {formatSchoolShortName(s)} ({count} alunos)
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Turma Filter */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  Filtrar Turma:
                </label>
                <select
                  value={urgentTurmaFilter}
                  onChange={(e) => setUrgentTurmaFilter(e.target.value)}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer"
                >
                  <option value="TODAS">TODAS AS TURMAS ({urgentAvailableTurmas.length})</option>
                  {urgentAvailableTurmas.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Search Box */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  Buscar Estudante:
                </label>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={urgentSearch}
                    onChange={(e) => setUrgentSearch(e.target.value)}
                    placeholder="Digite o nome do aluno ou matrícula..."
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl pl-9 pr-3 py-2 text-xs font-bold text-slate-800 outline-none focus:ring-2 focus:ring-rose-500 placeholder:font-medium placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Active Filters Message & Clear */}
            {(urgentSchoolFilter !== 'TODAS' || urgentTurmaFilter !== 'TODAS' || urgentLevelFilter !== 'TODOS' || urgentSearch) && (
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-rose-700">
                  Mostrando <strong>{filteredUrgentStudents.length}</strong> de {urgentStudentsList.length} alunos urgentes
                  <span className="ml-3 inline-block rounded-lg bg-violet-50 px-2 py-1 text-violet-800">NEE neste recorte: {neeFilteredStats.nee} de {neeFilteredStats.total} ({neeFilteredStats.percentage.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%)</span>
                </span>
                <button
                  onClick={() => {
                    setUrgentSchoolFilter('TODAS');
                    setUrgentTurmaFilter('TODAS');
                    setUrgentLevelFilter('TODOS');
                    setUrgentSearch('');
                  }}
                  className="text-xs font-black text-rose-600 hover:text-rose-800 underline cursor-pointer"
                >
                  Limpar todos os filtros
                </button>
              </div>
            )}
          </div>

          {/* VIEW LAYOUT 1: GROUPED BY SCHOOL CARDS */}
          {urgentViewLayout === 'grouped' ? (
            <div className="space-y-4">
              {urgentGroupedBySchool.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-gray-200">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <h4 className="text-base font-black text-slate-800">Nenhum aluno encontrado</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Não foram localizados alunos com os filtros informados.
                  </p>
                </div>
              ) : (
                urgentGroupedBySchool.map(group => {
                  const isCollapsed = collapsedSchools[group.escola];

                  return (
                    <div 
                      key={group.escola}
                      className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden transition-all"
                    >
                      {/* School Header Accordion Bar */}
                      <div 
                        onClick={() => toggleSchoolCollapse(group.escola)}
                        className="p-5 sm:p-6 bg-slate-50 hover:bg-slate-100/80 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-2xl">
                            <School className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-base font-black text-slate-900 tracking-tight">
                                {group.formattedEscola}
                              </h4>
                              <span className="px-2.5 py-0.5 bg-rose-600 text-white rounded-full text-xs font-black shadow-2xs">
                                {group.totalAlunos} {group.totalAlunos === 1 ? 'Aluno' : 'Alunos'}
                              </span>
                            </div>
                            <div className="text-xs font-bold text-slate-500 flex items-center gap-2 mt-0.5">
                              <span className="text-red-700 font-black">🔴 Nível 1: {group.n1Count}</span>
                              <span>•</span>
                              <span className="text-orange-700 font-black">🟠 Nível 2: {group.n2Count}</span>
                            </div>
                            <div className="mt-2 inline-block rounded-lg border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-800">NEE: {group.neeStats.nee} de {group.neeStats.total} alunos N1/N2 • {group.neeStats.percentage.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (onNavigateToSchool) onNavigateToSchool(group.escola);
                            }}
                            className="px-3 py-1.5 bg-white hover:bg-rose-50 text-rose-700 rounded-xl text-xs font-black border border-gray-200 hover:border-rose-300 transition-all flex items-center gap-1 cursor-pointer"
                          >
                            <span>Ver Escola</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                          <div className="p-1 text-slate-400">
                            {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </div>
                        </div>
                      </div>

                      {/* Students Table for this School */}
                      {!isCollapsed && (
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50/60 text-slate-500 font-black uppercase text-[10px] tracking-wider border-b border-gray-100">
                              <tr>
                                <th className="px-5 py-3.5 w-12 text-center">Nº</th>
                                <th className="px-5 py-3.5">Estudante</th>
                                <th className="px-5 py-3.5 text-center">Turma</th>
                                <th className="px-5 py-3.5 text-center">Nível 1º Simulado</th>
                                <th className="px-5 py-3.5 text-center">Entrada CAED</th>
                                <th className="px-5 py-3.5">Diagnóstico do Teste</th>
                                <th className="px-5 py-3.5">Diretriz de Intervenção Pedagógica Urgente</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                              {group.alunos.map((student, idx) => {
                                const modoDesc = student.s1Details?.modo || (student.s1 === 'N1' ? 'Não leu palavras' : 'Soletrou palavras');
                                const palavras = student.s1Details?.palavras ?? 0;
                                const pseudo = student.s1Details?.pseudopalavras ?? 0;
                                const isN1 = student.s1 === 'N1';

                                return (
                                  <tr 
                                    key={student.id} 
                                    className={`hover:bg-rose-50/20 transition-colors border-l-4 ${
                                      isN1 ? 'border-l-red-600' : 'border-l-orange-500'
                                    }`}
                                  >
                                    <td className="px-5 py-3.5 text-center font-bold text-slate-400 text-xs">
                                      {idx + 1}
                                    </td>
                                    
                                    <td className="px-5 py-3.5">
                                      <div className="font-black text-slate-900 text-sm">
                                        <NeeBadge student={student} />{student.name}
                                      </div>
                                      <div className="text-[10px] font-bold text-slate-400">
                                        Matrícula: #{student.id} {student.numero ? `• Nº Chamada: ${student.numero}` : ''}
                                      </div>
                                    </td>

                                    <td className="px-5 py-3.5 text-center">
                                      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-black uppercase">
                                        {student.turma}
                                      </span>
                                    </td>

                                    <td className="px-5 py-3.5 text-center">
                                      <span className={`px-3 py-1.5 rounded-xl text-xs font-black border inline-flex items-center gap-1.5 shadow-2xs ${
                                        isN1 
                                          ? 'bg-red-600 text-white border-red-700' 
                                          : 'bg-orange-500 text-white border-orange-600'
                                      }`}>
                                        <AlertCircle className="w-3.5 h-3.5" />
                                        {isN1 ? 'NÍVEL 1 (Não Leu)' : 'NÍVEL 2 (Soletrou)'}
                                      </span>
                                    </td>

                                    <td className="px-5 py-3.5 text-center">
                                      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                                        student.entrada === 'N1'
                                          ? 'bg-red-50 text-red-800 border-red-200'
                                          : student.entrada === 'N2'
                                          ? 'bg-orange-50 text-orange-800 border-orange-200'
                                          : 'bg-slate-100 text-slate-700 border-slate-200'
                                      }`}>
                                        {student.entrada ? `Entrada: ${student.entrada}` : 'Não Informado'}
                                      </span>
                                    </td>

                                    <td className="px-5 py-3.5">
                                      <div className="text-xs font-bold text-slate-700">
                                        {modoDesc}
                                      </div>
                                      <div className="text-[10px] font-bold text-slate-400 mt-0.5">
                                        Palavras: {palavras} • Pseudopalavras: {pseudo}
                                      </div>
                                    </td>

                                    <td className="px-5 py-3.5">
                                      <div className="text-xs font-medium text-slate-700 max-w-[340px] leading-snug">
                                        {isN1 ? (
                                          <span className="text-red-900 font-bold bg-red-50 px-2 py-1 rounded-lg border border-red-200 block">
                                            Aceleração fonológica intensiva: foco em consciência fonêmica, rimas e correspondência grafema-fonema.
                                          </span>
                                        ) : (
                                          <span className="text-orange-900 font-bold bg-orange-50 px-2 py-1 rounded-lg border border-orange-200 block">
                                            Reforço de junção silábica: treino diário de decodificação de sílabas canônicas (CV) e leitura de palavras simples.
                                          </span>
                                        )}
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          ) : (
            /* VIEW LAYOUT 2: UNIFIED FULL TABLE */
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-black text-slate-800 uppercase tracking-tight">
                    Tabela Unificada Geral — {filteredUrgentStudents.length} Estudantes em Intervenção Urgente
                  </h4>
                  <p className="text-xs text-slate-400 font-bold">
                    Listagem consolidada de toda a rede municipal ordenada por Unidade Escolar e Turma
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-500 font-black uppercase text-[10px] tracking-wider border-b border-gray-100">
                    <tr>
                      <th className="px-5 py-4 w-12 text-center">Nº</th>
                      <th className="px-5 py-4">Estudante</th>
                      <th className="px-5 py-4">Unidade Escolar</th>
                      <th className="px-5 py-4 text-center">Turma</th>
                      <th className="px-5 py-4 text-center">Nível 1º Simulado</th>
                      <th className="px-5 py-4 text-center">Entrada CAED</th>
                      <th className="px-5 py-4">Diagnóstico</th>
                      <th className="px-5 py-4">Diretriz Pedagógica</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredUrgentStudents.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="px-6 py-12 text-center text-slate-400 font-bold">
                          Nenhum estudante encontrado para os filtros selecionados.
                        </td>
                      </tr>
                    ) : (
                      filteredUrgentStudents.map((student, idx) => {
                        const isN1 = student.s1 === 'N1';
                        const modoDesc = student.s1Details?.modo || (isN1 ? 'Não leu palavras' : 'Soletrou palavras');

                        return (
                          <tr 
                            key={`${student.id}-${idx}`}
                            className={`hover:bg-slate-50 transition-colors border-l-4 ${
                              isN1 ? 'border-l-red-600' : 'border-l-orange-500'
                            }`}
                          >
                            <td className="px-5 py-4 text-center font-bold text-slate-400 text-xs">
                              {idx + 1}
                            </td>

                            <td className="px-5 py-4">
                              <div className="font-black text-slate-900 text-sm">
                                <NeeBadge student={student} />{student.name}
                              </div>
                              <div className="text-[10px] font-bold text-slate-400">
                                Matrícula: #{student.id}
                              </div>
                            </td>

                            <td className="px-5 py-4">
                              <div className="font-bold text-slate-700 text-xs">
                                {formatSchoolShortName(student.escola)}
                              </div>
                            </td>

                            <td className="px-5 py-4 text-center">
                              <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md text-xs font-black uppercase">
                                {student.turma}
                              </span>
                            </td>

                            <td className="px-5 py-4 text-center">
                              <span className={`px-2.5 py-1 rounded-xl text-xs font-black border inline-flex items-center gap-1 shadow-2xs ${
                                isN1 ? 'bg-red-600 text-white border-red-700' : 'bg-orange-500 text-white border-orange-600'
                              }`}>
                                {isN1 ? 'N1 (Não Leu)' : 'N2 (Soletrou)'}
                              </span>
                            </td>

                            <td className="px-5 py-4 text-center">
                              <span className="px-2 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                                {student.entrada || '—'}
                              </span>
                            </td>

                            <td className="px-5 py-4">
                              <span className="text-xs font-bold text-slate-700 block">
                                {modoDesc}
                              </span>
                              <span className="text-[10px] text-slate-400 font-bold">
                                Palavras: {student.s1Details?.palavras ?? 0}
                              </span>
                            </td>

                            <td className="px-5 py-4">
                              <span className={`text-xs font-bold block max-w-[280px] ${isN1 ? 'text-red-700' : 'text-orange-700'}`}>
                                {isN1 ? 'Consciência fonêmica intensiva' : 'Reforço de junção silábica simples'}
                              </span>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODO 2 & 3: RANKING DE ESCOLAS POR ÍNDICE CRÍTICO (VISÃO MACRO) */}
      {/* ========================================================================= */}
      {(modo === 'simulado1' || modo === 'caed') && (
        <div className="space-y-8 animate-fadeIn">
          {/* Top 8 Critical Schools Chart */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4 mb-6">
              <div>
                <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                  Top Escolas com Maior Índice de Vulnerabilidade Crítica (IVC)
                </h3>
                <p className="text-xs font-bold text-slate-400 mt-0.5">
                  Visualização da concentração percentual de Nível 1 (Não Leu) e Nível 2 (Soletrou)
                </p>
              </div>
              <span className="text-xs font-black px-3 py-1 bg-rose-50 text-rose-800 rounded-full border border-rose-200">
                {modo === 'caed' ? 'Base Entrada CAED 2026' : '1º Simulado Municipal 2026'}
              </span>
            </div>

            <div className="h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={topCriticalChartData}
                  margin={{ top: 20, right: 30, left: 10, bottom: 40 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 11, fill: '#64748b', fontWeight: 'bold' }} 
                    angle={-20}
                    textAnchor="end"
                    interval={0}
                  />
                  <YAxis 
                    domain={[0, 'auto']} 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 'bold' }} 
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip 
                    formatter={(val: any, name: string, item: any) => [
                      `${val}% (${name === 'Nível 1' ? Math.round((val / 100) * item.payload.avaliados) : Math.round((val / 100) * item.payload.avaliados)} alunos)`,
                      name
                    ]}
                    labelFormatter={(label, payload) => {
                      if (payload && payload[0]) {
                        return payload[0].payload.fullName;
                      }
                      return label;
                    }}
                    contentStyle={{ borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                  />
                  <Legend verticalAlign="top" align="right" height={36} />
                  <Bar dataKey="n1" name="Nível 1 (Não Leu)" stackId="a" fill="#DC2626" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="n2" name="Nível 2 (Soletrou)" stackId="a" fill="#F97316" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Master Ranking Table */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                  <ShieldAlert className="w-6 h-6 text-rose-600" />
                  Ranking de Escolas por Vulnerabilidade Crítica (IVC = %N1 + %N2)
                </h2>
                <p className="text-xs font-bold text-slate-400 mt-1">
                  Exibindo {sortedMacroRanking.length} unidades escolares ordenadas por urgência de intervenção pedagógica
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setSortKey('ivc');
                    setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc');
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <ArrowUpDown className="w-3.5 h-3.5" />
                  Ordenar IVC ({sortOrder === 'desc' ? 'Maior ➔ Menor' : 'Menor ➔ Maior'})
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500 font-black uppercase text-[10px] tracking-wider border-b border-gray-100">
                  <tr>
                    <th className="px-5 py-4 text-center w-16">Posição</th>
                    <th className="px-5 py-4">Unidade Escolar</th>
                    <th className="px-5 py-4 text-center">Avaliados</th>
                    <th className="px-5 py-4 text-center text-red-600">% N1 (Não Leu)</th>
                    <th className="px-5 py-4 text-center text-orange-600">% N2 (Soletrou)</th>
                    <th className="px-5 py-4 text-center bg-rose-50/50 text-rose-900 font-black">IVC Total (N1 + N2)</th>
                    <th className="px-5 py-4 text-center">Status de Risco</th>
                    <th className="px-5 py-4 text-right">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {sortedMacroRanking.map((school, index) => (
                    <tr 
                      key={school.name}
                      className="hover:bg-rose-50/30 transition-colors group"
                    >
                      {/* Posição */}
                      <td className="px-5 py-4 text-center font-black">
                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-black ${
                          index < 3 
                            ? 'bg-rose-600 text-white shadow-sm' 
                            : index < 10 
                            ? 'bg-slate-800 text-white' 
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {index + 1}º
                        </span>
                      </td>

                      {/* Nome da Escola */}
                      <td className="px-5 py-4">
                        <div className="font-black text-slate-800 group-hover:text-rose-700 transition-colors text-sm">
                          {formatSchoolShortName(school.name)}
                        </div>
                        <div className="text-[11px] font-bold text-slate-400 flex items-center gap-2 mt-0.5">
                          <span>Previstos: {school.previstos}</span>
                          <span>•</span>
                          <span>Participação: {school.participacao}%</span>
                          <span>•</span>
                          <span>IFL: {school.iflVal}</span>
                        </div>
                      </td>

                      {/* Avaliados */}
                      <td className="px-5 py-4 text-center font-bold text-slate-700">
                        {school.avaliados}
                      </td>

                      {/* % N1 (Não Leu) */}
                      <td className="px-5 py-4 text-center">
                        <span className="font-black text-red-600 text-sm">
                          {school.n1Perc.toFixed(1)}%
                        </span>
                        <div className="text-[10px] font-bold text-slate-400">
                          ({school.n1Count} alunos)
                        </div>
                      </td>

                      {/* % N2 (Soletrou) */}
                      <td className="px-5 py-4 text-center">
                        <span className="font-black text-orange-600 text-sm">
                          {school.n2Perc.toFixed(1)}%
                        </span>
                        <div className="text-[10px] font-bold text-slate-400">
                          ({school.n2Count} alunos)
                        </div>
                      </td>

                      {/* IVC Total (N1 + N2) */}
                      <td className="px-5 py-4 text-center bg-rose-50/40">
                        <div className="inline-flex flex-col items-center">
                          <span className="font-black text-rose-900 text-base">
                            {school.ivcPerc.toFixed(1)}%
                          </span>
                          <span className="text-[10px] font-bold text-rose-700">
                            {school.ivcAlunos} alunos em risco
                          </span>
                          <div className="w-24 h-1.5 bg-slate-200 rounded-full mt-1.5 overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                school.ivcPerc >= 25 ? 'bg-red-600' : school.ivcPerc >= 15 ? 'bg-orange-500' : 'bg-amber-500'
                              }`}
                              style={{ width: `${Math.min(100, school.ivcPerc)}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* Status de Risco */}
                      <td className="px-5 py-4 text-center">
                        <span className={`px-3 py-1.5 rounded-xl text-xs font-black border uppercase tracking-wider inline-flex items-center gap-1.5 ${school.riskBadge}`}>
                          {school.riskStatus}
                        </span>
                      </td>

                      {/* Ação */}
                      <td className="px-5 py-4 text-right">
                        <button
                          onClick={() => {
                            setUrgentSchoolFilter(school.name);
                            setModo('urgente');
                          }}
                          className="px-3.5 py-1.5 bg-rose-50 hover:bg-rose-600 text-rose-700 hover:text-white rounded-xl font-black text-xs transition-all border border-rose-200 hover:border-rose-600 shadow-2xs inline-flex items-center gap-1 cursor-pointer"
                          title="Ver alunos críticos desta unidade"
                        >
                          <Zap className="w-3.5 h-3.5" />
                          <span>Ver Alunos N1/N2</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODO 4: PAINEL NOMINAL COMPARATIVO (RASTREIO DA COORTE DE ENTRADA) */}
      {/* ========================================================================= */}
      {modo === 'nominal' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Matriz Pedagógica de Trajetória da Coorte */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white shadow-md border border-slate-700">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-700 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-rose-500/20 text-rose-300 rounded-xl border border-rose-500/30">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white uppercase tracking-wider">
                    Matriz de Evolução Pedagógica (Régua da Coorte N1/N2)
                  </h3>
                  <p className="text-xs text-slate-300">
                    Classificação automática de avanço entre a Entrada CAED e o 1º Simulado para estudantes em risco
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-bold bg-white/10 px-3 py-1 rounded-full text-slate-300">
                Escala: N1 (0) ➔ N2 (1) ➔ N3 (2) ➔ N4 (3) ➔ LI (4) ➔ LF (5)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-3.5 bg-red-950/40 border border-red-800/60 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-black uppercase text-red-300 bg-red-900/60 px-2 py-0.5 rounded">
                      Δ ≤ 0
                    </span>
                    <span className="text-xs font-black text-red-400">
                      {macroStats.semAvancoCount} alunos
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-red-200">🔴 Sem Avanço / Crítico</h4>
                  <p className="text-[11px] text-red-300/80 mt-1 leading-tight">
                    Permaneceu em N1 ou N2 sem evolução de nível. Requer intervenção individualizada emergencial.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-amber-950/40 border border-amber-800/60 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-black uppercase text-amber-300 bg-amber-900/60 px-2 py-0.5 rounded">
                      Δ = +1
                    </span>
                    <span className="text-xs font-black text-amber-400">
                      {macroStats.pontualCount} alunos
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-amber-200">🟡 Avanço Pontual (+1 nível)</h4>
                  <p className="text-[11px] text-amber-300/80 mt-1 leading-tight">
                    Evolução de N1 para N2 ou de N2 para N3. Avanço gradual no processo de decodificação.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-blue-950/40 border border-blue-800/60 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-black uppercase text-blue-300 bg-blue-900/60 px-2 py-0.5 rounded">
                      Δ = +2 ou +3
                    </span>
                    <span className="text-xs font-black text-blue-400">
                      {macroStats.expressivoCount} alunos
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-blue-200">🔵 Avanço Expressivo</h4>
                  <p className="text-[11px] text-blue-300/80 mt-1 leading-tight">
                    Saltou de N1/N2 para N3 ou N4. Excelente aceleração de domínio do código alfabético.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-emerald-950/40 border border-emerald-800/60 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-black uppercase text-emerald-300 bg-emerald-900/60 px-2 py-0.5 rounded">
                      Atingiu LI / LF
                    </span>
                    <span className="text-xs font-black text-emerald-400">
                      {macroStats.excepcionalCount} alunos
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-emerald-200">🟢 Avanço Excepcional</h4>
                  <p className="text-[11px] text-emerald-300/80 mt-1 leading-tight">
                    Saiu da não-leitura diretamente para Leitor Iniciante ou Fluente. Superação exemplar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Nominal Control & Filters Bar */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-600" />
                  Rastreamento Longitudinal da Coorte Crítica (Entrada N1 / N2)
                </h3>
                <p className="text-xs font-bold text-slate-400 mt-0.5">
                  Estudantes identificados na Entrada CAED e reavaliados no 1º Simulado 2026
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-black text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                  Total Filtrado: <strong>{filteredNominalStudents.length}</strong> de {nominalCohort.length} alunos
                </span>
              </div>
            </div>

            {/* Filter Controls Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {/* Filtro: Escola */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  Unidade Escolar:
                </label>
                <select
                  value={selectedEscola}
                  onChange={(e) => {
                    setSelectedEscola(e.target.value);
                    setSelectedTurma('TODAS');
                    setCurrentPage(1);
                  }}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer"
                >
                  <option value="TODAS">TODAS AS ESCOLAS ({availableSchools.length})</option>
                  {availableSchools.map(s => (
                    <option key={s} value={s}>{formatSchoolShortName(s)}</option>
                  ))}
                </select>
              </div>

              {/* Filtro: Turma */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  Turma:
                </label>
                <select
                  value={selectedTurma}
                  onChange={(e) => {
                    setSelectedTurma(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer"
                >
                  <option value="TODAS">TODAS AS TURMAS ({availableTurmas.length})</option>
                  {availableTurmas.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Filtro: Nível de Entrada */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  Nível na Entrada CAED:
                </label>
                <select
                  value={selectedEntradaLevel}
                  onChange={(e) => {
                    setSelectedEntradaLevel(e.target.value as any);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer"
                >
                  <option value="TODOS">TODOS (N1 + N2)</option>
                  <option value="N1">Apenas Nível 1 (Não Leu)</option>
                  <option value="N2">Apenas Nível 2 (Soletrou)</option>
                </select>
              </div>

              {/* Filtro: Trajetória / Status */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  Status de Evolução:
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => {
                    setSelectedStatus(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer"
                >
                  <option value="TODOS">TODOS OS STATUS</option>
                  <option value="danger">🔴 Sem Avanço / Crítico</option>
                  <option value="warning">🟡 Avanço Pontual (+1 nível)</option>
                  <option value="info">🔵 Avanço Expressivo (+2 ou +3)</option>
                  <option value="success">🟢 Avanço Excepcional (LI / LF)</option>
                  <option value="neutral">⚪ Não Avaliado no Simulado</option>
                </select>
              </div>

              {/* Busca por Nome */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  Buscar Estudante:
                </label>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Nome do aluno..."
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl pl-9 pr-3 py-2 text-xs font-bold text-slate-800 outline-none focus:ring-2 focus:ring-rose-500 placeholder:font-medium placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Quick Reset Filters Button */}
            {(selectedEscola !== 'TODAS' || selectedTurma !== 'TODAS' || selectedStatus !== 'TODOS' || selectedEntradaLevel !== 'TODOS' || searchQuery) && (
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-bold text-rose-700">
                  Filtros ativos aplicados na coorte
                </span>
                <button
                  onClick={() => {
                    setSelectedEscola('TODAS');
                    setSelectedTurma('TODAS');
                    setSelectedStatus('TODOS');
                    setSelectedEntradaLevel('TODOS');
                    setSearchQuery('');
                    setCurrentPage(1);
                  }}
                  className="text-xs font-black text-rose-600 hover:text-rose-800 underline cursor-pointer"
                >
                  Limpar todos os filtros
                </button>
              </div>
            )}
          </div>

          {/* Nominal Table */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500 font-black uppercase text-[10px] tracking-wider border-b border-gray-100">
                  <tr>
                    <th className="px-5 py-4 w-12 text-center">Nº</th>
                    <th className="px-5 py-4">Estudante</th>
                    <th className="px-5 py-4">Unidade Escolar & Turma</th>
                    <th className="px-5 py-4 text-center">Entrada CAED</th>
                    <th className="px-5 py-4 text-center">1º Simulado</th>
                    <th className="px-5 py-4 text-center">Variação (Δ)</th>
                    <th className="px-5 py-4">Classificação de Evolução</th>
                    <th className="px-5 py-4 text-right">Diretriz Pedagógica</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paginatedStudents.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-6 py-12 text-center text-slate-400 font-bold">
                        Nenhum estudante encontrado para os filtros selecionados.
                      </td>
                    </tr>
                  ) : (
                    paginatedStudents.map((student, idx) => {
                      const evo = student.evolution;
                      const EvoIcon = evo.icon;

                      return (
                        <tr 
                          key={`${student.id}-${idx}`}
                          className={`hover:bg-slate-50/80 transition-colors border-l-4 ${evo.borderLeft}`}
                        >
                          <td className="px-5 py-4 text-center font-bold text-slate-400 text-xs">
                            {(currentPage - 1) * pageSize + idx + 1}
                          </td>

                          <td className="px-5 py-4">
                            <div className="font-black text-slate-800 text-sm">
                              <NeeBadge student={student} />{student.name}
                            </div>
                            <div className="text-[10px] font-bold text-slate-400">
                              Matrícula / ID: #{student.id}
                            </div>
                          </td>

                          <td className="px-5 py-4">
                            <div className="font-bold text-slate-700 text-xs truncate max-w-[260px]" title={student.escola}>
                              {formatSchoolShortName(student.escola)}
                            </div>
                            <div className="inline-block mt-0.5 px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-black uppercase">
                              {student.turma}
                            </div>
                          </td>

                          <td className="px-5 py-4 text-center">
                            <span className={`px-2.5 py-1 rounded-lg text-xs font-black border ${
                              student.entrada === 'N1'
                                ? 'bg-red-50 text-red-800 border-red-200'
                                : 'bg-orange-50 text-orange-800 border-orange-200'
                            }`}>
                              {student.entrada === 'N1' ? 'Nível 1' : 'Nível 2'}
                            </span>
                          </td>

                          <td className="px-5 py-4 text-center">
                            <span className={`px-2.5 py-1 rounded-lg text-xs font-black border ${
                              student.s1 === 'LF'
                                ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                                : student.s1 === 'LI'
                                ? 'bg-green-100 text-green-900 border-green-300'
                                : student.s1 === 'N4'
                                ? 'bg-blue-50 text-blue-800 border-blue-200'
                                : student.s1 === 'N3'
                                ? 'bg-cyan-50 text-cyan-800 border-cyan-200'
                                : student.s1 === 'N2'
                                ? 'bg-orange-50 text-orange-800 border-orange-200'
                                : student.s1 === 'N1'
                                ? 'bg-red-50 text-red-800 border-red-200'
                                : 'bg-slate-100 text-slate-500 border-slate-200'
                            }`}>
                              {student.s1 === 'LF'
                                ? 'Leitor Fluente'
                                : student.s1 === 'LI'
                                ? 'Leitor Iniciante'
                                : student.s1 === 'N4'
                                ? 'Nível 4'
                                : student.s1 === 'N3'
                                ? 'Nível 3'
                                : student.s1 === 'N2'
                                ? 'Nível 2'
                                : student.s1 === 'N1'
                                ? 'Nível 1'
                                : 'Não Avaliado'}
                            </span>
                          </td>

                          <td className="px-5 py-4 text-center">
                            <span className={`px-2.5 py-1 rounded-lg text-xs font-black ${
                              evo.tag === 'danger'
                                ? 'bg-red-100 text-red-800'
                                : evo.tag === 'warning'
                                ? 'bg-amber-100 text-amber-800'
                                : evo.tag === 'info'
                                ? 'bg-blue-100 text-blue-800'
                                : evo.tag === 'success'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-slate-100 text-slate-500'
                            }`}>
                              {evo.diffLabel}
                            </span>
                          </td>

                          <td className="px-5 py-4">
                            <div className="flex items-center gap-2">
                              <span className={`px-3 py-1 rounded-xl text-xs font-black border inline-flex items-center gap-1.5 ${evo.bg}`}>
                                <EvoIcon className="w-3.5 h-3.5" />
                                {evo.label}
                              </span>
                            </div>
                          </td>

                          <td className="px-5 py-4 text-right">
                            <span className="text-[11px] font-bold text-slate-500 italic block">
                              {evo.tag === 'danger'
                                ? 'Aceleração fonológica intensiva + sondagem semanal'
                                : evo.tag === 'warning'
                                ? 'Reforço de correspondência grafema-fonema e sílabas'
                                : evo.tag === 'info'
                                ? 'Transição para leitura de frases e textos curtos'
                                : evo.tag === 'success'
                                ? 'Treino de velocidade, entonação e compreensão'
                                : 'Buscar justificativa de ausência / reagendar sondagem'}
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="p-4 bg-slate-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-bold text-slate-500">
                Mostrando {(currentPage - 1) * pageSize + 1} a {Math.min(filteredNominalStudents.length, currentPage * pageSize)} de {filteredNominalStudents.length} estudantes
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage <= 1}
                  className="p-2 rounded-xl bg-white border border-gray-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
                  title="Página Anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <span className="px-3 py-1 font-black text-xs text-slate-800 bg-white border border-gray-200 rounded-xl shadow-2xs">
                  {currentPage} / {totalPages}
                </span>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage >= totalPages}
                  className="p-2 rounded-xl bg-white border border-gray-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
                  title="Próxima Página"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default IntervencaoPrioritariaTab;
