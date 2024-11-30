//* ****************************************************
//* Number In JavaScript
//* ****************************************************


let num1 = 231;
let num2 = new Number(231);
let num3 = new Number(231);

console.log(num1 == num2);                      // Output -> true
// Here, num1 == num2 gives "true", because num2 is a object so its value is convert into number and then comparision happen. Since num1 & num2 have the same value, they are equal.

console.log(num2 == num3);                      // Output -> false
// Here, num2 == num3 gives "false", because both are objects, and the == operator checks if they reference the same object (address) in memory. Since num2 and num3 are two separate instances, they are not equal.


//* ****************************************************

//* 1. toFixed(decimalPlaces)
// Rounds a number to a fixed number of decimal places and returns it as a string.

//* Examples:
let num = 5.6789;
console.log(num.toFixed(2));        // "5.68" (rounds to 2 decimal places)
console.log(num.toFixed(0));        // "6" (rounds to nearest whole number)

console.log((2.7).toFixed(0));      // "3" (rounds to nearest whole number)
console.log((2.7).toFixed(3));      // "2.700" (rounds to 3 decimal places)
console.log((2.345).toFixed(2));    // "2.35" (rounds to 2 decimal places)


//* ***************************************************

//* 2. toPrecision(precision)
// Formats a number to a specified total number of significant digits and returns it as a string.

//* Examples:
let pi = 3.14159;
console.log(num.toPrecision(2));        // Output: "3.1"
console.log(pi.toPrecision(3));         // Output: "3.14"
console.log(num.toPrecision(4));        // Output: "3.142"
console.log(num.toPrecision(6));        // Output: "3.14159"

console.log((2.7).toPrecision(1));      // "3"
console.log((2.7).toPrecision(3));      // "2.70"
console.log((2.345).toPrecision(2));    // "2.35"


//* ***************************************************

//* 3. toExponential(fractionDigits)
// Converts a number to exponential notation (scientific notation) and returns it as a string.

//* Examples:
let number = 1234.5678;
console.log(number.toExponential());       // Output: "1.2345678e+3"  (default precision is 6)
console.log(number.toExponential(2));      // Output: "1.23e+3"
console.log(number.toExponential(4));      // Output: "1.2346e+3"
console.log((1234).toExponential(2));      // Output: "1.23e+3"


//* ***************************************************

//* 4. toString()
// Converts a number to a string. It can also represent the number in a specific base (radix).

//* Examples:   
let nums = 255;
console.log(nums.toString());               // Output: "255"

// Converting a number to a string in a specific base
console.log(nums.toString(2));              // Output: "11111111" (binary)
console.log(nums.toString(8));              // Output: "377" (octal)
console.log(nums.toString(16));             // Output: "ff" (hexadecimal)


//* ***************************************************

//* 5. valueOf()
// Returns the primitive value of a number object.

//* Examples:   
let value = new Number(42);                 // Number object
console.log(value.valueOf());               // Output: 42

let primitiveValue = 12345;                 // Primitive value
console.log(primitiveValue.valueOf());      // Output: 12345


//* ***************************************************