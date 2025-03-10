/* 
Write a function named checkAdult:
Take an age as a parameter.
If age is 18 or older, return "You are an adult."
Otherwise, return nothing.
Call the function with different ages and print the result.
 */

const checkAdult = (age) => {
  return (age) => (18 ? "You are an adult" : null); //or you use "";
};

console.log(checkAdult(18));
console.log(checkAdult(17));

//or

const age = 20;
const isAdult = age >= 18 ? "You are an adult" : "";

const checkAdult2 = (age) => {
  if ((age) => 18);
};
