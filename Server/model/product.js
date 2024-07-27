let mongoose = require("mongoose");
let productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  brand: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
});

let Product = mongoose.model("Product", productSchema);
module.exports = Product;
