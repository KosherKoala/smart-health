const mongoose = require('mongoose');
const Character = require('./character');
const Session = require('./session');
const Npc = require('./npc');

const Schema = mongoose.Schema;

const campaignSchema = new Schema({
	title: String,
	dm: String,
	characters: [{character: { type: Schema.Types.ObjectId, ref: 'Character' }, user: String}],
	sessions: [{ type: Schema.Types.ObjectId, ref: 'Session' }],
	npcs:[{ type: Schema.Types.ObjectId, ref: 'Npc' }],
	image: String
});

module.exports = mongoose.model('Campaign', campaignSchema);