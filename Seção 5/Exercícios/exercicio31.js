function quantosNumerosNegativos(vetor) {
  let numerosNegativos = 0;

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] < 0) {
      numerosNegativos++;
    }
  }

  console.log(`A quantidade de números negativos é ${numerosNegativos}`);
}

quantosNumerosNegativos([1, 2, 3, -2, -3, -4, -5, 0]);
