/* Task 1
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console.
*/

// Your code here
const student = { name: "Vitalis", age: 26, grade: 95 };
//converts the object to json string
const jsonString = JSON.stringify(student);
console.log(jsonString);
/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/

// Your code here
const jsStudent = JSON.parse(jsonString); // back to jsobjects using parse
console.log(jsStudent);

/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

// Your code here
const classroom = [
  { name: "vitalis", age: 23, grade: 95 },
  { name: "Markar", age: 26, grade: 96 },
  { name: "Mike", age: 30, grade: 90 },
];

const jsonClassRoom = JSON.stringify(classroom);
console.log(jsonClassRoom);

/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/

// Your code here
const jsArray = JSON.parse(jsonClassRoom);
console.log(jsArray);

jsArray.forEach((student) => console.log(student.name)); // log names of each student

/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

// Your code here
const weatherReport = { temperature: 50, humidity: 40, conditions: "Sunny" };

const weatherJSON = JSON.stringify(weatherReport); // coverts to strings
console.log(weatherJSON);

const parsedWeather = JSON.parse(weatherJSON);
console.log(parsedWeather); // back to objects

console.log(weatherReport.conditions);

/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
*/

// Your code here
const movies = [
  {
    title: "Good boys",
    director: "Vitalis",
    rating: 9.5,
  },
  {
    title: "Bond",
    director: "Markar",
    rating: 9.2,
  },
];
const jsonMovies = JSON.stringify(movies);
console.log(jsonMovies);

parsedMovies = JSON.parse(jsonMovies);
console.log(parsedMovies);

parsedMovies.forEach((movie) => {
  if (movie.rating > 8);
  console.log(movie.title); // logging it must always be inside of the function.. more like a return
});

/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

// Your code here

function filterHighRatedMovies(jsonMovies) {
  // created a new variable that  parse the jsonMovies string into and object.
  const JavaScriptArray = JSON.parse(jsonMovies); // this already is passed as an object array just like the movies.
  // newArray is a varaiable where the filtered movie will be stored. so it can be defined.
  // for you to get actually the rating and just the name or title of the movies it should filtered then mapped.. reduce funcition also works then, map it..
  const newArray = JavaScriptArray.filter((movie) => movie.rating > 8).map(
    (movie) => movie.title // tells the console where to specifically log or output. which is .title.
  );
  return newArray;
}
const higerRatedMovie = filterHighRatedMovies(jsonMovies); // craeting a new variable just makes it more easier to access and readable also.
// you can also console.log(filteredHighRatedMovies(jsonMovies)); and the code will run as well
console.log(higerRatedMovie);
/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/

// Your code here

const shoppingCart = {
  items: [
    { name: "Mike", price: 200 },
    { name: "Vitalis", price: 900 },
  ],
};

const jsonShoppingCart = JSON.stringify(shoppingCart);
console.log(jsonShoppingCart);

/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

// Your code here

function totalCartValue(jsonShoppingCart) {
  const parsedCart = JSON.parse(jsonShoppingCart);
  // create a variable where the the total will be stored.
  let totalPrice = 0;
  parsedCart.items.forEach((cart) => {
    // loops through the caart.items the add the total price which is 0 to cart.price
    totalPrice += cart.price;
  });

  return totalPrice; // returns the addition into the variable
}
console.log(totalCartValue(jsonShoppingCart));

/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

// Your code here

const gameProgress = {
  level: 90,
  score: 10,
  livesRemaining: 3,
};
const covertedString = JSON.stringify(gameProgress);
console.log(covertedString);

const pasredProgress = JSON.parse(covertedString);
console.log(pasredProgress);
gameProgress.score = 100; // modifies the score and add 100 as the new score.. then console.log
console.log(gameProgress);
