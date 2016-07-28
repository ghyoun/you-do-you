angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

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

        // 404 page
		.when('/404', {
			templateUrl: 'views/404.html',
			controller: '404Controller'
		})

        // Other pages


        // Redirect all others to 404
		.otherwise('/404');

	$locationProvider.html5Mode(true);

}]);
