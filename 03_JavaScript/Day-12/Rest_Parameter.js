//* ****************************************************
//* Rest Parameter In JavaScript
//* ****************************************************


//* What is Rest Parameter ?
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
// The rest parameter syntax ... collects multiple arguments passed to a function into a single array.


//* Syntax:
// function functionName(...restParameter) {
    // Function body
// }


//* Key Characteristics:
// 1. The rest parameter must be the last parameter in the function definition.
// 2. A function can only have one rest parameter.


//* Why Use the Rest Parameter?
// The rest parameter is helpful when:
// 1. You don't know how many arguments a function will receive.
// 2. You want to handle all arguments as a single group (array).


//* ****************************************************


//* Examples:
// 1. Collecting Arguments
function calculateCartPrice(...numbers){
    return numbers;
}

const prices = calculateCartPrice(200, 500, 100)
console.log(prices);                                    // Output -> [ 200, 500, 100 ]

// Here, ...numbers gathers all the arguments into the "numbers" array.


// 2. Mixing Regular and Rest Parameters
// i.
function introduce(firstname, lastname, ...titles) {
    console.log(`Name: ${firstname} ${lastname}`);
    console.log(`Titles: ${titles}`);
}

introduce("Alice", "Smith", "Engineer", "Developer", "Leader");
// Output:
// Name: Alice Smith
// Titles: Engineer, Developer, Leader

// Here, the first two arguments are assigned to "firstName" and "lastName", while the rest are gathered in the "titles" array.


// ii.
function calculateCartPrice1(value1, value2, ...num){
    console.log("value1 : ", value1);
    console.log("value2 : ", value2);
    return num;
}

const cartPrices = calculateCartPrice1(100, 200, 500, 1000)
console.log(cartPrices);

// Output:
// value1 :  100
// value2 :  200
// [ 500, 1000 ] => num array

// Here, the first two arguments are assigned to "value1" and "value2", while the rest are gathered in the "num" array.


// iii.
function calculateCartPrice2(value1, value2, ...num){
    return num;
}

const cart_price = calculateCartPrice2(10, 20, 50, 99)
console.log(cart_price);                                // Output -> [ 50, 99 ]

// Here, the first two arguments are assigned to "value1" and "value2", and the remaining data will be printed.


//* ****************************************************
//* Object Handled Using A Function
//* ****************************************************


// Create an object
const user = {
    userName : "Suraj",
    age : 20
}

// Function Creation
function handleObject(myObj){
    console.log(`Username is ${myObj.userName} and age is ${myObj.age}`);
}

// First create an object "user" and then pass it while calling a function.
handleObject(user);                                     // Output -> Username is Suraj and age is 20

// Directly passing an object while calling a function.
handleObject({ userName : "Srj", age : 22});            // Output -> Username is Srj and age is 22


//* ****************************************************
//* Array Handled Using A Function
//* ****************************************************


// Create an array
const array = [10, 20, 30, 40, 50];

// Function Creation
function getArrayValue(getValue){
    return getValue[2];                                 // Access array 2nd index value using function
}

// First create an array "array" and then pass it while calling a function.
console.log(getArrayValue(array));                      // Output -> 30  =>  Array 2nd index value is 30

// Directly passing an array while calling a function.
console.log(getArrayValue([100, 200, 500, 300]));        // Output -> 500  =>  Array 2nd index value is 500