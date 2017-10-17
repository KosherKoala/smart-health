const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const healthSchema = new Schema({
	height: String,
	weight: String,
	age: String,
	sex: String,
	bloodType: String,
	medication: [String],
	allergies: [String],
	conditions: [String]
	
});

module.exports = mongoose.model('Health', healthSchema);