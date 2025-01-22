//* ****************************************************
//* Any And Unknown Data Types In TypeScript
//* ****************************************************


// In TypeScript, both "any" and "unknown" are used for variables whose types are not known at the time of writing. 
// However, they have key differences in how they work and when to use them.


//* Any Data Type
    // The "any" type is a wildcard type that allows any value to be assigned to a variable without any type checking.
    // You can perform any operation on an any type variable without TypeScript throwing an error.


//* Examples:
    // 1.
        let value: any = 10;                        // Initially a number
        value = "Hello";                            // It's fine to change it to a string
        value = [1, 2, 3];                          // It's fine to change it to an array

        // You can perform any operation without type errors
        console.log(value.toUpperCase());           // Runs without error, even if 'value' is not a string


    // 2.
        let data: any = [1, 2, 3];
        data = "Suraj";
        data = true;

        // No type checking
        console.log(data.toFixed());                // No type error, but may cause runtime error if not a number


//* ****************************************************

//* Unknown Data Type
    // The "unknown" type is a type that represents a value whose type is not known at the time of writing.
    // Unlike any, you cannot directly perform operations on an unknown type without first checking its type.
    // You can use type assertions to cast an unknown value to a specific type. It is safer than "any".


//* Examples:
    // 1.
        let value1: unknown;

        value1 = 10;                                // A number
        value1 = "Hello";                           // Now a string
        value1 = [1, 2, 3];                         // Now an array

        // Unsafe operations throw an error:
        // console.log(value.toUpperCase());        // Error: Object is of type 'unknown'.

        // Safe operations with type checking
        if (typeof value1 === "string") {
            console.log(value1.toUpperCase());      // This works because 'value' is checked to be a string
        }

        if (Array.isArray(value1)) {
            console.log(value1.length);             // This works because 'value' is checked to be an array
        }


    // 2.
        let data1: unknown = 42;                    // TypeScript allows any type, but it is of type 'unknown'

        // You can't directly access properties or methods of 'unknown'
        // console.log(data1.toFixed());            // Error: Object is of type 'unknown'.
        
        // You must check the type first
        if (typeof data1 === "number") {
            console.log(data1.toFixed());           // This works because 'data' is now known to be a number
        } 
        else {
            console.log("Data is not a number.");
        }