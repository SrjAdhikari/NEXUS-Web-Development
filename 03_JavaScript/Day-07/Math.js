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


//* Generalize math.random() to calculate a random number:
    // 1. Within a range [min, max] exclusive (not including) max.
        // Math.floor(Math.random() * (max - min)) + min
        // Gives integers from min to max - 1.

    
    // 2. Range inclusive of both min and max
        // Math.floor(Math.random() * (max - min + 1)) + min
        // Gives integers from min to max


    //* Example:
    const min = 10;
    const max = 20;
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);

    // Output -> Random number between 10 and 20


    //* Explanation of the formula:
        // 1. Math.random():
            // Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive). For example: 0.123, 0.567, 0.999.

        // 2. (max - min + 1):
            // This calculates the size of the range of values you want to generate, including both min and max. For example:
                // If min = 5 and max = 10, then (max - min + 1) = 6.
                // This means there are 6 possible integers in the range [5, 10]: 5, 6, 7, 8, 9, 10

        // 3. Math.random() * (max - min + 1):
            // This scales the random number from [0, 1) to [0, (max - min + 1)). For example:
                // If Math.random() returns 0.123, then 0.123 * 6 = 0.738.
                // If Math.random() returns 0.567, then 0.567 * 6 = 3.402.
                // f Math.random() returns 0.999, then 0.999 * 6 = 5.994.

        // 4. Math.floor(...):
            // Math.floor() rounds down the result to the nearest integer. For example:
                // Math.floor(0.738) results in 0.
                // Math.floor(3.402) results in 3.
                // Math.floor(5.994) results in 5.

        // 5. Math.floor(...) + min:
            // This shifts the range from [0, (max - min)] to [min, max]. For example:
                // If min = 5, then 0 + 5 = 5
                // If min = 5, then 3 + 5 = 8.
                // If min = 5, then 5 + 5 = 10.


    //* Why (max - min + 1) is Used?
        // The + 1 ensures that the range includes the upper bound (max). 
        // Without it, the formula would only generate numbers up to "max - 1". For example:
            // If min = 5 and max = 10, then (max - min) = 5.
            // Without + 1, the formula would generate numbers in the range [0, 5), which would shift to [5, 10) after adding min. 
            // This would exclude 10.

        // By adding + 1, the range becomes [0, 6), which shifts to [5, 11) after adding min. 
        // Then, Math.floor() ensures the result is in [5, 10].


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