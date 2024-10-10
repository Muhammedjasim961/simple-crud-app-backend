const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
//GET ALL PRODUCTS
router.get("/", getProducts);

//GET A PRODUCT
router.get("/:id", getProduct);

//CREATE A PRODUCT by id
router.post("/", createProduct);

//UPDATE A PRODUCT
router.put("/:id", updateProduct);

//DELETE A PRODUCT by id
router.put("/:id", deleteProduct);

module.exports = router;
