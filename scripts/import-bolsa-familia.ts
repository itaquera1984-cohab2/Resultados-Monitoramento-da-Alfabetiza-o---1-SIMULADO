import fs from 'node:fs';
import path from 'node:path';
import { MOCK_STUDENTS_EVOLUTION } from '../src/constants';

const sourcePath = process.argv[2];
const outputPath = process.argv[3] ?? path.resolve('src/bolsaFamiliaStudents.ts');

if (!sourcePath) {
  throw new Error('Informe o caminho do CSV do Bolsa Família.');
}

const normalize = (value = '') => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toUpperCase()
  .replace(/[^A-Z0-9]/g, '');

const lines = fs.readFileSync(sourcePath, 'utf8')
  .replace(/^\uFEFF/, '')
  .split(/\r?\n/)
  .filter(Boolean);

const headerIndex = lines.findIndex(line => line.startsWith('UF;NIS;Nome do Aluno;'));
if (headerIndex < 0) throw new Error('Cabeçalho esperado não encontrado no CSV.');

const sourceNames = new Set(
  lines.slice(headerIndex + 1)
    .map(line => line.split(';'))
    .filter(columns => normalize(columns[3]) === 'ALUNOATIVO' && normalize(columns[6]) === 'MUNICIPAL')
    .map(columns => normalize(columns[2]))
    .filter(Boolean),
);

const rosterNames = new Map<string, number>();
for (const student of MOCK_STUDENTS_EVOLUTION) {
  const normalizedName = normalize(student.name);
  rosterNames.set(normalizedName, (rosterNames.get(normalizedName) ?? 0) + 1);
}

const ambiguousNames = [...rosterNames]
  .filter(([name, count]) => sourceNames.has(name) && count > 1)
  .map(([name]) => name);
if (ambiguousNames.length) {
  throw new Error(`Há ${ambiguousNames.length} nomes homônimos no cadastro atual; faça conferência manual antes de importar.`);
}

const matchedStudents = MOCK_STUDENTS_EVOLUTION
  .filter(student => sourceNames.has(normalize(student.name)))
  .map(student => ({ name: student.name, escola: student.escola ?? '', turma: student.turma ?? '' }))
  .sort((a, b) => a.escola.localeCompare(b.escola, 'pt-BR') || a.turma.localeCompare(b.turma, 'pt-BR') || a.name.localeCompare(b.name, 'pt-BR'));

const generated = `// Gerado a partir da relação municipal de estudantes ativos beneficiários do Bolsa Família.\n`
  + `// O arquivo não armazena NIS nem outros dados do benefício.\n`
  + `export const BOLSA_FAMILIA_STUDENTS: ReadonlyArray<{ name: string; escola: string; turma: string }> = ${JSON.stringify(matchedStudents, null, 2)};\n\n`
  + `const normalize = (value: string) => value.normalize('NFD').replace(/[\\u0300-\\u036f]/g, '').toUpperCase().replace(/[^A-Z0-9]/g, '');\n`
  + `const key = (student: { name: string; escola: string; turma: string }) => [student.escola, student.turma, student.name].map(normalize).join('|');\n`
  + `const bolsaFamiliaKeys = new Set(BOLSA_FAMILIA_STUDENTS.map(key));\n\n`
  + `export function isBolsaFamiliaStudent(student: { name: string; escola: string; turma: string }): boolean {\n`
  + `  return bolsaFamiliaKeys.has(key(student));\n`
  + `}\n`;

fs.writeFileSync(outputPath, generated, 'utf8');
console.log(JSON.stringify({ sourceMunicipalNames: sourceNames.size, matchedStudents: matchedStudents.length, outputPath }, null, 2));
