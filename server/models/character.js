const mongoose = require('mongoose');
const Stat = require('./stat');

const Schema = mongoose.Schema;

const characterSchema = new Schema({
	name: String,
	image: String,
	player: String,
	desc_short: String,
	desc:String,
	backstory: String,
	level: Number,
	race: String,
	alignment: String,
	class: String,
	hit_points: Number,
	ac: Number,
	speed: Number,
	initiative: Number,
	ability_scores: {str:Number, dex:Number, con:Number, int:Number, wis:Number, cha:Number},
	saves: {str:Number, dex:Number, con:Number, int:Number, wis:Number, cha:Number},
	skill_scores: {
					acro:Number, 
					anim:Number, 
					arca:Number, 
					athl:Number, 
					dece:Number, 
					hist:Number,
					insi:Number, 
					inti:Number, 
					inve:Number, 
					medi:Number, 
					natu:Number, 
					perc:Number,
					perf:Number, 
					pers:Number, 
					reli:Number, 
					slei:Number, 
					stea:Number, 
					surv:Number},
	adventure_stats: { type: Schema.Types.ObjectId, ref: 'Stat' }
});

module.exports = mongoose.model('Character', characterSchema);