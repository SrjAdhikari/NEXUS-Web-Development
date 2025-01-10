//* ****************************************************
//* Async Await In JavaScript
//* ****************************************************


//* What is Async ?
// Async is a keyword used to declare a function as asynchronous.
// An "async" function always returns a promise, even if it appears to return another value.
// The return value of the function is implicitly wrapped in "Promise.resolve()".


//* What is Await ?
// Await pauses the execution of an "async" function until the Promise it is waiting for resolves.
// "await" is always written inside the "async" function.
// It allows asynchronous code to be written in a synchronous-looking style.


//* Why Use Async/Await ?
// Improved Readability: Makes asynchronous code easier to read and maintain.
// Error Handling: Can use try...catch for straightforward error handling.
// Better Flow Control: Simplifies working with sequential asynchronous operations.
// Non-Blocking: Other code continues to execute while await pauses the async function.
// Avoids "callback hell" and improves code maintainability.


//* How Async/Await Works ?
// 1. An async function runs asynchronously and returns a Promise.
// 2. The "await" keyword is used to wait for a promise to resolved or rejected.
// 3. While waiting, the execution of the async function is paused, and other code (outside the function) continues to run.


//* Syntax
// Declaring an "async" Function:
async function functionName() {
    // Function body
}

// Using "await" inside an "async" Function: 
async function functionName() {
    // Wait for the promise to resolve or reject
    const result = await promise;
    console.log(result);
}


//* Summary
// The "async" keyword declares an asynchronous function that returns a Promise.
// The "await" keyword pauses an async function until the Promise resolves or rejects.
// "async" and "await" simplify working with Promises and make asynchronous code look like synchronous code.


//* Key Points
// 1. "async" keyword is used to declare a function as asynchronous and ensures it returns a Promise.
// 2. "await" keyword pauses execution of the function until the Promise resolves.
// 3. Error Handling: Use try-catch to handle errors when working with await.
// 4. Non-Blocking: Other code continues to execute while await pauses the async function.


//* When to Use Async/Await ?
// 1. Use "async" and "await" when you need to perform asynchronous tasks that depend on the result of previous tasks.
// 2. Use it for simplifying the code when handling multiple Promises or when chaining Promises becomes hard to read.