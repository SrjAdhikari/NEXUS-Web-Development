//* ****************************************************
//* 📌 Step To Setting Up MongoDB Atlas (Cloud DB)
//* ****************************************************


// In this file, we will set up MongoDB Atlas, a cloud database service.
// MongoDB Atlas is a cloud database service provided by MongoDB, Inc. 
// It allows developers to deploy, manage, and scale MongoDB databases in the cloud.


//* ****************************************************
//* 📌 Step 1: Create a MongoDB Atlas Account
//* ****************************************************

    // 1️⃣ Go to https://www.mongodb.com/cloud/atlas and sign up for a free account.
    // 2️⃣ Click "Try Free" (no credit card required).
    // 3️⃣ Fill in your details and verify your email.


//* ****************************************************
//* 📌 Step 2: Create a Cluster
//* ****************************************************

    // 1️⃣ After signing in, click on "Create a Cluster".

    // 2️⃣ Choose a Tier:
        // - Free Tier (M0 Sandbox) – Best for learning (512MB storage).
        // - Paid Tiers (M10+) – For production (scalable, backups, more RAM).
        // - Choose the free tier for this tutorial.

    // 3️⃣ Choose Cluster Name:
        // - Name your cluster (e.g., "MyFirstCluster").

    // 4️⃣ Select Cloud Provider & Region:
        // - Amazon Web Services (AWS)
        // - Google Cloud Platform (GCP)
        // - Microsoft Azure (Azure)
        // - Choose a region close to you for better performance.
    
    // 5️⃣ Click "Create Cluster".
        // - Note: It may take a few minutes to create the cluster.


//* ****************************************************
//* 📌 Step 3: Set Up Connection Security
//* ****************************************************

    // 1️⃣ Add a connection IP Address:
        // - Mongodb Atlas automatically assigns the IP address of your computer.
    
    // 2️⃣ Create a Database User:
        // - Enter a username (e.g., "suraj").
        // - Set a password (e.g., "password").
    
    // 3️⃣ Click "Create Database User".
        // - Note: Keep your username and password secure.
        // - You will need them to connect to your database later.
    
    // 4️⃣ Choose a connection method
        // - Choose "Compass" (GUI)


//* ****************************************************
//* 📌 Step 4: Connect to Your Cluster Using MongoDB Compass
//* ****************************************************

    // 1️⃣ Select your OS and download MongoDB Compass from https://www.mongodb.com/try/download/compass.
        // - MongoDB Compass is a GUI client for MongoDB that allows you to interact with your database visually.

    // 2️⃣ Install MongoDB Compass.

    // 3️⃣ Copy the connection string from the Atlas dashboard.
        // - It should look like this:
        // mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority

    // 4️⃣ Open MongoDB Compass and click "Add new connection".

    // 5️⃣ Paste the connection string into Compass.

    // 6️⃣ Choose a cluster name (e.g., "CodingAdda").

    // 7️⃣ Click "Connect".
        // - You should now be connected to your MongoDB Atlas cluster.


//* ****************************************************
//* 📌 Step 5: Create a Database
//* ****************************************************

    // 1️⃣ Click "Create Database".
    // 2️⃣ Enter a name for your database (e.g., "CoderArmy").
    // 3️⃣ Enter a name for your collection (e.g., "user").
    // 4️⃣ Click "Create Database".
        // - You should now have a new database called "CoderArmy" with a collection called "user".


//* ****************************************************
//* 📌 Step 6: Insert Sample Data Into Your Database
//* ****************************************************

    // 1️⃣ Click on "user" collection.

    // 2️⃣ Click on "Add Data (+)" and then choose "Insert Document".
        // - This will open a JSON editor where you can enter your data.

    // 3️⃣ Enter the following data:
    /* {
        "name": "Suraj Adhikari",
        "email": "Y6m5o@example.com",
        "age": 22,
        "gender": "male",
        "isStudent": true,
        "hobbies": ["reading", "gaming"],
    } */

    // 4️⃣ Click "Insert".
        // - You should now see your data in the collection.
        // - You can also view the data in JSON format.

    // 5️⃣ Repeat the above steps to add more sample data.


//* ****************************************************
//* 📌 Step 7: Connect MongoDB Using Node.js
//* ****************************************************

    // 1️⃣ Install MongoDB Node.js driver:
        // Run "npm install mongodb" to install the MongoDB Node.js driver.

    // 2️⃣ Create a connection file (database.js):
        // - Create a new file called "database.js" in your project directory.
        // - This file will contain the code to connect to your MongoDB Atlas cluster.

            // Import MongoClient class from the MongoDB driver
            const { MongoClient } = require('mongodb');
            // Alternative ES Module syntax:
            // import { MongoClient } from 'mongodb'

            // Define the connection URL for MongoDB Atlas
            // Replace <username> and <password> with your MongoDB Atlas username and password.
            // Replace <clustername> with your cluster name.
            const url = "mongodb+srv://<username>:<password>@clustername.mongodb.net/?retryWrites=true&w=majority";

            // Create a new MongoClient instance
            // This object will handle our connection to the MongoDB server
            const client = new MongoClient(url);

            // Specify the database name we want to work with
            // Replace 'myProject' with your database name.
            const dbName = 'myProject';

            // Define an async function to handle database operations
            async function main() {
                // Use await to asynchronously connect to the MongoDB server
                // This method("connect()") establishes the connection using the URL provided
                await client.connect();

                console.log('Connected successfully to server');

                // Get a reference to our database
                const db = client.db(dbName);

                // Get a reference to a collection within the database
                // Replace 'documents' with your collection name.
                // Collections are like tables in a relational database
                const collection = db.collection('documents');


                // At this point, you can insert your database CRUD operations:
                // - Insert documents: await collection.insertOne({...})
                // - Find documents: await collection.find({...}).toArray()
                // - Update documents: await collection.updateOne({...}, {...})
                // - Delete documents: await collection.deleteOne({...})

                
                //* Example: Find all documents in the collection
                // find({}) returns a Cursor object containing all documents in the collection
                const findResult = collection.find({});

                // Use a for-await-of loop to iterate over the cursor asynchronously
                // This is an efficient way to handle large result sets without loading everything into memory at once.
                for await (const doc of findResult) {
                    console.log(doc);
                }


                //* Alternative using toArray()
                // Loads all documents into memory at once
                const findResultAlternate = await collection.find({}).toArray();
                console.log(findResultAlternate);


                //* Note:
                // "for await" is better for large datasets
                // "toArray()" is simpler for small, known-size results
                // Be cautious with toArray() for large collections, as it can consume a lot of memory.


                // Return a completion message
                return 'done.';
            }

            // Call the main function and handle the promise
            main()
                // .then() handles successful completion
                .then(console.log)

                // .catch() handles any errors that occur
                .catch(console.error)

                // .finally() runs regardless of success or failure
                .finally(() => client.close());     // Closes the database connection


    // 3️⃣ Run the connection file:
        // - Run "node database.js" to connect to your MongoDB Atlas cluster.
        // - You should see "Connected successfully to server" in the console.


//* ****************************************************