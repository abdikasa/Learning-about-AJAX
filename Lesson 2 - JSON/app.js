document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer() {

  //Create the object.
  const xhr = new XMLHttpRequest();

  //open the connection.
  xhr.open('GET', 'customer.json', true);

  //When send() is complete, check if status is good
  //Then add a ul with template strings, inside we convert the unusable JSON to an object.
  //Then we access the properties and store them in ul, to later be added on screen with innerHTMl.


  xhr.onload = function () {
    if (this.status === 200) {

      const customer = JSON.parse(this.responseText);
      const ul = `<ul> 
      <li> ID: ${customer.id}</li>
      <li> Full Nanme: ${customer.name}</li>
      <li> Company: ${customer.company}</li>
      <li> Phone: ${customer.phone}</li>
      </ul>`;

      document.getElementById('customer').innerHTML = ul;

    }
  }

  xhr.send();
}

function loadCustomers() {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customers.json', true);
  xhr.onload = function () {
    if (this.status === 200) {
      let ul = '';
      // let ul; makes the first line return undefined.
      const customers = JSON.parse(this.responseText);
      console.log(customers)
      customers.forEach(function (customer) {
        ul += `<ul> 
        <li> ID: ${customer.id}</li>
        <li> Full Nanme: ${customer.name}</li>
        <li> Company: ${customer.company}</li>
        <li> Phone: ${customer.phone}</li>
        </ul>`;
        console.log(ul);
        document.getElementById('customers').innerHTML = ul;
      });
    }
  }
  xhr.send();
}