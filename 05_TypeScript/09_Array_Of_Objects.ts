//* ****************************************************
//* Array Of Objects In TypeScript
//* ****************************************************


// An array of objects is a collection where each element of the array is an object with a defined structure.
// This allows us to store multiple objects with similar or different properties in a single array. 
// They are similar to JavaScript arrays, but TypeScript provides additional type safety and flexibility.


//* ****************************************************
//* Define an Array of Objects in TypeScript
//* ****************************************************

    // 1. Using the "type" keyword:
        // Defining a type alias for the object structure
        type PersonInfo = {
            name: string;
            age: number;
            city: string;
            occupation: string;
        };

        // Declaring an array of objects with the Person type
        const personDetails: PersonInfo[] = [
            { name: "Suraj", age: 25, city: "Pokhara", occupation: "Software Engineer" },
            { name: "Sushant", age: 30, city: "Kathmandu", occupation: "Web Developer" },
            { name: "Suresh", age: 28, city: "Biratnagar", occupation: "Project Manager" }
        ];

        console.log(personDetails);
        console.log(personDetails[0].name);
        console.log(personDetails[1].city);
        console.log(personDetails[2].occupation);


    // 2. Using the "interface" keyword (Recommended):
        // Defining an interface for the object structure
        interface User_Info {
            name: string;
            age: number;
            country: string;
            member: boolean;
        };

        // Declaring an array of objects with the UserInfo interface
        const userDetail: User_Info[] = [
            { name: "Suraj", age: 25, country: "Nepal", member: true },
            { name: "Sushant", age: 30, country: "Nepal", member: false },
            { name: "Suresh", age: 28, country: "Nepal", member: true }
        ];

        console.log(userDetail);
        console.log(userDetail[0].name);
        console.log(userDetail[1].country);
        console.log(userDetail[2].member);


    // 3. Using Array Constructor:
        // Using the Array constructor to create an array of objects
        const people: Array<{ name: string; age: number; city: string }> = [
            { name: "Alice", age: 25, city: "New York" },
            { name: "Bob", age: 30, city: "Los Angeles" },
            { name: "Charlie", age: 35, city: "Chicago" },
        ];
        
        console.log(people);
        console.log(people[0].name);
        console.log(people[1].city);
        console.log(people[2].age);


//* ****************************************************
//* Example of an Array of Objects with different interfaces
//* ****************************************************

    // Defining first interface
    interface Products {
        name: string;
        id: string;
    };

    // Defining second interface
    interface Info {
        price: number;
        quantity: number;
        description: string;
    };

    // Declaring an array of objects with different interfaces
    const productDetails: (Products | Info)[] = [
        {name: "Laptop", id: "1234"}, 
        {price: 50000, quantity: 10, description: "This is a laptop"},
        {name: "Mobile", id: "5678"}, 
        {price: 30000, quantity: 5, description: "This is a mobile"}
    ];

    console.log(productDetails);