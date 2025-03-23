/*
Create an HTML file with a <p> element and a button.
Write JavaScript to toggle the visibility of the paragraph each time the button is clicked.
 */

const text = document.querySelector(".text");
const toggleBtn = document.querySelector(".toggleBtn");

toggleBtn.addEventListener("click", function () {
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});
