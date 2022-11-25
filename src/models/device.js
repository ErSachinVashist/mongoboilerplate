const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    }
}, { collection: 'device' })

module.exports = mongoose.model('Device', deviceSchema);