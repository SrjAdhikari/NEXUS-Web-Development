//* ****************************************************
//* Array Reduce Method In JavaScript
//* ****************************************************


//* What is reduce() Method?
// The reduce() method executes a user-specified function for each element in the array, resulting in a single output value.
// It does not change the original array.
// It returns a single output value.


//* Syntax:
// array.reduce(function(accumulator, currentValue, index, array) {
    // Code to execute for each element
// }, initialValue);


//* Explanation:
// function: The function to execute for each element.
// accumulator: The accumulated value that is returned after each iteration.
// currentValue: The current element being processed.
// index (optional): The index of the current element in the array.
// array (optional): The original array itself.
// initialValue (optional): The initial value to use as the accumulator. If not provided, the first element of the array will be used as the accumulator.


//* ****************************************************


//* Examples:
// 1. Sum of All Array Elements
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    // Calculate the sum of all elements
    return accumulator + currentValue;
}, 0);

console.log(numbers);                                       // Output: [1, 2, 3, 4, 5]
console.log(sum);                                           // Output: 15


//* ****************************************************


// 2. Counting Occurrences of Elements in an Array and returning an Object.
const fruitsArray = ["apple", "banana", "apple", "orange", "apple", "grapes", "Kiwi", "orange", "mango"];

const result = fruitsArray.reduce((acc, curr) => {
    // Check if the current fruit (curr) is already a property in the accumulator object
    if(acc.hasOwnProperty(curr))
        // If it exists, increment its count
        acc[curr]++;

    // If it doesn't exist, initialize the count to 1
    else
        acc[curr] = 1;

    // Return the accumulator object for the next iteration
    return acc;
}, {});

console.log(result);

// Output:
// { apple: 3, banana: 1, orange: 2, grapes: 1, Kiwi: 1, mango: 1 }


//* ****************************************************


// 2. Sum of All Array Elements with visualization of each iteration
const money = [200, 450, -400, 3000, -650];

const balance = money.reduce((acc, curr, index) => {
    console.log(`Iteration ${index + 1}`);
    console.log(`Accumulator: ${acc}, CurrentValue: ${curr} \n`);

    return acc + curr;
}, 0);

console.log(`Current Balance: ${balance}`);

// Output:
/*  Iteration 1
    Accumulator: 0, CurrentValue: 200  

    Iteration 2
    Accumulator: 200, CurrentValue: 450 

    Iteration 3
    Accumulator: 650, CurrentValue: -400

    Iteration 4
    Accumulator: 250, CurrentValue: 3000

    Iteration 5
    Accumulator: 3250, CurrentValue: -650

    Current Balance: 2600
*/


//* ****************************************************


// 3. Finding the Longest String in an Array
const fruits = ["Apple", "Banana", "Watermelon", "Kiwi"];

const longestString = fruits.reduce((acc, curr, index) => {
    console.log(`Iteration ${index + 1}`);
    console.log(`Accumulator: ${acc}, CurrentValue: ${curr}`);
    console.log(`Accumulator Length: ${acc.length}, CurrentValue Length: ${curr.length} \n`);

    return acc.length > curr.length ? acc : curr;
}, "");

console.log(`Longest String: ${longestString}`);

// Output:
/*  Iteration 1
    Accumulator: , CurrentValue: Apple
    Accumulator Length: 0, CurrentValue Length: 5  

    Iteration 2
    Accumulator: Apple, CurrentValue: Banana       
    Accumulator Length: 5, CurrentValue Length: 6  

    Iteration 3
    Accumulator: Banana, CurrentValue: Watermelon  
    Accumulator Length: 6, CurrentValue Length: 10 

    Iteration 4
    Accumulator: Watermelon, CurrentValue: Kiwi
    Accumulator Length: 10, CurrentValue Length: 4

    Longest String: Watermelon
*/


//* ****************************************************


// 4. Finding the Largest Number in an Array
const array = [10, 50, 40, 60, 35, 80, 20];

const maxNumber = array.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
}, array[0]);

console.log(`Maximum Number: ${maxNumber}`);                // Output: Maximum Number: 80


//* ****************************************************


// 5. Finding the Smallest Number in an Array
const numArray = [10, 50, 40, 60, 35, 80, 20];

const minNumber = numArray.reduce((acc, curr) => {
    return acc < curr ? acc : curr;
}, numArray[0]);

console.log(`Minimum Number: ${minNumber}`);                // Output: Minimum Number: 10