const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const autopopulate = require('mongoose-autopopulate');
const Procedure = require('./procedure');
const Patient = require('./patient');
const Insurance = require('./insurance');
const History = require('./history');

const doctorSchema = new Schema ({
    firstName: String,
    lastName: String,
    procedures: [{ type: Schema.Types.ObjectId, ref: 'Procedure', autopopulate: true}],
    practiceName: String,
    calendar: { type: Schema.Types.ObjectId, ref: 'Calendar'},
    specialty: String,
    acceptedInsurance: [{ type: Schema.Types.ObjectId, ref: 'Insurance', autopopulate: true}],
    email: String,
    phone: String,
    location: {
                line_1: String,
                line_2: String,
                city: String,
                state: String,
                zip: Number
            },
    history: [{ type: Schema.Types.ObjectId, ref: 'History'}],
    picture: String
});
doctorSchema.plugin(autopopulate);

module.exports = mongoose.model('Doctor', doctorSchema);