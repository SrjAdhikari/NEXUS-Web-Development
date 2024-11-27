//* ****************************************************
//* String Methods In JavaScript -> Part-1
//* ****************************************************


//* What is String ?
// A string is a sequence of characters enclosed within quotes, either single ('), double ("), or backticks (`). Strings are immutable, meaning once a string is created, it cannot be altered.


//* ****************************************************

//* String Creation:
//? I: Using single Literals
let singleQuote = 'Suraj';
let doubleQuote = "Suraj";
let backTick = `Suraj`;

console.log(singleQuote);
console.log(doubleQuote);
console.log(backTick);


//? II: using String Constructor
let myName = new String("Suraj Adhikari");
console.log(myName);   


//* ****************************************************

//* String length Property:
// Syntax: string.length;

// length property returns the number of characters in a string

//* Example:
const fullName = "Suraj Adhikari";
const length = fullName.length;
console.log(`Length of string: ${length}`);     // Length of string: 14


//* ****************************************************
//* Some Commonly Used String Methods
//* ****************************************************


//* ****************************************************
//* Accessing Characters in a String
//* ****************************************************

//* 1. charAt(index)
// Returns the character at a specified index in a string.
// Returns an empty string if the index is out of range.


//* Example:
const full_name = "Suraj Adhikari";
const firstChar = full_name.charAt(0);
const lastChar = full_name.charAt(full_name.length - 1);

// Using square brackets
const firstChar2 = full_name[0];
const lastChar2 = full_name[full_name.length - 1];

console.log(`First Character: ${firstChar}`);       // First Character: S
console.log(`Last Character: ${lastChar}`);         // Last Character: i

console.log(`First Character: ${firstChar2}`);       // First Character: S
console.log(`Last Character: ${lastChar2}`);         // Last Character: i


//* ****************************************************
//* Changing Case of a String
//* ****************************************************

//* 2. toUpperCase() And toLowerCase():

// Syntax: string.toUpperCase();　
// Converts the string to uppercase

// Syntax: string.toLowerCase();
// Converts the string to lowercase


//* Example:
const my_name = "Suraj Adhikari";
const upperCase = my_name.toUpperCase();
const lowerCase = my_name.toLowerCase();

console.log(upperCase);     // Output -> SURAJ ADHIKARI
console.log(lowerCase);     // Output -> suraj adhikari


//* ****************************************************
//* Searching in a String
//* ****************************************************

//* 3. indexOf(substring)
// Returns the index of the first occurrence of a substring.
// Returns -1 if the substring is not found.


//* Example:
const airline = "ANA Airlines Japan";

const japanIndex = airline.indexOf("Japan");
const iIndex = airline.indexOf("i");
const position = airline.indexOf("japan");

console.log(`Index of "Japan": ${japanIndex}`);     // Index of "Japan": 13
console.log(`Index of "i": ${iIndex}`);             // Index of "i": 5
console.log(`Index of "japan": ${position}`);       // Index of "japan": -1


//* ****************************************************

//* 4. lastIndexOf(substring)
// Returns the index of the last occurrence of a substring.
// Returns -1 if the substring is not found.


//* Example:
const message = "Good Morning!, Good Afternoon!";

const index = message.lastIndexOf("Good");
const lastIndex = message.lastIndexOf("r");

console.log(`LastIndex of "Good": ${index}`);       // LastIndex of "Good": 15
console.log(`LastIndex of "r": ${lastIndex}`);      // LastIndex of "r": 24


//* ****************************************************

//* 5. includes(substring):
// Checks if a string contains a specified substring.
// Returns true or false.


//* Example:
const plane = "Airbus A320neo";

const hasAirbus = plane.includes("Airbus");
const hasA320 = plane.includes("A320");
const hasBoeing = plane.includes("Boeing");
const hasNeo = plane.includes("neo");

console.log(hasAirbus);         // Output -> true
console.log(hasA320);           // Output -> true
console.log(hasBoeing);         // Output -> false
console.log(hasNeo);            // Output -> true

//* ****************************************************