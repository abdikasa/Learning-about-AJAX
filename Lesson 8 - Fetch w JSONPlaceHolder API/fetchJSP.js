/**
 *  KareemHTTP 
 *  Library making HTTP request with Fetch
 *  
 *  @version 1.9.9.6
 *  @author  Said Abdikarim
 *  @License Harvard
 * 
 */

//Creata a class, no constructor needed.

class FetchHTTP {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url) //return promise
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }) //return promise
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }) //return promise
        .then(res => res.json())
        .then(() => resolve(data))
        .catch(err => reject(err));
    })
  }

  //Delete works like GET
  //It takes a url, uses fetch on a url an an object literal.
  //method = delete, header is the same, and body is removed since it returns an empty object.
  //We are not sending back data, so  data does not need to be resolved.

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }      
      }) 
        .then(res => res.json())
        .then(data => resolve("Resource deleted!"))
        .catch(err => reject(err));
    })
  }

}