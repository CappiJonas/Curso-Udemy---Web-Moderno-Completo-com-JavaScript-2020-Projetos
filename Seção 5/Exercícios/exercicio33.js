function juntaVetor() {
  let vetorInteiro = [1, 2, 3, 4];
  let vetorString = ['a', 'b', 'c', 'd'];
  let vetorDouble = [1.1, 2.2, 3.3, 4.4];

  //primeiro jeito
  let vetorAgrupado1 = vetorInteiro.concat(vetorString, vetorDouble);

  console.log(vetorAgrupado1);

  //segundo jeito
  let vetorAgrupado2 = vetorDouble.concat(vetorString, vetorInteiro);

  console.log(vetorAgrupado2);
}

juntaVetor();
