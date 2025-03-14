//* ****************************************************
//* 📌 Express.js Guide
//* ****************************************************


//* 📌 What is Express.js?
    // Express.js (or "Express") is a lightweight framework for "Node.js" that makes it easier to build web servers and APIs.
    // It’s like a set of tools that simplifies handling requests, sending responses, and organizing your server code.


//* 📌 How Express.js Works?
    // Express builds on top of Node.js’s "http" module. Here’s the basic flow:
        // Create a Server: Set up a server to listen for requests.
        // Define Routes: Tell the server what to do for each URL (e.g., “/home” shows a homepage).
        // Handle Requests: Process incoming requests and send back responses.

        // It uses Node’s event-driven, non-blocking nature but makes the code more organized and readable.


//* 📌 Key Concepts and Terminology
    // 1️⃣ App: The main Express object you create to build your server.
    // 2️⃣ Routing: Telling Express what to do for different URLs (e.g., "/home" vs. "/about").
    // 3️⃣ HTTP Methods: Actions like "GET" (get data), "POST" (send data), "PUT" (update), "DELETE" (remove).
    // 4️⃣ Middleware: A function that runs between a request and a response.
    // 5️⃣ Request (req): An incoming HTTP request from a client.
    // 6️⃣ Response (res): An outgoing HTTP response sent back to the client.
    // 7️⃣ Port: The number (like 3000) where your server listens.


//* 📌 Basic Syntax
    // 1️⃣ Install Express:
        // You need Node.js installed first.
        // Run "npm install express" to install Express.


    // 2️⃣ Basic Structure:

        // Step 1: Import Express.js
        const express = require("express");

        // Step 2: Create an Express app (server)
        const app = express();

        // Step 3: Define routes and handlers for different URLs.
            //* Syntax: app.method(path, callback)
            // - "method" is the HTTP method (e.g., "get", "post", "put", "delete")
            // - "path" is the URL (e.g.,"/", "/about", " "/home")
            // - "callback" is a function that handles the request

            app.get("/", (req, res) => {
                res.send("Welcome to Express.js!");
            });

        // Step 4: Start the server
        app.listen(3000, () => {
            console.log("Server running at http://localhost:3000");
        });


    //* Explaination:
        // require("express"): Brings Express into your code.
        // express(): Makes a new server app.
        // app.get: Sets up a response for a "GET" request to a URL.
        // res.send: Sends a response to the client.
        // app.listen: Starts the server on a port.