/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  Award, 
  School, 
  Users, 
  BookOpen, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';
import { SchoolSimuladoSummary, TurmaSimuladoStats } from '../simuladoUtils';

interface ExpressiveSimuladoCardProps {
  schoolStats: SchoolSimuladoSummary;
  selectedTurma?: string; // "TODAS" or specific turma name like "2º ANO A"
  onSelectTurma?: (turma: string) => void;
  showTurmasSelector?: boolean;
  className?: string;
}

export const ExpressiveSimuladoCard: React.FC<ExpressiveSimuladoCardProps> = ({
  schoolStats,
  selectedTurma = "TODAS",
  onSelectTurma,
  showTurmasSelector = true,
  className = ""
}) => {
  const isAllTurmas = !selectedTurma || selectedTurma === "TODAS" || selectedTurma === "Todas as Turmas";
  
  // Current active statistics (either school general average or specific class)
  const currentTurmaStat: TurmaSimuladoStats | undefined = !isAllTurmas
    ? schoolStats.turmas.find(t => t.turma === selectedTurma)
    : undefined;

  const displayIFL_S1 = currentTurmaStat 
    ? currentTurmaStat.iflS1Formatted 
    : schoolStats.iflS1GeralFormatted;

  const displayAvaliados = currentTurmaStat
    ? currentTurmaStat.avaliados
    : schoolStats.totalAvaliados;

  const displayMatriculados = currentTurmaStat
    ? currentTurmaStat.matriculados
    : schoolStats.totalMatriculados;

  const displayParticipacao = currentTurmaStat
    ? currentTurmaStat.participacaoPerc.toFixed(1)
    : schoolStats.participacaoGeralPerc.toFixed(1);

  const displayLeitoresPerc = currentTurmaStat
    ? currentTurmaStat.leitoresPerc.toFixed(1)
    : schoolStats.leitoresGeralPerc.toFixed(1);

  const displayTaxaAvanco = currentTurmaStat
    ? currentTurmaStat.taxaAvancoPerc.toFixed(1)
    : schoolStats.taxaAvancoGeralPerc.toFixed(1);

  const entradaOfficial = schoolStats.schoolEntradaOfficialIFL;
  const deltaNum = currentTurmaStat
    ? currentTurmaStat.deltaVsEntrada
    : schoolStats.deltaGeral;
  
  const deltaFormatted = (deltaNum >= 0 ? "+" : "") + deltaNum.toFixed(2);
  const isPositive = deltaNum > 0;
  const isNeutral = deltaNum === 0;

  return (
    <div className={`bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-700/60 relative overflow-hidden ${className}`}>
      {/* Subtle decorative background light */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-700/60">
        <div className="flex items-start gap-3.5">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-md ring-1 ring-white/20 shrink-0">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-[10px] font-black uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2.5 py-0.5 rounded-full">
                Painel Oficial de Evolução 2026
              </span>
              <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-0.5 rounded-full">
                Entrada CAEd ➔ 1º Simulado
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <span>{schoolStats.schoolName}</span>
            </h3>
            <p className="text-xs text-slate-300 font-medium">
              Comparativo direto e auditável entre a Avaliação Diagnóstica de Entrada e o 1º Simulado Municipal
            </p>
          </div>
        </div>

        {/* Turma Switcher Tabs within Card */}
        {showTurmasSelector && onSelectTurma && (
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-800/80 p-1.5 rounded-2xl border border-slate-700">
            <button
              onClick={() => onSelectTurma("TODAS")}
              className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wide transition-all cursor-pointer ${
                isAllTurmas
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-700/60"
              }`}
            >
              🏫 Média Geral da Escola
            </button>
            {schoolStats.turmas.map(t => (
              <button
                key={t.turma}
                onClick={() => onSelectTurma(t.turma)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedTurma === t.turma
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-700/60"
                }`}
              >
                <span>{t.turma}</span>
                <span className="text-[10px] opacity-80 font-bold bg-black/25 px-1.5 py-0.2 rounded-md">
                  {t.iflS1Formatted}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Comparative Visual Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 my-6 items-stretch">
        
        {/* Step 1: Avaliação de Entrada (Oficial CAEd) */}
        <div className="md:col-span-4 bg-slate-800/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/70 flex flex-col justify-between hover:border-slate-600 transition-colors">
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
                {entradaOfficial.toFixed(2)}
              </span>
              <span className="text-xs text-slate-400 font-bold uppercase">IFL Escola</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400 font-medium">
            <span>Nota de Referência</span>
            <span className="text-slate-300 font-bold">Diagnóstica Inicial</span>
          </div>
        </div>

        {/* Transition Vector / Delta Indicator */}
        <div className="md:col-span-4 bg-gradient-to-br from-indigo-900/40 to-slate-800/80 backdrop-blur-sm rounded-2xl p-5 border border-indigo-500/30 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Sparkles className="w-20 h-20 text-indigo-400" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-indigo-300">
                2. Variação Real (Δ)
              </span>
              <div className={`flex items-center gap-1 text-[11px] font-black px-2.5 py-0.5 rounded-full ${
                isPositive 
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                  : isNeutral
                  ? "bg-slate-600/40 text-slate-300 border border-slate-500/40"
                  : "bg-rose-500/20 text-rose-300 border border-rose-500/40"
              }`}>
                {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : isNeutral ? <Minus className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                <span>{deltaFormatted} IFL</span>
              </div>
            </div>
            <div className="text-xs font-bold text-indigo-200 uppercase tracking-tight">
              {isAllTurmas ? "Crescimento da Escola" : `Evolução (${selectedTurma})`}
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className={`text-4xl md:text-5xl font-black tracking-tight ${
                isPositive ? "text-emerald-400" : isNeutral ? "text-slate-300" : "text-rose-400"
              }`}>
                {deltaFormatted}
              </span>
              <span className="text-xs text-indigo-200 font-bold uppercase">Pontos IFL</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-indigo-700/40 flex items-center justify-between text-[11px]">
            <span className="text-indigo-300 font-semibold">Taxa de Avanço Real:</span>
            <span className="text-emerald-400 font-black">{displayTaxaAvanco}% dos alunos</span>
          </div>
        </div>

        {/* Step 2: 1º Simulado Municipal (Consolidado) */}
        <div className="md:col-span-4 bg-gradient-to-br from-blue-900/40 to-slate-800/80 backdrop-blur-sm rounded-2xl p-5 border border-blue-500/40 flex flex-col justify-between">
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
              {isAllTurmas ? "IFL Média Geral da Escola" : `IFL 1º Simulado (${selectedTurma})`}
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-black text-blue-400 tracking-tight">
                {displayIFL_S1}
              </span>
              <span className="text-xs text-blue-200 font-bold uppercase">IFL S1</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-blue-700/40 flex items-center justify-between text-[11px]">
            <span className="text-slate-300 font-semibold">Fluência (% Leitores):</span>
            <span className="text-blue-300 font-black">{displayLeitoresPerc}% (LI + LF)</span>
          </div>
        </div>

      </div>

      {/* Class breakdown footer pill-bar */}
      <div className="relative z-10 bg-slate-950/70 rounded-2xl p-4 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-400" />
            <span>
              Amostra: <strong className="text-white">{displayAvaliados}</strong> de <strong className="text-white">{displayMatriculados}</strong> matriculados ({displayParticipacao}% participação)
            </span>
          </div>
          <div className="hidden sm:block text-slate-600">•</div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>
              Composição das Turmas: {schoolStats.turmas.map((t, idx) => (
                <span key={t.turma} className="inline-flex items-center gap-1 font-bold text-slate-200 ml-1">
                  <span className="text-blue-300">{t.turma}</span>
                  <span className="text-slate-400 text-[10px]">({t.avaliados} al. • IFL {t.iflS1Formatted})</span>
                  {idx < schoolStats.turmas.length - 1 && <span className="text-slate-600">,</span>}
                </span>
              ))}
            </span>
          </div>
        </div>

        <div className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5 shrink-0">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Média Ponderada Real Auditada</span>
        </div>
      </div>
    </div>
  );
};

interface ExpressiveMunicipalCardProps {
  totalMatriculados: number;
  totalAvaliados: number;
  participacaoPerc: number;
  iflEntradaMunicipal: number;
  iflS1Municipal: number;
  deltaMunicipal: number;
  leitoresPerc: number;
  taxaAvancoPerc: number;
  totalEscolas?: number;
  className?: string;
}

export const ExpressiveMunicipalCard: React.FC<ExpressiveMunicipalCardProps> = ({
  totalMatriculados,
  totalAvaliados,
  participacaoPerc,
  iflEntradaMunicipal,
  iflS1Municipal,
  deltaMunicipal,
  leitoresPerc,
  taxaAvancoPerc,
  totalEscolas = 37,
  className = ""
}) => {
  const deltaFormatted = (deltaMunicipal >= 0 ? "+" : "") + deltaMunicipal.toFixed(2);
  const isPositive = deltaMunicipal > 0;

  return (
    <div className={`bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-700/60 relative overflow-hidden ${className}`}>
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -mb-10 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-700/60">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider bg-blue-500/25 text-blue-300 border border-blue-400/30 px-2.5 py-0.5 rounded-full">
              Consolidado Municipal 2026
            </span>
            <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500/25 text-emerald-300 border border-emerald-400/30 px-2.5 py-0.5 rounded-full">
              {totalEscolas} Escolas Municipais
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
            Evolução Geral da Rede de Ensino
          </h3>
          <p className="text-xs text-slate-300 font-medium">
            Avanço do Índice de Fluência Leitora (IFL) da Avaliação de Entrada para o 1º Simulado Municipal
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-800/80 px-4 py-2.5 rounded-2xl border border-slate-700">
          <Activity className="w-5 h-5 text-emerald-400" />
          <div className="text-left">
            <div className="text-[10px] font-bold text-slate-400 uppercase">Crescimento da Rede</div>
            <div className="text-base font-black text-emerald-400">Δ {deltaFormatted} Pontos</div>
          </div>
        </div>
      </div>

      {/* Grid of 3 Main Blocks */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 my-6 items-stretch">
        
        {/* 1. Entrada Rede */}
        <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/70 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
              IFL Entrada Municipal
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
                {iflEntradaMunicipal.toFixed(2)}
              </span>
              <span className="text-xs text-slate-400 font-bold uppercase">IFL Inicial</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-700/50 text-[11px] text-slate-400">
            Diagnóstica Oficial CAEd
          </div>
        </div>

        {/* 2. Delta Rede */}
        <div className="bg-gradient-to-br from-indigo-900/40 to-slate-800/80 backdrop-blur-sm rounded-2xl p-5 border border-indigo-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-indigo-300">
                Evolução Média
              </span>
              <span className="text-[10px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                Salto Positivo
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-black text-emerald-400 tracking-tight">
                {deltaFormatted}
              </span>
              <span className="text-xs text-indigo-200 font-bold uppercase">Pontos IFL</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-indigo-700/40 text-[11px] text-indigo-200 flex justify-between">
            <span>Taxa de Avanço:</span>
            <strong className="text-emerald-400">{taxaAvancoPerc.toFixed(1)}% dos alunos</strong>
          </div>
        </div>

        {/* 3. 1º Simulado Rede */}
        <div className="bg-gradient-to-br from-blue-900/40 to-slate-800/80 backdrop-blur-sm rounded-2xl p-5 border border-blue-500/40 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-blue-300">
              IFL 1º Simulado Municipal
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-black text-blue-400 tracking-tight">
                {iflS1Municipal.toFixed(2)}
              </span>
              <span className="text-xs text-blue-200 font-bold uppercase">IFL Consolidado</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-blue-700/40 text-[11px] text-blue-200 flex justify-between">
            <span>Fluência (% Leitores):</span>
            <strong className="text-blue-300">{leitoresPerc.toFixed(1)}% (LI + LF)</strong>
          </div>
        </div>

      </div>

      <div className="relative z-10 bg-slate-950/70 rounded-2xl p-4 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300 font-medium">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-blue-400" />
          <span>
            Total Avaliado na Rede: <strong className="text-white">{totalAvaliados.toLocaleString('pt-BR')}</strong> de <strong className="text-white">{totalMatriculados.toLocaleString('pt-BR')}</strong> alunos ({participacaoPerc.toFixed(1)}% participação)
          </span>
        </div>
        <div className="text-[11px] font-bold text-slate-400">
          * Dados apurados de todas as 37 escolas municipais no 1º Simulado
        </div>
      </div>
    </div>
  );
};
