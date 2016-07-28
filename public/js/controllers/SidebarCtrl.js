(function(){
	'use strict'
    angular
        .module('youDoYou')
        .controller('SidebarController', function($scope, $location) {

            $(".sidebar-btn").removeClass("sidebar-selected");

            $scope.select = function (btn) {
                $("#" + btn + "-btn").addClass("sidebar-selected");
            }

        });
})()
