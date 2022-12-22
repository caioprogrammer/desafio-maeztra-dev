const numbers = [4,5,44,98,4,5,6,7];

function verifyDuplicatedNumbers(num) {
  let sortNumbers = num.sort((a, b) => a - b);
  const duplicatedNumbers = sortNumbers.filter((item, index) => sortNumbers.indexOf(item) != index);
  console.log(duplicatedNumbers)
};

//valores retornados
verifyDuplicatedNumbers(numbers)
