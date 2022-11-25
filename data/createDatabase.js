const mongoose = require('mongoose')
const config = require('../common/config')
const customerModel = require('../src/models/customer')
const deviceModel = require('../src/models/device')
const customerData = require('./customers.json')
const deviceData = require('./devices.json')

// Connect to DATABASE
mongoose.connect(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection

db.on('error', (err) => console.log(err))
db.once('open', () => {
    console.log('Database connected...')
    refreshAll()
})

const refreshAll = async () => {

    await deviceModel.deleteMany({})
    await deviceModel.insertMany(deviceData)

    await customerModel.deleteMany({})
    await customerModel.insertMany(customerData)
    console.log('Data Added')
    await mongoose.disconnect();
}

