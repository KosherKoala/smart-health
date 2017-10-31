const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatSchema = new Schema({
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor'},
    patient: { type: Schema.Types.ObjectId, ref: 'Patient'},
    sender:{ type: Schema.Types.ObjectId},
    date: Date,
    message: String
});

module.exports = mongoose.model('Chat', chatSchema);