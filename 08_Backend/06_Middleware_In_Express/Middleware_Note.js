//* ****************************************************
//* 📌 Middleware in Express.js
//* ****************************************************


//* 📌 What is Middleware?
    // Middleware is a function that runs between a request and a response.
    // It can modify the request or response, perform tasks like authentication, logging, or error handling.


//* ****************************************************
//* 📌 How Middleware Works?
//* ****************************************************

    // 1️⃣ Flow:
        // [Request] -> [Middleware 1] -> [Middleware 2]  -> [Route Handler] -> [Response].

    // 2️⃣ Key Parts:
        // Every middleware gets three things:
        // 1. req (request): Info from the client.
        // 2. res (response): Tools to send back a reply.
        // 3. next: A function to pass control to the next middleware or route.

    // 3️⃣ Execution:
        // Middleware functions are executed in the order they are defined.
        // If you call "next()", it moves to the next step; if not, it stops.


//* ****************************************************
//* 📌 Typee of Middleware in Express.js
//* ****************************************************

    // 1️⃣ Built-in Middleware:
        // a. "express.static()"
            // What it does - It serves static files (e.g., images, HTML, CSS, JavaScript) from a specific folder.
            // When to use - When you want to host a website’s files.

            //* Syntax:
                app.use(express.static("public"));

            //* Explanation:
                // "public" is the folder where your static files are located.
                // Express will serve these files directly to the client without going through your server.

            //* Code:
                const express = require("express");
                const app = express();

                // Serve static files from "public" folder
                app.use(express.static("public"));

                // Start the server
                app.listen(3000, () => console.log("Server running at http://localhost:3000"));


        // b. "express.json()"
            // What it does - It parses JSON data from the request body and makes it available in "req.body".
            // When to use - When clients send JSON (like { "name": "Alice" }).

            //* Syntax:
                app.use(express.json());

            //* Code:
                // Middleware to parse JSON data
                app.use(express.json());

                // Route handler
                app.post("/user", (req, res) => {
                    const userName = req.body.name;
                    res.send("Welcome " + userName);
                });


        // c. "express.urlencoded()"
            // What it does - It parses URL-encoded data from the request body and makes it available in "req.body".
            // When to use - When clients send form data (like name=John).

            //* Syntax:
                app.use(express.urlencoded({ extended: true }));

            //* Explanation:
                // extended: true - lets it handle complex data (like nested objects).
                // extended: false - only handles simple data (like strings and numbers).

            //* Code:
                // Middleware to parse URL-encoded data
                app.use(express.urlencoded({ extended: true }));

                // Route handler
                app.get("/form", (req, res) => {
                    res.send(`
                        <form method="POST" action="/form">
                            <input typ="text" name="name">
                            <button type="submit">Submit</button>
                        </form>
                    `);
                });

                app.post("/form", (req, res) => {
                    const userName = req.body.name;
                    res.send(`Hello! ${userName}`);
                });


    // 2️⃣ Custom Middleware:
        // This is where You can write your own middleware to add custom logic.

        //* Syntax:
            app.use((req, res, next) => {
                // Middleware logic goes here
                next();         // Pass control to the next middleware or route
            });

        //* Code:
            // Custom middleware to log request details
            app.use((req, res, next) => {
                console.log(`
                    Method: ${req.method}
                    URL: ${req.url}
                    Headers: ${JSON.stringify(req.headers)}
                `);
                next();
            });

            // Route handler
            app.get("/home", (req, res) => {
                res.send("Welcome to Home Page");
            });

            // Start the server
            app.listen(4000, () => console.log("Server running at http://localhost:4000"));


    // 3️⃣ Error Handling Middleware:
        // This is where You can handle errors that occur during the request-response process.

        //* Syntax:
            app.use((err, req, res, next) => {
                // Error handling logic goes here
                res.status(500).send("Something went wrong!");
            });

        //* Code:
            // Middleware to handle errors
            app.get("/error", (req, res, next) => {
                const error = new Error("Something went wrong!");
                next(error);        // Pass the error to the error-handling middleware
            });

            // Error handling middleware
            app.use((err, req, res, next) => {
                console.error(err.message);
                res.status(500).send('Internal Server Error');
            });


//* ****************************************************
//* 📌 Middleware Order Matters
//* ****************************************************

    // Middleware functions are executed in the order they are defined.
    // If you call "next()", it moves to the next step; if not, it stops.

    //* Example:
        // First middleware
        app.use((req, res, next) => {
            console.log("Middleware 1");
            next();                 // Pass control to the next middleware or route
        });

        // Another middleware
        app.use((req, res, next) => {
            console.log("Middleware 2");
            next();                 // Pass control to the next middleware or route
        });

        // Route handler
        app.get("/", (req, res) => {
            console.log("Route handler");
            res.send("Welcome to Home Page");
        });

        // Output:
            "Middleware 1"
            "Middleware 2"
            "Route handler"

        // If "middleware1" doesn’t call "next()", "middleware2" and the "route" won’t run.
        // Flow: middleware1 -> middleware2 -> route handler