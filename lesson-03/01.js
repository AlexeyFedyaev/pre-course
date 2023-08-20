const colors = ["синий", "черный", "зеленый", "красный", "желтый"];

function createColorString() {
  const germanFlag = colors.filter(color =>color === "черный" || color === "красный" || color === "желтый");
  return germanFlag.join('-');
};


console.log(createColorString());

