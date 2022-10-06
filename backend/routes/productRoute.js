const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");

// all products and their details
router.get("/products", getAllProducts);
router.get("/product/:id", getProductDetails);

// create product - update product - delete product
router.post(
  "/admin/products/new",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  createProduct
);
router.put(
  "/admin/product/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateProduct
);
router.delete(
  "/admin/product/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteProduct
);

// get, create, update and delete review
router.get("/reviews", getProductReviews);
router.put("/review", isAuthenticatedUser, createProductReview);
router.delete("/reviews", isAuthenticatedUser, deleteReview);

module.exports = router;
