//* ****************************************************
//* Example 1: Simple Async Function
//* ****************************************************

// An async function always returns a Promise, whether or not you explicitly return one.
async function greet() {
    return "Good Morning Everyone!";
};

// Consume the promise, because "greet" returns a promise
greet()
    .then(message => console.log(message));


//* ****************************************************
//* Example 2: Using Async/Await
//* ****************************************************

// Create a promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false;
        if(!error) 
            resolve({
                username: "Suraj",
                age: 20,
                country: "Nepal",
                city: "Pokhara"
            });
        else
            reject(`Error: Something went wrong`);
    }, 2000);
});

// Define an async function to consume the promise.
async function consumePromise() {
        const response = await promise;
        console.log(response);
};

// Call the async function to consume the promise
consumePromise();


//* ****************************************************
//* Example 3: Error Handling with try-catch
//* ****************************************************

// Define a async function to fetch and log the data
async function fetchData() {
    try {
        const forcastURL = fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=Pokhara&aqi=yes`);
        const response = await forcastURL;
        const data = await response.json();
        console.log(data);
    } 
    catch (error) {
        console.log(`Error: ${error}`);
    }
};

// Call the async function to fetch and log the data
fetchData();


//* ****************************************************
//* Example 4: Using Async/Await with Multiple Promises
//* ****************************************************

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 1 resolved`);
    }, 2000);
});

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved`);
    }, 2000);
});

// Async function to consume multiple promises
async function consumePromises() {
    const firstPromise = await promiseOne;
    console.log(firstPromise);

    const secondpromise = await promiseTwo;
    console.log(secondpromise);
};

// Call the async function to consume multiple promises
consumePromises();


//* Output: Both are resolved in 2 seconds, because they are executes in parallel order.
// Promise 1 resolved
// Promise 2 resolved


//* ****************************************************
//* Example 5: Using Async/Await with Multiple Functions
//* ****************************************************

function functionOne() {
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Function One: Promise resolved`);
        }, 5000);
    });
    return promise1;
};

function functionTwo() {
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Function Two: Promise resolved`);
        }, 5000);
    });
    return promise2;
}

// Async function to consume multiple promises
async function promiseConsumer() {
    //* Below code will resolve promises in parallel order. It took only 5 seconds to resolve the promises.
    // const [data1,data2] = await Promise.all([functionOne(),functionTwo()]);
    // console.log(data1);
    // console.log(data2);

    //* Below code will resolve promises in sequential order. It took 10 seconds to resolve the promises.
    const dataOne = await functionOne();
    console.log(dataOne);

    const dataTwo = await functionTwo();
    console.log(dataTwo);
};

// Call the async function to consume multiple promises
promiseConsumer();


//* Output: They take total 10 seconds to resolve, because both functions are independent to each other and executes in sequential order.
// Function One: Promise resolved (After 5 seconds)
// Function Two: Promise resolved (After another 5 seconds)


//* ****************************************************
//* Example 6: Guess The Output
//* ****************************************************

function first() {
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`First Promise resolved`);
        }, 5000);
    });
    return promise1;
};

function second() {
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Second Promise resolved`);
        }, 5000);
    });
    return promise2;
};

async function consumePromise() {
    console.log("Hello Everyone");

    const data1 = await first();
    console.log(data1);

    const data2 = await second();
    console.log(data2);
};

consumePromise();
console.log("Good Morning");
console.log("How are you today?");


//* Output:
// Hello Everyone
// Good Morning
// How are you today?
// First Promise resolved
// Second Promise resolved


//* Order of Execution:
// The JavaScript runtime uses the event loop to manage synchronous and asynchronous tasks. 
// Here's how the code executes:

// 1. Line Execution Starts:
    // The code starts executing from the line where "consumePromise()" is called. 
    // It's an asynchronous function, so it starts execution but doesn't block the main thread.

// 2. Synchronous Code Inside "consumePromise":
    // Logs "Hello Everyone" to the console.

// 3. First await Statement:
    // The "first()" function is called. It creates a promise that will resolve in 5 seconds.
    // The "await" pauses execution of "consumePromise" until the promise returned by "first()" is resolved.
    // Meanwhile, the main thread (call stack) continues executing other tasks.

// 4. Back to Main Thread (call stack):
    // Logs Good Morning.
    // Logs How are you today?.

// 5. After 5 Seconds (First Promise Resolves):
    // The "first()" promise resolves with "First Promise resolved".
    // The "consumePromise" function resumes execution and logs "First Promise resolved".

// 6. Second await Statement:
    // The "second()" function is called. It creates a promise that will resolve in 5 seconds.
    // The "await" pauses execution of "consumePromise" again.

// 7. After Another 5 Seconds (Second Promise Resolves):
    // The "second()" promise resolves with "Second Promise resolved".
    // The "consumePromise" function resumes execution and logs "Second Promise resolved".