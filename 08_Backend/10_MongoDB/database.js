// Import MongoClient class from the MongoDB driver
const { MongoClient } = require("mongodb");

// Define the connection URL for MongoDB Atlas
const url =	"mongodb+srv://surajadhikari:%40OpenMyMongodb11@codingadda.jdsqvqp.mongodb.net/";

// Create a new MongoClient instance
// This object will handle our connection to the MongoDB server
const client = new MongoClient(url);

// Specify the database name we want to work with
const dbName = "CoderArmy";

// Define an async function to handle database operations
// This function will connect to the MongoDB server, perform operations, and close the connection
async function main() {
    // Attempt to connect to the MongoDB server asynchronously
    // await pauses execution until connection is established
    // "connect()" method establishes the connection using the URL provided
	await client.connect();
	console.log("Connected successfully to server");

    // Get a reference to the 'CoderArmy' database
	const db = client.db(dbName);

    // Get a reference to the 'user' collection within the database
	const collection = db.collection("user");


    //* Insert a document into the collection
    // insertOne() adds a single document to the collection
    // The document is an object with properties: name, age, city, and country
    const insertResult = await collection.insertOne({
        name: "Suraj",
        age: 23,
        city: "Pokhara",
        country: "Nepal",
    });
    console.log("Inserted document =>", insertResult);


    //* Insert multiple documents into the collection
    // insertMany() adds multiple documents at once
    // The documents are provided as an array of objects
    const insertManyResult = await collection.insertMany([
        { name: "Sita", age: 22, city: "Kathmandu", country: "Nepal" },
        { name: "Ram", age: 25, city: "Bhaktapur", country: "Nepal" },
        { name: "Gita", age: 20, city: "Lalitpur", country: "Nepal" },
        { name: "Hari", age: 28, city: "Biratnagar", country: "Nepal" },
    ]);
    console.log("Inserted documents =>", insertManyResult);


    //* Find all documents in the collection
    // find({}) returns a Cursor object containing all documents in the collection
    // toArray() converts the cursor result to an array. It calls the "network" and returns the documents
	const findResult = await collection.find({}).toArray();
	console.log("Found documents =>", findResult);


    //* Find Documents with a Query Filter
    // Add a query filter to find only documents which meet the query criteria.
    // Only the documents which match [name: "Suraj"] should be returned.
    const filterResult = await collection.find({ name: "Suraj" }).toArray();
    console.log("Found documents =>", filterResult);


    //* Update a document in the collection
    // updateOne() updates a single document that matches the filter criteria
    // The "$set" operator is used to specify the fields to be updated
    const updateResult = await collection.updateOne({ name: "Suraj" }, { $set: { age: 24 } });
    console.log("Updated document =>", updateResult);


    //* Update multiple documents in the collection
    // updateMany() updates all documents that match the filter criteria
    // Updates the "city" field of all documents where "country" is "Nepal"
    const updateManyResult= await collection.updateMany({ country: "Nepal" }, { $set: { city: "Pokhara" } });
    console.log("Updated documents =>", updateManyResult);


    //* Delete a document from the collection
    // deleteOne() deletes a single document that matches the filter criteria
    const deleteResult = await collection.deleteOne({ name: "Suraj" });
    console.log("Deleted document =>", deleteResult);


    //* Delete multiple documents from the collection
    // deleteMany() deletes all documents that match the filter criteria
    const deleteManyResult = await collection.deleteMany({ country: "Nepal" });
    console.log("Deleted documents =>", deleteManyResult);


    // Return a completion message
	return "done.";
}

// Call the main function and handle the promise
main()
    // .then() handles successful completion
    .then(console.log)

    // .catch() handles any errors that occur
    .catch(console.error)

    // .finally() runs regardless of success or failure
    .finally(() => client.close());     // Closes the database connection