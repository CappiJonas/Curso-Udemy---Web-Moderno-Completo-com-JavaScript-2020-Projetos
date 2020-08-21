function planoSaude(idade) {
  if (idade < 10) {
    console.log('R$ 180,00');
  } else if (idade >= 10 && idade <= 30) {
    console.log('R$ 150,00');
  } else if (idade > 30 && idade <= 60) {
    console.log('R$ 195,00');
  } else if (idade > 60) {
    console.log('R$ 230,00');
  }
}

planoSaude(8);
planoSaude(15);
planoSaude(34);
planoSaude(67);
