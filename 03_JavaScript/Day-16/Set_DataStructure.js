//* ****************************************************
//* Set DataStructure In JavaScript
//* ****************************************************


//* What is Set ?
// The Set object is a built-in data structure that stores unique values of any type, whether primitive values or objects.
// It is similar to an array, but it does not allow duplicate values.
// It is useful when you need to ensure that no duplicate values exist in your collection.


//* Key Features of Set:
// 1. Unordered: The order of elements in a Set is not guaranteed.
// 2. Unique Values: The Set stores only unique values, and duplicate values are automatically removed.
// 3. No Key-Value Pairs: Unlike objects or maps, Set does not store key-value pairs—only values.
// 4. Iterability: The Set can be iterated over using the "for...of" loop or the "forEach()" method.


//* ****************************************************
//* Creating a Set
//* ****************************************************

// 1. Create an empty Set.
const mySet = new Set();


// 2. Create a set with initial values.
const numSet = new Set([10, 20, 30]);
console.log(numSet);                                     // Output -> Set(3) { 10, 20, 30 }


//* ****************************************************
//* Adding Elements to a Set (using .add() method)
//* ****************************************************

// Create an empty Set
const mySet1 = new Set();

// Adding elements to the set
mySet1.add(20);
mySet1.add(30);
mySet1.add(20);                                         // Adding duplicate value, it will not add.
mySet1.add("Suraj");

console.log(mySet1);                                    // Output -> Set(3) { 20, 30, "Suraj" }


//* ****************************************************
//* Removing Elements from a Set (using .delete() method)
//* ****************************************************

// Create a set with initial values
const mySet2 = new Set([10, 20, 30, "Suraj", "Hello"]);

// Removing elements from the set
mySet2.delete(20);
mySet2.delete("Hello");

console.log(mySet2);                                    // Output -> Set(3) { 10, 30, "Suraj" }


//* ****************************************************
//* Checking for Element Existence (using .has() method)
//* ****************************************************

// Create a set with initial values
const mySet3 = new Set(["ABC", 20, "Suraj", 30, "Hello"]);

// Checking if an element exists in the set
console.log(mySet3.has("Suraj"));                       // Output -> true
console.log(mySet3.has(10));                            // Output -> false
console.log(mySet3.has("Hello"));                       // Output -> true
console.log(mySet3.has(30));                            // Output -> true


//* ****************************************************
//* Getting Size of a Set (using .size method)
//* ****************************************************

// Create a set with initial values
const mySet4 = new Set(["ABC", 10, 20, "Suraj", 30, "Hello", 50]);
const mySet5 = new Set([10, 20, 30, 50]);

// Getting the size of the set
console.log(mySet4.size);                               // Output -> 7
console.log(mySet5.size);                               // Output -> 4


//* ****************************************************
//* Clearing a Set (using .clear() method)
//* ****************************************************

// Create a set with initial values
const mySet6 = new Set([10, 20, 30, 40, 50]);

// Set before clearing
console.log(mySet6);                                    // Output -> Set(5) { 10, 20, 30, 40, 50 }

// Clearing the set
mySet6.clear();

// Set after clearing
console.log(mySet6);                                    // Output -> Set(0) {}


//* ****************************************************
//* Converting a Set to an Array
//* ****************************************************

// Create a set with initial values
const weekDays = new Set(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);

// 1. Converting the set to an array using Array.from() method
const myArray = Array.from(weekDays);
console.log(myArray);                                   // Output -> [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]

// 2. Converting the set to an array using spread operator
const weekDaysArray = [...weekDays];
console.log(weekDaysArray);                             // Output -> [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]


//* ****************************************************
//* Converting an Array to a Set
//* ****************************************************

// Create an array with initial values
const months = ['January', 'February', 'March', 'April', 'May'];

// Converting the array to a set
const monthsSet = new Set([months]);

console.log(monthsSet);                                 // Output -> Set(1) { [ 'January', 'February', 'March', 'April', 'May' ] }


//* ****************************************************
//* Removing Duplicate Values from an Array
//* ****************************************************

// Create an array with duplicate values
const numArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

// 1. Converting the array to a set
const uniqueSet = new Set(numArray);

// 2. Converting the set back to an array
const uniqueArray = [...uniqueSet];
// OR
const uniqueArray2 = Array.from(uniqueSet);

console.log(uniqueArray);                               // Output -> [ 1, 2, 3, 4, 5 ]
console.log(uniqueArray2);                              // Output -> [ 1, 2, 3, 4, 5 ]


//* ****************************************************
//* Iterating Over a Set
//* ****************************************************

// Create a set with initial values
const charSet = new Set(['A', 'B', 'C', 'D', 'E']);

// 1. Iterating over the Set using for-of loop
for(let char of charSet) {
    console.log(char);                                  // Output -> A, B, C, D, E
}


// 2. Iterating over the Set using forEach() method
charSet.forEach( function(char) {
    console.log(char);                                  // Output -> A, B, C, D, E
});