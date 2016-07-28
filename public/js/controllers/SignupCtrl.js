(function(){
	'use strict'
    console.log('user controller');
    angular
        .module('youDoYou')
        .controller('SignupController', signupCtrl)

    function signupCtrl(userFactory, $location) {
        var self = this;

        self.signup = function() {
            userFactory.signup(self.signupInfo, function(factoryData) {
                console.log(factoryData);
                if (factoryData.data.status) {
                    self.user = factoryData.data.userInfo;
                } else {
                    console.log(factoryData.data.errors);
                    self.errors = factoryData.data.errors;
                }
            });
        };

        self.login = function() {
            userFactory.login(self.loginInfo, function(factoryData) {
                console.log(factoryData);
                if (factoryData.data.status) {
                    self.user = factoryData.data.userInfo;
                    $location.url('/dash')
                } else {
                    console.log(factoryData.data.errors);
                    self.errors = factoryData.data.errors;
                }
            });
        };
    };
})()
