function fatorial1(numero) {
  if (numero === 0) {
    return 1;
  } else {
    let n = numero;
    let multiplicacao = numero;

    for (let i = 1; numero - i !== 1; i++) {
      multiplicacao *= n - 1;
      n = n - 1;
    }

    return multiplicacao;
  }
}

console.log(fatorial1(5));
console.log(fatorial1(0));
