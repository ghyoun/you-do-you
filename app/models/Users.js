// grab the mongoose module
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
        minlength: 2
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2
    },
    password: {
        type: String,
        require: true,
        minlength: 8
    },
}, {timestamps: true});


userSchema.methods.validUser = function(enteredEmail){

	if(enteredEmail == this.email){
		return true
	}else{
		return false
	}
}

var User = mongoose.model('User', userSchema);
