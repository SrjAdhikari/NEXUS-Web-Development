// Import required modules
import express from "express";                                                      // Web framework for building APIs
import connectToMongoDB from "./database/connectToMongoDB.js";                      // Function to connect to MongoDB
import redisClient from "./database/connectToRedisDB.js";                           // Function to connect to RedisDB
import cookieParser from "cookie-parser";                                           // Middleware to parse cookies
import fixedWindowRateLimiter from "./ratelimiter/fixedWindowRateLimiter.js";
import slidingWindowRateLimiter from "./ratelimiter/slidingWindowRateLimiter.js";

// Import routes
import authRoutes from "./routes/authRoutes.js";                                    // Routes for authentication (/auth/register, /auth/login)
import userInfoRoutes from "./routes/userInfoRoutes.js";                            // Routes for user info (/user/info, /user)
import userManagementRoutes from "./routes/userManagementRoutes.js";                // Routes for user management (/user/:id, /user/update)


// Create Express app instance
const app = express(); 

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse cookies from requests
// Enables access to cookies (e.g., JWT token) via req.cookies
app.use(cookieParser());

// Apply rate limiter
app.use(fixedWindowRateLimiter);

// Alternative of rate limiter
// app.use(slidingWindowRateLimiter);


//* ============================
//* ✅ MOUNT ROUTES
//* ============================

// Mount authentication routes under /auth prefix
// Handles user registration, login and logout
app.use("/auth", authRoutes);

// Mount user info routes under /user prefix
// Handles retrieving user data (protected routes)
app.use("/user", userInfoRoutes);

// Mount user management routes under /user prefix
// Handles user deletion and updates (protected routes)
app.use("/user", userManagementRoutes);


//* ============================
//* 🚀 START SERVER
//* ============================

// Async function to initialize app
const startApp = async () => {
    try {
        // Connect to both Redis and MongoDB simultaneously using Promise.all
        // This ensures both database connections are established before proceeding
        await Promise.all([
            redisClient.connect(),      // Connect to Redis database
            connectToMongoDB()          // Connect to MongoDB database
        ]);
        console.log("Database connected successfully");

        // Start Express server on port 3000
        app.listen(3000, () => 
            console.log(`Server running at http://localhost:3000`)
        );
    } catch (error) {
        // Handle database connection errors and exit
        console.error(`❌ Database connection error: ${error.message}`);

        // Exit the application with error code 1 (indicating failure)
        process.exit(1);
    }
};

// Start the application
startApp();