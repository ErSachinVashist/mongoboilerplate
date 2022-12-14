const mongoose = require('mongoose');

const customersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    addedOn: {
        type: Date,
        required: true,
        default: Date.now
    }
}, { collection: 'customer' })

module.exports = mongoose.model('Customer', customersSchema);