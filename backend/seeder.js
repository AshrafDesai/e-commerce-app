const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
  {
    name: 'iPhone 15 Pro',
    description: 'Latest Apple smartphone with A17 chip',
    price: 999,
    image: 'https://via.placeholder.com/300/1a1a2e/ffffff?text=iPhone+15',
    category: 'Electronics',
    stock: 50
  },
  {
    name: 'Samsung Galaxy S24',
    description: 'Flagship Android phone with AI features',
    price: 849,
    image: 'https://via.placeholder.com/300/e94560/ffffff?text=Galaxy+S24',
    category: 'Electronics',
    stock: 30
  },
  {
    name: 'Sony WH-1000XM5',
    description: 'Premium noise cancelling headphones',
    price: 349,
    image: 'https://via.placeholder.com/300/0f3460/ffffff?text=Sony+XM5',
    category: 'Audio',
    stock: 25
  },
  {
    name: 'MacBook Pro 14"',
    description: 'Apple M3 chip, 16GB RAM, 512GB SSD',
    price: 1999,
    image: 'https://via.placeholder.com/300/16213e/ffffff?text=MacBook+Pro',
    category: 'Laptops',
    stock: 15
  },
  {
    name: 'Nike Air Max 270',
    description: 'Comfortable running shoes with Air cushioning',
    price: 150,
    image: 'https://via.placeholder.com/300/e94560/ffffff?text=Nike+Air',
    category: 'Shoes',
    stock: 100
  },
  {
    name: 'Logitech MX Master 3',
    description: 'Advanced wireless mouse for professionals',
    price: 99,
    image: 'https://via.placeholder.com/300/1a1a2e/ffffff?text=MX+Master',
    category: 'Accessories',
    stock: 40
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');

    await Product.deleteMany(); // Clear existing products
    await Product.insertMany(products);

    console.log('✅ Sample products added successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

seedDB();