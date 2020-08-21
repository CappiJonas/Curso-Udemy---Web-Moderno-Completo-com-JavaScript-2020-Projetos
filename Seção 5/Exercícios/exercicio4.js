function divisao(dividendo, divisor) {
  const quociente = Math.floor(dividendo / divisor);
  const resto = dividendo % divisor;

  console.log(quociente, resto);
}

divisao(4, 2);
divisao(7, 3);
