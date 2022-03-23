const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [10, "{PATH} must be at least 10 characters long"],
    },
    price: {
      type: Number,
      required: [true, "{PATH} is required."],
      minlength: [1, "{PATH} must be more than $1."],
    },
    description: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [1, "{PATH} must be more than $1."],
    },
  },

  { timestamps: true }
);

const Product = mongoose.model("Product", ProductsSchema);

module.exports = Product;
