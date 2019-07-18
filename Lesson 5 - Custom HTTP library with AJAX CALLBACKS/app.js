
//Instantiate the object
const jsonph = new JSONPH();

//GET
// jsonph.get('https://jsonplaceholder.typicode.com/posts/1', function (error, item) {
//   if (error) { //The string is a truthy value, whereas null and undefined are not.
//     console.log(error)
//   } else {
//     console.log(item);
//   }
// })

//Create post that we want to update
const data = {
  title: 'Lion King',
  body: 'The Live Version 2019'
};


//POST
// jsonph.post('https://jsonplaceholder.typicode.com/posts', data, function (post) {
//   console.log(post);
// })


//PUT
// jsonph.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
//   if (err) { //The string is a truthy value, whereas null and undefined are not.
//     console.log(err)
//   } else {
//     console.log(post);
//   }
// })

//DELETE
jsonph.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
  if(err){
    console.log(err);
  }else{
    console.log(response);
  }
})