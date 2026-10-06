# Identificação Bolsa Família

A relação emitida em 28/08/2025 foi filtrada para estudantes ativos da rede municipal e cruzada, por nome completo normalizado, com o cadastro nominal vigente no painel. A sigla `BF` identifica os estudantes encontrados nesse cruzamento.

Foram identificados 741 estudantes no cadastro atual. Não houve homônimo entre os nomes efetivamente encontrados na relação; uma repetição na fonte foi deduplicada. Entre os estudantes identificados, 21 também possuem identificação NEE e recebem os dois selos junto ao nome.

O cadastro gerado em `src/bolsaFamiliaStudents.ts` contém apenas nome, escola e turma já existentes no painel. NIS e demais informações do benefício não são copiados para o projeto.

## Atualização

Para atualizar a relação, execute:

`npm run import:bolsa-familia -- "CAMINHO_DO_ARQUIVO.csv"`

O importador exige o cabeçalho esperado, considera somente estudantes ativos da dependência municipal, deduplica nomes da fonte e interrompe o processo se houver homônimo entre os alunos que seriam identificados.

## Validação

`npm run verify:student-markers` confere as correspondências BF e NEE, a sobreposição dos selos, a renderização combinada nas cinco listas nominais e a presença da coluna BF nas duas exportações CSV.
