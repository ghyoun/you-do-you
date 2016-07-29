var mongoose = require('mongoose');
var User = mongoose.model('User');

function GoalsController() {
    // this.getGoals = function(req,res){
    //     if (req.session['userInfo'] == null) {
    //         res.json({status: false, finances: null});
    //     } else {
    //         User.findOne({email: req.session['userInfo'].email}, function(err, dbUser) {
    //             res.json({status:true, finances: dbUser.finance});
    //         });
    //     }
    // }
    //
    // this.saveGoals = function(req, res) {
    //     if (req.session['userInfo'] == null) {
    //         res.json({status: false, finances: null});
    //     } else {
    //         User.findOne({email: req.session['userInfo'].email}, function(err, dbUser) {
    //             dbUser.finance = {
    //                 monthly_income: req.body.monthly_income,
    //                 recuring: req.body.recuring,
    //                 one_time: req.body.one_time
    //             };
    //             dbUser.markModified('finance');
    //             dbUser.save(function(err){
    //                 if(err) {
    //                     res.json({status:false, errors: err})
    //                 } else{
    //                     res.json({status:true, finance: dbUser.finance});
    //                 }
    //             })
    //             console.log(req.body);
    //             console.log(dbUser);
    //         })
    //     }
    // }
}

module.exports = new GoalsController();
