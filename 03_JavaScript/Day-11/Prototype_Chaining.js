//* ****************************************************
//* Prototype Chaining In JavaScript
//* ****************************************************


//* What is Prototype Chaining?
// Prototype chaining is a mechanism that allows objects to inherit properties and methods from other objects through the prototype chain.

// Prototype chaining is a key concept in JavaScript and is used to create a hierarchy of objects, where the properties and methods of an object can be inherited from another object.


//* Understanding Prototypes
/* 
    Every JavaScript object has an internal property called "[[Prototype]]". This property points to another object, which is its prototype.
        ● A prototype is essentially a blueprint from which objects can inherit properties and methods.
        ● We can access the prototype of an object using "Object.getPrototypeOf(obj)" or the "__proto__" property (though this is discouraged).
*/


//* Prototype Chain
/*
    If we try to access a property or method on an object, JavaScript first looks for it on that object itself. If it doesn’t find it, it looks at the object’s prototype. This process continues up the chain of prototypes until:
        ● The property or method is found.
        ● The end of the chain is reached (null).
*/


//* Built-in Prototype Chain
// JavaScript's built-in objects, like Array, Function, and Object, have their own prototype chains.

const arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);                         // true

console.log(arr.__proto__.__proto__ === Object.prototype);              // true
//          OR ↓
console.log(Array.prototype.__proto__ === Object.prototype);            // true

console.log(arr.__proto__.__proto__.__proto__);                         // null
//          OR ↓
console.log(Object.prototype.__proto__);                                // null (end of the chain)

console.log(arr.__proto__.__proto__.__proto__ === null);                // true
//          OR ↓
console.log(Object.prototype.__proto__ === null);                       // true

//* The Chain : arr -> Array.prototype -> Object.prototype -> null