// Import Mongoose library using ES Module syntax
import mongoose from 'mongoose';

// Destructure Schema class from mongoose
const { Schema } = mongoose;

async function main() {
    try {
        // Configuration for MongoDB connection
        const dbName = 'UserInfo';
        const connectionString = `mongodb+srv://surajadhikari:%40OpenMyMongodb11@codingadda.jdsqvqp.mongodb.net/${dbName}`;
        await mongoose.connect(connectionString);
        console.log('Successfully connected to Database');
        
        // Define a schema for the User model
        // Schema is a blueprint for the data structure in MongoDB
        const userSchema = new Schema({
            name: String,
            age: Number,
            city: String,
            gender: String,
        });

        // Create a "User" model based on the schema
        // Model is a constructor compiled from Schema
        const User = mongoose.model('User', userSchema);


        // Method 1: Create a new user instance and save it to the database
        const firstUser = new User({
            name: 'Suraj Adhikari',
            age: 22,
            city: 'Pokhara',
            gender: 'Male',
        });
        // Save the user instance to the database
        await firstUser.save();


        // Method 2: Create a new user using the create method
        await User.create({
            name: 'Bimala Adhikari',
            age: 21,
            city: 'Bharatpur',
            gender: 'Female',
        });


        // Method 3: Insert multiple users using insertMany method
        await User.insertMany([
            { name: 'Suraj Adhikari', age: 22, city: 'Pokhara', gender: 'Male' },
            { name: 'Bimala Adhikari', age: 21, city: 'Bharatpur', gender: 'Female'},
        ]);


        // Query all documents in the User collection
        // Empty object {} means no filter - get all documents
        const allUsers = await User.find({});
        console.log('All users =>', allUsers);


        // Query documents with specific filter
        const specificUser = await User.findOne({ name: "Suraj Adhikari" });
        console.log('Found user =>', specificUser);

    } catch (error) {
        // Handle any errors that occur during operations
        console.error(`Error: ${error.message}`);

        // Exit process with failure code
        process.exit(1);
    } finally {
        // Close the database connection, whether successful or not
        mongoose.connection.close();
        console.log('DB connection closed');
    }
}

// Call the main function to execute the code
main();