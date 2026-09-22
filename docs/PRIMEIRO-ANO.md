# 1º ano — 1º Simulado de Fluência Leitora 2026

## Escopo

A aba do 1º ano usa exclusivamente os relatórios oficiais do 1º Simulado. Não há avaliação de entrada para esse recorte; por isso, o dashboard não calcula evolução, variação contra entrada ou taxa de avanço.

O 1º ano possui uma régua pedagógica própria para o IFL, adequada ao momento inicial da alfabetização:

- igual ou superior a 5,00: IFL em consolidação, em verde;
- de 3,00 a 4,99: IFL em desenvolvimento, com atenção pedagógica, em amarelo;
- abaixo de 3,00: IFL crítico, em vermelho.

## Fonte e importação

- 100 relatórios PDF, correspondentes a 100 turmas de 37 escolas.
- 95 relatórios possuem registros de estudantes; 5 foram emitidos sem resultados.
- 1.691 registros nominais foram extraídos.
- 1.685 registros possuem resultado classificável.
- 6 registros foram explicitamente identificados como não avaliados por ausência ou atestado e foram excluídos dos denominadores de desempenho.

O script `scripts/import_first_year_pdfs.py --grade 1` extrai as tabelas, aplica a matriz municipal e gera `src/data_simulado1ano.ts`. O arquivo `output/first-year-import-audit.json` registra hashes SHA-256 das fontes, quantidade de linhas por PDF e pendências.

## Classificação

A classificação segue a matriz já usada no sistema:

- Não leu: N1.
- Soletrou: N2.
- Silabou: N3.
- Leu com até 10 nas três medidas: N4.
- Leu e não atingiu cumulativamente os cortes de fluente: LI.
- Leu com pelo menos 50 palavras, 30 pseudopalavras e 60 no texto: LF.

Quando o modo qualitativo é informado, ele tem precedência. Em uma linha de Lauro Vicente de Azevedo — 1º Ano A, a fonte registra simultaneamente “Não leu” e “N3”; o sistema aplica N1 e mantém o conflito na auditoria.

## Relatórios sem resultados

- Alexandre Machado Salgado — 1º Ano C.
- Félix Adib Miguel — 1º Ano B.
- Lauro Vicente de Azevedo — 1º Ano B.
- Regina Célia M. de Souza Lima — 1º Ano B.
- Serafim Ferreira — 1º Ano A.

Essas turmas permanecem visíveis na aba de turmas, sem indicadores calculados.

## Validação

Execute:

```powershell
node --import tsx scripts/verify-first-year.ts
npm run build
```

O verificador confirma totais, unicidade dos registros, soma dos níveis, ausência de campos de avaliação de entrada e equivalência com o motor de classificação do projeto.
