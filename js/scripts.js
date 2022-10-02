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
  let custName = document.getElementById("formName1").value;
  console.log(custName)
  let thePie = document.getElementById("pizzaSize").value;
  console.log(thePie)
  let topSelection = 0;
  console.log(topSelection)
  document.querySelector("input[name=topping]:checked").forEach(function(element) {
    let topping = element['value'];
    topArr.push(topping);
  })

  const totalOf = new Pizza (custName, thePie, topSelection);

  document.querySelector("span#nameOfCust").innerText = custName
  document.querySelector("span#sizeOfPizza").innerText = thePie
  document.querySelector("span#topsOfPizza").innerText = topSelection
  document.querySelector("span#totalFor").innerText = custName
  
}


window.addEventListener("load", function() {
document.querySelector("button#cookDatPizza").addEventListener("onclick", lessGo);
})