//* ****************************************************
//* Inheritance In TypeScript
//* ****************************************************


// Inheritance is a mechanism that allows the child class to inherit properties and methods from the parent class
// Using the "extends" keyword, a class can inherit properties and methods from another class.

//* The "super()" keyword is used to call the constructor of the parent class.


//* Syntax:
    // class ChildClass extends ParentClass {
        // Properties and methods
    // }


//* Examples:
    // 1.
        // Parent Class
        class Vehicle {
            speed: number;
            feulType: string;

            // Constructor
            constructor(speed: number, feulType: string) {
                this.speed = speed;
                this.feulType = feulType;
            }

            // Methods
            start(): void {
                console.log("Starting the vehicle...");
            }

            stop(): void {
                console.log("Stopping the vehicle...");
            }
        }

        // Child Class: Car
        class Car1 extends Vehicle {
            doors: number;
            color: string;

            // Constructor
            constructor(speed: number, feulType: string, doors: number, color: string) {
                // Call the parent class constructor
                super(speed, feulType);
                this.doors = doors;
                this.color = color;
            }

            // Method
            displayColor(): void {
                console.log(`The color of the car is ${this.color}`);
            }
        }

        // Create an instance of the Car class
        const myCar = new Car1(150, "Diesel", 4, "Black");

        // Access properties and methods of the parent class
        console.log(myCar.speed);            // Output: 150
        myCar.start();                       // Output: Starting the vehicle...
        myCar.stop();                        // Output: Stopping the vehicle...
        myCar.displayColor();                // Output: The color of the car is Black


    // 2.
        // Parent Class
        class Employee {
            employee_name: string;
            id: number;
            department: string;

            // Constructor
            constructor(name: string, id: number, department: string) {
                this.employee_name = name;
                this.id = id;
                this.department = department;
            }

            // Method
            work(): void {
                console.log(`${this.employee_name} is working in ${this.department} department`);
            }
        }

        // Child Class: Manager
        class Manager extends Employee {
            teamSize: number;

            // Constructor
            constructor(name: string, id: number, department: string, teamSize: number) {
                // Call the parent class constructor
                super(name, id, department);
                this.teamSize = teamSize;
            }

            // Method
            conductMeeting(): void {
                console.log(`${this.name} is conducting a meeting.`);
            }
        }

        // Child Class: Developer
        class Developer extends Employee {
            programmingLanguage: string;

            // Constructor
            constructor(name: string, id: number, department: string, programmingLanguage: string) {
                // Call the parent class constructor
                super(name, id, department);
                this.programmingLanguage = programmingLanguage;
            }

            // Method
            writeCode(): void {
                console.log(`${this.name} is writing code in ${this.programmingLanguage}`);
            }
        }

        // Create an instance of the Manager class
        const manager = new Manager("John Doe", 123, "HR", 10);
        manager.work();                     // Output: John Doe is working in HR department
        manager.conductMeeting();           // Output: John Doe is conducting a meeting.
        console.log(`Manager leads a team of ${manager.teamSize} people.`);

        // Create an instance of the Developer class
        const developer = new Developer("Bob", 102, "IT", "C++");
        developer.work();                   // Output: Bob is working in IT department
        developer.writeCode();              // Output: Bob is writing code in C++
        console.log(`${developer.name} codes in ${developer.programmingLanguage}.`);