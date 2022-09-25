//Business Logic//
function Pizza () {
  this.topping = ["cheese", "mushrooms", "pepperoni", "sausage", " "];
  this.size = ""
  this.costItem = 0;
  this.totalCost = 0;
  this.customer;
}

Pizza.prototype.comboLife = function () {
  let topping = this.topping
  for(i = 0; i <= topping.length; i++) {
    if (i = "cheese") {
      return true;
    } else if (i = "mushrooms") {
      return true;
    } else if (i = "pepperoni") {
      return true;
    } else if (i = "sausage") {
      return true;
    } else (i = NaN)
      return false;
  }
}

Pizza.prototype.superSize = function () {

}

Pizza.prototype.myWallet = function () {

}

//User Interface//
window.addEventListener("load", function() {

})