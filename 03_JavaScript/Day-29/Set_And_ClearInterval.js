//* ****************************************************
//* SetInterval And ClearInterval In JavaScript
//* ****************************************************


//* What is SetInterval ?
// The global setInterval() method repeatedly executes a specified function or code snippet at a fixed time interval (in milliseconds).
// It continues to run until it is explicitly stopped using the "clearInterval" method.


//* Syntax of SetInterval:
// setInterval(function, delay, ...args);


//* Explanation:
// function: The function to be executed repeatedly.
// delay: The time interval (in milliseconds) between each execution.
// ...args: Optional parameters to pass to the function.


//* ****************************************************

//* What is ClearInterval ?
// The "clearInterval" method stops the execution of a repeating timer created by "setInterval".
// We pass the interval ID (returned by setInterval) to clearInterval to stop the timer.
// If the timer is stopped before it finishes, the callback function does not execute.


//* Syntax of ClearInterval:
// clearInterval(intervalId);


//* Explanation:
// intervalId: The ID returned by "setInterval".


//* ****************************************************
//* How setInterval and clearInterval Work Together ?
//* ****************************************************

// 1. Use "setInterval" to start a repeating timer.
// 2. Store the interval ID in a variable return by "setInterval".
// 3. Use "clearInterval" with the interval ID to stop the timer.


//* ****************************************************
//* Examples Of SetInterval And ClearInterval
//* ****************************************************

//* 1. Basic Usage of setInterval
function greet() {
    console.log("Hello, Suraj!");
};

// Execute `greet` every 2 seconds
const interval_Id = setInterval(greet, 2000);

// Stop the interval after 10 seconds
setTimeout(() => {
    clearInterval(interval_Id);
    console.log("Interval stopped!");
}, 10000);


//* Output:
// Hello, Suraj! (after 2 seconds)
// Hello, Suraj! (after 4 seconds)
// Hello, Suraj! (after 6 seconds)
// Hello, Suraj! (after 8 seconds)
// Interval stopped!


//* ****************************************************

//* 2. Stopping the Interval with clearInterval
let counter = 0;
function countUp() {
    counter++;
    console.log(`Counter: ${counter}`);

    // Stop the interval when the counter reaches 5
    if(counter === 5) {
        // Stoping the interval
        clearInterval(intervalId);
        console.log("Interval stopped!");
    }
}

// Call the "countUp" function every 1000 milliseconds
const intervalId = setInterval(countUp, 1000);


//* Output:
// Counter: 1
// Counter: 2
// Counter: 3
// Counter: 4
// Counter: 5
// Interval stopped!


//* ****************************************************

//* 3. Real-Life Example (Digital Clock)
function displayTime() {
    const now = new Date();
    const localTime = now.toLocaleTimeString();
    console.log(localTime);

    //* Another way to display the time
    // const hours = now.getHours();
    // const minutes = now.getMinutes();
    // const seconds = now.getSeconds();
    // console.log(`${hours}:${minutes}:${seconds}`);
};

// Start the interval to display the time every second
const timeID = setInterval(displayTime, 1000);

// Stop the interval after 10 seconds
setTimeout(() => {
    clearInterval(timeID);
    console.log("Clock stopped!");
}, 10000);


//* Output:
// 10:50:21
// 10:50:22
// 10:50:23
// 10:50:24
// 10:50:25
// 10:50:26
// 10:50:27
// 10:50:28
// 10:50:29
// Clock stopped!


//* ****************************************************

//* 4. Countdown Timer
let countdown = 5;

// Start the interval to display the time every second
const countdownID = setInterval(() => {
    console.log(countdown);
    countdown--;

    if(countdown < 0) {
        clearInterval(countdownID);
        console.log("Time is up!");
    }
}, 1000);


//* Output:
// 5
// 4
// 3
// 2
// 1
// Time is up!