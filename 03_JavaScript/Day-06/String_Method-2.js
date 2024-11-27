//* ****************************************************
//* String Methods In JavaScript -> Part-2
//* ****************************************************


//* ****************************************************
//* Extracting Parts of a String
//* ****************************************************

//* 1. slice(start, end)
// Extracts a part of a string and returns it as a new string.
// The "end" parameter is optional and not inclusive.
// The original string is not modified.


//* Example:
const text = "Good to see you";

const slicePart = text.slice(0, 4);     // Extract from 0th character to 4th character
const slicePart2 = text.slice(5);       // Extract from 5th character to the end
const lastPart = text.slice(-3);        // Extract last 3 characters
const slice = text.slice(1, -1);        // Extract from 1st character to 2nd last character

console.log(slicePart);                 // Output: Good
console.log(slicePart2);                // Output: to see you
console.log(lastPart);                  // Output: you
console.log(slice);                     // Output: ood to see yo


//* ****************************************************

//* 2. substring(start, end)
// Similar to slice, but substring doesn't accept negative indices.


//* Example:
const msg = "Good to see you!";

const subStr = msg.substring(8, 16);    // Extract from 8th character to 16th
const subStr2 = msg.substring(8);       // Extract from 8th character to the end

console.log(subStr);                    // Output: see you!
console.log(subStr2);                   // Output: see you!


//* ****************************************************
//* Replacing Parts of a String
//* ****************************************************

//* 3. replace():

// Syntax: string.replace(searchValue, replaceValue);
// Replaces the first occurrence of a specified value with another value.


//* Example 1:
const britishPound = "288,97£";

const americanDollar = britishPound.replace("£", "$");  // Replace '£' with '$'
const usDollar = americanDollar.replace(",", ".");      // Replace ',' with '.'

console.log(`USA Currency: ${usDollar}`);               // Output -> USA Currency: 288.97$


//* Example 2:
// To replace all occurrences, use a regular expression with the global flag (/g).
const announcement = "All passengers come to boarding door 23. Boarding door 23!";
const newAnnouncement = announcement.replace(/door/g, "gate");

// OR ↓ replaceAll() method
// const newAnnouncement = announcement.replaceAll("door", "gate");

console.log(newAnnouncement);
// Output -> All passengers come to boarding gate 23. Boarding gate 23!


//* ****************************************************
//* Converting a String to an Array
//* ****************************************************

//* 4. split(separator):
// Splits a string into an array of substrings using a specified separator.


//* Example 1:
const message = "Hello Good Morning!";
const result = message.split(" ");
console.log(result);                            // Output: ["Hello", "Good", "Morning!"]


//* Example 2:
const texts = "This+ is+ a+ sample+ text";
const newText = texts.split("+ ");
console.log(newText);                           // Output: ["This", "is", "a", "sample", "text"]


//* ****************************************************
//* Removing Whitespace From a String
//* ****************************************************

//* 5. trim():

// Syntax: string.trim();
// Removes whitespace from both ends of a string. 
// It does not remove the space between the string and the variable.


//* Example:
const myFullName = "   Suraj Adhikari   ";
const trimmedname = myFullName.trim();
console.log(trimmedname);  // Output -> Suraj Adhikari

//* ****************************************************