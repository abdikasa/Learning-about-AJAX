document.getElementById('button1').addEventListener("click", getText);
document.getElementById('button2').addEventListener("click", getJSON);



function getText() {
  fetch('test.txt')
    .then((result) => result.text())
    .then(data => document.body.innerHTML += data)
    .catch((err => console.log(err)))
}

function getJSON() {
  fetch('posts.json')
    .then(result => result.text())
    .then((result) => {
      console.log(result);
      let array = result;
      let html = ``;
      array.forEach(function (obj) {
        html += `<li>title: ${obj.title}, body: ${obj.body}</li>`;
      })
      document.body.innerHTML += html;
    })
    .catch(err => console.log(err))
}