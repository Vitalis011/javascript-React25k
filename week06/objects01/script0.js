/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/

// Your code here

const library = [
  {
    title: "The mountain is you",
    author: "Brianna Weist",
    yearPublished: "2020",
  },
  {
    title: "1984",
    author: "George Orwell",
    yearPublished: "1948",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: "1960",
  },
];

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/
console.log(library[0].title);
library["yearPublished"] = 2024; //  thsi actually changes or modify the original
console.log(library["yearPublished"]); // then we console.log the new 'yearpublished'

//or
//library[1].yearPublished = 2024;
// Your code here

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
// finds the first book in the library the add genres property
library[0].genres = "self-sabotage";
library[0]["isAvailable"] = true; // add or modifies isAvailable with [] becuase its stored in a variable.

console.log(library[0]);
console.log(library[0].isAvailable);
/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
// create a book function
function Book(title, author, yearPublished, genres) {
  this.title = title; // tells that we're using same properties in the same array.
  this.author = author;
  this.yearPublished = yearPublished;
  this.genres = genres;
  {
  }
}
const newBook = new Book( // used to create a new or multiple objects within same array
  "Things fall apart",
  "Chinua Achebe",
  1958,
  "Literary Fiction"
);
library.push(newBook); // pushes new book to the last in the same library
console.log(library[3]); // logs the created book
/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/
// Your code here
function createBook(title, author, yearPublished, genres) {
  // returning the function with same properties
  return {
    title: title,
    author: author,
    yearPublished: yearPublished,
    genres: genres,
  };
}

//library = [];

const createdBook = createBook("the moutains", "Vitalis", 2000, ["fiction"]);
library.push({ ...createdBook }); // concats libray with the new created book
console.log(library);

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

// Your code here
const jsonLibrary = JSON.stringify(library);
console.log("json libaray", jsonLibrary);

const jsLibrary = JSON.parse(jsonLibrary);
console.log("JS Library", jsLibrary);

/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/

// Your code here
const students = [
  { name: "Vitalis", age: 25, grade: 95 },
  { name: "Chinedu", age: 28, grade: 85 },
  { name: "Siri", age: 23, grade: 87 },
  { name: "Makar", age: 26, grade: 96 },
];
students.forEach((student) => {
  if (student.grade >= 90) {
    console.log(student.name); // console.log just the name of the students
  }
});
/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/

// Your code here

const car = [
  {
    brand: "tesla",
    year: 2022,
    isElectric: true,
  },
];
function toCheck(isElectric) {
  //use scoop if-loop
  if (isElectric === true) {
    return "This car is eco-friendly";
  } else {
    return "This car runs on fuel";
  }
}
console.log(car); // logs car array
console.log(toCheck(car[0].isElectric)); // checks if the boolean on car.is electric is true then logs the rerturn
/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

// Your code here

const movies = [
  { title: "Chernobyl", director: "Johan Renck", rating: 9.5 },
  { title: "Zero Day", director: "Eric Newman", rating: 7 },
  { title: "Number 24", director: "John Andreas", rating: 8 },
];

movies.forEach((movie) => {
  if (movie.rating >= 8) {
    console.log(movie);
    console.log(movie.rating); // logs the movie array with the ratings
  }
});

/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/

// Your code here
const cars = [
  { model: "Tesla", year: "2022" },
  { model: "Toyota", year: "2009" },
];

function earliestYear(cars) {
  if (cars.length === 0) {
    // checks if the property is empty which is not .lenght is used to loops thrrough arrays
    return null;
  }
  let olderCar = cars[0]; // create a variable to store the oldcar

  cars.forEach((car) => {
    if (car.year < olderCar.year) {
      // checks each car's year which is older as older car is = cars
      olderCar = car; // let allows us create a new variable with same variable
    }
  });
  return olderCar;
}

console.log(earliestYear(cars));
/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

// Your code here

const userProfiles = [
  { username: "hhfu", email: "hgfjd@gmail.com", isAdmin: false },
  { username: "uufh", email: "ujgfjrdh@gmail.com", isAdmin: false },
  { username: "oofjh", email: "hrud@gmail.com", isAdmin: true },
];
function filteredUser(userProfiles) {
  // need to use filtervto filter which isAdmin is true
  //also .reduce()can be used as it does same work with .filer
  return userProfiles
    .filter((userProfile) => userProfile.isAdmin === true)
    .map((userProfile) => userProfile.username); // logs only the name of the user.
  //.map can not create a new variable so must be called with userProfile
}
console.log(filteredUser(userProfiles));
// OR FOR EACH
function filteredUserNames(userProfiles) {
  // declear a variable to store isAdmin
  let usersAdmin = [];
  // use foreach to loop through the profile which is truee
  userProfiles.forEach((userProfile) => {
    if (userProfiles.isAdmin === true) {
      usersAdmin.push(userProfile.username); // push the values into usersAdmin created as the new variable
    }
  });
  return usersAdmin; // always return outside of fuction syntax to avoid errors
}
// use the filteredUsername to call the function userprofilke where the arrays are stored.
console.log(filteredUserNames(userProfiles));

/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/

// Your code here
const orders = [
  {
    orderId: 79387,
    customerName: "Michael",
    totalAmount: 199,
    status: "Pending",
  },
  {
    orderId: 12679,
    customerName: "Vitalis",
    totalAmount: 200,
    status: "completed",
  },
  {
    orderId: 7467238,
    customerName: "Siri",
    totalAmount: 570,
    status: "Completed",
  },
];
function completedOrders(orders) {
  //used filtter or reduce or for each can work also
  return orders.filter((order) => order.status === "completed");
}
console.log(completedOrders(orders));
/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/

const smartphones = [
  { brand: "Apple", model: "Iphone 16", batteryLife: 95, is5GEnabled: true },
  {
    brand: "Samsung",
    model: "Samsung E10",
    batteryLife: 99,
    is5GEnabled: false,
  },
  {
    brand: "Blackberry",
    model: "Blackberry E10",
    batteryLife: 80,
    is5GEnabled: false,
  },
  { brand: "Haweii", model: "Haweii E10", batteryLife: 100, is5GEnabled: true },
];
// basically using a loop to to give which is true or false with 5G
function internets(phone) {
  if (phone.is5GEnabled === true) {
    //condition
    console.log(
      // i wanted to call out the branding while the shows the 'this is or not support 5G to make it more clear
      `${phone.brand} ${phone.model} (${phone.batteryLife}%) This phone supports 5G`
    );
  } else {
    console.log(
      `${phone.model} ${phone.model} (${phone.batteryLife}%)This phone do not supports 5G`
    );
  }
}

smartphones.forEach(internets); // goes through each smartphones and calls the function 'internet'

/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

// Your code here
const fox = [
  { name: "murry", age: 4, habitat: "idk" },
  { name: "yummy", age: 3, habitat: "Eatable" },
  { name: "mimi", age: 2, habitat: "Unknown" },
];
function animalNames(fox) {
  // i will use for each to loop through each fox age
  fox.forEach((fox) => {
    if (fox.age < 3) {
      // this logs the name and age of he fox,  the returns fox is young
      console.log(`${fox.name},  AGE:${fox.age} - This fox is young`);
    } else {
      console.log(`${fox.name},  AGE:${fox.age} - This fox is an adult`);
    }
  });
}
animalNames(fox);
/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

// Your code here
const employees = [
  { name: "mikey", position: "Front-End", salary: 3000 },
  { name: "Vitalis", position: "FullStack", salary: 5000 },
];
function totalSalary(employees) {
  // where the new salary will be stored
  let salaryTotal = 0;
  employees.forEach((employee) => {
    salaryTotal += employee.salary; // takes the value of salarytotal and adds to emplyee.salary
  });
  // returns salaryTotal as the empty and new price
  return salaryTotal;
}
// we log totalsalary by calling the fuction of employees
console.log(totalSalary(employees));
