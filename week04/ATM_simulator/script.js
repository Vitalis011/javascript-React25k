console.log("Page loaded");

const depositBtn = document.querySelector(".depositBtn");
const withdrawBtn = document.querySelector(".withdrawBtn");
const balanceElement = document.getElementById("balance");
const message = document.querySelector(".message");
const inputDeposit = document.querySelector(".depositInput");
const inputWithdraw = document.querySelector(".withdrawInput");

let currentBalance = 100;

//  this Function updates the balance displayed on the screen
function updateBalance() {
  balanceElement.innerText = currentBalance.toFixed(2);
}

depositBtn.addEventListener("click", () => {
  const depositAmount = Number(inputDeposit.value);
  deposit(depositAmount);
  updateBalance();
});

withdrawBtn.addEventListener("click", () => {
  const withdrawAmount = Number(inputWithdraw.value);
  withdraw(withdrawAmount);
  updateBalance();
});

function deposit(depositAmount) {
  if (typeof depositAmount !== "number") {
    message.innerText = "Please enter a valid number";
  } else if (depositAmount < 0) {
    message.innerText = "Please enter a positive number";
    message.style.color = "red";
  } else {
    currentBalance += depositAmount;
    updateBalance();
    message.innerText = "Deposit successful";
    message.style.color = "purple";
  }
  inputDeposit.value = ""; //this clears the input
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
    updateBalance();
    message.innerText = "Withdrawal successful";
    message.style.color = "purple";
  }
}
// forn liveupdate
const inputField = document.getElementById("inputField");
const displayText = document.getElementById("displayText");

const updateDisplayText = () => {
  displayText.innerText = inputField.value;
};

inputField.addEventListener("input", updateDisplayText);

const colorChangeBtn = document.getElementById("colorChangeBtn");
const colorText = document.getElementById("colorText");

const randomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

colorChangeBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = randomHexColor();
});

updateBalance();
