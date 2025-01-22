//* ****************************************************
//* Object Extends In TypeScript
//* ****************************************************


// In TypeScript, we can use the "extends" keyword to extend an object type from another object type.
// This allows us to reuse properties and methods from one object type in another object type.


//* How "extends" Works with Object Interfaces
    // 1. Inheritance of Properties and Methods:
        // The child interface includes all properties and methods from the parent interface.
        // We can add additional properties or override existing properties (with compatible types).

    // 2. Combining Multiple Interfaces:
        // A child interface can extend multiple parent interfaces.


//* Syntax:
/*
    interface ParentInterface {
        property1: type;
        property2: type;
    }
    
    interface ChildInterface extends ParentInterface {
        property2: type;
        property3: type;
    }
*/


//* Examples:
    // 1. Single Inheritance
        // Parent Interface
        interface Person1 {
            name: string,
            age: number,
        }

        // Child Interface: Employee2
        interface Employee2 extends Person1 {
            employee_id: number,
            employee_department: string,
        }

        // Create an object of type Employee2
        const emp1: Employee2 = {
            name: "Suraj",
            age: 25,
            employee_id: 1,
            employee_department: "IT"
        };

        console.log(emp1);
        console.log(emp1.name);
        console.log(emp1.age);
        console.log(emp1.employee_id);
        console.log(emp1.employee_department);


    // 2. Multiple Inheritance
        // First Interface
        interface Address {
            street: string,
            city: string,
        }

        // Second Interface
        interface Contact {
            email: string,
            phone: string,
        }

        // Child interface: User1
        interface User2 extends Address, Contact {
            name: string,
            age: number,
        }

        // Create an object of type User2
        const user_Info: User2 = {
            street: "123 Main St",
            city: "Metropolis",
            email: "user@example.com",
            phone: "123-456-7890",
            name: "superuser",
            age: 30
        }

        console.log(user_Info);


    // 3. Combining Multiple Interfaces
    interface Engine {
        horsepower: number;
        type: string;
    }
    
    interface Wheels {
        count: number;
        diameter: number;
    }
    
    interface FavCar extends Engine, Wheels {
        brand: string;
        model: string;
    }
    
    const myCar1: FavCar = {
        horsepower: 500,
        type: "diesel",
        count: 4,
        diameter: 18,
        brand: "Mercedes",
        model: "G-Wagon",
    };
    
    console.log(myCar1);