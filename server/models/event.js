const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = require('./user');

const eventSchema = new Schema ({
    eventId: Number,
    description: String,
    date: String,
    patient: { type: Schema.Types.ObjectId, ref: 'User' }, 
    timeIn: String,
    timeOut: String,
    isPending: Boolean
});

module.exports = mongoose.model('Event', eventSchema);