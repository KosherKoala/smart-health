const mongoose = require('mongoose');
const Comment = require('./comment');

const Schema = mongoose.Schema;

const npcSchema = new Schema({
	name: String,
	image: String,
	desc_short: String,
	desc:String,
	race: String,
	class: String,
	status: String,
	location: String,
	campaign: String,
	occupation: String,
	dm:String,
	aliases: String,
	comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]

});


module.exports = mongoose.model('Npc', npcSchema);