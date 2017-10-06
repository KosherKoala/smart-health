const mongoose = require('mongoose');
const Character = require('./character');
const User = require('./user');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	author: { type: Schema.Types.ObjectId, ref: 'User' },
	character: { type: Schema.Types.ObjectId, ref: 'Character' },
	dm: String,
	post: String,
	body: String,
	npc: Boolean
}, { timestamps: { createdAt: 'created_at' }} );

module.exports = mongoose.model('Comment', CommentSchema);