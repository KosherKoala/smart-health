const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const Doctor = require('./doctor');
const Note = require('./note');
const Chat = require('./chat');

const Schema = mongoose.Schema;

const historySchema = new Schema({

    doctor:  { type: Schema.Types.ObjectId, ref: 'Doctor'},
    patient: { type: Schema.Types.ObjectId, ref: 'Patient'},
    appointments: [{ type: Schema.Types.ObjectId, ref: 'Event'}],
    chat: [{ type: Schema.Types.ObjectId, ref: 'Chat'}]
	
});
historySchema.plugin(autopopulate);
module.exports = mongoose.model('History', historySchema);