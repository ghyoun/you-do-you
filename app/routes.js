// Import Models
var Users = require('./models/Users.js');

module.exports = function(app) {
    // server routes ===========================================================
	// handle things like api calls
	// authentication routes
	var express = require('express');
	var router = express.Router();

    // frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};
