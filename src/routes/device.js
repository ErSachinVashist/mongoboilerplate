const express = require('express');

const router = express.Router();
const Devices = require('../models/device')

router.get('/', async (_req, res) => {
  Devices.find({}, (err, data) => {
    res.json(data);
  })
});

router.get('/:id', async (_req, res) => {
  Devices.findById(_req.params.id, (err, data) => {
    res.json(data);
  })
});


module.exports = router;
