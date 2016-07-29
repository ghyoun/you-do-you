(function(){
	'use strict'
	angular
		.module('youDoYou')
		.factory('goalFactory', factory);

	function factory($http){
		var factory = {}


		factory.getSession = function(callback){
			$http.get('/session')
				.then(function(returnData){
					callback(returnData)
				})
		}

		factory.getGoals = function(callback) {
			$http.get('/getGoals')
				.then(function(returnData){
					callback(returnData)
				})
		}

		factory.saveGoals = function(userTask, callback) {
			$http.post('/saveGoals', userTask)
				.then(function(returnData) {
					callback(returnData);
				});
		}
		return factory;
	}
})()
