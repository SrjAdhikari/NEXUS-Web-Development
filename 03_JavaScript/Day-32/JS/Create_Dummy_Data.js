// Import the 'fs' (File System) module to work with the file system
const fs = require('fs');

// Import the 'path' module to work with file paths in a system-independent way
const path = require('path');

const restaurantInfo = [];
const images = ["First_Restaurant","Second_Restaurant","Third_Restaurant","Fourth_Restaurant","Fifth_Restaurant","Sixth_Restaurant","Seventh_Restaurant","Eigth_Restaurant","Nine_Restaurant","Tenth_Restaurant"];
const restaurant_names = [
    "The Gourmet Haven",
    "Spice Symphony",
    "Urban Bites",
    "Farm to Table",
    "Ocean Delights",
    "Fusion Fiesta",
    "The Cozy Corner",
    "Sunset Grill",
    "The Green Plate",
    "Golden Wok",
    "Savory Street",
    "Pasta Paradise",
    "Burger Bliss",
    "Sushi Spot",
    "Mediterranean Magic",
    "The Rustic Table",
    "Bistro Bliss",
    "Street Eats",
    "The Chocolate Box",
    "Breakfast Club"
];

const food_types = [
    "Italian",
    "Chinese",
    "Mexican",
    "Indian",
    "Japanese",
    "Mediterranean",
    "Thai",
    "American",
    "French",
    "Korean"
];

const locations = [
    "Connaught Place",
    "Chandni Chowk",
    "Hauz Khas Village",
    "Saket",
    "Karol Bagh",
    "Lajpat Nagar",
    "Rajouri Garden",
    "Khan Market",
    "Vasant Kunj",
    "Dwarka"
];

for(let i = 0; i < 100; i++) {
    const restaurant = {};
    restaurant["image"] = images[Math.floor(Math.random() * 10)];
    restaurant["name"] = restaurant_names[Math.floor(Math.random() * 20)];
    restaurant['rating'] = Math.floor(Math.random() * 5 + 1);
    restaurant["food_type"] = food_types[Math.floor(Math.random() * 10)];
    restaurant["price_for_two"] = Math.floor(Math.random() * 2401 + 100);
    restaurant["location"] =  locations[Math.floor(Math.random() * 10)];
    restaurant["distance"] = (Math.random() * 10 + 1).toFixed(1);
    restaurant["offers"] = Math.floor(Math.random() * 30);
    restaurant["serve_alcholol"] = Math.random() > 0.7;
    restaurant["restaurant_open_time"] = Math.floor(Math.random() * 24);
    restaurant["restaurant_close_time"] =  (restaurant["Restaurant_open_time"] + 12) % 24;

    restaurantInfo.push(restaurant);
};

// Convert the restaurantInfo array into a JSON string
// `null` indicates no filtering, and `4` specifies the indentation level for pretty-printing the JSON
const jsonData = JSON.stringify(restaurantInfo, null, 4);

// Import the 'path' module to work with file paths in a system-independent way
// const path = require('path');

// Construct the file path dynamically using path.join
// This ensures the correct path format is used on different operating systems
const filePath = path.join('03_JavaScript', 'Day-32', 'JS', 'Restaurant_Info.json');

// Write the JSON string to a file at the specified file path
// The file encoding is set to 'utf8' to ensure the content is written in a readable text format
fs.writeFileSync(filePath, jsonData, 'utf8');