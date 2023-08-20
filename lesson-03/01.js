const colors = ["синий", "черный", "зеленый", "красный", "желтый"];

function createColorString(colors) {
  let filteredIndexes = [];

  colors.forEach(function (color, index) {
    if (color === "черный" || color === "красный" || color === "желтый") {
      filteredIndexes.push(index);
    }
  });

  return filteredIndexes.join('-');
}

console.log(createColorString(colors));

