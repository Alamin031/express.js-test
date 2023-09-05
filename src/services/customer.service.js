const bcrypt = require('bcrypt');
const { Customer } = require('../models/customer.entity');

class CustomerService {
  async signup(data) {
    const salt = await bcrypt.genSalt();
    data.password = await bcrypt.hash(data.password, salt);
    const customer = new Customer(data);
    await customer.save();
    return customer;
  } catch (error) {
    throw new Error('Registration failed: ' + error.message);
  }
}

module.exports = CustomerService;
