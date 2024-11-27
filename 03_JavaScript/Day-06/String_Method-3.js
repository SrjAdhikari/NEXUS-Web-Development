//* ****************************************************
//* String Methods In JavaScript -> Part-3
//* ****************************************************


//* ****************************************************
//* Checking the Start and End of a String
//* ****************************************************

//* 1. startsWith(substring):
// Checks if a string starts with a specified substring.
// Returns true or false.


//* Example:
const airCraft = "Airbus A320neo";

const startWithAir = airCraft.startsWith("Air");
const startWithAbus = airCraft.startsWith("Abus");
const startWithA = airCraft.startsWith("A");

console.log(startWithAir);      // Output -> true
console.log(startWithAbus);     // Output -> false
console.log(startWithA);        // Output -> true


//* ****************************************************

//* 2. endsWith(substring):
// Checks if a string ends with a specified substring.
// Returns true or false.


//* Example:
const newPlane = "Airbus A320neo";

const endWithNeo = newPlane.endsWith("neo");
const endWithA = newPlane.endsWith("A");
const endWithBus = newPlane.endsWith("Bus");
const endwithO = newPlane.endsWith("o");

console.log(endWithNeo);        // Output -> true
console.log(endWithA);          // Output -> false
console.log(endWithBus);        // Output -> false
console.log(endwithO);          // Output -> true


//* ****************************************************
//* Converting Array of Strings to a Single String
//* ****************************************************

//* 3. join(separator):
// Joins an array of strings into a single string using a specified separator.


//* Example 1:
const fruits = ["Apple", "Banana", "Orange"];
const fruitString = fruits.join(",");
console.log(fruitString);               // Output: "Apple,Banana,Orange"
console.log(fruits.join(", "));         // Output: "Apple, Banana, Orange"


//* Example 2:
const animals = ["Lion", "Tiger", "Elephant"];
const animalString = animals.join("-");
console.log(animalString);              // Output: "Lion-Tiger-Elephant"   


//* Example 3:
const characters = ["H", "e", "l", "l", "o"];
const charString = characters.join("");
console.log(charString);                // Output: "Hello"

//* By using an empty string ("") as the separator, the array elements are concatenated together without any spaces or characters between them.


//* ****************************************************
//* Adding Padding to a String
//* ****************************************************

//* 4. padStart(targetLength, padString):
// Adds padding to the beginning of a string until it reaches the target length.

//? targetLength: The length of the resulting string once padding is applied.
//? padString (optional): The string to pad with. If not provided, spaces (" ") will be used by default.


//* Example 1: padding with spaces
const myName = "Suraj Adhikari";
const paddedName = myName.padStart(20, " ");
console.log(paddedName);        // Output: "       Suraj Adhikari"


//* Example 2: Padding with Zeros
const numStr = "123";
const paddedNum = numStr.padStart(10, "0");
console.log(paddedNum);         // Output: "0000000123"


//* Example 3: Padding with custom string
const cardNumber = "1234";
const paddedCard = cardNumber.padStart("16", "*");
console.log(paddedCard);        // Output: "************1234"


//* *****************************************************

//* 5. padEnd(targetLength, padString):
// Adds padding to the end of a string until it reaches the target length.

//? targetLength: The length of the resulting string once padding is applied.
//? padString (optional): The string to pad with. If not provided, spaces (" ") will be used by default.


//* Example 1: padding with spaces
const fullName = "Suraj Adhikari";
const paddedFullName = fullName.padEnd(20, " ");
console.log(paddedFullName);        // Output: "Suraj Adhikari      "


//* Example 2: Padding with Zeros
const numString = "1357";
const paddedNumString = numString.padEnd(10, "0");
console.log(paddedNumString);       // Output: "1357000000"


//* Example 3: Padding with custom string
const cardNum = "2468";
const paddedCardNum = cardNum.padEnd(16, ".");
console.log(paddedCardNum);         // Output: "2468............"


//* ****************************************************
//* Repeating a String Multiple Times
//* ****************************************************

//* 6. repeat(count):
// Repeats a string a specified number of times.


//* Example 1:
const messageStr = "Bad Weather... All Departures Delayed... ";
const repeatedStr = messageStr.repeat(5);
console.log(repeatedStr);
// Output: "Bad Weather... All Departures Delayed... Bad Weather... All Departures Delayed... Bad Weather... All Departures Delayed... Bad Weather... All Departures Delayed... Bad Weather... All Departures Delayed... "


//* Example 2:
const nameStr = "Suraj Adhikari ";
const repeatedName = nameStr.repeat(3);
console.log(repeatedName);                  // Output: "Suraj Adhikari Suraj Adhikari Suraj Adhikari"

//* ****************************************************