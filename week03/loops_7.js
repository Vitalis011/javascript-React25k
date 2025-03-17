/* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/
const sumAndAverage = () => {
  let total = 0;
  let number;
  let smallest = Infinity;
  let largest = -Infinity;
  let count = 0;
  for (let i = 0; i <= 10; i++) {
    number = Number(prompt("Enter 10 numbers:"));
    total = total + number;
    count++;
    if (number < smallest) {
      smallest = number;
    }
    if (number > largest) {
      largest = number;
    }

    // number < smallest ? smallest = number : biggest = number
  }
  console.log("Total: ", total);
  console.log("Average:", total / count);
  console.log("smallest number:", smallest);
  console.log("largest number:", largest);
};
sumAndAverage();
