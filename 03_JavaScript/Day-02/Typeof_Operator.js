//* ****************************************************
//* Typeof Operator In JavaScript
//* ****************************************************


//* What is typeof ?
//? The typeof operator in JavaScript is used to determine the type of a given value. It helps us identify whether a value is a string, number, boolean, object, function, etc.

//* Syntax:  typeof value OR typeof (value)
//? Here, value can be expression or variable we want to check the type of.


//* Examples:
let age = 30;
console.log(typeof age);            // Output -> "number"

let firstName = "Suraj";
console.log(typeof firstName);      // Output -> "string"

let isActive = true;
console.log(typeof isActive);       // Output -> "boolean"

let result;
console.log(typeof result);         // Output -> "undefined"

let user = null;
console.log(typeof user);           // Output -> "object" (this is a known bug in JavaScript)


console.log(typeof 0);              // Output -> "number"
console.log(typeof "abc");          // Output -> "string"
console.log(typeof true);           // Output -> "boolean"
console.log(typeof undefined);      // Output -> "undefined"
console.log(typeof null);           // Output -> "object"
console.log(typeof Symbol("id"));   // Output -> "symbol"


//* Summary:
//? The typeof operator allows us to see which type is stored in a variable.
//? Usually used as typeof value, but typeof(value) is also possible.
//? Returns a string with the name of the type, like "string".
//? For null returns "object" –> This is an error in the language, it’s not actually an object.