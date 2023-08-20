const colors = ["синий", "черный", "зеленый", "красный", "желтый"];

function createColorString(color) {
  return color === "черный" || color === "красный" || color === "желтый";
}

const filteredColors = colors.filter(createColorString);
console.log(filteredColors.join());

