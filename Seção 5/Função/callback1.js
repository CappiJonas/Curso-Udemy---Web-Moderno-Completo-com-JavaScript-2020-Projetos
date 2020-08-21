const fabricantes = ['Mercedes', 'Audi', 'BMW'];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
// prettier-ignore
fabricantes.forEach(fabricante => console.log(fabricante));

/* Callback -> passar uma função e essa função
será chamada quando um evento acontecer */
