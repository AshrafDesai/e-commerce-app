import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api'
});

// Automatically attach JWT token to every request
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

// AUTH
export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser    = (data) => API.post('/auth/login', data);

// PRODUCTS
export const getProducts    = (search = '') => API.get(`/products?search=${search}`);
export const getProductById = (id)          => API.get(`/products/${id}`);
export const createProduct  = (data)        => API.post('/products', data);
export const updateProduct  = (id, data)    => API.put(`/products/${id}`, data);
export const deleteProduct  = (id)          => API.delete(`/products/${id}`);

// ORDERS
export const createOrder  = (data) => API.post('/orders', data);
export const getMyOrders  = ()     => API.get('/orders/mine');
export const getAllOrders  = ()     => API.get('/orders/all');

// ✅ NEW: Update order status (Admin)
export const updateOrderStatus = (id, status) => API.put(`/orders/${id}/status`, { status });