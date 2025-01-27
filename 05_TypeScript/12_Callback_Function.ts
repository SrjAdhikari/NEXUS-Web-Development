//* ****************************************************
//* Callback Functions In TypeScript
//* ****************************************************


// A callback function is a function that is passed as an argument to another (parent) function and is executed inside the parent function.
// It allows us to pass a function as a parameter to another function and execute it later.
// Callback functions are useful for asynchronous operations and event handling.


//* Syntax:
    // const functionName = (callback: (arg1: type1, arg2: type2) => returnType) => { 
        // Function body
    // }


//* How Callback Functions Work ?
    // A callback function is passed as an argument to another function. 
    // The function receiving the callback usually executes it when a particular event occurs or after completing some operation.

    // The basic structure of a callback in TypeScript:
        function mainFunction(callback: () => void): void {
            // Perform some operations
            // ...

            // Call the passed callback function
            callback();
        };

    //* Explanation:
        // "mainFunction" accepts a callback of type "() => void", which means it takes no parameters and returns nothing.
        // Inside "mainFunction", the callback function is executed using "callback()".


//* Examples:
    // 1. Callback Function with No Parameters
        function greeting1(name: string, callback: () => void): void {
            console.log(`Hello ${name}!`);

            // Execute the callback after greeting
            callback();
        };

        // Callback function
        const farewell = function(): void {
            console.log("Goodbye!");
        };

        // Call the greeting function with a callback function
        greeting1("Suraj", farewell);


    // 2. Callback Function with Parameters
        function calculate(a: number, b: number, callback: (result: number) => void): void {
            const result = a + b;

            // Pass the result to the callback function
            callback(result);
        };

        // Callback function
        const displayResult = (result: number): void => {
            console.log(`The result is: ${result}`);
        };

        // Call the calculate function with a callback function
        calculate(5, 3, displayResult);


    // 3. Callback Function with Multiple Parameters
        function Calculate(
            a: number, 
            b: number, 
            callback: (result: number, operation: string) => void
        ): void {
            const result = a + b;
            callback(result, "addition");
        };

        // Using the callback with multiple parameters
        Calculate(5, 45, (result, operation) => {
            console.log(`The result of ${operation} is: ${result}`);
        });


    // 4. Callback Function with return type
        function operateNumbers(
            a: number, 
            b: number, 
            callback: (x: number, y: number) => number
        ): number {
            return callback(a, b);
        };

        // Passing a callback function with return type
        const Sum = operateNumbers(5, 9, (x, y) => x + y);
        console.log(`The result is: ${Sum}`);