angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})

		// sign up page
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'
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
