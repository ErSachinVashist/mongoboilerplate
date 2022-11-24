
const express = require('express');
const app = express()

const customerRoutes = require('./routes/customer')
const deviceRoutes = require('./routes/device')

// configure apis
app.use('/customers', customerRoutes);
app.use('/devices', deviceRoutes);

module.exports = app;
