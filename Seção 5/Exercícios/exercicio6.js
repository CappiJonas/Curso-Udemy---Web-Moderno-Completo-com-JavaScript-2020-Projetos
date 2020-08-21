function jurosSimples(capitalInicial, taxaJuros, tempo) {
  const juros = capitalInicial * taxaJuros * tempo;
  return capitalInicial + juros;
}

function jurosCompostos(capitalInicial, taxaJuros, tempo) {
  return capitalInicial * Math.pow(1 + taxaJuros, tempo);
}

console.log(jurosSimples(4, 0.1, 5));
console.log(jurosCompostos(4, 0.1, 5));
