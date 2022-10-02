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
const newPie = document.getElementById("optSize").value;
let topArr = [];
document.querySelectorAll("input[name=pizza-toppings]:checked").forEach(function(element) {
  let topping = element['value'];
  topArr.push(topping);
  })
}

function custAll (event){
  event.preventDefault;

}

window.addEventListener("load", function() {
document.querySelector("input#btnGo").addEventListener("submit", lessGo);
this.document.querySelector("form").addEventListener("onclick", customeInfo);
})