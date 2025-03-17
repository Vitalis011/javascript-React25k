//step 1. initialize a variable to store the sum of all numbers
//step 2. initialise a avriable to store the count of numbers
//step 3. use the loop to prompt the user to input number
//step 4. check if the number is 0
//step 5. if its not 0, add it to the sum and increment the count
//step 6. if its 0, calculate the average and log it

const calculateAverageUnitZero = () => {
  let sum = 0;
  let count = 0;
  let number = 1;
  while (number !== 0) {
    number = Number(window.prompt("Input number:"));
    if (number === 0) {
      break;
    }
    sum = sum + number;
    count++;
  }
  console.log("Count is: ", count);
  console.log("Sum of numbers is: ", sum);
  console.log("Average: ", sum / count);
};
calculateAverageUnitZero();
