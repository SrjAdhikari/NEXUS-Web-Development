//* ****************************************************
//* 📌 HTTP Methods With Express.js
//* ****************************************************


//* 📌 What are HTTP Methods?
    // Definition: HTTP methods are standard "actions" that a client (like a browser or app) tells a server to perform.
    // HTTP (Hypertext Transfer Protocol) is a protocol (language) for transferring data over the internet.


    //* Simple Explanation:
        // Think of HTTP methods as instructions you give to a librarian:
            // "Get me a book" (read something).
            // "Add a new book" (create something).
            // "Update this book’s title" (change something).
            // "Remove that book" (delete something).


//* 📌 Common HTTP Methods:
    // 1️⃣ GET
        // Purpose: Retrieve data from the server.
        // When to Use: When you just want to read something (e.g., a webpage, a list of users).
        // Idempotent (repeatable): Yes (repeating the request has no side effects).
        // Safe?: Yes (does not modify the server’s state).


        //* Syntax In Express:
            app.get("/path", (req, res) => {
                // handle the request
            });


    // 2️⃣ POST
        // Purpose: Send data to the server to create a new resource.
        // When to Use: Submitting a form, adding a new user, or uploading a file.
        // Idempotent (repeatable): No (repeating the request may create multiple resources).
        // Safe?: No (modifies the server’s state).


        //* Syntax In Express:
            app.post("/path", (req, res) => {
                // handle the request
            });


    // 3️⃣ PUT
        // Purpose: Updates existing data on the server by replacing it.
        // When to Use: Editing a profile or updating a blog post.
        // Idempotent (repeatable): Yes (repeating the request has no side effects).
        // Safe?: No (modifies the server’s state).


        //* Syntax In Express:
            app.put("/path", (req, res) => {
                // handle the request
            });


    // 4️⃣ DELETE
        // Purpose: Remove a resource from the server.
        // When to Use: Deleting a user account or a post.
        // Idempotent (repeatable): Yes (repeating the request has no side effects).
        // Safe?: No (modifies the server’s state).


        //* Syntax In Express:
            app.delete("/path", (req, res) => {
                // handle the request
            });


    // 5️⃣ PATCH
        // Purpose: Update an existing resource partially on a server.
        // When to Use: Making small changes, like updating just an email address.
        // Idempotent (repeatable): No (repeating the request may have side effects).
        // Safe?: No (modifies the server’s state).


        //* Syntax In Express:
            app.patch("/path", (req, res) => {
                // handle the request
            });


//* 📌 Other Less Common Ones
    // HEAD: Like GET, but only fetches headers (no body)—used to check metadata.
    // OPTIONS: Asks the server what methods it supports for a resource.
    // TRACE: Echoes back the request (for debugging).


//* 📌 How HTTP Methods Work in Express.js?
    // In Express.js (or plain Node.js with "http"), we use these methods to define routes. 
    // Each route listens for a specific HTTP method and URL, then runs code to handle it.


    //* Syntax In Express:
        app.method("/path", (req, res) => {
            // handle the request
        });


    //* Explanation:
        // method: get, post, put, delete, patch, etc.
        // /path: The URL (e.g., /users, /home, /about).
        // req: Contains information about the HTTP request (e.g., data sent by the client).
        // res: Tools to send back the HTTP response.