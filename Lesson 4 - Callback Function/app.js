
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

function createAPost(post, callb) {
  setTimeout(function () {
    posts.push(post);
    callb();
  }, 2000)
}

//This  time we use  createAPost and use getPosts as a callback function that runs async.
//The difference is not only the lexical  placement of the code but how it runs.
//First createAPost() wait 2 seconds, it sees that it has a function that is activated.
//Next, it pushes the object first, then it calls the callback to loop through the object properties.

createAPost({ title: 'Superman', body: 'Man of Steel' }, getPosts);




// createAPost({
//   title: 'Lion King',
//   body: 'Lion King: The Movie'
// })

//Post 1 and 2 are outputted on the screen despite, createAPost() being called before the getPosts(). Done synchronously.

//getPosts() will  reveal the third post 'Lion King' if the getPosts setTimeout interval is greater than the setTimeout interval createAPost();

// getPosts();








