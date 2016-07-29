var mongoose = require('mongoose');
var User = mongoose.model('User');

function TasksController() {
    this.getTasks = function(req,res){
        if (req.session['userInfo'] == null) {
            res.json({status: false, tasks: null});

        } else {
            User.findOne({email: req.session['userInfo'].email}, function(err, dbUser) {
                res.json({status:true, tasks: dbUser.tasks});
            });
        }
    }

    this.saveTasks = function(req, res) {
        if (req.session['userInfo'] == null) {
            res.json({status: false, tasks: null});
        } else {
            User.findOne({email: req.session['userInfo'].email}, function(err, dbUser) {
                dbUser.tasks = req.body;
                dbUser.save(function(err){
                    if(err) {
                        res.json({status:false, errors: err})
                    } else{
                        res.json({status:true, task: dbUser.tasks});
                    }
                })
            })
        }
    }
}

module.exports = new TasksController();
