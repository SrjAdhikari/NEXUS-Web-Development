//* ****************************************************
//* Type Inference In TypeScript
//* ****************************************************


//* What is TypeScript Type Inference ?
    // Type inference is a feature of TypeScript where the compiler automatically determines,
    // the type of a variable, function, or expression without the need for explicit type annotations.
    // In other words, TypeScript can "guess" the type based on the value or the context where the variable or function is used.


//* ****************************************************
//* How TypeScript Type Inference Works ?
//* ****************************************************

//* 1. Variable Initialization: 
    // When you assign a value to a variable, TypeScript infers its type based on the assigned value.

    //* Examples:
    // 1.
        let user_name = "Suraj";                            // TypeScript infers the type as string
        let user_age = 25;                                  // TypeScript infers the type as number

        // If you try to assign a value of a different type later, TypeScript will show an error:
        // user_name = 25;                                  // Error: Type 'number' is not assignable to type 'string'


    // 2.
        let isActive = true;                                // TypeScript infers the type as boolean
        isActive = false;                                   // Valid
        // isActive = "yes";                                // Error: Type 'string' is not assignable to type 'boolean'.


//* 2. Function Return Types: 
    // TypeScript infers the return type of a function based on the return statement.

    //* Example:
    function add (a:number, b:number) {
        return a + b;                                       // TypeScript infers the return type as number
    }

    const result = add(2, 3);                               // TypeScript infers 'result' as number


//* 3. Array Element Types: 
    // TypeScript infers the type of an array based on the elements in the array.

    //* Examples:
    // 1.
        let numbers = [1, 2, 3, 4, 5];                      // TypeScript infers the type as "number[]"


    // 2.
        let fruits = ["apple", "banana", "cherry"];         // TypeScript infers the type as string[]
        fruits.push("orange");                              // Valid
        // fruits.push(123);                                // Error: Argument of type 'number' is not assignable to parameter of type 'string'.


//* 4. Object Property Types:
    // TypeScript infers the type of an object based on the properties in the object.

    //* Example:
    let person = {
        name: "John",
        age: 30,
    };                                                      // TypeScript infers the type as { name: string; age: number; }


//* ****************************************************

//* Key Points:
    // TypeScript infers types based on the assigned values or the context in which they are used.
    // Type inference works for variables, function return types, arrays, and even events.