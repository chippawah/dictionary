var app = angular.module('dictionary');

app.controller('mainCtrl', function($scope, wordsArray, wordService, $location) {

	$scope.wordsArray = wordsArray;

	$scope.viewWord = function(wordId) {

		return $location.path('/word/' + wordId);

	};

	$scope.deleteWord = function(wordId) {

		wordService.deleteWord(wordId);

		wordService.getAllWords()

			.then(function(words) {

				$scope.wordsArray = words;

			})

	};
	
})