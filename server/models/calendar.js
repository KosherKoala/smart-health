const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const autopopulate = require('mongoose-autopopulate');
const Doctor = require('./doctor');
const Event = require('./event');

const calendarSchema = new Schema ({
    
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    events: [{type: Schema.Types.ObjectId, ref: 'Event' }],
});
calendarSchema.plugin(autopopulate);

module.exports = mongoose.model('Calendar', calendarSchema);