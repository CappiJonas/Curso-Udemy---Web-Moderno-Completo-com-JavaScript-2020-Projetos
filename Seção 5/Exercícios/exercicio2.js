function qualTriangulo(x, y, z) {
  if (!x || !y || !z) {
    console.log('Não existe triângulo!');
  } else {
    if (x === y && y === z && z === x) {
      console.log('Triângulo equilátero');
    } else if (x === y || y === z || z === x) {
      console.log('Triângulo isósceles');
    } else {
      console.log('Triângulo escaleno');
    }
  }
}

qualTriangulo(8, 2, 0);
qualTriangulo(4, 4, 4);
qualTriangulo(5, 5, 4);
qualTriangulo(6, 8, 10);
