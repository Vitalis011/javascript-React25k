const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");

//const calculateTotal = () => {
//let totalPrice = parseFloat(pancakeType.value);
//console.log("event when triggered");

//toppings.forEach((topping) => {
//if (topping.checked) {
//totalPrice += parseFloat(topping.value);
//}
//});

//extras.forEach((extra) => {
//if (extra.checked) {
//totalPrice += parseFloat(extra.value);
//}
//});

//totalPriceDisplay.textContent = `${totalPrice}€`;
//totalPriceBanner.textContent = `${totalPrice}€`;
//};

//pancakeType.addEventListener("change", calculateTotal);
//extras.forEach((extra) => extra.addEventListener("change", calculateTotal));
//toppings.forEach((topping) =>
// topping.addEventListener("change", calculateTotal)
//);

const changeHandler = (event) => {
  console.log("Event:", event);
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );
  console.log("Base price:", basePrice);

  const toppingsTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);
  console.log("toppingsTotal", toppingsTotal);

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
  let deliveryFee = 0;
  const deliveryChecked = document.querySelectorAll(".delivery:checked");
  if (deliveryChecked) {
    sum + parseFloat(deliveryChecked.dataset.price), 0;
    console.log("deliveryFee", deliveryFee);
  }

  totalPriceDisplay.textContent = `${basePrice}€`;
  totalPriceBanner.textContent = `${basePrice}€`;
};

pancakeForm.addEventListener("change", changeHandler);
parseFloat(deliveryFee.dataset.price);
