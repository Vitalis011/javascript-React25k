const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");

const pancakeForm = document.querySelector("#pancakeForm");
const summaryText = document.getElementById("summaryText");
const seeOrder = document.getElementById("seeOrder");
const orderSummary = document.getElementById("orderSummary");

const totalPriceUpdate = () => {
  // gets base price from the selected pancake form
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );
  console.log("Base price:", basePrice);

  const toppingsTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);
  console.log("toppingsTotal", toppingsTotal);

  //calculates extra total (diffrent prices)
  const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, extra) => sum + parseFloat(extra.dataset.price),
    0
  );
  console.log("extrasTotal", extrasTotal);

  // Delivery logic: define a variable called deliveryFee
  // Then find all elements that are #delivery and checked
  // Find the data-price of this element.
  // If this data-price
  // Add all values together in a total and display that in the totalPriceDisplay and totalPriceBanner

  // this calculates delivery fee

  const deliveryFee = [
    ...document.querySelectorAll(".delivery:checked"),
  ].reduce((sum, delivery) => sum + parseFloat(delivery.dataset.price), 0);

  // calculates final today price
  const totalPrice = basePrice + toppingsTotal + extrasTotal + deliveryFee;

  // updates the totalprice display and the banner as well

  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};

const changeHandler = (event) => {
  console.log("Changed element", event.target);
  totalPriceUpdate();
};

pancakeForm.addEventListener("change", changeHandler);

// retrieving the customer data, pancake type, topping, extras, delivery and total balance

const orderSummaryUpdate = () => {
  // getting the selector for the customer name, if the input is empty then default name = guest
  const customerName = document.querySelector("#customerName").value || "Guest";

  // gets the full text of any selected pancake
  const selectedPancake =
    document.querySelector("#type").selectedOptions[0].text;

  // getting any selected topping and the text.
  const selectedToppings = [
    ...document.querySelectorAll(".topping:checked"),
  ].map((topping) => topping.parentElement.textContent.trim());

  // getting selected extras

  const selectedExras = [...document.querySelectorAll(".extra:checked")].map(
    (extra) => extra.parentElement.textContent.trim()
  );

  // also for deliveries.
  const selectedDelivery = [
    ...document.querySelectorAll(".delivery:checked"),
  ].map((delivery) => delivery.parentElement.textContent.trim());

  // where the summary will be displayed after getting each selected values.

  const orderSummary = `<strong>Name: </strong> ${customerName} <br>
  <strong>Pancake Type:</strong> ${selectedPancake} <br>
  <strong>Toppings: </strong> ${
    selectedToppings.length > 0 ? selectedToppings.join(",") : "None"
  } <br>
  <strong>Extras: </strong> ${
    selectedExras.length > 0 ? selectedExras.join(",") : "None"
  } <br>
  <strong>Delivery: </strong> ${selectedDelivery} <br>
  <strongTotal Price </strong> ${totalPriceDisplay.textContent} <br>
`;

  summaryText.innerHTML = orderSummary;
};

seeOrder.addEventListener("click", orderSummaryUpdate);
