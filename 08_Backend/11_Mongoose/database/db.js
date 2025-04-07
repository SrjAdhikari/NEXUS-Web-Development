// File: db.js
// Description: This file is used to connect to the MongoDB database using Mongoose.

// Import Mongoose library using ES Module syntax
// Mongoose is an ODM (Object Document Mapper) for MongoDB
import mongoose from "mongoose";

// Define an async function to handle database connection
const connectDB = async () => {
    // Specify the database name to connect to
    const dbName = 'UserData';

    // Use Mongoose to connect to the MongoDB database using a connection string
    await mongoose.connect(`mongodb+srv://surajadhikari:%40OpenMyMongodb11@codingadda.jdsqvqp.mongodb.net/${dbName}`);
}

// Export the "connectDB" function as default export
export default connectDB;