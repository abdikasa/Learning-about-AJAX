const http = new FetchHTTP();

//Get users
//returns a promise
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => err);

const data = {
  name: 'Kareem',
  username: 'abdikasa'
}

//POST REQUEST
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => err);

//PUT REQUEST - requires specific index.
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => err);

//DELETE - requires specific index.
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(() => console.log(response))
  .catch(err => err);















//Synchronous way
//Stops at fetch(url) === returns a promise, to get the data, it needs to be async
// let getUsers = http.get('https://jsonplaceholder.typicode.com/users');
// console.log(getUsers);

