const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const autopopulate = require('mongoose-autopopulate');
const Doctor = require('./doctor');
const Appointment = require('./appointment');
const Procedure = require('./procedure');
const Rrule = 'rrule';

const calendarSchema = new Schema ({

    appointments: [{type: Schema.Types.ObjectId, ref: 'Appointment' }],
    slots: [{
        rrule: Rrule,
        procedure: { type: Schema.Types.ObjectId, ref: 'Procedure'}
    }]
    
});
calendarSchema.plugin(autopopulate);

module.exports = mongoose.model('Calendar', calendarSchema);