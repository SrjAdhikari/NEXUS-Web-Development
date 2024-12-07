//* ****************************************************
//* Object Destructuring In JavaScript
//* ****************************************************


//* 1. Object Destructuring:
// Object destructuring allows you to extract specific properties from an object into variables using curly braces { }.
// It is used to unpack properties of an object into variables.

// Syntax: const { key1, key2 } = objectName;


//* Example:
const user = {
    firstname: "Suraj",
    lastname: "Adhikari",
    email: "srj123@gmail.com",
    phone: 123456789,
    age: 27,
};

// 1. Using Default Values
const {firstname, age, email, phone} = user;
console.log(firstname);                             // Output -> Suraj
console.log(age);                                   // Output -> 27
console.log(email);                                 // Output -> srj123@gmail.com
console.log(phone);                                 // Output -> 1234567890


// 2. Renaming Variables
const {firstname: userName, email: userEmail, age: userAge} = user;
console.log(userName);                              // Output -> Suraj
console.log(userEmail);                             // Output -> srj123@gmail.com
console.log(userAge);                               // Output -> 27


// 3. Using Rest Operator: The ...rest operator collects the remaining properties into a new object.
const person = {
    name: "Suraj",
    age: 27,
    email: "srj@gmail",
    phone: 1234567890,
    gender: "male",
    id: 1
};

const {id, gender, ...details} = person;
console.log(id);                                    // Output -> 1
console.log(gender);                                // Output -> male
console.log(details);                               // Output -> { name: 'Suraj', age: 27, email: 'srj@gmail', phone: 1234567890 }


//* ****************************************************


//* 2. Nested Object Destructuring:
// Nested destructuring is when you destructure objects that are nested within other objects.

//* Examples:
// 1.
const userInfo = {
    email : "srj@gmail.com",
    contact: 1213456,
    country: "Japan",
    fullName : {
            firstName : "Suraj",
            lastName : "Adhikari"
        }
};

const {fullName: {firstName, lastName}} = userInfo;
console.log(firstName);                             // Output -> Suraj
console.log(lastName);                              // Output -> Adhikari


// 2.
const userDetails = {
    firstName: "Suraj",
    lastName: "Adhikari",
    details: {
        user_age: 25,
        gender: "male",
        country: "Nepal",
        moreDetails: {
            email: "ZGqoN@example.com",
            cnct: 1234567890,
            dob: "01-01-2000",
        }
    }
};

// Destructuring 'user_age' and 'country' from the 'details' object
const {details: {user_age, country}} = userDetails;

// Destructuring 'dob' and 'cnct' from the nested 'moreDetails' object inside 'details'
const {details: {moreDetails: {dob, cnct}}} = userDetails;

console.log(user_age);                              // Output -> 25
console.log(country);                               // Output -> Nepal
console.log(dob);                                   // Output -> 01-01-2000
console.log(cnct);                                  // Output -> 1234567890


//* 3. Mixed Nested Destructuring:
const userInfo2 = {
    country: "Nepal",
    gender: "male",
    details: {
        birthDate: "01-01-2000",
        hobbies: ["coding", "reading", "gaming"],
        gmail: "ZGqoN@example.com",
    }
};

// Destructuring `gmail` and `hobbies` from the nested `details` object
const {details: {gmail, hobbies}} = userInfo2;

// Further destructuring `hobbies` array to extract the first and second elements
const {details: {hobbies: [first, second]}} = userInfo2;

console.log(gmail);                                 // Output -> ZGqoN@example.com
console.log(hobbies);                               // Output -> [ 'coding', 'reading', 'gaming' ]
console.log(first);                                 // Output -> coding
console.log(second);                                // Output -> reading