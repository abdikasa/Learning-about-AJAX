
const posts = [
  {
    title: 'Post 1',
    body: 'This is post body 1'
  }, {
    title: 'Post 2',
    body: 'This is post body 2'
  }
]

//POST (old)
// function createAPost(post) {
//   //mimic server response with setTimeout()

//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);

// }

//GET
function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
      document.body.innerHTML = output;
    })

  }, 1000);
}

//UPDATE: MOdified createAPost with a Promise ES6.
//A promise 'promises' while handling async operations, they promise to do a task after that operation has finished.



function createAPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () { //callback passed into promise
      posts.push(post);       //post is added
      console.log("hello");
      if (!"hello") {         //string is true, !string === false
        resolve();            //runs the function that is enclosed within resolve();
      } else {
        reject('Something went horribly wrong.')  //We use catch the error message.
      }
    }, 2000) //Program halts for two seconds.
    //console.log("hello") executed first before since new Promise handles async operations.

  })
}

//This  time we use  createAPost and use getPosts as a callback function that runs async.
//The difference is not only the lexical  placement of the code but how it runs.
//First createAPost() wait 2 seconds, it sees that it has a function that is activated.
//Next, it pushes the object first, then checks whether it is a success or failure. 

createAPost({ title: 'Superman', body: 'Man of Steel' }).then(getPosts).catch(function (err) {
  document.body.innerHTML = err;
});




// createAPost({
//   title: 'Lion King',
//   body: 'Lion King: The Movie'
// })

//Post 1 and 2 are outputted on the screen despite, createAPost() being called before the getPosts(). Done synchronously.

//getPosts() will  reveal the third post 'Lion King' if the getPosts setTimeout interval is greater than the setTimeout interval createAPost();

// getPosts();








