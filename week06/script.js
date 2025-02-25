//first of getting all elements
const searchAnimal = document.getElementById("searchAnimal");
const sortAnimals = document.getElementById("sortAnimals");
//const addAnimals = document.getElementById("addAnimal");
const newAnimalName = document.getElementById("newAnimalName");
const addAnimalButton = document.getElementById("addAnimal");

// call the function of animalNames
const animalNames = []; // where animals will be stored

function addAnimal() {
  // adds a new element to the li
  // we can also say,
  //let inputElement= newAnimal name  then
  // let animal = inputElement.value.trim()
  let animal = newAnimalName.value.trim();

  if (animal) {
    animals.push(animal);
    // displayAnimals();
    let li = document.createElement("li"); // creates a new list item
    newAnimalName.value = ""; // shows where the newaniaml should be displayed
  } else {
    console.log("Please enter an animal name");
  }
}

function displayAnimals() {
  animalList.innerHTML = ""; // clears the current list text so we don't see duplicates.

  animalNames.forEach((animal) => {
    li.textContent = animal;
    animalList.appendChild(li); // adds the li items to the animal list page
  });
}
addAnimalButton.addEventListener("on click", addAnimal); // when animal is clicked, runs the addAnimal function

const filterType = document.getElementById("filterType");
const newAnimalType = document.getElementById("newAnimalType");
// Step 4 filter animals..

function displayAnimals() {
  animalList.innerHTML = "";

  selectedType = filterType.value;
  const searchedAnimal = searchAnimal.value.trim().toLowerCase();
  let found = false;

  // loop through each animals in the array::
}
