/*
Use an HTML file with an <input> field, a <button>, and a <ul> list with the ID fruitList.
Write JavaScript to:
- Retrieve the value from the input field when the button is clicked.
- Create a new <li> element and set its text content to the input field's value.
- Append the <li> element to the list.
- Clear the input field after adding the fruit.
*/
//selector of the ids
const input = document.querySelector("#fruitInput");
const button = document.querySelector("#addFruitBtn");
const list = document.querySelector("f#ruitList");

function newFruitList() {
  const newFruit = document.createElement("li");
  newFruitList.textContent = input.Value;
  input.Value = ""; // this makes the value clean in the input of fruits
  //if you don't input an empty value, the user can keep enteering same input over and over again.
}

// trigger is always next
button.addEventListener("click", newFruitList);
