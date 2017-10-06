const mongoose = require('mongoose');
const Character = require('./character');
const Campaign = require('./campaign');
const Party = require('./party');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstname: String,
	lastname: String,
	email: String,
	password: String,
	characters: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
	campaigns: [{ type: Schema.Types.ObjectId, ref: 'Campaign' }],
	parties: [{ type: Schema.Types.ObjectId, ref: 'Party' }],
	npcs:[String]
});

module.exports = mongoose.model('User', userSchema);