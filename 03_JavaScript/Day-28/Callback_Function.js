//* ****************************************************
//* Callback Function In JavaScript
//* ****************************************************


//* What is Callback Function ?
// A function that is passed as an argument to another function and is executed when that function is called. 
// It allows you to perform actions asynchronously or in response to some event.
// It allows you to perform an action after a particular task is completed.


//* In simpler terms:
// It’s a function you give to another function as an argument.
// It gets executed after some action or event takes place in the main function.


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


//* ****************************************************
//* Examples
//* ****************************************************

//* 1.

// Main Function with a callback function as a parameter
function greetAfterDelay(name, callback) {
    console.log(`Hello ${name}!`);

    // Execute the callback function after a 2 second delay
    setTimeout(() => {
        callback();                                     // Calling the callback function
    }, 2000);
};

// Callback Function which will be executed after a 2 second delay
function greet() {
    console.log("Welcome to the main function.");
};

// Calling the greetAfterDelay function with a callback function
greetAfterDelay("Suraj", greet);


//* ****************************************************

//* 2.

// Main Function with a callback function as a parameter
function fetchData(callback) {
    console.log("Fetching data.....");

    // Execute the callback function after a 3 second delay
    setTimeout(() => {
        // Data fetched from backend
        const data = {
            name: "Suraj",
            age: 20,
            city: "Pokhara",
        }
        callback(data);                                 // Calling the callback function
    }, 3000);
};

// Callback Function which will be executed after a 3 second delay
function displayData(data) {
    console.log("Received data:");
    console.log(`Name: ${data.name}`);
    console.log(`Age: ${data.age}`);
    console.log(`City: ${data.city}`);
};

// Callback Functions to display the user name
function displayName(data) {
    console.log(`User name is ${data.name}`);
}

// Callback Functions to display the user age
function displayAge(data) {
    console.log(`User age is ${data.age}`);
}

// Callback Functions to display the user city
function displayCity(data) {
    console.log(`User city is ${data.city}`);
}

// Calling the fetchData function with a callback function "displayData"
fetchData(displayData);

// Calling the fetchData function with different callback functions
fetchData(displayName);
fetchData(displayAge);
fetchData(displayCity);