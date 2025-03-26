//* ****************************************************
//* 📌 Error Handling In Express.js
//* ****************************************************


//* 📌 What is Error Handling ?
    // Error handling is the process of catching and managing errors that occur during the execution of your application. 
    // In Express.js, errors can occur due to:
        // 1️⃣ Invalid user input.
        // 2️⃣ Database issue.
        // 3️⃣ Network problems.
        // 4️⃣ Bugs in your code.

    // Proper error handling ensures that your application:
        // 1️⃣ Doesn’t crash unexpectedly.
        // 2️⃣ Provides meaningful error messages to the client.
        // 3️⃣ Logs errors for debugging.


//* ****************************************************
//* 📌 Types of Errors in Express.js
//* ****************************************************

    // 1️⃣ Synchronous Errors
        // Errors that occur immediately in your code (e.g., throw new Error("Something went wrong")).

    // 2️⃣ Asynchronous Errors
        // Errors that occur in asynchronous code (e.g., database queries, API calls, file reading).

    // 3️⃣ 404 Errors
        // When a route isn’t found (not a crash, but still an “error” for the client).

    // 4️⃣ Client Errors
        // Bad requests from users (e.g., missing data).


//* ****************************************************
//* 📌 Syntax of Error Handling
//* ****************************************************

    // Basic Error-Handling Middleware
        app.use((err, req, res, next) => {
            // Handle the error
            res.status(500).send("Something went wrong!");
        });


        //* Explanation:
            // err: The error object (has details like a message or stack trace).
            // req: The request (same as usual).
            // res: The response (to send a message back).
            // next: Call this to pass the error to another handler (rarely used).


    // Triggering an Error
        // Use "next(err)" in a route or middleware to send the error to the handler.
        app.get("/crash", (req, res, next) => {
            const err = new Error("Oops!");
            next(err);      // Pass to error handler
        });


//* ****************************************************
//* 📌 Error Handling in Express.js
//* ****************************************************

    // 1️⃣ Default Error Handling
        // If we don’t define a custom error handler, Express.js will use its default error handler. 
        // It sends a generic "500 Internal Server Error" response to the client.

        const express = require("express");
        const app = express();

        // Route that throws an error
        app.get("/error", (req, res) => {
            throw new Error("Something went wrong!");
        });

        app.listen(3000, () => console.log("Server running at http://localhost:3000"));


        //* Explanation:
            // The "/error" route throws an error.
            // Express.js catches the error and sends a "500 Internal Server Error" response to the client.


    //* ****************************************************


    // 2️⃣ Synchronous Error with Custom Status
        // Throws an error in a route if a condition fails (e.g., missing query parameter) and 
        // handles it with a custom message and status.

        const express1 = require("express");
        const app1 = express1();

        // Route that checks for a query parameter
        app1.get("/greet", (req, res, next) => {
            // Extract 'name' from query parameters
            const name = req.query.name;

            // Validation: Check if name exists
            if(!name) {
                const err = new Error("Please provide a name in the query!");
                err.status = 400;       // Bad Request status code
                throw err;              // Throw error synchronously (works because Express catches sync errors)
            }

            // If validation passes, send greeting
            res.send(`Hello, ${name}!`);
        });

        // Custom error-handling middleware
        app1.use((err, req, res, next) => {
            // Set status to error's status or default to 500 (Internal Server Error)
            const status = err.status || 500;

            // Use error message or default message
            const message  = err.message || "Something went wrong!";

            // Log the error for debugging
            console.error(`Error: ${message}`);
            
            // Send error response to client
            res.status(status).send(message);
        });

        app1.listen(4000, () => console.log("Server running at http://localhost:4000"));


    //* ****************************************************


    // 3️⃣ Asynchronous Error with File Reading
        // Tries to read a file asynchronously and handles the error if it fails.

        const express2 = require("express");
        const app2 = express2();

        // File system module for file operations
        const fs = require("fs");

        // Route to read a file asynchronously
        app2.get("/read", (req, res, next) => {
            // Asynchronous file read operation
            fs.readFile("missing.txt", "utf-8", (err, data) => {
                if(err) {
                    err.status = 404;       // Set HTTP status to 404 (Not Found)
                    return next(err);       // Pass error to error-handling middleware ( async errors )
                }

                // If file read succeeds, send file contents
                res.send(data);
            });
        });

        // Error-handling middleware
        app2.use((err, req, res, next) => {
            // Set status to error's status or default to 500
            const status = err.status || 500;
    
            // Send error response with message
            res.status(status).send(`Error: ${err.message}`);
        });

        app2.listen(5000, () => console.log("Server running at http://localhost:5000"));


    //* ****************************************************


    // 4️⃣ Multiple Error Handlers with Validation
        // Uses two error handlers—one for client errors (400s) and 
        // one for server errors (500s)—to handle a POST request with validation.

        const express3 = require("express");
        const app3 = express3();

        // Middleware to parse JSON into JavaScript Object
        app3.use(express3.json());

        // Route to add a user
        app3.post("/user", (req, res, next) => {
            const { name, age } = req.body;

            // Validation: Check if name and age are provided
            if(!name || !age) {
                const err = new Error("Name and age are required!");
                err.status = 400;   // Bad Request status code
                return next(err);   // Pass error to error handling middleware, Stops further execution ✅
            }

            // Validation: Check if age is a number
            if(typeof age !== "number") {
                const err = new Error("Age must be a number!");
                err.status = 400;   // Bad Request status code
                return next(err);   // Pass error to error handling middleware, Stops further execution ✅
            }

            // If validations pass, send success response, 201 Created status
            res.status(201).send(`User ${name}, age ${age} created!`);
        });

        // Error handler for client errors (400s)
        app3.use((err, req, res, next) => {
            // Check if this is a client error (status code in 400-499 range)
            if(err.status && err.status < 500)
                res.status(err.status).send(`Client Error: ${err.message}`);
            else
                // If it's not a client error, pass it to the next error handler
                next(err);
        });

        // Error handler for server errors (500s)
        app3.use((err, req, res, next) => {
            console.error(err.stack);           // Full error details
            res.status(500).send("Server Error: Something Broke!");
        });

        app3.listen(6000, () => console.log("Server running at http://localhost:6000"));


    //* ****************************************************


    // 5️⃣ Handling Async Errors with async/await
        // Handle errors in asynchronous code (e.g., database calls).
    
        const express4 = require("express");
        const app4 = express4();

        // async function to fetch user data
        const fetchUser = async (id) => {
            // Validation: Check if id is "123"
            if(id !== "123")
                // Throw error for invalid user ID
                throw new Error("User not found!");
            else
                // Return user data for valid ID
                return { id: "123", name: "Suraj" };
        };

        // Route with async/await error handling
        app4.get('/user/:id', async (req, res, next) => {
            try {
                // Fetch user data
                const user = await fetchUser(req.params.id);

                // If successful, send user data
                res.send(user);
            } catch (err) {
                // If error occurs in fetchUser, pass to error handler
                next(err);
            }
        });

        // Global error handling middleware, Catches all errors passed via next(err)
        app4.use((error, req, res, next) => {
            // Send 404 status with error message
            res.status(404).send(error.message);
        });

        app4.listen(7000, () => console.log("Server running at http://localhost:7000"))
    
    //* ****************************************************