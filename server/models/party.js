const mongoose = require('mongoose');
const Character = require('./character');
const Campaign = require('./campaign');

const Schema = mongoose.Schema;

const partySchema = new Schema({
	name: String,
	dm: String,
	characters: [{character: { type: Schema.Types.ObjectId, ref: 'Character' }, user: String}],
	campaigns: [{ type: Schema.Types.ObjectId, ref: 'Campaign' }],
	image: String
});

module.exports = mongoose.model('Party', partySchema);