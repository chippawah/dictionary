var app = angular.module('dictionary');

app.controller('navCtrl', function($scope, $location, wordService, $route) {

	$scope.goHome = function(){

		$location.path('/home');

	};

	$scope.addWord = function(wordObj) {

		wordService.addWord(wordObj)

			.then(function(words) {

				$scope.newWord = {

					word: '',
					definition: ''

				};

				$scope.showForm = !$scope.showForm;

				$route.reload();

			})

	}

})