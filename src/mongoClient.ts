import mongoose from "mongoose";
import "dotenv/config";

const MongoDBClient = {
  initialize: () => {
    try {
      const client = mongoose.connect(`${process.env.MONGO_URI}`);
      client.then(() => console.log("MongoDB connected"));
    } catch (error) {
      console.log(error);
    }
  },
};

export default MongoDBClient;