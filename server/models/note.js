const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    
    date: String,
    note: String,
    specialty: String
	
});

module.exports = mongoose.model('Note', noteSchema);