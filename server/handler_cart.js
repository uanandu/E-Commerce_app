const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getCart = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("groupProject");
  const cart = await db.collection("cart").find().toArray();
  cart? 
    res.status(200).json({ status: 200, data: cart, message: "getCart success!" })
    : res.status(404).json({ status: 404, message: "getCart fail!" });
  client.close();
};

const postCart = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("groupProject");

  //to define how to get new added item info in cart
  const newInCart = await db.collection("cart").insertOne(req.body);
  newInCart? res.status(200).json({status: 200,data: newInCart,message: "add newInCart success!",})
    : res.status(404).json({ status: 404, message: "add newInCart fail!" });
client.close();
};

const deleteCart = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("groupProject");
    //this part needs connect item added in cart writes _id in cart collection
    
    const _id = parseInt(req.params.itemId);
    //delete item based on _id in cart collection
    const itemToDelete = await db.collection("cart").findOneAndDelete({ _id: _id });
    !itemToDelete
      ? res.status(404).json({ status: 404, message: "deleteCart fail!" })
      : res.status(200).json({ status: 200, data: itemToDelete, message: "deleteCart success!" });
  client.close();
  };

module.exports = {
  getCart,postCart,deleteCart
};
