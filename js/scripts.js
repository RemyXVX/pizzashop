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
  for(i = 0; i <= topping.length; i++) {
    if (this.topping === "Vcheese") {
      console.log("this is vegan cheese");
    } if (this.topping === "mushrooms") {
      console.log("this is mushrooms");
    } if (this.topping === "pepperoni") {
    console.log("this is pepperoni");
    } if (this.topping === "sausage") {
      console.log("this is sausage");
    } if (this.topping === " ") {
      console.log(nothing);
    }
  }
}

Cost.prototype.myWallet = function () {

}

//User Interface//


window.addEventListener("load", function() {

})