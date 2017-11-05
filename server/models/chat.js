const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const autopopulate = require('mongoose-autopopulate');

const chatSchema = new Schema({
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor'},
    patient: { type: Schema.Types.ObjectId, ref: 'Patient'},
    sender:{ type: Schema.Types.ObjectId},
    date: Date,
    message: String
});
chatSchema.plugin(autopopulate);
module.exports = mongoose.model('Chat', chatSchema);