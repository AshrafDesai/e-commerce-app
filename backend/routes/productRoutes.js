const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const {
  getProducts, getProductById,
  createProduct, updateProduct, deleteProduct
} = require('../controllers/productController');

router.get('/',          getProducts);
router.get('/:id',       getProductById);
router.post('/',         protect, admin, createProduct);   // Admin only
router.put('/:id',       protect, admin, updateProduct);   // Admin only
router.delete('/:id',    protect, admin, deleteProduct);   // Admin only

module.exports = router;