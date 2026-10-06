import fs from 'node:fs';
import path from 'node:path';
import { FIRST_YEAR_STUDENTS } from '../src/data_simulado1ano';
import { MOCK_STUDENTS_EVOLUTION } from '../src/constants';
import { THIRD_YEAR_STUDENTS } from '../src/data_simulado3ano';

type ReportRecord = { name: string; escola: string; polo: string; turma: string; situacao: string };
type RosterStudent = { name: string; escola: string; turma: string };

const inputPath = process.argv[2];
const outputPath = process.argv[3] ?? path.resolve('src/specialEducationStudents.ts');
if (!inputPath) throw new Error('Informe o JSON extraído do relatório DEF/HD.');

const normalize = (value = '') => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().replace(/[^A-Z0-9]/g, '');
const gradeFromClass = (value: string) => Number(normalize(value).match(/^([123])/)?.[1] ?? 0);

const reviewedAliases = new Map<string, string>([
  ['MANUELLA VITÓRIA DE CASTRO MARINHO', 'MANUELLA VITORIA SOUZA DE CASTRO MARINHO'],
  ['MARIAH GUADALUPE APARECIDO DIAS DA SILVA', 'MARIAH GUADALUPE APARECIDO DIA DA SILVA'],
  ['HEITOR MIKAEL DE PAULA TUANO', 'HEYTOR MIKAEL DE PAULA TUANO'],
  ['JOÃO LUCAS MARTINS GARCIA', 'JOAO LUCAS MARTINS GARCIA CLARO'],
  ['MICAELA DE OLIVEIRA MENEZES', 'MICAELLA DE OLIVEIRA MENEZES'],
].map(([source, roster]) => [normalize(source), normalize(roster)]));

const rosters: Record<number, ReadonlyArray<RosterStudent>> = {
  1: FIRST_YEAR_STUDENTS,
  2: MOCK_STUDENTS_EVOLUTION.map(student => ({ name: student.name, escola: student.escola ?? '', turma: student.turma ?? '' })),
  3: THIRD_YEAR_STUDENTS,
};

const report: ReportRecord[] = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
const targetRecords = report.filter(record => [1, 2, 3].includes(gradeFromClass(record.turma)));
const matched: Array<RosterStudent & { grade: number; documentStatus: 'DEF' | 'HD'; reportName: string }> = [];
const unmatched: ReportRecord[] = [];

for (const record of targetRecords) {
  const grade = gradeFromClass(record.turma);
  const expectedName = reviewedAliases.get(normalize(record.name)) ?? normalize(record.name);
  const candidates = rosters[grade].filter(student => normalize(student.name) === expectedName);
  if (candidates.length !== 1) {
    unmatched.push(record);
    continue;
  }
  const student = candidates[0];
  matched.push({
    name: student.name,
    escola: student.escola,
    turma: student.turma,
    grade,
    documentStatus: normalize(record.situacao).includes('HIPOTESEDIAGNOSTICAHD') ? 'HD' : 'DEF',
    reportName: record.name,
  });
}

if (targetRecords.length !== 25 || matched.length !== 22 || unmatched.length !== 3) {
  throw new Error(`Cruzamento inesperado: alvo=${targetRecords.length}, confirmados=${matched.length}, pendentes=${unmatched.length}.`);
}

const generated = `// Gerado a partir do relatório atualizado de demanda de atendimento especializado SED 2026.\n`
  + `// Contém somente correspondências confirmadas do 1º, 2º e 3º anos; DEF/HD são preservados para auditoria.\n`
  + `export const SPECIAL_EDUCATION_REPORT_STUDENTS: ReadonlyArray<{ name: string; escola: string; turma: string; grade: number; documentStatus: 'DEF' | 'HD'; reportName: string }> = ${JSON.stringify(matched, null, 2)};\n`;

fs.writeFileSync(outputPath, generated, 'utf8');
console.log(JSON.stringify({ reportTotal: report.length, targetGrades: targetRecords.length, matched: matched.length, unmatched }, null, 2));
