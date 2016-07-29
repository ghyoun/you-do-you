var mongoose = require('mongoose');
var User = mongoose.model('User');

function GoalsController() {
    this.getGoals = function(req,res){
        if (req.session['userInfo'] == null) {
            res.json({status: false, goals: null});
        } else {
            User.findOne({email: req.session['userInfo'].email}, function(err, dbUser) {
                res.json({status:true, goals: dbUser.goals});
            });
        }
    }

    this.saveGoals = function(req, res) {
        if (req.session['userInfo'] == null) {
            res.json({status: false, goals: null});
        } else {
            User.findOne({email: req.session['userInfo'].email}, function(err, dbUser) {
                dbUser.goals = req.body;
                dbUser.save(function(err){
                    if(err) {
                        res.json({status:false, errors: err})
                    } else{
                        res.json({status:true, goals: dbUser.goals});
                    }
                })
            })
        }
    }
}

module.exports = new GoalsController();
