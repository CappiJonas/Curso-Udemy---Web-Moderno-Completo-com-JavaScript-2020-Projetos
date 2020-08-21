function maiorMenorValor(vetor) {
  let maiorValor = vetor[0];
  let menorValor = vetor[0];

  for (let i = 0; i < vetor.length; i++) {
    if (maiorValor < vetor[i]) {
      maiorValor = vetor[i];
    }

    if (menorValor > vetor[i]) {
      menorValor = vetor[i];
    }
  }

  console.log(maiorValor, menorValor);
}

maiorMenorValor([1, 2, 3, 4, 5, 0]);
