const nothing = "try again foo!"

//Business Logic//
function Pizza () {
  this.topping = [];
  this.size = "";
  this.cost = 0
}

function Cost () {

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
  } else (this.topping === " ") 
    nothing;
}


Cost.prototype.myWallet = function () {

}

//User Interface//


window.addEventListener("load", function() {

})