const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
	title: String,
	session: String,
	dm: String,
	author: String,
	body: String,
	character: String,
	image: String
}, { timestamps: { createdAt: 'created_at' }} );

module.exports = mongoose.model('Post', postSchema);