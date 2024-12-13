//* ****************************************************
//* For...Of Loop In JavaScript
//* ****************************************************


//* What is For...Of Loop ?
// A for...of loop in JavaScript is used to iterate over an iterable object (arrays, strings, maps and sets). 
// It's useful when you want to access each element of an array without knowing its length in advance.


//* Syntax:
// for (variable of iterable) {
    // code to be executed
// }


//* Explanation:
// variable: A variable that will hold the current element during each iteration.
// iterable: An object you can iterate over (e.g., an array, string, map, etc.).


//* Key Points:
// Focuses on values (not keys or indices).
// Works only with iterables (e.g., arrays, strings, sets, maps).
// Stops automatically when all elements are traversed.


//* ****************************************************


//* Examples:
// 1. Iterating Over an Array
const fruits = ["apple", "banana", "orange", "grape", "watermelon"];

for(let fruit of fruits) {
    console.log(fruit);
}

// Output:
// apple
// banana
// orange
// grape
// watermelon


//* Explanation:
// The loop iterates over each element of the fruits array.
// On each iteration, the variable fruit takes the value of the current element.


// 2. Iterating Over a String
const str = "Suraj";

for(let char of str) {
    console.log(char);
}

// Output:
// S
// u
// r
// a
// j


// 3. Iterating Over an Array of object
const users = [
    { name: 'Suraj', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'David', age: 35 }
];

for(let user of users) {
    console.log(user.name);
}

// Output:
// Suraj
// Bob
// David