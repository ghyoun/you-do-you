// Import Controllers
var user = require('./controllers/users.js');

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

	app.post('/signup', user.create);
	app.post('/login', user.login);
};
