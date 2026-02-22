const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus
} = require('../controllers/orderController');

router.post('/',          protect,        createOrder);
router.get('/mine',       protect,        getMyOrders);
router.get('/all',        protect, admin, getAllOrders);
router.put('/:id/status', protect, admin, updateOrderStatus); // ✅ NEW

module.exports = router;