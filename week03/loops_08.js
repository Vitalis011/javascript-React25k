/* 
Write a function named findMinMax:
- Ask the user how many numbers they want to input.
- Then prompt them to enter that many numbers.
- Once all numbers are entered, determine and log:
- The smallest number.
- The largest number.
Display the results in the console. 
*/

function findMinMax() {
  userCount = parseInt(prompt("How many numbers do you want to enter"));

  if (isNaN(userCount) || userCount <= 0) {
    console.log("please enter a valid position number.");
  } else {
    console.log("valid number", userCount);
  }

  let numbers = [];

  for (let i = 0; i < count; i++) {
    let num = parseFloat(prompt(`Enter number ${i + 1};`));

    // check if the input is a valid number
    if (isNaN(num)) {
      console.log("Invalid input. Please enter a number");
      i--;
    } else {
      numbers.push(num);
    }
  }
}

//find the minimum and max number
let min = Math.min(...numbers);
let max = Math.max(...numbers);

//displah results in console.
console.log("Numbers entered:", numbers);
console.log("Smallest number:", min);
console.log("Largest number:", max);

// call the function

findMinMax();
