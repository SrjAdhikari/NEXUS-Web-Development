//* ****************************************************
//* Map DataStructure In JavaScript
//* ****************************************************


//* What is Map ?
// The Map object is a built-in data structure in JavaScript that stores key-value pairs.
// It is similar to an object, but it allows you to use any type of value as a key, including objects and functions.
// If duplicate keys are encountered, the later value will be stored, and the previous value will be overwritten.


//* ****************************************************
//* Creating a Map
//* ****************************************************

// 1. Create an empty Map.
const myMap = new Map();


// 2. Create a map with initial key-value pairs.
const newMap = new Map([
    ["name", "Suraj"],
    ["age", 27],
    ["gender", "male"]
]);


//* ****************************************************
//* Adding Elements to a Map (using .set() method)
//* ****************************************************

// Create an empty Map
const myMap1 = new Map();

// Adding elements to the map
myMap1.set("name", "Suraj");
myMap1.set("id", 1);
myMap1.set(1, "One");
myMap1.set(true, "Yes");

console.log(myMap1);                                     // Output -> Map(4) { "name" => "Suraj", "id" => 1, 1 => "One", true => "Yes" }


//* ****************************************************
//* Accessing Elements in a Map (using .get() method)
//* ****************************************************

// Create a map with initial key-value pairs
const mymap2 = new Map([
    ["maker", "Mercedes-Benz"],
    ["model", "G-class"],
    ["year", 2024],
    ["color", "Black"],
]);

// Accessing elements in the map
console.log(mymap2.get("model"));                       // Output -> G-class
console.log(mymap2.get("maker"));                       // Output -> Mercedes-Benz


//* ****************************************************
//* Checking for Keys Existence (using .has() method)
//* ****************************************************

// Create a map with initial key-value pairs
const myMap3 = new Map([
    [1, "One"],
    ["isBool", true],
    ["Suraj", "Hello"],
    [true, "Yes"],
    ["name", "Suraj"]
]);

// Checking if a key exists in the map
console.log(myMap3.has("isBool"));                      // Output -> true
console.log(myMap3.has("age"));                         // Output -> false
console.log(myMap3.has("name"));                        // Output -> true


//* ****************************************************
//* Removing Elements from a Map (using .delete() method)
//* ****************************************************

// Create a map with initial key-value pairs
const myMap4 = new Map([
    ["name", "Suraj"],
    ["age", 27],
    ["gender", "male"],
    ["isStudent", false]
]);

// Removing elements from the map
myMap4.delete("isStudent");
myMap4.delete("age");

console.log(myMap4);                                     // Output -> Map(2) { 'name' => 'Suraj', 'gender' => 'male' }


//* ****************************************************
//* Getting Size of a Map (using .size method)
//* ****************************************************

// Create a map with initial key-value pairs
const myMap5 = new Map([
    ["maker", "Mercedes-Benz"],
    ["model", "G-class"],
    ["year", 2024],
    ["color", "Black"],
    ["engine", "V8"],
    ["doors", 5],
]);

// Getting the size of the map
console.log(myMap5.size);                                // Output -> 6


//* ****************************************************
//* Clearing the Map (using .clear() method)
//* ****************************************************

// Create a map with initial key-value pairs
const myMap6 = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
]);

// Map before clearing
console.log(myMap6);                                     // Output -> Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }

// Clearing the map
myMap6.clear();

// Map after clearing
console.log(myMap6);                                     // Output -> Map(0) {}


//* ****************************************************
//* Iterating Over the Map
//* ****************************************************

// Create a map with initial key-value pairs
const favCar = new Map([
    ["maker", "Mercedes-Benz"],
    ["model", "G-class"],
    ["year", 2024],
    ["color", "Black"],
    ["engine", "V8"],
    ["doors", 5]
]);

// 1. Iterating over the Map using for-of loop
for(let item of favCar) {
    console.log(item);
}

// Output:
/* 
    [ 'maker', 'Mercedes-Benz' ]
    [ 'model', 'G-class' ]      
    [ 'year', 2024 ]
    [ 'color', 'Black' ]
    [ 'engine', 'V8' ]
    [ 'doors', 5 ] 
*/


// Destructuring the key and value using for-of loop
for(let [key, value] of favCar) {
    console.log(`Key: ${key}, Value: ${value}`);
}

// Output:
/* 
    Key: maker, Value: Mercedes-Benz
    Key: model, Value: G-class
    Key: year, Value: 2024
    Key: color, Value: Black
    Key: engine, Value: V8
    Key: doors, Value: 5 
*/


// 2. Iterating over the Map using forEach() method
favCar.forEach( function(item) {
    console.log(item);
});

// Output:
/*
    Mercedes-Benz
    G-class
    2024
    Black
    V8
    5
*/

// Printing the key and value using forEach()
favCar.forEach( (item, key) => {
    console.log(`Key: ${key}, Value: ${item}`);
});

// Output:
/* 
    Key: maker, Value: Mercedes-Benz
    Key: model, Value: G-class
    Key: year, Value: 2024
    Key: color, Value: Black
    Key: engine, Value: V8
    Key: doors, Value: 5 
*/