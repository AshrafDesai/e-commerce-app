const Order = require('../models/Order');

// POST create order
const createOrder = async (req, res) => {
  const { items, totalPrice } = req.body;
  if (!items || items.length === 0)
    return res.status(400).json({ message: 'No items in order' });

  const order = await Order.create({ user: req.user._id, items, totalPrice });
  res.status(201).json(order);
};

// GET logged-in user's orders
const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};

// GET all orders (Admin only)
const getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('user', 'name email');
  res.json(orders);
};

// ✅ NEW: PUT update order status (Admin only)
const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    order.status = req.body.status;
    if (req.body.status === 'delivered') order.isPaid = true;

    const updated = await order.save();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder, getMyOrders, getAllOrders, updateOrderStatus };