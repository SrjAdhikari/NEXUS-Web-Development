//* ****************************************************
//* Type Conversion In JavaScript
//* ****************************************************


//* What is type conversion ?
//? Type conversion in JavaScript refers to changing the data type of a value from one type to another. This can happen automatically (implicit conversion) or manually (explicit conversion). Here, we focus on explicit conversion.


//* What is implicit conversion ?
//? Implicit type conversion is when JavaScript automatically converts types based on the context in which a value is used.


//* What is explicit conversion ?
//? Explicit type conversion is when you manually convert a value from one type to another using built-in JavaScript functions.


//* 1. Converting from Number to String:
let num = 100;                                  // Number variable
console.log(typeof num);                        // Output -> number

let numToStr = String(num);                     // Conversation from Number to String 
console.log(typeof numToStr);                   // Output -> string


//* 2. Converting from String to Number:
//? I:
let str = "100";                                // String variable
console.log(typeof str);                        // Output -> string

let strToNum = Number(str);                     // Conversation from String to Number 
console.log(typeof strToNum);                   // Output -> number

//? II:
let stringValue = "100ABC";                     // String variable
console.log(typeof stringValue);                // Output -> string

let valueInNumber = Number(stringValue);        // Conversation from String to Number 
console.log(typeof valueInNumber);              // Output -> number
console.log(valueInNumber);                     // Output -> NaN

//? III:
let myName = "Suraj";                           // String variable
console.log(typeof myName);                     // Output -> string

let nameInNumber = Number(myName);              // Conversation from String to Number 
console.log(typeof nameInNumber);               // Output -> number
console.log(nameInNumber);                      // Output -> NaN


//* 3. Converting from NUll to Number:
let nullValue = null;                           // Null variable
console.log(typeof nullValue);                  // Output -> object

let nullInNumber = Number(nullValue);           // Conversation from Null to Number 
console.log(typeof nullInNumber);               // Output -> number
console.log(nullInNumber);                      // Output -> 0


//* 4. Converting from Undefined to Number:
let undefineValue = undefined;                  // Undefined variable
console.log(typeof undefineValue);              // Output -> undefined

let undefineInNumber = Number(undefineValue);   // Conversation from Undefined to Number 
console.log(typeof undefineInNumber);           // Output -> number
console.log(undefineInNumber);                  // Output -> NaN


//* 5. Converting from Boolean to Number:
let isLoggedIn = true;                          // Boolean variable
console.log(typeof isLoggedIn);                 // Output -> boolean

let booleanInNumber = Number(isLoggedIn);       // Conversation from Boolean to Number 
console.log(typeof booleanInNumber);            // Output -> number
console.log(booleanInNumber);                   // Output -> 1


//* 6. Converting from Number to Boolean:
let isSignedIn = 1;                             // Number variable
console.log(typeof isSignedIn);                 // Output -> number

let numberInBool = Boolean(isSignedIn);         // Conversation from Number to Boolean 
console.log(typeof numberInBool);               // Output -> boolean
console.log(numberInBool);                      // Output -> true


//* 7. Converting from Srting to Boolean:
//? I:
let emptyStr = "";                              // String variable
console.log(typeof emptyStr);                   // Output -> string

let stringInBool = Boolean(emptyStr);           // Conversation from String to Boolean 
console.log(typeof stringInBool);               // Output -> boolean
console.log(stringInBool);                      // Output -> false

//? II:
let nameStr = "Suraj";                          // String variable
console.log(typeof nameStr);                    // Output -> string

let strInBool = Boolean(nameStr);               // Conversation from String to Boolean 
console.log(typeof strInBool);                  // Output -> boolean
console.log(strInBool);                         // Output -> true


//* Key Points:
//? "Implicit Conversion" happens automatically in JavaScript, depending on the operation being performed.
//? "Explicit Conversion" is done manually using functions like String(), Number(), Boolean(), parseInt(), and parseFloat().