import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MOCK_STUDENTS_EVOLUTION } from '../src/constants';
import { NEE_STUDENTS, isNeeStudent, getNeeInterventionStats } from '../src/neeStudents';
import { NeeBadge } from '../src/components/NeeBadge';
import { NeeInterventionCard } from '../src/components/NeeInterventionCard';

const students = MOCK_STUDENTS_EVOLUTION.map(student => ({ ...student, escola: student.escola ?? '', turma: student.turma ?? '' }));
assert.equal(NEE_STUDENTS.length, 74);
assert.equal(students.filter(isNeeStudent).length, 74);
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
for (const path of ['src/constants.ts', 'src/data_simulado1.ts', 'src/dadosTurmasCaed.ts']) {
  const baseline = execFileSync('git', ['show', `f797caf:${path}`], { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
  assert.equal(fs.readFileSync(path, 'utf8').replace(/\r\n/g, '\n'), baseline.replace(/\r\n/g, '\n'), `${path}: dados preservados`);
}
console.log(JSON.stringify({ identified: NEE_STUDENTS.length, intervention: getNeeInterventionStats(students), checks: 'passed' }, null, 2));
