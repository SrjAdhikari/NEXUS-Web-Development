//* ****************************************************
//* Array Filter Method In JavaScript
//* ****************************************************


//* What is filter() Method ?
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// It does not change the original array.
// It returns a new array with the filtered elements.


//* In Simple Words:
// filter() iterates through each element of the array.
// It tests each element with a condition.
// If the condition returns true, that element is included in the new array.


//* Syntax:
// array.filter(function(currentValue, index, array) {
    // Code to execute for each element
// });


//* Explanation:
// function: The function to execute for each element.
// currentValue: The current element being processed.
// index (optional): The index of the current element in the array.
// array (optional): The original array itself.


//* Key Points:
// filter() returns a new array with elements that pass the test.
// If no elements pass the test, it returns an empty array.


//* ****************************************************


//* Examples:
// 1. Basic Array Filtering
const numbers = [1, 2, 3, 4, 5];

const evenNumber = numbers.filter(function(number) {
    // Calculate if the number is even
    return number % 2 === 0;
});

console.log(numbers);                                   // Output -> [ 1, 2, 3, 4, 5 ]
console.log(evenNumber);                                // Output -> [ 2, 4 ]

// Here, the filter() method filters out only even numbers from the array and creates a new array with them.


// 2. Filtering Array of Objects
const students = [
    { id: 1, name: "Rohit", marks: 80 },
    { id: 2, name: "Suraj", marks: 90 },
    { id: 3, name: "Micheal", marks: 70 },
    { id: 4, name: "David", marks: 60 },
    { id: 5, name: "John", marks: 50 }
]

const passedStudents = students.filter(function(student) {
    return student.marks > 65;
});

// OR using object destructuring

const passedStudents2 = students.filter((function({marks}){
    return marks > 65;
}))

// ({ marks }) is an example of object destructuring. 
// Instead of using "student.marks", we directly extract the marks property of each student in the array.

console.log(passedStudents);
console.log(passedStudents2);

// Output:
/* [
    { id: 2, name: 'Suraj', marks: 90 },
    { id: 3, name: 'Micheal', marks: 70 },
    { id: 4, name: 'David', marks: 60 }
]
[
    { id: 2, name: 'Suraj', marks: 90 },
    { id: 3, name: 'Micheal', marks: 70 },
    { id: 4, name: 'David', marks: 60 }
] */


// 3. Using Arrow Functions with Arrays
const balance = [100, 200, -50, 300, -100, 500, -150];

// Filtering withdrawal transactions
const Withdrawal = balance.filter( num => num < 0);
console.log(Withdrawal);                                // Output -> [ -50, -100, -150 ]


// 4. Filtering Array of Objects
const products = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Shoes", price: 50, category: "Clothing" },
    { name: "Camera", price: 500, category: "Electronics" },
    { name: "Headphones", price: 200, category: "Electronics" },
    { name: "Pants", price: 30, category: "Clothing" }
];

const Electronics = products.filter ( ({category, price}) => {
    return category === "Electronics" && price >= 500;
});

console.log(Electronics);

// Output:
/* [
    { name: 'Laptop', price: 1000, category: 'Electronics' },
    { name: 'Camera', price: 500, category: 'Electronics' }
] */