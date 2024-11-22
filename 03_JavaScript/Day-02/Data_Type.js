//* ****************************************************
//* Data Types In JavaScript
//* ****************************************************


//! What is Data Types ?
//? Data types define the kind of values that can be stored in a variable.

//! Note: A JavaScript variable can hold any type of data.


//? JavaScript has two main categories of data types:
//* 1. Primitive Data Types
//* 2. Object Data Types


//! Primitive Data Types:
//? 1. Number:
//* Represents both integer and floating point numbers.
//* Example: let age = 30; or let temperature = 98.6;

//? 2. String:
//* Represents a sequence of characters, enclosed in single quotes(' '), double quotes(" "), or backticks(` `) for template literals.
//* Example: let greeting = "Hello, world!"; or let name = 'Suraj';

//? 3. Boolean:
//* Represents a logical value, either "true" or "false".
//* Example: let isLoggedIn = true; or let hasPermission = false;

//? 4. Undefined:
//* Represents a variable that has been declared but has not yet been assigned a value.
//* Example: let result; => result is undefined because it has not been assigned a value yet

//? 5. Null:
//* Represents the intentional absence of any object value. It's often used to signify that a variable should be empty.
//* Example: let user = null; => user is explicitly set to have no value

//? 6. Symbol (ES6):
//* Represents a unique and immutable value used primarily as object property keys.
//* Example: let uniqueId = Symbol('id');

//? 7. BigInt (ES11):
//* Represents whole numbers larger than the Number type can safely store.Range: (2^53 - 1) To -(2^53 - 1)
//* Example: let bigNumber = 1234567890123456789012345678901234567890n;


//! Object Data Types:
//? 1. Object
//? 2. Array
//? 3. Function


//* Key Points:
// Primitive types are simple and immutable.
// Object types are complex and mutable, and they can store multiple values.


//* Examples:

//? Numbers
let age = 25;           // An integer
let price = 19.99;      // A floating-point number

//? String
let message = "Welcome to JavaScript!";     // A string enclosed in double quotes
let greeting = 'Good Morning';              // A string enclosed in single quotes

//? Booleans
let flag = true;
let isLoggedIn = false;

//? Undefined
let result;             // result is undefined

//? Null
let user = null;        // user is explicitly set to null


//* Printing Value of variable:

console.log(age);           // Output -> 25
console.log(price);         // Output -> 19.99
console.log(message);       // Output -> Welcome to JavaScript!
console.log(greeting);      // Output -> Good Morning
console.log(flag);          // Output -> true
console.log(isLoggedIn);    // Output -> false
console.log(result);        // Output -> undefined
console.log(user);          // Output -> null