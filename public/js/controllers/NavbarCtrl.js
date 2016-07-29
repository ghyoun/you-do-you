(function(){
	'use strict'
    angular
        .module('youDoYou')
        .controller('NavbarController', function(userFactory, $scope, $http) {
			$scope.userInfo;

            $http.get("/session").then(function(res){
                $scope.userInfo = res.data;
				console.log($scope.userInfo);
            });



            $scope.logout = userFactory.logout(function(res){});

        });
})()
