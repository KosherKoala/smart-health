const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Patient = require('./patient');

const eventSchema = new Schema ({
    eventId: Number,
    description: String,
    date: String,
    patient: { type: Schema.Types.ObjectId, ref: 'Patient' }, 
    timeIn: String,
    timeOut: String,
    isPending: Boolean
});

module.exports = mongoose.model('Event', eventSchema);