const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const statSchema = new Schema({
	character_name: String,
	character_id: String,
    final_blows: Number,
    assists: Number,
    damage_done: Number,
    damage_taken: Number,
    healing_done: Number,
    unconcious: Number,
    deaths: Number,
    natural_20s: Number,
    natural_1s: Number,
    hdywtdt: Number
});

module.exports = mongoose.model('Stat', statSchema);