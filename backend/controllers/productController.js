const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeature");
// create product--Admin
exports.createProduct = catchAsyncErrors(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    success: true,
    product,
  });
});

// get all product
exports.getAllProduct = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 5;
  const productCount = await Product.countDocuments();
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const product = await apiFeature.query;
  res.status(200).json({
    success: true,
    product,
  });
});

// get single product
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found"), 404);
  }
  res.status(200).json({
    success: true,
    product,
    productCount
  });
});

// update product --Admin
exports.updateProduct = catchAsyncErrors(async (req, res) => {
  let product = Product.findById(req.param.id);
  if (!product) {
    return next(new ErrorHandler("Product not found"), 404);
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    renValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete product
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found"), 404);
  }
  await product.remove();

  res.status(200).json({
    success: true,
    message: "product deleted",
  });
});
