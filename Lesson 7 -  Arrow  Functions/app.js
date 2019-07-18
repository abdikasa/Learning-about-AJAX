//Regular function expression
let sayHello = function () {
    console.log("Hello");
}

//ES6 Arrow Function Way
//Lose the 'function' keyword and add a fat arrow '=>'
//For one line statements, lose the curly brace.
//For object literals, you need the curly braces for the object obviously and a set of paranthesis.
//Single  param does not need paranthesis like  example 4.


const sayHelloV2 = () => console.log('hello');

const returnString = () => '';

const returnMsg = () => ({ msg: 'Hello, World' })

const addParam = number => number;


let array = ['Sam','Christopher','Kareem']
const findLength = array.map((name, index => name.length));