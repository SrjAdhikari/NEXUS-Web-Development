import express from "express";
import User from "../model/userModel.js";
import validateRegistration from "../middleware/validateRegistration.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authRouter = express.Router();

// ✅ POST - User Registration with validation and password hashing
authRouter.post("/register", validateRegistration, async (req, res) => {
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
authRouter.post("/login", async (req, res) => {
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
            "Secret123key",
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

export default authRouter;