/* Task 1: Use "strict mode"
/*
Task: Create a function `task1` that uses `"use strict"`. 
      Inside the function, try using a variable without declaring it first.
      Catch the error and log: "Strict mode error: [error message]"

Example:
task1(); // Logs: "Strict mode error: variable is not defined"
*/

function task1(undeclearedVariable) {
  "use strict";
  undeclearedVariable = 100;
}
task1();

/* Task 2: Declare Variables Correctly
/*
Task: Declare a constant `MAX_USERS = 100` and a `let` variable `currentUsers = 10`.
      Try changing `MAX_USERS` and catch the error.

Expected:
- The error should be caught and logged.
- `MAX_USERS` should not change.
*/

function task2() {
  const MAX_USERS = 100;
  let currentUsers = 10;

  try {
    MAX_USERS = 1000;
    let addedUser = currentUsers;
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
task2();

/* Task 3: Create and Log an Object
/*
Task: Create an object `userProfile` with:
      - `name`
      - `email`
      - `isAdmin` (true or false)
      Log the object.

Expected:
- Console logs: { name: "Alice", email: "alice@example.com", isAdmin: true }
*/

function task3() {
  const userProfile = {
    name: "Alice",
    email: "alice@example.com",
    isAdmin: true,
  };
  console.log(userProfile);
}
task3();
/* Task 4: Write a Simple Function
/*
Task: Create `calculateArea` function that returns the area of a rectangle.
      The function should take `width` and `height` as inputs.

Example:
calculateArea(5, 10) → 50
*/

function calculateArea(width, height) {
  return width * height;
}
console.log(calculateArea(5, 10));

/* Task 5: Avoid Magic Numbers
/*
Task: Define `const DISCOUNT = 0.1`. 
      Write `applyDiscount(price)` that reduces the price by the discount.

Example:
applyDiscount(100) → 90
*/

const DISCOUNT = 0.1;
function applyDiscount(price) {
  return price - price * DISCOUNT;
}
console.log(applyDiscount(100));

/* Task 6: Write Useful Comments
/*
Task: Write a function `greetUser(name)` that returns a greeting.
      Use a meaningful comment explaining the function.

Example:
greetUser("Bob") → "Hello, Bob!"
*/
/**
 *
 * @param {string} name //the user name
 * @returns {string} // hello the user name.
 * @constant{variable} // store in a new variable
 */

function greetUser(name) {
  return `Hello, ${name}!`;
}
//console.log(greetUser("Bob"));
const newName = greetUser("Bob");
console.log(newName);

/* Task 7: Refactor Unclear Code
/*
Task: Improve this function to make it clear and readable.

Before:
function f(n){return n<0 ? 'negative' : 'positive';}

After:
- Use better naming and proper formatting.
*/

function checkNumber(number) {
  if (number < 0) {
    return "negative";
  } else {
    return "positive";
  }
}
console.log(checkNumber(-5));

/* Task 8: Fix Formatting
/*
Task: Rewrite this code to make it **formatted correctly**.

Before:
let x=10; function example(){console.log(x);}

After:
- Proper indentation and spacing.
*/

function example() {
  let x = 10; // declearing a variable
  console.log(x); // log values
}
example(); //call the function
