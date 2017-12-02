const mongoose = require('mongoose');
const Doctor = require('./doctor');
const Patient = require('./patient');
const Chat = require('./chat');
const Appointment = require('./appointment');
const autopopulate = require('mongoose-autopopulate');

const Schema = mongoose.Schema;

const historySchema = new Schema({

    doctor:  { type: Schema.Types.ObjectId, ref: 'Doctor', autopopulate: true},
    patient: { type: Schema.Types.ObjectId, ref: 'Patient', autopopulate: true},
    appointments: [{ type: Schema.Types.ObjectId, ref: 'Appointment', autopopulate: true}],
    chat: [{ type: Schema.Types.ObjectId, ref: 'Chat', autopopulate: true}]

});

historySchema.plugin(autopopulate);

module.exports = mongoose.model('History', historySchema);