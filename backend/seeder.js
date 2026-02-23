const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
  {
    name: 'iPhone 15 Pro',
    description: 'Apple iPhone 15 Pro with A17 Pro chip, titanium design, 48MP camera system and Action Button.',
    price: 999,
    image: 'https://cdn.dribbble.com/userupload/10281316/file/original-d0f025dd484d693961c9bc70609cfc85.jpg?resize=1504x1128&vertical=center',
    category: 'Electronics',
    stock: 50
  },
  {
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Samsung Galaxy S24 Ultra with Snapdragon 8 Gen 3, 200MP camera, built-in S Pen and Galaxy AI.',
    price: 1299,
    image: 'https://cdn.dribbble.com/userupload/13093279/file/original-33ac446aefefd992772e49d1c9e3b477.jpg?resize=1504x1003&vertical=center',
    category: 'Electronics',
    stock: 30
  },
  {
    name: 'Sony WH-1000XM5',
    description: 'Sony WH-1000XM5 industry leading noise cancelling headphones with 30hr battery life.',
    price: 349,
    image: 'https://cdn.dribbble.com/userupload/13099352/file/original-732c47ace4fbcccb268b011ea2885b14.jpg?resize=1504x1078&vertical=center',
    category: 'Audio',
    stock: 25
  },
  {
    name: 'MacBook Pro 14"',
    description: 'Apple MacBook Pro 14 inch with M3 chip, 16GB RAM, 512GB SSD and Liquid Retina XDR display.',
    price: 1999,
    image: 'https://cdn.dribbble.com/userupload/9010632/file/original-b7a08910eb54e575f30ed6e2921dc763.png?resize=1504x1128&vertical=center',
    category: 'Laptops',
    stock: 15
  },
  {
    name: 'Nike Air Max 270',
    description: 'Nike Air Max 270 with the biggest Air unit yet for all-day comfort and bold style.',
    price: 150,
    image: 'https://cdn.dribbble.com/userupload/42039394/file/original-e3f99fb0d16fc1079a8090d8dedd67f7.png?resize=1000x750&vertical=center',
    category: 'Shoes',
    stock: 100
  },
  {
    name: 'Logitech MX Master 3',
    description: 'Logitech MX Master 3 advanced wireless mouse with MagSpeed scrolling and ergonomic design.',
    price: 99,
    image: 'https://cdn.dribbble.com/userupload/17997224/file/original-499c39570f1fa4454e9baa0b14de0a0e.jpg?resize=1024x1024&vertical=center',
    category: 'Accessories',
    stock: 40
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log('✅ Products with real images added successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

seedDB();