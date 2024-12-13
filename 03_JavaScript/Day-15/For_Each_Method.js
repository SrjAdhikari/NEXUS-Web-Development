//* ****************************************************
//* For Each Method In JavaScript
//* ****************************************************


//* What is forEach() Method?
// The forEach() method is an array-specific method that executes a provided function once for each array element.
// It does not return any value.


//* Syntax:
// array.forEach(function(element, index, array) {
    // Code to execute for each element
// });


//* Explanation:
// function: The function to execute for each element. It could be an arrow function or a normal function.
// element: The current element being processed.
// index (optional): The index of the current element in the array.
// array (optional): The original array itself.


//* ****************************************************


//* Example:
// 1. Basic Array Iteration
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
    console.log(num);
});

// Output:
// 1
// 2
// 3
// 4
// 5


// 2. Array Iteration with Index
const fruits = ["apple", "banana", "orange"];

fruits.forEach(function(fruit, index) {
    console.log(`Element at index ${index}: ${fruit}`);
});

// Output:
// Element at index 0: apple
// Element at index 1: banana
// Element at index 2: orange


// 3. Iterating over an Array of Objects
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

users.forEach(function(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
});

// Output:
// Name: Alice, Age: 25
// Name: Bob, Age: 30
// Name: Charlie, Age: 35


// 4. Modifying Array Elements
const numArray = [10, 20, 30];

numArray.forEach(function(num, index, array) {
    array[index] = num * 2;
});

console.log(numArray); 
// Output: [ 20, 40, 60 ]