(function(){
	'use strict'

	angular
		.module('meanBlank', ['ngRoute']) // inject ngMessage
		.config(config)
	function config($routeProvider, $locationProvider){
        $routeProvider

    		// home page
    		.when('/', {
    			templateUrl: 'views/home.html',
    			controller: 'HomeController'
    		})

    		// sign in page
    		.when('/login', {
    			templateUrl: 'views/login.html',
    			controller: 'LoginController'
    		})

    		// sign up page
    		.when('/signup', {
    			templateUrl: 'views/signup.html',
    			controller: 'SignupController'
    		})

    		// dashboard page
    		.when('/dash', {
    			templateUrl: 'views/dash.html',
    			controller: 'DashController'
    		})

			// finances page
			.when('/finances', {
				templateUrl: 'views/finances.html',
				controller: 'FinancesController'
			})

            // 404 page
    		.when('/404', {
    			templateUrl: 'views/404.html',
    			controller: '404Controller'
    		})

            // Other pages


            // Redirect all others to 404
    		.otherwise('/404');

    	$locationProvider.html5Mode(true);
	}
})();
