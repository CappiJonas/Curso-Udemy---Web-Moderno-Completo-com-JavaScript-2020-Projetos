function valorAnuidade(mes, valor) {
  let diferença = 13 - mes;

  let montante = valor + valor * Math.pow(1.05, diferença);

  return montante;
}

console.log(valorAnuidade(1, 1000));
