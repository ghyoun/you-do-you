(function(){
	'use strict'

	angular
		.module('youDoYou', ['ngRoute']) // inject ngMessage
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

            // tasks page
            .when('/tasks', {
                templateUrl: 'views/tasks.html',
                controller: 'TasksController'
            })

			// finances page
			.when('/finances', {
				templateUrl: 'views/finances.html',
				controller: 'FinancesController'
			})

			// goals page
			.when('/goals', {
				templateUrl: 'views/goals.html',
				controller: 'GoalsController'
			})

            // 404 page
    		.when('/404', {
    			templateUrl: 'views/404.html',
    			controller: '404Controller'
    		})

            // Redirect all others to 404
    		.otherwise('/404');

    	$locationProvider.html5Mode(true);
	}
})();
