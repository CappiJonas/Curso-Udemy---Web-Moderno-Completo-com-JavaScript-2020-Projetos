function calculadora(primeiroNumero, operacao, segundoNumero) {
  switch (operacao) {
    case '+':
      console.log(primeiroNumero + segundoNumero);
      break;
    case '-':
      console.log(primeiroNumero - segundoNumero);
      break;
    case '*':
      console.log(primeiroNumero * segundoNumero);
      break;
    case '/':
      console.log(primeiroNumero / segundoNumero);
      break;
    default:
      console.log('Operação inválida');
      break;
  }
}

calculadora(2, '+', 2);
calculadora(2, '-', 2);
calculadora(2, '*', 2);
calculadora(2, '/', 2);
calculadora(2, 'a', 2);
