(function(){
	'use strict'
    angular
        .module('youDoYou')
        .controller('TasksController', function($scope) {

            $scope.select_sidebar_icon = function(){
                $("#tasks-btn").toggleClass("sidebar-selected");
            }

            $scope.select_sidebar_icon();

        })
})()
