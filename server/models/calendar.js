
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autopopulate = require('mongoose-autopopulate');
const Doctor = require('./doctor');
const Appointment = require('./appointment');
const Procedure = require('./procedure');
const Rrule = require('rrule');

const calendarSchema = new Schema ({
    
    appointments: [{type: Schema.Types.ObjectId, ref: 'Appointment', autopopulate: true}],
    slots: [{
        // rrule: Rrule,
        rrule:  {   freq: Number,
                    dtstart: Date,
                    until: Date,
                    count: Number,
                    interval: Number,
                    wkst:Number,
                    bymonth: [Number],
                    byweekday: [Number] },
        procedure: { type: Schema.Types.ObjectId, ref: 'Procedure', autopopulate: true}
    }]
    
});
calendarSchema.plugin(autopopulate);

module.exports = mongoose.model('Calendar', calendarSchema);