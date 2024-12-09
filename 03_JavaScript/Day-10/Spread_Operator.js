//* ****************************************************
//* Spread Operator In JavaScript
//* ****************************************************


//* What is Spread Operator ?
// The JavaScript spread operator (...) is used to expand or spread out elements of an iterable, such as an array, string, or object.


//* Syntax: [...iterable]
// Here, iterable can be an array, string, or object.


//* Why should you use it?
// 1. It allows you to quickly and easily manipulate arrays and objects.
// 2. It can be used to copy or merge arrays and objects.
// 3. It makes it easy to pass multiple arguments to a function.


//* ****************************************************


//* 1. Expanding Arrays with the Spread Operator
// The most basic use of the Spread Operator is to spread an array into individual elements.

//* Example:
const numbers = [1, 2, 3, 4, 5];
console.log(...numbers);                                // Output: 1 2 3 4 5

//* Explanation:
// The spread operator (...numbers) "spreads" the array [1, 2, 3, 4, 5] into individual elements: 1, 2, 3, 4 and 5.


//* ****************************************************


//* 2. Copying Arrays with the Spread Operator
// When we want to create an exact copy of an array, we can use the spread operator instead of manually looping through the array.

//* Example:
const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const copyWeekDay = [...weekDay];

console.log(copyWeekDay);                               // Output: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
console.log(weekDay);                                   // Output: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

//* Explanation:
// The spread operator copies each element from "weekDay" and places it into "copyWeekDay".


//* ****************************************************


//* 3. Merging Arrays with the Spread Operator
// When we want to merge two or more arrays into a single array, we can use the spread operator.

//* Example:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];

console.log(mergedArray);                               // Output: [1, 2, 3, 4, 5, 6]


//* ****************************************************


//* 4. Adding Elements to Arrays with the Spread Operator
// The spread operator can also be used to add elements to an array.

//* Example:
// 1. Adding element in front of an array
const fruitArray = ["Grape", "Banana", "Orange"];
const newFruitArray = ["Apple", ...fruitArray];

console.log(newFruitArray);                             // Output: ["Apple", "Grape", "Banana", "Orange"]


// 2. Adding element at the end of an array
const fruitsArray = ["Grape", "Banana", "Orange"];
const newFruitsArray = [...fruitsArray, "Mango", "Watermelon"];

console.log(newFruitsArray);                            // Output: ["Grape", "Banana", "Orange", "Mango", "Watermelon"]


//* ****************************************************


//* 1. Copying Objects with the Spread Operator
// The spread operator can also be used to copy objects in JavaScript, similar to arrays.

//* Example:
const person = {
	firstName: "Suraj",
	lastName: "Adhikari",
	country: "Nepal",
	age: 27,
};

// 'person' is copied into 'copiedPerson'
const copiedPerson = { ...person };

console.log(copiedPerson);
// Output: { firstName: "Suraj", lastName: "Adhikari", country: "Nepal", age: 27 }


//* ****************************************************

//* 2. Merging Objects with the Spread Operator
// We can merge multiple objects into one by using the spread operator.

//* Example:
const user = {
	name: "Suraj",
	age: 27,
};

const job = {
	title: "Software Developer",
	company: "Google",
};

// 'user' and 'job' are merged into 'userProfile'
const userProfile = { ...user, ...job };

console.log(userProfile);
// Output: { name: "Suraj", age: 27, title: "Software Developer", company: "Google" }


//* ****************************************************


//* Spreading Strings into Array and Object
// When we want to spread a string into an array, we can use the spread operator.


//* Example:
const message = "Hello World";

// 1. Spread the string into an array
const messageArray = [...message];

console.log(messageArray);
// Output: ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]


// 2. Spread the string into an object
const messageObject = { ...message };

console.log(messageObject);
// Output: { 0: "H", 1: "e", 2: "l", 3: "l", 4: "o", 5: " ", 6: "W", 7: "o", 8: "r", 9: "l", 10: "d" }


//* ****************************************************


//* Spread Operator in Function Arguments
// The spread operator can be used to pass multiple arguments to a function in the form of an array.


//* Example:
function sum(a, b, c) {
	return a + b + c;
}

const numberArray = [1, 2, 3];
const sumResult = sum(...numberArray);
console.log(sumResult);                                 // Output: 6


//* Explanation:
// Instead of passing each value individually (sum(1, 2, 3)), you can use ...numberArray to spread the array elements as individual arguments to the sum function.