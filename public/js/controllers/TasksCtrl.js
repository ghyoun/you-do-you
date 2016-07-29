(function(){
	'use strict'
    angular
        .module('youDoYou')
        .controller('TasksController', function($scope) {

            $scope.select_sidebar_icon = function(){
                $("#tasks-btn").toggleClass("sidebar-selected");
            }

            $scope.select_sidebar_icon();

            $scope.tasks = [];

            $scope.new_task = function() {
                var new_date = new Date();
                var text_date = (new_date.getMonth()+1) + "/" + new_date.getDate() + "/" + new_date.getFullYear();
                var task = {
                    description : "",
                    category : "",
                    priority : "",
                    due_date : text_date,
                    status : "Not Started"
                };
                $scope.tasks.push(task);
            };

            $scope.delete_task = function(i) {
                $scope.tasks.splice(i, 1);
            };


        })
})()
