//* ****************************************************
//* Writable, Enumerable, Configurable In JavaScript
//* ****************************************************


//* What is Writable, Enumerable, Configurable?
// Writable, Enumerable, and Configurable are attributes of a JavaScript object that control how the object's properties can be modified or deleted.


//* Writable
// The writable property determines whether the value of a property can be changed or not.
// If writable is set to true, the value of the property can be changed, otherwise it cannot be changed.


//* Enumerable
// The enumerable property determines whether a property is included in the for...in loop or not.
// If enumerable is set to true, the property is included in the for...in loop, otherwise it is not included.


//* Configurable
// The configurable property determines if a property descriptor can be changed and property can be deleted from the object.
// If configurable is set to true, the property descriptor can be modified and property can be deleted, otherwise it can not.


//* ****************************************************
//* Setting Writable, Enumerable, Configurable
//* ****************************************************

// We can define or modify these attributes using the "Object.defineProperty()" or "Object.defineProperties()" method.

//* Syntax:
Object.defineProperty(objectName, propertyName, {
    value: value,                                       // Value of the property
    writable: true | false,
    enumerable: true | false,
    configurable: true | false,
});


//* ****************************************************
//* Understanding Each Attribute
//* ****************************************************

//* 1. Writable
const obj = {};
Object.defineProperty(obj, "name", {
    value: "Suraj",
    writable: false                                     // Now we can't change the value of the property.
});

console.log(obj.name);                                  // Output -> "Suraj"
obj.name = "Srj";                                       // Attempt to change the value of the property
console.log(obj.name);                                  // Output -> "Suraj" (unchanged, because writable is set to false)                  


//* ****************************************************

//* 2. Enumerable
const obj1 = {};
Object.defineProperty(obj1, "name", {
    value: "Srj",
    enumerable: false                                   // Now the property is not included in the for...in loop.
});

obj1.fullName = "Suraj Adhikari";
obj1.age = 27;

for(let key in obj1) {
    console.log(key);                                   // Output -> fullName, age (name is not included, because enumerable is set to false) 
}


//* ****************************************************

//* 3. Configurable
const obj2 = {};
Object.defineProperty(obj2, "fullName", {
    value: "Srj Adhikari",
    configurable: false                                 // Now the property can't be deleted or modified.
});

delete obj2.fullName;                                   // Attempt to delete the property
obj2.fullName = "Suraj Adhikari";                       // Attempt to change the value of the property

console.log(obj2.fullName);                             // Output -> Srj Adhikari (property is neither deleted nor modified, because configurable is set to false)


//* ****************************************************
//* Object.getOwnPropertyDescriptor() Method
//* ****************************************************

// In JavaScript, objects have properties, and these properties have certain characteristics that describe them.
// This method is used to retrieve these characteristics for a specific property on an object.


//* Syntax:
Object.getOwnPropertyDescriptor(objectName, propertyName);

// objectName: The object from which you want to get the property descriptor.
// propertyName: The name of the property whose descriptor you want to get.


//* What Does It Return?
// value: The value associated with the property.
// writable: A boolean indicating if the property value can be changed.
// enumerable: A boolean indicating if the property can be listed in a loop.
// configurable: A boolean indicating if the property can be deleted or modified.


//* Example:
// 1.
const person = {
    name: "Suraj",
    age: 27,
};

// Get the property descriptor for 'age' 
const descriptor = Object.getOwnPropertyDescriptor(person, 'age');

console.log(descriptor);
// Output -> { value: '27', writable: true, enumerable: true, configurable: true }


// 2.
const obj3 = {};
Object.defineProperty(obj3, "name", {
    value: "Suraj",
    writable: true,
    enumerable: true,
    configurable: true,
});

// Get the property descriptor for 'name' 
const getDescriptor = Object.getOwnPropertyDescriptor(person, 'name');

console.log(getDescriptor);
// Output -> { value: 'Suraj', writable: true, enumerable: true, configurable: true }