const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const procedureSchema = new Schema ({
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor'},
    name: String,
    cost: Number,
    description: String,
    duration: Number
});

module.exports = mongoose.model('Procedure', procedureSchema);