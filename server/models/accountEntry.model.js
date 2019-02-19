const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountEntrySchema = new Schema({
    date: {type: Date, required: true},
    concept: {type: String, required:true, max: 250},
    amount: {type: Number,required:true},
});


// Export the model
module.exports = mongoose.model('AccountEntry', AccountEntrySchema);
