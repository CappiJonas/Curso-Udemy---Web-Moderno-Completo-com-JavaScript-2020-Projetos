function quantosParesEImpares(vetor) {
  let numeroPar = 0;
  let numeroImpar = 0;

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 === 0) {
      numeroPar++;
    } else {
      numeroImpar++;
    }
  }

  console.log(
    `Nesse vetor tem ${numeroPar} número(s) pares e ${numeroImpar} número(s) ímpares`
  );
}

quantosParesEImpares([1, 2]);
