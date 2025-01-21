//* ****************************************************
//* Data Types In TypeScript
//* ****************************************************


//* TypeScript Data Types:
// 1. Primitive Data Types (Built-in Types):
    // Number: represents numeric values.
    // String: represents a sequence of characters.
    // Boolean: represents a logical value (true or false).
    // Null: represents the absence of a value.
    // Undefined: represents the absence of a value.
    // Symbol: represents a unique identifier.
    // Void: represents the absence of a value.    
    // Any: represents any value, including null and undefined.
    // Never: represents a value that never occurs.
    // unknown: represents a value whose type is unknown.

// 2. Custom Data Types (User-Defined Types):
    // Array: represents a collection of values.
    // Tuple: represents an array with a fixed number of elements of different known types.
    // Object: represents a collection of key-value pairs.
    // Function: represents a block of code that can be executed.
    // Class: represents a blueprint for creating objects.
    // Interface: represents a contract for objects.
    // Enum: represents a set of named constants,  often used for meaningful identifiers.


//* ****************************************************

//* Examples:
// 1. The number data type (int/float)
    // integer number
    let num1 : number = 83;

    // floating point number
    let num2 : number = 3.14;

    console.log("int:", num1);
    console.log("float:", num2);


// 2. The boolean data type
    let auth : boolean = false;

    // if auth = false / 0
    if (!auth) {
        console.log("Sorry, you are not allowed in the member area");
    } 
    else {
        console.log("Welcome to the member area");
    }

    //* TIP:  
    // If you come from another programming language like C#, 
    // please remember that in TypeScript we write the full word and not just bool.


// 3. The string data type
    // double quotes
    let msg1 : string = "Hello there"

    // single quotes
    let msg2 : string = 'Konnichiwa'

    console.log(`English Greeting: ${msg1}`)
    console.log(`Japanese Greeting: ${msg2}`)


// 4. The void data type
    // Used for functions that do not return a value.
    function sayHello() : void {
        console.log("Hello");
    }


// 5. The null data type
    // The null type is used to represent the intentional absence of a value.
    let nothing: null = null;


// 6. The undefined data type
    // When we declare empty variables, the undefined type is assigned to them until we assign a value to them.
    let numb: number;
    let notDefined: undefined = undefined;


// 7. The any data type
    // The any type is used to represent a value of any datatype.
    let anyValue: any = 42;
    anyValue = "Hello";
    anyValue = true;

    // Another example of using the any type
    let anyData;
    anyData = true;


// 8. The never data type
    // The never type is used to represent a value that will never occur.
    // Usually used for functions that throw errors or have infinite loops.
    function throwError() : never {
        throw new Error("Something went wrong");
    }


// 9. The unknown data type
    // Similar to any, but safer as it requires type checking before performing operations.
    let input: unknown = "Hello";
    if (typeof input === "string") {
        console.log(input.toUpperCase());
    }