const Product = require("../models/productModel");
const catchAsyncError = require("../middlewares/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");

// Create product
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);

  return res.status(201).json({
    success: true,
    product,
  });
});

// Get all products
exports.getAllProducts = catchAsyncError(async (req, res) => {
  const products = await Product.find();

  return res.status(201).json({
    success: true,
    products,
  });
});

// Get product details
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  return res.status(200).json({
    success: true,
    product,
  });
});

// Update product - admin
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  let product = await Product.findById(id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json({
    seccess: true,
    product,
  });
});

// Delete product
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  await product.remove();

  return res.status(200).json({
    success: true,
    message: "Product delete successfully",
  });
});
