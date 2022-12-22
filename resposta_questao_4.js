// uma variavel que armazena arrays com os anos trabalhados de cada aposentado
const yearsWorked = [
  [1900, 1980],
  [1950, 2000],
  [1920, 2010],
];

function validateRetirement(yearsWorked) {
  let start = [];
  let end = [];

  yearsWorked.forEach((year) => {
    if (year[0] > 0 && year[1] > 0 && year[0] < year[1]) {
      start.push(year[0]);
      end.push(year[1]);
    }
  });

  let moreStart = Math.max(...start);
  let moreEnd = Math.max(...end);

  if (moreStart < moreEnd) {
    console.log(`No ano de: ${moreStart}, teve mais trabalhadores`);
  }
}

validateRetirement(yearsWorked);