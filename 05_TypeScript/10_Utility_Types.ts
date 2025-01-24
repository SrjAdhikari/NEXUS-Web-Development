//* ****************************************************
//* Utility Types In TypeScript
//* ****************************************************


// In TypeScript, there are a variety of utility types that can be used to simplify the code. 
// These utility types are useful when you want to perform operations on a value, 
// but you don't want to change its type. Here are some examples of utility types in TypeScript:


//* ****************************************************
//* 1. Partial Type (Partial<T>)
//* ****************************************************

    // The Partial type is used to make all properties of an object optional.

    //* Example:
        interface User {
            name: string,
            age: number,
            postalCode: number,
            address: string
        };

        // Using Partial to make all properties of User optional
        const patrialUser: Partial<User> = {
            name: "Suraj",
            address: "123 Main St"
        };


    //* Explanation:
        // In the example, the partialUser object only has the name and address property, 
        // and the other properties (age, postalCode) are optional due to Partial<T>.
        // This means that the type of patrialUser is now { name: string, address: string }, 
        // which is a subset of the User interface.


//* ****************************************************
//* 2. Required Type (Required<T>)
//* ****************************************************

    // The Required type is used to make all properties of an object required.
    // Even if they were originally optional properties in the interface.

    //* Example:
        interface User1 {
            name: string,
            age: number,
            country?: string,
            city?: string
        };

        // Using Required to make all properties of User required
        const requiredUser: Required<User1> = {
            name: "Suraj",
            age: 25,
            country: "Nepal",
            city: "Kathmandu"
        };


    //* Explanation:
        // In the example, country and city were originally optional properties in the User1 interface, 
        // but Required<User1> ensures that they are now mandatory properties.


//* ****************************************************
//* 3. Readonly Type (Readonly<T>)
//* ****************************************************

    // The Readonly type is used to make all properties of an object readonly.

    //* Example:
        interface User3 {
            name: string,
            age: number,
            city: string
        };

        // Using Readonly to make all properties of User readonly
        const readonlyUser: Readonly<User3>  = {
            name: "Suraj",
            age: 25,
            city: "Kathmandu"
        };

        // Trying to modify the readonlyUser object
        // readonlyUser.name = "John";                  // Error: Cannot assign to 'name' because it is a read-only property
        // readonlyUser.age = 30;                        // Error: Cannot assign to 'age' because it is a read-only property


//* ****************************************************
//* Summary of Utility Types
//* ****************************************************

    // 1. Partial<T>: 
        // Makes all properties of an object optional.

    // 2. Required<T>: 
        // Makes all properties of an object required.

    // 3. Readonly<T>: 
        // Makes all properties of an object readonly.

    // 4. Pick<T, K>: 
        // Creates a new type by selecting a subset of properties from an object.

    // 5. Omit<T, K>: 
        // Creates a new type by excluding certain properties from an object.

    // 6. Record<K, T>: 
        // Constructs an object with keys of type K and values of type T.

    // 7. Exclude<T, U>: 
        // Excludes types from a union type.

    // 8. Extract<T, U>: 
        // Extracts types that are assignable from a union type.