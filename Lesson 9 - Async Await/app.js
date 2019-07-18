// async function myFunc() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });

//     const error = false; //For error checking
//     if(!error){
//         const res = await promise; //wait until  promise is reolved;
//         return res;
//     }else{
//         await Promise.reject(new Error('Something went wrong'));
//     }
// }

// myFunc().then((res) => console.log(res)).catch(err => consolee.log(err));

async function getUsers(){
    //Wait for response
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    //Works almostt sync like, we wait for the response, then we retreive the json format.
    const data =  await res.json();

    return data;
}

getUsers().then(users => console.log(users));