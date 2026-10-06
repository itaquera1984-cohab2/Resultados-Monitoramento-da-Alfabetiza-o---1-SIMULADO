import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MOCK_STUDENTS_EVOLUTION } from '../src/constants';
import { FIRST_YEAR_STUDENTS } from '../src/data_simulado1ano';
import { THIRD_YEAR_STUDENTS } from '../src/data_simulado3ano';
import { NEE_STUDENTS, isNeeStudent, getNeeInterventionStats } from '../src/neeStudents';
import { SPECIAL_EDUCATION_REPORT_STUDENTS } from '../src/specialEducationStudents';
import { BOLSA_FAMILIA_STUDENTS, isBolsaFamiliaStudent } from '../src/bolsaFamiliaStudents';
import { NeeBadge } from '../src/components/NeeBadge';
import { NeeInterventionCard } from '../src/components/NeeInterventionCard';
import { StudentBadges } from '../src/components/StudentBadges';
import { buildVulnerabilityClassReport, calculateBolsaFamiliaClassStats } from '../src/components/IntervencaoPrioritariaTab';

const students = MOCK_STUDENTS_EVOLUTION.map(student => ({ ...student, escola: student.escola ?? '', turma: student.turma ?? '' }));
assert.equal(NEE_STUDENTS.length, 74);
assert.equal(students.filter(isNeeStudent).length, 79);
for (const row of NEE_STUDENTS) {
  assert.equal(students.filter(s => s.name === row.name && s.escola === row.escola && s.turma === row.turma).length, 1);
  assert.equal(isNeeStudent({ ...row, turma: 'OUTRA TURMA' }), false);
  assert.equal(isNeeStudent({ ...row, escola: 'OUTRA ESCOLA' }), false);
}
const sample = NEE_STUDENTS[0];
assert.equal(isNeeStudent({ ...sample, name: sample.name.toLowerCase() }), true);
assert.equal(getNeeInterventionStats([]).percentage, 0);
assert.deepEqual(getNeeInterventionStats([
  { ...sample, s1: 'N1' },
  { ...sample, name: 'SEM IDENTIFICACAO', s1: 'N2' },
  { ...sample, s1: 'LF' },
]), { total: 2, nee: 1, percentage: 50, n1: 1, n2: 0 });
assert.match(renderToStaticMarkup(React.createElement(NeeBadge, { student: sample })), /NEE/);
assert.equal(renderToStaticMarkup(React.createElement(NeeBadge, { student: { ...sample, name: 'SEM IDENTIFICACAO' } })), '');
assert.match(renderToStaticMarkup(React.createElement(NeeInterventionCard, { students })), /dos alunos em N1 \+ N2/);
assert.equal(SPECIAL_EDUCATION_REPORT_STUDENTS.length, 22);
assert.deepEqual(
  Object.fromEntries([1, 2, 3].map(grade => [grade, SPECIAL_EDUCATION_REPORT_STUDENTS.filter(student => student.grade === grade).length])),
  { 1: 9, 2: 7, 3: 6 },
);
assert.deepEqual(
  Object.fromEntries(['DEF', 'HD'].map(status => [status, SPECIAL_EDUCATION_REPORT_STUDENTS.filter(student => student.documentStatus === status).length])),
  { DEF: 10, HD: 12 },
);
const allGradeStudents = [...FIRST_YEAR_STUDENTS, ...students, ...THIRD_YEAR_STUDENTS];
assert.equal(allGradeStudents.filter(isNeeStudent).length, 94);
for (const row of SPECIAL_EDUCATION_REPORT_STUDENTS) {
  const roster = row.grade === 1 ? FIRST_YEAR_STUDENTS : row.grade === 2 ? students : THIRD_YEAR_STUDENTS;
  assert.equal(roster.filter(student => student.name === row.name && student.escola === row.escola && student.turma === row.turma).length, 1);
  assert.equal(isNeeStudent(row), true);
}
assert.equal(BOLSA_FAMILIA_STUDENTS.length, 741);
assert.equal(students.filter(isBolsaFamiliaStudent).length, 741);
for (const row of BOLSA_FAMILIA_STUDENTS) {
  assert.equal(students.filter(s => s.name === row.name && s.escola === row.escola && s.turma === row.turma).length, 1);
}
const neeAndBolsaFamilia = students.filter(student => isNeeStudent(student) && isBolsaFamiliaStudent(student));
assert.equal(neeAndBolsaFamilia.length, 23);
assert.match(renderToStaticMarkup(React.createElement(StudentBadges, { student: BOLSA_FAMILIA_STUDENTS.find(student => !isNeeStudent(student))! })), />BF</);
assert.match(renderToStaticMarkup(React.createElement(StudentBadges, { student: neeAndBolsaFamilia[0] })), />BF<.*>NEE</);
assert.equal(renderToStaticMarkup(React.createElement(StudentBadges, { student: { name: 'SEM IDENTIFICACAO', escola: '', turma: '' } })), '');
const nonBolsaFamiliaStudents = students.filter(student => !isBolsaFamiliaStudent(student));
assert.deepEqual(
  calculateBolsaFamiliaClassStats([...BOLSA_FAMILIA_STUDENTS.slice(0, 3), ...nonBolsaFamiliaStudents.slice(0, 7)]),
  { total: 10, bolsaFamiliaCount: 3, percentage: 30, highVulnerability: false },
);
assert.deepEqual(
  calculateBolsaFamiliaClassStats([...BOLSA_FAMILIA_STUDENTS.slice(0, 4), ...nonBolsaFamiliaStudents.slice(0, 6)]),
  { total: 10, bolsaFamiliaCount: 4, percentage: 40, highVulnerability: true },
);
const vulnerabilityReport = buildVulnerabilityClassReport(students);
assert.equal(vulnerabilityReport.length, 63);
assert.equal(new Set(vulnerabilityReport.map(row => row.escola)).size, 33);
assert.equal(vulnerabilityReport.reduce((sum, row) => sum + row.total, 0), 1354);
assert.equal(vulnerabilityReport.reduce((sum, row) => sum + row.bolsaFamiliaCount, 0), 566);
assert.equal(vulnerabilityReport.every(row => row.percentage > 30), true);
for (const path of ['src/constants.ts', 'src/data_simulado1.ts', 'src/dadosTurmasCaed.ts']) {
  const baseline = execFileSync('git', ['show', `f797caf:${path}`], { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
  const neeFeature = execFileSync('git', ['show', `15e7ba8:${path}`], { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
  assert.equal(neeFeature.replace(/\r\n/g, '\n'), baseline.replace(/\r\n/g, '\n'), `${path}: dados preservados pela inclusão NEE`);
}

const appSource = fs.readFileSync('src/App.tsx', 'utf8');
const interventionSource = fs.readFileSync('src/components/IntervencaoPrioritariaTab.tsx', 'utf8');
const firstAndThirdYearSource = fs.readFileSync('src/components/FirstYearDashboard.tsx', 'utf8');
assert.equal((appSource.match(/<StudentBadges student=\{(?:student|s)\} \/>/g) ?? []).length, 2, 'App: selos nas duas listas nominais');
assert.equal((interventionSource.match(/<StudentBadges student=\{student\} \/>/g) ?? []).length, 3, 'Intervenção: selos nas três listas nominais');
assert.match(interventionSource, /group\.turmas\.map\(classGroup =>/, 'Intervenção: cards agrupados por turma');
assert.match(interventionSource, /Mais de 30% dos alunos da turma/, 'Intervenção: alerta de alta vulnerabilidade');
assert.match(interventionSource, /Relatório de Vulnerabilidade \(PDF\)/, 'Intervenção: botão do relatório PDF');
assert.match(interventionSource, /relatorio_turmas_vulnerabilidade_bf_/, 'Intervenção: nome estável do arquivo PDF');
assert.equal((firstAndThirdYearSource.match(/<StudentBadges student=\{student\} \/>/g) ?? []).length, 1, '1º e 3º anos: selos na lista nominal compartilhada');
assert.match(firstAndThirdYearSource, /isNeeStudent\(student\) \? 'NEE' : ''/, '1º e 3º anos: coluna NEE na exportação nominal');
assert.equal((interventionSource.match(/isBolsaFamiliaStudent\(s\) \? 'BF' : ''/g) ?? []).length, 2, 'Exportações: coluna BF nas duas listas nominais');
console.log(JSON.stringify({ identifiedNee: allGradeStudents.filter(isNeeStudent).length, legacyNee: NEE_STUDENTS.length, reportNee: SPECIAL_EDUCATION_REPORT_STUDENTS.length, identifiedBolsaFamilia: BOLSA_FAMILIA_STUDENTS.length, both: neeAndBolsaFamilia.length, intervention: getNeeInterventionStats(students), checks: 'passed' }, null, 2));
