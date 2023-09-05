
// const mongoose = require('mongoose');

// const taskSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   completed: Boolean,
// });

// module.exports = mongoose.model('Task', taskSchema);


const mongoose = require('mongoose');

// Define the schema for the Customer Entity
const customerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  dateOfBirth: { type: Date },
  PhoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String },
  interests: { type: String },
  country: { type: String },
  profilePic: { type: String },
  address: {
    street: { type: String },
    city: { type: String },
  },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  ProductReview: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductReview' }],
  Assign_Product: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assign_Product' }],
  DeliveryMan_Review: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DeliveryMan_Review' }],
});

// Define the schema for the ProductReview Entity
const productReviewSchema = new mongoose.Schema({
  Review: { type: String },
  Date: { type: String },
  rating: { type: Number },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  products: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
});

// Define the schema for the Assign_Product Entity
const assignProductSchema = new mongoose.Schema({
  Product_Name: { type: String },
  Problem: { type: String },
  Date: { type: String },
  Pic: { type: String },
  Address: { type: String },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
});

// Define the schema for the DeliveryMan_Review Entity
const deliveryManReviewSchema = new mongoose.Schema({
  Review: { type: String },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  Date: { type: String },
});

// Define the schema for the PinCodeEntity Entity
const pinCodeSchema = new mongoose.Schema({
  Pin_Code: { type: String },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
});

// Create and export the models based on the schemas
const Customer = mongoose.model('Customer', customerSchema);
const ProductReview = mongoose.model('ProductReview', productReviewSchema);
const Assign_Product = mongoose.model('Assign_Product', assignProductSchema);
const DeliveryMan_Review = mongoose.model('DeliveryMan_Review', deliveryManReviewSchema);
const PinCodeEntity = mongoose.model('PinCodeEntity', pinCodeSchema);

module.exports = {
  Customer,
  ProductReview,
  Assign_Product,
  DeliveryMan_Review,
  PinCodeEntity,
};
