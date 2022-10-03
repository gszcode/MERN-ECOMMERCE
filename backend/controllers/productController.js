const Product = require("../models/productModel");

// Create product
exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  return res.status(201).json({
    success: true,
    product,
  });
};

// Get all products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();

  return res.status(201).json({
    success: true,
    products,
  });
};

// Get product details
exports.getProductDetails = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  return res.status(200).json({
    success: true,
    product,
  });
};

// Update product - admin
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  let product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({
      seccess: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json({
    seccess: true,
    product,
  });
};

// Delete product
exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  await product.remove();

  return res.status(200).json({
    success: true,
    message: "Product delete successfully",
  });
};
