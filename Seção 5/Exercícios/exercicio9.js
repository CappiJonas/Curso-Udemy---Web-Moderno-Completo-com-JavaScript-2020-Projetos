function aprovarAluno(nota) {
  let resultadoAproximado = Math.ceil(nota / 5);
  let notaAproximada = resultadoAproximado * 5;

  if (nota > 38 && notaAproximada - nota < 4) {
    return `Sua nota foi ${notaAproximada} e você foi aprovado`;
  } else if (nota > 38 && notaAproximada - nota > 3) {
    return `Sua nota foi ${nota} e você foi aprovado`;
  } else {
    return `Sua nota foi ${nota} e você foi reprovado`;
  }
}

console.log(aprovarAluno(72));
console.log(aprovarAluno(71));
console.log(aprovarAluno(75));
console.log(aprovarAluno(35));
console.log(aprovarAluno(34));
