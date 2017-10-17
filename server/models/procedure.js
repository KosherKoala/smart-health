const mongoose = require('mongoose');

const procedureSchema = new Schema ({
    name: String,
    cost: Number,
    description: String,
    duration: Number
});

module.exports = mongoose.model('Procedure', procedureSchema);