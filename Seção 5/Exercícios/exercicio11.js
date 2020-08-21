function anoBissexto(ano) {
  if (ano < 1) {
    return false;
  } else if (ano % 400 === 0) {
    return true;
  } else if (ano % 100 === 0) {
    return false;
  } else if (ano % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(anoBissexto(0));
console.log(anoBissexto(1600));
console.log(anoBissexto(1000));
console.log(anoBissexto(2020));
console.log(anoBissexto(1947));
