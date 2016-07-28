console.log('users controller');
var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController() {
    this.create = function(req,res){
          var newUser = new User(req.body);
          console.log(req.body);
          User.findOne({name:req.body.email}, function(err, dbUser){
			// console.log(newUser)
			// console.log(req.body.first)
			if(err) {
                res.json({status:false, errors: err})
			} else if(dbUser){
				res.json({status:false, errors:"Email already taken"})
			}else{
				newUser.save(function(err){
					if(err) {
                        res.json({status:false, errors: err})
					} else{
						req.session['userInfo'] = {
							id: newUser.id,
							email: newUser.email
						}
						res.json({status:true, userInfo: req.session['userInfo']})
					}
				})
			}
		})
    };

    this.login: function(req,res) {
        User.findOne({email: req.body.email}, function(err, dbUser) {
            if (err) {
                res.json({status: false, errors: err});
            } else if (dbUser) {
                if(dbUser.password == req.body.password) {
                    req.session['userInfo'] = {
                        id: newUser.id,
                        email: newUser.email
                    }
                    res.json({status:true, userInfo: req.session['userInfo']});
                } else {
                    res.json({status:false, errors: 'Incorrect password');
                }
            } else {
                res.json({status:false, errors: 'Incorrect username');
            }
        });
    };

    this.logout: function(req, res) {
        req.session.destroy(function(err){
			if(err) {
                res.json({status:false, errors: err})
            } else {
				res.json({status:true})
            }
		})
    };

    this.session: function(req,res){
		if(req.session['userInfo']) {
            res.json({status:true, userInfo: req.session['userInfo']})
		} else {
			res.json({status:false, userinfo:null})
		}
	}
}

module.exports = new UsersController();
