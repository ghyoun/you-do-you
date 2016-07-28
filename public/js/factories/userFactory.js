(function(){
	'use strict'
    console.log('user factory');
	angular
		.module('meanBlank')
		.factory('userFactory', factory)

	function factory($http){
		var factory = {}

		factory.getSession = function(callback){
			$http.get('/session')
				.then(function(returnData){
					callback(returnData)
				})
		}
		factory.login = function(userInfo, callback){
			$http.post('/login', userInfo)
				.then(function(returnData){
					callback(returnData)
				})
		}
		factory.signup = function(userInfo, callback){
			$http.post('/signup', userInfo)
				.then(function(returnData){
					callback(returnData)
                    console.log(returnData);
				})
		}
		factory.logout = function(callback){
			$http.post('/logout')
				.then(function(returnData){
					callback(returnData)
				})
		}
		return factory
	}
})()