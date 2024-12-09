//* ****************************************************
//* While Loop In JavaScript
//* ****************************************************


//* What is While Loop ?
// A while loop in JavaScript repeatedly executes a block of code as long as the specified condition evaluates to true. 
// It's typically used when the number of iterations is not known beforehand.


//* Syntax:
// while (condition) {
    // code to be executed
// }


// condition: The loop continues as long as this condition is true.
// Once the condition becomes false, the loop stops, and the code outside the loop is executed.


//* ****************************************************


//* Examples:
// 1: Print number from 1 to 10
let i = 1;
while (i <= 10) {
    console.log(`current number: ${i}`);
    i++;
}
console.log("End of loop..........");


//* Explanation:
// The variable i is initialized to 1.
// The loop continues as long as i <= 10.
// After each iteration, i is incremented by 1.
// When i becomes 11, the condition i <= 10 becomes false, and the loop exits.


// 2: Print sum of number from 1 to 10
let sum = 0;
let num = 1;
while(num <= 10) {
    sum += num;
    num++;
}
console.log(`sum of number from 1 to 10: ${sum}`);
console.log("End of loop..........");


// 3: Print only even number from 1 to 10
let even = 1;
while (even <= 10) {
    if(even % 2 === 0)
        console.log(`Odd number: ${even}`);
    even++;
}
console.log("End of loop..........");


// 4: Print only odd number from 1 to 10
let odd = 1;
while (odd <= 10) {
    if(odd % 2 !== 0)
        console.log(`Even number: ${odd}`);
    odd++;
}
console.log("End of loop..........");


//* ****************************************************
//* While Loop With Array
//* ****************************************************


// 1.
let number = [10, 15, 20, 25, 30];
const arrayLength = number.length;
let index = 0;

while (index <= arrayLength - 1) {
    console.log(number[index]);
    index++;
}
console.log("End of loop..........");


// 2.
const fruits = ["apple", "banana", "orange"];
let fruitIndex = 0;
while (fruitIndex < fruits.length) {
    console.log(fruits[fruitIndex]);
    fruitIndex++;
}
console.log("End of loop..........");