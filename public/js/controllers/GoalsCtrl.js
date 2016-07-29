(function(){
	'use strict'
    angular
        .module('youDoYou')
        .controller('GoalsController', goalsCtrl)

    function goalsCtrl(userFactory, $location, $scope) {
        $scope.select_sidebar_icon = function(){
                $("#goals-btn").toggleClass("sidebar-selected");
        }

        $scope.select_sidebar_icon();

        $scope.goals = [];

        $scope.new_goal = function() {
            var new_date = new Date();
            var text_date = (new_date.getMonth()+1) + "/" + new_date.getDate() + "/" + new_date.getFullYear();
            var goal = {
                title : "",
                max_value : 100,
                current_value : 0,
                units : "",
                due_date : text_date,
                event_log : []
            };
            $scope.goals.push(goal);
        };

        $scope.delete_goal = function(i) {
            $scope.goals.splice(i, 1);
        };

        $scope.get_percent = function(goal) {
            return (goal.current_value / goal.max_value) * 100;
        }

        $scope.add_to_current = function(goal, val) {
            var sum = goal.current_value + val;
            var new_date = new Date();
            var text_date = (new_date.getMonth()+1) + "/" + new_date.getDate() + "/" + new_date.getFullYear();
            if (sum >= goal.max_value ) {
                goal.current_value = goal.max_value;
                goal.event_log.push(text_date + " : Tried to add " + String(val) + ", but maxed out.");
            } else if (sum <= 0) {
                goal.current_value = 0;
                goal.event_log.push(text_date + " : Tried to add " + String(val) + ", but zeroed out.");
            } else {
                goal.current_value = sum;
                goal.event_log.push(text_date + " : Added " + String(val) + ", for a new total of " + sum + ".");                
            }
        }

        $scope.complete = function(goal) {
            return goal.current_value >= goal.max_value;
        }

    }
})()
