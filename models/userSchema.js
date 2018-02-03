var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    mobileNumber: { type: Number },
    username: {type: String},
    password: { type: String },
});

module.exports = mongoose.model('User', schema);
