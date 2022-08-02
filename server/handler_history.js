const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getOrderHistory = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("groupProject");
  const orderHistory = await db.collection("purchasedItems").find().toArray();
  orderHistory? 
    res.status(200).json({ status: 200, data: orderHistory, message: "getOrderHistory success!" })
    : res.status(404).json({ status: 404, message: "getOrderHistory fail!" });

  client.close();
};

const postOrderHistory = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("groupProject");

  const newInHis = await db.collection("purchasedItems").insertOne(req.body);
  newInHis
    ? res
        .status(200)
        .json({
          status: 200,
          data: newInHis,
          message: "add newInHis success!",
        })
    : res.status(404).json({ status: 404, message: "add newInHis fail!" });
client.close();
};


module.exports = {
    getOrderHistory,postOrderHistory
};
