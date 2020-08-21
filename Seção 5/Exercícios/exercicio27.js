function verificarAltura2Crianca(altura1, taxa1, altura2, taxa2) {
  if (altura1 === altura2) {
    console.log('Não existe criaça menor');
  } else {
    let i = 0;
    let menorAltura = 0;
    let taxaMenorAltura = 0;
    let maiorAltura = 0;
    let taxaMaiorAltura = 0;

    if (altura1 < altura2) {
      menorAltura = altura1;
      taxaMenorAltura = taxa1;
      maiorAltura = altura2;
      taxaMaiorAltura = taxa2;
    } else {
      menorAltura = altura2;
      taxaMenorAltura = taxa2;
      maiorAltura = altura1;
      taxaMaiorAltura = taxa1;
    }
    if (taxaMaiorAltura > taxaMenorAltura) {
      console.log('A criança menor nunca passará a maior');
    } else {
      while (menorAltura < maiorAltura) {
        menorAltura += taxaMenorAltura;
        maiorAltura += taxaMaiorAltura;
        i++;
      }

      console.log(
        `A criança menor irá ultrapassar a criança maior em ${i} anos`
      );
    }
  }
}

verificarAltura2Crianca(100, 20, 100, 30);
verificarAltura2Crianca(100, 20, 110, 19);
verificarAltura2Crianca(110, 19, 100, 20);
verificarAltura2Crianca(100, 20, 110, 25);
