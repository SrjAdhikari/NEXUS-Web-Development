//* ****************************************************
//* Object In JavaScript
//* ****************************************************


//* What is an object ?
// An object in JavaScript is a collection of properties, where each property is a key-value pair. The key (or property name) is a string (or a symbol), and the value can be any type of data, such as a number, string, array, function, or even another object.


//* Key Characteristics of Objects:
// 1. Unordered: Unlike arrays, the properties in an object are unordered. They are accessed using the key (property name) rather than a numeric index.

// 2. Key-Value Pairs: Objects store data as key-value pairs. Keys are also called properties, and the values can be of any data type (strings, numbers, arrays, functions, or even other objects).


//* ****************************************************
//* Object Creation
//* ****************************************************

const user = {};                                    // Creates an empty object using the literal notation
const person = new Object();                        // Creates an empty object using the Object constructor


//* Examples:
// 1: Object Creation Using Object Literal:
const persinInfo = {                                // An object with key-value pairs
    name: "suraj",                                  // Key: "name", stored Value: "suraj"
    age: 27,                                        // Key: "age", stored Value: 27
    gender: "male"                                  // Key: "gender", stored Value: "male"
};
console.log(persinInfo);                            // Output -> { name: 'suraj', age: 27, gender: 'male' }


// 2: Object Creation Using Object Constructor:
const car = new Object();                           // Creates an empty object using the Object constructor
car.maker = "Mercedes-Benz";                        // Key: "maker", stored Value: "Mercedes-Benz"
car.model = "G-class";                              // Key: "model", stored Value: "G-class"
car.year = 2024;                                    // Key: "year", stored Value: 2024

console.log(car);                                   // Output -> { maker: 'Mercedes-Benz', model: 'G-class', year: 2024 }


// 3. Object Creation Using Class Syntax:
class Person {
    constructor(name, age, gender) {
        this.name = name;                           // Key: "name", stored Value: Username
        this.age = age;                             // Key: "age", stored Value: Userage
        this.gender = gender;                       // Key: "gender", stored Value: Usergender
    }
}

const person1 = new Person("suraj", 27, "male");   // Creates an object using the Person class
const person2 = new Person("rohit", 27, "male");   // Creates another object using the Person class

console.log(person1);                               // Output -> Person { name: 'suraj', age: 27, gender: 'male' }
console.log(person2);                               // Output -> Person { name: 'rohit', age: 27, gender: 'male' }


//* ****************************************************
//* Accessing Object Properties
//* ****************************************************

//* 1: Using Dot Notation:
const favCar = {
    maker: "Mercedes-Benz",
    model: "G-class",
    year: 2024,
    color: "Black",
};

//* Accessing Object Properties using Dot Notation
console.log(favCar.maker);                          // Output -> Mercedes-Benz
console.log(favCar.model);                          // Output -> G-class
console.log(favCar.year);                           // Output -> 2024
console.log(favCar.color);                          // Output -> Black


//* 2: Using Bracket Notation:
const dreamCar = {
    "maker": "Mercedes-Benz",
    "model": "G-class",
    "year": 2024,
    "color": "Black",
    "engine": "V8",
    "speed": 300,
    "Seats": 5,
    "Doors": 5
};

//* Accessing Object Properties using Bracket Notation
console.log(dreamCar["maker"]);                     // Output -> Mercedes-Benz
console.log(dreamCar["model"]);                     // Output -> G-class
console.log(dreamCar["color"]);                     // Output -> Black
console.log(dreamCar["engine"]);                    // Output -> V8


//* ****************************************************
//* Always prefer bracket notation over dot notation to access object properties, why?
//* ****************************************************

// 1. If an object property has special characters (like spaces, dashes, etc.) or starts with a number, dot notation won’t work. You must use bracket notation.
//* Example:
const Car = {
    "car-maker": "Mercedes-Benz",                   // property conatains a special character dash
    "car model": "G-class",                         // property conatains a special character space
    "2024Model": true                               // property starts with a number
};


//* Dot notation will not work for these properties as they contain special characters.
// console.log(Car.car-maker);                      // Output -> SyntaxError
// console.log(Car.car model);                      // Output -> SyntaxError
// console.log(Car.2024Model);                      // Output -> SyntaxError


//* Bracket notation will work for these properties.
console.log(Car["car-maker"]);                      // Output -> Mercedes-Benz
console.log(Car["car model"]);                      // Output -> G-class
console.log(Car["2024Model"]);                      // Output -> true


// 2. When you want to dynamically access a property where the property name is stored in a variable, you must use bracket notation.
//* Example:
const UserInfo = {
    name: "Bob",
    age: 25,
    country: "USA"
};
const key = "country";                              // Property name is stored in a variable


//* Bracket notation is used to access the property stored in the variable.
console.log(UserInfo[key]);                         // Output -> "USA"


//* Dot notation wouldn't work because it doesn't recognize the variable's value
// console.log(UserInfo.key);                       // Output: undefined


//* ****************************************************
//* Summary: When to Use Bracket Notation ?
//* ****************************************************

// When property names contain spaces, dashes, or other special characters.
// When property names start with numbers or contain reserved keywords.
// When property names are dynamic (stored in a variable or computed at runtime).