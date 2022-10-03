const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");

router.get("/products", getAllProducts);
router.get("/product/:id", getProductDetails);

router.post("/products/new", createProduct);

router.put("/product/:id", updateProduct);

router.delete("/product/:id", deleteProduct);

module.exports = router;
