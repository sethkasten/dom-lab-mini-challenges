"use strict";

// #1 Vending Machine

const totalPrice = document.querySelector(".total-price");
const limeCola = document.querySelector(".lime-cola");
const saltedPeanuts = document.querySelector(".salted-peanuts");
const chocolateBar = document.querySelector(".chocolate-bar");
const fruitGummies = document.querySelector(".fruit-gummies");

let totalValue = 0;

limeCola.addEventListener("click", () => {
  totalValue += 2;
  totalPrice.textContent = `Total: $${totalValue}.00`;
});

saltedPeanuts.addEventListener("click", () => {
  totalValue += 3;
  totalPrice.textContent = `Total: $${totalValue}.00`;
});

chocolateBar.addEventListener("click", () => {
  totalValue += 4;
  totalPrice.textContent = `Total: $${totalValue}.00`;
});

fruitGummies.addEventListener("click", () => {
  totalValue += 6;
  totalPrice.textContent = `Total: $${totalValue}.00`;
});

// #2 Make Money

const makeMoneyForm = document.querySelector(".make-money-form");
const moneyContainer = document.querySelector(".money-container");

makeMoneyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let i = 0; i < document.querySelector("#how-many").value; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add("coin");
    newCoin.addEventListener("click", () => {
      newCoin.style.display = "none";
    });
    if (document.querySelector("#which-coin").value === "penny") {
      newCoin.classList.add("penny");
      newCoin.textContent = "Penny";
    } else if (document.querySelector("#which-coin").value === "nickel") {
      newCoin.classList.add("nickel");
      newCoin.textContent = "Nickel";
    } else if (document.querySelector("#which-coin").value === "dime") {
      newCoin.classList.add("dime");
      newCoin.textContent = "Dime";
    } else if (document.querySelector("#which-coin").value === "quarter") {
      newCoin.classList.add("quarter");
      newCoin.textContent = "Quarter";
    }
    moneyContainer.append(newCoin);
  }
});

// #3 Light Bulb

const lightBulb = document.querySelector(".light-bulb");
const onButton = document.querySelector(".on-button");
const offButton = document.querySelector(".off-button");
const toggleButton = document.querySelector(".toggle-button");
const endButton = document.querySelector(".end-button");

onButton.addEventListener("click", () => {
  lightBulb.classList.add("yellow");
});

offButton.addEventListener("click", () => {
  lightBulb.classList.remove("yellow");
});

toggleButton.addEventListener("click", () => {
  lightBulb.classList.toggle("yellow");
});

endButton.addEventListener("click", () => {
  lightBulb.remove();
  onButton.remove();
  offButton.remove();
  toggleButton.remove();
  endButton.remove();
});
