function resolverEquacaoQuadrada(a, b, c) {
  if (a === 0) {
    return 'Não existe equação quadrada';
  } else {
    const delta = Math.pow(b, 2) - 4 * a * c;
    if (delta < 0) {
      return 'Delta negativo!';
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      const valoresX = [x1, x2];
      return valoresX;
    }
  }
}

console.log(resolverEquacaoQuadrada(3, 10, 5));
