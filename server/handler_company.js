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
  const companyID = parseInt(req.params.companyId);

  console.log("_id", req.params);

  const singleCompany = await db.collection("companies").findOne({ _id:companyID });
  const products = await db.collection("all_items").find({ companyId:companyID }).toArray();

  singleCompany && products
    ? res
        .status(200)
        .json({
          status: 200,
          companyInfo: singleCompany,
          companyProducts:products,
          message: "getCompanyById success!",
        })
    : res.status(404).json({ status: 404, message: "getCompanyById fail!" });
client.close();
};



module.exports = {
  getCompanies,
  getCompanyById,
};
