const searchAnimal = document.getElementById("searchAnimal");
const sortAnimals = document.getElementById("sortAnimals");
const addAnimal = document.getElementById("addAnimal");
const newAnimalName = document.getElementById("newAnimalName");

const animalNames = [];
function addAnimal() {
  let input = newAnimalName;
  let animalNames = input.value.trim();
  if (animalNames) {
    animalNames.push(animalNames);
  }
}
