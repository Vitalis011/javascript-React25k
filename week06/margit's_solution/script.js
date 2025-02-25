const animalSimple = [
  "Fox",
  "Shark",
  "Eagle",
  "Bird",
  "Cat",
  "Dog",
  "Antelop",
  "Seagull",
  "Wolf",
];

const animalList = document.querySelector("#animalList"); // getting the selector for ul
const addAnimalButton = document.querySelector("#addAnimal");
const searchInput = document.querySelector("#searchAnimal");
const sortButton = document.querySelector("#sortAnimals");

const displayAnimals = (animalArray) => {
  animalList.innerHTML = ""; // this cleans the ul when list is added
  // call a loop for each animal
  for (const animal of animalArray) {
    const li = document.createElement("li"); // creating a list where it add animal should be listed
    li.textContent = `${animal}`;
    animalList.appendChild(li);
  }
};

const addAnimal = () => {
  const nameInput = document.querySelector("#newAnimalName").value.trim(); // we are onky using the newAnimalname when a list is added so it shouldn't be a global variable. to avoid issues
  animalSimple.push(nameInput); // push the new animal input to a simplearray list
  displayAnimals(animalSimple); //should be displaed on the dom once pushed, else it will only show on. the console.log
  //console.log ()
  document.querySelector("#newAnimalName").value = ""; // makes the input clear after trigeering a name or list
};

const searchAnimal = () => {
  const searchText = searchInput.value.toLowerCase(); // created a new variable for the input where to search, and for the text to e stored.lowwercase to directl make rhe user auto use lowercase
  const filteredAnimals = animalSimple.filter((animal) =>
    animal.toLowerCase().includes(searchText)
  );
  displayAnimals(filteredAnimals);
};
console.log(animalSimple);

const sortAnimal = () => {
  animalSimple.sort();
  displayAnimals(animalSimple);
};

addAnimalButton.addEventListener("click", addAnimal); // when add animal is clicked, it triggers the new animal listed the push.
searchInput.addEventListener("input", searchAnimal);
sortButton.addEventListener("click", sortAnimal);

displayAnimals(animalSimple); // this display the code which is why it should be on the last line. js works from top tp buttom, show when triggered, it starts to load the code.
