const http = new HTTPASYAW();

//GET
// http.get('https://jsonplaceholder.typicode.com/users')
// .then((data) => console.log(data));

let data = { username: 'abdikasa' };

//POST
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then((data) => console.log(data));


//PUT
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then((data) => console.log(data));


//DELETE
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then((data) => console.log(data));