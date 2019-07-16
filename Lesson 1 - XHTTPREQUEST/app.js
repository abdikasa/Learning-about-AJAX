
document.getElementById('button').addEventListener('click', loadData)

function loadData() {
  //Create an XHR object aka XMLHTTPREQUEST
  const xhr = new XMLHttpRequest();

  // console.log("ReadyState", xhr.readyState); Output: 0


  //Open
  //Type of the request, filename, async boolean.
  xhr.open('GET', 'data.txt', true);

  // console.log("ReadyState", xhr.readyState); Output: 1


  //When everything is ready, xhr.onload runs. When readyStates === 4.
  xhr.onload = function () {
    //Check if HTTP status is 200 aka good/everything is working as intended.
    // 403: Forbidden and 404 means "Not Found".
    //responseText returns the data found in the data.txt file.

    // console.log("ReadyState", xhr.readyState); Output: 4

    if (this.status === 200) {
      console.log(this.responseText);
    }

    // console.log("ReadyState", xhr.readyState); Output: 4
  }

  //Before onload, onreadystatechange was used.
  //You had to manually check if the status === 200 and that the readyState was at 4.
  // xhr.onreadystatechange= function() {
  //   console.log("ReadyState", this.readyState); //Output: 1, 2, 3, 4
  // }

  //Add a spinner while loading for the page.
  xhr.onprogress = function () {
    console.log("readyState", xhr.readyState); //Output 3: Processing the request.
  }

  //In case something goes wrong, 
  xhr.onerror = function () {
    console.log("Error");
  }


  // console.log("ReadyState", xhr.readyState); Output: 1


  //Initiates the request.
  xhr.send();

  // console.log("ReadyState", xhr.readyState); Output: 1.

}

//HTTP Status
//200 ==== Good
//403 ==== Forbidden
//404 ==== Not Found

//When send() is called
//==================================
//Ready State values
//0: request not initialized
//1: server connection established.
//2: request received.
//3: processing the request
//4: request is finished/ready.