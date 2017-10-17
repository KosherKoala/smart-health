const mongoose = require('mongoose');

const Doctor = require('./Doctor');
const Note = require('./Note');
const Chat = require('./Chat');

const Schema = mongoose.Schema;

const historySchema = new Schema({

    doctor:  { type: Schema.Types.ObjectId, ref: 'Doctor'},
    notes: [{ type: Schema.Types.ObjectId, ref: 'Note'}],
    chat: [{ type: Schema.Types.ObjectId, ref: 'Chat'}]
	
});

module.exports = mongoose.model('History', historySchema);