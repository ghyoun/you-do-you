// grab the mongoose module
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    hash: String,
    salt: String
});

var User = mongoose.model('User', userSchema);
