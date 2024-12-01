//* ****************************************************
//* Array In JavaScript
//* ****************************************************


//* What is an array ?
// An array is a special data type that stores multiple values in a single variable.


//* ****************************************************

//* Array Creation:
// 1: using Array Literal:
const array = ['Apple', 'Banana', 'Orange'];
const numbers = [10, 20, 30, 40, 50];

console.log(array);             // Output: [ 'Apple', 'Banana', 'Orange' ]
console.log(numbers);           // Output: [ 10, 20, 30, 40, 50 ]


// 2: using Array Constructor:
const myArray = new Array('Micheal', 'John', 'David');
const num_array = new Array(10, 20, 30, 40, 50);

console.log(myArray);           // Output: [ 'Micheal', 'John', 'David' ]
console.log(num_array);         // Output: [ 10, 20, 30, 40, 50 ]


//* ****************************************************

//* Access Array Elements:
// We can access array elements using their index. Remember, arrays are zero-indexed, so the first element is at position 0.


const fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits[0]);         // Output: Apple
console.log(fruits[1]);         // Output: Banana
console.log(fruits[2]);         // Output: Orange

const numArray = [10, 30, 25, 50, 45];
console.log(numArray[3]);       // Output: 50
console.log(numArray[4]);       // Output: 45


//* ****************************************************

//* at() Method: 
// Access an element in an array (or string) at a specified index. 
// Syntax: array.at(index);


//* Example:
const fruitArray = ["Apple", "Banana", "Cherry", "Date"];

console.log(fruitArray.at(0));                      // Output -> Apple
// Equivalent to:
console.log(fruitArray[0]);                         // Output -> Apple

console.log(fruitArray.at(-1));                     // Output -> Date (last element)
// Equivalent to:
console.log(fruitArray[fruitArray.length - 1]);     // Output -> Date (last element)

console.log(fruitArray.at(-2));                     // Output -> Cherry (second-to-last element)


//* ****************************************************

//* Array Length:
// The length of an array is the number of elements present in the array. We can determine the number of elements in an array using the ".length" property.


const fruitCollection = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
console.log(`The length of the array is: ${fruitCollection.length}`);
// Output: The length of the array is: 5


//* ****************************************************

//* Access Last Element:
// We can also use the ".length" property to access the last element of an array.

const lastElement = fruitCollection[fruitCollection.length - 1];
console.log(`The last element of the array is: ${lastElement}`);
// Output: The last element of the array is: Mango


//* ****************************************************

//* Modify Array Elements:
// We can modify array elements using their index. Remember, arrays are zero-indexed, so the first element is at position 0.

const friends = ['John', 'Jackson', 'David', 'Alex'];
friends[2] = 'Peter';
console.log(friends);
// Output: ["John", "Jackson", "Peter", "Alex"]  => We modify the third element of array from "David" to "Peter".

//* ****************************************************