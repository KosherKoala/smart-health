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
    isPending: Boolean,
    procedure: { type: Schema.Types.ObjectId, ref: 'Procedure', autopopulate: true}
});
appointmentSchema.plugin(autopopulate);

module.exports = mongoose.model('Appointment', appointmentSchema);