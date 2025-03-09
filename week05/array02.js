// Exercise 1: Determine array length and conditional check

/*
Create a function called myAlphabetLength that logs the length of the myAlphabet array.
If the length is 5 or more, log: "Array length is sufficient".
Otherwise, log: "Array length is too short."
*/
// Write your function here

let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

const myAlphabetLength = (lenght) => {
  if (lenght >= 5) {
    return "Array is sufficient";
  } else {
    return "Array length is too short";
  }
};
console.log(myAlphabetLength(4));
console.log(myAlphabetLength(7));

// Exercise 2: Iterate over the planets array and log each planet with its index

/*
Log each planet in the planets array along with its index.
Expected outcome:
"Planet: Mercury, Index: 0"
...
"Planet: Jupiter, Index: 4"
*/
// Write your code here

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];

planets.forEach((planet, index) => {
  console.log("planet :" + planet + ", index:" + index); // this makes it more understandable
  //making 'planet' a string + the object, same as the 'index' + the object of index.
});

// Exercise 3: Log array items with their types using mixedValues array
let mixedValues = [42, "Hello", true, { name: "Fox" }, null, undefined];

/*
Iterate over the mixedValues array, logging each item, its index, and data type.
Expected outcome:
"Item: 42, Index: 0, Type: number"
...
"Item: undefined, Index: 5, Type: undefined"
*/
// Write your code here

//const mixedValues = [42, "Hello", true, { name: "Fox" }, null, undefined];
mixedValues.forEach((value, index, typeOf) => {
  console.log("value :" + value + ", index:" + index + ",typeof:" + typeOf);
});

// Exercise 4: Log each item of myArr without using a loop
const myArray = [1, "Dog", 3.14, false];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);

/*
Log each item in myArr without explicitly using a loop.
Expected outcome: 1, "Dog", 3.14, false
*/
// Write your code here

// Exercise 5: Find common animal species between reserve1Animals and reserve2Animals
let reserve1Animals = ["Fox", "Deer", "Owl", "Bear"];
let reserve2Animals = ["Bear", "Wolf", "Eagle", "Fox"];

commonAnimal = reserve1Animals.filter((animal) =>
  reserve2Animals.includes(animal)
);
console.log(commonAnimal);

/*
Identify and log any animal species found in both reserve1Animals and reserve2Animals.
Expected outcome:
"Common species: Fox"
"Common species: Bear"
*/
// Write your code here
console.log(`common species: ${commonAnimal[0]}`);
console.log(`common species: ${commonAnimal[1]}`);

// Exercise 6: Log each letter of names from the animalNames array
const animalNames = ["Lion", "Tiger", "Panda"];
let eachLetter = animalNames.forEach((name) => {
  console.log(name);
});

/*
For each item in the animalNames array, log every letter.
Expected outcome:
"Letters in 'Lion': L, i, o, n"
...
"Letters in 'Panda': P, a, n, d, a"
*/
// Write your code here
animalNames.forEach((animal) => {
  //.split() splits each letters into an array letter but we need .join() to create or join the letters with letters.
  let newLetter = animal.split("").join(",");
  console.log(`Letters in '${animal}': ${newLetter}`);
});

// Exercise 7: Filter only positive temperatures from the temperatures array
/*
Write a function getPositiveTemperatures that returns a new array
containing only temperatures greater than 0 from the temperatures array.
Expected outcome: [5, 15, 20, 2]
*/
// Write your function here

let temperatures = [-10, 5, -3, 15, -8, 20, 2];
getPositiveTemperatures = temperatures.filter((temperature) => temperature > 1);
console.log(getPositiveTemperatures);

// Exercise 8: Find the index of "Fox" in the zooAnimals array
const zooAnimals = ["Elephant", "Giraffe", "Panda", "Fox", "Kangaroo"];
console.log(zooAnimals.indexOf("Fox"));
/*
Find and store the index of "Fox" in the zooAnimals array.
Expected outcome: "Index of Fox: 3"
*/
// Write your code here
let index = zooAnimals.indexOf("Fox");
console.log(`index of Fox: ${index}`);

// Exercise 9: Try to find the index of an animal not in zooAnimals
/*
Find the index of "Penguin" in the zooAnimals array.
If it's not found, log "Penguin is not in the zoo."
Expected outcome: -1
*/
// Write your code here
let indexOfAnimal = zooAnimals.indexOf("Penguin");
if (indexOfAnimal === -1) {
  console.log("Penguin is not in the zoo");
} else {
  console.log(`index of penguin is ${indexOfAnimal}`);
}

// Exercise 10: Replace "Giraffe" with "Cheetah" in zooAnimals
/*
Replace "Giraffe" with "Cheetah" in the zooAnimals array.
Expected outcome: ['Elephant', 'Cheetah', 'Panda', 'Fox', 'Kangaroo']
*/
// Write your code here
zooAnimals.splice(1, 1, "Cheetah");
console.log(zooAnimals);

// Exercise 11: Sort the safariAnimals array alphabetically
let safariAnimals = ["Zebra", "Leopard", "Elephant", "Gazelle"];

/*
Sort the safariAnimals array in alphabetical order.
Expected outcome: ['Elephant', 'Gazelle', 'Leopard', 'Zebra']
*/
// Write your code here
safariAnimals.sort();
console.log(safariAnimals);

// Exercise 12: Reverse the order of the safariAnimals array
/*
Reverse the order of the safariAnimals array.
Expected outcome: ['Zebra', 'Leopard', 'Gazelle', 'Elephant']
*/
// Write your code here
safariAnimals.reverse();
console.log(safariAnimals);

// Exercise 13: Check if "Tiger" is in zooAnimals
/*
Check if the zooAnimals array includes "Tiger".
Expected outcome:
true (if the array contains "Tiger")
false (if it does not)
*/
// Write your code here
const checkedAnimal = safariAnimals.filter((animal) => animal === "Tiger");
console.log(checkedAnimal.length > 0);

// Exercise 14: Find all occurrences of "John" in attendees
let attendees = ["John", "Sarah", "John", "Alex", "John"];
const allOccurrenceOfJohn = attendees.filter((attendee) => attendee === "John");
console.log(allOccurrenceOfJohn);

/*
Find all positions where "John" appears in the attendees array.
Expected outcome: [0, 2, 4]
*/
// Write your code here
attendees.forEach((attendee, index) => {
  if (attendee === "John") {
    console.log(index);
  }
});
// Exercise 15: Convert all names in attendees array to uppercase
/*
Create a new array where every name in attendees is written in uppercase.
Expected outcome: ['JOHN', 'SARAH', 'JOHN', 'ALEX', 'JOHN']
*/
// Write your code here
let newArray = attendees.map((attendee) => attendee.toUpperCase());
console.log(newArray);

// Exercise 16: Merge forestAnimals and farmAnimals arrays

/*
Merge forestAnimals and farmAnimals into a new array.
Expected outcome: ['Deer', 'Bear', 'Wolf', 'Cow', 'Sheep', 'Goat']
*/
// Write your code here
let forestAnimals = ["Deer", "Bear", "Wolf"];
let farmAnimals = ["Cow", "Sheep", "Goat"];

let mergedAnimals = [...forestAnimals, ...farmAnimals];
console.log(mergedAnimals);

// Exercise 17: Remove first and last elements from birdSpecies
let birdSpecies = ["Eagle", "Owl", "Hawk", "Sparrow", "Penguin"];

let newSpecies = birdSpecies.slice(1, -1);
console.log(newSpecies);
/*
Remove the first and last elements from the birdSpecies array.
Expected outcome: ['Owl', 'Hawk', 'Sparrow']
*/
// Write your code here

// Exercise 18: Use `splice` to remove and replace elements in numbers
let numbers = [10, 20, 30, 40, 50];

/*
Use splice to remove "30" and replace it with "25" and "27".
Expected outcome: [10, 20, 25, 27, 40, 50]
*/
// Write your code here
numbers.splice(2, 1, 25, 27);
console.log(numbers);

// Exercise 19: Increase each price by 10% using `map`
let prices = [5, 10, 15, 20];

/*
Create a new array where each price is increased by 10%.
Expected outcome: [5.5, 11, 16.5, 22]
*/
// Write your function here
let increasedPrice = prices.map((price) => price * 1.1);
console.log(increasedPrice);

// Exercise 20: Filter words longer than 5 letters using `filter`
let words = ["apple", "banana", "cherry", "kiwi", "strawberry"];
let filteredWords = words.filter((word) => word.length > 5);
console.log(filteredWords);
/*
Create a new array containing only words longer than 5 letters from the words array.
Expected outcome: ['banana', 'cherry', 'strawberry']
*/
// Write your function her
