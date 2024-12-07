//* ****************************************************
//* Array Destructuring In JavaScript
//* ****************************************************


//* 1. Array Destructuring:
// Array destructuring allows you to extract elements of an array into variables using square brackets [ ].
// It is used to unpack values from an array into variables.

// Syntax: const [variable1, variable2] = arrayName;


//* Example:
const colors = ["red", "green", "blue"];

// 1. Using Default Values
const [color1, color2, color3] = colors;
console.log(color1);                            // Output -> red
console.log(color2);                            // Output -> green
console.log(color3);                            // Output -> blue


// 2. Skipping Elements: We can skip elements using commas (,).
const [firstColor, , thirdColor] = colors;
console.log(firstColor);                        // Output -> red
console.log(thirdColor);                        // Output -> blue


// 3. Using Rest Operator: The ...rest operator collects the remaining properties into a new array.
const fruits= ["Apple", "Banana", "Orange", "Mango", "Watermelon"];

const [fruit1, fruit2, ...restFruits] = fruits;
console.log(fruit1);                            // Output -> Apple
console.log(fruit2);                            // Output -> Banana
console.log(restFruits);                        // Output -> [ "Orange", "Mango", "Watermelon" ]


//* ****************************************************


//* 2. Nested Array Destructuring:
// Nested destructuring is when you destructure arrays that are nested within other arrays.
// It allows you to extract values from nested arrays into variables.

// Syntax: const [outer1, [inner1, inner2], outer2] = array;


//* Examples:
// 1. Extracting Nested Arrays
const userInfo = ["srj@gmail.com", 1213456, "Japan", ["Suraj", "Adhikari"]];

// Destructuring the `userInfo` array to extract individual elements and nested values
const [email, contact, country, [firstname, lastname]] = userInfo;
console.log(email);                             // Output -> srj@gmail.com
console.log(contact);                           // Output -> 1213456
console.log(country);                           // Output -> Japan
console.log(firstname);                         // Output -> Suraj
console.log(lastname);                          // Output -> Adhikari


// 2. Skipping Elements in Nested Arrays
const numbers = [1, [2, 3, 4], 5];

// Destructuring the `numbers` array to extract individual elements and nested values
const [, [, num2, num3],] = numbers;
console.log(num2);                              // Output -> 3
console.log(num3);                              // Output -> 4


// 3. Using Rest Operator in Nested Arrays
const numArray = [1, [2, 3, 4, 5], 6];

// Destructuring the `numArray` array to extract individual elements and nested values
const [first, [second, ...restNums], last] = numArray;
console.log(first);                             // Output -> 1
console.log(second);                            // Output -> 2
console.log(restNums);                          // Output -> [ 3, 4, 5 ]
console.log(last);                              // Output -> 6