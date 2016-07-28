(function(){
	'use strict'
    angular
        .module('youDoYou')
        .controller('FinancesController', function($scope, financeFactory) {

        $scope.monthly_income = 0;
        $scope.monthly_costs = 0;
        $scope.recurings = [];
        $scope.one_times = [];

        // Load from DB
        ///////////////
		$scope.saveMonthly = function() {
			financeFactory.getFinances(function(financeData) {
				console.log(financeData);
			})
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

        // Save/reset functions
        ///////////////////////
    });
})()
