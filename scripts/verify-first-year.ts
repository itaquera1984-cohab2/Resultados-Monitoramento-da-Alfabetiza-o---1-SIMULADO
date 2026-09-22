import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import {
  FIRST_YEAR_CLASSES,
  FIRST_YEAR_IMPORT_SUMMARY,
  FIRST_YEAR_STUDENTS,
} from '../src/data_simulado1ano.ts';
import {
  THIRD_YEAR_CLASSES,
  THIRD_YEAR_IMPORT_SUMMARY,
  THIRD_YEAR_STUDENTS,
} from '../src/data_simulado3ano.ts';
import { classifyReadingSimulado } from '../src/constants.ts';
import { SIMULADO1_SCHOOLS_RAW } from '../src/data_simulado1.ts';

const protectedSecondYearFiles: Record<string, string> = {
  'src/constants.ts': '330e81263772bb0d24086a4ece4f4f3de8d069c3700c5aa69525430c2081e2e4',
  'src/data_simulado1.ts': 'b7110b2b45e9a0dfe1c4fb0ef81948b441750bb72dbdb75c425fc76aec67dc68',
  'src/dadosTurmasCaed.ts': '8dc70736334ea888104481b4b6b87b41ed6846904ac0634568d1235207f6107c',
};

for (const [path, expectedHash] of Object.entries(protectedSecondYearFiles)) {
  const actualHash = createHash('sha256').update(readFileSync(path)).digest('hex');
  assert.equal(actualHash, expectedHash, `A base protegida do 2º ano foi alterada: ${path}`);
}

const abdias = SIMULADO1_SCHOOLS_RAW.find(
  (school) => school.name === 'E.M. ABDIAS JUNIOR SANTIAGO E SILVA',
);
assert.ok(abdias, 'Escola Abdias não encontrada no consolidado do 2º ano');
assert.deepEqual(abdias.classes.map((item) => item.turma), ['2º ANO A', '2º ANO B', '2º ANO C']);
const abdiasSecondA = abdias.classes[0];
assert.equal(abdiasSecondA.prev, 18);
assert.equal(abdiasSecondA.avaliados, 14);
assert.equal(abdiasSecondA.n3Count, 2);
assert.equal(abdiasSecondA.inicianteCount, 8);
assert.equal(abdiasSecondA.fluenteCount, 4);
assert.equal(abdiasSecondA.ifl, '6.64');
assert.equal(abdias.iflGeralFormatted, '5.65');

assert.equal(FIRST_YEAR_IMPORT_SUMMARY.sourcePdfCount, 100);
assert.equal(FIRST_YEAR_IMPORT_SUMMARY.classCount, 100);
assert.equal(FIRST_YEAR_CLASSES.length, 100);
assert.equal(FIRST_YEAR_IMPORT_SUMMARY.studentCount, FIRST_YEAR_STUDENTS.length);

const evaluated = FIRST_YEAR_STUDENTS.filter((student) => student.s1 !== 'NÃO AVALIADO');
assert.equal(evaluated.length, FIRST_YEAR_IMPORT_SUMMARY.evaluatedCount);
assert.equal(
  FIRST_YEAR_STUDENTS.length - evaluated.length,
  FIRST_YEAR_IMPORT_SUMMARY.notEvaluatedCount,
);
assert.equal(
  Object.values(FIRST_YEAR_IMPORT_SUMMARY.levels).reduce((sum, count) => sum + count, 0),
  evaluated.length,
);
assert.equal(new Set(FIRST_YEAR_STUDENTS.map((student) => student.id)).size, FIRST_YEAR_STUDENTS.length);

for (const student of evaluated) {
  const details = student.s1Details;
  if (details.palavras !== null && details.pseudopalavras !== null && details.texto !== null) {
    assert.equal(classifyReadingSimulado({
      modo: details.modo,
      palavras: details.palavras,
      pseudopalavras: details.pseudopalavras,
      texto: details.texto,
    }), student.s1, `${student.escola} / ${student.turma} / ${student.name}`);
  } else if (details.modo === 'Não leu') {
    assert.equal(student.s1, 'N1');
  } else if (details.modo === 'Soletrou') {
    assert.equal(student.s1, 'N2');
  } else if (details.modo === 'Silabou') {
    assert.equal(student.s1, 'N3');
  }
  assert.equal('entrada' in student, false);
}

assert.equal(THIRD_YEAR_IMPORT_SUMMARY.sourcePdfCount, 91);
assert.equal(THIRD_YEAR_IMPORT_SUMMARY.classCount, 91);
assert.equal(THIRD_YEAR_CLASSES.length, 91);
assert.equal(THIRD_YEAR_IMPORT_SUMMARY.studentCount, THIRD_YEAR_STUDENTS.length);

const thirdYearEvaluated = THIRD_YEAR_STUDENTS.filter((student) => student.s1 !== 'NÃO AVALIADO');
assert.equal(thirdYearEvaluated.length, THIRD_YEAR_IMPORT_SUMMARY.evaluatedCount);
assert.equal(
  Object.values(THIRD_YEAR_IMPORT_SUMMARY.levels).reduce((sum, count) => sum + count, 0),
  thirdYearEvaluated.length,
);

for (const student of thirdYearEvaluated) {
  const details = student.s1Details;
  if (details.palavras !== null && details.pseudopalavras !== null && details.texto !== null) {
    assert.equal(classifyReadingSimulado({
      modo: details.modo,
      palavras: details.palavras,
      pseudopalavras: details.pseudopalavras,
      texto: details.texto,
    }), student.s1, `${student.escola} / ${student.turma} / ${student.name}`);
  } else if (details.modo === 'Não leu') {
    assert.equal(student.s1, 'N1');
  } else if (details.modo === 'Soletrou') {
    assert.equal(student.s1, 'N2');
  } else if (details.modo === 'Silabou') {
    assert.equal(student.s1, 'N3');
  } else {
    assert.fail(`Registro do 3º ano sem dados suficientes: ${student.escola} / ${student.turma} / ${student.name}`);
  }
  assert.equal('entrada' in student, false);
}

console.log(JSON.stringify({
  pdfs: FIRST_YEAR_IMPORT_SUMMARY.sourcePdfCount,
  turmas: FIRST_YEAR_IMPORT_SUMMARY.classCount,
  escolas: FIRST_YEAR_IMPORT_SUMMARY.schoolCount,
  registros: FIRST_YEAR_STUDENTS.length,
  avaliados: evaluated.length,
  semAvaliacao: FIRST_YEAR_IMPORT_SUMMARY.notEvaluatedCount,
  niveis: FIRST_YEAR_IMPORT_SUMMARY.levels,
  terceiroAno: {
    pdfs: THIRD_YEAR_IMPORT_SUMMARY.sourcePdfCount,
    turmas: THIRD_YEAR_IMPORT_SUMMARY.classCount,
    escolas: THIRD_YEAR_IMPORT_SUMMARY.schoolCount,
    registros: THIRD_YEAR_STUDENTS.length,
    avaliados: thirdYearEvaluated.length,
    niveis: THIRD_YEAR_IMPORT_SUMMARY.levels,
  },
  segundoAnoProtegido: Object.keys(protectedSecondYearFiles),
}, null, 2));
