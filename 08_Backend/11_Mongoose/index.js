// Import Express framework using ES Module syntax
import express from "express";

// Create an Express application instance
const app = express();

// Import database connection function
import connectDB from "./database/db.js";

// Import User model for database operations
import User from "./model/user.js";

// Middleware to parse incoming JSON requests
app.use(express.json());


// GET endpoint to retrieve all users
app.get("/user", async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find({});

        // Send the retrieved users as a response
        res.send(users);
    } catch (error) {
        // Handle any errors that occur during the database operation
        res.status(400).send(error.message);
    }
});


// POST endpoint to create a new user
//* Note: The request body should contain the user data in JSON format
app.post("/user", async (req, res) => {
    try {
        // Get user data from request body
        const user = req.body;
        
        // Create new User instance with the provided data
        const newUser = new User(user);
        
        // Save the new user to the database
        await newUser.save();
        
        // Send success message
        res.send("User created successfully");

        //* Alternative way to create a user
        // await User.create(req.body);
        // res.send("User created successfully");
    } catch (error) {
        // Handle any errors that occur during the database operation
        res.status(400).send(error.message);
    }
});


// PUT endpoint to update an existing user
app.put("/user", async (req, res) => {
    try {
        // Update one user matching the filter {name: "SRJ"}
        // Sets new values for name and city fields
        await User.updateOne(
            { name: "SRJ" },                            // Filter criteria
            { name: "Srj Adhikari", city: "Pokhara" }   // Update values
        );
        
        // Send success message
        res.send("User updated successfully");
    } catch (error) {
        // Handle any errors that occur during the database operation
        res.status(400).send(error.message);
    }
})


// DELETE endpoint to delete a user
app.delete("/user", async (req, res)=> {
    try {
        // Delete one user matching the filter {name: "Suraj Adhikari"}
        await User.deleteOne({name: "Suraj Adhikari"});

        // Send success message
        res.send("User deleted successfully");
    } catch (error) {
        // Handle any errors that occur during the database operation
        res.status(400).send(error.message);
    }
});


// Connect to database and start server
connectDB()
    .then( async () => {
        console.log("Database connected successfully");
        app.listen(3000, () => console.log("Server running at http://localhost:3000"));
    })
    // Handle any errors that occur during the database connection
    .catch((error) => console.error(`Database connection error: ${error.message}`));


//* Alternative way to connect to the database
/*
    async function startApp() {
        try {
            await connectDB();
            console.log("Database connected successfully");
            app.listen(3000, () => console.log("Server running at http://localhost:3000"));
        } catch (error) {
            console.error(`Database connection error: ${error.message}`);
        }
    }

    startApp();
*/