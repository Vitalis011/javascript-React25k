/* 
Initial data:
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

1. Loop through the `teamMembers` array and log each name to the console.  
2. Remove the first member of the array.  
3. Remove the last member of the array.  
4. Add a new member "Alex" to the front of the array.  
5. Append a new member "Linda" to the end of the array.  
6. Create a new array that excludes the first two members, keeping the original array unchanged.  
7. Find the index of "Mike" in the array.  
8. Try to find the index of "Jake" (who is not in the array).  
9. Replace "Mike" with "Carol" and "Bruce" in the same position.  
10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.  
11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.  
12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.  
12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.  
13. Find all occurrences of "John" in the array and store their positions in a new array.  
14. Transform all names in the array to be uppercase while keeping the original array unchanged.  
15. Sort `teamMembers` in alphabetical order.  
16. Reverse the `teamMembers` array.  
17. Check if at least one member in the array is named "John".  
18. Check if all names in the array have more than three letters. 
*/

let teamMembers = ["john", "Emily", "Mike", "Sarah"];
// solution 1
teamMembers.forEach((member) => {
  console.log(member);
});
//solution2
teamMembers.shift();
//solution3
teamMembers.pop();
//solution 4
teamMembers.unshift("Alex");
//solution5
teamMembers.push("Linda");
//solution6
let newArrayToExclude = teamMembers.slice(2);
//solution 7
let indexOfMike = teamMembers.indexOf("Mike"); //2
//solution 8
let indexOfJake = teamMembers.indexOf("Jack"); //-1
//solution 9
let replaceMike = teamMembers.splice(2, 1, "Carol", "Bruce");
//solution 10
let Concatenate = teamMembers.concat("Bob");
let newArray = Concatenate;
//solution 11
let copyOfTeamMembers = teamMembers.slice();
//12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.
let newMembers = ["Tina", "Dean"];
let newTeamMembers = [...newMembers, ...teamMembers];
// solution 13
let allOccuranceOfJohn = newTeamMembers.indexOf("john"); //solution 14 //indexOf("John"); //-1 means its John is empty.
// orrr using of reduce to find all

let johnPositions = newTeamMembers.reduce((sum, member, index) => {
  if (member === "john") sum.push(index);
  return sum;
});
console.log(johnPositions);

// using for each also works makes it easier to understand but also a bit longer.
let johnNewPositions = [];
newTeamMembers.forEach((member, index) => {
  if (member === "John");
  johnNewPositions.push(index);
});
console.log(johnNewPositions);

// solution  14
let uppercaseTeamMembers = newTeamMembers.map((member) => member.toUpperCase());
console.log(uppercaseTeamMembers);
console.log(newTeamMembers);

//solution 15
teamMembers.sort();
console.log(teamMembers);

//solution 16
teamMembers.reverse();
console.log(teamMembers);

//solution 17
checkForJohn = newTeamMembers.some((member) => member >= "John");
console.log(checkForJohn); // True.

lengthOfLetters = newTeamMembers.every((member) => member.length >= 3);
console.log(lengthOfLetters);

// ANOTHER METHOD OF ANSWER TO THE ARRAY TASK

let teamMembers1 = ["John", "Emily", "Mike", "Sarah"];
// SOLUTION 1
teamMembers1.forEach((member) => {
  console.log(member);
});
// solution 2
teamMembers1.shift();
console.log(teamMembers1);
//solution 3
teamMembers1.pop();
console.log(teamMembers1);
//solution 4
teamMembers1.unshift("Alex");
console.log(teamMembers);
// solution 5
teamMembers1.push("Linda");
console.log(teamMembers1);
//solution 6
const newArray1 = teamMembers.slice(2);
console.log(newArray1);
// solution 7
let indexOfMike1 = teamMembers1;
indexOfMike1 = teamMembers1.indexOf("Mike");
console.log(indexOfMike1);
//solution 8
let indexOfJake1 = [];
indexOfJake1 = teamMembers1.indexOf("Jake");
console.log(indexOfJake1);
//solution 9
replaceMike = teamMembers1.splice(2, 1, "Carol", "Bruce");
console.log(replaceMike);
//solution 10
let concatOfBob = [];
concatOfBob = teamMembers1.concat("Bob");
console.log(concatOfBob);
console.log(teamMembers1);
// solution 11
let copyOfTeamMembers1 = [];
copyOfTeamMembers1 = teamMembers1.slice();
console.log(copyOfTeamMembers1);
//solution 12
let newMembers1 = ["Tina", "Dean"];
newTeamMembers = newMembers1.concat(teamMembers1);
console.log(newTeamMembers);
// OR
let newMembers2 = ["Tina", "Dean"];
newTeamMembers = [...newMembers2, ...teamMembers1];
console.log(newTeamMembers);
//solution13
// to find all occurance of john, we can use for each or .reduce()
let newPositionOfJohn = [];
teamMembers1.forEach((member, index) => {
  if (member === "John") {
    newPositionOfJohn.push(index);
  }
});
console.log(newPositionOfJohn);
// second solution using reduce
let johnPositions1 = [];
teamMembers1.reduce((total, member, index) => {
  if (member === "John") total.push(index);
  return total;
});
console.log(johnPositions1);

//solution 14
let capitalLetters = [];
capitalLetters = newTeamMembers.map((member) => member.toUpperCase());
console.log(capitalLetters);
console.log(newTeamMembers);

//solution 15
teamMembers1.sort();
console.log(teamMembers1);

//solution 16
teamMembers1.reverse();
console.log(teamMembers1);

// solution 17
let someTeamMembers = [];
someTeamMembers = teamMembers1.some((member) => member.length >= "John");
console.log(someTeamMembers);

// solution 18
let lengthOfLetters = [];
lengthOfLetters = teamMembers1.every((member) => member.length >= 3);
console.log(lengthOfLetters);
