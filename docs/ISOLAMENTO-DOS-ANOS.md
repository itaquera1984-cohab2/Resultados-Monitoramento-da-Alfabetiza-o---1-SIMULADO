# Isolamento dos dados por ano escolar

As bases do 1º e do 3º ano foram adicionadas em módulos independentes:

- `src/data_simulado1ano.ts`
- `src/data_simulado3ano.ts`

O painel histórico do 2º ano continua utilizando exclusivamente suas três fontes originais:

- `src/constants.ts`
- `src/data_simulado1.ts`
- `src/dadosTurmasCaed.ts`

O seletor de ano em `src/App.tsx` monta somente o painel escolhido. O 1º e o 3º ano compartilham um componente de apresentação, mas não compartilham registros com o 2º ano. Como esses anos não possuem avaliação de entrada, seus painéis exibem apenas o 1º Simulado.

## Proteção automatizada

O script `scripts/verify-first-year.ts` registra os hashes SHA-256 das três fontes do 2º ano e falha se qualquer uma delas for modificada. Ele também valida totais, identificadores, níveis e a ausência do campo de avaliação de entrada nas novas bases.

Execute:

```powershell
node --import tsx scripts/verify-first-year.ts
```

Essa verificação deve ser mantida no fluxo de validação de futuras importações.
