// Import required modules using ES Module syntax
import express from "express";
import connectDB from "./database/db.js";
import User from "./model/user.js";
import userValidator from "./custom_validator/userValidation.js";
import bcrypt from "bcrypt";

// Create Express app instance
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());


//* ============================
//* 🚀 ROUTES WITH VALIDATION
//* ============================


// ✅ POST - User Registration with validation and password hashing
app.post("/user/register", userValidator, async (req, res) => {
    try {
        // Hash password with 10 salt rounds before saving it to the database
        req.body.password = await bcrypt.hash(req.body.password, 10);

        // Create new user with validated and hashed data
        await User.create(req.body);
        res.status(201).send("User registered successfully");
    } catch (error) {
        // Handle duplicate email error (MongoDB duplicate key)
        if(error.code === 11000) {
            return res.status(409).send("Email already exists");
        }

        // Handle other errors (validation, database)
        res.status(400).send(error.message);
    }
});


// ✅ POST - User Login with basic validation
app.post("/user/login", async (req, res) => {
    try {
        // Destructure login credentials from request body
        const { email, password } = req.body;

        // Check for required fields
        if(!email || !password) {
            return res.status(400).send("Email and Password are required fields.");
        }

        // Find user by email
        const user = await User.findOne({email});
        if(!user) {
            return res.status(404).send("Invalid credentials");
        }

        // Compare provided password with stored hash password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(401).send("Invalid credentials");
        }

        res.status(200).send("Login successful");
    } catch (error) {
        res.status(400).send("Error during login: " + error.message);
    }
});


// 🔍 GET - Retrieve all users
app.get("/user/info", async (req, res) => {
    try {
        // Fetch all users from database
        const allUsers = await User.find({});
        res.send(allUsers);
    } catch (error) {
        res.status(400).send("Error retrieving users: " + error.message);
    }
});


// 🔍 GET - Retrieve a specific user by ID
app.get("/user/:id", async (req, res) => {
    try {
        const id = req.params.id;

        // Find user by MongoDB _id
        const specificUser = await User.findById(id);

        // Check if user exists
        if(!specificUser)
            return res.status(404).send("User not found");
        res.send(specificUser);
    } catch (error) {
        res.status(400).send("Error retrieving user: " + error.message);
    }
});


// ❌ DELETE - User by ID (with validation)
app.delete("/user/:id", async (req, res) => {
    try {
        const id= req.params.id;
        const deletedUser = await User.findByIdAndDelete(id);

        if(!deletedUser) {
            return res.status(404).send("User not found");
        }
        res.status(200).send("User deleted successfully");
    } catch (error) {
        res.status(400).send("Error deleting user: " + error.message);   
    }
});


// ✏️ PATCH - Update User (with validation)
app.patch("/user/update", async (req, res) => {
    try {
        // Destructure _id and update data from request body
        const { _id, ...updateinfo } = req.body;
        
        // Update user and return updated document
        // runValidators ensures schema validation is applied
        const updatedUser = await User.findByIdAndUpdate(_id, updateinfo, { runValidators: true, new: true });

        if(!updatedUser) {
            return res.status(404).send("User not found");
        }
        res.status(200).send("User updated successfully");
    } catch (error) {
        res.status(400).send("Error updating user: " + error.message);
    }
});


//* ============================
//* 🚀 START SERVER
//* ============================

// Async function to initialize app
const startApp = async () => {
    try {
        // Connect to database before starting server
        await connectDB();
        console.log("Database connected successfully");

        // Start server on port 5000
        app.listen(5000, () => 
            console.log("Server running at http://localhost:5000")
        );
    } catch (error) {
        // Handle database connection errors and exit
        console.error(`❌ Database connection error: ${error.message}`);
        process.exit(1);
    }
};

// Start the application
startApp();