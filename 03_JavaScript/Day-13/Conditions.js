//* ****************************************************
//* Conditions In JavaScript
//* ****************************************************


//* What is condition ?
// A condition is an expression that evaluates to either true or false. Conditions are used to control the flow of the program, determining which block of code should be executed based on the truthfulness of the expression.


//* Why conditions are important ?
// Conditions allow you to make decisions in your code, enabling dynamic behavior based on user input, data state, or other factors.


//* ****************************************************
//* If Condition
//* ****************************************************

//* What is If Condition ?
// An if condition in JavaScript is a conditional statement that allows you to execute a block of code if a certain condition is true.


//* Syntax:
// if (condition) {
    // Block of code to execute if the condition is true
// }


//* Examples:
// 1.
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}

// Output -> You are an adult (since age is 20).


// 2.
let num1 = 2;
let num2 = 2;

if(num1 == num2){
    console.log(`Both values are equal`);
}

// Output -> Both values are equal (since num1 & num2 are equal).


// 3.
let num3 = 2;
let num4 = "2";

if(num3 === num4){
    console.log(`Both values are equal`);
}

// Nothing will print because their type is not same (i.e. num3 is a number and num4 is a string).


//* ****************************************************
//* If Else Condition
//* ****************************************************

//* What is If Else Condition ?
// An if-else condition in JavaScript is a conditional statement that allows you to execute different blocks of code based on whether a certain condition is true or false.


//* Syntax:
// if (condition) {
    // Block of code to execute if the condition is true
// } else {
    // Block of code to execute if the condition is false
// }


//* Examples:
// 1. Checking if a person is an adult or not
let currAge = 17;

if (currAge >= 18) {
    console.log("You are an adult.");
} 
else {
    console.log("You are not an adult.");
}

// Output -> You are not an adult (since age is 17).


// 2. Checking if a number is positive or negative
let value = -10;

if (value > 0) {
    console.log(`Value is positive`);
}
else {
    console.log(`Value is negative`);
}

// Output -> Value is negative (since value is -10)


// 3. Checking if a year is a leap year or not
let year = new Date().getFullYear();

if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){ 
    console.log(`The year ${year} is a leap year`);
}
else {
    console.log(`The year ${year} is not a leap year`);
}

// Output -> The year 2024 is a leap year


//* ****************************************************
//* If Else If Condition
//* ****************************************************

//* What is If Else If Condition ?
// An if-else-if condition in JavaScript is a conditional statement that allows you to execute different blocks of code based on multiple conditions.


//* Syntax:
// if (condition1) {
    // Block of code to execute if condition1 is true
// } else if (condition2) {
    // Block of code to execute if condition2 is true
// } else {
    // Block of code to execute if none of the conditions are true
// }


//* Examples:
// 1.
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 80) {
    console.log("Grade: B");
}
else if (score >= 70) {
    console.log("Grade: C");
}
else {
    console.log("Grade: F");
}

// Output -> Grade: B


// 2.
let num = 2;

if (num > 0) {
    console.log("Number is positive");
}
else if (num < 0) {
    console.log("Number is negative");
}
else {
    console.log("Number is zero");
}

// Output -> Number is positive


// 3.
let balance = 1000;

if(balance < 500){
    console.log(`Balance is less than 500`);
}
else if(balance < 750){
    console.log(`Balance is less than 750`);
}
else if(balance < 950){
    console.log(`Balance is less than 950`);
}
else{
    console.log(`Balance is greater than 950`);
}

// Output -> Balance is greater than 950