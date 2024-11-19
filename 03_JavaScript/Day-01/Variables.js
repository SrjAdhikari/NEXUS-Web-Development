//* ****************************************************
//* Variables In JavaScript
//* ****************************************************


//* What is variable ?
//? Variable is basically a container that store value and data. You can think of it as a box where you can store a value, like a number or a piece of text, and give that box a name so you can use it later.


//* To create a variable in JavaScript, we use "let", "const" & "var" keyword.
//? let – is a modern variable declaration.
//? var – is an old-school variable declaration. Normally we don’t use it at all.
//? const – is like let, but the value of the variable can’t be changed.


//! Note : Prefer not to use "var" in code because of block and functional scope issues. Instead of "var" use "let".


//* What is value?
//? Smallest unit of information is value, that we store inside a variable. It could be a number, a piece of text (called a string), or other types of data.


//* Examples:
let message;            // Creating a vriable
// Here, "let" is a keyword that is used to create variable, and "message" is a name of variable.

message = "Hello";      // Store the value in variable
// Here, "Hello" is a value that is stored in the variable "message".


let user = "Suraj";     
let age = 27;
let greet = "Good Morning";

const PI = 3.1415;      // Variable created using the "const" keyword.
// Here, PI is a constant variable, and it's value cannot be changed.


// Printing value of variable.
console.log(message);   // This will print: Hello
console.log(user);      // This will print: Suraj
console.log(age);       // This will print: 27
console.log(greet);     // This will print: Good Morning
console.log(PI);        // This will print: 3.1415


//* The general rules for constructing names for variables:
// 1. The variable name should start with a letter, underscore _, or dollar sign $. For example, myAge, _myAge, or $myAge are valid names.
// 2. The first character of variable must not be a digit.
// 3. Variable names are case-sensitive. "myAge" and "myage" would be considered two different variables.
// 4. Always choose meaningful variable names that clearly describe the data they hold.
// 5. Always use "const" keyword to create a varibale, if the value should not be changed.