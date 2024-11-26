//* ****************************************************
//* Stack And Heap Memory In JavaScript
//* ****************************************************


//* Stack Memory:
// A stack is a structured, fixed-size memory area.
// It is used for storing primitive data types (e.g., numbers, strings, booleans, undefined, null) and function calls (execution context).
// It operates in a Last In, First Out (LIFO) manner, meaning the last piece of data pushed onto the stack is the first to be removed.


//* Example:
function add(a, b) {
    let sum = a + b;            // `a`, `b`, and `sum` are stored in the stack
    return sum;
}

let result = add(5, 10);        // `result` is stored in the stack
console.log(result);            // Output: 15


//* Explanation:
// 1. Function Call: When add(5, 10) is called, the execution context is pushed onto the stack.
// 2. Local Variables: Variables a, b, and sum are stored in the stack.
// 3. Return Value: Once the function returns 15, the execution context is removed from the stack.


//* Heap Memory:
// The heap is a large, unstructured memory area.
// It is used for storing objects and non-primitive data types (e.g., arrays, objects, functions).
// Memory in the heap is dynamically allocated (at runtime) and does not follow the LIFO rule.


//* Example:
let person = {
    name: "Alice",              // Stored in the heap
    age: 25,                    // Stored in the heap
};

let hobbies = ["Reading", "Traveling"]; // Stored in the heap

console.log(person.name);     // "Alice"
console.log(hobbies[1]);      // "Traveling"


//* Explanation:
// 1. Heap Allocation: The person object and the hobbies array are stored in the heap because they are non-primitive data types.
// 2. Stack Reference: The variables person and hobbies hold references (pointers) to the actual data in the heap.


//* ****************************************************


//* How Memory Works in JS

//? Primitive Values in the Stack: 
// When you declare a variable with a primitive value, it is stored directly in the stack.

//* Example 1:
let age = 25;           // Stored in stack
let name = "Alice";     // Stored in stack

// Here, age and name store the values 25 and "Alice" directly in the stack.


//* Example 2:
let x = 10;             // Primitive, stored in the stack
let y = x;              // Copy of the value (also in the stack)
y = 20;

console.log(x);         // 10 (unchanged)
console.log(y);         // 20

// Here, x and y store the value 10 in the stack. When y is assigned a new value, the original value of x is not changed. Because primitive values are copied by value.


//? Non-Primitive Values in the Heap:
// When you declare a variable with a reference value (e.g., objects or arrays), the reference (address) is stored in the stack, but the actual data is stored in the heap.

//* Example 1:
let user = { name: "Bob", age: 30 };    // Object is stored in the heap
let numbers = [1, 2, 3];                // Array is stored in the heap

// Here, user and numbers store the reference (address) of the object and array in the stack, but the actual data is stored in the heap.


//* Example 2:
let obj1 = { name: "Alice" };           // Reference stored in stack, object in heap
let obj2 = obj1;                        // Copies the reference (address), not the object

obj2.name = "Bob";                      // Changes the name in obj2

console.log(obj1.name);                 // "Bob"
console.log(obj2.name);                 // "Bob"

// Here, both obj1 and obj2 point the same object in the heap. They share the same reference (address), so modifying obj2 affects obj1.


//* ****************************************************


//* Differences between primitive and non-primitive values:

//? Primitive Values:
// Primitive values are immutable, meaning their values cannot be changed once they are assigned.
// Primitive values are stored directly in the stack.
// Primitive values are copied by value.


//? Non-Primitive Values:
// Non-primitive values are mutable, meaning their values can be changed after they are assigned.
// Non-primitive values are stored in the heap.
// Non-primitive values are copied by reference.