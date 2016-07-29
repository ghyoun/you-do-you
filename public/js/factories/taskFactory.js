(function(){
	'use strict'
	angular
		.module('youDoYou')
		.factory('taskFactory', factory);

	function factory($http){
		var factory = {}


		factory.getSession = function(callback){
			$http.get('/session')
				.then(function(returnData){
					callback(returnData)
				})
		}

		factory.getTasks = function(callback) {
			$http.get('/getTasks')
				.then(function(returnData){
					callback(returnData)
					console.log(returnData);
				})
		}

		factory.saveTasks = function(userTask, callback) {
			$http.post('/saveTasks', userTask)
				.then(function(returnData) {
					callback(returnData);
					console.log(returnData);
				});
		}
		return factory;
	}
})()
