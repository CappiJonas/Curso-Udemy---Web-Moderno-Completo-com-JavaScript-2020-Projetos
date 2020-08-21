const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
];

// Desafio 1: Todos os alunos são bolsista?

const desafio1 = alunos
  .map((a) => a.bolsista)
  .reduce((acc, cur) => {
    if (acc === true && cur === true) {
      return true;
    } else {
      return false;
    }
  });

console.log(desafio1);

// Desafio 2: Algum aluno é bolsista?

const desafio2 = alunos
  .map((a) => a.bolsista)
  .reduce((acc, cur) => {
    if (acc === true || cur === true) {
      return true;
    } else {
      return false;
    }
  });

console.log(desafio2);
