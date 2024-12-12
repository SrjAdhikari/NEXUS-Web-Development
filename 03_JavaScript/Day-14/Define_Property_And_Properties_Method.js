//* ****************************************************
//* Define Property And Properties Method In JavaScript
//* ****************************************************


//* Object.defineProperty()
// This method is used to define a new property directly on an object, or modify an existing one.
// Allows precise control over property behavior (e.g., whether it can be changed, listed in loops, etc.).
// It takes an object, a property name, and a descriptor object as arguments.


//* Syntax:
// Object.defineProperty(object, propertyName, descriptor);

// object: The object on which you want to define the property.
// propertyName: The name of the property you want to define or modify.
// descriptor: An object that describes configuration for the property.


//* Example:
const person = {};

Object.defineProperty(person, "name", {
    value: "Suraj",
    writable: false,                                        // Cannot be changed
    enumerable: true,                                       // Shows up in loops
    configurable: false                                     // Cannot be deleted or reconfigured
});

console.log(person.name);                                   // Output -> "Suraj"

person.name = "Suraj Adhikari";                             // Cannot be changed because writable is false
console.log(person.name);                                   // Output -> "Suraj"

delete person.name;                                         // Cannot be deleted because configurable is false

for(let key in person) {
    console.log(key);                                       // Output -> name. Shown in loop because enumerable is true
}


//* ****************************************************


//* Object.defineProperties()
// This method is used to define multiple properties at once on an object.
// It takes an object and an object of property descriptors as arguments.


//* Syntax:
// Object.defineProperties(object, properties);

// object: The object on which you want to define the properties.
// properties: An object containing property descriptors for the properties you want to define.


//* Example:
const student = {};

Object.defineProperties(student, {
    name: {
        value: "Suraj",
        writable: true,                                     // Can be changed
        enumerable: true,                                   // Shows up in loops
        configurable: false                                 // Cannot be deleted or reconfigured
    },
    age: {
        value: 27,
        writable: true,                                     // Can be changed
        enumerable: true,                                   // Shows up in loops
        configurable: false                                 // Cannot be deleted or reconfigured
    }
});

console.log(student.name);                                  // Output -> "Suraj"
console.log(student.age);                                   // Output -> 27

student.name = "Suraj Adhikari";                            // Can be changed because writable is true
console.log(student.name);                                  // Output -> "Suraj Adhikari"

student.age = 28;                                           // Can be changed because writable is true
console.log(student.age);                                   // Output -> 28

delete student.name;                                        // Cannot be deleted because configurable is false

for(let key in student) {
    console.log(key);                                       // Output -> name, age. Shown in loop because enumerable is true
}


//* ****************************************************


//* Practical Example
const bankAccount = {};

Object.defineProperties(bankAccount, {
    balance: {
        value: 10000,
        writable: true,
        enumerable: true
    },
    accountNumber: {
        value: 1234567890,
        writable: false,
        enumerable: true
    },
    securityCode: {
        value: 123,
        writable: false,
        enumerable: false
    }
});

console.log(bankAccount.balance);                           // Output -> 10000
console.log(bankAccount.accountNumber);                     // Output -> 1234567890
console.log(bankAccount.securityCode);                      // Output -> 123


// Try to change the "balance" property.
bankAccount.balance = 20000;
console.log(bankAccount.balance);                           // Output -> 20000. Can be changed because writable is true.


// Try to change the "accountNumber" and "securityCode" property.
bankAccount.accountNumber = 9876543210;
bankAccount.securityCode = 456;

console.log(bankAccount.accountNumber);                     // Output -> 1234567890. Cannot be changed because writable is false.
console.log(bankAccount.securityCode);                      // Output -> 123. Cannot be changed because writable is false.


for(let key in bankAccount) {
    console.log(key);                                       // Output -> balance, accountNumber. Shown in loop because enumerable is true.
}                                                           // securityCode not shown in loop because enumerable is false.