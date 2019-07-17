document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {

  //Get the number from the form input value
  const number = document.querySelector('input[type="number"]').value;

  //create the XHR object.

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);


  xhr.onload = function () {

    if (this.status === 200) {
      let convert = JSON.parse(this.responseText);
      let li = '';


      console.log(typeof convert)

      if (convert.type !== "success") {
        console.log("<li>Something went wrong</li>")
      } else {
        convert.value.forEach(function(item){
          li+= `<li>${item.joke}</li>`;
          document.querySelector(".jokes").innerHTML = li;
        })
      }
      document.getElementById("span-num").textContent = `${number}`
    }
  }

  xhr.send();

  e.preventDefault();
}