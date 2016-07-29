(function(){
	'use strict'
	angular
		.module('youDoYou')
		.factory('financeFactory', factory);

	function factory($http){
		var factory = {}


		factory.getSession = function(callback){
			$http.get('/session')
				.then(function(returnData){
					callback(returnData)
				})
		}

		factory.getFinances = function(callback) {
			$http.get('/getFinances')
				.then(function(returnData){
					callback(returnData)
					console.log(returnData);
				})
		}

		factory.saveFinances = function(userFinance, callback) {
			$http.post('/saveFinances', userFinance)
				.then(function(returnData) {
					callback(returnData);
					console.log(returnData);
				});
		}
		return factory;
	}
})()
