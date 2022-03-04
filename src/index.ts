import express from "express";
import cors from "cors";
const app = express();
const port = 3001;
import mongoDBClient from "./mongoClient";

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(port, () => {
  console.log(`Server up and running on port ${port}!`);
  mongoDBClient.initialize();
});
