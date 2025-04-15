// Import Mongoose library
import mongoose from "mongoose";

// Define an async function to handle database connection
const connectDB = async () => {
    // Use Mongoose to connect to the MongoDB database using a connection string
    await mongoose.connect("mongodb+srv://surajadhikari:%40OpenMyMongodb11@codingadda.jdsqvqp.mongodb.net/UserManagementSystem");
}

// Export the "connectDB" function as default export
export default connectDB;