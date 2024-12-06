//* ****************************************************
//* Object Deep and Shallow Copy In JavaScript
//* ****************************************************


//* 1. Shallow Copy: 
// A shallow copy creates a new object, but it only copies the references to the nested objects and arrays. 
// In other words, it only copies the top-level properties. If the object contains references to other objects (like arrays or objects), only the references are copied. 
// Thus, changes to the nested objects in the copied object will affect the original object as well.

//* In simple terms:
// 1. A new object is created.
// 2. The properties at the first level are copied.
// 3. Nested objects and arrays are not copied; instead, references to them are copied.


//* Example:
let original = {
    fullname : "Suraj Adhikari",
    age : 25,
    address : {
        country : "Nepal",
        city : "Pokhara",
        pin : 12345
    }
};

// let shallowCopy = original;                      // Using direct assignment to create a shallow copy
// let shallowCopy = {...original};                 // Using spread operator to create a shallow copy
let shallowCopy = Object.assign({}, original);      // Using Object.assign() to create a shallow copy

shallowCopy.age = 27;                               // Modify the top-level property in shallowCopy
shallowCopy.address.pin = 147852;                   // Modify the nested object in shallowCopy

console.log(original.age);                          // Output -> 25
console.log(shallowCopy.age);                       // Output -> 27

console.log(original.address.pin);                  // Output -> 147852
console.log(shallowCopy.address.pin);               // Output -> 147852


//* Explanation:
// 1. Primitive properties (like numbers, strings, booleans) are copied by value (not by reference). 
// So, changing the value of "age" in "shallowCopy" does not affect the "original" object.

// 2. Non-primitive types (like objects and arrays) are copied by reference. 
// When we modify "shallowCopy.address.pin", it also modifies "original.address.pin" because both objects point to the same reference in memory.


//* ****************************************************

//* 2. Deep Copy: 
// A deep copy creates a new object and also recursively copies all the properties and values from the original object, including any nested objects or arrays.
// This means that nested objects and arrays are completely cloned, not just their references.
// Any changes made to the copied object (including nested structures) will not affect the original object.


//* In simple terms:
// 1. A new object is created.
// 2. All properties, including nested objects and arrays, are recursively copied by value.
// 3. Changes to any part of the copied object do not affect the original.


//* Example:
let originalObj = {
    fullname : "Suraj Adhikari",
    age : 25,
    address : {
        country : "Nepal",
        city : "Pokhara",
        pin : 12345
    }
};

let deepCopy = structuredClone(originalObj);        // Using structuredClone() to create a deep copy

deepCopy.age = 27;                                  // Modify the top-level property in deepCopy
deepCopy.address.city = "Kathmandu";                // Modify the nested object in deepCopy

console.log(originalObj.age);                       // Output -> 25
console.log(deepCopy.age);                          // Output -> 27

console.log(originalObj.address.city);              // Output -> Pokhara
console.log(deepCopy.address.city);                 // Output -> Kathmandu


//* Explanation:
// Modifying "deepCopy.age" and "deepCopy.address.city" does not affect the "original.age" and "original.address.city", 
// because they are completely separate. Any changes to "deepCopy" will not affect "original".


//* *****************************************************

//* Key Differences Between Shallow Copy and Deep Copy :
/*
    ¦==============================================================================================================================================¦ 
    ¦          Aspect        ¦                  Shallow Copy                    ¦                              Deep Copy                           ¦
    ¦==============================================================================================================================================¦ 
    ¦   Copy Type	         ¦   Only the top-level properties are copied.	    ¦    All properties (including nested objects/arrays) are copied.  ¦
    ¦   Nested Objects       ¦   Nested objects are copied by reference.	    ¦    Nested objects are fully copied, no reference sharing.        ¦
    ¦   Modification impact  ¦   Changes in nested objects affect both copies.	¦    Changes to nested objects do not affect the original.         ¦
    ¦----------------------------------------------------------------------------------------------------------------------------------------------¦
*/