const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const autopopulate = require('mongoose-autopopulate');
const Patient = require('./patient');
const Doctor = require('./doctor');
const Procedure = require('./procedure');

const appointmentSchema = new Schema ({
    description: String,
    date: Date,
    patient: { type: Schema.Types.ObjectId, ref: 'Patient', autopopulate: true },
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', autopopulate: true }, 
    timeIn: String,
    timeOut: String,
    isPending: {type: Boolean, default: true},   // if the doctor accepted it
    isCompleted: {type: Boolean, default: false}, // if the appointment finished
    isActive: {type: Boolean, default: true},    // if either has cancelled it.
    procedure: { type: Schema.Types.ObjectId, ref: 'Procedure', autopopulate: true},
    message: String
});
appointmentSchema.plugin(autopopulate);

module.exports = mongoose.model('Appointment', appointmentSchema);