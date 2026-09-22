// Generated from the official 3º ano - 1º Simulado de Fluência Leitora reports.
// Do not edit manually; run scripts/import_first_year_pdfs.py --grade 3.

export interface ThirdYearStudent {
  id: number;
  numero: number;
  name: string;
  escola: string;
  turma: string;
  s1: "N1" | "N2" | "N3" | "N4" | "LI" | "LF" | "NÃO AVALIADO";
  s1Details: {
    modo: string;
    palavras: number | null;
    pseudopalavras: number | null;
    texto: number | null;
  };
  sourceFile: string;
  sourcePage: number;
}

export const THIRD_YEAR_IMPORT_SUMMARY = {
  "sourcePdfCount": 91,
  "schoolCount": 36,
  "classCount": 91,
  "classesWithResults": 84,
  "classesWithoutResults": 7,
  "studentCount": 1648,
  "evaluatedCount": 1648,
  "notEvaluatedCount": 0,
  "levels": {
    "N1": 46,
    "N2": 39,
    "N3": 164,
    "N4": 6,
    "LI": 824,
    "LF": 569
  },
  "modes": {
    "Não leu": 46,
    "Soletrou": 39,
    "Silabou": 164,
    "Leu": 1399
  }
} as const;

export const THIRD_YEAR_CLASSES = [
  {
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 24
  },
  {
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 23
  },
  {
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 19
  },
  {
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 20
  },
  {
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "recordCount": 20
  },
  {
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 21
  },
  {
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 20
  },
  {
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 24
  },
  {
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 23
  },
  {
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "recordCount": 21
  },
  {
    "escola": "Augusto César Ribeiro",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Augusto César Ribeiro EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 16
  },
  {
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 19
  },
  {
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 22
  },
  {
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 21
  },
  {
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "recordCount": 19
  },
  {
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "recordCount": 20
  },
  {
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 15
  },
  {
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO b.pdf",
    "recordCount": 13
  },
  {
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO C",
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "recordCount": 15
  },
  {
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 20
  },
  {
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 0
  },
  {
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 19
  },
  {
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 17
  },
  {
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 25
  },
  {
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 21
  },
  {
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO C",
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "recordCount": 15
  },
  {
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO D",
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "recordCount": 0
  },
  {
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 22
  },
  {
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 22
  },
  {
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "recordCount": 21
  },
  {
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "recordCount": 21
  },
  {
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "recordCount": 23
  },
  {
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "recordCount": 23
  },
  {
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 17
  },
  {
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 14
  },
  {
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO C",
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "recordCount": 14
  },
  {
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 26
  },
  {
    "escola": "João Cesário",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 0
  },
  {
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "recordCount": 26
  },
  {
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "recordCount": 25
  },
  {
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 20
  },
  {
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 19
  },
  {
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "recordCount": 20
  },
  {
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "recordCount": 21
  },
  {
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 17
  },
  {
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 19
  },
  {
    "escola": "Lauro Vicente de Azevedo",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 0
  },
  {
    "escola": "Lauro Vicente de Azevedo",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 0
  },
  {
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "recordCount": 22
  },
  {
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 22
  },
  {
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 24
  },
  {
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 23
  },
  {
    "escola": "Maria Ap.C.de Souza, Profª",
    "turma": "MULTISSERIADA FUNDAMENTAL A",
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap.C.de Souza, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - MULTISSERIADA FUNDAMENTAL A.pdf",
    "recordCount": 6
  },
  {
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 19
  },
  {
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 15
  },
  {
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 17
  },
  {
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 21
  },
  {
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 21
  },
  {
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 14
  },
  {
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 15
  },
  {
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 18
  },
  {
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 16
  },
  {
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "recordCount": 17
  },
  {
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 19
  },
  {
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 19
  },
  {
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "recordCount": 17
  },
  {
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 23
  },
  {
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 23
  },
  {
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 0
  },
  {
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 18
  },
  {
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 23
  },
  {
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 23
  },
  {
    "escola": "Paulo Freire, Prof.",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 10
  },
  {
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 20
  },
  {
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 19
  },
  {
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "recordCount": 18
  },
  {
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO D",
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "recordCount": 16
  },
  {
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 18
  },
  {
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 19
  },
  {
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO C",
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "recordCount": 15
  },
  {
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "recordCount": 20
  },
  {
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 0
  },
  {
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 17
  },
  {
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 24
  },
  {
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 24
  },
  {
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "recordCount": 24
  },
  {
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 22
  },
  {
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 18
  },
  {
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 17
  },
  {
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "recordCount": 24
  },
  {
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "recordCount": 26
  }
] as const;

export const THIRD_YEAR_STUDENTS: ThirdYearStudent[] = [
  {
    "numero": 1,
    "name": "ALICE VITORIA BENTO DOS SANTOS",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 13,
      "texto": 35
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1
  },
  {
    "numero": 2,
    "name": "ANA LAURA PEREIRA DE OLIVEIRA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 2
  },
  {
    "numero": 3,
    "name": "ANNALIZ GOBBO DE OLIVEIRA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 40,
      "texto": 71
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 3
  },
  {
    "numero": 4,
    "name": "ARTHUR GABRIEL MONTEIRO OLIVEIRA DA SILVA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 37,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 4
  },
  {
    "numero": 7,
    "name": "DAVI RIBEIRO DE MACEDO",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 40,
      "texto": 106
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 5
  },
  {
    "numero": 10,
    "name": "GUILHERME DOS SANTOS DA PAZ",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 6
  },
  {
    "numero": 11,
    "name": "HELLENA REZENDE MARQUES",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 7
  },
  {
    "numero": 12,
    "name": "JOAO HENRIQUE DE GODOY FERREIRA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 131
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 8
  },
  {
    "numero": 13,
    "name": "LAVINIA DE OLIVEIRA PIMENTA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 21,
      "texto": 45
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 9
  },
  {
    "numero": 14,
    "name": "MANUELLA ALVES MOREIRA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 26,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 10
  },
  {
    "numero": 15,
    "name": "MARIA CLARA RIBEIRO PALAZZI DE OLIVEIRA CASTRO",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 11
  },
  {
    "numero": 16,
    "name": "MARIA LUIZA CORREA DOS SANTOS",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 23,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 12
  },
  {
    "numero": 17,
    "name": "MIRELLA OLIVEIRA RAMOS",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 17,
      "texto": 35
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 13
  },
  {
    "numero": 18,
    "name": "MONICA HONORIO BARBOZA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 14
  },
  {
    "numero": 20,
    "name": "PEDRO MOREIRA ALBERTI DE ALMEIDA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 15
  },
  {
    "numero": 21,
    "name": "PYETRO KALLEB PIRES DA SILVA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 7,
      "pseudopalavras": 9,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 16
  },
  {
    "numero": 22,
    "name": "RAFAEL ANTONIO SOARES LEAO",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 17
  },
  {
    "numero": 23,
    "name": "RENATO DIAS CORREA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 40,
      "texto": 152
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 18
  },
  {
    "numero": 25,
    "name": "JOAO MIGUEL COUTINHO PAIVA LAMIN BRANCO",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 21,
      "texto": 46
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 19
  },
  {
    "numero": 26,
    "name": "PIETRO HENRIQUE MONTEIRO DE JESUS",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 21,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 20
  },
  {
    "numero": 27,
    "name": "GUSTAVO APARECIDO DUARTE",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 12,
      "texto": 22
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 21
  },
  {
    "numero": 28,
    "name": "RENAN LUCAS SANTOS MATIAS RODRIGUES",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 11,
      "texto": 16
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 22
  },
  {
    "numero": 29,
    "name": "JOAO PEDRO COUTINHO MONTEIRO",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 23
  },
  {
    "numero": 30,
    "name": "LORENZO CORREA RAMOS",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 25,
      "texto": 48
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 24
  },
  {
    "numero": 1,
    "name": "ANDRE VICTOR DOS SANTOS",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 25
  },
  {
    "numero": 2,
    "name": "CARLOS AUGUSTO FREITAS DA SILVA JUNIOR",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 26
  },
  {
    "numero": 3,
    "name": "DANILO CAMARGO DA SILVEIRA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 100
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 27
  },
  {
    "numero": 4,
    "name": "ENZO GABRIEL BARROS SANTOS DO AMARAL",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 40,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 28
  },
  {
    "numero": 5,
    "name": "FERNANDO PYETRO ALVES DE SOUZA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 64
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 29
  },
  {
    "numero": 6,
    "name": "HEITOR NORCIA SANTANA DOS SANTOS",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 128
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 30
  },
  {
    "numero": 7,
    "name": "HELENA ZILLMANN DE SOUZA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 40,
      "texto": 84
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 31
  },
  {
    "numero": 8,
    "name": "HELOYSA ISABELE DOS SANTOS LEMOS",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 115
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 32
  },
  {
    "numero": 9,
    "name": "HELOYSE FREDERICO ROCHA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 130
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 33
  },
  {
    "numero": 11,
    "name": "KAIQUE SOUZA DE JESUS",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 38,
      "texto": 84
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 34
  },
  {
    "numero": 12,
    "name": "KAMYLEEN FERNANDES PEREIRA DE ASSIS DUARTE",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 35,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 35
  },
  {
    "numero": 13,
    "name": "MARIA ALICE LEMES DOS SANTOS CONCEICAO",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 36,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 36
  },
  {
    "numero": 14,
    "name": "MARIA JULIA GUIMARAES COSTA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 6,
      "texto": 12
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 37
  },
  {
    "numero": 15,
    "name": "MARIA SOPHIA DA SILVA MACEDO",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 41,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 38
  },
  {
    "numero": 16,
    "name": "MARIAH GIOVANNA SILVANO SALES BACELAR",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 111
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 39
  },
  {
    "numero": 17,
    "name": "MIGUEL BELCHIOR LUZ",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 20,
      "texto": 52
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 40
  },
  {
    "numero": 19,
    "name": "RAYSSA DE PAULA DIVINO",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 41
  },
  {
    "numero": 20,
    "name": "ROBERTO CARLOS DE OLIVEIRA SALGADO",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 15,
      "texto": 25
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 42
  },
  {
    "numero": 22,
    "name": "THALITA EMILIANO DA SILVA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 43
  },
  {
    "numero": 23,
    "name": "VINICIUS OLIVEIRA LEITE",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 88
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 44
  },
  {
    "numero": 24,
    "name": "YURI MIGUEL FERREIRA DA SILVA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 45
  },
  {
    "numero": 25,
    "name": "OTAVIO RIBEIRO LEITE DOS SANTOS",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 25,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 46
  },
  {
    "numero": 26,
    "name": "DAVI LUCAS SALGADO",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 25,
      "texto": 45
    },
    "sourceFile": "Fluência Leitora 3º ano/Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 47
  },
  {
    "numero": 1,
    "name": "ALLANA MARCELINE SOUZA DE OLIVEIRA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 32,
      "texto": 89
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 48
  },
  {
    "numero": 2,
    "name": "ALLYSON DANILO MOURA TEODORO",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 26,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 49
  },
  {
    "numero": 3,
    "name": "ANA LIVIA GONCALVES DE OLIVEIRA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 26,
      "texto": 44
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 50
  },
  {
    "numero": 4,
    "name": "ANA LUIZA LOURENÇO NASCIMENTO",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 23,
      "texto": 56
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 51
  },
  {
    "numero": 5,
    "name": "DAVI TORQUATO DOS SANTOS CHAVES",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 33,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 52
  },
  {
    "numero": 6,
    "name": "ENZO GABRIEL DO ESPIRITO SANTO",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 32,
      "texto": 59
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 53
  },
  {
    "numero": 7,
    "name": "GUILHERME ALEJANDRO DE MOURA FERREIRA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 54
  },
  {
    "numero": 9,
    "name": "ISABELLY FERREIRA DA SILVA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 132
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 55
  },
  {
    "numero": 10,
    "name": "ISABELLY MARIA DA SILVA FERREIRA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 39,
      "texto": 85
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 56
  },
  {
    "numero": 11,
    "name": "ISADORA LAIDE RIBEIRO LEITE",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 31,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 57
  },
  {
    "numero": 12,
    "name": "JOAO MIGUEL GOMES DA COSTA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 29,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 58
  },
  {
    "numero": 13,
    "name": "KAUAN LUCAS CONCEICAO PONCIANO DA SILVA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 15,
      "texto": 29
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 59
  },
  {
    "numero": 14,
    "name": "KETHELLYN FERNANDA DE PAULA SILVA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 60
  },
  {
    "numero": 16,
    "name": "LARISSA EMANUELLY ROSA DOS SANTOS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 61
  },
  {
    "numero": 17,
    "name": "LUCAS DANIEL DE FARIA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 24,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 62
  },
  {
    "numero": 18,
    "name": "MONICK RODRIGUES DE CAMARGO",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 13,
      "texto": 35
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 63
  },
  {
    "numero": 19,
    "name": "REBECA VITORIA DE FRANÇA MAURILIO",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 64
  },
  {
    "numero": 20,
    "name": "SAMUEL BRYAN SILVA DE SOUZA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 15,
      "texto": 28
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 65
  },
  {
    "numero": 21,
    "name": "VICTOR HUGO RABELO DOS SANTOS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 40,
      "texto": 83
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 66
  },
  {
    "numero": 1,
    "name": "ANA LAURA MOREIRA SILVA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 67
  },
  {
    "numero": 2,
    "name": "ANNA LETICIA DI FABIO DOS SANTOS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 40,
      "texto": 88
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 68
  },
  {
    "numero": 3,
    "name": "AYLLA VITORIA GONCALVES DOS SANTOS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 38,
      "texto": 85
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 69
  },
  {
    "numero": 4,
    "name": "EMILLY DIAS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 16,
      "texto": 26
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 70
  },
  {
    "numero": 5,
    "name": "GABRIELA BEATRIZ SOARES DOS SANTOS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 32,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 71
  },
  {
    "numero": 6,
    "name": "GUILHERME VINICIUS DO ESPIRITO SANTO SOARES",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 72
  },
  {
    "numero": 8,
    "name": "GUSTAVO DE JESUS SILVA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 106
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 73
  },
  {
    "numero": 9,
    "name": "HEITOR DE OLIVEIRA ALVES PINTO",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 74
  },
  {
    "numero": 10,
    "name": "HEITOR GABRIEL DA SILVA REZENDE",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 29,
      "texto": 58
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 75
  },
  {
    "numero": 11,
    "name": "KEMILLY SOPHIA DO ESPIRITO SANTO VICENTE",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 6,
      "texto": 8
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 76
  },
  {
    "numero": 13,
    "name": "LUIZ FERNANDO MATIAS DE OLIVEIRA FARIA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 40,
      "texto": 96
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 77
  },
  {
    "numero": 14,
    "name": "MANUELLA EMBOAVA VIEIRA SALGADO ROSA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 18,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 78
  },
  {
    "numero": 15,
    "name": "MARIA GEOVANNA OCIREU DE OLIVEIRA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 27,
      "texto": 81
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 79
  },
  {
    "numero": 16,
    "name": "MIGUEL DA MOTA BRAGA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 6,
      "texto": 38
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 80
  },
  {
    "numero": 17,
    "name": "PAOLA CRISTINA DE MATOS MARIA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 30,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 81
  },
  {
    "numero": 18,
    "name": "PEDRO LUCAS DOS SANTOS ANDRADE",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 82
  },
  {
    "numero": 19,
    "name": "PEDRO MIGUEL DE OLIVEIRA SILVA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 37,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 83
  },
  {
    "numero": 20,
    "name": "PYERRE SEBASTIAN NUNES DE JESUS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 22,
      "texto": 47
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 84
  },
  {
    "numero": 22,
    "name": "LEANDRO RODRIGUES MOREIRA DE LIMA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 40,
      "texto": 105
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 85
  },
  {
    "numero": 23,
    "name": "EMANUELLY DA SILVA RODRIGUES",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 14,
      "texto": 34
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 86
  },
  {
    "numero": 2,
    "name": "BRENNER RAFAEL VITALINO DE FARIA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 14,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 87
  },
  {
    "numero": 4,
    "name": "DAVY LUCAS DA SILVA RODRIGUES",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 40,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 88
  },
  {
    "numero": 5,
    "name": "ELOISA ALVES PANTALHAO",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 115
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 89
  },
  {
    "numero": 6,
    "name": "EMANUELLY BUENO DA SILVA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 35,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 90
  },
  {
    "numero": 7,
    "name": "EMILLY VITORIA PAULINO DA SILVA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 91
  },
  {
    "numero": 8,
    "name": "GABRIEL SOARES JUNIOR",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 92
  },
  {
    "numero": 9,
    "name": "JOAO HENRIQUE MOREIRA LEMOS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 9,
      "texto": 18
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 93
  },
  {
    "numero": 10,
    "name": "JOSE LORENZO SEBASTIAO",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 32,
      "texto": 58
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 94
  },
  {
    "numero": 11,
    "name": "KIARA LIDIA DA SILVA SANTOS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 17,
      "texto": 83
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 95
  },
  {
    "numero": 12,
    "name": "LARA EMANUELLY DE PAULA PEREIRA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 2,
      "pseudopalavras": 2,
      "texto": 5
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 96
  },
  {
    "numero": 13,
    "name": "LEANDRO PINTO DA MOTA JUNIOR",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 16,
      "texto": 32
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 97
  },
  {
    "numero": 14,
    "name": "LUCAS DE OLIVEIRA TEIXEIRA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 98
  },
  {
    "numero": 16,
    "name": "MARIA EDUARDA DA SILVA OLIVEIRA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 17,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 99
  },
  {
    "numero": 17,
    "name": "MARIA VITORIA FERNANDES DA SILVA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 12,
      "texto": 38
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 100
  },
  {
    "numero": 18,
    "name": "MATHEUS FERREIRA BUENO",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 101
  },
  {
    "numero": 19,
    "name": "MILLENA VITORIA FERNANDES VIEIRA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 27,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 102
  },
  {
    "numero": 20,
    "name": "PABLO HENRIQUE VICENTE DE TOLEDO",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 29,
      "texto": 44
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 103
  },
  {
    "numero": 21,
    "name": "PEDRO HENRIQUE DE OLIVEIRA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 32,
      "pseudopalavras": 12,
      "texto": 49
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 104
  },
  {
    "numero": 22,
    "name": "RAYLANE ESTEVAM DA SILVA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 21,
      "texto": 93
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 105
  },
  {
    "numero": 23,
    "name": "ENZO HENRIQUE DA SILVA MELLO",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 25,
      "texto": 56
    },
    "sourceFile": "Fluência Leitora 3º ano/Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 106
  },
  {
    "numero": 1,
    "name": "AGATHA MAMEDE GUIMARAES",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 40,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 107
  },
  {
    "numero": 2,
    "name": "ALICY EVARISTO SEBASTIAO MACHADO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 40,
      "texto": 116
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 108
  },
  {
    "numero": 3,
    "name": "ANA LAURA MELLO DE MOURA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 37,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 109
  },
  {
    "numero": 5,
    "name": "ANTONELLA FRANCO DE OLIVEIRA ALMEIDA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 37,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 110
  },
  {
    "numero": 6,
    "name": "CARLOS EDUARDO PALENCIO DE ALMEIDA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 32,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 111
  },
  {
    "numero": 8,
    "name": "CHRISTIAN LUCAS DAMASCENO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 143
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 112
  },
  {
    "numero": 9,
    "name": "DANIEL SIQUEIRA SANTOS DE MELO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 7,
      "texto": 12
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 113
  },
  {
    "numero": 10,
    "name": "HENRY MIRANDA PEREIRA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 114
  },
  {
    "numero": 11,
    "name": "JOAO VITOR DE MELLO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 27,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 115
  },
  {
    "numero": 12,
    "name": "KAUA FERRARI DE SOUZA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 40,
      "texto": 143
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 116
  },
  {
    "numero": 13,
    "name": "LAURA BEATRIZ MOREIRA TEBERGA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 28,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 117
  },
  {
    "numero": 14,
    "name": "LAURA CONSTANTINO SILVEIRA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 135
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 118
  },
  {
    "numero": 15,
    "name": "LORENZO SOUZA FARRAPO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 23,
      "pseudopalavras": 18,
      "texto": 38
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 119
  },
  {
    "numero": 16,
    "name": "LUIZ OTAVIO SILVA DOS SANTOS",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 115
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 120
  },
  {
    "numero": 17,
    "name": "MANUELLY SOFIA DE LA FUENTES FERREIRA FONSECA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 121
  },
  {
    "numero": 18,
    "name": "MARIA ALICE CARDOSO JUNQUEIRA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 27,
      "texto": 115
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 122
  },
  {
    "numero": 19,
    "name": "MARIA CECILIA DE SOUZA REIS",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 32,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 123
  },
  {
    "numero": 20,
    "name": "SOPHIA KATHERINE DOS SANTOS COUTINHO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 13,
      "texto": 16
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 124
  },
  {
    "numero": 21,
    "name": "VALENTINA OLIVEIRA DE MATTOS CARDOSO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 136
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 125
  },
  {
    "numero": 23,
    "name": "EMANUELLY DA SILVA MARCONDES DE OLIVEIRA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 24,
      "pseudopalavras": 19,
      "texto": 41
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 126
  },
  {
    "numero": 24,
    "name": "MIGUEL RIBEIRO DE SOUZA SANTOS",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 22,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 127
  },
  {
    "numero": 1,
    "name": "ANA LYCE BONIFACIO VER VALEN CRUZ",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 40,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 128
  },
  {
    "numero": 2,
    "name": "ANA SOPHIA REZENDE PEREIRA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 27,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 129
  },
  {
    "numero": 3,
    "name": "ANTHONY GABRIEL DE SOUSA APOLINARIO MONTEIRO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 10,
      "pseudopalavras": 8,
      "texto": 13
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 130
  },
  {
    "numero": 4,
    "name": "ARTHUR GONÇALVES AMORIM SILVA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 139
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 131
  },
  {
    "numero": 5,
    "name": "ARTHUR RAFAEL SOUZA MONTEIRO TORRES",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 153
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 132
  },
  {
    "numero": 6,
    "name": "BERNARDO MUNHOS FIORE DE OLIVEIRA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 30,
      "texto": 81
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 133
  },
  {
    "numero": 8,
    "name": "GAEL ALMEIDA SANTANA MIGUEL",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 28,
      "texto": 56
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 134
  },
  {
    "numero": 9,
    "name": "HELOA CAMARGO FELIPE",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 40,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 135
  },
  {
    "numero": 10,
    "name": "LEONARDO OTSURU LOPES",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 40,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 136
  },
  {
    "numero": 11,
    "name": "LORENZO LEME PEREIRA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 137
  },
  {
    "numero": 12,
    "name": "LUARA VITORIA RODRIGUES DE LIMA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 27,
      "texto": 68
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 138
  },
  {
    "numero": 13,
    "name": "LUCAS MOREIRA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 40,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 139
  },
  {
    "numero": 14,
    "name": "MARIA CECILIA BUENO DE SOUZA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 40,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 140
  },
  {
    "numero": 15,
    "name": "MARIA CLARA RODRIGUES ALVES",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 40,
      "texto": 92
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 141
  },
  {
    "numero": 16,
    "name": "MIGUEL LORENZZO TORQUATO CARDOSO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 27,
      "texto": 83
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 142
  },
  {
    "numero": 17,
    "name": "PEDRO LIMA MENDES",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 146
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 143
  },
  {
    "numero": 18,
    "name": "VERONICA FERREIRA DE CASTRO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 33,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 144
  },
  {
    "numero": 19,
    "name": "ANDERSON MIQUEIAS DE ARAUJO DOS SANTOS",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 23,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 145
  },
  {
    "numero": 21,
    "name": "ANNA MARIA RODRIGUES GALVAO DA SILVA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 30,
      "texto": 88
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 146
  },
  {
    "numero": 22,
    "name": "MILENA FREITAS DE SOUZA FRANCO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 24,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 147
  },
  {
    "numero": 2,
    "name": "AISHA VYTORIA MARÇON DA FONSECA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 19,
      "texto": 38
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 148
  },
  {
    "numero": 3,
    "name": "ALICE CESAR DA SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 16,
      "texto": 46
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 149
  },
  {
    "numero": 4,
    "name": "BRYAN VITORINO BARROS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 29,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 150
  },
  {
    "numero": 5,
    "name": "DAVI LUCAS PEREIRA DOS SANTOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 40,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 151
  },
  {
    "numero": 7,
    "name": "GABRIEL ROMAO DA SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 32,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 152
  },
  {
    "numero": 8,
    "name": "HELENA DE CARVALHO SANTOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 38,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 153
  },
  {
    "numero": 9,
    "name": "HELOISE ALVARENGA DOMINONE CESAR",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 35,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 154
  },
  {
    "numero": 10,
    "name": "ISABELLA SOARES ALMEIDA DOS SANTOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 16,
      "texto": 32
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 155
  },
  {
    "numero": 11,
    "name": "ISABELLE HELENA ALVES FERREIRA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 156
  },
  {
    "numero": 13,
    "name": "LUIZ GUSTAVO GONZAGA MATOS RAMOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 15,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 157
  },
  {
    "numero": 14,
    "name": "MANUELLA RIBEIRO DOS SANTOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 13,
      "texto": 35
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 158
  },
  {
    "numero": 15,
    "name": "MARIA VITORIA DE MOURA AZARIAS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 40,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 159
  },
  {
    "numero": 17,
    "name": "MIRELLA DOS SANTOS VIEIRA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 13,
      "texto": 37
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 160
  },
  {
    "numero": 18,
    "name": "MIRIA OLIVEIRA CAETANO DA SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 25,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 161
  },
  {
    "numero": 19,
    "name": "NESTOR HENRIQUE DA SILVA SOUZA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 162
  },
  {
    "numero": 20,
    "name": "PEDRO HENRIQUE FERMINO DOS SANTOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 25,
      "texto": 64
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 163
  },
  {
    "numero": 21,
    "name": "SOPHIA CINACHI BICUDO",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 30,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 164
  },
  {
    "numero": 22,
    "name": "SOPHIA EMANUELLY DA SILVA DE OLIVEIRA ROSA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 8,
      "texto": 17
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 165
  },
  {
    "numero": 23,
    "name": "VALENTINA ANTONELLA RODRIGUES DA COSTA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 166
  },
  {
    "numero": 24,
    "name": "WENDERSON RYAN LIMA DA ROCHA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 167
  },
  {
    "numero": 25,
    "name": "ENZO MIGUEL LACERDA LOURENCO DE OLIVEIRA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 13,
      "texto": 25
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 168
  },
  {
    "numero": 26,
    "name": "LUANA VITÓRIA DO CARMO DOS SANTOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 10,
      "texto": 22
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 169
  },
  {
    "numero": 27,
    "name": "SOPHIA EMANUELLE DOS SANTOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 34,
      "texto": 97
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 170
  },
  {
    "numero": 28,
    "name": "CAROLINA DOS SANTOS LUZ",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 40,
      "texto": 132
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 171
  },
  {
    "numero": 1,
    "name": "ADRIAN HENRIQUE DE CAMPOS OLIVEIRA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 34,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 172
  },
  {
    "numero": 2,
    "name": "ALICE BEATRIZ VIEIRA BARBOSA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 38,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 173
  },
  {
    "numero": 3,
    "name": "BEATRIZ MONTEIRO MACHADO FERNANDES",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 135
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 174
  },
  {
    "numero": 4,
    "name": "ELENA MANOELLE DE MOURA SANTOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 28,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 175
  },
  {
    "numero": 5,
    "name": "ELOA CAROLINE DA SILVA JUVENAL",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 40,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 176
  },
  {
    "numero": 6,
    "name": "HELOISA LAMONIE BRAGA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 40,
      "texto": 85
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 177
  },
  {
    "numero": 7,
    "name": "INGRID RIBEIRO FABRE",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 30,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 178
  },
  {
    "numero": 9,
    "name": "LAURA BITTENCOURT DA SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 40,
      "texto": 106
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 179
  },
  {
    "numero": 10,
    "name": "LIVIA MOREIRA PINTO",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 40,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 180
  },
  {
    "numero": 11,
    "name": "LUCAS EDUARDO MACHADO BARBOSA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 31,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 181
  },
  {
    "numero": 12,
    "name": "LYNCON DIAS RODRIGUES",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 105
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 182
  },
  {
    "numero": 13,
    "name": "MARIA JULIA DA SILVA SANTOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 122
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 183
  },
  {
    "numero": 14,
    "name": "MELISSA DANTAS CORREA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 38,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 184
  },
  {
    "numero": 15,
    "name": "MYRELLA VICTORIA BERNARDES PIERINI",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 17,
      "texto": 22
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 185
  },
  {
    "numero": 16,
    "name": "PEDRO ARAUJO DA SILVA CORREA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 135
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 186
  },
  {
    "numero": 17,
    "name": "PEDRO MIGUEL DOMINGOS BARBOSA DA SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 149
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 187
  },
  {
    "numero": 18,
    "name": "SAMUEL LUCAS MONTEIRO DA SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 30,
      "texto": 56
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 188
  },
  {
    "numero": 20,
    "name": "THIAGO SCOOFILD OLIVEIRA CASTILHO",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 25,
      "texto": 45
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 189
  },
  {
    "numero": 21,
    "name": "VALENTINA MOREIRA ROSA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 40,
      "texto": 106
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 190
  },
  {
    "numero": 22,
    "name": "VINICIUS DA SILVA CORREA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 32,
      "pseudopalavras": 37,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 191
  },
  {
    "numero": 23,
    "name": "WILLIAN SOUZA MELO CLARO",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 192
  },
  {
    "numero": 24,
    "name": "YASMIN FERREIRA DA SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 193
  },
  {
    "numero": 25,
    "name": "ABRAAO KOICHI OMURA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 194
  },
  {
    "numero": 26,
    "name": "LUIZ GUILHERME MORGADO MOREIRA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 26,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 195
  },
  {
    "numero": 27,
    "name": "MELISSA VITORIA FELISARDO BOANI NUNES",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 27,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 196
  },
  {
    "numero": 28,
    "name": "VICTOR HUGO INÁCIO CAMPOS SALES",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 38,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 197
  },
  {
    "numero": 2,
    "name": "ALYCE EMANUELY DA SILVA BARBOSA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 32,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 198
  },
  {
    "numero": 3,
    "name": "ANNA LAURA SANTOS DA SILVA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 30,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 199
  },
  {
    "numero": 4,
    "name": "ARTHUR GABRIEL SANTOS DA SILVA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 27,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 200
  },
  {
    "numero": 5,
    "name": "CARLOS DANIEL ELIAS REIS",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 30,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 201
  },
  {
    "numero": 6,
    "name": "ELIAS MENDES LEITE DE SANTANA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 202
  },
  {
    "numero": 7,
    "name": "ELLOA VITORIA MORAIS RIFA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 23,
      "texto": 48
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 203
  },
  {
    "numero": 8,
    "name": "ENZO GABRIEL RIBEIRO DE JESUS",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 12,
      "pseudopalavras": 16,
      "texto": 16
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 204
  },
  {
    "numero": 9,
    "name": "HEITOR SANTOS DE LACERDA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 205
  },
  {
    "numero": 10,
    "name": "HENRIQUE DA SILVA ARLOCHI RODRIGUES",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 40,
      "texto": 69
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 206
  },
  {
    "numero": 11,
    "name": "JOAQUIM ARLOCHI RODRIGUES DE SOUSA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 31,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 207
  },
  {
    "numero": 12,
    "name": "KAROLAYNE AVELAR DE FREITAS SILVA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 99,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 208
  },
  {
    "numero": 13,
    "name": "KAUA FRANCO DA CUNHA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 209
  },
  {
    "numero": 14,
    "name": "LARISSA DE OLIVEIRA SILVA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 210
  },
  {
    "numero": 15,
    "name": "LORENZO FABIANO VENANCIO PAULA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 127
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 211
  },
  {
    "numero": 16,
    "name": "MAISA NOVAIS DE LIMA E SILVA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 33,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 212
  },
  {
    "numero": 17,
    "name": "MANUELLA PAIVA DE OLIVEIRA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 40,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 213
  },
  {
    "numero": 18,
    "name": "MARIA EDUARDA DA SILVA CAMPOS",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 32,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 214
  },
  {
    "numero": 19,
    "name": "MIRELLA CORREA XAVIER",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 215
  },
  {
    "numero": 20,
    "name": "MURILO MAGALHAES DE CAMPOS",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 40,
      "texto": 106
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 216
  },
  {
    "numero": 21,
    "name": "SARAH MANOELE MOREIRA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 40,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 217
  },
  {
    "numero": 22,
    "name": "SOPHIA EMANUELLE PAIVA BITTENCOURT DOS SANTOS",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 218
  },
  {
    "numero": 23,
    "name": "THALITA HIRAKO WATANABE SOARES",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 219
  },
  {
    "numero": 25,
    "name": "NEEMIAS RODRIGUES DO NASCIMENTO DIONISIO",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 13,
      "pseudopalavras": 13,
      "texto": 16
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 220
  },
  {
    "numero": 29,
    "name": "DAVI LUCAS DA SILVA PERES SANTOS",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 40,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 221
  },
  {
    "numero": 1,
    "name": "AGEU LUIS JESUS DOS SANTOS PIRES",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 30,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 222
  },
  {
    "numero": 2,
    "name": "BEATRIZ DE MELO FREITAS",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 20,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 223
  },
  {
    "numero": 3,
    "name": "BRAYAN KAUAN SANTOS DE MATOS GERALDO",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 9,
      "texto": 18
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 224
  },
  {
    "numero": 4,
    "name": "CECILIA SOBRAL DE ANDRADE",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 23,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 225
  },
  {
    "numero": 5,
    "name": "ELOA ALEXIA DA SILVA SOUZA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 40,
      "texto": 73
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 226
  },
  {
    "numero": 6,
    "name": "HELOA MARTINS OLIVEIRA DA SILVA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 40,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 227
  },
  {
    "numero": 8,
    "name": "JHONATAN APOLINARIO RIBEIRO",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 37,
      "texto": 71
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 228
  },
  {
    "numero": 9,
    "name": "KEVIN RODRIGUES DE SOUZA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 32,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 229
  },
  {
    "numero": 10,
    "name": "LUCAS GONCALVES NOVAES",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 14,
      "texto": 17
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 230
  },
  {
    "numero": 11,
    "name": "LUCAS MARCELO VIEIRA COSTA MENDES",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 120
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 231
  },
  {
    "numero": 12,
    "name": "MARCOS LUIZ DA SILVA ERNEGA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 33,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 232
  },
  {
    "numero": 13,
    "name": "MARCOS VINICIUS DIAS DA SILVA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 233
  },
  {
    "numero": 14,
    "name": "MARIA CLAUDIA DO AMARANTE BOTAO",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 34,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 234
  },
  {
    "numero": 15,
    "name": "MARIA ELLOA DE OLIVEIRA MOREIRA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 17,
      "texto": 39
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 235
  },
  {
    "numero": 16,
    "name": "MARIA LUIZA SILVA DE ALENCAR",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 23,
      "texto": 93
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 236
  },
  {
    "numero": 17,
    "name": "PIETRA MARCONDES BARBOSA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 237
  },
  {
    "numero": 19,
    "name": "RAFAELA PIMENTEL DOS SANTOS",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 18,
      "pseudopalavras": 18,
      "texto": 35
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 238
  },
  {
    "numero": 20,
    "name": "SAMUEL DO CARMO ASSUNCAO",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 31,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 239
  },
  {
    "numero": 21,
    "name": "THOMAS WILLY AMARAL PAMSCH",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 39,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 240
  },
  {
    "numero": 22,
    "name": "YASMIN OLIVEIRA DE ALMEIDA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 50,
      "texto": 88
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 241
  },
  {
    "numero": 24,
    "name": "SOFIA GABRIELLY VIEIRA DA SILVA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 29,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 242
  },
  {
    "numero": 26,
    "name": "MARIA FERNANDA SOARES TRAVASSOS FERREIRA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 243
  },
  {
    "numero": 27,
    "name": "SAMUEL AUGUSTO DA SILVA COSTA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 37,
      "texto": 88
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 244
  },
  {
    "numero": 1,
    "name": "ARTHUR HENRIQUE OLIVEIRA LARANJEIRA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 33,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 245
  },
  {
    "numero": 2,
    "name": "ARTHUR MIGUEL ARAUJO DANIEL",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 27,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 246
  },
  {
    "numero": 3,
    "name": "CLARA LIZ PRADO DA SILVA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 25,
      "texto": 88
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 247
  },
  {
    "numero": 4,
    "name": "DAVI LUCCA DOS SANTOS SOARES",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 40,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 248
  },
  {
    "numero": 5,
    "name": "ELOISA HELENA CLARO DE CARVALHO",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 249
  },
  {
    "numero": 6,
    "name": "EMANUEL ZAFENATE PANEIA DA SILVA MACEDO",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 36,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 250
  },
  {
    "numero": 7,
    "name": "ENZO GABRIEL DANTAS GOMES DA SILVA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 40,
      "texto": 88
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 251
  },
  {
    "numero": 9,
    "name": "HELENA BENTO DE MOURA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 252
  },
  {
    "numero": 10,
    "name": "ISABELLY LIMA DE CAMARGO",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 30,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 253
  },
  {
    "numero": 12,
    "name": "KAUANNE MANOELLA QUEIROZ DA SILVA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 37,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 254
  },
  {
    "numero": 13,
    "name": "LAURA RAPHAELY DA SILVA TORQUATO",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 35,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 255
  },
  {
    "numero": 14,
    "name": "LEONA JESUS BARBOSA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 23,
      "pseudopalavras": 16,
      "texto": 40
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 256
  },
  {
    "numero": 15,
    "name": "MANUELA LUDGERO RODRIGUES",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 21,
      "pseudopalavras": 17,
      "texto": 37
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 257
  },
  {
    "numero": 16,
    "name": "MURILLO FELIX DA SILVA PINHEIRO",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 4,
      "texto": 15
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 258
  },
  {
    "numero": 17,
    "name": "MURILO DAVI DE ASSIS SALDANHA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 40,
      "texto": 76
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 259
  },
  {
    "numero": 18,
    "name": "PALOMA KARINE SOARES BENEDITA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 26,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 260
  },
  {
    "numero": 19,
    "name": "RUAN WILLIAM CONCEIÇAO NUNES DE OLIVEIRA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 18,
      "texto": 56
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 5,
    "id": 261
  },
  {
    "numero": 20,
    "name": "YASMIN FERNANDES DA SILVA NEVES",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 36,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 5,
    "id": 262
  },
  {
    "numero": 21,
    "name": "YTALO WILLIAM MOREIRA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 4,
      "texto": 17
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 5,
    "id": 263
  },
  {
    "numero": 22,
    "name": "MARIA CLARA ANGELOZI RIBEIRO LEAL",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 38,
      "texto": 9
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 6,
    "id": 264
  },
  {
    "numero": 23,
    "name": "JOAO LUCAS LEITE DA SILVA",
    "escola": "Arthur de Andrade",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 13,
      "pseudopalavras": 11,
      "texto": 19
    },
    "sourceFile": "Fluência Leitora 3º ano/Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 6,
    "id": 265
  },
  {
    "numero": 1,
    "name": "ALICE ABREU DA SILVA",
    "escola": "Augusto César Ribeiro",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 23,
      "texto": 71
    },
    "sourceFile": "Fluência Leitora 3º ano/Augusto César Ribeiro EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 266
  },
  {
    "numero": 3,
    "name": "CALEBE OLIVEIRA EVANGELISTA DE CARVALHO ALVES",
    "escola": "Augusto César Ribeiro",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Augusto César Ribeiro EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 267
  },
  {
    "numero": 5,
    "name": "CECILIA MONTEIRO DA SILVA",
    "escola": "Augusto César Ribeiro",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 32,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/Augusto César Ribeiro EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 268
  },
  {
    "numero": 6,
    "name": "CHARBEL SALLOUM DOURI",
    "escola": "Augusto César Ribeiro",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 40,
      "texto": 81
    },
    "sourceFile": "Fluência Leitora 3º ano/Augusto César Ribeiro EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 269
  },
  {
    "numero": 7,
    "name": "EMILLY EMANUELLE MOREIRA DA SILVA",
    "escola": "Augusto César Ribeiro",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 40,
      "texto": 83
    },
    "sourceFile": "Fluência Leitora 3º ano/Augusto César Ribeiro EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 270
  },
  {
    "numero": 8,
    "name": "GIOVANA SAYURI ISIARA",
    "escola": "Augusto César Ribeiro",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 31,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Augusto César Ribeiro EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 271
  },
  {
    "numero": 11,
    "name": "LORENZZO GABRIEL FREITAS PINTO DE GOUVEA",
    "escola": "Augusto César Ribeiro",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 40,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Augusto César Ribeiro EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 272
  },
  {
    "numero": 13,
    "name": "LUCAS JOSE CARDOSO CUBA",
    "escola": "Augusto César Ribeiro",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 40,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Augusto César Ribeiro EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 273
  },
  {
    "numero": 15,
    "name": "MARIA FERNANDA DA SILVA MOREIRA ANDRADE",
    "escola": "Augusto César Ribeiro",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 40,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Augusto César Ribeiro EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 274
  },
  {
    "numero": 17,
    "name": "MARIA JULIA DA SILVA FARIA",
    "escola": "Augusto César Ribeiro",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 40,
      "texto": 115
    },
    "sourceFile": "Fluência Leitora 3º ano/Augusto César Ribeiro EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 275
  },
  {
    "numero": 18,
    "name": "MURILO RIBEIRO MOREIRA",
    "escola": "Augusto César Ribeiro",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 88
    },
    "sourceFile": "Fluência Leitora 3º ano/Augusto César Ribeiro EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 276
  },
  {
    "numero": 19,
    "name": "SAMUEL SILVEIRA FONSECA",
    "escola": "Augusto César Ribeiro",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 33,
      "texto": 69
    },
    "sourceFile": "Fluência Leitora 3º ano/Augusto César Ribeiro EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 277
  },
  {
    "numero": 20,
    "name": "TARCISO DE BARROS MIGUEL GARCIA",
    "escola": "Augusto César Ribeiro",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 40,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Augusto César Ribeiro EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 278
  },
  {
    "numero": 21,
    "name": "THOMAS DE BARROS MIGUEL GARCIA",
    "escola": "Augusto César Ribeiro",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 99,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/Augusto César Ribeiro EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 279
  },
  {
    "numero": 22,
    "name": "VITOR MAGALHAES NAKANO BARROS",
    "escola": "Augusto César Ribeiro",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 34,
      "texto": 93
    },
    "sourceFile": "Fluência Leitora 3º ano/Augusto César Ribeiro EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 280
  },
  {
    "numero": 23,
    "name": "LEVY VICTOR MACHADO CURSINO",
    "escola": "Augusto César Ribeiro",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 32,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Augusto César Ribeiro EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 281
  },
  {
    "numero": 1,
    "name": "ALANA MANUELA DE CAMPOS BRAZILEU",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 282
  },
  {
    "numero": 2,
    "name": "ANA LUIZA AZEVEDO DE SOUZA",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 283
  },
  {
    "numero": 3,
    "name": "BENTO VIEIRA DOS REIS",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 284
  },
  {
    "numero": 4,
    "name": "BRUNA CARDOSO RAFAEL",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 285
  },
  {
    "numero": 5,
    "name": "DANIEL RODRIGUES BARREIRA",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 122
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 286
  },
  {
    "numero": 6,
    "name": "DAVI AUGUSTO BORGES DUTRA",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 24,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 287
  },
  {
    "numero": 9,
    "name": "JOAO MIGUEL DE SOUZA PIRES",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 288
  },
  {
    "numero": 10,
    "name": "JOSE MATHEUS FERNANDES LIRA",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 289
  },
  {
    "numero": 12,
    "name": "LAURA MARIA MOREIRA ROSA",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 27,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 290
  },
  {
    "numero": 13,
    "name": "LUCIO VINICIUS DA SILVA PALOMAS",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 21,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 291
  },
  {
    "numero": 15,
    "name": "MARIA JULIA YUMI SILVA CAZUO",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 292
  },
  {
    "numero": 16,
    "name": "MARIA LIVIA DE ANDRADE SOUZA RAMOS",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 293
  },
  {
    "numero": 17,
    "name": "MARIA VITORIA SILVA DE SIQUEIRA",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 25,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 294
  },
  {
    "numero": 18,
    "name": "MIGUEL ROSA DA SILVA NEVES MARIANO",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 295
  },
  {
    "numero": 19,
    "name": "MIGUEL SILVA COELHO",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 296
  },
  {
    "numero": 21,
    "name": "SOPHIA EMANUELLY CASTRO MIGUEL",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 297
  },
  {
    "numero": 22,
    "name": "SOPHIA GABRIELLY ALVES DE SOUZA",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 131
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 298
  },
  {
    "numero": 23,
    "name": "THALITA DA SILVA FELICIANO",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 299
  },
  {
    "numero": 24,
    "name": "PYETRA HADASSA DE FRANCA",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 300
  },
  {
    "numero": 1,
    "name": "ANNA JULIA FERREIRA DE SOUZA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 36,
      "texto": 61
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 301
  },
  {
    "numero": 2,
    "name": "ANTHONNY JOSUE AZEVEDO MOREIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 38,
      "texto": 135
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 302
  },
  {
    "numero": 3,
    "name": "ANTONELLA SILVA FERREIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 26,
      "texto": 68
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 303
  },
  {
    "numero": 4,
    "name": "ANTONIO CARLOS DE SOUZA DA SILVA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 19,
      "texto": 100
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 304
  },
  {
    "numero": 5,
    "name": "ANTONIO MARCONDES DOS SANTOS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 30,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 305
  },
  {
    "numero": 7,
    "name": "CLARICE MANUELA DOS SANTOS MONTEIRO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 30,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 306
  },
  {
    "numero": 8,
    "name": "DAVI DA SILVA FORTUNATO JUNIOR",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 30,
      "texto": 106
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 307
  },
  {
    "numero": 9,
    "name": "ENZO NUNES DOS SANTOS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 35,
      "texto": 102
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 308
  },
  {
    "numero": 10,
    "name": "FERNANDA GABRIELE CAMARGO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 6,
      "texto": 24
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 309
  },
  {
    "numero": 11,
    "name": "FILIPE FERNANDES DA SILVA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 31,
      "texto": 116
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 310
  },
  {
    "numero": 12,
    "name": "JOAO DAVI DE JESUS SANTOS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 24,
      "texto": 56
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 311
  },
  {
    "numero": 13,
    "name": "KAMYLLY VITÓRIA DOS SANTOS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 9,
      "texto": 7
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 312
  },
  {
    "numero": 14,
    "name": "LAURA FLOR NOVAES DE CARVALHO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 33,
      "texto": 97
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 313
  },
  {
    "numero": 15,
    "name": "LETICIA SANCHES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 24,
      "texto": 97
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 314
  },
  {
    "numero": 16,
    "name": "LUANNA MELANIE GOMES DA SILVA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 27,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 315
  },
  {
    "numero": 17,
    "name": "MANUELA DE ANDRADE MOREIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 30,
      "texto": 71
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 316
  },
  {
    "numero": 18,
    "name": "MANUELA MATTOS DE ALMEIDA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 24,
      "texto": 56
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 317
  },
  {
    "numero": 19,
    "name": "MAYKON DOUGLAS SANCHES DE OLIVEIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 3,
      "texto": 3
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 318
  },
  {
    "numero": 20,
    "name": "SILAS EMANUEL OLIVEIRA ALVES DE SOUSA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 24,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 319
  },
  {
    "numero": 21,
    "name": "SOPHIA EMANUELLY SOARES DE MOURA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 320
  },
  {
    "numero": 22,
    "name": "THAIS HELENA SOUZA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 24,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 321
  },
  {
    "numero": 23,
    "name": "WILLIAN GONCALVES DE OLIVEIRA PORTO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 322
  },
  {
    "numero": 2,
    "name": "ALICE DOS SANTOS FERREIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 12,
      "texto": 35
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 323
  },
  {
    "numero": 3,
    "name": "ALICE SALUSTIANO PEDROSA DE MENEZES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 22,
      "texto": 61
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 324
  },
  {
    "numero": 4,
    "name": "ALICE SANCHES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 35,
      "texto": 96
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 325
  },
  {
    "numero": 5,
    "name": "ANNY HELOISA RODRIGUES SILVA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 35,
      "texto": 81
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 326
  },
  {
    "numero": 6,
    "name": "BRUNO RAMOS LIMA DOS SANTOS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 17,
      "texto": 28
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 327
  },
  {
    "numero": 7,
    "name": "DAVI GUIMARAES RAMOS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 29,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 328
  },
  {
    "numero": 8,
    "name": "EMANUELLY EDUARDA RODRIGUES MONTEIRO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 28,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 329
  },
  {
    "numero": 9,
    "name": "EMANUELLY VITORIA DE JESUS CHAVES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 11,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 330
  },
  {
    "numero": 10,
    "name": "HELENA VITORIA DA SILVA ROSA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 38,
      "texto": 100
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 331
  },
  {
    "numero": 11,
    "name": "HELOISA VICTORIA DA SILVA MELO FRANCO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 36,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 332
  },
  {
    "numero": 12,
    "name": "ISABELA DOS ANJOS CAVALCANTE",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 37,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 333
  },
  {
    "numero": 13,
    "name": "ISABELLA FREITAS RODRIGUES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 9,
      "texto": 7
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 334
  },
  {
    "numero": 14,
    "name": "JOAO LUCAS PEREIRA APOLINARIO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 24,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 335
  },
  {
    "numero": 16,
    "name": "LAILA LETICIA BAPTISTA SCHIBATA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 40,
      "texto": 92
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 336
  },
  {
    "numero": 17,
    "name": "LUCAS HENRIQUE DA SILVA FIALHO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 23,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 337
  },
  {
    "numero": 18,
    "name": "LUIZ GHAEL TOLEDO MARCONDES APARECIDO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 99,
      "texto": 39
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 338
  },
  {
    "numero": 19,
    "name": "MAISA LORRAYNE DA SILVA ALVES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 32,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 339
  },
  {
    "numero": 20,
    "name": "MANUELLA XAVIER ANTUNES DOS SANTOS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 35,
      "texto": 80
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 340
  },
  {
    "numero": 21,
    "name": "PIERRE HENRIQUE MATTOSO MIRANDA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 1,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 341
  },
  {
    "numero": 23,
    "name": "VITHOR HUGO DOS SANTOS OLEGARIO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 20,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 342
  },
  {
    "numero": 24,
    "name": "DOUGLAS DOS SANTOS MANTUANI",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 30,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 343
  },
  {
    "numero": 1,
    "name": "BENJAMIM AZEVEDO MENEZES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 13,
      "texto": 34
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 344
  },
  {
    "numero": 2,
    "name": "DIOGO LUAN FERRAZ GOULART DA SILVA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 40,
      "texto": 71
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 345
  },
  {
    "numero": 5,
    "name": "ENZO GABRIEL BOANI DE OLIVEIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 34,
      "texto": 73
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 346
  },
  {
    "numero": 6,
    "name": "FRANCISCO JORGE CHERUBIN",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 21,
      "texto": 38
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 347
  },
  {
    "numero": 7,
    "name": "LAURA MANDU RIBEIRO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 24,
      "texto": 85
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 348
  },
  {
    "numero": 8,
    "name": "LOHAN WILLIS MARTINS DE OLIVEIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 349
  },
  {
    "numero": 9,
    "name": "LUCAS GABRIEL DE OLIVEIRA SOUZA DA SILVA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 5,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 350
  },
  {
    "numero": 10,
    "name": "LUCAS LUAN DE PAULA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 128
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 351
  },
  {
    "numero": 11,
    "name": "MARIA LUIZA DA SILVA DIAS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 352
  },
  {
    "numero": 13,
    "name": "PEDRO MAXWEL GABRIEL ARAUJO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 40,
      "texto": 66
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 353
  },
  {
    "numero": 14,
    "name": "REINALDO CORREA NETO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 29,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 354
  },
  {
    "numero": 15,
    "name": "RODRIGO GABRIEL PEREIRA PEDRO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 2,
      "pseudopalavras": 5,
      "texto": 14
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 355
  },
  {
    "numero": 17,
    "name": "RUAN CARLOS AQUINO DA SILVA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 23,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 356
  },
  {
    "numero": 18,
    "name": "GABRIEL VINICIUS FERREIRA DOS SANTOS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 30,
      "texto": 49
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 357
  },
  {
    "numero": 19,
    "name": "CALEBE CAMARGO PEREIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 3,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 358
  },
  {
    "numero": 21,
    "name": "ELIZA MARIA MACHADO MOREIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 40,
      "texto": 100
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 359
  },
  {
    "numero": 22,
    "name": "LAVINIA NICOLY DE OLIVEIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 22,
      "texto": 35
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 360
  },
  {
    "numero": 23,
    "name": "ALICE DE SOUZA PONTES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 23,
      "texto": 83
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 361
  },
  {
    "numero": 24,
    "name": "GAEL ANTONIO TRAUNMULLER VIEIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 362
  },
  {
    "numero": 1,
    "name": "ADRIAN GABRIEL AMARO SAMPAIO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 363
  },
  {
    "numero": 3,
    "name": "ELOÁ EMANUELLY DOS SANTOS VITORINO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 30,
      "texto": 122
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 364
  },
  {
    "numero": 4,
    "name": "ESTEVAN DAVI DE OLIVEIRA MENDES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 40,
      "texto": 102
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 365
  },
  {
    "numero": 5,
    "name": "FELIPE LORENZO SANTOS SILVA DE LIMA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 40,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 366
  },
  {
    "numero": 6,
    "name": "GABRIEL LEANDRO DA CONCEIÇÃO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 367
  },
  {
    "numero": 7,
    "name": "GUILHERME ALVES FERREIRA DE QUEIROZ",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 2,
      "texto": 3
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 368
  },
  {
    "numero": 9,
    "name": "HENRIQUE FRANCISCO DE PAULA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 38,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 369
  },
  {
    "numero": 10,
    "name": "ISAAC MOREIRA SANTOS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 34,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 370
  },
  {
    "numero": 11,
    "name": "KAUAN ROGERIO FERREIRA DA COSTA SANTOS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 5,
      "texto": 4
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 371
  },
  {
    "numero": 12,
    "name": "LAVÍNIA VALENTINA BARBOSA RODRIGUES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 1,
      "texto": 10
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 4,
    "id": 372
  },
  {
    "numero": 13,
    "name": "LORENZO GABRIEL DE OLIVEIRA RIBEIRO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 4,
      "texto": 6
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 4,
    "id": 373
  },
  {
    "numero": 14,
    "name": "MARIA GIOVANA MACHADO OLIVEIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 27,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 4,
    "id": 374
  },
  {
    "numero": 15,
    "name": "MURILO LORENTE FERREIRA MATIAS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 4,
    "id": 375
  },
  {
    "numero": 16,
    "name": "PIETRO SANTANA RODRIGUES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 40,
      "texto": 100
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 5,
    "id": 376
  },
  {
    "numero": 17,
    "name": "PYETRA RAFAELLY SILVA DE ARAUJO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 22,
      "texto": 46
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 5,
    "id": 377
  },
  {
    "numero": 18,
    "name": "SOPHIA VICTORIA COUTO SILVA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 36,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 5,
    "id": 378
  },
  {
    "numero": 19,
    "name": "VALENTINA DO REGO MARAIA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 1,
      "pseudopalavras": 3,
      "texto": 3
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 5,
    "id": 379
  },
  {
    "numero": 20,
    "name": "YURI MARQUES CARDOSO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 40,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 6,
    "id": 380
  },
  {
    "numero": 21,
    "name": "MAYTE MOREIRA DE SOUZA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 36,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 6,
    "id": 381
  },
  {
    "numero": 22,
    "name": "EMANUELLY ALVES GRACIANO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 6,
    "id": 382
  },
  {
    "numero": 1,
    "name": "ALICE APARECIDA SALGADO DA SILVA",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 39,
      "texto": 102
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 383
  },
  {
    "numero": 2,
    "name": "ARTHUR JULIANO DE CARVALHO",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 29,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 384
  },
  {
    "numero": 3,
    "name": "BENJAMIN LUCAS CANDIDO MONTEIRO",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 15,
      "texto": 28
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 385
  },
  {
    "numero": 5,
    "name": "HECTOR BENEDITO DE MOURA",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 7,
      "pseudopalavras": 8,
      "texto": 9
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 386
  },
  {
    "numero": 8,
    "name": "ISAQUE DE SOUZA SARAIVA",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 39,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 387
  },
  {
    "numero": 10,
    "name": "KEVIN LUCAS OLIVEIRA RIBEIRO",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 127
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 388
  },
  {
    "numero": 11,
    "name": "LAURA RIBEIRO DA SILVA",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 142
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 389
  },
  {
    "numero": 12,
    "name": "LEONARDO RIBEIRO DE JESUS BUENO",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 390
  },
  {
    "numero": 13,
    "name": "LIVIA ANDRADE COSTA SANTOS",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 33,
      "texto": 100
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 391
  },
  {
    "numero": 14,
    "name": "LUIZ FELIPE DOS SANTOS NASCIMENTO",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 48,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 392
  },
  {
    "numero": 15,
    "name": "LUIZ FERNANDO FERREIRA PIMENTEL",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 30,
      "texto": 69
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 393
  },
  {
    "numero": 16,
    "name": "MARIA CLARA DE SOUZA AQUINO",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 33,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 394
  },
  {
    "numero": 17,
    "name": "MARIA EDUARDA GOMES CANDIDO",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 40,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 395
  },
  {
    "numero": 18,
    "name": "MELISSA GABRIELLY FELIX PIERINI",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 26,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 396
  },
  {
    "numero": 19,
    "name": "NAIRLLON PEREIRA DA COSTA MOURA",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 106
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 397
  },
  {
    "numero": 20,
    "name": "PEROLA FARIA DE OLIVEIRA ROSA DA SILVA",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 94
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 398
  },
  {
    "numero": 21,
    "name": "VALENTINNA RAMOS RIBEIRO DE SOUZA",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 38,
      "texto": 109
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 399
  },
  {
    "numero": 22,
    "name": "JOAO MIGUEL DE ALMEIDA NOTARI CHESTER",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 30,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 400
  },
  {
    "numero": 23,
    "name": "JÚLIA CARVALHO DA SILVA CAMPOS",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 30,
      "texto": 116
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 401
  },
  {
    "numero": 24,
    "name": "MURILO HENRIQUE FERREIRA DE SOUZA",
    "escola": "Félix Adib Miguel",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 40,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 402
  },
  {
    "numero": 1,
    "name": "BRAYAN RAFAEL PEREIRA PAULINO",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 18,
      "texto": 32
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 403
  },
  {
    "numero": 2,
    "name": "ELOAH PASSOS DA COSTA SARAIVA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 30,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 404
  },
  {
    "numero": 3,
    "name": "GUSTAVO DINIZ MACHADO",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 33,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 405
  },
  {
    "numero": 4,
    "name": "JOAO MIGUEL MONTEIRO EDUARDO",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 26,
      "texto": 59
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 406
  },
  {
    "numero": 5,
    "name": "LAURA DOS SANTOS SILVESTRE",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 20,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 407
  },
  {
    "numero": 6,
    "name": "LORENZO MOREIRA DE LIMA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 27,
      "texto": 66
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 408
  },
  {
    "numero": 7,
    "name": "LUANA KEMILLY DE OLIVEIRA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 30,
      "texto": 59
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 409
  },
  {
    "numero": 8,
    "name": "LUIZ LUCAS MACHADO AGUIAR",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 83
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 410
  },
  {
    "numero": 9,
    "name": "LUIZ MATHEUS DE ALMEIDA MONTEIRO",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 23,
      "texto": 45
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 411
  },
  {
    "numero": 10,
    "name": "MARCO ANTONIO DOS SANTOS",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 37,
      "texto": 128
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 412
  },
  {
    "numero": 11,
    "name": "SOPHIA APARECIDA DA SILVA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 13,
      "texto": 47
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 413
  },
  {
    "numero": 12,
    "name": "SOPHIA PIRES GYASAK",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 20,
      "texto": 40
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 414
  },
  {
    "numero": 13,
    "name": "VALENTINA PEREIRA ANEAS DA FONSECA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 20,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 415
  },
  {
    "numero": 14,
    "name": "VICTOR LUKAS PEREIRA DOS SANTOS",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 416
  },
  {
    "numero": 15,
    "name": "MARIA LAURA MENEZES DE LIMA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 16,
      "texto": 29
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 417
  },
  {
    "numero": 1,
    "name": "EMANUELLY DE OLIVEIRA MOURAO",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 36,
      "texto": 98
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO b.pdf",
    "sourcePage": 1,
    "id": 418
  },
  {
    "numero": 2,
    "name": "FLAVIO ALEXANDRE AGUIRRE DE OLIVEIRA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 149
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO b.pdf",
    "sourcePage": 1,
    "id": 419
  },
  {
    "numero": 3,
    "name": "GABRIELLE NUNES DE OLIVEIRA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO b.pdf",
    "sourcePage": 1,
    "id": 420
  },
  {
    "numero": 4,
    "name": "HELENA ALVES SOUZA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 27,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO b.pdf",
    "sourcePage": 2,
    "id": 421
  },
  {
    "numero": 6,
    "name": "LAIS HELENA DA SILVA KRUTLI",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO b.pdf",
    "sourcePage": 2,
    "id": 422
  },
  {
    "numero": 7,
    "name": "LIVIA FERREIRA DOS SANTOS",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 38,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO b.pdf",
    "sourcePage": 2,
    "id": 423
  },
  {
    "numero": 8,
    "name": "MARIA SOPHIA ALVES DOS SANTOS",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 20,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO b.pdf",
    "sourcePage": 2,
    "id": 424
  },
  {
    "numero": 9,
    "name": "MELINA NEROSI PEREIRA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 27,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO b.pdf",
    "sourcePage": 3,
    "id": 425
  },
  {
    "numero": 10,
    "name": "PEDRO SOARES DA SILVA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 16,
      "texto": 25
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO b.pdf",
    "sourcePage": 3,
    "id": 426
  },
  {
    "numero": 11,
    "name": "RAFAEL LOBATO MONTEIRO",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 33,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO b.pdf",
    "sourcePage": 3,
    "id": 427
  },
  {
    "numero": 12,
    "name": "VINICIUS LOURENCO MARQUES",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO b.pdf",
    "sourcePage": 3,
    "id": 428
  },
  {
    "numero": 13,
    "name": "YASMIM OLIVIA DE SOUZA FERREIRA GISTO",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO b.pdf",
    "sourcePage": 4,
    "id": 429
  },
  {
    "numero": 14,
    "name": "PABLO MIGUEL ALMEIDA SOARES",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 30,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO b.pdf",
    "sourcePage": 4,
    "id": 430
  },
  {
    "numero": 1,
    "name": "ALEX BRUNO DE SOUZA BORGES",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 2,
      "pseudopalavras": 1,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 431
  },
  {
    "numero": 3,
    "name": "ANA LIVIA DE GODOY CARDOSO",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 25,
      "texto": 56
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 432
  },
  {
    "numero": 5,
    "name": "ELISEU FERNANDES MARQUES",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 32,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 433
  },
  {
    "numero": 6,
    "name": "ENZO GABRIEL DA SILVA MANCKEL",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 40,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 434
  },
  {
    "numero": 7,
    "name": "GIOVANA MELO VELOSO",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 28,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 435
  },
  {
    "numero": 8,
    "name": "HELENA RODRIGUES DOS SANTOS ALMEIDA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 20,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 436
  },
  {
    "numero": 9,
    "name": "HUGO SANT ANNA FREITAS DA SILVA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 4,
      "texto": 16
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 437
  },
  {
    "numero": 11,
    "name": "JULIO MIGUEL RIBEIRO DO AMARAL",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 20,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 438
  },
  {
    "numero": 12,
    "name": "LAURA MARIA SALVADOR",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 30,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 439
  },
  {
    "numero": 13,
    "name": "LEANDRO DOS SANTOS PEREIRA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 20,
      "texto": 44
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 440
  },
  {
    "numero": 16,
    "name": "MARIA CECILIA DE JESUS QUINTANILHA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 35,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 441
  },
  {
    "numero": 18,
    "name": "MARIA VALENTINA FRIENTES",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 40,
      "texto": 87
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 442
  },
  {
    "numero": 19,
    "name": "MIGUEL LORENZO DE OLIVEIRA VIANA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 20,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 443
  },
  {
    "numero": 20,
    "name": "THEO HENRIQUE MARCONDES DOS SANTOS",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 2,
      "pseudopalavras": 1,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 444
  },
  {
    "numero": 22,
    "name": "DAVI ERICK CESAR SANTOS NASCIMENTO",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 19,
      "texto": 46
    },
    "sourceFile": "Fluência Leitora 3º ano/Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 445
  },
  {
    "numero": 1,
    "name": "AGNES CARDOSO XAVIER",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 34,
      "texto": 115
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 446
  },
  {
    "numero": 2,
    "name": "AILEE MARIA PEREIRA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 30,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 447
  },
  {
    "numero": 3,
    "name": "ALICE FIGUEIREDO ALVES DE TOLEDO",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 30,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 448
  },
  {
    "numero": 6,
    "name": "BERNARDO GOUVEA DA SILVA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 449
  },
  {
    "numero": 7,
    "name": "GIOVANNA FERREIRA BARROS",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 450
  },
  {
    "numero": 8,
    "name": "HEITOR ALVES MOREIRA SOARES",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 451
  },
  {
    "numero": 9,
    "name": "HEITOR RAMOS FLAUZINO",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 23,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 452
  },
  {
    "numero": 10,
    "name": "HELOISA MANUELY HONORATO SILVA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 34,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 453
  },
  {
    "numero": 11,
    "name": "KENJI YUITI POMPEU ARAI",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 17,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 454
  },
  {
    "numero": 12,
    "name": "LARISSA ELOAH VIEIRA MORAES",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 135
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 455
  },
  {
    "numero": 13,
    "name": "MAITE TEIXEIRA PESSETI",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 32,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 456
  },
  {
    "numero": 14,
    "name": "MARIA FERNANDA MENDES CUNHA CRUZ",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 27,
      "texto": 119
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 457
  },
  {
    "numero": 15,
    "name": "PAMELLA DE SOUSA LOBO PEREIRA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 144
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 458
  },
  {
    "numero": 16,
    "name": "SOPHIA GABRIELY MARCELONI DA SILVA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 15,
      "texto": 41
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 459
  },
  {
    "numero": 17,
    "name": "THÉO PACHECO DE ALMEIDA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 460
  },
  {
    "numero": 18,
    "name": "THEODORA FERREIRA DE ALMEIDA VASCONCELOS",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 34,
      "texto": 97
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 461
  },
  {
    "numero": 20,
    "name": "NATHALIA HAYDEE ZAINAGHI DE OLIVEIRA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 462
  },
  {
    "numero": 21,
    "name": "MATHEUS OLIVEIRA CUNHA ALTAMIRO",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 31,
      "pseudopalavras": 25,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 463
  },
  {
    "numero": 22,
    "name": "SOPHIA ROSA DIAS MATIAS",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 40,
      "texto": 83
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 7,
    "id": 464
  },
  {
    "numero": 2,
    "name": "ANTONELLA CANDIDO VAZ",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 465
  },
  {
    "numero": 3,
    "name": "BRYAN LUCCA RIBEIRO OLIVEIRA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 466
  },
  {
    "numero": 4,
    "name": "CECILIA REBECA BARROS DE OLIVEIRA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 467
  },
  {
    "numero": 5,
    "name": "EDUARDO SIQUEIRA DA SILVA SANTOS",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 10,
      "texto": 27
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 468
  },
  {
    "numero": 6,
    "name": "JOANA AYUMI SONODA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 35,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 469
  },
  {
    "numero": 7,
    "name": "LORENZO WILLIAN DE SOUZA GUIMARAES",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 12,
      "texto": 25
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 470
  },
  {
    "numero": 9,
    "name": "LUCCA DUARTE MARTINS ALVES",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 471
  },
  {
    "numero": 10,
    "name": "LUMA MOREIRA DE CAMARGO",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 472
  },
  {
    "numero": 12,
    "name": "MELISSA CYPRIANO SALGADO",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 473
  },
  {
    "numero": 13,
    "name": "NICOLAS RAMOS MACHADO",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 474
  },
  {
    "numero": 14,
    "name": "PEDRO HENRIQUE DE SOUZA RAMOS",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 475
  },
  {
    "numero": 15,
    "name": "RAFAEL CAMILO SILVA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 120
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 476
  },
  {
    "numero": 16,
    "name": "RAFAELA MENDES DA FONSECA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 477
  },
  {
    "numero": 17,
    "name": "RYAN MACEDO SIQUEIRA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 478
  },
  {
    "numero": 19,
    "name": "VIOLETA MEDINA SANDIM",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 143
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 479
  },
  {
    "numero": 20,
    "name": "IZABELLY HELENA DE JESUS ALVES",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 480
  },
  {
    "numero": 21,
    "name": "MURILO TEIXEIRA ALVES",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 30,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 481
  },
  {
    "numero": 1,
    "name": "ALICE ARISTEU DIAS",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 156
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 482
  },
  {
    "numero": 2,
    "name": "BIANCA ISABELLY RIBEIRO CARVALHO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 40,
      "texto": 77
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 483
  },
  {
    "numero": 3,
    "name": "BRUNO MORETTI BURATTO FORTINO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 18,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 484
  },
  {
    "numero": 4,
    "name": "CATARINA DE SOUZA OLIVEIRA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 156
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 485
  },
  {
    "numero": 5,
    "name": "DAVI ALEXANDRE SANTOS",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 486
  },
  {
    "numero": 6,
    "name": "DAVI MARCONDES VERONESE",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 156
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 487
  },
  {
    "numero": 7,
    "name": "EVA FERREIRA DOS SANTOS",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 156
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 488
  },
  {
    "numero": 8,
    "name": "GABRIEL FONSECA BASILIO CUNHA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 112
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 489
  },
  {
    "numero": 9,
    "name": "HELENA BEATRIZ DOS SANTOS GARCIA MUNHOZ",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 132
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 490
  },
  {
    "numero": 10,
    "name": "LARA NUNES ROSA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 156
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 491
  },
  {
    "numero": 11,
    "name": "LETICIA RODRIGUES DUARTE",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 99,
      "pseudopalavras": 38,
      "texto": 101
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 492
  },
  {
    "numero": 12,
    "name": "MANUELY STIGARE LOPES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 156
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 493
  },
  {
    "numero": 13,
    "name": "MARIA ALICE SANTOS DA SILVA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 35,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 494
  },
  {
    "numero": 14,
    "name": "MATHEUS EVARISTO PADILHA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 156
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 495
  },
  {
    "numero": 15,
    "name": "MIGUEL LUCCA DA SILVA MATOS",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 156
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 496
  },
  {
    "numero": 16,
    "name": "MIGUEL PAULA E SILVA NEVES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 70,
      "pseudopalavras": 40,
      "texto": 114
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 497
  },
  {
    "numero": 17,
    "name": "RAFAELA BARBOSA RUCCINI MOREIRA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 10,
      "texto": 35
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 498
  },
  {
    "numero": 18,
    "name": "RAFAELLA CUNDARI DE ANDRADE PEREIRA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 114
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 499
  },
  {
    "numero": 19,
    "name": "SAMUEL DOS SANTOS PACHECO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 29,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 500
  },
  {
    "numero": 20,
    "name": "SAMUEL VIANA SILVEIRA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 29,
      "texto": 51
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 501
  },
  {
    "numero": 21,
    "name": "SARAH ROSARIO BUENO ROMEIRO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 40,
      "texto": 77
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 502
  },
  {
    "numero": 22,
    "name": "HENZO GABRYEL ARAUJO DOS SANTOS",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 10,
      "texto": 30
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 503
  },
  {
    "numero": 23,
    "name": "EMILLY SANTANA DE MELLO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 156
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 504
  },
  {
    "numero": 24,
    "name": "CAUANE SOUZA VENTURA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 40,
      "texto": 77
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 505
  },
  {
    "numero": 25,
    "name": "MIGUEL HENRIQUE DOS SANTOS BARBOSA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 112
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 506
  },
  {
    "numero": 1,
    "name": "ALICE DE CASTRO RIBEIRO REISES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 106
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 507
  },
  {
    "numero": 2,
    "name": "ALICE REIS DOS SANTOS SALES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 3,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 508
  },
  {
    "numero": 3,
    "name": "ANA BEATRIZ BASSANELLI DE CAMPOS NEVES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 509
  },
  {
    "numero": 4,
    "name": "BENICIO PUPIO MAGALHÃES GOMES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 40,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 510
  },
  {
    "numero": 5,
    "name": "BIANCA LEITE BERALDO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 511
  },
  {
    "numero": 6,
    "name": "BRUNO LUIS CORREA JUNIOR",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 7,
      "texto": 23
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 512
  },
  {
    "numero": 7,
    "name": "CAMILA PAIXAO BERNARDES DE ANDRADE",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 122
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 513
  },
  {
    "numero": 8,
    "name": "DANIEL CANINEO RODOLFO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 106
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 514
  },
  {
    "numero": 10,
    "name": "GABRIEL ALVES ROSA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 515
  },
  {
    "numero": 11,
    "name": "IGOR LOPES PEREIRA AFONSO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 516
  },
  {
    "numero": 12,
    "name": "JULLYA DA SILVA BISPO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 40,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 517
  },
  {
    "numero": 13,
    "name": "KAUAN HENRIQUE FERREIRA SIQUEIRA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 20,
      "texto": 27
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 518
  },
  {
    "numero": 14,
    "name": "LAVINIA AURELIANO DA SILVA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 37,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 519
  },
  {
    "numero": 15,
    "name": "LORENZO DE PAULA ALVES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 520
  },
  {
    "numero": 16,
    "name": "LORENZO GABRIEL DE SOUZA ALMEIDA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 97
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 521
  },
  {
    "numero": 17,
    "name": "MANUELA OLIVEIRA TEODORO DA SILVA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 32,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 522
  },
  {
    "numero": 18,
    "name": "MARIA CLARA RIBEIRO CRUZ FARIA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 523
  },
  {
    "numero": 19,
    "name": "MARIA TEREZA CORREA DE OLIVEIRA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 53,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 524
  },
  {
    "numero": 20,
    "name": "MARIANA MARQUES DA SILVA CAMARGO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 122
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 525
  },
  {
    "numero": 22,
    "name": "VINICIUS FONSECA NAGASHIMA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 16,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 526
  },
  {
    "numero": 23,
    "name": "LAURA LIMA PEREIRA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 35,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 527
  },
  {
    "numero": 1,
    "name": "ANTONIO CABRAL PYLES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 51,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 528
  },
  {
    "numero": 3,
    "name": "CAUE AVELLAR CAMPOS",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 29,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 529
  },
  {
    "numero": 4,
    "name": "EMANUELLY SILVA DOS SANTOS",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 83
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 530
  },
  {
    "numero": 5,
    "name": "GIOVANNA DE SOUSA MARIN",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 27,
      "texto": 58
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 531
  },
  {
    "numero": 6,
    "name": "HELENA CEZARIO TEIXEIRA CESAR",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 22,
      "texto": 47
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 532
  },
  {
    "numero": 7,
    "name": "JOAO GABRIEL OLIVEIRA IMEDIATO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 30,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 533
  },
  {
    "numero": 10,
    "name": "LAURA BEATRIZ MONTANARI BRANDAO DE OLIVEIRA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 33,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 534
  },
  {
    "numero": 11,
    "name": "LORENZO DAVI FAUSTINO MOREIRA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 535
  },
  {
    "numero": 12,
    "name": "LORENZO RICHARD DE ANDRADE PRADO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 40,
      "texto": 76
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 536
  },
  {
    "numero": 14,
    "name": "MANUELA LUIZA SALVADOR FRANCISCO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 40,
      "texto": 98
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 537
  },
  {
    "numero": 15,
    "name": "MARIA EMANUELE MOREIRA ALVES DOS SANTOS",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 22,
      "pseudopalavras": 18,
      "texto": 37
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 538
  },
  {
    "numero": 18,
    "name": "NICOLLY CRISTINA DE MELO GOMES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 38,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 539
  },
  {
    "numero": 19,
    "name": "REBECA CORREA LEITE MOTA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 40,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 540
  },
  {
    "numero": 20,
    "name": "THIAGO LUCCA MOREIRA SANTOS SILVA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 20,
      "texto": 41
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 541
  },
  {
    "numero": 25,
    "name": "MORGANA SQUARCINI CARVALHO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 25,
      "texto": 49
    },
    "sourceFile": "Fluência Leitora 3º ano/Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 542
  },
  {
    "numero": 1,
    "name": "ANA BEATRIZ DONATILIO DA SILVA",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 21,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 543
  },
  {
    "numero": 2,
    "name": "ANA LIVIA FERREIRA SILVA",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 33,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 544
  },
  {
    "numero": 3,
    "name": "ANA LIVIA QUEVEDO BARRETO",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 40,
      "texto": 71
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 545
  },
  {
    "numero": 4,
    "name": "ARTHUR VALERIO SILVA",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 546
  },
  {
    "numero": 6,
    "name": "CAMILLY SONIA MOREIRA RODRIGUES",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 40,
      "texto": 61
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 547
  },
  {
    "numero": 7,
    "name": "EDUARDO AUGUSTO DOS SANTOS COSTA",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 40,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 548
  },
  {
    "numero": 9,
    "name": "ENZO NOVAES DE OLIVEIRA",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 40,
      "texto": 64
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 549
  },
  {
    "numero": 11,
    "name": "GUSTAVO ALVES ANSELMO DA SILVA",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 40,
      "texto": 79
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 550
  },
  {
    "numero": 12,
    "name": "HEITOR DA SILVA LUIZ PIRES",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 40,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 551
  },
  {
    "numero": 13,
    "name": "JHONATA KELVIN OLIVEIRA SILVA",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 6,
      "pseudopalavras": 5,
      "texto": 10
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 552
  },
  {
    "numero": 14,
    "name": "JOAO MIGUEL DOS SANTOS LIMA",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 25,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 553
  },
  {
    "numero": 15,
    "name": "JONAS NATHANAEL ALVES DE SOUZA",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 33,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 554
  },
  {
    "numero": 16,
    "name": "LAURA MIKAELLA SANTOS DE CARVALHO",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 25,
      "texto": 37
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 555
  },
  {
    "numero": 17,
    "name": "LEONARDO DOS SANTOS BARBOSA",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 40,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 556
  },
  {
    "numero": 18,
    "name": "LORENZO AUGUSTO CORREIA LOPES",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 99,
      "texto": 41
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 557
  },
  {
    "numero": 19,
    "name": "LUAN DE CAMPOS GUIMARAES",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 31,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 558
  },
  {
    "numero": 20,
    "name": "LUIS FELIPE CHAGAS SALGADO",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 27,
      "texto": 37
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 559
  },
  {
    "numero": 21,
    "name": "MARIA CLARA NOGUEIRA DA SILVA",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 40,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 560
  },
  {
    "numero": 22,
    "name": "MARIA HELLENA FERREIRA DA SILVA",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 23,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 561
  },
  {
    "numero": 23,
    "name": "MATHEUS PIERRI SANTOS FLORES",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 32,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 562
  },
  {
    "numero": 24,
    "name": "MICHEL ANDERSON MONTEIRO SANCHES DA SILVA",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 127
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 563
  },
  {
    "numero": 25,
    "name": "RAFAELLA ELENA DE OLIVEIRA BALBINO",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 564
  },
  {
    "numero": 26,
    "name": "STELLA APARECIDA EUGENIO ZANETE",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 40,
      "texto": 81
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 565
  },
  {
    "numero": 27,
    "name": "THOMAZ SILVA MEDEIROS",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 13,
      "texto": 37
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 566
  },
  {
    "numero": 30,
    "name": "LUIZ HENRIQUE DA FONSECA CESAR FERREIRA",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 34,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 567
  },
  {
    "numero": 31,
    "name": "NICOLLY FERNANDA FRANCISCO DE CAMPOS",
    "escola": "João Cesário",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 35,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 568
  },
  {
    "numero": 1,
    "name": "ALICE EMANUELLY DEFENSOR ALVES",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 38,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 569
  },
  {
    "numero": 2,
    "name": "ANTÔNIO JOSHUA GONÇALVES DOS SANTOS",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 570
  },
  {
    "numero": 3,
    "name": "BRAYAN DA SILVA DUARTE",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 571
  },
  {
    "numero": 4,
    "name": "BRUNA MOREIRA DOS SANTOS",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 36,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 572
  },
  {
    "numero": 5,
    "name": "DANIEL DE ALVARENGA CREDES",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 40,
      "texto": 97
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 573
  },
  {
    "numero": 6,
    "name": "DAVI HENRIQUE NASCIMENTO FERREIRA",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 30,
      "texto": 94
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 574
  },
  {
    "numero": 7,
    "name": "DAVI VITORIA FERREIRA",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 30,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 575
  },
  {
    "numero": 8,
    "name": "ELI MIGUEL FELIPE ARAUJO DOS SANTOS",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 40,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 576
  },
  {
    "numero": 9,
    "name": "ELIAS GABRIEL DA SILVA BARBOZA VICTOR",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 32,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 577
  },
  {
    "numero": 10,
    "name": "EMANUELLY ALVES SAMPAIO TEIXEIRA",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 59,
      "pseudopalavras": 40,
      "texto": 109
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 578
  },
  {
    "numero": 11,
    "name": "JOAO MIGUEL DE SOUZA CORREA",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 59,
      "pseudopalavras": 40,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 579
  },
  {
    "numero": 12,
    "name": "KEMILLY YASMIN DANTAS GUIMARAES",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 40,
      "texto": 111
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 580
  },
  {
    "numero": 13,
    "name": "KIMBERLY BEATRIZ DE MOURA RAMOS",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 41,
      "texto": 69
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 581
  },
  {
    "numero": 14,
    "name": "LAUANE EMANUELLY FERNANDES DE JESUS LEITE",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 35,
      "pseudopalavras": 17,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 582
  },
  {
    "numero": 15,
    "name": "LUIZ FELIPE DOS SANTOS ROMEIRO",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 35,
      "texto": 87
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 583
  },
  {
    "numero": 17,
    "name": "MARIA LUIZA SOUZA GALVAO",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 30,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 584
  },
  {
    "numero": 18,
    "name": "MARIA VITORIA PEREIRA FIRMINO SANTOS",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 40,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 585
  },
  {
    "numero": 19,
    "name": "MATHEUS OLIVEIRA SOUZA",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 29,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 586
  },
  {
    "numero": 20,
    "name": "MELISSA HELENA DE ALMEIDA GUIMARAES DE FREITAS SILVA",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 22,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 587
  },
  {
    "numero": 21,
    "name": "MICKAEL CARLOS DE ARAUJO DA SILVA",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 40,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 588
  },
  {
    "numero": 22,
    "name": "MIGUEL AUREO ABREU DOS REIS",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 40,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 589
  },
  {
    "numero": 23,
    "name": "RAIANE REBECA DINIZ ALVES",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 25,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 590
  },
  {
    "numero": 24,
    "name": "REBECA BEATRIZ VITURIANO DO NASCIMENTO",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 34,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 591
  },
  {
    "numero": 25,
    "name": "SAMUEL CORDEIRO RAMOS",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 25,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 592
  },
  {
    "numero": 26,
    "name": "THIAGO MOREIRA REIS",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 593
  },
  {
    "numero": 27,
    "name": "RIZIA FERREIRA COSTA",
    "escola": "João Cesário",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 594
  },
  {
    "numero": 1,
    "name": "ALICIA MASSARIN",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 32,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 595
  },
  {
    "numero": 3,
    "name": "ANTONIETA VITORIA OLIVEIRA DA SILVA EUFRASIO",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 10,
      "texto": 14
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 596
  },
  {
    "numero": 4,
    "name": "ARTHUR PAULA DE SOUZA",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 60,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 597
  },
  {
    "numero": 5,
    "name": "ARTHUR VALENTIN TEIXEIRA DOS SANTOS",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 26,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 598
  },
  {
    "numero": 6,
    "name": "AYRTON DE SOUZA NETO",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 32,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 599
  },
  {
    "numero": 8,
    "name": "CARLOS GUSTAVO SILVA",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 92
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 600
  },
  {
    "numero": 9,
    "name": "ENZO EDUARDO MONTEIRO MARCONDES",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 34,
      "texto": 66
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 601
  },
  {
    "numero": 10,
    "name": "HELENA EMANUELLY COELHO DE SOUZA",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 26,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 602
  },
  {
    "numero": 11,
    "name": "HELOISA VITORIA SILVA FERREIRA",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 60,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 603
  },
  {
    "numero": 12,
    "name": "ISAAC WILLIANS FERNANDES",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 35,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 604
  },
  {
    "numero": 13,
    "name": "JULIANO DA SILVA MIRANDA",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 605
  },
  {
    "numero": 14,
    "name": "LAYANY EMANUELLY DA SILVA LIMA ALVES",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 18,
      "texto": 29
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 606
  },
  {
    "numero": 15,
    "name": "MANUELA MOURA LIMA SOARES",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 40,
      "texto": 71
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 607
  },
  {
    "numero": 16,
    "name": "MARIA ALICE DA SILVA MARCELO",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 13,
      "texto": 15
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 608
  },
  {
    "numero": 17,
    "name": "MARIA HELOISA DO CARMO DA SILVA",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 5,
      "texto": 5
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 4,
    "id": 609
  },
  {
    "numero": 18,
    "name": "MIGUEL NICASSIO GODOI",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 4,
    "id": 610
  },
  {
    "numero": 19,
    "name": "MONIKA MIRELLA MOREIRA CUSTODIO SATURNINO",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 30,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 4,
    "id": 611
  },
  {
    "numero": 20,
    "name": "MURILO FORMIGA GONÇALVES",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 100
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 4,
    "id": 612
  },
  {
    "numero": 22,
    "name": "RAISSA VITORIA DA SILVA PEREIRA",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 5,
    "id": 613
  },
  {
    "numero": 24,
    "name": "SOPHIA VITORIA DE CAMPOS PEREIRA",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 36,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 5,
    "id": 614
  },
  {
    "numero": 26,
    "name": "GLAUDISTON MATHEUS ARAUJO DE MELO VIEIRA",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 27,
      "texto": 40
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 5,
    "id": 615
  },
  {
    "numero": 28,
    "name": "CAIO LEANDRO DA SILVA",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 32,
      "texto": 51
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 6,
    "id": 616
  },
  {
    "numero": 30,
    "name": "GUSTAVO DO NASCIMENTO RAFAEL",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 8,
      "texto": 13
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 6,
    "id": 617
  },
  {
    "numero": 31,
    "name": "PYETRO YURI GONCALVES PIMENTA",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 21,
      "texto": 35
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 6,
    "id": 618
  },
  {
    "numero": 32,
    "name": "PYERRI YAGO GONCALVES PIMENTA",
    "escola": "João Cesário",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 26,
      "texto": 38
    },
    "sourceFile": "Fluência Leitora 3º ano/João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 6,
    "id": 619
  },
  {
    "numero": 1,
    "name": "ALICE GONÇALVES DOS SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 15,
      "texto": 33
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 620
  },
  {
    "numero": 2,
    "name": "DAVID VINICIUS FERREIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 30,
      "texto": 111
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 621
  },
  {
    "numero": 3,
    "name": "EZEQUIEL ALECIO GONÇALVES JUNIOR",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 26,
      "texto": 64
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 622
  },
  {
    "numero": 4,
    "name": "GABRIEL MATHEUS FERNANDES DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 623
  },
  {
    "numero": 5,
    "name": "HELENA DE PAULA CLARO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 32,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 624
  },
  {
    "numero": 7,
    "name": "ISAAC GABRIEL SILVA SANCHES DOS SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 625
  },
  {
    "numero": 8,
    "name": "ISADORA DE SOUZA MORGADO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 5,
      "texto": 10
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 626
  },
  {
    "numero": 9,
    "name": "JULYANA OCTACILIO DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 24,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 627
  },
  {
    "numero": 10,
    "name": "LAVINIA ANTONELLA CARVALHO DOS SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 16,
      "pseudopalavras": 21,
      "texto": 40
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 628
  },
  {
    "numero": 11,
    "name": "LUYZA HELENA PEREIRA ALVES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 38,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 629
  },
  {
    "numero": 12,
    "name": "MAURICIO MARTINS DO NASCIMENTO RAMBO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 630
  },
  {
    "numero": 13,
    "name": "MIGUEL GALLO GOMES DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 14,
      "pseudopalavras": 13,
      "texto": 34
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 631
  },
  {
    "numero": 14,
    "name": "MURILO DE PAULA MARIANO DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 35,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 632
  },
  {
    "numero": 15,
    "name": "NATHAN DE JESUS DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 6,
      "texto": 9
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 633
  },
  {
    "numero": 17,
    "name": "SOPHIA GABRIELLY ROSA DE PAULA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 32,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 634
  },
  {
    "numero": 18,
    "name": "VICTORIA DA SILVA CONCEICAO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 32,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 635
  },
  {
    "numero": 19,
    "name": "ENZO GABRIEL CAMARGO DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 8,
      "pseudopalavras": 10,
      "texto": 10
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 636
  },
  {
    "numero": 21,
    "name": "KIMBERLY VITORIA SILVA DE JESUS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 34,
      "texto": 98
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 637
  },
  {
    "numero": 22,
    "name": "JOÃO MIGUEL DE ARAUJO PEREIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 30,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 638
  },
  {
    "numero": 23,
    "name": "ARTHUR FELYPE FERREIRA DOS SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 142
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 639
  },
  {
    "numero": 1,
    "name": "ADRYAN HENRIQUE LESSA EVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 89
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 640
  },
  {
    "numero": 2,
    "name": "ALISSON FERREIRA DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 28,
      "texto": 49
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 641
  },
  {
    "numero": 3,
    "name": "ANA LAURA RODRIGUES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 35,
      "texto": 42
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 642
  },
  {
    "numero": 4,
    "name": "ANA LIVIA VENANCIO AMARAL",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 40,
      "texto": 52
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 643
  },
  {
    "numero": 5,
    "name": "DOUGLAS LUAN MENDES DE SOUZA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 9,
      "texto": 19
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 644
  },
  {
    "numero": 6,
    "name": "ERICK ENRIQUE FERREIRA DE OLIVEIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 645
  },
  {
    "numero": 8,
    "name": "KAUAN VILEGAS OLIVEIRA DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 2,
      "pseudopalavras": 2,
      "texto": 4
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 646
  },
  {
    "numero": 9,
    "name": "LUCAS BORGES LEMES DA SILVA FILHO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 27,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 647
  },
  {
    "numero": 10,
    "name": "LUIZA THEREZA DE JESUS SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 88
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 648
  },
  {
    "numero": 13,
    "name": "NIKOLLE VITORIA BENTO SABINO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 22,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 649
  },
  {
    "numero": 14,
    "name": "RHAYANNE MARIANA REIS DOS SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 40,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 650
  },
  {
    "numero": 16,
    "name": "VINICIUS MARTINS DO NASCIMENTO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 40,
      "texto": 100
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 651
  },
  {
    "numero": 17,
    "name": "MARIA HELENA BAILAN DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 652
  },
  {
    "numero": 19,
    "name": "JOSÉ LUIZ MIGUEL DA SILVA MATEUS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 26,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 653
  },
  {
    "numero": 20,
    "name": "HELOISA RAFAELA DE OLIVEIRA SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 25,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 654
  },
  {
    "numero": 21,
    "name": "LUCAS GARCIA DINIZ ARRUDA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 40,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 655
  },
  {
    "numero": 22,
    "name": "JOAO PEDRO FERREIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 28,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 656
  },
  {
    "numero": 23,
    "name": "REBECA CAVALCANTE SOUZA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 5,
      "texto": 16
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 657
  },
  {
    "numero": 24,
    "name": "MARIA EDUARDA PEREIRA SIQUEIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 658
  },
  {
    "numero": 1,
    "name": "DAVI LUCCA MIRANDA MEDEIROS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 13,
      "pseudopalavras": 10,
      "texto": 19
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 659
  },
  {
    "numero": 2,
    "name": "ELOAH VITORIA BERNARDES DE OLIVEIRA CARVALHO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 23,
      "texto": 46
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 660
  },
  {
    "numero": 4,
    "name": "ERICK ANDREW DA SILVA SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 38,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 661
  },
  {
    "numero": 5,
    "name": "EVELLYN DOS ANJOS ROMAO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 32,
      "texto": 58
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 662
  },
  {
    "numero": 7,
    "name": "HELOISA LEITE DOS SANTOS BARBOSA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 8,
      "texto": 20
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 663
  },
  {
    "numero": 9,
    "name": "JOAO GABRIEL DA SILVA SOUZA SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 3,
      "texto": 40
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 664
  },
  {
    "numero": 10,
    "name": "JONAS GABRIEL SANTOS DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 27,
      "texto": 36
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 665
  },
  {
    "numero": 12,
    "name": "LAURA HELENA DE PAULA MIRANDA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 30,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 666
  },
  {
    "numero": 13,
    "name": "LAURA OLIVEIRA DE LIMA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 31,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 667
  },
  {
    "numero": 18,
    "name": "PYETRA MANUELLY DA SILVA SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 3,
      "texto": 6
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 668
  },
  {
    "numero": 19,
    "name": "YURI ADRIELL LEMES DE OLIVEIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 40,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 669
  },
  {
    "numero": 21,
    "name": "TIAGO ANDRADE SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 10,
      "texto": 22
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 670
  },
  {
    "numero": 22,
    "name": "MAITE LORRAINY COSTA DE ALMEIDA SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 8,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 671
  },
  {
    "numero": 24,
    "name": "ELLOA LUANE TEIXEIRA DE CASTRO ELIZIARIO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 2,
      "pseudopalavras": 2,
      "texto": 8
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 672
  },
  {
    "numero": 25,
    "name": "MANUELLA VALENTINA DOS SANTOS BOLSON",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 34,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 673
  },
  {
    "numero": 26,
    "name": "TAYLOR LEITE REZENDE RODRIGUES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 674
  },
  {
    "numero": 28,
    "name": "LUAN GABRIEL DOS SANTOS DA CRUZ",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 33,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 675
  },
  {
    "numero": 29,
    "name": "ARTHUR RODRIGO AUGUSTINHO DA SILVA FREITAS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 676
  },
  {
    "numero": 30,
    "name": "KATHRYN ISABELLY PIRES GODOY",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 25,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 677
  },
  {
    "numero": 31,
    "name": "ISABELLE BEATRIZ ALVES CORDEIRO SALGADO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 6,
      "pseudopalavras": 5,
      "texto": 15
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 678
  },
  {
    "numero": 1,
    "name": "CALEBE MIGUEL SILVA ROCHA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 12,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 679
  },
  {
    "numero": 2,
    "name": "CLARA HELLOYSA MARQUES DE LIMA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 5,
      "texto": 32
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 680
  },
  {
    "numero": 3,
    "name": "DAVI DE JESUS ROMANO DOS SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 681
  },
  {
    "numero": 5,
    "name": "EMANUELLE VITORIA DOS SANTOS DALVES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 30,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 682
  },
  {
    "numero": 6,
    "name": "EMILY FRANKLIN RODRIGUES ROCHA DUARTE",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 35,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 683
  },
  {
    "numero": 7,
    "name": "GABRIEL JESUS GONÇALVES VIANA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 30,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 684
  },
  {
    "numero": 8,
    "name": "ISABELLA MARIANO AQUINO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 5,
      "pseudopalavras": 2,
      "texto": 6
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 685
  },
  {
    "numero": 9,
    "name": "JOAO GUILHERME DA SILVA DO ESPIRITO SANTO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 686
  },
  {
    "numero": 10,
    "name": "JOAO MIGUEL ALVES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 26,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 687
  },
  {
    "numero": 11,
    "name": "JOSE RAIMUNDO JESUS DANTAS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 30,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 688
  },
  {
    "numero": 12,
    "name": "KAUANE GABRIELLE FERREIRA PEDRO MARQUES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 16,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 689
  },
  {
    "numero": 13,
    "name": "KIMBERLLY VITORIA DA SILVA FARIAS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 20,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 690
  },
  {
    "numero": 17,
    "name": "MATHEUS ROGÉRIO DE SOUZA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 20,
      "texto": 47
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 691
  },
  {
    "numero": 19,
    "name": "MIGUEL ABNER DANTAS CORREA LEITE",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 34,
      "texto": 115
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 692
  },
  {
    "numero": 20,
    "name": "MYLLENA MUCCI ORNELAS DE OLIVEIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 25,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 693
  },
  {
    "numero": 21,
    "name": "SAMUEL RICARD DE OLIVEIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 7,
      "texto": 17
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 694
  },
  {
    "numero": 22,
    "name": "THIAGO LIMA MENDROT DA CRUZ",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 28,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 695
  },
  {
    "numero": 23,
    "name": "VITOR SANTOS BARBOSA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 34,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 696
  },
  {
    "numero": 24,
    "name": "PEDRO LUCAS CARVALHO DOS SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 7,
      "texto": 29
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 697
  },
  {
    "numero": 25,
    "name": "ANNA JULYA SILVERIO DA COSTA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 18,
      "texto": 37
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 4,
    "id": 698
  },
  {
    "numero": 26,
    "name": "JOAO GABRIEL GALDINO LOPES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 29,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 4,
    "id": 699
  },
  {
    "numero": 1,
    "name": "ALANYS CONSTANTINI GONCALVES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 27,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 700
  },
  {
    "numero": 2,
    "name": "ALICE EMANUELLY DE SOUZA MIGUEL",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 27,
      "texto": 41
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 701
  },
  {
    "numero": 3,
    "name": "ANGELINA MARIA MATTOS DOS ANJOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 40,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 702
  },
  {
    "numero": 4,
    "name": "ANNA LUIZA DE SOUSA SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 703
  },
  {
    "numero": 6,
    "name": "BENICIO BRAZ DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 704
  },
  {
    "numero": 7,
    "name": "CAIO LUCCA DE BRITO MONTEIRO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 705
  },
  {
    "numero": 8,
    "name": "DAVI CONTI APOLINARIO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 135
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 706
  },
  {
    "numero": 9,
    "name": "DAVI LUIZ DE LIMA TEIXEIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 707
  },
  {
    "numero": 10,
    "name": "ELOAH GONÇALVES BUENO CARDOSO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 24,
      "texto": 46
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 708
  },
  {
    "numero": 11,
    "name": "EMANUELLE SILVA DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 24,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 709
  },
  {
    "numero": 12,
    "name": "ENZO WILLIAN AUGUSTO DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 73
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 710
  },
  {
    "numero": 13,
    "name": "GABRIEL PAULO DE OLIVEIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 711
  },
  {
    "numero": 14,
    "name": "GABRIELLY SANCHES FORTES RODRIGUES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 30,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 712
  },
  {
    "numero": 16,
    "name": "HELENA OLIVEIRA MARANHAO LOPES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 40,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 713
  },
  {
    "numero": 17,
    "name": "ISABELA DOS SANTOS CONFALONI",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 714
  },
  {
    "numero": 19,
    "name": "KETHELLEN KAROLLAYNE DOS SANTOS AQUINO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 4,
      "texto": 17
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 715
  },
  {
    "numero": 20,
    "name": "MARIANE CRISTINA DE CAMPOS OLIVEIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 143
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 716
  },
  {
    "numero": 21,
    "name": "MURILLO DIAS GARUFFI PEDROSO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 40,
      "texto": 87
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 717
  },
  {
    "numero": 22,
    "name": "NICOLAS CARDOSO CAVALCA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 34,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 7,
    "id": 718
  },
  {
    "numero": 25,
    "name": "WELLINGTON EDUARDO LUIZ DA COSTA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 8,
      "pseudopalavras": 8,
      "texto": 9
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 7,
    "id": 719
  },
  {
    "numero": 26,
    "name": "MARIA HELLENA OLIVEIRA DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 40,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 7,
    "id": 720
  },
  {
    "numero": 27,
    "name": "SOPHIA VITORIA LEANDRO DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 16,
      "texto": 35
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 8,
    "id": 721
  },
  {
    "numero": 1,
    "name": "ANA ALICE DE SOUSA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 29,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 722
  },
  {
    "numero": 2,
    "name": "ANNA GABRIELLE DA SILVA LOBO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 26,
      "texto": 56
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 723
  },
  {
    "numero": 3,
    "name": "ARIELLA ALVARENGA FRANCA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 28,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 724
  },
  {
    "numero": 4,
    "name": "ELOAH BEATRIZ SANTOS DE OLIVEIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 725
  },
  {
    "numero": 5,
    "name": "EMANUEL ADRYAN PRADO PEREIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 40,
      "texto": 73
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 726
  },
  {
    "numero": 7,
    "name": "ENZO GABRIEL RIBEIRO BARBOSA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 97
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 727
  },
  {
    "numero": 8,
    "name": "ESTER SLIBA GUEDES RAYMUNDO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 31,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 728
  },
  {
    "numero": 9,
    "name": "FABIANO JOSE DOS SANTOS OLIVEIRA DE AQUINO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 729
  },
  {
    "numero": 10,
    "name": "ISRAEL SILVA COSTA OLIVEIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 34,
      "texto": 48
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 730
  },
  {
    "numero": 11,
    "name": "JAILSON ESTEVES DA CONCEIÇÃO BASSANELLO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 6,
      "texto": 4
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 731
  },
  {
    "numero": 12,
    "name": "KAYRON ROSSI LINO DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 34,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 732
  },
  {
    "numero": 13,
    "name": "LARA HERNANDES DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 19,
      "texto": 38
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 733
  },
  {
    "numero": 14,
    "name": "LUISA DE ALMEIDA RODRIGUES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 27,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 734
  },
  {
    "numero": 15,
    "name": "LUIZ MIGUEL DIONISIO DA SILVA BUENO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 99,
      "texto": 81
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 735
  },
  {
    "numero": 16,
    "name": "LUIZA HELENA DE AGUIAR LIMA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 736
  },
  {
    "numero": 18,
    "name": "MELISSA MONIQUE CORREA DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 20,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 737
  },
  {
    "numero": 19,
    "name": "NICOLAS HENRIQUE SAMPAIO VIEIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 33,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 738
  },
  {
    "numero": 20,
    "name": "PEDRO LUCAS FERNANDES AGOSTINHO VILELA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 739
  },
  {
    "numero": 21,
    "name": "PEROLA BEATRIZ RIBEIRO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 28,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 740
  },
  {
    "numero": 23,
    "name": "RAFAEL GUIMARAES MELO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 31,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 741
  },
  {
    "numero": 24,
    "name": "ROGER FELIPE DE AGUIAR LIMA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 125
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 742
  },
  {
    "numero": 25,
    "name": "THEO CAMARGO PASQUALETO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 125
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 743
  },
  {
    "numero": 1,
    "name": "ÁGATHA ALANA QUADRA DE ALMEIDA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 38,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 744
  },
  {
    "numero": 3,
    "name": "ANA ALICE DE SOUSA DIAS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 38,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 745
  },
  {
    "numero": 4,
    "name": "ANA HELENA LOUZADA DINIZ",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 149
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 746
  },
  {
    "numero": 5,
    "name": "BRYAN MICAEL MARCELINO DA COSTA DE BARROS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 21,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 747
  },
  {
    "numero": 6,
    "name": "DAVI SANTOS DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 38,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 748
  },
  {
    "numero": 7,
    "name": "ENZO RAPHAEL DA SILVA PEREIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 38,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 749
  },
  {
    "numero": 8,
    "name": "GREGOR RODRIGUES LIMA CORREA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 40,
      "pseudopalavras": 29,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 750
  },
  {
    "numero": 9,
    "name": "JOAO VITOR BARBOSA PONTES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 23,
      "pseudopalavras": 24,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 751
  },
  {
    "numero": 10,
    "name": "JOSEFER ANTONIO BALDONI",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 39,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 752
  },
  {
    "numero": 11,
    "name": "LUCCA CANDIDO MAIA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 28,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 753
  },
  {
    "numero": 12,
    "name": "LUIZ ANTONIO DOS SANTOS NETO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 38,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 754
  },
  {
    "numero": 13,
    "name": "MARIA ISIS ANDRADE DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 30,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 755
  },
  {
    "numero": 14,
    "name": "MARIA LUIZA LEITE DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 7,
      "texto": 16
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 5,
    "id": 756
  },
  {
    "numero": 15,
    "name": "MARIANA SEVERO MATSUURA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 34,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 5,
    "id": 757
  },
  {
    "numero": 16,
    "name": "MELANIE MOREIRA GONCALVES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 61,
      "pseudopalavras": 40,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 5,
    "id": 758
  },
  {
    "numero": 17,
    "name": "MIGUEL REIS DE OLIVEIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 38,
      "texto": 100
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 6,
    "id": 759
  },
  {
    "numero": 18,
    "name": "MIRELLA ALVARENGA CORREA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 34,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 6,
    "id": 760
  },
  {
    "numero": 19,
    "name": "OLIVER GAMBOA MACHADO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 15,
      "texto": 48
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 6,
    "id": 761
  },
  {
    "numero": 20,
    "name": "RAYZA MANUELLY SANTOS JOAQUIM",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 7,
    "id": 762
  },
  {
    "numero": 21,
    "name": "THIEGO AUGUSTO FERNANDES RIBEIRO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 7,
    "id": 763
  },
  {
    "numero": 22,
    "name": "VICTOR HUGO DANTAS FELIX",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 40,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 7,
    "id": 764
  },
  {
    "numero": 1,
    "name": "ARIEL ALVES DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 14,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 765
  },
  {
    "numero": 2,
    "name": "ARTHUR ALVES SCHNEIDER",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 4,
      "texto": 69
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 766
  },
  {
    "numero": 3,
    "name": "ARTHUR MIGUEL RODRIGUES DINIZ",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 22,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 767
  },
  {
    "numero": 4,
    "name": "DAVI LUCAS COELHO MORAIS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 28,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 768
  },
  {
    "numero": 5,
    "name": "ELISA DE SOUZA PORTELLA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 16,
      "texto": 64
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 769
  },
  {
    "numero": 6,
    "name": "ELOA DE SOUZA PORTELLA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 12,
      "texto": 59
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 770
  },
  {
    "numero": 7,
    "name": "GIOVANNA RIBEIRO CARVALHO BOARIS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 771
  },
  {
    "numero": 8,
    "name": "ISABELLA FERNANDA MAXIMO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 4,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 772
  },
  {
    "numero": 10,
    "name": "ISIS GUIMARAES LEAL",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 28,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 773
  },
  {
    "numero": 11,
    "name": "JOAO MIGUEL COUTO ORIVALDO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 3,
      "texto": 15
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 774
  },
  {
    "numero": 13,
    "name": "JOAO MURILLO ARAUJO LUIZ SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 21,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 775
  },
  {
    "numero": 14,
    "name": "JULIA DA SILVA SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 21,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 776
  },
  {
    "numero": 15,
    "name": "LETICIA DOS SANTOS RANGEL DE CARVALHO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 5,
      "texto": 98
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 777
  },
  {
    "numero": 16,
    "name": "MAYSA ELOAH SANTOS CABRAL",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 3,
      "texto": 28
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 778
  },
  {
    "numero": 17,
    "name": "MIGUEL COSTA DE CARVALHO SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 24,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 779
  },
  {
    "numero": 18,
    "name": "MIRELLA VITORIA BORGES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 2,
      "texto": 10
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 780
  },
  {
    "numero": 19,
    "name": "NICOLAS GUILHERME DE OLIVEIRA SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 15,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 781
  },
  {
    "numero": 20,
    "name": "OLIVER KELVIN DIAS SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 34,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 782
  },
  {
    "numero": 21,
    "name": "SOPHIA DE OLIVEIRA DA CRUZ",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 25,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 783
  },
  {
    "numero": 22,
    "name": "VITOR KAUALY BOGONI AZEVEDO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 25,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 784
  },
  {
    "numero": 23,
    "name": "VITORIA ALVES SAVI",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 12,
      "texto": 56
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 785
  },
  {
    "numero": 1,
    "name": "AGATTHA MARQUES DE OLIVEIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 20,
      "texto": 73
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 1,
    "id": 786
  },
  {
    "numero": 2,
    "name": "ARTHUR HENRIQUE DOS SANTOS GUERRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 138
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 1,
    "id": 787
  },
  {
    "numero": 3,
    "name": "BEATRIZ VICTORIA DE SOUSA ARAUJO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 25,
      "texto": 59
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 1,
    "id": 788
  },
  {
    "numero": 5,
    "name": "FELIPE AMBROSIO DE SOUZA SAVIO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 33,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 1,
    "id": 789
  },
  {
    "numero": 6,
    "name": "GUSTAVO RAMIREZ MELO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 1,
    "id": 790
  },
  {
    "numero": 7,
    "name": "HELOISA AQUINO DO NASCIMENTO HONORATO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 36,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 2,
    "id": 791
  },
  {
    "numero": 8,
    "name": "HELOISA CAROLINE MAXIMO DE ASSIS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 34,
      "texto": 105
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 2,
    "id": 792
  },
  {
    "numero": 9,
    "name": "JHENIFER RIBEIRO SILVERIO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 28,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 2,
    "id": 793
  },
  {
    "numero": 10,
    "name": "JULIA SANTOS DO NASCIMENTO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 23,
      "texto": 83
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 2,
    "id": 794
  },
  {
    "numero": 11,
    "name": "LETICIA HELENA DE FREITAS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 34,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 2,
    "id": 795
  },
  {
    "numero": 12,
    "name": "LORENZO MATEUS MAXIMO SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 29,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 2,
    "id": 796
  },
  {
    "numero": 13,
    "name": "LUIZ HENRIQUE DA SILVA CARVALHO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 32,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 2,
    "id": 797
  },
  {
    "numero": 14,
    "name": "MARIAH FERREIRA GUIMARAES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 18,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 2,
    "id": 798
  },
  {
    "numero": 15,
    "name": "MATHEUS LORENZO SANTANA DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 3,
    "id": 799
  },
  {
    "numero": 16,
    "name": "MELISSA SILVA DE MELLO CIRINEU",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 26,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 3,
    "id": 800
  },
  {
    "numero": 17,
    "name": "MIGUEL AQUINO DO NASCIMENTO HONORATO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 4,
      "texto": 13
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 3,
    "id": 801
  },
  {
    "numero": 18,
    "name": "MURILO MONTEIRO DE SOUZA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 13,
      "pseudopalavras": 5,
      "texto": 27
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 3,
    "id": 802
  },
  {
    "numero": 19,
    "name": "PIETRA SOUZA ALEXANDRE",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 25,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 3,
    "id": 803
  },
  {
    "numero": 20,
    "name": "POLLYANA ALVES DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 17,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 3,
    "id": 804
  },
  {
    "numero": 21,
    "name": "RAFAEL FARIA DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 28,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 3,
    "id": 805
  },
  {
    "numero": 22,
    "name": "TAYARA HELENA DA SILVA GUATURA TELLEZ",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 2,
      "texto": 4
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 3,
    "id": 806
  },
  {
    "numero": 23,
    "name": "VITOR HUGO RIBEIRO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 26,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 4,
    "id": 807
  },
  {
    "numero": 24,
    "name": "ELOISA ELENA LEITE DE OLIVEIRA LOPES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO E",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO E.pdf",
    "sourcePage": 4,
    "id": 808
  },
  {
    "numero": 1,
    "name": "ALICE BATISTA DE OLIVEIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 39,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 1,
    "id": 809
  },
  {
    "numero": 2,
    "name": "ANA BEATRIZ REIS DOS ANJOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 40,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 1,
    "id": 810
  },
  {
    "numero": 3,
    "name": "ANA LAURA ELOI MOREIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 1,
    "id": 811
  },
  {
    "numero": 4,
    "name": "ANTONELLA FERREIRA CURSINO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 1,
    "id": 812
  },
  {
    "numero": 6,
    "name": "BRYAN FRANCA CARRO DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 29,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 1,
    "id": 813
  },
  {
    "numero": 7,
    "name": "EMANUELLY VITORIA OLIVEIRA BASTOS DE FREITAS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 37,
      "texto": 69
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 2,
    "id": 814
  },
  {
    "numero": 8,
    "name": "ENZO GABRIEL DE SOUZA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 37,
      "texto": 64
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 2,
    "id": 815
  },
  {
    "numero": 9,
    "name": "GUILHERME VIEIRA DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 18,
      "pseudopalavras": 15,
      "texto": 19
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 2,
    "id": 816
  },
  {
    "numero": 10,
    "name": "HELENA CUNHA THOMAZ MIRANDA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 135
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 2,
    "id": 817
  },
  {
    "numero": 11,
    "name": "JORGE LORENZO MATIAS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 38,
      "texto": 64
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 2,
    "id": 818
  },
  {
    "numero": 12,
    "name": "KELVIN KAUAN DE ALMEIDA DIAS MACHADO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 40,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 3,
    "id": 819
  },
  {
    "numero": 13,
    "name": "LAURA HELENA SILVA BORGES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 3,
    "id": 820
  },
  {
    "numero": 14,
    "name": "LAURA ISADORA COELHO RIBEIRO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 40,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 3,
    "id": 821
  },
  {
    "numero": 15,
    "name": "LUIZ HENRIQUE DA SILVA FORTES RODRIGUES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 26,
      "texto": 69
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 3,
    "id": 822
  },
  {
    "numero": 16,
    "name": "MIGUEL DA COSTA LEPORES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 38,
      "texto": 79
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 3,
    "id": 823
  },
  {
    "numero": 17,
    "name": "MIRELLA SANT ANA PIROTE",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 27,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 3,
    "id": 824
  },
  {
    "numero": 19,
    "name": "PEDRO HENRIQUE CARVALHO DA SILVA PRADO CHAGAS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 144
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 3,
    "id": 825
  },
  {
    "numero": 20,
    "name": "PEDRO HENRIQUE DA SILVA DIAS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 35,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 4,
    "id": 826
  },
  {
    "numero": 21,
    "name": "PEDRO LUCCA DOS SANTOS RODRIGUES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 40,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 4,
    "id": 827
  },
  {
    "numero": 25,
    "name": "TALITA ROBERTA DA CONCEICAO CASSIMIRO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 40,
      "texto": 104
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 4,
    "id": 828
  },
  {
    "numero": 26,
    "name": "TALLES RAMOS DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 40,
      "texto": 111
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 4,
    "id": 829
  },
  {
    "numero": 27,
    "name": "WELLERSON PHELIPE MARCIANO RELOGEL",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 21,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 4,
    "id": 830
  },
  {
    "numero": 28,
    "name": "GIOVANNA MACHADO SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "3º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 28,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO F.pdf",
    "sourcePage": 4,
    "id": 831
  },
  {
    "numero": 1,
    "name": "ABRAHAM DA SILVA LUIZ ARAUJO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 99,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 832
  },
  {
    "numero": 2,
    "name": "ANA CLARA DE CARVALHO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 36,
      "texto": 87
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 833
  },
  {
    "numero": 3,
    "name": "ARTHUR DA SILVA BARBOSA DE OLIVEIRA LUIZ",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 19,
      "pseudopalavras": 18,
      "texto": 24
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 834
  },
  {
    "numero": 5,
    "name": "DAVI LUCAS ORESTE RODRIGUES",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 35,
      "texto": 71
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 835
  },
  {
    "numero": 6,
    "name": "DERICK HEITOR MARCELINO MORAIS LIMA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 9,
      "texto": 21
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 836
  },
  {
    "numero": 7,
    "name": "DIEGO LUCCA SARAIVA DE TOLEDO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 837
  },
  {
    "numero": 8,
    "name": "EMILLY EVELYN KAROLYNE DOS SANTOS FERREIRA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 35,
      "texto": 85
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 838
  },
  {
    "numero": 9,
    "name": "EVELLYN MATOS CLARO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 839
  },
  {
    "numero": 10,
    "name": "GABRIEL DUTRA DE ANDRADE",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 99,
      "pseudopalavras": 22,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 840
  },
  {
    "numero": 11,
    "name": "ISABELLA LORRAYNE FREITAS PEREIRA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 27,
      "texto": 69
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 841
  },
  {
    "numero": 12,
    "name": "IZABELLE SINHA ROSA DE CARVALHO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 105
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 842
  },
  {
    "numero": 13,
    "name": "LOUISE VITORIA DE FREITAS GOMES",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 143
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 843
  },
  {
    "numero": 14,
    "name": "MARIA ANTONIA DE OLIVEIRA CARVALHO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 29,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 844
  },
  {
    "numero": 15,
    "name": "MATHEUS MARIN ZEFERINO GOMES DE MELO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 36,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 845
  },
  {
    "numero": 16,
    "name": "MIGUEL EDUARDO OLIVEIRA DOS SANTOS",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 18,
      "pseudopalavras": 13,
      "texto": 33
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 846
  },
  {
    "numero": 17,
    "name": "MIRELA DOS SANTOS GRACIANO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 101
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 847
  },
  {
    "numero": 18,
    "name": "NEYTAN DRAKE DOS SANTOS",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 136
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 848
  },
  {
    "numero": 1,
    "name": "ANA LIVIA SOUZA CUBA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 125
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 849
  },
  {
    "numero": 2,
    "name": "DANIEL RIBEIRO DOS SANTOS",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 36,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 850
  },
  {
    "numero": 3,
    "name": "GABRIEL FELIPE PEREIRA NASCIMENTO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 125
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 851
  },
  {
    "numero": 4,
    "name": "GIOVANNA VIEIRA SILVA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 32,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 852
  },
  {
    "numero": 5,
    "name": "HELENA APARECIDA VIEIRA MACHADO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 36,
      "texto": 98
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 853
  },
  {
    "numero": 7,
    "name": "ISAQUE PIRES BEZERRA SCHIBATA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 40,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 854
  },
  {
    "numero": 8,
    "name": "JHENIFFER PEREIRA DE MELO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 12,
      "texto": 25
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 855
  },
  {
    "numero": 9,
    "name": "LUARA MARIA DE CAMARGO RUIVO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 40,
      "texto": 85
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 856
  },
  {
    "numero": 10,
    "name": "LUCCAS GABRIEL GUIMARAES DE SOUZA MOREIRA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 29,
      "pseudopalavras": 29,
      "texto": 45
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 857
  },
  {
    "numero": 11,
    "name": "MANUELLA VITORIA DE OLIVEIRA LUIZ",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 153
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 858
  },
  {
    "numero": 12,
    "name": "MARIA EDUARDA APARECIDA RAMOS DOS SANTOS",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 33,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 859
  },
  {
    "numero": 13,
    "name": "MATHEUS KAUAN ISIDORO ROQUE",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 26,
      "texto": 69
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 860
  },
  {
    "numero": 14,
    "name": "PYETRO EMANUEL RIBEIRO DE SOUZA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 33,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 861
  },
  {
    "numero": 16,
    "name": "JOAO GUILHERME DE OLIVEIRA MARIANO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 21,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 862
  },
  {
    "numero": 1,
    "name": "ANA HELENA DE OLIVEIRA LIMA INACIO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 35,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 863
  },
  {
    "numero": 2,
    "name": "ANA JULIA COSTA MADALENA DE ARAUJO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 33,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 864
  },
  {
    "numero": 3,
    "name": "CAIRAN RAMOS DE OLIVEIRA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 16,
      "pseudopalavras": 18,
      "texto": 24
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 865
  },
  {
    "numero": 4,
    "name": "ESTER VICTORIA DE OLIVEIRA RAMOS SOUZA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 38,
      "texto": 92
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 866
  },
  {
    "numero": 5,
    "name": "JOAO GABRIEL FERREIRA DE ASSIS",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 867
  },
  {
    "numero": 6,
    "name": "KAUA HENRIQUE BERALDO ROCHA VITOR",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 135
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 868
  },
  {
    "numero": 7,
    "name": "KAUA ORIVALDO BARBOSA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 4,
      "texto": 12
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 869
  },
  {
    "numero": 8,
    "name": "LARA EMANUELLY DOS SANTOS SILVA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 870
  },
  {
    "numero": 9,
    "name": "LIVIA NATASHA SARAIVA DUQUE CHAVES",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 871
  },
  {
    "numero": 11,
    "name": "MICHELE BEATRIZ MOREIRA DE SOUZA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 2,
      "texto": 4
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 872
  },
  {
    "numero": 12,
    "name": "NICOLAS HENRIQUE DA SILVA ROSA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 25,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 873
  },
  {
    "numero": 14,
    "name": "RENAN DE LIMA SANTOS",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 135
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 874
  },
  {
    "numero": 15,
    "name": "VALENTINA DE CARVALHO DO ESPIRITO SANTO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 39,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 875
  },
  {
    "numero": 16,
    "name": "DAVI OTAVIO FERREIRA VIRGINIO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 40,
      "texto": 105
    },
    "sourceFile": "Fluência Leitora 3º ano/José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 876
  },
  {
    "numero": 1,
    "name": "AQUILES GREGORIO FREITAS",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 27,
      "texto": 71
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 877
  },
  {
    "numero": 3,
    "name": "EMANUELLY VITORIA MARCOS REIS",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 30,
      "texto": 71
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 878
  },
  {
    "numero": 4,
    "name": "ENZO MIGUEL SANTOS SILVA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 39,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 879
  },
  {
    "numero": 5,
    "name": "GIOVANA ALVES DA CRUZ",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 6,
      "texto": 17
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 880
  },
  {
    "numero": 7,
    "name": "JOAO GABRIEL DE OLIVEIRA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 40,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 881
  },
  {
    "numero": 8,
    "name": "JOSE VINICIUS LUCIANO LOPES",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 24,
      "texto": 52
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 882
  },
  {
    "numero": 9,
    "name": "LEVI RAFAEL SIQUEIRA DE SOUZA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 883
  },
  {
    "numero": 10,
    "name": "LILITH CAROLINE DA SILVA SOUZA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 30,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 884
  },
  {
    "numero": 11,
    "name": "LORENA CAETANO FELICIANO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 29,
      "texto": 85
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 885
  },
  {
    "numero": 12,
    "name": "LUARA ALVES DE SOUZA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 27,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 886
  },
  {
    "numero": 13,
    "name": "LUIZ MIGUEL DO CARMO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 8,
      "texto": 12
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 887
  },
  {
    "numero": 14,
    "name": "MARIA HELENA FRANCA EVARISTO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 35,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 888
  },
  {
    "numero": 15,
    "name": "MARIANA ALVES DA CRUZ",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 9,
      "texto": 12
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 889
  },
  {
    "numero": 16,
    "name": "MIGUEL BARBOSA RITA DE MELLO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 40,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 890
  },
  {
    "numero": 17,
    "name": "SOPHIA AGATHA JESUS DA SILVA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 9,
      "texto": 45
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 891
  },
  {
    "numero": 19,
    "name": "YUDI FERNANDES CAVALCANTE FLORIANO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 20,
      "texto": 31
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 892
  },
  {
    "numero": 20,
    "name": "ANNA BEATRICE SANTOS SIQUEIRA MOREIRA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 11,
      "texto": 25
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 893
  },
  {
    "numero": 2,
    "name": "DAVI MIGUEL BUENO RAMOS OLIVEIRA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 40,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 894
  },
  {
    "numero": 3,
    "name": "EMANUELLE VITORIA PIRES GOMES DOS SANTOS",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 16,
      "texto": 27
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 895
  },
  {
    "numero": 4,
    "name": "EMILY FERNANDA PASCOAL DA CONCEICAO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 8,
      "texto": 13
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 896
  },
  {
    "numero": 5,
    "name": "JOSE FELIPE DA SILVA BENEDITO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 27,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 897
  },
  {
    "numero": 6,
    "name": "LARA CRISTINA APARECIDA BARBOSA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 33,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 898
  },
  {
    "numero": 7,
    "name": "LARISSA EMANUELE SALGADO SANT ANNA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 899
  },
  {
    "numero": 8,
    "name": "LAURA BEATRIZ LOURENCO DE ALMEIDA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 18,
      "texto": 48
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 900
  },
  {
    "numero": 9,
    "name": "LIVIA COSTA GREGORIO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 34,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 901
  },
  {
    "numero": 10,
    "name": "LORENZO KAUA DOS SANTOS DAVI",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 902
  },
  {
    "numero": 11,
    "name": "LUNNAH DE OLIVEIRA EMILIANO CARDOSO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 30,
      "texto": 81
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 903
  },
  {
    "numero": 12,
    "name": "MARIA VALENTINA DA COSTA CAMARGO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 40,
      "texto": 102
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 904
  },
  {
    "numero": 13,
    "name": "MAYARA CRISTINE LEITE LEONEL",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 40,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 905
  },
  {
    "numero": 15,
    "name": "SOPHIA BARBOSA DE JESUS DA CONCEICAO SANTOS",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 13,
      "texto": 27
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 906
  },
  {
    "numero": 16,
    "name": "VALENTYNA APARECIDA BATISTA DOS SANTOS",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 20,
      "texto": 29
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 907
  },
  {
    "numero": 17,
    "name": "VITOR MIGUEL GOMES",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 26,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 908
  },
  {
    "numero": 18,
    "name": "YASMIN ALVARINDO COSTA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 22,
      "texto": 35
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 909
  },
  {
    "numero": 20,
    "name": "YURI ALMEIDA SILVA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 8,
      "pseudopalavras": 8,
      "texto": 17
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 910
  },
  {
    "numero": 21,
    "name": "LORRAYNE JASMINE SOUZA SALGADO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 18,
      "texto": 24
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 911
  },
  {
    "numero": 22,
    "name": "KAUA FELIPE ALVES DA SILVA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 11,
      "texto": 29
    },
    "sourceFile": "Fluência Leitora 3º ano/Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 912
  },
  {
    "numero": 1,
    "name": "ALICE RUBIANE DA SILVA MOREIRA VIEIRA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 26,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 1,
    "id": 913
  },
  {
    "numero": 2,
    "name": "ARTHUR HENRIQUE MOREIRA DOS SANTOS PRADO",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 26,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 1,
    "id": 914
  },
  {
    "numero": 5,
    "name": "ELOA DIAS MARQUES",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 26,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 1,
    "id": 915
  },
  {
    "numero": 6,
    "name": "HEITOR ROBERT SILVA COELHO DE SOUSA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 25,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 1,
    "id": 916
  },
  {
    "numero": 8,
    "name": "IAGO FERREIRA RAMOS MACHADO",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 40,
      "texto": 26
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 2,
    "id": 917
  },
  {
    "numero": 9,
    "name": "ISAAC CARVALHO SILVA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 2,
    "id": 918
  },
  {
    "numero": 10,
    "name": "ISADORA GABRIELLY DOS SANTOS MONTEIRO",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 20,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 2,
    "id": 919
  },
  {
    "numero": 11,
    "name": "KAYNAN ADRIEL DOS SANTOS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 3,
      "texto": 9
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 2,
    "id": 920
  },
  {
    "numero": 12,
    "name": "KLAUS DAVI CARACIOLI SILVA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 3,
    "id": 921
  },
  {
    "numero": 13,
    "name": "LAVINIA FRANCISCO CAMARGO PINHO",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 36,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 3,
    "id": 922
  },
  {
    "numero": 14,
    "name": "LEANDRO JOSE DA SILVA LEITE",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 12,
      "texto": 32
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 3,
    "id": 923
  },
  {
    "numero": 15,
    "name": "LUCAS MANOEL DE SOUZA FONSECA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 125
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 3,
    "id": 924
  },
  {
    "numero": 16,
    "name": "LUCAS MIGUEL FRANCO SANTOS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 4,
    "id": 925
  },
  {
    "numero": 17,
    "name": "MANUELLA DE MAGALHAES DIAS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 135
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 4,
    "id": 926
  },
  {
    "numero": 18,
    "name": "MARIA JULIA FERREIRA DOS SANTOS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 4,
    "id": 927
  },
  {
    "numero": 19,
    "name": "MARIA LUIZA DE ALMEIDA MARCONDES",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 149
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 4,
    "id": 928
  },
  {
    "numero": 20,
    "name": "MIGUEL TORQUATO VIEIRA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 15,
      "texto": 37
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 5,
    "id": 929
  },
  {
    "numero": 21,
    "name": "PIETRA VALENTINA GONCALVES SANTOS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 20,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 5,
    "id": 930
  },
  {
    "numero": 22,
    "name": "SOFIA EMANUELLY MATHIAS DE SOUZA GUEDES",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 26,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 5,
    "id": 931
  },
  {
    "numero": 23,
    "name": "YASMIN MARIA LAZINHA DA ROCHA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 128
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 5,
    "id": 932
  },
  {
    "numero": 24,
    "name": "HUGO HENRIQUE CORREA BRAGA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 5,
    "id": 933
  },
  {
    "numero": 25,
    "name": "KETLYN SOPHIA SANTANA DE MORAES",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 35,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º A.pdf",
    "sourcePage": 5,
    "id": 934
  },
  {
    "numero": 1,
    "name": "ANA LUIZA DOS SANTOS ROSA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 23,
      "texto": 77
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 935
  },
  {
    "numero": 2,
    "name": "EDUARDA RIBEIRO DOS SANTOS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 30,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 936
  },
  {
    "numero": 3,
    "name": "GIOVANA LUSTOSA SOARES RAIMUNDO",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 18,
      "texto": 51
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 937
  },
  {
    "numero": 4,
    "name": "IGOR GABRIEL RIBEIRO DE MELO",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 938
  },
  {
    "numero": 5,
    "name": "JOAO MIGUEL RAMOS DE ARAUJO",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 32,
      "texto": 83
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 939
  },
  {
    "numero": 6,
    "name": "JOAO PEDRO DOMICIANO DA SILVA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 35,
      "texto": 104
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 940
  },
  {
    "numero": 7,
    "name": "JOAO VICTOR SANTOS DE OLIVEIRA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 38,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 941
  },
  {
    "numero": 8,
    "name": "KAUAN LUCAS DE ALMEIDA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 23,
      "texto": 46
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 942
  },
  {
    "numero": 10,
    "name": "LAUANNY VITORIA RODRIGUES DOS SANTOS ALVES",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 943
  },
  {
    "numero": 11,
    "name": "MARIA MANUELLE FERREIRA SANTOS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 27,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 944
  },
  {
    "numero": 12,
    "name": "MARIA VITORIA CARDOSO",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 31,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 945
  },
  {
    "numero": 13,
    "name": "MURILO DE SOUZA MELCIADES",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 47,
      "texto": 104
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 946
  },
  {
    "numero": 14,
    "name": "PIETRA RAFAELI SANT'ANA ALVES DOS SANTOS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 947
  },
  {
    "numero": 15,
    "name": "PIETRO HENRIQUE DE OLIVEIRA COSTA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 6,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 948
  },
  {
    "numero": 16,
    "name": "PIETRO VICTOR DOS SANTOS COSTA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 36,
      "texto": 96
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 949
  },
  {
    "numero": 17,
    "name": "PYETRA EMANUELLY RODRIGUES DE ASSIS DIAS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 4,
      "texto": 37
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 950
  },
  {
    "numero": 18,
    "name": "RICHARD LUAN CUNHA FERREIRA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 9,
      "texto": 17
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 951
  },
  {
    "numero": 19,
    "name": "THEODORO BICUDO OLIVEIRA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 20,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 952
  },
  {
    "numero": 20,
    "name": "TIAGO AUGUSTO CORREA LEITE",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 18,
      "pseudopalavras": 5,
      "texto": 38
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 953
  },
  {
    "numero": 21,
    "name": "VITORIA GABRIELLY DA SILVA SANTOS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 40,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 954
  },
  {
    "numero": 22,
    "name": "WANDERSON GONZAGA DA SILVA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 32,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 955
  },
  {
    "numero": 24,
    "name": "MATHEUS SIQUEIRA DA SILVA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 38,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 956
  },
  {
    "numero": 1,
    "name": "ALEXANDRE HENRIQUE GONCALVES DE MIRA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 5,
      "texto": 10
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 957
  },
  {
    "numero": 3,
    "name": "ANTHONY GABRIEL SILVA SOARES",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 30,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 958
  },
  {
    "numero": 4,
    "name": "ARTHUR DA SILVA AMARAL",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 145
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 959
  },
  {
    "numero": 5,
    "name": "DAVI LUCCA DA SILVA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 960
  },
  {
    "numero": 6,
    "name": "EDUARDO LORENZO TAKIUTE CALLEGARI",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 961
  },
  {
    "numero": 7,
    "name": "GABRIELA RAMOS ZACARIAS",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 962
  },
  {
    "numero": 8,
    "name": "HELENA BALLESTER DA SILVA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 144
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 963
  },
  {
    "numero": 9,
    "name": "IAN DE SOUZA LUCINDO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 102
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 964
  },
  {
    "numero": 11,
    "name": "JOAO BORGES DE SOUZA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 40,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 965
  },
  {
    "numero": 13,
    "name": "LAVINNYA EMANUELLE FALLEIRO DA SILVA LUCIO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 36,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 966
  },
  {
    "numero": 15,
    "name": "MIGUEL HENRIQUE DA CRUZ CORREA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 31,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 967
  },
  {
    "numero": 16,
    "name": "MIGUEL LUIZ DE SOUZA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 33,
      "pseudopalavras": 23,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 968
  },
  {
    "numero": 18,
    "name": "MIGUEL RODRIGUES DO NASCIMENTO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 145
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 969
  },
  {
    "numero": 20,
    "name": "PEDRO BORGES DE SOUZA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 29,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 970
  },
  {
    "numero": 21,
    "name": "RAFAEL CARROS GUILLON",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 81
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 971
  },
  {
    "numero": 22,
    "name": "SOPHIA LARA OLIVEIRA SILVA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 28,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 972
  },
  {
    "numero": 23,
    "name": "THEO DE OLIVEIRA SANTOS SOUZA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 39,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 973
  },
  {
    "numero": 24,
    "name": "SUBHADRA DEVI GONZALEZ CASTET",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 127
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 974
  },
  {
    "numero": 28,
    "name": "YASMIN NICOLETTI IZIDORO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 31,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 975
  },
  {
    "numero": 29,
    "name": "MARIANNE SOUZA DA CONCEICAO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 40,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 976
  },
  {
    "numero": 30,
    "name": "HEITOR GABRIEL PEREIRA DE MELO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 22,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 977
  },
  {
    "numero": 31,
    "name": "DAVI MARTINS VALENTE",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 40,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 978
  },
  {
    "numero": 32,
    "name": "HELOUISE ALVES DOS REIS",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 979
  },
  {
    "numero": 33,
    "name": "HEITOR ALVES DOS REIS",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 30,
      "pseudopalavras": 28,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 980
  },
  {
    "numero": 1,
    "name": "ALEXIA LETICIA RAMOS ROSA DOS SANTOS",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 40,
      "texto": 115
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 981
  },
  {
    "numero": 2,
    "name": "ANA CLARA GARCIA DOS SANTOS",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 40,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 982
  },
  {
    "numero": 3,
    "name": "ÂNGELO MYKAEL BARBOSA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 40,
      "texto": 106
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 983
  },
  {
    "numero": 4,
    "name": "ARTHUR MAIA SILVANO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 147
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 984
  },
  {
    "numero": 5,
    "name": "ARTHUR MIGUEL DA SILVA LEITE",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 35,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 985
  },
  {
    "numero": 6,
    "name": "CARLOS MIGUEL OLIVEIRA DIAS",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 28,
      "texto": 73
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 986
  },
  {
    "numero": 7,
    "name": "CAUA SOUZA LOPES SOARES",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 40,
      "texto": 128
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 987
  },
  {
    "numero": 8,
    "name": "GABRIEL GASPAR SCHULZ",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 40,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 988
  },
  {
    "numero": 9,
    "name": "GEORGE FREDDY MIRANDA FILHO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 25,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 989
  },
  {
    "numero": 12,
    "name": "JACOB DOS SANTOS ROSA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 131
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 990
  },
  {
    "numero": 14,
    "name": "LAURA VIANA OLIVEIRA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 37,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 991
  },
  {
    "numero": 15,
    "name": "LETICIA CORREA VILELA DA SILVA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 97
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 992
  },
  {
    "numero": 16,
    "name": "LISBELA RODRIGUES DA SILVA DIAS",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 993
  },
  {
    "numero": 18,
    "name": "LUCAS CUNDARI TEIXEIRA PEREIRA FILHO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 994
  },
  {
    "numero": 19,
    "name": "LUCAS NOVAIS GOMES",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 37,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 995
  },
  {
    "numero": 21,
    "name": "MOISES PAES MAZELLA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 996
  },
  {
    "numero": 22,
    "name": "SOFIA CANDIDO PEDROSO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 125
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 997
  },
  {
    "numero": 23,
    "name": "THIAGO HENRIQUE DE SOUZA DA SILVA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 998
  },
  {
    "numero": 24,
    "name": "VALENTINA FORTES LAZARIO DA COSTA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 40,
      "texto": 99
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 999
  },
  {
    "numero": 25,
    "name": "VINICIUS OLIVEIRA DOS SANTOS",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1000
  },
  {
    "numero": 26,
    "name": "MIGUEL RAFAEL MARQUES RIBEIRO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 32,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1001
  },
  {
    "numero": 27,
    "name": "LUCAS COUTINHO SANTOS",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 26,
      "texto": 56
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1002
  },
  {
    "numero": 29,
    "name": "ISAAC GARCIA DE OLINDA CAMPOS",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 40,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1003
  },
  {
    "numero": 2,
    "name": "GABRIELLE DA SILVA PRADO",
    "escola": "Maria Ap.C.de Souza, Profª",
    "turma": "MULTISSERIADA FUNDAMENTAL A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 2,
      "texto": 6
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap.C.de Souza, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - MULTISSERIADA FUNDAMENTAL A.pdf",
    "sourcePage": 1,
    "id": 1004
  },
  {
    "numero": 8,
    "name": "RIANNY APARECIDA PEDROSA DOS SANTOS",
    "escola": "Maria Ap.C.de Souza, Profª",
    "turma": "MULTISSERIADA FUNDAMENTAL A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 19,
      "texto": 52
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap.C.de Souza, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - MULTISSERIADA FUNDAMENTAL A.pdf",
    "sourcePage": 1,
    "id": 1005
  },
  {
    "numero": 13,
    "name": "SARA SIQUEIRA DE FARIA",
    "escola": "Maria Ap.C.de Souza, Profª",
    "turma": "MULTISSERIADA FUNDAMENTAL A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 37,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap.C.de Souza, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - MULTISSERIADA FUNDAMENTAL A.pdf",
    "sourcePage": 2,
    "id": 1006
  },
  {
    "numero": 14,
    "name": "GEOVANA DOS SANTOS DE ANDRADE",
    "escola": "Maria Ap.C.de Souza, Profª",
    "turma": "MULTISSERIADA FUNDAMENTAL A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 35,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap.C.de Souza, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - MULTISSERIADA FUNDAMENTAL A.pdf",
    "sourcePage": 2,
    "id": 1007
  },
  {
    "numero": 15,
    "name": "LAURA LAUANY MARQUES MOREIRA",
    "escola": "Maria Ap.C.de Souza, Profª",
    "turma": "MULTISSERIADA FUNDAMENTAL A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 37,
      "texto": 66
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap.C.de Souza, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - MULTISSERIADA FUNDAMENTAL A.pdf",
    "sourcePage": 2,
    "id": 1008
  },
  {
    "numero": 16,
    "name": "MARIAH YASMIN DA SILVA ARAUJO",
    "escola": "Maria Ap.C.de Souza, Profª",
    "turma": "MULTISSERIADA FUNDAMENTAL A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 32,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Ap.C.de Souza, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - MULTISSERIADA FUNDAMENTAL A.pdf",
    "sourcePage": 2,
    "id": 1009
  },
  {
    "numero": 1,
    "name": "ANA LARA DOS SANTOS BRUM GONCALVES",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 125
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1010
  },
  {
    "numero": 2,
    "name": "ANDREW MATHEUS APOLINARIO BOGONI",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 40,
      "pseudopalavras": 20,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1011
  },
  {
    "numero": 3,
    "name": "CAMILA VITORIA SALGADO MOREIRA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 12,
      "texto": 20
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1012
  },
  {
    "numero": 5,
    "name": "GEOVANA EMANUELLY TENORIO NUNES",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1013
  },
  {
    "numero": 6,
    "name": "HEITOR DE CAMARGO PEREIRA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1014
  },
  {
    "numero": 7,
    "name": "ISABELLA FERNANDES DOS SANTOS",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 40,
      "texto": 120
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1015
  },
  {
    "numero": 8,
    "name": "JOAO MIGUEL SOUZA DA SILVA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 30,
      "pseudopalavras": 20,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1016
  },
  {
    "numero": 9,
    "name": "JOAQUIM REIS DE SOUZA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1017
  },
  {
    "numero": 10,
    "name": "LORENZO MIGUEL CORREA TOLEDO",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 142
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1018
  },
  {
    "numero": 11,
    "name": "LUIZ FELIPE SOUZA DE MIRANDA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 34,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1019
  },
  {
    "numero": 12,
    "name": "MARCOS EDUARDO DOS SANTOS MIGUEL",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 18,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1020
  },
  {
    "numero": 13,
    "name": "MARIA CECILIA BORGES DA SILVA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 60,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1021
  },
  {
    "numero": 14,
    "name": "MIGUEL ESTEVAM DA SILVA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 38,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1022
  },
  {
    "numero": 15,
    "name": "MIKAELLY VITORIA SALGADO MOREIRA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 10,
      "texto": 17
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1023
  },
  {
    "numero": 16,
    "name": "SAMUEL BALAN SOARES",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 60,
      "texto": 87
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1024
  },
  {
    "numero": 17,
    "name": "SOPHIA ALICIA QUEIROZ SANTOS DA SILVA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 20,
      "texto": 46
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1025
  },
  {
    "numero": 18,
    "name": "YGOR RAPHAEL DE PAULA FERREIRA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 131
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1026
  },
  {
    "numero": 19,
    "name": "ALEXYA VICTORIA DA SILVA OLIVEIRA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 37,
      "pseudopalavras": 25,
      "texto": 66
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1027
  },
  {
    "numero": 20,
    "name": "DIEGO ANTÔNIO GONÇALVES RANGEL",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 26,
      "pseudopalavras": 11,
      "texto": 38
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1028
  },
  {
    "numero": 1,
    "name": "ALLAN VICTOR GOUVEA MONTEIRO DE OLIVEIRA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 23,
      "texto": 52
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1029
  },
  {
    "numero": 2,
    "name": "ALLANA ISADORA JESUS DE MENEZES",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1030
  },
  {
    "numero": 3,
    "name": "ANANDA VITORIA GONZAGA DE SOUZA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 16,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1031
  },
  {
    "numero": 4,
    "name": "CALIOPE AGUIAR FARIA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1032
  },
  {
    "numero": 5,
    "name": "CELINA VICTORIA NASCIMENTO",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 22,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1033
  },
  {
    "numero": 6,
    "name": "EDSON SAMUEL GONCALVES FERREIRA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 27,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1034
  },
  {
    "numero": 7,
    "name": "ELOÁ REIS DE MOURA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 25,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1035
  },
  {
    "numero": 8,
    "name": "ISABELA EMANUELLE MOREIRA BRAGA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 10,
      "texto": 22
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1036
  },
  {
    "numero": 10,
    "name": "JOAO GABRIEL RODRIGUES AMARAL",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1037
  },
  {
    "numero": 11,
    "name": "KAYLAINE VITORIA CESAR",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 28,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1038
  },
  {
    "numero": 12,
    "name": "MANUELLY MENDES DA SILVA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 26,
      "texto": 73
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1039
  },
  {
    "numero": 13,
    "name": "MARIA SOPHIA INOCENCIO DA SILVA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 40,
      "texto": 104
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1040
  },
  {
    "numero": 14,
    "name": "MATHEUS LOURENCO MARTINS DA SILVA FERNANDES LIMA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1041
  },
  {
    "numero": 15,
    "name": "RAYSSA MANUELLY DOS SANTOS RIBEIRO",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 20,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1042
  },
  {
    "numero": 17,
    "name": "JEAN HENRIQUE GONCALVES DE CARVALHO ROSA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 25,
      "texto": 52
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1043
  },
  {
    "numero": 1,
    "name": "ALICE CAVALCANTI DA SILVA",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 35,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1044
  },
  {
    "numero": 2,
    "name": "ALÍCIA MENDES DIAS",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 33,
      "texto": 73
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1045
  },
  {
    "numero": 3,
    "name": "BERNARDO HENRIQUE COSTA DE RESENDE",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 33,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1046
  },
  {
    "numero": 4,
    "name": "DAVI LUIS SEBASTIAO DA SILVA",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 24,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1047
  },
  {
    "numero": 5,
    "name": "ELOÁ DIAS IDRO",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 36,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1048
  },
  {
    "numero": 6,
    "name": "GABRIEL DA SILVA TEODORO RELOGER",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 16,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1049
  },
  {
    "numero": 8,
    "name": "HELOISA LEOPOLDINO DA CUNHA EUGENIO",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 37,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1050
  },
  {
    "numero": 9,
    "name": "ISADORA DE SOUZA GONZAGA",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 13,
      "pseudopalavras": 5,
      "texto": 34
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1051
  },
  {
    "numero": 10,
    "name": "JOAO LUCAS DINIZ SIQUEIRA",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 9,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1052
  },
  {
    "numero": 11,
    "name": "JOÃO MIGUEL CANDIDO DO AMARAL",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 59,
      "pseudopalavras": 59,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1053
  },
  {
    "numero": 12,
    "name": "JOAO PEDRO SILVA DA COSTA ANTONIO",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 31,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1054
  },
  {
    "numero": 13,
    "name": "LAVINIA TEODORO DE OLIVEIRA",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 16,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1055
  },
  {
    "numero": 14,
    "name": "LUCCA SOARES DA COSTA LEITE",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 16,
      "pseudopalavras": 12,
      "texto": 38
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1056
  },
  {
    "numero": 15,
    "name": "LUIZA FERNANDA DO ROSARIO SILVA",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 38,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1057
  },
  {
    "numero": 16,
    "name": "MIGUEL ALVES RAMOS",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 5,
      "pseudopalavras": 5,
      "texto": 30
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1058
  },
  {
    "numero": 19,
    "name": "PEROLLA ELYZI NAVES DA SILVA",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 23,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1059
  },
  {
    "numero": 20,
    "name": "LOAN HUSANI DE SOUZA NISIO SANTOS",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1060
  },
  {
    "numero": 1,
    "name": "ALICE DERRICO DA COSTA NASCIMENTO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 129
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1061
  },
  {
    "numero": 2,
    "name": "ANA LIVIA DOMINGOS DOS REIS",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 40,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1062
  },
  {
    "numero": 3,
    "name": "ARTHUR MILCZUK",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 135
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1063
  },
  {
    "numero": 4,
    "name": "BERNARDO MOJE FRANÇA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1064
  },
  {
    "numero": 5,
    "name": "CAMILA GONCALVES GERALDO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 32,
      "texto": 59
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1065
  },
  {
    "numero": 6,
    "name": "DANIEL HENRIQUE FERREIRA HONORIO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 23,
      "texto": 158
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1066
  },
  {
    "numero": 7,
    "name": "EMANUELLE FREITAS DE MORAIS",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 5,
      "texto": 19
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1067
  },
  {
    "numero": 8,
    "name": "GIOVANNA DOS SANTOS",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 21,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1068
  },
  {
    "numero": 9,
    "name": "HEITOR DE SOUZA FERREIRA BASILIO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1069
  },
  {
    "numero": 11,
    "name": "ISA LEMES TAMBORINDEGUY",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 33,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1070
  },
  {
    "numero": 12,
    "name": "JOAO GUILHERME COUTO DA FONSECA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 40,
      "texto": 98
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1071
  },
  {
    "numero": 13,
    "name": "JOAO MATHEUS PEREIRA DE CAMPOS",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1072
  },
  {
    "numero": 14,
    "name": "JOSE VITOR MILDEMBERGER PIRES",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 40,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1073
  },
  {
    "numero": 15,
    "name": "LORENZO OLIVEIRA ROSA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 135
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1074
  },
  {
    "numero": 16,
    "name": "MAIKE GONCALVES CARVALHO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 38,
      "texto": 56
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1075
  },
  {
    "numero": 17,
    "name": "MANUELLA JERONIMO FLORENTINO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 40,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1076
  },
  {
    "numero": 18,
    "name": "MIGUEL DE LIMA BILORA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 33,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1077
  },
  {
    "numero": 19,
    "name": "NICOLAS LIMA SILVA PEREIRA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 146
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1078
  },
  {
    "numero": 20,
    "name": "PEDRO SANTOS DE ALBUQUERQUE",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 26,
      "texto": 68
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1079
  },
  {
    "numero": 21,
    "name": "PEDRO MAURICIO LOURENÇO CUNHA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1080
  },
  {
    "numero": 23,
    "name": "ISMAEL PACHECO WENCESLAU RIBEIRO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 32,
      "texto": 59
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1081
  },
  {
    "numero": 1,
    "name": "ALICE MIRELLY SARAIVA MARQUES",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 33,
      "texto": 66
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1082
  },
  {
    "numero": 2,
    "name": "ANA JULIA COUTINHO DA SILVA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1083
  },
  {
    "numero": 3,
    "name": "ARTHUR RODRIGUES DA SILVA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 135
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1084
  },
  {
    "numero": 4,
    "name": "CAMILLE DE MEDEIROS FAVATTO SUZANO DIAS",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 84
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1085
  },
  {
    "numero": 5,
    "name": "EMANUELLE VITORIA JERONIMO DA SILVA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1086
  },
  {
    "numero": 6,
    "name": "ENZO GABRIEL DA SILVA FREITAS",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 30,
      "texto": 66
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1087
  },
  {
    "numero": 7,
    "name": "ENZO PORFIRIO GONÇALVES",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 28,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1088
  },
  {
    "numero": 8,
    "name": "LUIZA EDUARDA GOMES FERREIRA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 30,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1089
  },
  {
    "numero": 9,
    "name": "MANUELA VITORIA DE SA DA SILVA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 12,
      "texto": 18
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1090
  },
  {
    "numero": 10,
    "name": "MANUELLA RAMOS MARCONDES MACHADO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 31,
      "texto": 81
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1091
  },
  {
    "numero": 11,
    "name": "MARIA RITA MOREIRA MARIANO DE LIMA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 87
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1092
  },
  {
    "numero": 12,
    "name": "MARIANA MOTA GOMES PEREIRA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 59,
      "pseudopalavras": 40,
      "texto": 97
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1093
  },
  {
    "numero": 13,
    "name": "PEDRO LUCAS DE OLIVEIRA RAMOS",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 40,
      "texto": 131
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1094
  },
  {
    "numero": 14,
    "name": "PEDRO MIGUEL ALVES CHINAQUI MOREIRA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 125
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1095
  },
  {
    "numero": 15,
    "name": "PEDRO MIGUEL DE MORAIS FRANÇA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 40,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1096
  },
  {
    "numero": 16,
    "name": "PEDRO RAFAEL DA CRUZ NUNES",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 142
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1097
  },
  {
    "numero": 17,
    "name": "SOFIA DA SILVA BARROSO DIAS",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1098
  },
  {
    "numero": 18,
    "name": "SOPHIA PEDROSO DE SOUZA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1099
  },
  {
    "numero": 19,
    "name": "VINICIUS GABRIEL RAMOS DE MACEDO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 131
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1100
  },
  {
    "numero": 20,
    "name": "YAGO DE MEDEIROS FAVATTO SUZANO SILVA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 40,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1101
  },
  {
    "numero": 22,
    "name": "ESTER DE MOURA BOLZAN QUEIROZ DE OLIVEIRA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 115
    },
    "sourceFile": "Fluência Leitora 3º ano/Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1102
  },
  {
    "numero": 1,
    "name": "ALICE DIAS VIEIRA DA CRUZ",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 37,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1103
  },
  {
    "numero": 2,
    "name": "CRYSTOFER MATOS TAKEZAWA ALEXANDRE",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 38,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1104
  },
  {
    "numero": 3,
    "name": "DAVI LUCAS RODRIGUES SOARES",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 3,
      "texto": 9
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1105
  },
  {
    "numero": 5,
    "name": "ELOAH MOREIRA DA SILVA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 32,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1106
  },
  {
    "numero": 6,
    "name": "ENZO GABRIEL MELLO DE OLIVEIRA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 25,
      "texto": 51
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1107
  },
  {
    "numero": 7,
    "name": "GABRIELA GOUVEA SILVA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 34,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1108
  },
  {
    "numero": 8,
    "name": "GRAZIELLA DE ALMEIDA TARIFE",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 11,
      "texto": 31
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1109
  },
  {
    "numero": 9,
    "name": "JOAO FELIPE GALLO TEOFILO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 40,
      "texto": 88
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1110
  },
  {
    "numero": 10,
    "name": "JOAO MIGUEL MOREIRA DIAS",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 37,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1111
  },
  {
    "numero": 11,
    "name": "KAUE CAVALHEIRO RAMOS DO NASCIMENTO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 22,
      "pseudopalavras": 17,
      "texto": 37
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1112
  },
  {
    "numero": 12,
    "name": "LAURA MOREIRA DOS SANTOS",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 13,
      "texto": 18
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1113
  },
  {
    "numero": 13,
    "name": "LORENZO DE CASTRO LEITE LOPES",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 9,
      "texto": 23
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1114
  },
  {
    "numero": 14,
    "name": "MARESSA GUIMARÃES DIANA OLIVEIRA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 32,
      "texto": 89
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1115
  },
  {
    "numero": 15,
    "name": "PEDRO LUIS DA SILVA GOES",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 31,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1116
  },
  {
    "numero": 16,
    "name": "SABRYNE GABRIELLE SILVA DOS SANTOS",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 39,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1117
  },
  {
    "numero": 19,
    "name": "CAIO FERNANDES RONCONI MARCONDES",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 18,
      "pseudopalavras": 15,
      "texto": 35
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 1118
  },
  {
    "numero": 20,
    "name": "MIGUEL LUCCA DA SILVA VELOSO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 28,
      "texto": 48
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 1119
  },
  {
    "numero": 22,
    "name": "JOÃO LUCAS RIBEIRO ROMÃO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 3,
      "texto": 9
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 1120
  },
  {
    "numero": 2,
    "name": "ALANIS ALVES DOS SANTOS RODRIGUES",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 125
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1121
  },
  {
    "numero": 3,
    "name": "ALICE ALMENDRO SANTOS",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 1,
      "pseudopalavras": 2,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1122
  },
  {
    "numero": 4,
    "name": "ALICE MACHADO FARIA DOS SANTOS",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 99,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1123
  },
  {
    "numero": 5,
    "name": "CARLOS HENRIQUE GARCIA DOS SANTOS",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 18,
      "texto": 56
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1124
  },
  {
    "numero": 6,
    "name": "DAVI LUCCA DA SILVA VITAL",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 59,
      "pseudopalavras": 40,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1125
  },
  {
    "numero": 7,
    "name": "LUIS FERNANDO NUNES",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 28,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1126
  },
  {
    "numero": 8,
    "name": "MARIA FERNANDA GONCALVES CARLOTA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 115
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1127
  },
  {
    "numero": 9,
    "name": "MARIANA CAROLINA BERALDO FERREIRA DE SOUZA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 38,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1128
  },
  {
    "numero": 10,
    "name": "MATSYA FERREIRA RESENDE FRAGOSO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 24,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1129
  },
  {
    "numero": 11,
    "name": "MIGUEL ROBERTO DOS SANTOS",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 16,
      "texto": 38
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1130
  },
  {
    "numero": 12,
    "name": "PEDRO LUCCA DE OLIVEIRA ALMEIDA SILVA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 11,
      "pseudopalavras": 99,
      "texto": 14
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1131
  },
  {
    "numero": 13,
    "name": "ROBERTA COLIONI SILVA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 133
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1132
  },
  {
    "numero": 14,
    "name": "TAYLOR LOPES RIBEIRO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 40,
      "texto": 73
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1133
  },
  {
    "numero": 15,
    "name": "THEO DE JESUS SOARES",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 128
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1134
  },
  {
    "numero": 16,
    "name": "THOMAS HONORIO MOREIRA MIRANDA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 40,
      "texto": 120
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1135
  },
  {
    "numero": 18,
    "name": "MATHEUS RIBEIRO ROMAO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 9,
      "texto": 20
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1136
  },
  {
    "numero": 1,
    "name": "ANA JULIA CAETANO DA SILVA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 24,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1137
  },
  {
    "numero": 2,
    "name": "ANTONELLA VALENTINA BORGES",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 35,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1138
  },
  {
    "numero": 3,
    "name": "DAVI LUCCA DOS SANTOS GARUFFI",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 15,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1139
  },
  {
    "numero": 4,
    "name": "EMILY VITORIA DA SILVA SANTOS",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 31,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1140
  },
  {
    "numero": 5,
    "name": "ENZO DIEGO RIBEIRO GALIANO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 7
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1141
  },
  {
    "numero": 6,
    "name": "ENZO GABRIEL DA SILVA OTACILIO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 17,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1142
  },
  {
    "numero": 7,
    "name": "GABRIEL PRADO CINTRA DE ARRUDA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 28,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1143
  },
  {
    "numero": 9,
    "name": "ISIS CAMARGO VICTURIANO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 31,
      "texto": 77
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1144
  },
  {
    "numero": 10,
    "name": "JOAO EMANUEL MARIN FARIA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 28,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1145
  },
  {
    "numero": 11,
    "name": "LORENZO DE ALMEIDA PEREIRA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 31,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1146
  },
  {
    "numero": 12,
    "name": "MARIA ALICE MELO FIRMINO DA SILVA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 20,
      "texto": 68
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1147
  },
  {
    "numero": 13,
    "name": "MARIA EDUARDA PEREIRA SOUZA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 27,
      "texto": 93
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1148
  },
  {
    "numero": 15,
    "name": "PEDRO LUCCA TELES DOS SANTOS ALVES",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 37,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1149
  },
  {
    "numero": 16,
    "name": "PYETRA SOPHIA VANDEIRA SALES DA SILVA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 31,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 1150
  },
  {
    "numero": 17,
    "name": "EDUARDA AQUINO DE MORAIS MILITAO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 23,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 1151
  },
  {
    "numero": 19,
    "name": "ANDRESSA EMANUELLE DE OLIVEIRA CANDIDO TEIXEIRA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 31,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 1152
  },
  {
    "numero": 20,
    "name": "RYAN LUCAS TENORIO DIAS CASTRO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 16,
      "texto": 47
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 1153
  },
  {
    "numero": 1,
    "name": "ANA LIVIA DA COSTA SILVA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 45,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1154
  },
  {
    "numero": 2,
    "name": "ARTHUR PIETRO SANTOS RIBEIRO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 33,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1155
  },
  {
    "numero": 3,
    "name": "CAIO EDUARDO DE LOURDES SOUZA ALVES",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 45,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1156
  },
  {
    "numero": 4,
    "name": "CECILIA DOS SANTOS SALVADOR",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 34,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1157
  },
  {
    "numero": 5,
    "name": "DAVI LUCCA DE OLIVEIRA UCHOA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 45,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1158
  },
  {
    "numero": 6,
    "name": "DAVI MIGUEL MATIAS BARBOSA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 4,
      "texto": 3
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1159
  },
  {
    "numero": 8,
    "name": "EMILLY EDUARDA DOS SANTOS PEREIRA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 12,
      "texto": 25
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1160
  },
  {
    "numero": 9,
    "name": "HEITOR DOS SANTOS SILVA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 45,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1161
  },
  {
    "numero": 10,
    "name": "KAUAN HENRIQUE PEREIRA PASSOS MARTINS ROSA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 3,
      "pseudopalavras": 3,
      "texto": 3
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1162
  },
  {
    "numero": 11,
    "name": "LAURA LUCIO DO PRADO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 27,
      "texto": 58
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1163
  },
  {
    "numero": 12,
    "name": "MARCELLO DE CARVALHO RODRIGUES",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 22,
      "texto": 46
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 1164
  },
  {
    "numero": 13,
    "name": "MARIA LOIZY DOS SANTOS SOUZA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 27,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 1165
  },
  {
    "numero": 14,
    "name": "MIGUEL DE FARIA LOPES",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 45,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 1166
  },
  {
    "numero": 15,
    "name": "PIETRA EMANUELLY DA SILVA RAMOS",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 10,
      "texto": 34
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 1167
  },
  {
    "numero": 16,
    "name": "PIETRO LUIZ RAMOS DA SILVA CARVALHO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 7,
      "pseudopalavras": 8,
      "texto": 8
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 1168
  },
  {
    "numero": 17,
    "name": "SOPHIA FERNANDA DA SILVA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 45,
      "texto": 125
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 1169
  },
  {
    "numero": 18,
    "name": "THOMAS CALAZANS SILVA NASCIMENTO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 45,
      "texto": 48
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 1170
  },
  {
    "numero": 19,
    "name": "YSABELLA FERNANDA COUTO DE LA FUENTES FERREIRA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 45,
      "texto": 114
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 7,
    "id": 1171
  },
  {
    "numero": 21,
    "name": "EDINALDO MIGUEL CIRINO JUNIOR",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 5,
      "pseudopalavras": 5,
      "texto": 5
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 7,
    "id": 1172
  },
  {
    "numero": 1,
    "name": "ADRIAN GABRIEL DE PAULA GOMES FLORENZANO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 21,
      "texto": 29
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1173
  },
  {
    "numero": 2,
    "name": "ANA ESTELLA FABRICIO MACHADO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 18,
      "pseudopalavras": 16,
      "texto": 30
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1174
  },
  {
    "numero": 3,
    "name": "ANA LIVIA LARANJEIRA ALVES",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 45,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1175
  },
  {
    "numero": 4,
    "name": "ARTHUR FILIPE FREITAS ALVES CLARO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 21,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1176
  },
  {
    "numero": 5,
    "name": "DAVI MIGUEL SANTOS BRAZ",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 25,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1177
  },
  {
    "numero": 6,
    "name": "EMILLY FERNANDA DOS SANTOS",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 21,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1178
  },
  {
    "numero": 7,
    "name": "FELIPE AUGUSTO SALVADOR PAULA DE CAMPOS",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 45,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1179
  },
  {
    "numero": 8,
    "name": "ISAAC DA SILVA PEREIRA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 45,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1180
  },
  {
    "numero": 9,
    "name": "JOÃO GABRIEL SILVA OLIVEIRA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 30,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1181
  },
  {
    "numero": 10,
    "name": "JOAO LUCAS DOS SANTOS SILVA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 23,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1182
  },
  {
    "numero": 12,
    "name": "KEVIN FELIPE CARLOTA AVELINO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 1183
  },
  {
    "numero": 13,
    "name": "LARA HELENA DE SOUZA FARIAS",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 23,
      "pseudopalavras": 21,
      "texto": 35
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 1184
  },
  {
    "numero": 14,
    "name": "LARISSA MANUELLY FERNANDES DA SILVA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 45,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 1185
  },
  {
    "numero": 15,
    "name": "LUCCAS RAPHAEL DE OLIVEIRA FERMINO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 31,
      "texto": 52
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 6,
    "id": 1186
  },
  {
    "numero": 16,
    "name": "PEDRO HENRIQUE DA SILVA CRUZ",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 21,
      "pseudopalavras": 20,
      "texto": 39
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 6,
    "id": 1187
  },
  {
    "numero": 17,
    "name": "PIETRO APARECIDO DOS SANTOS VALERIO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 45,
      "texto": 69
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 6,
    "id": 1188
  },
  {
    "numero": 18,
    "name": "RENATO DE JESUS RODRIGUES SILVA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 34,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 7,
    "id": 1189
  },
  {
    "numero": 19,
    "name": "YAN PIETTRO DE SOUZA FERREIRA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 34,
      "texto": 88
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 7,
    "id": 1190
  },
  {
    "numero": 20,
    "name": "ELOAH LOUIZY NUNES ANTUNES BUENO REIS",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 28,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 7,
    "id": 1191
  },
  {
    "numero": 1,
    "name": "ANA LIVIA LEITE",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 18,
      "pseudopalavras": 17,
      "texto": 27
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1192
  },
  {
    "numero": 2,
    "name": "ANNELISE FERREIRA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 39,
      "texto": 80
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1193
  },
  {
    "numero": 3,
    "name": "ANTONIO FABRICIO MARCHIORI AYRES",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1194
  },
  {
    "numero": 4,
    "name": "ARTHUR MATHEUS OLIVEIRA DE SOUZA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 19,
      "texto": 30
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1195
  },
  {
    "numero": 5,
    "name": "BARBARA VALENTINA RAMOS DOS SANTOS",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 26,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1196
  },
  {
    "numero": 6,
    "name": "BEATRIZ OLIVEIRA FERREIRA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 33,
      "texto": 73
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1197
  },
  {
    "numero": 7,
    "name": "BOAZ SALGADO RIBEIRO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 33,
      "texto": 100
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1198
  },
  {
    "numero": 8,
    "name": "ELYZA EMANUELLY DA SILVA SANTOS",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 22,
      "pseudopalavras": 19,
      "texto": 45
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1199
  },
  {
    "numero": 9,
    "name": "EMANUELLE DE PAULA MATHIAS ALVES",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 35,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1200
  },
  {
    "numero": 12,
    "name": "GAEL BARBOSA FREITAS FARIA DE SOUZA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 26,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1201
  },
  {
    "numero": 13,
    "name": "HELOISA DA SILVA TEIXEIRA CAMARGO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 22,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1202
  },
  {
    "numero": 15,
    "name": "KAUAN LUCAS DOMINGOS",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 16,
      "pseudopalavras": 14,
      "texto": 26
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1203
  },
  {
    "numero": 16,
    "name": "MARIA GABRIELLY DA SILVA RIBEIRO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 36,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1204
  },
  {
    "numero": 17,
    "name": "MATHEUS RODRIGUES PAULINO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 32,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1205
  },
  {
    "numero": 18,
    "name": "MORGANA VITORIA SANTOS DE ALMEIDA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 31,
      "texto": 79
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1206
  },
  {
    "numero": 20,
    "name": "PEDRO HENRIQUE ALVES DA SILVA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 35,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1207
  },
  {
    "numero": 21,
    "name": "ENZO GABRIEL GONCALVES",
    "escola": "Mário de Assis César, Prof.",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 40,
      "texto": 111
    },
    "sourceFile": "Fluência Leitora 3º ano/Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1208
  },
  {
    "numero": 1,
    "name": "CAMILLY GABRIELLY DOS SANTOS",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 4,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1209
  },
  {
    "numero": 2,
    "name": "HELENA MOREIRA MARTINS DE ARAUJO",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 4,
      "texto": 124
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1210
  },
  {
    "numero": 3,
    "name": "HELOISA HELENA SILVA DE LIMA",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 4,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1211
  },
  {
    "numero": 4,
    "name": "JOAO GUILHERME ARCANJO",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1212
  },
  {
    "numero": 5,
    "name": "LUCAS GONCALVES DE OLIVEIRA CHINAQUI",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 2,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1213
  },
  {
    "numero": 6,
    "name": "LUCAS PEREIRA CURSINO",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 2,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1214
  },
  {
    "numero": 7,
    "name": "MAITE FERREIRA TENORIO",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 4,
      "texto": 64
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1215
  },
  {
    "numero": 8,
    "name": "MANUELA GIANNA DOS SANTOS",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 1,
      "texto": 32
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1216
  },
  {
    "numero": 9,
    "name": "MIGUEL DA ROCHA GERALDO",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 4,
      "texto": 25
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1217
  },
  {
    "numero": 10,
    "name": "MIGUEL DE SOUZA LEAL",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 4,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1218
  },
  {
    "numero": 11,
    "name": "MURILO SANTOS DE OLIVEIRA",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 2,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1219
  },
  {
    "numero": 12,
    "name": "PEDRO DIAS DO AMARAL MENDONCA",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 70,
      "pseudopalavras": 4,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1220
  },
  {
    "numero": 13,
    "name": "YURI RIQUELME PAIVA CARDOSO",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 2,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1221
  },
  {
    "numero": 14,
    "name": "MAHARA GOBBO ESPOSITO DESCOTTE RIBAS",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 2,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1222
  },
  {
    "numero": 1,
    "name": "CARLOS EDUARDO LOPES LOURENÇO",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 29,
      "texto": 102
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1223
  },
  {
    "numero": 2,
    "name": "ELOÁ VITÓRIA MOURA MONTEIRO",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 32,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1224
  },
  {
    "numero": 4,
    "name": "HELOISA MENDES OLIVEIRA",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 30,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1225
  },
  {
    "numero": 5,
    "name": "HENRY PACELLE GARCIA DIAS DOS SANTOS",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 31,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1226
  },
  {
    "numero": 6,
    "name": "ISABELLY VICTORIA SILVA BERNARDO",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 33,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1227
  },
  {
    "numero": 8,
    "name": "KAUA SANTOS NASCIMENTO",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 28,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1228
  },
  {
    "numero": 9,
    "name": "LAURA DE PAULA ELIZIARIO",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1229
  },
  {
    "numero": 10,
    "name": "LETYCIA GIL DOS SANTOS",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 37,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1230
  },
  {
    "numero": 11,
    "name": "LIVIA PEREIRA DE GODOY",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 40,
      "texto": 100
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1231
  },
  {
    "numero": 12,
    "name": "LUANA LOPES FERREIRA",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 35,
      "texto": 51
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1232
  },
  {
    "numero": 14,
    "name": "MARIA LUIZA MENDES GOIS",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1233
  },
  {
    "numero": 15,
    "name": "MATHEUS GABRIEL PIERRE MUNIZ CHINAQUI",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 32,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1234
  },
  {
    "numero": 17,
    "name": "THAINA DOS SANTOS MARINHO",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 34,
      "texto": 73
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1235
  },
  {
    "numero": 18,
    "name": "GAEL HUMBERTO SIMOES DE JESUS",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 27,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1236
  },
  {
    "numero": 19,
    "name": "PAULO DA COSTA CESARINO",
    "escola": "Moacyr de Almeida",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 33,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1237
  },
  {
    "numero": 1,
    "name": "ANA LIVIA CALDERARO CURSINO DOS SANTOS",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 56,
      "pseudopalavras": 37,
      "texto": 52
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1238
  },
  {
    "numero": 2,
    "name": "ANNA LUIZA DOS SANTOS SALGADO",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 99,
      "pseudopalavras": 55,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1239
  },
  {
    "numero": 3,
    "name": "ARTHUR MOREIRA DOS SANTOS CARVALHO",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 99,
      "pseudopalavras": 57,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1240
  },
  {
    "numero": 4,
    "name": "ARTHUR SIMÃO DE ALMEIDA BARBOSA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 99,
      "pseudopalavras": 75,
      "texto": 112
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1241
  },
  {
    "numero": 7,
    "name": "DAVI DE ANDRADE FERREIRA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 5,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1242
  },
  {
    "numero": 8,
    "name": "DAVI MARCELO ROSA CORTEZ",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 99,
      "pseudopalavras": 52,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 1243
  },
  {
    "numero": 9,
    "name": "EMANUELLA ALVES TOLEDO",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 99,
      "pseudopalavras": 53,
      "texto": 87
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 1244
  },
  {
    "numero": 10,
    "name": "EMILLY ARAUJO ORLANDINI",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 96,
      "pseudopalavras": 58,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 1245
  },
  {
    "numero": 11,
    "name": "FILIPE OLIVEIRA DA SILVA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 81,
      "pseudopalavras": 44,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 1246
  },
  {
    "numero": 12,
    "name": "HELOA JANUARIO DE OLIVEIRA GARCIA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 62,
      "pseudopalavras": 41,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 1247
  },
  {
    "numero": 13,
    "name": "LORENZO CONCEIÇAO DA SILVA LIMA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 81,
      "pseudopalavras": 44,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 1248
  },
  {
    "numero": 14,
    "name": "LORENZO FERNANDES CESAR",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 7,
    "id": 1249
  },
  {
    "numero": 15,
    "name": "MARCELO DE OLIVEIRA ALVES",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 79,
      "pseudopalavras": 47,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 7,
    "id": 1250
  },
  {
    "numero": 16,
    "name": "MARIA ALICE MONTEIRO DA SILVA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 67,
      "pseudopalavras": 33,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 8,
    "id": 1251
  },
  {
    "numero": 17,
    "name": "MARIA CLARA GALDINO DE OLIVEIRA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 66,
      "pseudopalavras": 33,
      "texto": 32
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 8,
    "id": 1252
  },
  {
    "numero": 18,
    "name": "MATHIAS RODRIGUES COURA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 99,
      "pseudopalavras": 57,
      "texto": 138
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 9,
    "id": 1253
  },
  {
    "numero": 19,
    "name": "MILENA MAIA ALVES DA CONCEIÇAO",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 72,
      "pseudopalavras": 45,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 9,
    "id": 1254
  },
  {
    "numero": 20,
    "name": "SOPHIA DA SILVA SANTOS",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 87,
      "pseudopalavras": 44,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 9,
    "id": 1255
  },
  {
    "numero": 21,
    "name": "VALENTINA GOMES DA SILVA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 60,
      "pseudopalavras": 41,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 10,
    "id": 1256
  },
  {
    "numero": 22,
    "name": "ATOS DANIEL LIMA DA SILVA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 62,
      "pseudopalavras": 50,
      "texto": 66
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 10,
    "id": 1257
  },
  {
    "numero": 23,
    "name": "MIGUEL HENRIQUE NASCIMENTO DO AMARAL",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 78,
      "pseudopalavras": 43,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 11,
    "id": 1258
  },
  {
    "numero": 24,
    "name": "JOAO MIGUEL GUIMARAES BARBOSA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 51,
      "pseudopalavras": 31,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 11,
    "id": 1259
  },
  {
    "numero": 25,
    "name": "LUIZ AUGUSTO ANDRADE DA SILVA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 45,
      "pseudopalavras": 33,
      "texto": 32
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 12,
    "id": 1260
  },
  {
    "numero": 1,
    "name": "ANTHONY HENRIQUE BUENO COLI",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 60,
      "texto": 111
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1261
  },
  {
    "numero": 2,
    "name": "ARTHUR HENRIQUE GONCALVES DE CARVALHO",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 8,
      "texto": 10
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1262
  },
  {
    "numero": 3,
    "name": "ARTHUR MORAIS DE MENEZES MAIA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1263
  },
  {
    "numero": 4,
    "name": "ARTHUR RODRIGUES DE JESUS SILVA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 60,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1264
  },
  {
    "numero": 5,
    "name": "ARTUR RODRIGUES MOREIRA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 34,
      "texto": 59
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1265
  },
  {
    "numero": 6,
    "name": "EMANUELLY VAZ PINTO GOMES",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 60,
      "texto": 128
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1266
  },
  {
    "numero": 7,
    "name": "ENZO GABRIEL CORNÉLIO SOARES",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 56,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1267
  },
  {
    "numero": 8,
    "name": "ENZO LOPES MOTA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 60,
      "texto": 120
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1268
  },
  {
    "numero": 10,
    "name": "ISABELA OLIVEIRA ARANTES",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 54,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1269
  },
  {
    "numero": 11,
    "name": "ISADORA CRISTINA SOUZA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 58,
      "texto": 114
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1270
  },
  {
    "numero": 12,
    "name": "JOÃO GUILHERME SILVA HENRIQUE FONSECA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 45,
      "texto": 83
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1271
  },
  {
    "numero": 14,
    "name": "LAYSLA VITORIA GONCALVES DOS SANTOS",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 47,
      "texto": 87
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1272
  },
  {
    "numero": 15,
    "name": "LUIZA MIRANDA GOUVEA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 54,
      "texto": 83
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1273
  },
  {
    "numero": 16,
    "name": "MANOEL DE FREITAS GONCALVES",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 45,
      "texto": 71
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1274
  },
  {
    "numero": 17,
    "name": "MARIA VITORIA ALVES VIEIRA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 45,
      "texto": 71
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1275
  },
  {
    "numero": 18,
    "name": "MIKAELLA DIAS ARANTES DA SILVA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 44,
      "texto": 85
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1276
  },
  {
    "numero": 19,
    "name": "NICOLAS SENA RODRIGUES DE OLIVEIRA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 60,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1277
  },
  {
    "numero": 20,
    "name": "RAFAEL PAZINE DA SILVA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 14,
      "pseudopalavras": 6,
      "texto": 11
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 1278
  },
  {
    "numero": 21,
    "name": "THIAGO FERREIRA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 60,
      "texto": 122
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 1279
  },
  {
    "numero": 22,
    "name": "BRYAN DELLA TORRE DE SOUZA PEREIRA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 47,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 1280
  },
  {
    "numero": 23,
    "name": "EMILY VITORIA CORREIA MOREIRA",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 34,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 1281
  },
  {
    "numero": 24,
    "name": "VALENTINA BERNARDES DE JESUS",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 55,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 1282
  },
  {
    "numero": 25,
    "name": "HEITOR MONTEBELLO GOMES",
    "escola": "Odete Correa Madureira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 60,
      "texto": 100
    },
    "sourceFile": "Fluência Leitora 3º ano/Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 1283
  },
  {
    "numero": 1,
    "name": "ALYAN LEVI MOURAO DOS SANTOS",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 30,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1284
  },
  {
    "numero": 2,
    "name": "ANDRESSA KAUANNY DOS SANTOS",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 40,
      "texto": 69
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1285
  },
  {
    "numero": 3,
    "name": "DAVI WILLIAN CABRAL GALDINO",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 73
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1286
  },
  {
    "numero": 4,
    "name": "ELOA EMANUELE FERREIRA PORFIRIO",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 40,
      "texto": 81
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1287
  },
  {
    "numero": 5,
    "name": "EMILLY YASMIM RIBEIRO DA CONCEICAO",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 30,
      "texto": 58
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1288
  },
  {
    "numero": 6,
    "name": "JACQUELINE VITORIA DA SILVA PEREIRA",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 21,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 1289
  },
  {
    "numero": 7,
    "name": "JOAO MIGUEL SOUZA VIEIRA DA CRUZ",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 1290
  },
  {
    "numero": 9,
    "name": "LAVINIA SOFIA DE PAULA RIBEIRO",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 30,
      "texto": 68
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 6,
    "id": 1291
  },
  {
    "numero": 10,
    "name": "MARIA ALICE GONCALVES FREIRE",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 23,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 7,
    "id": 1292
  },
  {
    "numero": 11,
    "name": "MARIA EDUARDA COSTA MANSO LUIZ",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 40,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 8,
    "id": 1293
  },
  {
    "numero": 12,
    "name": "MARIA VALENTINA ARLINDO DE CARVALHO",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 34,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 9,
    "id": 1294
  },
  {
    "numero": 13,
    "name": "MARIA VICTORIA DAS CHAGAS RODRIGUES",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 47,
      "texto": 133
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 10,
    "id": 1295
  },
  {
    "numero": 14,
    "name": "MARIA VITORIA SANT ANA FARIAS",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 31,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 11,
    "id": 1296
  },
  {
    "numero": 15,
    "name": "MIGUEL ANTONIO DA SILVA OLIVEIRA",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 40,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 12,
    "id": 1297
  },
  {
    "numero": 16,
    "name": "NICOLAS HENRY JORGE RODRIGUES",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 40,
      "texto": 76
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 12,
    "id": 1298
  },
  {
    "numero": 17,
    "name": "NICOLY MILENA JORGE RODRIGUES",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 32,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 13,
    "id": 1299
  },
  {
    "numero": 20,
    "name": "MATHEUS LUIZ LEITE CAMARGO",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 21,
      "texto": 46
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 14,
    "id": 1300
  },
  {
    "numero": 21,
    "name": "KIARA CAFALLONI DA ROSA",
    "escola": "Orlando Pires, Prof.",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 12,
      "texto": 21
    },
    "sourceFile": "Fluência Leitora 3º ano/Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 15,
    "id": 1301
  },
  {
    "numero": 1,
    "name": "ANTONIO GABRIEL DE OLIVEIRA NUNES",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 7,
      "texto": 66
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1302
  },
  {
    "numero": 2,
    "name": "ANTONIO JOSE MARTINS DA SILVA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 35,
      "texto": 115
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1303
  },
  {
    "numero": 3,
    "name": "BRYAN MIGUEL FREITAS DE ALMEIDA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 36,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1304
  },
  {
    "numero": 5,
    "name": "DAVI WILLIAM FERREIRA DOS SANTOS",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 25,
      "texto": 73
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1305
  },
  {
    "numero": 6,
    "name": "EDUARDO GABRIEL DE SOUZA FIRMINO",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 30,
      "pseudopalavras": 1,
      "texto": 42
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1306
  },
  {
    "numero": 7,
    "name": "ELLOA MONTEIRO ANDRADE",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 21,
      "texto": 93
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1307
  },
  {
    "numero": 8,
    "name": "EMILLY LIZ QUEIROZ DE FREITAS",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 40,
      "texto": 97
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1308
  },
  {
    "numero": 9,
    "name": "FELIPE PIETRO RODRIGUES DA ROCHA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 26,
      "texto": 46
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1309
  },
  {
    "numero": 10,
    "name": "FRANCISCO MODESTO DA SILVA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 28,
      "texto": 52
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1310
  },
  {
    "numero": 11,
    "name": "GABRIELLY LETICIA CESARINO BRITTO DA SILVA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 17,
      "texto": 35
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1311
  },
  {
    "numero": 12,
    "name": "ISABEL DA SILVA LUCAS",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 37,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1312
  },
  {
    "numero": 13,
    "name": "JOANNA DE MOURA FOLHA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 39,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1313
  },
  {
    "numero": 15,
    "name": "JOSE ARMANDO HONORIO CEZAR SIMOES",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 28,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1314
  },
  {
    "numero": 16,
    "name": "JULIANA LEMES SANTOS",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 35,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1315
  },
  {
    "numero": 17,
    "name": "LIVIA DA SILVA PIRES",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 14,
      "pseudopalavras": 12,
      "texto": 25
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1316
  },
  {
    "numero": 18,
    "name": "LORENZO DA SILVA MOREIRA BORGES",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 31,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1317
  },
  {
    "numero": 19,
    "name": "MARIA CECILIA EMANUELA DA SILVA BARBOSA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 19,
      "texto": 36
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1318
  },
  {
    "numero": 20,
    "name": "MARIA EDUARDA VICENTE DE ANDRADE",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 23,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1319
  },
  {
    "numero": 21,
    "name": "MATHEUS VILA NOVA RIBEIRO JUNIOR",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 27,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1320
  },
  {
    "numero": 22,
    "name": "MAYLA LOURENCO RAMOS DA SILVA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 6,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1321
  },
  {
    "numero": 23,
    "name": "NOAH JOAQUIM CASTRO DE JESUS",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 18,
      "texto": 45
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1322
  },
  {
    "numero": 24,
    "name": "SAMUEL HENRIQUE DA SILVA SIQUEIRA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 7,
      "pseudopalavras": 1,
      "texto": 13
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1323
  },
  {
    "numero": 25,
    "name": "VITTOR SOUZA DOS SANTOS",
    "escola": "Padre Zezinho",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 28,
      "pseudopalavras": 25,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1324
  },
  {
    "numero": 1,
    "name": "ALICIA VICTORIA CORREARD DA SILVA FERREIRA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 37,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1325
  },
  {
    "numero": 2,
    "name": "ANA LETICIA DE FRANCA HENRIQUE GARUFI",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 35,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1326
  },
  {
    "numero": 3,
    "name": "ARTHUR MIGUEL COSTA FERREIRA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 40,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1327
  },
  {
    "numero": 4,
    "name": "BEATRIZ DUARTE GONCALVES DA SILVA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1328
  },
  {
    "numero": 5,
    "name": "BRENO RODRIGUES DE OLIVEIRA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 20,
      "texto": 52
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1329
  },
  {
    "numero": 6,
    "name": "DAVI DOS SANTOS BASTOS",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 40,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1330
  },
  {
    "numero": 7,
    "name": "EMANUELLY VITÓRIA DIAS DE PAULA GARCIA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 4,
      "texto": 11
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1331
  },
  {
    "numero": 8,
    "name": "ENRICO DA SILVA CORREA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1332
  },
  {
    "numero": 9,
    "name": "ENZO FARIAS CRUZ BUSTAMANTE",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1333
  },
  {
    "numero": 10,
    "name": "ENZO MIGUEL CAVALCANTI ROCHA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 40,
      "texto": 69
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1334
  },
  {
    "numero": 11,
    "name": "INGRID KAUANY SILVERIO DA GLORIA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 31,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1335
  },
  {
    "numero": 12,
    "name": "JOAO ROBERTO MACEDO ORACIO",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 135
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1336
  },
  {
    "numero": 13,
    "name": "JOAQUIM LEONI ALMEIDA SANTOS",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1337
  },
  {
    "numero": 14,
    "name": "KYARA EMANUELA MOURA DA CONCEICAO",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 30,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1338
  },
  {
    "numero": 15,
    "name": "LARA RAFAELLY DA SILVA DE JESUS",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 30,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1339
  },
  {
    "numero": 16,
    "name": "LUARA CRISTINA PEREIRA",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 35,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1340
  },
  {
    "numero": 17,
    "name": "LUCCA DANIEL CARDOSO DOS SANTOS",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 30,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1341
  },
  {
    "numero": 18,
    "name": "MARIA EDUARDA BORGES DO PRADO",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1342
  },
  {
    "numero": 19,
    "name": "MARIA FERNANDA DE CASTRO PIRES",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 31,
      "texto": 58
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1343
  },
  {
    "numero": 20,
    "name": "MARIA FERNANDA ESTEVES DOS SANTOS",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 14,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1344
  },
  {
    "numero": 21,
    "name": "MAYA ARMSTRONG SOUZA SALUM",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 32,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1345
  },
  {
    "numero": 22,
    "name": "TICIANE SANTOS RAIMUNDO",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 40,
      "texto": 143
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1346
  },
  {
    "numero": 23,
    "name": "VALENTINA LEITE NUNES",
    "escola": "Padre Zezinho",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 32,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1347
  },
  {
    "numero": 1,
    "name": "ANTONELLA DA SILVA MOURÃO LEITE",
    "escola": "Paulo Freire, Prof.",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 22,
      "texto": 37
    },
    "sourceFile": "Fluência Leitora 3º ano/Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1348
  },
  {
    "numero": 2,
    "name": "ANTONIO SILVA MARINO",
    "escola": "Paulo Freire, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 40,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1349
  },
  {
    "numero": 3,
    "name": "BERNARDO HENRIQUE DOS SANTOS ALVES FERREIRA",
    "escola": "Paulo Freire, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 133
    },
    "sourceFile": "Fluência Leitora 3º ano/Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1350
  },
  {
    "numero": 4,
    "name": "DAVI DIMAS DA SILVA FREITAS",
    "escola": "Paulo Freire, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1351
  },
  {
    "numero": 5,
    "name": "ELOAH DO COUTO TEIXEIRA",
    "escola": "Paulo Freire, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1352
  },
  {
    "numero": 6,
    "name": "IASMIM RIBEIRO DO CARMO",
    "escola": "Paulo Freire, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1353
  },
  {
    "numero": 7,
    "name": "ISADORA MARIA ALVES CABRAL",
    "escola": "Paulo Freire, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 40,
      "texto": 138
    },
    "sourceFile": "Fluência Leitora 3º ano/Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1354
  },
  {
    "numero": 8,
    "name": "MELINA MARIA DE ABREU SOUZA",
    "escola": "Paulo Freire, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 33,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1355
  },
  {
    "numero": 9,
    "name": "MIGUEL HENRIQUE DE ASSIS NOGUEIRA DA SILVA",
    "escola": "Paulo Freire, Prof.",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1356
  },
  {
    "numero": 10,
    "name": "VALENTINA CARVALHO BAHIA",
    "escola": "Paulo Freire, Prof.",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 32,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1357
  },
  {
    "numero": 1,
    "name": "ALICE DESLANDES DE CAMPOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 11,
      "texto": 25
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1358
  },
  {
    "numero": 2,
    "name": "ALICIA VITORIA DALLA VALE DOS SANTOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 33,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1359
  },
  {
    "numero": 3,
    "name": "ANA GABRIELLY MARIANO RAMOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 11,
      "pseudopalavras": 10,
      "texto": 28
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1360
  },
  {
    "numero": 5,
    "name": "ARTHUR FELIPE FERREIRA GOMES MIGUEL",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 32,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1361
  },
  {
    "numero": 6,
    "name": "DAVI LUCAS LIMA DA SILVA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 10,
      "texto": 16
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1362
  },
  {
    "numero": 7,
    "name": "DIOGO SOUSA MARTINS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 33,
      "texto": 97
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1363
  },
  {
    "numero": 8,
    "name": "EMANUEL CORDEIRO MARTINS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 13,
      "texto": 35
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1364
  },
  {
    "numero": 9,
    "name": "EMANUEL HENRIQUE MAFRA DO PRADO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 13,
      "pseudopalavras": 17,
      "texto": 32
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1365
  },
  {
    "numero": 11,
    "name": "HEITOR COPULA BARBOZA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 144
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1366
  },
  {
    "numero": 12,
    "name": "ISAQUE DE SOUZA LIMA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 24,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1367
  },
  {
    "numero": 13,
    "name": "JOSE FELIPE PEREIRA DE OLIVEIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 37,
      "texto": 66
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1368
  },
  {
    "numero": 14,
    "name": "JOSUE AUGUSTO DE ABREU OLIVEIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 40,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1369
  },
  {
    "numero": 15,
    "name": "KELLY MARIAH MONTEIRO DO PRADO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 22,
      "texto": 40
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1370
  },
  {
    "numero": 17,
    "name": "LORENZO HENRIQUE ALVARENGA LIMA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 22,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1371
  },
  {
    "numero": 18,
    "name": "LUCAS LEITE TEIXEIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1372
  },
  {
    "numero": 19,
    "name": "MARIA ALICE MOREIRA MENEZES",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 19,
      "texto": 40
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1373
  },
  {
    "numero": 20,
    "name": "MARIAH ANTHONELLA ALVES FERREIRA DE FREITAS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 35,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1374
  },
  {
    "numero": 21,
    "name": "PIETRO HENRICO BACULI DE OLIVEIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 108
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1375
  },
  {
    "numero": 22,
    "name": "KELVIN ALLYSSON LUIZ DE SOUZA EMILIO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 108
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1376
  },
  {
    "numero": 23,
    "name": "FELIPE ANTONIO LACORTE CORTEZ",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1377
  },
  {
    "numero": 1,
    "name": "ANNA LARA SANTOS DE CAMARGO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1378
  },
  {
    "numero": 2,
    "name": "EMANUELLY KETHELLEN MENDES XAVIER",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 8,
      "texto": 10
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1379
  },
  {
    "numero": 3,
    "name": "FERNANDA REIS ALMEIDA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 40,
      "texto": 120
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1380
  },
  {
    "numero": 4,
    "name": "GUSTAVO THOMAZ CARVALHO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1381
  },
  {
    "numero": 5,
    "name": "HEITOR DIAS DE TOLEDO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 8,
      "texto": 9
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1382
  },
  {
    "numero": 6,
    "name": "HENRIQUE CONSTANCIO DE SOUSA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 125
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1383
  },
  {
    "numero": 7,
    "name": "ISABELLA DA CONCEICAO RIBEIRO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 27,
      "texto": 38
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1384
  },
  {
    "numero": 9,
    "name": "LARYSSA MACEDO BRUM ANTUNES",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1385
  },
  {
    "numero": 10,
    "name": "LUCAS MIGUEL FERREIRA GOMES",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 31,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1386
  },
  {
    "numero": 12,
    "name": "LUIS MIGUEL RAMOS LAMIN",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1387
  },
  {
    "numero": 14,
    "name": "RAFAEL HENRIQUE GONCALVES ARRUDA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 18,
      "texto": 29
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1388
  },
  {
    "numero": 15,
    "name": "RAFAELA OLIVEIRA DIAS DA COSTA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 28,
      "texto": 52
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1389
  },
  {
    "numero": 16,
    "name": "RODRIGO GRACIANO MATHIAS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1390
  },
  {
    "numero": 17,
    "name": "VALENTINA FREITAS COELHO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 2,
      "texto": 2
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1391
  },
  {
    "numero": 18,
    "name": "VALENTINA VITÓRIA DA SILVA SOUZA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 6,
      "texto": 10
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1392
  },
  {
    "numero": 19,
    "name": "ZACK RUTTER PINA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 40,
      "texto": 66
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1393
  },
  {
    "numero": 20,
    "name": "ELOISA EMANUELY DA SILVA GONÇALVES",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 31,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1394
  },
  {
    "numero": 21,
    "name": "LUCCA MIGUEL DE JESUS RODRIGUES",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 21,
      "texto": 38
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1395
  },
  {
    "numero": 22,
    "name": "KAYLON MARQUES FERREIRA AMARAL",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1396
  },
  {
    "numero": 1,
    "name": "ALICE FERNANDES GUIMARAES DE OLIVEIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 33,
      "texto": 106
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1397
  },
  {
    "numero": 2,
    "name": "ANA BEATRIZ COSTA DE JESUS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 33,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1398
  },
  {
    "numero": 3,
    "name": "ANA CLARA DA COSTA DURVAL",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 38,
      "texto": 115
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1399
  },
  {
    "numero": 4,
    "name": "ARTHUR CESAR DA SILVA RAELE",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 19,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1400
  },
  {
    "numero": 5,
    "name": "DAVI RAMOS MENDES GONÇALVES",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 33,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1401
  },
  {
    "numero": 6,
    "name": "ELOA URBANO QUEIROZ",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 36,
      "texto": 91
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1402
  },
  {
    "numero": 7,
    "name": "EVELIN LAUANY DA SILVA RODRIGUES",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 19,
      "texto": 45
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1403
  },
  {
    "numero": 8,
    "name": "GUILHERME ALEXANDER DE OLIVEIRA AVELINO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 18,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1404
  },
  {
    "numero": 9,
    "name": "ISAAC FERNANDES DE LIMA FERRAZ",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 8,
      "texto": 25
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1405
  },
  {
    "numero": 10,
    "name": "ISABELLA CAROLINE VARGAS MOREIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 25,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1406
  },
  {
    "numero": 11,
    "name": "ISABELLA MANUELY BARBOSA ROQUE",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 11,
      "pseudopalavras": 5,
      "texto": 6
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1407
  },
  {
    "numero": 12,
    "name": "KAUE GABRIEL SANTANA DA SILVA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 25,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1408
  },
  {
    "numero": 13,
    "name": "LAVINIA CAROLINE FERREIRA PEREIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 12,
      "texto": 32
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 1409
  },
  {
    "numero": 15,
    "name": "LUNNA THAIS SIMAO DOS SANTOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 32,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 1410
  },
  {
    "numero": 16,
    "name": "MARIA JULIA MATHIAS DA SILVA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 25,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 1411
  },
  {
    "numero": 17,
    "name": "MICHEL AUGUSTO VIEIRA SANTOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 36,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 1412
  },
  {
    "numero": 18,
    "name": "PEDRO AUGUSTO ANTUNES BIZERRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 36,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 1413
  },
  {
    "numero": 19,
    "name": "MATHEUS HENRIQUE DA SILVA CONCEICAO DE OLIVEIRA RAMOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 5,
    "id": 1414
  },
  {
    "numero": 1,
    "name": "DAVI LUCAS FERREIRA GENEROSO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 32,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 1415
  },
  {
    "numero": 2,
    "name": "ELOA VITORIA RODRIGUES MARCELINO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 5,
      "texto": 37
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 1416
  },
  {
    "numero": 3,
    "name": "EMANUELLE ALVES PEREIRA DE LIMA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 21,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 1417
  },
  {
    "numero": 4,
    "name": "FELIPE GABRIEL SANTOS DE AQUINO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 22,
      "texto": 66
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 1418
  },
  {
    "numero": 5,
    "name": "GABRIEL THIAGO DA SILVA BRITO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 28,
      "texto": 92
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 1419
  },
  {
    "numero": 6,
    "name": "HENZO SABINO DA SILVA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 25,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 1420
  },
  {
    "numero": 7,
    "name": "ISAAC GABRIEL DA SILVA RAELE",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 21,
      "texto": 52
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 1421
  },
  {
    "numero": 8,
    "name": "ISMAEL WERNECK CORDEIRO SANTOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 19,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 1422
  },
  {
    "numero": 10,
    "name": "LUIS MIGUEL REZENDE DE OLIVEIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 146
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 1423
  },
  {
    "numero": 12,
    "name": "MIGUEL DAVI PEREIRA DOS SANTOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 1424
  },
  {
    "numero": 13,
    "name": "MIRELLA DANTAS DE CARVALHO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 26,
      "texto": 73
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 1425
  },
  {
    "numero": 14,
    "name": "MURYLLO GONCALVES DA SILVA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 1426
  },
  {
    "numero": 16,
    "name": "VICTORIA PRADA SILVA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 32,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 1427
  },
  {
    "numero": 17,
    "name": "LORENZO HENRIQUE BASTOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 29,
      "texto": 85
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 1428
  },
  {
    "numero": 19,
    "name": "MARIA EDUARDA DE SOUZA ROCHA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 18,
      "texto": 40
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 1429
  },
  {
    "numero": 21,
    "name": "LUCAS KAUA NOGUEIRA DE SOUZA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 28,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 1430
  },
  {
    "numero": 1,
    "name": "ADRYAN RAFAEL PEREIRA ALVES",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 27,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1431
  },
  {
    "numero": 2,
    "name": "ANNA CLARA CURSINO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 26,
      "pseudopalavras": 7,
      "texto": 32
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1432
  },
  {
    "numero": 3,
    "name": "ARTHUR MIGUEL MORAES DE CAMARGO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1433
  },
  {
    "numero": 5,
    "name": "BRAYAN LUCAS DA SILVA SARAIVA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 40,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1434
  },
  {
    "numero": 6,
    "name": "DANIEL ALVES LEMES",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 26,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1435
  },
  {
    "numero": 7,
    "name": "DAVI WILLIAM DA SILVA FERMINO DOS SANTOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 13,
      "pseudopalavras": 9,
      "texto": 17
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1436
  },
  {
    "numero": 8,
    "name": "FRANTCHESCO HENRIKE GOUVÊA DE ARAUJO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 133
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1437
  },
  {
    "numero": 9,
    "name": "HELOIZE DAMILI DO NASCIMENTO DOS SANTOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1438
  },
  {
    "numero": 10,
    "name": "HELOIZE EMANUELLE DE MOURA SANTOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1439
  },
  {
    "numero": 12,
    "name": "KEVIN CHRISTIAN FERREIRA SILVA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1440
  },
  {
    "numero": 13,
    "name": "LIVIA NASCIMENTO DE ALCANTARA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 27,
      "texto": 73
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1441
  },
  {
    "numero": 14,
    "name": "MARIA RITA DAS CHAGAS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 22,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1442
  },
  {
    "numero": 15,
    "name": "MICHAEL SIMOES LIMA DOS SANTOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1443
  },
  {
    "numero": 16,
    "name": "MIGUEL CALEBE MATHIAS DOS SANTOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 15,
      "texto": 38
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1444
  },
  {
    "numero": 18,
    "name": "REBECCA GOMES ELIAS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 40,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1445
  },
  {
    "numero": 19,
    "name": "SOFIA OLIVEIRA DOS SANTOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 135
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 1446
  },
  {
    "numero": 22,
    "name": "CAMILA FLORIANO MARCONDES",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 39,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 1447
  },
  {
    "numero": 23,
    "name": "SOPHIA FERREIRA TUANO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 39,
      "texto": 49
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 1448
  },
  {
    "numero": 1,
    "name": "ANA ALICE MARTINI",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 9,
      "pseudopalavras": 0,
      "texto": 16
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1449
  },
  {
    "numero": 2,
    "name": "ANA LIVIA DOS SANTOS BENTO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 99
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1450
  },
  {
    "numero": 3,
    "name": "ANTHONY EDUARDO DA SILVA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 40,
      "texto": 93
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1451
  },
  {
    "numero": 4,
    "name": "ANTHONY FELIPE DA SILVA FIALHO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 82,
      "pseudopalavras": 40,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1452
  },
  {
    "numero": 5,
    "name": "BELLA TORQUATO PACHECO GAMA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 26,
      "texto": 56
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1453
  },
  {
    "numero": 6,
    "name": "DAVI LUCAS DE JESUS TAVARES",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 4
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1454
  },
  {
    "numero": 7,
    "name": "GIULLIA ISABELA MATOS LIMA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 68,
      "pseudopalavras": 20,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1455
  },
  {
    "numero": 8,
    "name": "KAIQUE GOMES DO SANTOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 33,
      "pseudopalavras": 27,
      "texto": 17
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1456
  },
  {
    "numero": 9,
    "name": "KELVYN LUCAS FERREIRA DA COSTA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 25,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1457
  },
  {
    "numero": 10,
    "name": "KIARA NASCIMENTO DA SILVA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 35,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1458
  },
  {
    "numero": 11,
    "name": "LUIZA VIANA DA COSTA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 39,
      "pseudopalavras": 27,
      "texto": 69
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1459
  },
  {
    "numero": 12,
    "name": "MANUELA ALCANTARA CARDOSO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 40,
      "texto": 100
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1460
  },
  {
    "numero": 13,
    "name": "MARIA HELENA AGUSTINHO DE OLIVEIRA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 28,
      "pseudopalavras": 21,
      "texto": 42
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1461
  },
  {
    "numero": 14,
    "name": "MARIA VITORIA COSTA DIAS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 15,
      "texto": 41
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1462
  },
  {
    "numero": 16,
    "name": "OLAVO BRANDÃO DA SILVA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 99,
      "pseudopalavras": 34,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1463
  },
  {
    "numero": 17,
    "name": "ROBERT ALEXANDRE DE BARROS ANACLETO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 1,
      "pseudopalavras": 1,
      "texto": 3
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1464
  },
  {
    "numero": 19,
    "name": "THIAGO DE SOUZA DOS SANTOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 40,
      "texto": 73
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1465
  },
  {
    "numero": 20,
    "name": "JHULLY KETHELLYN FRANCA DOS SANTOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 36,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 1466
  },
  {
    "numero": 21,
    "name": "MARCOS ANTONIO FIRMINO MOREIRA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 19,
      "pseudopalavras": 14,
      "texto": 27
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 1467
  },
  {
    "numero": 2,
    "name": "ANTHONY HENRIQUE VICENTINI PEDRO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 40,
      "texto": 92
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1468
  },
  {
    "numero": 3,
    "name": "ARTHUR APOLINARIO DE OLIVEIRA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 93
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1469
  },
  {
    "numero": 4,
    "name": "DAYANE HELENA FEITEIRO DOS SANTOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 16,
      "texto": 59
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1470
  },
  {
    "numero": 5,
    "name": "EDER AURELIO DE MORAES JUNIOR",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 38,
      "texto": 84
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1471
  },
  {
    "numero": 6,
    "name": "EMILLY VITORIA RIBEIRO DE MORAIS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 33,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1472
  },
  {
    "numero": 7,
    "name": "ESTHELLY FERNANDA DOS SANTOS DE OLIVEIRA DA SILVA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1473
  },
  {
    "numero": 10,
    "name": "MARIA CECILIA REIS TIMOTHEO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 142
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1474
  },
  {
    "numero": 11,
    "name": "MAYKON CLAYTON MOREIRA DA ROSA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 33,
      "texto": 97
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 1475
  },
  {
    "numero": 12,
    "name": "PAULO ENZO DE LIMA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 34,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 1476
  },
  {
    "numero": 13,
    "name": "PEDRO HENRIQUE VARAS SOTO DOS SANTOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 40,
      "texto": 88
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 1477
  },
  {
    "numero": 15,
    "name": "THAYLA MILENA SILVA MOREIRA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 34,
      "texto": 56
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 5,
    "id": 1478
  },
  {
    "numero": 16,
    "name": "IGOR WESLEI SANTANA VELLOSO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 59,
      "pseudopalavras": 40,
      "texto": 120
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 5,
    "id": 1479
  },
  {
    "numero": 17,
    "name": "HEITOR HENRIQUE DA SILVA PIRES",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 22,
      "texto": 33
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 5,
    "id": 1480
  },
  {
    "numero": 18,
    "name": "ANA LIVIA MUNHOZ MORAES DE OLIVEIRA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 11,
      "pseudopalavras": 15,
      "texto": 17
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 6,
    "id": 1481
  },
  {
    "numero": 19,
    "name": "PYETRO GABRIEL DA SILVA FUENTES",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 101
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 6,
    "id": 1482
  },
  {
    "numero": 1,
    "name": "ANNE ELIZA VENANCIO GREGORIO SILVA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 1483
  },
  {
    "numero": 2,
    "name": "AXL MILAD RIBEIRO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 35,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 1484
  },
  {
    "numero": 3,
    "name": "BIANCA EMILLY MORAES NUNES",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 32,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 1485
  },
  {
    "numero": 4,
    "name": "CLARICE DOS SANTOS CARLOTA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 40,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 1486
  },
  {
    "numero": 6,
    "name": "ISABELLA EDUARDA TAKEZAWA RAMOS DOS SANTOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 29,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 1,
    "id": 1487
  },
  {
    "numero": 7,
    "name": "ISMAEL DAVI OLIVEIRA DOS SANTOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 25,
      "texto": 54
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 1488
  },
  {
    "numero": 8,
    "name": "JENNIFER VITORIA EUFRAZIA ALVARENGA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 28,
      "texto": 56
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 1489
  },
  {
    "numero": 9,
    "name": "JOSE MIGUEL MONTEIRO ROSA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 35,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 1490
  },
  {
    "numero": 10,
    "name": "KAMILLY SOPHIA CARIEL PEREIRA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 34,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 1491
  },
  {
    "numero": 11,
    "name": "KYARA TAYLA DANTAS DA SILVA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 22,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 1492
  },
  {
    "numero": 12,
    "name": "LUIZ MIGUEL BRITO DA SILVA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 40,
      "texto": 100
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 1493
  },
  {
    "numero": 13,
    "name": "LUIZ MIGUEL DOS SANTOS NUNES",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 29,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 2,
    "id": 1494
  },
  {
    "numero": 14,
    "name": "LUIZ VINICIUS DA CRUZ ALVES",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 1495
  },
  {
    "numero": 15,
    "name": "MANUELLA EDUARDA DA COSTA PEREIRA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 29,
      "texto": 82
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 1496
  },
  {
    "numero": 16,
    "name": "MARIA ALICE DOS SANTOS MOREIRA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 13,
      "pseudopalavras": 19,
      "texto": 30
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 3,
    "id": 1497
  },
  {
    "numero": 17,
    "name": "MARIA CLARA DE ASSIS CRISTINO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 122
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 4,
    "id": 1498
  },
  {
    "numero": 18,
    "name": "THAYLOR WELLINGTON ELIAS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 4,
    "id": 1499
  },
  {
    "numero": 19,
    "name": "ISABELLY VITORIA GOMES NASCIMENTO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 17,
      "texto": 66
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 4,
    "id": 1500
  },
  {
    "numero": 20,
    "name": "ELLOA VITORIA DOS SANTOS SILVA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 16,
      "texto": 26
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 4,
    "id": 1501
  },
  {
    "numero": 21,
    "name": "MATHIAS SAMUEL DE JESUS DA SILVA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "3º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 15,
      "texto": 21
    },
    "sourceFile": "Fluência Leitora 3º ano/Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO D.pdf",
    "sourcePage": 5,
    "id": 1502
  },
  {
    "numero": 1,
    "name": "ANA LIVIA CLARO CESARIO",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 30,
      "texto": 45
    },
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1503
  },
  {
    "numero": 2,
    "name": "ARTHUR CORREA DA SILVA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1504
  },
  {
    "numero": 3,
    "name": "EDUARDO VINICIUS DO PRADO",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1505
  },
  {
    "numero": 5,
    "name": "GABRIEL BATISTA MOREIRA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 36,
      "texto": 80
    },
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1506
  },
  {
    "numero": 7,
    "name": "JOÃO MIGUEL MIRANDA TEREZA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 40,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1507
  },
  {
    "numero": 10,
    "name": "LORENZO DE JESUS ZUMIOTTI",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 40,
      "texto": 107
    },
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1508
  },
  {
    "numero": 11,
    "name": "LUCAS GABRIEL LOPES EMILIANO",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 19,
      "pseudopalavras": 10,
      "texto": 13
    },
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1509
  },
  {
    "numero": 12,
    "name": "MANUELA CIRILLO ALMEIDA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1510
  },
  {
    "numero": 13,
    "name": "MARIA LUIZA SANTOS MOURA DA SILVA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 23,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1511
  },
  {
    "numero": 14,
    "name": "MATHEUS HENRIQUE ALVES GOMES",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 33,
      "pseudopalavras": 26,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1512
  },
  {
    "numero": 15,
    "name": "MELISSA ABRAHAO DE CAMARGO",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 35,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1513
  },
  {
    "numero": 16,
    "name": "PAULO MATEUS CLARO",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 30,
      "pseudopalavras": 18,
      "texto": 24
    },
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1514
  },
  {
    "numero": 17,
    "name": "THEO EDUARDO BUENO PINTO",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1515
  },
  {
    "numero": 18,
    "name": "CLARICE ISABELLY CORREA ROSSETTO",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 6,
      "pseudopalavras": 6,
      "texto": 7
    },
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1516
  },
  {
    "numero": 20,
    "name": "DANIEL DA SILVA DANTAS",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 31,
      "texto": 68
    },
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1517
  },
  {
    "numero": 21,
    "name": "JOAO LUCAS MONTEIRO DOMINGO",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 25,
      "texto": 48
    },
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1518
  },
  {
    "numero": 22,
    "name": "HUGO CESAR DOS SANTOS MUNIZ",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 40,
      "texto": 100
    },
    "sourceFile": "Fluência Leitora 3º ano/Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1519
  },
  {
    "numero": 1,
    "name": "ALICE TORRES DE OLIVEIRA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1520
  },
  {
    "numero": 2,
    "name": "ANA LUISA BARBOSA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 33,
      "texto": 57
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1521
  },
  {
    "numero": 4,
    "name": "BEATRIZ PEREIRA DE SOUZA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 40,
      "texto": 109
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1522
  },
  {
    "numero": 5,
    "name": "CAIO RAMOS MOREIRA DA SILVA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 25,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1523
  },
  {
    "numero": 6,
    "name": "DANIELE CAMARGO BENTO",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 102
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1524
  },
  {
    "numero": 7,
    "name": "EDUARDO FERREIRA PINTO",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 30,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1525
  },
  {
    "numero": 8,
    "name": "ENZO GOMES GALVAO MOTTA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 35,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1526
  },
  {
    "numero": 9,
    "name": "ENZO PAROCHE LOPES",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1527
  },
  {
    "numero": 10,
    "name": "HEITOR EXPEDITO PEREIRA MACHADO",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 30,
      "pseudopalavras": 20,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1528
  },
  {
    "numero": 11,
    "name": "JOAO GABRIEL DOS SANTOS ALKMIN",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 40,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1529
  },
  {
    "numero": 12,
    "name": "KEILA MARQUES CORTEZ",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 25,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1530
  },
  {
    "numero": 13,
    "name": "KESIA LARA FAUSTINO LOPES",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 30,
      "texto": 63
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1531
  },
  {
    "numero": 15,
    "name": "LUCAS DOS SANTOS DA CRUZ",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 30,
      "texto": 68
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1532
  },
  {
    "numero": 16,
    "name": "LUIZ GUSTAVO DE JESUS ALVES",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 20,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1533
  },
  {
    "numero": 17,
    "name": "MARIA GABRIELLA PEREIRA REGIS",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1534
  },
  {
    "numero": 18,
    "name": "MARIA LAURA URBANO BRAGA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1535
  },
  {
    "numero": 19,
    "name": "MIGUEL PAIVA OLIVEIRA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 35,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1536
  },
  {
    "numero": 20,
    "name": "SOPHIA LOURENÇA PINTO MOREIRA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 40,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1537
  },
  {
    "numero": 21,
    "name": "STELLA EDUARDA GADEIA DE OLIVEIRA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1538
  },
  {
    "numero": 22,
    "name": "TAINE PEREIRA DE MOURA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1539
  },
  {
    "numero": 23,
    "name": "YURI GABRIEL NASCIMENTO DA SILVA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 20,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1540
  },
  {
    "numero": 24,
    "name": "YVI LUCY AREDES DE MORAES",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1541
  },
  {
    "numero": 25,
    "name": "VICTORIA LAURA EVARISTO PORFIRIO",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 20,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1542
  },
  {
    "numero": 26,
    "name": "PIETRA VICENTINA LACERDA LOURENCO",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 28,
      "texto": 55
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1543
  },
  {
    "numero": 1,
    "name": "AGATHA HELOÍSA DA SILVA GODOY",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 40,
      "texto": 103
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1544
  },
  {
    "numero": 2,
    "name": "ALICE NICOLLY NUNES DA SILVA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 40,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1545
  },
  {
    "numero": 3,
    "name": "ANA CECILLIA DA SILVA TEODORO",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 11,
      "texto": 41
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1546
  },
  {
    "numero": 4,
    "name": "BETHÂNIA VILELA DINIZ FERREIRA MARTINS",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1547
  },
  {
    "numero": 5,
    "name": "BRUNA LUIZA OLIVEIRA LEITE",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 125
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1548
  },
  {
    "numero": 6,
    "name": "CALEB DAMASCENO DE SOUZA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 125
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1549
  },
  {
    "numero": 7,
    "name": "EMANUELLY CRISTINA DE OLIVEIRA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 10,
      "texto": 14
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1550
  },
  {
    "numero": 8,
    "name": "ESTEVAN RODRIGUES DE SOUZA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 13,
      "pseudopalavras": 15,
      "texto": 19
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1551
  },
  {
    "numero": 9,
    "name": "GAEL VINICIUS OLIVEIRA DE SOUZA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 40,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1552
  },
  {
    "numero": 10,
    "name": "HENRY MIGUEL CARIS MACIEL",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 36,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1553
  },
  {
    "numero": 11,
    "name": "ISABELLA DA SILVA MONTEIRO",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 38,
      "texto": 49
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1554
  },
  {
    "numero": 12,
    "name": "ISIS MANUELLE DE FREITAS CARVALHO",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 25,
      "texto": 40
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1555
  },
  {
    "numero": 13,
    "name": "JOSE FELIPE NUNES DE OLIVEIRA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 135
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1556
  },
  {
    "numero": 14,
    "name": "JOSE LEONARDO DE SOUZA DA SILVA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 11,
      "texto": 8
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1557
  },
  {
    "numero": 15,
    "name": "KHEMILLYN MANUELLY VILAS BOAS LEITE",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 5,
      "texto": 3
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1558
  },
  {
    "numero": 17,
    "name": "MARCOS HENRIQUE FERREIRA DE OLIVEIRA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 22,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1559
  },
  {
    "numero": 18,
    "name": "PAULO HENRIQUE ARNEIRO DOS SANTOS",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 40,
      "texto": 83
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1560
  },
  {
    "numero": 20,
    "name": "PIETRO RODRIGUES ANTONIO",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 40,
      "texto": 97
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1561
  },
  {
    "numero": 21,
    "name": "SALOMAO PERES RAMOS DOS SANTOS",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 40,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1562
  },
  {
    "numero": 22,
    "name": "SOPHIA FRANCISCA GONCALVES",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 112
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1563
  },
  {
    "numero": 24,
    "name": "YASMIN FERNANDA LORENO RIUTO DE OLIVEIRA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 31,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1564
  },
  {
    "numero": 25,
    "name": "LUCAS SANTOS NEVES",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 38,
      "texto": 94
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1565
  },
  {
    "numero": 26,
    "name": "HELOISA DOS SANTOS DIAS",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 29,
      "texto": 65
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1566
  },
  {
    "numero": 27,
    "name": "ELISE DOS SANTOS DIAS",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 40,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1567
  },
  {
    "numero": 1,
    "name": "ALICE VIRIATO FRANCISCO",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 34,
      "texto": 87
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1568
  },
  {
    "numero": 2,
    "name": "ALLAN PATRICK DOS SANTOS SILVA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1569
  },
  {
    "numero": 3,
    "name": "ARTHUR GOMES DE JESUS",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 40,
      "texto": 74
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1570
  },
  {
    "numero": 4,
    "name": "ARTHUR RAFAEL DE ARAUJO MACHADO",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 1,
    "id": 1571
  },
  {
    "numero": 5,
    "name": "ARTHUR SILVA DA GLORIA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 8,
      "texto": 15
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1572
  },
  {
    "numero": 7,
    "name": "DIOGO HENRIQUE GOMES ROCHA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 59,
      "pseudopalavras": 40,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1573
  },
  {
    "numero": 8,
    "name": "HELENA BEZERRA DE FARIA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 100
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1574
  },
  {
    "numero": 9,
    "name": "ISADORA RAFAELA FERNANDES DA SILVA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 125
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1575
  },
  {
    "numero": 10,
    "name": "KATHERINE VITORIA LEMES DA SILVA LEITE",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 35,
      "texto": 120
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 2,
    "id": 1576
  },
  {
    "numero": 11,
    "name": "KAUANNY EMANUELLE PEREIRA DE CAMPOS",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 32,
      "texto": 71
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1577
  },
  {
    "numero": 12,
    "name": "KIARA VALENTINA ARAGOSO SILVA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 32,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1578
  },
  {
    "numero": 13,
    "name": "LUCAS LIMA CARDOSO MAIA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 135
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1579
  },
  {
    "numero": 14,
    "name": "MANOELLA LAVINIAH BEZERRA MELLO",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 38,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1580
  },
  {
    "numero": 15,
    "name": "MARIA VALENTINA SANTANA LIMA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 138
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1581
  },
  {
    "numero": 16,
    "name": "MARIAH GRANATO OLIVEIRA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 38,
      "texto": 88
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 3,
    "id": 1582
  },
  {
    "numero": 17,
    "name": "MELISSA VITORIA DA SILVA JORDAO",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 4,
      "texto": 8
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 1583
  },
  {
    "numero": 18,
    "name": "NOAH GOMES PAIVA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 5,
      "texto": 10
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 1584
  },
  {
    "numero": 19,
    "name": "PATRICK BOLDRINI DOS SANTOS ALVES",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 33,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 4,
    "id": 1585
  },
  {
    "numero": 20,
    "name": "PEDRO HENRIQUE CAMPOS DINIZ",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 37,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 5,
    "id": 1586
  },
  {
    "numero": 21,
    "name": "PEDRO MIGUEL DE SOUZA BRAGA",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 159
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 5,
    "id": 1587
  },
  {
    "numero": 22,
    "name": "SAMUEL RICARDO DE OLIVEIRA SANTOS",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 118
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 5,
    "id": 1588
  },
  {
    "numero": 23,
    "name": "VALENTINA IZIDORO DOS SANTOS",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 128
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 5,
    "id": 1589
  },
  {
    "numero": 24,
    "name": "VALENTINA MELO TIBURCIO",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 4,
      "texto": 5
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 5,
    "id": 1590
  },
  {
    "numero": 25,
    "name": "ISAQUE RAFAEL CUSTODIO SALVADOR",
    "escola": "Serafim Ferreira",
    "turma": "3º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 23,
      "texto": 46
    },
    "sourceFile": "Fluência Leitora 3º ano/Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO C.pdf",
    "sourcePage": 6,
    "id": 1591
  },
  {
    "numero": 1,
    "name": "ABBEA RODRIGUES MARSON",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 117
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1592
  },
  {
    "numero": 2,
    "name": "ALEXYA EDUARDA OLIVEIRA PORTUGAL",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 37,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1593
  },
  {
    "numero": 3,
    "name": "ANA CLARA MORGADO FRANCO",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 15,
      "texto": 44
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1594
  },
  {
    "numero": 4,
    "name": "ANNA JULIA GONÇALVES FEITOSA",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 5,
      "texto": 7
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1595
  },
  {
    "numero": 5,
    "name": "ARTHUR DOMINGOS DOS SANTOS",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 38,
      "texto": 90
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1596
  },
  {
    "numero": 6,
    "name": "AYLLA RAPHAELLY CARVALHO PICOLLI MENDES",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 20,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1597
  },
  {
    "numero": 7,
    "name": "DEBORA EMANUELLY SALGADO JULIO",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 20,
      "texto": 47
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1598
  },
  {
    "numero": 8,
    "name": "ENZO GABRIEL ALVES DOS SANTOS",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 25,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1599
  },
  {
    "numero": 9,
    "name": "FELIPE GABRIEL SOARES LOPES CORREA",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 40,
      "texto": 75
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1600
  },
  {
    "numero": 10,
    "name": "GABRIELLY HADASSA DE OLIVEIRA VIEIRA",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 40,
      "texto": 94
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1601
  },
  {
    "numero": 11,
    "name": "JOAO PEDRO APOLINARIO PEREIRA LEITE",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 59,
      "pseudopalavras": 40,
      "texto": 115
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1602
  },
  {
    "numero": 12,
    "name": "JOSE PAULO MARTINS DA SILVA",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 4,
      "texto": 2
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1603
  },
  {
    "numero": 13,
    "name": "LIVIA ISABELLE DOS SANTOS XAVIER",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 30,
      "texto": 70
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1604
  },
  {
    "numero": 14,
    "name": "LUIZA RODRIGUES GOMES",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 25,
      "texto": 72
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1605
  },
  {
    "numero": 15,
    "name": "MARIA LUIZA DE JESUS SILVA",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 5,
      "texto": 15
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1606
  },
  {
    "numero": 16,
    "name": "MELLISSA SARAI DE CARVALHO",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 59,
      "pseudopalavras": 36,
      "texto": 120
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 4,
    "id": 1607
  },
  {
    "numero": 17,
    "name": "MILENA YASMIM ANACLETO RODRIGUES",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 9,
      "pseudopalavras": 5,
      "texto": 8
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 1608
  },
  {
    "numero": 19,
    "name": "RICHARD HENRIQUE DE SOUZA CLAUDINO",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 20,
      "texto": 43
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 1609
  },
  {
    "numero": 20,
    "name": "ROGERIO GOMES VIEIRA JUNIOR",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 19,
      "texto": 22
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 1610
  },
  {
    "numero": 21,
    "name": "RYAN ALMEIDA MENIN DE SIQUEIRA",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 30,
      "texto": 78
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 5,
    "id": 1611
  },
  {
    "numero": 22,
    "name": "VITORIA APARECIDA CARNEIRO",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 32,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 1612
  },
  {
    "numero": 24,
    "name": "DAVI LUCCA FELIPE MONTEIRO",
    "escola": "Vito Ardito",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 30,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 6,
    "id": 1613
  },
  {
    "numero": 1,
    "name": "ANA VITORIA SANTOS MORAES SANTANA",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 30,
      "texto": 67
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1614
  },
  {
    "numero": 2,
    "name": "BEATRIZ RODRIGUES DOS SANTOS",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 37,
      "texto": 86
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1615
  },
  {
    "numero": 3,
    "name": "EMANUELLY GABRIELLY DOS SANTOS OLIVEIRA FIRMINO DA SILVA",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 25,
      "texto": 45
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1616
  },
  {
    "numero": 4,
    "name": "ESTHER VITORIA DE OLIVEIRA EUGENIO",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 15,
      "texto": 41
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 1,
    "id": 1617
  },
  {
    "numero": 6,
    "name": "LUCAS EMANUEL RODRIGUES DA ROCHA",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 30,
      "texto": 50
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1618
  },
  {
    "numero": 7,
    "name": "MANUELLA RODRIGUES PERREIRA FERNANDES",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 37,
      "texto": 85
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1619
  },
  {
    "numero": 8,
    "name": "MARIA LAURA VIEIRA DOS SANTOS",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 30,
      "texto": 45
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1620
  },
  {
    "numero": 11,
    "name": "MATHEUS VINICIUS TOLEDO DOS SANTOS",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 30,
      "texto": 80
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1621
  },
  {
    "numero": 12,
    "name": "MELYSSA VITORIA DA SILVA FERREIRA ALVES",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 38,
      "texto": 93
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 2,
    "id": 1622
  },
  {
    "numero": 13,
    "name": "MICAELA APARECIDA DOS SANTOS TEIXEIRA",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 40,
      "texto": 85
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1623
  },
  {
    "numero": 14,
    "name": "NICOLAS PATRICK DE JESUS LEAL",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 40,
      "texto": 84
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1624
  },
  {
    "numero": 15,
    "name": "RAPHAEL BENJAMIN DA SILVA SALES",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 25,
      "texto": 76
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1625
  },
  {
    "numero": 16,
    "name": "SOPHIA ROCHA SANTA ROSA DE ALMEIDA",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 110
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 3,
    "id": 1626
  },
  {
    "numero": 17,
    "name": "VALENTINA VITORIA PEREIRA BRAGA",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 5,
      "texto": 8
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1627
  },
  {
    "numero": 18,
    "name": "WALLACE KAUAN CARVALHO DOS SANTOS",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 38,
      "texto": 95
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1628
  },
  {
    "numero": 19,
    "name": "YORAN MIGUEL CAMILO GONCALVES DA SILVA",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 37,
      "texto": 113
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1629
  },
  {
    "numero": 20,
    "name": "MANUELLA ALEXANDRE CAMARGO",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 30,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 4,
    "id": 1630
  },
  {
    "numero": 23,
    "name": "YURI APARECIDO DIAS BATISTA DE SOUZA",
    "escola": "Vito Ardito",
    "turma": "3º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 30,
      "texto": 60
    },
    "sourceFile": "Fluência Leitora 3º ano/Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO B.pdf",
    "sourcePage": 5,
    "id": 1631
  },
  {
    "numero": 1,
    "name": "ALICE ALVES DOS SANTOS",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 14,
      "texto": 48
    },
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1632
  },
  {
    "numero": 2,
    "name": "ALICIA SILVA MOREIRA",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 18,
      "texto": 53
    },
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1633
  },
  {
    "numero": 3,
    "name": "ALLANA SILVA MARTINS DOS SANTOS",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 5,
      "texto": 36
    },
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1634
  },
  {
    "numero": 4,
    "name": "BENICIO CARDOSO DA SILVA",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 99,
      "texto": 140
    },
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1635
  },
  {
    "numero": 5,
    "name": "BRYAN TIAGO DE PAULA LOURENCO",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 3,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 1,
    "id": 1636
  },
  {
    "numero": 6,
    "name": "EMANUELLE RODRIGUES LOPES",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 36,
      "texto": 85
    },
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1637
  },
  {
    "numero": 9,
    "name": "ISABELLE MARQUES DA SILVA",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 37,
      "texto": 62
    },
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1638
  },
  {
    "numero": 10,
    "name": "LAUANY LARISSA APARECIDA DOS SANTOS",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 3,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1639
  },
  {
    "numero": 11,
    "name": "MARIA VALENTINA DE LIMA SUARES FELIX",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 38,
      "texto": 100
    },
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1640
  },
  {
    "numero": 12,
    "name": "MATTHIAS GABRIEL CELESTRINO PEREIRA",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 13,
      "texto": 36
    },
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1641
  },
  {
    "numero": 13,
    "name": "REBECA RIBEIRO BASTOS",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 40,
      "texto": 68
    },
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1642
  },
  {
    "numero": 14,
    "name": "RUTE ALMEIDA DOS SANTOS",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 37,
      "texto": 119
    },
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 2,
    "id": 1643
  },
  {
    "numero": 16,
    "name": "THEO LUCCA MORAES GONCALVES",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 35,
      "texto": 94
    },
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1644
  },
  {
    "numero": 17,
    "name": "YASMIN VITORIA ROCHA DE SOUZA",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 3,
      "pseudopalavras": 3,
      "texto": 7
    },
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1645
  },
  {
    "numero": 18,
    "name": "KALEB DANIEL DE JESUS OLIVEIRA MATEUS",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 17,
      "texto": 38
    },
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1646
  },
  {
    "numero": 19,
    "name": "RHARUANY VICTORIA NUNES",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 20,
      "texto": 58
    },
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1647
  },
  {
    "numero": 20,
    "name": "EMANUELLY NUNES DE SOUSA",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "3º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 8,
      "pseudopalavras": 4,
      "texto": 6
    },
    "sourceFile": "Fluência Leitora 3º ano/Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 3º ANO A.pdf",
    "sourcePage": 3,
    "id": 1648
  }
];
