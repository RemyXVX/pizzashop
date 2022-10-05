const nothing = "try again foo!"

//Business Logic//
function Pizza () {
  this.topping = [];
  this.size = "";
  this.cost = 0
  this.customer
}

Pizza.prototype.superSize = function () {
  let size = 0;
  if (this.size === "small") {
    this.cost = 7;
  } else if (this.size === "medium") {
    this.cost = 10;
  } else if (this.size === "large") {
    this.cost = 14;
  } else {
    nothing;
  }
  return this.cost;
}

Pizza.prototype.comboLife = function () {
  let topping = 0;
  if (this.topping === "vcheese") {
    this.cost += 2;
  } else if (this.topping === "mushrooms") {
    this.cost += 2;
  } else if (this.topping === "pepperoni") {
    this.cost += 2;
  } else if (this.topping === "sausage") {
    this.cost += 2;
  } else {
    nothing;
  }
  return this.cost;
}


//User Interface//

function lessGo (event) {
  event.preventDefault()
  let thePizza = new Pizza;
  let custName = document.querySelector("input#name").value;
  let thePie = document.getElementById("pizzaSize").value;

  const chee = document.getElementById("topping1").checked.value
  const mush = document.getElementById("topping2").checked
  const pep = document.getElementById("topping3").checked
  const sheeShee = document.getElementById("topping4").checked
  thePizza.comboLife (chee, mush,pep, sheeShee)

  //const totalOf = new Pizza (custName, thePie, topSelection);
  let overAllCost = thePizza.comboLife() + thePizza.superSize();
  let chooseTops = [chee, mush,pep, sheeShee]

  document.querySelector("span#nameOfCust").innerHTML = ("Hey" + " " + custName + ", your order is ready! A" + " " + thePie + " " + "pizza with" + " " + chooseTops + ".");
  document.querySelector("span#totalFor").innerText = overAllCost;
}


window.addEventListener("load", function() {
document.querySelector("form#formName1").addEventListener("submit", lessGo);
})