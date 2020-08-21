function caracterNasDuasString(string1, string2) {
  let vetor1 = string1.split('');
  let vetor2 = string2.split('');
  let bool = false;

  for (let i = 0; i < vetor1.length; i++) {
    for (let j = 0; j < vetor2.length; j++) {
      if (vetor1[i] === vetor2[j]) {
        bool = true;
      }
    }
  }
  return bool;
}

console.log(caracterNasDuasString('aaa', 'bba'));
console.log(caracterNasDuasString('aaa', 'bbb'));
