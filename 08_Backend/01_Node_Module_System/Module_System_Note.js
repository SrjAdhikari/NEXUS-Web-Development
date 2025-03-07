//* ****************************************************
//* 📌 Node And Node Module System
//* ****************************************************


//* 📌 What is Node.js?
    // Node.js is a runtime environment that allows you to run JavaScript outside of a web browser.
    // It’s commonly used for building server-side applications, APIs, and tools.
    // Node.js uses the V8 JavaScript engine (same engine used by Google Chrome) to execute JavaScript code.


    //* Key Features:
        // Non-blocking I/O (asynchronous)
        // Event-driven architecture
        // Single-threaded
        // Cross-platform


//* 📌 What is Module System?
    // The module system in Node.js is a way to organize and reuse code across different files in a project.
    // It allows us to import and export code from one file to another, making it easier to maintain and reuse code.

    // In Node, there are two main ways to work with modules: CommonJS (CJS) and ECMAScript Modules (MJS).


//* ****************************************************
//* 📌 CommonJS Module System (CJS)
//* ****************************************************

    // 1️⃣ The default module system in Node.js.
    // 2️⃣ Syntax:
        // Use "require()" to import modules.
        // Use "module.exports" or "exports" to export modules.
    // 3️⃣ Files using CJS typically have a ".js" extension.


//* 📌 Key Points:
    // 1️⃣ "require()" is synchronous—it loads the file right away when the code runs.
    // 2️⃣ It’s great for server-side code because it’s straightforward and predictable.
    // 3️⃣ You don’t need to specify a file extension (.js is assumed).


//* ****************************************************
//* 📌 Example 1: Exporting Multiple Functions
//* ****************************************************

    // mathUtils.js
        function add(a, b) {
            return a + b;
        }

        function subtract(a, b) {
            return a - b;
        }

        // Export both functions
        module.exports = { add, subtract };


//* ****************************************************

    // calculator.js

        // Import the functions from mathUtils.js
        const utils = require("./mathUtils");

        console.log(utils.add(2, 3));        // Output: 5
        console.log(utils.subtract(5, 2));   // Output: 3


        // OR, we can destructure the object
        // const { add, subtract } = require("./mathUtils");

        // console.log(add(2, 3));        // Output: 5
        // console.log(subtract(5, 2));   // Output: 3


//* ****************************************************
//* 📌 Example 2: A Mini Todo App
//* ****************************************************

    // tasks.js

        // Define an array to store tasks
        const tasks = [];

        // Funtion to add a task
        const addTask = (task) => {
            tasks.push(task);
            return tasks;
        }

        // Function to remove a task
        const removeTask = (task) => {
            tasks.splice(tasks.indexOf(task), 1);
            return tasks;
        }

        // Export the functions
        module.exports = { addTask, removeTask, tasks };


//* ****************************************************

    // main.js

        // Import the functions from tasks.js
        const { addTask, removeTask, tasks } = require('./tasks');

        // Add a task
        addTask("Buy groceries");
        addTask("Clean the house");
        addTask("Cook dinner");

        // Remove a task
        removeTask("Buy groceries");

        // Print the tasks
        console.log(tasks);         // Output: ["Clean the house", "Cook dinner"]


//* ****************************************************
//* 📌 ECMAScript Module System (MJS)
//* ****************************************************

    // 1️⃣ This is the newer module system, based on the official JavaScript standard (ES6+).
    // 2️⃣ Syntax:
        // Use "import" to import modules.
        // Use "export" to export modules.
    // 3️⃣ Files using MJS typically have a ".mjs" extension.


//* 📌 Key Points:
    // 1️⃣ "import" can be asynchronous (e.g., with dynamic imports), which is great for performance.
    // 2️⃣ You must include file extensions (like .mjs or .js) unless configured otherwise.
    // 3️⃣ You need to tell Node you’re using ESM by either:
            // Adding "type": "module" in your "package.json".
            // Using the ".mjs" file extension.


//* ****************************************************
//* 📌 Example 1: Named Exports and Imports
//* ****************************************************

    // stringUtils.mjs
        export function toUpper(str) {
            return str.toUpperCase();
        }

        export function toLower(str) {
            return str.toLowerCase();
        }


//* ****************************************************

    // main.mjs

        // Import the functions from stringUtils.mjs
        import { toUpper, toLower } from './stringUtils.mjs';

        console.log(toUpper("hello"));      // Output: "HELLO"
        console.log(toLower("SURAJ"));      // Output: "suraj"


//* ****************************************************
//* 📌 Example 2: A Mini Todo App
//* ****************************************************

    // tasks.mjs

        // Define an array to store tasks
        export const taskArray = [];

        // Funtion to add a task
        export const addTasks = (task) => {
            taskArray.push(task);
            return taskArray;
        }

        // Function to remove a task
        export const removeTasks = (task) => {
            taskArray.splice(tasks.indexOf(task), 1);
            return taskArray;
        }


//* ****************************************************

    // main.mjs

        // Import the functions from tasks.mjs
        import { addTasks, removeTasks, taskArray } from './tasks.mjs';

        // Add a task
        addTasks("Buy groceries");
        addTasks("Clean the house");
        addTasks("Cook dinner");

        // Remove a task
        removeTasks("Buy groceries");

        // Print the tasks
        console.log(tasks);         // Output: ["Clean the house", "Cook dinner"]


//* ****************************************************
//* 📌 Notes for Later Reference
//* ****************************************************

    // 1️⃣ CJS Quick Start:
        // Use "module.exports" to share code.
        // Use "require("./file")" to grab it.
        // No setup needed in Node.

    // 2️⃣ MJS Quick Start:
        // Use "export" to share code.
        // Use "import" to grab it.
        // Use "type": "module" in your "package.json" or use ".mjs" file extension.

    // 3️⃣ Troubleshooting:
        // Error like "Cannot use import statement outside a module"? Check your "package.json" or switch to ".mjs".
        // Error with "require" in MJS? Switch to "import" or use CJS instead.