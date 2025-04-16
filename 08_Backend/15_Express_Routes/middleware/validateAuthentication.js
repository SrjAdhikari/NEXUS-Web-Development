import User from "../model/userModel.js";
import jwt from "jsonwebtoken";

const validateAuthentication = async (req, res, next) => {
    try {
        // Check if token exists in cookies
        const token = req.cookies.jwt;
        if(!token) {
            return res.status(401).json({
                status: "fail",
                message: "You are not logged in! Please log in to get access"
            });
        }

        // Verify JWT token using secret key
        const payload = jwt.verify(token, "Secret123key");

        // Check if user associated with token still exists
        // Uses payload.id from JWT to find user by ID
        const user = await User.findById(payload.id);

        // Check if user exists
        if(!user) {
            return res.status(401).json({
                status: "fail",
                message: "User no longer exists."
            });
        }

        // Attach user object to request for use in route handlers
        req.user = user;

        // Proceed to next middleware or route handler
        next();
    } catch (error) {
        // Handle specific JWT errors
        if(error.name === "TokenExpiredError") {
            return res.status(401).json({
                status: "fail",
                message: "Session expired. Please log in again."
            });
        }

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                status: "fail",
                message: "Invalid authentication token."
            });
        }

        // Log only unexpected errors for debugging
        console.error("🔒 Authentication error:", error);

        // Generic authentication failure
        res.status(401).json({
            status: "error",
            message: "Authentication failed. Please try again."
        });
    }
};

// Export middleware as default
export default validateAuthentication;