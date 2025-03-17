/* 
Create two variables:
numString1 with the value "42".
numString2 with the value "3.14".
Use parseInt() to convert numString1 into an integer.
Use parseFloat() to convert numString2 into a floating-point number.
Print the results using console.log() with messages:
"The integer is 42."
"The floating-point number is 3.14."
*/

let numString1 = "42";
let numString2 = "3.14";

let integer1 = Number.parseInt(numString1);
// Number indicates that it's a whole number.

let float2 = Number.parseFloat(numString2);

console.log("The integer is " + integer1 + ".");
console.log("The floating-point number is " + float2 + ".");
