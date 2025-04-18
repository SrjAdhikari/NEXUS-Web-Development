// Import Mongoose library
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Define an async function to handle database connection
const connectToMongoDB = async () => {
    // Use Mongoose to connect to the MongoDB database using a connection string
    await mongoose.connect("mongodb+srv://surajadhikari:%40OpenMyMongodb11@codingadda.jdsqvqp.mongodb.net/UserManagementSystem");
}

// Export the "connectToMongoDB" function as default export
export default connectToMongoDB;