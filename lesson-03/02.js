const words = ["яблоко", "банан", "апельсин",  "манго", "киви"];
let orangeIndex = words.indexOf("апельсин");
if(orangeIndex < 0) {
  console.log("«Придется поискать в другом магазине...");
}
  else {
    console.log("Ура! нашел");
  }