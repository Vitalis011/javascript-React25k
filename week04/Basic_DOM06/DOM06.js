/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const errorMessage = document.querySelector(".error.message"); // Corrected class selector

form.addEventListener("submit", (event) => {
  let errors = [];

  errorMessage.textContent = ""; //clears previous message

  if (username.value.trim() === "") {
    errors.push("Username is required.");
  }

  if (email.value.trim() === "") {
    errors.push("Email is required.");
  }

  // Show error message if there are errors
  if (errors.length > 0) {
    event.preventDefault(); // Prevent form submission
    errorMessage.textContent = errors.join(" "); // Show errors
    errorMessage.style.color = "red"; // Style error message
  }
});
