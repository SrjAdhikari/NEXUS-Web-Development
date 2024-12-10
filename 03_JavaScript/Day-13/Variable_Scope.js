//* ****************************************************
//* Variable Scope In JavaScript
//* ****************************************************


//* What is scope?
// Scope refers to the part of the code where a variable is accessible. 
// It determines where you can use a variable, whether inside a function, block, or globally.


//* Types of Scopes in JavaScript
// 1. Global Scope
// 2. Function Scope (or) Local Scope
// 3. Block Scope


//* ****************************************************


//* 1. Global Scope
// Variables declared outside of any function or block are considered global. 
// They can be accessed from anywhere in the code, both inside and outside functions.


//* Key points
// 1. Global variables are accessible from anywhere in the code.
// 2. Variables declared with "var" in the global scope are added to the window object in browsers, while "let" and "const" are not.


//* Example:
let globalVariable = 10;                                        // Global variable

function global() {
    console.log(`Global variable: ${globalVariable}`);          // Accessing global variable
}
global();                                                       // Output -> Global variable: 10


//* ****************************************************


//* 2. Function Scope or Local Scope
// Variables declared inside a function using "var", "let", or "const" are local to the function and cannot be accessed from outside the function. 
// They have a limited scope within the function where they are defined.


//* Key points
// 1. Function scope is created when a function is executed.
// 2. Variables in a function cannot be accessed from outside the function.


//* Example:
function local() {
    let localVariable = 50;                                     // Local variable
    console.log(`Local variable: ${localVariable}`);            // Accessing local variable
}

local();                                                        // Output -> Local variable: 50
console.log(localVariable);                                     // Error: localVariable is not defined


//* ****************************************************


//* 3. Block Scope
// Variables declared inside a block {} using "let" or "const" are scoped to that block.
// They cannot be accessed outside the block.


//* Key points
// 1. Only "let" and "const" create block-scoped variables.
// 2. Variables declared with "var" do not have block scope (they are function-scoped).


//* Example:
if (true) {
    let blockVariable = 100;                                    // Block-scoped variable
    console.log(`Block-scoped variable: ${blockVariable}`);     // Accessing block-scoped variable
}                                                               // Output -> Block-scoped variable: 100


//* Example of "var" Not Being Block Scoped
if (true) {
    var notBlockScoped = "I am not block scoped!";
}

// Accessible outside the block
console.log(notBlockScoped);                                    // Output -> I am not block scoped!


//* ****************************************************


//* Combining Global and Local Scope Variables
let globalVar = "Global";

function myFun() {
    let localVar = "Local";

    console.log(globalVar);                                     // Accessing Global Variable
    console.log(localVar);                                      // Accessing Local Variable
}

myFun();
// Output :
// Global
// Local

console.log(localVar);                                          // Error: localVar is not defined


//* ****************************************************


//* Combining Global, Function, and Block Scope Variables
let global_var = "I am global";

function outerFunction() {
    let functionVar = "I am function scoped";

    if (true) {
        let blockVar = "I am block scoped";
        console.log(blockVar);                                  // Accessing Block Variable
        console.log(functionVar);                               // Accessing Function Variable
        console.log(global_var);                                // Accessing Global Variable
    }

    console.log(blockVar);                                      // Error: blockVar is not defined
}
outerFunction();

console.log(global_var);                                        // Accessing Global Variable
console.log(functionVar);                                       // Error: functionVar is not defined