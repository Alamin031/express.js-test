const express = require('express');
const router = express.Router();
const multer = require('multer');
const { Customer } = require('../models/customer.entity');
const CustomerService = require('../services/customer.service');

router.post('/signup', async (req, res) => {
  try {
    const data = req.body;
    const customerService = new CustomerService();
    const Customer = await customerService.signup(data);
    res.status(201).json(Customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
