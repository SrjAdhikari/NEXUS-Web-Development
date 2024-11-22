//* ****************************************************
//* Operators In JavaScript
//* ****************************************************


//* I. Arithmetic Operators:
//? 1: Addition (+): Adds two values.
//? 2: Subtraction (-): Subtracts one value from another.
//? 3: Multiplication (*): Multiplies two values.
//? 4: Division (/): Divides one value by another.
//? 5: Modulus (%): Returns the remainder of a division operation.
//? 6: Exponentiation (**): Raises a number to the power of another number.


//* Examples:
let num1 = 5;
let num2 = 3;

//? Addition:
console.log(num1 + num2);       // Output -> 8

//? Subtraction:
console.log(num1 - num2);       // Output -> 2

//? Multiplication:
console.log(num1 * num2);       // Output -> 15

//? Division:
console.log(num1 / num2);       // Output -> 1.6666666666666667

//? Modulus:
console.log(num1 % num2);       // Output -> 2

//? Exponentiation:
console.log(num1 ** num2);      // (num1 ** num2) => (5 ** 3) => 5 * 5 * 5 => 125


//* II. Assignment Operators:
//? 1: Assignment (=): Assigns a value to a variable.
//? 2: Addition Assignment (+=): Adds and assigns the result.
//? 3: Subtraction Assignment (-=): Subtracts and assigns the result.
//? 4: Multiplication Assignment (*=): Multiplies and assigns the result.
//? 5: Division Assignment (/=): Divides and assigns the result.
//? 6: Modulus Assignment (%=): Computes the modulus and assigns the result.


//* Examples:
//? Assignment:
let value = 10;
console.log(value);     // Output -> 10

//? Addition Assignment:
value += 15;            // value += 15 => value = value + 15 => value = 10 + 15
console.log(value);     // Output -> 25 (value is now 25)

//? Subtraction Assignment:
value -= 5;             // value -= 5 => value = value - 5 => value = 25 - 5
console.log(value);     // Output -> 20 (value is now 20)

//? Multiplication Assignment:
value *= 10;            // value *= 10 => value = value * 10 => value = 20 * 10
console.log(value);     // Output -> 200 (value is now 200)

//? Division Assignment:
value /= 10;            // value /= 10 => value = value / 10 => value = 200 / 10
console.log(value);     // Output -> 20 (value is now 20)

//? Modulus Assignment:
value %= 5;             // value %= 5 => value = value % 5 => value = 20 % 5
console.log(value);     // Output -> 0 (value is now 0)


//* III. Unary Operators:
//? 1. Unary Plus (+): Converts a value to a number.
//? 2. Unary Minus (-): Negates a value.
//? 3. Prefix & Postfix Increment (++): Increases a value by one.
//? 4. Prefix & Postfix Decrement (--): Decreases a value by one.


//* Examples:
//? Unary Plus:
let str = "5";
let result = +str;
console.log(result);    // Output -> 5 (converted to number)

//? Unary Minus:
let num = 5;
let output = -num;
console.log(output);    // Output -> -5


//? Prefix & Postfix Increment:
//* Postfix -> Returns the value before incrementing (First use the original value and then increment).
let x = 3;
const y = x++;
console.log(x, y);      // Output -> 4, 3

//* Prefix -> Returns the value after incrementing (First increment the original value and then use the new value).
let a = 3;
const b = ++a;
console.log(a, b);      // Output -> 4, 4


//? Prefix & Postfix Decrement:
//* Postfix -> Returns the value before decrementing (First use the original value and then decrement).
let i = 3;
const j = i--;
console.log(i, j);      // Output -> 2, 3

//* Prefix -> Returns the value after decrementing (First decrement the original value and then use the new value).
let m = 3;
const n = --m;
console.log(m, n);      // Output -> 2, 2


//! ++(++x); SyntaxError : Invalid left-hand side expression in prefix operation.


//* String Concatination:
//? 1:
let greeting = "Hello ";
let myName = "suraj";
let greetName = greeting + myName;
console.log(greetName);   // Output -> Hello Suraj

//? 2:
let message = "Good " + "Morning";
console.log(message);     // Output -> Good Morning


//* Tricky Operations:
console.log("1" + 2);      // Output -> 12  (If the first operand is a string, then all are considered as strings and concatenated.)
console.log(1 + "2");      // Output -> 12
console.log("1" + 2 + 3);  // Output -> 123

console.log(1 + 2 + "3");  // Output -> 33 (First : 1 + 2 => 3, Then : 3 + "3" => 33)
// If the last operand is a string, then all the operations before the string are performed and concatenated.

console.log(+true);        // Output -> 1  (Bad Practice)
console.log(+"");          // Output -> 0  (Bad Practice)