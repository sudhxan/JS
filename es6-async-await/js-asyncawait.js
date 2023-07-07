/*
 fetch("https://jsonplaceholder.typicode.com/users")
 .then((result) => result.json()) //then means wait. so this goes like a flow. result is a variable. after fetching the data, the data is stored in result variable . Now result is convereted to json format. json is collection of objects. objects are a set of key value pairs.
 .then((data) => console.log(data)) // now all json files are stored in data variable.And we are console logging

 console.log("--------------------------");

*/

/*
//normal function format down

async function getData() {

}
*/

const getData = async() => {
  var result = await fetch("https://jsonplaceholder.typicode.com/users");
  //create a variable result and await till the request fetch is completed and store the data in the result variable
  var data = await result.json();
  // now the result variable above has data fetched and we are converting it into json format and storing it in data variable
  console.log(data);
}

getData();
