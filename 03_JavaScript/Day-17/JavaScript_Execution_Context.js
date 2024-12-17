//* ****************************************************
//* Execution Context In JavaScript
//* ****************************************************


//* What is Execution Context ?
// The execution context is a runtime environment where JavaScript code is parsed and executed.

// It includes:
// 1. Stack: A stack data structure that stores the execution context of each function call.
// 2. Heap: A heap data structure that stores objects and non-primitive data types.
// 3. Local Variables: Variables declared within a function. They are stored in the stack.
// 4. Global Variables: Variables declared outside of any function. They are stored in the heap.
// 5. This Keyword: The keyword "this" refers to the current execution context, which can be either a function or the global scope.


//* Types of Execution Contexts in JavaScript
// 1. Global Execution Context (or) Window Execution Context
    // Created when the JavaScript file is first loaded.
    // Represents the outermost scope, where global variables and functions are defined.
    // It provides the global object (window in browsers, global in Node.js).
    // By default, this refers to the global object.

// 2. Function Execution Context
    // Created every time a function is called.
    // Each function call gets its own execution context.
    // Function Execution Context contains:
        // 1. Function arguments.
        // 2. Local variables inside the function.
        // 3. This Keyword: The keyword "this" refers to the current execution context, which is the function context.

// 3. Eval Execution Context
    // Created when the eval() function is executed.
    // It is used to evaluate JavaScript code dynamically.
    // It has access to the same variables and functions as the global execution context.


//* Phases of Execution Context
// 1. Creation Phase
    // Happens before code execution begins.
    // Key operations:
        // 1. Allocate memory for variables, functions, and arguments.
        // 2. Variables are initialized with undefined (hoisting).
        // 3. Function declarations are stored in memory.
        // 4. The execution context is pushed onto the stack.

// 2. Execution Phase
    // Code inside the execution context is executed line by line.
    // Variables are assigned values.
    // Functions are executed.

// 3. Cleanup Phase
    // When the function returns, the execution context is removed from the stack.
    // Local variables are released.
    // Variables are set to undefined (deletion).


//* ****************************************************
//* How Execution Context Works
//* ****************************************************

let x = 10;

function add(a, b) {
    let sum = a + b;
    return sum;
}

let result = add(5, 15);
console.log(result);


//* Step-by-Step Explanation
// 1. Global Execution Context (GEC)
    // Memory is allocated:
        // 1. x = undefined
        // 2. add = <reference to function>
        // 3. result = undefined
    
    // Execution begins:
        // 1. x = 10
        // 2. The function add is defined.
        // 3. The add function is called with arguments 5 and 15.

// 2. Function Execution Context (FEC)
    // Memory is allocated for local variables:
        // 1. a = 5
        // 2. b = 15
        // 3. sum = undefined
    
    // Execution begins:
        // sum = a + b = 5 + 15 = 20
        // The function return sum = 20

// 3. Back to Global Execution Context (GEC)
    // result = 20
    // console.log(result) outputs 20.


//* ****************************************************
//* Call Stack
//* ****************************************************

// The Call Stack is a mechanism that tracks execution contexts in JavaScript.
// 1. What is Call Stack ?
    // A stack (data structure) used to manage function calls and their execution contexts.
    // The most recently invoked function is at the top of the stack.


// 2. How Call Stack Works ?
    // When a function is called, a new execution context is created and pushed onto the stack.
    // When a function finishes execution or returns, its execution context is removed from the stack.


function greet() {
    console.log("Hello!");
}

function sayGoodbye() {
    console.log("Goodbye!");
} 

greet();
sayGoodbye();


//* Step-by-Step Explanation
// 1. The global execution context is created and added to the stack.
// 2. The "greet" function is called:
    // A new execution context for "greet" is created and pushed onto the stack.
    // It executes, and "Hello!" is printed.
    // The "greet" execution context is removed from the stack.

// 3. The "sayGoodbye" function is called:
    // A new execution context for "sayGoodbye" is created and pushed onto the stack.
    // It executes, and "Goodbye!" is printed.
    // The "sayGoodbye" execution context is removed from the stack.