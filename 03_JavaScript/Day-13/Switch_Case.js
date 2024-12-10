//* ****************************************************
//* Switch Case In JavaScript
//* ****************************************************


//* What is Switch Case ?
// A switch case statement is a control structure that allows you to execute different blocks of code based on different conditions, similar to an if/else statement. 
// It is useful when you need to compare a single expression against multiple potential values.
// Switch cases use strict comparison (===). The values must be of the same type to match.


//* Syntax:
switch(expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    case value3:
        // Code to execute if expression === value3
        break;
    case valueN:
        // Code to execute if expression === valueN
        break;
    default:
        // Code to execute if no cases match
}


//* Examples:
// 1.
// Get the current day of the week.
const day = new Date().getDay();

// Use a switch statement to print the corresponding day of the week.
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

// Output -> Monday


// 2.
let shape = "circle";
let length = 10;
let width = 20;
let radius = 5;
let area;

switch (shape) {
    case "square":
        area = length * length;
        console.log(`The area of the square is: ${area}`);
        break;

    case "rectangle":
        area = length * width;
        console.log(`The area of the rectangle is: ${area}`);
        break;

    case "circle":
        area = Math.PI * radius * radius;
        console.log(`The area of the circle is: ${area}`);
        break;

    default:
        console.log("Invalid shape");
}

// Output -> The area of the circle is: 78.53981633974483


// 3.
let grade = "A";

switch (grade) {
    case "A":
    case "B":
        console.log("Excellent!");  // This will run for both A and B.
        break;
    case "C":
        console.log("Good job.");
        break;
    case "D":
    case "F":
        console.log("You need to improve.");
        break;
    default:
        console.log("Invalid grade.");
}

// Output -> Excellent!

// Here, the case "A" and "B" are combined into a single case.
// Since "B" is grouped with "A" (no break in between), the code under case "B": is executed for both "A" and "B".


// 4.
let x = "0";

switch (x) {
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}

// Output -> No value found

// Here, switch uses strict comparison (===) to match cases.
// The case 0 checks if x === 0, but since x is a string "0" and 0 is a number, they do not match.
// Similarly, case 1 also does not match because x is a string.
// Since no case matches the value of x, the default block executes.