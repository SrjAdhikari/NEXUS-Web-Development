import express from "express";
import User from "../model/userModel.js";
import validateAuthentication from "../middleware/validateAuthentication.js";

const userInfoRouter = express.Router();

// 🔍 GET - Retrieve all users (protected route)
userInfoRouter.get("/info", validateAuthentication, async (req, res) => {
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
userInfoRouter.get("/", validateAuthentication, async (req, res) => {
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

export default userInfoRouter;