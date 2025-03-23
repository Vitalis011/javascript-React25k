/* 
Create an HTML file with a button and a counter display.
Write JavaScript to count and display the number of times the button is clicked. 
*/

let count = 0;
const button = document.getElementById("countBtn");
const clickDisplay = document.getElementById("clicks");

button.addEventListener("click", () => {
  count++;
  clickDisplay.textContent = `Clicks: ${count}`;
});
