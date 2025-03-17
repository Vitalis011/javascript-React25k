/* 
Write a function named createWordPyramid:
- Take a word (e.g., "code") as input.
- Use a loop to build a pyramid pattern:
    Example for "code":
    c
    co
    cod
    code
 */

const createWordPyramid = (word) => {
  for (let i = 1; i <= word.length; i++) {
    console.log(word.substring(0, i));
  }
};

createWordPyramid("code");
