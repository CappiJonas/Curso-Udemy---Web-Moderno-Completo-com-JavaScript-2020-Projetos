function numerosEntre10E20(vetor) {
  let numerosEntre = 0;
  let numerosFora = 0;

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] >= 10 && vetor[i] <= 20) {
      numerosEntre++;
    } else {
      numerosFora++;
    }
  }

  console.log(
    `Existem ${numerosEntre} dentro do intervalo de 10 a 20 e ${numerosFora} fora`
  );
}

numerosEntre10E20([1, 2, 12, 13, 14, 21]);
