//* ****************************************************
//* Array Methods In JavaScript -> Part-1
//* ****************************************************


//* 1. push() Method: 
// Adds an element to the end of an array.
// Syntax: arrayName.push(element);


//* Example:
//? 1:
const fruits = ['Apple', 'Banana', 'Orange'];
fruits.push('Mango');
fruits.push('Watermelon');
console.log(fruits);            // Output: ["Apple", "Banana", "Orange", "Mango", "Watermelon"]


//? 2:
const numbers = [10, 15, 20, 25, 30];

// The arrayLength variable contains the new length of the array.
const arrayLength = numbers.push(35, 40, 50);

console.log(numbers);           // Output: [10, 15, 20, 25, 30, 35, 40, 50]
console.log(arrayLength);       // Output: 8


//* ****************************************************

//* 2. pop() Method: 
// Removes the last element from an array.
// Syntax: arrayName.pop();


//* Example:
const animals = ['Lion', 'Tiger', 'Elephant', 'Horse'];
const poppedAnimal = animals.pop();

console.log(poppedAnimal);     // Output: "Horse"
console.log(animals);          // Output: ["Lion", "Tiger", "Elephant"]


//* ****************************************************

//* 3. unshift() Method: 
// Adds an element to the beginning of an array.
// Syntax: arrayName.unshift(element);


//* Example:
//? 1:
const numArray = [11, 22, 33, 44, 55];
numArray.unshift(2);
numArray.unshift(1);
console.log(numArray);         // Output: [1, 2, 11, 22, 33, 44, 55]


//? 2:
const strArray = ['A', 'B', 'C', 'D', 'E'];
strArray.unshift('Z', 'Y', 'X');
console.log(strArray);         // Output: ["Z", "Y", "X", "A", "B", "C", "D", "E"]


//* ****************************************************

//* 4. shift() Method: 
// Removes the first element from an array.
// syantax: arrayName.shift();


//* Example:
const price = [1000, 1521, 4500, 3502, 7800];
const shiftedPrice = price.shift();

console.log(shiftedPrice);     // Output: 1000
console.log(price);            // Output: [1521, 4500, 3502, 7800]


//* ****************************************************

//* 5. indexOf() Method: 
// Returns the first index at which a given element can be found in an array. If the element is not found, it returns -1.
// Syntax: arrayName.indexOf(element);


//* Example:
const pet = ['Dog', 'Cat', 'Bird', 'Horse'];
const birdIndex = pet.indexOf('Bird');

console.log(birdIndex);                 // Output: 2
console.log(pet.indexOf('Cow'));        // Output: -1


//* ****************************************************

//* 6. lastindexOf(element) Method: 
// Returns the last index at which a given element can be found in an array. If the element is not found, it returns -1.
// Syntax: arrayName.lastIndexOf(element);


//* Example:
//? 1:
let arr = [2, 5, 9, 2, 5, 2];
let index = arr.lastIndexOf(2);
console.log(index);                     // Output: 5


//? 2:
let colorsArray = ['Red', 'Green', 'Blue', 'Red', 'Yellow', 'Red'];
let lastIndex = colorsArray.lastIndexOf('Black');
console.log(lastIndex);                 // Output: -1


//* ****************************************************

//* 7. includes() Method: 
// Returns true if an element is present in the array, otherwise false.
// Syntax: arrayName.includes(element);


//* Example:
const gadget = ['Laptop', 'Mobile', 'Watch', 'Speaker'];
const isGadgetPresent = gadget.includes('Mobile');

console.log(isGadgetPresent);                   // Output: true
console.log(gadget.includes('Smart Phone'));    // Output: false


//* ****************************************************