/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/

// Your code here
const weather = [{ temperature: 60, humidity: 40, condition: "Sunny" }];

function checkWeather(weather) {
  if (weather.condition === "Sunny") {
    return null;
  } else {
    return "Take an umbrella";
  }
}
console.log(weather.condition);

/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/

// Your code here
const shoppingCarts = [
  { name: "mike", price: 500, quantity: 2 },
  { name: "vitalis", price: 400, quantity: 3 },
];
function priceTotal(shoppingCarts) {
  let sumPrice = 0;
  shoppingCarts.forEach((shoppingCart) => {
    sumPrice += shoppingCart.price;
  });
  return sumPrice;
}
console.log(priceTotal(shoppingCarts));

/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/

// Your code here
const restaurants = [
  { name: "Ravintola", cuisineType: "Finnish", rating: 8.5 },
  { name: "Sushi Place", cuisineType: "Japanese", rating: 9.2 },
  { name: "Pasta Paradise", cuisineType: "italian", rating: 8 },
];

function restaurantRating(restaurants) {
  return restaurants
    .filter((restaurant) => restaurant.rating >= 4)
    .map((restaurants) => restaurants.name);
}
console.log(restaurantRating(restaurants));

/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/

// Your code here
const bankAccount = [
  {
    accountHolder: "Vitalis",
    balance: 9.99,
    transactions: [500, -100, 59, -93],
  },
];
function totalBalanceCalculated(bankAccount) {
  // creating a new balance
  let totalBalance = bankAccount[0].balance;
  // have to loop through each transaction as its an array and then add to total.balance
  bankAccount[0].transactions.forEach((transaction) => {
    totalBalance += transaction;
  });

  return totalBalance;
}
console.log(totalBalanceCalculated(bankAccount));
/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/

// Your code here
const students = [
  { name: "vitalis", scores: [10, 5, 7], averageScore: 0 },
  { name: "joe", scores: [29, 5, 8], averageScore: 0 },
];

function studentAverage(students) {
  students.forEach((student) => {
    //    go now in the Object, find the array and then calculate the average

    let total = student.scores.reduce((sum, score) => sum + score, 0);
    // how you get average of array??? student.scores
    student.averageScore = total / student.scores.length;
  });
}
studentAverage(students);
console.log(students);

/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/

// Your code here
const courses = [
  { courseName: "English", instructor: "Mikey", studentsEnrolled: 25 },
  { courseName: "React25k", instructor: "Margit", studentsEnrolled: 31 },
  { courseName: "UI design", instructor: "Holland", studentsEnrolled: 31 },
];
function numberOfStudents(courses) {
  return courses
    .filter((course) => course.studentsEnrolled >= 30)
    .map((courses) => courses.courseName);
}
console.log(numberOfStudents(courses));
/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

// Your code here
const pet = [
  { species: "Human", name: "Mikey", isVaccinated: false },
  { species: "Reptile", name: "Snake", isVaccinated: true },
];
function vaccinated(pet) {
  if (pet.isVaccinated === false) {
    console.log("Vaccination required");
  } else {
    console.log("null");
  }
}
vaccinated(pet[0]);
vaccinated(pet[1]);

/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

// Your code here
const city = [
  { name: "Helsinki", population: 200000, landMark: 6500 },
  { name: "Moscow", population: 1500000, landMark: 150000 },
];
function checkCitySize(city) {
  if (city.population > 100000) {
    console.log("This is a big city");
  } else {
    console.log("small");
  }
}
checkCitySize(city[1]);
checkCitySize(city);
/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

// Your code here

/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

// Your code here

/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/

// Your code here

/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/

// Your code here

/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

// Your code here

/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

// Your code here

/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

// Your code here
