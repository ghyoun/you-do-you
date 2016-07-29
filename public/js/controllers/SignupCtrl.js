(function(){
	'use strict'
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
					$location.url('/dash')
                } else {
                    console.log(factoryData.data.errors);
                    self.errors = factoryData.data.errors;
                }
            });
        };
    };
})()
