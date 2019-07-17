


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

//Make HTTP GET Request

//Make HTTP GET Request

//Make HTTP GET Request

