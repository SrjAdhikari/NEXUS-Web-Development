//* ****************************************************
//* Do While Loop In JavaScript
//* ****************************************************


//* What is Do While Loop ?
// A do...while loop in JavaScript is similar to a while loop, but with one key difference: the code inside the do block is guaranteed to execute at least once, even if the condition is false from the beginning. This is because the condition is evaluated after the block of code is executed, not before.


//* Syntax:
// do {
    // Code to be executed
// } while (condition);


// do: This block contains the code to be executed at least once.
// while: The loop condition is checked after each execution of the do block. If it's true, the loop continues; if false, the loop stops.


//* ****************************************************


//* Examples:
// 1: Print number from 1 to 10
let i = 1;
do {
    console.log(`current number: ${i}`);
    i++;
} while(i <= 10);
console.log("End of loop..........");


//* Explanation:
// The variable i is initialized to 1.
// The code inside the do block runs, logging i and then incrementing it.
// After the block executes, the condition i <= 10 is checked. As long as it’s true, the loop continues.
// When i becomes 11, the condition is false, so the loop stops.


// 2: Print sum of number from 1 to 10
let sum = 0;
let num = 1;
do {
    sum += num;
    num++;
} while (num <= 10);
console.log(`sum of number from 1 to 10: ${sum}`);
console.log("End of loop..........");


// 3: Print only even number from 1 to 10
let even = 1;
do {
    if (even % 2 === 0)
        console.log(`Odd number: ${even}`);
    even++;
} while (even <= 10);
console.log("End of loop..........");


// 4: Print only odd number from 1 to 10
let odd = 1;
do {
    if (odd % 2 !== 0)
        console.log(`Even number: ${odd}`);
    odd++;
} while (odd <= 10);
console.log("End of loop..........");


//* ****************************************************
//* Do While Loop With Array
//* ****************************************************


// 1.
let number = [10, 15, 20, 25, 30];
const arrayLength = number.length;
let index = 0;

do {
    console.log(number[index]);
    index++;
} while (index <= arrayLength - 1);
console.log("End of loop..........");


// 2.
const fruits = ["apple", "banana", "orange"];
let fruitIndex = 0;

do {
    console.log(fruits[fruitIndex]);
    fruitIndex++;
} while (fruitIndex < fruits.length);
console.log("End of loop..........");