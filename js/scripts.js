const nothing = "try again foo!"

//Business Logic//
function Pizza () {
  this.topping = [];
  this.size = "";
  this.cost = 0
  this.customer
}

Pizza.prototype.superSize = function (size) {
  this.size = size
  if (this.size === "small") {
    this.cost = 7;
  } else if (this.size === "medium") {
    this.cost = 10;
  } else if (this.size === "large") {
    this.cost = 14;
  } else {
    nothing;
  }
  return this.cost
}

Pizza.prototype.comboLife = function (topping) {
  this.topping = topping
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
  return this.cost
}


//User Interface//

function lessGo (event) {
  event.preventDefault()
  let custName = document.querySelector("input#name").value;
  let thePie = document.getElementById("pizzaSize").value;
  let topSelection = [];
  const choiceTop = document.querySelector("input[type=checkbox][name='topping']:checked");
  for (let i = 0; i < choiceTop.length; i++) {
    topSelection.push(choiceTop[i].value);
  };

  const totalOf = new Pizza (custName, thePie, topSelection);
  let overAllCost = totalOf.comboLife() + totalOf.superSize();
  let chooseTops = topSelection.join(" ")

  document.querySelector("span#nameOfCust").innerHTML = custName;
  document.querySelector("span#sizeOfPizza").innerHTML = thePie;
  document.querySelector("span#topsOfPizza").innerHTML = chooseTops;
  document.querySelector("span#totalFor").innerText = overAllCost;
  
}


window.addEventListener("load", function() {
document.querySelector("form#formName1").addEventListener("submit", lessGo);
})