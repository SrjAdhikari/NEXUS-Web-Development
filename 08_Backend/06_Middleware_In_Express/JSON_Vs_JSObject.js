//* ****************************************************
//* 📌 JSON Vs JavaScript Object
//* ****************************************************


//* 📌 JSON (JavaScript Object Notation)
    // Written as text (a string).
    // Uses key-value pairs inside curly braces "{}".
    // Keys are always strings in double quotes "key".
    // Values can be: strings ("hello"), numbers (42), booleans (true), arrays ([1, 2, 3]), or nested objects ({}).
    // No functions or undefined values allowed.
    // Does not support comments, but can have whitespace and newlines.


    //* Example:
        /*{
            "name": "Alice",
            "age": 25,
            "isStudent": true,
            "hobbies": ["reading", "gaming"],
            "address": {
                "street": "123 Main St",
                "city": "New York",
                "state": "NY"
            }
        }*/


//* 📌 JavaScript Object
    // Written directly in JavaScript code.
    // Keys can be strings (with or without quotes) or variables.
    // Values can be anything: strings, numbers, booleans, arrays, objects, "functions", or even "undefined".
    // Flexible and we can change it while the program runs.
    // Supports comments and can have whitespace and newlines.


    //* Example:
        const person = {
            name: "Alice",          // No quotes on key needed
            age: 25,
            isStudent: true,
            hobbies: ["reading", "gaming"],
            address: {
                street: "123 Main St",
                city: "New York",
                state: "NY"
            },
            greet: function() {     // JSON can’t do this!
                return "Hello!";
            }
        }


//* ****************************************************
//* 📌 Conversion Between JSON and JavaScript Objects
//* ****************************************************

    // 1️⃣ Convert JSON to JavaScript Object
        // Use "JSON.parse()" converts a JSON string into a JavaScript object.

        //* Syntax:
            const jsonObject = JSON.parse(jsonString);

        //* Example:
            // JSON string
            const jsonString = '{"name": "Alice", "age": 25, "isStudent": true}';

            // Convert JSON string to JavaScript object
            const jsonObj = JSON.parse(jsonString);

            // Print the JavaScript object and its type, and its properties
            console.log(jsonObj);               // Output: { name: 'Alice', age: 25, isStudent: true }
            console.log(typeof jsonObj);        // Output: "object"
            console.log(jsonObj.name);          // Output: "Alice"
            console.log(jsonObj.age);           // Output: 25


    // 2️⃣ Convert JavaScript Object to JSON
        // Use "JSON.stringify()" converts a JavaScript object into a JSON string.

        //* Syntax:
            const jsonStr = JSON.stringify(jsonObject);

        //* Example:
            // JavaScript object
            const User = {
                name: "Suraj",
                age: 25,
                isStudent: false,
            };

            // Convert JavaScript object to JSON string
            const json_string = JSON.stringify(User);

            // Print the JSON string and its type
            console.log(json_string);           // Output: '{"name": "Suraj", "age": 25, "isStudent": false}'
            console.log(typeof json_string);    // Output: "string"
            console.log(json_string.name);      // Output: undefined


//* ****************************************************
//* 📌 Key Takeaways
//* ****************************************************

    // JavaScript Objects are used in JavaScript code and can contain functions and complex data types.
    // JSON is a text-based format used for data exchange and cannot contain functions.
    // Use "JSON.stringify()" to convert a JavaScript object to JSON.
    // Use "JSON.parse()" to convert JSON to a JavaScript object.