const colors = ["синий", "черный", "зеленый", "красный", "желтый"];

let germanFlag = colors.filter(function createColorString(color) {
  if (color === "черный" || color === "красный" || color === "желтый") {
    return true;
  }
  return false;
});

console.log(germanFlag);
