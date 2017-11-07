const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const autopopulate = require('mongoose-autopopulate');
const Doctor = require('./doctor');
const Appointment = require('./appointment');

const calendarSchema = new Schema ({
    
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    appointments: [{type: Schema.Types.ObjectId, ref: 'Appointment' }],
});
calendarSchema.plugin(autopopulate);

module.exports = mongoose.model('Calendar', calendarSchema);