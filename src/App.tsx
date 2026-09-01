/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, ReferenceLine, LabelList
} from 'recharts';
import { 
  LayoutDashboard, School, Trophy, Users, CheckCircle, ArrowRightCircle, 
  AlertTriangle, Search, Filter, Calendar, Layers, Activity, Lightbulb, FileText, Download, TrendingUp,
  ArrowUpDown, Sparkles, Check, ChevronLeft, ChevronRight, Award, UserCheck, BookOpen, SlidersHorizontal, Database,
  TrendingDown, ArrowUpRight, ArrowDownRight, ShieldAlert, Target, Zap, ChevronUp, ChevronDown,
  GraduationCap, X, RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MUNICIPALITY_CONFIG, 
  COLORS, 
  EVOLUTION_LEVELS, 
  SIMULADO_OPTIONS, 
  MOCK_STUDENTS_EVOLUTION,
  calculateEvolutionDelta,
  classifyReadingSimulado,
  LEVEL_RANK
} from './constants';
import { 
  getSchoolSimuladoStats, 
  getMunicipalSimuladoStats,
  getSchoolEntradaStats 
} from './simuladoUtils';
import { 
  ExpressiveSimuladoCard, 
  ExpressiveMunicipalCard 
} from './components/ExpressiveSimuladoCard';
import { SchoolReportView } from './components/SchoolReportView';
import { IntervencaoPrioritariaTab } from './components/IntervencaoPrioritariaTab';
import { 
  SIMULADO1_SCHOOLS_RAW, 
  SIMULADO1_PENDING_SCHOOLS 
} from './data_simulado1';
import { DADOS_TURMAS_CAED } from './dadosTurmasCaed';

const LEVEL_TO_NUM = LEVEL_RANK;

const getLevelPillStyle = (level?: string) => {
  const norm = (level || "").trim().toUpperCase();
  if (norm === "LF" || norm === "LEITOR FLUENTE") {
    return { short: "LF", fullName: "Leitor Fluente", className: "bg-emerald-50 text-emerald-700 border border-emerald-200" };
  }
  if (norm === "LI" || norm === "LEITOR INICIANTE") {
    return { short: "LI", fullName: "Leitor Iniciante", className: "bg-lime-50 text-lime-700 border border-lime-200" };
  }
  if (norm === "N4" || norm === "NÍVEL 4" || norm === "NIVEL 4") {
    return { short: "N4", fullName: "Nível 4", className: "bg-teal-50 text-teal-700 border border-teal-200" };
  }
  if (norm === "N3" || norm === "NÍVEL 3" || norm === "NIVEL 3") {
    return { short: "N3", fullName: "Nível 3", className: "bg-blue-50 text-blue-700 border border-blue-200" };
  }
  if (norm === "N2" || norm === "NÍVEL 2" || norm === "NIVEL 2") {
    return { short: "N2", fullName: "Nível 2", className: "bg-amber-50 text-amber-700 border border-amber-200" };
  }
  if (norm === "N1" || norm === "NÍVEL 1" || norm === "NIVEL 1") {
    return { short: "N1", fullName: "Nível 1", className: "bg-red-50 text-red-700 border border-red-200" };
  }
  return { short: "---", fullName: "Não Avaliado", className: "bg-slate-50 text-slate-500 border border-slate-200" };
};

const LevelPillSelector = ({
  value,
  onChange,
  options = EVOLUTION_LEVELS,
  title
}: {
  value: string;
  onChange: (val: string) => void;
  options?: string[];
  title?: string;
}) => {
  const style = getLevelPillStyle(value);
  return (
    <div className="inline-flex items-center justify-center relative group" title={title || style.fullName}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none cursor-pointer rounded-full px-2.5 py-1 text-[11px] font-bold text-center tracking-tight transition-all duration-150 outline-none focus:ring-2 focus:ring-blue-400/40 shadow-xs hover:brightness-95 pr-4 select-none whitespace-nowrap ${style.className}`}
        style={{ textAlignLast: 'center' }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-white text-slate-800 font-bold py-1">
            {opt === "NÃO AVALIADO" ? "Não Avaliado" : opt}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-1.5 text-[8px] opacity-60 font-bold">▾</span>
    </div>
  );
};

const getEvolutionBadge = (start?: string, end?: string) => {
  return calculateEvolutionDelta(start, end);
};

const getEvolutionLabel = (start?: string, end?: string) => {
  return calculateEvolutionDelta(start, end);
};

const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const getAvatarColorClass = (id: number) => {
  const colors = [
    'bg-blue-100 text-blue-700 ring-blue-200',
    'bg-emerald-100 text-emerald-700 ring-emerald-200',
    'bg-violet-100 text-violet-700 ring-violet-200',
    'bg-amber-100 text-amber-700 ring-amber-200',
    'bg-rose-100 text-rose-700 ring-rose-200',
    'bg-teal-100 text-teal-700 ring-teal-200',
    'bg-indigo-100 text-indigo-700 ring-indigo-200',
    'bg-cyan-100 text-cyan-700 ring-cyan-200'
  ];
  return colors[id % colors.length];
};

const FilterBox = ({ label, icon: Icon, options, value, onChange }: { label: string, icon: any, options: string[], value: string, onChange: (v: string) => void }) => (
  <div className="flex flex-col gap-1 flex-1 min-w-[150px]">
    <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider">
      <Icon className="w-3 h-3" />
      <span>{label}</span>
    </div>
    <select 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none font-semibold text-slate-700"
    >
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

const NavToggle = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: 'panorama' | 'perf' | 'turmas' | 'intervencao' | 'evolucao' | 'insights' | 'porte' | 'setores' | 'relatorios') => void }) => {
  const mainTabs = [
    { id: 'panorama', label: 'Visão Geral' },
    { id: 'perf', label: 'Escolas' },
    { id: 'turmas', label: 'Turmas' },
    { id: 'evolucao', label: 'Evolução' },
    { id: 'insights', label: 'Insights' },
  ];

  const structuralTabs = [
    { id: 'porte', label: 'Porte' },
    { id: 'setores', label: 'Setores' },
  ];

  const isIntervencaoActive = activeTab === 'intervencao';
  const isRelatoriosActive = activeTab === 'relatorios';

  return (
    <nav className="w-full bg-slate-50 border-b border-slate-200 px-4 py-2">
      <div className="w-full flex items-center justify-between gap-4 overflow-x-auto whitespace-nowrap scrollbar-none">
        
        {/* Grupo 1: Abas Principais de Navegação Pedagógica */}
        <div className="flex items-center gap-5 shrink-0 text-sm font-semibold text-slate-600">
          {mainTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-1 cursor-pointer transition-colors ${
                  isActive
                    ? 'text-blue-700 border-b-2 border-blue-700 font-bold'
                    : 'hover:text-slate-900 text-slate-600'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
          
          {/* Separador Visual Vertical */}
          <span className="h-4 w-[1px] bg-slate-300 mx-1 shrink-0" />
          
          {/* Segmentações Estruturais */}
          {structuralTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-1 cursor-pointer transition-colors ${
                  isActive
                    ? 'text-blue-700 border-b-2 border-blue-700 font-bold'
                    : 'hover:text-slate-900 text-slate-600'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grupo 2: Ações Críticas e Exportações (Na mesma linha, alinhado à direita) */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Botão Intervenção Prioritária */}
          <button
            onClick={() => setActiveTab('intervencao')}
            className={`flex items-center gap-1.5 font-bold px-3 py-1.5 rounded-lg shadow-xs transition-colors text-xs cursor-pointer ${
              isIntervencaoActive
                ? 'bg-rose-700 text-white ring-2 ring-rose-400 ring-offset-1'
                : 'bg-rose-600 hover:bg-rose-700 text-white'
            }`}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z" />
            </svg>
            <span>Intervenção Prioritária</span>
            <span className="bg-rose-800 text-[10px] px-1.5 py-0.2 rounded font-mono">N1/N2</span>
          </button>

          {/* Botão Relatórios */}
          <button
            onClick={() => setActiveTab('relatorios')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors font-semibold text-xs cursor-pointer ${
              isRelatoriosActive
                ? 'bg-slate-800 text-white font-bold'
                : 'text-slate-700 hover:text-slate-900 bg-slate-200/80 hover:bg-slate-200'
            }`}
          >
            <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Relatórios</span>
          </button>
        </div>

      </div>
    </nav>
  );
};

const KPI = ({ icon: Icon, label, value, colorClass, subtitle }: { icon: any, label: string, value: string | number, colorClass: string, subtitle?: string }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 flex-1 min-w-[240px]">
    <div className={`p-5 rounded-2xl ${colorClass}`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <div>
      <p className="text-gray-500 font-medium text-sm">{label}</p>
      <p className="text-3xl font-black text-slate-800">{value}</p>
      {subtitle && <p className="text-xs text-gray-400 mt-1 uppercase font-bold tracking-tight">{subtitle}</p>}
    </div>
  </div>
);

const truncateName = (name: string, limit: number = 15) => 
  name.length > limit ? name.substring(0, limit) + "..." : name;

const Footer = () => (
  <footer className="mt-20 py-10 border-t border-gray-200 print:hidden">
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <p className="text-slate-500 font-black text-lg tracking-normal text-center">PIPA - Plano de Intervenção Pedagógico Amplo - GT - ADE</p>
        <div className="h-1 w-20 bg-blue-600 rounded-full mb-2"></div>
        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Inteligência Educacional</p>
        <p className="text-slate-500 font-bold text-xs mt-1">Desenvolvido por Henrique Morais • © 2026</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<'panorama' | 'perf' | 'turmas' | 'intervencao' | 'evolucao' | 'insights' | 'porte' | 'setores' | 'relatorios'>('panorama');
  const [evolucaoSubTab, setEvolucaoSubTab] = useState<'coleta' | 'mapa'>('mapa');
  
  // State for students map
  const [studentsData, setStudentsData] = useState(MOCK_STUDENTS_EVOLUTION);

  // State for evolution tab controls
  const [selectedEvolucaoEscola, setSelectedEvolucaoEscola] = useState("E.M. PROFª YVONE APARECIDA ARANTES CORRÊA");
  const [selectedEvolucaoTurma, setSelectedEvolucaoTurma] = useState("TODAS");
  const [evolutionSearch, setEvolutionSearch] = useState("");
  const [evolutionFilterTier, setEvolutionFilterTier] = useState<string>("TODOS");
  const [evolutionSortBy, setEvolutionSortBy] = useState<'name' | 'delta1' | 'entrada'>('name');
  const [evolutionSortDir, setEvolutionSortDir] = useState<'asc' | 'desc'>('asc');

  const availableEvolucaoEscolas = useMemo(() => {
    const set = new Set<string>();
    studentsData.forEach(s => { if (s.escola) set.add(s.escola); });
    return Array.from(set);
  }, [studentsData]);

  const availableEvolucaoTurmas = useMemo(() => {
    const set = new Set<string>();
    studentsData.forEach(s => {
      if (s.escola === selectedEvolucaoEscola && s.turma) set.add(s.turma);
    });
    const sorted = Array.from(set).sort();
    return ["TODAS", ...sorted];
  }, [studentsData, selectedEvolucaoEscola]);

  useEffect(() => {
    if (availableEvolucaoTurmas.length > 0 && !availableEvolucaoTurmas.includes(selectedEvolucaoTurma)) {
      setSelectedEvolucaoTurma(availableEvolucaoTurmas[0]);
    }
  }, [availableEvolucaoTurmas, selectedEvolucaoTurma]);

  // State for municipality
  const [selectedMunicipalityName, setSelectedMunicipalityName] = useState<string>("Pindamonhangaba");
  const currentMunicipality = MUNICIPALITY_CONFIG[selectedMunicipalityName as keyof typeof MUNICIPALITY_CONFIG] || MUNICIPALITY_CONFIG["Pindamonhangaba"];

  const SCHOOLS_DATA = currentMunicipality.schools;
  const CLASSES_DATA = (currentMunicipality as any).classes || [];
  const MUNICIPAL_AVERAGE_DETAILED = currentMunicipality.avgDetailed;

  const [selectedSchool, setSelectedSchool] = useState(SCHOOLS_DATA[0].name);
  const [schoolsEdition, setSchoolsEdition] = useState<'simulado1' | 'base_pinda'>('simulado1');
  const [schoolsTableSort, setSchoolsTableSort] = useState<{ key: string; direction: 'asc' | 'desc' }>({ key: 'ifl', direction: 'desc' });

  // Selection for reports
  const [selectedSchoolsForReport, setSelectedSchoolsForReport] = useState<Set<string>>(new Set([
    "E.M. ARTHUR DE ANDRADE",
    "E.M. PROFA MARIA HELENA RIBEIRO VILELA",
    "E.M. PROFESSOR ALEXANDRE MACHADO SALGADO",
    "E.M. JOAO KOLENDA LEMOS",
    "E.M. PROFA REGINA CELIA MADUREIRA DE SOUZA LIMA",
    "E.M. PROFESSORA YVONE APPARECIDA ARANTES CORREA",
    "E.M. ABDIAS JUNIOR SANTIAGO E SILVA",
    "E.M. PROFESSORA JULIETA REALE VIEIRA",
    "E.M. PROFESSOR ELIAS BARGIS MATHIAS",
    "E.M. PROFA RACHEL DE AGUIAR LOBERTO",
    "E.M. PROFESSOR MARIO DE ASSIS CESAR",
    "E.M. DR FRANCISCO DE ASSIS CESAR",
    "E.M. PROFA MARIA MADUREIRA SALGADO DONA MINICA",
    "E.M. PROF LAURO VICENTE DE AZEVEDO"
  ]));

  // Update selected school when municipality changes
  useEffect(() => {
    if (SCHOOLS_DATA.length > 0) {
      setSelectedSchool(SCHOOLS_DATA[0].name);
    }
    const setores = Object.keys((currentMunicipality as any).setores || {});
    if (setores.length > 0) {
      setSelectedSetor(setores[0]);
    }
  }, [selectedMunicipalityName]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedStudentForColeta, setSelectedStudentForColeta] = useState<string | null>(null);

  const handleStartColeta = (name: string) => {
    setSelectedStudentForColeta(name);
    // Simulate delay for detection
    setTimeout(() => {
        setShowModal(true);
    }, 1500);
  };
  const [turmaSearch, setTurmaSearch] = useState("");
  const [turmaSort, setTurmaSort] = useState<{ key: string; direction: 'asc' | 'desc' }>({ key: 'escola', direction: 'asc' });
  const [turmasEdition, setTurmasEdition] = useState<'simulado1' | 'base_pinda'>('base_pinda');
  const [turmasSimuladoStatusFilter, setTurmasSimuladoStatusFilter] = useState<'TODAS' | 'AVALIADAS' | 'PENDENTES'>('TODAS');
  const [turmasTableSort, setTurmasTableSort] = useState<{ key: string; direction: 'asc' | 'desc' }>({ key: 'escola', direction: 'asc' });
  const [turmaSchoolFilter, setTurmaSchoolFilter] = useState<string>("TODAS");
  const [turmasSchoolSort, setTurmasSchoolSort] = useState<string>("name-asc");
  const [turmasCollapsedSchools, setTurmasCollapsedSchools] = useState<Record<string, boolean>>({});
  const [turmasPage, setTurmasPage] = useState<number>(1);
  const [turmasPerPage, setTurmasPerPage] = useState<number>(20);
  const [selectedGroup, setSelectedGroup] = useState<'Pequeno' | 'Médio' | 'Grande'>('Médio');
  const [selectedSetor, setSelectedSetor] = useState<string>("Setor 1");
  const [setoresEdition, setSetoresEdition] = useState<'comparativo' | 'simulado1' | 'caed2026'>('comparativo');
  const [setoresTableSort, setSetoresTableSort] = useState<{ key: string; direction: 'asc' | 'desc' }>({ key: 'delta', direction: 'desc' });
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const reportRef = useRef<HTMLDivElement>(null);

  // Refs for double scrollbar synchronization
  const topScrollRef = useRef<HTMLDivElement>(null);
  const bottomScrollRef = useRef<HTMLDivElement>(null);
  const [tableScrollWidth, setTableScrollWidth] = useState(0);

  const syncScroll = (source: React.RefObject<HTMLDivElement>, target: React.RefObject<HTMLDivElement>) => {
    if (source.current && target.current) {
      if (Math.abs(target.current.scrollLeft - source.current.scrollLeft) > 1) {
        target.current.scrollLeft = source.current.scrollLeft;
      }
    }
  };
  
  const [edition, setEdition] = useState("2026");
  const [period, setPeriod] = useState("Saída");
  const [network, setNetwork] = useState("Municipal");

  // Focused on Pindamonhangaba only as per user request
  React.useEffect(() => {
    if (SCHOOLS_DATA.length > 0) {
      setSelectedSchool(SCHOOLS_DATA[0].name);
    }
  }, [SCHOOLS_DATA]);

  const currentSchoolData = useMemo(() => 
    SCHOOLS_DATA.find(s => s.name === selectedSchool) || SCHOOLS_DATA[0]
  , [selectedSchool, SCHOOLS_DATA]);

  const municipalStats = useMemo(() => {
    const totalAvaliados = SCHOOLS_DATA.reduce((acc, s) => acc + s.avaliados, 0);
    const totalPrevistos = SCHOOLS_DATA.reduce((acc, s) => acc + s.previstos, 0);
    
    // Weighted IFL: Sum(school_ifl * school_avaliados) / total_avaliados
    const totalIFLWeighted = SCHOOLS_DATA.reduce((acc, s) => acc + (parseFloat(s.ifl) * s.avaliados), 0);
    const weightedIFL = totalAvaliados > 0 ? totalIFLWeighted / totalAvaliados : 0;
    
    // Weighted Leitores: Sum(school_leitores_perc * school_avaliados) / total_avaliados
    const totalLeitoresCount = SCHOOLS_DATA.reduce((acc, s) => acc + (s.leitores * s.avaliados / 100), 0);
    const weightedLeitoresPerc = totalAvaliados > 0 ? (totalLeitoresCount / totalAvaliados) * 100 : 0;

    return {
      totalAvaliados: totalAvaliados.toLocaleString('pt-BR'),
      totalPrevistos: totalPrevistos.toLocaleString('pt-BR'),
      participation: totalPrevistos > 0 ? ((totalAvaliados / totalPrevistos) * 100).toFixed(1) + "%" : "0%",
      ifl: weightedIFL.toFixed(1),
      leitores: weightedLeitoresPerc.toFixed(1) + "%"
    };
  }, [SCHOOLS_DATA]);

  const municipalDistribution = useMemo(() => {
    const totalAvaliados = SCHOOLS_DATA.reduce((acc, s) => acc + s.avaliados, 0);
    if (totalAvaliados === 0) return [];

    const getWeightedValue = (field: 'fluente' | 'iniciante' | 'n1' | 'n2' | 'n3' | 'n4') => {
      const totalCount = SCHOOLS_DATA.reduce((acc, s) => acc + (s[field] * s.avaliados / 100), 0);
      return (totalCount / totalAvaliados) * 100;
    };

    return [
      { name: "Fluentes", value: getWeightedValue('fluente'), color: COLORS.fluente },
      { name: "Iniciantes", value: getWeightedValue('iniciante'), color: COLORS.iniciante },
      { name: "Nível 1", value: getWeightedValue('n1'), color: COLORS.preLeitor1 },
      { name: "Nível 2", value: getWeightedValue('n2'), color: COLORS.preLeitor2 },
      { name: "Nível 3", value: getWeightedValue('n3'), color: COLORS.preLeitor3 },
      { name: "Nível 4", value: getWeightedValue('n4'), color: COLORS.preLeitor4 },
    ];
  }, [SCHOOLS_DATA]);

  const strategicInsights = useMemo(() => {
    const sortedByIFL = [...SCHOOLS_DATA].sort((a, b) => parseFloat(b.ifl) - parseFloat(a.ifl));
    const top5Excellence = sortedByIFL.slice(0, 5);
    const top5Priority = [...sortedByIFL].reverse().slice(0, 5);
    
    const absenteeismRanking = [...SCHOOLS_DATA]
      .map(s => ({ 
        ...s, 
        percAusencia: s.previstos > 0 ? ((s.previstos - s.avaliados) / s.previstos) * 100 : 0 
      }))
      .sort((a, b) => b.percAusencia - a.percAusencia)
      .slice(0, 5);

    const potentialReading = [...SCHOOLS_DATA]
      .map(s => ({ ...s, somaLeitura: s.iniciante + s.fluente }))
      .sort((a, b) => b.somaLeitura - a.somaLeitura)
      .slice(0, 5);

    return { top5Excellence, top5Priority, absenteeismRanking, potentialReading };
  }, [SCHOOLS_DATA]);

      const schoolSimuladoStatsMap = useMemo(() => {
    const map = new Map<string, ReturnType<typeof getSchoolSimuladoStats>>();
    SCHOOLS_DATA.forEach(school => {
      const entradaIFL = parseFloat(school.ifl) || 0;
      map.set(school.name, getSchoolSimuladoStats(studentsData, school.name, entradaIFL));
    });
    return map;
  }, [studentsData, SCHOOLS_DATA]);

  // Compiled 1º Simulado data for all 37 schools in the municipality
  const simuladoSchoolsData = useMemo(() => {
    return SCHOOLS_DATA.map(school => {
      const sim = schoolSimuladoStatsMap.get(school.name);
      const matriculados = sim ? sim.totalMatriculados : school.previstos;
      const avaliados = sim ? sim.totalAvaliados : school.avaliados;
      const participacao = sim ? sim.participacaoGeralPerc : school.participacao;
      const n1 = sim ? sim.n1GeralPerc : 0;
      const n1Count = sim ? sim.n1GeralCount : 0;
      const n2 = sim ? sim.n2GeralPerc : 0;
      const n2Count = sim ? sim.n2GeralCount : 0;
      const n3 = sim ? sim.n3GeralPerc : 0;
      const n3Count = sim ? sim.n3GeralCount : 0;
      const n4 = sim ? sim.n4GeralPerc : 0;
      const n4Count = sim ? sim.n4GeralCount : 0;
      const iniciante = sim ? sim.inicianteGeralPerc : 0;
      const inicianteCount = sim ? sim.inicianteGeralCount : 0;
      const fluente = sim ? sim.fluenteGeralPerc : 0;
      const fluenteCount = sim ? sim.fluenteGeralCount : 0;
      const preTotal = sim ? sim.preTotalGeralPerc : 0;
      const leitoresTotal = sim ? sim.leitoresGeralPerc : 0;
      const iflS1 = sim ? sim.iflS1Geral : 0;
      const iflS1Formatted = sim ? sim.iflS1GeralFormatted : '0.00';
      const iflEntrada = parseFloat(school.ifl) || 0;
      const delta = sim ? sim.deltaGeral : 0;
      const deltaFormatted = sim ? sim.deltaGeralFormatted : '+0.00';
      const taxaAvanco = sim ? sim.taxaAvancoGeralPerc : 0;

      return {
        name: school.name,
        previstos: matriculados,
        matriculados,
        avaliados,
        participacao,
        n1,
        n1Count,
        n2,
        n2Count,
        n3,
        n3Count,
        n4,
        n4Count,
        iniciante,
        inicianteCount,
        fluente,
        fluenteCount,
        preTotal,
        leitoresTotal,
        ifl: iflS1Formatted,
        iflNum: iflS1,
        iflEntrada,
        delta,
        deltaFormatted,
        taxaAvanco,
        sim
      };
    });
  }, [SCHOOLS_DATA, schoolSimuladoStatsMap]);

  // Filtered and sorted schools based on selected edition and sort column
  const filteredAndSortedSchools = useMemo(() => {
    const isSimulado = schoolsEdition === 'simulado1';
    let list = isSimulado ? [...simuladoSchoolsData] : SCHOOLS_DATA.map(s => {
      const sim = schoolSimuladoStatsMap.get(s.name);
      const preTotalPerc = s.n1 + s.n2 + s.n3 + s.n4;
      return {
        name: s.name,
        previstos: s.previstos,
        matriculados: s.previstos,
        avaliados: s.avaliados,
        participacao: s.participacao,
        n1: s.n1,
        n1Count: 0,
        n2: s.n2,
        n2Count: 0,
        n3: s.n3,
        n3Count: 0,
        n4: s.n4,
        n4Count: 0,
        iniciante: s.iniciante,
        inicianteCount: 0,
        fluente: s.fluente,
        fluenteCount: 0,
        preTotal: preTotalPerc,
        leitoresTotal: s.iniciante + s.fluente,
        ifl: parseFloat(s.ifl).toFixed(2),
        iflNum: parseFloat(s.ifl) || 0,
        iflEntrada: parseFloat(s.ifl) || 0,
        delta: sim ? sim.deltaGeral : 0,
        deltaFormatted: sim ? sim.deltaGeralFormatted : '-',
        taxaAvanco: sim ? sim.taxaAvancoGeralPerc : 0,
        sim
      };
    });

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      list = list.filter(s => s.name.toLowerCase().includes(term));
    }

    list.sort((a: any, b: any) => {
      let key = schoolsTableSort.key;
      let valA = a[key];
      let valB = b[key];
      if (key === 'ifl') {
        valA = a.iflNum;
        valB = b.iflNum;
      }
      if (typeof valA === 'string' && !isNaN(Number(valA))) valA = Number(valA);
      if (typeof valB === 'string' && !isNaN(Number(valB))) valB = Number(valB);

      if (typeof valA === 'string') {
        const comp = valA.localeCompare(valB);
        return schoolsTableSort.direction === 'asc' ? comp : -comp;
      }
      if (valA === undefined || valA === null) return 1;
      if (valB === undefined || valB === null) return -1;
      return schoolsTableSort.direction === 'asc' ? valA - valB : valB - valA;
    });

    return list;
  }, [schoolsEdition, simuladoSchoolsData, SCHOOLS_DATA, schoolSimuladoStatsMap, searchTerm, schoolsTableSort]);

  // Evolution Rankings: Top 10 most evolved and Top 10 least evolved (Entrada CAEd vs 1º Simulado)
  const evolutionRankings = useMemo(() => {
    const validSchools = simuladoSchoolsData.filter(s => s.avaliados > 0);
    
    // Top 10 que mais evoluíram no IFL (maior delta positivo)
    const top10Evolucoes = [...validSchools]
      .sort((a, b) => b.delta - a.delta || b.iflNum - a.iflNum)
      .slice(0, 10);

    // Top 10 com menor evolução no IFL (menor delta ou variação negativa)
    const top10MenorEvolucao = [...validSchools]
      .sort((a, b) => a.delta - b.delta || a.iflNum - b.iflNum)
      .slice(0, 10);

    const mediaDelta = validSchools.length > 0
      ? validSchools.reduce((acc, s) => acc + s.delta, 0) / validSchools.length
      : 0;

    const maiorEvolucao = top10Evolucoes[0] || null;
    const menorEvolucao = top10MenorEvolucao[0] || null;

    const totalAvancoPositivo = validSchools.filter(s => s.delta > 0).length;
    const totalRegressao = validSchools.filter(s => s.delta < 0).length;
    const totalEstaveis = validSchools.filter(s => s.delta === 0).length;

    const percAvancoPositivo = validSchools.length > 0
      ? (totalAvancoPositivo / validSchools.length) * 100
      : 0;

    return {
      top10Evolucoes,
      top10MenorEvolucao,
      mediaDelta,
      maiorEvolucao,
      menorEvolucao,
      totalAvancoPositivo,
      totalRegressao,
      totalEstaveis,
      percAvancoPositivo,
      totalEscolas: validSchools.length
    };
  }, [simuladoSchoolsData]);

  const currentSchoolSimuladoStats = useMemo(() => {
    const schoolData = SCHOOLS_DATA.find(s => s.name === selectedEvolucaoEscola);
    const entradaIFL = schoolData ? parseFloat(schoolData.ifl) : 0;
    return getSchoolSimuladoStats(studentsData, selectedEvolucaoEscola, entradaIFL);
  }, [studentsData, selectedEvolucaoEscola, SCHOOLS_DATA]);

  const municipalSimuladoStats = useMemo(() => {
    const municipalEntradaIFL = parseFloat(municipalStats.ifl) || 5.0;
    return getMunicipalSimuladoStats(studentsData, municipalEntradaIFL);
  }, [studentsData, municipalStats]);

  const currentTurmaStudents = useMemo(() => {
    return studentsData.filter(s => {
      const matchEscola = !s.escola || s.escola === selectedEvolucaoEscola;
      const matchTurma = !selectedEvolucaoTurma || selectedEvolucaoTurma === "TODAS" || s.turma === selectedEvolucaoTurma;
      return matchEscola && matchTurma;
    });
  }, [studentsData, selectedEvolucaoEscola, selectedEvolucaoTurma]);

  const evolutionSummary = useMemo(() => {
    const total = currentTurmaStudents.length;
    let excepcional = 0;
    let expressivo = 0;
    let pontual = 0;
    let estavel = 0;
    let atencao = 0;
    let naoAvaliado = 0;

    currentTurmaStudents.forEach((s) => {
      const badge = getEvolutionBadge(s.entrada, s.s1);
      if (badge.tier === "excepcional") excepcional++;
      else if (badge.tier === "expressivo") expressivo++;
      else if (badge.tier === "pontual") pontual++;
      else if (badge.tier === "estavel") estavel++;
      else if (badge.tier === "atencao") atencao++;
      else naoAvaliado++;
    });

    const isAll = !selectedEvolucaoTurma || selectedEvolucaoTurma === "TODAS";
    const turmaStat = !isAll ? currentSchoolSimuladoStats.turmas.find(t => t.turma === selectedEvolucaoTurma) : undefined;

    const iflEntrada = currentSchoolSimuladoStats.schoolEntradaOfficialIFL.toFixed(2);
    const iflS1 = turmaStat ? turmaStat.iflS1Formatted : currentSchoolSimuladoStats.iflS1GeralFormatted;
    const deltaIFL = turmaStat ? turmaStat.deltaVsEntradaFormatted : currentSchoolSimuladoStats.deltaGeralFormatted;
    const fluenciaS1Perc = turmaStat ? turmaStat.leitoresPerc.toFixed(1) : currentSchoolSimuladoStats.leitoresGeralPerc.toFixed(1);
    
    const avaliados = turmaStat ? turmaStat.avaliados : currentSchoolSimuladoStats.totalAvaliados;
    const matriculados = turmaStat ? turmaStat.matriculados : currentSchoolSimuladoStats.totalMatriculados;
    const taxaAvanco = turmaStat ? turmaStat.taxaAvancoPerc.toFixed(1) : currentSchoolSimuladoStats.taxaAvancoGeralPerc.toFixed(1);    const avancaram = excepcional + expressivo + pontual;    const taxaAvancoTotal = total > 0 ? (((excepcional + expressivo + pontual) / total) * 100).toFixed(1) : "0.0";    const fluenciaEntradaPerc = currentSchoolSimuladoStats.schoolEntradaOfficialIFL > 0 ? (currentSchoolSimuladoStats.schoolEntradaOfficialIFL * 10).toFixed(1) : "0.0";;

    const chartData = [
      { name: "Avanço Excepcional (≥ +3)", shortName: "Excepcional", value: excepcional, color: "#2563eb", tier: "EXCEPCIONAL" },
      { name: "Avanço Expressivo (+2)", shortName: "Expressivo", value: expressivo, color: "#059669", tier: "EXPRESSIVO" },
      { name: "Avanço Pontual (+1)", shortName: "Pontual", value: pontual, color: "#f59e0b", tier: "PONTUAL" },
      { name: "Estável (0)", shortName: "Estável", value: estavel, color: "#64748b", tier: "ESTAVEL" },
      { name: "Em Atenção (< 0)", shortName: "Em Atenção", value: atencao, color: "#dc2626", tier: "ATENCAO" },
      { name: "Não Avaliado / Ausente", shortName: "Não Avaliado", value: naoAvaliado, color: "#cbd5e1", tier: "NAO_AVALIADO" },
    ].filter(item => item.value > 0);

    const kpis = [
      {
        id: "EXCEPCIONAL",
        label: "Avanço Excepcional",
        sublabel: "Saltou ≥ 3 níveis CAEd",
        delta: "Δ ≥ +3",
        count: excepcional,
        perc: total > 0 ? ((excepcional / total) * 100).toFixed(1) : "0.0",
        badgeBg: "bg-blue-600 text-white",
        cardBorder: "border-blue-200 hover:border-blue-400 bg-blue-50/40",
        textColor: "text-blue-700",
        ringColor: "ring-2 ring-blue-500 bg-blue-50"
      },
      {
        id: "EXPRESSIVO",
        label: "Avanço Expressivo",
        sublabel: "Saltou +2 níveis CAEd",
        delta: "Δ = +2",
        count: expressivo,
        perc: total > 0 ? ((expressivo / total) * 100).toFixed(1) : "0.0",
        badgeBg: "bg-emerald-600 text-white",
        cardBorder: "border-emerald-200 hover:border-emerald-400 bg-emerald-50/40",
        textColor: "text-emerald-700",
        ringColor: "ring-2 ring-emerald-500 bg-emerald-50"
      },
      {
        id: "PONTUAL",
        label: "Avanço Pontual",
        sublabel: "Saltou +1 nível CAEd",
        delta: "Δ = +1",
        count: pontual,
        perc: total > 0 ? ((pontual / total) * 100).toFixed(1) : "0.0",
        badgeBg: "bg-amber-500 text-white",
        cardBorder: "border-amber-200 hover:border-amber-400 bg-amber-50/40",
        textColor: "text-amber-700",
        ringColor: "ring-2 ring-amber-500 bg-amber-50"
      },
      {
        id: "ESTAVEL",
        label: "Estável",
        sublabel: "Manteve o mesmo nível",
        delta: "Δ = 0",
        count: estavel,
        perc: total > 0 ? ((estavel / total) * 100).toFixed(1) : "0.0",
        badgeBg: "bg-slate-500 text-white",
        cardBorder: "border-slate-200 hover:border-slate-400 bg-slate-50/70",
        textColor: "text-slate-700",
        ringColor: "ring-2 ring-slate-500 bg-slate-100"
      },
      {
        id: "ATENCAO",
        label: "Em Atenção",
        sublabel: "Regressão ou recuo",
        delta: "Δ < 0",
        count: atencao,
        perc: total > 0 ? ((atencao / total) * 100).toFixed(1) : "0.0",
        badgeBg: "bg-red-600 text-white",
        cardBorder: "border-red-200 hover:border-red-400 bg-red-50/40",
        textColor: "text-red-700",
        ringColor: "ring-2 ring-red-500 bg-red-50"
      },
      {
        id: "NAO_AVALIADO",
        label: "Não Avaliado",
        sublabel: "Ausente no Simulado 1",
        delta: "---",
        count: naoAvaliado,
        perc: total > 0 ? ((naoAvaliado / total) * 100).toFixed(1) : "0.0",
        badgeBg: "bg-slate-300 text-slate-700",
        cardBorder: "border-slate-200 hover:border-slate-300 bg-slate-50/40",
        textColor: "text-slate-600",
        ringColor: "ring-2 ring-slate-400 bg-slate-100"
      }
    ];

    return {
      total,
      avaliados,
      avancaram,
      taxaAvanco,
      taxaAvancoTotal,
      excepcional,
      expressivo,
      pontual,
      estavel,
      atencao,
      naoAvaliado,
      iflEntrada,
      iflS1,
      deltaIFL,
      fluenciaEntradaPerc,
      fluenciaS1Perc,
      chartData,
      kpis
    };
  }, [currentTurmaStudents, selectedEvolucaoTurma, currentSchoolSimuladoStats]);

  const evolutionStats = useMemo(() => {
    return evolutionSummary.chartData;
  }, [evolutionSummary]);

  const filteredStudentsData = useMemo(() => {
    return currentTurmaStudents.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(evolutionSearch.toLowerCase());
      if (!matchesSearch) return false;
      
      if (evolutionFilterTier === "TODOS") return true;
      const badge = getEvolutionBadge(student.entrada, student.s1);
      if (evolutionFilterTier === "EXCEPCIONAL") return badge.tier === "excepcional";
      if (evolutionFilterTier === "EXPRESSIVO") return badge.tier === "expressivo";
      if (evolutionFilterTier === "PONTUAL") return badge.tier === "pontual";
      if (evolutionFilterTier === "ESTAVEL") return badge.tier === "estavel";
      if (evolutionFilterTier === "ATENCAO") return badge.tier === "atencao";
      if (evolutionFilterTier === "NAO_AVALIADO") return badge.tier === "na" || student.s1 === "NÃO AVALIADO" || !student.s1;
      return true;
    }).sort((a, b) => {
      if (evolutionSortBy === 'name') {
        const cmp = a.name.localeCompare(b.name, 'pt-BR');
        return evolutionSortDir === 'asc' ? cmp : -cmp;
      }
      if (evolutionSortBy === 'delta1') {
        const deltaA = getEvolutionBadge(a.entrada, a.s1).delta ?? -999;
        const deltaB = getEvolutionBadge(b.entrada, b.s1).delta ?? -999;
        return evolutionSortDir === 'asc' ? deltaA - deltaB : deltaB - deltaA;
      }
      if (evolutionSortBy === 'entrada') {
        const valA = LEVEL_TO_NUM[a.entrada] ?? 0;
        const valB = LEVEL_TO_NUM[b.entrada] ?? 0;
        return evolutionSortDir === 'asc' ? valA - valB : valB - valA;
      }
      return 0;
    });
  }, [currentTurmaStudents, evolutionSearch, evolutionFilterTier, evolutionSortBy, evolutionSortDir]);

  const classesStats = useMemo(() => {
    if (!CLASSES_DATA.length) return null;
    
    // Injetando IFL oficial em cada turma
    const dataWithIFL = CLASSES_DATA.map(c => ({
      ...c,
      ifl: (((c.n1 * 0) + (c.n2 * 1) + (c.n3 * 2.5) + (c.n4 * 4) + (c.iniciante * 6) + (c.fluente * 10)) / 100).toFixed(1)
    }));
    
    const sortedFluente = [...dataWithIFL].sort((a, b) => b.fluente - a.fluente).slice(0, 3);
    const sortedIntervention = [...dataWithIFL].sort((a, b) => b.preTotal - a.preTotal).slice(0, 3);
    
    const filtered = dataWithIFL.filter(c => 
      c.escola.toLowerCase().includes(turmaSearch.toLowerCase()) || 
      c.turma.toLowerCase().includes(turmaSearch.toLowerCase())
    ).sort((a: any, b: any) => {
      // Se for a ordenação padrão (escola), adiciona secundária por turma
      if (turmaSort.key === 'escola') {
        const escolaComp = a.escola.localeCompare(b.escola);
        if (escolaComp !== 0) return turmaSort.direction === 'asc' ? escolaComp : -escolaComp;
        return a.turma.localeCompare(b.turma);
      }
      
      const valA = parseFloat(a[turmaSort.key]) || a[turmaSort.key];
      const valB = parseFloat(b[turmaSort.key]) || b[turmaSort.key];
      if (turmaSort.direction === 'asc') return valA > valB ? 1 : -1;
      return valA < valB ? 1 : -1;
    });

    // Internal Disparity Analysis & School Averages
    const schoolsGrouped = dataWithIFL.reduce((acc: any, curr: any) => {
      if (!acc[curr.escola]) acc[curr.escola] = [];
      acc[curr.escola].push(curr);
      return acc;
    }, {});

    const schoolPerformances: any[] = [];
    const disparities: any[] = [];
    let totalIFLSum = 0;

    Object.entries(schoolsGrouped).forEach(([name, classes]: [string, any[]]) => {
      const schoolIFLAvg = classes.reduce((sum, c) => sum + parseFloat(c.ifl), 0) / classes.length;
      schoolPerformances.push({ name, ifl: parseFloat(schoolIFLAvg.toFixed(2)) });
      totalIFLSum += schoolIFLAvg;

      if (classes.length >= 2) {
        const fluentes = classes.map((c: any) => c.fluente);
        const preLeitores = classes.map((c: any) => c.preTotal);
        
        const maxFluente = Math.max(...fluentes);
        const minFluente = Math.min(...fluentes);
        const deltaFluente = maxFluente - minFluente;

        const maxPre = Math.max(...preLeitores);
        const minPre = Math.min(...preLeitores);
        const deltaPre = maxPre - minPre;

        disparities.push({
          name,
          deltaFluente: parseFloat(deltaFluente.toFixed(1)),
          minFluente,
          maxFluente,
          deltaPre: parseFloat(deltaPre.toFixed(1)),
          minPre,
          maxPre
        });
      }
    });

    const networkAvgIFL = parseFloat(
      (dataWithIFL.reduce((sum, c) => sum + (parseFloat(c.ifl) * c.avaliados), 0) / 
       dataWithIFL.reduce((sum, c) => sum + c.avaliados, 0)).toFixed(2)
    );
    const schoolPerformanceChart = schoolPerformances.sort((a, b) => b.ifl - a.ifl);

    const topDisparityFluente = [...disparities].sort((a, b) => b.deltaFluente - a.deltaFluente).slice(0, 3);
    const topDisparityPre = [...disparities].sort((a, b) => b.deltaPre - a.deltaPre).slice(0, 3);

    return { 
      sortedFluente, 
      sortedIntervention, 
      filtered, 
      topDisparityFluente, 
      topDisparityPre,
      schoolPerformanceChart,
      networkAvgIFL
    };
  }, [CLASSES_DATA, turmaSearch, turmaSort]);

  // Master Turmas dataset compiling all real classes with official IFL calculation
  const allTurmasData = useMemo(() => {
    const list: Array<{
      id: string;
      escola: string;
      turma: string;
      previstos: number;
      avaliados: number;
      naoAvaliados: number;
      participacao: number;
      n1: number;
      n2: number;
      n3: number;
      n4: number;
      iniciante: number;
      fluente: number;
      preTotal: number;
      leitores: number;
      iflNum: number;
      ifl: string;
    }> = [];

    SCHOOLS_DATA.forEach(school => {
      const sim = schoolSimuladoStatsMap.get(school.name);
      if (sim && sim.turmas && sim.turmas.length > 0) {
        sim.turmas.forEach((t) => {
          const n1 = t.n1Perc;
          const n2 = t.n2Perc;
          const n3 = t.n3Perc;
          const n4 = t.n4Perc;
          const iniciante = t.iniciantePerc;
          const fluente = t.fluentePerc;
          
          // Formula: IFL = (%N1 * 0) + (%N2 * 1) + (%N3 * 2.5) + (%N4 * 4) + (%LI * 6) + (%LF * 10)
          const iflNum = t.avaliados > 0 
            ? ((n1 * 0) + (n2 * 1) + (n3 * 2.5) + (n4 * 4) + (iniciante * 6) + (fluente * 10)) / 100
            : 0;

          list.push({
            id: `${school.name}__${t.turma}`,
            escola: school.name,
            turma: t.turma,
            previstos: t.matriculados,
            avaliados: t.avaliados,
            naoAvaliados: t.naoAvaliados,
            participacao: t.participacaoPerc,
            n1,
            n2,
            n3,
            n4,
            iniciante,
            fluente,
            preTotal: t.preTotalPerc,
            leitores: t.leitoresPerc,
            iflNum,
            ifl: iflNum.toFixed(2)
          });
        });
      } else {
        const fallbackClasses = CLASSES_DATA.filter(c => c.escola === school.name || c.escola.toUpperCase().includes(school.name.toUpperCase()));
        fallbackClasses.forEach(c => {
          const n1 = c.n1;
          const n2 = c.n2;
          const n3 = c.n3;
          const n4 = c.n4;
          const iniciante = c.iniciante;
          const fluente = c.fluente;
          const iflNum = c.avaliados > 0
            ? ((n1 * 0) + (n2 * 1) + (n3 * 2.5) + (n4 * 4) + (iniciante * 6) + (fluente * 10)) / 100
            : 0;

          list.push({
            id: `${school.name}__${c.turma}`,
            escola: school.name,
            turma: c.turma,
            previstos: c.previstos,
            avaliados: c.avaliados,
            naoAvaliados: Math.max(0, c.previstos - c.avaliados),
            participacao: c.participacao,
            n1,
            n2,
            n3,
            n4,
            iniciante,
            fluente,
            preTotal: c.preTotal || (n1 + n2 + n3 + n4),
            leitores: iniciante + fluente,
            iflNum,
            ifl: iflNum.toFixed(2)
          });
        });
      }
    });

    return list;
  }, [SCHOOLS_DATA, schoolSimuladoStatsMap, CLASSES_DATA]);

  // Master hierarchical grouped dataset for Turmas tab (Schools -> Turmas)
  const schoolTurmasGrouped = useMemo(() => {
    if (turmasEdition === 'base_pinda') {
      // Group DADOS_TURMAS_CAED by escola
      const schoolMap = new Map<string, Array<typeof DADOS_TURMAS_CAED[0]>>();
      
      DADOS_TURMAS_CAED.forEach(t => {
        if (!schoolMap.has(t.escola)) {
          schoolMap.set(t.escola, []);
        }
        schoolMap.get(t.escola)!.push(t);
      });

      const groups: Array<{
        escola: string;
        porte: string;
        isPendente: boolean;
        turmasCount: number;
        avaliados: number;
        previstos: number;
        participacao: number;
        n1: number;
        n2: number;
        n3: number;
        n4: number;
        iniciante: number;
        fluente: number;
        leitores: number;
        iflNum: number;
        iflFormatted: string;
        turmas: Array<{
          id: string;
          turma: string;
          codigo_turma?: string;
          prev: number;
          avaliados: number;
          participacao: number;
          n1: number;
          n2: number;
          n3: number;
          n4: number;
          iniciante: number;
          fluente: number;
          leitores: number;
          iflNum: number;
          ifl: string;
          isPendente: boolean;
          counts?: {
            n1: number;
            n2: number;
            n3: number;
            n4: number;
            iniciante: number;
            fluente: number;
          };
        }>;
      }> = [];

      schoolMap.forEach((turmasList, escola) => {
        // Find porte config if matches
        const matchedSchool = SCHOOLS_DATA.find(s => 
          s.name.toUpperCase().includes(escola.toUpperCase()) || 
          escola.toUpperCase().includes(s.name.toUpperCase())
        );
        let porte = 'Médio';
        if (matchedSchool) {
          const config = currentMunicipality.porteConfig;
          if (matchedSchool.previstos <= config.pequeno) porte = 'Pequeno';
          else if (matchedSchool.previstos <= config.medio) porte = 'Médio';
          else porte = 'Grande';
        }

        const turmas = turmasList.map(t => {
          const leitores = t.inic + t.fluen;
          return {
            id: `${t.escola}__${t.turma}__${t.codigo_turma}`,
            turma: t.turma,
            codigo_turma: t.codigo_turma,
            prev: t.prev,
            avaliados: t.aval,
            participacao: t.part,
            n1: t.n1,
            n2: t.n2,
            n3: t.n3,
            n4: t.n4,
            iniciante: t.inic,
            fluente: t.fluen,
            leitores,
            iflNum: t.ifl,
            ifl: t.ifl.toFixed(2),
            isPendente: false,
            counts: {
              n1: Math.round((t.n1 * t.aval) / 100),
              n2: Math.round((t.n2 * t.aval) / 100),
              n3: Math.round((t.n3 * t.aval) / 100),
              n4: Math.round((t.n4 * t.aval) / 100),
              iniciante: Math.round((t.inic * t.aval) / 100),
              fluente: Math.round((t.fluen * t.aval) / 100),
            }
          };
        });

        // Sort turmas naturally (2º ANO A, 2º ANO B, 2º ANO C...)
        turmas.sort((a, b) => a.turma.localeCompare(b.turma, undefined, { numeric: true }));

        const totalPrevistos = turmas.reduce((sum, t) => sum + t.prev, 0);
        const totalAvaliados = turmas.reduce((sum, t) => sum + t.avaliados, 0);
        const participacao = totalPrevistos > 0 ? (totalAvaliados / totalPrevistos) * 100 : 0;

        const weightedN1 = totalAvaliados > 0 ? turmas.reduce((sum, t) => sum + (t.n1 * t.avaliados / 100), 0) / totalAvaliados * 100 : 0;
        const weightedN2 = totalAvaliados > 0 ? turmas.reduce((sum, t) => sum + (t.n2 * t.avaliados / 100), 0) / totalAvaliados * 100 : 0;
        const weightedN3 = totalAvaliados > 0 ? turmas.reduce((sum, t) => sum + (t.n3 * t.avaliados / 100), 0) / totalAvaliados * 100 : 0;
        const weightedN4 = totalAvaliados > 0 ? turmas.reduce((sum, t) => sum + (t.n4 * t.avaliados / 100), 0) / totalAvaliados * 100 : 0;
        const weightedIniciante = totalAvaliados > 0 ? turmas.reduce((sum, t) => sum + (t.iniciante * t.avaliados / 100), 0) / totalAvaliados * 100 : 0;
        const weightedFluente = totalAvaliados > 0 ? turmas.reduce((sum, t) => sum + (t.fluente * t.avaliados / 100), 0) / totalAvaliados * 100 : 0;
        const weightedIFL = totalAvaliados > 0 ? turmas.reduce((sum, t) => sum + (t.iflNum * t.avaliados), 0) / totalAvaliados : 0;

        groups.push({
          escola,
          porte,
          isPendente: false,
          turmasCount: turmas.length,
          avaliados: totalAvaliados,
          previstos: totalPrevistos,
          participacao,
          n1: weightedN1,
          n2: weightedN2,
          n3: weightedN3,
          n4: weightedN4,
          iniciante: weightedIniciante,
          fluente: weightedFluente,
          leitores: weightedIniciante + weightedFluente,
          iflNum: weightedIFL,
          iflFormatted: weightedIFL.toFixed(2),
          turmas
        });
      });

      // Sort alphabetically by default
      groups.sort((a, b) => a.escola.localeCompare(b.escola));
      return groups;
    } else {
      // 1º Simulado: group by 37 schools in Pindamonhangaba
      return SCHOOLS_DATA.map(school => {
        const rawSimSchool = SIMULADO1_SCHOOLS_RAW.find(
          s => s.name.toUpperCase() === school.name.toUpperCase() ||
               s.name.toUpperCase().includes(school.name.toUpperCase()) ||
               school.name.toUpperCase().includes(s.name.toUpperCase())
        );

        let porte = 'Médio';
        const config = currentMunicipality.porteConfig;
        if (school.previstos <= config.pequeno) porte = 'Pequeno';
        else if (school.previstos <= config.medio) porte = 'Médio';
        else porte = 'Grande';

        if (rawSimSchool && rawSimSchool.classes.length > 0) {
          const turmas = rawSimSchool.classes.map(c => ({
            id: `${school.name}__${c.turma}__${c.id}`,
            turma: c.turma,
            codigo_turma: c.id,
            prev: c.prev || c.avaliados,
            avaliados: c.avaliados,
            participacao: c.participacao !== undefined ? c.participacao : (c.prev ? (c.avaliados / c.prev * 100) : 100.0),
            n1: c.n1Perc,
            n2: c.n2Perc,
            n3: c.n3Perc,
            n4: c.n4Perc,
            iniciante: c.iniciantePerc,
            fluente: c.fluentePerc,
            leitores: c.iniciantePerc + c.fluentePerc,
            iflNum: c.iflNum,
            ifl: c.ifl,
            isPendente: !!c.isPendente,
            counts: {
              n1: c.n1Count,
              n2: c.n2Count,
              n3: c.n3Count,
              n4: c.n4Count,
              iniciante: c.inicianteCount,
              fluente: c.fluenteCount
            }
          }));

          turmas.sort((a, b) => a.turma.localeCompare(b.turma, undefined, { numeric: true }));

          const totalAvaliados = turmas.reduce((sum, t) => sum + t.avaliados, 0);
          const totalPrevistos = turmas.reduce((sum, t) => sum + t.prev, 0) || school.previstos || totalAvaliados;
          const participacao = totalPrevistos > 0 ? (totalAvaliados / totalPrevistos) * 100 : 100.0;

          const weightedN1 = totalAvaliados > 0 ? turmas.reduce((sum, t) => sum + (t.n1 * t.avaliados / 100), 0) / totalAvaliados * 100 : 0;
          const weightedN2 = totalAvaliados > 0 ? turmas.reduce((sum, t) => sum + (t.n2 * t.avaliados / 100), 0) / totalAvaliados * 100 : 0;
          const weightedN3 = totalAvaliados > 0 ? turmas.reduce((sum, t) => sum + (t.n3 * t.avaliados / 100), 0) / totalAvaliados * 100 : 0;
          const weightedN4 = totalAvaliados > 0 ? turmas.reduce((sum, t) => sum + (t.n4 * t.avaliados / 100), 0) / totalAvaliados * 100 : 0;
          const weightedIniciante = totalAvaliados > 0 ? turmas.reduce((sum, t) => sum + (t.iniciante * t.avaliados / 100), 0) / totalAvaliados * 100 : 0;
          const weightedFluente = totalAvaliados > 0 ? turmas.reduce((sum, t) => sum + (t.fluente * t.avaliados / 100), 0) / totalAvaliados * 100 : 0;
          const weightedIFL = totalAvaliados > 0 ? turmas.reduce((sum, t) => sum + (t.iflNum * t.avaliados), 0) / totalAvaliados : 0;

          return {
            escola: school.name,
            porte,
            isPendente: false,
            turmasCount: turmas.length,
            avaliados: totalAvaliados,
            previstos: totalPrevistos,
            participacao,
            n1: weightedN1,
            n2: weightedN2,
            n3: weightedN3,
            n4: weightedN4,
            iniciante: weightedIniciante,
            fluente: weightedFluente,
            leitores: weightedIniciante + weightedFluente,
            iflNum: weightedIFL,
            iflFormatted: weightedIFL.toFixed(2),
            turmas
          };
        } else {
          const sim = schoolSimuladoStatsMap.get(school.name);
          if (sim && sim.turmas.length > 0) {
            const turmas = sim.turmas.map(t => ({
              id: `${school.name}__${t.turma}`,
              turma: t.turma,
              codigo_turma: t.turma,
              prev: t.matriculados,
              avaliados: t.avaliados,
              participacao: t.participacaoPerc,
              n1: t.n1Perc,
              n2: t.n2Perc,
              n3: t.n3Perc,
              n4: t.n4Perc,
              iniciante: t.iniciantePerc,
              fluente: t.fluentePerc,
              leitores: t.leitoresPerc,
              iflNum: t.iflS1,
              ifl: t.iflS1Formatted,
              isPendente: t.avaliados === 0,
              counts: {
                n1: t.n1Count,
                n2: t.n2Count,
                n3: t.n3Count,
                n4: t.n4Count,
                iniciante: t.inicianteCount,
                fluente: t.fluenteCount
              }
            }));

            turmas.sort((a, b) => a.turma.localeCompare(b.turma, undefined, { numeric: true }));

            return {
              escola: school.name,
              porte,
              isPendente: false,
              turmasCount: turmas.length,
              avaliados: sim.totalAvaliados,
              previstos: sim.totalMatriculados,
              participacao: sim.participacaoGeralPerc,
              n1: sim.n1GeralPerc,
              n2: sim.n2GeralPerc,
              n3: sim.n3GeralPerc,
              n4: sim.n4GeralPerc,
              iniciante: sim.inicianteGeralPerc,
              fluente: sim.fluenteGeralPerc,
              leitores: sim.leitoresGeralPerc,
              iflNum: sim.iflS1Geral,
              iflFormatted: sim.iflS1GeralFormatted,
              turmas
            };
          } else {
            return {
              escola: school.name,
              porte,
              isPendente: true,
              turmasCount: 0,
              avaliados: 0,
              previstos: school.previstos,
              participacao: 0,
              n1: 0,
              n2: 0,
              n3: 0,
              n4: 0,
              iniciante: 0,
              fluente: 0,
              leitores: 0,
              iflNum: 0,
              iflFormatted: 'Pendente',
              turmas: []
            };
          }
        }
      });
    }
  }, [turmasEdition, SCHOOLS_DATA, schoolSimuladoStatsMap, currentMunicipality]);

  const availableTurmaSchools = useMemo(() => {
    const set = new Set<string>();
    schoolTurmasGrouped.forEach(g => set.add(g.escola));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [schoolTurmasGrouped]);

  const toggleSchoolCollapse = (schoolName: string) => {
    setTurmasCollapsedSchools(prev => ({
      ...prev,
      [schoolName]: !prev[schoolName]
    }));
  };

  const expandAllSchools = () => {
    setTurmasCollapsedSchools({});
  };

  const collapseAllSchools = () => {
    const allCollapsed: Record<string, boolean> = {};
    schoolTurmasGrouped.forEach(g => {
      allCollapsed[g.escola] = true;
    });
    setTurmasCollapsedSchools(allCollapsed);
  };

  const filteredAndSortedSchoolGroups = useMemo(() => {
    const q = turmaSearch.toLowerCase().trim();

    let list = schoolTurmasGrouped.filter(group => {
      if (turmasEdition === 'simulado1') {
        if (turmasSimuladoStatusFilter === 'AVALIADAS' && group.isPendente) return false;
        if (turmasSimuladoStatusFilter === 'PENDENTES' && !group.isPendente) return false;
      }

      if (turmaSchoolFilter && turmaSchoolFilter !== "TODAS" && group.escola !== turmaSchoolFilter) {
        return false;
      }

      if (q) {
        const matchEscola = group.escola.toLowerCase().includes(q);
        const matchTurma = group.turmas.some(t => 
          t.turma.toLowerCase().includes(q) || 
          (t.codigo_turma ? t.codigo_turma.toLowerCase().includes(q) : false)
        );
        if (!matchEscola && !matchTurma) {
          return false;
        }
      }

      return true;
    });

    list.sort((a, b) => {
      if (turmasSchoolSort === 'name-asc') {
        return a.escola.localeCompare(b.escola);
      }
      if (turmasSchoolSort === 'name-desc') {
        return b.escola.localeCompare(a.escola);
      }
      if (turmasSchoolSort === 'ifl-desc') {
        return b.iflNum - a.iflNum || a.escola.localeCompare(b.escola);
      }
      if (turmasSchoolSort === 'ifl-asc') {
        return a.iflNum - b.iflNum || a.escola.localeCompare(b.escola);
      }
      if (turmasSchoolSort === 'turmas-desc') {
        return b.turmasCount - a.turmasCount || a.escola.localeCompare(b.escola);
      }
      if (turmasSchoolSort === 'avaliados-desc') {
        return b.avaliados - a.avaliados || a.escola.localeCompare(b.escola);
      }
      if (turmasSchoolSort === 'part-desc') {
        return b.participacao - a.participacao || a.escola.localeCompare(b.escola);
      }
      return a.escola.localeCompare(b.escola);
    });

    return list;
  }, [schoolTurmasGrouped, turmasEdition, turmasSimuladoStatusFilter, turmaSchoolFilter, turmaSearch, turmasSchoolSort]);

  const turmasSummaryMetrics = useMemo(() => {
    const totalEscolas = filteredAndSortedSchoolGroups.length;
    const totalTurmas = filteredAndSortedSchoolGroups.reduce((sum, g) => sum + g.turmasCount, 0);
    const totalPrevistos = filteredAndSortedSchoolGroups.reduce((sum, g) => sum + g.previstos, 0);
    const totalAvaliados = filteredAndSortedSchoolGroups.reduce((sum, g) => sum + g.avaliados, 0);
    
    const avgParticipacao = totalPrevistos > 0 ? (totalAvaliados / totalPrevistos) * 100 : 0;
    
    const weightedIFLSum = filteredAndSortedSchoolGroups.reduce((sum, g) => sum + (g.iflNum * g.avaliados), 0);
    const avgIFL = totalAvaliados > 0 ? weightedIFLSum / totalAvaliados : 0;

    const weightedFluenteSum = filteredAndSortedSchoolGroups.reduce((sum, g) => sum + (g.fluente * g.avaliados / 100), 0);
    const avgFluente = totalAvaliados > 0 ? (weightedFluenteSum / totalAvaliados) * 100 : 0;

    const weightedInicianteSum = filteredAndSortedSchoolGroups.reduce((sum, g) => sum + (g.iniciante * g.avaliados / 100), 0);
    const avgIniciante = totalAvaliados > 0 ? (weightedInicianteSum / totalAvaliados) * 100 : 0;

    return {
      totalTurmas,
      totalEscolas,
      totalPrevistos,
      totalAvaliados,
      avgParticipacao: avgParticipacao.toFixed(1),
      avgIFL: avgIFL.toFixed(2),
      avgFluente: avgFluente.toFixed(1),
      avgIniciante: avgIniciante.toFixed(1),
      avgLeitores: (avgFluente + avgIniciante).toFixed(1)
    };
  }, [filteredAndSortedSchoolGroups]);

  const schoolGroupsTotalPages = useMemo(() => {
    if (turmasPerPage === -1) return 1;
    return Math.max(1, Math.ceil(filteredAndSortedSchoolGroups.length / turmasPerPage));
  }, [filteredAndSortedSchoolGroups.length, turmasPerPage]);

  const currentSchoolGroupsPage = useMemo(() => {
    return Math.min(turmasPage, schoolGroupsTotalPages);
  }, [turmasPage, schoolGroupsTotalPages]);

  const paginatedSchoolGroups = useMemo(() => {
    if (turmasPerPage === -1) return filteredAndSortedSchoolGroups;
    const start = (currentSchoolGroupsPage - 1) * turmasPerPage;
    return filteredAndSortedSchoolGroups.slice(start, start + turmasPerPage);
  }, [filteredAndSortedSchoolGroups, currentSchoolGroupsPage, turmasPerPage]);

  const schoolsByPorte = useMemo(() => {
    const config = currentMunicipality.porteConfig;
    return SCHOOLS_DATA.map(s => {
      let porte: 'Pequeno' | 'Médio' | 'Grande';
      if (s.previstos <= config.pequeno) porte = 'Pequeno';
      else if (s.previstos <= config.medio) porte = 'Médio';
      else porte = 'Grande';
      return { ...s, porte };
    });
  }, [SCHOOLS_DATA, currentMunicipality]);

  const porteSummary = useMemo(() => {
    const groups = ['Pequeno', 'Médio', 'Grande'] as const;
    return groups.map(g => {
      const schools = schoolsByPorte.filter(s => s.porte === g);
      if (schools.length === 0) return { porte: g, avgIFL: "0", avgPart: "0", count: 0 };
      
      const totalAvaliados = schools.reduce((acc, s) => acc + s.avaliados, 0);
      const totalPrevistos = schools.reduce((acc, s) => acc + s.previstos, 0);
      
      const weightedIFL = totalAvaliados > 0 
        ? schools.reduce((acc, s) => acc + (parseFloat(s.ifl) * s.avaliados), 0) / totalAvaliados
        : 0;
      const weightedPart = totalPrevistos > 0 ? (totalAvaliados / totalPrevistos) * 100 : 0;
      
      return { 
        porte: g, 
        avgIFL: weightedIFL.toFixed(1), 
        avgPart: weightedPart.toFixed(1), 
        count: schools.length 
      };
    });
  }, [schoolsByPorte]);

  const groupData = useMemo(() => {
    const schoolsInGroup = schoolsByPorte.filter(s => s.porte === selectedGroup);
    if (schoolsInGroup.length === 0) return null;

    const totalAvaliados = schoolsInGroup.reduce((acc, s) => acc + s.avaliados, 0);
    const avgIFL = totalAvaliados > 0 
      ? (schoolsInGroup.reduce((acc, s) => acc + (parseFloat(s.ifl) * s.avaliados), 0) / totalAvaliados).toFixed(1)
      : "0.0";
    
    // Aggregating detailed levels for spline chart - weighted
    const groupLevelsAvg = [
      { name: "Nível 1", value: totalAvaliados > 0 ? Math.round(schoolsInGroup.reduce((acc, s) => acc + (s.n1 * s.avaliados / 100), 0) / totalAvaliados * 100) : 0 },
      { name: "Nível 2", value: totalAvaliados > 0 ? Math.round(schoolsInGroup.reduce((acc, s) => acc + (s.n2 * s.avaliados / 100), 0) / totalAvaliados * 100) : 0 },
      { name: "Nível 3", value: totalAvaliados > 0 ? Math.round(schoolsInGroup.reduce((acc, s) => acc + (s.n3 * s.avaliados / 100), 0) / totalAvaliados * 100) : 0 },
      { name: "Nível 4", value: totalAvaliados > 0 ? Math.round(schoolsInGroup.reduce((acc, s) => acc + (s.n4 * s.avaliados / 100), 0) / totalAvaliados * 100) : 0 },
      { name: "Leitor Iniciante", value: totalAvaliados > 0 ? Math.round(schoolsInGroup.reduce((acc, s) => acc + (s.iniciante * s.avaliados / 100), 0) / totalAvaliados * 100) : 0 },
      { name: "Leitor Fluente", value: totalAvaliados > 0 ? Math.round(schoolsInGroup.reduce((acc, s) => acc + (s.fluente * s.avaliados / 100), 0) / totalAvaliados * 100) : 0 },
    ];

    const sortedSchools = [...schoolsInGroup].sort((a, b) => parseFloat(b.ifl) - parseFloat(a.ifl));

    return {
      avgIFL,
      groupLevelsAvg,
      sortedSchools,
      count: schoolsInGroup.length
    };
  }, [selectedGroup, schoolsByPorte]);

  const schoolsBySetor = useMemo(() => {
    const setoresConfig = (currentMunicipality as any).setores || {};
    
    const normalizeSchoolName = (str: string) => {
      return str
        .toUpperCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^A-Z0-9]/g, '');
    };

    return SCHOOLS_DATA.map(s => {
      const sim = schoolSimuladoStatsMap.get(s.name);
      let setor = "Outro";
      const normSName = normalizeSchoolName(s.name);
      
      for (const [nomeSetor, escolas] of Object.entries(setoresConfig) as [string, string[]][]) {
        if (escolas.some(e => normalizeSchoolName(e) === normSName || e === s.name)) {
          setor = nomeSetor;
          break;
        }
      }

      const iflEntrada = parseFloat(s.ifl) || 0;
      const iflSimulado = sim ? sim.iflS1Geral : iflEntrada;
      const delta = sim ? sim.deltaGeral : 0;
      const deltaFormatted = sim ? sim.deltaGeralFormatted : '+0.00';
      const fluenteSimulado = sim ? sim.leitoresFluentesGeralPerc : s.fluente;
      const inicianteSimulado = sim ? sim.leitoresIniciantesGeralPerc : s.iniciante;
      const leitoresSimulado = sim ? sim.leitoresGeralPerc : (s.fluente + s.iniciante);
      const avaliadosSimulado = sim ? sim.totalAvaliados : s.avaliados;
      const matriculadosSimulado = sim ? sim.totalMatriculados : s.previstos;
      const participacaoSimulado = sim && sim.totalMatriculados > 0 
        ? (sim.totalAvaliados / sim.totalMatriculados) * 100 
        : s.participacao;

      return {
        ...s,
        setor,
        iflEntrada,
        iflEntradaFormatted: iflEntrada.toFixed(2),
        fluenteEntrada: s.fluente,
        inicianteEntrada: s.iniciante,
        leitoresEntrada: s.fluente + s.iniciante,
        n1Entrada: s.n1,
        n2Entrada: s.n2,
        n3Entrada: s.n3,
        n4Entrada: s.n4,
        avaliadosEntrada: s.avaliados,
        previstosEntrada: s.previstos,
        participacaoEntrada: s.participacao,
        
        iflSimulado,
        iflSimuladoFormatted: iflSimulado.toFixed(2),
        fluenteSimulado,
        inicianteSimulado,
        leitoresSimulado,
        n1Simulado: sim ? sim.n1GeralPerc : s.n1,
        n2Simulado: sim ? sim.n2GeralPerc : s.n2,
        n3Simulado: sim ? sim.n3GeralPerc : s.n3,
        n4Simulado: sim ? sim.n4GeralPerc : s.n4,
        avaliadosSimulado,
        matriculadosSimulado,
        participacaoSimulado,
        delta,
        deltaFormatted,
        taxaAvanco: sim ? sim.taxaAvancoGeralPerc : 0,
        sim
      };
    });
  }, [SCHOOLS_DATA, currentMunicipality, schoolSimuladoStatsMap]);

  const setoresSummary = useMemo(() => {
    const setoresConfig = (currentMunicipality as any).setores || {};
    const nomesSetores = Object.keys(setoresConfig);
    
    return nomesSetores.map(setorNome => {
      const schools = schoolsBySetor.filter(s => s.setor === setorNome);
      if (schools.length === 0) {
        return {
          setor: setorNome,
          count: 0,
          avgIFL: "0.00",
          avgIFLEntrada: "0.00",
          avgIFLSimulado: "0.00",
          avgDelta: 0,
          avgDeltaFormatted: "+0.00",
          avgPart: "0.0",
          avgPartEntrada: "0.0",
          avgPartSimulado: "0.0",
          fluencia: "0.0",
          fluenciaEntrada: "0.0",
          fluenciaSimulado: "0.0",
          leitoresEntrada: "0.0",
          leitoresSimulado: "0.0",
          totalAvaliadosEntrada: 0,
          totalAvaliadosSimulado: 0,
          totalMatriculados: 0,
          topEvolvingSchool: null as any,
          schools: []
        };
      }
      
      const totalAvaliadosEntrada = schools.reduce((acc, s) => acc + s.avaliadosEntrada, 0);
      const totalPrevistosEntrada = schools.reduce((acc, s) => acc + s.previstosEntrada, 0);
      const totalAvaliadosSimulado = schools.reduce((acc, s) => acc + s.avaliadosSimulado, 0);
      const totalMatriculados = schools.reduce((acc, s) => acc + s.matriculadosSimulado, 0);
      
      const weightedIFLEntrada = totalAvaliadosEntrada > 0 
        ? schools.reduce((acc, s) => acc + (s.iflEntrada * s.avaliadosEntrada), 0) / totalAvaliadosEntrada
        : 0;

      const weightedIFLSimulado = totalAvaliadosSimulado > 0 
        ? schools.reduce((acc, s) => acc + (s.iflSimulado * s.avaliadosSimulado), 0) / totalAvaliadosSimulado
        : 0;

      const avgDelta = weightedIFLSimulado - weightedIFLEntrada;
      const avgDeltaFormatted = (avgDelta >= 0 ? '+' : '') + avgDelta.toFixed(2);

      const weightedPartEntrada = totalPrevistosEntrada > 0 ? (totalAvaliadosEntrada / totalPrevistosEntrada) * 100 : 0;
      const weightedPartSimulado = totalMatriculados > 0 ? (totalAvaliadosSimulado / totalMatriculados) * 100 : 0;

      const weightedFluenciaEntrada = totalAvaliadosEntrada > 0
        ? schools.reduce((acc, s) => acc + (s.fluenteEntrada * s.avaliadosEntrada / 100), 0) / totalAvaliadosEntrada * 100
        : 0;

      const weightedFluenciaSimulado = totalAvaliadosSimulado > 0
        ? schools.reduce((acc, s) => acc + (s.fluenteSimulado * s.avaliadosSimulado / 100), 0) / totalAvaliadosSimulado * 100
        : 0;

      const weightedLeitoresEntrada = totalAvaliadosEntrada > 0
        ? schools.reduce((acc, s) => acc + (s.leitoresEntrada * s.avaliadosEntrada / 100), 0) / totalAvaliadosEntrada * 100
        : 0;

      const weightedLeitoresSimulado = totalAvaliadosSimulado > 0
        ? schools.reduce((acc, s) => acc + (s.leitoresSimulado * s.avaliadosSimulado / 100), 0) / totalAvaliadosSimulado * 100
        : 0;

      const topEvolvingSchool = [...schools].sort((a, b) => b.delta - a.delta)[0] || null;
      
      return { 
        setor: setorNome, 
        count: schools.length,
        avgIFL: weightedIFLSimulado.toFixed(2),
        avgIFLEntrada: weightedIFLEntrada.toFixed(2),
        avgIFLSimulado: weightedIFLSimulado.toFixed(2),
        avgDelta,
        avgDeltaFormatted,
        avgPart: weightedPartSimulado.toFixed(1),
        avgPartEntrada: weightedPartEntrada.toFixed(1),
        avgPartSimulado: weightedPartSimulado.toFixed(1),
        fluencia: weightedFluenciaSimulado.toFixed(1),
        fluenciaEntrada: weightedFluenciaEntrada.toFixed(1),
        fluenciaSimulado: weightedFluenciaSimulado.toFixed(1),
        leitoresEntrada: weightedLeitoresEntrada.toFixed(1),
        leitoresSimulado: weightedLeitoresSimulado.toFixed(1),
        totalAvaliadosEntrada,
        totalAvaliadosSimulado,
        totalMatriculados,
        topEvolvingSchool,
        schools
      };
    });
  }, [schoolsBySetor, currentMunicipality]);

  const groupDataSetor = useMemo(() => {
    const schoolsInSetor = schoolsBySetor.filter(s => s.setor === selectedSetor);
    if (schoolsInSetor.length === 0) return null;

    const totalAvaliadosEntrada = schoolsInSetor.reduce((acc, s) => acc + s.avaliadosEntrada, 0);
    const totalPrevistosEntrada = schoolsInSetor.reduce((acc, s) => acc + s.previstosEntrada, 0);
    const totalAvaliadosSimulado = schoolsInSetor.reduce((acc, s) => acc + s.avaliadosSimulado, 0);
    const totalMatriculados = schoolsInSetor.reduce((acc, s) => acc + s.matriculadosSimulado, 0);

    const avgIFLEntradaNum = totalAvaliadosEntrada > 0 
      ? schoolsInSetor.reduce((acc, s) => acc + (s.iflEntrada * s.avaliadosEntrada), 0) / totalAvaliadosEntrada
      : 0;

    const avgIFLSimuladoNum = totalAvaliadosSimulado > 0 
      ? schoolsInSetor.reduce((acc, s) => acc + (s.iflSimulado * s.avaliadosSimulado), 0) / totalAvaliadosSimulado
      : 0;

    const deltaAvg = avgIFLSimuladoNum - avgIFLEntradaNum;
    const deltaAvgFormatted = (deltaAvg >= 0 ? '+' : '') + deltaAvg.toFixed(2);

    const avgPartEntrada = totalPrevistosEntrada > 0 ? (totalAvaliadosEntrada / totalPrevistosEntrada) * 100 : 0;
    const avgPartSimulado = totalMatriculados > 0 ? (totalAvaliadosSimulado / totalMatriculados) * 100 : 0;

    const fluenciaEntrada = totalAvaliadosEntrada > 0
      ? schoolsInSetor.reduce((acc, s) => acc + (s.fluenteEntrada * s.avaliadosEntrada / 100), 0) / totalAvaliadosEntrada * 100
      : 0;

    const fluenciaSimulado = totalAvaliadosSimulado > 0
      ? schoolsInSetor.reduce((acc, s) => acc + (s.fluenteSimulado * s.avaliadosSimulado / 100), 0) / totalAvaliadosSimulado * 100
      : 0;

    const leitoresEntrada = totalAvaliadosEntrada > 0
      ? schoolsInSetor.reduce((acc, s) => acc + (s.leitoresEntrada * s.avaliadosEntrada / 100), 0) / totalAvaliadosEntrada * 100
      : 0;

    const leitoresSimulado = totalAvaliadosSimulado > 0
      ? schoolsInSetor.reduce((acc, s) => acc + (s.leitoresSimulado * s.avaliadosSimulado / 100), 0) / totalAvaliadosSimulado * 100
      : 0;

    // Proficiency levels for Entrada
    const levelsEntrada = [
      { name: "Nível 1", value: totalAvaliadosEntrada > 0 ? Math.round(schoolsInSetor.reduce((acc, s) => acc + (s.n1Entrada * s.avaliadosEntrada / 100), 0) / totalAvaliadosEntrada * 100) : 0 },
      { name: "Nível 2", value: totalAvaliadosEntrada > 0 ? Math.round(schoolsInSetor.reduce((acc, s) => acc + (s.n2Entrada * s.avaliadosEntrada / 100), 0) / totalAvaliadosEntrada * 100) : 0 },
      { name: "Nível 3", value: totalAvaliadosEntrada > 0 ? Math.round(schoolsInSetor.reduce((acc, s) => acc + (s.n3Entrada * s.avaliadosEntrada / 100), 0) / totalAvaliadosEntrada * 100) : 0 },
      { name: "Nível 4", value: totalAvaliadosEntrada > 0 ? Math.round(schoolsInSetor.reduce((acc, s) => acc + (s.n4Entrada * s.avaliadosEntrada / 100), 0) / totalAvaliadosEntrada * 100) : 0 },
      { name: "Leitor Iniciante", value: totalAvaliadosEntrada > 0 ? Math.round(schoolsInSetor.reduce((acc, s) => acc + (s.inicianteEntrada * s.avaliadosEntrada / 100), 0) / totalAvaliadosEntrada * 100) : 0 },
      { name: "Leitor Fluente", value: totalAvaliadosEntrada > 0 ? Math.round(schoolsInSetor.reduce((acc, s) => acc + (s.fluenteEntrada * s.avaliadosEntrada / 100), 0) / totalAvaliadosEntrada * 100) : 0 },
    ];

    // Proficiency levels for 1º Simulado
    const levelsSimulado = [
      { name: "Nível 1", value: totalAvaliadosSimulado > 0 ? Math.round(schoolsInSetor.reduce((acc, s) => acc + (s.n1Simulado * s.avaliadosSimulado / 100), 0) / totalAvaliadosSimulado * 100) : 0 },
      { name: "Nível 2", value: totalAvaliadosSimulado > 0 ? Math.round(schoolsInSetor.reduce((acc, s) => acc + (s.n2Simulado * s.avaliadosSimulado / 100), 0) / totalAvaliadosSimulado * 100) : 0 },
      { name: "Nível 3", value: totalAvaliadosSimulado > 0 ? Math.round(schoolsInSetor.reduce((acc, s) => acc + (s.n3Simulado * s.avaliadosSimulado / 100), 0) / totalAvaliadosSimulado * 100) : 0 },
      { name: "Nível 4", value: totalAvaliadosSimulado > 0 ? Math.round(schoolsInSetor.reduce((acc, s) => acc + (s.n4Simulado * s.avaliadosSimulado / 100), 0) / totalAvaliadosSimulado * 100) : 0 },
      { name: "Leitor Iniciante", value: totalAvaliadosSimulado > 0 ? Math.round(schoolsInSetor.reduce((acc, s) => acc + (s.inicianteSimulado * s.avaliadosSimulado / 100), 0) / totalAvaliadosSimulado * 100) : 0 },
      { name: "Leitor Fluente", value: totalAvaliadosSimulado > 0 ? Math.round(schoolsInSetor.reduce((acc, s) => acc + (s.fluenteSimulado * s.avaliadosSimulado / 100), 0) / totalAvaliadosSimulado * 100) : 0 },
    ];

    // Comparative levels for side-by-side display
    const levelsComparative = levelsEntrada.map((le, idx) => ({
      name: le.name,
      entrada: le.value,
      simulado: levelsSimulado[idx]?.value || 0
    }));

    const sortedSchools = [...schoolsInSetor].sort((a, b) => b.iflSimulado - a.iflSimulado);
    const topEvolvingSchool = [...schoolsInSetor].sort((a, b) => b.delta - a.delta)[0] || null;

    return {
      count: schoolsInSetor.length,
      avgIFL: avgIFLSimuladoNum.toFixed(2),
      avgIFLEntrada: avgIFLEntradaNum.toFixed(2),
      avgIFLSimulado: avgIFLSimuladoNum.toFixed(2),
      deltaAvg,
      deltaAvgFormatted,
      totalAvaliadosEntrada,
      totalAvaliadosSimulado,
      totalMatriculados,
      avgPartEntrada: avgPartEntrada.toFixed(1),
      avgPartSimulado: avgPartSimulado.toFixed(1),
      fluenciaEntrada: fluenciaEntrada.toFixed(1),
      fluenciaSimulado: fluenciaSimulado.toFixed(1),
      leitoresEntrada: leitoresEntrada.toFixed(1),
      leitoresSimulado: leitoresSimulado.toFixed(1),
      groupLevelsAvg: levelsSimulado,
      levelsEntrada,
      levelsSimulado,
      levelsComparative,
      sortedSchools,
      topEvolvingSchool
    };
  }, [selectedSetor, schoolsBySetor]);

  const toggleSchoolSelection = (schoolName: string) => {
    setSelectedSchoolsForReport(prev => {
      const next = new Set(prev);
      if (next.has(schoolName)) {
        next.delete(schoolName);
      } else {
        next.add(schoolName);
      }
      return next;
    });
  };

  // Structural Analysis for Insights as requested in JSON Format logic
  const pedagogicalAnalysis = useMemo(() => {
    const simSchool = schoolSimuladoStatsMap.get(selectedSchool);
    if (schoolsEdition === 'simulado1' && simSchool) {
      const mAvgFluents = municipalSimuladoStats.fluentePerc;
      const sFluents = simSchool.fluenteGeralPerc;
      const diff = sFluents - mAvgFluents;

      let pointer = "";
      if (diff > 0) {
        pointer = `No 1º Simulado, a Unidade Escolar ${simSchool.schoolName} apresenta taxa de Fluência ${diff.toFixed(1)}% acima da média municipal (${sFluents.toFixed(1)}% vs ${mAvgFluents.toFixed(1)}%). IFL consolidado de ${simSchool.iflS1GeralFormatted} (Evolução de ${simSchool.deltaGeralFormatted} pts).`;
      } else {
        pointer = `No 1º Simulado, a Unidade Escolar ${simSchool.schoolName} registrou ${sFluents.toFixed(1)}% de Leitores Fluentes (média municipal: ${mAvgFluents.toFixed(1)}%). IFL consolidado: ${simSchool.iflS1GeralFormatted} (Variação: ${simSchool.deltaGeralFormatted} pts).`;
      }

      const n1Val = Number(simSchool.n1GeralPerc.toFixed(1));
      const n2Val = Number(simSchool.n2GeralPerc.toFixed(1));
      const hasAlert = n1Val > 10 || n2Val > 15;

      const participationAlert = simSchool.totalAvaliados < simSchool.totalMatriculados
        ? `No 1º Simulado, a unidade ${simSchool.schoolName} possui ${simSchool.totalMatriculados} previstos no censo e avaliou ${simSchool.totalAvaliados} alunos (${simSchool.participacaoGeralPerc.toFixed(1)}% de participação).`
        : null;

      const caedSchool = SCHOOLS_DATA.find(s => 
        s.name.toUpperCase() === selectedSchool.toUpperCase() ||
        s.name.toUpperCase().includes(selectedSchool.toUpperCase()) ||
        selectedSchool.toUpperCase().includes(s.name.toUpperCase())
      ) || currentSchoolData;

      const combinedValues = [
        { 
          name: "Nível 1", 
          simulado: Number(simSchool.n1GeralPerc.toFixed(1)), 
          caed: caedSchool ? Number(caedSchool.n1.toFixed(1)) : 0, 
          municipal: Number(municipalSimuladoStats.n1Perc.toFixed(1)),
          school: Number(simSchool.n1GeralPerc.toFixed(1))
        },
        { 
          name: "Nível 2", 
          simulado: Number(simSchool.n2GeralPerc.toFixed(1)), 
          caed: caedSchool ? Number(caedSchool.n2.toFixed(1)) : 0, 
          municipal: Number(municipalSimuladoStats.n2Perc.toFixed(1)),
          school: Number(simSchool.n2GeralPerc.toFixed(1))
        },
        { 
          name: "Nível 3", 
          simulado: Number(simSchool.n3GeralPerc.toFixed(1)), 
          caed: caedSchool ? Number(caedSchool.n3.toFixed(1)) : 0, 
          municipal: Number(municipalSimuladoStats.n3Perc.toFixed(1)),
          school: Number(simSchool.n3GeralPerc.toFixed(1))
        },
        { 
          name: "Nível 4", 
          simulado: Number(simSchool.n4GeralPerc.toFixed(1)), 
          caed: caedSchool ? Number(caedSchool.n4.toFixed(1)) : 0, 
          municipal: Number(municipalSimuladoStats.n4Perc.toFixed(1)),
          school: Number(simSchool.n4GeralPerc.toFixed(1))
        },
        { 
          name: "Leitor Iniciante", 
          simulado: Number(simSchool.inicianteGeralPerc.toFixed(1)), 
          caed: caedSchool ? Number(caedSchool.iniciante.toFixed(1)) : 0, 
          municipal: Number(municipalSimuladoStats.iniciantePerc.toFixed(1)),
          school: Number(simSchool.inicianteGeralPerc.toFixed(1))
        },
        { 
          name: "Leitor Fluente", 
          simulado: Number(simSchool.fluenteGeralPerc.toFixed(1)), 
          caed: caedSchool ? Number(caedSchool.fluente.toFixed(1)) : 0, 
          municipal: Number(municipalSimuladoStats.fluentePerc.toFixed(1)),
          school: Number(simSchool.fluenteGeralPerc.toFixed(1))
        },
      ];

      return {
        selected_school: simSchool.schoolName,
        comparative_analysis: pointer,
        hasAlert,
        n1Val,
        n2Val,
        participationAlert,
        chart_data: { combinedValues }
      };
    }

    // Default: Entrada CAEd
    const mAvgFluents = municipalDistribution.find(d => d.name === "Fluentes")?.value || 0;
    const sFluents = currentSchoolData.fluente;
    const diff = sFluents - mAvgFluents;
    
    let pointer = "";
    if (diff > 0) {
      pointer = `A Unidade Escolar ${currentSchoolData.name} apresenta um índice de Leitores Fluentes ${diff.toFixed(1)}% acima da média da rede.`;
    } else {
      pointer = `A Unidade Escolar ${currentSchoolData.name} está ${Math.abs(diff).toFixed(1)}% abaixo da média municipal em Fluência. Foco em aceleração necessário.`;
    }

    const n1Val = currentSchoolData.n1;
    const n2Val = currentSchoolData.n2;
    const hasAlert = n1Val > 10 || n2Val > 15;

    // Participation Alert
    const participationAlert = currentSchoolData.avaliados < currentSchoolData.previstos 
      ? `A unidade ${currentSchoolData.name} possui ${currentSchoolData.previstos} alunos previstos, porém a análise baseia-se nos ${currentSchoolData.avaliados} efetivos (${currentSchoolData.participacao}% de participação real).`
      : null;

    return {
      selected_school: currentSchoolData.name,
      comparative_analysis: pointer,
      hasAlert,
      n1Val,
      n2Val,
      participationAlert,
      chart_data: {
        combinedValues: currentSchoolData.detailedLevels.map((dl, idx) => {
           // Mapping school levels to municipal distribution
           // School levels order: N1, N2, N3, N4, LI, LF
           // Distribution order: Fluentes, Iniciantes, N1, N2, N3, N4
           let mValue = 0;
           if (idx === 0) mValue = municipalDistribution.find(d => d.name === "Nível 1")?.value || 0;
           else if (idx === 1) mValue = municipalDistribution.find(d => d.name === "Nível 2")?.value || 0;
           else if (idx === 2) mValue = municipalDistribution.find(d => d.name === "Nível 3")?.value || 0;
           else if (idx === 3) mValue = municipalDistribution.find(d => d.name === "Nível 4")?.value || 0;
           else if (idx === 4) mValue = municipalDistribution.find(d => d.name === "Iniciantes")?.value || 0;
           else if (idx === 5) mValue = municipalDistribution.find(d => d.name === "Fluentes")?.value || 0;

           return {
             name: dl.name,
             school: dl.value,
             caed: dl.value,
             simulado: dl.value,
             municipal: mValue
           };
        })
      }
    };
  }, [currentSchoolData, municipalDistribution, schoolsEdition, selectedSchool, schoolSimuladoStatsMap, municipalSimuladoStats]);

  useEffect(() => {
    const updateWidth = () => {
      if (bottomScrollRef.current) {
        setTableScrollWidth(bottomScrollRef.current.scrollWidth);
      }
    };

    if (activeTab === 'turmas' && bottomScrollRef.current) {
      updateWidth();
      const resizeObserver = new ResizeObserver(updateWidth);
      resizeObserver.observe(bottomScrollRef.current);
      
      // Also observe the table itself if possible, or just the container
      const table = bottomScrollRef.current.querySelector('table');
      if (table) resizeObserver.observe(table);

      return () => resizeObserver.disconnect();
    }
  }, [activeTab, classesStats]);

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const found = SCHOOLS_DATA.find(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));
      if (found) setSelectedSchool(found.name);
    }
  };

  const handleGeneratePDF = () => {
    if (!reportRef.current) return;
    
    setIsGeneratingPDF(true);
    
    const element = reportRef.current;
    const opt = {
      margin: [10, 10],
      filename: `Relatorio_Pedagogico_SME_${new Date().toISOString().split('T')[0]}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true, 
        logging: false,
        letterRendering: true
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'] }
    };

    // Usar html2pdf para gerar e baixar o arquivo
    try {
      (html2pdf() as any).set(opt).from(element).save()
        .then(() => {
          setIsGeneratingPDF(false);
          console.log("PDF gerado com sucesso.");
        })
        .catch((err: any) => {
          setIsGeneratingPDF(false);
          console.error("Erro ao gerar PDF:", err);
          window.print();
        });
    } catch (e) {
      setIsGeneratingPDF(false);
      console.error("Falha ao executar html2pdf:", e);
      window.print();
    }
  };

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto bg-slate-50/50 text-[16pt] print:p-0 print:max-w-none print:bg-white overflow-x-hidden">
      <header className="mb-10 print:hidden">
        {/* Institucional Header - Focused on Pindamonhangaba */}
        <div className="flex justify-between items-center gap-6" style={{ backgroundColor: '#ffffff', padding: '16px 24px', borderBottom: '3px solid #2563eb', marginBottom: '25px', borderRadius: '12px' }}>
          <div className="flex-shrink-0 flex items-center">
              <img 
                alt="Brasão Pindamonhangaba" 
                src={currentMunicipality.brasao} 
                style={{ height: '75px', width: 'auto', objectFit: 'contain' }} 
                referrerPolicy="no-referrer"
              />
          </div>
          
          <div style={{ flexGrow: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 900, color: '#1e293b', textTransform: 'uppercase', margin: 0, lineHeight: 1.2, letterSpacing: '0.8px' }}>
              PREFEITURA MUNICIPAL DE {selectedMunicipalityName}
            </h1>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', margin: '2px 0 0 0', lineHeight: 1.2 }}>
              Secretaria Municipal de Educação
            </h2>
            <p style={{ fontSize: '14px', fontWeight: 900, color: '#2563eb', textTransform: 'uppercase', marginTop: '6px', letterSpacing: '0.5px' }}>
              PIPA - Plano de Intervenção Pedagógico Amplo - GT - ADE
            </p>
          </div>
          
          <div className="flex-shrink-0 flex items-center justify-end">
            <img 
              alt="Logo Empresa" 
              src="/logo_empresa.png" 
              style={{ height: '55px', maxHeight: '58px', width: 'auto', objectFit: 'contain' }} 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
          
        {/* Static Informative Badges & Edition Switcher */}
        <div className="flex flex-wrap gap-4 justify-between items-center w-full mb-10 px-2">
          {/* Quick Edition Selector */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shadow-inner">
            <button
              onClick={() => {
                setSchoolsEdition('base_pinda');
                setActiveTab('perf');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'perf' && schoolsEdition === 'base_pinda'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
              title="Acessar Resultados da Base Pinda 2026 (Entrada CAEd)"
            >
              <Database className="w-3.5 h-3.5" />
              BASE PINDA 2026
            </button>
            <button
              onClick={() => {
                setSchoolsEdition('simulado1');
                setActiveTab('perf');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'perf' && schoolsEdition === 'simulado1'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
              title="Acessar Resultados Compilados do 1º Simulado Municipal"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              1° SIMULADO
            </button>
          </div>

          {/* Badges and Municipality Selector */}
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700">
              Edição: 2026
            </div>
            <div className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700">
              Período: Entrada + 1º Simulado
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 tracking-wider">REDE:</span>
              <div className="px-3 py-1 rounded-lg border border-blue-600 bg-blue-50/50 text-blue-700 text-xs font-bold cursor-default select-none">
                Pindamonhangaba
              </div>
            </div>
          </div>
        </div>
        
        <NavToggle activeTab={activeTab} setActiveTab={setActiveTab} />
      </header>

      <AnimatePresence mode="wait">
        {activeTab === 'panorama' ? (
          <motion.div
            key="panorama"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-10"
          >
            {/* Expressive Municipal Simulado vs Entrada Card */}
            <ExpressiveMunicipalCard
              totalMatriculados={municipalSimuladoStats.totalMatriculados}
              totalAvaliados={municipalSimuladoStats.totalAvaliados}
              participacaoPerc={municipalSimuladoStats.participacaoPerc}
              iflEntradaMunicipal={municipalSimuladoStats.iflEntradaMunicipal}
              iflS1Municipal={municipalSimuladoStats.iflS1Municipal}
              deltaMunicipal={municipalSimuladoStats.deltaMunicipal}
              leitoresPerc={municipalSimuladoStats.leitoresPerc}
              taxaAvancoPerc={municipalSimuladoStats.taxaAvancoPerc}
            />

            <div className="flex flex-wrap gap-6">
              <KPI icon={Activity} label="IFL Municipal" value={municipalStats.ifl} colorClass="bg-orange-600" subtitle="Média Ponderada Pindamonhangaba" />
              <KPI icon={Users} label="Censo (Previstos)" value={municipalStats.totalPrevistos} colorClass="bg-indigo-700" subtitle="Alunos Previstos" />
              <KPI icon={CheckCircle} label="Participação" value={municipalStats.participation} colorClass="bg-blue-700" subtitle="Cobertura do Censo" />
              <KPI icon={Trophy} label="Média Leitores" value={municipalStats.leitores} colorClass="bg-green-700" subtitle="Iniciantes + Fluentes" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 h-[550px]">
                <h2 className="text-xl font-black mb-8 text-center text-slate-800">Distribuição Consolidada de Níveis</h2>
                <ResponsiveContainer width="100%" height="90%">
                  <PieChart>
                    <Pie
                      data={municipalDistribution}
                      cx="50%" cy="50%"
                      innerRadius={100} outerRadius={160}
                      paddingAngle={4} dataKey="value"
                    >
                      {municipalDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(val: any) => [`${Number(val).toFixed(1)}%`, 'Percentual']}
                    />
                    <Legend 
                      verticalAlign="bottom" 
                      align="center"
                      iconType="circle"
                      wrapperStyle={{ paddingTop: '12px' }}
                      formatter={(value: string, entry: any) => (
                        <span className="text-xs font-bold text-slate-700 mr-2">
                          {value}: {Number(entry?.payload?.value || 0).toFixed(1)}%
                        </span>
                      )}
                    />
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-3xl font-black fill-slate-800">
                      IFL {municipalStats.ifl}
                    </text>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 overflow-hidden h-[550px]">
                <h2 className="text-xl font-black mb-8 text-center text-slate-800 underline decoration-green-500 underline-offset-8">Tabela Mestre de Performance</h2>
                <div className="overflow-x-auto overflow-y-auto h-[400px] border border-gray-100 rounded-xl scrollbar-thin scrollbar-thumb-gray-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 sticky top-0 z-10 text-slate-500 font-black uppercase text-[10px]">
                      <tr>
                        <th className="px-4 py-3">Escola</th>
                        <th className="px-4 py-3 text-center">Avaliados</th>
                        <th className="px-4 py-3 text-center">IFL</th>
                        <th className="px-4 py-3 text-center text-red-400">N1</th>
                        <th className="px-4 py-3 text-center text-red-500">N2</th>
                        <th className="px-4 py-3 text-right">% Leitores</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {SCHOOLS_DATA.sort((a,b) => parseFloat(b.ifl) - parseFloat(a.ifl)).map((school) => (
                        <tr key={school.name} className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-bold text-slate-700 truncate max-w-[260px]" title={school.name}>{school.name}</td>
                          <td className="px-4 py-3 text-center font-medium">{school.avaliados}</td>
                          <td className={`px-4 py-3 text-center font-black ${parseFloat(school.ifl) >= 6.0 ? 'text-blue-600' : parseFloat(school.ifl) <= 4.0 ? 'text-red-500' : 'text-orange-600'}`}>
                            {school.ifl}
                          </td>
                          <td className="px-4 py-3 text-center font-bold text-red-300">{school.n1}%</td>
                          <td className="px-4 py-3 text-center font-bold text-red-400">{school.n2}%</td>
                          <td className="px-4 py-3 text-right font-black text-green-700">{school.leitores}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Módulo de Insights Estratégicos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* TOP 5 - EXCELÊNCIA */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-green-600">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-green-600" />
                  <h3 className="font-black text-[10px] uppercase tracking-widest text-slate-400">Top 5 - Excelência</h3>
                </div>
                <div className="space-y-3">
                  {strategicInsights.top5Excellence.map((s, i) => (
                    <div key={s.name} className="flex justify-between items-center text-[11px] gap-2">
                      <span className="font-bold text-slate-600 truncate flex-1 min-w-0" title={s.name}>{i+1}. {s.name}</span>
                      <span className="font-black text-green-700 bg-green-50 px-2 py-0.5 rounded text-[10px] shrink-0">IFL {s.ifl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TOP 5 - PRIORIDADE */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-red-600">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <h3 className="font-black text-[10px] uppercase tracking-widest text-slate-400">Top 5 - Prioridade</h3>
                </div>
                <div className="space-y-3">
                  {strategicInsights.top5Priority.map((s, i) => (
                    <div key={s.name} className="flex justify-between items-center text-[11px] gap-2">
                      <span className="font-bold text-slate-600 truncate flex-1 min-w-0" title={s.name}>{i+1}. {s.name}</span>
                      <span className="font-black text-red-700 bg-red-50 px-2 py-0.5 rounded text-[10px] shrink-0">IFL {s.ifl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RANKING DE ABSENTEÍSMO */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-orange-500">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-orange-500" />
                  <h3 className="font-black text-[10px] uppercase tracking-widest text-slate-400">Absenteísmo (% Ausência)</h3>
                </div>
                <div className="space-y-3">
                  {strategicInsights.absenteeismRanking.map((s, i) => (
                    <div key={s.name} className="flex justify-between items-center text-[11px] gap-2">
                      <span className="font-bold text-slate-600 truncate flex-1 min-w-0" title={s.name}>{i+1}. {s.name}</span>
                      <span className="font-black text-orange-700 shrink-0">{s.percAusencia.toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TOP 5 - POTENCIAL DE LEITURA */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-blue-500">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                  <h3 className="font-black text-[10px] uppercase tracking-widest text-slate-400">Potencial de Leitura</h3>
                </div>
                <div className="space-y-3 text-[11px]">
                  {strategicInsights.potentialReading.map((s, i) => (
                    <div key={s.name} className="flex justify-between items-center gap-2">
                      <span className="font-bold text-slate-600 truncate flex-1 min-w-0" title={s.name}>{i+1}. {s.name}</span>
                      <span className="font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-[10px] shrink-0">{s.somaLeitura}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : activeTab === 'turmas' ? (
          <motion.div
            key="turmas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            {/* 0. Top Edition Selector Switcher */}
            <div className="bg-white p-3 rounded-3xl shadow-sm border border-slate-200/90 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 p-1 bg-slate-100 rounded-2xl border border-slate-200">
                {/* Button 1: 1º SIMULADO */}
                <button
                  onClick={() => {
                    setTurmasEdition('simulado1');
                    setTurmasSimuladoStatusFilter('TODAS');
                    setTurmaSchoolFilter('TODAS');
                    setTurmasPage(1);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
                    turmasEdition === 'simulado1'
                      ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
                      : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Sparkles className={`w-4 h-4 ${turmasEdition === 'simulado1' ? 'text-amber-300' : 'text-blue-600'}`} />
                  <span>1º SIMULADO</span>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-black ${
                    turmasEdition === 'simulado1' ? 'bg-blue-800 text-blue-100' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {SIMULADO1_SCHOOLS_RAW.length} Escolas (100% da Rede)
                  </span>
                </button>

                {/* Button 2: BASE PINDA 2026 / AVA. ENT. CAED */}
                <button
                  onClick={() => {
                    setTurmasEdition('base_pinda');
                    setTurmaSchoolFilter('TODAS');
                    setTurmasPage(1);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
                    turmasEdition === 'base_pinda'
                      ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
                      : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Database className={`w-4 h-4 ${turmasEdition === 'base_pinda' ? 'text-teal-300' : 'text-slate-500'}`} />
                  <span>BASE PINDA 2026 (AVA. ENT. CAED)</span>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-black ${
                    turmasEdition === 'base_pinda' ? 'bg-blue-800 text-blue-100' : 'bg-slate-200 text-slate-700'
                  }`}>
                    37 Escolas
                  </span>
                </button>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-600">
                  Base Ativa: <strong className="text-slate-900">{turmasEdition === 'simulado1' ? '1º Simulado Municipal (2026)' : 'Avaliação de Entrada CAED'}</strong>
                </span>
              </div>
            </div>

            {/* Simulado 1 Scope & Coverage Banner (when in Simulado 1) */}
            {turmasEdition === 'simulado1' && (
              <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-7 shadow-md border border-blue-900/40 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-lg text-xs font-black uppercase tracking-wider">
                        1º Simulado Municipal de Fluência Leitora 2026
                      </span>
                      <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-lg text-xs font-black flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        100% da Rede Consolidada
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                      Resultados por Turma das {SIMULADO1_SCHOOLS_RAW.length} Escolas Municipais
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm font-medium mt-1 max-w-3xl">
                      Cálculo estrito pelo modelo paramétrico IFL = (%N1×0) + (%N2×1) + (%N3×2.5) + (%N4×4) + (%LI×6) + (%LF×10).
                      Todas as 37 unidades escolares auditadas com dados consolidados e registros de faltas expurgados do denominador.
                    </p>
                  </div>

                  {/* Coverage Stats Pills */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-center min-w-[110px]">
                      <div className="text-[10px] font-black uppercase tracking-wider text-slate-300">Escolas Auditadas</div>
                      <div className="text-xl font-black text-emerald-400">{SIMULADO1_SCHOOLS_RAW.length} / 37</div>
                      <div className="text-[10px] text-emerald-300 font-bold">100% da Rede</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-center min-w-[110px]">
                      <div className="text-[10px] font-black uppercase tracking-wider text-slate-300">Alunos Avaliados</div>
                      <div className="text-xl font-black text-cyan-300">1.785</div>
                      <div className="text-[10px] text-slate-300 font-bold">99 Turmas</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-center min-w-[110px]">
                      <div className="text-[10px] font-black uppercase tracking-wider text-slate-300">Status da Coleta</div>
                      <div className="text-xl font-black text-emerald-300">Completa</div>
                      <div className="text-[10px] text-slate-300 font-bold">37 de 37 Escolas</div>
                    </div>
                  </div>
                </div>

                {/* Filter Sub-Tabs for Simulado 1 Status */}
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-300 mr-1">Filtrar por Status:</span>
                    <button
                      onClick={() => { setTurmasSimuladoStatusFilter('TODAS'); setTurmasPage(1); }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        turmasSimuladoStatusFilter === 'TODAS'
                          ? 'bg-white text-slate-900 font-black shadow-xs'
                          : 'bg-white/10 text-slate-300 hover:bg-white/20'
                      }`}
                    >
                      Todas as 37 Escolas (Consolidado)
                    </button>
                    <button
                      onClick={() => { setTurmasSimuladoStatusFilter('AVALIADAS'); setTurmasPage(1); }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        turmasSimuladoStatusFilter === 'AVALIADAS'
                          ? 'bg-emerald-500 text-white font-black shadow-xs'
                          : 'bg-white/10 text-slate-300 hover:bg-white/20'
                      }`}
                    >
                      Avaliadas no 1º Simulado ({SIMULADO1_SCHOOLS_RAW.length})
                    </button>
                    {SIMULADO1_PENDING_SCHOOLS.length > 0 && (
                      <button
                        onClick={() => { setTurmasSimuladoStatusFilter('PENDENTES'); setTurmasPage(1); }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          turmasSimuladoStatusFilter === 'PENDENTES'
                            ? 'bg-amber-500 text-white font-black shadow-xs'
                            : 'bg-white/10 text-slate-300 hover:bg-white/20'
                        }`}
                      >
                        Pendentes ({SIMULADO1_PENDING_SCHOOLS.length})
                      </button>
                    )}
                  </div>

                  {SIMULADO1_PENDING_SCHOOLS.length > 0 ? (
                    <details className="group cursor-pointer">
                      <summary className="text-xs font-bold text-blue-300 hover:text-white flex items-center gap-1.5 select-none">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                        <span>Ver lista das {SIMULADO1_PENDING_SCHOOLS.length} escolas não informadas</span>
                      </summary>
                      <div className="mt-3 p-4 bg-slate-900/90 border border-white/20 rounded-2xl text-xs text-slate-200">
                        <p className="font-bold text-amber-300 mb-2">Escolas pendentes de envio:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {SIMULADO1_PENDING_SCHOOLS.map((schoolName, idx) => (
                            <div key={schoolName} className="flex items-center gap-2 p-1.5 bg-white/5 rounded-lg border border-white/5">
                              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-mono font-black text-[10px]">
                                {idx + 1}
                              </span>
                              <span className="font-semibold text-slate-200 truncate" title={schoolName}>{schoolName}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </details>
                  ) : (
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-400/20">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>100% da Rede Municipal Completa e Auditada</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 1. Summary KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Total de Turmas / Escolas */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400">Turmas / Escolas</span>
                  <span className="p-2.5 bg-blue-50 text-blue-800 rounded-2xl border border-blue-100">
                    <Layers className="w-5 h-5" />
                  </span>
                </div>
                <div className="my-1">
                  <div className="text-3xl sm:text-4xl font-black text-slate-900">{turmasSummaryMetrics.totalTurmas}</div>
                  <p className="text-xs font-bold text-slate-500 mt-2 truncate">
                    {turmaSchoolFilter !== "TODAS" 
                      ? `Unidade: ${turmaSchoolFilter}` 
                      : `Agrupadas em ${turmasSummaryMetrics.totalEscolas} escolas filtradas`}
                  </p>
                </div>
              </div>

              {/* Card 2: Total de Alunos Avaliados */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400">Alunos Avaliados</span>
                  <span className="p-2.5 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-100">
                    <Users className="w-5 h-5" />
                  </span>
                </div>
                <div className="my-1">
                  <div className="text-3xl sm:text-4xl font-black text-emerald-950">
                    {turmasSummaryMetrics.totalAvaliados.toLocaleString('pt-BR')}
                  </div>
                  <p className="text-xs font-bold text-slate-500 mt-2 truncate">
                    {turmasEdition === 'simulado1' ? 'População Efetivamente Avaliada' : `de ${turmasSummaryMetrics.totalPrevistos.toLocaleString('pt-BR')} previstos (${turmasSummaryMetrics.avgParticipacao}% part.)`}
                  </p>
                </div>
              </div>

              {/* Card 3: Média do IFL das Turmas */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400">Média IFL (0 a 10)</span>
                  <span className="p-2.5 bg-indigo-50 text-indigo-800 rounded-2xl border border-indigo-100">
                    <Sparkles className="w-5 h-5" />
                  </span>
                </div>
                <div className="my-1">
                  <div className="text-3xl sm:text-4xl font-black text-blue-950">{turmasSummaryMetrics.avgIFL}</div>
                  <p className="text-xs font-bold text-slate-500 mt-2 truncate">
                    {turmasEdition === 'simulado1' ? 'Média ponderada do 1º Simulado' : 'Linha de Base CAED 2026'}
                  </p>
                </div>
              </div>

              {/* Card 4: % Médio de Leitores */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400">% Médio Leitores</span>
                  <span className="p-2.5 bg-teal-50 text-teal-800 rounded-2xl border border-teal-100">
                    <BookOpen className="w-5 h-5" />
                  </span>
                </div>
                <div className="my-1">
                  <div className="text-3xl sm:text-4xl font-black text-teal-950">{turmasSummaryMetrics.avgLeitores}%</div>
                  <p className="text-xs font-bold text-slate-500 mt-2 truncate">
                    Fluentes: {turmasSummaryMetrics.avgFluente}% • Inic: {turmasSummaryMetrics.avgIniciante}%
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Top Action & Filter Controls */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 md:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-black text-slate-800 tracking-tight">Turmas Agrupadas por Escola</h2>
                  <p className="text-sm font-bold text-slate-500 mt-1">
                    Visualização organizada por Unidade Escolar (ex: Escola Ângelo Paz com turmas 2º Anos A, B e C), facilitando a leitura analítica e o comparativo pedagógico.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Expand / Collapse All */}
                  <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200/80">
                    <button
                      onClick={expandAllSchools}
                      className="px-3 py-1.5 bg-white text-slate-700 hover:text-blue-900 rounded-lg text-xs font-black shadow-2xs transition-colors flex items-center gap-1 cursor-pointer"
                      title="Expandir todas as escolas"
                    >
                      <ChevronDown className="w-3.5 h-3.5 text-blue-600" />
                      <span>Expandir Todas</span>
                    </button>
                    <button
                      onClick={collapseAllSchools}
                      className="px-3 py-1.5 bg-transparent text-slate-600 hover:text-slate-900 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                      title="Recolher todas as escolas"
                    >
                      <ChevronUp className="w-3.5 h-3.5 text-slate-500" />
                      <span>Recolher Todas</span>
                    </button>
                  </div>

                  {/* Sort Schools Selector */}
                  <div className="relative min-w-[200px]">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                    </div>
                    <select
                      value={turmasSchoolSort}
                      onChange={(e) => setTurmasSchoolSort(e.target.value)}
                      className="w-full pl-9 pr-8 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-4 focus:ring-blue-100 outline-none shadow-2xs appearance-none cursor-pointer hover:border-slate-300 transition-colors"
                    >
                      <option value="name-asc">Ordem Alfabética (A-Z)</option>
                      <option value="name-desc">Ordem Alfabética (Z-A)</option>
                      <option value="ifl-desc">Maior IFL Geral</option>
                      <option value="ifl-asc">Menor IFL Geral</option>
                      <option value="turmas-desc">Mais Turmas</option>
                      <option value="avaliados-desc">Mais Alunos Avaliados</option>
                      <option value="part-desc">Maior % Participação</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Escola Dropdown Filter */}
                  <div className="relative min-w-[240px] flex-1 sm:flex-initial">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <select
                      value={turmaSchoolFilter}
                      onChange={(e) => {
                        setTurmaSchoolFilter(e.target.value);
                        setTurmasPage(1);
                      }}
                      className="w-full pl-9 pr-8 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-4 focus:ring-blue-100 outline-none shadow-2xs appearance-none cursor-pointer hover:border-slate-300 transition-colors"
                    >
                      <option value="TODAS">Todas as Escolas ({availableTurmaSchools.length})</option>
                      {availableTurmaSchools.map((sName) => (
                        <option key={sName} value={sName}>
                          {sName}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Search Input */}
                  <div className="relative min-w-[220px] flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                    <input 
                      type="text"
                      placeholder="Pesquisar escola ou turma..."
                      className="w-full pl-10 pr-8 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 outline-none text-xs font-bold text-slate-700 shadow-2xs placeholder:text-slate-400"
                      value={turmaSearch}
                      onChange={(e) => {
                        setTurmaSearch(e.target.value);
                        setTurmasPage(1);
                      }}
                    />
                    {turmaSearch && (
                      <button 
                        onClick={() => { setTurmaSearch(''); setTurmasPage(1); }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Clear Filter Button */}
                  {(turmaSchoolFilter !== 'TODAS' || turmaSearch.trim() || (turmasEdition === 'simulado1' && turmasSimuladoStatusFilter !== 'TODAS')) && (
                    <button
                      onClick={() => {
                        setTurmaSchoolFilter('TODAS');
                        setTurmasSimuladoStatusFilter('TODAS');
                        setTurmaSearch('');
                        setTurmasPage(1);
                      }}
                      className="px-3 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                      title="Limpar todos os filtros"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Limpar</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* 3. Grouped Schools List */}
            <div className="space-y-6">
              {paginatedSchoolGroups.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center text-slate-400 font-bold border border-gray-200">
                  Nenhuma escola ou turma encontrada para os critérios selecionados.
                </div>
              ) : (
                paginatedSchoolGroups.map((group) => {
                  const isCollapsed = !!turmasCollapsedSchools[group.escola];
                  const iflNum = group.iflNum;
                  const isPendente = !!group.isPendente;

                  return (
                    <div 
                      key={group.escola}
                      className={`bg-white rounded-3xl shadow-sm border overflow-hidden transition-all hover:border-slate-300 ${
                        isPendente ? 'border-amber-200/80 bg-amber-50/20' : 'border-slate-200/90'
                      }`}
                    >
                      {/* School Header Banner */}
                      <div 
                        onClick={() => !isPendente && toggleSchoolCollapse(group.escola)}
                        className={`p-5 sm:p-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4 select-none transition-colors ${
                          isPendente ? 'bg-amber-50/60' : 'bg-slate-50/90 hover:bg-slate-100/80 cursor-pointer'
                        }`}
                      >
                        {/* Left: School identity */}
                        <div className="flex items-center gap-3.5 flex-1 min-w-0">
                          <div className={`p-3 rounded-2xl border shrink-0 ${
                            isPendente 
                              ? 'bg-amber-100 text-amber-900 border-amber-200' 
                              : 'bg-blue-100 text-blue-900 border-blue-200/80'
                          }`}>
                            <School className="w-5 h-5" />
                          </div>
                          
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-black text-slate-800 text-base sm:text-lg tracking-tight truncate">
                                {group.escola}
                              </h3>
                              {!isPendente ? (
                                <>
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-900 border border-blue-200/80 text-[11px] font-black tracking-wide shadow-2xs">
                                    {group.turmasCount} {group.turmasCount === 1 ? 'Turma' : 'Turmas'}
                                  </span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-200/70 text-slate-700 text-[11px] font-bold">
                                    Porte {group.porte}
                                  </span>
                                </>
                              ) : (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300 text-[11px] font-black tracking-wide shadow-2xs">
                                  Pendente na Parte 1 (Aguardando Parte 2)
                                </span>
                              )}
                            </div>

                            {/* Class names subtitle preview */}
                            {!isPendente ? (
                              <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                                <span className="text-xs font-bold text-slate-400">Turmas:</span>
                                {group.turmas.map((t) => (
                                  <span 
                                    key={t.id}
                                    className="inline-block px-2 py-0.5 bg-white border border-slate-200 rounded text-[11px] font-bold text-slate-700"
                                  >
                                    {t.turma}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <p className="text-xs font-semibold text-amber-800 mt-1">
                                Os resultados do 1º Simulado para esta escola não foram enviados nesta 1ª parte. Selecione a aba "BASE PINDA 2026" para consultar sua avaliação de entrada diagnóstica.
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Right: Consolidated KPIs for School & Collapse toggle */}
                        <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200/60">
                          {!isPendente ? (
                            <>
                              {/* Participação / Avaliados */}
                              <div className="text-right hidden sm:block">
                                <div className="text-[10px] font-black uppercase text-slate-400">Avaliados</div>
                                <div className="text-xs font-black text-slate-700">
                                  {group.avaliados} {group.avaliados === 1 ? 'aluno' : 'alunos'}
                                </div>
                              </div>

                              {/* % Leitores */}
                              <div className="text-right hidden sm:block">
                                <div className="text-[10px] font-black uppercase text-slate-400">Leitores</div>
                                <div className="text-xs font-black text-teal-800">
                                  {group.leitores.toFixed(1)}%
                                </div>
                              </div>

                              {/* IFL Badge */}
                              <div className="flex items-center gap-2">
                                <div className="text-right">
                                  <div className="text-[10px] font-black uppercase text-slate-400">IFL Geral</div>
                                  <span className={`inline-block px-3 py-0.5 rounded-lg text-sm font-black shadow-2xs ${
                                    iflNum >= 6.0 
                                      ? 'bg-blue-900 text-white' 
                                      : iflNum >= 4.0 
                                        ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                                        : 'bg-red-500 text-white'
                                  }`}>
                                    {group.iflFormatted}
                                  </span>
                                </div>

                                {/* Chevron Toggle Button */}
                                <div className="p-1.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-800 transition-colors ml-1">
                                  {isCollapsed ? (
                                    <ChevronDown className="w-4 h-4" />
                                  ) : (
                                    <ChevronUp className="w-4 h-4" />
                                  )}
                                </div>
                              </div>
                            </>
                          ) : (
                            <button
                              onClick={() => {
                                setTurmasEdition('base_pinda');
                                setTurmaSchoolFilter(group.escola);
                              }}
                              className="px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 rounded-xl text-xs font-black transition-colors cursor-pointer"
                            >
                              Ver na Base de Entrada CAED
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Expanded Turmas Table for this School */}
                      {!isCollapsed && !isPendente && (
                        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
                          <table className="w-full text-left text-sm whitespace-nowrap min-w-[950px]">
                            <thead className="bg-slate-100/60 text-slate-500 font-black uppercase text-[11px] border-b border-gray-200 select-none">
                              <tr>
                                {/* 1. TURMA */}
                                <th className="px-6 py-3.5 text-slate-700">
                                  <span>TURMA</span>
                                </th>

                                {/* 2. AVAL. */}
                                <th className="px-3 py-3.5 text-center">
                                  <span>AVAL.</span>
                                </th>

                                {/* 3. % PART. */}
                                <th className="px-3 py-3.5 text-center">
                                  <span>% PART.</span>
                                </th>

                                {/* 4. N1 */}
                                <th className="px-3 py-3.5 text-center" style={{ color: '#D32F2F' }}>
                                  <span>N1</span>
                                </th>

                                {/* 5. N2 */}
                                <th className="px-3 py-3.5 text-center" style={{ color: '#E53935' }}>
                                  <span>N2</span>
                                </th>

                                {/* 6. N3 */}
                                <th className="px-3 py-3.5 text-center" style={{ color: '#FB8C00' }}>
                                  <span>N3</span>
                                </th>

                                {/* 7. N4 */}
                                <th className="px-3 py-3.5 text-center" style={{ color: '#FFA000' }}>
                                  <span>N4</span>
                                </th>

                                {/* 8. INIC. */}
                                <th className="px-3 py-3.5 text-center" style={{ color: '#2E7D32' }}>
                                  <span>INIC.</span>
                                </th>

                                {/* 9. FLUEN. */}
                                <th className="px-3 py-3.5 text-center" style={{ color: '#00695C' }}>
                                  <span>FLUEN.</span>
                                </th>

                                {/* 10. IFL */}
                                <th className="px-5 py-3.5 text-center bg-blue-50/60 border-l border-blue-100 text-blue-950 font-black">
                                  <span>IFL</span>
                                </th>
                              </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100">
                              {group.turmas.map((t) => {
                                const tIFL = t.iflNum;
                                const isClassPending = !!t.isPendente || t.avaliados === 0;

                                return (
                                  <tr key={t.id} className="hover:bg-slate-50/80 transition-all">
                                    {/* TURMA */}
                                    <td className="px-6 py-3.5">
                                      <div className="flex items-center gap-2">
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 border border-blue-200/80 text-xs font-black tracking-wide shadow-2xs">
                                          {t.turma}
                                        </span>
                                        {isClassPending && (
                                          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                                            {t.statusNota || 'Pendente'}
                                          </span>
                                        )}
                                      </div>
                                    </td>

                                    {/* AVAL. */}
                                    <td className="px-3 py-3.5 text-center font-bold text-slate-600">
                                      {t.avaliados}
                                    </td>

                                    {/* % PART. */}
                                    <td className="px-3 py-3.5 text-center">
                                      <div className={`text-xs inline-flex font-black px-2.5 py-0.5 rounded-lg ${
                                        t.participacao >= 95 
                                          ? 'text-emerald-800 bg-emerald-100 border border-emerald-200' 
                                          : t.participacao >= 80 
                                            ? 'text-amber-800 bg-amber-100 border border-amber-200' 
                                            : 'text-red-800 bg-red-100 border border-red-200'
                                      }`}>
                                        {t.participacao.toFixed(1)}%
                                      </div>
                                    </td>

                                    {/* N1 */}
                                    <td className="px-3 py-3.5 text-center font-bold" style={{ color: '#D32F2F' }}>
                                      <div>{t.n1.toFixed(1)}%</div>
                                      {t.counts && <span className="text-[10px] text-slate-400 font-semibold block">{t.counts.n1} al.</span>}
                                    </td>

                                    {/* N2 */}
                                    <td className="px-3 py-3.5 text-center font-bold" style={{ color: '#E53935' }}>
                                      <div>{t.n2.toFixed(1)}%</div>
                                      {t.counts && <span className="text-[10px] text-slate-400 font-semibold block">{t.counts.n2} al.</span>}
                                    </td>

                                    {/* N3 */}
                                    <td className="px-3 py-3.5 text-center font-bold" style={{ color: '#FB8C00' }}>
                                      <div>{t.n3.toFixed(1)}%</div>
                                      {t.counts && <span className="text-[10px] text-slate-400 font-semibold block">{t.counts.n3} al.</span>}
                                    </td>

                                    {/* N4 */}
                                    <td className="px-3 py-3.5 text-center font-bold" style={{ color: '#FFA000' }}>
                                      <div>{t.n4.toFixed(1)}%</div>
                                      {t.counts && <span className="text-[10px] text-slate-400 font-semibold block">{t.counts.n4} al.</span>}
                                    </td>

                                    {/* INIC. */}
                                    <td className="px-3 py-3.5 text-center font-bold" style={{ color: '#2E7D32' }}>
                                      <div>{t.iniciante.toFixed(1)}%</div>
                                      {t.counts && <span className="text-[10px] text-slate-400 font-semibold block">{t.counts.iniciante} al.</span>}
                                    </td>

                                    {/* FLUEN. */}
                                    <td className="px-3 py-3.5 text-center font-bold" style={{ color: '#00695C' }}>
                                      <div>{t.fluente.toFixed(1)}%</div>
                                      {t.counts && <span className="text-[10px] text-slate-400 font-semibold block">{t.counts.fluente} al.</span>}
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
                                        {t.ifl}
                                      </span>
                                    </td>
                                  </tr>
                                );
                              })}

                              {/* School Consolidation Summary Row */}
                              <tr className="bg-slate-100/80 font-black border-t-2 border-slate-200 text-slate-800">
                                {/* LABEL */}
                                <td className="px-6 py-3.5 font-black text-slate-800 text-xs uppercase tracking-wide">
                                  <div className="flex items-center gap-1.5">
                                    <CheckCircle className="w-3.5 h-3.5 text-blue-700" />
                                    <span>Total da Escola</span>
                                  </div>
                                </td>

                                {/* AVAL. */}
                                <td className="px-3 py-3.5 text-center font-black text-slate-800">
                                  {group.avaliados}
                                </td>

                                {/* % PART. */}
                                <td className="px-3 py-3.5 text-center">
                                  <div className="text-xs inline-flex font-black px-2.5 py-0.5 rounded-lg text-emerald-800 bg-emerald-100 border border-emerald-200">
                                    {group.participacao.toFixed(1)}%
                                  </div>
                                </td>

                                {/* N1 */}
                                <td className="px-3 py-3.5 text-center font-black" style={{ color: '#D32F2F' }}>
                                  {group.n1.toFixed(1)}%
                                </td>

                                {/* N2 */}
                                <td className="px-3 py-3.5 text-center font-black" style={{ color: '#E53935' }}>
                                  {group.n2.toFixed(1)}%
                                </td>

                                {/* N3 */}
                                <td className="px-3 py-3.5 text-center font-black" style={{ color: '#FB8C00' }}>
                                  {group.n3.toFixed(1)}%
                                </td>

                                {/* N4 */}
                                <td className="px-3 py-3.5 text-center font-black" style={{ color: '#FFA000' }}>
                                  {group.n4.toFixed(1)}%
                                </td>

                                {/* INIC. */}
                                <td className="px-3 py-3.5 text-center font-black" style={{ color: '#2E7D32' }}>
                                  {group.iniciante.toFixed(1)}%
                                </td>

                                {/* FLUEN. */}
                                <td className="px-3 py-3.5 text-center font-black" style={{ color: '#00695C' }}>
                                  {group.fluente.toFixed(1)}%
                                </td>

                                {/* IFL */}
                                <td className="px-5 py-3.5 text-center bg-blue-100/70 border-l border-blue-200">
                                  <span className={`inline-block px-3.5 py-1 rounded-xl text-xs font-black shadow-xs ${
                                    iflNum >= 6.0 
                                      ? 'bg-blue-900 text-white shadow-blue-200' 
                                      : iflNum >= 4.0 
                                        ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                                        : 'bg-red-500 text-white shadow-red-200'
                                  }`}>
                                    {group.iflFormatted}
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Pagination & Summary Footer */}
            <div className="p-4 sm:p-6 bg-white rounded-3xl border border-gray-200 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-600 shadow-sm">
              <div className="flex items-center gap-2">
                <span>Exibindo</span>
                <span className="text-slate-900 font-black">
                  {filteredAndSortedSchoolGroups.length === 0 ? 0 : (currentSchoolGroupsPage - 1) * (turmasPerPage === -1 ? filteredAndSortedSchoolGroups.length : turmasPerPage) + 1}
                  {' - '}
                  {turmasPerPage === -1 ? filteredAndSortedSchoolGroups.length : Math.min(currentSchoolGroupsPage * turmasPerPage, filteredAndSortedSchoolGroups.length)}
                </span>
                <span>de</span>
                <span className="text-slate-900 font-black">{filteredAndSortedSchoolGroups.length} escolas</span>
                <span className="text-slate-400">({turmasSummaryMetrics.totalTurmas} turmas no total)</span>
              </div>

              <div className="flex items-center gap-4">
                {/* Rows per page selector */}
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Escolas por página:</span>
                  <select
                    value={turmasPerPage}
                    onChange={(e) => {
                      setTurmasPerPage(Number(e.target.value));
                      setTurmasPage(1);
                    }}
                    className="bg-white border border-gray-200 rounded-lg px-2.5 py-1 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-2xs"
                  >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={37}>37</option>
                    <option value={-1}>Todas</option>
                  </select>
                </div>

                {/* Navigation buttons */}
                {turmasPerPage !== -1 && schoolGroupsTotalPages > 1 && (
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setTurmasPage(prev => Math.max(1, prev - 1))}
                      disabled={currentSchoolGroupsPage <= 1}
                      className="p-1.5 rounded-lg border border-gray-200 bg-white text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      title="Página Anterior"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    
                    <span className="px-2 font-black text-slate-700">
                      {currentSchoolGroupsPage} / {schoolGroupsTotalPages}
                    </span>

                    <button
                      onClick={() => setTurmasPage(prev => Math.min(schoolGroupsTotalPages, prev + 1))}
                      disabled={currentSchoolGroupsPage >= schoolGroupsTotalPages}
                      className="p-1.5 rounded-lg border border-gray-200 bg-white text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      title="Próxima Página"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ) : activeTab === 'intervencao' ? (
          <motion.div
            key="intervencao"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <IntervencaoPrioritariaTab
              schoolsData={SCHOOLS_DATA}
              schoolSimuladoStatsMap={schoolSimuladoStatsMap}
              studentsData={studentsData}
              onNavigateToSchool={(schoolName) => {
                setSelectedSchool(schoolName);
                setSelectedEvolucaoEscola(schoolName);
                setSchoolsEdition('simulado1');
                setActiveTab('perf');
              }}
              onNavigateToEvolucao={(schoolName) => {
                setSelectedSchool(schoolName);
                setSelectedEvolucaoEscola(schoolName);
                setSchoolsEdition('simulado1');
                setActiveTab('evolucao');
              }}
            />
          </motion.div>
        ) : activeTab === 'evolucao' ? (
          <motion.div
            key="evolucao"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-8"
          >
            {/* IFL Evolution Highlight */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 border-b-8 border-b-green-600 flex flex-col justify-between">
                  <p className="text-slate-400 font-black text-xs uppercase tracking-widest mb-2">IFL Geral da Rede</p>
                  <div className="flex items-end gap-3">
                    <span className="text-5xl font-black text-slate-800">{municipalStats.ifl}</span>
                    <div className="flex items-center gap-1 text-green-600 font-black text-lg mb-1">
                       <TrendingUp className="w-5 h-5" />
                       <span>↑ 0.4</span>
                    </div>
                  </div>
                  <p className="text-slate-500 font-bold text-xs mt-4 italic">Meta Ciclo 2026: 7.5</p>
               </div>
               
               <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 md:col-span-2 flex items-center gap-6">
                  <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
                     <Trophy className="w-8 h-8" />
                  </div>
                  <div>
                     <h3 className="text-slate-800 font-black text-lg uppercase">Indicador de Avanço Estratégico</h3>
                     <p className="text-slate-500 font-bold text-sm leading-relaxed">
                        A rede municipal de Pindamonhangaba apresentou um avanço de 6.2% no índice de fluência nos primeiros simulados de 2026.
                     </p>
                  </div>
               </div>
            </div>

            {/* Sub-navigation Headers */}
            <div className="flex justify-center gap-4 bg-slate-100 p-2 rounded-2xl w-fit mx-auto shadow-inner border border-gray-200">
              <button 
                onClick={() => setEvolucaoSubTab('coleta')}
                className={`flex items-center gap-3 px-8 py-3 rounded-xl font-black text-sm transition-all ${evolucaoSubTab === 'coleta' ? 'bg-white shadow-md text-green-700' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <Activity className="w-5 h-5" /> Painel de Coleta
              </button>
              <button 
                onClick={() => setEvolucaoSubTab('mapa')}
                className={`flex items-center gap-3 px-8 py-3 rounded-xl font-black text-sm transition-all ${evolucaoSubTab === 'mapa' ? 'bg-white shadow-md text-green-700' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <Layers className="w-5 h-5" /> Mapa de Evolução
              </button>
            </div>

            {evolucaoSubTab === 'mapa' ? (
              <div className="space-y-8">
                {/* School Selection Bar */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-50 text-blue-700 rounded-2xl">
                      <School className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Unidade Escolar Selecionada</div>
                      <select
                        value={selectedEvolucaoEscola}
                        onChange={(e) => {
                          const newSchool = e.target.value;
                          setSelectedEvolucaoEscola(newSchool);
                          setSelectedEvolucaoTurma("TODAS");
                        }}
                        className="font-black text-slate-900 text-lg md:text-xl bg-transparent outline-none focus:ring-2 focus:ring-blue-500 rounded-lg cursor-pointer uppercase tracking-tight"
                      >
                        {availableEvolucaoEscolas.map((school) => (
                          <option key={school} value={school}>{school}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
                    <span>Censo: <strong>{currentSchoolSimuladoStats.totalMatriculados}</strong> matriculados</span>
                    <span>•</span>
                    <span className="text-emerald-700"><strong>{currentSchoolSimuladoStats.totalAvaliados}</strong> avaliados no 1º Simulado</span>
                  </div>
                </div>

                {/* Main Expressive Simulado vs Entrada Card */}
                <ExpressiveSimuladoCard
                  schoolStats={currentSchoolSimuladoStats}
                  selectedTurma={selectedEvolucaoTurma}
                  onSelectTurma={(t) => setSelectedEvolucaoTurma(t)}
                  showTurmasSelector={true}
                />
                {/* Top Summary Panel (Donut Chart + 6 KPI Cards) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  {/* Left Column: Donut Chart */}
                  <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between border-b pb-3 mb-4">
                        <div>
                          <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">
                            Distribuição da 1ª Evolução
                          </h3>
                          <p className="text-[11px] font-bold text-slate-400">
                            {selectedEvolucaoTurma} • {evolutionSummary.avaliados} de {evolutionSummary.total} alunos avaliados
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
                              data={evolutionStats}
                              cx="50%"
                              cy="50%"
                              innerRadius={58}
                              outerRadius={80}
                              paddingAngle={3}
                              dataKey="value"
                            >
                              {evolutionStats.map((entry, index) => (
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

                  {/* Right Column: 6 KPI Cards Grid */}
                  <div className="lg:col-span-8 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between border-b pb-3 mb-4">
                        <div>
                          <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">
                            Quadro de Desempenho e Metas (Δ de Níveis)
                          </h3>
                          <p className="text-[11px] font-bold text-slate-400">
                            Clique em um card para filtrar a tabela de estudantes abaixo
                          </p>
                        </div>
                        {evolutionFilterTier !== "TODOS" && (
                          <button
                            onClick={() => setEvolutionFilterTier("TODOS")}
                            className="text-[11px] font-black text-blue-600 hover:text-blue-800 bg-blue-50 px-2.5 py-1 rounded-lg transition-all"
                          >
                            Limpar Filtro (Mostrar Todos)
                          </button>
                        )}
                      </div>

                      {/* 6 KPI Cards in 3x2 Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {evolutionSummary.kpis.map((kpi) => {
                          const isActive = evolutionFilterTier === kpi.id;
                          return (
                            <div
                              key={kpi.id}
                              onClick={() => setEvolutionFilterTier(isActive ? "TODOS" : kpi.id)}
                              className={`p-3.5 rounded-2xl border transition-all cursor-pointer select-none ${kpi.cardBorder} ${
                                isActive ? kpi.ringColor + " shadow-sm scale-[1.02]" : "hover:scale-[1.01]"
                              }`}
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

                    <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs text-slate-600 font-bold">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
                        <span><strong>Regra de Cálculo:</strong> Δ = Rank Simulado 1 - Rank Entrada CAEd (Escala: N1 ➔ N2 ➔ N3 ➔ N4 ➔ LI ➔ LF)</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-black shrink-0 hidden md:inline">Pindamonhangaba 2026</span>
                    </div>
                  </div>
                </div>

                {/* Filter and Search Bar */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="relative w-full md:w-80">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Buscar estudante pelo nome..."
                      value={evolutionSearch}
                      onChange={(e) => setEvolutionSearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Filter Tier Tabs */}
                  <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                    {[
                      { id: "TODOS", label: "Todos", count: currentTurmaStudents.length },
                      { id: "EXCEPCIONAL", label: "Excepcional (≥+3)", count: evolutionSummary.excepcional },
                      { id: "EXPRESSIVO", label: "Expressivo (+2)", count: evolutionSummary.expressivo },
                      { id: "PONTUAL", label: "Pontual (+1)", count: evolutionSummary.pontual },
                      { id: "ESTAVEL", label: "Estável (0)", count: evolutionSummary.estavel },
                      { id: "ATENCAO", label: "Em Atenção", count: evolutionSummary.atencao },
                      { id: "NAO_AVALIADO", label: "Não Avaliado", count: evolutionSummary.naoAvaliado },
                    ].map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setEvolutionFilterTier(f.id)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-black transition-all ${
                          evolutionFilterTier === f.id
                            ? "bg-slate-800 text-white shadow-xs"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {f.label} ({f.count})
                      </button>
                    ))}
                  </div>

                  <div className="text-xs font-bold text-slate-400 shrink-0">
                    Exibindo <strong>{filteredStudentsData.length}</strong> de {currentTurmaStudents.length}
                  </div>
                </div>

                {/* Tracking Table (Tabela de Acompanhamento) */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 bg-slate-50 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight">
                        Tabela de Acompanhamento Individual
                      </h3>
                      <p className="text-xs font-bold text-slate-400">
                        {selectedEvolucaoEscola} • {selectedEvolucaoTurma}
                      </p>
                    </div>
                    <div className="text-xs font-bold text-slate-500">
                      Resultados auditados e computados dinamicamente
                    </div>
                  </div>

                  <div className="w-full">
                    <table className="w-full text-left border-collapse table-fixed">
                      <thead className="bg-slate-100/80 text-slate-500 font-black uppercase text-[10px] tracking-wider border-b border-slate-200">
                        <tr>
                          <th className="w-[28%] px-4 py-3.5">Nº & Estudante</th>
                          <th className="w-[12%] px-2 py-3.5 text-center">Entrada CAEd</th>
                          <th className="w-[14%] px-2 py-3.5 text-center">Simulado 1</th>
                          <th className="w-[18%] px-2 py-3.5 text-center">1ª Evolução (Δ)</th>
                          <th className="w-[12%] px-2 py-3.5 text-center">Simulado 2</th>
                          <th className="w-[12%] px-2 py-3.5 text-center">2ª Evolução</th>
                          <th className="w-[12%] px-3 py-3.5 text-center">Saída Prevista</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {filteredStudentsData.length === 0 ? (
                          <tr>
                            <td colSpan={7} className="px-6 py-12 text-center text-slate-400 font-bold text-sm">
                              Nenhum estudante encontrado com os filtros selecionados.
                            </td>
                          </tr>
                        ) : (
                          filteredStudentsData.map((student, idx) => {
                            const badge1 = getEvolutionBadge(student.entrada, student.s1);
                            const badge2 = getEvolutionBadge(student.s1, student.s2);
                            const initials = getInitials(student.name);
                            const avatarColor = getAvatarColorClass(student.id);

                            return (
                              <tr key={student.id} className="hover:bg-slate-50/90 transition-colors text-xs">
                                {/* Student Info */}
                                <td className="px-4 py-3">
                                  <div className="flex items-center gap-3">
                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-[11px] shrink-0 ${avatarColor}`}>
                                      {initials}
                                    </div>
                                    <div className="min-w-0 pr-2">
                                      <div className="flex items-center gap-1.5">
                                        <span className="text-[10px] font-black text-slate-400 shrink-0">#{student.numero ?? (idx + 1)}</span>
                                        <span className="font-black text-slate-800 truncate leading-snug" title={student.name}>
                                          {student.name}
                                        </span>
                                      </div>
                                      {student.s1Details && (
                                        <div className="text-[10px] text-slate-400 font-semibold mt-0.5 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                                          {student.s1Details.modo && (
                                            <span className="text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded font-black">
                                              {student.s1Details.modo}
                                            </span>
                                          )}
                                          {student.s1Details.palavras !== undefined && (
                                            <span>Palavras: <strong className="text-slate-600">{student.s1Details.palavras}</strong></span>
                                          )}
                                          {student.s1Details.pseudopalavras !== undefined && (
                                            <span>Pseudo: <strong className="text-slate-600">{student.s1Details.pseudopalavras}</strong></span>
                                          )}
                                          {student.s1Details.texto !== undefined && (
                                            <span>Texto: <strong className="text-slate-600">{student.s1Details.texto}</strong></span>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </td>

                                {/* Entrada CAEd */}
                                <td className="px-2 py-3 text-center">
                                  <LevelPillSelector
                                    value={student.entrada}
                                    onChange={(val) => {
                                      const newData = [...studentsData];
                                      const target = newData.find(s => s.id === student.id);
                                      if (target) target.entrada = val;
                                      setStudentsData(newData);
                                    }}
                                    options={EVOLUTION_LEVELS}
                                  />
                                </td>

                                {/* Simulado 1 */}
                                <td className="px-2 py-3 text-center">
                                  <LevelPillSelector
                                    value={student.s1}
                                    onChange={(val) => {
                                      const newData = [...studentsData];
                                      const target = newData.find(s => s.id === student.id);
                                      if (target) target.s1 = val;
                                      setStudentsData(newData);
                                    }}
                                    options={SIMULADO_OPTIONS}
                                  />
                                </td>

                                {/* 1ª Evolução Badge */}
                                <td className="px-2 py-3 text-center">
                                  <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-md text-[10px] uppercase whitespace-nowrap tracking-tight ${badge1.color}`}>
                                    {badge1.label} {badge1.delta !== null && badge1.delta !== undefined ? `(${badge1.delta >= 0 ? `+${badge1.delta}` : badge1.delta})` : ''}
                                  </span>
                                </td>

                                {/* Simulado 2 */}
                                <td className="px-2 py-3 text-center">
                                  <LevelPillSelector
                                    value={student.s2}
                                    onChange={(val) => {
                                      const newData = [...studentsData];
                                      const target = newData.find(s => s.id === student.id);
                                      if (target) target.s2 = val;
                                      setStudentsData(newData);
                                    }}
                                    options={SIMULADO_OPTIONS}
                                  />
                                </td>

                                {/* 2ª Evolução Badge */}
                                <td className="px-2 py-3 text-center">
                                  <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-md text-[10px] uppercase whitespace-nowrap tracking-tight ${badge2.color}`}>
                                    {badge2.label} {badge2.delta !== null && badge2.delta !== undefined ? `(${badge2.delta >= 0 ? `+${badge2.delta}` : badge2.delta})` : ''}
                                  </span>
                                </td>

                                {/* Saída Prevista */}
                                <td className="px-3 py-3 text-center">
                                  <LevelPillSelector
                                    value={student.saida}
                                    onChange={(val) => {
                                      const newData = [...studentsData];
                                      const target = newData.find(s => s.id === student.id);
                                      if (target) target.saida = val;
                                      setStudentsData(newData);
                                    }}
                                    options={EVOLUTION_LEVELS}
                                  />
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Internal Disparity Alerts */}
                <div className="bg-orange-50 border-2 border-orange-200 rounded-3xl p-8 shadow-sm">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-orange-500 p-3 rounded-2xl shadow-lg shadow-orange-200">
                      <AlertTriangle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-orange-950 italic leading-tight">Alerta de Disparidade Interna nas Escolas</h3>
                      <p className="text-sm font-bold text-orange-700 uppercase tracking-widest">Variação de Desempenho entre turmas da mesma unidade</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Panel 1: Fluentes Disparity */}
                    <div className="bg-white/60 p-6 rounded-2xl border border-orange-100">
                      <h4 className="flex items-center gap-2 text-lg font-black text-slate-800 mb-6 uppercase tracking-tighter">
                        <div className="w-2 h-6 bg-green-500 rounded-full" />
                        Maiores Disparidades em LEITORES FLUENTES
                      </h4>
                      <div className="space-y-4">
                        {classesStats.topDisparityFluente.map((item, i) => (
                          <div key={`dispar-flu-${i}`} className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-green-500">
                            <p className="font-black text-slate-800 text-sm mb-1 leading-tight">{item.name}</p>
                            <p className="text-xs font-bold text-slate-500 italic">
                              Variação de <span className="text-green-600 underline decoration-2">{item.deltaFluente} pontos percentuais</span> em Leitores Fluentes entre turmas (de {item.minFluente}% a {item.maxFluente}%)
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Panel 2: Pre-Leitores Disparity */}
                    <div className="bg-white/60 p-6 rounded-2xl border border-orange-100">
                      <h4 className="flex items-center gap-2 text-lg font-black text-slate-800 mb-6 uppercase tracking-tighter">
                        <div className="w-2 h-6 bg-red-500 rounded-full" />
                        Maiores Disparidades em PRÉ-LEITORES
                      </h4>
                      <div className="space-y-4">
                        {classesStats.topDisparityPre.map((item, i) => (
                          <div key={`dispar-pre-${i}`} className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-red-500">
                            <p className="font-black text-slate-800 text-sm mb-1 leading-tight">{item.name}</p>
                            <p className="text-xs font-bold text-slate-500 italic">
                              Variação de <span className="text-red-600 underline decoration-2">{item.deltaPre} pontos percentuais</span> em Pré-Leitores (de {item.minPre}% a {item.maxPre}%)
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
                <div className="max-w-4xl mx-auto space-y-8">
                  <div className="bg-green-900 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-800 rounded-full -mr-20 -mt-20 opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-800 rounded-full -ml-10 -mb-10 opacity-30"></div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                       <div className="p-4 bg-white/10 rounded-2xl mb-6 backdrop-blur-md">
                         <Activity className="w-12 h-12 text-white" />
                       </div>
                       <h2 className="text-3xl font-black mb-4">Painel de Coleta de Voz AI</h2>
                       <p className="text-green-100 font-bold max-w-lg">
                         Pronto para iniciar a coleta estratégica? O motor PIPA AI está configurado com Threshold reduzido para identificar sussurros e soletração.
                       </p>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 w-full">
                          {studentsData.slice(0, 4).map(s => (
                            <button 
                              key={s.id}
                              onClick={() => handleStartColeta(s.name)}
                              className="bg-white/10 hover:bg-white/20 border border-white/20 p-6 rounded-2xl text-left transition-all group active:scale-95"
                            >
                               <div className="flex justify-between items-center">
                                 <div>
                                   <p className="text-green-300 text-xs font-black uppercase tracking-widest mb-1">Pendente</p>
                                   <p className="font-black text-sm">{s.name}</p>
                                 </div>
                                 <ArrowRightCircle className="w-6 h-6 text-white/40 group-hover:text-white transition-all" />
                               </div>
                            </button>
                          ))}
                       </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                     <h3 className="font-black text-slate-800 mb-6 flex items-center gap-3">
                        <Filter className="w-5 h-5 text-green-600" />
                        Configurações Técnicas do Motor
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 bg-slate-50 rounded-xl">
                           <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Sensibilidade</p>
                           <p className="font-black text-green-700">Threshold: Baixo (Alta Precisão)</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl">
                           <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Repetição</p>
                           <p className="font-black text-green-700">Janela de 2s (Debounce On)</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl">
                           <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Autocorreção</p>
                           <p className="font-black text-green-700">Ativa (Último Registro)</p>
                        </div>
                     </div>
                  </div>
                </div>
            )}
          </motion.div>
        ) : activeTab === 'porte' ? (
          <motion.div
            key="porte"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            {/* Group Selector */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex gap-4">
                {['Pequeno', 'Médio', 'Grande'].map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGroup(g as any)}
                    className={`px-8 py-3 rounded-xl font-black text-sm transition-all ${
                      selectedGroup === g 
                        ? 'bg-green-900 text-white shadow-lg' 
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    Porte {g}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 bg-green-50 px-5 py-3 rounded-2xl border border-green-100 text-green-900">
                <Users className="w-5 h-5" />
                <span className="font-black text-sm uppercase">Total de Unidades: {groupData?.count}</span>
              </div>
            </div>

            {groupData && (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Gráfico A: Ranking por IFL (0-10) */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h2 className="text-[18pt] font-black text-slate-800 mb-8 border-b pb-4 italic underline decoration-blue-400">
                      Ranking por IFL (0-10)
                    </h2>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={groupData.sortedSchools} layout="vertical" margin={{ left: 50, right: 30 }}>
                          <XAxis type="number" domain={[0, 10]} hide />
                          <YAxis 
                            type="category" 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tickFormatter={(val) => truncateName(val, 12)}
                            tick={{ fontSize: 13, fill: '#475569', fontWeight: 'bold' }} 
                            width={100}
                          />
                          <Tooltip 
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                            formatter={(value: any) => [`${value}`, 'IFL']}
                            labelFormatter={(name) => `Escola: ${name}`}
                          />
                          <Bar dataKey="iflRaw" fill="#64748b" radius={[0, 8, 8, 0]} barSize={20} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Gráfico B: Ranking por % de Leitores */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h2 className="text-[18pt] font-black text-slate-800 mb-8 border-b pb-4 italic underline decoration-green-600">
                      Ranking por % de Leitores
                    </h2>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={groupData.sortedSchools} layout="vertical" margin={{ left: 50, right: 30 }}>
                          <XAxis type="number" domain={[0, 100]} hide />
                          <YAxis 
                            type="category" 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tickFormatter={(val) => truncateName(val, 12)}
                            tick={{ fontSize: 13, fill: '#475569', fontWeight: 'bold' }} 
                            width={100}
                          />
                          <Tooltip 
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                            formatter={(value: any) => [`${value}%`, 'Leitores']}
                            labelFormatter={(name) => `Escola: ${name}`}
                          />
                          <Bar dataKey="leitores" fill={COLORS.fluente} radius={[0, 8, 8, 0]} barSize={20} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Gráfico de Benchmarking - Largura Total */}
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                  <h2 className="text-[18pt] font-black text-slate-800 mb-8 border-b pb-4 italic text-center underline decoration-orange-500">
                    Benchmarking de Curva (Spline): Escola vs. Média do Porte
                  </h2>
                  <div className="h-[450px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart 
                        data={groupData.groupLevelsAvg.map((ga, i) => ({
                          name: ga.name,
                          grupo: ga.value,
                          escola: currentSchoolData.detailedLevels[i].value
                        }))}
                        margin={{ top: 20, right: 40, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 13, fill: '#64748b', fontWeight: 'bold' }} />
                        <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#94a3b8' }} tickFormatter={(v) => `${v}%`} />
                        <Tooltip contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', padding: '20px' }} />
                        <Legend verticalAlign="top" align="right" wrapperStyle={{ paddingBottom: '30px' }} />
                        <Area 
                          type="monotone" 
                          dataKey="grupo" 
                          name={`Média Porte ${selectedGroup}`} 
                          stroke="#94a3b8" 
                          strokeWidth={3} 
                          fill="#f8fafc" 
                          fillOpacity={0.6} 
                          strokeDasharray="5 5" 
                        />
                        <Area 
                          type="monotone" 
                          dataKey="escola" 
                          name={`Unidade: ${currentSchoolData.name}`} 
                          stroke={COLORS.fluente} 
                          strokeWidth={5} 
                          fill={COLORS.fluente} 
                          fillOpacity={0.1}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </>
            )}

            {/* Tabela de Resumo por Porte */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 bg-slate-50 border-b border-gray-200">
                <h2 className="text-[18pt] font-black text-green-950">Consolidado por Porte Escola</h2>
                <p className="text-[16pt] text-gray-500 font-bold uppercase mt-1">Comparativo de Eficiência entre Grupos A, B e C</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white text-slate-400 font-black uppercase text-[10px] border-b">
                    <tr>
                      <th className="px-8 py-5">Grupo / Porte</th>
                      <th className="px-8 py-5 text-center">Unidades</th>
                      <th className="px-8 py-5 text-center">Média IFL</th>
                      <th className="px-8 py-5 text-right">Média Participação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {porteSummary.map((ps) => (
                      <tr key={ps.porte} className="hover:bg-slate-50 transition-all">
                        <td className="px-8 py-5 font-black text-slate-800">Porte {ps.porte}</td>
                        <td className="px-8 py-5 text-center font-bold text-slate-500">{ps.count} Unidades</td>
                        <td className="px-8 py-5 text-center">
                          <span className="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full font-black text-sm shadow-sm">
                            {ps.avgIFL}
                          </span>
                        </td>
                        <td className="px-8 py-5 text-right font-black text-green-700 text-lg">{ps.avgPart}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        ) : activeTab === 'setores' ? (
          <motion.div
            key="setores"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            {setoresSummary.length === 0 ? (
              <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 text-center">
                <Activity className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">Setores Não Configurados</h3>
                <p className="text-slate-500">Esta funcionalidade está disponível apenas para redes com zoneamento geográfico definido.</p>
              </div>
            ) : (
              <>
                {/* Sector Header & Edition Selector */}
                <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 font-black text-xs uppercase tracking-wider rounded-lg">
                        Zoneamento Geográfico
                      </span>
                      <span className="text-xs text-slate-400 font-bold">• 6 Setores Ativos</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
                      Análise por Setores Geográficos
                    </h2>
                    <p className="text-slate-500 text-sm font-medium mt-1">
                      Monitoramento pedagógico regionalizado — Entrada CAEd ➔ 1º Simulado
                    </p>
                  </div>

                  {/* Mode Selector */}
                  <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 self-stretch md:self-auto">
                    <button
                      onClick={() => setSetoresEdition('comparativo')}
                      className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 ${
                        setoresEdition === 'comparativo'
                          ? 'bg-blue-900 text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Evolução Comparativa
                    </button>
                    <button
                      onClick={() => setSetoresEdition('simulado1')}
                      className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 ${
                        setoresEdition === 'simulado1'
                          ? 'bg-blue-900 text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      1º Simulado (Agosto)
                    </button>
                    <button
                      onClick={() => setSetoresEdition('caed2026')}
                      className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 ${
                        setoresEdition === 'caed2026'
                          ? 'bg-blue-900 text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      }`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      Entrada CAEd 2026
                    </button>
                  </div>
                </div>

                {/* Setor Selector Tabs */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <div className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                    <span>Selecione o Setor Regional:</span>
                    <span className="text-blue-900 font-bold">Unidades no {selectedSetor}: {groupDataSetor?.count || 0} escolas</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {Object.keys((currentMunicipality as any).setores || {}).map((s) => {
                      const summary = setoresSummary.find(item => item.setor === s);
                      const isSelected = selectedSetor === s;
                      return (
                        <button
                          key={s}
                          onClick={() => setSelectedSetor(s)}
                          className={`p-4 rounded-2xl font-black text-left transition-all border flex flex-col justify-between gap-2 ${
                            isSelected
                              ? 'bg-blue-900 text-white border-blue-900 shadow-md ring-2 ring-blue-500/30'
                              : 'bg-slate-50 hover:bg-blue-50/60 text-slate-700 border-slate-200/80'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-black tracking-tight">{s}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-md font-black ${
                              isSelected ? 'bg-blue-800 text-blue-100' : 'bg-slate-200 text-slate-600'
                            }`}>
                              {summary?.count || 0} un.
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-xs mt-1">
                            <span className={isSelected ? 'text-blue-200' : 'text-slate-400'}>
                              IFL S1: <b>{summary?.avgIFLSimulado || '-'}</b>
                            </span>
                            <span className={`font-black text-[11px] ${
                              isSelected ? 'text-emerald-300' : 'text-emerald-700'
                            }`}>
                              {summary?.avgDeltaFormatted || '+0.00'}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {groupDataSetor && (
                  <>
                    {/* Sector Executive KPI Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* KPI 1: IFL do Setor */}
                      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                            IFL do {selectedSetor}
                          </span>
                          <span className="p-2 bg-blue-50 text-blue-700 rounded-xl">
                            <Layers className="w-5 h-5" />
                          </span>
                        </div>
                        <div className="my-2">
                          <div className="text-4xl font-black text-blue-950">
                            {setoresEdition === 'caed2026' ? groupDataSetor.avgIFLEntrada : groupDataSetor.avgIFLSimulado}
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-md font-bold text-xs">
                              Entrada: {groupDataSetor.avgIFLEntrada}
                            </span>
                            <span className="text-slate-300">➔</span>
                            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-md font-bold text-xs">
                              1º Sim.: {groupDataSetor.avgIFLSimulado}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs font-medium text-slate-500 mt-2 border-t pt-2 border-slate-100">
                          {groupDataSetor.totalAvaliadosSimulado} alunos avaliados na edição
                        </p>
                      </div>

                      {/* KPI 2: Variação Média Delta */}
                      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                            Evolução no Setor (Δ)
                          </span>
                          <span className="p-2 bg-emerald-50 text-emerald-700 rounded-xl">
                            <TrendingUp className="w-5 h-5" />
                          </span>
                        </div>
                        <div className="my-2">
                          <div className={`text-4xl font-black ${
                            groupDataSetor.deltaAvg >= 0 ? 'text-emerald-700' : 'text-rose-700'
                          }`}>
                            {groupDataSetor.deltaAvgFormatted} pts
                          </div>
                          <p className="text-xs text-slate-500 font-medium mt-2">
                            Avanço médio das {groupDataSetor.count} unidades do setor
                          </p>
                        </div>
                        <div className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl flex items-center gap-1.5 border border-emerald-100 mt-2">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Saldo positivo consolidado</span>
                        </div>
                      </div>

                      {/* KPI 3: Taxa de Leitores */}
                      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                            Taxa de Leitores (Fluente + Inic.)
                          </span>
                          <span className="p-2 bg-amber-50 text-amber-700 rounded-xl">
                            <BookOpen className="w-5 h-5" />
                          </span>
                        </div>
                        <div className="my-2">
                          <div className="text-4xl font-black text-slate-800">
                            {setoresEdition === 'caed2026' ? groupDataSetor.leitoresEntrada : groupDataSetor.leitoresSimulado}%
                          </div>
                          <div className="flex items-center gap-2 mt-2 text-xs font-bold text-slate-500">
                            <span>Fluentes: {setoresEdition === 'caed2026' ? groupDataSetor.fluenciaEntrada : groupDataSetor.fluenciaSimulado}%</span>
                            <span>•</span>
                            <span>Participação: {groupDataSetor.avgPartSimulado}%</span>
                          </div>
                        </div>
                        <p className="text-xs font-medium text-slate-500 mt-2 border-t pt-2 border-slate-100">
                          {setoresEdition === 'caed2026' ? 'Base de Entrada CAEd' : 'No 1º Simulado (Agosto)'}
                        </p>
                      </div>

                      {/* KPI 4: Unidade Destaque do Setor */}
                      <div className="bg-gradient-to-br from-blue-900 to-indigo-950 p-6 rounded-3xl shadow-sm text-white flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-black uppercase tracking-wider text-blue-200">
                            Destaque do {selectedSetor}
                          </span>
                          <span className="p-1.5 bg-yellow-400/20 text-yellow-300 rounded-xl border border-yellow-400/30">
                            <Trophy className="w-4 h-4" />
                          </span>
                        </div>
                        <div className="my-2 min-w-0">
                          <div className="font-black text-base text-white truncate" title={groupDataSetor.topEvolvingSchool?.name}>
                            {groupDataSetor.topEvolvingSchool?.name || 'N/A'}
                          </div>
                          <div className="flex items-center gap-2 mt-1.5">
                            <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-md font-black text-xs">
                              Δ {groupDataSetor.topEvolvingSchool?.deltaFormatted || '+0.00'} pts
                            </span>
                            <span className="text-xs text-blue-200 font-bold">
                              IFL: {groupDataSetor.topEvolvingSchool?.iflSimuladoFormatted}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            if (groupDataSetor.topEvolvingSchool) {
                              setSelectedSchool(groupDataSetor.topEvolvingSchool.name);
                              setSelectedEvolucaoEscola(groupDataSetor.topEvolvingSchool.name);
                              setSchoolsEdition('simulado1');
                              setActiveTab('evolucao');
                            }
                          }}
                          className="mt-2 text-xs font-black text-blue-200 hover:text-white flex items-center justify-between border-t border-blue-800/80 pt-2 cursor-pointer transition-colors"
                        >
                          <span>Ver análise da escola</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Dual Charts for Selected Sector */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Chart 1: Perfil de Proficiência do Setor */}
                      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                          <div>
                            <h3 className="text-xl font-black text-slate-800">
                              Perfil de Proficiência ({selectedSetor})
                            </h3>
                            <p className="text-xs text-slate-500 font-medium mt-0.5">
                              Distribuição percentual dos alunos por nível CAEd
                            </p>
                          </div>
                          <div className="flex items-center gap-3 text-xs font-black">
                            <div className="flex items-center gap-1 text-slate-500">
                              <div className="w-3 h-3 rounded bg-slate-300"></div>
                              <span>Entrada</span>
                            </div>
                            <div className="flex items-center gap-1 text-blue-900">
                              <div className="w-3 h-3 rounded bg-blue-600"></div>
                              <span>1º Simulado</span>
                            </div>
                          </div>
                        </div>

                        <div className="h-[320px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={groupDataSetor.levelsComparative} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                              <XAxis 
                                dataKey="name" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fontSize: 10, fill: '#64748b', fontWeight: 'bold' }} 
                                interval={0}
                              />
                              <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} tickFormatter={(v) => `${v}%`} />
                              <Tooltip 
                                formatter={(value: any, name: any) => [`${value}%`, name === 'entrada' ? 'Entrada CAEd' : '1º Simulado']}
                                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                              />
                              <Bar dataKey="entrada" fill="#94a3b8" radius={[6, 6, 0, 0]} name="entrada" />
                              <Bar dataKey="simulado" fill="#2563eb" radius={[6, 6, 0, 0]} name="simulado" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      {/* Chart 2: Ranking de IFL das Unidades no Setor */}
                      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                          <div>
                            <h3 className="text-xl font-black text-slate-800">
                              Ranking de IFL ({selectedSetor})
                            </h3>
                            <p className="text-xs text-slate-500 font-medium mt-0.5">
                              Comparativo de IFL das escolas deste setor
                            </p>
                          </div>
                          <span className="px-3 py-1 bg-blue-50 text-blue-900 rounded-full font-black text-xs">
                            {groupDataSetor.count} Unidades
                          </span>
                        </div>

                        <div className="h-[320px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart 
                              data={groupDataSetor.sortedSchools.map(s => ({
                                name: truncateName(s.name, 16),
                                fullName: s.name,
                                entrada: s.iflEntrada,
                                simulado: s.iflSimulado
                              }))} 
                              layout="vertical"
                              margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                              <XAxis type="number" domain={[0, 10]} axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                              <YAxis 
                                type="category" 
                                dataKey="name" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fontSize: 11, fill: '#334155', fontWeight: 'bold' }} 
                                width={120}
                              />
                              <Tooltip 
                                formatter={(value: any, name: any) => [parseFloat(value).toFixed(2), name === 'entrada' ? 'IFL Entrada' : 'IFL 1º Simulado']}
                                labelFormatter={(_, payload) => payload?.[0]?.payload?.fullName || ''}
                                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                              />
                              <Bar dataKey="entrada" fill="#cbd5e1" radius={[0, 4, 4, 0]} name="entrada" barSize={10} />
                              <Bar dataKey="simulado" fill="#1e3a8a" radius={[0, 4, 4, 0]} name="simulado" barSize={10} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>

                    {/* Table of Schools in Sector */}
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                      <div className="p-6 md:p-8 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 bg-blue-500/30 text-blue-200 border border-blue-400/30 text-[10px] uppercase tracking-widest font-black rounded-md">
                              Detalhamento por Escola
                            </span>
                          </div>
                          <h2 className="text-2xl font-black mt-1">Unidades Escolares do {selectedSetor}</h2>
                          <p className="text-blue-200 text-xs font-medium mt-0.5">
                            Comparativo completo de indicadores: Entrada CAEd ➔ 1º Simulado
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-4 py-2 bg-white/10 rounded-2xl border border-white/10 text-xs font-black text-white">
                            Total: {groupDataSetor.count} escolas
                          </span>
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left">
                          <thead className="bg-slate-50 text-slate-500 font-black uppercase text-[10px] border-b border-slate-200">
                            <tr>
                              <th className="px-6 py-4">Escola</th>
                              <th className="px-4 py-4 text-center">Porte</th>
                              <th className="px-4 py-4 text-center">Avaliados</th>
                              <th className="px-4 py-4 text-center">% Part.</th>
                              <th className="px-4 py-4 text-center">IFL Entrada</th>
                              <th className="px-4 py-4 text-center">IFL 1º Sim.</th>
                              <th className="px-6 py-4 text-center">Variação Δ</th>
                              <th className="px-4 py-4 text-center">% Leitores (S1)</th>
                              <th className="px-6 py-4 text-right">Ação</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {groupDataSetor.sortedSchools.map((s) => {
                              const isPos = s.delta > 0;
                              const isZero = s.delta === 0;
                              return (
                                <tr key={s.name} className="hover:bg-blue-50/40 transition-all">
                                  <td className="px-6 py-4">
                                    <button
                                      onClick={() => {
                                        setSelectedSchool(s.name);
                                        setSelectedEvolucaoEscola(s.name);
                                        setSchoolsEdition('simulado1');
                                        setActiveTab('evolucao');
                                      }}
                                      className="font-black text-slate-800 hover:text-blue-700 text-left text-sm cursor-pointer transition-colors block"
                                    >
                                      {s.name}
                                    </button>
                                  </td>
                                  <td className="px-4 py-4 text-center">
                                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md font-bold text-xs">
                                      {s.porte || 'Médio'}
                                    </span>
                                  </td>
                                  <td className="px-4 py-4 text-center font-bold text-slate-600 text-sm">
                                    {s.avaliadosSimulado}
                                  </td>
                                  <td className="px-4 py-4 text-center font-bold text-slate-500 text-sm">
                                    {s.participacaoSimulado.toFixed(0)}%
                                  </td>
                                  <td className="px-4 py-4 text-center">
                                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-xl font-black text-xs border border-slate-200">
                                      {s.iflEntradaFormatted}
                                    </span>
                                  </td>
                                  <td className="px-4 py-4 text-center">
                                    <span className="px-3 py-1 bg-blue-900 text-white rounded-xl font-black text-xs shadow-xs">
                                      {s.iflSimuladoFormatted}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                    <span className={`inline-flex items-center gap-1 font-black text-xs px-3 py-1 rounded-xl shadow-2xs ${
                                      isPos 
                                        ? 'bg-emerald-600 text-white' 
                                        : isZero 
                                          ? 'bg-slate-600 text-white' 
                                          : 'bg-rose-600 text-white'
                                    }`}>
                                      {isPos ? <ArrowUpRight className="w-3.5 h-3.5" /> : !isZero ? <ArrowDownRight className="w-3.5 h-3.5" /> : null}
                                      {s.deltaFormatted} pts
                                    </span>
                                  </td>
                                  <td className="px-4 py-4 text-center font-black text-emerald-700 text-sm">
                                    {s.leitoresSimulado.toFixed(1)}%
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                    <button
                                      onClick={() => {
                                        setSelectedSchool(s.name);
                                        setSelectedEvolucaoEscola(s.name);
                                        setSchoolsEdition('simulado1');
                                        setActiveTab('evolucao');
                                      }}
                                      className="px-3 py-1.5 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white rounded-xl font-black text-xs transition-all border border-blue-200 hover:border-blue-600 shadow-2xs inline-flex items-center gap-1"
                                      title="Abrir painel detalhado de evolução desta escola"
                                    >
                                      <span>Inspecionar</span>
                                      <ChevronRight className="w-3.5 h-3.5" />
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                )}

                {/* Master Comparative of ALL 6 Sectors */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                  <div className="p-6 md:p-8 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 bg-slate-200 text-slate-700 text-[10px] font-black uppercase rounded-md">
                          Panorama Municipal
                        </span>
                      </div>
                      <h2 className="text-2xl font-black text-slate-800">Comparativo Geral dos 6 Setores</h2>
                      <p className="text-slate-500 text-xs font-medium mt-0.5">
                        Classificação dos setores por desempenho e taxa de evolução pedagógica
                      </p>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-white text-slate-400 font-black uppercase text-[10px] border-b border-slate-200">
                        <tr>
                          <th className="px-6 py-4">Setor Regional</th>
                          <th className="px-4 py-4 text-center">Unidades</th>
                          <th className="px-4 py-4 text-center">Avaliados (S1)</th>
                          <th className="px-4 py-4 text-center">IFL Entrada</th>
                          <th className="px-4 py-4 text-center">IFL 1º Sim.</th>
                          <th className="px-6 py-4 text-center">Evolução Média (Δ)</th>
                          <th className="px-4 py-4 text-center">% Leitores (S1)</th>
                          <th className="px-4 py-4 text-center">% Participação</th>
                          <th className="px-6 py-4">Escola Destaque</th>
                          <th className="px-6 py-4 text-right">Ação</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {setoresSummary
                          .sort((a, b) => parseFloat(b.avgIFLSimulado) - parseFloat(a.avgIFLSimulado))
                          .map((ss) => {
                            const isSelected = selectedSetor === ss.setor;
                            const isPos = ss.avgDelta > 0;
                            return (
                              <tr 
                                key={ss.setor} 
                                className={`transition-all ${
                                  isSelected ? 'bg-blue-50/70 font-bold' : 'hover:bg-slate-50/80'
                                }`}
                              >
                                <td className="px-6 py-5 font-black text-slate-800 flex items-center gap-2">
                                  <div className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-slate-300'}`}></div>
                                  <span>{ss.setor}</span>
                                </td>
                                <td className="px-4 py-5 text-center font-bold text-slate-500 text-sm">
                                  {ss.count} un.
                                </td>
                                <td className="px-4 py-5 text-center font-bold text-slate-600 text-sm">
                                  {ss.totalAvaliadosSimulado}
                                </td>
                                <td className="px-4 py-5 text-center">
                                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-xl font-bold text-xs border border-slate-200">
                                    {ss.avgIFLEntrada}
                                  </span>
                                </td>
                                <td className="px-4 py-5 text-center">
                                  <span className="bg-blue-900 text-white px-3.5 py-1.5 rounded-xl font-black text-sm shadow-xs">
                                    {ss.avgIFLSimulado}
                                  </span>
                                </td>
                                <td className="px-6 py-5 text-center">
                                  <span className={`inline-flex items-center gap-1 font-black text-xs px-3 py-1 rounded-xl shadow-2xs ${
                                    isPos ? 'bg-emerald-600 text-white' : 'bg-slate-600 text-white'
                                  }`}>
                                    {isPos && <ArrowUpRight className="w-3.5 h-3.5" />}
                                    {ss.avgDeltaFormatted} pts
                                  </span>
                                </td>
                                <td className="px-4 py-5 text-center font-black text-emerald-700 text-sm">
                                  {ss.leitoresSimulado}%
                                </td>
                                <td className="px-4 py-5 text-center font-bold text-slate-500 text-sm">
                                  {ss.avgPartSimulado}%
                                </td>
                                <td className="px-6 py-5 text-xs font-bold text-slate-700">
                                  {ss.topEvolvingSchool ? (
                                    <div className="truncate max-w-[200px]" title={ss.topEvolvingSchool.name}>
                                      <span className="text-slate-800 font-black">{ss.topEvolvingSchool.name}</span>
                                      <span className="text-emerald-700 ml-1 font-bold">({ss.topEvolvingSchool.deltaFormatted})</span>
                                    </div>
                                  ) : '-'}
                                </td>
                                <td className="px-6 py-5 text-right">
                                  <button
                                    onClick={() => setSelectedSetor(ss.setor)}
                                    className={`px-4 py-1.5 rounded-xl font-black text-xs transition-all shadow-2xs ${
                                      isSelected
                                        ? 'bg-blue-900 text-white'
                                        : 'bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-700'
                                    }`}
                                  >
                                    {isSelected ? 'Ativo' : 'Explorar'}
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ) : activeTab === 'relatorios' ? (
          <motion.div
            key="relatorios"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="w-full"
          >
            <SchoolReportView
              schoolsData={SCHOOLS_DATA}
              selectedSchoolName={selectedSchool}
              onSelectSchool={(name) => setSelectedSchool(name)}
              studentsData={studentsData}
              schoolSimuladoStatsMap={schoolSimuladoStatsMap}
              municipalSimuladoStats={municipalSimuladoStats}
              currentMunicipality={currentMunicipality}
            />
          </motion.div>
        ) : activeTab === 'perf' ? (
          <motion.div
            key="perf"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            {/* Control Bar */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 flex flex-wrap items-center gap-6">
              <div className="relative flex-1 min-w-[300px]">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text"
                  placeholder="Nome da escola... (Tecle Enter)"
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-green-100 outline-none font-bold text-slate-700 placeholder-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleSearch}
                />
              </div>
              <div className="relative min-w-[300px]">
                <School className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600 w-5 h-5 pointer-events-none" />
                <select
                  value={selectedSchool}
                  onChange={(e) => setSelectedSchool(e.target.value)}
                  className="w-full pl-12 pr-10 py-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-green-100 appearance-none font-black text-slate-700"
                >
                  <option value="">Filtrar por Unidade Escolar</option>
                  {SCHOOLS_DATA.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                </select>
              </div>
              <button 
                onClick={() => {
                  if (selectedSchool) {
                    setSelectedSchoolsForReport(new Set([selectedSchool]));
                    setActiveTab('relatorios');
                  }
                }}
                className="flex items-center gap-3 bg-green-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-green-800 transition-all shadow-lg active:scale-95"
              >
                <FileText className="w-5 h-5" />
                Ver Relatório Completo (PDF)
              </button>
            </div>

            {/* Expressive School Simulado Card if a school is selected */}
            {selectedSchool && (() => {
              const currentSchoolSimStats = schoolSimuladoStatsMap.get(selectedSchool);
              if (!currentSchoolSimStats) return null;
              return (
                <ExpressiveSimuladoCard
                  schoolStats={currentSchoolSimStats}
                  showTurmasSelector={true}
                />
              );
            })()}

            {/* Insight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border-l-8 border-l-blue-600 border border-gray-100 flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><TrendingUp className="w-6 h-6" /></div>
                <div>
                  <h3 className="text-blue-900 font-black text-lg mb-1 italic">Apontamento Principal</h3>
                  <p className="text-slate-600 font-bold leading-relaxed">{pedagogicalAnalysis.comparative_analysis}</p>
                </div>
              </div>
              
              {pedagogicalAnalysis.hasAlert && (
                <div className="bg-white p-8 rounded-3xl shadow-sm border-l-8 border-l-red-500 border border-gray-100 flex items-start gap-4 animate-pulse">
                  <div className="p-3 bg-red-50 text-red-600 rounded-xl"><AlertTriangle className="w-6 h-6" /></div>
                  <div>
                    <h3 className="text-red-900 font-black text-lg mb-1 italic">Nível de Alerta</h3>
                    <p className="text-slate-600 font-bold">Resgate Necessário: Concentração crítica nos Níveis 1 ({pedagogicalAnalysis.n1Val}%) e 2 ({pedagogicalAnalysis.n2Val}%).</p>
                  </div>
                </div>
              )}

              {pedagogicalAnalysis.participationAlert && (
                <div className="bg-white p-8 rounded-3xl shadow-sm border-l-8 border-l-orange-500 border border-gray-100 flex items-start gap-4">
                  <div className="p-3 bg-orange-50 text-orange-600 rounded-xl"><Users className="w-6 h-6" /></div>
                  <div>
                    <h3 className="text-orange-900 font-black text-lg mb-1 italic">Alerta de Abstenção</h3>
                    <p className="text-slate-600 font-bold leading-relaxed">{pedagogicalAnalysis.participationAlert}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Performance Chart */}
            <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-gray-100 pb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-800">
                      Perfil de Performance: {selectedSchool}
                    </h2>
                    {schoolsEdition === 'simulado1' ? (
                      <span className="text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-900 border border-blue-200 px-2.5 py-1 rounded-lg">
                        Perfil Triplo
                      </span>
                    ) : (
                      <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-200 px-2.5 py-1 rounded-lg">
                        Entrada CAEd
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    {schoolsEdition === 'simulado1'
                      ? 'Comparativo Triplo: Média da Rede Municipal (Tracejado) • Entrada CAED 2026 (Pontilhado Âmbar) • 1º Simulado (Área Verde)'
                      : 'Comparativo de Entrada: Desempenho da Unidade Escolar vs. Média da Rede Municipal'}
                  </p>
                </div>
              </div>

              <div className="h-[460px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={pedagogicalAnalysis.chart_data.combinedValues} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                    <defs>
                      <linearGradient id="colorSimuladoSchool" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#047857" stopOpacity={0.35}/>
                        <stop offset="90%" stopColor="#047857" stopOpacity={0.05}/>
                        <stop offset="100%" stopColor="#047857" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorBaseSchool" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#047857" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#047857" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 13, fill: '#64748b', fontWeight: 600 }} 
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
                        fontWeight: 600
                      }} 
                    />
                    <Legend verticalAlign="top" align="right" height={50} wrapperStyle={{ paddingBottom: '16px' }} />

                    {/* Serie 1: Média da Rede Municipal (dashed #94A3B8) */}
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

                    {/* Serie 2 (Nova Inserção no 1º Simulado): Entrada CAED da Unidade (dotted/fine #EA580C) */}
                    {schoolsEdition === 'simulado1' && (
                      <Line 
                        type="monotone" 
                        dataKey="caed" 
                        name={`Entrada CAED: ${selectedSchool}`} 
                        stroke="#EA580C" 
                        strokeWidth={2} 
                        strokeDasharray="4 4" 
                        dot={{ r: 4, fill: '#EA580C', stroke: '#fff', strokeWidth: 1.5 }}
                        activeDot={{ r: 7 }}
                      />
                    )}

                    {/* Serie 3: Desempenho Vigente da Unidade (solid #047857 with gradient fill) */}
                    <Area 
                      type="monotone" 
                      dataKey={schoolsEdition === 'simulado1' ? 'simulado' : 'school'} 
                      name={schoolsEdition === 'simulado1' ? `1º Simulado: ${selectedSchool}` : `Unidade: ${selectedSchool}`} 
                      stroke="#047857" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill={schoolsEdition === 'simulado1' ? "url(#colorSimuladoSchool)" : "url(#colorBaseSchool)"}
                      dot={{ r: schoolsEdition === 'simulado1' ? 6 : 7, fill: '#047857', strokeWidth: 2, stroke: '#fff' }}
                      activeDot={{ r: 8 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Specialized Ranking Table */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 md:p-8 bg-slate-50 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="title-bold text-2xl font-black text-slate-900">Ranking Pedagógico de Eficiência</h2>
                    {schoolsEdition === 'simulado1' ? (
                      <span className="text-[11px] font-black bg-blue-100 text-blue-900 px-3 py-1 rounded-full uppercase tracking-widest border border-blue-200 shadow-xs">
                        1º Simulado Municipal
                      </span>
                    ) : (
                      <span className="text-[11px] font-black bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-200 shadow-xs">
                        Base Pinda 2026 (Entrada)
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-bold text-slate-500 mt-1">
                    {schoolsEdition === 'simulado1'
                      ? 'Compilação oficial dos resultados do 1º Simulado por Unidade Escolar (distribuição percentual de N1 a Fluente e IFL consolidado).'
                      : 'Resultados da avaliação diagnóstica de Entrada CAEd 2026.'}
                  </p>
                </div>

                {/* Edition Selector Tabs: BASE PINDA 2026 vs 1° SIMULADO */}
                <div className="flex items-center gap-1.5 bg-slate-200/90 p-1.5 rounded-2xl border border-slate-300 shadow-inner">
                  <button
                    onClick={() => setSchoolsEdition('base_pinda')}
                    className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
                      schoolsEdition === 'base_pinda'
                        ? 'bg-emerald-700 text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    <Database className="w-3.5 h-3.5" />
                    BASE PINDA 2026
                  </button>
                  <button
                    onClick={() => setSchoolsEdition('simulado1')}
                    className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
                      schoolsEdition === 'simulado1'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    1° SIMULADO
                  </button>
                </div>
              </div>

              {/* Table Toolbar Info */}
              <div className="px-6 py-3 bg-white border-b border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-500">
                <div className="flex items-center gap-2">
                  <span>Exibindo <strong>{filteredAndSortedSchools.length}</strong> unidades escolares</span>
                  {searchTerm && <span>• Filtrado por "{searchTerm}"</span>}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider">Clique nos cabeçalhos para ordenar</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[1050px]">
                  <thead className="bg-slate-50 text-slate-500 font-black uppercase text-[11px] border-b border-gray-200 select-none">
                    <tr>
                      <th 
                        className="px-6 py-5 cursor-pointer hover:text-slate-900 transition-colors"
                        onClick={() => setSchoolsTableSort({
                          key: 'name',
                          direction: schoolsTableSort.key === 'name' && schoolsTableSort.direction === 'asc' ? 'desc' : 'asc'
                        })}
                      >
                        <div className="flex items-center gap-1.5">
                          <span>Escola</span>
                          {schoolsTableSort.key === 'name' && (
                            <span className="text-blue-600">{schoolsTableSort.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </div>
                      </th>
                      <th 
                        className="px-3 py-5 text-center cursor-pointer hover:text-slate-900 transition-colors"
                        onClick={() => setSchoolsTableSort({
                          key: 'previstos',
                          direction: schoolsTableSort.key === 'previstos' && schoolsTableSort.direction === 'asc' ? 'desc' : 'asc'
                        })}
                      >
                        <div className="flex items-center justify-center gap-1">
                          <span>Prev.</span>
                          {schoolsTableSort.key === 'previstos' && (
                            <span className="text-blue-600">{schoolsTableSort.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </div>
                      </th>
                      <th 
                        className="px-3 py-5 text-center cursor-pointer hover:text-slate-900 transition-colors"
                        onClick={() => setSchoolsTableSort({
                          key: 'avaliados',
                          direction: schoolsTableSort.key === 'avaliados' && schoolsTableSort.direction === 'asc' ? 'desc' : 'asc'
                        })}
                      >
                        <div className="flex items-center justify-center gap-1">
                          <span>Aval.</span>
                          {schoolsTableSort.key === 'avaliados' && (
                            <span className="text-blue-600">{schoolsTableSort.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </div>
                      </th>
                      <th 
                        className="px-3 py-5 text-center cursor-pointer hover:text-slate-900 transition-colors"
                        onClick={() => setSchoolsTableSort({
                          key: 'participacao',
                          direction: schoolsTableSort.key === 'participacao' && schoolsTableSort.direction === 'asc' ? 'desc' : 'asc'
                        })}
                      >
                        <div className="flex items-center justify-center gap-1">
                          <span>% Part.</span>
                          {schoolsTableSort.key === 'participacao' && (
                            <span className="text-blue-600">{schoolsTableSort.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </div>
                      </th>
                      <th 
                        className="px-3 py-5 text-center cursor-pointer hover:text-red-700 transition-colors"
                        onClick={() => setSchoolsTableSort({
                          key: 'n1',
                          direction: schoolsTableSort.key === 'n1' && schoolsTableSort.direction === 'asc' ? 'desc' : 'asc'
                        })}
                      >
                        <div className="flex items-center justify-center gap-1 text-red-600">
                          <span>N1</span>
                          {schoolsTableSort.key === 'n1' && (
                            <span className="text-red-700">{schoolsTableSort.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </div>
                      </th>
                      <th 
                        className="px-3 py-5 text-center cursor-pointer hover:text-red-600 transition-colors"
                        onClick={() => setSchoolsTableSort({
                          key: 'n2',
                          direction: schoolsTableSort.key === 'n2' && schoolsTableSort.direction === 'asc' ? 'desc' : 'asc'
                        })}
                      >
                        <div className="flex items-center justify-center gap-1 text-red-500">
                          <span>N2</span>
                          {schoolsTableSort.key === 'n2' && (
                            <span className="text-red-600">{schoolsTableSort.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </div>
                      </th>
                      <th 
                        className="px-3 py-5 text-center cursor-pointer hover:text-orange-600 transition-colors"
                        onClick={() => setSchoolsTableSort({
                          key: 'n3',
                          direction: schoolsTableSort.key === 'n3' && schoolsTableSort.direction === 'asc' ? 'desc' : 'asc'
                        })}
                      >
                        <div className="flex items-center justify-center gap-1 text-orange-500">
                          <span>N3</span>
                          {schoolsTableSort.key === 'n3' && (
                            <span className="text-orange-600">{schoolsTableSort.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </div>
                      </th>
                      <th 
                        className="px-3 py-5 text-center cursor-pointer hover:text-amber-600 transition-colors"
                        onClick={() => setSchoolsTableSort({
                          key: 'n4',
                          direction: schoolsTableSort.key === 'n4' && schoolsTableSort.direction === 'asc' ? 'desc' : 'asc'
                        })}
                      >
                        <div className="flex items-center justify-center gap-1 text-amber-500">
                          <span>N4</span>
                          {schoolsTableSort.key === 'n4' && (
                            <span className="text-amber-600">{schoolsTableSort.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </div>
                      </th>
                      <th 
                        className="px-3 py-5 text-center cursor-pointer hover:text-lime-700 transition-colors"
                        onClick={() => setSchoolsTableSort({
                          key: 'iniciante',
                          direction: schoolsTableSort.key === 'iniciante' && schoolsTableSort.direction === 'asc' ? 'desc' : 'asc'
                        })}
                      >
                        <div className="flex items-center justify-center gap-1 text-lime-700">
                          <span>Inic.</span>
                          {schoolsTableSort.key === 'iniciante' && (
                            <span className="text-lime-800">{schoolsTableSort.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </div>
                      </th>
                      <th 
                        className="px-3 py-5 text-center cursor-pointer hover:text-emerald-700 transition-colors"
                        onClick={() => setSchoolsTableSort({
                          key: 'fluente',
                          direction: schoolsTableSort.key === 'fluente' && schoolsTableSort.direction === 'asc' ? 'desc' : 'asc'
                        })}
                      >
                        <div className="flex items-center justify-center gap-1 text-emerald-700">
                          <span>Fluen.</span>
                          {schoolsTableSort.key === 'fluente' && (
                            <span className="text-emerald-800">{schoolsTableSort.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </div>
                      </th>
                      
                      {schoolsEdition === 'simulado1' ? (
                        <>
                          <th 
                            className="px-3 py-5 text-center cursor-pointer hover:text-slate-800 transition-colors"
                            onClick={() => setSchoolsTableSort({
                              key: 'iflEntrada',
                              direction: schoolsTableSort.key === 'iflEntrada' && schoolsTableSort.direction === 'asc' ? 'desc' : 'asc'
                            })}
                          >
                            <div className="flex items-center justify-center gap-1 text-slate-500">
                              <span>Entrada (CAEd)</span>
                              {schoolsTableSort.key === 'iflEntrada' && (
                                <span className="text-slate-800">{schoolsTableSort.direction === 'asc' ? '↑' : '↓'}</span>
                              )}
                            </div>
                          </th>
                          <th 
                            className="px-4 py-5 text-center cursor-pointer hover:text-blue-900 bg-blue-50/70 border-x border-blue-100 transition-colors"
                            onClick={() => setSchoolsTableSort({
                              key: 'ifl',
                              direction: schoolsTableSort.key === 'ifl' && schoolsTableSort.direction === 'asc' ? 'desc' : 'asc'
                            })}
                          >
                            <div className="flex items-center justify-center gap-1 text-blue-900 font-black">
                              <span>IFL 1º Simulado</span>
                              {schoolsTableSort.key === 'ifl' && (
                                <span className="text-blue-900">{schoolsTableSort.direction === 'asc' ? '↑' : '↓'}</span>
                              )}
                            </div>
                          </th>
                          <th 
                            className="px-4 py-5 text-right cursor-pointer hover:text-slate-900 transition-colors"
                            onClick={() => setSchoolsTableSort({
                              key: 'delta',
                              direction: schoolsTableSort.key === 'delta' && schoolsTableSort.direction === 'asc' ? 'desc' : 'asc'
                            })}
                          >
                            <div className="flex items-center justify-end gap-1 font-black">
                              <span>Δ Evolução</span>
                              {schoolsTableSort.key === 'delta' && (
                                <span className="text-blue-600">{schoolsTableSort.direction === 'asc' ? '↑' : '↓'}</span>
                              )}
                            </div>
                          </th>
                        </>
                      ) : (
                        <th 
                          className="px-6 py-5 text-right cursor-pointer hover:text-emerald-900 bg-emerald-50/70 border-l border-emerald-100 transition-colors"
                          onClick={() => setSchoolsTableSort({
                            key: 'ifl',
                            direction: schoolsTableSort.key === 'ifl' && schoolsTableSort.direction === 'asc' ? 'desc' : 'asc'
                          })}
                        >
                          <div className="flex items-center justify-end gap-1 text-emerald-900 font-black">
                            <span>IFL (0-10)</span>
                            {schoolsTableSort.key === 'ifl' && (
                              <span className="text-emerald-900">{schoolsTableSort.direction === 'asc' ? '↑' : '↓'}</span>
                            )}
                          </div>
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredAndSortedSchools.map((school: any) => {
                      const isSelected = school.name === selectedSchool;
                      const isPos = school.delta >= 0;
                      const iflValue = school.iflNum;

                      return (
                        <tr 
                          key={school.name} 
                          onClick={() => setSelectedSchool(school.name)}
                          className={`hover:bg-blue-50/60 transition-all cursor-pointer ${
                            isSelected ? 'bg-blue-100/50 ring-1 ring-inset ring-blue-300' : ''
                          }`}
                        >
                          <td className="px-6 py-4 font-black text-slate-800 text-sm">
                            <div className="flex items-center gap-2">
                              {isSelected && <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />}
                              <span className={isSelected ? 'text-blue-900 underline decoration-blue-500 font-black' : ''}>
                                {school.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-3 py-4 text-center font-bold text-slate-500">{school.previstos}</td>
                          <td className="px-3 py-4 text-center font-bold text-slate-600">{school.avaliados}</td>
                          <td className="px-3 py-4 text-center">
                            <div className={`text-xs inline-flex font-black px-2 py-0.5 rounded-lg ${
                              school.participacao >= 95 
                                ? 'text-emerald-800 bg-emerald-100' 
                                : school.participacao >= 80 
                                  ? 'text-amber-800 bg-amber-100' 
                                  : 'text-red-800 bg-red-100'
                            }`}>
                              {typeof school.participacao === 'number' ? school.participacao.toFixed(1) : school.participacao}%
                            </div>
                          </td>
                          <td className="px-3 py-4 text-center font-bold text-red-600">
                            {typeof school.n1 === 'number' ? school.n1.toFixed(1) : school.n1}%
                          </td>
                          <td className="px-3 py-4 text-center font-bold text-red-500">
                            {typeof school.n2 === 'number' ? school.n2.toFixed(1) : school.n2}%
                          </td>
                          <td className="px-3 py-4 text-center font-bold text-orange-500">
                            {typeof school.n3 === 'number' ? school.n3.toFixed(1) : school.n3}%
                          </td>
                          <td className="px-3 py-4 text-center font-bold text-amber-600">
                            {typeof school.n4 === 'number' ? school.n4.toFixed(1) : school.n4}%
                          </td>
                          <td className="px-3 py-4 text-center font-bold text-lime-700">
                            {typeof school.iniciante === 'number' ? school.iniciante.toFixed(1) : school.iniciante}%
                          </td>
                          <td className="px-3 py-4 text-center font-bold text-emerald-800">
                            {typeof school.fluente === 'number' ? school.fluente.toFixed(1) : school.fluente}%
                          </td>

                          {schoolsEdition === 'simulado1' ? (
                            <>
                              <td className="px-3 py-4 text-center font-bold text-slate-500">
                                {school.iflEntrada.toFixed(2)}
                              </td>
                              <td className="px-4 py-4 text-center bg-blue-50/40 border-x border-blue-100">
                                <span className={`inline-block px-3 py-1 rounded-xl text-sm font-black shadow-xs ${
                                  iflValue >= 6.0 
                                    ? 'bg-blue-600 text-white shadow-blue-200' 
                                    : iflValue >= 4.0 
                                      ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                                      : 'bg-red-500 text-white shadow-red-200'
                                }`}>
                                  {school.ifl}
                                </span>
                              </td>
                              <td className="px-4 py-4 text-right">
                                <span className={`inline-flex items-center gap-1 font-black px-2.5 py-1 rounded-lg text-xs ${
                                  isPos ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                                }`}>
                                  {school.deltaFormatted}
                                </span>
                              </td>
                            </>
                          ) : (
                            <td className="px-6 py-4 text-right bg-emerald-50/40 border-l border-emerald-100">
                              <span className={`inline-block px-3 py-1 rounded-xl text-sm font-black shadow-xs ${
                                iflValue >= 6.0 
                                  ? 'bg-emerald-700 text-white' 
                                  : iflValue >= 4.0 
                                    ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                                    : 'bg-red-500 text-white'
                              }`}>
                                {school.ifl}
                              </span>
                            </td>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div></motion.div>
        ) : (
          <motion.div
            key="insights"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            {/* Header & Executive KPI Summary Strip */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-700/50">
              <div className="flex flex-wrap items-center justify-between gap-6 mb-8 border-b border-slate-700/60 pb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-widest rounded-lg flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Matriz Comparativa Oficial
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      Entrada CAEd 2026 ➔ 1º Simulado Municipal
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    Análise Estratégica de Evolução do IFL
                  </h2>
                  <p className="text-slate-300 text-sm font-medium mt-1">
                    Mapeamento das unidades escolares de maior avanço pedagógico e identificação dos pontos prioritários de intervenção.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSchoolsEdition('simulado1');
                      setActiveTab('perf');
                    }}
                    className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 border border-white/20"
                  >
                    <School className="w-4 h-4 text-emerald-400" />
                    Ver Todas as Escolas
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('evolucao');
                    }}
                    className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
                  >
                    <TrendingUp className="w-4 h-4" />
                    Painel de Evolução Aluno a Aluno
                  </button>
                </div>
              </div>

              {/* 4 Summary Executive Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Trophy className="w-4 h-4 text-amber-400" /> Maior Salto Individual
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-black text-xs rounded-md border border-emerald-400/30">
                      Top 1
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">
                      +{evolutionRankings.maiorEvolucao?.delta.toFixed(2) || '0.00'} pts
                    </div>
                    <div className="text-xs font-black text-emerald-400 mt-1 truncate" title={evolutionRankings.maiorEvolucao?.name}>
                      {evolutionRankings.maiorEvolucao?.name || '-'}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Entrada: {evolutionRankings.maiorEvolucao?.iflEntrada.toFixed(2)} ➔ Simulado: {evolutionRankings.maiorEvolucao?.ifl}
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-blue-400" /> Média de Evolução da Rede
                    </span>
                    <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 font-black text-xs rounded-md border border-blue-400/30">
                      Δ Municipal
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">
                      {evolutionRankings.mediaDelta >= 0 ? '+' : ''}{evolutionRankings.mediaDelta.toFixed(2)} pts
                    </div>
                    <div className="text-xs font-bold text-slate-300 mt-1">
                      Variação média entre as {evolutionRankings.totalEscolas} escolas
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      IFL médio evoluiu na transição para o 1º Simulado
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400" /> Escolas com Salto Positivo
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-black text-xs rounded-md border border-emerald-400/30">
                      {evolutionRankings.percAvancoPositivo.toFixed(0)}%
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">
                      {evolutionRankings.totalAvancoPositivo} <span className="text-sm font-normal text-slate-400">/ {evolutionRankings.totalEscolas} unidades</span>
                    </div>
                    <div className="text-xs font-bold text-emerald-300 mt-1">
                      Crescimento efetivo no IFL escolar
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Apresentaram IFL superior ao de Entrada
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-400" /> Foco de Resgate / Atenção
                    </span>
                    <span className="px-2 py-0.5 bg-rose-500/20 text-rose-300 font-black text-xs rounded-md border border-rose-400/30">
                      {evolutionRankings.totalRegressao + evolutionRankings.totalEstaveis} un.
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">
                      {evolutionRankings.totalRegressao + evolutionRankings.totalEstaveis} <span className="text-sm font-normal text-slate-400">unidades</span>
                    </div>
                    <div className="text-xs font-bold text-rose-300 mt-1">
                      {evolutionRankings.totalRegressao} em recuo • {evolutionRankings.totalEstaveis} estagnadas
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Requerem prioridade pedagógica
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Rankings Grid: Top 10 Most Evolved vs Top 10 Least Evolved */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              
              {/* TOP 10 MAIORES EVOLUÇÕES NO IFL */}
              <div className="bg-white rounded-3xl shadow-sm border border-emerald-100 overflow-hidden flex flex-col">
                <div className="p-6 md:p-8 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-emerald-500/20 text-emerald-300 rounded-2xl border border-emerald-400/30">
                        <Trophy className="w-7 h-7 text-amber-300" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-widest rounded-md">
                            Destaque Municipal
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mt-1">
                          Top 10 Escolas que Mais Evoluíram
                        </h3>
                        <p className="text-emerald-200 text-xs font-medium mt-0.5">
                          Unidades com os maiores ganhos em pontos no IFL (1º Simulado vs. Entrada CAEd)
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:block text-right">
                      <span className="text-xs font-bold text-emerald-300 block uppercase tracking-wider">Critério</span>
                      <span className="text-sm font-black text-white">Maior Δ IFL</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 overflow-y-auto">
                  {evolutionRankings.top10Evolucoes.map((school, index) => {
                    const isFirst = index === 0;
                    const isSecond = index === 1;
                    const isThird = index === 2;

                    const medalBg = isFirst 
                      ? 'bg-amber-400 text-slate-950 shadow-md ring-2 ring-amber-300' 
                      : isSecond 
                        ? 'bg-slate-300 text-slate-900 shadow-sm ring-2 ring-slate-200' 
                        : isThird 
                          ? 'bg-amber-700 text-white shadow-sm ring-2 ring-amber-600' 
                          : 'bg-emerald-50 text-emerald-800 border border-emerald-200';

                    const cardBg = isFirst 
                      ? 'bg-gradient-to-r from-amber-50/70 via-emerald-50/50 to-white border-amber-200 shadow-sm' 
                      : 'bg-slate-50/70 hover:bg-emerald-50/40 border-slate-200/80 hover:border-emerald-200';

                    return (
                      <div 
                        key={school.name}
                        className={`p-4 md:p-5 rounded-2xl border transition-all duration-200 ${cardBg} flex flex-col sm:flex-row sm:items-center justify-between gap-4`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shrink-0 ${medalBg}`}>
                            {isFirst ? '🥇 1º' : isSecond ? '🥈 2º' : isThird ? '🥉 3º' : `${index + 1}º`}
                          </div>
                          <div className="min-w-0">
                            <button
                              onClick={() => {
                                setSelectedSchool(school.name);
                                setSelectedEvolucaoEscola(school.name);
                                setSchoolsEdition('simulado1');
                                setActiveTab('perf');
                              }}
                              className="font-black text-slate-800 hover:text-emerald-700 text-base text-left truncate block cursor-pointer transition-colors"
                              title={`Inspecionar ${school.name}`}
                            >
                              {school.name}
                            </button>
                            <div className="flex flex-wrap items-center gap-2 mt-1 text-xs font-bold text-slate-500">
                              <span className="px-2 py-0.5 bg-white rounded-md border border-slate-200 text-slate-600">
                                Entrada: <b>{school.iflEntrada.toFixed(2)}</b>
                              </span>
                              <span className="text-slate-400">➔</span>
                              <span className="px-2 py-0.5 bg-blue-50 text-blue-800 rounded-md border border-blue-200 font-bold">
                                1º Sim.: <b>{school.ifl}</b>
                              </span>
                              <span className="text-[11px] text-slate-400 hidden md:inline">
                                • {school.avaliados} alunos ({school.participacao.toFixed(0)}% part.)
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200/60">
                          <div className="text-left sm:text-right">
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                              Evolução no IFL
                            </div>
                            <span className="inline-flex items-center gap-1 font-black text-base px-3 py-1 rounded-xl bg-emerald-600 text-white shadow-sm">
                              <ArrowUpRight className="w-4 h-4" />
                              +{school.delta.toFixed(2)} pts
                            </span>
                          </div>
                          
                          <button
                            onClick={() => {
                              setSelectedSchool(school.name);
                              setSelectedEvolucaoEscola(school.name);
                              setSchoolsEdition('simulado1');
                              setActiveTab('perf');
                            }}
                            className="p-2.5 rounded-xl bg-white hover:bg-emerald-600 text-slate-600 hover:text-white border border-slate-200 hover:border-emerald-600 transition-all shadow-xs"
                            title="Ver perfil completo desta escola"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 bg-emerald-50 border-t border-emerald-100 flex items-center justify-between text-xs font-bold text-emerald-900">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    Média de evolução do Top 10: <b>+{(evolutionRankings.top10Evolucoes.reduce((acc, s) => acc + s.delta, 0) / (evolutionRankings.top10Evolucoes.length || 1)).toFixed(2)} pts</b>
                  </span>
                  <button 
                    onClick={() => {
                      setSchoolsEdition('simulado1');
                      setSchoolsTableSort({ key: 'delta', direction: 'desc' });
                      setActiveTab('perf');
                    }}
                    className="hover:underline font-black text-emerald-800"
                  >
                    Ver Ranking Geral ➔
                  </button>
                </div>
              </div>

              {/* TOP 10 MENORES EVOLUÇÕES / ATENÇÃO PRIORITÁRIA */}
              <div className="bg-white rounded-3xl shadow-sm border border-rose-100 overflow-hidden flex flex-col">
                <div className="p-6 md:p-8 bg-gradient-to-r from-rose-950 via-red-900 to-amber-950 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-red-500/20 text-red-300 rounded-2xl border border-red-400/30">
                        <AlertTriangle className="w-7 h-7 text-rose-300" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 bg-rose-500 text-white font-black text-[10px] uppercase tracking-widest rounded-md">
                            Atenção Pedagógica
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mt-1">
                          Escolas com Menor Evolução no IFL
                        </h3>
                        <p className="text-rose-200 text-xs font-medium mt-0.5">
                          Unidades que registraram menor variação ou recuo na transição para o 1º Simulado
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:block text-right">
                      <span className="text-xs font-bold text-rose-300 block uppercase tracking-wider">Foco</span>
                      <span className="text-sm font-black text-white">Intervenção</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 overflow-y-auto">
                  {evolutionRankings.top10MenorEvolucao.map((school, index) => {
                    const isNegative = school.delta < 0;
                    const isZero = school.delta === 0;

                    const statusBadge = isNegative
                      ? 'bg-rose-100 text-rose-800 border-rose-200'
                      : isZero
                        ? 'bg-slate-100 text-slate-800 border-slate-200'
                        : 'bg-amber-100 text-amber-900 border-amber-200';

                    const deltaColor = isNegative
                      ? 'bg-rose-600 text-white'
                      : isZero
                        ? 'bg-slate-600 text-white'
                        : 'bg-amber-600 text-white';

                    return (
                      <div 
                        key={school.name}
                        className="p-4 md:p-5 rounded-2xl border border-slate-200/80 bg-slate-50/70 hover:bg-rose-50/40 hover:border-rose-200 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-center justify-center font-black text-sm shrink-0">
                            #{index + 1}
                          </div>
                          <div className="min-w-0">
                            <button
                              onClick={() => {
                                setSelectedSchool(school.name);
                                setSelectedEvolucaoEscola(school.name);
                                setSchoolsEdition('simulado1');
                                setActiveTab('evolucao');
                              }}
                              className="font-black text-slate-800 hover:text-rose-700 text-base text-left truncate block cursor-pointer transition-colors"
                              title={`Inspecionar turmas de ${school.name}`}
                            >
                              {school.name}
                            </button>
                            <div className="flex flex-wrap items-center gap-2 mt-1 text-xs font-bold text-slate-500">
                              <span className="px-2 py-0.5 bg-white rounded-md border border-slate-200 text-slate-600">
                                Entrada: <b>{school.iflEntrada.toFixed(2)}</b>
                              </span>
                              <span className="text-slate-400">➔</span>
                              <span className="px-2 py-0.5 bg-slate-100 text-slate-800 rounded-md border border-slate-200 font-bold">
                                1º Sim.: <b>{school.ifl}</b>
                              </span>
                              <span className="text-[11px] text-slate-400 hidden md:inline">
                                • {school.avaliados} alunos ({school.participacao.toFixed(0)}% part.)
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200/60">
                          <div className="text-left sm:text-right">
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                              Variação Δ
                            </div>
                            <span className={`inline-flex items-center gap-1 font-black text-base px-3 py-1 rounded-xl shadow-sm ${deltaColor}`}>
                              {isNegative ? (
                                <ArrowDownRight className="w-4 h-4" />
                              ) : (
                                <ArrowUpRight className="w-4 h-4" />
                              )}
                              {school.delta > 0 ? `+${school.delta.toFixed(2)}` : school.delta.toFixed(2)} pts
                            </span>
                          </div>
                          
                          <button
                            onClick={() => {
                              setSelectedSchool(school.name);
                              setSelectedEvolucaoEscola(school.name);
                              setSchoolsEdition('simulado1');
                              setActiveTab('evolucao');
                            }}
                            className="p-2.5 rounded-xl bg-white hover:bg-rose-600 text-slate-600 hover:text-white border border-slate-200 hover:border-rose-600 transition-all shadow-xs"
                            title="Analisar turmas e alunos desta escola na aba Evolução"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 bg-rose-50 border-t border-rose-100 flex items-center justify-between text-xs font-bold text-rose-900">
                  <span className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                    Plano de ação: intensificar acompanhamento leitor nas turmas com menor avanço
                  </span>
                  <button 
                    onClick={() => {
                      setActiveTab('evolucao');
                    }}
                    className="hover:underline font-black text-rose-800"
                  >
                    Ver Painel por Aluno ➔
                  </button>
                </div>
              </div>

            </div>

            {/* Complementary Pedagogical Cards (Alto IFL & Resgate Crítico) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
              {/* Unidades de Alto IFL */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-yellow-100 rounded-2xl"><Lightbulb className="text-yellow-600 w-7 h-7" /></div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-800">Unidades de Alto IFL (&gt; 6.0)</h3>
                      <p className="text-xs text-slate-500 font-medium">Consolidação de padrão leitor no 1º Simulado</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-black text-xs rounded-full">
                    {simuladoSchoolsData.filter(s => s.iflNum >= 6.0).length} Unidades
                  </span>
                </div>
                <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2">
                  {simuladoSchoolsData.filter(s => s.iflNum >= 6.0).sort((a, b) => b.iflNum - a.iflNum).map((school) => (
                    <div 
                      key={school.name} 
                      onClick={() => {
                        setSelectedSchool(school.name);
                        setSelectedEvolucaoEscola(school.name);
                        setSchoolsEdition('simulado1');
                        setActiveTab('perf');
                      }}
                      className="flex items-center justify-between p-4 bg-emerald-50/70 hover:bg-emerald-100/70 rounded-2xl border border-emerald-100 transition-all cursor-pointer"
                    >
                      <div>
                        <span className="font-bold text-emerald-950 text-base">{school.name}</span>
                        <div className="text-xs text-emerald-700 font-medium mt-0.5">
                          Entrada: {school.iflEntrada.toFixed(2)} ➔ Simulado: {school.ifl} (Δ {school.deltaFormatted} pts)
                        </div>
                      </div>
                      <div className="bg-emerald-800 text-white px-4 py-1.5 rounded-xl font-black text-sm shadow-xs">
                        IFL {school.ifl}
                      </div>
                    </div>
                  ))}
                  {simuladoSchoolsData.filter(s => s.iflNum >= 6.0).length === 0 && (
                    <p className="text-gray-400 font-medium italic text-center py-6">Nenhuma escola atingiu IFL &gt; 6.0 nesta edição.</p>
                  )}
                </div>
              </div>

              {/* Resgate Prioritário (N1 ou N2 Elevados) */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 border-t-8 border-t-red-500">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-100 rounded-2xl"><AlertTriangle className="text-red-600 w-7 h-7" /></div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-800">Resgate Prioritário (N1 ou N2 Elevados)</h3>
                      <p className="text-xs text-slate-500 font-medium">Concentração de não-leitores e silabação no 1º Simulado</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-red-100 text-red-800 font-black text-xs rounded-full">
                    {simuladoSchoolsData.filter(s => s.n1 > 10 || s.n2 > 15).length} Unidades
                  </span>
                </div>
                <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2">
                  {simuladoSchoolsData.filter(s => s.n1 > 10 || s.n2 > 15).sort((a,b) => b.n1 - a.n1).map((school) => (
                    <div 
                      key={school.name} 
                      onClick={() => {
                        setSelectedSchool(school.name);
                        setSelectedEvolucaoEscola(school.name);
                        setSchoolsEdition('simulado1');
                        setActiveTab('intervencao');
                      }}
                      className="flex items-center justify-between p-4 bg-red-50 rounded-2xl border border-red-100 transition-all hover:bg-red-100 cursor-pointer"
                    >
                      <div>
                        <span className="font-bold text-red-950 text-base">{school.name}</span>
                        <div className="text-[11px] uppercase font-black text-red-500 mt-0.5">
                          N1: {school.n1.toFixed(1)}% | N2: {school.n2.toFixed(1)}% • IFL: {school.ifl}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="px-3 py-1 bg-red-600 text-white font-black text-xs rounded-lg uppercase">
                          Alerta Crítico
                        </span>
                      </div>
                    </div>
                  ))}
                  {simuladoSchoolsData.filter(s => s.n1 > 10 || s.n2 > 15).length === 0 && (
                    <p className="text-gray-400 font-medium italic text-center py-6">Nenhuma escola em nível crítico de N1/N2.</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 text-center"
            >
              <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-black text-slate-800 mb-4 uppercase">Padrão Detectado!</h2>
              <p className="text-slate-600 font-bold mb-8 leading-relaxed">
                O sistema identificou um padrão de <span className="text-orange-600">Soletração/Silabação</span> para o aluno <b>{selectedStudentForColeta}</b>.
              </p>
              <div className="space-y-3">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Confirmação Pedagógica CAEd</p>
                <button 
                  onClick={() => setShowModal(false)}
                  className="w-full bg-orange-600 text-white font-black py-4 rounded-2xl shadow-lg hover:bg-orange-700 transition-all"
                >
                  Confirmar Nível 2 (Silbação)
                </button>
                <button 
                  onClick={() => setShowModal(false)}
                  className="w-full bg-slate-100 text-slate-600 font-black py-4 rounded-2xl hover:bg-slate-200 transition-all"
                >
                  Descartar Coleta
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
