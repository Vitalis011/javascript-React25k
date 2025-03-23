/*
Create an HTML file with:
- A <button> to change the background color.
- A <input> field for users to enter a color.
- A <p> element where the text color changes based on the input.

Write JavaScript to:
- Change the background color to a random color when the button is clicked.
- Update the paragraph’s text color to match the user’s input valu
*/

const button = document.querySelector(".colorChangeBtn");
const input = document.querySelector(".colorInput");
const text = document.querySelector(".text");

const randomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

button.addEventListener("click", () => {
  document.body.style.backgroundColor = randomColor();
});

input.addEventListener("input", () => {
  text.style.color = input.value;
});
