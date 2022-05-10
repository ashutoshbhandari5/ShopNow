import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//description   Fetch all products
//route   GET /api/products all products
//access  Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

//description   Fetch single products
//route   GET /api/products all products
//access  Public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error(`Product id of ${req.params.id} not found`);
  }
});
