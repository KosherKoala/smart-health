const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const autopopulate = require('mongoose-autopopulate');
const Doctor = require('./doctor');
const Appointment = require('./appointment');
const Procedure = require('./procedure');

const calendarSchema = new Schema ({
    
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    appointments: [{type: Schema.Types.ObjectId, ref: 'Appointment' }],
    slots: {
        startDate: Date,
        endDate: Date,
        procedure: { type: Schema.Types.ObjectId, ref: 'Procedure'},
        reoccurrence: [String]
    }
});
calendarSchema.plugin(autopopulate);

module.exports = mongoose.model('Calendar', calendarSchema);