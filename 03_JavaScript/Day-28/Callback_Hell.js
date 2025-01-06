//* ****************************************************
//* Callback Hell In JavaScript
//* ****************************************************


//* What is Callback Hell ?
// The callback hell in JavaScript is referred to as a situation where an excessive amount of nested callback functions are being executed. 
// Callback hell is also called the “pyramid of the doom”.
// Callback hell happens in asynchronous operations like fetching data from a server, reading files, or executing dependent tasks.
// It makes code to be difficult to read and maintain, and can be hard to debug.


//* In simple terms:
// A callback function is a function that is passed as an argument to another function and is executed when that function is called.
// Callback hell is a situation where multiple callback functions are nested, making the code difficult to read and maintain.
// The pyramid of the doom is a term used to describe the complexity of code that is difficult to read and maintain.


//* Problem with Callback Hell:
// 1. The code becomes deeply nested.
// 2. Hard to read, understand, and maintain.
// 3. Can lead to unexpected behavior.
// 4. Error handling is difficult.


//* ****************************************************
//* Visualize the callback hell by simulating a real-world scenario
//* ****************************************************

// Scenario 1: Order a pizza from Domino's

//* Steps:
// i. Place the order
// ii. Prepare the order
// iii. Pick up the order
// iv. Deliver the order


// Function to place the order
function placeOrder(callback) {
    console.log("Talking to the Domino's service to place the order.");

    setTimeout(() => {
        console.log("Order placed successfully.");
        callback();
    }, 2000);
};


// Function to prepare the order
function prepareOrder(callback) {
    console.log("Preparing the order.");

    setTimeout(() => {
        console.log("Your order is ready.");
        callback();
    }, 5000);
};


// Function to pick up the order
function pickUpOrder(callback) {
    console.log("Picking up the order.");

    setTimeout(() => {
        console.log("Your order has been picked up.");
        callback();
    }, 3000);
};


// Function to deliver the order
function deliverorder() {
    console.log("Delivering the order.");

    setTimeout(() => {
        console.log("Your order has been delivered successfully.");
        console.log("Enjoy your pizza.");
    }, 5000);
};


// Function to order the pizza from Domino's
function orderPizza() {
    placeOrder(() => {                              // Step 1: Place the order
        prepareOrder(() => {                        // Step 2: Prepare the order once the order is placed
            pickUpOrder(() => {                     // Step 3: Pick up the order once the order is prepared
                deliverorder();                     // Step 4: Deliver the order after picking it up
            });
        });
    });
};

orderPizza();                                       // Call the function to order the pizza


//* ****************************************************

// Scenario 2: Fetch data from an API

//* Steps:
// i. Fetch data from an API
// ii. Process the data
// iii. Display the data


// Function to fetch data from an API
function fetchData(callback) {
    console.log("Fetching data from an API.");

    setTimeout(() => {
        console.log("Data fetched successfully.");
        callback();
    }, 3000);
};


// Function to process the data
function processData(callback) {
    console.log("Processing the data.");

    setTimeout(() => {
        console.log("Data processed successfully.");
        const userData = {
            name: "Suraj",
            age: 20,
            city: "Pokhara",
        }
        callback(userData);
    }, 2000);
};


// Function to display the data
function displayData(data) {
    console.log("Displaying the data.");

    setTimeout(() => {
        console.log("Data displayed successfully.");
        console.log(`Name: ${data.name}`);
        console.log(`Age: ${data.age}`);
        console.log(`City: ${data.city}`);
    }, 1000);
};


// Function to fetch data from an API and display it
function fetchDataAndDisplay() {
    fetchData(() => {                               // Step 1: Fetch data from an API
        processData((data) => {                     // Step 2: Process the data once the data is fetched
            displayData(data);                      // Step 3: Display the data once the data is processed
        });
    });
};

fetchDataAndDisplay();                              // Call the function to fetch data and display it