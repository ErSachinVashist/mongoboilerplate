const express = require('express');

const router = express.Router();
const Customers = require('../models/customer')

router.get('/', async (_req, res) => {
  Customers.find({}, (err, data) => {
    res.json(data);
  })
});

router.get('/:id', async (_req, res) => {
  Customers.findById(_req.params.id, (err, data) => {
    res.json(data);
  })
});

module.exports = router;
