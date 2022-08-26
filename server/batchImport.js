const {MongoClient} = require("mongodb");

require("dotenv").config();
const {MONGO_URI} = process.env;

const options = { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const companies = require("./data/companies.json");
const items = require("./data/items.json");

// Here we import the data to the collections
const batchImport = async () => {

    try {

        const client = new MongoClient(MONGO_URI, options); // Connect to the database using the URI and options

        await client.connect(); // connect to the client

        const db = client.db("groupProject"); // declare the database

        const result = await db.collection("companies").insertMany(companies); // insert the companies into the database as a new collection

        const result2 = await db.collection("all_items").insertMany(items); // insert the items into the database as a new collection

        client.close();

    } catch (error) {
        console.log(error.stack, "error");
    }
}

batchImport(); // call the function to import the data