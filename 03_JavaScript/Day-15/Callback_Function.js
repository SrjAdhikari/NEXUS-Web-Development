//* ****************************************************
//* Callback Function In JavaScript
//* ****************************************************


//* What is Callback Function ?
// A function that is passed as an argument to another function and is executed when that function is called. 
// It allows you to perform actions asynchronously or in response to some event.


//* In simpler terms:
// It’s a function you give to another function.
// It gets executed after some action or event takes place.


//* Syntax:
function mainFunction(callback) {
    // code to be executed
    callback();                                         // Calling the callback function
}


// Here, "callback" is the function that will be passed as an argument to "mainFunction". 
// When "mainFunction" is executed, it calls the "callback" function.


//* Why Use Callback Functions ?
// 1. They allow you to create asynchronous or delayed operations (e.g., handling API responses).
// 2. They make your code reusable and modular.
// 3. They provide a way to customize behavior in functions like forEach, map, filter, etc.


//* ****************************************************


//* Examples:
function greet(name) {
    console.log(`Hello, ${name}!`);
}

function callGreeting(callback) {
    callback("Suraj");                                  // Passing 'name' to the callback function
    console.log("Welcome to the main function.");
}

callGreeting(greet);

// Output:
// Hello, Suraj!
// Welcome to the main function.


// OR ↓

// Directly calling the callback function instead of passing it as an argument.
callGreeting(function greet(name) {
    console.log(`Hello, ${name}!`);
});

// Output:
// Hello, Suraj!
// Welcome to the main function.