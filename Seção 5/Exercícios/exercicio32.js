function mediaVetor(vetor) {
  let sum = 0;

  for (let i = 0; i < vetor.length; i++) {
    sum += vetor[i];
  }

  const media = sum / vetor.length;

  console.log(media);
}

mediaVetor([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
