function possibleCombinations(friends) {
  let result = 1;
  for (let i = 2; i <= friends; i++) {
    result = result * i;
  }
  console.log(result)
}

possibleCombinations(7);