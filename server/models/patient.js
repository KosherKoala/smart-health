const mongoose = require('mongoose');
const Health = require('./health');
const Insurance = require('./insurance');
const History = require('./history');
const autopopulate = require('mongoose-autopopulate');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
	firstName: String,
	lastName: String,
	health: { type: Schema.Types.ObjectId, ref: 'Health', autopopulate: true },
	insurance: {type:Schema.Types.ObjectId, ref: 'Insurance', autopopulate: true},
	history: [{type: Schema.Types.ObjectId, ref: 'History'}],
	picture: String,
	isValidated: {type:Boolean, default: false}

});
patientSchema.plugin(autopopulate);

module.exports = mongoose.model('Patient', patientSchema);