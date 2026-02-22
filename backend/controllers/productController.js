const Product = require('../models/Product');

// GET all products (with optional search)
const getProducts = async (req, res) => {
  const keyword = req.query.search
    ? { name: { $regex: req.query.search, $options: 'i' } }
    : {};
  const products = await Product.find(keyword);
  res.json(products);
};

// GET single product
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ message: 'Product not found' });
};

// POST create product (Admin only)
const createProduct = async (req, res) => {
  const { name, description, price, image, category, stock } = req.body;
  const product = await Product.create({ name, description, price, image, category, stock });
  res.status(201).json(product);
};

// PUT update product (Admin only)
const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    Object.assign(product, req.body);
    const updated = await product.save();
    res.json(updated);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

// DELETE product (Admin only)
const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.deleteOne();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };