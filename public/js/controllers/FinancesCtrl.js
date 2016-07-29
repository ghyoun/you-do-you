(function(){
	'use strict'
    angular
        .module('youDoYou')
        .controller('FinancesController', function($scope, financeFactory) {

        $scope.monthly_income = 0;
        $scope.recurings = [];
        $scope.one_times = [];

        // Load from DB

        ///////////////
		$scope.load = function() {
			financeFactory.getFinances(function(financeData) {
				$scope.monthly_income = financeData.data.finances.monthly_income;
                console.log($scope.monthly_income);
		        $scope.recurings = financeData.data.finances.recuring;
		        $scope.one_times = financeData.data.finances.one_time;
			})
		}

		$scope.load();
		console.log($scope.monthly_income);
		//Save to DB

		$scope.save = function() {
			financeFactory.saveFinances($scope.getUserFinance(), function(factoryData) {
				console.log(factoryData);
			})
		}

		$scope.getUserFinance = function() {
			var userFinance = {
				monthly_income: $scope.monthly_income,
				recuring: $scope.recurings,
				one_time: $scope.one_times
			}
			return userFinance;
		}
        // Recuring functions
        $scope.new_recuring = function() {
            var recuring = {
                title : "",
                amount : 0
            };
            $scope.recurings.push(recuring);
        };

        $scope.delete_recuring = function(i) {
            $scope.recurings.splice(i, 1);
        };

        $scope.get_recuring_total = function() {
            var total = 0;

            for (var i = 0; i < $scope.recurings.length; i++) {
                total += $scope.recurings[i]["amount"];
            }

            return total;
        };

        // One-time functions
        $scope.new_one_time = function() {
            var new_date = new Date();
            var text_date = (new_date.getMonth()+1) + "/" + new_date.getDate() + "/" + new_date.getFullYear();
            var one_time = {
                title : "",
                date : text_date,
                amount : 0
            };

            $scope.one_times.push(one_time);
        };

        $scope.delete_one_time = function(i) {
            $scope.one_times.splice(i, 1);
        };

        $scope.get_one_time_total = function() {
            var total = 0;

            for (var i = 0; i < $scope.one_times.length; i++) {
                total += $scope.one_times[i]["amount"];
            }

            return total;
        };

        // Remaining
        $scope.get_remaining = function() {
            var remaining = $scope.monthly_income;
            remaining -= $scope.get_recuring_total();
            remaining -= $scope.get_one_time_total();
            return remaining;
        }
        
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

        console.log($scope.get_series());

        // Save/reset functions
        ///////////////////////
    });
})()
