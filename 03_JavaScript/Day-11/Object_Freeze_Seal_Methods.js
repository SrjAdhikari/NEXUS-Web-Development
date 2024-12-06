//* ****************************************************
//* Object Freeze And Seal In JavaScript
//* ****************************************************


//* 1. freeze() Method: 
// The freeze() method is used to prevent the modification of an object. 
// Once an object is frozen, it cannot be modified, and any attempt to modify it will result in a TypeError.

// Syntax: Object.freeze(objectName);


//* Characteristics:
// 1. No Addition: Prevents the addition of new properties to the object.
// 2. No Deletion: Prevents the removal of existing properties from the object.
// 3. No Modification: Prevents the modification of existing properties.
// 4. Does not affect nested objects (for deep immutability, you must freeze nested objects manually).


//* Examples:
// 1.
const userInfo = {
    name : "Srj",
    "full name" : "Srj Adhikari",
    age : 20,
    country : "Japan",
    email : "srj11@gmail.com",
}

userInfo.name = "Suraj";                        // Udating "name" property
Object.freeze(userInfo);                        // Freezing the object
userInfo.name = "Suraj Adhikari";               // Attempt to update "name" property after freezing the object. This will result in a TypeError.

console.log(userInfo);                          // Output -> { name: 'Suraj', 'full name': 'Srj Adhikari', age: 20, country: 'Japan', email: 'srj11@gmail.com' }
console.log(userInfo.name);                     // Output -> Suraj => name isn't overwritten from "Suraj" to "Suraj Adhikari", because the object is frozen


// 2.
const person = {
    firstname : "Suraj",
    lastname : "Adhikari",
    country : "Nepal"
};

Object.freeze(person);                         // Freezing the object

person.country = "Nepal";                       // Attempt to update "country" property after freezing the object. This will result in a TypeError.
delete person.lastname;                         // Attempt to delete "lastname" property after freezing the object. This will result in a TypeError.
person.age = 25;                                // Attempt to add a new property "age" after freezing the object. This will result in a TypeError.

console.log(person);                            // Output -> { firstname: 'Suraj', lastname: 'Adhikari', country: 'Nepal' }


//* Explanation:
// Object.freeze() is used to prevent the modification of an object. 
// Once an object is frozen, it cannot be modified, and any attempt to modify it will result in a TypeError.
// The freeze() method is used to prevent the addition, deletion, or modification of properties on an object.


//* Checking Whether an Object is Frozen:
// Syntax: Object.isFrozen(objectName);
// Returns true if the object is frozen, false otherwise.


console.log(Object.isFrozen(person));           // Output -> true
console.log(Object.isSealed(person));           // Output -> true (A frozen object is also a sealed object)


//* ****************************************************

//* 2. seal() Method: 
// The seal() method is used to prevent the addition or deletion of properties on an object.
// Once an object is sealed, we can only modify existing properties.

// Syntax: Object.seal(objectName);


//* Characteristics:
// 1. No Addition: Prevents the addition of new properties to the object.
// 2. No Deletion: Prevents the removal of existing properties from the object.
// 3. Modification: Allows the modification of existing properties.
// 4. Does not affect nested objects.


//* Examples:
// 1.
const car = {
    maker : "Mercedes-Benz",
    model : "G-class",
    color : "Black",
    engine : "V8"
};

car.color = "White";                            // Updating "color" property
Object.seal(car);                               // Sealing the object
car.color = "Silver";                           // Attempt to update "color" property after sealing the object.

console.log(car);                               // Output -> { maker: 'Mercedes-Benz', model: 'G-class', color: 'Silver', engine: 'V8' }
console.log(car.color);                         // Output -> Silver => color is overwritten from "White" to "Silver", because modification is allowed after sealing the object.


// 2.
const car1 = {
    maker : "Mercedes-Benz",
    model : "G-class",
    color : "Black",
    engine : "V8"
};

Object.seal(car1);                              // Sealing the object

car1.color = "White";                           // Attempt to update "color" property. This will work , because modification is allowed after sealing the object.
delete car1.model;                              // Attempt to delete "model" property. This will not work, because deletion is not allowed after sealing the object.
car1.doors = 5;                                 // Attempt to add a new property "doors". This will not work, because addition is not allowed after sealing the object.

console.log(car1);                              // Output -> { maker: 'Mercedes-Benz', model: 'G-class', color: 'White', engine: 'V8' }


//* Checking Whether an Object is Sealed:
// Syntax: Object.isSealed(objectName);
// Returns true if the object is sealed, false otherwise.


console.log(Object.isSealed(car1));             // Output -> true
console.log(Object.isFrozen(car1));             // Output -> false