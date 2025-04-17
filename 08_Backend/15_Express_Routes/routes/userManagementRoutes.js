import express from "express";
import User from "../model/userModel.js";
import validateAuthentication from "../middleware/validateAuthentication.js";

const userManagementRouter = express.Router();

// ❌ DELETE - User by ID (with validation)
userManagementRouter.delete("/:id", validateAuthentication,  async (req, res) => {
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
userManagementRouter.patch("/update", validateAuthentication, async (req, res) => {
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

export default userManagementRouter;