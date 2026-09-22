# 3º ano — 1º Simulado de Fluência Leitora 2026

## Escopo

A aba do 3º ano usa exclusivamente os relatórios oficiais do 1º Simulado. Não há avaliação de entrada para esse recorte; por isso, o dashboard não calcula evolução, variação contra entrada ou taxa de avanço.

O 3º ano possui uma régua pedagógica própria para o IFL, considerando a expectativa de consolidação entre Leitores Iniciantes e Leitores Fluentes:

- igual ou superior a 8,00: Alto IFL, em azul;
- de 6,00 a 7,99: IFL consolidado, em verde;
- abaixo de 6,00: IFL em consolidação, com atenção pedagógica, em amarelo.

O dashboard também apresenta o percentual combinado de leitores (LI + LF) para a rede e para cada escola e turma.

## Fonte e importação

- 91 relatórios PDF, correspondentes a 91 turmas de 36 escolas.
- 84 relatórios possuem registros de estudantes; 7 foram emitidos sem resultados.
- 1.648 registros nominais possuem resultado classificável.
- Não foram encontrados registros explicitamente marcados como ausência ou atestado nos relatórios com resultados.

O script `scripts/import_first_year_pdfs.py --grade 3` percorre também subpastas, extrai as tabelas, aplica a matriz municipal e gera `src/data_simulado3ano.ts`. O arquivo `output/third-year-import-audit.json` registra hashes SHA-256 das fontes, quantidade de linhas por PDF e pendências.

## Classificação

A classificação segue a mesma matriz municipal utilizada nos demais anos: N1, N2, N3, N4, LI e LF. O modo qualitativo de leitura tem precedência sobre as medidas numéricas.

## Relatórios sem resultados

- Félix Adib Miguel — 3º Ano B.
- Isabel do Carmo Nogueira — 3º Ano D.
- João Cesário — 3º Ano B.
- Lauro Vicente de Azevedo — 3º Ano A.
- Lauro Vicente de Azevedo — 3º Ano B.
- Orlando Pires — 3º Ano A.
- Ruth Azevedo Romeiro — 3º Ano A.

Essas turmas permanecem visíveis na aba de turmas, sem indicadores calculados.

## Isolamento do 2º ano

Os dados do 3º ano residem em módulo próprio e não são mesclados com as constantes, o cadastro CAEd ou a base do 1º Simulado do 2º ano. O verificador automatizado bloqueia a validação se qualquer um dos três arquivos protegidos do 2º ano tiver hash diferente da versão publicada.
