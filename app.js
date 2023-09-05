
const express = require('express');
// const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const { Customer } = require('./src/models/customer.entity');
const CustomerService = require('./src/services/customer.service');
const customerRoutes = require('./src/controllers/customer.controller');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
// app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

// Connect to MongoDB
  mongoose.connect('mongodb://127.0.0.1:27017/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Initialize multer storage for file uploads
const storage = multer.diskStorage({
  destination: './uploads/customer_register_img',
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, callback) => {
    if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/)) {
      callback(null, true);
    } else {
      callback(new Error('File type not allowed'), false);
    }
  },
});

// Set up routes
app.use('/api/customer', customerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
