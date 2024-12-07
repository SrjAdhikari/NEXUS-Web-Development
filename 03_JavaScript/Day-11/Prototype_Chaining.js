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


//* ****************************************************
//* Custom Prototype Chaining
//* ****************************************************

//* 1. Using Object.create()
// Define the base object `person` containing shared properties
const person = {
    name: "Suraj",
    age: 27,
    gender: "male"
};

// Create the `student` object and set `person` as its prototype
const student = Object.create(person);
student.faculty = "Computer Science";
student.year = 3;

// Create the `teacher` object and set `person` as its prototype
const teacher = Object.create(person);
teacher.subject = "mathematics";
teacher.experience = 5;
teacher.salary = 500000;

// Access inherited properties from the prototype `person`
console.log(student.age);                           // Output: 27 (inherited from `person`)
console.log(student.gender);                        // Output: male (inherited from `person`)
console.log(teacher.name);                          // Output: Suraj (inherited from `person`)
console.log(teacher.gender);                        // Output: male (inherited from `person`)

// Verify that the prototype of `student` and `teacher` is `person`
console.log(student.__proto__ == person);           // true
console.log(teacher.__proto__ == person);           // true


//* 2. Manually Setting __proto__
// Define the base object `baseAnimal` with shared properties
const baseAnimal = {
    species: "Unknown",
    legs: 4,
    hasTail: true
};

// Define the `dog` object with specific properties
const dog = {
    name: "Buddy",
    bread: "German Shepherd",
}

// Define the `cat` object with specific properties
const cat = {
    name: "Whiskers",
    breed: "Siamese"
};

// Set the prototype of `dog` and `cat` to `baseAnimal`
dog.__proto__ = baseAnimal;
cat.__proto__ = baseAnimal;

// Access inherited properties from `baseAnimal` through `dog` and `cat`
console.log(dog.species);
console.log(dog.legs);
console.log(cat.hasTail);
console.log(cat.name);
console.log(dog.bread);

// Verify that the prototype of `dog` and `cat` is `baseAnimal`
console.log(dog.__proto__ === baseAnimal);          // Output: true (prototype of `dog` is `baseAnimal`)
console.log(cat.__proto__ === baseAnimal);          // Output: true (prototype of `cat` is `baseAnimal`)    