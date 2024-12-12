//* ****************************************************
//* For...In Loop In JavaScript
//* ****************************************************


//* What is For...In Loop ?
// A for...in loop in JavaScript is used to iterate over the properties of an object. 
// It's useful when you want to access each property of an object without knowing its keys in advance.


//* Syntax:
// for (let key in object) {
    // code to be executed
// }


//* Explanation:
// key: A variable that stores the current property name during each iteration.
// object: The object you want to loop through.


//* Key Features of For...In Loop:
// 1. Iterates Over Keys (Not Values).
// 2. Includes Inherited Properties.
    // ● Unlike Object.keys() methods, the for...in loop also iterates over properties that are inherited from the object's prototype chain.

// 3. Enumerability
    // ● The for...in loop only iterates over enumerable properties of the object.


//* ****************************************************


//* Examples:
// 1.
const person = {
    name: "Suraj",
    age: 27,
    email: "srj@gmail",
    phone: 1234567890,
    gender: "male"
};

for(let key in person) {
    console.log(`${key}`);                              // Accessing keys of the object
    console.log(`${person[key]}`);                      // Accessing values of the object
}

// Output -> name, age, email, phone, gender
// Output -> Suraj, 27, srj@gmail, 1234567890, male


// 2.
const userInfo = {
    name : "Srj",
    "full name" : "Srj Adhikari",
    age : 20,
    country : "Japan",
    email : "srj11@gmail.com",
};

for(let key in userInfo) {
    console.log(`${key}`);                              // Accessing keys of the object
    console.log(`${userInfo[key]}`);                    // Accessing values of the object
}

// Output -> name, full name, age, country, email
// Output -> Srj, Srj Adhikari, 20, Japan, srj11@gmail.com


//* ****************************************************
//* Inherited Properties In For...In Loop
//* ****************************************************

// The for...in loop also iterates over properties that are inherited from the object's prototype chain.

//* Example:
const mainUser = {
    name: "Suraj",
    age: 27,
    email: "srj@gmail",
    loggedIn: true
};

// Creating a new object "subUser" that inherits from "mainUser" (prototype chain).
const subUser = Object.create(mainUser);

subUser.verified = true;
subUser.phone = 1234567890;
subUser.id = 123;

for(let key in subUser) {
    console.log(`${key}`);                          // Accessing keys of the subUser object
}

// Output -> verified, phone, id, name, age, email, loggedIn


//* ****************************************************

//* When to Use for...in Loop ?
// 1. Iterating over properties of objects when you don’t know the keys in advance.
// 2. When you need to work with both own and inherited properties (filtering may be needed).