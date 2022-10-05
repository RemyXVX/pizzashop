const nothing = "try again foo!"

//Business Logic//
function Pizza (toppings, size, customer) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
  this.customer = customer
}

Pizza.prototype.superSize = function () {
  if (this.size === "small") {
    this.cost = 7;
  } else if (this.size === "medium") {
    this.cost = 10;
  } else if (this.size === "large") {
    this.cost = 14;
  }
  return this.cost
}

Pizza.prototype.comboLife = function () {
  if (this.toppings.includes("vcheese")) {
    this.cost += 2;
  } 
  if (this.toppings.includes("mushrooms")) {
    this.cost += 2;
  } 
  if (this.toppings.includes("pepperoni")) {
    this.cost += 2;
  } 
  if (this.toppings.includes("sausage")) {
    this.cost += 2;
  }
  return this.cost;
}


//User Interface//

function lessGo (event) {
  event.preventDefault()

  let custName = document.querySelector("input#name").value;
  let thePie = document.getElementById("pizzaSize").value;
  let toppingsArray = [];
    document.querySelectorAll('input[name=topping]:checked')
    .forEach(function (element) {
      let topping = element['value'];
      toppingsArray.push(topping);
    });
  const thePizza = new Pizza(toppingsArray, thePie, custName);
  thePizza.superSize();
  thePizza.comboLife();
  console.log(thePizza)
  
  document.querySelector("span#nameOfCust").innerHTML = ("Hey" + " " + thePizza.customer + ", your order is ready! A" + " " + thePizza.size + " " + "pizza with" + " " + thePizza.toppings + ".");
  document.querySelector("span#totalFor").innerText = "The total cost of" + " " + thePizza.cost + ".";
}


window.addEventListener("load", function() {
document.querySelector("form#formName1").addEventListener("submit", lessGo);
})