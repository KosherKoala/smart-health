const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const Schema = mongoose.Schema;

const healthSchema = new Schema({
	patient: { type: Schema.Types.ObjectId, ref: 'Patient'},
	height: String,
	weight: String,
	age: String,
	sex: String,
	bloodType: String,
	medication: [String],
	allergies: [String],
	conditions: [String]
	
});
healthSchema.plugin(autopopulate);

module.exports = mongoose.model('Health', healthSchema);