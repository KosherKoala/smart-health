const mongoose = require('mongoose');
const Health = require('./health');
const Insurance = require('./insurance');
const History = require('./history');
const autopopulate = require('mongoose-autopopulate');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	health: { type: Schema.Types.ObjectId, ref: 'Health' },
	insurance: {type:Schema.Types.ObjectId, ref: 'Insurance'},
	history: [{type: Schema.Types.ObjectId, ref: 'History'}],
	picture: String,
	isValidated: Boolean

});
patientSchema.plugin(autopopulate);

module.exports = mongoose.model('Patient', patientSchema);