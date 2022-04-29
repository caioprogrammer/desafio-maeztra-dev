const numbers = [3, 5, 5, 1, 65, 27, 17, 17, 12, 8, 8, 7, 54, 87];

const duplicatas = (num) => {
  let sortNumbers = num.sort((a, b) => a - b);
  return sortNumbers.filter((item, index) => sortNumbers.indexOf(item) != index);
};

//valores retornados
console.log(duplicatas(numbers));
