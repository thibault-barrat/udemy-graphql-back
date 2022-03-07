import express from "express";
import cors from "cors";
const app = express();
const port = 3001;
import mongoDBClient from "./mongoClient";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schemas";

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

// API REST
import { Product } from "./models/product";
app.get("/products", async (req, res) => {
  const products = await Product.find();
  try {
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/products/:category", async (req, res) => {
  const category = req.params.category;
  const products = await Product.find({ category });
  try {
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

// API graphQL
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);

app.listen(port, () => {
  console.log(`Server up and running on port ${port}!`);
  mongoDBClient.initialize();
});
