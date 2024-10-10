const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please Type Product Name"],
    },
    price: {
      type: String,
      require: true,
    },
    quantity: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: false,
    },
  },
  {
    timestamp: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
