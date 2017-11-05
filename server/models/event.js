const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const autopopulate = require('mongoose-autopopulate');
const Patient = require('./patient');
const Doctor = require('./doctor');
const Procedure = require('./procedure');

const eventSchema = new Schema ({
    description: String,
    date: Date,
    patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' }, 
    timeIn: String,
    timeOut: String,
    isPending: Boolean,
    procedure: { type: Schema.Types.ObjectId, ref: 'Procedure'}
});
eventSchema.plugin(autopopulate);

module.exports = mongoose.model('Event', eventSchema);