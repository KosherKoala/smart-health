const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const autopopulate = require('mongoose-autopopulate');
const Procedure = require('./procedure');
const Patient = require('./patient');
const Event = require('./event');
const Insurance = require('./insurance');


const doctorSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    procedures: [{ type: Schema.Types.ObjectId, ref: 'Procedure'}],
    patientList: [{ type: Schema.Types.ObjectId, ref: 'Patient'}],
    practiceName: String,
    calendar: [{ type: Schema.Types.ObjectId, ref: 'Calendar'}],
    specialty: String,
    acceptedInsurance: [{ type: Schema.Types.ObjectId, ref: 'Insurance'}],
    location: {
                addressOne: String,
                 addressTwo: String,
                city: String,
                state: String,
                zip: Number
            },

    picture: String
});
doctorSchema.plugin(autopopulate);

module.exports = mongoose.model('Doctor', doctorSchema);