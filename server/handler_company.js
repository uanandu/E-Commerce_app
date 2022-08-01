const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getCompanies = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("groupProject");
  const companies = await db.collection("companies").find().toArray();
  companies? 
    res.status(200).json({ status: 200, data: companies, message: "getCompanies success!" })
    : res.status(404).json({ status: 404, message: "getCompanies fail!" });

  client.close();
};

const getCompanyById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("groupProject");
  const _id = parseInt(req.params.companyId);
  const singleCompany = await db.collection("companies").findOne({ _id:_id });
  singleCompany
    ? res
        .status(200)
        .json({
          status: 200,
          data: singleCompany,
          message: "getCompanyById success!",
        })
    : res.status(404).json({ status: 404, message: "getCompanyById fail!" });
client.close();
};


const getProductsByCompany = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("groupProject");
  const _id = parseInt(req.params.companyId);
  const products = await db.collection("products").find({ companyId:_id }).toArray();
  products
    ? res
        .status(200)
        .json({
          status: 200,
          data: products,
          message: "getProductsByCompany success!",
        })
    : res.status(404).json({ status: 404, message: "getProductsByCompany fail!" });
client.close();
}

module.exports = {
  getCompanies,
  getCompanyById,
  getProductsByCompany
};
