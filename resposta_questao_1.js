const array = [
  '12345678', 
  '1223455678', 
  '876543210', 
  '152456457', 
  '12356789', 
  '13579', 
  '9765421',
  '123454321',
  '12222222',
  '2111111',
  '1599'
];

for (let i in array) {
  let valor = array[i].split(',').map(Number);
  // verificação dos valores
  let ordem = true;
  // verificação da condição
  for (let item = 0; item < valor.length - 1; item++) {
    //verificando se os valores são maiores
    if (valor[item] > valor[item + 1]) {
      ordem = false;
      break;
    }
  }

  if (ordem === true) {
    console.log(`Este item ${valor} == Está ordenado`);
  } else {
    console.log(`Este item ${valor} == Não está ordenado`);
  }
}
