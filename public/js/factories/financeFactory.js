(function(){
	'use strict'
    console.log('finance factory');
	angular
		.module('youDoYou')
		.factory('financeFactory', factory)

	function factory($http){
		var factory = {}

		factory.getSession = function(callback){
			$http.get('/session')
				.then(function(returnData){
					callback(returnData)
				})
		}
		return factory;
	}
})()
