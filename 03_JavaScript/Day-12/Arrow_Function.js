//* ****************************************************
//* Arrow Function In JavaScript
//* ****************************************************


//* What is Arrow Function ?
// An arrow function in JavaScript is a shorter and simpler way to write a function. 
// It uses the => (arrow) symbol to separate the function's parameters from the function's body. 
// Arrow functions were introduced in ES6 (ECMAScript 2015).


//* Syntax of Arrow Functions:
// 1. Without parameters:
// const functionName = () => {
    // Function body
// }


// 2. With parameters:
// const function_Name = (param1, param2) => {
    // Function body
// }


//* ****************************************************


//* Examples:
// 1: With parameters:
const sum = (num1, num2) => {
    return num1 + num2;
}
console.log(sum(5, 10));                        // Output -> 15


// 2: Without parameters:
const multiply = () => {
    return 5 * 5;
}
console.log(multiply());                        // Output -> 25


// 3: Without parameters:
const greet = () => "Hello, World!";
console.log(greet());                           // Output: "Hello, World!"


//* ****************************************************

//* Shorthand Syntax:
// If the function has only one expression and it simply returns a value, you can omit the return keyword and curly braces {}.


//* Examples:
// 1: With parameters:
const add = (num1, num2) => num1 + num2;
console.log(add(5, 10));                        // Output -> 15


// 2: Without parameters:
const sayMyName = () => console.log("suraj");
sayMyName();                                    // Output -> suraj


//* ****************************************************


//* Single parameter:
// If the function only has one parameter, you can remove the parentheses (). 
// But if there are no parameters or more than one parameter, you still need the parentheses:


//* Example:
const square = num => num * num;
console.log(square(5));                         // Output -> 25


//* ****************************************************


//* Key Points to Understand:
// No need for the "function" keyword.
// Arrow functions are not hoisted and cannot be used before they are defined.
// If the arrow function has only one expression, it automatically returns that value. No need to write return keyword and curly braces{}.
// If the arrow function has only one parameter, you can skip the parentheses.
// If the arrow function has no parameters, you use empty parentheses.