//* ****************************************************
//* Classes In TypeScript
//* ****************************************************


// In TypeScript, a class is a blueprint for creating objects.
// It encapsulates data (properties) and behavior (methods) in a single entity. 
// The class definition defines the structure and behavior of the object.


//* Basic Structure of a Class:
    /*
        class ClassName {
            Properties:
            property1: dataType;
            property2: dataType;

            Constructor:
            constructor(property1: dataType, property2: dataType) {
                this.property1 = property1;
                this.property2 = property2;
            }

            Methods:
            methodName(parameter1: dataType, parameter2: dataType): returnType {
                Method body
            }
        }
    */


    //* Explanation:
        // Properties: Variables that belong to instances (objects) of the class.
        // Constructor: A special method used to initialize an object when a new instance is created.
        // Methods: Functions defined inside the class to perform actions on the class's data.


//* Examples:
    // 1.
        class Customer {
            customer_name: string;
            customer_age: number;
            customer_gender: string;

            // Constructor
            constructor(name: string, age: number, gender: string) {
                this.customer_name = name;
                this.customer_age = age;
                this.customer_gender = gender;
            };

            // Method
            displayDetails(): void {
                console.log(`Name: ${this.customer_name}`);
                console.log(`Age: ${this.customer_age}`);
                console.log(`Gender: ${this.customer_gender}`);
            }
        }

        const customer1 = new Customer("Suraj", 25, "Male");
        customer1.displayDetails();


    //* Explanation:
        // The Customer class has three properties: name, age and gender.
        // The constructor initializes the properties when a new object is created.
        // The displayDetails method prints the values of the properties.


    // 2. 
        class Employee1 {
            employee_name: string;
            employee_id: number;
            employee_department: string;
            employee_salary: number;

            // Constructor
            constructor(name: string, id: number, department: string, salary: number) {
                this.employee_name = name;
                this.employee_id = id;
                this.employee_department = department;
                this.employee_salary = salary;
            }

            // Method
            displaySalary(): void {
                console.log(`Employee ${this.employee_name} has a salary of ${this.employee_salary}`);
            }
        }

        const employee1 = new Employee1("Suraj", 1, "IT", 50000);
        employee1.displaySalary();


//* ****************************************************
//* Access Modifiers in Classes
//* ****************************************************

    // There are three access modifiers in TypeScript:
        // 1. public: Accessible from anywhere (default modifier).
        // 2. private: Accessible only within the class.
        // 3. protected: Accessible within the class and its subclasses.


//* Example:
    class Car {
        public brand: string;
        private speed: number;
        protected name: string;

        // Constructor
        constructor(brand: string, speed: number, color: string) {
            this.brand = brand;
            this.speed = speed;
            this.name = color;
        }

        // Methods
        displaySpeed(): void {
            console.log(`The speed of the car is ${this.speed}`);
        }

        private increaseSpeed(): void {
            this.speed += 10;
        }

        protected changeName(newName: string): void {
            this.name = newName;
        }
    }

    const car1 = new Car("Mercedes", 200, "G-Wagon");
    console.log(car1.brand);                // Accessible (Output: "Mercedes")
    console.log(car1.displaySpeed());       // Accessible (Output: 200)

    // The following lines will throw an error:
    // console.log(car1.speed);             // Error: Property 'speed' is private can't access from outside.
    // car1.increaseSpeed();                // Error: Method 'increaseSpeed' is private can't access from outside.
    // car1.changeName("C-Class");          // Error: Method 'changeName' is protected can't access from outside.