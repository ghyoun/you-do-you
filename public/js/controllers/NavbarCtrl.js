(function(){
	'use strict'
    angular
        .module('youDoYou')
        .controller('NavbarController', function(userFactory, $scope, $http) {

            $http.get("/session").then(function(res){
                $scope.userInfo = res.data;
            });

            $scope.logout = userFactory.logout(function(res){});

        });
})()
