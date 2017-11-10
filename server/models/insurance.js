const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const insuranceSchema = new Schema({
    
<<<<<<< HEAD
    name: String,
=======
    name: String
	
>>>>>>> 890063e3a238b8d264a122dc0fc2d23b906fca51
});

module.exports = mongoose.model('Insurance', insuranceSchema);