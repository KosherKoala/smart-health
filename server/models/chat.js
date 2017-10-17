const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatSchema = new Schema({
    sender: String,
    date: String,
    message: String
});

module.exports = mongoose.model('Chat', chatSchema);