//* ****************************************************
//* Add Symbol In Object as a key
//* ****************************************************


//* What is Symbol ?
    // A "Symbol" in JavaScript is a "unique" and "immutable" value that can be used as a "key" for object properties.
    // Symbols are created using the "Symbol()" function, and they are often used to create unique identifiers for objects.
    // They are useful when you want to create a new property that is not part of the object's prototype chain.


//* Syntax:
    // 1. 
        const symbolName = Symbol();

    // 2.
        const symbolName1 = Symbol("description");
        // description (Optional): A string that serves as a label for debugging purposes. It doesn’t affect the symbol’s uniqueness.


    // Adding Symbol In Object as a key
    const object = {
        [symbolName]: "symbolValue"
    }


//* ****************************************************
//* Example 1: Basic Usage of Symbols
//* ****************************************************

    // Creating two symbols without a description
    const symbol1 = Symbol();
    const symbol2 = Symbol();

    // Even with no description, symbols are unique
    console.log(symbol1 === symbol2);                       // Output -> false


    // Creating two symbols with a description
    const symbolA = Symbol("key");
    const symbolB = Symbol("key");

    // Symbols with the same description are still unique
    console.log(symbolA === symbolB);                       // Output -> false


//* ****************************************************
//* Example 2: Using Symbols as Object Keys
//* ****************************************************

    // Create a symbol
    const idSymbol = Symbol("id");                          // "id" is an optional description for debugging

    // Create an object with a Symbol as a key
    const User = {
        name: "Suraj",
        age: 27,
        [idSymbol]: 112345                                  // Use the Symbol as a key
    };

    // Access the Symbol key
    console.log(User[idSymbol]);                            // Output -> 112345

    // Check the type of the Symbol
    console.log(typeof idSymbol);                           // Output -> "symbol"

    // Print all keys in the object
    console.log(Object.keys(User));                         // Output -> [ 'name', 'age' ]  -->  (Symbols are not appear in keys)

    // Print all own property symbols
    console.log(Object.getOwnPropertySymbols(User));        // Output -> [ Symbol(id) ]

    // Print all property descriptors (including Symbols)
    console.log(Object.getOwnPropertyDescriptors(User));

    //* Output:
    /*
        name: { value: 'Suraj', writable: true, enumerable: true, configurable: true }
        age: { value: 27, writable: true, enumerable: true, configurable: true }
        [Symbol(id)]: { value: 112345, writable: true, enumerable: true, configurable: true }
    */


//* ****************************************************
//* Example 3: Using Symbols as Object Keys
//* ****************************************************

    // Create a symbol
    const mySymbol = Symbol();
    const mySymbol1 = Symbol();

    // Create an object with Symbols as keys
    const userInfo = {
        name: "Suraj",
        age: 27,
        country : "Japan",
        email : "srj11@gmail.com",

        mySymbol: "value1",                        // Not a correct syntax to add symbol in object as a key.
        [mySymbol1]: "value2",                     // Correct syntax to add symbol in object as a key. Use Square brackets []. -> Imp for interview
    };

    // Access the Symbol keys
    console.log(userInfo.mySymbol);                // Output -> value1
    console.log(typeof userInfo.mySymbol);         // Output -> string

    console.log(userInfo[mySymbol1]);              // Output -> value2
    console.log(typeof [mySymbol1]);               // Output -> object


//* ****************************************************
//* Global Symbol Registry
//* ****************************************************

    // Use "Symbol.for(key)" to create or retrieve a symbol from a global registry. 
    // Symbols created this way are shared across the application if the key matches.

    // Create a symbol with a specific key
    const sym1 = Symbol.for("app.id");
    const sym2 = Symbol.for("app.id");

    // Both sym1 and sym2 are the same symbol
    console.log(sym1 === sym2);                     // Output -> true

    // Use "Symbol.keyFor()" to retrieve the key associated with a symbol from the global registry.
    console.log(Symbol.keyFor(sym1));               // Output -> "app.id"
    console.log(Symbol.keyFor(sym2));               // Output -> "app.id"