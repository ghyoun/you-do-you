(function(){
	'use strict'
    angular
        .module('youDoYou')
        .controller('DashController', function($scope, userFactory) {

            $scope.tasks = [];
            $scope.goals = [];
            $scope.one_times = [];
			$scope.monthly_income = 0;

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



			$scope.get_series = function() {
				var series = [];

				for (var i = 1; i <= 31; i++) {
					series.push($scope.monthly_income);
				}

				console.log($scope.monthly_income);

				for (var i = 0; i < $scope.one_times.length; i++) {
					var date = new Date($scope.one_times[i]["date"]);
					var day = date.getDate();
					for (var j = day; j < 31; j++) {
					series[j] -= $scope.one_times[i]["amount"];
					}
				}

				return series;
			};

			$scope.render_chart = function() {
				Highcharts.chart('burndown', {

							title: {
								text: "Burndown Chart"
							},

							xAxis: {
								categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
							},

							series: [{
								data: $scope.get_series()
							}]
				});
			}

        });
})()
