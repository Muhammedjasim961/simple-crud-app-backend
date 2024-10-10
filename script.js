const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.router.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//ROUTS
app.use("/api/products", productRoute);

mongoose
  .connect("mongodb://localhost/product")
  .then(() => {
    const PORT = process.env.PORT || 3002;
    app.listen(PORT, () => {
      console.log(`Server is Running on ${PORT}...`);
    });
    console.log("MongoDB is Connected To Databases");
  })
  .catch(() => {
    console.log("Database Connection Failed");
  });

//CREATING PRODUCT
// app.post("/api/products", async (req, res) => {
//   try {
//     const products = await Product.create(req.body);
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
//GET ALL PRODUCT FROM API
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});

//     if (!products || products.length === 0) {
//       res.status(404).json({ message: "No products found" });
//     } else {
//       res.status(200).json(products);
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// GETTING A PRODUCT BY ID
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);

//     if (!product) {
//       res.status(404).json({ message: "Product not found" });
//     } else {
//       res.status(200).json(product);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// UPDATE A PRODUCT USING ID
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     const updateProduct = await Product.findById(id);
//     res.status(200).json(updateProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// DELETE A PRODUCT

// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       res.status(404).json({ message: "Product not found!" });
//     }
//     res.status(200).json({ message: "product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
