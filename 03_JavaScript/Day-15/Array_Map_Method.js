//* ****************************************************
//* Array Map Method In JavaScript
//* ****************************************************


//* What is map() Method?
// The map() method creates a new array by applying a given function to each element of the original array.
// It does not change the original array.
// It returns a new array with the modified values.


//* Syntax:
// array.map(function(currentValue, index, array) {
    // Code to execute for each element
// });


//* Explanation:
// function: The function to execute for each element.
// currentValue: The current element being processed.
// index (optional): The index of the current element in the array.
// array (optional): The original array itself.


//* Key Points:
// Always returns a new array with modified values.
// It doesn’t change the original array.


//* ****************************************************


//* Examples:
// 1. Basic Array Transformation
const original = [10, 20, 30, 40, 50];

const doubled = original.map(function(num) {
    // Multiply each number by 2
    return num * 2;
});

console.log(original);                                      // Output -> [ 10, 20, 30, 40, 50 ]
console.log(doubled);                                       // Output -> [ 20, 40, 60, 80, 100 ]

// Here, the map() method doubles each element in the array and returns a new array with the doubled values.


// 2. Array of Objects Transformation
const users = [
    { name: 'Suraj', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'David', age: 35 }
];

const userNames = users.map(function(user) {
    // Extract the name from each object
    return user.name;
});

console.log(userNames);                                     // Output -> [ 'Suraj', 'Bob', 'David' ]


// 3. Array of Strings Transformation
const names = ["Suraj", "Micheal", "John", "David"];

const uppercaseNames = names.map(function(name) {
    // Convert each name to uppercase
    return name.toUpperCase();
});

console.log(uppercaseNames);                                 // Output -> [ 'SURAJ', 'MICHEAL', 'JOHN', 'DAVID' ]


// 4. Using Arrow Functions with Arrays
const balance = [100, 200, -50, 300, -100, 500];

const transactions = balance.map( (num, index) => {
    if(num > 0)
        return `Transition ${index + 1}: Deposit of ${num}`;
    else
        return `Transition ${index + 1}: Withdrawal of ${Math.abs(num)}`;
});

console.log(transactions);

// Output:
/* [
    'Transition 1: Deposit of 100',      
    'Transition 2: Deposit of 200',      
    'Transition 3: Withdrawal of 50',    
    'Transition 4: Deposit of 300',      
    'Transition 5: Withdrawal of 100',   
    'Transition 6: Deposit of 500'
] */


// 5. Using Arrow Functions with Arrays
const array = [1, 2, 3, 4, 5];

// Squares of each number
const square = array.map ( num => num * num );
console.log(square);                                        // Output -> [ 1, 4, 9, 16, 25 ]