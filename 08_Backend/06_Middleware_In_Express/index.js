//* ****************************************************
//* 📌 Middleware In Express.js
//* ****************************************************

    const express = require("express");
    const app = express();

    app.use("/user", (req, res) => {
        console.log("First Output");
        res.send("Welcome to User Page");
        console.log("Second Output");
    },
    (req, res) => {
        console.log("Third Output");
        res.send("Welcome to another User Page");
    });

    app.listen(3000, () => console.log("Server running at http://localhost:3000"));


    //* Console Output:
        // First Output
        // Second Output

    //* Response Sent to Client:
        // Welcome to User Page


//* ****************************************************
//* 📌 Why in above code "Third Output" Doesn’t Show Up?
//* ****************************************************

    // - Because Express.js executes middleware functions in the order they are defined.
    // - The first middleware function calls "res.send()", which ends the request-response process for that request.
    // - Once the response is sent, no further middleware or route handlers are executed for that request.
    // - Therefore, the second middleware function is ignored.

    //* Avoid Sending Multiple Responses for the Same Request:
        // - Sending multiple responses for the same request will result in an error (Error: Can't set headers after they are sent).


//* ****************************************************
//* 📌 How to Fix the above code?
//* ****************************************************

    // - We can use the "next()" function to pass control to the next middleware or route handler.
    // - This allows us to execute the both middleware functions for the same request.

    //* Fixed Code:
        const app1 = express();

        app1.use("/user", (req, res, next) => {
            console.log("First Output");
            console.log("Second Output");
            next();         // Pass control to the next middleware
        },
        (req, res) => {
            console.log("Third Output");
            res.send("Welcome to another User Page");
        });

        app1.listen(4000, () => console.log("Server running at http://localhost:4000"));


    //* Console Output:
        // First Output
        // Second Output
        // Third Output

    //* Response Sent to Client:
        // Welcome to another User Page


//* ****************************************************
//* 📌 Another example of Middleware
//* ****************************************************

    const app2 = express();

    app2.use("/user", (req, res, next) => {
        console.log("First");
        next();         // Pass control to the next middleware
        console.log("Sixth");
    },
    (req, res, next) => {
        console.log("Second");
        next();         // Pass control to the next middleware
        console.log("Fifth");
    },
    (req, res, next) => {
        console.log("Third");
        res.send("Response Sent successfully!");
        console.log("Fourth"); 
    });

    app2.listen(5000, () => console.log("Server running at http://localhost:5000"));


    //* Console Output:
        // First
        // Second
        // Third
        // Fourth
        // Fifth
        // Sixth

    //* Response Sent to Client:
        // Response Sent successfully!


//* ****************************************************
//* 📌 Middleware to log request details
//* ****************************************************

    const app3 = express();

    // Middleware to handle log details of all the request.
    app3.use("/user", (req, res, next) => {
        console.log(`
            Request Time: ${Date.now()}
            Request Method: ${req.method}
            Request URL: ${req.url}
            Request Headers: ${JSON.stringify(req.headers)}
            Request Body: ${JSON.stringify(req.body)}
        `);
        next();         // Pass control to the next middleware
    });

    // Route handlers for GET requests
    app3.get("/user", (req, res) => {
        res.send("This is a GET request");
    });

    // Route handlers for POST requests
    app3.post("/user", (req, res) => {
        res.send("This is a POST request");
    });

    // Route handlers for DELETE requests
    app3.delete("/user", (req, res) => {
        res.send("This is a DELETE request");
    });

    // Start the server
    app3.listen(6000, () => console.log("Server running at http://localhost:6000"));