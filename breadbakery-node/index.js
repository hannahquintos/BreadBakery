//import required modules
const express = require("express"); 
const cors = require("cors"); //need this to set this API to allow requests from other servers
const { MongoClient, ObjectId } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

//DB values
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}/`;
const client = new MongoClient(dbUrl);

//set up Express object and port
const app = express();
const port = process.env.PORT || "3000";

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

//allow requests from all servers
app.use(cors({
  origin: "*"
}));


//API endpoints

/*
 * returns: an array of products
 */
app.get("/api/products", async (request, response) => {
  let products = await getAllProducts();
  response.json(products); //send JSON object with appropriate JSON headers
});

/*
 * returns: json object of selected product
 */
app.get("/api/products/:id", async (request, response) => {
      let productId = request.params.id;
      let product = await getSingleProduct(productId);
      response.json(product);
});

/*
 * returns: an array of locations
 */
app.get("/api/locations", async (request, response) => {
  let locations = await getAllLocations();
  response.json(locations); //send JSON object with appropriate JSON headers
});


//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

//MONGODB FUNCTIONS
async function connection() {
  await client.connect();
  db = client.db("BreadBakeryDb");
  return db;
}

//Function to select all documents in the products collection
async function getAllProducts() {
  db = await connection();
  let results = db.collection("products").find({});
  let res = await results.toArray();
  return res;
}

//Function to retrieve a single document from products by _id
async function getSingleProduct(id){
    db = await connection();
    const productId = { _id: new ObjectId(String(id)) };
    const result = await db.collection("products").findOne(productId); 
    return result;
}

//Function to select all documents in the locations collection
async function getAllLocations() {
  db = await connection();
  let results = db.collection("locations").find({});
  let res = await results.toArray();
  return res;
}