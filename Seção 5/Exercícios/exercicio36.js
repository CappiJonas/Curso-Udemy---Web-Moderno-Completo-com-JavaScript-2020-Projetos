function multiplicarElementosDoVetor(vetor, numero) {
  for (let i = 0; i < vetor.length; i++) {
    vetor[i] = vetor[i] * numero;
  }

  console.log(vetor);
}

function multiplicarElementosDoVetorSeForMaiorQue5(vetor, numero) {
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > 5) {
      vetor[i] = vetor[i] * numero;
    }
  }

  console.log(vetor);
}

multiplicarElementosDoVetor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
multiplicarElementosDoVetorSeForMaiorQue5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
