//* ****************************************************
//* SetTimeOut And ClearTimeOut In JavaScript
//* ****************************************************


// JavaScript is single-threaded and synchronous language, means it can only execute one task at a time.
// The browser provides mechanisms to handle asynchronous (non-blocking) tasks via Web APIs. 
// It uses a call stack to manage the execution of code, and it uses a priority queue to manage the tasks that need to be executed asynchronously.


//* ****************************************************

//* What is SetTimeOut ?
// The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
// The function runs only once unless "setTimeout" is called again.


//* Syntax of SetTimeOut:
// setTimeout(function, delay, ...args);


//* Explanation:
// function: The function to execute after the delay.
// delay: Time in milliseconds to wait before execution.
// ...args: Optional parameters to pass to the function.


//* How SetTimeOut Works ?
// 1. When setTimeout is called, it delegates the timer task to the Web API.
// 2. The browser starts the timer for the specified delay.
// 3. Once the timer completes, the callback function is added to the event queue.
// 4. JavaScript executes the callback once the execution stack is empty.


//* ****************************************************

//* What is ClearTimeOut ?
// The "clearTimeout" method cancels a timer created by "setTimeout". 
// If the timer is cleared before it finishes, the callback function does not execute.


//* Syntax of ClearTimeOut:
// clearTimeout(timeoutId);


//* Explanation:
// timeoutId: The ID returned by "setTimeout".


//* ****************************************************
//* How How setTimeout and clearTimeout Work Together ?
//* ****************************************************

// 1. "setTimeout"  runs the function once after the specified delay.
// 2. "clearTimeout" cancels the execution if it is called before the delay ends.


//* ****************************************************
//* Examples Of SetTimeOut And ClearTimeOut
//* ****************************************************

//* 1. Basic setTimeout
function greet() {
    console.log("Hello, Suraj!");
};

// Execute `greet` after 3 seconds
setTimeout(greet, 3000);
console.log("Waiting for the greeting...");


//* Output:
// Waiting for the greeting...
// (After 3 seconds)
// Hello, Suraj!


//* ****************************************************

//* 2. Canceling with clearTimeout
function greeting() {
    console.log("Hello, Suraj!");
    console.log("This portion of code will not execute.");
};

const cancelID = setTimeout(greeting, 3000);

// Cancel the timer
clearTimeout(cancelID);
console.log("Timer canceled!");


//* Output:
// Timer canceled!


//* ****************************************************

//* 3. Using setTimeout With Arguments
const reminduser = (message, time) => {
    setTimeout(() => {
        console.log(`Reminder: ${message}`);
    }, time);

    console.log(`Reminder set for ${time / 1000} seconds.`);
};

reminduser("Drink water!", 5000);


// Output:
// Reminder set for 5 seconds.
// Reminder: Drink water!