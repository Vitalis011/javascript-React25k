/* 
Write a function named checkFoxLover:
Take two parameters: age and likesFoxes.
If age is 18 or older:
Check if likesFoxes is true.
If true, return "You are an adult who likes foxes!"
Otherwise, return "Not a fox fan, but that’s okay!"
Call the function with different ages and preferences.
 */

const checkFoxLover = (age, likesFoxes) => {
  if (age >= 18 && likesFoxes) {
    return "You are an adult who likes foxes!";
  } else {
    return "Not a fox fan, but that's okay!";
  }
};

console.log(checkFoxLover(18, true));
console.log(checkFoxLover(20, true));
console.log(checkFoxLover(17, false));
console.log(checkFoxLover(15, false));
