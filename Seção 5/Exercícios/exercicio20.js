function quantasEQuaisNotas(dinheiro) {
  let n = dinheiro;
  let cem = 0;
  let cinquenta = 0;
  let dez = 0;
  let cinco = 0;
  let um = 0;

  while (n !== 0) {
    if (n >= 100) {
      n -= 100;
      cem++;
    } else if (n >= 50) {
      n -= 50;
      cinquenta++;
    } else if (n >= 10) {
      n -= 10;
      dez++;
    } else if (n >= 5) {
      n -= 5;
      cinco++;
    } else if (n >= 1) {
      n -= 1;
      um++;
    }
  }

  console.log(
    `${cem} nota(s) de 100. ${cinquenta} nota(s) de 50. ${dez} nota(s) de 10. ${cinco} nota(s) de 5. ${um} nota(s) de 1.`
  );
}

quantasEQuaisNotas(169);
