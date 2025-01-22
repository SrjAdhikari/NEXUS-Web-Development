//* ****************************************************
//* Objects In TypeScript
//* ****************************************************


// An object in TypeScript is a non-primitive data type used to store a collection of key-value pairs,
// where keys are strings or symbols, and values can be of any type.
// In TypeScript, you can explicitly define the structure of an object using "type annotations", "interfaces", or "inline types".


//* Syntax:
    // 1. Using inline types:
        // const person: { name: string; age: number; occupation: string } = {
        //     name: "Suraj",
        //     age: 25,
        //     occupation: "Software Engineer",
        // };

    
    // 2. Using the "type" keyword:
        // type Person = {
        //     name: string;
        //     age: number;
        //     occupation: string;
        // };


    // 3. Using the "interface" keyword (Recommended):
        // interface Person {
        //     name: string;
        //     age: number;
        //     occupation: string;
        // }


//* TIPs:
    // Always prefer the "interface" keyword to create an "object" and "class" in TypeScript.
    // It is a reuseable way of defining the structure of an object.
    // We can declare the same interface multiple times and TypeScript will merge them.


//* Examples:
    // 1. using inline types
        const inlineObject: {name: string, age: number, occupation: string, salary: number} = {
            name: "Suraj",
            age: 25,
            occupation: "Software Engineer",
            salary: 50000
        };
        
        console.log(inlineObject);
        console.log(inlineObject.name);
        console.log(inlineObject.salary);


    // 2. using the "type" keyword
        // Defining a type for an object
        type Person = {
            name: String,
            age: number,
            occupation: string,
            salary: number
        };

        // Creating an object using the type
        const typeObject: Person = {
            name: "Suraj",
            age: 25,
            occupation: "Software Engineer",
            salary: 50000
        };

        console.log(typeObject);
        console.log(typeObject.occupation);
        console.log(typeObject.salary);


    // 3. using the "interface" keyword
        // Defining an interface for an object
        interface Employee  {
            name: String,
            age: number,
            occupation: string,
            salary: number
        };

        // Creating an object using the interface
        const interfaceObject: Employee = {
            name: "Suraj",
            age: 25,
            occupation: "Software Engineer",
            salary: 50000
        };

        console.log(interfaceObject);
        console.log(interfaceObject["name"]);
        console.log(interfaceObject["occupation"]);


//* ****************************************************
//* Optional Properties in Objects
//* ****************************************************

    // We can define optional properties in an object by adding a question mark (?) after the property name.
    // This indicates that the property is optional and can be missing from the object.
    // If the property is missing, the value will be set to undefined.


//* Example:
    // Defining an interface for an object with an optional property
    interface Product {
        name: string,
        price: number,
        id: string,
        description?: string                // Optional property
    };

    // Creating an object using the interface
    const product: Product = {
        name: "Laptop",
        price: 50000,
        id: "1234"
    };

    console.log(product);
    console.log(product.description);       // Output -> undefined


//* ****************************************************
//* Readonly Properties in Objects
//* ****************************************************

    // We can define readonly properties in an object by adding the readonly keyword before the property name.
    // This indicates that the property is readonly and cannot be modified after initialization.
    // Readonly properties are useful when you want to ensure that a property is not accidentally modified.


//* Example:
    // Defining an interface for an object with a readonly property
    interface UserInfo {
        name: string,
        age: number,
        readonly city: string,                  // Readonly property
    };

    // Creating an object using the interface
    const userDetails: UserInfo = {
        name: "Suraj",
        age: 25,
        city: "Pokhara"
    };

    // Trying to modify the readonly property
    // userDetails.city = "Kathmandu";          // Error: Cannot assign to 'city' because it is a read-only property