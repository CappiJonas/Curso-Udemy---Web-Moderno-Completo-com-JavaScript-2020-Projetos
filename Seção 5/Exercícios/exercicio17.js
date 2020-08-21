function aumentoSalario(plano, salario) {
  switch (plano) {
    case 'A':
      console.log((salario += 0.1 * salario));
      break;
    case 'B':
      console.log((salario += 0.15 * salario));
      break;
    case 'C':
      console.log((salario += 0.2 * salario));
      break;
    default:
      console.log('Plano inválido');
      break;
  }
}

aumentoSalario('A', 2000);
aumentoSalario('B', 2000);
aumentoSalario('C', 2000);
aumentoSalario('D', 2000);
