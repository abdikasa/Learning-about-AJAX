document.getElementById('button1').addEventListener("click", getText);
document.getElementById('button2').addEventListener("click", getJSON);



function getText() {
  fetch('test.txt')
    .then(function (result) {
      return result.text(); //returns a promise, we need to use .then to get the response.
    })
    .then(function (data) {
      console.log(data);
      document.body.innerHTML += data;
    })
    .catch(function (err) {
      console.log(err);
    })
}

function getJSON() {
  fetch('posts.json')
    .then(function (result) {
      return result.json();
    })
    .then(function (result) {
      console.log(result);
      let array = result;
      let html = ``;
      array.forEach(function (obj) {
        html += `<li>title: ${obj.title}, body: ${obj.body}</li>`;
      })
      document.body.innerHTML += html;
    })
    .catch(function (err) {
      console.log(err);
    })
}