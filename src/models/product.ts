import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  category: { type: String, lowercase: true },
  filter: String,
  price: Number,
}, { collection: "products" });

export const Product = mongoose.model("Product", productSchema);
