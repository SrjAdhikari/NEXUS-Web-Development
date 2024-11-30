//* ****************************************************
//* Math In JavaScript
//* ****************************************************


//* 1. Math.max()
// Returns the largest value from a list of numbers.


//* Examples:
console.log(Math.max(5, 18, 23, 11, 2));        // Output -> 23
console.log(Math.max(5, 18, "23", 11, 2));      // Output -> 23


//* ****************************************************

//* 2. Math.min()
// Returns the smallest value from a list of numbers.


//* Examples:
console.log(Math.min(5, 18, 23, 11, 2));        // Output -> 2
console.log(Math.min(5, 18, "23", 11, 2));      // Output -> 2


//* ****************************************************

//* 3. Math.pow(base, exponent)
// Returns the value of x raised to the power of y.


//* Examples:
console.log(Math.pow(2, 3));                     // Output -> 8 (2 ^ 3)
console.log(Math.pow(3, 2));                     // Output -> 9 (3 ^ 2)


//* ****************************************************

//* 4. Math.sqrt(number)
// Returns the square root of a number.


//* Examples:
console.log(Math.sqrt(64));                      // Output -> 8
console.log(Math.sqrt(81));                      // Output -> 9


//* ****************************************************

//* 5. Math.random()
// Returns a random number between 0 and 1.


//* Examples:
console.log(Math.random());                     // Output -> Random number between 0 and 1
console.log(Math.random() * 5) + 1;             // Output -> Random number between 1 and 5


//* Generalize math.random() to calculate a random number between min and max
// Formula = Math.floor(Math.random() * (max - min) + 1) + min;

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min) + 1) + min);
// Output -> Random number between 10 and 20


//* ****************************************************

//* 6. Math.round()
// ● Math.round() rounds a number to the nearest integer.
// ● If the decimal is .5 or higher, it rounds up; otherwise, it rounds down.

//* Examples:
console.log(Math.round(4.5));       // 5
console.log(Math.round(4.4));       // 4
console.log(Math.round(-2.5));      // -2 (rounds up towards zero)
console.log(Math.round(-2.6));      // -3 (rounds down)
console.log(Math.round(23.3));      // 23
console.log(Math.round(23.9));      // 24


//* ****************************************************

//* 7. Math.ceil()
// Math.ceil() always rounds up to the nearest integer, regardless of the decimal part.


//* Examples:
console.log(Math.ceil(4.1));        // 5 (rounds up)
console.log(Math.ceil(-2.9));       // -2 (rounds up for negative numbers towards zero)
console.log(Math.ceil(-2.1));       // -2 (rounds up for negative numbers towards zero)
console.log(Math.ceil(3.0));        // 3 (already an integer)
console.log(Math.ceil(23.3));       // 24 (rounds up)
console.log(Math.ceil(23.9));       // 24 (rounds up)


//* ****************************************************

//* 8. Math.floor()
// Math.floor() always rounds down to the nearest integer, regardless of the decimal part.


//* Examples:
console.log(Math.floor(4.9));       // 4 (rounds down)
console.log(Math.floor(-2.3));      // -3 (rounds down for negative numbers too)
console.log(Math.floor(5.0));       // 5 (already an integer, so no change)
console.log(Math.floor(23.3));      // 23 (rounds down)
console.log(Math.floor('23.9'));    // 23 (converts the string to a number and rounds down)


//* ****************************************************

//* 9. Math.trunc()
// ● Math.trunc() removes the decimal part of a number, returning just the integer part.
// ● It doesn’t round up or down; it simply removes everything after the decimal point.


//* Examples:
console.log(Math.trunc(4.8));       // 4 (removes decimal)
console.log(Math.trunc(-2.9));      // -2 (removes decimal)
console.log(Math.trunc(5));         // 5 (already an integer)
console.log(Math.trunc(-23.3));     // -23 (removes decimal)
console.log(Math.trunc(23.9));      // 23 (removes decimal)
console.log(Math.trunc("23.9"));    // 23 (converts the string to a number and removes decimal)

//* ****************************************************