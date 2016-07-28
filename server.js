// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser     = require('body-parser');
var flash    = require('connect-flash');

var methodOverride = require('method-override');
var session = require('express-session');
var db = require('./config/db');


// configuration ===========================================
mongoose.connect(db.url); // // connect to our mongoDB database

//app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
// mongoose.createConnection(db.url); // connect to your mongoDB database (commented back in after you enter in your own credentials)
mongoose.connection.on('error', console.log);

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);
console.log('Go to localhost:' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app