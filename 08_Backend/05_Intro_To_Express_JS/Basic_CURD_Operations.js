//* ****************************************************
//* 📌 Basic CRUD with GET, POST, PUT, DELETE In Express.js
//* ****************************************************

    // GET: Retrieve data from the server.
    // POST: Send data to the server to create a new resource.
    // PUT: Update existing data on the server by replacing it.
    // DELETE: Remove a resource from the server.


//* What it does: A simple server to manage a list of books using different HTTP methods.

    const express = require("express");
    const app = express();

    // Sample data
    let bookStore = [
        { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { id: 2, title: "1984", author: "George Orwell", year: 1949 },
        { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
        { id: 5, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    ];

    // Middleware to parse JSON data into a JavaScript object
    app.use(express.json());

    // Root route
    app.get("/", (req, res) => {
        res.send(`Welcome to the Book Store! Use "/book" to access books.`);
    });

    // GET: Retrieve all books
    app.get("/book", (req, res) => {
        // Send the list of books
        res.json(bookStore);
    });

    // GET: Retrieve a specific book by ID
    app.get("/book/:id", (req, res) => {
        // Find the book by ID
        const book = bookStore.find(book => book.id === parseInt(req.params.id));

        // If the book is not found, return a 404 error
        if (!book) {
            return res.status(404).send("Book not found!");
        }

        // Send the book
        res.json(book);
    });

    // POST: Create a new book
    app.post("/book", (req, res) => {
        // Get the new book data from the request body
        const newBook = req.body;

        // Add the new book to the list
        bookStore.push(newBook);

        // Send a success response
        res.send("Book added successfully!");
    });

    // PUT: Update an existing book
    app.put("/book/:id", (req, res) => {
        // Get the updated book data from the request body
        const updatedBook = req.body;

        // Find the book to update
        const book = bookStore.find(book => book.id === parseInt(req.params.id));

        // If the book is not found, return a 404 error
        if (!book) {
            return res.status(404).send("Book not found!");
        }

        // Update only the fields that are provided
        if (updatedBook.title) book.title = updatedBook.title;
        if (updatedBook.author) book.author = updatedBook.author;
        if (updatedBook.year) book.year = updatedBook.year;

        // Send a success response
        res.send("Book updated successfully!");
    });

    // DELETE: Remove a book
    app.delete("/book/:id", (req, res) => {
        // Find the book to delete
        const deleteBook = bookStore.find(book => book.id === parseInt(req.params.id));

        // If the book is not found, return a 404 error
        if (!deleteBook) {
            return res.status(404).send("Book not found");
        }

        // Remove the book
        bookStore = bookStore.filter(book => book.id !== deleteBook.id);
        
        // Send a success response
        res.send("Book deleted successfully!");
    });

    // Start the server
    app.listen(5000, () => {
        console.log("Server running at http://localhost:5000");
    });