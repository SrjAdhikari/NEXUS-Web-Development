//* ****************************************************
//* Array And Tuples In TypeScript
//* ****************************************************


// Arrays and tuples are used to store collections of data in TypeScript. 
// Both are similar to JavaScript arrays, but TypeScript provides additional type safety and flexibility.


//* ****************************************************
//* Array In TypeScript
//* ****************************************************

    // An array is a collection of elements of the same type. 
    // TypeScript enforces type safety for arrays, ensuring that you only store elements of the specified type.


//* Syntax:
    // 1. Using square brackets (type[]):
        // let array_name: type[] = [element1, element2, element3];


    // 2. Using the Array<type>:
        // let array_name: Array<type> = [element1, element2, element3];


//* Examples:
    // 1. Numeric and String Array
        let numArray: number[] = [1, 2, 3];
        let fruitArray: string[] = ["apple", "banana", "cherry"];


    // 2. Numeric and String Array
        let numArray2: Array<number> = [1, 5, 3];
        let fruitArray2: Array<string> = ["apple", "banana", "cherry"];


    // 3. Mixed Array (string | number)
        let mixArray: (string | number)[] = ["Alice", 25, "Bob", 30];
        let mixArray2: Array<string | number> = ["Suraj", 25, "John", 30];


    // 4. Multi-Dimensional Array
        let multiArray: number[][] = [[1, 2, 3], [4, 5, 6]];
        let multiArray2: Array<Array<number>> = [[1, 2, 3], [4, 5, 6]];


//* Array Operations in TypeScript
    // We can use common array methods like push(), pop(), shift(), map(), etc., 
    // just like in JavaScript, but TypeScript will enforce type safety.


//* ****************************************************
//* Tuple In TypeScript
//* ****************************************************

    // A tuple is a fixed-length array where the type of each element is predefined.
    // Unlike arrays, tuples can hold elements of different types, and their order matters.
    // You can’t add more elements than those declared in the tuple type.


//* Syntax:
    // let tuple_name: [type1, type2, ...] = [element1, element2, ...];


//* Examples:
    // 1. Tuples with 2 elements: String and Number
        let userData: [string, number] = ["Suraj", 25];

        // Accessing tuple elements
        console.log("Name:", userData[0]);
        console.log("Age:", userData[1]);

        // Error: Assigning values of wrong types (wrong order)
        // person = [30, "Alice"];          // Error: Type 'number' is not assignable to type 'string'.

        // Error: Wrong number of elements
        // person = ["Alice"];              // Error: Source has 1 element(s) but target requires 2.
    
    
    // 2. Tuples with 3 elements: String, Number, and Boolean
        let userInfo: [string, number, boolean] = ["Suraj", 25, true];


//* ****************************************************
//* Key Points About Tuples
//* ****************************************************

    // 1. Fixed Length: The number of elements in a tuple must be fixed.
    // 2. Mixed Types: Tuples can hold elements of mixed types (e.g., string, number, boolean).
    // 3. Index-based: Like arrays, tuple elements can be accessed via their index.
    // 4. Type Checking: TypeScript ensures that the tuple elements match the types defined in the tuple signature.
    // 5. Order Matters: The order of elements in a tuple matters, and you can't add more elements than those declared in the tuple type.