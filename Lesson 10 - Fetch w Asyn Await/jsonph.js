
class HTTPASYAW {
    async get(url) {
        const res = await fetch(url); //get the url
        const data = await res.json();
        return data;
    }

    async post(url, data) {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        return result;
    }

    async put(url, data) {
        const res = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        return result;
    }

    async delete(url) {
        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(res); //output Response
        const result = await res.json();
        console.log(result); //Since weare deleting, an empty object is returned.
        return "User is deleted";
    }
}