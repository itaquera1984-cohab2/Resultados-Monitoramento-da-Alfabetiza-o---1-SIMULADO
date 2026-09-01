/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface StudentRecord {
  id: number;
  numero: number;
  name: string;
  escola: string;
  turma: string;
  entrada?: string;
  s1?: string;
  s1Details?: {
    modo?: string;
    palavras?: number;
    pseudopalavras?: number;
    texto?: number;
  };
  s2?: string;
  saida?: string;
}

export const IFL_WEIGHTS: Record<string, number> = {
  "N1": 0.0,
  "N2": 1.0,
  "N3": 2.5,
  "N4": 4.0,
  "LI": 6.0,
  "LF": 10.0
};

export const LEVEL_RANK: Record<string, number> = {
  "N1": 1,
  "N2": 2,
  "N3": 3,
  "N4": 4,
  "LI": 5,
  "LF": 6
};

export interface TurmaSimuladoStats {
  turma: string;
  matriculados: number;
  avaliados: number;
  naoAvaliados: number;
  participacaoPerc: number;
  n1Count: number;
  n1Perc: number;
  n2Count: number;
  n2Perc: number;
  n3Count: number;
  n3Perc: number;
  n4Count: number;
  n4Perc: number;
  inicianteCount: number;
  iniciantePerc: number;
  fluenteCount: number;
  fluentePerc: number;
  preTotalCount: number;
  preTotalPerc: number;
  iflS1: number;
  iflS1Formatted: string;
  leitoresCount: number;
  leitoresPerc: number;
  avancaramCount: number;
  taxaAvancoPerc: number;
  deltaVsEntrada: number;
  deltaVsEntradaFormatted: string;
}

export interface SchoolSimuladoSummary {
  schoolName: string;
  schoolEntradaOfficialIFL: number;
  totalMatriculados: number;
  totalAvaliados: number;
  totalNaoAvaliados: number;
  participacaoGeralPerc: number;
  n1GeralCount: number;
  n1GeralPerc: number;
  n2GeralCount: number;
  n2GeralPerc: number;
  n3GeralCount: number;
  n3GeralPerc: number;
  n4GeralCount: number;
  n4GeralPerc: number;
  inicianteGeralCount: number;
  inicianteGeralPerc: number;
  fluenteGeralCount: number;
  fluenteGeralPerc: number;
  preTotalGeralCount: number;
  preTotalGeralPerc: number;
  iflS1Geral: number;
  iflS1GeralFormatted: string;
  deltaGeral: number;
  deltaGeralFormatted: string;
  leitoresGeralCount: number;
  leitoresGeralPerc: number;
  avancaramGeralCount: number;
  taxaAvancoGeralPerc: number;
  turmas: TurmaSimuladoStats[];
}

/**
 * Computes official 1º Simulado statistics for a specific school,
 * accurately aggregating all of its classes to form the school's general average.
 */
export function getSchoolSimuladoStats(
  students: StudentRecord[],
  schoolName: string,
  schoolEntradaOfficialIFL: number
): SchoolSimuladoSummary {
  const schoolStudents = students.filter(s => s.escola === schoolName);
  const totalMatriculados = schoolStudents.length;

  const validEvaluated = schoolStudents.filter(
    s => s.s1 && s.s1 !== "NÃO AVALIADO" && IFL_WEIGHTS[s.s1] !== undefined
  );
  const totalAvaliados = validEvaluated.length;
  const totalNaoAvaliados = totalMatriculados - totalAvaliados;

  const n1GeralCount = validEvaluated.filter(s => s.s1 === "N1").length;
  const n2GeralCount = validEvaluated.filter(s => s.s1 === "N2").length;
  const n3GeralCount = validEvaluated.filter(s => s.s1 === "N3").length;
  const n4GeralCount = validEvaluated.filter(s => s.s1 === "N4").length;
  const inicianteGeralCount = validEvaluated.filter(s => s.s1 === "LI").length;
  const fluenteGeralCount = validEvaluated.filter(s => s.s1 === "LF").length;
  const preTotalGeralCount = n1GeralCount + n2GeralCount + n3GeralCount + n4GeralCount;

  const n1GeralPerc = totalAvaliados > 0 ? (n1GeralCount / totalAvaliados) * 100 : 0;
  const n2GeralPerc = totalAvaliados > 0 ? (n2GeralCount / totalAvaliados) * 100 : 0;
  const n3GeralPerc = totalAvaliados > 0 ? (n3GeralCount / totalAvaliados) * 100 : 0;
  const n4GeralPerc = totalAvaliados > 0 ? (n4GeralCount / totalAvaliados) * 100 : 0;
  const inicianteGeralPerc = totalAvaliados > 0 ? (inicianteGeralCount / totalAvaliados) * 100 : 0;
  const fluenteGeralPerc = totalAvaliados > 0 ? (fluenteGeralCount / totalAvaliados) * 100 : 0;
  const preTotalGeralPerc = totalAvaliados > 0 ? (preTotalGeralCount / totalAvaliados) * 100 : 0;

  const sumWeights = validEvaluated.reduce((sum, s) => sum + IFL_WEIGHTS[s.s1!], 0);
  const iflS1Geral = totalAvaliados > 0 ? sumWeights / totalAvaliados : 0;
  const iflS1GeralFormatted = iflS1Geral.toFixed(2);

  const deltaGeral = totalAvaliados > 0 ? iflS1Geral - schoolEntradaOfficialIFL : 0;
  const deltaGeralFormatted = (deltaGeral >= 0 ? "+" : "") + deltaGeral.toFixed(2);

  const leitoresGeralCount = validEvaluated.filter(s => s.s1 === "LI" || s.s1 === "LF").length;
  const leitoresGeralPerc = totalAvaliados > 0 ? (leitoresGeralCount / totalAvaliados) * 100 : 0;

  const avancaramGeralCount = validEvaluated.filter(s => {
    const rankEntrada = s.entrada ? LEVEL_RANK[s.entrada] || 0 : 0;
    const rankS1 = s.s1 ? LEVEL_RANK[s.s1] || 0 : 0;
    return rankEntrada > 0 && rankS1 > rankEntrada;
  }).length;
  const taxaAvancoGeralPerc = totalAvaliados > 0 ? (avancaramGeralCount / totalAvaliados) * 100 : 0;

  // Group by Turma
  const turmasMap = new Map<string, StudentRecord[]>();
  schoolStudents.forEach(s => {
    const t = s.turma || "Turma Única";
    if (!turmasMap.has(t)) turmasMap.set(t, []);
    turmasMap.get(t)!.push(s);
  });

  const turmas: TurmaSimuladoStats[] = Array.from(turmasMap.entries())
    .map(([turmaName, turmaStudents]) => {
      const matriculados = turmaStudents.length;
      const evalTurma = turmaStudents.filter(
        s => s.s1 && s.s1 !== "NÃO AVALIADO" && IFL_WEIGHTS[s.s1] !== undefined
      );
      const avaliados = evalTurma.length;
      const naoAvaliados = matriculados - avaliados;
      const participacaoPerc = matriculados > 0 ? (avaliados / matriculados) * 100 : 0;

      const n1Count = evalTurma.filter(s => s.s1 === "N1").length;
      const n2Count = evalTurma.filter(s => s.s1 === "N2").length;
      const n3Count = evalTurma.filter(s => s.s1 === "N3").length;
      const n4Count = evalTurma.filter(s => s.s1 === "N4").length;
      const inicianteCount = evalTurma.filter(s => s.s1 === "LI").length;
      const fluenteCount = evalTurma.filter(s => s.s1 === "LF").length;
      const preTotalCount = n1Count + n2Count + n3Count + n4Count;

      const n1Perc = avaliados > 0 ? (n1Count / avaliados) * 100 : 0;
      const n2Perc = avaliados > 0 ? (n2Count / avaliados) * 100 : 0;
      const n3Perc = avaliados > 0 ? (n3Count / avaliados) * 100 : 0;
      const n4Perc = avaliados > 0 ? (n4Count / avaliados) * 100 : 0;
      const iniciantePerc = avaliados > 0 ? (inicianteCount / avaliados) * 100 : 0;
      const fluentePerc = avaliados > 0 ? (fluenteCount / avaliados) * 100 : 0;
      const preTotalPerc = avaliados > 0 ? (preTotalCount / avaliados) * 100 : 0;

      const sumW = evalTurma.reduce((sum, s) => sum + IFL_WEIGHTS[s.s1!], 0);
      const iflS1 = avaliados > 0 ? sumW / avaliados : 0;
      const iflS1Formatted = iflS1.toFixed(2);

      const deltaVsEntrada = avaliados > 0 ? iflS1 - schoolEntradaOfficialIFL : 0;
      const deltaVsEntradaFormatted = (deltaVsEntrada >= 0 ? "+" : "") + deltaVsEntrada.toFixed(2);

      const leitoresCount = evalTurma.filter(s => s.s1 === "LI" || s.s1 === "LF").length;
      const leitoresPerc = avaliados > 0 ? (leitoresCount / avaliados) * 100 : 0;

      const avancaramCount = evalTurma.filter(s => {
        const rankEntrada = s.entrada ? LEVEL_RANK[s.entrada] || 0 : 0;
        const rankS1 = s.s1 ? LEVEL_RANK[s.s1] || 0 : 0;
        return rankEntrada > 0 && rankS1 > rankEntrada;
      }).length;
      const taxaAvancoPerc = avaliados > 0 ? (avancaramCount / avaliados) * 100 : 0;

      return {
        turma: turmaName,
        matriculados,
        avaliados,
        naoAvaliados,
        participacaoPerc,
        n1Count,
        n1Perc,
        n2Count,
        n2Perc,
        n3Count,
        n3Perc,
        n4Count,
        n4Perc,
        inicianteCount,
        iniciantePerc,
        fluenteCount,
        fluentePerc,
        preTotalCount,
        preTotalPerc,
        iflS1,
        iflS1Formatted,
        leitoresCount,
        leitoresPerc,
        avancaramCount,
        taxaAvancoPerc,
        deltaVsEntrada,
        deltaVsEntradaFormatted
      };
    })
    .sort((a, b) => a.turma.localeCompare(b.turma));

  return {
    schoolName,
    schoolEntradaOfficialIFL,
    totalMatriculados,
    totalAvaliados,
    totalNaoAvaliados,
    participacaoGeralPerc: totalMatriculados > 0 ? (totalAvaliados / totalMatriculados) * 100 : 0,
    n1GeralCount,
    n1GeralPerc,
    n2GeralCount,
    n2GeralPerc,
    n3GeralCount,
    n3GeralPerc,
    n4GeralCount,
    n4GeralPerc,
    inicianteGeralCount,
    inicianteGeralPerc,
    fluenteGeralCount,
    fluenteGeralPerc,
    preTotalGeralCount,
    preTotalGeralPerc,
    iflS1Geral,
    iflS1GeralFormatted,
    deltaGeral,
    deltaGeralFormatted,
    leitoresGeralCount,
    leitoresGeralPerc,
    avancaramGeralCount,
    taxaAvancoGeralPerc,
    turmas
  };
}

/**
 * Computes official 1º Simulado municipal statistics across all schools.
 */
export function getMunicipalSimuladoStats(
  students: StudentRecord[],
  municipalEntradaOfficialIFL: number
) {
  const totalMatriculados = students.length;
  const validEvaluated = students.filter(
    s => s.s1 && s.s1 !== "NÃO AVALIADO" && IFL_WEIGHTS[s.s1] !== undefined
  );
  const totalAvaliados = validEvaluated.length;
  const totalNaoAvaliados = totalMatriculados - totalAvaliados;

  const n1Count = validEvaluated.filter(s => s.s1 === "N1").length;
  const n2Count = validEvaluated.filter(s => s.s1 === "N2").length;
  const n3Count = validEvaluated.filter(s => s.s1 === "N3").length;
  const n4Count = validEvaluated.filter(s => s.s1 === "N4").length;
  const inicianteCount = validEvaluated.filter(s => s.s1 === "LI").length;
  const fluenteCount = validEvaluated.filter(s => s.s1 === "LF").length;
  const preTotalCount = n1Count + n2Count + n3Count + n4Count;

  const n1Perc = totalAvaliados > 0 ? (n1Count / totalAvaliados) * 100 : 0;
  const n2Perc = totalAvaliados > 0 ? (n2Count / totalAvaliados) * 100 : 0;
  const n3Perc = totalAvaliados > 0 ? (n3Count / totalAvaliados) * 100 : 0;
  const n4Perc = totalAvaliados > 0 ? (n4Count / totalAvaliados) * 100 : 0;
  const iniciantePerc = totalAvaliados > 0 ? (inicianteCount / totalAvaliados) * 100 : 0;
  const fluentePerc = totalAvaliados > 0 ? (fluenteCount / totalAvaliados) * 100 : 0;
  const preTotalPerc = totalAvaliados > 0 ? (preTotalCount / totalAvaliados) * 100 : 0;

  const sumWeights = validEvaluated.reduce((sum, s) => sum + IFL_WEIGHTS[s.s1!], 0);
  const iflS1Municipal = totalAvaliados > 0 ? sumWeights / totalAvaliados : 0;
  const iflS1MunicipalFormatted = iflS1Municipal.toFixed(2);

  const deltaMunicipal = iflS1Municipal - municipalEntradaOfficialIFL;
  const deltaMunicipalFormatted = (deltaMunicipal >= 0 ? "+" : "") + deltaMunicipal.toFixed(2);

  const leitoresCount = validEvaluated.filter(s => s.s1 === "LI" || s.s1 === "LF").length;
  const leitoresPerc = totalAvaliados > 0 ? (leitoresCount / totalAvaliados) * 100 : 0;

  const avancaramCount = validEvaluated.filter(s => {
    const rankEntrada = s.entrada ? LEVEL_RANK[s.entrada] || 0 : 0;
    const rankS1 = s.s1 ? LEVEL_RANK[s.s1] || 0 : 0;
    return rankEntrada > 0 && rankS1 > rankEntrada;
  }).length;
  const taxaAvancoPerc = totalAvaliados > 0 ? (avancaramCount / totalAvaliados) * 100 : 0;

  return {
    totalMatriculados,
    totalAvaliados,
    totalNaoAvaliados,
    participacaoPerc: totalMatriculados > 0 ? (totalAvaliados / totalMatriculados) * 100 : 0,
    n1Count,
    n1Perc,
    n2Count,
    n2Perc,
    n3Count,
    n3Perc,
    n4Count,
    n4Perc,
    inicianteCount,
    iniciantePerc,
    fluenteCount,
    fluentePerc,
    preTotalCount,
    preTotalPerc,
    iflEntradaMunicipal: municipalEntradaOfficialIFL,
    iflEntradaMunicipalFormatted: municipalEntradaOfficialIFL.toFixed(2),
    iflS1Municipal,
    iflS1MunicipalFormatted,
    deltaMunicipal,
    deltaMunicipalFormatted,
    leitoresCount,
    leitoresPerc,
    avancaramCount,
    taxaAvancoPerc
  };
}

export interface TurmaEntradaStats {
  turma: string;
  matriculados: number;
  avaliados: number;
  naoAvaliados: number;
  participacaoPerc: number;
  n1Count: number;
  n1Perc: number;
  n2Count: number;
  n2Perc: number;
  n3Count: number;
  n3Perc: number;
  n4Count: number;
  n4Perc: number;
  inicianteCount: number;
  iniciantePerc: number;
  fluenteCount: number;
  fluentePerc: number;
  preTotalCount: number;
  preTotalPerc: number;
  iflEntrada: number;
  iflEntradaFormatted: string;
  leitoresCount: number;
  leitoresPerc: number;
}

export interface SchoolEntradaSummary {
  schoolName: string;
  totalMatriculados: number;
  totalAvaliados: number;
  totalNaoAvaliados: number;
  participacaoGeralPerc: number;
  n1GeralCount: number;
  n1GeralPerc: number;
  n2GeralCount: number;
  n2GeralPerc: number;
  n3GeralCount: number;
  n3GeralPerc: number;
  n4GeralCount: number;
  n4GeralPerc: number;
  inicianteGeralCount: number;
  inicianteGeralPerc: number;
  fluenteGeralCount: number;
  fluenteGeralPerc: number;
  preTotalGeralCount: number;
  preTotalGeralPerc: number;
  iflEntradaGeral: number;
  iflEntradaGeralFormatted: string;
  leitoresGeralCount: number;
  leitoresGeralPerc: number;
  turmas: TurmaEntradaStats[];
}

/**
 * Computes official Entrada (Diagnóstica) statistics for a specific school and its individual classes.
 */
export function getSchoolEntradaStats(
  students: StudentRecord[],
  schoolName: string
): SchoolEntradaSummary {
  const schoolStudents = students.filter(s => s.escola === schoolName);
  const totalMatriculados = schoolStudents.length;

  const validEvaluated = schoolStudents.filter(
    s => s.entrada && s.entrada !== "NÃO AVALIADO" && IFL_WEIGHTS[s.entrada] !== undefined
  );
  const totalAvaliados = validEvaluated.length;
  const totalNaoAvaliados = totalMatriculados - totalAvaliados;

  const n1GeralCount = validEvaluated.filter(s => s.entrada === "N1").length;
  const n2GeralCount = validEvaluated.filter(s => s.entrada === "N2").length;
  const n3GeralCount = validEvaluated.filter(s => s.entrada === "N3").length;
  const n4GeralCount = validEvaluated.filter(s => s.entrada === "N4").length;
  const inicianteGeralCount = validEvaluated.filter(s => s.entrada === "LI").length;
  const fluenteGeralCount = validEvaluated.filter(s => s.entrada === "LF").length;
  const preTotalGeralCount = n1GeralCount + n2GeralCount + n3GeralCount + n4GeralCount;

  const n1GeralPerc = totalAvaliados > 0 ? (n1GeralCount / totalAvaliados) * 100 : 0;
  const n2GeralPerc = totalAvaliados > 0 ? (n2GeralCount / totalAvaliados) * 100 : 0;
  const n3GeralPerc = totalAvaliados > 0 ? (n3GeralCount / totalAvaliados) * 100 : 0;
  const n4GeralPerc = totalAvaliados > 0 ? (n4GeralCount / totalAvaliados) * 100 : 0;
  const inicianteGeralPerc = totalAvaliados > 0 ? (inicianteGeralCount / totalAvaliados) * 100 : 0;
  const fluenteGeralPerc = totalAvaliados > 0 ? (fluenteGeralCount / totalAvaliados) * 100 : 0;
  const preTotalGeralPerc = totalAvaliados > 0 ? (preTotalGeralCount / totalAvaliados) * 100 : 0;

  const sumWeights = validEvaluated.reduce((sum, s) => sum + IFL_WEIGHTS[s.entrada!], 0);
  const iflEntradaGeral = totalAvaliados > 0 ? sumWeights / totalAvaliados : 0;
  const iflEntradaGeralFormatted = iflEntradaGeral.toFixed(2);

  const leitoresGeralCount = validEvaluated.filter(s => s.entrada === "LI" || s.entrada === "LF").length;
  const leitoresGeralPerc = totalAvaliados > 0 ? (leitoresGeralCount / totalAvaliados) * 100 : 0;

  // Group by Turma
  const turmasMap = new Map<string, StudentRecord[]>();
  schoolStudents.forEach(s => {
    const t = s.turma || "Turma Única";
    if (!turmasMap.has(t)) turmasMap.set(t, []);
    turmasMap.get(t)!.push(s);
  });

  const turmas: TurmaEntradaStats[] = Array.from(turmasMap.entries())
    .map(([turmaName, turmaStudents]) => {
      const matriculados = turmaStudents.length;
      const evalTurma = turmaStudents.filter(
        s => s.entrada && s.entrada !== "NÃO AVALIADO" && IFL_WEIGHTS[s.entrada] !== undefined
      );
      const avaliados = evalTurma.length;
      const naoAvaliados = matriculados - avaliados;
      const participacaoPerc = matriculados > 0 ? (avaliados / matriculados) * 100 : 0;

      const n1Count = evalTurma.filter(s => s.entrada === "N1").length;
      const n2Count = evalTurma.filter(s => s.entrada === "N2").length;
      const n3Count = evalTurma.filter(s => s.entrada === "N3").length;
      const n4Count = evalTurma.filter(s => s.entrada === "N4").length;
      const inicianteCount = evalTurma.filter(s => s.entrada === "LI").length;
      const fluenteCount = evalTurma.filter(s => s.entrada === "LF").length;
      const preTotalCount = n1Count + n2Count + n3Count + n4Count;

      const n1Perc = avaliados > 0 ? (n1Count / avaliados) * 100 : 0;
      const n2Perc = avaliados > 0 ? (n2Count / avaliados) * 100 : 0;
      const n3Perc = avaliados > 0 ? (n3Count / avaliados) * 100 : 0;
      const n4Perc = avaliados > 0 ? (n4Count / avaliados) * 100 : 0;
      const iniciantePerc = avaliados > 0 ? (inicianteCount / avaliados) * 100 : 0;
      const fluentePerc = avaliados > 0 ? (fluenteCount / avaliados) * 100 : 0;
      const preTotalPerc = avaliados > 0 ? (preTotalCount / avaliados) * 100 : 0;

      const sumW = evalTurma.reduce((sum, s) => sum + IFL_WEIGHTS[s.entrada!], 0);
      const iflEntrada = avaliados > 0 ? sumW / avaliados : 0;
      const iflEntradaFormatted = iflEntrada.toFixed(2);

      const leitoresCount = evalTurma.filter(s => s.entrada === "LI" || s.entrada === "LF").length;
      const leitoresPerc = avaliados > 0 ? (leitoresCount / avaliados) * 100 : 0;

      return {
        turma: turmaName,
        matriculados,
        avaliados,
        naoAvaliados,
        participacaoPerc,
        n1Count,
        n1Perc,
        n2Count,
        n2Perc,
        n3Count,
        n3Perc,
        n4Count,
        n4Perc,
        inicianteCount,
        iniciantePerc,
        fluenteCount,
        fluentePerc,
        preTotalCount,
        preTotalPerc,
        iflEntrada,
        iflEntradaFormatted,
        leitoresCount,
        leitoresPerc
      };
    })
    .sort((a, b) => a.turma.localeCompare(b.turma, undefined, { numeric: true }));

  return {
    schoolName,
    totalMatriculados,
    totalAvaliados,
    totalNaoAvaliados,
    participacaoGeralPerc: totalMatriculados > 0 ? (totalAvaliados / totalMatriculados) * 100 : 0,
    n1GeralCount,
    n1GeralPerc,
    n2GeralCount,
    n2GeralPerc,
    n3GeralCount,
    n3GeralPerc,
    n4GeralCount,
    n4GeralPerc,
    inicianteGeralCount,
    inicianteGeralPerc,
    fluenteGeralCount,
    fluenteGeralPerc,
    preTotalGeralCount,
    preTotalGeralPerc,
    iflEntradaGeral,
    iflEntradaGeralFormatted,
    leitoresGeralCount,
    leitoresGeralPerc,
    turmas
  };
}
