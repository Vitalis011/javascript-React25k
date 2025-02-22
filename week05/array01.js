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
