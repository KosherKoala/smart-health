const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
	title: String,
	number: Number,
	dm: String,
	players: [String],
	posts: [String],
	image: String,
	campaign: String
}, { timestamps: { createdAt: 'created_at' }} );

module.exports = mongoose.model('Session', sessionSchema);