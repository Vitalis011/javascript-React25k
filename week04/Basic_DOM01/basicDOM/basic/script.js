/* 
Use an HTML file with a <p> element that has the ID content.
Write JavaScript to select this element using getElementById.
Create a function that changes its text to "Hello, World!" when a button is clicked.
*/
const text = document.getElementById("content");
const button = document.getElementById("first button");

console.log(text.textContent);
console.log(button.textContent);

function changeText() {
  console.log("Button was clicked");

  text.textContent = "Hello World";
  button.textContent = "I was clicked";
}
function changeTag() {
  text.textContent = "This is really nice actually";
}

let content = document.getElementById("content");
let firstbutton = document.getElementById("button");
let newChild = document.createElement("p");
newChild.textContent = "Hello world";
content.replaceChild("newChild", "oldChild");

firstbutton.onclick = function () {
  alert("Hello world");
};
