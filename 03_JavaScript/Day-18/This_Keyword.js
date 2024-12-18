//* ****************************************************
//* This Keyword In JavaScript
//* ****************************************************


//* What is "this" keyword ?
// The "This" keyword refers to the context in which a function is executed.
// It provides access to the object that is currently calling the function or the surrounding execution context.


//* ****************************************************
//* How "This" keyword works in different context ?
//* ****************************************************


//* The "this" Keyword refers to different objects depending on how it is used:
// In the global scope, "this" refers to the global object.
// In an object method, "this" refers to the object itself (the one owning the method).
// In a regular function, in non-strict mode, "this" refers to the global object.
// In a regular function, in strict mode, "this" refers to undefined.
// In a arrow function, "this" refers to the enclosing scope (lexical this).
// In an event listener, "this" refers to the element that triggered the event.
// Methods like call(), apply(), and bind() can refer "this" to any object.


//* ****************************************************


//* 1. Global Scope
// In the global scope, the value of this depends on whether you are using strict mode or not.

// In the browser environment:
    // Non-strict mode: this refers to the global window object.
    // Strict mode: this refers to undefined.

console.log(this);                              // In non-strict mode: window (global object)
console.log(this);                              // In strict mode: undefined


//* ****************************************************


//* 2. Object Method
// When this is used inside an object, it refers to the object itself (the one owning the method).

const person = {
    name: "Suraj",
    age: 25,
    introduce: function() {
        console.log(this);                      // Refer to the "person" object
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.introduce();

// Output:
// { name: 'Suraj', age: 25, introduce: [Function: introduce] }   
// My name is Suraj and I am 25 years old.


//* ****************************************************


//* 3. Regular Function
// When this is used inside a regular function, it behaves differently based on how the function is called.

// Non-Strict Mode: this refers to the global object (window in browsers).
// Strict Mode: this refers to undefined.

function sayHello() {
    console.log(this);
};

sayHello();

// Output:
// In non-strict mode: window (global object)
// In strict mode: undefined


//* ****************************************************


//* 4. Arrow Function
// Arrow functions do not have their own this. 
// Instead, they inherit this from the surrounding lexical context where the arrow function is defined.

const personInfo = {
	firstname: "suraj",
	lastname: "Adhikari",
	age: 27,
	showInfo: function () {
		// `this` refers to the `person` object
		console.log("Regular function 'this':", this);
		console.log(`Age: ${this.age}`);

		const getFullName = () => {
			// `this` is still refering to the `person` object
			console.log("Arrow function 'this':", this);
			console.log(`Full Name: ${this.firstname} ${this.lastname}`);
		};
		getFullName();
	},
};

personInfo.showInfo();

// Output:
// Regular function 'this': {firstname: "suraj", lastname: "Adhikari", age: 27, showInfo: ƒ}
// Age: 27
// Arrow function 'this': {firstname: "suraj", lastname: "Adhikari", age: 27, showInfo: ƒ}
// Full Name: suraj Adhikari


//* ****************************************************


//* 5. In Class
// When this is used inside a class, it refers to the instance (object) of the class.

class Person {
    constructor(name, age) {
        // 'this' refers to the new object being created
        this.name = name;
        this.age = age;
    }
};

const person1 = new Person("Suraj", 27);
console.log(person1.name);                           // Output -> Suraj
console.log(person1.age);                            // Output -> 27


//* ****************************************************


//* Summary of "this":
// Global Context: Refers to the global object (window in browsers).
// Object Methods: Refers to the object that owns the method.
// Regular Functions: Refers to the global object (or undefined in strict mode).
// Arrow Functions: Inherits this from the surrounding (lexical) context.
// In Class: Refers to the instance (object) of the class.