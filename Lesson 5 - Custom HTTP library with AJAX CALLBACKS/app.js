
//Instantiate the object
const jsonph = new JSONPH();
jsonph.get('https://jsonplaceholder.typicode.com/posts', function (error, item) {
  if (error) { //The string is a truthy value, whereas null and undefined are not.
    console.log(error)
  } else {
    console.log(item);
  }
})