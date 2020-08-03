$(document).ready(function() {
    //Variables
    var selectedStarter = {
      dish: "(None)",
      price: 0
    };
    var selectedMain = {
      dish: "(None)",
      price: 0
    };
    var selectedDessert = {
      dish: "(None)",
      price: 0
    };
    var starter = {
      firstDish: "Salad",
      firstDishPrice: 15,
      secondDish: "Soup",
      secondDishPrice: 7,
      thirdDish: "Fish rolls",
      thirdDishPrice: 12
    };
  
    var main = {
      firstDish: "Steak",
      firstDishPrice: 17,
      secondDish: "Salmon",
      secondDishPrice: 12,
      thirdDish: "Rissotto",
      thirdDishPrice: 9
    };
  
    var dessert = {
      firstDish: "Sorbet",
      firstDishPrice: 4,
      secondDish: "Fruit salad",
      secondDishPrice: 6,
      thirdDish: "Apple pie",
      thirdDishPrice: 5
    };
  
    function total() {
      return selectedStarter.price + selectedMain.price + selectedDessert.price;
    }
  
    function selectedStarterFnc(dish, price) {
      selectedStarter.price = price;
      selectedStarter.dish = dish;
      $("#total").html(total());
      return dish + "(" + price + ")";
    }
  
    function selectedMainFnc(dish, price) {
      selectedMain.price = price;
      selectedMain.dish = dish;
      $("#total").html(total());
      return dish + "(" + price + ")";
    }
  
    function selectedDessertFnc(dish, price) {
      selectedDessert.price = price;
      selectedDessert.dish = dish;
      $("#total").html(total());
      return dish + "(" + price + ")";
    };
  }
