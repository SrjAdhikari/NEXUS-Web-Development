//* ****************************************************
//* Object.keys() Vs For...In Loop In JavaScript
//* ****************************************************


// Create an object
const bank = {
    name: "Bank A",
    location: "New York",
    branch: "Manhattan",
    open: true,
};


// Creating a new object "customer" that inherits from "bank" (prototype chain).
const customer = Object.create(bank);


// Assigning values to the properties of "customer"
customer.name = "Suraj";
customer.age = 27;
customer.account_number = 1234567890;
customer.balance = 10000;


// Get the keys of the "customer" object using Object.keys()
const keys = Object.keys(customer);
console.log(keys);
// Output -> [ 'name', 'age', 'account_number', 'balance' ]


// Get the keys of the "customer" object using for...in loop
for(let key in customer) {
    console.log(key);
}
// Output -> name, age, account_number, balance, location, branch, open


//* Explanation:
// 1. Object.keys(customer);
    // Object.keys() returns an array containing the own enumerable property names of the object.
    // Own properties are those that are directly defined on the object and not inherited from the prototype chain.
    // In this case, the "customer" object has properties "name", "age", "account_number", and "balance".
    // So, it returns an array ["name", "age", "account_number", "balance"].


// 2. For...In Loop
    // The for...in loop iterates over all enumerable properties, including both own and inherited properties.
    // Since the object "customer" inherits from "bank".
    // The loop will iterate over the own properties of "customer" (name, age, account_number, balance) as well as the inherited properties of "bank" (location, branch, open).
    // So, it returns an array ["name", "age", "account_number", "balance", "location", "branch", "open"].


//* Summary:
// Object.keys() is useful when you need only the own properties of an object (ignores properties inherited from the prototype).
// For...In Loop is useful when you need to work with both own and inherited properties.