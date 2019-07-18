


function JSONPH() {
    this.http = new XMLHttpRequest();
}

//Make HTTP GET Request

JSONPH.prototype.get = function (url, callback) {
    this.http.open('get', url, true);

    let self = this; //capture the this reference in this scope.
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(undefined, self.http.responseText);
        } else {
            callback("Error: " + self.http.status);
        }
    }

    this.http.send();
}

//Make HTTP POST Request

JSONPH.prototype.post = function (url, data, callback) {

    let self = this; //capture the this reference in this scope.

    //No need to check status, since this is a POST request.
    this.http.onload = function () {
        callback(null, self.http.responseText);
    }

    //open the connection
    this.http.open('POST', url, true);

    //Designates the content to be in JSON format
    this.http.setRequestHeader('Content-type', 'application/json');


    //Since we are passing the data or adding to it, we need to convert our object to JSON.
    this.http.send(JSON.stringify(data));

}

//Make HTTP PUT Request

JSONPH.prototype.put = function (url, data, callback) {

    let self = this; //capture the this reference in this scope.

    //No need to check status, since this is a POST request.
    this.http.onload = function () {
        callback(null, self.http.responseText);
    }

    //open the connection
    this.http.open('PUT', url, true);

    //Designates the content to be in JSON format
    this.http.setRequestHeader('Content-type', 'application/json');


    //Since we are passing the data or adding to it, we need to convert our object to JSON.
    this.http.send(JSON.stringify(data));

}


//Make HTTP DELETE Request

JSONPH.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);

    let self = this; //capture the this reference in this scope.
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, "POST DELETED");
        } else {
            callback("Error: " + self.http.status);
        }
    }

    this.http.send();
}

