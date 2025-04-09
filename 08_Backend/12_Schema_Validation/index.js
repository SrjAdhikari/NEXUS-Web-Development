// Import Express framework using ES Module syntax
import express from "express";

// Create an Express application instance
const app = express();

// Import database connection function
import connectDB from "./database/db.js";

// Import User model for database operations
import User from "./model/user.js";

// Middleware to parse incoming JSON requests
app.use(express.json());


//* ============================
//* 🚀 Routes
//* ============================

// ✅ POST endpoint for user registration
app.post("/user/register", async(req, res) => {
    try {
        // Create new user with data from request body
        await User.create(req.body);
        res.status(201).send("User registered successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
});


// 🔍 GET endpoint to retrieve all users
app.get("/user/info", async(req, res) => {
    try {
        // Find all users in the collection (no filter) and return them
        const allusers = await User.find({});
        res.send(allusers);
    } catch (error) {
        res.status(400).send(error.message);
    }
});


// 🔍 GET endpoint to retrieve a specific user by ID
app.get("/user/:id", async (req, res) => {
    try {
        // Extract user ID from route parameter
        const id = req.params.id;

        // Find user by ID in the database and return it
        const specificUser = await User.findById(id);
        res.send(specificUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
});


// ❌ DELETE endpoint to remove a user by ID
app.delete("/user/:id", async (req, res) => {
    try {
        // Extract user ID from route parameter
        const id = req.params.id;

        // Find and delete user by ID in the database
        await User.findByIdAndDelete(id);
        res.send("User deleted successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
});


// ✏️ PATCH endpoint to update user information
app.patch("/user/update", async (req, res) => {
    try {
        // Destructure _id and remaining update data from request body
        const { _id, ...updateInfo} = req.body;

        // Update user by ID with new data
        // runValidators ensures schema validation is applied
        await User.findByIdAndUpdate(_id, updateInfo, {"runValidators": true});
        res.send("User updated successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
});


//* ============================
//* 🚀 START SERVER
//* ============================

// Async function to start the application
async function startApp() {
    try {
        // Connect to the database and start the server
        await connectDB();
        console.log("Database connected successfully");

        // Start server only after successful DB connection
        app.listen(3000, () => console.log("Server running at http://localhost:3000"));
    } catch (error) {
        // Log database connection errors
        console.error(`Database connection error: ${error.message}`);

        // Exit the process with failure code
        process.exit(1);
    }
};

startApp();