// Import Mongoose library using ES Module syntax
import mongoose from 'mongoose';

// Destructure Schema class from mongoose
const { Schema } = mongoose;

// Define the userSchema with fields and their data types
const userSchema = new Schema({
    name: String,
    age: Number,
    gender: String,
    city: String
});

// Create a model named "User" based on the schema
const User = mongoose.model("User", userSchema);

// Export the "User" model as default export
export default User;