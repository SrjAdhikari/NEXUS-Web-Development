//* ****************************************************
//* Template Literals In JavaScript
//* ****************************************************


//* What is template literals ?
//? Template literals in JavaScript are a way to create strings that allow for embedded expressions, multi-line strings, and more convenient string interpolation. They are enclosed by backticks (``) instead of regular quotes ('' or "").


//* Key Features of Template Literals:
//? 1. String Interpolation
//? 2. Multi-line Strings
//? 3. Embedded Expressions


//* Examples:
//? 1:
let myName = "Suraj";
let age = 27;
let greeting = `Hello, my name is ${myName} and I am ${age} years old!`;
console.log(greeting);      // Output -> Hello, my name is Suraj and I am 27 years old!


//? 2:
let multiLineString = `This is a string
that spans multiple
lines.`;
console.log(multiLineString);


//? 3:
let num1 = 10;
let num2 = 20;
let sum = `The sum of ${num1} and ${num2} is: ${num1 + num2}`;
console.log(sum);           // Output -> The sum of 10 and 20 is: 30