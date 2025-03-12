//* ****************************************************
//* 📌 Basic Express Server Setup
//* ****************************************************

    // import the express module
    const express = require("express");

    // Create an instance of an Express application
    const app = express();

    // Set up a middleware function that handles ALL incoming requests
    // - 'request' contains information about the HTTP request
    // - 'response' is used to send back the HTTP response
    app.use((request, response) => {
        // Send a simple text response to the client
        response.send("Hello, I am a server Created using Express!");
    })

    // Start the server on port 4000
    // - The callback function runs once the server starts successfully
    app.listen(4000, () => {
        console.log("Server running at http://localhost:4000");
    });


//* ****************************************************
//* 📌 Handling Different Routes
//* ****************************************************

    // Create a second Express application instance
    const app1 = express();

    // Define route for "/services" path
    // - When a request is made to "/services", this middleware executes
    app1.use("/services", (req, res) => {
        res.send("Welcome to Services Page");
    })
    
    // Define route for "/about" path
    // - Handles requests specifically to "/about"
    app1.use("/about", (req, res) => {
        res.send("Welcome to About Page");
    })
    
    // Define route for "/contact" path
    // - Handles requests specifically to "/contact"
    app1.use("/contact", (req, res) => {
        res.send("Welcome to Contact Page");
    })
    
    // Define route for root path "/"
    // - This acts as the home page or default route
    app1.use("/", (req, res) => {
        res.send("Welcome to Home Page");
    })

    // Start the second server on port 5000
    app1.listen(5000, () => {
        console.log("Server running at http://localhost:5000");
    })


//* ****************************************************
//* 📌 Why is the root route defined last in the above code?
//* 📌 Why the Order Matters with app.use()?
//* ****************************************************

    // When using "app.use()" in Express.js, the order of middleware and route definitions is significant 
    // because Express processes requests sequentially (from top to bottom).

    //* Root Path ("/") Behavior:
        // The root path "/" is a prefix match for all routes. Every URL starts with "/", so if you define app.use("/") first, 
        // it will catch every incoming request (e.g., /services, /about, /contact) before they reach the more specific routes.

        // With "app.use()", it doesn't require an exact match—it applies to the specified path 
        // and all subpaths unless overridden by a more specific handler later.


    //* By placing "/" last, as in the original code:
        // Express checks the more specific routes ("/services", "/about", "/contact") first.
        // If the request matches one of those (e.g., "/services"), the corresponding handler executes.
        // If no specific route matches, it falls back to the root path ("/") as a default or "catch-all" route.


    //* Alternative: Using "app.get()" for Exact Matches
        // If you use "app.get()" instead of "app.use()", 
        // the behavior changes slightly because "app.get()" matches exact paths by default (not prefixes).