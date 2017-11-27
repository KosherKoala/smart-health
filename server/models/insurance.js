const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const insuranceSchema = new Schema({
    name: String,
});

module.exports = mongoose.model('Insurance', insuranceSchema);