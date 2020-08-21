function atribuirConceito(vetor) {
  let vetorConceitos = [];

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] >= 0.0 && vetor[i] <= 4.9) {
      vetorConceitos.push('D');
    } else if (vetor[i] >= 5.0 && vetor[i] <= 6.9) {
      vetorConceitos.push('C');
    } else if (vetor[i] >= 7.0 && vetor[i] <= 8.9) {
      vetorConceitos.push('B');
    } else if (vetor[i] >= 9.0 && vetor[i] <= 10.0) {
      vetorConceitos.push('A');
    } else {
      vetorConceitos.push('Não há conceito para essa nota');
    }
  }

  console.log(vetorConceitos);
}

atribuirConceito([3.7, 6.2, 8.5, 9.9, 11.0]);
