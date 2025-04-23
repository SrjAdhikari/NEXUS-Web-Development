import express from "express";
import User from "../model/userModel.js";
import validateRegistration from "../middleware/validateRegistration.js";           // Registration validation middleware
import validateAuthentication from "../middleware/validateAuthentication.js";       // Authentication middleware

import redisClient from "../database/connectToRedisDB.js";                          // Redis client for token management
import bcrypt from "bcrypt";                                                        // For password hashing
import jwt from "jsonwebtoken";                                                     // For JWT token generation

// Create Express router for authentication routes
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
            { id: user._id, email: user.email },        // Payload data
            "Secret123key",                             // Secret key for signing
            { expiresIn: "2h" }                         // Token expiration
        );

        // Set JWT token as HTTP-only cookie for secure client-side storage
        // httpOnly: true prevents JavaScript access (XSS protection)
        // secure: true ensures cookie is only sent over HTTPS
        res.cookie(
            "jwt", token, 
            { 
                httpOnly: true, 
                secure: true
            }
        );

        // Respond with success message and user ID
        res.status(200).json({
            status: "success",
            message: "Login successfully",
            userId: user._id
        });
    } catch (error) {
        // Handle any errors during login process
        res.status(400).json({
            status: "fail",
            message: "Error during login: " + error.message
        });
    }
});


// ✅ POST - User Logout with JWT token invalidation
authRouter.post("/logout", validateAuthentication, async (req, res)=> {
    try {
        // Get token from cookies
        const { token } = req.cookies;

        // Decode token to get expiration time
        const payload = jwt.decode(token);
        const tokenExpireTime = payload.exp;

        // Store token in Redis blacklist
        await redisClient.set(`token:${token}`, "Blocked");

        // Set Redis key to expire at the same time as the JWT token
        await redisClient.expireAt(`token:${token}`, tokenExpireTime);

        // Alternative: Set fixed expiration (30 minutes = 1800 seconds)
        // await redisClient.expire(`token:${token}`, 1800);

        // Respond with success message
        res.status(200).json({
            status: "success",
            message: "Logout successfully"
        });
    } catch (error) {
        // Handle any errors during logout process
        res.status(400).json({
            status: "fail",
            message: "Error during logout: " + error.message
        });
    }
});

export default authRouter;