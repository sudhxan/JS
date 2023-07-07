/*
  function getArray() {
    return [1,2];
  }

  const [x,y,z] = getArray();
  console.log(x);
  console.log(y);
  console.log(z);
  */

  //var has hoisting property let does not have hoisting property


//MAP FUNCTION
/*
  var myArray = [1,2,3];
  const newArray = myArray.map(
    (e) => (e+1)
  );

  console.log(newArray);
  console.log(myArray);
  */

//FILTER
/*
var myArray = [10,20,50];
const newArray = myArray.filter(
  e => e<50
);

console.log(newArray);
console.log(myArray);
  */

/*
  function hello(name="world") {
    console.log("hello" + name);
  }
  hello("hari");
  */

/*
  console.log("Apple\nBanana\nGrapes\nMango");
  console.log("---------------------");
  console.log(`
    Apple
    Banana Grapes
    Mango
    `);
  */

  //scoping
  /*
  function outer() {
    var name1 = "xyz";
    let name2 = "pqr";

    function inner() {
      var name1 = "xxyyzz";
      console.log(name1);
    }
    inner();
    console.log(name1);
  }

outer();
*/
