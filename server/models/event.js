const mongoose = require('mongoose');

const User = require('./user');

const eventSchema = new Schema ({
    eventId: Number,
    description: String,
    date: String,
    patient: { type: Schema.Types.ObjectId, ref: 'User' }, 
    timeIn: String,
    timeOut: String,
    isCancelled: Boolean
});

module.exports = mongoose.model('Event', eventSchema);