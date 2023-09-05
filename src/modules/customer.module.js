// modules/task.module.js
const express = require('express');
const { getTasks, createTask } = require('../controllers/customer.controller');

const router = express.Router();

router.get('/tasks', getTasks);
router.post('/tasks', createTask);

module.exports = router;
