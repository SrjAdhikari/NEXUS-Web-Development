//* ****************************************************
//* Generics In TypeScript
//* ****************************************************


// Generics in TypeScript provide a way to create reusable, flexible, and type-safe components.
// They allow you to write code that works with different data types while still enforcing type safety.
// Generics act like placeholders for types and can be used in functions, classes, interfaces, and type aliases.
// We can use a type parameter (e.g., T, U) and specify the type later when the component is used.


//* Syntax:
    // 1. Declaring a Generic Function
        function functionName<T>(argument: T): T {
            return argument;
        }


    // 2. Declaring a Generic Class
        class className<T> {
            property1: T;
            property2: T;

            constructor(parameter1: T, parameter2: T) {
                this.property1 = parameter1;
                this.property2 = parameter2;
            }

            method(parameter: T): T {
                return parameter;
            }
        }


    // 3. Declaring a Generic Interface
        interface interfaceName<T> {
            property1: T;
            property2: T;
        }


    // 4. Declaring a Generic Type Alias
        type typeName<T> = {
            property1: T;
            property2: T;
        };


//* Examples:
    // 1. Declaring a Generic Function
        function identify<T>(value: T): T {
            return value;
        }

        // Usage with different data types
        const numberValue = identify<number>(10);
        const stringValue = identify<string>("Suraj");
        const arrayValue = identify<number[]>([1, 2, 3, 4, 5]);


    // 2. Generic Function for Array Operations
        function getFirstElement<T>(arr: T[]): T | string {
            return arr.length > 0 ? arr[0] : "Array is empty";
        }

        console.log(getFirstElement([1, 2, 3, 4, 5]));
        console.log(getFirstElement(["apple", "banana", "cherry"]));
        console.log(getFirstElement([]));


    // 3. Declaring a Generic Interface
        interface Box<T> {
            height: T;
            width: T;
            depth: T;
            weight: T;
        }

        const box: Box<number> = {
            height: 10,
            width: 10,
            depth: 10,
            weight: 10
        }

        console.log(box);


    // 4. Declaring a Generic Class
        class Box1<T> {
            height: T;
            width: T;
            depth: T;
            weight: T;

            constructor(height: T, width: T, depth: T, weight: T) {
                this.height = height;
                this.width = width;
                this.depth = depth;
                this.weight = weight;
            }

            getHeight(): T {
                return this.height;
            }

            getWidth(): T {
                return this.width;
            }
        }

        const box1 = new Box1<number>(10, 20, 30, 40);
        const box2 = new Box1<string>("One", "Two", "Three", "Four");

        console.log(box1);
        console.log(box2);


    // 5. Declaring a Generic Type Alias
        type Device<T> = {
            name: T;
            model: T;
            price: T;
        }

        const laptop: Device<string> = {
            name: "Laptop",
            model: "Dell",
            price: "50000"
        }

        console.log(laptop);


    // 6. Array Sorting Using Generics
        function sorting<T>(array: T[]): T[] {
            return array.sort((a, b) => {
                if(a < b)   return -1;
                if(a > b)   return 1;
                return 0;
            });
        };

        const randomArray = [3, 2, 1, 5, 4];
        const sortedArray = sorting<number>(randomArray);
        console.log(sortedArray);

        const stringArray = ["Watermelon", "Apple", "Orange", "Banana", "Kiwi"];
        const sortedStringArray = sorting<string>(stringArray);
        console.log(sortedStringArray);