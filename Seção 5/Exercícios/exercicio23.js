function calcularMedia(codigo, nota1, nota2, nota3) {
  let maiorNota = nota1;
  let menorNota1 = 0;
  let menorNota2 = 0;
  let mensagem = null;

  if (maiorNota < nota2 && nota2 > nota3) {
    maiorNota = nota2;
    menorNota1 = nota1;
    menorNota2 = nota3;
  } else if (maiorNota < nota3 && nota3 > nota2) {
    maiorNota = nota3;
    menorNota2 = nota2;
    menorNota1 = nota1;
  } else {
    menorNota1 = nota2;
    menorNota2 = nota3;
  }
  media = (4 * maiorNota + 3 * menorNota1 + 3 * menorNota2) / 10;

  if (media >= 5) {
    mensagem = 'APROVADO';
  } else {
    mensagem = 'Reprovado';
  }

  console.log(codigo, nota1, nota2, nota3, media, mensagem);
}

calcularMedia(1, 2, 3, 4);
calcularMedia(2, 2, 4, 3);
calcularMedia(3, 4, 3, 2);
calcularMedia(4, 4, 4, 4);
