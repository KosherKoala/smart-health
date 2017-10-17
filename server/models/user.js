const mongoose = require('mongoose');
const Health = require('./health');
const Insurance = require('./insurance');
const History = require('./history');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	key: Number,
	firstname: String,
	lastname: String,
	email: String,
	password: String,
	health: { type: Schema.Types.ObjectId, ref: 'Health' },
	insurance: {type:Schema.Types.ObjectId, ref: 'Insurance'},
	history: [{type: Schema.Types.ObjectId, ref: 'History'}],
	picture: String,
	isValidated: Boolean

});

module.exports = mongoose.model('User', userSchema);