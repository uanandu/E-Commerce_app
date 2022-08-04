const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// GET method to get all categories
const getCategories = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("groupProject");
  //the following aggregation operation pivots the data in the "all_items" collection 
  //in the "groupProject" database to have items grouped by categories
  //and then write the results to the categories collection(in same db)
  const categories = await db.collection("all_items").aggregate(
    [{
        $group:{
            categoryId:'$category',
            items:{
                $push:'$$ROOT'
            }
        }
    },
    {$out:"categories"}
]
  )
  ;
  categories? 
    res.status(200).json({ status: 200, data: categories, message: "getCategories success!" })
    : res.status(404).json({ status: 404, message: "getCategories fail!" });
  client.close();
};

// GET method to get category by name
const getCategory = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("groupProject");
  const categoryName = req.params.categoryId;
  const oneCategory = await db.collection("categories").findOne({ category:categoryName });
  oneCategory
    ? res
        .status(200)
        .json({
          status: 200,
          data: oneCategory,
          message: "getCategory success!",
        })
    : res.status(404).json({ status: 404, message: "getCategory fail!" });
client.close();
};
module.exports = {
    getCategories,
    getCategory
};
