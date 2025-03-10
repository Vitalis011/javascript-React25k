/*const animalSimple = [
  "Fox",
  "Shark",
  "Eagle",
  "Bird",
  "Cat",
  "Dog",
  "Antelop",
  "Seagull",
  "Wolf",
  ];*/

const animals = [
  { name: "Fox", type: "Mammal", color: "Orange" },
  { name: "Shark", type: "Fish", color: "Gray" },
  { name: "Eagle", type: "Bird", color: "Brown" },
  { name: "Bird", type: "Reptiles", color: "Green" },
  { name: "Antelope", type: "Amphibian", color: "Tan" },
  { name: "Seagulls", type: "Bird", color: "White" },
  //console.log(this.name, type, color),
];
const animalList = document.querySelector("#animalList"); // getting the selector for ul
const addAnimalButton = document.querySelector("#addAnimal");
const searchInput = document.querySelector("#searchAnimal");
const sortButton = document.querySelector("#sortAnimals");
const filterType = document.querySelector("#filterType");

const displayAnimals = (animalArray) => {
  animalList.innerHTML = ""; // this cleans the ul when list is added
  // call a loop for each animal
  animalArray.forEach((animal, index) => {
    const li = document.createElement("li"); // creating a list where it add animal should be listed
    li.textContent = `${animal.name} (${animal.type} ${animal.color})`;

    // created a remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    // add event listener inside
    removeBtn.setAttribute("data-index", index); // stores the index as a data attribute
    removeBtn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index"); // this method retreives the from the data attr the index
      removeAnimal(index); // calls the removeAnimal but with index
    });

    li.appendChild(removeBtn);
    animalList.appendChild(li);
  });
};

const addAnimal = () => {
  const nameInput = document.querySelector("#newAnimalName").value.trim(); // we are onky using the newAnimalname when a list is added so it shouldn't be a global variable. to avoid issues
  const typeInput = document.querySelector("#newAnimalType").value;
  document.querySelector("#newAnimalName").value = ""; // makes the input clear after trigeering a name or list
  if (nameInput === "" || typeInput === "") {
    alert("please enter a name and select a atype.");
    return;
  }
  // we check if animal already exist

  // Add new animal as an object
  animals.push({ name: nameInput, type: typeInput, color: "Unknown" }); // push the new animal input to a simplearray list
  displayAnimals(animals); //should be displaed on the dom once pushed, else it will only show on. the console.log
  //console.log ()
  document.querySelector("#newAnimalName").value = ""; // this clears the input
};

const searchAnimal = () => {
  const searchText = searchInput.value.toLowerCase(); // created a new variable for the input where to search, and for the text to e stored.lowwercase to directl make rhe user auto use lowercase
  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchText)
  );
  displayAnimals(filteredAnimals);
};

const filterByTypeAnimal = () => {
  const selectedType = filterType.value;
  if (selectedType === "All") {
    displayAnimals(animals);
  } else {
    const filteredAnimals = animals.filter(
      (animal) => animal.type === selectedType
    );
    displayAnimals(filteredAnimals);
  }
};

// const filteredAnimals = animals.filter(
//(animal) => animal.type === selectedType
// );
//displayAnimals(filteredAnimals);
//};

//console.log(animals);

const sortAnimal = () => {
  animals.sort();
  displayAnimals(animals);
};
const removeAnimal = (index) => {
  animals.splice(index, 1); // this actually removes animal from the array
  displayAnimals(animals);
};

//const displayAnimals = (animals) => {};

addAnimalButton.addEventListener("click", addAnimal); // when add animal is clicked, it triggers the new animal listed the push.
searchInput.addEventListener("input", searchAnimal);
sortButton.addEventListener("click", sortAnimal);
filterType.addEventListener("change", filterByTypeAnimal);

displayAnimals(animals); // this display the code which is why it should be on the last line. js works from top tp buttom, show when triggered, it starts to load the code.
