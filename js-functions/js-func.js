  const items = {
    food: 1000,
    drinks: 2000
  };

  //Hoisting means whatever variable you include in the last, it will come in the top

  cart = 0;
  function addToCart(parameter) {
    cart += parameter;
  }

  addToCart(items.food);
  addToCart(items.drinks);
  console.log("cart:", cart);
  var cart; //Hoisting

  /*Arrow function
  var addToCart = (parameter) => {

};

  */

  //This keyword --> console.log(this); tells ur current executing object.
