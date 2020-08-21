function aproximarEColocarVirgula(valor) {
  const valorAproximado = valor.toFixed(2);
  const valorRetornado = valorAproximado.toString().replace('.', ',');
  return valorRetornado;
}

console.log(aproximarEColocarVirgula(0.30000000000000004));
