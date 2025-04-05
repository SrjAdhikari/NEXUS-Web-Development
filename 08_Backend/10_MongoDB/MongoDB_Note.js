//* ****************************************************
//* 📌 Questions related to MongoDB
//* ****************************************************


//* 📌 What is MongoDB ?
    // MongoDB is a NoSQL database that stores data in JSON-like format.
    // It is a document-oriented database that allows for flexible and scalable data storage.
    // It is designed to handle large volumes of unstructured and semi-structured data.


//* 📌 What is Cluster in MongoDB ?
    // A cluster is a group of servers (nodes) that work together to store and manage data.
    // It provides high availability and scalability by distributing data across multiple servers.
    // MongoDB uses a sharding mechanism to distribute data across multiple nodes in a cluster.


//* 📌 What is MongoDB Compass ?
    // MongoDB Compass is a GUI (Graphical User Interface) tool for MongoDB.
    // It allows users to visualize and analyze data in MongoDB databases.
    // It provides features like data exploration, schema visualization, and performance monitoring.
    // It is a powerful tool for developers and database administrators to manage MongoDB databases.


//* ****************************************************
//* 📌 What is field, document and collection in MongoDB ?
//* ****************************************************

    // 1️⃣ Field:
        // A field is a single unit of data within a document (equivalent to a "column" in SQL). 
        // Characteristics:
            // - It is defined by a key-value pair (e.g., "name": "Suraj").
            // - It can store different data types (string, number, date, array, nested objects, etc.).

        //* Example:
        /* {
            "name": "Suraj",                                // Field (string)
            "age": 25,                                      // Field (number)
            "is_active": true                               // Field (boolean)
        } */


    // 2️⃣ Document:
        // A set of fields stored as a BSON (Binary JSON) record (equivalent to a "row" in SQL).
        // Characteristics:
            // - Flexible schema (no fixed structure required)
            // - Unique _id field (auto-generated if not provided)
            // - It can contain nested documents and arrays.

        //* Example:
        /* {
            "_id": ObjectId("60d5f9f3b3c8f8e1a4d4f4e0"),    // Auto-generated unique identifier
            "name": "Suraj",
            "age": 25,
            "is_active": true,
            "address": {                                    // Nested document
                "street": "123 Main St",
                "city": "Pune"
            },
            "hobbies": ["reading", "coding"]                // Array of values
        } */

        // The record or entry stored inside a curly braces is called a document.


    // 3️⃣ Collection:
        // A collection is a group of documents (equivalent to a "table" in SQL).
        // Characteristics:
            // - No enforced schema (documents can have different structures)
            // - Automatically created when first referenced
            // - Can have indexes for faster queries

        //* Example: userCollection
        /* 
            First Document:
            {
                "name": "Suraj",
                "age": 25,
                "is_active": true
            },

            Second Document (different structure allowed):
            {
                "_id": 2,
                "username": "bob123",
                "preferences": {
                    "theme": "dark"
                }
            } 
        */


//* ****************************************************
//* 📌 How "_id" is created in MongoDB ?
//* ****************************************************

    // The "_id" field is a unique identifier automatically assigned to every document in a MongoDB collection. 
    // It serves as the primary key for documents.


    //* How "_id" is created:
        // If "_id" is not provided, MongoDB generates a unique ObjectId for it.
        // A 12-byte BSON ObjectId consisting of:
            // - 4-byte timestamp (seconds since Unix epoch time)
            // - 3-byte machine identifier (unique to the machine)
            // - 2-byte process ID (unique to the process)
            // - 3-byte counter (incrementing value for the ObjectId)
        // The ObjectId is represented as a 24-character hexadecimal string.


        //* Example: ObjectId("60d5f9f3b3c8f8e1a4d4f4e0")
        // - 60d5f9f3: Timestamp (in hex) when the document was created -> 4 bytes / 8 hex characters
        // - b3c8f8: Random value (unique to the machine -> 3 bytes / 6 hex characters)
        // - e1a4: Random value (unique to the process -> 2 bytes / 4 hex characters)
        // - d4f4e0: Counter -> 3 bytes / 6 hex characters


//* ****************************************************
//* 📌 Why MongoDB connection strings may throw errors
//* when passwords contain special characters like @ ?
//* ****************************************************

    // MongoDB connection string: 
    // mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/myDatabase?retryWrites=true&w=majority

    //* Explanation:
        // - mongodb+srv://: Protocol (SRV indicates a smart DNS-based connection).
        // - username:password: Credentials for authentication.
        // - @: Separator between credentials and the host.
        // - cluster0.xxxxx.mongodb.net: The cluster’s hostname.
        // - /myDatabase: Optional database name.
        // - ?retryWrites=true&w=majority: Optional connection options.

    // In a URI, @ is a delimiter that separates the credentials (username:password) from the host (cluster0.xxxxx.mongodb.net).
    // If the password contains @, it will be interpreted as the end of the credentials section, causing authentication failure.
    // The parser gets confused about where the password ends and the hostname begins.


//* ****************************************************
//* 📌 MongoDB Cursor Objects
//* ****************************************************

    // A cursor in MongoDB is a pointer that helps you navigate through a set of documents returned from a query.
    // Instead of loading all documents into memory at once, 
    // MongoDB returns a cursor that lets you iterate through results efficiently, especially with large datasets.


    //* Key Points:
        // - Cursors are lazy: They fetch documents from the database as needed, not all at once.
        // - Cursors can be iterated using methods like .toArray(), .forEach(), or with a loop.
        // - Cursors can be modified with methods like .limit(), .skip(), and .sort() to control the results.
        // - Cursors can be closed explicitly or automatically when they go out of scope.


    //* How does a Cursor work?
        // When we run a query like "db.collection.find()", MongoDB:
        // 1️⃣ Finds the matching documents in the collection.
        // 2️⃣ Returns a "cursor object" instead of the full result set.
        // 3️⃣ We use methods on the cursor (e.g., .next(), .toArray()) to access the data.


    //* Cursor Lifecycle:
        // 1️⃣ Creation: When query executes (find()), a cursor is created.
        // 2️⃣ Iteration: Iterate through the cursor to access documents one by one (e.g., .next(), .hasNext(), .toArray()).
        // 3️⃣ Closing: Cursors can be closed explicitly or automatically When they go out of scope or when we fetch all documents.


//* ****************************************************
//* 📌 Common Cursor Methods
//* ****************************************************

    // 1️⃣ .hasNext() Method:
        // - Checks if there are more documents to iterate over in the cursor.
        // - Returns true if there are more documents, false otherwise.
        // - Useful for controlling loops when iterating through cursor results.

        //* Example:
            const cursor = db.collection.find();                            // Create a cursor for the collection
            while (cursor.hasNext()) {
                const doc = cursor.next();                                  // Get the next document
                console.log(doc);                                           // Process the document
            }
            cursor.close();                                                 // Close the cursor when done


    // 2️⃣ .toArray() Method:
        // - Converts the entire cursor result set into an array of documents.
        // - Fetches all documents at once, loading them into memory.
        // - Useful when you want to work with all results at once.

        //* Example:
            const cursor1 = db.collection.find();                           // Create a cursor for the collection
            const allDocs = cursor1.toArray();                              // Convert cursor to array
            console.log(allDocs);                                           // Process the array of documents
            cursor1.close();                                                // Close the cursor when done


    // 3️⃣ .next() Method:
        // - Retrieves the next document from the cursor.
        // - Returns null if there are no more documents to fetch.
        // - Useful for processing documents one at a time.

        //* Example:
            const cursor2 = db.collection.find();                           // Create a cursor for the collection
            let doc;
            while ((doc = cursor2.next()) !== null) {                       // Get the next document
                console.log(doc);                                           // Process the document
            }
            cursor2.close();                                                // Close the cursor when done


    // 4️⃣ .limit() Method:
        // - Limits the number of documents returned by the cursor.
        // - Useful for pagination or when you only need a subset of results.

        //* Example:
            const limitedCursor = db.collection.find().limit(5);            // Limit to 5 documents
            limitedCursor.forEach(doc => console.log(doc));                 // Process each document
            limitedCursor.close();                                          // Close the cursor when done


    // 5️⃣ .skip() Method:
        // - Skips a specified number of documents in the cursor before returning results.
        // - Useful for pagination or when you want to skip a certain number of documents.

        //* Example:
            const skippedCursor = db.collection.find().skip(10);            // Skip the first 10 documents
            skippedCursor.forEach(doc => console.log(doc));                 // Process each document
            skippedCursor.close();                                          // Close the cursor when done


    // 6️⃣ .sort({ field: order }) Method:
        // - Sorts the documents in the cursor based on specified fields.
        // - The order 1 = ascending, -1 = descending.
        // - Useful for ordering results in a specific way.

        //* Example:
            const sortedCursor = db.collection.find().sort({ age: 1 });     // Sort by age in ascending order
            sortedCursor.forEach(doc => console.log(doc));                  // Process each document
            sortedCursor.close();                                           // Close the cursor when done