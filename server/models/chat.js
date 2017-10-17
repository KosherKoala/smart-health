const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    sender: String,
    date: String,
    message: String
});

module.exports = mongoose.model('Chat', CommentSchema);