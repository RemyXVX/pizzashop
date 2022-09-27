//Business Logic//
function Pizza () {
  this.topping = ["cheese", "mushrooms", "pepperoni", "sausage", " "];
  this.size = ["small", "medium", "large", " "];
  this.costItem = 0;
  this.totalCost = 0;
  this.customer;
}

Pizza.prototype.comboLife = function () {
  let topping = this.topping;
  for(i = 0; i < topping.length; i++) {
    console.log(topping[i]);
  }
}

Pizza.prototype.superSize = function () {

}

Pizza.prototype.myWallet = function () {

}

//User Interface//


window.addEventListener("load", function() {

})