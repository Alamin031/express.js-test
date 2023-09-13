const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Customer } = require('../models/customer.entity');

class AuthService {
  static generateToken(customerDetails) {
    const payload = {
      customerID: customerDetails.customerid,
      email: customerDetails.email,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });

    return { access_token: token };
  }
}

module.exports = AuthService;
