//* ****************************************************
//* Array Methods Chaining In JavaScript
//* ****************************************************


//* What is Array Method Chaining ?
// Array method chaining is the process of calling multiple array methods one after another, where the output of one method becomes the input for the next. 
// It allows you to perform multiple operations on an array in a concise and readable way.


//* Why Use Array Method Chaining?
// 1. Improved Readability: Easy to follow the data transformation process.
// 2. Functional Approach: Aligns with functional programming principles.
// 3. Clean Code: Reduces the need for intermediate variables.


//* Key Array Methods for Chaining
// 1. map(): Transforms each element in the array.
// 2. filter(): Filters elements based on a condition.
// 3. reduce(): Combines array elements into a single value.
// 4. sort(): Sorts the elements of an array.
// 5. forEach(): Iterates over an array (but does not return anything, so it's usually the end of a chain).
// 6. slice(): Extracts a portion of the array.


//* ****************************************************
//* Examples of Array Method Chaining
//* ****************************************************

//* 1. Problem: Process Student Grades
// You have an array of student objects, and you want to:

// 1. Filter students who passed (marks >= 50).
// 2. Extract their names.
// 3. Convert the names to uppercase.


//* Solution
const students = [
    { id: 1, name: "Rohit", marks: 45 },
    { id: 2, name: "Suraj", marks: 75 },
    { id: 3, name: "Micheal", marks: 85 },
    { id: 4, name: "David", marks: 35 },
    { id: 5, name: "John", marks: 60 }
];

// Chaining Array Methods
const passedStudent = students
    .filter( ({marks}) => marks >= 50)                  // Step 1: Filter students who passed
    .map( ({name}) => name.toUpperCase());              // Step 2: Extract and capitalize names

console.log(passedStudent);                             // Output -> [ 'SURAJ', 'MICHEAL', 'JOHN' ]


//* Breakdown of Chaining
// 1. filter()
    // ● Filters out students with marks < 50.
    // ● Returns a new array of passed students.
    // ● Example output after filter():
        // [ { id: 2, name: "Suraj", marks: 75 }, { id: 3, name: "Micheal", marks: 85 }, { id: 5, name: "John", marks: 60 } ]

// 2. map()
    // ● Extracts the name property and converts it to uppercase.
    // ● Example output after map():
        // ['SURAJ', 'MICHEAL', 'JOHN']


//* ****************************************************


//* 2. Problem: Process an Array of Numbers
// 1. Double each number.
// 2. Keep only numbers greater than 10.
// 3. Find the sum of the resulting numbers.


//* Solution
const numbers = [1, 2, 5, 15, 25, 50];

// Chaining Array Methods
const sum = numbers
            .map( num => num * 2)                       // Step 1: Double up each number [2, 4, 10, 30, 50, 100]
            .filter ( num => num > 10)                  // Step 2: Filter number > 10 [30, 50, 100]
            .reduce( (acc, curr) => acc + curr, 0);     // Step 3: Sum all numbers (30 + 50 + 100)

console.log(`The result is: ${sum}`);                   // Output -> The result is: 180


//* Breakdown of Chaining
// 1. map()
    // ● The map() method is used first to double each element in the array. 
    // ● The result is a new array: [2, 4, 10, 30, 50, 100].

// 2. filter()
    // ● Next, the filter() method is chained to filter out any numbers that are greater than 10.
    // ● The result is a new array: [30, 50, 100]

// 3. reduce()
    // ● Finally, the reduce() method is used to sum up the remaining numbers. 
    // ● The accumulator starts at 0 and each element in the array is added to it. 
    // ● The result is the sum: 180.


//* ****************************************************


//* 3. Real-World Use Case: E-Commerce
// Imagine you're processing a list of products in an e-commerce app:

// 1. Extract items with a price greater than 100.
// 2. Sort them by price in descending order.
// 3. Extract the names of the top 3 items.


//* Solution
const products = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 300 },
    { id: 4, name: "Charger", price: 50 },
    { id: 5, name: "Headphones", price: 120 }
];

// Chaining Array Methods
const items = products
            .filter( ({price}) => price > 100 )             // Step 1: Keep products with price > 100
            .sort( (a, b) => b.price - a.price )            // Step 2: Sort by price descending
            .slice(0, 3)                                    // Step 3: Get top 3 products
            .map( ({name}) => name);                        // Step 4: Extract product names

console.log(items);                                         // Output -> [ 'Laptop', 'Phone', 'Tablet' ]