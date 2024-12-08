//* ****************************************************
//* Functions In JavaScript
//* ****************************************************


//* What is a function ?
// A function is a block of code designed to perform a specific task. Functions allow you to:
    // 1. Reuse code: Write it once and use it multiple times.
    // 2. Encapsulate logic: Keep related code organized.
    // 3. Accept inputs: Receive data via parameters.
    // 4. Return outputs: Send back results using the return statement.


//* Syntax of a Function:
// 1:
// function functionName() {
    // Function body
// }


// 2:
// function functionName(parameters) {
    // Function body
    // return value;    // Optional: returns a value
// }


//* Explanation:
// functionName: The name of the function (used to call it).
// parameters: Inputs for the function (optional).
// return: The output the function gives back (optional).


//* ****************************************************


//* Function Declaration:
// Function Declaration is the most traditional way to define a function in JavaScript. 
// It uses the function keyword, followed by the function’s name, parameters (if any), 
// and a block of code enclosed in curly braces {} that constitutes the function body.


//* Examples:
// 1:
function greet() {
    console.log("Hello, World!");           // Function body
}

greet();                                    // -> Function Execution / Call / Invoke a function 
greet;                                      // -> Function Reference


// 2:
function add(a, b) {
    console.log(`Sum is: ${ a + b}`);       // Function body
}
add(5, 7);                                  // Output -> Sum is: 12
add();                                      // Output -> Sum is: NaN => Because arguments are not passed in function call

const result = add(2, 5);                   // Output -> Sum is: 7
console.log(`Result is: ${result}`);        // Output -> Result is: undefined => Because function does not return any thing


//* ****************************************************


//* Characteristics of Function Declarations:
// Hoisting: Function Declarations are hoisted, which means that the function can be called before it is defined in the code.


//* Hoisting Example:
// You can call the function before it's defined due to hoisting

// greet() function is call before it is define.
greet("Suraj");

// Function defined after function call.
function greet(name) {
    console.log(`Hello, ${name}!`);         // Output -> Hello, Suraj!
}


//******************************************************


//* Function Expression:
// A Function Expression is a function that is assigned to a variable. 
// Function expressions are anonymous, and are not hoisted. 
// They can be called and used later on in the code.


//* Syntax:
// 1:
// const functionName = function() {
    // Function body
// }


// 2:
// const functionName = function(parameters) {
    // Function body
    // return value;    // Optional: returns a value
// }


//* Examples:
// 1:
const greeting = function(name) {
    console.log(`Hello, ${name}!`);
}
greeting("Suraj");                          // Output -> Hello, Suraj!


// 2:
const multiply = function(a, b) {
    console.log(`Product is: ${ a * b}`);
}
multiply(5, 10);                            // Output -> Product is: 50
multiply();                                 // Output -> Product is: NaN => Because arguments are not passed in function call


//******************************************************


//* Characteristics of Function Expressions:
// Anonymous or Named: Function Expressions are often anonymous (unnamed), although you can assign a name if needed.
// Not Hoisted: Unlike Function Declarations, Function Expressions are not hoisted, meaning you cannot call the function before it is assigned to a variable.


//* Example of Non-Hoisting:

// Calling the function before its definition will throw an error
// This will give an error can not access 'greet' before initialization.
greet("Suraj"); 

const greet = function(name) {
    console.log(`Hello, ${name}!`);
}


//******************************************************

//* Some other examples of function declarations & expressions:
// 1: Function Declarations
function sayMyName(){
    console.log("S");
    console.log("u");
    console.log("r");
    console.log("a");
    console.log("j");
}

sayMyName();                                // -> Function Execution / Call / Invoke a function
sayMyName;                                  // -> Function Reference


// 2: Function Expressions
const printMyName = function() {
    console.log("S");
    console.log("u");
    console.log("r");
    console.log("a");
    console.log("j");
}

printMyName();


// 3: Function Declarations:
function product(num1, num2){
    return num1 * num2;
}

// Store the function in a variable
const ans = product(10, 30);
console.log("Result is : ", ans);           // Output -> Result is :  300

const ans1 = product(10, "30");
console.log("Result is : ", ans1);          // Output -> Result is :  300

const ans2 = product("10", 30);
console.log("Result is : ", ans2);          // Output -> Result is :  300


// 4: Function Declarations:
function logInMessage(userName){
    return `${userName} just logged in.`;
}

// Store the function in a variable
let message = logInMessage("Suraj");
console.log(message);                       // Output -> Suraj just logged in.

console.log(logInMessage("Srj"));           // Output -> Srj just logged in.
console.log(logInMessage(""));              // Output -> just logged in.
console.log(logInMessage());                // Output -> undefined just logged in.


// 5: Function Expressions:
const divide = function(a, b) {
    return a / b;
};

console.log(divide(10, 2));                 // Output: 5