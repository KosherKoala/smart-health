const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const Schema = mongoose.Schema;

const procedureSchema = new Schema ({
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor'},
    name: String,
    cost: Number,
    description: String,
    duration: Number
});
procedureSchema.plugin(autopopulate);

module.exports = mongoose.model('Procedure', procedureSchema);