/*
Create an HTML file with an <input> field and a <div> with the ID displayText.
Write JavaScript to:
- Continuously update the <div> with the input field's value as the user types.
- Use the input event for real-time updates.
*/
// selector
const input = document.querySelector("#displayInput");
const div = document.querySelector("#displayText");

function update() {
  text.textContent = input.Value;
}
input.addEventListener("dblclick", update);

// event.target.value. if youre working with an input and you want to read the real time value.
// because the input is tartgeted
