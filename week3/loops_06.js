/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/

const askToContinue = () => {
  let answer = "";
  let number;
  let total = 0;
  let count = 0;
  while (answer !== "n") {
    number = Number(prompt("Please enter a number"));
    answer = prompt("Do you want to continue entering numbers? ");
    total = total + number; // total += number
    console.log("Total: ", total);
    count++;
    if (answer === "n") {
      break;
    }
  }
  console.log("Average: ", total / count);
};
askToContinue();
