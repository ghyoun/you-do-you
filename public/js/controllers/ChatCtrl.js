(function(){
	'use strict'
    angular
        .module('youDoYou')
        .controller('ChatController', chatCtrl);

    function chatCtrl(userFactory, $scope, $http, $location) {
		$scope.userInfo;
        $scope.reveal = false;
		$scope.chatReveal = false;
		$scope.chatUser = '';
		$scope.messageLog = [];
		$scope.message = '';

		$http.get("/session").then(function(res){
			$scope.userInfo = res.data;
			console.log($scope.userInfo);
		});

        $scope.revealUsers = function() {
            $scope.reveal = !$scope.reveal;
        }

		$scope.getUsers = function() {
			userFactory.getUsers(function(factoryData) {
				$scope.allUsers = factoryData.data.all_users;
				console.log($scope.allUsers);
			})
		}

		$scope.getUsers();

		$scope.openChat = function(user) {
			$scope.chatReveal = true;
			$scope.chatUser = user.firstName + ' ' +  user.lastName;
		}

		$scope.hideChat = function() {
			$scope.chatReveal = false;
		}

		$scope.sendMessage = function(message) {
			console.log(message);

			$scope.messageLog.push(message);
		}
    }
})()
