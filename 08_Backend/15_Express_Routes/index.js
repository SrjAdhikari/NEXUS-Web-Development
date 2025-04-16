// Import required modules
import express from "express";                                          // Web framework for building APIs
import connectDB from "./database/connectDB.js";                        // Function to connect to MongoDB
import cookieParser from "cookie-parser";                               // Middleware to parse cookies

// Import routes
import authRoutes from "./routes/authRoutes.js";                        // Routes for authentication (/auth/register, /auth/login)
import userInfoRoutes from "./routes/userInfoRoutes.js";                // Routes for user info (/user/info, /user)
import userManagementRoutes from "./routes/userManagementRoutes.js";    // Routes for user management (/user/:id, /user/update)


// Create Express app instance
const app = express(); 

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse cookies from requests
// Enables access to cookies (e.g., JWT token) via req.cookies
app.use(cookieParser());


//* ============================
//* ✅ MOUNT ROUTES
//* ============================

// Mount authentication routes under /auth prefix
// Handles user registration and login
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
        // Connect to database before starting server
        await connectDB();
        console.log("Database connected successfully");

        app.listen(3000, () => 
            console.log(`Server running at http://localhost:3000`)
        );
    } catch (error) {
        // Handle database connection errors and exit
        console.error(`❌ Database connection error: ${error.message}`);
        process.exit(1);
    }
};

// Start the application
startApp();