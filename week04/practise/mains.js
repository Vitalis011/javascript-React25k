//let input = document.getElementById("username");
//console.log(input.getAttribute("type"));
//let hobbies = document.getElementById("hobbies"); //firstly you call the fuction, or select whewre you want the changes
//let list = document.createElement("li"); //this will create a list item inside the ol element
// you need to tell where you want it.
//list.innerHTML = "Cooking"; //the innerhtml which is like a white board where the new ol list will show the new text. which is cooking.
//hobbies.appendChild(list); // hobbies is the id name . appendChild writes the new element at the end of the last li.

//const textExample = document.querySelector("p");
//const textExample2 = document.querySelector(".myclass");
//const textExample3 = document.querySelector("#myID");
//const textExample4 = document.querySelectorAll(".myclass");

//console.log(textExample.textContent);
//console.log(textExample2.textContent);
//console.log(textExample3.textContent);

//console.log(textExample4[1].textContent);

//const button = document.getElementById("insertBnt");
//const example1 = document.querySelector("#myID");
//const example2 = document.querySelector("header p .myclasss");
// helps you select the exact element without using an id. it also returns to you only 1 paragragh and ignores everythignelse.

//selector examples
//const myButton = document.getElementById("insertBtn"); // this means youre calling the selector which you want to work on. which is *insertbnt*
// also finds or returns one id or element selected.
// known as my button(insert)

/* const input = document.getElementById("input");
const paragraghText = document.getElementById("result"); */
//function

//const handleClick = () => {
//paragraghText.textContent = input.value;

//function
//const handleClick1 = () => {
//your telling the button that when clicked it should be handleclicked.
//selector.text.content = input.value
//document.getElementById("paragraghText").textContent = // tells that the content in the <p> should be changed using .text content
//document.getElementById("input").value; // when inputed a text in the 'input box'
//trigger
//myButton.addEventListener("click", handleClick1);
// shows that when handleclicked, it gives you an even saying clicked.

/*const circle = document.getElementById("alert");
console.log(circle.textContent);
const paragragh = document.getElementsByTagName("p");
console.log(paragragh.innerHTML);

function myFunction() {
  alert("some cool function");
}
myFunction();

function myFunction2() {
  alert("i told you not to click!");
}*/

/*const pancakeType = document.querySelector("#type");
const toppings = document.querySelector(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");

const calculateTotal = () => {
  let totalPrice = parseFloat(pancakeType.value);
  console.log(totalPrice);

  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};

pancakeType.addEventListener("change", calculateTotal);
toppings.forEach((topping) =>
  topping.addEventListener("change", calculateTotal)
);
//extras.forEach((extra) => extra.addEventListener("change", calculateTotal))*/

console.log("Page loaded");

const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const balance = document.getElementById("balance");
const message = document.getElementById("message");
const inputDeposit = document.getElementById("deposit");
const inputWithdraw = document.getElementById("withdraw");

let currentBalance = 0;

//  this Function updates the balance display
function updateBalance() {
  balanceElement.innerText = currentBalance.toFixed(2);
}

depositBtn.addEventListener("click", () => {
  const depositAmount = Number(inputDeposit.value);
  deposit(depositAmount);
  balance.innerText = currentBalance;
});

withdrawBtn.addEventListener("click", () => {
  const withdrawAmount = Number(inputWithdraw.value);
  withdraw(withdrawAmount);
  balance.innerText = currentBalance;
});

function checkBalance() {
  return Number(balance.innerText);
}

function deposit(depositAmount) {
  if (typeof depositAmount !== "number") {
    message.innerText = "Please enter a number";
  } else if (depositAmount < 0) {
    message.innerText = "Please enter a positive number";
    message.style.color = "red";
  } else {
    currentBalance += depositAmount;
    message.innerText = "Deposit successful";
    message.style.color = "yellow";
  }
}

function withdraw(withdrawAmount) {
  if (typeof withdrawAmount !== "number") {
    message.innerText = "Please enter a number";
    message.style.color = "red";
  } else if (withdrawAmount < 0) {
    message.innerText = "Please enter a positive number";
    message.style.color = "red";
  } else if (withdrawAmount > currentBalance) {
    message.innerText = "Insufficient funds";
    message.style.color = "red";
  } else {
    currentBalance -= withdrawAmount;
    message.innerText = "Withdrawal successful";
    message.style.color = "yellow";
  }
}
// for real time update

const inputField = document.getElementById("inputField");
const displayText = document.getElementById("displayText");

const updateDisplayText = () => {
  displayText.innerText = inputField.value;
};

inputField.addEventListener("input", updateDisplayText);

//Write JavaScript to:
//- Change the background color to a random color when the button is clicked.
//- Update the paragraph’s text color to match the user’s input valu

const colorChangeBtn = document.getElementById("colorChangeBtn");
const colorInput = document.getElementById("colorInput");
const colorText = document.getElementById("colorText");

const randomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

colorChangeBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = randomHexColor();
});
