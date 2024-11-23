//* ****************************************************
//* Comparison In JavaScript
//* ****************************************************


//* Comparison Operators:
// Comparison operators are used to compare values and return a boolean result (true or false).
// true – means “yes”, “correct” or “the truth”.
// false – means “no”, “wrong” or “not the truth”.


//? 1: Equal to (==): Checks if two values are equal, with type conversion.
//? 2: Strict Equal to (===): Checks if two values are equal and of the same type.
//? 3: Not Equal to (!=): Checks if two values are not equal, with type coercion.
//? 4: Strict Not Equal to (!==): Checks if two values are not equal or not of the same type.
//? 5: Greater Than (>): Checks if one value is greater than another.
//? 6: Less Than (<): Checks if one value is less than another.
//? 7: Greater Than or Equal to (>=): Checks if one value is greater than or equal to another.
//? 8: Less Than or Equal to (<=): Checks if one value is less than or equal to another.


//* Examples:
let num = 5;
let str = "5";

let num1 = 10;
let num2 = 5;


//? Equal to:
console.log(num == str);    // Output -> true   => It's not a good practice. Always ensure that both values are of the same datatype.
console.log(str == num);    // Output -> true   => It's not a good practice. Always ensure that both values are of the same datatype.


//? Strict Equal to
console.log(num === str);   // Output -> false
console.log(str === num);   // Output -> false


//? Not Equal to:
console.log(num != str);    // Output -> false
console.log(str != num);    // Output -> false


//? Strict Not Equal to:
console.log(num !== str);   // Output -> true
console.log(str !== num);   // Output -> true


//? Greater Than:
console.log(num > str);     // Output -> false
console.log(str > num);     // Output -> false
console.log(num1 > num2);   // Output -> true
console.log(num2 > num1);   // Output -> false


//? Less Than:
console.log(num < str);     // Output -> false
console.log(str < num);     // Output -> false
console.log(num1 < num2);   // Output -> false
console.log(num2 < num1);   // Output -> true


//? Greater Than or Equal to:
console.log(num >= str);     // Output -> tue
console.log(str >= num);     // Output -> true
console.log(num1 >= num2);   // Output -> true
console.log(num2 >= num1);   // Output -> false


//? Less Than or Equal to:
console.log(num <= str);     // Output -> true
console.log(str <= num);     // Output -> true
console.log(num1 <= num2);   // Output -> false
console.log(num2 <= num1);   // Output -> true


//* Bad Examples Of Comparisions:
console.log(null == 0);     // Output -> false  => Avoid this type of comparison
console.log(null > 0);      // Output -> false  => Avoid this type of comparison
console.log(null < 0);      // Output -> false  => Avoid this type of comparison
console.log(null <= 0);     // Output -> true   => Avoid this type of comparison
console.log(null >= 0);     // Output -> true   => Avoid this type of comparison


// The reason behind unpredictable result is that, an equality check == and >=, <= work differently in JS.
// First, it convert "null" to a number, treating it as "0" and then comparison happens. That's why (null >= 0) is true andd (null > 0) is false.


console.log(undefined == 0);    // Output -> false   => Avoid this type of comparison
console.log(undefined > 0);     // Output -> false   => Avoid this type of comparison
console.log(undefined < 0);     // Output -> false   => Avoid this type of comparison
console.log(undefined <= 0);    // Output -> false   => Avoid this type of comparison
console.log(undefined >= 0);    // Output -> false   => Avoid this type of comparison


// First, it convert "undefined" to a number, treating it as "NaN" and then comparison happens. That's why above all the comparisons of "undefined" with "0" are false.


// "null" is always equal to "undefined" only when both are null.
console.log(null == undefined);     // Output -> true  => These values are the same, because both are null.
console.log(null === undefined);    // Output -> false => These values are different, because each of them is a different type. 


//* String Comparisions:
// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

console.log( 'Z' > 'A' );           // Output -> true
console.log( 'Glow' > 'Glee' );     // Output -> true
console.log( 'Bee' > 'Be' );        // Output -> true


//* Summary:
//? Comparison operators return a boolean value.
//? Strings are compared letter-by-letter in the “dictionary” order.
//? When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
//? Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.