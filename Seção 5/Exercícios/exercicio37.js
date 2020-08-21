function progressaoAritmetica(numero, a1, razao) {
  let vetor = [];
  let sum = 0;
  let an = 0;

  for (let i = 1; i <= numero; i++) {
    an = a1 + (i - 1) * razao;
    sum += an;
    vetor.push(an);
  }

  console.log(vetor, sum);
}

progressaoAritmetica(3, 2, 1);

function progressaoGeometrica(numero, a1, razao) {
  let vetor = [];
  let sum = 0;
  let an = 0;

  for (let i = 1; i <= numero; i++) {
    an = a1 * Math.pow(razao, i - 1);
    sum += an;
    vetor.push(an);
  }

  console.log(vetor, sum);
}

progressaoGeometrica(3, 2, 2);
