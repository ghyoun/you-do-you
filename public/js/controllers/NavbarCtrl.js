(function(){
	'use strict'
    angular
        .module('youDoYou')
        .controller('NavbarController', function(userFactory, $scope, $http, $location) {
			$scope.userInfo;

            $http.get("/session").then(function(res){
                $scope.userInfo = res.data;
				console.log($scope.userInfo);
            });



            $scope.logout = function(res){
				$location.url('/');
				userFactory.logout(function(factoryData) {

				})

			};

        });
})()
