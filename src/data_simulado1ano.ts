// Generated from the official 1º ano - 1º Simulado de Fluência Leitora reports.
// Do not edit manually; run scripts/import_first_year_pdfs.py --grade 1.

export interface FirstYearStudent {
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

export const FIRST_YEAR_IMPORT_SUMMARY = {
  "sourcePdfCount": 100,
  "schoolCount": 37,
  "classCount": 100,
  "classesWithResults": 95,
  "classesWithoutResults": 5,
  "studentCount": 1691,
  "evaluatedCount": 1685,
  "notEvaluatedCount": 6,
  "levels": {
    "N1": 203,
    "N2": 201,
    "N3": 408,
    "N4": 109,
    "LI": 718,
    "LF": 46
  },
  "modes": {
    "Não leu": 209,
    "Soletrou": 201,
    "Silabou": 408,
    "Leu": 873
  }
} as const;

export const FIRST_YEAR_CLASSES = [
  {
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 21
  },
  {
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 23
  },
  {
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 22
  },
  {
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 21
  },
  {
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO C",
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 0
  },
  {
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO A",
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 13
  },
  {
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO B",
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 15
  },
  {
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 18
  },
  {
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 20
  },
  {
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 21
  },
  {
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 19
  },
  {
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 18
  },
  {
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO B",
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 8
  },
  {
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 18
  },
  {
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 19
  },
  {
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 19
  },
  {
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "recordCount": 20
  },
  {
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 17
  },
  {
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO B",
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 16
  },
  {
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO C",
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 14
  },
  {
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 18
  },
  {
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO B",
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 0
  },
  {
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 20
  },
  {
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 22
  },
  {
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 20
  },
  {
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 22
  },
  {
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 18
  },
  {
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "recordCount": 18
  },
  {
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO A",
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 13
  },
  {
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 17
  },
  {
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO A",
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 16
  },
  {
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 20
  },
  {
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO C",
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 15
  },
  {
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "recordCount": 17
  },
  {
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "recordCount": 20
  },
  {
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "recordCount": 17
  },
  {
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 24
  },
  {
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 25
  },
  {
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 19
  },
  {
    "escola": "João Cesário",
    "turma": "1º ANO B",
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 16
  },
  {
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 24
  },
  {
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "recordCount": 24
  },
  {
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "recordCount": 19
  },
  {
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 17
  },
  {
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 17
  },
  {
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 18
  },
  {
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "recordCount": 18
  },
  {
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "recordCount": 21
  },
  {
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "recordCount": 20
  },
  {
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 18
  },
  {
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO B",
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 15
  },
  {
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO C",
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 13
  },
  {
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO A",
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 8
  },
  {
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO B",
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 0
  },
  {
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO C",
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 15
  },
  {
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 18
  },
  {
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 20
  },
  {
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 21
  },
  {
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 21
  },
  {
    "escola": "Maria Ap.C.de Souza, Profª",
    "turma": "1º ANO A",
    "sourceFile": "Maria Ap.C.de Souza, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 6
  },
  {
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO A",
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 13
  },
  {
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO B",
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 14
  },
  {
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO C",
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 14
  },
  {
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 19
  },
  {
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 18
  },
  {
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 18
  },
  {
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO A",
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 15
  },
  {
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO B",
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 13
  },
  {
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 18
  },
  {
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 19
  },
  {
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO A",
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 13
  },
  {
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO B",
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 14
  },
  {
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 17
  },
  {
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO A",
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 14
  },
  {
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO B",
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 13
  },
  {
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 20
  },
  {
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 19
  },
  {
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 21
  },
  {
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 18
  },
  {
    "escola": "Padre Zezinho",
    "turma": "1º ANO B",
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 16
  },
  {
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 19
  },
  {
    "escola": "Paulo Freire, Prof.",
    "turma": "1º ANO A",
    "sourceFile": "Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 11
  },
  {
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 20
  },
  {
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 19
  },
  {
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 22
  },
  {
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO A",
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 15
  },
  {
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO B",
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 0
  },
  {
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO C",
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 16
  },
  {
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "recordCount": 18
  },
  {
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 18
  },
  {
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 17
  },
  {
    "escola": "Serafim Ferreira",
    "turma": "1º ANO A",
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 0
  },
  {
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 20
  },
  {
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 25
  },
  {
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 20
  },
  {
    "escola": "Vito Ardito",
    "turma": "1º ANO B",
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 15
  },
  {
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 18
  },
  {
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "recordCount": 24
  },
  {
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "recordCount": 19
  },
  {
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "recordCount": 17
  }
] as const;

export const FIRST_YEAR_STUDENTS: FirstYearStudent[] = [
  {
    "numero": 3,
    "name": "CARLOS DANIEL JERONIMO DA SILVA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 13,
      "texto": 32
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1
  },
  {
    "numero": 4,
    "name": "DAVI GABRIEL AMORIM DA SILVA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 2,
      "texto": 14
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 2
  },
  {
    "numero": 5,
    "name": "ELOAH VASCONCELOS AMADEI",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 3
  },
  {
    "numero": 6,
    "name": "ELOAH VICTORIA LIMA SILVA LOPES",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 30,
      "texto": 90
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 4
  },
  {
    "numero": 9,
    "name": "GAEL GUEDES MARTINS MOREIRA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 5
  },
  {
    "numero": 11,
    "name": "HENRY GUSTAVO DOS SANTOS SAMPAIO",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 6,
      "texto": 16
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 6
  },
  {
    "numero": 12,
    "name": "ICARO BORGES DE SOUZA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 7
  },
  {
    "numero": 13,
    "name": "KAIO MEIRELES DE ANDRADE",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 8,
      "texto": 27
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 8
  },
  {
    "numero": 14,
    "name": "KAIQUE ADRIANO GALVAO LEITE",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 9
  },
  {
    "numero": 15,
    "name": "MANOELA VITORINO CRUZ",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 16,
      "texto": 56
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 10
  },
  {
    "numero": 16,
    "name": "MIGUEL AUGUSTO SANTOS DA MOTA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 6,
      "texto": 62
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 11
  },
  {
    "numero": 18,
    "name": "NICOLE SANTOS DE SOUZA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 2,
      "texto": 28
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 12
  },
  {
    "numero": 20,
    "name": "VINICIOS DA SILVA CARVALHO",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 13
  },
  {
    "numero": 21,
    "name": "YASMIN VITORIA SOUZA DE PAULA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 5,
      "texto": 20
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 14
  },
  {
    "numero": 22,
    "name": "ALICE QUADROS GONÇALVES BARBOSA DE OLIVEIRA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 28,
      "texto": 96
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 15
  },
  {
    "numero": 24,
    "name": "GAEL SILVA DE OLIVEIRA SOARES",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 37,
      "texto": 80
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 16
  },
  {
    "numero": 26,
    "name": "VICTOR LUCAS DA SILVA OLIVEIRA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 21,
      "texto": 64
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 17
  },
  {
    "numero": 28,
    "name": "AGATHA MAYSA PEREIRA DOS SANTOS",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 6,
      "texto": 20
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 18
  },
  {
    "numero": 29,
    "name": "ANDERSON ENZO RODRIGUES DA SILVA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 4,
      "texto": 9
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 19
  },
  {
    "numero": 30,
    "name": "HELOA DAUANY SANTOS MATIAS RODRIGUES",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 12,
      "texto": 22
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 20
  },
  {
    "numero": 31,
    "name": "LUIZA CORREA DE ALMEIDA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 21
  },
  {
    "numero": 1,
    "name": "ALEXIA VITORIA FIGUEIRA MANARA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 3,
      "texto": 0
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 22
  },
  {
    "numero": 2,
    "name": "ARTHUR FREITAS FERREIRA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 8,
      "texto": 20
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 23
  },
  {
    "numero": 3,
    "name": "DAVI LUIZ GERALDO DOS SANTOS",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 2,
      "texto": 4
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 24
  },
  {
    "numero": 4,
    "name": "ENZO MIGUEL GONCALVES MOREIRA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 25
  },
  {
    "numero": 5,
    "name": "GUILHERME CORREA GUIMARAES RODRIGUES",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 5,
      "texto": 8
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 26
  },
  {
    "numero": 7,
    "name": "JOAO MIGUEL CARLOTA BARBOSA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 4,
      "texto": 8
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 27
  },
  {
    "numero": 8,
    "name": "JONAS BARBOSA RAMOS",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 8,
      "texto": 22
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 28
  },
  {
    "numero": 9,
    "name": "JOSE AUGUSTO BORGES RODRIGUES DA SILVA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 29
  },
  {
    "numero": 10,
    "name": "KAUAN BORGES DE SOUZA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 30
  },
  {
    "numero": 11,
    "name": "KYLLYAN LORENZO JOSE PIRES DA SILVA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 5,
      "pseudopalavras": 2,
      "texto": 0
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 31
  },
  {
    "numero": 12,
    "name": "LORENA CYPRIANO DA SILVA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 2,
      "texto": 4
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 32
  },
  {
    "numero": 13,
    "name": "LUAN LORENZO DOS SANTOS LEMOS",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 0,
      "texto": 2
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 33
  },
  {
    "numero": 14,
    "name": "LUARA YOHANNA SIQUEIRA DOMINGUES AMORIM",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 0,
      "texto": 2
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 34
  },
  {
    "numero": 16,
    "name": "MARIA SOFIA OLIMPIO SILVA MELO",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 2,
      "texto": 0
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 35
  },
  {
    "numero": 17,
    "name": "MIRELLA COELHO ROTBAND SILVA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 33,
      "texto": 109
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 36
  },
  {
    "numero": 18,
    "name": "MIRELLA RODRIGUES DOS ANJOS",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 18,
      "texto": 40
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 37
  },
  {
    "numero": 20,
    "name": "SOPHIA EMANUELLY DE MOURA PADUA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 38
  },
  {
    "numero": 21,
    "name": "THIAGO VINICIUS DE OLIVEIRA SALGADO",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 39
  },
  {
    "numero": 22,
    "name": "BRYAN DAVID CASTOR CARDOSO DE LIMA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 40
  },
  {
    "numero": 23,
    "name": "LUIZ GUILHERME MONTEIRO NOGUEIRA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 41
  },
  {
    "numero": 24,
    "name": "BRYAN LUCCA RIBEIRO SOARES DA SILVA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 42
  },
  {
    "numero": 25,
    "name": "RAFAEL HENRIQUE DE ASSIS",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 16,
      "pseudopalavras": 3,
      "texto": 4
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 5,
    "id": 43
  },
  {
    "numero": 26,
    "name": "HELOISA DE SOUZA MAYDANA",
    "escola": "Abdias Júnior Santiago e Silva",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 2,
      "texto": 4
    },
    "sourceFile": "Abdias Júnior Santiago e Silva EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 5,
    "id": 44
  },
  {
    "numero": 1,
    "name": "AGATHA MILENA MOREIRA MONTEIRO",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 1,
      "texto": 4
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 45
  },
  {
    "numero": 2,
    "name": "BRYAN COSTA DA SILVA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 46
  },
  {
    "numero": 3,
    "name": "DAVI FELIPE BONIFACIO DE ALMEIDA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 5,
      "texto": 23
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 47
  },
  {
    "numero": 4,
    "name": "DAVI MAYK MOREIRA BELTRAMIN",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 19,
      "texto": 44
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 48
  },
  {
    "numero": 5,
    "name": "DAVI TEODORO MEIRA SILVA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 11,
      "texto": 11
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 49
  },
  {
    "numero": 6,
    "name": "GABRIEL HENRIQUE MELO MARIA DE PAULA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 3,
      "texto": 4
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 50
  },
  {
    "numero": 7,
    "name": "GUILHERME RENAN DA SILVA BATISTA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 18,
      "texto": 44
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 51
  },
  {
    "numero": 10,
    "name": "LARISSA REGIS MARTINS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 109
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 52
  },
  {
    "numero": 11,
    "name": "LORENZO FRANCO LEAL",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 9,
      "texto": 8
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 53
  },
  {
    "numero": 12,
    "name": "LUCAS FERNANDO CORREA FERREIRA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 54
  },
  {
    "numero": 13,
    "name": "LUIZA DOS SANTOS BELTRAMIN",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 6,
      "texto": 35
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 55
  },
  {
    "numero": 14,
    "name": "MALKA AIDE RAMOS DA SILVA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 56
  },
  {
    "numero": 15,
    "name": "MARIA ALICE BENVINDO DE ALMEIDA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 57
  },
  {
    "numero": 16,
    "name": "MATEUS OLIVEIRA TRAVASSOS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 7,
      "texto": 10
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 58
  },
  {
    "numero": 17,
    "name": "MILENA PROCOPIO FERREIRA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 109
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 59
  },
  {
    "numero": 18,
    "name": "PEDRO HENRIQUE DOS SANTOS OLIVEIRA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 31,
      "texto": 65
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 60
  },
  {
    "numero": 19,
    "name": "PEROLA MARIA NUNES DE JESUS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 61
  },
  {
    "numero": 20,
    "name": "STÉFANNY LOHANNY SANTOS LIMA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 62
  },
  {
    "numero": 21,
    "name": "VALENTIM FRANCO LEAL",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 4,
      "texto": 8
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 63
  },
  {
    "numero": 22,
    "name": "MIGUEL FERNANDES SILVA LEITE",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 64
  },
  {
    "numero": 23,
    "name": "EMANUELLY LEONEL DE ALMEIDA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 4,
      "texto": 14
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 65
  },
  {
    "numero": 24,
    "name": "SOPHIA BATISTA DE JESUS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 11,
      "texto": 16
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 66
  },
  {
    "numero": 1,
    "name": "ADRIEL WILLIAM DA SILVA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 3,
      "texto": 9
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 67
  },
  {
    "numero": 2,
    "name": "ANA LUIZA MOREIRA ALVES",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 24,
      "pseudopalavras": 11,
      "texto": 23
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 68
  },
  {
    "numero": 3,
    "name": "ANALICE RIBEIRO DE TOLEDO MOURA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 15,
      "texto": 27
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 69
  },
  {
    "numero": 4,
    "name": "ARTHUR LUCAS RODRIGUES DE SOUZA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 9,
      "texto": 27
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 70
  },
  {
    "numero": 5,
    "name": "DAVI DA SILVA SOUZA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 21,
      "pseudopalavras": 10,
      "texto": 10
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 71
  },
  {
    "numero": 6,
    "name": "ELIAS HENRIQUE DOS SANTOS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 1,
      "texto": 1
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 72
  },
  {
    "numero": 7,
    "name": "ENZO GABRIEL FERNANDES FIALHO",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 73
  },
  {
    "numero": 9,
    "name": "ITALO RODRIGUES RIBEIRO DE PAULA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 2,
      "texto": 10
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 74
  },
  {
    "numero": 10,
    "name": "JOAO GABRIEL RIBEIRO PIRES FERNANDES",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 75
  },
  {
    "numero": 11,
    "name": "JOAO LUCAS DA SILVA FELIX",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 76
  },
  {
    "numero": 12,
    "name": "JOAO PEDRO EMBOAVA VIEIRA SALGADO ROSA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 2,
      "texto": 3
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 77
  },
  {
    "numero": 13,
    "name": "JOSE VICENTE NUNES DE FARIA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 25,
      "texto": 47
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 78
  },
  {
    "numero": 15,
    "name": "KEMILLY VITORIA DOS SANTOS ROSA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 1,
      "texto": 6
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 79
  },
  {
    "numero": 16,
    "name": "KEVEN GEOVANNI CELESTINO",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 80
  },
  {
    "numero": 17,
    "name": "LAURA VICTORIA DE FREITAS MESSIAS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 6,
      "texto": 12
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 81
  },
  {
    "numero": 18,
    "name": "LIVIA PATRYCIA DA SILVA SANTOS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 1,
      "texto": 6
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 82
  },
  {
    "numero": 19,
    "name": "MYLENE EMANUELE DOMINGOS DA SILVA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 83
  },
  {
    "numero": 21,
    "name": "PYETRA MANUELLA DA SILVA OLIVEIRA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 84
  },
  {
    "numero": 22,
    "name": "ALICE MANOELLA OLIVEIRA DOS SANTOS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 10,
      "texto": 23
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 85
  },
  {
    "numero": 24,
    "name": "ABNER MIGUEL PEIXOTO ALVES DA SILVA",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 86
  },
  {
    "numero": 26,
    "name": "SOPHIA MOREIRA DE JESUS",
    "escola": "Alexandre Machado Salgado, Prof.",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Alexandre Machado Salgado, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 87
  },
  {
    "numero": 1,
    "name": "AURORA SOUZA FARRAPO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 1,
      "texto": 11
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 88
  },
  {
    "numero": 2,
    "name": "CLOE GABRIELLA GODOI MOREIRA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 0,
      "texto": 17
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 89
  },
  {
    "numero": 3,
    "name": "DANIEL REIS DE JESUS",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 90
  },
  {
    "numero": 4,
    "name": "DIEGO LEME GALHARDO DE GOES",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 0,
      "texto": 98
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 91
  },
  {
    "numero": 5,
    "name": "GABRIELE REIS MARCONDES",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 1,
      "texto": 7
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 92
  },
  {
    "numero": 8,
    "name": "LUCAS TEBERGA SIFOLELI",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 16,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 93
  },
  {
    "numero": 9,
    "name": "MANUELLA REIS CARVALHO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 2,
      "texto": 63
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 94
  },
  {
    "numero": 10,
    "name": "MARIA ANTONIA DE SOUZA PIRES",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 1,
      "texto": 4
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 95
  },
  {
    "numero": 11,
    "name": "MELISSA VITORIA DE CAMARGO CASTRO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 14,
      "pseudopalavras": 1,
      "texto": 10
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 96
  },
  {
    "numero": 12,
    "name": "MICAELLA OHANA FERREIRA SANTOS",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 1,
      "texto": 1
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 97
  },
  {
    "numero": 14,
    "name": "THEO FRANCA MARTINS",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 19,
      "pseudopalavras": 1,
      "texto": 13
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 98
  },
  {
    "numero": 16,
    "name": "MARCOS VINICIUS SILVA ROSA RUBIO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 99
  },
  {
    "numero": 18,
    "name": "LAIS MENEZES FROTA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 3,
      "texto": 28
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 100
  },
  {
    "numero": 1,
    "name": "ANTONY WALIFER CLIVE RODOLFO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 40,
      "texto": 63
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 101
  },
  {
    "numero": 2,
    "name": "BARBARA MAMEDE GUIMARAES",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 10,
      "texto": 37
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 102
  },
  {
    "numero": 4,
    "name": "EDUARDO YAGO CABRAL RAMOS",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 18,
      "pseudopalavras": 7,
      "texto": 13
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 103
  },
  {
    "numero": 5,
    "name": "GABRIEL NUNES BREHM",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 1,
      "texto": 11
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 104
  },
  {
    "numero": 6,
    "name": "HEITOR RAFAEL VARELLA CAMARGO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 17,
      "texto": 61
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 105
  },
  {
    "numero": 7,
    "name": "HELENA COSTA DO NASCIMENTO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 21,
      "texto": 44
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 106
  },
  {
    "numero": 8,
    "name": "JOAO ARTHUR MUNIZ ALVES PEREIRA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 10,
      "texto": 34
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 107
  },
  {
    "numero": 10,
    "name": "LEVI BRITO SANTOS",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 6,
      "texto": 12
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 108
  },
  {
    "numero": 11,
    "name": "LORENA FRANCO DE OLIVEIRA ALMEIDA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 22,
      "texto": 56
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 109
  },
  {
    "numero": 12,
    "name": "LORRANY MARIA OLIVEIRA GONÇALVES",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 11,
      "pseudopalavras": 4,
      "texto": 10
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 110
  },
  {
    "numero": 13,
    "name": "PENELOPE BUENO BALBINO DE SOUZA TEIXEIRA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 10,
      "texto": 28
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 111
  },
  {
    "numero": 14,
    "name": "VINICIUS DOS SANTOS HERMENEGILDO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 9,
      "texto": 23
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 112
  },
  {
    "numero": 15,
    "name": "VITORIA ROCHA FIRMINO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 6,
      "texto": 28
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 113
  },
  {
    "numero": 16,
    "name": "FELIPE MAIA DE ANDRADE",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 11,
      "texto": 23
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 114
  },
  {
    "numero": 17,
    "name": "MILA LOUISE DE ANDRADE SOUTO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 28,
      "texto": 88
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 115
  },
  {
    "numero": 1,
    "name": "ARTHUR RIBEIRO MEDEIROS DE CAMPOS",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 116
  },
  {
    "numero": 2,
    "name": "CAIO MATIAS SOUZA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 7,
      "texto": 11
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 117
  },
  {
    "numero": 3,
    "name": "CALEL ROCHA DO NASCIMENTO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 118
  },
  {
    "numero": 4,
    "name": "CHRISTOPHER WILLIAM DE MATOS BUENO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 13,
      "pseudopalavras": 5,
      "texto": 10
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 119
  },
  {
    "numero": 5,
    "name": "DAVI DE MATOS RAMOS",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 13,
      "texto": 34
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 120
  },
  {
    "numero": 6,
    "name": "DOUGLAS FABIANO DE OLIVEIRA MANCKEL JUNIOR",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 9,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 121
  },
  {
    "numero": 9,
    "name": "KALLEB EMANUEL SILVA DE OLIVEIRA MARCHINI",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 2,
      "texto": 4
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 122
  },
  {
    "numero": 10,
    "name": "LARISSA MANOELA FERREIRA DA MOTA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 5,
      "texto": 12
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 123
  },
  {
    "numero": 11,
    "name": "LUNA EMANUELLE DOS SANTOS",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 15,
      "texto": 29
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 124
  },
  {
    "numero": 12,
    "name": "MARIA VITORIA TOMAZ DE OLIVEIRA SILVA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 10,
      "texto": 23
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 125
  },
  {
    "numero": 13,
    "name": "MIGUEL AUGUSTO DE SOUZA PINHEIRO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 8,
      "texto": 20
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 126
  },
  {
    "numero": 15,
    "name": "PEDRO HENRIQUE RIBEIRO RODRIGUES",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 17,
      "texto": 31
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 127
  },
  {
    "numero": 16,
    "name": "RAFAEL JAIRO BRAGA VENANCIO DA SILVA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 11,
      "texto": 25
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 128
  },
  {
    "numero": 17,
    "name": "RAVI LUCCA COSTA SOARES",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 13,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 129
  },
  {
    "numero": 18,
    "name": "SAORI NUNES MARCAL COUTINHO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 5,
      "texto": 10
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 130
  },
  {
    "numero": 19,
    "name": "SOFIA BONIFACIO VER VALEN CRUZ",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 131
  },
  {
    "numero": 20,
    "name": "SOPHIA BUENO DE SOUZA",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 9,
      "texto": 18
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 132
  },
  {
    "numero": 21,
    "name": "TALLES GOMES PENINA DE PAULO",
    "escola": "André Franco Montoro, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 5,
      "texto": 14
    },
    "sourceFile": "André Franco Montoro, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 133
  },
  {
    "numero": 1,
    "name": "ALICE ALVES LEMOS MOTA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 39,
      "texto": 104
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 134
  },
  {
    "numero": 2,
    "name": "ANA CLARA RODRIGUES LEAL",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 135
  },
  {
    "numero": 3,
    "name": "ARTHUR COUTINHO VALERIO",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 4,
      "texto": 16
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 136
  },
  {
    "numero": 4,
    "name": "ARTHUR DE OLIVEIRA COSTA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 6,
      "texto": 19
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 137
  },
  {
    "numero": 5,
    "name": "AYUMI KAWATA SANTOS MOREIRA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 138
  },
  {
    "numero": 6,
    "name": "CLARA LEAL SOUZA CLARO DA SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 11,
      "texto": 23
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 139
  },
  {
    "numero": 7,
    "name": "ENZO GABRIEL RIBEIRO DE FARIA MOREIRA COSTA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "NÃO AVALIADO",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 140
  },
  {
    "numero": 8,
    "name": "ERICK GONCALVES NEVES",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 13,
      "pseudopalavras": 4,
      "texto": 9
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 141
  },
  {
    "numero": 9,
    "name": "HEITOR CARVALHO LEONCIO DOS SANTOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 7,
      "texto": 12
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 142
  },
  {
    "numero": 10,
    "name": "HENRIQUE MOURA DE FREITAS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 25,
      "texto": 109
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 143
  },
  {
    "numero": 11,
    "name": "HEYTOR OLIVEIRA FEITOSA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 144
  },
  {
    "numero": 12,
    "name": "ISAAC GUARINO CESAR CASTILHO MARNE",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 27,
      "texto": 78
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 145
  },
  {
    "numero": 13,
    "name": "JOAO LUCAS DE CASTRO SANTOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 4,
      "texto": 9
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 146
  },
  {
    "numero": 14,
    "name": "JULIA VITORIA DA CRUZ RAMOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 1,
      "texto": 5
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 147
  },
  {
    "numero": 15,
    "name": "JULIO CESAR DOS SANTOS LIMA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 24,
      "texto": 45
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 148
  },
  {
    "numero": 16,
    "name": "LAURA AUGUSTO RODRIGUES LEAL",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 20,
      "texto": 44
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 149
  },
  {
    "numero": 17,
    "name": "LIZ NUNES DA COSTA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 24,
      "texto": 53
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 150
  },
  {
    "numero": 18,
    "name": "LORENZO DE AZEVEDO SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 12,
      "texto": 31
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 151
  },
  {
    "numero": 19,
    "name": "MARINA DE OLIVEIRA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 1,
      "texto": 5
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 6,
    "id": 152
  },
  {
    "numero": 20,
    "name": "MELISSA DE FREITAS BENTO",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 5,
      "texto": 21
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 6,
    "id": 153
  },
  {
    "numero": 21,
    "name": "MELISSA SAMPAIO SILVA GALVÃO HATAKEYAMA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 13,
      "texto": 22
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 6,
    "id": 154
  },
  {
    "numero": 22,
    "name": "PEDRO HENRIQUE CARIEL DOS SANTOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 59,
      "pseudopalavras": 18,
      "texto": 74
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 6,
    "id": 155
  },
  {
    "numero": 23,
    "name": "VICTOR DOS SANTOS SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 11,
      "texto": 34
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 6,
    "id": 156
  },
  {
    "numero": 24,
    "name": "VITOR FARIAS DA SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 7,
      "texto": 16
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 6,
    "id": 157
  },
  {
    "numero": 1,
    "name": "AGNES MONTEIRO VALLADAO PIRES",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 3,
      "pseudopalavras": 4,
      "texto": 11
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 158
  },
  {
    "numero": 2,
    "name": "ALICE SANTOS TEODORO",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 5,
      "texto": 19
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 159
  },
  {
    "numero": 5,
    "name": "DAVI SOARES SOUSA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 5,
      "texto": 18
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 160
  },
  {
    "numero": 8,
    "name": "HELENA LAIS MONTEIRO VIEIRA PINTO",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 161
  },
  {
    "numero": 9,
    "name": "HELENA VITORIA DE SOUZA MACEDO",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 8,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 162
  },
  {
    "numero": 10,
    "name": "HELOISA LOPES DE OLIVEIRA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 17,
      "texto": 47
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 163
  },
  {
    "numero": 11,
    "name": "ISABELLA KAWENNE RIBEIRO CARVALHO",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 5,
      "texto": 13
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 164
  },
  {
    "numero": 13,
    "name": "JOAO MIGUEL FERRAZ APOLINARIO",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 18,
      "texto": 37
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 165
  },
  {
    "numero": 14,
    "name": "KENNEDY BRYAN LOPES DOS SANTOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 7,
      "texto": 10
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 166
  },
  {
    "numero": 15,
    "name": "LUCAS DE CARVALHO TEIXEIRA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 167
  },
  {
    "numero": 16,
    "name": "LUIZA ANTUNES FERREIRA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 9,
      "texto": 24
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 168
  },
  {
    "numero": 17,
    "name": "MAISA FREITAS DO NASCIMENTO FONSECA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 32,
      "texto": 109
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 169
  },
  {
    "numero": 18,
    "name": "NICOLAS MIGUEL LINO PASSOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 8,
      "texto": 22
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 170
  },
  {
    "numero": 19,
    "name": "SARAH AMARAL CHINAQUI",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 7,
      "texto": 28
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 171
  },
  {
    "numero": 20,
    "name": "GAEL LUCCA PEREIRA DE RESENDE",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 16,
      "texto": 28
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 172
  },
  {
    "numero": 21,
    "name": "LAURA ISABELLE YNOUE",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 1,
      "texto": 3
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 173
  },
  {
    "numero": 22,
    "name": "ESTHER MARIA CRISTALDO CYPRIANO SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 1,
      "pseudopalavras": 3,
      "texto": 3
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 174
  },
  {
    "numero": 23,
    "name": "LORENZO SENAS MOREIRA FELIX",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 2,
      "texto": 8
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 175
  },
  {
    "numero": 24,
    "name": "YANN RODRIGUES SILVA LOURENCO MACHADO",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 3,
      "pseudopalavras": 2,
      "texto": 8
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 176
  },
  {
    "numero": 1,
    "name": "ANA LUIZA MARQUES DA SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 12,
      "texto": 28
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 177
  },
  {
    "numero": 2,
    "name": "ANGELO ALVES DE MOURA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 60,
      "texto": 102
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 178
  },
  {
    "numero": 3,
    "name": "ARTHUR JEREMIAS LIMA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 0,
      "texto": 5
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 179
  },
  {
    "numero": 4,
    "name": "CAIO AUGUSTO ARAUJO DA SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 180
  },
  {
    "numero": 6,
    "name": "ERICK MURILLO DOS SANTOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 2,
      "texto": 8
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 181
  },
  {
    "numero": 8,
    "name": "ISAAC LEVY FERREIRA DE OLIVEIRA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 14,
      "pseudopalavras": 2,
      "texto": 6
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 182
  },
  {
    "numero": 9,
    "name": "JOAO GUILHERME DE ALVARENGA LOPES",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 7,
      "pseudopalavras": 2,
      "texto": 4
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 5,
    "id": 183
  },
  {
    "numero": 10,
    "name": "KAIO MORGADO SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 12,
      "texto": 34
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 6,
    "id": 184
  },
  {
    "numero": 11,
    "name": "LIZ CAMPELO DA SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 7,
      "pseudopalavras": 0,
      "texto": 4
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 6,
    "id": 185
  },
  {
    "numero": 12,
    "name": "LUNNA DE OLIVEIRA CASTILHO",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 3,
      "texto": 9
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 7,
    "id": 186
  },
  {
    "numero": 13,
    "name": "MANUELA EVANGELISTA DA SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 15,
      "texto": 25
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 7,
    "id": 187
  },
  {
    "numero": 14,
    "name": "MARIA ANTONELLA PEREIRA ALVES",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 5,
      "texto": 12
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 8,
    "id": 188
  },
  {
    "numero": 15,
    "name": "MARIA CECILIA TEIXEIRA GUIMARAES",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 15,
      "texto": 30
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 8,
    "id": 189
  },
  {
    "numero": 16,
    "name": "MIRELLA CORREA AGOSTINE",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 15,
      "texto": 30
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 9,
    "id": 190
  },
  {
    "numero": 18,
    "name": "THEODORO LELIS LOPES",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 11,
      "pseudopalavras": 5,
      "texto": 17
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 9,
    "id": 191
  },
  {
    "numero": 22,
    "name": "SAFIRA VITORIA DE SOUSA SANTOS",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 23,
      "texto": 54
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 10,
    "id": 192
  },
  {
    "numero": 23,
    "name": "GAEL GONÇALVES DA SILVA",
    "escola": "Ângelo Paz da Silva, Dr.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 11,
      "pseudopalavras": 6,
      "texto": 6
    },
    "sourceFile": "Ângelo Paz da Silva, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 10,
    "id": 193
  },
  {
    "numero": 1,
    "name": "ANA BEATRIZ MOREIRA DE CARVALHO",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 1,
      "texto": 0
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 194
  },
  {
    "numero": 2,
    "name": "AYLA CAROLINE DA SILVA FERREIRA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 195
  },
  {
    "numero": 3,
    "name": "BRYAN HENRIQUE NAGAHASHI",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 196
  },
  {
    "numero": 4,
    "name": "CHARLES DOS SANTOS",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 10,
      "texto": 4
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 197
  },
  {
    "numero": 5,
    "name": "DAVI BILORA DE ARRUDA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 198
  },
  {
    "numero": 6,
    "name": "ELOA DANTAS DOS REIS",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 18,
      "pseudopalavras": 5,
      "texto": 2
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 199
  },
  {
    "numero": 7,
    "name": "FLAVIA TAIS OCIREU DE SOUZA RIBEIRO",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 2,
      "texto": 0
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 200
  },
  {
    "numero": 8,
    "name": "GABRIEL ANJO RIBEIRO CRUZ",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 201
  },
  {
    "numero": 9,
    "name": "HEITOR VALENTE DOS SANTOS RIBEIRO",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 2,
      "texto": 1
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 202
  },
  {
    "numero": 10,
    "name": "ISABELLY VITORIA ARAUJO DOS SANTOS",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 203
  },
  {
    "numero": 11,
    "name": "JOAO DAVI DOS SANTOS MOREIRA GETULIO",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 5,
      "texto": 0
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 204
  },
  {
    "numero": 12,
    "name": "JULIANA VITORIA OLIVEIRA PARENTE",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 205
  },
  {
    "numero": 14,
    "name": "MATEUS DOS SANTOS TOLEDO",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 206
  },
  {
    "numero": 16,
    "name": "NICOLE CLARO DE MELO",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 207
  },
  {
    "numero": 17,
    "name": "PEDRO HENRIQUE RODRIGUES DE OLIVEIRA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 5,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 208
  },
  {
    "numero": 18,
    "name": "PEDRO NATHAN DA SILVA LEMOS",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 209
  },
  {
    "numero": 19,
    "name": "PIERRE NICOLAS QUEIROZ GUIMARAES",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 3,
      "texto": 0
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 210
  },
  {
    "numero": 20,
    "name": "YRIS ISABELLE MIRANDA DA SILVA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 2,
      "texto": 3
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 211
  },
  {
    "numero": 21,
    "name": "KAROLAYNE VICTORIA CUBA DA SILVA RAMOS VIEIRA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 212
  },
  {
    "numero": 23,
    "name": "ISADORA RONCOLATO PACIFICO",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 10
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 213
  },
  {
    "numero": 2,
    "name": "ALICE ROSA SANTIAGO DE JESUS",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 2,
      "texto": 11
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 214
  },
  {
    "numero": 3,
    "name": "ALLANA VALENTYNA GONÇALVES SILVA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 1,
      "texto": 9
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 215
  },
  {
    "numero": 5,
    "name": "ESTER DE LUCENA CUNHA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 1,
      "texto": 9
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 216
  },
  {
    "numero": 6,
    "name": "GAHEL RODRIGUES RIBEIRO",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 27,
      "pseudopalavras": 3,
      "texto": 35
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 217
  },
  {
    "numero": 7,
    "name": "GUILHERME HENRIQUE CANDIDO ANDRADE XAVIER",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 218
  },
  {
    "numero": 8,
    "name": "JOAO MIGUEL ROLIM BARBOSA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 2,
      "texto": 19
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 219
  },
  {
    "numero": 9,
    "name": "JULIA FERNANDA DE CARVALHO SANTANA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 23,
      "pseudopalavras": 1,
      "texto": 25
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 220
  },
  {
    "numero": 10,
    "name": "LARA HELENA MARCONDES SILVA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 1,
      "texto": 7
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 221
  },
  {
    "numero": 11,
    "name": "LAURA IZIDORO FELIX",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 2,
      "texto": 19
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 222
  },
  {
    "numero": 12,
    "name": "LUIZ FERNANDO MOURAO DOS SANTOS",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 1,
      "texto": 4
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 223
  },
  {
    "numero": 13,
    "name": "MARCOS LUIS DOS SANTOS MAGALHAES",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 4,
      "texto": 28
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 224
  },
  {
    "numero": 14,
    "name": "MARIA FERNANDA FERREIRA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 1,
      "texto": 20
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 225
  },
  {
    "numero": 15,
    "name": "MILENA NUNES DA CRUZ",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 13,
      "pseudopalavras": 2,
      "texto": 14
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 226
  },
  {
    "numero": 16,
    "name": "NATHAN AMORIM DE PAULA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 1,
      "texto": 7
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 227
  },
  {
    "numero": 17,
    "name": "NICHOLAS MIRANDA DE GODOY",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 11,
      "pseudopalavras": 1,
      "texto": 7
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 228
  },
  {
    "numero": 18,
    "name": "SILLAS EMANUEL BUENO",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 1,
      "texto": 9
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 229
  },
  {
    "numero": 19,
    "name": "THAYLLA AYALA DA SILVA ROSARIO",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 230
  },
  {
    "numero": 20,
    "name": "THIAGO DE ANDRADE ARAUJO",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 1,
      "texto": 17
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 231
  },
  {
    "numero": 21,
    "name": "KEROLLYN VICTORIA SILVA DE ALMEIDA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 2,
      "texto": 15
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 232
  },
  {
    "numero": 22,
    "name": "NATASHA GABRIELLY VICENTINI LEITE",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 233
  },
  {
    "numero": 23,
    "name": "ANTONELLA BEATRICE SIQUEIRA GUIMARAES MARCONDES",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 22,
      "pseudopalavras": 1,
      "texto": 19
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 234
  },
  {
    "numero": 2,
    "name": "ANNA LUIZA DA SILVA ERNEGA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 1,
      "texto": 4
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 235
  },
  {
    "numero": 3,
    "name": "BERNARDO AUGUSTO DOS SANTOS",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 22,
      "texto": 67
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 236
  },
  {
    "numero": 4,
    "name": "ELOA GABRIELLY RAMOS DE OLIVEIRA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 21,
      "texto": 47
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 237
  },
  {
    "numero": 5,
    "name": "EMILLY COSTA DE SOUZA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 238
  },
  {
    "numero": 6,
    "name": "ENZO EMANUEL LEAL SILVA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 9,
      "texto": 11
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 239
  },
  {
    "numero": 7,
    "name": "GIOVANNA MENDES DA SILVA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 15,
      "texto": 23
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 240
  },
  {
    "numero": 8,
    "name": "HEITOR SALDANHA GOMES",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 23,
      "texto": 40
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 241
  },
  {
    "numero": 9,
    "name": "HENRIQUE FRANCA OLIVEIRA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 242
  },
  {
    "numero": 10,
    "name": "JOAO PEDRO PEREIRA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 25,
      "texto": 53
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 243
  },
  {
    "numero": 12,
    "name": "LUISA BARBOSA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 17,
      "texto": 32
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 244
  },
  {
    "numero": 15,
    "name": "MAURICIO MIGUEL DE PAULA SOUZA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 9,
      "texto": 22
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 245
  },
  {
    "numero": 16,
    "name": "MIGUEL MONTE SANTO VITORINO",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 17,
      "texto": 38
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 246
  },
  {
    "numero": 17,
    "name": "MIKAELLY EDUARDA DE MORAES CABRAL",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 247
  },
  {
    "numero": 18,
    "name": "MIRELLA FERREIRA DE JESUS",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 12,
      "texto": 24
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 248
  },
  {
    "numero": 19,
    "name": "RHAVI GAEL OLIVEIRA DUQUE",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 12,
      "texto": 26
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 249
  },
  {
    "numero": 20,
    "name": "SAMUEL HENRIQUE MARAN RAMIRO",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 17,
      "texto": 34
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 250
  },
  {
    "numero": 21,
    "name": "THIAGO MOREIRA PEREIRA DOS SANTOS",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 22,
      "texto": 52
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 251
  },
  {
    "numero": 22,
    "name": "YASMIN SOUZA DA COSTA",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 19,
      "texto": 57
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 252
  },
  {
    "numero": 24,
    "name": "VALENTINA OLIVEIRA CESARINO",
    "escola": "Arthur de Andrade",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 17,
      "texto": 47
    },
    "sourceFile": "Arthur de Andrade EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 5,
    "id": 253
  },
  {
    "numero": 1,
    "name": "ANA BEATRIZ DE OLIVEIRA RODRIGUES",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 3,
      "pseudopalavras": 3,
      "texto": 6
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 254
  },
  {
    "numero": 2,
    "name": "ANA VITÓRIA LEMES SILVA",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 8,
      "pseudopalavras": 3,
      "texto": 9
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 255
  },
  {
    "numero": 3,
    "name": "ANNA JULIA TEODORO DOS SANTOS",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 256
  },
  {
    "numero": 4,
    "name": "AYLA MATOS VITTORAZO",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 4,
      "texto": 10
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 257
  },
  {
    "numero": 5,
    "name": "ENZO EMANUEL ALVES SOUSA",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 7,
      "pseudopalavras": 6,
      "texto": 10
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 258
  },
  {
    "numero": 6,
    "name": "GABRIELLE DA SILVA OLIVEIRA DIAS",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 259
  },
  {
    "numero": 7,
    "name": "HEITOR GOMES DA SILVA",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 7,
      "texto": 9
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 260
  },
  {
    "numero": 8,
    "name": "HELOISA CAVALCANTE MEDEIROS",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 6,
      "pseudopalavras": 5,
      "texto": 8
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 261
  },
  {
    "numero": 9,
    "name": "ISAAC FÉLIX SALES",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 7,
      "pseudopalavras": 8,
      "texto": 19
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 262
  },
  {
    "numero": 10,
    "name": "ISAQUE BARTELEGA MOREIRA",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 7,
      "pseudopalavras": 8,
      "texto": 10
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 263
  },
  {
    "numero": 11,
    "name": "LEVI SILVERIO CARVALHO",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 6,
      "pseudopalavras": 7,
      "texto": 7
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 264
  },
  {
    "numero": 12,
    "name": "MANUELLA DE BRITO FRANCISCO",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 8,
      "pseudopalavras": 9,
      "texto": 11
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 265
  },
  {
    "numero": 13,
    "name": "MARIA EDUARDA CARVALHO SILVA",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 6,
      "pseudopalavras": 6,
      "texto": 6
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 266
  },
  {
    "numero": 14,
    "name": "NICOLAS AZEVEDO DE SOUZA",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 4,
      "texto": 6
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 267
  },
  {
    "numero": 15,
    "name": "SAMARA CLOE FARIA DE SOUZA RODRIGUES",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 99,
      "texto": 98
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 268
  },
  {
    "numero": 17,
    "name": "VALENTINA PIOVANI PISTON",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 9,
      "pseudopalavras": 9,
      "texto": 12
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 269
  },
  {
    "numero": 18,
    "name": "YTALO ALVES MACEDO",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 8,
      "pseudopalavras": 9,
      "texto": 12
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 270
  },
  {
    "numero": 19,
    "name": "MANUELLA LEMES RIBEIRO",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 9,
      "pseudopalavras": 9,
      "texto": 11
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 271
  },
  {
    "numero": 1,
    "name": "ANA LIVIA VIAN DA SILVA",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 6,
      "texto": 19
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 272
  },
  {
    "numero": 2,
    "name": "ANTONELLA DA CRUZ MONTEIRO",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 5,
      "texto": 6
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 273
  },
  {
    "numero": 4,
    "name": "ENZO YAN WU",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 28,
      "texto": 57
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 274
  },
  {
    "numero": 5,
    "name": "GEOVANNI DE SOUZA PELEGRINO",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 275
  },
  {
    "numero": 6,
    "name": "HENRIQUE KAZUO MORISHITA DE TOLEDO",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 2,
      "texto": 7
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 276
  },
  {
    "numero": 7,
    "name": "ISABELLA DA CRUZ MONTEIRO",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 2,
      "texto": 7
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 277
  },
  {
    "numero": 9,
    "name": "MIGUEL PEREIRA VIEIRA",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 12,
      "texto": 24
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 278
  },
  {
    "numero": 10,
    "name": "ELOAH BATISTA MELO",
    "escola": "Dulce Pedrosa Romeiro Guimarães",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 4,
      "texto": 12
    },
    "sourceFile": "Dulce Pedrosa Romeiro Guimarães EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 279
  },
  {
    "numero": 1,
    "name": "ALICE MANUELA PEREIRA DE JESUS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 9
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 280
  },
  {
    "numero": 2,
    "name": "ANA LIVIA DOS SANTOS CRISTINO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 5
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 281
  },
  {
    "numero": 4,
    "name": "ANNA LIVIA RAMOS FERREIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 9,
      "texto": 24
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 282
  },
  {
    "numero": 5,
    "name": "ANTONELLA MIKAELLY MOREIRA DE OLIVEIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 283
  },
  {
    "numero": 6,
    "name": "BEATRIZ PAULA MACIEL PEREIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 4,
      "texto": 16
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 284
  },
  {
    "numero": 8,
    "name": "DAVI LUIZ LEONCIO DA SILVA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 9
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 285
  },
  {
    "numero": 10,
    "name": "HEITOR ESTEVAO ROQUE DA SILVA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 286
  },
  {
    "numero": 12,
    "name": "HELLOA VITORIA DOS SANTOS PEREIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 287
  },
  {
    "numero": 13,
    "name": "ISAAC DE PAULA CUSTODIO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 9,
      "pseudopalavras": 0,
      "texto": 8
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 288
  },
  {
    "numero": 17,
    "name": "MELISSA SALES DE SOUZA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 289
  },
  {
    "numero": 18,
    "name": "PEROLA NALLU LIMA EPIFANIO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 290
  },
  {
    "numero": 19,
    "name": "VALENTINA STEPHANIE DOS SANTOS HERMENEGILDO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 291
  },
  {
    "numero": 21,
    "name": "YURI HENRIQUE MATTOSO MIRANDA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 292
  },
  {
    "numero": 23,
    "name": "MICAELLY REBECA SILVA DOS SANTOS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 293
  },
  {
    "numero": 25,
    "name": "LAVINIA DE JESUS SEGUNDO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 294
  },
  {
    "numero": 26,
    "name": "HELOISA DE OLIVEIRA DA SILVA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 295
  },
  {
    "numero": 27,
    "name": "ARTHUR REZENDE SILVA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 296
  },
  {
    "numero": 28,
    "name": "KALEB HENRIQUE COSTA LEITE",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 17,
      "texto": 44
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 297
  },
  {
    "numero": 2,
    "name": "ALICE VITORIA SANCHES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 11,
      "pseudopalavras": 6,
      "texto": 11
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 298
  },
  {
    "numero": 3,
    "name": "ANA ELOYZE DE OLIVEIRA PEREIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 299
  },
  {
    "numero": 4,
    "name": "CALEB SALUM GARCIA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 16,
      "texto": 34
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 300
  },
  {
    "numero": 5,
    "name": "DAVI ANDERSON DOS SANTOS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 9,
      "texto": 23
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 301
  },
  {
    "numero": 6,
    "name": "DERICK LEVI SANCHES GABRIEL",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 11,
      "texto": 23
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 302
  },
  {
    "numero": 8,
    "name": "ELOA TRAVELLINI FEKETT VASCONCELOS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 25,
      "texto": 64
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 303
  },
  {
    "numero": 10,
    "name": "HADASSAH GABRIELY GALVES AMARAL",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 8
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 304
  },
  {
    "numero": 11,
    "name": "HELENA CORREA NASCIMENTO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 19,
      "pseudopalavras": 11,
      "texto": 26
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 305
  },
  {
    "numero": 13,
    "name": "ISABELA MENESES LOUZADA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 3,
      "texto": 11
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 306
  },
  {
    "numero": 14,
    "name": "JOAO LUCAS MACHADO DE OLIVEIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 307
  },
  {
    "numero": 15,
    "name": "LAURA FERNANDES SOARES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 9,
      "texto": 23
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 308
  },
  {
    "numero": 17,
    "name": "LIVIA HELENA DE SOUZA LIMA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 3,
      "texto": 7
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 309
  },
  {
    "numero": 18,
    "name": "MELISSA GABRIELLY EVARISTO DE PAULA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 2,
      "texto": 8
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 310
  },
  {
    "numero": 19,
    "name": "WENDRICK PIETRO FERREIRA DE AZEVEDO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 3
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 311
  },
  {
    "numero": 20,
    "name": "YASMIM BARBOSA DE MENESES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 18,
      "texto": 35
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 312
  },
  {
    "numero": 22,
    "name": "JADE YUSEF EL KHATIB GONÇALVES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 313
  },
  {
    "numero": 23,
    "name": "FLÁVIO ALVES VIEIRA JUNIOR",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 19,
      "pseudopalavras": 7,
      "texto": 20
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 314
  },
  {
    "numero": 24,
    "name": "ANA LÍVIA SANTOS FERREIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 4,
      "texto": 8
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 315
  },
  {
    "numero": 25,
    "name": "GABRIEL BISPO DA SILVA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 316
  },
  {
    "numero": 1,
    "name": "ALICE EMANUELLE GUEDES CARDOSO FREITAS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 1,
      "texto": 4
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 317
  },
  {
    "numero": 3,
    "name": "ANA LAURA DE CASTRO SOUZA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 7,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 318
  },
  {
    "numero": 4,
    "name": "ANA LIVIA ARRONGE PORFIRIO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 319
  },
  {
    "numero": 5,
    "name": "AYLA VITORIA DA SILVA MONTEIRO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 8,
      "texto": 15
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 320
  },
  {
    "numero": 6,
    "name": "BRENDA YORANE POZZATI DA SILVA PAULA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 7,
      "pseudopalavras": 5,
      "texto": 6
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 321
  },
  {
    "numero": 7,
    "name": "CECILIA MONTEALTO SIMOES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 7,
      "texto": 14
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 322
  },
  {
    "numero": 8,
    "name": "DAVI MIGUEL MARCHINI OLIVEIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 2,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 323
  },
  {
    "numero": 9,
    "name": "ESTELLA SILVA ARAUJO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 12,
      "texto": 20
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 324
  },
  {
    "numero": 12,
    "name": "HADASSA CUSTODIO MOURA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 325
  },
  {
    "numero": 13,
    "name": "ISABELLA DA SILVA MUNIZ RIBEIRO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 5,
      "pseudopalavras": 4,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 326
  },
  {
    "numero": 14,
    "name": "ISIS ARAUJO SIQUEIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 8,
      "pseudopalavras": 4,
      "texto": 5
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 327
  },
  {
    "numero": 15,
    "name": "JOSE HEITOR CEZARIO DA SILVA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 8,
      "texto": 14
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 328
  },
  {
    "numero": 18,
    "name": "MAX GAEL BASTOS CORTEZ",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 2,
      "texto": 2
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 329
  },
  {
    "numero": 19,
    "name": "NOAH SANTOS CARNEIRO CHAVES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 9,
      "texto": 39
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 330
  },
  {
    "numero": 21,
    "name": "VITORIA DOS REIS XAVIER MARTINS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 331
  },
  {
    "numero": 23,
    "name": "MARIANA CRISTINA DE FARIA FERNANDES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 4,
      "texto": 7
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 332
  },
  {
    "numero": 24,
    "name": "LUIZ MIGUEL SILVA GOULART",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 333
  },
  {
    "numero": 25,
    "name": "LUIZ MIGUEL ALVES DE PAULA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 334
  },
  {
    "numero": 26,
    "name": "GABRIELLY ALVES GRACIANO FERREIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 12,
      "texto": 30
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 5,
    "id": 335
  },
  {
    "numero": 1,
    "name": "ANA ALLYCIA MATHIAS DE CARVALHO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 336
  },
  {
    "numero": 3,
    "name": "ANA LIVIA ALVES TEODORO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 1,
      "texto": 10
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 337
  },
  {
    "numero": 4,
    "name": "ANNA LAURA RAMOS FERREIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 1,
      "texto": 25
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 338
  },
  {
    "numero": 5,
    "name": "BRAYAN DE JESUS SOARES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 0,
      "texto": 20
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 339
  },
  {
    "numero": 6,
    "name": "CLOE TRAVASSOS DE MORAIS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 0,
      "texto": 18
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 340
  },
  {
    "numero": 7,
    "name": "DANIEL KENEDY DOS SANTOS MACHADO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 2,
      "texto": 5
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 341
  },
  {
    "numero": 8,
    "name": "ESMERALDA ARAUJO PLACIDO DOS SANTOS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 3,
      "texto": 15
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 342
  },
  {
    "numero": 9,
    "name": "HELENA FERNANDA GERONIMO GONÇALVES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 343
  },
  {
    "numero": 11,
    "name": "JOANA SANTOS DE MELO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 0,
      "texto": 14
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 4,
    "id": 344
  },
  {
    "numero": 12,
    "name": "LUARA VALENTINA DA SILVA OLIVEIRA DE SOUZA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 2,
      "texto": 3
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 4,
    "id": 345
  },
  {
    "numero": 13,
    "name": "LYANNA ARWEN DE ARAUJO MARTINS COSTA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 5,
    "id": 346
  },
  {
    "numero": 15,
    "name": "MARIA LUIZA DE OLIVEIRA MEDEIROS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 11,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 5,
    "id": 347
  },
  {
    "numero": 18,
    "name": "REBECA DIAS DOS SANTOS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 2,
      "texto": 15
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 5,
    "id": 348
  },
  {
    "numero": 19,
    "name": "RUAN GABRIEL DE JESUS CHAVES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 0,
      "texto": 12
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 6,
    "id": 349
  },
  {
    "numero": 20,
    "name": "VINICIUS LEVI SANTOS ALVES DO NASCIMENTO",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 1,
      "texto": 21
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 6,
    "id": 350
  },
  {
    "numero": 22,
    "name": "ICARO MIGUEL OLIVEIRA DE JESUS",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 1,
      "pseudopalavras": 4,
      "texto": 1
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 7,
    "id": 351
  },
  {
    "numero": 23,
    "name": "LUIZ GUILHERME GONÇALVES DE OLIVEIRA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 7,
    "id": 352
  },
  {
    "numero": 24,
    "name": "ISABELLY VITORIA LEITE SOUZA SOARES",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 4,
      "texto": 2
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 8,
    "id": 353
  },
  {
    "numero": 25,
    "name": "HEITOR MIGUEL DE JESUS FERRAZ DA SILVA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 1,
      "texto": 11
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 8,
    "id": 354
  },
  {
    "numero": 26,
    "name": "LEANDRA EOWYN DE ARAUJO MARTINS COSTA",
    "escola": "Elias Bargis Mathias, Prof.",
    "turma": "1º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Elias Bargis Mathias, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 9,
    "id": 355
  },
  {
    "numero": 1,
    "name": "ANA CECILIA DA SILVA MARTINS",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 8,
      "texto": 20
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 356
  },
  {
    "numero": 3,
    "name": "AYSLAN MATIAS MOREIRA RIBEIRO",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 17,
      "texto": 51
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 357
  },
  {
    "numero": 4,
    "name": "BENTO MIGUEL DOS SANTOS MELO",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 22,
      "texto": 96
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 358
  },
  {
    "numero": 5,
    "name": "DAVI LUCCA MELO DOS REIS",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 16,
      "texto": 38
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 359
  },
  {
    "numero": 6,
    "name": "HEITOR GIUDICE BORGES",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 26,
      "texto": 63
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 360
  },
  {
    "numero": 7,
    "name": "HELENA MACHADO AGOSTINHO",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 361
  },
  {
    "numero": 8,
    "name": "HENRY VINICIOS DE JESUS BUENO",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 34,
      "texto": 78
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 362
  },
  {
    "numero": 9,
    "name": "IORAN DE JESUS AUGUSTO",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 15,
      "texto": 36
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 363
  },
  {
    "numero": 10,
    "name": "LARA BEATRIZ CORREA BARBOSA",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 364
  },
  {
    "numero": 12,
    "name": "LORENZO MARTINS DE CARVALHO",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 15,
      "texto": 39
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 365
  },
  {
    "numero": 13,
    "name": "LUCAS SOUZA NOGUEIRA",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 366
  },
  {
    "numero": 14,
    "name": "MARIAH DE MELO MANOEL",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 23,
      "pseudopalavras": 20,
      "texto": 13
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 367
  },
  {
    "numero": 17,
    "name": "NICOLAS DO ROSARIO REIS",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 11,
      "texto": 21
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 368
  },
  {
    "numero": 18,
    "name": "PAMELA SOFIA DA SILVA",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 369
  },
  {
    "numero": 19,
    "name": "RAFAEL GREGORIO CANDIDO",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 370
  },
  {
    "numero": 20,
    "name": "SAMUEL ANDRADE DE PAULA",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 22,
      "texto": 98
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 371
  },
  {
    "numero": 21,
    "name": "THOMAS DE SOUZA FERNANDES DUARTE",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 11,
      "texto": 28
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 372
  },
  {
    "numero": 22,
    "name": "MANUELA OLIVEIRA NUNES",
    "escola": "Félix Adib Miguel",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 13,
      "texto": 63
    },
    "sourceFile": "Félix Adib Miguel EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 373
  },
  {
    "numero": 1,
    "name": "ANTÔNIO LUIZ RODRIGUES DA SILVA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 8,
      "texto": 15
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 374
  },
  {
    "numero": 3,
    "name": "BENJAMIN MIRANDA SILVA PEREIRA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 375
  },
  {
    "numero": 4,
    "name": "BRYAN LORHAN SALES DE OLIVEIRA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 376
  },
  {
    "numero": 5,
    "name": "DAVI REIS RESENDE",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 9,
      "texto": 25
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 377
  },
  {
    "numero": 6,
    "name": "ESTHER BISPO LOURENÇO DA SILVA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 378
  },
  {
    "numero": 7,
    "name": "GABRIEL FARIA DE MENEZES",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 25,
      "texto": 74
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 379
  },
  {
    "numero": 8,
    "name": "HEITOR RIBAS RONCONI SOUZA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 26,
      "texto": 45
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 380
  },
  {
    "numero": 9,
    "name": "HELENA ISABELLY CINTRA NOGUEIRA DA CRUZ",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 8,
      "texto": 28
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 381
  },
  {
    "numero": 11,
    "name": "JOAO AZEREDO VIOL",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 3,
      "texto": 13
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 382
  },
  {
    "numero": 12,
    "name": "JUAN VITOR PEREIRA CAMPOS",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 8,
      "texto": 37
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 383
  },
  {
    "numero": 13,
    "name": "MANUELA CASTRO RAMOS",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 31,
      "texto": 78
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 384
  },
  {
    "numero": 15,
    "name": "MARCOS VINICIUS DE OLIVEIRA DA SILVA JUNIOR",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 17,
      "texto": 37
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 385
  },
  {
    "numero": 17,
    "name": "MELISSA SANTOS GONCALVES",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 8
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 386
  },
  {
    "numero": 20,
    "name": "NUBIA MARIA ESPIRITO SANTO SALGADO",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 11,
      "texto": 28
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 387
  },
  {
    "numero": 21,
    "name": "PIETRA VITORIA APARECIDA DIAS",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 19,
      "pseudopalavras": 6,
      "texto": 18
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 388
  },
  {
    "numero": 23,
    "name": "NATAN WILLIAN MATOS GAMA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 389
  },
  {
    "numero": 24,
    "name": "JOAO LUCAS DE JESUS CAMPBELL LEMES",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 20,
      "texto": 55
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 390
  },
  {
    "numero": 2,
    "name": "ARTHUR GABRIEL MONTEIRO DA SILVA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 1,
      "texto": 34
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 391
  },
  {
    "numero": 3,
    "name": "BERNARDO AUGUSTO ALVES DA SILVA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 0,
      "texto": 76
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 392
  },
  {
    "numero": 4,
    "name": "DAVI SILVESTRE DE OLIVEIRA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 3,
      "texto": 22
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 393
  },
  {
    "numero": 5,
    "name": "DIOGO OSVALDO MONTEIRO",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 2,
      "texto": 4
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 394
  },
  {
    "numero": 6,
    "name": "ENZO GABRIEL DA SILVA CABRAL",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 1,
      "texto": 4
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 395
  },
  {
    "numero": 7,
    "name": "ENZO GABRIEL DOS SANTOS DIAS",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 2,
      "texto": 12
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 396
  },
  {
    "numero": 8,
    "name": "GABRIEL BARBOSA FRITTOLI DE FREITAS",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 2,
      "texto": 24
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 397
  },
  {
    "numero": 9,
    "name": "HELENA CAROLINE PEREIRA ALVES",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 1,
      "texto": 16
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 398
  },
  {
    "numero": 10,
    "name": "JOAO PEDRO MACIEL NEVES DE OLIVEIRA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 1,
      "texto": 36
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 399
  },
  {
    "numero": 11,
    "name": "LAILA MARIANO FREITAS",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 69,
      "pseudopalavras": 1,
      "texto": 109
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 400
  },
  {
    "numero": 13,
    "name": "LUIZ HENRIQUE DAS CHAGAS MARCONDES",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 1,
      "texto": 53
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 401
  },
  {
    "numero": 16,
    "name": "MIGUEL DA SILVA CAMPOS",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 3,
      "pseudopalavras": 3,
      "texto": 3
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 402
  },
  {
    "numero": 18,
    "name": "VITOR CAIAN DA CONCEICAO SACRAMENTO",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 10,
      "pseudopalavras": 0,
      "texto": 6
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 403
  },
  {
    "numero": 19,
    "name": "MANUELLA EDUARDA SILVA DE JESUS",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 1,
      "texto": 20
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 404
  },
  {
    "numero": 20,
    "name": "HELOISE CORDEIRO DE GODOY",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 2,
      "texto": 32
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 405
  },
  {
    "numero": 21,
    "name": "HEITOR MIGUEL DA SILVA AZEVEDO",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 3,
      "texto": 3
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 406
  },
  {
    "numero": 2,
    "name": "ANA LARA MONTEIRO EDUARDO",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 5,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 407
  },
  {
    "numero": 4,
    "name": "CALEB AZEVEDO DA SILVA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 15,
      "texto": 74
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 408
  },
  {
    "numero": 5,
    "name": "ELOAH MANUELLE DE SOUSA SILVA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 8,
      "pseudopalavras": 5,
      "texto": 1
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 409
  },
  {
    "numero": 6,
    "name": "GABRIEL VINICIUS SANTANA SILVA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 10,
      "texto": 18
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 410
  },
  {
    "numero": 7,
    "name": "GUSTAVO HENRIQUE NASCIMENTO DOS SANTOS",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 411
  },
  {
    "numero": 9,
    "name": "ISAAC DE CARVALHO",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 9,
      "texto": 15
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 412
  },
  {
    "numero": 10,
    "name": "LUCAS GABRIEL BARBOSA FERREIRA DE MATTOS",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 25,
      "texto": 85
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 413
  },
  {
    "numero": 12,
    "name": "MARIA VITORIA DA SILVA FIGUEIREDO",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 8,
      "texto": 16
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 414
  },
  {
    "numero": 14,
    "name": "NATHAN GAEL PASSOS MARTINS ROSA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 415
  },
  {
    "numero": 16,
    "name": "VITÓRIA CRISTINA DA SILVA AGUIAR",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 6,
      "texto": 8
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 416
  },
  {
    "numero": 18,
    "name": "ARTHUR HENRIQUE DUQUE RODRIGUES",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 417
  },
  {
    "numero": 19,
    "name": "YOHANNA DA SILVA BRAGA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 6,
      "texto": 16
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 418
  },
  {
    "numero": 20,
    "name": "LARA HELOA DOM BOSCO RODRIGUES",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 419
  },
  {
    "numero": 22,
    "name": "ANA JULIA DA SILVA DE OLIVEIRA",
    "escola": "Francisco de Assis César, Dr.",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 9,
      "pseudopalavras": 7,
      "texto": 9
    },
    "sourceFile": "Francisco de Assis César, Dr. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 420
  },
  {
    "numero": 2,
    "name": "ANTHONY FRACASSO FANCIO",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 3,
      "texto": 107
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 421
  },
  {
    "numero": 3,
    "name": "ANTONELLA ANTONIO SOUZA DOS SANTOS",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 6,
      "pseudopalavras": 4,
      "texto": 3
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 422
  },
  {
    "numero": 4,
    "name": "ARTHUR DE SOUZA MAGALHAES SILVA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 18,
      "texto": 81
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 423
  },
  {
    "numero": 7,
    "name": "CECILIA MARIA DE LIMA VIEIRA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 15,
      "texto": 35
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 424
  },
  {
    "numero": 8,
    "name": "EMILY RAMOS FLAUZINO",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 16,
      "pseudopalavras": 2,
      "texto": 11
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 425
  },
  {
    "numero": 9,
    "name": "HELENA DE PAULA VIEIRA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 10,
      "texto": 74
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 426
  },
  {
    "numero": 10,
    "name": "JOAQUIM MARQUES RODRIGUES",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 21,
      "pseudopalavras": 10,
      "texto": 19
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 427
  },
  {
    "numero": 11,
    "name": "KAIO HENRIQUE SCHONS",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 428
  },
  {
    "numero": 12,
    "name": "LAURA TOLEDO DA CONCEIÇAO",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 21,
      "pseudopalavras": 5,
      "texto": 22
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 429
  },
  {
    "numero": 14,
    "name": "LOURENÇO CONFORTE DA SILVA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 20,
      "pseudopalavras": 30,
      "texto": 11
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 430
  },
  {
    "numero": 15,
    "name": "MAITE ELOA COSTA PEREIRA MOREIRA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 3,
      "texto": 102
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 431
  },
  {
    "numero": 16,
    "name": "MELINDA RANDES DIAS",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 20,
      "pseudopalavras": 37,
      "texto": 11
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 432
  },
  {
    "numero": 17,
    "name": "MELISSA DA CUNHA FONSECA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 10,
      "texto": 22
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 433
  },
  {
    "numero": 18,
    "name": "MIRELLA OLIVEIRA DOS SANTOS",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 61,
      "pseudopalavras": 10,
      "texto": 102
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 434
  },
  {
    "numero": 21,
    "name": "SAMUEL CARDOSO MARQUES PORFIRIO",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 16,
      "texto": 23
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 435
  },
  {
    "numero": 22,
    "name": "THOMAS CORSINI MONTEIRO DO ESPIRITO SANTO",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 12,
      "texto": 58
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 436
  },
  {
    "numero": 23,
    "name": "SARA EMANUELLI MARIN",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 0,
      "texto": 2
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 437
  },
  {
    "numero": 24,
    "name": "HARIEL DA CRUZ GOMES",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 438
  },
  {
    "numero": 25,
    "name": "CALEBE DANIEL DA SILVA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 439
  },
  {
    "numero": 26,
    "name": "JOHN PETER MOREIRA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 5,
      "texto": 90
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 440
  },
  {
    "numero": 1,
    "name": "ANA LUNNA DOS SANTOS ROMERO",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 36,
      "pseudopalavras": 34,
      "texto": 32
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 441
  },
  {
    "numero": 3,
    "name": "ANTONELLA DOS REIS ALMEIDA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 8,
      "texto": 91
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 442
  },
  {
    "numero": 4,
    "name": "AURORA BARBOSA DE SOUZA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 4,
      "texto": 85
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 443
  },
  {
    "numero": 5,
    "name": "BELLA DOS SANTOS GURGEL",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 35,
      "texto": 31
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 444
  },
  {
    "numero": 6,
    "name": "ELI DA SILVA ANDRADE",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 15,
      "texto": 74
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 445
  },
  {
    "numero": 7,
    "name": "GABRIEL HENRIQUE THEODORO DE ASSIS GOUVEA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 14,
      "texto": 57
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 446
  },
  {
    "numero": 8,
    "name": "HENRIQUE CALLEBE BASILIO DOS SANTOS",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 447
  },
  {
    "numero": 10,
    "name": "ISADORA PEREIRA CEPKAUSKAS",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 28,
      "texto": 54
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 448
  },
  {
    "numero": 11,
    "name": "KYARA FERNANDA MONTEIRO DE OLIVEIRA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 48,
      "pseudopalavras": 10,
      "texto": 50
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 449
  },
  {
    "numero": 12,
    "name": "LORENZO LUCCA CINACHI DA CUNHA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 14,
      "texto": 80
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 450
  },
  {
    "numero": 13,
    "name": "LUNA MARIA ALVES DE OLIVEIRA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 32,
      "texto": 36
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 451
  },
  {
    "numero": 14,
    "name": "MANUELLA GAMA DO CARMO PORTELA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 30,
      "texto": 64
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 452
  },
  {
    "numero": 15,
    "name": "MARIA CLARA BRUNIERI DA SILVA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 44,
      "texto": 31
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 453
  },
  {
    "numero": 16,
    "name": "MARIA FLOR MONTEIRO DOS SANTOS",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 53,
      "pseudopalavras": 34,
      "texto": 100
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 454
  },
  {
    "numero": 17,
    "name": "MARIA JULIA SOARES MARQUES",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 18,
      "pseudopalavras": 31,
      "texto": 20
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 455
  },
  {
    "numero": 18,
    "name": "NICOLAS RIBEIRO TSCHERNIAK LEAL",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 26,
      "texto": 49
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 456
  },
  {
    "numero": 19,
    "name": "RAONI MULITERNO MARCONDES DE SOUZA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 8,
      "pseudopalavras": 52,
      "texto": 12
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 457
  },
  {
    "numero": 20,
    "name": "RAYANNY CORREA ANDRADE SEBASTIANA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 34,
      "texto": 9
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 458
  },
  {
    "numero": 21,
    "name": "THEO DUARTE MARTINS ALVES",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 31,
      "pseudopalavras": 25,
      "texto": 32
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 459
  },
  {
    "numero": 22,
    "name": "VINICIUS STRAUS DOS SANTOS",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 3,
      "pseudopalavras": 5,
      "texto": 102
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 460
  },
  {
    "numero": 23,
    "name": "THAYNA VITORIA DOS ANJOS GARCIA",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 56,
      "texto": 4
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 461
  },
  {
    "numero": 24,
    "name": "BENJAMIN MIGUEL DOS SANTOS GABRIEL",
    "escola": "Gilda Piorini Molica, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 30,
      "texto": 23
    },
    "sourceFile": "Gilda Piorini Molica, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 462
  },
  {
    "numero": 1,
    "name": "ALICE DE SOUZA SILVA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 12,
      "texto": 29
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 463
  },
  {
    "numero": 2,
    "name": "ARTHUR LUCIO DE CARVALHO LEAL",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 12,
      "texto": 28
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 464
  },
  {
    "numero": 3,
    "name": "CLARA TARIFE MARIANO DE LUCA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 13,
      "texto": 47
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 465
  },
  {
    "numero": 4,
    "name": "ELOAH BARBOSA COSTA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 12,
      "texto": 22
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 466
  },
  {
    "numero": 5,
    "name": "GAEL CUBA DA SILVA REZENDE",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 13,
      "pseudopalavras": 3,
      "texto": 9
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 467
  },
  {
    "numero": 6,
    "name": "HELENA MELO APARECIDO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 5,
      "texto": 9
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 468
  },
  {
    "numero": 7,
    "name": "JULIA SOARES MONTEIRO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 10,
      "texto": 26
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 469
  },
  {
    "numero": 8,
    "name": "LARA FROES NOGUEIRA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 11,
      "texto": 28
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 470
  },
  {
    "numero": 9,
    "name": "LIZ ANDRADE FIAES BARBOSA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 5,
      "texto": 7
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 471
  },
  {
    "numero": 10,
    "name": "LUIS FELIPE MENDES SILVA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 11,
      "texto": 21
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 472
  },
  {
    "numero": 11,
    "name": "MANUELA FERREIRA DE SOUZA CARVALHO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 473
  },
  {
    "numero": 12,
    "name": "MANUELLA YASMIN ESTEVAM FERREIRA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 10,
      "texto": 22
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 474
  },
  {
    "numero": 13,
    "name": "MARIA DE PAULA CASSIANO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 22,
      "texto": 54
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 475
  },
  {
    "numero": 14,
    "name": "MARIA HELENA MARCONDES BISSOLI",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 18,
      "pseudopalavras": 6,
      "texto": 18
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 476
  },
  {
    "numero": 15,
    "name": "MAYA GALVAO TORRES FARIA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 13,
      "texto": 39
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 477
  },
  {
    "numero": 16,
    "name": "OLIVIA CUBA DA SILVA REZENDE",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 14,
      "pseudopalavras": 5,
      "texto": 9
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 478
  },
  {
    "numero": 17,
    "name": "PEDRO PORFIRIO NAGAROTO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 22,
      "texto": 43
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 479
  },
  {
    "numero": 18,
    "name": "SAMUEL DIEGO ANDRADE NUNES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 1,
      "texto": 1
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 480
  },
  {
    "numero": 19,
    "name": "SAMUEL HENRIQUE FERNANDES MARQUES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 14,
      "texto": 37
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 481
  },
  {
    "numero": 21,
    "name": "VITOR GABRIEL RODRIGUES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 5,
      "texto": 9
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 482
  },
  {
    "numero": 1,
    "name": "AURORA MAGALHAES DE CASTRO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 14,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 483
  },
  {
    "numero": 2,
    "name": "DAVI OLIVEIRA LIMA ALVES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 6,
      "texto": 20
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 484
  },
  {
    "numero": 3,
    "name": "ELOAH VITORIA NAKAO MOREIRA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 24,
      "pseudopalavras": 14,
      "texto": 29
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 485
  },
  {
    "numero": 5,
    "name": "HELENA RIBEIRO NUNES DA SILVA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 18,
      "pseudopalavras": 5,
      "texto": 22
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 486
  },
  {
    "numero": 6,
    "name": "KAINNAN CHRISTIAN PEREIRA DE SOUZA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 487
  },
  {
    "numero": 7,
    "name": "LIZ PIRES ROSA ALEM",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 19,
      "texto": 47
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 488
  },
  {
    "numero": 9,
    "name": "MARIA ZIKAN DOS SANTOS",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 7,
      "pseudopalavras": 2,
      "texto": 3
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 489
  },
  {
    "numero": 10,
    "name": "MARIAH MOTTA DE SOUZA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 2,
      "texto": 2
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 490
  },
  {
    "numero": 11,
    "name": "MATHEUS HENRIQUE PRADO DO ROSARIO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 17,
      "texto": 28
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 491
  },
  {
    "numero": 12,
    "name": "MIGUEL DE MOURA LACERDA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 2,
      "texto": 2
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 492
  },
  {
    "numero": 14,
    "name": "OLIVIA AMORIM LOPES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 493
  },
  {
    "numero": 15,
    "name": "RAVI CESAR CORREA ARAUJO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 8,
      "texto": 21
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 494
  },
  {
    "numero": 16,
    "name": "RAVI GADNER OLIVEIRA RODRIGUES MAGALHÃES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 16,
      "texto": 29
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 495
  },
  {
    "numero": 17,
    "name": "REBECA DE MATTOS DANIEL",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 496
  },
  {
    "numero": 20,
    "name": "YASMIN DA SILVA NARCIZO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 497
  },
  {
    "numero": 21,
    "name": "ZAKI LOYOLA GODINHO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 14,
      "texto": 26
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 498
  },
  {
    "numero": 22,
    "name": "CECÍLIA SANTOS BERTTI",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 2
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 499
  },
  {
    "numero": 24,
    "name": "KEFERA LUARA RAMOS BATISTA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 5,
    "id": 500
  },
  {
    "numero": 25,
    "name": "HELENA AGOSTINHO GUERREIRO GUIGEM",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 5,
    "id": 501
  },
  {
    "numero": 26,
    "name": "ENZO GABRIEL SANTOS MARCELLO DA SILVA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 5,
    "id": 502
  },
  {
    "numero": 27,
    "name": "EMANUELLE MONTEIRO DA SILVA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 18,
      "pseudopalavras": 6,
      "texto": 15
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 5,
    "id": 503
  },
  {
    "numero": 28,
    "name": "LEONARDO HENRIQUE CARDOSO DA SILVA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 2,
      "texto": 2
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 5,
    "id": 504
  },
  {
    "numero": 1,
    "name": "ALICE MONTEIRO DE SOUZA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 7,
      "texto": 20
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 505
  },
  {
    "numero": 2,
    "name": "BENTO CABRAL PYLES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 5,
      "texto": 16
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 506
  },
  {
    "numero": 4,
    "name": "ISAAC CUNDARI VAZ",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 507
  },
  {
    "numero": 5,
    "name": "ISAAC GABRIEL NASCIMENTO SANTOS",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 29,
      "texto": 89
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 508
  },
  {
    "numero": 6,
    "name": "JEREMIAS DOS SANTOS",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 56,
      "pseudopalavras": 40,
      "texto": 67
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 509
  },
  {
    "numero": 7,
    "name": "KAUA WELLINGTON DE JESUS BENEGA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 5,
      "texto": 12
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 510
  },
  {
    "numero": 9,
    "name": "LIZ PEROLA FLORES MAGALHAES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 13,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 511
  },
  {
    "numero": 10,
    "name": "MAYA RESENDE FRAGA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 11,
      "texto": 16
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 512
  },
  {
    "numero": 11,
    "name": "MELISSA MARQUES DE CAMARGO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 10,
      "texto": 19
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 513
  },
  {
    "numero": 12,
    "name": "MIRELA FERREIRA DA SILVA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 13,
      "texto": 32
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 514
  },
  {
    "numero": 13,
    "name": "MURILO MONTEIRO SILVA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 13,
      "texto": 34
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 515
  },
  {
    "numero": 14,
    "name": "NICOLAS HENRIQUE DOS SANTOS RIBEIRO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 516
  },
  {
    "numero": 15,
    "name": "NOAH MIGUEL MONTEIRO DE OLIVEIRA TEODORO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 9,
      "texto": 28
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 517
  },
  {
    "numero": 16,
    "name": "SOPHIE CHARLOTTE BOM",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 13,
      "pseudopalavras": 7,
      "texto": 10
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 518
  },
  {
    "numero": 17,
    "name": "THEO OLIVEIRA FERREIRA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 5,
      "texto": 12
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 519
  },
  {
    "numero": 18,
    "name": "MIGUEL LUCCA DOS SANTOS JABOUR",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 9,
      "texto": 28
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 520
  },
  {
    "numero": 19,
    "name": "LUIS DANIEL DE TOLEDO CORREIA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 521
  },
  {
    "numero": 20,
    "name": "JUAN ALVES DE JESUS GOMES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 3,
      "texto": 6
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 522
  },
  {
    "numero": 1,
    "name": "ARTHUR GABRIEL CORDEIRO FAVARO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 25,
      "texto": 38
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 523
  },
  {
    "numero": 2,
    "name": "ARTHUR MIGUEL GOMES DA SILVA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 9,
      "texto": 25
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 524
  },
  {
    "numero": 3,
    "name": "ARTHUR TENORIO MELO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 20,
      "texto": 31
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 525
  },
  {
    "numero": 4,
    "name": "CARLOS EDUARDO APARECIDO DA CRUZ",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 526
  },
  {
    "numero": 5,
    "name": "CECILIA AGUIAR SANTOS",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 6,
      "pseudopalavras": 1,
      "texto": 7
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 527
  },
  {
    "numero": 6,
    "name": "DAVI HENRIQUE ARAUJO BUENO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 4,
      "texto": 10
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 528
  },
  {
    "numero": 7,
    "name": "ELOAH LETICIA ARANTES DA SILVA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 5,
      "texto": 18
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 529
  },
  {
    "numero": 8,
    "name": "EMANUEL VIEIRA PINTO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 9,
      "pseudopalavras": 1,
      "texto": 7
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 530
  },
  {
    "numero": 9,
    "name": "FELIPE HONORATO OLIVEIRA SILVA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 9,
      "pseudopalavras": 5,
      "texto": 9
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 531
  },
  {
    "numero": 10,
    "name": "IARA FONSECA DE CARLIS",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 11,
      "texto": 28
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 532
  },
  {
    "numero": 11,
    "name": "ISADORA CAMILO BOTH",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 5,
      "texto": 9
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 533
  },
  {
    "numero": 12,
    "name": "JOAO GUILHERME SANTOS DE SIQUEIRA MOURA MIRANDA",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 0,
      "texto": 6
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 534
  },
  {
    "numero": 13,
    "name": "LIZ RIBEIRO MAMEDE",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 5,
      "pseudopalavras": 1,
      "texto": 7
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 535
  },
  {
    "numero": 14,
    "name": "LORENZO NATAN RODRIGUES E SANTOS",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 23,
      "texto": 45
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 536
  },
  {
    "numero": 15,
    "name": "MARIA CLARA LOPES FERNANDES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 537
  },
  {
    "numero": 17,
    "name": "MARINA SIMOES DO AMARAL GARUFFE SOARES",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 13,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 538
  },
  {
    "numero": 18,
    "name": "SAMARA BEATRIZ SILVEIRA QUEIROZ",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 4,
    "id": 539
  },
  {
    "numero": 21,
    "name": "HEITHOR FERREIRA BARROS SANTIAGO",
    "escola": "Isabel do Carmo Nogueira, Profª",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 15,
      "texto": 50
    },
    "sourceFile": "Isabel do Carmo Nogueira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 4,
    "id": 540
  },
  {
    "numero": 1,
    "name": "ALICE SOUZA OLIVEIRA",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 5,
      "texto": 10
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 541
  },
  {
    "numero": 2,
    "name": "DAVI BORGES RIBEIRO DINIZ",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 1,
      "texto": 6
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 542
  },
  {
    "numero": 3,
    "name": "ESTHER TAVEIRA DE SOUZA",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 6,
      "pseudopalavras": 0,
      "texto": 17
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 543
  },
  {
    "numero": 4,
    "name": "GABRIELA CASTRO DE ALMEIDA",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 8,
      "pseudopalavras": 1,
      "texto": 4
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 544
  },
  {
    "numero": 9,
    "name": "LIVIA CRISTINA LUZ FELIPE",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 10,
      "texto": 10
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 545
  },
  {
    "numero": 10,
    "name": "MARIA HELENA GONÇALVES ROSA TOLEDO",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 17,
      "texto": 37
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 546
  },
  {
    "numero": 11,
    "name": "MIRIA VICTORIA SILVA ALVES DE ALMEIDA",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 5,
      "texto": 9
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 547
  },
  {
    "numero": 12,
    "name": "NOAH MAIA FLORES",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 3,
      "texto": 4
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 548
  },
  {
    "numero": 13,
    "name": "PAOLA MARIA CECILIA RAMOS GOMES",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 549
  },
  {
    "numero": 15,
    "name": "SOPHIA GABRIELLE DE SOUSA LOPES",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 9,
      "texto": 19
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 550
  },
  {
    "numero": 18,
    "name": "MALU DOURADO POLIDORO",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 10,
      "texto": 19
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 551
  },
  {
    "numero": 19,
    "name": "BENJAMIN SANTOS LINS",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 8
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 552
  },
  {
    "numero": 20,
    "name": "GAEL BARREIRA CASTRO",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 553
  },
  {
    "numero": 1,
    "name": "ALICE VITORIA MOREIRA DA SILVA",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 554
  },
  {
    "numero": 2,
    "name": "ARTHUR MOTA ZEFERINO",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 555
  },
  {
    "numero": 3,
    "name": "CAIO LORENZO GONÇALVES LEMES",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 556
  },
  {
    "numero": 4,
    "name": "DAVI MIGUEL DE JESUS VIEIRA",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 5,
      "texto": 14
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 557
  },
  {
    "numero": 6,
    "name": "EMANUELLY VITORIA MACHADO CURSINO",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 16,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 558
  },
  {
    "numero": 7,
    "name": "GAEL HENRIQUE BARROS DE OLIVEIRA",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 27,
      "texto": 47
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 559
  },
  {
    "numero": 8,
    "name": "GIOVANNA DA SILVA RIBEIRO",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 10,
      "texto": 20
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 560
  },
  {
    "numero": 10,
    "name": "JOAO PEDRO MACHADO DE ALMEIDA",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 19,
      "texto": 36
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 561
  },
  {
    "numero": 11,
    "name": "KATHLEEN THAISA DA SILVA",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 27,
      "pseudopalavras": 20,
      "texto": 37
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 562
  },
  {
    "numero": 12,
    "name": "LORENZO CARDOSO FELIPE FONSECA",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 18,
      "texto": 32
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 563
  },
  {
    "numero": 15,
    "name": "MURILO GABRIEL IFEMIUK CYPRIANO FAUSTINO",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 5,
      "texto": 15
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 564
  },
  {
    "numero": 16,
    "name": "PÉROLA APARECIDA PEREIRA ALMEIDA",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 16,
      "pseudopalavras": 7,
      "texto": 18
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 565
  },
  {
    "numero": 17,
    "name": "THEO SALGADO DOS REIS RAMOS",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 26,
      "pseudopalavras": 15,
      "texto": 28
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 566
  },
  {
    "numero": 18,
    "name": "THOMAS AUGUSTO COSTA SILVA",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 13,
      "texto": 40
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 567
  },
  {
    "numero": 19,
    "name": "VALENTINA SANTANA DE FREITAS",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 4,
      "texto": 11
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 568
  },
  {
    "numero": 20,
    "name": "MANOEL MARTINS PRUDENTE",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 58,
      "pseudopalavras": 30,
      "texto": 63
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 569
  },
  {
    "numero": 21,
    "name": "THEODORO MAGNO GARCIA DA SILVA",
    "escola": "Jairo Monteiro, Prof.",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Jairo Monteiro, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 570
  },
  {
    "numero": 3,
    "name": "ANGELO SANTOS SOUZA DE OLIVEIRA PIEDADE",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 3,
      "texto": 11
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 571
  },
  {
    "numero": 4,
    "name": "ANNA LAURA RAMOS VASCONCELOS MENDES",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 572
  },
  {
    "numero": 5,
    "name": "EMILY MIRELLA BARBOSA DE ALMEIDA",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 3,
      "texto": 15
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 573
  },
  {
    "numero": 6,
    "name": "ESTHER MAXIMO DOS SANTOS",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 574
  },
  {
    "numero": 7,
    "name": "FILIPE ZANIN DOMINGOS",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 5
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 575
  },
  {
    "numero": 8,
    "name": "HEITOR DOS SANTOS DUTRA",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 5
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 576
  },
  {
    "numero": 9,
    "name": "IGOR LUCCAS MOREIRA DE JESUS",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 577
  },
  {
    "numero": 10,
    "name": "JOSE GUILHERME PAIVA DE OLIVEIRA",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 5,
      "texto": 29
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 578
  },
  {
    "numero": 11,
    "name": "LIVIA RODRIGUES MOREIRA DOS SANTOS",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 3,
      "texto": 9
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 579
  },
  {
    "numero": 12,
    "name": "MARIA CECILIA OLIVEIRA DIAS",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 0,
      "texto": 9
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 580
  },
  {
    "numero": 13,
    "name": "MILENA QUINTANILHA FIALHO",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 581
  },
  {
    "numero": 14,
    "name": "PYETRA VALENTINA DA SILVA ROCHA RIBEIRO DUARTE",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 582
  },
  {
    "numero": 16,
    "name": "VALENTINA HELENA COUTINHO",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 1,
      "texto": 7
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 583
  },
  {
    "numero": 18,
    "name": "VICTOR HUGO SANTOS BARBOSA",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 584
  },
  {
    "numero": 22,
    "name": "THALITA MOREIRA DA SILVA",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 585
  },
  {
    "numero": 24,
    "name": "ANA CLARA SANTOS DE OLIVEIRA",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 5,
      "texto": 19
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 586
  },
  {
    "numero": 25,
    "name": "HEITOR GABRIEL MOREIRA RIBEIRO",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 20,
      "texto": 56
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 587
  },
  {
    "numero": 26,
    "name": "ANTONY AVELLAR DE CASTILHO",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 588
  },
  {
    "numero": 27,
    "name": "ALICE MIRANDA BASTOS",
    "escola": "João Cesário",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 589
  },
  {
    "numero": 2,
    "name": "ANA LAURA ALONSO RODRIGUES",
    "escola": "João Cesário",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 11,
      "texto": 18
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 590
  },
  {
    "numero": 3,
    "name": "ELIAS LEMES DE OLIVEIRA",
    "escola": "João Cesário",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 591
  },
  {
    "numero": 4,
    "name": "EMANUELLY MARIA DOS SANTOS LIMA",
    "escola": "João Cesário",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 592
  },
  {
    "numero": 5,
    "name": "GABRIEL LORENZO RAMOS CARDOSO",
    "escola": "João Cesário",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 15,
      "texto": 22
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 593
  },
  {
    "numero": 6,
    "name": "GHAEL YURI XISTO RODRIGUES",
    "escola": "João Cesário",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 594
  },
  {
    "numero": 8,
    "name": "ISAQUE DINAEL RODRIGUES DAMASCENO",
    "escola": "João Cesário",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 595
  },
  {
    "numero": 9,
    "name": "JOSE VICTOR ANTUNES DE ASSIS",
    "escola": "João Cesário",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 5,
      "texto": 9
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 596
  },
  {
    "numero": 10,
    "name": "KAUAN GUSTAVO DE LIMA RIBEIRO",
    "escola": "João Cesário",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 597
  },
  {
    "numero": 12,
    "name": "LARISSA MIRELA DE MELO FURTADO",
    "escola": "João Cesário",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 598
  },
  {
    "numero": 13,
    "name": "LOHAN MONTEIRO DA SILVA",
    "escola": "João Cesário",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 599
  },
  {
    "numero": 14,
    "name": "MANUELA GONÇALVES DE SOUSA",
    "escola": "João Cesário",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 600
  },
  {
    "numero": 15,
    "name": "MARIA JÚLIA ROSA OMALSCHENKO",
    "escola": "João Cesário",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 601
  },
  {
    "numero": 16,
    "name": "THEODORO SCAURI FERRAZ",
    "escola": "João Cesário",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 22,
      "texto": 71
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 602
  },
  {
    "numero": 17,
    "name": "YURI HENRIQUE LEMES ROSA DA SILVA",
    "escola": "João Cesário",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 603
  },
  {
    "numero": 19,
    "name": "ALICE EMANUELLE CASSIANO LEITE",
    "escola": "João Cesário",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 11,
      "texto": 17
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 604
  },
  {
    "numero": 20,
    "name": "NICOLAS MARTINS GALVAO GENEROSO",
    "escola": "João Cesário",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 11,
      "texto": 29
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 605
  },
  {
    "numero": 1,
    "name": "AGATHA KAUANNY PEDRO DOS SANTOS",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 606
  },
  {
    "numero": 2,
    "name": "ALICIA AZOLA DE OLIVEIRA",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 607
  },
  {
    "numero": 3,
    "name": "ALLEF LUCAS GONCALVES DOS SANTOS",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 608
  },
  {
    "numero": 4,
    "name": "ANA LUIZA MENDES ALVES",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 6,
      "pseudopalavras": 1,
      "texto": 1
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 609
  },
  {
    "numero": 5,
    "name": "ANNA ALICYA DA SILVA LEITE",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 6,
      "texto": 9
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 610
  },
  {
    "numero": 6,
    "name": "ANNA JULIA DA SILVA NASCIMENTO ROSA",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 6,
      "texto": 9
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 611
  },
  {
    "numero": 7,
    "name": "BERNARDO ANTHONY BATISTA DO NASCIMENTO",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 612
  },
  {
    "numero": 8,
    "name": "BERNARDO EMANUEL DE OLIVEIRA FERRAZ",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 19,
      "texto": 38
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 613
  },
  {
    "numero": 9,
    "name": "DAISY GABRIELE DE JESUS",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 614
  },
  {
    "numero": 10,
    "name": "ELOA GABRIELLY FERREIRA DA ROCHA",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 615
  },
  {
    "numero": 11,
    "name": "MARIA EDUARDA TASSARA DE OLIVEIRA",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 14,
      "texto": 34
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 616
  },
  {
    "numero": 12,
    "name": "MARIA FERNANDA VALERIANO PRUDENCIO",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 617
  },
  {
    "numero": 13,
    "name": "MARIA HELOIZA DE ARAUJO",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 618
  },
  {
    "numero": 14,
    "name": "MARIA LUISA MAXIMO CUBA",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 9,
      "texto": 18
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 619
  },
  {
    "numero": 15,
    "name": "PEDRO HENRIQUE RODRIGUES DA SILVA",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 620
  },
  {
    "numero": 16,
    "name": "PYETRA YASMIN RAMOS MACHADO FREITAS",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 621
  },
  {
    "numero": 17,
    "name": "SOPHIA EMANUELLY ROSA CORREIA",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 6,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 622
  },
  {
    "numero": 18,
    "name": "THEO SILVA AMARO",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 21,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 623
  },
  {
    "numero": 19,
    "name": "VALENTINA ELOA DOS SANTOS ROMEIRO",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 624
  },
  {
    "numero": 20,
    "name": "VITOR HUGO GUIMARAES MARTINS",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 625
  },
  {
    "numero": 21,
    "name": "WILLIAN MIGUEL VIEIRA CHARLEAUX DE CAMPOS",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 5,
      "texto": 9
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 626
  },
  {
    "numero": 22,
    "name": "WILLIAN SAMUEL JESUS DE CASTRO",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 3,
      "pseudopalavras": 1,
      "texto": 4
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 627
  },
  {
    "numero": 23,
    "name": "YCARO MATEUS AMORIM DOS SANTOS",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 628
  },
  {
    "numero": 24,
    "name": "AGNES MARIA ARAUJO DE MELO VIEIRA",
    "escola": "João Cesário",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 629
  },
  {
    "numero": 1,
    "name": "ADRIEL LUCAS ARAUJO DA SILVA",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 630
  },
  {
    "numero": 2,
    "name": "ANA LIVIA SILVA SOUZA",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 631
  },
  {
    "numero": 3,
    "name": "DAVI LUCCA SANTANA",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 26,
      "texto": 78
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 632
  },
  {
    "numero": 4,
    "name": "ELISA SOARES DE MOURA BATISTA",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 16,
      "texto": 60
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 633
  },
  {
    "numero": 5,
    "name": "EMILLY KAUANE DA SILVA MIGUEL",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 634
  },
  {
    "numero": 6,
    "name": "ESTER NUNES DE FREITAS CONCEIÇAO",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 635
  },
  {
    "numero": 7,
    "name": "EZEQUIEL JUNIOR DA CONCEIÇAO CAMPOS",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 636
  },
  {
    "numero": 8,
    "name": "ISABELA ARAUJO NOGUEIRA",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 20,
      "texto": 54
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 637
  },
  {
    "numero": 9,
    "name": "ISIS CEZAR NUNES",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 27,
      "texto": 49
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 638
  },
  {
    "numero": 10,
    "name": "JHONAS GABRIEL VIEIRA CHARLEAUX DE CAMPOS",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 639
  },
  {
    "numero": 11,
    "name": "JOANA MEDEIROS DE AQUINO",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 11,
      "texto": 60
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 640
  },
  {
    "numero": 12,
    "name": "JOAO LUCAS DA SILVA MATIAS SOURATY",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 641
  },
  {
    "numero": 13,
    "name": "KATHELEYA JULIA LOPES MITAKI",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 9,
      "texto": 34
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 642
  },
  {
    "numero": 14,
    "name": "LAURA GABRIELY GUIMARAES DOS SANTOS",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 27,
      "texto": 71
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 643
  },
  {
    "numero": 15,
    "name": "LAURA MONTEIRO LOPES",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 10,
      "texto": 27
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 644
  },
  {
    "numero": 16,
    "name": "LAURA NASCIMENTO DOS PASSOS",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 26,
      "texto": 46
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 645
  },
  {
    "numero": 17,
    "name": "MARIA LAIS DE FARIA",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 20,
      "texto": 54
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 646
  },
  {
    "numero": 18,
    "name": "MATHEUS BASTOS FRANQUI",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 4,
    "id": 647
  },
  {
    "numero": 19,
    "name": "MIGUEL RODRIGUES CAETANO TIMOTIO",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 12,
      "texto": 19
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 4,
    "id": 648
  },
  {
    "numero": 20,
    "name": "PIETRO HENRIQUE DA SILVA ALVES CABRAL",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 15,
      "texto": 19
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 4,
    "id": 649
  },
  {
    "numero": 21,
    "name": "SOPHIA MARCONDES CASSIANO FELIX",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 18,
      "texto": 46
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 4,
    "id": 650
  },
  {
    "numero": 22,
    "name": "THEODORO DA SILVA BARBOSA",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 109
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 4,
    "id": 651
  },
  {
    "numero": 23,
    "name": "YCKARO SAMUEL DE MELO",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 4,
    "id": 652
  },
  {
    "numero": 25,
    "name": "MIGUEL DE OLIVEIRA ROCHA DA COSTA",
    "escola": "João Cesário",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 11,
      "texto": 34
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 4,
    "id": 653
  },
  {
    "numero": 3,
    "name": "ALICE VICTORIA CLERES SOARES",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 34,
      "pseudopalavras": 24,
      "texto": 40
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 1,
    "id": 654
  },
  {
    "numero": 4,
    "name": "ANA LIVIA MOREIRA FEITOSA",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 19,
      "texto": 45
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 1,
    "id": 655
  },
  {
    "numero": 5,
    "name": "ANNA ELISA DE SOUZA GALVAO",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 6,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 1,
    "id": 656
  },
  {
    "numero": 6,
    "name": "ARTHUR ALVES MOREIRA RIBEIRO",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 4,
      "texto": 11
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 1,
    "id": 657
  },
  {
    "numero": 7,
    "name": "CONRADO RESENDE DE FREITAS",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 22,
      "texto": 106
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 1,
    "id": 658
  },
  {
    "numero": 8,
    "name": "DANIEL LUIS DA SILVA SOARES",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 2,
    "id": 659
  },
  {
    "numero": 9,
    "name": "DIEGO CRUZ CAMARGO",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 40,
      "pseudopalavras": 27,
      "texto": 70
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 2,
    "id": 660
  },
  {
    "numero": 10,
    "name": "HANRY MIGUEL OLIVEIRA DA SILVA",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 8,
      "pseudopalavras": 10,
      "texto": 16
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 2,
    "id": 661
  },
  {
    "numero": 12,
    "name": "HELOA GABRIELA GONZAGA SOARES",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 6,
      "pseudopalavras": 5,
      "texto": 24
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 2,
    "id": 662
  },
  {
    "numero": 14,
    "name": "HENRIQUE MAGALHAES PIEDADE",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 22,
      "texto": 108
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 2,
    "id": 663
  },
  {
    "numero": 15,
    "name": "JOAQUIM HINACIO MODESTO",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 30,
      "pseudopalavras": 15,
      "texto": 74
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 2,
    "id": 664
  },
  {
    "numero": 16,
    "name": "LARISSA DE OLIVEIRA MACEDO LEITE",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 18,
      "pseudopalavras": 16,
      "texto": 46
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 2,
    "id": 665
  },
  {
    "numero": 17,
    "name": "LEONARDO ANTHONY BARBOSA DA SILVA",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 10,
      "pseudopalavras": 8,
      "texto": 22
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 2,
    "id": 666
  },
  {
    "numero": 18,
    "name": "MARIA ALICE CALDAS",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 6,
      "pseudopalavras": 5,
      "texto": 19
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 3,
    "id": 667
  },
  {
    "numero": 19,
    "name": "MARIA CECILIA ROSA ALVES",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 22,
      "pseudopalavras": 10,
      "texto": 47
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 3,
    "id": 668
  },
  {
    "numero": 20,
    "name": "MELISSA SOPHIA DOS SANTOS MOURA",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 18,
      "texto": 45
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 3,
    "id": 669
  },
  {
    "numero": 21,
    "name": "NATHANAEL EMIDIO MARCONDES",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 22,
      "pseudopalavras": 18,
      "texto": 62
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 3,
    "id": 670
  },
  {
    "numero": 24,
    "name": "VITORIA MARGARIDA APARECIDA DOS SANTOS DE PAULA",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 3,
    "id": 671
  },
  {
    "numero": 26,
    "name": "ALICIA HELENA DA SILVA GALVAO GOMES",
    "escola": "João Cesário",
    "turma": "1º ANO E",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 12,
      "pseudopalavras": 14,
      "texto": 28
    },
    "sourceFile": "João Cesário EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 3,
    "id": 672
  },
  {
    "numero": 1,
    "name": "ANA CLARA DE SOUZA FARIA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 673
  },
  {
    "numero": 2,
    "name": "ARTHUR GABRIEL DE FREITAS LIMA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 674
  },
  {
    "numero": 4,
    "name": "ELOAH VITORIA FERREIRA DE OLIVEIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 4
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 675
  },
  {
    "numero": 5,
    "name": "GIOVANA GABRIELLE ALVES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 5,
      "texto": 17
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 676
  },
  {
    "numero": 6,
    "name": "HEITOR GOMES BICUDO MORAIS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 0,
      "texto": 100
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 677
  },
  {
    "numero": 7,
    "name": "LUCAS GABRIEL DE LIMA MARTINS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 12,
      "texto": 28
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 678
  },
  {
    "numero": 8,
    "name": "LUCAS RYAN DA SILVA RAMOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 5,
      "pseudopalavras": 2,
      "texto": 5
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 679
  },
  {
    "numero": 9,
    "name": "MARIANA ROQUE TEIXEIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 1,
      "texto": 4
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 680
  },
  {
    "numero": 11,
    "name": "MIRELA EMANUELY DE CASTRO RODRIGUES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 6,
      "texto": 19
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 681
  },
  {
    "numero": 12,
    "name": "MIRIÂ VALENTINA DOS SANTOS RODRIGUES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 8,
      "texto": 20
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 682
  },
  {
    "numero": 13,
    "name": "PEDRO WILLIAM MACEDO DA SILVA MANDU",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 5,
      "texto": 9
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 683
  },
  {
    "numero": 14,
    "name": "PYETRO KAUA ROMAO NUNES DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 4,
      "texto": 10
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 684
  },
  {
    "numero": 16,
    "name": "SAMUEL HENRIQUE DIAS GONÇALVES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 1,
      "pseudopalavras": 4,
      "texto": 4
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 685
  },
  {
    "numero": 18,
    "name": "LARA EMANUELLY EVARISTO SANTANA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 13,
      "pseudopalavras": 10,
      "texto": 9
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 686
  },
  {
    "numero": 20,
    "name": "LORENZO FELIPE DA CRUZ BATISTA DE SOUZA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 687
  },
  {
    "numero": 21,
    "name": "MAYTE VIEIRA DIAS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 5,
      "pseudopalavras": 1,
      "texto": 5
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 688
  },
  {
    "numero": 22,
    "name": "LIVIA FERNANDES DE MELO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 9,
      "pseudopalavras": 4,
      "texto": 11
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 689
  },
  {
    "numero": 1,
    "name": "ANA BEATRIZ MONTEIRO GOMES ROSA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 10,
      "texto": 15
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 690
  },
  {
    "numero": 2,
    "name": "ANTHONY GABRIEL AZEVEDO VITORIA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 5,
      "texto": 8
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 691
  },
  {
    "numero": 3,
    "name": "ARIELLY VITORIA RODRIGUES ALBINO LEITE",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 8,
      "texto": 11
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 692
  },
  {
    "numero": 4,
    "name": "ARTHUR GABRIEL BRAGA DE JESUS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 4,
      "texto": 6
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 693
  },
  {
    "numero": 5,
    "name": "ARTHUR HENRIQUE ALVES MARIN",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 694
  },
  {
    "numero": 6,
    "name": "HENRIQUE VENANCIO AMARAL",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 12,
      "texto": 18
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 695
  },
  {
    "numero": 7,
    "name": "IGOR GABRIEL CORREA DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 8,
      "texto": 10
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 696
  },
  {
    "numero": 8,
    "name": "KAYLAN MIGUEL FERREIRA DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 697
  },
  {
    "numero": 9,
    "name": "KEVIN HENRIQUE DA SILVA BARBOSA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 698
  },
  {
    "numero": 10,
    "name": "LORENZO DOS SANTOS ALVES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 8,
      "texto": 11
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 699
  },
  {
    "numero": 11,
    "name": "MIGUEL LUCCA ANACLETO VALERIO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 12,
      "texto": 23
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 700
  },
  {
    "numero": 12,
    "name": "SEBASTHYAN BENYCIO NEVES DA SILVA MACARINI",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 8,
      "texto": 12
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 701
  },
  {
    "numero": 14,
    "name": "WENDELL LUCCA DOS SANTOS MARCONDES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 9,
      "texto": 11
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 702
  },
  {
    "numero": 15,
    "name": "ALICE DOS SANTOS SALES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 4,
      "texto": 6
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 5,
    "id": 703
  },
  {
    "numero": 16,
    "name": "VALENTINA EMANUELLE ROSA BRAGA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 8,
      "texto": 9
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 5,
    "id": 704
  },
  {
    "numero": 19,
    "name": "GABRIEL HENRIQUE FERREIRA DELMONDES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 5,
      "texto": 8
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 5,
    "id": 705
  },
  {
    "numero": 20,
    "name": "ANA LAURA ANANIAS DE ASSIS DIAS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 13,
      "pseudopalavras": 2,
      "texto": 3
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 5,
    "id": 706
  },
  {
    "numero": 2,
    "name": "ANALU GABRIELLY FERREIRA GOMES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 4,
      "texto": 11
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 707
  },
  {
    "numero": 3,
    "name": "DAVI ENRICO BRAGA ALVES DE SOUZA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 708
  },
  {
    "numero": 4,
    "name": "DERICK MOREIRA DOS SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 13,
      "texto": 33
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 709
  },
  {
    "numero": 5,
    "name": "ESTER FERMINO DOS SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 710
  },
  {
    "numero": 7,
    "name": "HELOISA VITORIA ANACLETO RAMOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 711
  },
  {
    "numero": 8,
    "name": "LAZARO SOUSA DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 8,
      "texto": 20
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 712
  },
  {
    "numero": 10,
    "name": "LUIS GUILHERME MODESTO LIMA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 713
  },
  {
    "numero": 11,
    "name": "LUIZ MIGUEL ELIZIARIO PEREIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 714
  },
  {
    "numero": 12,
    "name": "LUKAS GABRIEL LOPES DOS SANTOS DIAS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 715
  },
  {
    "numero": 13,
    "name": "MARIA VITORIA MOREIRA AFONSO LANDIM",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 716
  },
  {
    "numero": 14,
    "name": "NATHANIEL CORREA DO NASCIMENTO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 717
  },
  {
    "numero": 15,
    "name": "RUAN GABRYEL DOS REIS CORREA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 718
  },
  {
    "numero": 17,
    "name": "VITORIA GABRYELLE MARCONDES DE JESUS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 0,
      "texto": 5
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 719
  },
  {
    "numero": 18,
    "name": "WILIAN MATHEUS SILVA DE OLIVEIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 2,
      "texto": 9
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 720
  },
  {
    "numero": 19,
    "name": "DAVI MURILLO SOARES MOREIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 721
  },
  {
    "numero": 20,
    "name": "YASMIN RAFAELLA FERREIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 722
  },
  {
    "numero": 22,
    "name": "ANA LIVIA DA COSTA FERREIRA SANTIAGO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 723
  },
  {
    "numero": 23,
    "name": "HELLENA DE PAULA MARINHO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 10,
      "texto": 9
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 724
  },
  {
    "numero": 3,
    "name": "ANNA ALICY DE OLIVEIRA FERREIRA DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 725
  },
  {
    "numero": 4,
    "name": "ANNA MIRELLA VIEIRA DE BRITO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 1,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 726
  },
  {
    "numero": 6,
    "name": "ANTHONNY MIGUEL FERREIRA DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 727
  },
  {
    "numero": 8,
    "name": "GABRIELA LEITE PEREIRA DE SOUZA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 728
  },
  {
    "numero": 10,
    "name": "HELLOA PAULINA FERREIRA OLIVEIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 5,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 729
  },
  {
    "numero": 12,
    "name": "JOAO MIGUEL DA SILVA MELLO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 730
  },
  {
    "numero": 14,
    "name": "LORENZO MATHIAS DOS SANTOS ALVES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 731
  },
  {
    "numero": 15,
    "name": "LUIZ MIGUEL AMORIM MARCONDES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 6,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 732
  },
  {
    "numero": 16,
    "name": "MARIA ALICE DE ALMEIDA ARAUJO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 99,
      "pseudopalavras": 4,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 733
  },
  {
    "numero": 17,
    "name": "MATHEUS HENRIQUE DA SILVA PALENCA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 734
  },
  {
    "numero": 19,
    "name": "MIGUEL BASSI DA SILVA NASCIMENTO MAGINA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 5,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 735
  },
  {
    "numero": 20,
    "name": "SARAH GABRIELLY DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 736
  },
  {
    "numero": 22,
    "name": "SAMUEL CARMO NAZARE DOS SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 737
  },
  {
    "numero": 23,
    "name": "MIGUEL HENRIQUE RODRIGUES CESAR DE OLIVEIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 738
  },
  {
    "numero": 24,
    "name": "SOPHIA GABRIELY DOS SANTOS SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 739
  },
  {
    "numero": 25,
    "name": "BRYAN VINICIUS ALVES LOPES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 740
  },
  {
    "numero": 26,
    "name": "ISABELLA SILVA QUEIROZ",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 2,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 741
  },
  {
    "numero": 27,
    "name": "PYETRO HENRIQUE TEODORO FERRAZ",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 742
  },
  {
    "numero": 1,
    "name": "ALLANA LUIZA ROSA DE AZEVEDO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 2,
      "texto": 10
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 1,
    "id": 743
  },
  {
    "numero": 3,
    "name": "ANTHONY JOAQUIM DA ENCARNAÇAO MARQUES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 2,
    "id": 744
  },
  {
    "numero": 4,
    "name": "BRAIAN NOAN TURINO ANTUNES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 3,
      "texto": 6
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 2,
    "id": 745
  },
  {
    "numero": 5,
    "name": "BRENO GABRIEL AMORIM MARCONDES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 3,
    "id": 746
  },
  {
    "numero": 7,
    "name": "EDWARD SZABÔ ALBISSU DE CAMPOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 3,
    "id": 747
  },
  {
    "numero": 8,
    "name": "EMANUELLY MUCCI MATIAS FERREIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 2,
      "texto": 16
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 4,
    "id": 748
  },
  {
    "numero": 9,
    "name": "HELENA MANUELA LOBO DOS SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 21,
      "texto": 40
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 4,
    "id": 749
  },
  {
    "numero": 10,
    "name": "HELLOA BEATRIZ DOS SANTOS FERREIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 4,
    "id": 750
  },
  {
    "numero": 11,
    "name": "JOAQUIM GABRIEL CARVALHO DOS SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 5,
    "id": 751
  },
  {
    "numero": 12,
    "name": "KAMILLY DOS SANTOS RIFA ALVES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 8,
      "texto": 25
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 5,
    "id": 752
  },
  {
    "numero": 13,
    "name": "LOHAN VICTOR ESTEVES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 5,
    "id": 753
  },
  {
    "numero": 14,
    "name": "MARIA ALICIA DE PAULA BASSANELI",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 20,
      "texto": 65
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 6,
    "id": 754
  },
  {
    "numero": 15,
    "name": "MARIA GABRIELE SOUZA DE AQUINO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 11,
      "pseudopalavras": 4,
      "texto": 10
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 6,
    "id": 755
  },
  {
    "numero": 16,
    "name": "MARIAH AVELAR SOUZA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 4,
      "texto": 24
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 7,
    "id": 756
  },
  {
    "numero": 17,
    "name": "TAMILY VITORIA DO AMARAL LEANDRO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 15,
      "texto": 33
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 7,
    "id": 757
  },
  {
    "numero": 18,
    "name": "THALLIS DA SILVA LOPES OLIVEIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 7,
    "id": 758
  },
  {
    "numero": 19,
    "name": "ANTHONELLA VALENTINA DOS SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 4,
      "texto": 10
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 8,
    "id": 759
  },
  {
    "numero": 24,
    "name": "EMANUELLY GOUVEA DE JESUS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 2,
      "texto": 10
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 8,
    "id": 760
  },
  {
    "numero": 25,
    "name": "AGATHA SOFIA MARTINS SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 8,
    "id": 761
  },
  {
    "numero": 26,
    "name": "ALICE LEMES DOS SANTOS DANTAS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 9,
    "id": 762
  },
  {
    "numero": 27,
    "name": "ARTHUR FILIPE NICOLINO FARIA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO E",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 9,
    "id": 763
  },
  {
    "numero": 2,
    "name": "DAVI LUCAS TEIXEIRA DOS SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 1,
    "id": 764
  },
  {
    "numero": 3,
    "name": "DAVI MIGUEL NOGUEIRA RIBEIRO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 4,
      "texto": 9
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 1,
    "id": 765
  },
  {
    "numero": 5,
    "name": "HILLARY KAWANY DAVID PINTO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 6,
      "texto": 16
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 1,
    "id": 766
  },
  {
    "numero": 6,
    "name": "ISAIAS DE SOUZA MERIGHI",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 4,
      "texto": 8
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 2,
    "id": 767
  },
  {
    "numero": 7,
    "name": "JOÃO LUCAS LOPES DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 2,
    "id": 768
  },
  {
    "numero": 8,
    "name": "JOAO MIGUEL DOS SANTOS FERREIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 2,
    "id": 769
  },
  {
    "numero": 9,
    "name": "JOAO PEDRO RIFA LUIZ ANTONIO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 2,
    "id": 770
  },
  {
    "numero": 10,
    "name": "KAUE JUNIOR SANTOS DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 5,
      "texto": 19
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 3,
    "id": 771
  },
  {
    "numero": 11,
    "name": "KIMBERLLY EMANUELLE MARCONDES DOS SANTOS RAMOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 3,
      "texto": 7
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 3,
    "id": 772
  },
  {
    "numero": 12,
    "name": "LORENZO MIGUEL GALVAO MARCONDES DOS SANTOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 3,
    "id": 773
  },
  {
    "numero": 13,
    "name": "MARIA CLARA GONCALVES CYPRIANO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 4,
    "id": 774
  },
  {
    "numero": 16,
    "name": "MELISSA VITORIA SABINO RAMOS DA SILVA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 4,
    "id": 775
  },
  {
    "numero": 17,
    "name": "MIGUEL RUBENS DE SOUZA VIANA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 4,
    "id": 776
  },
  {
    "numero": 18,
    "name": "MIRELLA VITORIA SANTOS OLIVEIRA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 4,
    "id": 777
  },
  {
    "numero": 20,
    "name": "YAN VICTOR MACHADO",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 4,
      "texto": 14
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 4,
    "id": 778
  },
  {
    "numero": 23,
    "name": "AGATHA FERNANDA PIRES GODOY",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 5,
    "id": 779
  },
  {
    "numero": 24,
    "name": "YURI GABRIEL DOS SANTOS MORAES",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 5,
      "texto": 8
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 5,
    "id": 780
  },
  {
    "numero": 25,
    "name": "TUANNY GALDINO PIMENTEL",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 5,
    "id": 781
  },
  {
    "numero": 26,
    "name": "SAMUEL LUCAS PEREIRA RAMOS",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 5,
    "id": 782
  },
  {
    "numero": 27,
    "name": "AGATHA VALENTYNA NAKAGAWA DE FARIA",
    "escola": "João Kolenda Lemos, Prof.",
    "turma": "1º ANO F",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "João Kolenda Lemos, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 6,
    "id": 783
  },
  {
    "numero": 1,
    "name": "ALLANA EMANUELA ALVARELLO CUBA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 7,
      "texto": 17
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 784
  },
  {
    "numero": 4,
    "name": "GABRIEL OLIVEIRA NUNES DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 2,
      "texto": 4
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 785
  },
  {
    "numero": 5,
    "name": "HELENA ALVES DE SOUZA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 11,
      "texto": 28
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 786
  },
  {
    "numero": 6,
    "name": "HENRICO MACHADO DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 14,
      "pseudopalavras": 4,
      "texto": 12
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 787
  },
  {
    "numero": 8,
    "name": "INACIO SANT'ANA PIROTE",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 788
  },
  {
    "numero": 10,
    "name": "JOSE MIGUEL DOS SANTOS LEMES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 19,
      "texto": 33
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 789
  },
  {
    "numero": 11,
    "name": "KAUA MIGUEL OLIVEIRA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 11,
      "pseudopalavras": 2,
      "texto": 3
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 790
  },
  {
    "numero": 13,
    "name": "LUCCA ANGELO DA SILVA FERNANDES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 7,
      "texto": 23
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 791
  },
  {
    "numero": 14,
    "name": "MARIA ANTONELLA PARENTE CARVALHO CORREA LEITE",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 3,
      "texto": 10
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 792
  },
  {
    "numero": 15,
    "name": "MARIA TEREZA FERREIRA E SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 4,
      "texto": 10
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 793
  },
  {
    "numero": 16,
    "name": "MIGUEL VITOR SOARES DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 5,
      "texto": 20
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 794
  },
  {
    "numero": 17,
    "name": "SOPHIA LUIZA DE CARVALHO DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 12,
      "texto": 58
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 795
  },
  {
    "numero": 21,
    "name": "YASMIN GABRIELLY DIAS DO PRADO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 14,
      "texto": 34
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 796
  },
  {
    "numero": 22,
    "name": "GIOVANNA OLIVEIRA DE SOUZA SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 2,
      "texto": 10
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 797
  },
  {
    "numero": 24,
    "name": "THÉO BASSANELLI PINHEIROS RAMOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 13,
      "pseudopalavras": 4,
      "texto": 11
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 798
  },
  {
    "numero": 25,
    "name": "AYLLA MARIA CASTILHO GODOI",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 0,
      "texto": 8
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 799
  },
  {
    "numero": 1,
    "name": "ANA BEATRIZ DE JESUS OLIVEIRA FERNANDES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 3,
      "texto": 37
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 800
  },
  {
    "numero": 2,
    "name": "ANTHONY SILVA REIS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 109
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 801
  },
  {
    "numero": 3,
    "name": "BERNARDO DOS SANTOS GOMES DA CRUZ",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 109
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 802
  },
  {
    "numero": 4,
    "name": "DAVI TEIXEIRA DOS REIS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 3,
      "texto": 0
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 803
  },
  {
    "numero": 5,
    "name": "EDSON SAMUEL GUEDES DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 10,
      "texto": 47
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 804
  },
  {
    "numero": 6,
    "name": "ELOA VITORIA HARUMI LUGLI KAMADA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 20,
      "texto": 40
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 805
  },
  {
    "numero": 7,
    "name": "ENZO GABRIEL FERREIRA FERNANDES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 3,
      "texto": 20
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 806
  },
  {
    "numero": 8,
    "name": "HELENA ALVES DA SILVA CARDOSO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 10,
      "texto": 34
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 807
  },
  {
    "numero": 9,
    "name": "JHULLY VITORIA RELOGEL BONIFACIO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 10,
      "texto": 47
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 808
  },
  {
    "numero": 10,
    "name": "JORGE HENRIQUE MONTEIRO DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 11,
      "texto": 16
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 809
  },
  {
    "numero": 11,
    "name": "LORENA MAXIMO DOS SANTOS CHAGAS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 109
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 810
  },
  {
    "numero": 12,
    "name": "MARIA ALICE DE ALMEIDA SOUZA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 15,
      "texto": 37
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 811
  },
  {
    "numero": 13,
    "name": "MARIA ALICE DOS SANTOS FELIX RIBEIRO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 109
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 812
  },
  {
    "numero": 14,
    "name": "MARIA LUIZA MARCONDES SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 4,
      "texto": 50
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 813
  },
  {
    "numero": 15,
    "name": "MURILLO DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 3,
      "texto": 10
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 814
  },
  {
    "numero": 16,
    "name": "PIETRO CORREIA DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 5,
      "texto": 56
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 815
  },
  {
    "numero": 17,
    "name": "POLIANA DE FRANÇA CESARINO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 5,
      "texto": 10
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 816
  },
  {
    "numero": 18,
    "name": "SAMUEL MOTA BASTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 39,
      "texto": 108
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 817
  },
  {
    "numero": 19,
    "name": "SOPHIA VITORIA DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 5,
      "texto": 23
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 818
  },
  {
    "numero": 20,
    "name": "YTALLO KAUAN DE ARAUJO LEITE",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 3,
      "texto": 10
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 819
  },
  {
    "numero": 4,
    "name": "ANTHONY LIMA DA COSTA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 23,
      "texto": 18
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 820
  },
  {
    "numero": 5,
    "name": "BEIJAMIN LUCAS ANDRADE DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 14,
      "pseudopalavras": 2,
      "texto": 1
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 821
  },
  {
    "numero": 6,
    "name": "CECILIA OLIVEIRA TEIXEIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 29,
      "texto": 109
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 822
  },
  {
    "numero": 7,
    "name": "DAVI CARLOS GOMES DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 3,
      "texto": 4
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 823
  },
  {
    "numero": 8,
    "name": "ETHAN KALEO DOS SANTOS PEREIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 1,
      "texto": 4
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 824
  },
  {
    "numero": 9,
    "name": "HELENA VALENTE VELASCO AZEVEDO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 825
  },
  {
    "numero": 10,
    "name": "HELOISA SOUSA DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 826
  },
  {
    "numero": 11,
    "name": "HENRIQUE VIEIRA GABRIEL DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 1,
      "texto": 1
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 827
  },
  {
    "numero": 12,
    "name": "JOAO FELIPE DE CARVALHO LEONEL VEIGA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 828
  },
  {
    "numero": 13,
    "name": "KYLIAN THIERRY DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 1,
      "texto": 0
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 829
  },
  {
    "numero": 14,
    "name": "LUIZ VICTOR ALVES CABRAL",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 830
  },
  {
    "numero": 15,
    "name": "MIGUEL APARECIDO DE FARIA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 831
  },
  {
    "numero": 16,
    "name": "OLIVIA GAMBOA ABREU",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 10,
      "texto": 11
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 832
  },
  {
    "numero": 18,
    "name": "RAQUEL FAUSTINO PEREIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 5,
      "texto": 28
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 833
  },
  {
    "numero": 22,
    "name": "MARIA HELOÍSA DOLORES DOS SANTOS FREITAS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 25,
      "texto": 82
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 834
  },
  {
    "numero": 1,
    "name": "ALICE MEDEIROS SALES DINIZ",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 4,
      "texto": 5
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 835
  },
  {
    "numero": 2,
    "name": "ANA LAURA DE OLIVEIRA BISSOLI",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 18,
      "pseudopalavras": 23,
      "texto": 30
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 836
  },
  {
    "numero": 3,
    "name": "ANAH KELRIN DA SILVA MONTEIRO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 40,
      "pseudopalavras": 29,
      "texto": 80
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 837
  },
  {
    "numero": 5,
    "name": "BELLANY MORAES DOS SANTOS DE SOUZA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 12,
      "pseudopalavras": 15,
      "texto": 19
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 838
  },
  {
    "numero": 6,
    "name": "BENICIO JOSE DOS SANTOS RAMOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 2,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 839
  },
  {
    "numero": 8,
    "name": "BRYAN HENRICO FERREIRA CAMPOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 12,
      "pseudopalavras": 17,
      "texto": 25
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 840
  },
  {
    "numero": 9,
    "name": "DANIEL SANT ANNA DE MORAIS ALVES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 22,
      "texto": 2
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 841
  },
  {
    "numero": 10,
    "name": "EDUARDO DOS SANTOS NASCIMENTO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 30,
      "texto": 89
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 842
  },
  {
    "numero": 11,
    "name": "GUILHERME VITORINO DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 99,
      "pseudopalavras": 40,
      "texto": 109
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 843
  },
  {
    "numero": 12,
    "name": "JOAQUIM GUILHERME DE FREITAS SILVA EUGENIO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 38,
      "texto": 107
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 844
  },
  {
    "numero": 13,
    "name": "LORENZO MIGUEL LEMES DOS SANTOS ALEXANDRE",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 8,
      "texto": 12
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 845
  },
  {
    "numero": 14,
    "name": "MARIANA DE PAULA PIMENTEL TEIXEIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 34,
      "texto": 90
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 846
  },
  {
    "numero": 15,
    "name": "MARINA SOARES MATEUS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 35,
      "texto": 90
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 847
  },
  {
    "numero": 17,
    "name": "MURILLO HENRIQUE SOUZA MARTINI",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 99,
      "pseudopalavras": 33,
      "texto": 100
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 848
  },
  {
    "numero": 18,
    "name": "PEDRO HENRIQUE DE CASTRO NEVES DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 11,
      "texto": 23
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 849
  },
  {
    "numero": 19,
    "name": "SOPHIA BEATRIZ CARDOSO FERREIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 5,
      "texto": 6
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 850
  },
  {
    "numero": 20,
    "name": "YKARO MARQUES DE OLIVEIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO D",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 57,
      "pseudopalavras": 38,
      "texto": 100
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 851
  },
  {
    "numero": 3,
    "name": "ANAEL VICTOR SILVA GUATURA TELLEZ",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 1,
    "id": 852
  },
  {
    "numero": 4,
    "name": "ANTONELLA HELENA LAMEU SATURNINO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 10,
      "texto": 29
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 1,
    "id": 853
  },
  {
    "numero": 5,
    "name": "ARTHUR ALVES DE SOUZA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 6,
      "texto": 27
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 1,
    "id": 854
  },
  {
    "numero": 6,
    "name": "BERNARDO DANTAS ALVES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 10,
      "texto": 16
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 1,
    "id": 855
  },
  {
    "numero": 8,
    "name": "ELOA REZENDE LEMES DE ASSIS BARROS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 5,
      "texto": 8
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 2,
    "id": 856
  },
  {
    "numero": 9,
    "name": "ESTHER VITORIA OLIVEIRA COSTA SOARES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 8,
      "texto": 19
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 2,
    "id": 857
  },
  {
    "numero": 10,
    "name": "JOAO PEDRO SANTOS NEVES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 17,
      "texto": 47
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 2,
    "id": 858
  },
  {
    "numero": 11,
    "name": "KAUAN DOS SANTOS ROSA CASEMIRO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 16,
      "texto": 38
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 2,
    "id": 859
  },
  {
    "numero": 12,
    "name": "LARA RAMOS DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 14,
      "texto": 27
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 2,
    "id": 860
  },
  {
    "numero": 13,
    "name": "LORENZO MARCONDES REZENDE GOMES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 14,
      "texto": 26
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 2,
    "id": 861
  },
  {
    "numero": 14,
    "name": "MARIA VITORIA PEREIRA CARDOSO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 3,
    "id": 862
  },
  {
    "numero": 15,
    "name": "MARIANA FARIA DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 16,
      "texto": 27
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 3,
    "id": 863
  },
  {
    "numero": 16,
    "name": "MURILO HENRIQUE DE OLIVEIRA SOUSA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 8,
      "texto": 19
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 3,
    "id": 864
  },
  {
    "numero": 17,
    "name": "PEDRO LUCAS RITTON PONCIANO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 16,
      "texto": 52
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 3,
    "id": 865
  },
  {
    "numero": 18,
    "name": "REBECA DOS SANTOS VICENTE",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 12,
      "texto": 23
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 3,
    "id": 866
  },
  {
    "numero": 19,
    "name": "SOPHIA BEZERRA DE OLIVEIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 17,
      "texto": 50
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 3,
    "id": 867
  },
  {
    "numero": 20,
    "name": "THEO KALEBE DE FREITAS OLIVEIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 6,
      "texto": 18
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 3,
    "id": 868
  },
  {
    "numero": 21,
    "name": "VITORIA VALENTINA COELHO DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 1,
      "texto": 10
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 4,
    "id": 869
  },
  {
    "numero": 22,
    "name": "YAN LUIZ DOS SANTOS ARAUJO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 4,
    "id": 870
  },
  {
    "numero": 23,
    "name": "MIGUEL OLIVEIRA DOS REIS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO E",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO E.pdf",
    "sourcePage": 4,
    "id": 871
  },
  {
    "numero": 2,
    "name": "ARYELLE BEATRIZ DE PAULA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 18,
      "texto": 50
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 1,
    "id": 872
  },
  {
    "numero": 3,
    "name": "BELLA RODRIGUES DE SOUZA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 2,
      "pseudopalavras": 2,
      "texto": 6
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 1,
    "id": 873
  },
  {
    "numero": 4,
    "name": "BRENO CARVALHO DE SOUZA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 28,
      "texto": 47
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 1,
    "id": 874
  },
  {
    "numero": 6,
    "name": "HEITOR THOMAS ROLIM BORGES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 1,
    "id": 875
  },
  {
    "numero": 8,
    "name": "ISABELA FERREIRA DE OLIVEIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 21,
      "pseudopalavras": 11,
      "texto": 25
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 2,
    "id": 876
  },
  {
    "numero": 9,
    "name": "ISADORA DE GODOY MELO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 19,
      "texto": 37
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 2,
    "id": 877
  },
  {
    "numero": 10,
    "name": "ISIS VALENTINA DA SILVA COSTA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 2,
    "id": 878
  },
  {
    "numero": 11,
    "name": "JONAS SANTOS DO NASCIMENTO",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 29,
      "texto": 47
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 2,
    "id": 879
  },
  {
    "numero": 12,
    "name": "JOSE VITOR DA SILVA SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 21,
      "texto": 44
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 2,
    "id": 880
  },
  {
    "numero": 13,
    "name": "KETHELYN MYRELLA LEMES DOS SANTOS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 2,
    "id": 881
  },
  {
    "numero": 14,
    "name": "LORENZO FERNANDES DE LIMA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 28,
      "texto": 54
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 2,
    "id": 882
  },
  {
    "numero": 15,
    "name": "MARIANA SANTOS CABRAL",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 4
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 3,
    "id": 883
  },
  {
    "numero": 16,
    "name": "MATHEUS VIEIRA DE ALMEIDA GONÇALVES",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 109
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 3,
    "id": 884
  },
  {
    "numero": 17,
    "name": "MIGUEL RODRIGUES DOS REIS",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 17,
      "texto": 38
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 3,
    "id": 885
  },
  {
    "numero": 18,
    "name": "RAYANE VITORIA DA SILVA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 20,
      "texto": 54
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 3,
    "id": 886
  },
  {
    "numero": 19,
    "name": "RODRIGO JOSE DE ALMEIDA FERREIRA JUNIOR",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 21,
      "texto": 37
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 3,
    "id": 887
  },
  {
    "numero": 20,
    "name": "SELENA POPOASKI FERREIRA",
    "escola": "Joaquim Pereira Silva, Prof.",
    "turma": "1º ANO F",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 31,
      "texto": 83
    },
    "sourceFile": "Joaquim Pereira Silva, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO F.pdf",
    "sourcePage": 3,
    "id": 888
  },
  {
    "numero": 1,
    "name": "AGATHA BEATRIZ ALVES OTTO DA CRUZ",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 889
  },
  {
    "numero": 2,
    "name": "ALLYSON RUAN DA SILVA OLIVEIRA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 890
  },
  {
    "numero": 3,
    "name": "ANA BEATRIZ DE LIRA SANTOS",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 17,
      "texto": 56
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 891
  },
  {
    "numero": 4,
    "name": "ANA BEATRIZ MARIN SALGADO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 3
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 892
  },
  {
    "numero": 5,
    "name": "ARTHUR GABRIEL DE SOUZA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 893
  },
  {
    "numero": 6,
    "name": "CHLOE DA SILVA PEREIRA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 13,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 894
  },
  {
    "numero": 7,
    "name": "DAVI MIGUEL ALVES DOS SANTOS",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 895
  },
  {
    "numero": 8,
    "name": "DEREK NOBLAC DE SOUZA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 13,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 896
  },
  {
    "numero": 9,
    "name": "EMANUEL JOSE DE FARIAS ALVES FERREIRA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 7,
      "texto": 20
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 897
  },
  {
    "numero": 10,
    "name": "ESTHER AMARAL PEDROSA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 898
  },
  {
    "numero": 11,
    "name": "GAEL LUIS VELOZO WIGAND",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 1,
      "texto": 20
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 899
  },
  {
    "numero": 12,
    "name": "HELENA RAMOS SANCHES",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 900
  },
  {
    "numero": 13,
    "name": "ISABELLA VITORIA OLIVEIRA DE LIMA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 901
  },
  {
    "numero": 16,
    "name": "LUCAS CAVALIERI DE LIMA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 902
  },
  {
    "numero": 17,
    "name": "MARIA LUIZA OLIVEIRA DE SOUZA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 903
  },
  {
    "numero": 21,
    "name": "SAMUEL FELIPE FERNANDES CLARO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 904
  },
  {
    "numero": 22,
    "name": "SOPHIA CARVALHO TANA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 905
  },
  {
    "numero": 24,
    "name": "WALLACE AUGUSTO ALVES CARROS",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 906
  },
  {
    "numero": 25,
    "name": "ARTHUR VINICIUS CARVALHO FERRAZ",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 907
  },
  {
    "numero": 26,
    "name": "LUCCA GABRIEL CARVALHO FERRAZ",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 908
  },
  {
    "numero": 28,
    "name": "BERNARDO HENRIQUE ALVES VIEIRA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 909
  },
  {
    "numero": 29,
    "name": "MARCOS ANTONIO GONCALVES DE LIMA ALMEIDA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 910
  },
  {
    "numero": 30,
    "name": "NICOLLAS DAVI VIALTA DO NASCIMENTO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 911
  },
  {
    "numero": 31,
    "name": "AYSLA LAURA RAUEN DA CONCEIÇÃO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 912
  },
  {
    "numero": 1,
    "name": "ADRIAN HENRIQUE DE SOUZA LIMA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 24,
      "texto": 59
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 913
  },
  {
    "numero": 2,
    "name": "ADRYAN DATE DE LIMA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 914
  },
  {
    "numero": 3,
    "name": "ALICIA EMANUELLY ALMEIDA SANTOS",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 7,
      "texto": 14
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 915
  },
  {
    "numero": 4,
    "name": "ANTONELLA DOS SANTOS SILVA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 9,
      "pseudopalavras": 5,
      "texto": 14
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 916
  },
  {
    "numero": 5,
    "name": "ARTHUR MIGUEL RODRIGUES DE MELO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 8,
      "texto": 47
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 917
  },
  {
    "numero": 7,
    "name": "CLARISSE EMANUELLY DA SILVA MATIAS",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 6,
      "pseudopalavras": 2,
      "texto": 7
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 918
  },
  {
    "numero": 8,
    "name": "ELOA PYETRA MAYER BRANDINO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 6,
      "pseudopalavras": 4,
      "texto": 9
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 919
  },
  {
    "numero": 9,
    "name": "EMANUELLY SANTOS MOREIRA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 8,
      "pseudopalavras": 3,
      "texto": 4
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 920
  },
  {
    "numero": 10,
    "name": "HELLENA FERREIRA SOARES DE PAULA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 921
  },
  {
    "numero": 11,
    "name": "ISAQUE ROBERT DE OLIVEIRA BARBOZA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 6,
      "texto": 16
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 922
  },
  {
    "numero": 12,
    "name": "KELLY MALHEIROS GUIMARAES",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 923
  },
  {
    "numero": 13,
    "name": "LORENA DE ALMEIDA CRUZ",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 8,
      "pseudopalavras": 7,
      "texto": 13
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 924
  },
  {
    "numero": 14,
    "name": "LUNA GONCALVES FEITOSA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 5,
      "texto": 20
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 925
  },
  {
    "numero": 15,
    "name": "MIKAELLY VITORIA PORFIRIO DE JESUS",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 8,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 926
  },
  {
    "numero": 17,
    "name": "PEDRO HENRIQUE MORAIS PEREIRA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 8,
      "pseudopalavras": 8,
      "texto": 17
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 927
  },
  {
    "numero": 18,
    "name": "PEDRO KAUAN MOREIRA RODRIGUES",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 5,
      "texto": 14
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 928
  },
  {
    "numero": 19,
    "name": "RICARDO ANTHONY RANGEL BARBOSA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 15,
      "texto": 29
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 929
  },
  {
    "numero": 20,
    "name": "ROBERTA DA SILVA LAMIN BRANCO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 6,
      "pseudopalavras": 4,
      "texto": 11
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 930
  },
  {
    "numero": 21,
    "name": "VALENTINA MARTINS GALVAO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 2,
      "texto": 3
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 931
  },
  {
    "numero": 22,
    "name": "VALENTINA ZOE DE SOUZA MOREIRA",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 12,
      "pseudopalavras": 6,
      "texto": 9
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 932
  },
  {
    "numero": 23,
    "name": "VITORIA MARTINS GALVAO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 2,
      "texto": 3
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 933
  },
  {
    "numero": 24,
    "name": "WASHINGTON HENRIQUE EUFROZINO",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 8,
      "pseudopalavras": 2,
      "texto": 6
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 934
  },
  {
    "numero": 25,
    "name": "ZOE KAROLYNE ALVES CESARIO DOS SANTOS",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 3,
      "texto": 5
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 935
  },
  {
    "numero": 26,
    "name": "MIRELLA VITORIA DO CARMO MAGALHAES",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 936
  },
  {
    "numero": 27,
    "name": "FELIPE ANTUNES DA SILVA MARCONDES",
    "escola": "José Gonçalves da Silva (Seu Juquinha)",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 11,
      "texto": 28
    },
    "sourceFile": "José Gonçalves da Silva (Seu Juquinha) EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 937
  },
  {
    "numero": 1,
    "name": "AGATHA MICAELLY VIALTA BAIA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 6,
      "pseudopalavras": 4,
      "texto": 9
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 938
  },
  {
    "numero": 2,
    "name": "ARTHUR VINICIUS MOREIRA SANTANNA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 1,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 939
  },
  {
    "numero": 4,
    "name": "ENZO DANIEL DE ARAUJO FRANCO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 940
  },
  {
    "numero": 5,
    "name": "JAMILLY NICOLI FERREIRA OLIVEIRA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 14,
      "pseudopalavras": 2,
      "texto": 2
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 941
  },
  {
    "numero": 6,
    "name": "JULIA DOS SANTOS VALERIO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 21,
      "pseudopalavras": 11,
      "texto": 26
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 942
  },
  {
    "numero": 8,
    "name": "LORENNA RIBEIRO MOTTA DE OLIVEIRA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 64,
      "pseudopalavras": 4,
      "texto": 8
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 943
  },
  {
    "numero": 9,
    "name": "LUCAS GABRIEL DA SILVA SANTOS",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 21,
      "pseudopalavras": 11,
      "texto": 25
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 944
  },
  {
    "numero": 10,
    "name": "MARCOS GABRIEL LUCIANO LOPES",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 23,
      "pseudopalavras": 9,
      "texto": 24
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 945
  },
  {
    "numero": 11,
    "name": "MARIA JULIA MARTIMIANO LIVRAMENTO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 3,
      "texto": 9
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 946
  },
  {
    "numero": 12,
    "name": "MARIANNA GONCALVES LAURINDO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 12,
      "texto": 31
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 947
  },
  {
    "numero": 13,
    "name": "MELISSA FIGUEIREDO COSTA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 30,
      "pseudopalavras": 20,
      "texto": 39
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 948
  },
  {
    "numero": 14,
    "name": "NICKOLAS ANDREW RAMOS DE OLIVEIRA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 23,
      "pseudopalavras": 12,
      "texto": 25
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 949
  },
  {
    "numero": 15,
    "name": "VICTOR ARISTEU VIEIRA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 5,
      "texto": 19
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 950
  },
  {
    "numero": 17,
    "name": "GUILHERME DOS REIS CORRÊA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 4,
      "texto": 8
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 951
  },
  {
    "numero": 18,
    "name": "ENZO GABRIEL DA SILVA ROCHA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 5,
      "texto": 32
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 952
  },
  {
    "numero": 19,
    "name": "BRAYAN REZENDE",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 41,
      "pseudopalavras": 23,
      "texto": 53
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 953
  },
  {
    "numero": 20,
    "name": "JOSÉ GABRIEL DOS SANTOS BERNARDINO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 3,
      "texto": 11
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 954
  },
  {
    "numero": 21,
    "name": "LUCAS WILLIAN INACIO DE OLIVEIRA MOREIRA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 3,
      "texto": 9
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 955
  },
  {
    "numero": 1,
    "name": "ANA LUA GALVÃO DE PAULA OLIVEIRA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 18,
      "texto": 47
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 956
  },
  {
    "numero": 2,
    "name": "ANA YASMIM ALMEIDA SILVA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 957
  },
  {
    "numero": 4,
    "name": "ARTHUR GREGORIO DOS SANTOS",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 2,
      "texto": 6
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 958
  },
  {
    "numero": 5,
    "name": "BARBARA VITORIA DE OLIVEIRA TEIXEIRA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 2,
      "texto": 2
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 959
  },
  {
    "numero": 6,
    "name": "ELIAS SANTOS FALCAO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 10,
      "texto": 40
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 960
  },
  {
    "numero": 8,
    "name": "HEITOR DA SILVA CAMPOS",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 33,
      "pseudopalavras": 15,
      "texto": 28
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 961
  },
  {
    "numero": 9,
    "name": "HENRIQUE ADRIANO SANTOS DA SILVA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 9,
      "texto": 16
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 962
  },
  {
    "numero": 10,
    "name": "KHEFERA MOURA VALENCIO DOS SANTOS",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 5,
      "texto": 16
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 963
  },
  {
    "numero": 12,
    "name": "LORENZO GABRIEL ROSA MACHADO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 964
  },
  {
    "numero": 13,
    "name": "LORENZO MARIO GOMES CAETANO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 21,
      "pseudopalavras": 14,
      "texto": 23
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 965
  },
  {
    "numero": 14,
    "name": "LUAN HENRIQUE FIALHO SOARES",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 966
  },
  {
    "numero": 15,
    "name": "LUIS PAULO GOMES DOS SANTOS",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 40,
      "texto": 82
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 967
  },
  {
    "numero": 16,
    "name": "LYS MARIA MENDES ALVES",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 109
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 968
  },
  {
    "numero": 17,
    "name": "MARIA EDUARDA VITORIA DOS SANTOS",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 27,
      "pseudopalavras": 14,
      "texto": 35
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 969
  },
  {
    "numero": 18,
    "name": "MIKAELY DOS SANTOS ROSA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 2,
      "texto": 2
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 970
  },
  {
    "numero": 2,
    "name": "ALICIA MIRELLY SALGADO DE MOURA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 971
  },
  {
    "numero": 3,
    "name": "ANTHONY MIGUEL MOREIRA DE OLIVEIRA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 0,
      "texto": 13
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 972
  },
  {
    "numero": 4,
    "name": "ARTHUR MIGUEL FERNANDES DA SILVA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 11,
      "pseudopalavras": 0,
      "texto": 17
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 973
  },
  {
    "numero": 5,
    "name": "DAVI LUCAS LIBERA DOURADO",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 974
  },
  {
    "numero": 6,
    "name": "ELLOA ALVES DOS SANTOS",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 0,
      "texto": 47
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 975
  },
  {
    "numero": 8,
    "name": "LEANDRO SAMUEL MORAES DA SILVA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 976
  },
  {
    "numero": 9,
    "name": "LUCAS MATOS MARQUES DE MOURA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 0,
      "texto": 78
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 977
  },
  {
    "numero": 10,
    "name": "MARIA KAROLINI VITORIA DOS SANTOS",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 24,
      "pseudopalavras": 0,
      "texto": 28
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 978
  },
  {
    "numero": 11,
    "name": "MAYTE FERMINO DA SILVA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 979
  },
  {
    "numero": 12,
    "name": "MIKAELL THALLES PEREIRA DE ARAUJO SAVITE",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 0,
      "texto": 36
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 980
  },
  {
    "numero": 13,
    "name": "NATHALY IARA RODRIGUES DE SALLES",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 0,
      "texto": 19
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 981
  },
  {
    "numero": 14,
    "name": "SARAH BARBOSA DE JESUS DOS SANTOS ELOI",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 0,
      "texto": 20
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 982
  },
  {
    "numero": 16,
    "name": "DERICK LUIS SILVA DE PAULA",
    "escola": "Julieta Reale Vieira, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 0,
      "texto": 32
    },
    "sourceFile": "Julieta Reale Vieira, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 983
  },
  {
    "numero": 1,
    "name": "DANILO YURI ONEY DA SILVA",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 17,
      "texto": 54
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 984
  },
  {
    "numero": 4,
    "name": "HEMILLY RIBEIRO VIEIRA",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 985
  },
  {
    "numero": 5,
    "name": "ISABELLA VICTORIA DELFINO TEIXEIRA",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 986
  },
  {
    "numero": 6,
    "name": "JOSE CAMILO NETO",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 23,
      "texto": 44
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 987
  },
  {
    "numero": 7,
    "name": "JOSE FELIPE GODOI NUNES",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 9,
      "texto": 28
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 988
  },
  {
    "numero": 12,
    "name": "LORENA VICTORIA SOARES FERREIRA",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 989
  },
  {
    "numero": 13,
    "name": "MARIA FERNANDA NERES ALVES",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 11,
      "texto": 21
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 990
  },
  {
    "numero": 15,
    "name": "RICHARD DIAS DE MATOS",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 16,
      "texto": 29
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 991
  },
  {
    "numero": 3,
    "name": "ENZO DA SILVA TEIXEIRA",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 10,
      "texto": 14
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 992
  },
  {
    "numero": 5,
    "name": "HELLOA GABRIELLY MARTINS DOS SANTOS",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 993
  },
  {
    "numero": 6,
    "name": "HELOISA FERREIRA AZEVEDO",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 32,
      "texto": 78
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 994
  },
  {
    "numero": 7,
    "name": "JOAO PEDRO BATISTA DOS SANTOS NASCIMENTO",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 995
  },
  {
    "numero": 10,
    "name": "LARA VITORIA OLIVEIRA DE SOUZA",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 7,
      "texto": 16
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 996
  },
  {
    "numero": 12,
    "name": "PEDRO HENRIQUE VIEIRA BUENO REIS",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 19,
      "texto": 34
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 997
  },
  {
    "numero": 14,
    "name": "SOFIA HELENA PEREIRA NASCIMENTO",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 20,
      "texto": 40
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 998
  },
  {
    "numero": 15,
    "name": "SOPHIA EMANUELLY FERREIRA",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 20,
      "texto": 40
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 999
  },
  {
    "numero": 16,
    "name": "VALENTINNA ELOA GONÇALVES SOARES",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 9,
      "pseudopalavras": 5,
      "texto": 4
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1000
  },
  {
    "numero": 17,
    "name": "VALENTY DE OLIVEIRA SILVA",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1001
  },
  {
    "numero": 18,
    "name": "VICTOR HUGO ISRAEL SANTOS",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 12,
      "texto": 23
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1002
  },
  {
    "numero": 20,
    "name": "MIGUEL DE PAULA ELBERT",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1003
  },
  {
    "numero": 22,
    "name": "SAMUEL POZZATI OLIVEIRA DE PAULA",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1004
  },
  {
    "numero": 24,
    "name": "LAYLA DE OLIVEIRA",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1005
  },
  {
    "numero": 25,
    "name": "DAVI LORENZO OLIVEIRA DE SOUZA",
    "escola": "Lauro Vicente de Azevedo",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 4,
      "texto": 6
    },
    "sourceFile": "Lauro Vicente de Azevedo EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1006
  },
  {
    "numero": 1,
    "name": "ANA CAROLINA VIEIRA RODRIGUES",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 4
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1007
  },
  {
    "numero": 3,
    "name": "DOUGLAS MIGUEL DA SILVA SANTOS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 18,
      "texto": 56
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1008
  },
  {
    "numero": 5,
    "name": "KALINE VITORIA RAMOS CONCEIÇAO",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 51,
      "pseudopalavras": 27,
      "texto": 67
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1009
  },
  {
    "numero": 6,
    "name": "KAMILLY VICTORIA DA SILVA FRANCO DA CUNHA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1010
  },
  {
    "numero": 7,
    "name": "KAUAN FERNANDES LEITE",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1011
  },
  {
    "numero": 8,
    "name": "LUCAS GABRIEL FERNANDES GALVAO",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1012
  },
  {
    "numero": 9,
    "name": "MIGUEL APARECIDO PIRES DOS SANTOS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1013
  },
  {
    "numero": 10,
    "name": "SAMYRA CASSIANO DOS SANTOS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 9,
      "texto": 32
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1014
  },
  {
    "numero": 11,
    "name": "VALENTINA BARBOSA MONTEIRO",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 10,
      "texto": 32
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1015
  },
  {
    "numero": 12,
    "name": "VALENTINA DA SILVA MATIAS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 13,
      "texto": 37
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1016
  },
  {
    "numero": 13,
    "name": "ZAHARA VALENTINA RAMOS CONCEIÇAO",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 7,
      "texto": 16
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1017
  },
  {
    "numero": 15,
    "name": "ENZO GABRIEL SARAIVA DE PAULA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1018
  },
  {
    "numero": 16,
    "name": "JOAO LUCAS MOREIRA DOS SANTOS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1019
  },
  {
    "numero": 17,
    "name": "ALLANA BEATRYZ BARBOSA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1020
  },
  {
    "numero": 19,
    "name": "ENZO GABRIEL DE OLIVEIRA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1021
  },
  {
    "numero": 20,
    "name": "HENRIQUE VELOZO BENETTI",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1022
  },
  {
    "numero": 21,
    "name": "CRYSTOPHER TAVARES ASSIS CARDENAS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1023
  },
  {
    "numero": 22,
    "name": "NOAH MANOEL BENEVIDES CHAVES",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 7,
      "texto": 19
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1024
  },
  {
    "numero": 1,
    "name": "DAVI DANIEL PEREIRA DOS SANTOS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 5,
      "texto": 33
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1025
  },
  {
    "numero": 3,
    "name": "GUSTAVO HENRIQUE PEREIRA DE PAULA BUENO",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 2,
      "texto": 4
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1026
  },
  {
    "numero": 4,
    "name": "ISABELLA DA SILVA RIBEIRO",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 2,
      "texto": 2
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1027
  },
  {
    "numero": 5,
    "name": "ISIS HELENA DE OLIVEIRA DOS SANTOS SILVA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 9,
      "texto": 21
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1028
  },
  {
    "numero": 7,
    "name": "KAUAN HENRIQUE AQUINO DE JESUS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 4,
      "texto": 16
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 5,
    "id": 1029
  },
  {
    "numero": 8,
    "name": "LOUISE VITORIA DE AQUINO PAZ",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 2,
      "texto": 4
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 6,
    "id": 1030
  },
  {
    "numero": 9,
    "name": "LUCA LUSTOSA SOARES RAIMUNDO",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 0,
      "texto": 2
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 7,
    "id": 1031
  },
  {
    "numero": 10,
    "name": "LUIZ CARLOS AQUINO DE ALMEIDA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 6,
      "pseudopalavras": 4,
      "texto": 6
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 7,
    "id": 1032
  },
  {
    "numero": 11,
    "name": "MATHEUS MOREIRA MORGADO",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 22,
      "texto": 67
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 8,
    "id": 1033
  },
  {
    "numero": 12,
    "name": "MICAELLA VITORIA PEREIRA MARQUES DE OLIVEIRA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 8,
    "id": 1034
  },
  {
    "numero": 13,
    "name": "MIRELLA LUARA DA SILVA ALMEIDA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 9,
    "id": 1035
  },
  {
    "numero": 14,
    "name": "SAMUEL AUGUSTO CAMARGO DE FARIA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 2,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 10,
    "id": 1036
  },
  {
    "numero": 15,
    "name": "SELLENA OHANA BARBOSA MARQUES",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 10,
    "id": 1037
  },
  {
    "numero": 16,
    "name": "SOPHIA FERNANDA MARINHO DA SILVA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 4,
      "texto": 9
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 11,
    "id": 1038
  },
  {
    "numero": 17,
    "name": "SOPHIA ISABELLY VIEIRA DE OLIVEIRA GOUVEA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 9,
      "pseudopalavras": 0,
      "texto": 3
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 12,
    "id": 1039
  },
  {
    "numero": 18,
    "name": "TIAGO DOMICIANO DA SILVA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 2,
      "texto": 4
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 13,
    "id": 1040
  },
  {
    "numero": 19,
    "name": "VICTOR EMANUEL DOS SANTOS COSTA",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 7,
      "texto": 19
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 14,
    "id": 1041
  },
  {
    "numero": 20,
    "name": "VICTOR MELO DO NASCIMENTO",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 4,
      "texto": 19
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 15,
    "id": 1042
  },
  {
    "numero": 21,
    "name": "YASMINI DE ASSIS FERNANDES",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 10,
      "texto": 11
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 16,
    "id": 1043
  },
  {
    "numero": 23,
    "name": "MATHEUS JOSE DOS SANTOS CAMPOS",
    "escola": "Madalena Caltabiano S. Benjamim, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 1,
      "texto": 3
    },
    "sourceFile": "Madalena Caltabiano S. Benjamim, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 17,
    "id": 1044
  },
  {
    "numero": 1,
    "name": "ALANA DE JESUS NUNES TIBURCIO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 24,
      "texto": 83
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1045
  },
  {
    "numero": 2,
    "name": "ANTÔNIO GOMES CABRAL CARDOSO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 27,
      "texto": 91
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1046
  },
  {
    "numero": 3,
    "name": "CÉSAR MELLO PEDROSO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 5,
      "texto": 8
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1047
  },
  {
    "numero": 4,
    "name": "DANIEL CUNHA SILVA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 18,
      "texto": 40
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1048
  },
  {
    "numero": 5,
    "name": "ELIAS DA SILVA COSTA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1049
  },
  {
    "numero": 6,
    "name": "ELOA VICTORIA FERREIRA DA SILVA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 1,
      "texto": 7
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1050
  },
  {
    "numero": 7,
    "name": "EMANUEL MATHEUS DA CONCEIÇAO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 1,
      "texto": 6
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1051
  },
  {
    "numero": 9,
    "name": "GABRIEL PALMA DE ALVARENGA CYPRIANO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 12,
      "texto": 27
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1052
  },
  {
    "numero": 10,
    "name": "HEITOR JOSE MANCKEL DE SALES BALDAN",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 3,
      "texto": 3
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1053
  },
  {
    "numero": 11,
    "name": "ISAAC FERREIRA COSTA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 21,
      "pseudopalavras": 21,
      "texto": 25
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1054
  },
  {
    "numero": 12,
    "name": "JOAQUIM DE VARGAS MENGUI",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 44,
      "pseudopalavras": 20,
      "texto": 55
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1055
  },
  {
    "numero": 13,
    "name": "LAURA FLOR LEZZO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 7,
      "texto": 18
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1056
  },
  {
    "numero": 15,
    "name": "LEVI RIBEIRO MARNE",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 23,
      "pseudopalavras": 10,
      "texto": 22
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1057
  },
  {
    "numero": 16,
    "name": "LIZ PERLI SOBRINHO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 30,
      "pseudopalavras": 15,
      "texto": 37
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1058
  },
  {
    "numero": 17,
    "name": "LOUISE NOGUEIRA NERY DE SOUZA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 22,
      "pseudopalavras": 11,
      "texto": 13
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1059
  },
  {
    "numero": 18,
    "name": "MARIA ESTHER BRESSAGLIA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1060
  },
  {
    "numero": 19,
    "name": "MARIANA VITORIA MACEDO DA SILVA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 21,
      "pseudopalavras": 16,
      "texto": 22
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1061
  },
  {
    "numero": 20,
    "name": "MIGUEL ROBERTO RIBEIRO MORALES BORGES",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 27,
      "pseudopalavras": 19,
      "texto": 37
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1062
  },
  {
    "numero": 21,
    "name": "NATALLY RIBEIRO DE SOUZA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 28,
      "pseudopalavras": 21,
      "texto": 37
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1063
  },
  {
    "numero": 22,
    "name": "PEDRO MOLINA GOMES SOUZA DIONISIO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 23,
      "texto": 47
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1064
  },
  {
    "numero": 23,
    "name": "ELOA MARIA BENTO FARIA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 23,
      "pseudopalavras": 12,
      "texto": 22
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 1065
  },
  {
    "numero": 1,
    "name": "ALICE FREITAS BEJANI",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 23,
      "texto": 15
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1066
  },
  {
    "numero": 2,
    "name": "ALICE MADONA PAIM BERNARDES",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 9,
      "texto": 8
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1067
  },
  {
    "numero": 3,
    "name": "ARIELLY YARA DOS SANTOS FERREIRA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 15,
      "texto": 50
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1068
  },
  {
    "numero": 5,
    "name": "EMANUELLY VITORIA DOS SANTOS JACON",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 2,
      "texto": 1
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1069
  },
  {
    "numero": 6,
    "name": "GUILHERME CESAR DA SILVA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 18,
      "texto": 30
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1070
  },
  {
    "numero": 7,
    "name": "HANNAH SANTANA DE AZEVEDO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 10,
      "texto": 20
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1071
  },
  {
    "numero": 8,
    "name": "HELENA MATOS DOS SANTOS NASCIMENTO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 23,
      "texto": 60
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1072
  },
  {
    "numero": 9,
    "name": "HENRIQUE MIGUEL VITORINO MUNIZ",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 11,
      "texto": 8
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1073
  },
  {
    "numero": 10,
    "name": "ISAQUE LADISLAU DOS SANTOS",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 15,
      "texto": 30
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1074
  },
  {
    "numero": 11,
    "name": "JOHANGEL ALEXANDER PINTO GONZALEZ",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 3,
      "texto": 2
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1075
  },
  {
    "numero": 12,
    "name": "KAUE LOBO DE MELO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 23,
      "texto": 90
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1076
  },
  {
    "numero": 13,
    "name": "LORENZO RIPARDO TINEU DE MELO",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 10,
      "texto": 17
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1077
  },
  {
    "numero": 14,
    "name": "LUISA FABIANA TEODORO SANTOS",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 8,
      "pseudopalavras": 4,
      "texto": 3
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1078
  },
  {
    "numero": 15,
    "name": "LYRIA MARIA ALVES DOS SANTOS",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 8,
      "texto": 10
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1079
  },
  {
    "numero": 16,
    "name": "MARIA LUISA ALVES SILVA DE JESUS",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 7,
      "texto": 11
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1080
  },
  {
    "numero": 17,
    "name": "MATHEUS JOSE DA COSTA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 8,
      "texto": 10
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1081
  },
  {
    "numero": 18,
    "name": "PEDRO CARVALHO DOS SANTOS",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 15,
      "texto": 29
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1082
  },
  {
    "numero": 19,
    "name": "PEDRO MIGUEL CORREA MATIAS",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 2,
      "pseudopalavras": 1,
      "texto": 1
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1083
  },
  {
    "numero": 20,
    "name": "YAN MIGUEL DOS SANTOS MOREIRA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 9,
      "texto": 11
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1084
  },
  {
    "numero": 21,
    "name": "NILA KANTA GONZALEZ CASTET",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 20,
      "texto": 30
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1085
  },
  {
    "numero": 22,
    "name": "DAVI MOREIRA SOUZA",
    "escola": "Maria Ap. Arantes Vasques, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 4,
      "texto": 8
    },
    "sourceFile": "Maria Ap. Arantes Vasques, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1086
  },
  {
    "numero": 2,
    "name": "ANTONY JOSE VERONEZ CARLOTA",
    "escola": "Maria Ap.C.de Souza, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 3,
      "texto": 17
    },
    "sourceFile": "Maria Ap.C.de Souza, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1087
  },
  {
    "numero": 3,
    "name": "ELOAH DA SILVA CORREIA JESUS DOS SANTOS",
    "escola": "Maria Ap.C.de Souza, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 13,
      "texto": 19
    },
    "sourceFile": "Maria Ap.C.de Souza, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1088
  },
  {
    "numero": 4,
    "name": "MARIANA ROMERO DE SOUSA LUCIANO",
    "escola": "Maria Ap.C.de Souza, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 11,
      "texto": 29
    },
    "sourceFile": "Maria Ap.C.de Souza, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1089
  },
  {
    "numero": 5,
    "name": "MARIA ALICE DE OLIVEIRA FLORENTINO",
    "escola": "Maria Ap.C.de Souza, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 19,
      "texto": 38
    },
    "sourceFile": "Maria Ap.C.de Souza, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1090
  },
  {
    "numero": 7,
    "name": "EMANUEL MARQUES MOREIRA",
    "escola": "Maria Ap.C.de Souza, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 21,
      "texto": 34
    },
    "sourceFile": "Maria Ap.C.de Souza, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1091
  },
  {
    "numero": 8,
    "name": "AURORA NOBREGA RUIZ MARTINS",
    "escola": "Maria Ap.C.de Souza, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 14,
      "texto": 34
    },
    "sourceFile": "Maria Ap.C.de Souza, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1092
  },
  {
    "numero": 1,
    "name": "ANA LAURA GONÇALVES SANTOS",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 1,
      "texto": 4
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1093
  },
  {
    "numero": 2,
    "name": "ANA VITORIA DA SILVA SANTOS",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1094
  },
  {
    "numero": 3,
    "name": "ARTHUR MONTEIRO CORREA LIMA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1095
  },
  {
    "numero": 4,
    "name": "DOMINICK BASSANELLI CEZAR",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1096
  },
  {
    "numero": 5,
    "name": "ELIAS DANIEL SALGADO DOS SANTOS ELOI",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 4,
      "texto": 4
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1097
  },
  {
    "numero": 6,
    "name": "ISABELA DE ALMEIDA GARCIAS",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 1,
      "texto": 3
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1098
  },
  {
    "numero": 9,
    "name": "JONATAS DE FREITAS LISBOA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 9,
      "texto": 19
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1099
  },
  {
    "numero": 10,
    "name": "LARISSA SALDANHA APOLINARIO",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 5,
      "texto": 10
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1100
  },
  {
    "numero": 11,
    "name": "MANUELLA ALICE SOUZA DE MIRANDA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1101
  },
  {
    "numero": 13,
    "name": "PAULO EDUARDO ALVES DE SOUSA DOS SANTOS",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 6,
      "texto": 20
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1102
  },
  {
    "numero": 14,
    "name": "SAMUEL MIGUEL FAUSTINO BUENO",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 6,
      "texto": 11
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1103
  },
  {
    "numero": 15,
    "name": "VALLENTYNA BALBINO DE MELO",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1104
  },
  {
    "numero": 17,
    "name": "ALEPH DE CASTRO MOREIRA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 1,
      "texto": 4
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1105
  },
  {
    "numero": 1,
    "name": "ANDREY APARECIDO DA SILVA DE PAULA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1106
  },
  {
    "numero": 2,
    "name": "ANNA HELENA DA SILVA PEREIRA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 22,
      "texto": 73
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1107
  },
  {
    "numero": 3,
    "name": "ANNA LAURA DA SILVA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1108
  },
  {
    "numero": 4,
    "name": "DAVI LUCCA VIEIRA FERNANDES",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 37,
      "texto": 108
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1109
  },
  {
    "numero": 5,
    "name": "ELIAS PALERMO DE SOUZA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 30,
      "texto": 56
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1110
  },
  {
    "numero": 6,
    "name": "GIOVANNA GABRIELLY DE CARVALHO MOREIRA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 11,
      "pseudopalavras": 3,
      "texto": 10
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1111
  },
  {
    "numero": 7,
    "name": "KAOLY VICTORIA DOS SANTOS GONÇALVES",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1112
  },
  {
    "numero": 8,
    "name": "LINDSAY APARECIDA REZENDE",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 19,
      "pseudopalavras": 5,
      "texto": 13
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1113
  },
  {
    "numero": 9,
    "name": "LUIZ MIGUEL DE JESUS RANGEL DOS SANTOS",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 6,
      "texto": 22
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1114
  },
  {
    "numero": 10,
    "name": "MARIA ALICE ALVES RODRIGUES",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 22,
      "pseudopalavras": 12,
      "texto": 35
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1115
  },
  {
    "numero": 12,
    "name": "MARIA EDUARDA SOUZA DA SILVA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 4,
      "texto": 22
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1116
  },
  {
    "numero": 13,
    "name": "MARIA FERNANDA MENDES DA SILVA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1117
  },
  {
    "numero": 15,
    "name": "SAMUEL JESUS FERNANDES DA SILVA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 51,
      "pseudopalavras": 25,
      "texto": 69
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1118
  },
  {
    "numero": 16,
    "name": "LUARA ELLEN CUSTODIO SANTOS",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 20,
      "texto": 53
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1119
  },
  {
    "numero": 1,
    "name": "ANA DHAVILA DOS SANTOS SILVA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1120
  },
  {
    "numero": 2,
    "name": "DAVI LUCCA DA SILVA HENRIQUE",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 7,
      "texto": 13
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1121
  },
  {
    "numero": 3,
    "name": "HELOISA DOS SANTOS VIEIRA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 0,
      "texto": 5
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1122
  },
  {
    "numero": 4,
    "name": "JADE SILVA RODRIGUES DE OLIVEIRA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 1,
      "texto": 0
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1123
  },
  {
    "numero": 7,
    "name": "LARA BEATRIZ SEBASTIAO DA SILVA DOS REIS",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 11,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1124
  },
  {
    "numero": 8,
    "name": "LARA LUIZA DA SILVA FERNANDES",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 6,
      "texto": 11
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1125
  },
  {
    "numero": 9,
    "name": "LUISA ELENA APARECIDA VITORIA VIEIRA BRAGA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1126
  },
  {
    "numero": 10,
    "name": "MARIA ALICE DAVID DOS SANTOS",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1127
  },
  {
    "numero": 11,
    "name": "MURILO CANDIDO ANTUNES",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1128
  },
  {
    "numero": 12,
    "name": "RICHARD DANIEL SANTOS GONCALVES",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1129
  },
  {
    "numero": 14,
    "name": "THEO VIEIRA DA SILVA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1130
  },
  {
    "numero": 15,
    "name": "WAGNER FRANCISCO ALVES NETO",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 24,
      "pseudopalavras": 11,
      "texto": 23
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1131
  },
  {
    "numero": 16,
    "name": "YURI GABRIEL ESPOSITO TEIXEIRA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1132
  },
  {
    "numero": 17,
    "name": "ISABELLA OLIVEIRA DOS SANTOS RAMOS PEREIRA",
    "escola": "Maria Helena Ribeiro Vilela, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 14,
      "pseudopalavras": 2,
      "texto": 10
    },
    "sourceFile": "Maria Helena Ribeiro Vilela, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1133
  },
  {
    "numero": 1,
    "name": "ANA LAURA PERRI CÂNDIDO",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 10,
      "texto": 25
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1134
  },
  {
    "numero": 2,
    "name": "ANNA SOPHIA ALVES CORREA",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1135
  },
  {
    "numero": 3,
    "name": "AYOROS FELIPE BENTO RODRIGUES",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 10,
      "texto": 28
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1136
  },
  {
    "numero": 4,
    "name": "DANIEL LEOPOLDINO DA CUNHA EUGENIO",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 18,
      "texto": 54
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1137
  },
  {
    "numero": 5,
    "name": "DIANA DOS SANTOS ALBINO",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 4,
      "texto": 11
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1138
  },
  {
    "numero": 6,
    "name": "DWAYNE LAWRRAN DE CASTRO COSTA",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1139
  },
  {
    "numero": 7,
    "name": "HELLENA DA SILVA MONTEIRO",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 3,
      "texto": 28
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1140
  },
  {
    "numero": 8,
    "name": "HENRIQUE SALOMAO SILVA SOUZA",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 11,
      "texto": 35
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1141
  },
  {
    "numero": 9,
    "name": "ISABELLA FAUSTINO MOREIRA",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 8,
      "texto": 28
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1142
  },
  {
    "numero": 10,
    "name": "KALEO CHRISTOVAM NAVES",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1143
  },
  {
    "numero": 11,
    "name": "KELVEN CHAGAS MIRANDA SILVA",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 3,
      "texto": 20
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1144
  },
  {
    "numero": 13,
    "name": "LUIZ ANTONIO DA SILVA BONIFACIO",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 5,
      "texto": 25
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1145
  },
  {
    "numero": 14,
    "name": "MARIA OLIVEIRA DA SILVA",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 54,
      "pseudopalavras": 15,
      "texto": 98
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1146
  },
  {
    "numero": 15,
    "name": "MATHEUS DA SILVA ALBINO",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1147
  },
  {
    "numero": 16,
    "name": "NATHAN NUNES VIEIRA",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 19,
      "texto": 78
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1148
  },
  {
    "numero": 17,
    "name": "SARAH GABRIELLY APARECIDA ALVES DOS SANTOS",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 10,
      "texto": 33
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1149
  },
  {
    "numero": 18,
    "name": "VALENTINA DA SILVA MARQUES",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1150
  },
  {
    "numero": 19,
    "name": "ISABELLE CANDIDO NORONHA",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 0,
      "texto": 6
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 1151
  },
  {
    "numero": 20,
    "name": "ELOAH DOS SANTOS FONSECA",
    "escola": "Maria Madureira Salgado, Profª “Dona Minica”",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 4,
      "texto": 10
    },
    "sourceFile": "Maria Madureira Salgado, Profª “Dona Minica” EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 1152
  },
  {
    "numero": 2,
    "name": "ANA VALENTINA DE MELO GRACIANO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1153
  },
  {
    "numero": 4,
    "name": "ANTONELLA RAMOS MARINHO CORREA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 6,
      "pseudopalavras": 0,
      "texto": 6
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1154
  },
  {
    "numero": 5,
    "name": "ARIELLY VIEIRA SILVA RAMOS",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 12,
      "texto": 38
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1155
  },
  {
    "numero": 6,
    "name": "ARTHUR FREITAS DE MORAIS",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 12,
      "texto": 38
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1156
  },
  {
    "numero": 7,
    "name": "EDUARDA YUMI NAGAHASHI DE GODOY",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1157
  },
  {
    "numero": 8,
    "name": "ENZO DE CAMPOS GARUFFI",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 3,
      "texto": 29
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1158
  },
  {
    "numero": 10,
    "name": "ISAQUE MIGUEL SANTOS DA CONCEICAO MOREIRA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 1,
      "texto": 16
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1159
  },
  {
    "numero": 11,
    "name": "JOAQUIM OLIVEIRA ROSA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 6,
      "texto": 28
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1160
  },
  {
    "numero": 12,
    "name": "KEMILLY SATIN MONTEIRO NUNES GONÇALVES",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 6,
      "pseudopalavras": 4,
      "texto": 11
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1161
  },
  {
    "numero": 13,
    "name": "LUCAS FERRARI RODRIGUES",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1162
  },
  {
    "numero": 14,
    "name": "LUIS MIGUEL DE MELO SANTOS SILVA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 20,
      "texto": 71
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1163
  },
  {
    "numero": 16,
    "name": "MIGUEL SIQUEIRA LEITE",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 26,
      "texto": 61
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1164
  },
  {
    "numero": 17,
    "name": "MURILLO DE OLIVEIRA CAMARGO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1165
  },
  {
    "numero": 18,
    "name": "SAMUEL COSTA NICOLETTI",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1166
  },
  {
    "numero": 19,
    "name": "THAYLA COSTA DE ALMEIDA LEMES",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 23,
      "texto": 78
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1167
  },
  {
    "numero": 20,
    "name": "MARIA CLARA DE FREITAS BRITO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 19,
      "pseudopalavras": 7,
      "texto": 15
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1168
  },
  {
    "numero": 21,
    "name": "LEONARDO MARLEY LOURENÇO CUNHA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 17,
      "texto": 54
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1169
  },
  {
    "numero": 22,
    "name": "GABRIELLA DE CAMPOS OLIVEIRA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1170
  },
  {
    "numero": 1,
    "name": "ANA CLARA CARVALHO DE ALMEIDA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 2,
      "texto": 2
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1171
  },
  {
    "numero": 2,
    "name": "ANNA CLARA NEVES RIBEIRO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 3,
      "pseudopalavras": 1,
      "texto": 7
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1172
  },
  {
    "numero": 3,
    "name": "ANTONELLA FERNANDES GOTOLA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 22,
      "texto": 56
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1173
  },
  {
    "numero": 4,
    "name": "ARTHUR MUNIZ NUNES MACHADO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 9,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1174
  },
  {
    "numero": 6,
    "name": "ENZO LOHAN RODRIGUES RIBEIRO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 1,
      "texto": 34
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1175
  },
  {
    "numero": 8,
    "name": "GUSTAVO SOUZA DOS ANJOS",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 2,
      "texto": 2
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1176
  },
  {
    "numero": 9,
    "name": "HELENA FERREIRA MARCONDES",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 1,
      "texto": 4
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1177
  },
  {
    "numero": 10,
    "name": "LIZ FEIJAO GRANDINI",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 2,
      "texto": 2
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1178
  },
  {
    "numero": 11,
    "name": "MANUELLA VITORIA SOUZA DE CASTRO MARINHO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 2,
      "texto": 11
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1179
  },
  {
    "numero": 12,
    "name": "MARIA LAURA RIBEIRO SILVA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 13,
      "texto": 7
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1180
  },
  {
    "numero": 13,
    "name": "MIRELLA RAMOS MARCONDES MACHADO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 8,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1181
  },
  {
    "numero": 14,
    "name": "PEDRO CAVALCANTE BUSTAMANTE DA SILVA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 10,
      "pseudopalavras": 7,
      "texto": 19
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1182
  },
  {
    "numero": 15,
    "name": "THEO DIMITRIOS SIVAS",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 2,
      "texto": 28
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1183
  },
  {
    "numero": 16,
    "name": "VALENTINA NUNES LIMA DA SILVA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 5,
      "texto": 17
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1184
  },
  {
    "numero": 19,
    "name": "BENJAMIN DE ALMEIDA SANTOS",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 9,
      "texto": 34
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1185
  },
  {
    "numero": 21,
    "name": "VALENTINA RAFAELI DOS SANTOS FELIPE",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 16,
      "texto": 38
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1186
  },
  {
    "numero": 24,
    "name": "MARIANA PRADO PIMENTA MONTEIRO",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 6,
      "pseudopalavras": 2,
      "texto": 9
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1187
  },
  {
    "numero": 26,
    "name": "VITORIA ALICE DA SILVA",
    "escola": "Maria Zara Miné, Profª",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Maria Zara Miné, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1188
  },
  {
    "numero": 1,
    "name": "LORENA ZOE NADU LEZZO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 15,
      "texto": 33
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1189
  },
  {
    "numero": 2,
    "name": "LORENZO DA SILVA EVARISTO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 71,
      "texto": 11
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1190
  },
  {
    "numero": 3,
    "name": "MARIA ISABELLA SILVA BOGONI",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1191
  },
  {
    "numero": 4,
    "name": "MARIA JULIA DA SILVA CASTRO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 28,
      "texto": 98
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1192
  },
  {
    "numero": 6,
    "name": "MIGUEL LUCCA GERMANO DE OLIVEIRA SILVA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 14,
      "pseudopalavras": 5,
      "texto": 8
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1193
  },
  {
    "numero": 8,
    "name": "MIKAELA GUIMARÃES DIANA OLIVEIRA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 10,
      "texto": 32
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1194
  },
  {
    "numero": 9,
    "name": "NATHALY ALVES NARESSI DE SOUZA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 9,
      "texto": 11
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1195
  },
  {
    "numero": 10,
    "name": "OLIVIA SALOMAO MACHADO FARIA DOS SANTOS",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 12,
      "texto": 27
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1196
  },
  {
    "numero": 11,
    "name": "PEDRO HENRIQUE DOS SANTOS",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 16,
      "texto": 35
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1197
  },
  {
    "numero": 12,
    "name": "RAFAEL GOUVEA AONO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1198
  },
  {
    "numero": 13,
    "name": "SOPHIA MANUELA DA SILVA SALGADO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 25,
      "texto": 56
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1199
  },
  {
    "numero": 14,
    "name": "VALENTHINA MARTINS PROLUNGATTI",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1200
  },
  {
    "numero": 15,
    "name": "REBECA MARTINS DE QUEIROZ",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 25,
      "texto": 46
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1201
  },
  {
    "numero": 19,
    "name": "MARIA EDUARDA DOS SANTOS SILVA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 2,
      "texto": 0
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1202
  },
  {
    "numero": 23,
    "name": "MANUELLA BARBOSA ZANARDI",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 3,
      "texto": 0
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1203
  },
  {
    "numero": 24,
    "name": "THOMAS DOS SANTOS CANDIDO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1204
  },
  {
    "numero": 25,
    "name": "WABNER JHON DOS SANTOS SOUZA FERNANDES",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 26,
      "pseudopalavras": 15,
      "texto": 30
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1205
  },
  {
    "numero": 26,
    "name": "HELENA LIZ JUSTINO DOS SANTOS",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1206
  },
  {
    "numero": 1,
    "name": "ALICE EMANUELLY OLIVEIRA DE AZEVEDO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 18,
      "pseudopalavras": 7,
      "texto": 11
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1207
  },
  {
    "numero": 3,
    "name": "ARTHUR DE OLIVEIRA FREITAS",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 20,
      "texto": 92
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1208
  },
  {
    "numero": 5,
    "name": "BRENO VIRGILIO TORCHIO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1209
  },
  {
    "numero": 6,
    "name": "BRYAN VALENTIM MENEZES PEDROSO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 19,
      "pseudopalavras": 7,
      "texto": 18
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1210
  },
  {
    "numero": 7,
    "name": "DAVI LUIZ LEITE DA SILVA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 13,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1211
  },
  {
    "numero": 8,
    "name": "ELIS DANTAS ALVES",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 21,
      "pseudopalavras": 7,
      "texto": 21
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1212
  },
  {
    "numero": 9,
    "name": "HEITOR GABRIEL MARTINS DE CAMPOS ANDRADE",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 23,
      "pseudopalavras": 5,
      "texto": 19
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1213
  },
  {
    "numero": 10,
    "name": "IAN GABRIEL SAMPAIO MACHADO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 22,
      "texto": 74
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1214
  },
  {
    "numero": 11,
    "name": "ISIS MARIA LEITE DOS SANTOS",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 12,
      "texto": 29
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1215
  },
  {
    "numero": 13,
    "name": "JOAO MIGUEL FERRAZ LAZARIO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 29,
      "pseudopalavras": 15,
      "texto": 27
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1216
  },
  {
    "numero": 14,
    "name": "LARA MANOUCHKA BAZILIO LOUIS",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1217
  },
  {
    "numero": 15,
    "name": "LIAN MARUIYA DE MIRANDA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 7,
      "texto": 49
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1218
  },
  {
    "numero": 16,
    "name": "LUCCA PLATINI VARGAS RIBEIRO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 5,
      "texto": 15
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1219
  },
  {
    "numero": 18,
    "name": "MARIA JULIA DA SILVA SANTOS",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 21,
      "pseudopalavras": 5,
      "texto": 16
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1220
  },
  {
    "numero": 19,
    "name": "PEDRO PLATINI VARGAS RIBEIRO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 14,
      "pseudopalavras": 6,
      "texto": 14
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1221
  },
  {
    "numero": 20,
    "name": "RAEL GALVAO SOUSA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 22,
      "pseudopalavras": 10,
      "texto": 21
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1222
  },
  {
    "numero": 21,
    "name": "HELENA CONEGUNDES VALERIO",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 17,
      "texto": 36
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1223
  },
  {
    "numero": 23,
    "name": "OTAVIO MENEZES KUNZENDORFF",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 4,
      "texto": 13
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1224
  },
  {
    "numero": 26,
    "name": "HELOYSE FERNANDES DE SOUZA",
    "escola": "Mário Antônio Bonotti, Pe.",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 9
    },
    "sourceFile": "Mário Antônio Bonotti, Pe. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1225
  },
  {
    "numero": 1,
    "name": "ALICE MARIAH PACHECO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 20,
      "texto": 44
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1226
  },
  {
    "numero": 2,
    "name": "ANA CLARA RICARDO DE OLIVEIRA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 5,
      "texto": 13
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1227
  },
  {
    "numero": 3,
    "name": "ANA JULIA MARQUES DA SILVA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 10,
      "texto": 31
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1228
  },
  {
    "numero": 5,
    "name": "BERNARDO HENRIQUE GUEDES COSTA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 12,
      "texto": 23
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1229
  },
  {
    "numero": 6,
    "name": "EMANUELLY RODRIGUES FERNANDES QUINTILIANO FERREIRA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 5,
      "texto": 12
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1230
  },
  {
    "numero": 8,
    "name": "ESTHER SANTOS BATISTA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1231
  },
  {
    "numero": 10,
    "name": "ISABELLY CRISTINA RODRIGUES",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 10,
      "texto": 20
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1232
  },
  {
    "numero": 11,
    "name": "LIS GALDINO CLEMENTE",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 13,
      "pseudopalavras": 4,
      "texto": 11
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1233
  },
  {
    "numero": 12,
    "name": "PABLO PIERRY DE OLIVEIRA MOREIRA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 20,
      "texto": 42
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1234
  },
  {
    "numero": 13,
    "name": "PEDRO HENRIQUE PEREIRA GOMES",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 15,
      "texto": 28
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1235
  },
  {
    "numero": 17,
    "name": "ELOA VITORIA DE SOUSA CHAGAS",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 10,
      "texto": 27
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1236
  },
  {
    "numero": 18,
    "name": "ENZO MIGUEL PEREIRA OLIVEIRA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 109
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1237
  },
  {
    "numero": 19,
    "name": "ANA LAURA PEREIRA DE PAULA GARCIA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 5,
      "texto": 8
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1238
  },
  {
    "numero": 1,
    "name": "AGATHA EMANUELLY DE OLIVEIRA MOREIRA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 13,
      "texto": 20
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1239
  },
  {
    "numero": 2,
    "name": "AILA ELOIZE BATISTA SOUZA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 25,
      "texto": 36
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1240
  },
  {
    "numero": 3,
    "name": "ANA LAURA MOTA DO NASCIMENTO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 8,
      "texto": 19
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1241
  },
  {
    "numero": 4,
    "name": "GAEL HENRIQUE PACHECO DE ARAUJO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 109
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1242
  },
  {
    "numero": 5,
    "name": "GRAZIELLI APARECIDA COSTA DA SILVA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 15,
      "texto": 26
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1243
  },
  {
    "numero": 6,
    "name": "HEITOR DE ANDRADE BARBOSA RITA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 14,
      "texto": 24
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1244
  },
  {
    "numero": 8,
    "name": "KATHELLEN LAVINYA GONÇALVES DE SOUZA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 3,
      "texto": 6
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1245
  },
  {
    "numero": 9,
    "name": "LARA SERAFIM DA SILVA GODOY",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 46,
      "pseudopalavras": 24,
      "texto": 64
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1246
  },
  {
    "numero": 10,
    "name": "LORHANNY GABRIELA AGOSTINHO RODRIGUES MANDU",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 109
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1247
  },
  {
    "numero": 11,
    "name": "LUIZ MIGUEL DA SILVA BRAGA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 17,
      "texto": 38
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1248
  },
  {
    "numero": 13,
    "name": "MIKAEL VINYCIUS DOS SANTOS ANDARDE",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO B",
    "s1": "NÃO AVALIADO",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1249
  },
  {
    "numero": 14,
    "name": "VITORIA REGIS CARNEIRO LACORTE",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1250
  },
  {
    "numero": 15,
    "name": "ESTER MILLENA SOARES LOBO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 10,
      "texto": 28
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1251
  },
  {
    "numero": 16,
    "name": "MARIA JULIA MENEZES",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 7,
      "texto": 13
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1252
  },
  {
    "numero": 1,
    "name": "ALICE ALVES LARANJEIRA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 0,
      "texto": 7
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1253
  },
  {
    "numero": 2,
    "name": "AYUMI DE FREITAS ALVES MOKI",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 3,
      "texto": 27
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1254
  },
  {
    "numero": 3,
    "name": "ESTHER GABRIELE DA SILVA LIVINHALI",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1255
  },
  {
    "numero": 5,
    "name": "HELOISE MARIA ALVES GONÇALVES DE SOUZA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 11,
      "pseudopalavras": 0,
      "texto": 19
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1256
  },
  {
    "numero": 6,
    "name": "IKARO NATHAN CEZAR",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 0,
      "texto": 29
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1257
  },
  {
    "numero": 7,
    "name": "KATHERINE EMANUELLE CORREIA DO NASCIMENTO SILVA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 1,
      "texto": 36
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1258
  },
  {
    "numero": 8,
    "name": "LARA LIZ DA SILVA COSTA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 3,
      "texto": 46
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1259
  },
  {
    "numero": 9,
    "name": "LARA VICTORIA GONÇALO SIMPLICIO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 0,
      "texto": 17
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1260
  },
  {
    "numero": 10,
    "name": "LAYLA GABRIELLY BRAGA EL KHATIB GAMA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 0,
      "texto": 25
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1261
  },
  {
    "numero": 11,
    "name": "LUCAS SAMUEL FERREIRA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 1,
      "texto": 36
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1262
  },
  {
    "numero": 12,
    "name": "LUIZA GABRIELA BASSANELLO DA SILVA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 0,
      "texto": 8
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1263
  },
  {
    "numero": 13,
    "name": "MAJU ROCHA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 0,
      "texto": 8
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1264
  },
  {
    "numero": 14,
    "name": "MARIA LUIZA DOS SANTOS OLIVEIRA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 1,
      "texto": 28
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1265
  },
  {
    "numero": 15,
    "name": "THEO OLIVEIRA PEREIRA DE TOLEDO",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1266
  },
  {
    "numero": 16,
    "name": "YAGO LEVI MONTEIRO RIBEIRO DOS SANTOS",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 18,
      "pseudopalavras": 2,
      "texto": 20
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1267
  },
  {
    "numero": 17,
    "name": "YAN FELIPE DE MORAES PEREIRA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 2,
      "texto": 29
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1268
  },
  {
    "numero": 19,
    "name": "ANA VALENTINA CELESTE APARECIDA DA SILVA SOUZA",
    "escola": "Mário de Assis César, Prof.",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Mário de Assis César, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1269
  },
  {
    "numero": 1,
    "name": "ALICE MARIA GOULART RAMOS",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 15,
      "texto": 28
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1270
  },
  {
    "numero": 2,
    "name": "DAVI LUCCA PEREIRA DA SILVA",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 8,
      "pseudopalavras": 3,
      "texto": 7
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1271
  },
  {
    "numero": 3,
    "name": "ISABELA VITORIA RIBEIRO MACHADO",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 5,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1272
  },
  {
    "numero": 4,
    "name": "ISABELLE VITORIA MIRANDA SIMOES",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 10,
      "texto": 19
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1273
  },
  {
    "numero": 5,
    "name": "MANUELA CONFALONE DA SILVA MACARINI",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 10,
      "texto": 21
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1274
  },
  {
    "numero": 7,
    "name": "PEDRO LUCAS MOTA FERREIRA",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 21,
      "texto": 50
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1275
  },
  {
    "numero": 8,
    "name": "RAFAEL PORFIRIO UCHOAS",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 6,
      "pseudopalavras": 3,
      "texto": 4
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1276
  },
  {
    "numero": 9,
    "name": "SOPHIA ELOAH TORRES DE CAMARGO",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 13,
      "texto": 22
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1277
  },
  {
    "numero": 10,
    "name": "MARIA ALICE MACHUCA DANTAS",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 10,
      "texto": 20
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1278
  },
  {
    "numero": 11,
    "name": "URIEL EDWARD FERNANDES DE ARAUJO",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 6,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1279
  },
  {
    "numero": 12,
    "name": "MARYA FERNANDA ZANIN NUNES",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 4,
      "texto": 6
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1280
  },
  {
    "numero": 13,
    "name": "ÁGATHA MACEDO LISBOA MONTEIRO",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 10,
      "texto": 18
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1281
  },
  {
    "numero": 15,
    "name": "HEITHOR HUGO CURSINO FERREIRA",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 18,
      "texto": 80
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1282
  },
  {
    "numero": 16,
    "name": "MAYARA LORANNE COSTA SANTOS",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1283
  },
  {
    "numero": 18,
    "name": "MIGUEL MOURA LISBOA",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 11,
      "pseudopalavras": 4,
      "texto": 8
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 1284
  },
  {
    "numero": 2,
    "name": "ALLICE MARTINS MACEDO",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 2,
      "texto": 8
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1285
  },
  {
    "numero": 3,
    "name": "ANTONELLA LAVINIA DE OLIVEIRA BAHIA",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 8,
      "texto": 32
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1286
  },
  {
    "numero": 5,
    "name": "ELLOA CURSINO CALDAS",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 19,
      "pseudopalavras": 8,
      "texto": 12
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1287
  },
  {
    "numero": 7,
    "name": "KAUA SOARES LOURENCO",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1288
  },
  {
    "numero": 8,
    "name": "LAURA MANOELLA GOMES DA SILVA",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 1,
      "texto": 4
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1289
  },
  {
    "numero": 9,
    "name": "LORENZO SOPHIA MOREIRA",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 22,
      "texto": 56
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1290
  },
  {
    "numero": 10,
    "name": "MANUELLA BEATRIZ DA CONCEIÇAO MARIA",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 17,
      "texto": 56
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1291
  },
  {
    "numero": 12,
    "name": "JOAO MIGUEL DE SOUZA OLIVEIRA",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1292
  },
  {
    "numero": 13,
    "name": "LUAN HENRIQUE LOPES FERREIRA",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1293
  },
  {
    "numero": 14,
    "name": "LAURA GIL DE FREITAS MATOS",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 22,
      "pseudopalavras": 11,
      "texto": 28
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1294
  },
  {
    "numero": 15,
    "name": "MURILO LUIZ MOREIRA",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1295
  },
  {
    "numero": 16,
    "name": "THEO ALVES HENRIQUES",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 28,
      "texto": 49
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1296
  },
  {
    "numero": 17,
    "name": "THEO SOUZA LASTARRIA",
    "escola": "Moacyr de Almeida",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 24,
      "pseudopalavras": 7,
      "texto": 28
    },
    "sourceFile": "Moacyr de Almeida EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1297
  },
  {
    "numero": 2,
    "name": "ANTONELLA DE OLIVEIRA ROSA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 9,
      "texto": 23
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1298
  },
  {
    "numero": 3,
    "name": "DANTE MONTEIRO",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1299
  },
  {
    "numero": 4,
    "name": "DAVI LUCCA DA SILVA BARBOSA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 12,
      "texto": 27
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1300
  },
  {
    "numero": 5,
    "name": "ESTHER HELENA NEVES DE GODOI",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 22,
      "texto": 34
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1301
  },
  {
    "numero": 6,
    "name": "ISABELLE VITORIA REZENDE DE SOUZA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 12,
      "pseudopalavras": 4,
      "texto": 12
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1302
  },
  {
    "numero": 7,
    "name": "JOSE ANTONIO RANGEL DE BRITO TEODORO",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 14,
      "texto": 29
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1303
  },
  {
    "numero": 8,
    "name": "LARA IRACEMA RODRIGUES DE OLIVEIRA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 17,
      "texto": 35
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1304
  },
  {
    "numero": 9,
    "name": "LIS DE NICODEMUS SANTANA GERALDO",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 15,
      "texto": 32
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1305
  },
  {
    "numero": 10,
    "name": "LORENZO DEAN DA SILVA BARROSO",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 11,
      "texto": 23
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1306
  },
  {
    "numero": 11,
    "name": "MARIA EDUARDA BENTO MARCONDES",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 7,
      "texto": 13
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1307
  },
  {
    "numero": 12,
    "name": "NOAH LEVI MORING DE OLIVEIRA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 10,
      "texto": 20
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1308
  },
  {
    "numero": 15,
    "name": "SAMUEL MARQUES BUENO",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 26,
      "texto": 76
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1309
  },
  {
    "numero": 16,
    "name": "STEFANNY LARA CORDEIRO PROENCA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 11,
      "texto": 27
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1310
  },
  {
    "numero": 18,
    "name": "AUGUSTO ALVES DE CARVALHO",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 6,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1311
  },
  {
    "numero": 1,
    "name": "ANA CLARA FERREIRA SANTOS MOURA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 3,
      "texto": 4
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1312
  },
  {
    "numero": 3,
    "name": "ELOAH PEREIRA DE OLIVEIRA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 99,
      "texto": 32
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1313
  },
  {
    "numero": 4,
    "name": "ELOISA HELENA DE OLIVEIRA MOTA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 30,
      "texto": 80
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1314
  },
  {
    "numero": 5,
    "name": "JOAO GABRIEL ALVES COSTA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 28,
      "texto": 77
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1315
  },
  {
    "numero": 6,
    "name": "KAUANY MELLO ANTUNES BARRETO SANTOS",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 17,
      "texto": 27
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1316
  },
  {
    "numero": 8,
    "name": "LUIZ FERNANDO CABRAL DA SILVA LORENA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 12,
      "texto": 25
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1317
  },
  {
    "numero": 9,
    "name": "SOPHIA ANTONELLA DE OLIVEIRA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 43,
      "pseudopalavras": 25,
      "texto": 51
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1318
  },
  {
    "numero": 10,
    "name": "SOPHIA DOS SANTOS MATTOS",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 14,
      "texto": 34
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1319
  },
  {
    "numero": 11,
    "name": "THEO DE ARAUJO CARDOSO",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 13,
      "pseudopalavras": 1,
      "texto": 4
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1320
  },
  {
    "numero": 12,
    "name": "ANNA LIZ DE OLIVEIRA MONTEIRO",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 31,
      "texto": 98
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1321
  },
  {
    "numero": 13,
    "name": "LUIS FERNANDO GONCALVES DOS SANTOS",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 2,
      "texto": 3
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1322
  },
  {
    "numero": 14,
    "name": "GAEL PAULINO SABOIA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 25,
      "texto": 77
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1323
  },
  {
    "numero": 16,
    "name": "ANNA LUISA VIEIRA DA SILVA E SILVA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1324
  },
  {
    "numero": 1,
    "name": "ANNA ELOISY MOREIRA NORBERTO DE OLIVEIRA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 25,
      "texto": 45
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1325
  },
  {
    "numero": 2,
    "name": "ARTHUR GANDRA POLICARPO",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 35,
      "texto": 94
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1326
  },
  {
    "numero": 4,
    "name": "DAVID NEGRINI LARA DOS ANJOS",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 11,
      "pseudopalavras": 10,
      "texto": 10
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1327
  },
  {
    "numero": 5,
    "name": "ELENA NASCIMENTO SOUZA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 13,
      "texto": 28
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1328
  },
  {
    "numero": 6,
    "name": "ELOISA NASCIMENTO SOUZA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 21,
      "texto": 36
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1329
  },
  {
    "numero": 7,
    "name": "EMILLY VAZ PINTO GOMES",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 10,
      "texto": 17
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1330
  },
  {
    "numero": 8,
    "name": "GABRIEL DA SILVA OLIVEIRA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 7,
      "texto": 14
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1331
  },
  {
    "numero": 9,
    "name": "GIOVANA FONSECA SALES",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 4,
      "texto": 5
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1332
  },
  {
    "numero": 10,
    "name": "HELENA SAMARA SARAIVA BENEVIDES",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 13,
      "texto": 20
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1333
  },
  {
    "numero": 11,
    "name": "HELENA VITORIA RAMOS DA CONCEIÇAO",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 14,
      "texto": 27
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1334
  },
  {
    "numero": 12,
    "name": "JOAO LUCAS SANTOS SILVA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 25,
      "texto": 103
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1335
  },
  {
    "numero": 13,
    "name": "KAMILLY VICTORIA SILVERIO DOS SANTOS",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1336
  },
  {
    "numero": 14,
    "name": "LEONARDO HENRIQUE NEVES DA SILVA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 35,
      "texto": 90
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1337
  },
  {
    "numero": 16,
    "name": "MARIA LUIZA APARECIDA DOS SANTOS",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 15,
      "texto": 31
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1338
  },
  {
    "numero": 17,
    "name": "MIGUEL DA SILVA LIOTTI",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 21,
      "pseudopalavras": 10,
      "texto": 15
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1339
  },
  {
    "numero": 18,
    "name": "PEDRO MIRANDA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1340
  },
  {
    "numero": 19,
    "name": "SOPHIA MARTINS GARCIA CLARO",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 14,
      "pseudopalavras": 6,
      "texto": 5
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1341
  },
  {
    "numero": 20,
    "name": "VITOR FONSECA SALES",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 13,
      "texto": 23
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1342
  },
  {
    "numero": 21,
    "name": "GUILHERME RODRIGUES PIRES SEBASTIANA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 109
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1343
  },
  {
    "numero": 22,
    "name": "ANTONELLA CARDOSO DA SILVA SEBASTIANA",
    "escola": "Odete Correa Madureira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 12,
      "texto": 19
    },
    "sourceFile": "Odete Correa Madureira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1344
  },
  {
    "numero": 1,
    "name": "AGATHA CAROLINE SILVA DA MOTA",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 7,
      "texto": 19
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1345
  },
  {
    "numero": 2,
    "name": "AGATHA VALENTINA CANDIDO GREGORIO",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 13,
      "pseudopalavras": 7,
      "texto": 16
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1346
  },
  {
    "numero": 3,
    "name": "ANA LAURA DOS SANTOS",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 1,
      "texto": 9
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1347
  },
  {
    "numero": 4,
    "name": "ELOA GABRIELLY DE SOUZA THEODORO",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1348
  },
  {
    "numero": 5,
    "name": "EMANUELE COSTA DIAS",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 20,
      "texto": 54
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1349
  },
  {
    "numero": 6,
    "name": "EMANUELLY ALVES DE SOUZA",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1350
  },
  {
    "numero": 7,
    "name": "ENZO RIBEIRO GOMES",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1351
  },
  {
    "numero": 9,
    "name": "JOSE FERNANDO BICUDO ROMAO",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1352
  },
  {
    "numero": 10,
    "name": "JOSE MIGUEL BICUDO APOLINARIO",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1353
  },
  {
    "numero": 11,
    "name": "LAVINIA DE CARVALHO SILVA",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1354
  },
  {
    "numero": 12,
    "name": "LORENZO MIGUEL DA SILVA DIAS",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 11,
      "texto": 17
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1355
  },
  {
    "numero": 13,
    "name": "LUCAS DA COSTA SUZUKI BUENO",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 6,
      "texto": 20
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1356
  },
  {
    "numero": 14,
    "name": "MARIAH GUADALUPE APARECIDO DIA DA SILVA",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 1357
  },
  {
    "numero": 15,
    "name": "MAYTE MARIA LEITE RIBEIRO SILVA DE OLIVEIRA",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 6,
      "pseudopalavras": 3,
      "texto": 9
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 1358
  },
  {
    "numero": 16,
    "name": "MURILLO SIMOES FERREIRA",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 8,
      "texto": 9
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 1359
  },
  {
    "numero": 17,
    "name": "REBECA MARIAH MARTINS DA SILVA",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 1360
  },
  {
    "numero": 18,
    "name": "SOPHIA GUEDES MARCOS DE SOUZA",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 1361
  },
  {
    "numero": 19,
    "name": "STELLA DA SILVA LEONEL",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 1362
  },
  {
    "numero": 21,
    "name": "ANA ALICE MARCONDES",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 5,
    "id": 1363
  },
  {
    "numero": 1,
    "name": "ADRIAN FERNANDO LEITE CAMARGO",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 6,
      "texto": 16
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1364
  },
  {
    "numero": 2,
    "name": "ANTONIO MARCOS GOMES DE LIMA",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 7,
      "pseudopalavras": 5,
      "texto": 6
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1365
  },
  {
    "numero": 3,
    "name": "BRENDA ELLEN LEITE SILVA",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 17,
      "texto": 37
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1366
  },
  {
    "numero": 4,
    "name": "DANIEL DOS SANTOS SILVERIO",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 0,
      "texto": 11
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1367
  },
  {
    "numero": 5,
    "name": "ENZO GABRIEL FARIAS DOS SANTOS MOREIRA",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 13,
      "texto": 45
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1368
  },
  {
    "numero": 6,
    "name": "HEITOR GAEL DE OLIVEIRA PIRES",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 7,
      "pseudopalavras": 7,
      "texto": 24
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1369
  },
  {
    "numero": 7,
    "name": "HEITOR HUGO MOREIRA DOS SANTOS",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 0,
      "texto": 18
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1370
  },
  {
    "numero": 8,
    "name": "ISABELLA DE OLIVEIRA VITAL",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 8,
      "texto": 14
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1371
  },
  {
    "numero": 9,
    "name": "KYARA MARIA DOS SANTOS BRAGA",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 10,
      "texto": 16
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1372
  },
  {
    "numero": 10,
    "name": "LAZARO LUIS SANTOS SILVERIO",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 6
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1373
  },
  {
    "numero": 11,
    "name": "LEONARDO RAMON BENTO MACHADO",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 5,
      "texto": 12
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1374
  },
  {
    "numero": 12,
    "name": "LOHAN DA SILVA MARCAL",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 10,
      "texto": 23
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1375
  },
  {
    "numero": 13,
    "name": "LORENZO HENRIQUE DA SILVA CASIMIRO MATHEUS",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 8,
      "texto": 11
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1376
  },
  {
    "numero": 14,
    "name": "MARIA JULIA DOS SANTOS HONORATO",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 11,
      "texto": 20
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1377
  },
  {
    "numero": 15,
    "name": "SAMUEL LUCAS DE ASSIS FERREIRA",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 8,
      "texto": 22
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1378
  },
  {
    "numero": 17,
    "name": "THAUANY MIRELA JORGE RODRIGUES",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 13,
      "pseudopalavras": 0,
      "texto": 11
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1379
  },
  {
    "numero": 18,
    "name": "YURI MATHEUS VALENTIN CABRAL",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "NÃO AVALIADO",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1380
  },
  {
    "numero": 19,
    "name": "REBECA SOUZA DE ALMEIDA",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 4,
      "texto": 9
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1381
  },
  {
    "numero": 20,
    "name": "ARTHUR LORENZO DE OLIVEIRA",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 18,
      "texto": 23
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1382
  },
  {
    "numero": 21,
    "name": "ISAQUE MIGUEL SANTOS",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 10,
      "pseudopalavras": 4,
      "texto": 9
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1383
  },
  {
    "numero": 22,
    "name": "KAUAN VICTOR DA SILVA LIJANSKI",
    "escola": "Orlando Pires, Prof.",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 10,
      "texto": 32
    },
    "sourceFile": "Orlando Pires, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1384
  },
  {
    "numero": 1,
    "name": "ANA JULIA MORAES DE MEDEIROS",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 20,
      "pseudopalavras": 8,
      "texto": 29
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1385
  },
  {
    "numero": 3,
    "name": "ANTONIO MARCO DE LIMA SILVA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 18,
      "pseudopalavras": 5,
      "texto": 12
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1386
  },
  {
    "numero": 4,
    "name": "ANTONY GABRIEL LEITE SILVA NOBREGA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 1,
      "texto": 9
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1387
  },
  {
    "numero": 5,
    "name": "AYLA BEATRIZ ALVES LEONEL DOS SANTOS",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1388
  },
  {
    "numero": 6,
    "name": "EMANUELLY EMBOAVA SERRA MELLO",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1389
  },
  {
    "numero": 9,
    "name": "GABRIEL ANDRADE SANTOS",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1390
  },
  {
    "numero": 10,
    "name": "GAEL VINICIUS DOS SANTOS ROSA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1391
  },
  {
    "numero": 11,
    "name": "ISABELLE SILVA MEDEIROS",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 1,
      "texto": 10
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1392
  },
  {
    "numero": 13,
    "name": "JOHNATA NATANAEL DA SILVA BARBOSA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 5,
      "texto": 15
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1393
  },
  {
    "numero": 14,
    "name": "KAUAN AZEVEDO BATISTA MEIRELES",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1394
  },
  {
    "numero": 15,
    "name": "LAURA ALVARENGA DE OLIVEIRA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1395
  },
  {
    "numero": 16,
    "name": "LUCCA MARTINS SILVA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 8,
      "texto": 17
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1396
  },
  {
    "numero": 17,
    "name": "MANUELA DA SILVA REIS",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1397
  },
  {
    "numero": 18,
    "name": "MARIA LUIZA VICENTE DE ANDRADE",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 16,
      "texto": 35
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1398
  },
  {
    "numero": 20,
    "name": "THEO HENRIQUE JESUS DE CARVALHO",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 26,
      "texto": 84
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1399
  },
  {
    "numero": 21,
    "name": "TOBIAS MODESTO DA SILVA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 21,
      "pseudopalavras": 12,
      "texto": 22
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1400
  },
  {
    "numero": 22,
    "name": "VITOR MIGUEL BICUDO CESARINO",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 13,
      "texto": 10
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1401
  },
  {
    "numero": 23,
    "name": "ESEQUIEL MIGOTO VELOZO",
    "escola": "Padre Zezinho",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1402
  },
  {
    "numero": 1,
    "name": "BRUNO HENRIQUE GONÇALVES LEME",
    "escola": "Padre Zezinho",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 29,
      "pseudopalavras": 20,
      "texto": 32
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1403
  },
  {
    "numero": 2,
    "name": "DAVI LUIZ LEITE DE SOUZA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 3,
      "texto": 6
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1404
  },
  {
    "numero": 3,
    "name": "DOMINIC OLIVEIRA COSTA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 5,
      "texto": 23
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1405
  },
  {
    "numero": 4,
    "name": "ENZO GABRIEL CORREA DUARTE",
    "escola": "Padre Zezinho",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1406
  },
  {
    "numero": 5,
    "name": "FERNANDO DAVI LEITE RODRIGUES",
    "escola": "Padre Zezinho",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 8,
      "texto": 29
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1407
  },
  {
    "numero": 6,
    "name": "GABRIEL NASCIMENTO FRANCA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 8,
      "texto": 28
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1408
  },
  {
    "numero": 7,
    "name": "HEITOR VEIGA LOPES",
    "escola": "Padre Zezinho",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 1,
      "texto": 18
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1409
  },
  {
    "numero": 8,
    "name": "ICARO RAFAEL DE OLIVEIRA BORGES",
    "escola": "Padre Zezinho",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 17,
      "pseudopalavras": 1,
      "texto": 16
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1410
  },
  {
    "numero": 9,
    "name": "IGOR KAUAN DA SILVA ELISIARIO",
    "escola": "Padre Zezinho",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1411
  },
  {
    "numero": 10,
    "name": "JEAN VITORIANO OLIVEIRA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 48,
      "pseudopalavras": 30,
      "texto": 84
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1412
  },
  {
    "numero": 11,
    "name": "LAURA CAETANO DA SILVA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 15,
      "texto": 40
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1413
  },
  {
    "numero": 12,
    "name": "LAURA ESPINDOLA FERRARI",
    "escola": "Padre Zezinho",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 16,
      "pseudopalavras": 11,
      "texto": 26
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1414
  },
  {
    "numero": 14,
    "name": "LUCAS GABRIEL PIAO",
    "escola": "Padre Zezinho",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1415
  },
  {
    "numero": 15,
    "name": "MANUELLA ROSA DE OLIVEIRA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 14,
      "texto": 27
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1416
  },
  {
    "numero": 16,
    "name": "MIGUEL JESUS DE OLIVEIRA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 49,
      "pseudopalavras": 21,
      "texto": 52
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1417
  },
  {
    "numero": 18,
    "name": "VALENTINA APARECIDA DE OLIVEIRA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 13,
      "pseudopalavras": 3,
      "texto": 5
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1418
  },
  {
    "numero": 1,
    "name": "AGATHA ELOA SILVERIO DA GLORIA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 20,
      "texto": 40
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1419
  },
  {
    "numero": 2,
    "name": "ALICIA VITORIA DOS SANTOS SILVA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1420
  },
  {
    "numero": 3,
    "name": "ANNIE CARVALHO DE ARAUJO",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 11,
      "texto": 31
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1421
  },
  {
    "numero": 4,
    "name": "ARTHUR DOS SANTOS LOPES",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 29,
      "texto": 109
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1422
  },
  {
    "numero": 5,
    "name": "ARTHUR GABRIELL ALMEIDA DOS SANTOS",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1423
  },
  {
    "numero": 6,
    "name": "AYLA MARIAH DA SILVA MENDES",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 3,
      "texto": 6
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1424
  },
  {
    "numero": 7,
    "name": "CARLOS ARTHUR DE MELLO SANTOS",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 14,
      "pseudopalavras": 3,
      "texto": 3
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1425
  },
  {
    "numero": 8,
    "name": "DAVI MIGUEL ALVES DA SILVA MACHADO",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "NÃO AVALIADO",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1426
  },
  {
    "numero": 9,
    "name": "EDUARDO BRAZ DOS SANTOS MENESES",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 9,
      "pseudopalavras": 3,
      "texto": 10
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1427
  },
  {
    "numero": 10,
    "name": "ELOAH GONCALVES ALVES",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 9,
      "texto": 17
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1428
  },
  {
    "numero": 11,
    "name": "EMANUELLY VITORIA CAVALCANTI ROCHA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1429
  },
  {
    "numero": 13,
    "name": "HEITOR ALMEIDA ELISIARIO",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 30,
      "texto": 74
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1430
  },
  {
    "numero": 14,
    "name": "HEITOR DA SILVA MENESES",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1431
  },
  {
    "numero": 15,
    "name": "ISAAC MARTINS DA SILVA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1432
  },
  {
    "numero": 16,
    "name": "JOAO PEDRO NOGUEIRA LINHARES MARTINS",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 28,
      "texto": 73
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1433
  },
  {
    "numero": 18,
    "name": "MARIA FERNANDA TORCHI SANTOS",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 15,
      "texto": 28
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1434
  },
  {
    "numero": 19,
    "name": "MARIA LUISA EFIGENIO REIS",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 50,
      "pseudopalavras": 28,
      "texto": 94
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1435
  },
  {
    "numero": 20,
    "name": "RHAEL DAVID RIBEIRO DA SILVA",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 15,
      "texto": 14
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1436
  },
  {
    "numero": 21,
    "name": "SOPHIA SILVA PASINKEVICIUS",
    "escola": "Padre Zezinho",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Padre Zezinho EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1437
  },
  {
    "numero": 1,
    "name": "ALICE KYARA DA SILVA OLIVEIRA",
    "escola": "Paulo Freire, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 13,
      "texto": 18
    },
    "sourceFile": "Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1438
  },
  {
    "numero": 3,
    "name": "GAEL BOANI MARCONDES DE LIMA GODOY",
    "escola": "Paulo Freire, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1439
  },
  {
    "numero": 4,
    "name": "GIOVANNA GUSMAO AGUIRRA",
    "escola": "Paulo Freire, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 56,
      "texto": 56
    },
    "sourceFile": "Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1440
  },
  {
    "numero": 5,
    "name": "JOYCE MARIA SAMPAIO DE SOUZA",
    "escola": "Paulo Freire, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 5,
      "texto": 16
    },
    "sourceFile": "Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1441
  },
  {
    "numero": 6,
    "name": "KAUAN BRYAN APARECIDO RIBEIRO",
    "escola": "Paulo Freire, Prof.",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1442
  },
  {
    "numero": 8,
    "name": "LUANA MARIA DE PAULA LIMA",
    "escola": "Paulo Freire, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 0,
      "texto": 9
    },
    "sourceFile": "Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1443
  },
  {
    "numero": 11,
    "name": "NOAH MIGUEL DA SILVA SANTOS",
    "escola": "Paulo Freire, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1444
  },
  {
    "numero": 12,
    "name": "PIETRO PENNA DE CARVALHO PINA",
    "escola": "Paulo Freire, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 11,
      "texto": 37
    },
    "sourceFile": "Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1445
  },
  {
    "numero": 13,
    "name": "TALIA DE SOUZA ROMAO",
    "escola": "Paulo Freire, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 1,
      "texto": 0
    },
    "sourceFile": "Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1446
  },
  {
    "numero": 15,
    "name": "THEO RAVI DA SILVA OLIVEIRA",
    "escola": "Paulo Freire, Prof.",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 0,
      "texto": 20
    },
    "sourceFile": "Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1447
  },
  {
    "numero": 17,
    "name": "VIVIANE ZHANG YU",
    "escola": "Paulo Freire, Prof.",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 16,
      "pseudopalavras": 1,
      "texto": 16
    },
    "sourceFile": "Paulo Freire, Prof. EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1448
  },
  {
    "numero": 1,
    "name": "ADRIANO RUFINO DE FARIAS II",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 9,
      "texto": 24
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1449
  },
  {
    "numero": 2,
    "name": "ANA CLARA DOS SANTOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "NÃO AVALIADO",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1450
  },
  {
    "numero": 3,
    "name": "ARTHUR MIGUEL SAMPAIO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1451
  },
  {
    "numero": 4,
    "name": "BRYAN DE OLIVEIRA SANTOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1452
  },
  {
    "numero": 5,
    "name": "DAVI MIGUEL COSTA VASCONCELOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 17,
      "texto": 40
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1453
  },
  {
    "numero": 6,
    "name": "ELISA DA CONCEICAO RIBEIRO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1454
  },
  {
    "numero": 7,
    "name": "GAEL BRANDAO RUTTER PINA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1455
  },
  {
    "numero": 8,
    "name": "GUILHERME HENRIQUE DOS SANTOS DA SILVA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1456
  },
  {
    "numero": 9,
    "name": "HELENA ANDRADE DE CARVALHO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 2,
      "texto": 10
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1457
  },
  {
    "numero": 10,
    "name": "HELENA LARA BOANI DUBSKY",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 4,
      "texto": 4
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1458
  },
  {
    "numero": 11,
    "name": "HELLOÁ CRISTINE DE JESUS MELLO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1459
  },
  {
    "numero": 12,
    "name": "HELOISA MAXIMO DE OLIVEIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1460
  },
  {
    "numero": 13,
    "name": "ISABELLA KAROLINY DE CAMARGO SILVA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 12,
      "texto": 23
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1461
  },
  {
    "numero": 14,
    "name": "JOAO LUCAS DE OLIVEIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 8,
      "texto": 23
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1462
  },
  {
    "numero": 15,
    "name": "KESLEY ALEXANDRE SANTOS RODELLA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1463
  },
  {
    "numero": 16,
    "name": "LORENZO RANGEL LUIZ",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 5,
      "texto": 28
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1464
  },
  {
    "numero": 17,
    "name": "MANUELLA CAMPOS DE OLIVEIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 16,
      "texto": 23
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 1465
  },
  {
    "numero": 19,
    "name": "ZOE LEFEVRE DA FONSECA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 1466
  },
  {
    "numero": 21,
    "name": "KALLEBE INIESTA ESTEVAM BORGES",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 1467
  },
  {
    "numero": 22,
    "name": "MIGUEL GUEDES MOREIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 1468
  },
  {
    "numero": 1,
    "name": "DANIEL DE JESUS SANTOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1469
  },
  {
    "numero": 2,
    "name": "ELOAH VITORIA CORDEIRO MARTINS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 3,
      "texto": 4
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1470
  },
  {
    "numero": 3,
    "name": "ENZO DE ALMEIDA MARTINEZ",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 22,
      "texto": 90
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1471
  },
  {
    "numero": 4,
    "name": "HEITOR RODRIGO SOUSA DE SIQUEIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 6,
      "pseudopalavras": 3,
      "texto": 2
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1472
  },
  {
    "numero": 5,
    "name": "JOAO LUCAS DE ALMEIDA FURTADO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 6,
      "pseudopalavras": 1,
      "texto": 9
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1473
  },
  {
    "numero": 6,
    "name": "JOAO MIGUEL RAMOS DE SOUZA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1474
  },
  {
    "numero": 7,
    "name": "JOAQUIM ALVES DOS SANTOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 7,
      "texto": 21
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1475
  },
  {
    "numero": 9,
    "name": "MARIA CECILIA EVARISTO CHAGAS DE SIQUEIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1476
  },
  {
    "numero": 10,
    "name": "MARIA HELENA DELPHINO DE OLIVEIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1477
  },
  {
    "numero": 12,
    "name": "MATHIAS DOS SANTOS EUZEBIO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 2,
      "pseudopalavras": 3,
      "texto": 1
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1478
  },
  {
    "numero": 13,
    "name": "MIRELY VITORIA RIBEIRO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1479
  },
  {
    "numero": 14,
    "name": "PEDRO HENRIQUE SANTANA DE ALMEIDA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 17,
      "texto": 54
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1480
  },
  {
    "numero": 16,
    "name": "PIETRO WILLIAN DE CARVALHO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 9,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1481
  },
  {
    "numero": 17,
    "name": "RAFAELA CORREA DE CARVALHO GARCIA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 0,
      "texto": 8
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1482
  },
  {
    "numero": 18,
    "name": "YAGO PEDRO DE OLIVEIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 0,
      "texto": 7
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1483
  },
  {
    "numero": 19,
    "name": "MANUELA YARIM DE PAULA FERREIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 6,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1484
  },
  {
    "numero": 22,
    "name": "SOPHIA GABRIELA FERNANDES",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1485
  },
  {
    "numero": 23,
    "name": "MARIA LUISA MELO DE OLIVEIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1486
  },
  {
    "numero": 26,
    "name": "NOAH DOS SANTOS ELIAS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1487
  },
  {
    "numero": 1,
    "name": "ALANA VITORIA DE OLIVEIRA CORREA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1488
  },
  {
    "numero": 2,
    "name": "ALLANA VALENTINA DA SILVA GABRIEL",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 36,
      "texto": 78
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1489
  },
  {
    "numero": 5,
    "name": "ANTONIO AUGUSTO RIBEIRO SILVESTRE",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 18,
      "texto": 49
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1490
  },
  {
    "numero": 6,
    "name": "ARTHUR FRANCISCO SALVADOR DOS SANTOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 2,
      "texto": 13
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1491
  },
  {
    "numero": 8,
    "name": "BRYAN SERRATI DO PRADO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 2,
      "texto": 9
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1492
  },
  {
    "numero": 9,
    "name": "CESAR HENRIQUE DA SILVA FRANÇA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 6,
      "texto": 20
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1493
  },
  {
    "numero": 10,
    "name": "ENZO LUCCA MOREIRA DOS SANTOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 21,
      "pseudopalavras": 7,
      "texto": 23
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1494
  },
  {
    "numero": 12,
    "name": "HEITOR CEZAR DE CARVALHO",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 27,
      "texto": 28
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1495
  },
  {
    "numero": 13,
    "name": "HILDA HELENA BERNARDES LISBOA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 16,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1496
  },
  {
    "numero": 14,
    "name": "JULIA COLMAN DE DEUS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 13,
      "texto": 29
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1497
  },
  {
    "numero": 15,
    "name": "KAUE LUCCAN DOS SANTOS SILVA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 16,
      "texto": 29
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1498
  },
  {
    "numero": 16,
    "name": "LARISSA DE FARIA FREITAS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1499
  },
  {
    "numero": 17,
    "name": "LAURA CAVALCA DA SILVA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 26,
      "texto": 44
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1500
  },
  {
    "numero": 18,
    "name": "LAVINIA GABRIELLI TEOFILO DOS SANTOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 17,
      "texto": 34
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1501
  },
  {
    "numero": 19,
    "name": "LIZ HELENA DOS SANTOS MATTOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 12,
      "texto": 32
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1502
  },
  {
    "numero": 20,
    "name": "LUIZ GABRIEL PEREIRA FERREIRA DE OLIVEIRA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 24,
      "texto": 44
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1503
  },
  {
    "numero": 21,
    "name": "MANUELA APARECIDA NICOLETTI BONFIM",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 16,
      "texto": 9
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1504
  },
  {
    "numero": 22,
    "name": "MANUELA DE SOUZA ALVES",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1505
  },
  {
    "numero": 23,
    "name": "MARIA EDUARDA FERNANDES TEBERGA DA SILVA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 17,
      "texto": 31
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1506
  },
  {
    "numero": 24,
    "name": "MARIA LAURA VIEIRA SANTOS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 12,
      "texto": 28
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1507
  },
  {
    "numero": 25,
    "name": "MIGUEL DOS SANTOS ASSIS",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 19,
      "texto": 34
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1508
  },
  {
    "numero": 26,
    "name": "MARIA HELOISA CASTRO SILVA",
    "escola": "Rachel de Aguiar Loberto, Profª",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "Rachel de Aguiar Loberto, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1509
  },
  {
    "numero": 1,
    "name": "AMANDA HELENA CARVALHO DE ASSIS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 9,
      "pseudopalavras": 2,
      "texto": 11
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1510
  },
  {
    "numero": 2,
    "name": "ANA JULIA DE JESUS DOS SANTOS GALVAO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1511
  },
  {
    "numero": 3,
    "name": "ANA LAURA DOS SANTOS MARCONDES",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 3,
      "texto": 25
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1512
  },
  {
    "numero": 4,
    "name": "CATHARINA BUENO MONTEIRO CABRAL",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 5,
      "texto": 23
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1513
  },
  {
    "numero": 5,
    "name": "ERICK INACIO RODRIGUES",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1514
  },
  {
    "numero": 7,
    "name": "JOAO VITOR SANTIAGO DE LIMA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 1,
      "texto": 7
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1515
  },
  {
    "numero": 8,
    "name": "JULIA MALOSTI COUTO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1516
  },
  {
    "numero": 9,
    "name": "LAURA SIMOES LIMA DOS SANTOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1517
  },
  {
    "numero": 10,
    "name": "MARIA CECILIA MOREIRA GALLO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1518
  },
  {
    "numero": 11,
    "name": "MARIA SOPHIA MARTINI",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1519
  },
  {
    "numero": 12,
    "name": "MATHEUS DOS SANTOS ISRAEL",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1520
  },
  {
    "numero": 13,
    "name": "MELLYSSA EMANUELLY SANTANA DE OLIVEIRA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1521
  },
  {
    "numero": 16,
    "name": "YAGO KALEL DE SOUZA GODOI",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1522
  },
  {
    "numero": 17,
    "name": "HELENA VICENTINI FERREIRA MACHADO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 3,
      "pseudopalavras": 1,
      "texto": 8
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1523
  },
  {
    "numero": 18,
    "name": "FERNANDA DE SOUZA GARCIA AVELINO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1524
  },
  {
    "numero": 1,
    "name": "ALICE GABRIELLY DOS SANTOS MAIA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1525
  },
  {
    "numero": 3,
    "name": "ANA VITORIA RIBEIRO DE ANDRADE",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 2,
      "texto": 5
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1526
  },
  {
    "numero": 4,
    "name": "BRENO PEREIRA DE SOUZA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1527
  },
  {
    "numero": 6,
    "name": "EMANUELLY BIANCA DOS SANTOS GOUVEA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 19,
      "pseudopalavras": 12,
      "texto": 23
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1528
  },
  {
    "numero": 8,
    "name": "GABRIEL CORREIA VENANCIO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1529
  },
  {
    "numero": 9,
    "name": "IAGO SOUZA OLIVEIRA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 2,
      "texto": 5
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1530
  },
  {
    "numero": 10,
    "name": "LIZ EDUARDA MILANI DOS SANTOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 0,
      "texto": 2
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1531
  },
  {
    "numero": 13,
    "name": "MARCOS VINICIUS DE CARVALHO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1532
  },
  {
    "numero": 15,
    "name": "MELISSA YASMIN DOS SANTOS ANTUNES",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1533
  },
  {
    "numero": 16,
    "name": "MURYLO FELIPE DE MELO SILVA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 5,
      "texto": 33
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1534
  },
  {
    "numero": 17,
    "name": "NOEMY GABRIELLY DE JESUS SILVA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1535
  },
  {
    "numero": 18,
    "name": "SAMUEL RIBEIRO DA SILVA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 5,
      "texto": 17
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1536
  },
  {
    "numero": 19,
    "name": "TALITA VITORIA VIANA REIS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1537
  },
  {
    "numero": 20,
    "name": "THEODORO RIVAU CASSIANO DOS SANTOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1538
  },
  {
    "numero": 21,
    "name": "MARIA ISABELLY DOS SANTOS MARTINS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1539
  },
  {
    "numero": 22,
    "name": "MELISSAMANUELA CAMPOS DOS REIS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 22,
      "texto": 58
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1540
  },
  {
    "numero": 1,
    "name": "ALANA SANTOS CAMPOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 5,
      "texto": 28
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 1541
  },
  {
    "numero": 5,
    "name": "AORI LOURENCO KAWAKAMI COSTA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 16,
      "texto": 37
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 1542
  },
  {
    "numero": 6,
    "name": "BEATRIZ EDUARDA TAKEZAWA RAMOS DOS SANTOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 6,
      "texto": 20
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 1543
  },
  {
    "numero": 7,
    "name": "ELEANDRA SILVA CURSINO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 1544
  },
  {
    "numero": 8,
    "name": "HELENA MOREIRA DA SILVA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 7,
      "texto": 16
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 1,
    "id": 1545
  },
  {
    "numero": 9,
    "name": "HELOISA HELENA DOMINGOS SILVA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 1546
  },
  {
    "numero": 10,
    "name": "JHONATAN WESLEY FARIA AUGUSTO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 1547
  },
  {
    "numero": 11,
    "name": "JOAO PAULO MARCONDES DE OLIVEIRA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 1548
  },
  {
    "numero": 12,
    "name": "KAUAN GABRIEL SILVA DE CAMPOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 1549
  },
  {
    "numero": 14,
    "name": "LIVIA ANDRADE TEODORO",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 1550
  },
  {
    "numero": 17,
    "name": "MIRELLA DE SOUZA PEREIRA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 15,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 2,
    "id": 1551
  },
  {
    "numero": 18,
    "name": "THOMAS RICARDO GREGORIO DE MOURA ARRUDA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 1552
  },
  {
    "numero": 19,
    "name": "VITORIA CRISTINA PURCINO LEITE",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 14,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 1553
  },
  {
    "numero": 20,
    "name": "RAFAEL CHINAQUI DOS REIS LINS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 10,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 1554
  },
  {
    "numero": 21,
    "name": "BRYAN DERIK RIBEIRO MARQUES",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 3,
    "id": 1555
  },
  {
    "numero": 22,
    "name": "NICOLLY DUARTE DE OLIVEIRA JOANA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 0,
      "texto": 8
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 4,
    "id": 1556
  },
  {
    "numero": 23,
    "name": "LUCCA EDUARDO ALVES SILVA",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 4,
    "id": 1557
  },
  {
    "numero": 25,
    "name": "NATHALIE RAFAELLY SANTANA DE MATOS",
    "escola": "Regina Célia M. de Souza Lima",
    "turma": "1º ANO D",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Regina Célia M. de Souza Lima EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO D.pdf",
    "sourcePage": 4,
    "id": 1558
  },
  {
    "numero": 2,
    "name": "ARTHUR SOUZA CRUZ DELFINO",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 5,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1559
  },
  {
    "numero": 3,
    "name": "AYLLA MIRELA DOS SANTOS SILVA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 8,
      "texto": 29
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1560
  },
  {
    "numero": 4,
    "name": "CAIO LIMA DE PAULA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 14,
      "texto": 28
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1561
  },
  {
    "numero": 5,
    "name": "ELOA VITORIA DA SILVA MARTINS",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 11,
      "texto": 31
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1562
  },
  {
    "numero": 7,
    "name": "HELOISA CARVALHO DE SOUZA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 22,
      "texto": 53
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1563
  },
  {
    "numero": 8,
    "name": "HELOISA DIAS MOREIRA SALGADO",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 31,
      "pseudopalavras": 19,
      "texto": 34
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1564
  },
  {
    "numero": 9,
    "name": "ISAAC SAVITE DOS SANTOS",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 40,
      "texto": 109
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1565
  },
  {
    "numero": 10,
    "name": "JULIA SILVA AQUINO DE SANTANA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 20,
      "texto": 50
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1566
  },
  {
    "numero": 11,
    "name": "LAURA DOS SANTOS ALVES",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 24,
      "pseudopalavras": 15,
      "texto": 25
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1567
  },
  {
    "numero": 12,
    "name": "LEVI AFONSO MARCHINI",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 42,
      "pseudopalavras": 17,
      "texto": 58
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1568
  },
  {
    "numero": 13,
    "name": "LORENZO AUGUSTO LIMA DA SILVA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1569
  },
  {
    "numero": 14,
    "name": "MANUELLA HELENA APARECIDA DA SILVA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 8,
      "texto": 20
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1570
  },
  {
    "numero": 15,
    "name": "MARIA OLIVIA DE OLIVEIRA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 13,
      "texto": 32
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1571
  },
  {
    "numero": 16,
    "name": "MOISES DE MATOS SOUZA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 8,
      "texto": 15
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1572
  },
  {
    "numero": 17,
    "name": "MURILLO HENRIQUE DOS SANTOS SILVA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 11,
      "texto": 20
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1573
  },
  {
    "numero": 18,
    "name": "SAMUEL ALEXSANDER VILELA DE PAULA LOURENCO",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "NÃO AVALIADO",
    "s1Details": {
      "modo": "Não leu",
      "palavras": null,
      "pseudopalavras": null,
      "texto": null
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1574
  },
  {
    "numero": 19,
    "name": "VICTOR COELHO DO ESPIRITO SANTO",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 1575
  },
  {
    "numero": 21,
    "name": "ADRIAN MIGUEL CUSTODIO DE CARVALHO",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 1576
  },
  {
    "numero": 1,
    "name": "AGATHA IRACY DOS SANTOS SOUZA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 4,
      "pseudopalavras": 2,
      "texto": 3
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1577
  },
  {
    "numero": 2,
    "name": "ARTHUR MIGUEL SANTOS DA SILVA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1578
  },
  {
    "numero": 3,
    "name": "ARTHUR VINICIUS DA SILVA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1579
  },
  {
    "numero": 4,
    "name": "DIOGO IURI DE LIMA CORREA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1580
  },
  {
    "numero": 5,
    "name": "EDUARDO MARQUES DE CAMPOS LEITE",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 6,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1581
  },
  {
    "numero": 6,
    "name": "HEITOR GABRIEL FERREIRA DA SILVA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 8,
      "pseudopalavras": 2,
      "texto": 11
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1582
  },
  {
    "numero": 7,
    "name": "HELOISA MACIEL ROSA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 10,
      "texto": 19
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1583
  },
  {
    "numero": 8,
    "name": "ISABELLA DE ALARCAO CARVALHO",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 6,
      "pseudopalavras": 1,
      "texto": 4
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1584
  },
  {
    "numero": 9,
    "name": "MARIA FERNANDA DE MELO",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 15,
      "texto": 25
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1585
  },
  {
    "numero": 10,
    "name": "MELLISSA VICTORIA MARTINS BENTO",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 6,
      "texto": 8
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1586
  },
  {
    "numero": 11,
    "name": "RYANE VITORIA OLIVEIRA DIAS",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1587
  },
  {
    "numero": 12,
    "name": "SERENA MARIA CARDOSO DOS SANTOS",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 35,
      "texto": 52
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1588
  },
  {
    "numero": 13,
    "name": "VALENTINA EMILIANO MOREIRA DA SILVA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1589
  },
  {
    "numero": 14,
    "name": "YURI GAEL DE CARVALHO LIMA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 8,
      "pseudopalavras": 2,
      "texto": 2
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1590
  },
  {
    "numero": 15,
    "name": "MATHEUS LEVI CORREA DE SOUZA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 2,
      "pseudopalavras": 1,
      "texto": 0
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1591
  },
  {
    "numero": 16,
    "name": "ARTHUR DANIEL VALIM DA SILVA",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 35,
      "texto": 109
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1592
  },
  {
    "numero": 18,
    "name": "MATHEUS LEVI MOREIRA ARRONGE",
    "escola": "Ruth Azevedo Romeiro, Profª",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 1
    },
    "sourceFile": "Ruth Azevedo Romeiro, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1593
  },
  {
    "numero": 1,
    "name": "AGATHA SOFIA DE OLIVEIRA NUNES DA SILVA",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 11,
      "texto": 25
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1594
  },
  {
    "numero": 2,
    "name": "ALANA LEMES DE MENEZES",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 5,
      "texto": 12
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1595
  },
  {
    "numero": 3,
    "name": "ALICE MARIA FREITAS VALERIO",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 8,
      "texto": 20
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1596
  },
  {
    "numero": 5,
    "name": "GABRIEL DOS SANTOS DA CRUZ",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 11,
      "texto": 19
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1597
  },
  {
    "numero": 6,
    "name": "GABRIEL HENRIQUE MENDES DA SILVA",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 4,
      "texto": 12
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1598
  },
  {
    "numero": 7,
    "name": "HEITOR HENRIQUE RIBEIRO DOS SANTOS",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 37,
      "pseudopalavras": 23,
      "texto": 38
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1599
  },
  {
    "numero": 8,
    "name": "HEITOR SILVA DA GLORIA",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1600
  },
  {
    "numero": 9,
    "name": "HELOA PAIXAO DE OLIVEIRA",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1601
  },
  {
    "numero": 10,
    "name": "HENRIQUE GABRIEL DE JESUS COSTA",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1602
  },
  {
    "numero": 11,
    "name": "HENRY FOGAÇA BERTHOU",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1603
  },
  {
    "numero": 12,
    "name": "ISADORA GONÇALVES INOCENCIO",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 33,
      "pseudopalavras": 17,
      "texto": 54
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1604
  },
  {
    "numero": 13,
    "name": "KALEBE GONCALVES MONTEIRO DE BARROS",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 47,
      "pseudopalavras": 23,
      "texto": 72
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1605
  },
  {
    "numero": 14,
    "name": "LUIZA SANTOS GONCALVES",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 38,
      "pseudopalavras": 23,
      "texto": 54
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1606
  },
  {
    "numero": 15,
    "name": "MAISA PEREIRA REGIS",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 55,
      "pseudopalavras": 27,
      "texto": 105
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1607
  },
  {
    "numero": 16,
    "name": "MANUELA FREITAS DE ALMEIDA",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 26,
      "pseudopalavras": 11,
      "texto": 32
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1608
  },
  {
    "numero": 17,
    "name": "MANUELLA RIBEIRO DA SILVA",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1609
  },
  {
    "numero": 18,
    "name": "MANUELLA VITORIA MARTINS MACHADO",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 9,
      "pseudopalavras": 4,
      "texto": 9
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1610
  },
  {
    "numero": 19,
    "name": "MARIA ANTONELLA ANDRE CABRAL DA SILVA",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 13,
      "pseudopalavras": 7,
      "texto": 15
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1611
  },
  {
    "numero": 20,
    "name": "MARIA JULIA SILVA SANTOS",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 16,
      "pseudopalavras": 11,
      "texto": 32
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1612
  },
  {
    "numero": 22,
    "name": "VALENTINA HELENA SILVA SANTOS",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 6,
      "texto": 12
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 5,
    "id": 1613
  },
  {
    "numero": 1,
    "name": "ALICE DA SILVA NASCIMENTO",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 6,
      "texto": 12
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1614
  },
  {
    "numero": 2,
    "name": "ANTONELLA MARCONDES DA CONCEIÇAO FERREIRA",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 6,
      "texto": 13
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1615
  },
  {
    "numero": 3,
    "name": "AYSHA VALENTINA DA SILVA HONORIO",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 3,
      "pseudopalavras": 0,
      "texto": 2
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 1,
    "id": 1616
  },
  {
    "numero": 4,
    "name": "BERNARDO HENRIQUE JAÇAO SANTOS",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 45,
      "pseudopalavras": 31,
      "texto": 56
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1617
  },
  {
    "numero": 5,
    "name": "BRUNO HENRIQUE SOUZA AMORIM",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 14,
      "pseudopalavras": 5,
      "texto": 12
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1618
  },
  {
    "numero": 7,
    "name": "DAVI ALEXANDRE LEMES PINTO",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 34,
      "pseudopalavras": 20,
      "texto": 29
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1619
  },
  {
    "numero": 8,
    "name": "DEBORA MENDES SILVA",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 8,
      "pseudopalavras": 1,
      "texto": 4
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1620
  },
  {
    "numero": 9,
    "name": "GUSTAVO XAVIER BARBOSA",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LF",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 34,
      "texto": 103
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1621
  },
  {
    "numero": 11,
    "name": "HELENA SILVA DA GLORIA",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 2,
    "id": 1622
  },
  {
    "numero": 12,
    "name": "HELENA VITORIA PASSOS DE MOURA",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1623
  },
  {
    "numero": 13,
    "name": "HELOISA ARAUJO TRINDADE",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 12,
      "pseudopalavras": 5,
      "texto": 8
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1624
  },
  {
    "numero": 14,
    "name": "JOSE RICHARD FRANÇA",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 8,
      "texto": 18
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1625
  },
  {
    "numero": 15,
    "name": "LAURA DA PALMA MORAES GLATZ",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 41,
      "pseudopalavras": 25,
      "texto": 47
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1626
  },
  {
    "numero": 16,
    "name": "MAITE VITORIA DA SILVA CARLOTA SOARES",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 2,
      "texto": 4
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1627
  },
  {
    "numero": 17,
    "name": "MANUELLY KAROLAYNNE DE OLIVEIRA DIAS",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 10,
      "texto": 27
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1628
  },
  {
    "numero": 18,
    "name": "MELL DA SILVA RODRIGUES",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 40,
      "pseudopalavras": 27,
      "texto": 53
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 3,
    "id": 1629
  },
  {
    "numero": 19,
    "name": "MIRELA AMORIM CARDOSO",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 52,
      "pseudopalavras": 31,
      "texto": 58
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1630
  },
  {
    "numero": 20,
    "name": "OLIVIA MARQUES DE CARVALHO",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 5,
      "texto": 10
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1631
  },
  {
    "numero": 22,
    "name": "OTAVIO MIGUEL DE MEDEIROS",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 30,
      "pseudopalavras": 15,
      "texto": 30
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1632
  },
  {
    "numero": 23,
    "name": "RAIZO SOUZA HERCULANO",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 27,
      "pseudopalavras": 17,
      "texto": 26
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1633
  },
  {
    "numero": 24,
    "name": "SOPHIA EMANUELLE FARIAS CARDOSO",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 1,
      "texto": 2
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1634
  },
  {
    "numero": 25,
    "name": "THEO RODRIGUES RIBEIRO FARIA MINA",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 18,
      "texto": 34
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1635
  },
  {
    "numero": 26,
    "name": "THEO VIRIATO FRANCISCO",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 28,
      "pseudopalavras": 18,
      "texto": 31
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 4,
    "id": 1636
  },
  {
    "numero": 27,
    "name": "YASMIN APARECIDA SILVA RAMOS",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 5,
      "texto": 15
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 5,
    "id": 1637
  },
  {
    "numero": 28,
    "name": "YASMIN TEIXEIRA DE SANTANA",
    "escola": "Serafim Ferreira",
    "turma": "1º ANO C",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 3,
      "pseudopalavras": 3,
      "texto": 3
    },
    "sourceFile": "Serafim Ferreira EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO C.pdf",
    "sourcePage": 5,
    "id": 1638
  },
  {
    "numero": 1,
    "name": "ALEX JULIO DA SILVA MATOS JUNIOR",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 9,
      "pseudopalavras": 8,
      "texto": 16
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1639
  },
  {
    "numero": 2,
    "name": "ALLICIA VITORIA OLIVEIRA PORTUGAL",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 9,
      "pseudopalavras": 0,
      "texto": 8
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1640
  },
  {
    "numero": 3,
    "name": "ANNA ELISA MOURAO DA SILVA SANTIAGO",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 20,
      "pseudopalavras": 9,
      "texto": 14
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1641
  },
  {
    "numero": 4,
    "name": "CAIO INACIO RIBEIRO",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 4,
      "texto": 18
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1642
  },
  {
    "numero": 5,
    "name": "ELOAH VICTORIA GONCALVES OLIVEIRA SILVA SANTOS",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 36,
      "pseudopalavras": 19,
      "texto": 37
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1643
  },
  {
    "numero": 6,
    "name": "EMANUELLY BEATRIZ DOS SANTOS OLIVEIRA",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 4,
      "pseudopalavras": 4,
      "texto": 5
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1644
  },
  {
    "numero": 7,
    "name": "GUILHERME VINICIUS DA SILVA CAMPOS",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1645
  },
  {
    "numero": 8,
    "name": "HELENA ALMEIDA DOS SANTOS",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 7,
      "pseudopalavras": 3,
      "texto": 7
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1646
  },
  {
    "numero": 9,
    "name": "ISABELA LOPES CORREA LUDUCENA",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 7,
      "texto": 18
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1647
  },
  {
    "numero": 10,
    "name": "ISRAEL DE JESUS DE SOUZA CARVALHO",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 5,
      "pseudopalavras": 4,
      "texto": 6
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1648
  },
  {
    "numero": 11,
    "name": "IZABELLE HELENA DA CRUZ SILVA",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 3,
      "texto": 11
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1649
  },
  {
    "numero": 12,
    "name": "JOAO LUCAS APOLINARIO PEREIRA LEITE",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 22,
      "pseudopalavras": 11,
      "texto": 23
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1650
  },
  {
    "numero": 13,
    "name": "LARA VITÓRIA BRANDÃO DE OLIVEIRA",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 5,
      "pseudopalavras": 5,
      "texto": 3
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1651
  },
  {
    "numero": 15,
    "name": "LUKA SAMUEL DA SILVA FERREIRA ALVES",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 12,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1652
  },
  {
    "numero": 16,
    "name": "MARIA HELENA DE ANDRADE APOLINARIO",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1653
  },
  {
    "numero": 18,
    "name": "MIRELLA MARQUES RAIMUNDO SOARES",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 35,
      "pseudopalavras": 13,
      "texto": 43
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1654
  },
  {
    "numero": 19,
    "name": "REBECA RODRIGUES DE SOUZA",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 25,
      "pseudopalavras": 7,
      "texto": 24
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1655
  },
  {
    "numero": 20,
    "name": "THALES GABRIEL ARAUJO",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 21,
      "pseudopalavras": 8,
      "texto": 5
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1656
  },
  {
    "numero": 21,
    "name": "URSULA VITORIA DA SILVA GOUVEA",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 13,
      "pseudopalavras": 5,
      "texto": 8
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1657
  },
  {
    "numero": 23,
    "name": "CARLOS EDUARDO DA SILVA IGNACIO",
    "escola": "Vito Ardito",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 7,
      "pseudopalavras": 1,
      "texto": 5
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1658
  },
  {
    "numero": 1,
    "name": "ARTHUR FIRMINO ELIAS TORRES",
    "escola": "Vito Ardito",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 5,
      "texto": 20
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1659
  },
  {
    "numero": 2,
    "name": "BERNARDO SATLER MARCONDES LEME DE MELO",
    "escola": "Vito Ardito",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 8,
      "pseudopalavras": 0,
      "texto": 6
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1660
  },
  {
    "numero": 3,
    "name": "BRYAN WILLIAM SILVA",
    "escola": "Vito Ardito",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 60,
      "pseudopalavras": 28,
      "texto": 82
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 1,
    "id": 1661
  },
  {
    "numero": 4,
    "name": "DANIEL LUIZ RAMOS DE OLIVEIRA",
    "escola": "Vito Ardito",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 10,
      "texto": 29
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1662
  },
  {
    "numero": 5,
    "name": "ELIZABETH HELENA CARVALHO DE SOUZA",
    "escola": "Vito Ardito",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 1,
      "texto": 11
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1663
  },
  {
    "numero": 6,
    "name": "GUSTAVO RODRIGUES",
    "escola": "Vito Ardito",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 39,
      "pseudopalavras": 18,
      "texto": 46
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1664
  },
  {
    "numero": 7,
    "name": "ISADORA FERREIRA DA SILVA",
    "escola": "Vito Ardito",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 32,
      "pseudopalavras": 15,
      "texto": 45
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 2,
    "id": 1665
  },
  {
    "numero": 8,
    "name": "KATHLEEN VITORIA DE CARVALHO",
    "escola": "Vito Ardito",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 9,
      "pseudopalavras": 4,
      "texto": 8
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1666
  },
  {
    "numero": 9,
    "name": "KEMILLY GERALDA BONIFACIO DOS SANTOS",
    "escola": "Vito Ardito",
    "turma": "1º ANO B",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 5
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1667
  },
  {
    "numero": 12,
    "name": "MANUELLA ALVES DE SOUZA OLIMPIO",
    "escola": "Vito Ardito",
    "turma": "1º ANO B",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 6,
      "pseudopalavras": 3,
      "texto": 8
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 3,
    "id": 1668
  },
  {
    "numero": 16,
    "name": "SOPHIA VITORYA DE MORAES HERMENEGILDO",
    "escola": "Vito Ardito",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 17,
      "pseudopalavras": 5,
      "texto": 11
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1669
  },
  {
    "numero": 18,
    "name": "VALENTIM FONSECA BENTO",
    "escola": "Vito Ardito",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 5,
      "texto": 18
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1670
  },
  {
    "numero": 19,
    "name": "ANNA LIVIA FREITAS DE MELO",
    "escola": "Vito Ardito",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 6,
      "texto": 25
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1671
  },
  {
    "numero": 20,
    "name": "YURI LUCCA LOPES FERFEIRA",
    "escola": "Vito Ardito",
    "turma": "1º ANO B",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 23,
      "pseudopalavras": 17,
      "texto": 32
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 4,
    "id": 1672
  },
  {
    "numero": 21,
    "name": "BRYAN RUIZ QUEIROZ DA CRUZ",
    "escola": "Vito Ardito",
    "turma": "1º ANO B",
    "s1": "N2",
    "s1Details": {
      "modo": "Soletrou",
      "palavras": 9,
      "pseudopalavras": 6,
      "texto": 11
    },
    "sourceFile": "Vito Ardito EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO B.pdf",
    "sourcePage": 5,
    "id": 1673
  },
  {
    "numero": 1,
    "name": "ALANA GABRIELY LORENA DA SILVA",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1674
  },
  {
    "numero": 3,
    "name": "ARTHUR LEITE DO NASCIMENTO",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1675
  },
  {
    "numero": 4,
    "name": "BENJAMIN SOUZA LUCAS",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1676
  },
  {
    "numero": 5,
    "name": "BRIAN LEVI ALESSI RAMOS DE LIMA",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 8,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1677
  },
  {
    "numero": 6,
    "name": "BRYAN DOUGLAS DE JESUS DA SILVA",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 8,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 1,
    "id": 1678
  },
  {
    "numero": 7,
    "name": "BRYAN ROCHA SIQUEIRA",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 18,
      "pseudopalavras": 4,
      "texto": 0
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1679
  },
  {
    "numero": 8,
    "name": "HAYLLAH BEATRIZ FURTADO FREITAS DE ABREU",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1680
  },
  {
    "numero": 9,
    "name": "JONATAS ALAN FREIRE JUNIOR",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 4,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1681
  },
  {
    "numero": 10,
    "name": "JORGE HENRIQUE DE JESUS ALVES",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 9,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1682
  },
  {
    "numero": 11,
    "name": "LIA RIBEIRO BASTOS",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 15,
      "pseudopalavras": 3,
      "texto": 10
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 2,
    "id": 1683
  },
  {
    "numero": 12,
    "name": "LUAN GABRIEL LORENA DA SILVA",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "N3",
    "s1Details": {
      "modo": "Silabou",
      "palavras": 2,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1684
  },
  {
    "numero": 13,
    "name": "LUCAS GABRIEL DE OLIVEIRA LIMA",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 10,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1685
  },
  {
    "numero": 14,
    "name": "MARIA VITORIA APARECIDA DE CAMPOS",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 1,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1686
  },
  {
    "numero": 15,
    "name": "SAMUEL HENRIQUE CLARO DOS SANTOS",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 5,
      "texto": 0
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1687
  },
  {
    "numero": 16,
    "name": "SOFIA ROCHA DUARTE",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "N4",
    "s1Details": {
      "modo": "Leu",
      "palavras": 9,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1688
  },
  {
    "numero": 17,
    "name": "WILLYAN MIGUEL DE PAULA JESUS RODRIGUES",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "N1",
    "s1Details": {
      "modo": "Não leu",
      "palavras": 0,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 3,
    "id": 1689
  },
  {
    "numero": 20,
    "name": "IGOR RAFAEL SANTOS TAVEIRA",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 25,
      "pseudopalavras": 14,
      "texto": 16
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 1690
  },
  {
    "numero": 21,
    "name": "VICTORIA EMANUELLY SOARES DE SOUZA",
    "escola": "Yvone Ap. Arantes Corrêa, Profª",
    "turma": "1º ANO A",
    "s1": "LI",
    "s1Details": {
      "modo": "Leu",
      "palavras": 11,
      "pseudopalavras": 0,
      "texto": 0
    },
    "sourceFile": "Yvone Ap. Arantes Corrêa, Profª EM - ENSINO FUNDAMENTAL DE 9 ANOS - 1º ANO A.pdf",
    "sourcePage": 4,
    "id": 1691
  }
];
