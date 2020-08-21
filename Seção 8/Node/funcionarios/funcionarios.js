const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then((response) => {
  const funcionarios = response.data;
  const funcionariosMulheresChinesas = funcionarios
    .filter((funcionario) => funcionario.genero === 'F')
    .filter((funcionario) => funcionario.pais === 'China');

  const funcionariaChinesaMenorSalario = funcionariosMulheresChinesas.reduce(
    (acc, cur) => {
      let funcionariaSalarioMinimo = acc;
      if (funcionariaSalarioMinimo.salario > cur.salario) {
        funcionariaSalarioMinimo = cur;
      }
      return funcionariaSalarioMinimo;
    }
  );
  console.log(funcionariaChinesaMenorSalario);
});
