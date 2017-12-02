const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const autopopulate = require('mongoose-autopopulate');

const chatSchema = new Schema({
    sender:{type: Schema.Types.ObjectId},
    date: Date,
    message: String
});
module.exports = mongoose.model('Chat', chatSchema);