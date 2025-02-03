/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/
/* step 1: initialise a variable to store the count of even numbers
   step2.  Use a loop to prompt the user to input 20 numbers one by one
   step 3. check if thr number is even
   // if its even increment the count
   // log the count of even numbers
*/

const countEvenNumbers = () => {
  let count = 0;
  for (i = 0; i < 20; i++) {
    number = Number(window.prompt("Input 20 number one by one :"));
    if (number % 2 === 0) {
      count++;
    }
  }
  console.log("Amount of EvenNumber:", count);
};
countEvenNumbers();
