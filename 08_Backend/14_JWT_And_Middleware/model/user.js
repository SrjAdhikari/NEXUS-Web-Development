// Import Mongoose library using ES Module syntax
import mongoose from 'mongoose';

// Destructure Schema class from mongoose
const { Schema } = mongoose;


//* ============================
//* 🚀 Schema Validation
//* ============================

// Define userSchema with fields, types, and validation rules
const userSchema = new Schema({
    // First name field with validation rules
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
        minLength: [3, "First name must be at least 3 characters"],
        maxLength: [20, "First name cannot exceed 20 characters"],
        match: [/^[a-zA-Z]+$/, "First name can only contain letters"]
    },

    // Last name field with validation rules
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        trim: true,
        minLength: [3, "Last name must be at least 3 characters"],
        maxLength: [20, "Last name cannot exceed 20 characters"],
        match: [/^[a-zA-Z]+$/, "First name can only contain letters"]
    },

    // Age field with range validation
    age: {
        type: Number,
        min: [10, "Age must be at least 10"],
        max: [100, "Age must be at most 100"]
    },

    // Gender field with restricted values
    gender: {
        type: String,
        enum: {
            values: ["male", "female", "other"],
            message: "Gender must be male, female, or other",
        },
        trim: true
    },

    // Email field with uniqueness constraint
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        unique: true,
        immutable: true
    },

    // Password field with length constraints
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be at least 6 characters"],
        maxLength: [20, "Password cannot exceed 20 characters"]
    },

    // Photo field with default value
    photo: {
        type: String,
        default: "https://example.com/default-photo.jpg",
    },

    // Creation timestamp
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true
    },

    // Last update timestamp
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    // Automatically manages createdAt/updatedAt fields
    timestamps: true
});

// Create a model named "User" based on the schema
const User = mongoose.model("UserDetails", userSchema);

// Export the "User" model as default export
export default User;