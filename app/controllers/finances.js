console.log('finances controller');
var mongoose = require('mongoose');
var User = mongoose.model('User');

function FinancesController() {
    this.getFinances = function(req,res){
        console.log(req.session['userInfo'].email);
        User.findOne({email: req.session['userInfo'].email}, function(err, dbUser) {
            res.json({status:true, finances: dbUser, currentSession: req.session['userInfo']});
        });
    }
}

module.exports = new FinancesController();
