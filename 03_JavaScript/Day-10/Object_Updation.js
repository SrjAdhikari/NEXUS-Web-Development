//* ****************************************************
//* Object Updation In JavaScript
//* ****************************************************


//* Object Updation:
// Object updation is a process of adding new properties, modifying existing ones, or removing properties in an object.


//* 1: Updating & Adding New Properties:
// syntax: objectName.propertyName = value     => Dot notation
// syntax: objectName["propertyName"] = value  => Bracket notation

const person = {
    name: "suraj",
    age: 27,
    gender: "male",
    email: "srj@gmail.com",
    phone: 1234567890
};

//* Updating existing properties
person.email = "srj@.com";                  // Updating item using dot notation
person["phone"] = 1234567890;               // Updating item using bracket notation


//* Adding new properties
person.hobby = "coding";                    // Adding item using dot notation
person["favColor"] = "black";               // Adding item using bracket notation

console.log(person);
// Output -> {name: "suraj", age: 27, gender: "male", email: "srj@.com", phone: 1234567890, hobby: "coding", favColor: "black"}


//* 2: Removing Properties:
// syntax: delete objectName.propertyName      => Dot notation
// syntax: delete objectName["propertyName"]   => Bracket notation

const car = {
    maker: "Mercedes-Benz",
    model: "G-class",
    year: 2024,
    color: "Black",
    engine: "V8",
    speed: 300,
    Seats: 5,
    Doors: 5,
};

//* Removing existing properties
delete car.speed;                           // Deleting the speed property using dot notation
delete car["Seats"];                        // Deleting the Seats property using bracket notation
delete car.year;                            // Deleting the year property using bracket notation

console.log(car);
// Output -> {maker: "Mercedes-Benz", model: "G-class", color: "Black", engine: "V8", Doors: 5}