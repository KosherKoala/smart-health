const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const autopopulate = require('mongoose-autopopulate');


const userSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', autopopulate: true},
    patient: { type: Schema.Types.ObjectId, ref: 'Patient', autopopulate: true},
    picture: String
});
userSchema.plugin(autopopulate);

module.exports = mongoose.model('User', userSchema);