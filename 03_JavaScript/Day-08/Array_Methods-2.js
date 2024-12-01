//* ****************************************************
//* Array Methods In JavaScript -> Part-2
//* ****************************************************


//* 1. slice() Method: 
// Returns a shallow copy of a portion of an array into a new array. The ending index is not inclusive. 
// It does not modify the original array.

// Syntax: arrayName.slice(startIndex, endIndex);


//* Example:
const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];
const slicedColors = colors.slice(1, 3);

console.log(slicedColors);              // Output: ["Green", "Blue"]
console.log(colors);                    // Output: ["Red", "Green", "Blue", "Yellow", "Orange"]

console.log(colors.slice(3));           // Output: ["Yellow", "Orange"] => Returns all the elements starting from index 3 to end


//* What happen when we pass only one argument in slice() method?
// It will return all the elements from the starting index to the end of the array.

const colorCollection = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];
const slicedColor = colorCollection.slice(1);

console.log(slicedColor);               // Output: ["Green", "Blue", "Yellow", "Orange"]
console.log(colorCollection);           // Output: ["Red", "Green", "Blue", "Yellow", "Orange"]


//* ****************************************************

//* 2. splice() Method: 
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
// It returns an array with the deleted elements. It modifies the original array.

// Syntax: arrayName.splice(startIndex, deleteCount, item1, item2, ...);

// startIndex: The index at which to start removing elements.
// deleteCount: The number of elements to remove (starting from the startIndex).
// item1, item2, ... (optional): Elements to add to the array at the startIndex.


//* Example:
const numberArray = [0, 1, 2, 3, 4, 5];
const splicedArray = numberArray.splice(1, 3);

console.log(splicedArray);              // Output: [1, 2, 3] => Removed 3 elements from index 1.
console.log(numberArray);               // Output: [0, 4, 5] => Original array is modified.


// Use splice() to remove 2 elements starting from index 2 ('Wednesday' and 'Thursday'),
// and replace them with 'Saturday' and 'Sunday'

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const splicedWeekDays = weekDays.splice(2, 2, 'Saturday', 'Sunday');

// Log the removed elements (those that were spliced out)
console.log(splicedWeekDays);           // Output: ['Wednesday', 'Thursday']

// Log the modified original array after the splice operation
console.log(weekDays);                  // Output: ['Monday', 'Tuesday', 'Saturday', 'Sunday', 'Friday']


//* ****************************************************

//* Interview Question : Different between slice() & splice() method
//? slice() : Does not modify the original array. Returns a new array with the selected elements.
//? splice() : Modifies the original array. Returns an array of the removed elements.

//* ****************************************************


//* 3. toString() Method: 
// Converts an array to a string. It returns a comma-separated string of array elements.
// Syntax: arrayName.toString();


//* Example:
//? 1:
const myArray = [1, 2, 3, 4, 5];
const myString = myArray.toString();
console.log(myString);                  // Output: "1,2,3,4,5"


//? 2:
const myArray2 = ['Suraj', 'Micheal', 'John', 'David'];
const myString2 = myArray2.toString();
console.log(myString2);                 // Output: "Suraj,Micheal,John,David"


//* ****************************************************

//* 4. join() Method: 
// Joins all elements of an array into a string, separated by the specified separator.
// Syntax: array.join(separator)


//* Example:
//? 1:
const numArray = [10, 20, 30, 40, 50];
const joinArray = numArray.join(' - ');     // Join with hyphen

console.log(joinArray);                     // Output -> 10 - 20 - 30 - 40 - 50


//? 2:
const nameArray = ['Suraj', 'Micheal', 'John', 'David'];
const joinArray2 = nameArray.join(' ');     // Join with space

console.log(joinArray2);                    // Output -> Suraj Micheal John David


//* ****************************************************

//* 5. concat() Method: 
// Merges two or more arrays and returns a new array
// Syntax: array1.concat(array2, array3, ..., arrayN)


//* Example:
//? 1:
const fruits = ["Apple", "Banana", "Cherry"];
const addFruits = fruits.concat("Mango", "Peach");

console.log(addFruits);     // Output -> [ 'Apple', 'Banana', 'Chery', 'Mango', 'Peach' ]
console.log(fruits);        // Output -> [ 'Apple', 'Banana', 'Chery' ] => Original array is not modified


//? 2:
const char = ['a', 'b', 'c'];
const moreChar = ['d', 'e', 'f'];
const concatChar = char.concat(moreChar);

console.log(concatChar);    // Output -> [ 'a', 'b', 'c', 'd', 'e', 'f' ]


//? 3:
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const concatNum = num1.concat(num2, num3);

console.log(concatNum);     // Output -> [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


//* ****************************************************

//* 6. reverse() Method: 
// Reverses the elements of an array in place, meaning it modifies the original array and returns the reference to the same array.
// Syntax: array.reverse();


//* Example:
//? 1:
const array = ['e', 'd', 'c', 'b', 'a'];
console.log(array);             // Output -> [ 'e', 'd', 'c', 'b', 'a' ] => Original array

const reverseArray = array.reverse();
console.log(reverseArray);      // Output -> [ 'a', 'b', 'c', 'd', 'e' ] => Reversed array


//? 2:
let arr = [1, 'two', 3, 'four'];
console.log(arr);               // Output -> [ 1, 'two', 3, 'four' ] => Original array

const reversedArr = arr.reverse();
console.log(reversedArr);       // Output -> [ 'four', 3, 'two', 1 ] => Reversed array

//* ****************************************************