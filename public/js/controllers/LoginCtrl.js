(function(){
	'use strict'
    console.log('user controller');
    angular
        .module('meanBlank')
        .controller('LoginController', loginCtrl)

    function loginCtrl(userFactory, $location) {
        var self = this;

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
