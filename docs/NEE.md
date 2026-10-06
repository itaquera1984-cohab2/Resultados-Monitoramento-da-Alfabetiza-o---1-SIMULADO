# Identificação NEE

A relação anterior de alunos do 2º ano de 2026 foi cruzada com nome completo, escola e turma. A identificação significa Necessidades Educacionais Especiais e não atribui diagnóstico nem altera notas, históricos, classificação ou prioridade.

Dos 97 registros daquela fonte, 74 correspondências foram confirmadas, duas repetições foram desconsideradas e 21 registros ficaram para conferência por divergência ou ausência de correspondência. Esses 21 registros não representam necessariamente 21 alunos adicionais: um deles repete um aluno em outra escola, cuja identificação já foi confirmada pela linha correspondente ao cadastro.

O cadastro em `src/neeStudents.ts` mantém as 74 correspondências confirmadas da relação anterior, sem RA. A chave combina escola, turma e nome normalizados. Mudanças de escola, turma ou grafia exigem nova conferência.

## Atualização DEF e HD

O relatório atualizado de demanda de atendimento especializado SED 2026 contém 656 registros consolidados. Entre eles, 59 apresentam situação documental DEF ou HD: 33 registros com Ficha de Identificação DEF e 26 com Hipótese Diagnóstica HD.

No recorte solicitado de 1º, 2º e 3º anos, o relatório contém 25 registros. Foram confirmadas 22 correspondências com as bases nominais do painel: 9 no 1º ano, 7 no 2º ano e 6 no 3º ano. Destas, 10 possuem situação DEF e 12 possuem situação HD. Três registros não constam nas bases atuais de avaliação e permanecem sem marcação automática.

Duas das 22 correspondências já integravam a relação anterior do 2º ano. Após a consolidação sem duplicidade, o sistema identifica 94 estudantes NEE nas três bases: 9 no 1º ano, 79 no 2º ano e 6 no 3º ano.

O cadastro da atualização fica em `src/specialEducationStudents.ts`. A situação DEF/HD e a grafia original do relatório são preservadas para auditoria, mas a interface apresenta somente a sigla NEE ao lado do nome.

## Percentuais

O card da rede do 2º ano usa alunos com resultado N1 ou N2 no primeiro simulado como denominador e os identificados como NEE dentro desse grupo como numerador. Após a atualização, o resultado é 29 / 142 = 20,4% (25 em N1 e 4 em N2). Cada escola e o recorte filtrado usam seus próprios denominadores. O card da rede permanece identificado como total da rede.

Ausência da sigla significa ausência de correspondência confirmada nas relações utilizadas, não ausência de necessidades educacionais.

## Validação

`npm run verify:student-markers` verifica correspondências únicas nos três anos, isolamento por escola e turma, cálculos, renderização dos componentes e preservação dos arquivos de avaliação.
