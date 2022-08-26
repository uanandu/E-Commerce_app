const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// GET method to get all items
const getItems = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("groupProject");
  const items = await db.collection("all_items").find().toArray();
  items
    ? res
        .status(200)
        .json({ status: 200, data: items, message: "getItems success!" })
    : res.status(404).json({ status: 404, message: "getItems fail!" });

  client.close();
};

// GET method to get item by id
const getItemById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("groupProject");
  const _id = parseInt(req.params.itemId);

  const singleItem = await db.collection("all_items").findOne({ _id:_id });
  singleItem
    ? res
        .status(200)
        .json({
          status: 200,
          data: singleItem,
          message: "getItemById success!",
        })
    : res.status(404).json({ status: 404, message: "getItemById fail!" });
client.close();
};
const patchStock = async(req,res)=>{
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("groupProject");
  const stockNum = req.body

  const numInStock = await db.collection("all_items").findOneAndUpdate({_id:_id},{$inc:{numInStock:-{quantity}}},{returnNewDocument:true})
  numInStock>0
    ? res
        .status(200)
        .json({
          status: 200,
          data: numInStock,
          message: "numInstock reduce success!",
        })
    : res.status(404).json({ status: 404, message: "stock not enough!" });
client.close();

}

module.exports = {
  getItems,
  getItemById,
  patchStock
};
