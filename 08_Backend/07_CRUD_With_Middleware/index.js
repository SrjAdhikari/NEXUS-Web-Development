// Import the Express.js framework to create a web server
const express = require("express");

// Initialize an Express application
const app = express();

// Import the authentication middleware from the 'auth.js' file
const { authentication } = require("./middleware/auth")

// Middleware to parse JSON data in the request body
app.use(express.json());

// Dummy Data: Array of food items with id, foodName, price, and category
const FoodMenu = [
    { id: 1, foodName: 'Butter Chicken', price: 350, category: 'nonveg' },
    { id: 2, foodName: 'Paneer Tikka', price: 280, category: 'veg' },
    { id: 3, foodName: 'Biryani', price: 250, category: 'nonveg' },
    { id: 4, foodName: 'Samosa', price: 20, category: 'veg' },
    { id: 5, foodName: 'Chole Bhature', price: 120, category: 'veg' },
    { id: 6, foodName: 'Masala Dosa', price: 90, category: 'veg' },
    { id: 7, foodName: 'Rajma Chawal', price: 110, category: 'veg' },
    { id: 8, foodName: 'Aloo Paratha', price: 60, category: 'veg' },
    { id: 9, foodName: 'Pav Bhaji', price: 100, category: 'veg' },
    { id: 10, foodName: 'Dhokla', price: 80, category: 'veg' },
    { id: 11, foodName: 'Idli Sambar', price: 70, category: 'veg' },
    { id: 12, foodName: 'Vada Pav', price: 30, category: 'veg' },
    { id: 13, foodName: 'Gulab Jamun', price: 50, category: 'veg' },
    { id: 14, foodName: 'Rasgulla', price: 40, category: 'veg' },
    { id: 15, foodName: 'Jalebi', price: 60, category: 'veg' },
    { id: 16, foodName: 'Kheer', price: 80, category: 'veg' },
    { id: 17, foodName: 'Pani Puri', price: 40, category: 'veg' },
    { id: 18, foodName: 'Chicken 65', price: 200, category: 'nonveg' },
    { id: 19, foodName: 'Fish Curry', price: 300, category: 'nonveg' },
    { id: 20, foodName: 'Malai Kofta', price: 220, category: 'veg' }
];


// Array to store items added to the shopping cart by user
const addToCart = [];


// Route to get the list of all food items. Anyone can access this public route
app.get("/food", (req, res) => {
    res.status(200).send(FoodMenu);
});


//* ****************************************************
//* 📌 Admin Actions
//* ****************************************************


// Apply authentication middleware to all routes under "/admin"
// Only authenticated users can access these endpoints
app.use("/admin", authentication);


// Route to add a new food item to the FoodMenu array (admin-only)
app.post("/admin", (req, res) => {
    // Add the new food item from request body to the FoodMenu array
    FoodMenu.push(req.body);
    res.status(201).send("Item added successfully!");
});


// Route to delete a food item by its ID (admin-only)
app.delete("/admin/:id", (req, res) => {
    // Convert the ID from string to integer
    const id = parseInt(req.params.id);

    // Find the index of the food item with the given ID
    const index = FoodMenu.findIndex(item => item.id === id);

    // If the item exists (index is not -1), remove it from the array
    if(index != -1) {
        FoodMenu.splice(index, 1);
        res.send("Item Deleted Successfully");
    }
    else {
        // If item not found, send error with HTTP status 404 (Not Found)
        res.status(404).send("Item Doesn't Exist");
    }
});


// Route to update a food item (admin-only)
app.patch("/admin", (req, res) => {
    // Get the food item ID from request body
    const foodID = req.body.id;

    // Find the food item in the FoodMenu array by its ID
    const foodItem = FoodMenu.find(food => food.id === foodID);

    // If the food item exists, update its properties
    if (foodItem) {
        // Update foodName if provided in request body
        if (req.body.foodName)
            foodItem.foodName = req.body.foodName;
        
        // Update price if provided in request body
        if (req.body.price)
            foodItem.price = req.body.price;
        
        // Update category if provided in request body
        if (req.body.category)
            foodItem.category = req.body.category;
        
        // Send success message after updating
        res.send("Fooditem Updated Successfully!");
    } 
    else {
        // If food item not found, send error with HTTP status 404
        res.status(404).send("Food item doesn't exist");
    }
});


//* ****************************************************
//* 📌 User Actions
//* ****************************************************


// Route for users to add food items to their cart
app.post("/user/:id", (req, res) => {
    // Convert the ID from string to integer
    const id = parseInt(req.params.id);

    // Search for the food item in FoodMenu array using the provided id
    const foodItem = FoodMenu.find(item => item.id === id);

    // If the food item exists in the menu, add the found food item to the addToCart array
    if(foodItem) {
        addToCart.push(foodItem);
        res.status(200).send("Item added successfully!");
    }
    else {
        // Send response indicating item is not available
        res.send("Item out of stock!");
    }
});


// Route for users to remove items from their cart
app.delete("/user/:id", (req, res) => {
    // Convert the ID from string to integer
    const id = parseInt(req.params.id);

    // Find the index of the food item with the given ID
    const index = addToCart.findIndex(item => item.id === id);

    // If the item exists (index is not -1), remove it from the array
    if(index !== -1) {
        addToCart.splice(index, 1);
        res.send("Item removed successfully!");
    }
    else {
        // If item not found, send error with HTTP status 404 (Not Found)
        res.status(404).send("Item does not present in cart!");
    }
});


// Route for users to view their cart contents
app.get("/user", (req, res) => {
    // If there are any items in the cart, send the entire addToCart array.
    if(addToCart.length > 0)
        res.send(addToCart);
    else
        // Send message indicating empty cart
        res.send("Cart is empty!");
})


// Start the server on port 3000
app.listen(3000, () => console.log("Server running at http://localhost:3000"));