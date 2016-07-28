(function(){
	'use strict'
    angular
        .module('youDoYou')
        .controller('SidebarController', function ($scope, $location) {
            
            // get part of url path related to button names
            // (currently in position 1: "localhost:8080/dash"
            //                                           ^^^^...[1]
            var current_page = $location.path().split("/")[1] || "n/a";

            // generate proper jQuery selector string
            if (current_page === "n/a") {
                current_page = "";
            } else {
                current_page = "#" + current_page + "-btn";
            }
            
            // apply select class to correct button            
            $(current_page).addClass("sidebar-selected");

        });
})()
