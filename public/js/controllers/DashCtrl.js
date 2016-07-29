(function(){
	'use strict'
    angular
        .module('youDoYou')
        .controller('DashController', function($scope, userFactory) {

            $scope.tasks = [];
            $scope.goals = [];
            $scope.finance_data = [];

			$scope.load = function() {
				userFactory.getUserInfo(function(factoryData) {
					console.log(factoryData);
					$scope.tasks = factoryData.data.info.tasks;
					$scope.goals = factoryData.data.info.goals;
					console.log($scope.tasks);
					console.log(factoryData);
				})
			}

			$scope.load();
        });
})()
