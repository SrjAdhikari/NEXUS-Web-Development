//* ****************************************************
//* Variables And Constants In TypeScript
//* ****************************************************


//* ****************************************************
//* How to declare a variable in TypeScript ?
//* ****************************************************

//* Syntax:
    // Method 1: With Type Annotation
    // let variableName: dataType;
    // var variableName: dataType;

    // Method 2: Without Type Annotation
    // let variableName;
    // var variableName;


//* Examples:
    // 1. With Type Annotation
        var firstName: string;
        let fullName: string;
        let age: number;

    // 2. Without Type Annotation
        var userName;
        let address;
        let dob;


//* ****************************************************
//* How to initialize a variable in TypeScript ?
//* ****************************************************

//* Syntax:
    // Method 1: With Type Annotation
    // let variableName: dataType = value;
    // var variableName: dataType = value;

    // Method 2: Without Type Annotation
    // let variableName = value;
    // var variableName = value;


//* Examples:
    // 1. With Type Annotation
        var message: string = "Good Morning";
        let username: string = "Suraj Adhikari";

    // 2. Without Type Annotation
        var greet = "Good Afternoon";
        let user = "Suraj Adhikari";


//* ****************************************************
//* How to initialize and use a constant in TypeScript ?
//* ****************************************************

//* Syntax:
    // Method 1: With Type Annotation
    // const constantName: dataType = value;

    // Method 2: Without Type Annotation
    // const constantName = value;


//* Example:
    const PI: number = 3.14;
    const RADIUS = 10;

    // circumference of circle
    let circum = 2 * PI * RADIUS

    // area of circle
    let area = PI * RADIUS * RADIUS

    // print
    console.log(`Circumference: ${circum}`);
    console.log(`Area: ${area}`);


//* ****************************************************

//* TIPS: 
    // The convention for naming constants is all uppercase letters with multiple words separated with underscores.
    // Constants are the same as variables, except their values are immutable, they cannot change during runtime.