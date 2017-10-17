const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const insuranceSchema = new Schema({
    
    name: String,
    InsuranceId: Number
	
});

module.exports = mongoose.model('Insurance', insuranceSchema);