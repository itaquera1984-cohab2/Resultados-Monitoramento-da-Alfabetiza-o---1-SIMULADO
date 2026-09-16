# Identificação NEE

A lista de alunos do 2º ano de 2026 fornecida pela rede foi cruzada com nome completo, escola e turma. A identificação significa Necessidades Educacionais Especiais e não atribui diagnóstico nem altera notas, históricos, classificação ou prioridade.

Dos 97 registros da fonte, 74 correspondências foram confirmadas, duas repetições foram desconsideradas e 21 registros ficaram para conferência por divergência ou ausência de correspondência. Esses 21 registros não representam necessariamente 21 alunos adicionais: um deles repete um aluno em outra escola, cuja identificação já foi confirmada pela linha correspondente ao cadastro.

O cadastro em `src/neeStudents.ts` contém apenas as correspondências confirmadas, sem RA nem informações de diagnóstico. A chave combina escola, turma e nome normalizados. Mudanças de escola, turma ou grafia exigem nova conferência.

## Percentuais

O card da rede usa alunos com resultado N1 ou N2 no primeiro simulado como denominador e os identificados como NEE dentro desse grupo como numerador. O resultado inicial é 27 / 142 = 19,0% (23 em N1 e 4 em N2). Cada escola e o recorte filtrado usam seus próprios denominadores. O card da rede permanece identificado como total da rede.

Ausência da sigla significa ausência de correspondência confirmada na lista, não ausência de necessidades educacionais. O percentual poderá mudar após a conferência das pendências.

## Validação

`node --import tsx scripts/verify-nee.ts` verifica correspondências únicas, isolamento por escola/turma, cálculo, renderização dos componentes e preservação dos arquivos de avaliação em relação ao commit anterior à inclusão NEE.
