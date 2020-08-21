function valoresImparesNoIntervalo(min = 0, max = 100) {
  let valorMax = 0;
  let valorMin = 0;
  let vetorImpar = [];

  if (min > max) {
    valorMax = min;
    valorMin = max;
  } else {
    valorMax = max;
    valorMin = min;
  }

  if (valorMin < 0) {
    valorMin = 0;
  }

  if (valorMax > 100) {
    valorMax = 100;
  }

  for (let i = valorMin; i <= valorMax; i++) {
    if (i % 2 !== 0) {
      vetorImpar.push(i);
    }
  }

  console.log(vetorImpar);
}

valoresImparesNoIntervalo();
valoresImparesNoIntervalo(2, 11);
valoresImparesNoIntervalo(11, 2);
