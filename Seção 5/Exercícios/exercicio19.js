function fazerPedido(codigoPedido, quantidade) {
  switch (codigoPedido) {
    case 100:
      console.log(quantidade * 3);
      break;
    case 200:
      console.log(quantidade * 4);
      break;
    case 300:
      console.log(quantidade * 5.5);
      break;
    case 400:
      console.log(quantidade * 7.5);
      break;
    case 500:
      console.log(quantidade * 3.5);
      break;
    case 600:
      console.log(quantidade * 2.8);
      break;
    default:
      console.log('Produto não existe');
      break;
  }
}

fazerPedido(100, 2);
fazerPedido(200, 2);
fazerPedido(300, 2);
fazerPedido(400, 2);
fazerPedido(500, 2);
fazerPedido(600, 2);
fazerPedido(700, 2);
