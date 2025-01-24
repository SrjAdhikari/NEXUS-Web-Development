//* ****************************************************
//* Functions In TypeScript
//* ****************************************************


// A function is a block of reusable code designed to perform a specific task.
// In TypeScript, we can specify the types of function parameters and the return type of the function, 
// making it clear what data types are expected.


//* Syntax:
    // 1. Basic Function Declaration
        // function functionName(parameter1: type1, parameter2: type2): returnType { 
            // Function body
        // }

        function add(a: number, b: number): number {
            return a + b;
        };

        console.log(add(2, 3));


    // 2. Function Expression
        // const functionName = function(parameter1: type1, parameter2: type2): returnType { 
            // Function body
        // }

        const subtract = function(a: number, b: number): number {
            return a - b;
        };

        console.log(subtract(5, 3));


    // 3. Arrow Function
        // const functionName = (parameter1: type1, parameter2: type2): returnType => { 
            // Function body
        // }

        const multiply = (a: number, b: number): number => {
            return a * b;
        };

        console.log(multiply(4, 5));


    // 4. Default Parameters
        // const functionName = (parameter1: type1, parameter2: type2 = defaultValue): returnType => { 
            // Function body
        // }

        function greeting(name: string, age: number = 25): string {
            return `Hello, ${name}! You are ${age} years old.`;
        };

        console.log(greeting("Suraj"));
        console.log(greeting("Sushant", 30));

        // The "age" parameter default value is set to 25.
        // If we don't pass the age parameter, it will use the default value of 25.


    // 5. Optional Parameters
        // const functionName = (parameter1: type1, parameter2?: type2): returnType => { 
            // Function body
        // }

        function printName(name: string, age?: number): string {
            return age ? `Hello, ${name}! You are ${age} years old.` : `Hello, ${name}!`;
        };

        console.log(printName("Suraj"));
        console.log(printName("Alice", 30));

        // The "age" parameter is optional, because of the question mark "?" symbol.


    // 6. Rest Parameters
        // const functionName = (...parameters: type[]): returnType => { 
            // Function body
        // }


        // 1. Sum of numbers with rest parameters using reduce().
        const total = (...num: number[]): number => {
            return num.reduce((acc, curr) => acc + curr, 0);
        };

        console.log(total(1, 2, 3, 4, 5));


        // 2. Sum of numbers with rest parameters using forEach().
        const sum = (...num: number[]): number => {
            let result: number = 0;
            num.forEach(value => result += value);
            return result;
        };

        console.log(sum(1, 2, 3, 4, 5));


//* Example:
    // Function to chech if a number is even or odd
        // Traditional function
        function isEven(num: number): void {
            if(num % 2 === 0)
                console.log(`${num} is even.`);
            else
                console.log(`${num} is odd.`);
        };

        isEven(4);
        isEven(7);


        // Arrow function
        const isOdd = (num: number): void => {
            if(num % 2 === 0)
                console.log(`${num} is even.`);
            else
                console.log(`${num} is odd.`);
        };

        isOdd(5);
        isOdd(12);
        isOdd(-2);