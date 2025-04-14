// Import required modules using ES Module syntax
import express from "express";
import connectDB from "./database/db.js";
import User from "./model/user.js";
import validateRegistration from "./middleware/validateRegistration.js";
import validateAuthentication from "./middleware/validateAuthentication.js";

import bcrypt from "bcrypt";                    // Password hashing library
import cookieParser from "cookie-parser";       // Middleware for handling cookies
import jwt from "jsonwebtoken";                 // JSON Web Token for authentication

// Create Express app instance
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse cookies from requests
app.use(cookieParser());


//* ============================
//* 🚀 ROUTES WITH VALIDATION
//* ============================


// ✅ POST - User Registration with validation and password hashing
app.post("/user/register", validateRegistration, async (req, res) => {
    try {
        // Hash password with 10 salt rounds before saving it to the database
        req.body.password = await bcrypt.hash(req.body.password, 10);

        // Create new user
        await User.create(req.body);

        // Respond with structured JSON success message
        res.status(201).json({
            status: "success",
            message: "User registered successfully"
        });
    } catch (error) {
        // Handle duplicate email error
        if(error.code === 11000) {
            return res.status(409).json({
                status: "fail",
                message: "Email already exists"
            });
        }

        // Handle other errors (validation, database)
        res.status(400).json({
            status: "fail",
            message: "Error during register: " + error.message
        });
    }
});


// ✅ POST - User Login with JWT token generation
app.post("/login", async (req, res) => {
    try {
        // Destructure login credentials from request body
        const { email, password } = req.body;

        // Validate required fields
        if(!email || !password) {
            return res.status(400).json({
                status: "fail",
                message: "Email and password are required"
            });
        }

        // Find user by email
        const user = await User.findOne({email});

        // Verify user exists and password matches
        if(!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({
                status: "fail",
                message: "Invalid credentials"
            });
        }

        // Generate JWT token with user ID and email
        // Token expires in 2 hours
        const token = jwt.sign(
            { id: user._id, email: user.email },
            "@srj1452",
            { expiresIn: "2h" }
        );

        // Set JWT token as HTTP cookie
        res.cookie(
            "jwt", token, 
            { 
                httpOnly: true, 
                secure: true
            }
        );

        // Respond with success message
        res.status(200).json({
            status: "success",
            message: "Login successful",
            userId: user._id
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Error during login: " + error.message
        });
    }
});


// 🔍 GET - Retrieve all users (protected route)
app.get("/user/info", validateAuthentication, async (req, res) => {
    try {
        // Fetch all users from database
        const allUsers = await User.find({});

        // Send all users
        res.status(200).json({
            status: "success",
            data: { users: allUsers }
        });
    } catch (error) {
        // Catch any errors (JWT verification, database issues)
        res.status(400).json({
            status: "fail",
            message: "Error retrieving users: " + error.message
        });
    }
});


// 🔍 GET - Retrieve authenticated user by JWT payload ID (protected route)
app.get("/user", validateAuthentication, async (req, res) => {
    try {
        // Access the "user" object attached by the "userAuthentication" middleware
        // "req.user" contains the user data fetched during authentication
        res.status(200).json({
            status: "success",
            data: { user: req.user }
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Error retrieving user: " + error.message
        });
    }
});


// ❌ DELETE - User by ID (with validation)
app.delete("/user/:id", validateAuthentication,  async (req, res) => {
    try {
        // Get ID from route parameters
        const id= req.params.id;

        // Find and delete user by ID
        const deletedUser = await User.findByIdAndDelete(id);

        // Check if user was found and deleted
        if(!deletedUser) {
            return res.status(404).json({
                status: "fail",
                message: "User not found"
            });
        }

        // Clear cookie for current user
        res.clearCookie("jwt");

        res.status(200).json({
            status: "success",
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Error deleting user: " + error.message
        });   
    }
});


// ✏️ PATCH - Update User (with validation)
app.patch("/user/update", validateAuthentication, async (req, res) => {
    try {
        // Destructure _id and update data from request body
        const { _id, ...updateinfo } = req.body;
        
        // Update user and return updated document
        // runValidators ensures schema validation is applied
        const updatedUser = await User.findByIdAndUpdate(
            _id, 
            updateinfo, 
            { runValidators: true, new: true }
        );

        // Check if user was found
        if(!updatedUser) {
            return res.status(404).json({
                status: "fail",
                message: "User not found",
            });
        }

        res.status(200).json({
            status: "success",
            message: "User updated successfully"
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Error updating user: " + error.message
        });
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