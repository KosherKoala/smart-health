const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Patient = require('./patient');
const Doctor = require('./doctor');

const eventSchema = new Schema ({
    description: String,
    date: Date,
    patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' }, 
    timeIn: String,
    timeOut: String,
    isPending: Boolean
});

module.exports = mongoose.model('Event', eventSchema);