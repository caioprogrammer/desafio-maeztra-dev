const duplicatas = (num) => {
  let sortArray = num.sort((a, b) => a - b);
  return sortArray.filter((item, index) => sortArray.indexOf(item) != index);
};

//valores de entrada
const array = [3, 5, 5, 1, 65, 27, 17, 17, 12, 8, 8, 7, 54, 87];
//valores retornados
console.log(duplicatas(array));
