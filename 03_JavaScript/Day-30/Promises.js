//* ****************************************************
//* Promises In JavaScript
//* ****************************************************


//* What is a Promise ?
// A promise is an object that represents the eventual completion or failure of an asynchronous operation.
// It acts as a placeholder for data that might not yet be available.


//* Key States of a Promise
// A promise has three states:
    // 1. Pending: The initial state. The operation is ongoing, and the result is not yet available.
    // 2. Fulfilled: The operation has completed successfully, and the promise has a result (resolved value).
    // 3. Rejected: The operation has failed, and the promise has a reason for the failure (error).

// Once a promise is either fulfilled or rejected, it is said to be settled, and its state cannot change again.


//* How to create a Promise
// A promise is created using the Promise constructor, which takes a callback function as an argument.
// The callback function is responsible for handling the result of the asynchronous operation.
// It can be used to resolve the promise (fulfill the promise) or reject the promise (fail the promise).


//* ****************************************************
//* Syntax of a Promise
//* ****************************************************

const promise = new Promise((resolve, reject)=> {
    // Perform an asynchronous operation
    const success = true;
    if(success)
        resolve("Operation completed successfully");
    else
        reject("Operation failed");
});


//* ****************************************************
//* Consuming Promises
//* ****************************************************

// We consume a promise using "".then()"" and "".catch()"" methods.

promise                                                 // Consuming the promise that we created above
    .then(result => console.log(result))                // Handles success
    .catch(error => console.log(error))                 // Handles failure


//* ****************************************************
//* Examples of Promises Creation and Consumption
//* ****************************************************

//* 1.
// Create a new promise named promiseOne.
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Promise One resolved after 2 seconds");
        // Resolve the promise to indicate successful completion.
        resolve();
    }, 2000);
});

// PromiseOne is consumed using the ".then()" method to handle the resolved state.
promiseOne.then(() => {
    console.log("Promise One consumed");
});


//* Output:
// "Promise One resolved after 3 seconds"
// "Promise One consumed"


//* ****************************************************

//* 2.
// Create a new promise named promiseTwo.
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise Two resolved after 3 seconds");
        // Resolve the promise to indicate successful completion.
        resolve();
    }, 3000);
})
// PromiseTwo is consumed using the ".then()" method to handle the resolved state.
.then(() => {
    console.log("Promise Two consumed");
});


//* Output:
// "Promise Two resolved after 3 seconds"
// "Promise Two consumed"


//* ****************************************************

//* 3.
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Resolve the promise with an object containing user details.
        resolve({
            id: 1,
            name: "Suraj",
            email: "o2Yw0@example.com"
        });
    }, 4000);
});

// PromiseThree is consumed using the ".then()" method to handle the resolved state.
promiseThree
    .then(user => console.log(user));


//* Output:
// { id: 1, name: 'Suraj', email: 'o2Yw0@example.com' }


//* ****************************************************

//* 4.
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error) {
            resolve({
                id: 1,
                name: "Suraj",
                password: "123456"
            });
        }
        else {
            reject("ERROR: Something went wrong!");
        }
    }, 5000);
});

// PromiseFour is consumed using the ".then()" method to handle the resolved state.
promiseFour
    .then(user => {
        console.log(user);
        return user.name;
    })
    .then(name => console.log(name))

    // If the promise is rejected, the ".catch()" method is used to handle the error.
    .catch(error => console.log(error))

    // The ".finally()" method is used to execute code regardless of whether the promise is resolved or rejected.
    .finally(() => console.log("The promise is either resolved or rejected!"));


//* Output When error is "false":
// { id: 1, name: 'Suraj', password: '123456' }
// "Suraj"
// "The promise is either resolved or rejected!"


//* Output When error is "true":
// "ERROR: Something went wrong!"
// "The promise is either resolved or rejected!"


//* ****************************************************
//* Different ways to consume a Promise
//* ****************************************************

const forcastURL = fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`);

//* 1.
forcastURL.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});


//* 2.
forcastURL
    .then((response) => {
        // Convert the response to JSON format
        return response.json();
    })
    .then((data) => {
        console.log(`Temperature: ${data.current.temp_c}°C`);
    });


//* 3.
const forcast = forcastURL.then((response) => {
    // Convert the response to JSON format
    return response.json();
});
forcast.then((data) => {
    console.log(data);
});


//* 4.
forcastURL
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));