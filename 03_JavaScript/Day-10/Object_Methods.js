//* ****************************************************
//* Object Methods In JavaScript
//* ****************************************************


//* 1. keys() Method: 
// Returns an array of all the keys (property names) in an object.
// Syntax: objectName.keys();


//* Example:
const user = {
    name: "Suraj",
    age: 27,
    email: "srj@gmail",
    phone: 1234567890
};

const keys = Object.keys(user);
console.log(keys);                                  // Output -> [ 'name', 'age', 'email', 'phone' ]


//* ****************************************************

//* 2. values() Method: 
// Returns an array of all the values in an object.
// Syntax: objectName.values();


//* Example:
const car = {
    maker: "Mercedes-Benz",
    model: "G-class",
    year: 2024
};

const values = Object.values(car);
console.log(values);                                // Output -> [ 'Mercedes-Benz', 'G-class', 2024 ]


//* ****************************************************

//* 3. entries() Method: 
// Returns an array of all the key-value pairs in an object.
// Syntax: objectName.entries();


//* Example:
const person = {
    name: "Suraj",
    age: 27,
    email: "srj@gmail",
    phone: 1234567890
};

const entries = Object.entries(person);
console.log(entries);                              // Output -> [ [ 'name', 'Suraj' ], [ 'age', 27 ], [ 'email', 'srj@gmail' ], [ 'phone', 1234567890 ] ]


//* ****************************************************

//* 4. assign() Method: 
// Used to copy the values of all enumerable own properties from one or more source objects to a target object.
// This method is commonly used for cloning objects or merging multiple objects into one.

//? Syntax: Object.assign(target, source1, source2, ...);
// target: The object to which properties will be copied.
// source1, source2, ...: One or more source objects whose properties will be copied to the target.


//* Examples:
// 1. Merging Objects
const target = { a: 1, b: 2 };
const source1 = { b: 4, c: 5 };
const source2 = { d: 6 };

Object.assign(target, source1, source2);            // Merging source1 and source2 into target
console.log(`Merged Object:`, target);              // Output -> Merged Object: { a: 1, b: 4, c: 5, d: 6 }

//* ****************************************************

const obj1 = { a: 1, b: 2, c: 5 };
const obj2 = { d: 6, e: 4 };
const mergedObj = Object.assign({}, obj1, obj2);    // Merging obj1 and obj2 into a new object
console.log(`Merged Object:`, mergedObj);           // Output -> Merged Object: { a: 1, b: 2, c: 5, d: 6, e: 4 }


// 2. Cloning an Object
const originalObj = { a: 1, b: 2, c: 3, d: 4 };
const clonedObj = Object.assign({}, originalObj);

console.log(`Original Object:`, originalObj);      // Output -> Original Object: { a: 1, b: 2, c: 3, d: 4 }
console.log(`Cloned Object:`, clonedObj);          // Output -> Cloned Object: { a: 1, b: 2, c: 3, d: 4 }
console.log(originalObj === clonedObj);            // Output -> false


//* ****************************************************

//* 5. Spread Operator(...):
// Alternative to Object.assign(). 
// Used to expand an array or object into individual elements.
// This operator is mostly used instead of Object.assign() when we want to merge multiple objects into one.

// Syntax: [...objectName1, ...objectName2, and so on];


//* Example:
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const object3 = { e: 5, f: 6 };

const expandedObj = { ...object1, ...object2, ...object3 };
console.log(`Expanded Object:`, expandedObj);       // Output -> Expanded Object: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }