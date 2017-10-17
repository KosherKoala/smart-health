const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema ({

    addressOne: String,
    addressTwo: String,
    city: String,
    state: String,
    zip: Number
});

module.exports = mongoose.model('Location', locationSchema);